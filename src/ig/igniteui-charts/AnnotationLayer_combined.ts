/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Point, Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, Type, Point_$type, Boolean_$type, runOn, delegateRemove, typeCast, delegateCombine, fromEnum, fromEn, markType, PointUtil } from "igniteui-core/type";
import { Frame } from "./Frame";
import { SeriesView } from "./SeriesView";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { SeriesViewer } from "./SeriesViewer";
import { XamDataChart } from "./XamDataChart";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { Axis } from "./Axis";
import { SeriesCollection } from "./SeriesCollection";
import { List$1 } from "igniteui-core/List$1";
import { RenderRequestedEventArgs } from "./RenderRequestedEventArgs";
import { AxisCollection } from "./AxisCollection";
import { Brush } from "igniteui-core/Brush";
import { Rect } from "igniteui-core/Rect";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";

/**
 * @hidden 
 */
export abstract class AnnotationLayer extends Series {
	static $t: Type = markType(AnnotationLayer, 'AnnotationLayer', (<any>Series).$type);
	constructor() {
		super();
		this.userCursorPosition = <Point>{ $type: Point_$type, x: NaN, y: NaN };
	}
	protected createView(): SeriesView {
		return new AnnotationLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.annotationView = <AnnotationLayerView>view;
	}
	protected isSeriesValid(series: Series): boolean {
		if (series == null) {
			return false;
		}
		if (series.isAnnotationLayer) {
			return false;
		}
		if (series.isValueOverlay) {
			return false;
		}
		if (series == this) {
			return false;
		}
		return series.validateSeries(series.view.viewport, series.view.windowRect, series.view);
	}
	private _annotationView: AnnotationLayerView;
	protected get annotationView(): AnnotationLayerView {
		return this._annotationView;
	}
	protected set annotationView(value: AnnotationLayerView) {
		this._annotationView = value;
	}
	get useIndex(): boolean {
		return <boolean>this.getValue(AnnotationLayer.useIndexProperty);
	}
	set useIndex(value: boolean) {
		this.setValue(AnnotationLayer.useIndexProperty, value);
	}
	static readonly useIndexPropertyName: string = "UseIndex";
	static readonly useIndexProperty: DependencyProperty = DependencyProperty.register(AnnotationLayer.useIndexPropertyName, Boolean_$type, (<any>AnnotationLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnnotationLayer>sender).raisePropertyChanged(AnnotationLayer.useIndexPropertyName, e.oldValue, e.newValue)));
	get useLegend(): boolean {
		return <boolean>this.getValue(AnnotationLayer.useLegendProperty);
	}
	set useLegend(value: boolean) {
		this.setValue(AnnotationLayer.useLegendProperty, value);
	}
	static readonly useLegendPropertyName: string = "UseLegend";
	static readonly useLegendProperty: DependencyProperty = DependencyProperty.register(AnnotationLayer.useLegendPropertyName, Boolean_$type, (<any>AnnotationLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnnotationLayer>sender).raisePropertyChanged(AnnotationLayer.useLegendPropertyName, e.oldValue, e.newValue)));
	get cursorPosition(): Point {
		return <Point>this.getValue(AnnotationLayer.cursorPositionProperty);
	}
	set cursorPosition(value: Point) {
		this.setValue(AnnotationLayer.cursorPositionProperty, value);
	}
	static readonly cursorPositionPropertyName: string = "CursorPosition";
	static readonly cursorPositionProperty: DependencyProperty = DependencyProperty.register(AnnotationLayer.cursorPositionPropertyName, Point_$type, (<any>AnnotationLayer).$type, new PropertyMetadata(2, <Point>{ $type: Point_$type, x: NaN, y: NaN }, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnnotationLayer>sender).raisePropertyChanged(AnnotationLayer.cursorPositionPropertyName, e.oldValue, e.newValue)));
	get isDefaultCrosshairDisabled(): boolean {
		return <boolean>this.getValue(AnnotationLayer.isDefaultCrosshairDisabledProperty);
	}
	set isDefaultCrosshairDisabled(value: boolean) {
		this.setValue(AnnotationLayer.isDefaultCrosshairDisabledProperty, value);
	}
	static readonly isDefaultCrosshairDisabledPropertyName: string = "IsDefaultCrosshairDisabled";
	static readonly isDefaultCrosshairDisabledProperty: DependencyProperty = DependencyProperty.register(AnnotationLayer.isDefaultCrosshairDisabledPropertyName, Boolean_$type, (<any>AnnotationLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnnotationLayer>sender).raisePropertyChanged(AnnotationLayer.isDefaultCrosshairDisabledPropertyName, e.oldValue, e.newValue)));
	protected get_isDefaultCrosshairBehaviorDisabled(): boolean {
		return this.isDefaultCrosshairDisabled;
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	protected get_isIndexed(): boolean {
		return this.useIndex || this.useLegend;
	}
	protected get_isUsableInLegend(): boolean {
		return this.useLegend;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			let oldViewer: SeriesViewer = <SeriesViewer>oldValue;
			let newViewer: SeriesViewer = <SeriesViewer>newValue;
			if (oldViewer != null) {
				this.unregisterSeries(oldViewer.series);
				let $t = oldViewer.series;
				$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.series_CollectionChanged));
				if (typeCast<XamDataChart>((<any>XamDataChart).$type, oldViewer) !== null) {
					let oldChart = <XamDataChart>oldViewer;
					this.unregisterAxes(oldChart.axes);
					let $t1 = oldChart.axes;
					$t1.collectionChanged = delegateRemove($t1.collectionChanged, runOn(this, this.axes_CollectionChanged));
				}
			}
			if (newViewer != null) {
				this.registerSeries(newViewer.series);
				let $t2 = newViewer.series;
				$t2.collectionChanged = delegateCombine($t2.collectionChanged, runOn(this, this.series_CollectionChanged));
				if (typeCast<XamDataChart>((<any>XamDataChart).$type, newViewer) !== null) {
					let newChart = <XamDataChart>newViewer;
					this.registerAxes(newChart.axes);
					let $t3 = newChart.axes;
					$t3.collectionChanged = delegateCombine($t3.collectionChanged, runOn(this, this.axes_CollectionChanged));
				}
			}
			break;

			case AnnotationLayer.useLegendPropertyName:

			case AnnotationLayer.useIndexPropertyName:
			if (this.isIndexed) {
				if (this.index == -1) {
					this.index = XamDataChart.findSeriesIndex(this);
				}
			} else {
				this.index = -1;
				this.actualBrush = null;
				this.actualOutline = null;
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.onLegendSortChanged();
			}
			this.renderSeries(true);
			break;

			case Series.transitionProgressPropertyName:
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.renderFrame(this.currentFrame, this.view);
			} else {
				this.renderFrame(this.transitionFrame, this.view);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case AnnotationLayer.isDefaultCrosshairDisabledPropertyName:
			if (this.seriesViewer != null) {
				this.seriesViewer.onHoverBehaviorOverridesChanged();
			}
			break;

			case AnnotationLayer.cursorPositionPropertyName:
			this.userCursorPosition = this.cursorPosition;
			this.onCursorPointMoved(this.cursorPosition);
			break;

			case "ShouldRenderAsOverlay":
			if (this.seriesViewer != null) {
				this.view.detachFromChart(this.seriesViewer);
				this.view.attachToChart(this.seriesViewer);
			}
			break;

		}

	}
	private _userCursorPosition: Point = null;
	protected get userCursorPosition(): Point {
		return this._userCursorPosition;
	}
	protected set userCursorPosition(value: Point) {
		this._userCursorPosition = value;
	}
	private unregisterSeries(seriesCollection: SeriesCollection): void {
		for (let series of fromEnum<Series>(seriesCollection)) {
			if (!(series == this)) {
				series.renderRequested = delegateRemove(series.renderRequested, runOn(this, this.series_RenderRequested));
			}
		}
		this.renderSeries(true);
	}
	private unregisterAxes(axisCollection: AxisCollection): void {
		for (let axis of fromEnum<Axis>(axisCollection)) {
			axis.renderRequested = delegateRemove(axis.renderRequested, runOn(this, this.axis_RenderRequested));
		}
		this.renderSeries(true);
	}
	private registerSeries(seriesCollection: SeriesCollection): void {
		for (let series of fromEnum<Series>(seriesCollection)) {
			if (!(series == this)) {
				series.renderRequested = delegateCombine(series.renderRequested, runOn(this, this.series_RenderRequested));
			}
		}
		this.renderSeries(true);
	}
	private registerAxes(axisCollection: AxisCollection): void {
		for (let axis of fromEnum<Axis>(axisCollection)) {
			axis.renderRequested = delegateCombine(axis.renderRequested, runOn(this, this.axis_RenderRequested));
		}
		this.renderSeries(true);
	}
	protected isDependentOnAxis(axis: Axis): boolean {
		if (axis == null) {
			return false;
		}
		return true;
	}
	private axis_RenderRequested(sender: any, e: RenderRequestedEventArgs): void {
		if (this.isDependentOnAxis(<Axis>sender)) {
			this.onDependentAxisRender(<Axis>sender, e.animate);
		}
	}
	protected isDependentOnSeries(series: Series): boolean {
		if (series == null) {
			return false;
		}
		if (series.isAnnotationLayer) {
			return false;
		}
		return true;
	}
	private series_RenderRequested(sender: any, e: RenderRequestedEventArgs): void {
		if (this.isDependentOnSeries(<Series>sender)) {
			this.onDependentSeriesRender(<Series>sender, e.animate);
		}
	}
	protected onDependentAxisRender(axis: Axis, animate: boolean): void {
	}
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
	}
	private series_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onSeriesCollectionChanged(e);
	}
	private axes_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onAxisCollectionChanged(e);
	}
	protected getBrush(): Brush {
		if (this.actualBrush != null) {
			return this.actualBrush;
		}
		return this.brush;
	}
	protected getOutline(): Brush {
		if (this.actualOutline != null) {
			return this.actualOutline;
		}
		return this.outline;
	}
	protected onAxisCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let axis of fromEn<Axis>(e.oldItems)) {
				axis.renderRequested = delegateRemove(axis.renderRequested, runOn(this, this.axis_RenderRequested));
			}
		}
		if (e.newItems != null) {
			for (let axis1 of fromEn<Axis>(e.newItems)) {
				axis1.renderRequested = delegateCombine(axis1.renderRequested, runOn(this, this.axis_RenderRequested));
			}
		}
		this.renderSeries(true);
	}
	protected onSeriesCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let series of fromEn<Series>(e.oldItems)) {
				series.renderRequested = delegateRemove(series.renderRequested, runOn(this, this.series_RenderRequested));
			}
		}
		if (e.newItems != null) {
			for (let series1 of fromEn<Series>(e.newItems)) {
				series1.renderRequested = delegateCombine(series1.renderRequested, runOn(this, this.series_RenderRequested));
			}
		}
		this.renderSeries(true);
	}
	private _previousFrame: Frame = null;
	protected get previousFrame(): Frame {
		return this._previousFrame;
	}
	protected set previousFrame(value: Frame) {
		this._previousFrame = value;
	}
	private _currentFrame: Frame = null;
	protected get currentFrame(): Frame {
		return this._currentFrame;
	}
	protected set currentFrame(value: Frame) {
		this._currentFrame = value;
	}
	private _transitionFrame: Frame = null;
	protected get transitionFrame(): Frame {
		return this._transitionFrame;
	}
	protected set transitionFrame(value: Frame) {
		this._transitionFrame = value;
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(true);
	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		if (this.clearAndAbortIfInvalid1(this.view)) {
			return;
		}
		if (this.shouldAnimate(animate) && !this.skipPrepare) {
			let previousFrame: Frame = this.previousFrame;
			if (this.animationActive()) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				this.previousFrame = this.transitionFrame;
				this.transitionFrame = previousFrame;
			} else {
				this.previousFrame = this.currentFrame;
				this.currentFrame = previousFrame;
			}
			this.prepareFrame(this.currentFrame, this.view);
			this.startAnimation();
		} else {
			if (!this.skipPrepare) {
				this.prepareFrame(this.currentFrame, this.view);
			}
			this.renderFrame(this.currentFrame, this.view);
		}
	}
	protected get_isAnnotationLayer(): boolean {
		return true;
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		this.annotationView.onRenderingFrame();
	}
	protected getCategoryPosition(series: Series): Tuple$2<boolean, Point> {
		let pos = <Point>{ $type: Point_$type, x: this.currentPosition.x, y: this.currentPosition.y };
		if (series.isVertical) {
			if (isNaN_(this.currentPosition.y)) {
				return new Tuple$2<boolean, Point>(Boolean_$type, Point_$type, false, pos);
			}
			if (isNaN_(this.currentPosition.x)) {
				pos.x = 0;
				return new Tuple$2<boolean, Point>(Boolean_$type, Point_$type, true, pos);
			}
		} else {
			if (isNaN_(this.currentPosition.x)) {
				return new Tuple$2<boolean, Point>(Boolean_$type, Point_$type, false, pos);
			}
			if (isNaN_(this.currentPosition.y)) {
				pos.y = 0;
				return new Tuple$2<boolean, Point>(Boolean_$type, Point_$type, true, pos);
			}
		}
		return new Tuple$2<boolean, Point>(Boolean_$type, Point_$type, true, pos);
	}
	protected onCursorPointMoved(point: Point): void {
		super.onCursorPointMoved(point);
		if (isNaN_(this.userCursorPosition.x) && isNaN_(this.userCursorPosition.y)) {
			if (isNaN_(point.x) && isNaN_(point.y)) {
				this.annotationView.deferPositionClear();
				return;
			} else {
				this.annotationView.resetDeferredClear();
				this.currentPosition = point;
			}
		} else {
			this.annotationView.resetDeferredClear();
			this.currentPosition = this.userCursorPosition;
		}
		this.renderSeries(true);
	}
	currentPosition: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let valid = super.validateSeries(viewportRect, windowRect, view);
		if (!this.view.ready()) {
			return valid = false;
		}
		return valid;
	}
	protected get_useOverlayScheduler(): boolean {
		return this.shouldRenderAsOverlay;
	}
	private _shouldRenderAsOverlay: boolean = false;
	get shouldRenderAsOverlay(): boolean {
		return this._shouldRenderAsOverlay;
	}
	set shouldRenderAsOverlay(value: boolean) {
		let oldValue = this._shouldRenderAsOverlay;
		this._shouldRenderAsOverlay = value;
		this.raisePropertyChanged("ShouldRenderAsOverlay", oldValue, this._shouldRenderAsOverlay);
	}
}

/**
 * @hidden 
 */
export class AnnotationLayerView extends SeriesView {
	static $t: Type = markType(AnnotationLayerView, 'AnnotationLayerView', (<any>SeriesView).$type);
	constructor(model: AnnotationLayer) {
		super(model);
		this.annotationModel = model;
	}
	private _annotationModel: AnnotationLayer = null;
	protected get annotationModel(): AnnotationLayer {
		return this._annotationModel;
	}
	protected set annotationModel(value: AnnotationLayer) {
		this._annotationModel = value;
	}
	private _clearDeferred: boolean = false;
	private _timerId: number = -1;
	private tick(): void {
		if (this._clearDeferred) {
			this._clearDeferred = false;
			this._timerId = -1;
			this.annotationModel.currentPosition = <Point>{ $type: Point_$type, x: NaN, y: NaN };
			this.annotationModel.renderSeries(true);
		}
	}
	deferPositionClear(): void {
		this._clearDeferred = true;
		if (this.model.renderer != null) {
			this.model.renderer.setTimeout(runOn(this, this.tick), 300);
		} else {
			this._timerId = window.setTimeout(runOn(this, this.tick), 300);
		}
	}
	resetDeferredClear(): void {
		if (this._clearDeferred == true) {
			this._clearDeferred = false;
			if (this._timerId != -1) {
				window.clearTimeout(this._timerId);
				this._timerId = -1;
			}
		}
	}
	onRenderingFrame(): void {
		this.makeDirty();
	}
}


