/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, Boolean_$type, EnumUtil, typeCast, fromEnum } from "igniteui-core/type";
import { IBucketizer, IBucketizer_$type } from "./IBucketizer";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { CategoryAngleAxis } from "./CategoryAngleAxis";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { SeriesView } from "./SeriesView";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { Axis } from "./Axis";
import { truncate } from "igniteui-core/number";
import { MarkerSeries } from "./MarkerSeries";
import { IHasCategoryModePreference, IHasCategoryModePreference_$type } from "./IHasCategoryModePreference";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { SeriesRenderer$2 } from "./SeriesRenderer$2";
import { RadialFrame } from "./RadialFrame";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CategoryMode } from "./CategoryMode";
import { List$1 } from "igniteui-core/List$1";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { ContentControl } from "igniteui-core/ContentControl";
import { SeriesViewer } from "./SeriesViewer";
import { ScalerParams } from "./ScalerParams";
import { Marker } from "./Marker";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { RadialAxes } from "./RadialAxes";
import { Frame } from "./Frame";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { NumericAxisBase } from "./NumericAxisBase";
import { SeriesRenderingArguments } from "./SeriesRenderingArguments";
import { Debug } from "igniteui-core/Debug";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { DataContext } from "igniteui-core/DataContext";
import { Pool$1 } from "igniteui-core/Pool$1";

/**
 * @hidden 
 */
export abstract class RadialBucketCalculator extends Base implements IBucketizer {
	static $t: Type = markType(RadialBucketCalculator, 'RadialBucketCalculator', (<any>Base).$type, [IBucketizer_$type]);
	private _view: RadialBaseView = null;
	protected get view(): RadialBaseView {
		return this._view;
	}
	protected set view(value: RadialBaseView) {
		this._view = value;
	}
	constructor(view: RadialBaseView) {
		super();
		this.view = view;
	}
	private _firstBucket: number = 0;
	get firstBucket(): number {
		return this._firstBucket;
	}
	set firstBucket(value: number) {
		this._firstBucket = value;
	}
	private _lastBucket: number = 0;
	get lastBucket(): number {
		return this._lastBucket;
	}
	set lastBucket(value: number) {
		this._lastBucket = value;
	}
	private _bucketSize: number = 0;
	get bucketSize(): number {
		return this._bucketSize;
	}
	set bucketSize(value: number) {
		this._bucketSize = value;
	}
	getBucket(index: number): number[] {
		throw new NotImplementedException(0);
	}
	getBucketWithoutUnknowns(index: number): number[] {
		return this.getBucket(index);
	}
	getErrorBucket(index: number, column: IFastItemColumn$1<number>): number {
		return NaN;
	}
	getBucketInfo(firstBucket: number, lastBucket: number, bucketSize: number, resolution: number): { p0: number; p1: number; p2: number; p3: number; } {
		firstBucket = this.firstBucket;
		lastBucket = this.lastBucket;
		bucketSize = this.bucketSize;
		resolution = this.view.radialModel.resolution;
		return {
			p0: firstBucket,
			p1: lastBucket,
			p2: bucketSize,
			p3: resolution

		};
	}
	calculateBuckets(resolution: number): void {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let angleAxis: CategoryAngleAxis = this.view.radialModel.angleAxis;
		if (windowRect.isEmpty || viewportRect.isEmpty || angleAxis == null || this.view.radialModel.fastItemsSource == null || this.view.radialModel.fastItemsSource.count == 0) {
			this.bucketSize = 0;
			return;
		}
		let x0: number = Math.floor(angleAxis.getMinimumViewable(viewportRect, windowRect));
		let x1: number = Math.ceil(angleAxis.getMaximumViewable(viewportRect, windowRect));
		if (angleAxis.isInverted) {
			x1 = Math.ceil(angleAxis.getMinimumViewable(viewportRect, windowRect));
			x0 = Math.floor(angleAxis.getMaximumViewable(viewportRect, windowRect));
		}
		if (x1 < x0) {
			x1 = angleAxis.cachedItemsCount + x1;
		}
		let valueAxis: NumericRadiusAxis = this.view.radialModel.valueAxis;
		let extentScale: number = valueAxis != null ? valueAxis.actualRadiusExtentScale : 0.75;
		let circum: number = Math.min(viewportRect.width, viewportRect.height) * 0.5 * (extentScale) * 2 * Math.PI;
		let c: number = Math.floor((x1 - x0 + 1) * resolution / circum);
		this.bucketSize = <number>truncate(Math.max(1, c));
		this.firstBucket = <number>truncate(Math.max(0, Math.floor(x0 / this.bucketSize) - 1));
		this.lastBucket = <number>truncate(Math.ceil(x1 / this.bucketSize));
	}
	cacheValues(): void {
	}
	unCacheValues(): void {
	}
}

/**
 * @hidden 
 */
export abstract class RadialBase extends MarkerSeries implements IHasCategoryModePreference {
	static $t: Type = markType(RadialBase, 'RadialBase', (<any>MarkerSeries).$type, [IHasCategoryModePreference_$type]);
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.radialView = <RadialBaseView>view;
	}
	private _radialView: RadialBaseView;
	get radialView(): RadialBaseView {
		return this._radialView;
	}
	set radialView(value: RadialBaseView) {
		this._radialView = value;
	}
	constructor() {
		super();
		this.seriesRenderer = new SeriesRenderer$2<RadialFrame, RadialBaseView>((<any>RadialFrame).$type, (<any>RadialBaseView).$type, 1, runOn(this, this.prepareFrame), runOn(this, this.renderFrame), runOn(this, this.animationActive), runOn(this, this.startAnimation), runOn(this, this.checkFlush), (f: RadialFrame) => this.radialView.bucketCalculator.calculateBuckets(this.resolution));
	}
	private checkFlush(): void {
		if (this.animator.needsFlush) {
			this.animator.flush();
		}
	}
	get categoryAxis(): CategoryAxisBase {
		return this.angleAxis;
	}
	getCategoryAxisIfPresent(): CategoryAxisBase {
		return this.angleAxis;
	}
	getVisiblePointsOfInterest1(points: List$1<SeriesPointOfInterest>): boolean {
		if (!this.hasMarkers) {
			return false;
		}
		let xAxis = this.angleAxis;
		let xParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, xAxis.isInverted);
		xParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let yAxis = this.valueAxis;
		let yParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, yAxis.isInverted);
		yParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		points.clear();
		this.markerView.doToAllMarkers((m: Marker) => {
			if (m._visibility == Visibility.Visible) {
				let p = new SeriesPointOfInterest();
				let xPos = m.canvasLeft;
				let yPos = m.canvasTop;
				if (xPos < this.viewport.left || xPos > this.viewport.right || yPos < this.viewport.top || yPos > this.viewport.bottom) {
					return;
				}
				p.xValue = xAxis.getUnscaledValue(xPos, xParams);
				p.yValue = yAxis.getUnscaledValue(yPos, yParams);
				p.label = xAxis.getValueLabel(m.currentIndex);
				p.dataContext = <DataContext>m.content;
				points.add(p);
			}
		});
		return true;
	}
	private _seriesRenderer: SeriesRenderer$2<RadialFrame, RadialBaseView> = null;
	get seriesRenderer(): SeriesRenderer$2<RadialFrame, RadialBaseView> {
		return this._seriesRenderer;
	}
	set seriesRenderer(value: SeriesRenderer$2<RadialFrame, RadialBaseView>) {
		this._seriesRenderer = value;
	}
	protected get_isRadial(): boolean {
		return true;
	}
	get angleAxis(): CategoryAngleAxis {
		return <CategoryAngleAxis>this.getValue(RadialBase.angleAxisProperty);
	}
	set angleAxis(value: CategoryAngleAxis) {
		this.setValue(RadialBase.angleAxisProperty, value);
	}
	static readonly angleAxisPropertyName: string = "AngleAxis";
	static readonly angleAxisProperty: DependencyProperty = DependencyProperty.register(RadialBase.angleAxisPropertyName, (<any>CategoryAngleAxis).$type, (<any>RadialBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialBase>sender).raisePropertyChanged(RadialBase.angleAxisPropertyName, e.oldValue, e.newValue)));
	get valueAxis(): NumericRadiusAxis {
		return <NumericRadiusAxis>this.getValue(RadialBase.valueAxisProperty);
	}
	set valueAxis(value: NumericRadiusAxis) {
		this.setValue(RadialBase.valueAxisProperty, value);
	}
	static readonly valueAxisPropertyName: string = "ValueAxis";
	static readonly valueAxisProperty: DependencyProperty = DependencyProperty.register(RadialBase.valueAxisPropertyName, (<any>NumericRadiusAxis).$type, (<any>RadialBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialBase>sender).raisePropertyChanged(RadialBase.valueAxisPropertyName, e.oldValue, e.newValue)));
	getAxes(): Axis[] {
		return <Axis[]>[ this.angleAxis, this.valueAxis ];
	}
	get clipSeriesToBounds(): boolean {
		return <boolean>this.getValue(RadialBase.clipSeriesToBoundsProperty);
	}
	set clipSeriesToBounds(value: boolean) {
		this.setValue(RadialBase.clipSeriesToBoundsProperty, value);
	}
	static readonly clipSeriesToBoundsPropertyName: string = "ClipSeriesToBounds";
	static readonly clipSeriesToBoundsProperty: DependencyProperty = DependencyProperty.register(RadialBase.clipSeriesToBoundsPropertyName, Boolean_$type, (<any>RadialBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialBase>sender).raisePropertyChanged(RadialBase.clipSeriesToBoundsPropertyName, e.oldValue, e.newValue)));
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.radialView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.radialView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	abstract preferredCategoryMode(axis: CategoryAxisBase): CategoryMode;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			if (oldValue != null && newValue == null) {
				if (this.angleAxis != null) {
					this.angleAxis.deregisterSeries(this);
				}
				if (this.valueAxis != null) {
					this.valueAxis.deregisterSeries(this);
				}
			}
			if (oldValue == null && newValue != null) {
				if (this.angleAxis != null) {
					this.angleAxis.registerSeries(this);
				}
				if (this.valueAxis != null) {
					this.valueAxis.registerSeries(this);
				}
			}
			this.radialView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

			case RadialBase.angleAxisPropertyName:
			if (this.angleAxis != null && this.valueAxis != null) {
				this._axes = new RadialAxes(this.valueAxis, this.angleAxis);
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.radialView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

			case RadialBase.valueAxisPropertyName:
			if (this.angleAxis != null && this.valueAxis != null) {
				this._axes = new RadialAxes(this.valueAxis, this.angleAxis);
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.radialView.bucketCalculator.calculateBuckets(this.resolution);
			if (this.valueAxis == null || !this.valueAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case Series.syncLinkPropertyName:
			if (this.syncLink != null && this.seriesViewer != null) {
				this.radialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case Series.transitionProgressPropertyName:
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.renderFrame(this.currentFrame, this.radialView);
			} else {
				this.renderFrame(this.transitionFrame, this.radialView);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case RadialBase.clipSeriesToBoundsPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.visibilityProxyPropertyName:
			if (EnumUtil.getEnumValue<Visibility>(Visibility_$type, oldValue) != Visibility.Visible && EnumUtil.getEnumValue<Visibility>(Visibility_$type, newValue) == Visibility.Visible) {
				this.radialView.bucketCalculator.calculateBuckets(this.resolution);
			}
			break;

		}

	}
	canUseAsValueAxis(axis: any): boolean {
		if (typeCast<NumericRadiusAxis>((<any>NumericRadiusAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsAngleAxis(axis: any): boolean {
		if (typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	getItem(world: Point): any {
		let index: number = this.getItemIndex(world);
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	getAngleFromWorld(world: Point): number {
		let windowRect = this.view.windowRect;
		let viewportRect = this.view.viewport;
		if (this.angleAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty && this._axes != null) {
			let angle: number = this._axes.getAngleTo(world);
			if (angle < 0) {
				angle += Math.PI * 2;
			}
			if (angle > Math.PI * 2) {
				angle -= Math.PI * 2;
			}
			return angle;
		}
		return NaN;
	}
	getExactItemIndex(world: Point): number {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let rowIndex: number = -1;
		if (this.angleAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty && this._axes != null) {
			let angle: number = this._axes.getAngleTo(world);
			if (angle < 0) {
				angle += Math.PI * 2;
			}
			if (angle > Math.PI * 2) {
				angle -= Math.PI * 2;
			}
			let unscaled: number = this.angleAxis.getUnscaledAngle(angle);
			if (this.angleAxis.categoryMode != CategoryMode.Mode0) {
				unscaled -= 0.5;
			}
			rowIndex = unscaled;
		}
		return rowIndex;
	}
	getItemIndex(world: Point): number {
		let index = <number>truncate(Math.round(this.getExactItemIndex(world)));
		if (this.fastItemsSource != null && index == this.fastItemsSource.count) {
			index = 0;
		}
		return index;
	}
	scrollIntoView(item: any): boolean {
		return false;
	}
	previousFrame: RadialFrame = new RadialFrame(3);
	transitionFrame: RadialFrame = new RadialFrame(3);
	currentFrame: RadialFrame = new RadialFrame(3);
	abstract getOffsetValue(): number;
	abstract getCategoryWidth(): number;
	abstract prepareFrame(radialFrame: RadialFrame, view: RadialBaseView): void;
	abstract renderFrame(radialFrame: RadialFrame, view: RadialBaseView): void;
	_axes: RadialAxes = null;
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.angleAxis != null) {
			this.angleAxis.renderAxis1(false);
		}
		if (this.valueAxis != null) {
			this.valueAxis.renderAxis1(false);
		}
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		let radialView = <RadialBaseView>view;
		if (!super.validateSeries(viewportRect, windowRect, view) || !view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.angleAxis == null || this.angleAxis.itemsSource == null || this.valueAxis == null || this._axes == null || this.fastItemsSource == null || this.angleAxis.seriesViewer == null || this.valueAxis.seriesViewer == null || this.valueAxis.actualMinimumValue == this.valueAxis.actualMaximumValue) {
			radialView.bucketCalculator.bucketSize = 0;
			isValid = false;
		}
		return isValid;
	}
	renderSeriesOverride(animate: boolean): void {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		if (!this.validateSeries(viewportRect, windowRect, this.view)) {
			this.clearRendering(true, this.view);
			return;
		}
		let args: SeriesRenderingArguments = new SeriesRenderingArguments(this, viewportRect, windowRect, animate, this.skipPrepare);
		let $ret1 = this.seriesRenderer.render(args, this.previousFrame, this.currentFrame, this.transitionFrame, this.radialView);
		this.previousFrame = $ret1.p1;
		this.currentFrame = $ret1.p2;
		this.transitionFrame = $ret1.p3;
	}
	getMode2Index(): number {
		let result: number = 0;
		for (let currentSeries of fromEnum<Series>(this.seriesViewer.series)) {
			if (currentSeries == this) {
				return result;
			}
			let currentRadialSeries: RadialBase = typeCast<RadialBase>((<any>RadialBase).$type, currentSeries);
			if (currentRadialSeries != null && currentRadialSeries.angleAxis == this.angleAxis && currentRadialSeries.preferredCategoryMode(currentRadialSeries.angleAxis) == CategoryMode.Mode2) {
				result++;
			}
		}
		Debug.assert1(false, "RadialBase.GetMode2Index failed to find series");
		return -1;
	}
}

/**
 * @hidden 
 */
export class RadialBaseView extends MarkerSeriesView {
	static $t: Type = markType(RadialBaseView, 'RadialBaseView', (<any>MarkerSeriesView).$type);
	private _bucketCalculator: RadialBucketCalculator = null;
	get bucketCalculator(): RadialBucketCalculator {
		return this._bucketCalculator;
	}
	set bucketCalculator(value: RadialBucketCalculator) {
		this._bucketCalculator = value;
	}
	private _radialModel: RadialBase = null;
	get radialModel(): RadialBase {
		return this._radialModel;
	}
	set radialModel(value: RadialBase) {
		this._radialModel = value;
	}
	constructor(model: RadialBase) {
		super(model);
		this.radialModel = model;
		this.markers = new Pool$1<Marker>((<any>Marker).$type);
		this.initMarkers1(this.markers);
	}
	private _markers: Pool$1<Marker> = null;
	get markers(): Pool$1<Marker> {
		return this._markers;
	}
	set markers(value: Pool$1<Marker>) {
		this._markers = value;
	}
	doToAllMarkers(action: (arg1: Marker) => void): void {
		this.markers.doToAll(action);
	}
	private _radius: number = 0;
	get radius(): number {
		return this._radius;
	}
	set radius(value: number) {
		this._radius = value;
	}
	private _center: Point = null;
	get center(): Point {
		return this._center;
	}
	set center(value: Point) {
		this._center = value;
	}
}


