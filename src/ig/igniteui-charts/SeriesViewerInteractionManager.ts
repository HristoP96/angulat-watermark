/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, runOn, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { ISeriesViewerInteractionManager, ISeriesViewerInteractionManager_$type } from "./ISeriesViewerInteractionManager";
import { IHighlightingManager } from "./IHighlightingManager";
import { HighlightingManager } from "./HighlightingManager";
import { Rect } from "igniteui-core/Rect";
import { TileZoomManager } from "./TileZoomManager";
import { Series } from "./Series";
import { DataContext } from "igniteui-core/DataContext";
import { ChartHitTestMode } from "./ChartHitTestMode";
import { SeriesViewer } from "./SeriesViewer";
import { List$1 } from "igniteui-core/List$1";
import { SeriesViewerView } from "./SeriesViewerView";
import { InteractionState } from "igniteui-core/InteractionState";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Size } from "igniteui-core/Size";
import { Key } from "igniteui-core/Key";
import { MathUtil } from "igniteui-core/MathUtil";
import { SeriesCollection } from "./SeriesCollection";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { SeriesView } from "./SeriesView";
import { IOverviewPlusDetailPane } from "igniteui-core/IOverviewPlusDetailPane";
import { MouseEventArgs } from "igniteui-core/MouseEventArgs";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { EventProxy } from "igniteui-core/EventProxy";
import { MouseButtonEventArgs } from "igniteui-core/MouseButtonEventArgs";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Visibility } from "igniteui-core/Visibility";
import { ModifierKeys } from "igniteui-core/ModifierKeys";
import { WindowResponse } from "./WindowResponse";
import { truncate, intDivide, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class SeriesViewerInteractionManager extends Base implements ISeriesViewerInteractionManager {
	static $t: Type = markType(SeriesViewerInteractionManager, 'SeriesViewerInteractionManager', (<any>Base).$type, [ISeriesViewerInteractionManager_$type]);
	constructor() {
		super();
		this.dragStartPoint = Rect.empty;
		this.anchor = Rect.empty;
	}
	get highlightingManager(): IHighlightingManager {
		if (this._highlightingManager == null) {
			this._highlightingManager = new HighlightingManager();
		}
		return this._highlightingManager;
	}
	getResolvedHitTestmode(target: SeriesViewer): ChartHitTestMode {
		if (target.contentHitTestMode != ChartHitTestMode.Auto) {
			return target.contentHitTestMode;
		}
		let actualHitTestMode = ChartHitTestMode.Computational;
		let hasColorEncoded: boolean = false;
		let hasComputational: boolean = false;
		for (let i = 0; i < target.series.count; i++) {
			let currSeries = target.series._inner[i];
			if (currSeries.isStacked) {
				currSeries.forSubVisualSeries((s: Series) => {
					if (s.actualHitTestMode == SeriesHitTestMode.ColorEncoded) {
						hasColorEncoded = true;
					}
					if (s.actualHitTestMode == SeriesHitTestMode.Computational) {
						hasComputational = true;
					}
					return true;
				});
			} else {
				if (currSeries.actualHitTestMode == SeriesHitTestMode.ColorEncoded) {
					hasColorEncoded = true;
				}
				if (currSeries.actualHitTestMode == SeriesHitTestMode.Computational) {
					hasComputational = true;
				}
			}
		}
		if (hasComputational) {
			actualHitTestMode = ChartHitTestMode.Computational;
		}
		if (hasColorEncoded) {
			actualHitTestMode = ChartHitTestMode.ColorEncoded;
		}
		if (hasColorEncoded && hasComputational) {
			actualHitTestMode = ChartHitTestMode.Mixed;
		}
		return actualHitTestMode;
	}
	renderCrosshairs(target: SeriesViewer): void {
		let crosshairPoint = target.crosshairPoint;
		let annotationPoint = crosshairPoint;
		let view: SeriesViewerView = target.view;
		let annotationsVisible: boolean = target.allCanDisplayAnnotations();
		let crossHairActivated = target.areCrossHairsActivated;
		let pinching = target.pinching;
		let suppressCrosshairChange = target.suppressCrosshairChange;
		if (!annotationsVisible) {
			annotationPoint = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		for (let i = 0; i < target.series.count; i++) {
			let series = target.series._inner[i];
			series.moveCursorPoint(annotationPoint);
		}
		let visible: boolean = target.state == InteractionState.None && !target.isDefaultCrosshairDisabled && (target.crosshairsVisible || crossHairActivated) && !pinching && !suppressCrosshairChange;
		let viewportRect: Rect = target.viewportRect;
		if (visible && !isNaN_(crosshairPoint.x) && !viewportRect.isEmpty) {
			let x: number = viewportRect.width * (crosshairPoint.x - target.actualWindowRect.left) / target.actualWindowRect.width;
			view.updateVerticalCrosshair(viewportRect.left + x, viewportRect.top, viewportRect.left + x, viewportRect.bottom);
			view.showVerticalCrosshair();
			view.updateInfoBoxXTranslation(x);
		} else {
			view.hideVerticalCrosshair();
		}
		if (visible && !isNaN_(crosshairPoint.y) && !viewportRect.isEmpty) {
			let y: number = viewportRect.height * (crosshairPoint.y - target.actualWindowRect.top) / target.actualWindowRect.height;
			view.updateHorizontalCrosshair(viewportRect.left, viewportRect.top + y, viewportRect.right, viewportRect.top + y);
			view.showHorizontalCrosshair();
		} else {
			view.hideHorizontalCrosshair();
		}
	}
	onStateChanged(target: SeriesViewer): void {
		switch (target.state) {
			case InteractionState.None:
			target.view.setDefaultCursor();
			this.renderCrosshairs(target);
			target.view.goToIdleState();
			break;

			case InteractionState.DragZoom:
			target.view.setHandCursor();
			target.view.hideTooltip();
			this.renderCrosshairs(target);
			target.view.goToDraggingVisualState();
			break;

			case InteractionState.DragPan:
			target.view.setHandCursor();
			target.view.hideTooltip();
			this.renderCrosshairs(target);
			target.view.goToPanningVisualState();
			break;

		}

	}
	onDragDelta(target: SeriesViewer, point: Point): void {
		if (point.x >= 0 && point.y >= 0 && point.x <= target.viewportRect.width && point.y <= target.viewportRect.height) {
			this.showDragTooltip(target, point);
		} else {
			target.hideDragCrosshairAndTooltip();
		}
	}
	private showDragTooltip(target: SeriesViewer, pt: Point): void {
		let view = target.view;
		let viewport = target.viewportRect;
		if (target.isDefaultTooltipDisabled || target.isDefaultCrosshairDisabled) {
			return;
		}
		if (target.areCrossHairsActivated && target.crosshairsVisible) {
			let isVertical: boolean = viewport.height > viewport.width;
			view.clearInfoBox(isVertical);
			for (let series of fromEnum<Series>(target.series)) {
				if (series.isStacked) {
					series.forSubVisualSeries((s: Series) => {
						if (s._visibility == Visibility.Visible) {
							s.showTooltip(pt, runOn(view, view.addToInfoBox));
						}
						return true;
					});
				} else {
					if (series._visibility == Visibility.Visible) {
						series.showTooltip(pt, runOn(view, view.addToInfoBox));
					}
				}
			}
			view.showInfoBox();
		}
	}
	private showDragCrosshair(target: SeriesViewer, pt: Point): void {
		if (target.crosshairsVisible || target.isAnnotationLayerPresent) {
			target.areCrossHairsActivated = true;
			target.onZoomPanInteractionEnding();
			this.anchor = new Rect(0, pt.x, pt.y, 0, 0);
			this.dragState = new Rect(0, pt.x, pt.y, 0, 0);
			target.state = InteractionState.None;
			target.crosshairNotify(target.toWorld(pt));
		}
	}
	onPlotAreaHold(target: SeriesViewer, pt: Point): void {
		this.showDragCrosshair(target, pt);
		this.showDragTooltip(target, pt);
		this.renderCrosshairs(target);
	}
	onDragStarted(target: SeriesViewer, pt: Point, isFinger: boolean): void {
		if (!target.areCrossHairsActivated) {
			this.startWindowOperation(target, pt, isFinger);
		}
	}
	onDragCompleted(target: SeriesViewer, point: Point): void {
		this.dragStartPoint = Rect.empty;
		target.hideDragCrosshairAndTooltip();
	}
	private _previousZoomPosX: number = 0;
	private _previousZoomPosY: number = 0;
	private _zoomStartWindow: Rect = null;
	private _currZoomScaleX: number = 0;
	private _currZoomScaleY: number = 0;
	private _currIsoZoomScale: number = 0;
	private _lastDistanceRatio: number = 0;
	private _ignoreContactUp: boolean = false;
	private _anchor: Rect = null;
	get anchor(): Rect {
		return this._anchor;
	}
	set anchor(value: Rect) {
		this._anchor = value;
	}
	private _dragState: Rect = null;
	get dragState(): Rect {
		return this._dragState;
	}
	set dragState(value: Rect) {
		this._dragState = value;
	}
	onZoomStart(target: SeriesViewer): void {
		let view = target.view;
		this._lastDistanceRatio = 1;
		target.areCrossHairsActivated = false;
		view.hidePreviewPath();
		view.hideDragPath();
		view.hideInfoBox();
		target.crosshairNotify(<Point>{ $type: Point_$type, x: NaN, y: NaN });
		view.hideHorizontalCrosshair();
		view.hideVerticalCrosshair();
		view.hideTooltip();
		target.state = InteractionState.None;
		this._ignoreContactUp = true;
		target.pinching = true;
		target.onZoomPanInteractionStarting();
	}
	onPinchStarted(target: SeriesViewer, point: Point): void {
		this.onZoomStart(target);
	}
	onZoomStarted(target: SeriesViewer, point: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void {
		this._previousZoomPosX = point.x;
		this._previousZoomPosY = point.y;
		this._currZoomScaleX = deltaScaleX;
		this._currZoomScaleY = deltaScaleY;
		this._currIsoZoomScale = isoDeltaScale;
		this._zoomStartWindow = target.actualWindowRect;
		this.onZoomStart(target);
	}
	onPinchDelta(target: SeriesViewer, p: number): void {
		let view = target.view;
		view.hideHorizontalCrosshair();
		view.hideVerticalCrosshair();
		if (view.useDeltaZoom) {
			this.doDeltaZoom(target, p);
		} else {
			this.doZoom(target, p);
			this._lastDistanceRatio = p;
		}
	}
	onZoomDelta(target: SeriesViewer, p: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void {
		let view = target.view;
		view.hideHorizontalCrosshair();
		view.hideVerticalCrosshair();
		this._currZoomScaleX = this._currZoomScaleX * deltaScaleX;
		this._currZoomScaleY = this._currZoomScaleY * deltaScaleY;
		this._currIsoZoomScale = this._currIsoZoomScale * isoDeltaScale;
		if (target.isIsoScaled) {
			this._currZoomScaleX = this._currIsoZoomScale;
			this._currZoomScaleY = this._currIsoZoomScale;
		}
		let currentWindow = target.actualWindowRect;
		let viewport = target.viewportRect;
		let transX = p.x - this._previousZoomPosX;
		let transY = p.y - this._previousZoomPosY;
		this._previousZoomPosX = p.x;
		this._previousZoomPosY = p.y;
		let prevWidth = currentWindow.width;
		let prevHeight = currentWindow.height;
		let newWindowWidth = this._zoomStartWindow.width / this._currZoomScaleX;
		let newWindowHeight = this._zoomStartWindow.height / this._currZoomScaleY;
		if (newWindowWidth > 1) {
			newWindowWidth = 1;
		}
		if (newWindowHeight > 1) {
			newWindowHeight = 1;
		}
		let origin = <Point>{ $type: Point_$type, x: p.x, y: p.y };
		let originAsWorld = <Point>{ $type: Point_$type, x: (origin.x - viewport.left) / viewport.width * currentWindow.width + currentWindow.left, y: (origin.y - viewport.top) / viewport.height * currentWindow.height + currentWindow.top };
		let newRect = new Rect(0, currentWindow.left, currentWindow.top, newWindowWidth, newWindowHeight);
		let newOrigin = <Point>{ $type: Point_$type, x: (originAsWorld.x - newRect.left) / newRect.width * viewport.width + viewport.left, y: (originAsWorld.y - newRect.top) / newRect.height * viewport.height + viewport.top };
		let translateX = (newOrigin.x - origin.x) - transX;
		let translateY = (newOrigin.y - origin.y) - transY;
		let worldTranslateX = translateX / viewport.width * newRect.width;
		let worldTranslateY = translateY / viewport.height * newRect.height;
		newRect = new Rect(0, newRect.left + worldTranslateX, newRect.top + worldTranslateY, newRect.width, newRect.height);
		currentWindow = newRect;
		target.windowNotify(currentWindow, true);
	}
	onManipulationStarted(target: SeriesViewer, point: Point): void {
		this.anchor = new Rect(0, point.x, point.y, 0, 0);
		this.dragState = new Rect(0, point.x, point.y, 0, 0);
	}
	private doScale(target: SeriesViewer, scaleDelta: number, anchor: Point): void {
		let width: number = target.actualWindowRect.width;
		let height: number = target.actualWindowRect.height;
		let cx: number = target.actualWindowRect.left + width / 2;
		let cy: number = target.actualWindowRect.top + height / 2;
		width = width / scaleDelta;
		height = height / scaleDelta;
		let left: number = cx - width / 2;
		let top: number = cy - height / 2;
		target.windowNotify(new Rect(0, left, top, width, height), true);
	}
	onPinchCompleted(target: SeriesViewer, p: number): void {
		let view = target.view;
		if (view.useDeltaZoom) {
			this.doDeltaZoom(target, p);
		} else {
			this.doZoom(target, p);
		}
		this.anchor = Rect.empty;
		target.pinching = false;
	}
	onGestureCompleted(target: SeriesViewer, pt: Point): void {
		target.pinching = false;
		this.anchor = Rect.empty;
		target.hideDragCrosshairAndTooltip();
	}
	onZoomCompleted(target: SeriesViewer, pt: Point, scaleDeltaX: number, scaleDeltaY: number, isoScaleDelta: number): void {
		target.pinching = false;
		this.anchor = Rect.empty;
		target.hideDragCrosshairAndTooltip();
	}
	private doDeltaZoom(target: SeriesViewer, deltaZoom: number): void {
		let windowRect = target.windowRect;
		let f: number = 1 / deltaZoom;
		let wRectCenter: Point = <Point>{ $type: Point_$type, x: windowRect.x + windowRect.width / 2, y: windowRect.y + windowRect.height / 2 };
		let wRectOrigin: Point = <Point>{ $type: Point_$type, x: windowRect.x - wRectCenter.x, y: windowRect.y - wRectCenter.y };
		let scaledWindowRect: Rect = new Rect(0, wRectOrigin.x * f + wRectCenter.x, wRectOrigin.y * f + wRectCenter.y, windowRect.width * f, windowRect.height * f);
		target.windowNotify(scaledWindowRect, true);
	}
	private doZoom(target: SeriesViewer, distanceRatio: number): void {
		let viewport = target.viewportRect;
		let windowRect = target.windowRect;
		let distanceRatioDiff: number = distanceRatio - this._lastDistanceRatio;
		if (distanceRatioDiff != 0) {
			let p: number = 0.03;
			let f: number = distanceRatioDiff < 0 ? 1 + p : 1 - p;
			let wRectCenter: Point = <Point>{ $type: Point_$type, x: windowRect.x + windowRect.width / 2, y: windowRect.y + windowRect.height / 2 };
			let wRectOrigin: Point = <Point>{ $type: Point_$type, x: windowRect.x - wRectCenter.x, y: windowRect.y - wRectCenter.y };
			let scaledWindowRect: Rect = new Rect(0, wRectOrigin.x * f + wRectCenter.x, wRectOrigin.y * f + wRectCenter.y, windowRect.width * f, windowRect.height * f);
			target.windowNotify(scaledWindowRect, true);
		}
	}
	onContactStarted(target: SeriesViewer, pt: Point, isFinger: boolean): void {
		if (!target.pinching) {
			this._ignoreContactUp = false;
		}
		this.startWindowOperation(target, pt, isFinger);
	}
	protected startWindowOperation(target: SeriesViewer, pt: Point, isFinger: boolean): void {
		let newState: InteractionState;
		let view = target.view;
		let defaultInteraction = target.resolveDefaultInteraction(isFinger);
		if (view.currentModifiers == ModifierKeys.None) {
			switch (defaultInteraction) {
				case InteractionState.DragZoom:
				newState = target.isZoomingEnabled() ? defaultInteraction : InteractionState.None;
				break;

				default:
				newState = defaultInteraction;
				break;

			}

		} else {
			if (view.currentModifiers == target.dragModifier) {
				newState = InteractionState.DragZoom;
			} else if (view.currentModifiers == target.panModifier) {
				newState = InteractionState.DragPan;
			} else {
				newState = InteractionState.None;
			}
		}
		switch (newState) {
			case InteractionState.DragZoom:

			case InteractionState.DragPan:
			target.view.focusChart();
			target.view.plotAreaCaptureMouse();
			break;

		}

		target.state = newState;
		switch (target.state) {
			case InteractionState.DragZoom:
			target.crosshairNotify(<Point>{ $type: Point_$type, x: NaN, y: NaN });
			this.anchor = new Rect(0, pt.x, pt.y, 0, 0);
			this.dragState = new Rect(0, pt.x, pt.y, 0, 0);
			this.dragStartPoint = new Rect(0, pt.x, pt.y, 0, 0);
			view.showDragPath();
			view.updateDragPath(this.anchor);
			target.previewNotify(Rect.empty, true);
			break;

			case InteractionState.DragPan:
			this.anchor = new Rect(0, pt.x, pt.y, 0, 0);
			this.dragStartPoint = new Rect(0, pt.x, pt.y, 0, 0);
			break;

		}

		this.windowRectAtStartOfWindowOperation = target.actualWindowRect;
	}
	onZoomPanInteractionStarting(target: SeriesViewer): void {
		target.startTiledZoomingIfNecessary();
		target.view.onZoomPanInteractionStarting();
	}
	onZoomPanInteractionEnding(target: SeriesViewer): void {
		target.endTiledZoomingIfRunning();
		target.view.onZoomPanInteractionEnding();
	}
	private _isTileZoomRunning: boolean = false;
	get isTileZoomRunning(): boolean {
		return this._isTileZoomRunning;
	}
	set isTileZoomRunning(value: boolean) {
		this._isTileZoomRunning = value;
	}
	startTiledZoomIfNecessary(target: SeriesViewer): void {
		if (target.actualUseTiledZooming && !this.isTileZoomRunning) {
			this.isTileZoomRunning = true;
			this.startTileZoom(target);
		}
	}
	endTiledZoomIfRunning(target: SeriesViewer): void {
		if (this.isTileZoomRunning) {
			this.endTileZoom(target);
			this.isTileZoomRunning = false;
		}
	}
	clearTileZoomCache(target: SeriesViewer): void {
		if (this._tileManager == null) {
			return;
		}
		this.tileManager.clearTileCache();
	}
	get tileManager(): TileZoomManager {
		return this._tileManager;
	}
	private _tileManager: TileZoomManager = null;
	private startTileZoom(target: SeriesViewer): void {
		if (this._tileManager == null) {
			this._tileManager = new TileZoomManager(target, true, target.actualZoomTileCacheSize);
			this._tileManager.roundDown = !target.preferHigherResolutionTiles;
		}
		target.ignoreWindowChanges = true;
		target.prepareAxesForTiledZoom();
		this._tileManager.start();
		target.view.cancelDeferredCacheClear();
		target.view.cancelEndToTiledZoom();
	}
	endTileZoom(target: SeriesViewer): void {
		if (this._tileManager == null) {
			return;
		}
		target.ignoreWindowChanges = false;
		target.view.onTileZoomEnding();
		this._tileManager.end();
		target.refreshAllContentAfterTiledZoom();
		target.view.deferCacheClear();
	}
	deferredClearOfTileZoomCache(target: SeriesViewer): void {
		target.clearTileZoomCache();
		target.releaseAxesFromTiledZoom();
	}
	static readonly dRAG_DISTANCE: number = 10;
	static readonly dRAG_DISTANCE_NEAR: number = 2;
	private _highlightingManager: HighlightingManager = null;
	private _dragStartPoint: Rect = null;
	get dragStartPoint(): Rect {
		return this._dragStartPoint;
	}
	set dragStartPoint(value: Rect) {
		this._dragStartPoint = value;
	}
	private shouldAllowPan(target: SeriesViewer): boolean {
		return target.state == InteractionState.DragPan;
	}
	private shouldImmediatePan(target: SeriesViewer, isFinger: boolean): boolean {
		return target.windowResponse == WindowResponse.Immediate || isFinger || target.actualUseTiledZooming;
	}
	private shouldAllowDragZoom(target: SeriesViewer): boolean {
		return target.state == InteractionState.DragZoom;
	}
	onContactMoved(target: SeriesViewer, pt: Point, isFinger: boolean): void {
		let view = target.view;
		if (this.anchor.isEmpty && isFinger) {
			this.startWindowOperation(target, pt, isFinger);
		}
		let distance: number = SeriesViewerInteractionManager.dRAG_DISTANCE_NEAR;
		if (isFinger) {
			distance = SeriesViewerInteractionManager.dRAG_DISTANCE;
		}
		let farFromAnchor: boolean = false;
		let rect: Rect = new Rect(2, <Point>{ $type: Point_$type, x: this.anchor.x, y: this.anchor.y }, pt);
		let dist: Rect = new Rect(0, 0, 0, 0, 0);
		if (!this.dragStartPoint.isEmpty) {
			dist = new Rect(2, <Point>{ $type: Point_$type, x: this.dragStartPoint.x, y: this.dragStartPoint.y }, pt);
		}
		if (dist.width > distance && dist.height > distance) {
			farFromAnchor = true;
		}
		if (!target.pinching) {
			if (farFromAnchor) {
				this._ignoreContactUp = false;
			}
		}
		if (!target.pinching && (target.areCrossHairsActivated || !isFinger)) {
			target.crosshairNotify(target.toWorld(pt));
		}
		if (this.shouldAllowDragZoom(target)) {
			if (farFromAnchor) {
				let rc: Rect = target.toWorld1(rect);
				target.previewNotify(rc, true);
			} else {
				target.previewNotify(Rect.empty, true);
			}
			view.updateDragPath(rect);
		}
		let viewport = target.viewportRect;
		let actualWindowRect = target.actualWindowRect;
		if (this.shouldAllowPan(target)) {
			let gridAreaRect: Rect = viewport;
			let left: number = actualWindowRect.left + actualWindowRect.width * (this.anchor.x - pt.x) / gridAreaRect.width;
			let top: number = actualWindowRect.top + actualWindowRect.height * (this.anchor.y - pt.y) / gridAreaRect.height;
			let rc1: Rect = new Rect(0, left, top, actualWindowRect.width, actualWindowRect.height);
			if (this.shouldImmediatePan(target, isFinger)) {
				target.onZoomPanInteractionStarting();
				target.previewNotify(Rect.empty, true);
				target.windowNotify(rc1, true);
				this.anchor = new Rect(3, pt, new Size(1, 0, 0));
				this.dragState = new Rect(3, pt, new Size(1, 0, 0));
			} else {
				target.previewNotify(rc1, true);
			}
		}
		this.dragState = new Rect(3, pt, new Size(1, 0, 0));
		view.checkInteractionCompleted(pt);
	}
	onContactCompleted(target: SeriesViewer, pt: Point, isFinger: boolean): void {
		let view = target.view;
		let distance: number = SeriesViewerInteractionManager.dRAG_DISTANCE_NEAR;
		if (isFinger) {
			distance = SeriesViewerInteractionManager.dRAG_DISTANCE;
		}
		let viewport = target.viewportRect;
		let actualWindowRect = target.actualWindowRect;
		if (!this._ignoreContactUp) {
			let farFromAnchor: boolean = false;
			let rect: Rect = new Rect(2, <Point>{ $type: Point_$type, x: this.anchor.x, y: this.anchor.y }, pt);
			if (rect.width > distance && rect.height > distance) {
				farFromAnchor = true;
			}
			if (target.state == InteractionState.DragZoom) {
				view.hideDragPath();
				if (farFromAnchor) {
					target.windowNotify(target.toWorld1(rect), true);
				}
			}
			if (target.state == InteractionState.DragPan) {
				let gridAreaRect: Rect = viewport;
				let left: number = actualWindowRect.left + actualWindowRect.width * (this.anchor.x - pt.x) / gridAreaRect.width;
				let top: number = actualWindowRect.top + actualWindowRect.height * (this.anchor.y - pt.y) / gridAreaRect.height;
				target.windowNotify(new Rect(0, left, top, actualWindowRect.width, actualWindowRect.height), true);
			}
		}
		let farDrag: boolean = false;
		let dragRect: Rect = new Rect(2, <Point>{ $type: Point_$type, x: this.dragStartPoint.x, y: this.dragStartPoint.y }, pt);
		if (dragRect.width > distance || dragRect.height > distance) {
			farDrag = true;
		}
		if (farDrag) {
			target.suppressCrosshairChange = true;
		}
		target.state = InteractionState.None;
		target.previewNotify(Rect.empty, true);
		view.completeMouseCapture();
		target.suppressCrosshairChange = false;
		view.hideHorizontalCrosshair();
		view.hideVerticalCrosshair();
		if (isFinger) {
			view.hideTooltip();
			view.hideHorizontalCrosshair();
			view.hideVerticalCrosshair();
			view.hideInfoBox();
		}
		target.hideDragCrosshairAndTooltip();
		target.onZoomPanInteractionEnding();
	}
	onPreferHigherResolutionTilesChanged(target: SeriesViewer): void {
		if (this.tileManager != null) {
			this.tileManager.roundDown = !target.preferHigherResolutionTiles;
		}
	}
	private _windowRectAtStartOfWindowOperation: Rect = null;
	private get windowRectAtStartOfWindowOperation(): Rect {
		return this._windowRectAtStartOfWindowOperation;
	}
	private set windowRectAtStartOfWindowOperation(value: Rect) {
		this._windowRectAtStartOfWindowOperation = value;
	}
	onKeyDown(target: SeriesViewer, key: Key): boolean {
		let view = target.view;
		let actualWindowRect = target.actualWindowRect;
		if (target.state == InteractionState.DragPan && key == Key.Escape) {
			view.cancelMouseInteractions();
			target.state = InteractionState.None;
			target.onZoomPanInteractionEnding();
			target.previewNotify(Rect.empty, true);
			if (target.windowResponse == WindowResponse.Immediate) {
				target.windowNotify(this.windowRectAtStartOfWindowOperation, true);
			}
			return true;
		}
		if (target.state == InteractionState.DragZoom && key == Key.Escape) {
			view.cancelMouseInteractions();
			target.state = InteractionState.None;
			target.onZoomPanInteractionEnding();
			view.hideDragPath();
			target.previewNotify(Rect.empty, true);
			return true;
		}
		let windowRect: Rect = Rect.empty;
		let handled: boolean = false;
		switch (key) {
			case Key.Home:
			handled = true;
			windowRect = new Rect(0, 0, 0, 1, 1);
			break;

			case Key.PageDown:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left - 0.1 * actualWindowRect.width, actualWindowRect.top - 0.1 * actualWindowRect.height, 1.2 * actualWindowRect.width, 1.2 * actualWindowRect.height);
			break;

			case Key.PageUp:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left + 0.1 * actualWindowRect.width, actualWindowRect.top + 0.1 * actualWindowRect.height, 0.8 * actualWindowRect.width, 0.8 * actualWindowRect.height);
			break;

			case Key.Left:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left - 0.1 * actualWindowRect.width, actualWindowRect.top, actualWindowRect.width, actualWindowRect.height);
			windowRect.x = windowRect.x - Math.min(windowRect.left, 0);
			break;

			case Key.Right:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left + 0.1 * actualWindowRect.width, actualWindowRect.top, actualWindowRect.width, actualWindowRect.height);
			windowRect.x = windowRect.x - Math.max(windowRect.right - 1, 0);
			break;

			case Key.Up:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left, actualWindowRect.top - 0.1 * actualWindowRect.height, actualWindowRect.width, actualWindowRect.height);
			windowRect.y = windowRect.y - Math.min(windowRect.top, 0);
			break;

			case Key.Down:
			handled = true;
			windowRect = new Rect(0, actualWindowRect.left, actualWindowRect.top + 0.1 * actualWindowRect.height, actualWindowRect.width, actualWindowRect.height);
			windowRect.y = windowRect.y - Math.max(windowRect.bottom - 1, 0);
			break;

		}

		if (!windowRect.isEmpty && Rect.l_op_Inequality(windowRect, actualWindowRect)) {
			target.windowNotify(windowRect, true);
		}
		return handled;
	}
	onMouseWheel(target: SeriesViewer, pt: Point, delta: number): boolean {
		let view = target.view;
		let actualWindowRect = target.actualWindowRect;
		let cx: number = actualWindowRect.left + actualWindowRect.width * pt.x / target.viewportRect.width;
		let cy: number = actualWindowRect.top + actualWindowRect.height * pt.y / target.viewportRect.height;
		let scale: number = 1 - MathUtil.clamp(delta, -0.5, 0.5);
		let left: number = Math.max(0, cx - scale * (cx - actualWindowRect.left));
		let bottom: number = Math.min(1, cy + scale * (actualWindowRect.bottom - cy));
		let right: number = Math.min(1, cx + scale * (actualWindowRect.right - cx));
		let top: number = Math.max(0, cy - scale * (cy - actualWindowRect.top));
		target.onZoomPanInteractionStarting();
		this.deferEndToTiledZoom(target, 1000);
		target.windowNotify(new Rect(0, left, top, right - left, bottom - top), true);
		return target.isZoomingEnabled();
	}
	private deferEndToTiledZoom(target: SeriesViewer, delay: number): void {
		target.view.deferEndToTiledZoom(delay);
	}
	onDoubleTap(target: SeriesViewer, pt: Point): void {
		let actualWindowRect = target.actualWindowRect;
		let cx: number = actualWindowRect.left + actualWindowRect.width * pt.x / target.viewportRect.width;
		let cy: number = actualWindowRect.top + actualWindowRect.height * pt.y / target.viewportRect.height;
		let scale: number = 0.7;
		let left: number = Math.max(0, cx - scale * (cx - actualWindowRect.left));
		let bottom: number = Math.min(1, cy + scale * (actualWindowRect.bottom - cy));
		let right: number = Math.min(1, cx + scale * (actualWindowRect.right - cx));
		let top: number = Math.max(0, cy - scale * (cy - actualWindowRect.top));
		target.windowNotify(new Rect(0, left, top, right - left, bottom - top), true);
	}
	clearVisibleTiles(target: SeriesViewer): void {
		this.tileManager.clearVisible();
	}
	getDragState(): Rect {
		return this.dragState;
	}
	getHitSeries(target: SeriesViewer, attachedSeries: SeriesCollection, hitContext: RenderingContext, p: Point, forceUpdate: boolean, context: DataContext, isFinger: boolean): { ret: Series; p5: DataContext; } {
		let shouldCheckColorHit = true;
		let shouldCheckComputationalHit = false;
		let shouldFavorComputational = false;
		let viewer = target;
		if (viewer.actualContentHitTestMode == ChartHitTestMode.Computational) {
			shouldCheckColorHit = false;
			shouldCheckComputationalHit = true;
		}
		if (viewer.actualContentHitTestMode == ChartHitTestMode.Mixed || viewer.actualContentHitTestMode == ChartHitTestMode.MixedFavoringComputational) {
			shouldCheckComputationalHit = true;
		}
		if (viewer.actualContentHitTestMode == ChartHitTestMode.MixedFavoringComputational) {
			shouldFavorComputational = true;
		}
		let mouseX: number = <number>truncate(Math.round(p.x));
		let mouseY: number = <number>truncate(Math.round(p.y));
		context = null;
		let seriesIndex: number = -1;
		if (shouldCheckColorHit && hitContext != null) {
			let hitPointX = mouseX;
			let hitPointY = mouseY;
			if (target.actualPixelScalingRatio != 1) {
				hitPointX = <number>truncate(Math.round(p.x * target.actualPixelScalingRatio));
				hitPointY = <number>truncate(Math.round(p.y * target.actualPixelScalingRatio));
			}
			let imageData = hitContext.getPixelAt(hitPointX, hitPointY);
			if (imageData == null || imageData.length == 0) {
				context = null;
				return {
					ret: null,
					p5: context

				};
			}
			if ((imageData[0] > 0 || imageData[1] > 0 || imageData[2] > 0) && imageData[3] == 255) {
				let num2_ = imageData[2];
				if (num2_ % 4 != 0) {
					num2_ = num2_ + (4 - (num2_ % 4));
				}
				let num1_ = imageData[1];
				if (num1_ % 4 != 0) {
					num1_ = num1_ + (4 - (num1_ % 4));
				}
				let num0_ = imageData[0];
				if (num0_ % 4 != 0) {
					num0_ = num0_ + (4 - (num0_ % 4));
				}
				let num_: number = 0;
				num_ = <number>(num2_ >> 2);
				num_ = <number>(num_ << 6);
				num_ = <number>(num_ | (num1_ >> 2));
				num_ = <number>(num_ << 6);
				num_ = <number>(num_ | (num0_ >> 2));
				seriesIndex = <number>truncate(Math.floor(<number>(intDivide(num_, SeriesView.iTEM_ALLOCATION))));
				seriesIndex--;
			}
		}
		let colorHitSeries: Series = null;
		let colorHitSeriesIndex: number = -1;
		if (seriesIndex >= 0) {
			let foundSeries: boolean = false;
			let checkIndex: number = 0;
			for (let series of fromEnum<Series>(attachedSeries)) {
				if (!series.mouseOverEnabled) {
					continue;
				}
				if (foundSeries) {
					break;
				}
				if (series.isStacked) {
					series.forSubVisualSeries((s: Series) => {
						if (s.uniqueIndex == seriesIndex) {
							colorHitSeries = s;
							colorHitSeriesIndex = checkIndex;
							foundSeries = true;
							return false;
						}
						return true;
					});
				} else if (series.uniqueIndex == seriesIndex) {
					colorHitSeries = series;
					colorHitSeriesIndex = checkIndex;
					break;
				}
				checkIndex++;
			}
		}
		let hitSeries: Series = null;
		if (shouldCheckComputationalHit) {
			let checkedColor: boolean = false;
			for (let currIndex = attachedSeries.count - 1; currIndex >= 0; currIndex--) {
				let currentSeries = attachedSeries._inner[currIndex];
				let currentSeriesView = currentSeries.view;
				if (!currentSeries.validateSeries(currentSeriesView.viewport, currentSeriesView.windowRect, currentSeriesView)) {
					continue;
				}
				if (!checkedColor && currIndex < colorHitSeriesIndex && shouldCheckColorHit && !shouldFavorComputational) {
					if (colorHitSeries != null) {
						hitSeries = colorHitSeries;
						checkedColor = true;
						break;
					}
				}
				if (currentSeries != null && currentSeries.actualHitTestMode == SeriesHitTestMode.Computational) {
					if (currentSeries.testHit(p, isFinger)) {
						hitSeries = currentSeries;
						break;
					}
				}
			}
			if (shouldCheckColorHit && !checkedColor) {
				if (colorHitSeries != null) {
					hitSeries = colorHitSeries;
					checkedColor = true;
				}
			}
		} else {
			hitSeries = colorHitSeries;
		}
		if (hitSeries != null) {
			let hitDataContext = hitSeries.getHitDataContext(<Point>{ $type: Point_$type, x: mouseX, y: mouseY }, isFinger);
			if (hitDataContext != null) {
				context = hitDataContext;
			}
			return {
				ret: hitSeries,
				p5: context

			};
		}
		return {
			ret: null,
			p5: context

		};
	}
	shouldInteract(target: SeriesViewer, p: Point): boolean {
		if (PointUtil.equals(p, null)) {
			return false;
		}
		let mouseX = p.x;
		let mouseY = p.y;
		if (mouseX >= target.viewportRect.left && mouseY >= target.viewportRect.top && mouseX <= target.viewportRect.left + target.viewportRect.width && mouseY <= target.viewportRect.top + target.viewportRect.height) {
			let opd = target.overviewPlusDetailPane;
			if (opd != null && opd.viewShouldInteract(p)) {
				return false;
			}
			return true;
		}
		return false;
	}
	private getParentSeries(series: Series): Series {
		if (series != null) {
			return series.resolveParentSeries();
		} else {
			return null;
		}
	}
	onImmediateModeMouseOver(target: SeriesViewer, attachedSeries: SeriesCollection, hitContext: RenderingContext, p: Point, onMouseMove: boolean, isFinger: boolean): void {
		if (!isFinger && target.actualMobileMode) {
			this.updateMobileMode(target, false);
		}
		let me: MouseEventArgs = new MouseEventArgs();
		me.position = p;
		if (target.state == InteractionState.DragPan || target.state == InteractionState.DragZoom || target.pinching || (target.overviewPlusDetailPane != null && target.overviewPlusDetailPane.isPinching)) {
			if (this.mouseOverSeries != null) {
				this.mouseOverSeries.seriesInteractionManager.onMouseLeave(this.mouseOverSeries, me.position, this.mouseOverContext, me);
				this.mouseOverSeries = null;
			}
			return;
		}
		let context: DataContext = null;
		let hitSeries: Series = ((() => { let $ret = this.getHitSeries(target, attachedSeries, hitContext, p, !onMouseMove, context, isFinger); context = $ret.p5; return $ret.ret; })());
		this.mouseOverContext = context;
		let parentSeries: Series = this.getParentSeries(hitSeries);
		if (hitSeries != null) {
			let notOver: boolean = false;
			let changeSeries: boolean = false;
			if (this.mouseOverSeries != hitSeries) {
				changeSeries = true;
			}
			if (this.mouseOverSeries == null || changeSeries) {
				notOver = true;
			}
			if (notOver) {
				if (changeSeries) {
					if (this.mouseOverSeries != null) {
						parentSeries = this.getParentSeries(this.mouseOverSeries);
						this.mouseOverSeries.seriesInteractionManager.onMouseLeave(this.mouseOverSeries, me.position, context, me);
						if (parentSeries != null) {
							parentSeries.seriesInteractionManager.onMouseLeave(parentSeries, me.position, context, me);
						}
					}
				}
				this.mouseOverSeries = hitSeries;
				hitSeries.onMouseEnter(me.position, context, me);
				if (parentSeries != null) {
					parentSeries.onMouseEnter(me.position, context, me);
				}
			} else {
				this.mouseOverSeries = hitSeries;
				hitSeries.seriesInteractionManager.onMouseMove(hitSeries, me.position, context, me);
				if (parentSeries != null) {
					parentSeries.seriesInteractionManager.onMouseMove(parentSeries, me.position, context, me);
				}
			}
		} else {
			if (this.mouseOverSeries != null) {
				parentSeries = this.getParentSeries(this.mouseOverSeries);
				this.mouseOverSeries.seriesInteractionManager.onMouseLeave(this.mouseOverSeries, me.position, context, me);
				if (parentSeries != null) {
					parentSeries.seriesInteractionManager.onMouseLeave(parentSeries, me.position, context, me);
				}
				this.mouseOverSeries = null;
			}
			for (let i = 0; i < target.series.count; i++) {
				let s = target.series._inner[i];
				if (s.seriesInteractionManager.isMouseLeaveDeferred) {
					parentSeries = this.getParentSeries(s);
					s.seriesInteractionManager.onMouseLeave(s, me.position, s.seriesInteractionManager.lastHoverItem, me);
					if (parentSeries != null) {
						parentSeries.seriesInteractionManager.onMouseLeave(parentSeries, me.position, s.seriesInteractionManager.lastHoverItem, me);
					}
				}
			}
		}
	}
	onImmediateModeMouseLeave(target: SeriesViewer, p: Point): void {
		if (this.mouseOverSeries != null) {
			let parentSeries = this.getParentSeries(this.mouseOverSeries);
			let me: MouseEventArgs = new MouseEventArgs();
			me.position = p;
			this.mouseOverSeries.seriesInteractionManager.onMouseLeave(this.mouseOverSeries, me.position, null, me);
			if (parentSeries != null) {
				parentSeries.seriesInteractionManager.onMouseLeave(parentSeries, me.position, null, me);
			}
			this.mouseOverSeries = null;
		}
		target.onMouseLeave(p);
	}
	onImmediateModeMouseDown(target: SeriesViewer, ep: EventProxy, p: Point): void {
		if (this.mouseOverSeries != null) {
			let ev = new MouseButtonEventArgs();
			ev.position = p;
			if (ep.rightButton) {
				this.mouseOverSeries.seriesInteractionManager.onRightButtonDown(this.mouseOverSeries, ev.position, this.mouseOverContext, ev);
			} else {
				this.mouseOverSeries.seriesInteractionManager.onLeftButtonDown(this.mouseOverSeries, ev.position, this.mouseOverContext, ev);
			}
		}
	}
	onImmediateModeMouseUp(target: SeriesViewer, ep: EventProxy, p: Point): void {
		let cont: DataContext;
		let overSeries = (this.mouseOverSeries != null) ? this.mouseOverSeries : ((() => { let $ret = target.view.getHitSeries(p, false, cont, false); cont = $ret.p2; return $ret.ret; })());
		if (overSeries != null) {
			let ev = new MouseButtonEventArgs();
			ev.position = p;
			if (ep.rightButton) {
				overSeries.seriesInteractionManager.onRightButtonUp(overSeries, ev.position, this.mouseOverContext, ev);
			} else {
				overSeries.seriesInteractionManager.onMouseLeftButtonUp(overSeries, ev.position, this.mouseOverContext, ev);
			}
		}
	}
	onImmediateModeContactStarted(target: SeriesViewer, p: Point, isFinger: boolean): void {
		if (!isFinger && target.mobileMode) {
			this.updateMobileMode(target, false);
		}
		if (isFinger && !target.mobileMode) {
			this.updateMobileMode(target, true);
		}
		target.onContactStarted(p, isFinger);
	}
	private updateMobileMode(target: SeriesViewer, value: boolean): void {
		if (target != null) {
			if (!this.hasUserSetMobileMode) {
				target.actualMobileMode = value;
			}
		}
	}
	onMobileModeChanged(target: SeriesViewer, mobileMode: boolean): void {
		this._hasUserSetMobileMode = true;
	}
	private _mouseOverSeries: Series = null;
	protected get mouseOverSeries(): Series {
		return this._mouseOverSeries;
	}
	protected set mouseOverSeries(value: Series) {
		this._mouseOverSeries = value;
	}
	private _mouseOverContext: DataContext = null;
	protected get mouseOverContext(): DataContext {
		return this._mouseOverContext;
	}
	protected set mouseOverContext(value: DataContext) {
		this._mouseOverContext = value;
	}
	private _hasUserSetMobileMode: boolean = false;
	protected get hasUserSetMobileMode(): boolean {
		return this._hasUserSetMobileMode;
	}
}


