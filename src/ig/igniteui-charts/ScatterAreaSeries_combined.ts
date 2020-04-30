/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterTriangulationSeries } from "./ScatterTriangulationSeries";
import { ColorScale } from "./ColorScale";
import { Base, PropertyChangedEventArgs, Type, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, runOn, delegateRemove, delegateCombine, String_$type, typeCast, Point_$type, markType, PointUtil } from "igniteui-core/type";
import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Color } from "igniteui-core/Color";
import { FastItemIntColumn } from "igniteui-core/FastItemIntColumn";
import { Control } from "igniteui-core/Control";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { Rect } from "igniteui-core/Rect";
import { RenderSurface } from "./RenderSurface";
import { SeriesView } from "./SeriesView";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { WriteableBitmap } from "igniteui-core/WriteableBitmap";
import { TriangleRasterizer } from "./TriangleRasterizer";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { SeriesViewer } from "./SeriesViewer";
import { ObservableColorCollection } from "igniteui-core/ObservableColorCollection";
import { Brush } from "igniteui-core/Brush";
import { ColorUtil } from "igniteui-core/ColorUtil";
import { List$1 } from "igniteui-core/List$1";
import { CustomPaletteColorScale } from "./CustomPaletteColorScale";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, intDivide } from "igniteui-core/number";
import { boxArray$1 } from "igniteui-core/array";
import { ColorScaleInterpolationMode } from "./ColorScaleInterpolationMode";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { Rectangle } from "igniteui-core/Rectangle";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class ScatterAreaSeries extends ScatterTriangulationSeries {
	static $t: Type = markType(ScatterAreaSeries, 'ScatterAreaSeries', (<any>ScatterTriangulationSeries).$type);
	constructor() {
		super();
		FastItemIntColumn.register();
		this.defaultStyleKey = (<any>ScatterAreaSeries).$type;
	}
	private static readonly colorScalePropertyName: string = "ColorScale";
	private _colorScale: ColorScale = null;
	get colorScale(): ColorScale {
		return this._colorScale;
	}
	set colorScale(value: ColorScale) {
		let changed: boolean = this._colorScale != value;
		if (changed) {
			let oldValue: any = this._colorScale;
			if (this._colorScale != null) {
				let $t = this._colorScale;
				$t.propertyChanged = delegateRemove($t.propertyChanged, runOn(this, this.colorScale_PropertyChanged));
			}
			this._colorScale = value;
			if (this._colorScale != null) {
				let $t1 = this._colorScale;
				$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this.colorScale_PropertyChanged));
			}
			this.raisePropertyChanged(ScatterAreaSeries.colorScalePropertyName, oldValue, this._colorScale);
		}
	}
	private colorScale_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.renderSeries(false);
	}
	private static readonly colorMemberPathPropertyName: string = "ColorMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == ScatterAreaSeries.colorMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.colorMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly colorMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterAreaSeries.colorMemberPathPropertyName, String_$type, (<any>ScatterAreaSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterAreaSeries>sender).raisePropertyChanged(ScatterAreaSeries.colorMemberPathPropertyName, e.oldValue, e.newValue)));
	get colorMemberPath(): string {
		return <string>this.getValue(ScatterAreaSeries.colorMemberPathProperty);
	}
	set colorMemberPath(value: string) {
		this.setValue(ScatterAreaSeries.colorMemberPathProperty, value);
	}
	private static readonly colorColumnPropertyName: string = "ColorColumn";
	private _colorColumn: IFastItemColumn$1<number> = null;
	private get colorColumn(): IFastItemColumn$1<number> {
		return this._colorColumn;
	}
	private set colorColumn(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.colorColumn != value;
		if (changed) {
			let oldValue: any = this.colorColumn;
			this._colorColumn = value;
			this.raisePropertyChanged(ScatterAreaSeries.colorColumnPropertyName, oldValue, this.colorColumn);
		}
	}
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.colorColumn);
				this.colorColumn = null;
			}
			let newFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastItemsSource != null) {
				this.colorColumn = this.registerDoubleColumn(this.colorMemberPath);
			}
			this.renderSeries(false);
			break;

			case ScatterAreaSeries.colorMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.colorColumn);
				this.colorColumn = this.registerDoubleColumn(this.colorMemberPath);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterAreaSeries.colorScalePropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.renderWithView(this.view);
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		this.renderWithView(view);
	}
	protected renderWithView(view: SeriesView): void {
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let scatterAreaSeriesView = <ScatterAreaSeriesView>view;
		let triangleDataBitmap: WriteableBitmap = null;
		let tri: TriangleRasterizer = null;
		let xaxis = this.xAxis;
		let yaxis = this.yAxis;
		let effectiveViewportRect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, xaxis.isInverted);
		xParams.effectiveViewportRect = effectiveViewportRect;
		let yParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, yaxis.isInverted);
		yParams.effectiveViewportRect = effectiveViewportRect;
		tri = this.createBitmap(view, xParams, yParams);
		if (tri != null) {
			scatterAreaSeriesView.closeRasterizer(tri);
		} else {
			scatterAreaSeriesView.setBitmap(triangleDataBitmap);
		}
	}
	private assertMouseOver(view: ScatterAreaSeriesView): void {
		let viewportRect: Rect;
		let windowRect: Rect;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let numPixels = <number>truncate(Math.round(viewportRect.width)) * <number>truncate(Math.round(viewportRect.height));
		let itemIndexes = view.itemIndexes;
		if (itemIndexes == null || itemIndexes.length != numPixels) {
			itemIndexes = <number[]>new Array(numPixels);
			for (let i = 0; i < numPixels; i++) {
				itemIndexes[i] = 0;
			}
		} else {
			for (let i1 = 0; i1 < numPixels; i1++) {
				itemIndexes[i1] = 0;
			}
		}
		view.itemIndexes = itemIndexes;
	}
	getItem(world: Point): any {
		let imageWidth: number = <number>truncate(Math.round(this.viewport.width));
		let imageHeight: number = <number>truncate(Math.round(this.viewport.height));
		let itemIndexes = (<ScatterAreaSeriesView>this.view).itemIndexes;
		if (itemIndexes == null || itemIndexes.length != (imageWidth * imageHeight) || this.triangleVertexColumn1 == null || this.triangleVertexColumn1.count < 1 || this.triangleVertexColumn2 == null || this.triangleVertexColumn2.count < 1 || this.triangleVertexColumn3 == null || this.triangleVertexColumn3.count < 1) {
			return null;
		}
		let windowRect: Rect = this.seriesViewer.windowRect;
		let windowX: number = (world.x - windowRect.left) / windowRect.width;
		let windowY: number = (world.y - windowRect.top) / windowRect.height;
		let pixelX: number = <number>truncate(Math.round(imageWidth * windowX));
		let pixelY: number = <number>truncate(Math.round(imageHeight * windowY));
		let index: number = (imageWidth * pixelY) + pixelX;
		if (index < 0 || index > itemIndexes.length - 1) {
			return null;
		}
		let itemIndex: number = itemIndexes[index] - 1;
		if (itemIndex < 0 || itemIndex > this.triangleVertexColumn1.count) {
			return null;
		}
		let xSourceCount: number = this.xSource.length;
		let v1 = this.triangleVertexColumn1.item(itemIndex);
		let v2 = this.triangleVertexColumn2.item(itemIndex);
		let v3 = this.triangleVertexColumn3.item(itemIndex);
		if ((v1 >= xSourceCount) || (v2 >= xSourceCount) || (v3 >= xSourceCount)) {
			return null;
		}
		let x1 = (this.xSource[v1] - this.viewport.left) / this.viewport.width;
		let y1 = (this.ySource[v1] - this.viewport.top) / this.viewport.height;
		let x2 = (this.xSource[v2] - this.viewport.left) / this.viewport.width;
		let y2 = (this.ySource[v2] - this.viewport.top) / this.viewport.height;
		let x3 = (this.xSource[v3] - this.viewport.left) / this.viewport.width;
		let y3 = (this.ySource[v3] - this.viewport.top) / this.viewport.height;
		let d1 = Math.pow(x1 - windowX, 2) + Math.pow(y1 - windowY, 2);
		let d2 = Math.pow(x2 - windowX, 2) + Math.pow(y2 - windowY, 2);
		let d3 = Math.pow(x3 - windowX, 2) + Math.pow(y3 - windowY, 2);
		if (d1 < d2 && d1 < d3) {
			return this.fastItemsSource.item(v1);
		}
		if (d2 < d1 && d2 < d3) {
			return this.fastItemsSource.item(v2);
		}
		if (d3 < d1 && d3 < d2) {
			return this.fastItemsSource.item(v3);
		}
		return this.fastItemsSource.item(v1);
	}
	private _xSource: number[] = null;
	protected get xSource(): number[] {
		return this._xSource;
	}
	protected set xSource(value: number[]) {
		this._xSource = value;
	}
	private _ySource: number[] = null;
	protected get ySource(): number[] {
		return this._ySource;
	}
	protected set ySource(value: number[]) {
		this._ySource = value;
	}
	createBitmap(view: SeriesView, xParams: ScalerParams, yParams: ScalerParams): TriangleRasterizer {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		viewportRect = new Rect(0, 0, 0, viewportRect.width, viewportRect.height);
		xParams = new ScalerParams(0, xParams.windowRect, viewportRect, xParams.isInverted, xParams.effectiveViewportRect);
		yParams = new ScalerParams(0, yParams.windowRect, viewportRect, yParams.isInverted, yParams.effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let scatterAreaSeriesView: ScatterAreaSeriesView = <ScatterAreaSeriesView>view;
		let xAxis: NumericXAxis = this.xAxis;
		let yAxis: NumericYAxis = this.yAxis;
		let count: number = this.triangleVertexColumn1.count;
		let xSource: number[];
		let xArr_ = this.xColumn.asArray();
		xSource = <number[]>(xArr_.slice(0));
		let ySource: number[];
		let yArr_ = this.yColumn.asArray();
		ySource = <number[]>(yArr_.slice(0));
		let colorSource: number[] = this.colorColumn.asArray();
		let triangleVertexSource1: number[] = this.triangleVertexColumn1.asArray();
		let triangleVertexSource2: number[] = this.triangleVertexColumn2.asArray();
		let triangleVertexSource3: number[] = this.triangleVertexColumn3.asArray();
		this.xSource = xSource;
		this.ySource = ySource;
		xAxis.getScaledValueList(boxArray$1<number>(xSource), 0, xSource.length, xParams);
		yAxis.getScaledValueList(boxArray$1<number>(ySource), 0, ySource.length, yParams);
		let actualColorScale: ColorScale = this.getActualColorScale();
		let triceratops: TriangleRasterizer = scatterAreaSeriesView.getRasterizer(xParams.viewportRect, actualColorScale, this.colorColumn);
		let viewportTop: number = viewportRect.top;
		let viewportLeft: number = viewportRect.left;
		let viewportRight: number = viewportRect.right;
		let viewportBottom: number = viewportRect.bottom;
		let minY: number;
		let maxY: number;
		let minX: number;
		let maxX: number;
		this.assertMouseOver(scatterAreaSeriesView);
		let itemIndexes = scatterAreaSeriesView.itemIndexes;
		let xSourceCount: number = xSource.length;
		for (let ii: number = 0; ii < count; ii++) {
			let v1: number = triangleVertexSource1[ii];
			let v2: number = triangleVertexSource2[ii];
			let v3: number = triangleVertexSource3[ii];
			if ((v1 >= xSourceCount) || (v2 >= xSourceCount) || (v3 >= xSourceCount) || (v1 < 0) || (v2 < 0) || (v3 < 0)) {
				continue;
			}
			let x1: number = xSource[v1];
			let y1: number = ySource[v1];
			let pt1: Point = <Point>{ $type: Point_$type, x: x1, y: y1 };
			let x2: number = xSource[v2];
			let y2: number = ySource[v2];
			let pt2: Point = <Point>{ $type: Point_$type, x: x2, y: y2 };
			let x3: number = xSource[v3];
			let y3: number = ySource[v3];
			let pt3: Point = <Point>{ $type: Point_$type, x: x3, y: y3 };
			minY = pt2.y < pt3.y ? pt2.y : pt3.y;
			minY = pt1.y < minY ? pt1.y : minY;
			maxY = pt2.y > pt3.y ? pt2.y : pt3.y;
			maxY = pt1.y > maxY ? pt1.y : maxY;
			minX = pt2.x < pt3.x ? pt2.x : pt3.x;
			minX = pt1.x < minX ? pt1.x : minX;
			maxX = pt2.x > pt3.x ? pt2.x : pt3.x;
			maxX = pt1.x > maxX ? pt1.x : maxX;
			if (minY < viewportBottom && maxY > viewportTop && minX < viewportRight && maxX > viewportLeft) {
				let value0: number = colorSource[v1];
				let value1: number = colorSource[v2];
				let value2: number = colorSource[v3];
				triceratops.rasterizeTriangle(ii, itemIndexes, pt1, pt2, pt3, value0, value1, value2);
			}
		}
		return triceratops;
	}
	defaultSeriesColors: Color[] = <Color[]>[ Color.fromArgb(255, 0, 0, 255), Color.fromArgb(255, 0, 255, 0), Color.fromArgb(255, 255, 0, 0) ];
	protected getScalePaletteBasedOnSeriesBrush(): ObservableColorCollection {
		let seriesColor: Color = new Color();
		let seriesBrush = this.actualBrush;
		if (seriesBrush == null) {
			seriesColor = this.defaultSeriesColors[this.index % this.defaultSeriesColors.length];
		} else {
			seriesColor = ColorUtil.fromBrush(seriesBrush);
		}
		let palette = new ObservableColorCollection();
		palette.add(ColorUtil.getLightened(seriesColor, -0.5));
		palette.add(seriesColor);
		return palette;
	}
	protected getActualColorScale(): ColorScale {
		let actualColorScale: ColorScale = this.colorScale;
		if (actualColorScale == null) {
			actualColorScale = ((() => {
				let $ret = new CustomPaletteColorScale();
				$ret.palette = this.getScalePaletteBasedOnSeriesBrush();
				$ret.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
				return $ret;
			})());
		} else if (typeCast<CustomPaletteColorScale>((<any>CustomPaletteColorScale).$type, actualColorScale) !== null) {
			let customScale = <CustomPaletteColorScale>actualColorScale;
			if (customScale.palette == null || customScale.palette.count == 0) {
				customScale.palette = this.getScalePaletteBasedOnSeriesBrush();
			}
			actualColorScale = customScale;
		}
		return actualColorScale;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let scatterView = <ScatterAreaSeriesView>view;
		scatterView.clearBitmap();
	}
	protected createView(): SeriesView {
		return new ScatterAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.scatterAreaSeriesView = typeCast<ScatterAreaSeriesView>((<any>ScatterAreaSeriesView).$type, view);
	}
	private _scatterAreaSeriesView: ScatterAreaSeriesView;
	get scatterAreaSeriesView(): ScatterAreaSeriesView {
		return this._scatterAreaSeriesView;
	}
	set scatterAreaSeriesView(value: ScatterAreaSeriesView) {
		this._scatterAreaSeriesView = value;
	}
	attachImage(image: any): void {
		if (this.scatterAreaSeriesView != null) {
			this.scatterAreaSeriesView.attachImage(image);
		}
	}
}

/**
 * @hidden 
 */
export class ScatterAreaSeriesView extends SeriesView {
	static $t: Type = markType(ScatterAreaSeriesView, 'ScatterAreaSeriesView', (<any>SeriesView).$type);
	private _scatterAreaModel: ScatterAreaSeries = null;
	private get scatterAreaModel(): ScatterAreaSeries {
		return this._scatterAreaModel;
	}
	private set scatterAreaModel(value: ScatterAreaSeries) {
		this._scatterAreaModel = value;
	}
	private _itemIndexes: number[] = null;
	get itemIndexes(): number[] {
		return this._itemIndexes;
	}
	set itemIndexes(value: number[]) {
		this._itemIndexes = value;
	}
	constructor(model: ScatterAreaSeries) {
		super(model);
		this.scatterAreaModel = model;
	}
	regenerateBitmap(width: number, height: number): void {
	}
	attachImage(rootImage: any): void {
	}
	private _imageData: ImageData = null;
	private get imageData(): ImageData {
		return this._imageData;
	}
	private set imageData(value: ImageData) {
		this._imageData = value;
	}
	private _offscreen: DomWrapper = null;
	private get offscreen(): DomWrapper {
		return this._offscreen;
	}
	private set offscreen(value: DomWrapper) {
		this._offscreen = value;
	}
	private _offscreenContext: RenderingContext = null;
	private get offscreenContext(): RenderingContext {
		return this._offscreenContext;
	}
	private set offscreenContext(value: RenderingContext) {
		this._offscreenContext = value;
	}
	getBitmap(): number[] {
		return this.getBitmap1(true);
	}
	getBitmap1(clear: boolean): number[] {
		this.ensureOffscreenContext();
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.left));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		let viewportWidthString: string = viewportWidth.toString();
		let viewportHeightString: string = viewportHeight.toString();
		if (this.offscreen.getAttribute("width") != viewportWidthString) {
			this.offscreen.setAttribute("width", viewportWidth.toString());
		}
		if (this.offscreen.getAttribute("height") != viewportHeightString) {
			this.offscreen.setAttribute("height", viewportHeight.toString());
		}
		let canvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.offscreenContext.getUnderlyingContext();
		if (clear) {
			canvas.clearRect(0, 0, viewportWidth, viewportHeight);
		}
		this.imageData = canvas.getImageData(0, 0, viewportWidth, viewportHeight);
		let imageDataArray_ = this.imageData.data;
		return <number[]>(<any>imageDataArray_);
	}
	private ensureOffscreenContext(): void {
		if (this.offscreen == null) {
			this.offscreen = this.model.renderer.createElement("canvas");
			let cont = this.model.renderer.get2DCanvasContext(this.offscreen);
			this.offscreenContext = new RenderingContext(new CanvasViewRenderer(), cont);
		}
	}
	getRasterizer(viewportRect: Rect, actualColorScale: ColorScale, colorColumn: IFastItemColumn$1<number>): TriangleRasterizer {
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.left));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		return new TriangleRasterizer(this.getBitmap(), actualColorScale, colorColumn.minimum, colorColumn.maximum, colorColumn, viewportWidth, viewportHeight);
	}
	closeRasterizer(triceratops: TriangleRasterizer): void {
		this.setBitmap(null);
	}
	clearBitmap(): void {
		if (this.offscreenContext != null) {
			this.offscreenContext.clearRectangle(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		}
		this.makeDirty();
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (this.offscreen == null) {
			return;
		}
		if (isHitContext) {
			let rect: Rectangle = new Rectangle();
			rect.canvasLeft = this.viewport.left;
			rect.canvasTop = this.viewport.top;
			rect.width = this.viewport.width;
			rect.height = this.viewport.height;
			rect._fill = this.getHitBrush();
			context.renderRectangle(rect);
		} else {
			let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
			let viewportTop: number = <number>truncate(Math.round(this.viewport.top));
			let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
			let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
			context.drawImage(this.offscreen.getNativeElement(), 1, viewportLeft, viewportTop, viewportWidth, viewportHeight);
		}
	}
	setBitmap(bitmap: WriteableBitmap): void {
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.left));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		this.ensureOffscreenContext();
		(<CanvasRenderingContext2D>this.offscreenContext.getUnderlyingContext()).putImageData(this.imageData, 0, 0);
		this.makeDirty();
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let imageWidth: number = <number>truncate(Math.round(this.viewport.width));
		let imageHeight: number = <number>truncate(Math.round(this.viewport.height));
		let pixels = this.getBitmap1(false);
		if (pixels == null || pixels.length == 0) {
			this.model.seriesVisualDataManager.exportSeriesPixelsData(svd, null, imageWidth, imageHeight);
			return;
		}
		let packed: number[] = <number[]>new Array(intDivide(pixels.length, 4));
		let pos: number;
		for (let i = 0; i < intDivide(pixels.length, 4); i++) {
			pos = i * 4;
			packed[i] = pixels[pos + 3] << 24 | pixels[pos] << 16 | pixels[pos + 1] << 8 | pixels[pos + 2];
		}
		this.model.seriesVisualDataManager.exportSeriesPixelsData(svd, packed, imageWidth, imageHeight);
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.scatterAreaModel.title + "</span><br/><span>" + "(${item." + this.scatterAreaModel.xMemberPath + "}, ${item." + this.scatterAreaModel.yMemberPath + "})</span>";
		if (!stringIsNullOrEmpty(this.scatterAreaModel.colorMemberPath)) {
			tooltipTemplate += "<span>, Value: ${item." + this.scatterAreaModel.colorMemberPath + "}</span>";
		}
		tooltipTemplate += "</div>";
		return tooltipTemplate;
	}
}


