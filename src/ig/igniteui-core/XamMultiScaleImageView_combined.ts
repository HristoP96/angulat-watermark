/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, Delegate_$type, Type, markType, IList$1, IList$1_$type, typeCast, INotifyPropertyChanged, INotifyPropertyChanged_$type, Point, PropertyChangedEventArgs, EventArgs, Point_$type, Number_$type, Boolean_$type, String_$type, PointUtil } from "./type";
import { ISchedulableRender, ISchedulableRender_$type } from "./ISchedulableRender";
import { List$1 } from "./List$1";
import { Image } from "./Image";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "./dom";
import { RenderingContext } from "./RenderingContext";
import { Dictionary$2 } from "./Dictionary$2";
import { Tile } from "./Tile";
import { Rect } from "./Rect";
import { CanvasRenderScheduler } from "./CanvasRenderScheduler";
import { StackPool$1 } from "./StackPool$1";
import { FrameworkElement } from "./FrameworkElement";
import { WriteableBitmap } from "./WriteableBitmap";
import { Uri } from "./Uri";
import { CancellingMultiScaleImageEventArgs } from "./CancellingMultiScaleImageEventArgs";
import { DownloadingMultiScaleImageEventArgs } from "./DownloadingMultiScaleImageEventArgs";
import { IMapRenderDeferralHandler } from "./IMapRenderDeferralHandler";
import { CanvasViewRenderer } from "./CanvasViewRenderer";
import { truncate, intDivide, logBase } from "./number";
import { DependencyObject } from "./DependencyObject";
import { Control } from "./Control";
import { DependencyProperty } from "./DependencyProperty";
import { IEasingFunction, IEasingFunction_$type } from "./IEasingFunction";
import { LRUCache$2 } from "./LRUCache$2";
import { TilePositionComparer } from "./TilePositionComparer";
import { Convert } from "./Convert";
import { MathUtil } from "./MathUtil";
import { Debug } from "./Debug";
import { DependencyPropertyChangedEventArgs } from "./DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "./PropertyMetadata";
import { stringIsNullOrEmpty } from "./string";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class XamMultiScaleImageView extends Base implements ISchedulableRender {
	static $t: Type = markType(XamMultiScaleImageView, 'XamMultiScaleImageView', (<any>Base).$type, [ISchedulableRender_$type]);
	private _model: XamMultiScaleImage = null;
	protected get model(): XamMultiScaleImage {
		return this._model;
	}
	protected set model(value: XamMultiScaleImage) {
		this._model = value;
	}
	constructor(model: XamMultiScaleImage) {
		super();
		this.model = model;
		this.model.tileScheduler.register(this);
		this.displayedImages = new List$1<Image>((<any>Image).$type, 0);
		this.model.imagePool = ((() => {
			let $ret = new StackPool$1<Image>((<any>Image).$type);
			$ret.create = runOn(this, this.image_Create);
			$ret.activate = runOn(this, this.image_Activate);
			$ret.deactivate = runOn(this, this.image_Disactivate);
			$ret.destroy = runOn(this, this.image_Destroy);
			return $ret;
		})());
		for (let i: number = 0; i < 4; ++i) {
			this.downloadTile.add(null);
		}
	}
	private _displayedImages: List$1<Image> = null;
	private get displayedImages(): List$1<Image> {
		return this._displayedImages;
	}
	private set displayedImages(value: List$1<Image>) {
		this._displayedImages = value;
	}
	private image_Create(): Image {
		return new Image();
	}
	private image_Activate(image: Image): void {
		this.displayedImages.add(image);
	}
	private image_Disactivate(image: Image): void {
		this.displayedImages.remove(image);
	}
	private image_Destroy(image: Image): void {
	}
	setImagePosition(image: Image, il: number, it: number): void {
		image.canvasLeft = il;
		image.canvasTop = it;
	}
	cancelDownload(tile: Tile): void {
		for (let i: number = 0; i < this.downloadTile.count; ++i) {
			if (tile == this.downloadTile._inner[i]) {
				if (tile.image != null && tile.image.source != null) {
					let bmp: WriteableBitmap = <WriteableBitmap>tile.image.source;
					let img: HTMLImageElement = <HTMLImageElement>bmp.source;
					let uri: Uri = this.model.source.getTileUri(tile.z + 8, tile.x, tile.y);
					if (uri != null) {
						let args = ((() => {
							let $ret = new CancellingMultiScaleImageEventArgs();
							$ret.uri = uri.value;
							$ret.image = img;
							return $ret;
						})());
						this.model.onCancellingImage(args);
					}
					if (this._unbinder.containsKey(img)) {
						let toUnbind = this._unbinder.item(img);
						for (let j = 0; j < toUnbind.count; j++) {
							toUnbind._inner[j]();
						}
						toUnbind.clear();
						this._unbinder.removeItem(img);
					}
				}
				this.downloadTile._inner[i] = null;
				this.bumpDownload();
				return;
			}
		}
		for (let i1: number = 0; i1 < this.pendingTiles.count; ++i1) {
			if (this.pendingTiles._inner[i1] == tile) {
				this.pendingTiles.removeAt(i1);
				break;
			}
		}
	}
	download(tile: Tile): void {
		this.pendingTiles.add(tile);
		this.pendingTiles.sort2((a: Tile, b: Tile) => {
			let sa: number = 0;
			let sb: number = 0;
			if (a.ghostImage != null) {
				sa = (<WriteableBitmap>a.ghostImage.source).width;
			}
			if (b.ghostImage != null) {
				sb = (<WriteableBitmap>b.ghostImage.source).width;
			}
			if (sa < sb) {
				return -1;
			} else if (sa > sb) {
				return 1;
			}
			return 0;
		});
		this.bumpDownload();
	}
	private _unbinder: Dictionary$2<any, List$1<() => void>> = new Dictionary$2<any, List$1<() => void>>((<any>Base).$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	private bumpDownload(): void {
		let index_: number = -1;
		if (this.pendingTiles.count > 0) {
			for (let i: number = 0; i < this.downloadTile.count; ++i) {
				if (this.downloadTile._inner[i] == null) {
					index_ = i;
					break;
				}
			}
		}
		if (index_ >= 0) {
			this.downloadTile._inner[index_] = this.pendingTiles._inner[0];
			let bmp: WriteableBitmap = new WriteableBitmap(this.model.source.tileWidth, this.model.source.tileHeight);
			this.downloadTile._inner[index_].image.source = bmp;
			let ele_ = this.renderer.createElement("img");
			let img: HTMLImageElement = <HTMLImageElement>ele_.getNativeElement();
			bmp.source = img;
			let self_ = this;
			let toUnbind = new List$1<() => void>(Delegate_$type, 0);
			this._unbinder.addItem(img, toUnbind);
			toUnbind.add(ele_.listen("load", (e: NormalizedEvent) => this.imageComplete(e, index_)));
			toUnbind.add(ele_.listen("readystatechange", (e: NormalizedEvent) => this.imageComplete(e, index_)));
			toUnbind.add(ele_.listen("error", (e: NormalizedEvent) => this.imageError(e, index_)));
			this.pendingTiles.removeAt(0);
			let uri: Uri = this.model.source.getTileUri(this.downloadTile._inner[index_].z + 8, this.downloadTile._inner[index_].x, this.downloadTile._inner[index_].y);
			if (uri == null) {
				return;
			}
			let uriValue: string = uri.value;
			let args = ((() => {
				let $ret = new DownloadingMultiScaleImageEventArgs();
				$ret.uri = uriValue;
				$ret.image = img;
				return $ret;
			})());
			this.model.onDownloadingImage(args);
			uriValue = args.uri;
			if (uriValue != null) {
				img.src = uriValue;
			}
		}
	}
	private imageComplete(e: NormalizedEvent, index: number): void {
		let e_ = e.originalEvent;
		let img_ = <HTMLImageElement>(e_.target);
		let complete = <boolean>(img_.complete || ((<any>img_).readyState == 'complete' && e_.type == 'readystatechange'));
		if (complete) {
			this.downloadCompleted(e, index);
		}
	}
	private imageError(e: NormalizedEvent, index: number): void {
		this.downloadError(e, index);
	}
	private pendingTiles: List$1<Tile> = new List$1<Tile>((<any>Tile).$type, 0);
	private readonly downloadTile: List$1<Tile> = new List$1<Tile>((<any>Tile).$type, 0);
	private downloadError(e: NormalizedEvent, index: number): void {
		let downloadTile: Tile = this.downloadTile._inner[index];
		this.downloadTile._inner[index] = null;
		if (downloadTile != null && downloadTile.image != null && downloadTile.image.source != null) {
			let e_ = e.originalEvent;
			let img = <HTMLImageElement>(e_.target);
			if (this._unbinder.containsKey(img)) {
				let toUnbind = this._unbinder.item(img);
				for (let i = 0; i < toUnbind.count; i++) {
					toUnbind._inner[i]();
				}
				toUnbind.clear();
				this._unbinder.removeItem(img);
			}
		}
		this.bumpDownload();
		this.makeDirty();
	}
	private downloadCompleted(e: NormalizedEvent, index: number): void {
		let downloadTile: Tile = this.downloadTile._inner[index];
		let isInvalid: boolean = true;
		if (downloadTile != null && downloadTile.image != null && downloadTile.image.source != null) {
			isInvalid = false;
			let ele_ = (<HTMLImageElement>(<WriteableBitmap>downloadTile.image.source).source);
			if (!ele_.complete) {
				isInvalid = true;
			}
			if (<boolean>(ele_.width == 0 && ele_.height == 0)) {
				isInvalid = true;
			}
		}
		this.downloadTile._inner[index] = null;
		if (isInvalid) {
			this.bumpDownload();
			this.makeDirty();
			return;
		}
		let e_ = e.originalEvent;
		let img = <HTMLImageElement>(e_.target);
		if (this._unbinder.containsKey(img)) {
			let toUnbind = this._unbinder.item(img);
			for (let i = 0; i < toUnbind.count; i++) {
				toUnbind._inner[i]();
			}
			toUnbind.clear();
			this._unbinder.removeItem(img);
		}
		this.model.cacheBitmap(downloadTile, <WriteableBitmap>downloadTile.image.source);
		if (downloadTile.image != null) {
			this.model.startFade(downloadTile);
		}
		this.bumpDownload();
		this.makeDirty();
	}
	getGhostImage(size: number, donor: WriteableBitmap, left: number, top: number): WriteableBitmap {
		let bitmap = new WriteableBitmap(size, size);
		bitmap.source = donor.source;
		if (!donor.subDimensions.isEmpty) {
			left += <number>truncate(Math.round(donor.subDimensions.left));
			top += <number>truncate(Math.round(donor.subDimensions.top));
		}
		bitmap.subDimensions = new Rect(0, left, top, size, size);
		return bitmap;
	}
	sendToBackground(image: Image): void {
		image.canvasZIndex = 0;
	}
	sendToForeground(image: Image): void {
		image.canvasZIndex = 1;
	}
	ready(): boolean {
		return true;
	}
	defer(work: (arg1: boolean) => void): void {
		if (this.model.deferralHandler != null) {
			this.model.deferralHandler.deferredRefresh();
		} else {
			if (this.container != null) {
				this.container.setTimeout(<() => void>work, 0);
			} else {
				window.setTimeout(<() => void>work, 0);
			}
		}
	}
	private static readonly emptyInterval: number = -1;
	private springInterval: number = XamMultiScaleImageView.emptyInterval;
	private fadeInterval: number = XamMultiScaleImageView.emptyInterval;
	startSpringTimer(): void {
		if (this.springInterval == XamMultiScaleImageView.emptyInterval) {
			this.springInterval = window.setInterval(runOn(this.model, this.model.springTimer_Tick), 50);
		}
	}
	stopSpringTimer(): void {
		if (this.springInterval != XamMultiScaleImageView.emptyInterval) {
			window.clearInterval(this.springInterval);
			this.springInterval = XamMultiScaleImageView.emptyInterval;
		}
	}
	startFadeTimer(): void {
		if (this.fadeInterval == XamMultiScaleImageView.emptyInterval) {
			this.fadeInterval = window.setInterval(runOn(this.model, this.model.fadeTimer_Tick), 50);
		}
	}
	stopFadeTimer(): void {
		if (this.fadeInterval != XamMultiScaleImageView.emptyInterval) {
			window.clearInterval(this.fadeInterval);
			this.fadeInterval = XamMultiScaleImageView.emptyInterval;
		}
	}
	disableSprings(): void {
		if (this.springInterval != XamMultiScaleImageView.emptyInterval) {
			this.stopFadeTimer();
			this.model.onSpringsDisabled();
		}
	}
	private _container: DomRenderer = null;
	protected get container(): DomRenderer {
		return this._container;
	}
	protected set container(value: DomRenderer) {
		this._container = value;
	}
	private _mainCanvas: DomWrapper = null;
	protected get mainCanvas(): DomWrapper {
		return this._mainCanvas;
	}
	protected set mainCanvas(value: DomWrapper) {
		this._mainCanvas = value;
	}
	private _mainContext: RenderingContext = null;
	protected get mainContext(): RenderingContext {
		return this._mainContext;
	}
	protected set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	onContainerProvided(container: any): void {
		this.container = <DomRenderer><any>container;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		this.mainCanvas = this.container.createElement("canvas");
		this.mainCanvas.setStyleProperty("position", "absolute");
		this.mainCanvas.setStyleProperty("top", "0px");
		this.mainCanvas.setStyleProperty("left", "0px");
		this.container.append(this.mainCanvas);
		this.mainContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.mainCanvas));
		this.onContainerResized(this.container.rootWrapper.width(), this.container.rootWrapper.height());
	}
	private onContainerResized(width: number, height: number): void {
		this.mainCanvas.setAttribute("width", (<number>truncate((width * this.model.pixelRatio))).toString());
		this.mainCanvas.setAttribute("height", (<number>truncate((height * this.model.pixelRatio))).toString());
		this.mainCanvas.setStyleProperty("width", width.toString() + "px");
		this.mainCanvas.setStyleProperty("height", height.toString() + "px");
		this.model.canvasSize = new Rect(0, 0, 0, width, height);
		this.model.refresh();
	}
	refreshCompleted(): void {
		this.makeDirty();
	}
	get index(): number {
		return 0;
	}
	postRender(): void {
	}
	private _isDirty: boolean = false;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	makeDirty(): void {
		if (this.mainContext == null) {
			return;
		}
		if (!this.isDirty) {
			this.isDirty = true;
			this.model.tileScheduler.schedule();
		}
	}
	undirty(clearRect: boolean): void {
		this.isDirty = false;
		this.render();
	}
	protected _previousRender: Rect = Rect.empty;
	private render(): void {
		if (this.mainContext == null) {
			return;
		}
		if (this.mainContext.shouldRender && this.model.pixelRatio != 1) {
			this.mainContext.save();
			this.mainContext.scale(this.model.pixelRatio, this.model.pixelRatio);
		}
		if (!this._previousRender.isEmpty) {
			this.mainContext.clearRectangle(this._previousRender.left, this._previousRender.top, this._previousRender.width, this._previousRender.height);
		}
		this._previousRender = this.model.canvasSize;
		for (let i: number = 0; i < this.displayedImages.count; i++) {
			let image = this.displayedImages._inner[i];
			if (image.canvasZIndex == 0) {
				this.renderImage(image);
			}
		}
		for (let i1: number = 0; i1 < this.displayedImages.count; i1++) {
			let image1 = this.displayedImages._inner[i1];
			if (image1.canvasZIndex == 1) {
				this.renderImage(image1);
			}
		}
		if (this.mainContext.shouldRender && this.model.pixelRatio != 1) {
			this.mainContext.restore();
		}
		this.model.notifyReady();
		this.model.onImagesChanged();
	}
	imagesReady(): boolean {
		let ready = true;
		for (let i = 0; i < this.downloadTile.count; i++) {
			if (this.downloadTile._inner[i] != null) {
				ready = false;
			}
		}
		return ready;
	}
	private renderImage(image: Image): void {
		if (this.mainContext == null) {
			return;
		}
		let bitmap = <WriteableBitmap>image.source;
		let opacity = image._opacity;
		if (bitmap == null || bitmap.source == null) {
			return;
		}
		if (this.isInvalid(bitmap.source)) {
			return;
		}
		if (!bitmap.subDimensions.isEmpty) {
			if (bitmap.subDimensions.width < 1 || bitmap.subDimensions.height < 1) {
				return;
			}
			this.mainContext.drawImage1(bitmap.source, opacity, bitmap.subDimensions.left, bitmap.subDimensions.top, bitmap.subDimensions.width, bitmap.subDimensions.height, Math.round(image.canvasLeft + this.model.canvasSize.left), Math.round(image.canvasTop + this.model.canvasSize.top), image.width, image.height);
		} else {
			this.mainContext.drawImage(bitmap.source, opacity, Math.round(image.canvasLeft + this.model.canvasSize.left), Math.round(image.canvasTop + this.model.canvasSize.top), image.width, image.height);
		}
	}
	private isInvalid(image: any): boolean {
		let img_: HTMLImageElement = <HTMLImageElement>image;
		if (!img_.complete) {
			return true;
		}
		if (<boolean>(img_.width == 0 && img_.height == 0)) {
			return true;
		}
		return false;
	}
	fadingChanged(): void {
		this.makeDirty();
	}
	onContextProvided(context: RenderingContext): void {
		this.mainContext = context;
		this.makeDirty();
	}
	private _renderer: DomRenderer = null;
	private get renderer(): DomRenderer {
		return this._renderer;
	}
	private set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	onRendererProvided(renderer: DomRenderer): void {
		this.renderer = renderer;
	}
	onViewportProvided(mapViewport: Rect): void {
		this.model.canvasSize = mapViewport;
		this.model.refresh();
	}
	preRender(): void {
	}
	isValid(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export abstract class XamMultiScaleTileSource extends DependencyObject {
	static $t: Type = markType(XamMultiScaleTileSource, 'XamMultiScaleTileSource', (<any>DependencyObject).$type);
	constructor(imageWidth: number, imageHeight: number, tileWidth: number, tileHeight: number, tileOverlap: number) {
		super();
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
		this.tileWidth = tileWidth;
		this.tileHeight = tileHeight;
		this.tileOverlap = tileOverlap;
	}
	private _imageWidth: number = 0;
	get imageWidth(): number {
		return this._imageWidth;
	}
	set imageWidth(value: number) {
		this._imageWidth = value;
		this.invalidateTileLayer(0, 0, 0, 0);
	}
	private _imageHeight: number = 0;
	get imageHeight(): number {
		return this._imageHeight;
	}
	set imageHeight(value: number) {
		this._imageHeight = value;
		this.invalidateTileLayer(0, 0, 0, 0);
	}
	private _tileWidth: number = 0;
	get tileWidth(): number {
		return this._tileWidth;
	}
	set tileWidth(value: number) {
		this._tileWidth = value;
	}
	private _tileHeight: number = 0;
	get tileHeight(): number {
		return this._tileHeight;
	}
	set tileHeight(value: number) {
		this._tileHeight = value;
	}
	private _tileOverlap: number = 0;
	get tileOverlap(): number {
		return this._tileOverlap;
	}
	set tileOverlap(value: number) {
		this._tileOverlap = value;
	}
	multiScaleImage: XamMultiScaleImage = null;
	getTileUri(tileLevel: number, tilePositionX: number, tilePositionY: number): Uri {
		let tileImageLayerSources = new List$1<any>((<any>Base).$type, 0);
		this.getTileLayers(tileLevel, tilePositionX, tilePositionY, tileImageLayerSources);
		let uri: Uri = null;
		if (tileImageLayerSources.count > 0) {
			uri = typeCast<Uri>((<any>Uri).$type, tileImageLayerSources._inner[0]);
		}
		return uri;
	}
	protected abstract getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void;
	protected invalidateTileLayer(level: number, tilePositionX: number, tilePositionY: number, tileLayer: number): void {
		if (this.multiScaleImage != null) {
			this.multiScaleImage.invalidateTileLayer(level, tilePositionX, tilePositionY, tileLayer);
		}
	}
}

/**
 * @hidden 
 */
export class XamMultiScaleImage extends Control implements INotifyPropertyChanged {
	static $t: Type = markType(XamMultiScaleImage, 'XamMultiScaleImage', (<any>Control).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.canvasSize = Rect.empty;
		this.tileScheduler = new CanvasRenderScheduler();
		this.view = new XamMultiScaleImageView(this);
		this.defaultStyleKey = (<any>XamMultiScaleImage).$type;
		this.actualViewportOrigin = this.viewportOrigin;
		this.actualViewportWidth = this.viewportWidth;
	}
	imagePool: StackPool$1<Image> = null;
	private _view: XamMultiScaleImageView = null;
	get view(): XamMultiScaleImageView {
		return this._view;
	}
	set view(value: XamMultiScaleImageView) {
		this._view = value;
	}
	private _deferralHandler: IMapRenderDeferralHandler = null;
	get deferralHandler(): IMapRenderDeferralHandler {
		return this._deferralHandler;
	}
	set deferralHandler(value: IMapRenderDeferralHandler) {
		if (this._deferralHandler != null) {
			this._deferralHandler.unRegister(this);
		}
		this._deferralHandler = value;
		if (this._deferralHandler != null) {
			this._deferralHandler.register(this, runOn(this, this.refreshInternal));
		}
	}
	get source(): XamMultiScaleTileSource {
		return <XamMultiScaleTileSource>this.getValue(XamMultiScaleImage.sourceProperty);
	}
	set source(value: XamMultiScaleTileSource) {
		this.setValue(XamMultiScaleImage.sourceProperty, value);
	}
	static readonly sourcePropertyName: string = "Source";
	static readonly sourceProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.sourcePropertyName, (<any>XamMultiScaleTileSource).$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.sourcePropertyName, typeCast<XamMultiScaleTileSource>((<any>XamMultiScaleTileSource).$type, e.oldValue), typeCast<XamMultiScaleTileSource>((<any>XamMultiScaleTileSource).$type, e.newValue))));
	get viewportOrigin(): Point {
		return <Point>this.getValue(XamMultiScaleImage.viewportOriginProperty);
	}
	set viewportOrigin(value: Point) {
		this.setValue(XamMultiScaleImage.viewportOriginProperty, value);
	}
	static readonly viewportOriginPropertyName: string = "ViewportOrigin";
	static readonly viewportOriginProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.viewportOriginPropertyName, Point_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: 0, y: 0 }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.viewportOriginPropertyName, <Point>e.oldValue, <Point>e.newValue)));
	private _actualViewportOrigin: Point = null;
	get actualViewportOrigin(): Point {
		return this._actualViewportOrigin;
	}
	set actualViewportOrigin(value: Point) {
		this._actualViewportOrigin = value;
	}
	get viewportWidth(): number {
		return <number>this.getValue(XamMultiScaleImage.viewportWidthProperty);
	}
	set viewportWidth(value: number) {
		this.setValue(XamMultiScaleImage.viewportWidthProperty, value);
	}
	static readonly viewportWidthPropertyName: string = "ViewportWidth";
	static readonly viewportWidthProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.viewportWidthPropertyName, Number_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.viewportWidthPropertyName, <number>e.oldValue, <number>e.newValue)));
	private _actualViewportWidth: number = 0;
	get actualViewportWidth(): number {
		return this._actualViewportWidth;
	}
	set actualViewportWidth(value: number) {
		this._actualViewportWidth = value;
	}
	get useSprings(): boolean {
		return <boolean>this.getValue(XamMultiScaleImage.useSpringsProperty);
	}
	set useSprings(value: boolean) {
		this.setValue(XamMultiScaleImage.useSpringsProperty, value);
	}
	static readonly useSpringsPropertyName: string = "UseSprings";
	static readonly useSpringsProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.useSpringsPropertyName, Boolean_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.useSpringsPropertyName, <boolean>e.oldValue, <boolean>e.newValue)));
	get springsEasingFunction(): IEasingFunction {
		return <IEasingFunction><any>this.getValue(XamMultiScaleImage.springsEasingFunctionProperty);
	}
	set springsEasingFunction(value: IEasingFunction) {
		this.setValue(XamMultiScaleImage.springsEasingFunctionProperty, value);
	}
	static readonly springsEasingFunctionPropertyName: string = "SpringsEasingFunction";
	static readonly springsEasingFunctionProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.springsEasingFunctionPropertyName, IEasingFunction_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.springsEasingFunctionPropertyName, <IEasingFunction><any>e.oldValue, <IEasingFunction><any>e.newValue)));
	get referer(): string {
		return <string>this.getValue(XamMultiScaleImage.refererProperty);
	}
	set referer(value: string) {
		this.setValue(XamMultiScaleImage.refererProperty, value);
	}
	static readonly refererPropertyName: string = "Referer";
	static readonly refererProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.refererPropertyName, String_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.refererPropertyName, <string>e.oldValue, <string>e.newValue)));
	getResolvedReferer(): string {
		if (!stringIsNullOrEmpty(this.referer)) {
			return this.referer;
		}
		return null;
	}
	get userAgent(): string {
		return <string>this.getValue(XamMultiScaleImage.userAgentProperty);
	}
	set userAgent(value: string) {
		this.setValue(XamMultiScaleImage.userAgentProperty, value);
	}
	static readonly userAgentPropertyName: string = "UserAgent";
	static readonly userAgentProperty: DependencyProperty = DependencyProperty.register(XamMultiScaleImage.userAgentPropertyName, String_$type, (<any>XamMultiScaleImage).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamMultiScaleImage>sender).onPropertyChanged(XamMultiScaleImage.userAgentPropertyName, <string>e.oldValue, <string>e.newValue)));
	getResolvedUserAgent(): string {
		if (!stringIsNullOrEmpty(this.userAgent)) {
			return this.userAgent;
		}
		return null;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		let ea = new PropertyChangedEventArgs(propertyName);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, ea);
		}
		switch (propertyName) {
			case XamMultiScaleImage.sourcePropertyName:
			if (this.source != null) {
				this.source.multiScaleImage = this;
			}
			this.purgeCache();
			this.resetTiles();
			this.refresh();
			break;

			case XamMultiScaleImage.viewportOriginPropertyName:
			this.spring();
			break;

			case XamMultiScaleImage.viewportWidthPropertyName:
			this.spring();
			break;

			case XamMultiScaleImage.useSpringsPropertyName:
			if (!this.useSprings) {
				this.view.disableSprings();
			}
			break;

		}

	}
	private _levelOffset: number = 0;
	private get levelOffset(): number {
		return this._levelOffset;
	}
	private set levelOffset(value: number) {
		this._levelOffset = value;
	}
	private _maxLevel: number = 0;
	private get maxLevel(): number {
		return this._maxLevel;
	}
	private set maxLevel(value: number) {
		this._maxLevel = value;
	}
	private resetTiles(): void {
		this.trashActiveTiles();
		if (this.source != null) {
			this.levelOffset = Convert.toInt32(logBase(this.source.tileWidth, 2));
			this.maxLevel = Convert.toInt32(logBase(this.source.imageWidth, 2));
		}
	}
	invalidateTileLayer(level: number, tilePositionX: number, tilePositionY: number, tileLayer: number): void {
		this.purgeCache();
		this.resetTiles();
		this.refresh();
	}
	private springStart: Date = new Date();
	private anchorViewportOrigin: Point = null;
	private anchorViewportWidth: number = 0;
	private spring(): void {
		if (this.useSprings) {
			this.springStart = dateNow();
			this.anchorViewportOrigin = this.actualViewportOrigin;
			this.anchorViewportWidth = this.actualViewportWidth;
			this.view.startSpringTimer();
		} else {
			this.actualViewportOrigin = this.viewportOrigin;
			this.actualViewportWidth = this.viewportWidth;
			this.refresh();
		}
	}
	springTimer_Tick(): void {
		let duration: number = 2;
		let totalMilliseconds = dateNow().getTime() - this.springStart.getTime();
		let totalSeconds: number = totalMilliseconds / 1000;
		let p: number = MathUtil.clamp((totalSeconds) / duration, 0, 1);
		let p1: number = this.springsEasingFunction != null ? this.springsEasingFunction.ease(p) : p;
		let p0: number = 1 - p1;
		this.actualViewportWidth = this.anchorViewportWidth * p0 + this.viewportWidth * p1;
		this.actualViewportOrigin = <Point>{ $type: Point_$type, x: this.anchorViewportOrigin.x * p0 + this.viewportOrigin.x * p1, y: this.anchorViewportOrigin.y * p0 + this.viewportOrigin.y * p1 };
		if (p >= 1) {
			this.view.stopSpringTimer();
		} else {
		}
		this.refresh();
	}
	private activeTiles: List$1<Tile> = new List$1<Tile>((<any>Tile).$type, 0);
	private activeTileIndex(x: number, y: number, z: number): number {
		for (let i: number = 0; i < this.activeTiles.count; ++i) {
			if (this.activeTiles._inner[i].x == x && this.activeTiles._inner[i].y == y && this.activeTiles._inner[i].z == z) {
				return i;
			}
		}
		return -1;
	}
	refreshInternal(animate: boolean): void {
		this.refreshDeferred = false;
		this._lastReady = false;
		if (this.source == null || !this.view.ready() || this.canvasSize.width == 0 || this.canvasSize.height == 0) {
			return;
		}
		let horizontalCount: number = <number>truncate(Math.ceil(this.canvasSize.width / this.source.tileWidth));
		let zz: number = <number>truncate(Math.max(1, Math.floor(-logBase(this.actualViewportWidth / horizontalCount, 2))));
		if (zz >= this.maxLevel - 8) {
			zz = (this.maxLevel - 8) - 1;
		}
		let maxTiles = <number>truncate(Math.round(Math.pow(2, zz)));
		let width: number = this.actualViewportWidth;
		let height: number = this.canvasSize.height * width / this.canvasSize.width;
		let wx: number = this.source.imageWidth / Math.pow(2, zz);
		let wy: number = this.source.imageHeight / Math.pow(2, zz);
		let u0: number = Math.max(<number>truncate(Math.floor((this.actualViewportOrigin.x * this.source.imageWidth) / wx)), 0);
		let u1: number = Math.min(<number>truncate(Math.ceil(((this.actualViewportOrigin.x + width) * this.source.imageWidth) / wx)), maxTiles);
		let v0: number = Math.max(<number>truncate(Math.floor((this.actualViewportOrigin.y * this.source.imageHeight) / wy)), 0);
		let v1: number = Math.min(<number>truncate(Math.ceil(((this.actualViewportOrigin.y + height) * this.source.imageWidth) / wy)), maxTiles);
		let ox: number = ((u0 * wx) - (this.actualViewportOrigin.x * this.source.imageWidth)) / wx;
		let oy: number = ((v0 * wy) - (this.actualViewportOrigin.y * this.source.imageHeight)) / wy;
		let s: number = (width * this.source.imageWidth / wx) * (this.source.tileWidth / this.canvasSize.width);
		let newTiles: List$1<Tile> = new List$1<Tile>((<any>Tile).$type, 0);
		for (let u: number = u0; u < u1; ++u) {
			for (let v: number = v0; v < v1; ++v) {
				let index: number = this.activeTileIndex(u, v, zz);
				if (index >= 0) {
					newTiles.add(this.activeTiles._inner[index]);
					this.activeTiles.removeAt(index);
				} else {
					newTiles.add(((() => {
						let $ret = new Tile();
						$ret.x = u;
						$ret.y = v;
						$ret.z = zz;
						return $ret;
					})()));
				}
			}
		}
		this.imagePool.deferDisactivate = true;
		this.trashActiveTiles();
		this.activeTiles = newTiles;
		for (let i: number = 0; i < this.activeTiles.count; ++i) {
			if (this.activeTiles._inner[i].image == null) {
				Debug.assert(this.activeTiles._inner[i].ghostImage == null);
				this.activeTiles._inner[i].image = this.imagePool.pop();
				this.activeTiles._inner[i].image._opacity = 1;
				this.view.sendToBackground(this.activeTiles._inner[i].image);
				let bitmap: WriteableBitmap = this.getCachedBitmap(this.activeTiles._inner[i]);
				if (bitmap != null) {
					this.activeTiles._inner[i].image.source = bitmap;
				} else {
					let donor: WriteableBitmap = null;
					let tile: Tile = ((() => {
						let $ret = new Tile();
						$ret.x = this.activeTiles._inner[i].x;
						$ret.y = this.activeTiles._inner[i].y;
						$ret.z = this.activeTiles._inner[i].z;
						return $ret;
					})());
					while (tile.z >= 0 && donor == null) {
						tile.x = tile.x >> 1;
						tile.y = tile.y >> 1;
						tile.z = tile.z - 1;
						donor = this.getCachedBitmap(tile);
					}
					if (donor != null) {
						let q: number = <number>truncate(Math.pow(2, this.activeTiles._inner[i].z - tile.z));
						let size: number = intDivide(256, q);
						let left: number = size * (this.activeTiles._inner[i].x % q);
						let top: number = size * (this.activeTiles._inner[i].y % q);
						this.activeTiles._inner[i].ghostImage = this.imagePool.pop();
						this.activeTiles._inner[i].ghostImage._opacity = 1;
						this.view.sendToForeground(this.activeTiles._inner[i].ghostImage);
						bitmap = this.view.getGhostImage(size, donor, left, top);
						this.activeTiles._inner[i].ghostImage.source = bitmap;
					}
					this.view.download(this.activeTiles._inner[i]);
				}
			}
			let iw: number = this.source.tileWidth / s;
			let ih: number = this.source.tileHeight / s;
			let il: number = (this.activeTiles._inner[i].x - u0 + ox) * iw;
			let it: number = (this.activeTiles._inner[i].y - v0 + oy) * ih;
			this.activeTiles._inner[i].image.width = iw + 0.5;
			this.activeTiles._inner[i].image.height = ih + 0.5;
			this.view.setImagePosition(this.activeTiles._inner[i].image, il, it);
			if (this.activeTiles._inner[i].ghostImage != null) {
				this.activeTiles._inner[i].ghostImage.width = iw + 0.5;
				this.activeTiles._inner[i].ghostImage.height = ih + 0.5;
				this.view.setImagePosition(this.activeTiles._inner[i].ghostImage, il, it);
			}
		}
		this.imagePool.deferDisactivate = false;
		this.view.refreshCompleted();
	}
	private refreshDeferred: boolean = false;
	refresh(): void {
		if (this.source == null || !this.view.ready() || this.canvasSize.width == 0 || this.canvasSize.height == 0) {
			return;
		}
		if (this.refreshDeferred) {
			return;
		}
		this.refreshDeferred = true;
		this.view.defer(runOn(this, this.refreshInternal));
	}
	private trashActiveTiles(): void {
		for (let i: number = 0; i < this.activeTiles.count; ++i) {
			this.view.cancelDownload(this.activeTiles._inner[i]);
			this.cancelFade(this.activeTiles._inner[i]);
			if (this.activeTiles._inner[i].image != null) {
				this.imagePool.push(this.activeTiles._inner[i].image);
				this.activeTiles._inner[i].image.source = null;
				this.activeTiles._inner[i].image = null;
			}
			Debug.assert(this.activeTiles._inner[i].image == null);
			Debug.assert(this.activeTiles._inner[i].ghostImage == null);
		}
	}
	private purgeCache(): void {
		this.cache.clear();
	}
	private getCachedBitmap(tile: Tile): WriteableBitmap {
		return this.cache.item(tile);
	}
	cacheBitmap(tile: Tile, bitmap: WriteableBitmap): void {
		this.cache.item(tile, bitmap);
	}
	private _cache: LRUCache$2<Tile, WriteableBitmap> = new LRUCache$2<Tile, WriteableBitmap>((<any>Tile).$type, (<any>WriteableBitmap).$type, 1, 0x7FFFFFFF, new TilePositionComparer());
	private get cache(): LRUCache$2<Tile, WriteableBitmap> {
		return this._cache;
	}
	private set cache(value: LRUCache$2<Tile, WriteableBitmap>) {
		this._cache = value;
	}
	private readonly fadingTiles: List$1<Tile> = new List$1<Tile>((<any>Tile).$type, 0);
	isDuringFade(): boolean {
		return this.fadingTiles.count != 0;
	}
	imageTilesReady: (sender: any, e: EventArgs) => void = null;
	private _lastReady: boolean = false;
	notifyReady(): void {
		let ready = true;
		if (this.isDuringFade()) {
			ready = false;
		}
		if (!this.view.imagesReady()) {
			ready = false;
		}
		if (ready && !this._lastReady) {
			if (this.imageTilesReady != null) {
				this.imageTilesReady(this, new EventArgs());
			}
		}
		this._lastReady = ready;
	}
	startFade(tile: Tile): void {
		Debug.assert(tile.image != null);
		if (tile.ghostImage != null) {
			tile.fadeStart = dateNow();
			this.fadingTiles.add(tile);
			this.view.startFadeTimer();
		} else {
			this.notifyReady();
		}
	}
	private cancelFade(tile: Tile): void {
		if (tile.ghostImage != null) {
			this.imagePool.push(tile.ghostImage);
			tile.ghostImage.source = null;
			tile.ghostImage = null;
			for (let i: number = 0; i < this.fadingTiles.count; ++i) {
				if (this.fadingTiles._inner[i] == tile) {
					this.fadingTiles.removeAt(i);
					break;
				}
			}
			if (this.fadingTiles.count == 0) {
				this.view.stopFadeTimer();
			}
			Debug.assert(tile.ghostImage == null);
		}
	}
	fadeTimer_Tick(): void {
		let now: Date = dateNow();
		let fadeDuration: number = 0.5;
		for (let i: number = 0; i < this.fadingTiles.count; ) {
			let totalMilliseconds = now.getTime() - this.fadingTiles._inner[i].fadeStart.getTime();
			let totalSeconds: number = totalMilliseconds / 1000;
			let p: number = (totalSeconds) / fadeDuration;
			p = MathUtil.clamp(p, 0, 1);
			this.fadingTiles._inner[i].ghostImage._opacity = 1 - p;
			if (p >= 1) {
				this.imagePool.push(this.fadingTiles._inner[i].ghostImage);
				this.fadingTiles._inner[i].ghostImage.source = null;
				this.fadingTiles._inner[i].ghostImage = null;
				this.fadingTiles.removeAt(i);
			} else {
				++i;
			}
			this.view.fadingChanged();
		}
		if (this.fadingTiles.count == 0) {
			this.view.stopFadeTimer();
		}
	}
	private _canvasSize: Rect = null;
	get canvasSize(): Rect {
		return this._canvasSize;
	}
	set canvasSize(value: Rect) {
		this._canvasSize = value;
	}
	onSpringsDisabled(): void {
		this.actualViewportWidth = this.viewportWidth;
		this.actualViewportOrigin = this.viewportOrigin;
		this.refresh();
	}
	provideContainer(container: any): void {
		let renderer = <DomRenderer><any>container;
		this.tileScheduler.provideRenderer(renderer);
		this.view.onContainerProvided(container);
	}
	provideContext(context: RenderingContext): void {
		this.view.onContextProvided(context);
	}
	provideRenderer(renderer: DomRenderer): void {
		this.view.onRendererProvided(renderer);
	}
	provideViewport(mapViewport: Rect): void {
		this.view.onViewportProvided(mapViewport);
	}
	private _tileScheduler: CanvasRenderScheduler = null;
	get tileScheduler(): CanvasRenderScheduler {
		return this._tileScheduler;
	}
	set tileScheduler(value: CanvasRenderScheduler) {
		this._tileScheduler = value;
	}
	onImagesChanged(): void {
		if (this.imagesChanged != null) {
			this.imagesChanged(this, new EventArgs());
		}
	}
	imagesChanged: (sender: any, e: EventArgs) => void = null;
	deferCancelled(): void {
		this.refreshDeferred = false;
	}
	downloadingImage: (sender: any, args: DownloadingMultiScaleImageEventArgs) => void = null;
	cancellingImage: (sender: any, args: CancellingMultiScaleImageEventArgs) => void = null;
	onDownloadingImage(args: DownloadingMultiScaleImageEventArgs): void {
		if (this.downloadingImage != null) {
			this.downloadingImage(this, args);
		}
	}
	onCancellingImage(args: CancellingMultiScaleImageEventArgs): void {
		if (this.cancellingImage != null) {
			this.cancellingImage(this, args);
		}
	}
	private _pixelRatio: number = 1;
	get pixelRatio(): number {
		return this._pixelRatio;
	}
	pixelScalingRatioChanged(pixelRatio: number): void {
		this._pixelRatio = pixelRatio;
	}
	get cacheSize(): number {
		return this.cache.maxItems;
	}
	set cacheSize(value: number) {
		let changed: boolean = value != this.cacheSize;
		if (changed) {
			this.cache = new LRUCache$2<Tile, WriteableBitmap>((<any>Tile).$type, (<any>WriteableBitmap).$type, 1, value, new TilePositionComparer());
		}
	}
}


