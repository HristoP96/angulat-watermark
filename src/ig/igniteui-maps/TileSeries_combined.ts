/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ShapeSeriesBase } from "igniteui-charts/ShapeSeriesBase";
import { IMapRenderDeferralHandler, IMapRenderDeferralHandler_$type } from "igniteui-core/IMapRenderDeferralHandler";
import { GeographicMapImagery } from "./GeographicMapImagery";
import { Base, PropertyChangedEventArgs, EventArgs, runOn, delegateRemove, delegateCombine, typeCast, Type, markType } from "igniteui-core/type";
import { Series } from "igniteui-charts/Series";
import { SeriesView } from "igniteui-charts/SeriesView";
import { SeriesViewer } from "igniteui-charts/SeriesViewer";
import { ImageTilesReadyEventArgs } from "./ImageTilesReadyEventArgs";
import { XamGeographicMap } from "./XamGeographicMap";
import { Rect } from "igniteui-core/Rect";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { RenderSurface } from "igniteui-charts/RenderSurface";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { ShapeSeriesViewBase } from "igniteui-charts/ShapeSeriesViewBase";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { List$1 } from "igniteui-core/List$1";
import { PathFigure } from "igniteui-core/PathFigure";
import { Geometry } from "igniteui-core/Geometry";
import { PointCollection } from "igniteui-core/PointCollection";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { ImagesChangedEventArgs } from "./ImagesChangedEventArgs";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class TileSeries extends ShapeSeriesBase implements IMapRenderDeferralHandler {
	static $t: Type = markType(TileSeries, 'TileSeries', (<any>ShapeSeriesBase).$type, [IMapRenderDeferralHandler_$type]);
	protected createView(): SeriesView {
		return new TileSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.tileView = <TileSeriesView>view;
	}
	protected get_requiresShapes(): boolean {
		return false;
	}
	private _tileView: TileSeriesView;
	protected get tileView(): TileSeriesView {
		return this._tileView;
	}
	protected set tileView(value: TileSeriesView) {
		this._tileView = value;
	}
	static readonly tileImageryPropertyName: string = "TileImagery";
	get tileImagery(): GeographicMapImagery {
		return this._tileImagery;
	}
	set tileImagery(value: GeographicMapImagery) {
		let changed: boolean = value != this.tileImagery;
		if (changed) {
			let oldValue: any = this.tileImagery;
			this._tileImagery = value;
			this.raisePropertyChanged(TileSeries.tileImageryPropertyName, oldValue, value);
		}
	}
	private _tileImagery: GeographicMapImagery = null;
	private _actualTileImagery: GeographicMapImagery = null;
	protected get actualTileImagery(): GeographicMapImagery {
		return this._actualTileImagery;
	}
	protected set actualTileImagery(value: GeographicMapImagery) {
		let oldValue = this._actualTileImagery;
		this._actualTileImagery = value;
		this.raisePropertyChanged("ActualTileImagery", oldValue, this._actualTileImagery);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		let oldImagery: GeographicMapImagery;
		let newImagery: GeographicMapImagery;
		switch (propertyName) {
			case TileSeries.tileImageryPropertyName:
			oldImagery = <GeographicMapImagery>oldValue;
			newImagery = <GeographicMapImagery>newValue;
			if (oldImagery != null) {
				oldImagery.propertyChanged = delegateRemove(oldImagery.propertyChanged, runOn(this, this.imagery_PropertyChanged));
			}
			if (newImagery != null) {
				newImagery.propertyChanged = delegateCombine(newImagery.propertyChanged, runOn(this, this.imagery_PropertyChanged));
			}
			this.tileView.onTileImageryProvided(oldImagery, newImagery);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case "ActualTileImagery":
			oldImagery = <GeographicMapImagery>oldValue;
			newImagery = <GeographicMapImagery>newValue;
			if (oldImagery != null) {
				oldImagery.imageTilesReady = delegateRemove(oldImagery.imageTilesReady, runOn(this, this.msi_ImageTilesReady));
				oldImagery.deferralHandler = null;
			}
			if (newImagery != null) {
				newImagery.imageTilesReady = delegateCombine(newImagery.imageTilesReady, runOn(this, this.msi_ImageTilesReady));
				newImagery.deferralHandler = this;
			}
			this.tileView.onBackgroundImageryProvided(oldImagery, newImagery);
			if (newImagery != null && typeCast<XamGeographicMap>((<any>XamGeographicMap).$type, this.seriesViewer) !== null) {
				newImagery.geographicMap = <XamGeographicMap>this.seriesViewer;
				this.updateActualTileImagery(this.view);
				this.tileView.actualWindowRectUpdated(this.seriesViewer.actualWindowRect);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case "ActualWindowRect":
			this.tileView.actualWindowRectUpdated(<Rect>newValue);
			break;

			case "WorldRect":
			this.tileView.worldRectUpdated(<Rect>newValue);
			break;

			case "SeriesViewer":
			let oldViewer = <SeriesViewer>oldValue;
			let newViewer = <SeriesViewer>newValue;
			if (oldViewer != null && this.actualTileImagery != null) {
				this.actualTileImagery.provideRenderer(null);
			}
			if (newViewer != null && this.actualTileImagery != null) {
				this.actualTileImagery.provideRenderer(this.view.seriesViewerRenderer);
			}
			break;

		}

	}
	private imagery_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		if (e.propertyName == "MultiScaleImage") {
			this.updateActualTileImagery(this.view);
		}
	}
	imageTilesReady: (sender: any, e: EventArgs) => void = null;
	private msi_ImageTilesReady(sender: any, e: EventArgs): void {
		if (this.imageTilesReady != null) {
			this.imageTilesReady(this, new EventArgs());
		}
		if (!this._avoidRerender) {
			this.tileView.tilesDirty();
		}
	}
	private _tileRefreshAction: (arg1: boolean) => void = null;
	register(source: DependencyObject, refresh: (arg1: boolean) => void): void {
		this._tileRefreshAction = refresh;
	}
	unRegister(source: DependencyObject): void {
		this._tileRefreshAction = null;
	}
	deferredRefresh(): void {
		this.renderSeries(false);
	}
	deferAction(action: () => void): void {
		if (this.renderer != null) {
			this.renderer.setTimeout(<() => void>action, 0);
		} else {
			window.setTimeout(<() => void>action, 0);
		}
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.tileView.viewportUpdated();
		super.viewportRectChangedOverride(oldViewportRect, newViewportRect);
	}
	private _avoidRerender: boolean = false;
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.renderWithView1(animate, this.view);
	}
	protected renderWithView1(animate: boolean, view: SeriesView): void {
		let viewport: Rect;
		let window: Rect;
		let tileView = <TileSeriesView>view;
		let $ret = view.getViewInfo(viewport, window);
		viewport = $ret.p0;
		window = $ret.p1;
		this.updateActualTileImagery(view);
		if (this._tileRefreshAction != null) {
			this._avoidRerender = true;
			this._tileRefreshAction(animate);
			this._avoidRerender = false;
		}
		tileView.tilesDirty();
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.alternateViews.item(viewIdentifier);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		this.renderWithView(view);
	}
	private updateActualTileImagery(view: SeriesView): void {
		let viewport: Rect;
		let window: Rect;
		let $ret = view.getViewInfo(viewport, window);
		viewport = $ret.p0;
		window = $ret.p1;
		if (this.tileImagery != null && this.tileImagery.multiScaleImage != null) {
			if (this.tileImagery != this.actualTileImagery) {
				this.actualTileImagery = this.tileImagery;
			}
			if (this.actualTileImagery != null && !viewport.isEmpty) {
				if (this.actualTileImagery.width != viewport.width) {
					this.actualTileImagery.width = viewport.width;
				}
				if (this.actualTileImagery.height != viewport.height) {
					this.actualTileImagery.height = viewport.height;
				}
			}
		}
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		(<TileSeriesView>view).clearClipping();
	}
}

/**
 * @hidden 
 */
export class TileSeriesView extends ShapeSeriesViewBase {
	static $t: Type = markType(TileSeriesView, 'TileSeriesView', (<any>ShapeSeriesViewBase).$type);
	constructor(model: TileSeries) {
		super(model);
		this.tileModel = model;
	}
	private _tileModel: TileSeries = null;
	protected get tileModel(): TileSeries {
		return this._tileModel;
	}
	protected set tileModel(value: TileSeries) {
		this._tileModel = value;
	}
	protected applyData(element: FrameworkElement, data: PathGeometry): void {
		if (data.figures.count > 0) {
			this._clipGeometry.children.add(data);
		}
	}
	protected getShapeGeometry(i: number, points: List$1<PointCollection>): PathGeometry {
		return this.getShapeGeometry1(i, points, true);
	}
	protected getShapeElement(i: number, item: any): FrameworkElement {
		return null;
	}
	protected clearValues(element: FrameworkElement): void {
	}
	protected applyStyling1(shape: FrameworkElement, item: any): void {
	}
	private _clipGeometry: GeometryGroup = new GeometryGroup();
	initializeShapes(): void {
		super.initializeShapes();
		this._clipGeometry.children.clear();
	}
	finalizeShapes(): void {
		super.finalizeShapes();
		this.makeDirty();
	}
	actualWindowRectUpdated(actualWindowRect: Rect): void {
		if (this.tileModel.tileImagery != null) {
			this.tileModel.tileImagery.windowRect = actualWindowRect;
		}
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
	onBackgroundImageryProvided(oldImagery: GeographicMapImagery, newImagery: GeographicMapImagery): void {
		if (this.offscreen == null) {
			this.offscreen = this.model.renderer.createElement("canvas");
			let cont = this.model.renderer.get2DCanvasContext(this.offscreen);
			this.offscreenContext = new RenderingContext(new CanvasViewRenderer(), cont);
			this.offscreen.setAttribute("width", this.viewport.width.toString());
			this.offscreen.setAttribute("height", this.viewport.height.toString());
		}
		if (oldImagery != null) {
			oldImagery.provideContext(null);
			oldImagery.provideRenderer(null);
			oldImagery.imagesChanged = delegateRemove(oldImagery.imagesChanged, runOn(this, this.newImagery_ImagesChanged));
		}
		if (newImagery != null) {
			if (this.seriesViewerRenderer != null) {
				newImagery.provideRenderer(this.seriesViewerRenderer);
			}
			newImagery.provideContext(this.offscreenContext);
			newImagery.provideViewport(this.viewport);
			newImagery.imagesChanged = delegateCombine(newImagery.imagesChanged, runOn(this, this.newImagery_ImagesChanged));
		}
	}
	private newImagery_ImagesChanged(sender: any, e: EventArgs): void {
		this.makeDirty();
	}
	onTileImageryProvided(oldImagery: GeographicMapImagery, newImagery: GeographicMapImagery): void {
	}
	viewportUpdated(): void {
		if (this.offscreen != null) {
			this.offscreen.setAttribute("width", this.viewport.width.toString());
			this.offscreen.setAttribute("height", this.viewport.height.toString());
		}
		if (this.tileModel.tileImagery != null) {
			this.tileModel.tileImagery.provideViewport(this.viewport);
		}
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (isHitContext) {
			return;
		}
		if (this.offscreen == null) {
			return;
		}
		let shouldRestoreContext: boolean = false;
		if (this._clipGeometry.children.count > 0) {
			shouldRestoreContext = true;
			this.context.save();
			this.context.renderGeometry(this._clipGeometry);
			let underlyingContext = <CanvasRenderingContext2D>this.context.getUnderlyingContext();
			underlyingContext.clip();
		}
		let viewportLeft: number = <number>truncate(Math.round(this.viewport.left));
		let viewportTop: number = <number>truncate(Math.round(this.viewport.top));
		let viewportWidth: number = <number>truncate(Math.round(this.viewport.width));
		let viewportHeight: number = <number>truncate(Math.round(this.viewport.height));
		this.context.drawImage1(this.offscreen.getNativeElement(), 1, viewportLeft, viewportTop, viewportWidth, viewportHeight, viewportLeft, viewportTop, viewportWidth, viewportHeight);
		if (shouldRestoreContext) {
			this.context.restore();
		}
	}
	tilesDirty(): void {
		this.makeDirty();
	}
	clearClipping(): void {
	}
	worldRectUpdated(rect: Rect): void {
		if (this.tileModel.tileImagery != null) {
			this.tileModel.tileImagery.needsRefresh();
		}
	}
}


