/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialOverlay } from "./FinancialOverlay";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { List$1 } from "igniteui-core/List$1";
import { Type, Base, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, Point, typeGetValue, Number_$type, typeCast, runOn, markType, getEnumerator, ValueType, IDisposable, IDisposable_$type, Point_$type, fromEnum, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryFrame } from "./CategoryFrame";
import { FinancialSeries } from "./FinancialSeries";
import { Series } from "./Series";
import { SafeEnumerable } from "./SafeEnumerable";
import { TrendCalculators } from "igniteui-core/TrendCalculators";
import { AxisRange } from "./AxisRange";
import { Axis } from "./Axis";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { SeriesView } from "./SeriesView";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { SeriesViewer } from "./SeriesViewer";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Polyline } from "igniteui-core/Polyline";
import { Polygon } from "igniteui-core/Polygon";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { Flattener } from "igniteui-core/Flattener";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class BollingerBandsOverlay extends FinancialOverlay {
	static $t: Type = markType(BollingerBandsOverlay, 'BollingerBandsOverlay', (<any>FinancialOverlay).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>BollingerBandsOverlay).$type;
		this.previousFrame = new CategoryFrame(4);
		this.transitionFrame = new CategoryFrame(4);
		this.currentFrame = new CategoryFrame(4);
	}
	get period(): number {
		return typeGetValue(this.getValue(BollingerBandsOverlay.periodProperty));
	}
	set period(value: number) {
		this.setValue(BollingerBandsOverlay.periodProperty, value);
	}
	static readonly periodPropertyName: string = "Period";
	static readonly periodProperty: DependencyProperty = DependencyProperty.register(BollingerBandsOverlay.periodPropertyName, Number_$type, (<any>BollingerBandsOverlay).$type, new PropertyMetadata(2, 14, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BollingerBandsOverlay>sender).raisePropertyChanged(BollingerBandsOverlay.periodPropertyName, e.oldValue, e.newValue)));
	get multiplier(): number {
		return <number>this.getValue(BollingerBandsOverlay.multiplierProperty);
	}
	set multiplier(value: number) {
		this.setValue(BollingerBandsOverlay.multiplierProperty, value);
	}
	static readonly multiplierPropertyName: string = "Multiplier";
	static readonly multiplierProperty: DependencyProperty = DependencyProperty.register(BollingerBandsOverlay.multiplierPropertyName, Number_$type, (<any>BollingerBandsOverlay).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BollingerBandsOverlay>sender).raisePropertyChanged(BollingerBandsOverlay.multiplierPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		if (this.getTypicalBasedOn().contains(propertyName)) {
			this.overlayValid = false;
		}
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case BollingerBandsOverlay.periodPropertyName:
			this.overlayValid = false;
			this.renderSeries(false);
			break;

			case BollingerBandsOverlay.multiplierPropertyName:
			this.renderSeries(false);
			break;

		}

	}
	private _maxBandWidth: number = 0;
	private _minBandWidth: number = 0;
	protected validateOverlay(): boolean {
		this.averageColumn.clear();
		this.deviationColumn.clear();
		let sma: IEnumerator$1<number> = getEnumerator(TrendCalculators.sMA(new SafeEnumerable(this.typicalColumn), this.period));
		let stdev: IEnumerator$1<number> = getEnumerator(TrendCalculators.sTDEV(new SafeEnumerable(this.typicalColumn), this.period));
		this._minBandWidth = 1.7976931348623157E+308;
		this._maxBandWidth = -1.7976931348623157E+308;
		let moreSma: boolean = true;
		let moreStdev: boolean = true;
		let multiplier: number = this.multiplier;
		while (moreSma || moreStdev) {
			if (sma.moveNext()) {
				this.averageColumn.add(sma.current);
			} else {
				moreSma = false;
			}
			if (stdev.moveNext()) {
				this.deviationColumn.add(stdev.current);
			} else {
				moreStdev = false;
			}
			if (moreSma && moreStdev) {
				this._minBandWidth = Math.min(this._minBandWidth, sma.current - stdev.current * multiplier);
				this._maxBandWidth = Math.max(this._maxBandWidth, sma.current + stdev.current * multiplier);
			}
		}
		return true;
	}
	getRange(axis: Axis): AxisRange {
		if (this.averageColumn == null || this.deviationColumn == null || axis == null || this.fastItemsSource == null || axis != this.yAxis) {
			return null;
		}
		let range: AxisRange = new AxisRange(this._minBandWidth, this._maxBandWidth);
		return range;
	}
	averageColumn: List$1<number> = new List$1<number>(Number_$type, 0);
	deviationColumn: List$1<number> = new List$1<number>(Number_$type, 0);
	prepareFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.prepareFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xaxis: CategoryAxisBase = this.xAxis;
		let yaxis: NumericYAxis = this.yAxis;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
		frame.buckets.clear();
		frame.markers.clear();
		frame.trend.clear();
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis);
		if (sortingXAxis != null && sortingXAxis.sortedIndices.count != this.fastItemsSource.count) {
			return;
		}
		let offset: number = 0;
		offset = this.getOffset(windowRect, viewportRect, effectiveViewportRect);
		if (!this.overlayValid) {
			this.overlayValid = this.validateOverlay();
			if (this.yAxis != null) {
				this.yAxis.updateRange1(true);
			}
		}
		yParams.referenceValue = this.getReferenceValue();
		let singlePixelSpan: number = this.xAxis.getUnscaledValue(2, xParams) - this.xAxis.getUnscaledValue(1, xParams);
		for (let i: number = view.bucketCalculator.firstBucket; i <= view.bucketCalculator.lastBucket; ++i) {
			let bucket: number[];
			if (sortingXAxis == null) {
				bucket = view.bucketCalculator.getBucket(i);
			} else {
				let index: number = sortingXAxis.sortedIndices._inner[i];
				let bucketX: number = sortingXAxis.getUnscaledValueAt(index);
				let bucketAverage: number = this.averageColumn._inner[i];
				let bucketDeviation: number = this.deviationColumn._inner[i];
				let currentAverage: number = bucketAverage;
				let currentDeviation: number = bucketDeviation;
				let currentX: number = bucketX;
				let counter: number = 1;
				while (i < view.bucketCalculator.lastBucket) {
					index = sortingXAxis.sortedIndices._inner[i + 1];
					currentX = sortingXAxis.getUnscaledValueAt(index);
					if (currentX - bucketX > singlePixelSpan) {
						break;
					}
					i++;
					currentAverage += this.averageColumn._inner[i];
					currentDeviation += this.deviationColumn._inner[i];
					counter++;
				}
				currentAverage /= counter;
				currentDeviation /= counter;
				let param0: number = currentAverage - currentDeviation * this.multiplier;
				let param1: number = currentAverage;
				let param2: number = currentAverage + currentDeviation * this.multiplier;
				let xVal: number = NaN;
				if (!isNaN_(bucketX)) {
					xVal = this.xAxis.getScaledValue(bucketX, xParams);
				}
				bucket = <number[]>[ xVal, param0, param1, param2 ];
			}
			let pp: number = Math.max(1, singlePixelSpan);
			if (!isNaN_(bucket[0]) && i * pp >= this.ignoreFirst) {
				if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
					bucket[0] = bucket[0] + offset;
				} else {
					bucket[0] = xaxis.getScaledValue(bucket[0], xParams) + offset;
				}
				bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
				bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
				bucket[3] = yaxis.getScaledValue(bucket[3], yParams);
				frame.buckets.add(bucket);
			}
		}
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let bollingerView = <BollingerBandsOverlayView>view;
		if (bollingerView != null) {
			bollingerView.clearRendering();
		}
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.averageColumn == null) {
			return super.getSeriesValue(world, useInterpolation, skipUnknowns);
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		xParams.effectiveViewportRect = this.seriesViewer.viewportRect;
		return this.getSeriesValueHelper(this.averageColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.averageColumn == null) {
			return super.getPreviousOrExactIndex(world, skipUnknowns);
		}
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.averageColumn);
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.averageColumn == null) {
			return super.getNextOrExactIndex(world, skipUnknowns);
		}
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.averageColumn);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (!this.validateBasedOn(this.getTypicalBasedOn())) {
			isValid = false;
		}
		return isValid;
	}
	renderFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.renderFrame(frame, view);
		let bollingerBandsView: BollingerBandsOverlayView = typeCast<BollingerBandsOverlayView>((<any>BollingerBandsOverlayView).$type, view);
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		if (view.checkFrameDirty(frame)) {
			bollingerBandsView.clearRendering();
			let count: number = frame.buckets.count;
			let px: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][0];
			let nx: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[count - 1 - i][0];
			let y0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][1];
			let y1: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][2];
			let y2: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[count - 1 - i][3];
			bollingerBandsView.renderBands(count, px, nx, y0, y1, y2);
			view.updateFrameVersion(frame);
		}
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.xAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		let buckets = frame.buckets;
		let valueCount = this.fastItemsSource.count;
		if (args != null) {
			areStylesOverriden = true;
		}
		if (areStylesOverriden) {
			let xParams = new ScalerParams(0, view.windowRect, view.viewport, this.xAxis.isInverted, effectiveViewportRect);
			this.performCategoryStyleOverride(buckets, -1, valueCount, this.xAxis, xParams, view.isThumbnailView);
		}
		let line0 = bollingerBandsView.line0;
		let line1 = bollingerBandsView.line1;
		let line2 = bollingerBandsView.line2;
		let polygon = bollingerBandsView.fillArea;
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.initialRenderDashArray = null;
		this.renderManager.actualRenderDashArray = null;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, false, true);
		this.renderManager.setCategoryShapeAppearance(line2, true, false, false, true);
		this.renderManager.setCategoryShapeAppearance(polygon, false, true, false, false);
		polygon._opacity = this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
	}
	protected createView(): SeriesView {
		return new BollingerBandsOverlayView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.bollingerBandsView = typeCast<BollingerBandsOverlayView>((<any>BollingerBandsOverlayView).$type, view);
	}
	private _bollingerBandsView: BollingerBandsOverlayView;
	private get bollingerBandsView(): BollingerBandsOverlayView {
		return this._bollingerBandsView;
	}
	private set bollingerBandsView(value: BollingerBandsOverlayView) {
		this._bollingerBandsView = value;
	}
	protected getHighIndexInBucket(): number {
		return 3;
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.averageColumn, null);
	}
}

/**
 * @hidden 
 */
export class BollingerBandsBucketCalculator extends FinancialBucketCalculator {
	static $t: Type = markType(BollingerBandsBucketCalculator, 'BollingerBandsBucketCalculator', (<any>FinancialBucketCalculator).$type);
	constructor(view: FinancialSeriesView) {
		super(view);
		this.bollingerView = <BollingerBandsOverlayView>view;
	}
	private _bollingerView: BollingerBandsOverlayView = null;
	protected get bollingerView(): BollingerBandsOverlayView {
		return this._bollingerView;
	}
	protected set bollingerView(value: BollingerBandsOverlayView) {
		this._bollingerView = value;
	}
	getBucket(index: number): number[] {
		let i0: number = index * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.view.financialModel.fastItemsSource.count - 1);
		if (i0 <= i1) {
			let multiplier: number = this.bollingerView.bollingerBandsOverlayModel.multiplier;
			let average: number = 0;
			let deviation: number = 0;
			let cnt: number = 0;
			for (let i: number = i0; i <= i1; ++i) {
				if (!isNaN_(this.bollingerView.bollingerBandsOverlayModel.averageColumn._inner[i]) && !isNaN_(this.bollingerView.bollingerBandsOverlayModel.deviationColumn._inner[i])) {
					average += this.bollingerView.bollingerBandsOverlayModel.averageColumn._inner[i];
					deviation += this.bollingerView.bollingerBandsOverlayModel.deviationColumn._inner[i];
					++cnt;
				}
			}
			if (cnt > 0) {
				average = average / <number>cnt;
				deviation = deviation / <number>cnt;
				return <number[]>[ 0.5 * (i0 + i1), average - deviation * multiplier, average, average + deviation * multiplier ];
			}
		}
		return <number[]>[ NaN, NaN, NaN, NaN ];
	}
}

/**
 * @hidden 
 */
export class BollingerBandsOverlayView extends FinancialSeriesView {
	static $t: Type = markType(BollingerBandsOverlayView, 'BollingerBandsOverlayView', (<any>FinancialSeriesView).$type);
	private _bollingerBandsOverlayModel: BollingerBandsOverlay = null;
	get bollingerBandsOverlayModel(): BollingerBandsOverlay {
		return this._bollingerBandsOverlayModel;
	}
	set bollingerBandsOverlayModel(value: BollingerBandsOverlay) {
		this._bollingerBandsOverlayModel = value;
	}
	constructor(model: BollingerBandsOverlay) {
		super(model);
		this.bollingerBandsOverlayModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	protected createBucketCalculator(): FinancialBucketCalculator {
		return new BollingerBandsBucketCalculator(this);
	}
	renderBands(count: number, px: (arg1: number) => number, nx: (arg1: number) => number, y0: (arg1: number) => number, y1: (arg1: number) => number, y2: (arg1: number) => number): void {
		for (let i of fromEnum<number>(Flattener.flatten3(count, px, y0, this.model.resolution))) {
			this.polygon.points.add(<Point>{ $type: Point_$type, x: px(i), y: y0(i) });
			this.polyline0.points.add(<Point>{ $type: Point_$type, x: px(i), y: y0(i) });
		}
		for (let i1 of fromEnum<number>(Flattener.flatten3(count, px, y1, this.model.resolution))) {
			this.polyline1.points.add(<Point>{ $type: Point_$type, x: px(i1), y: y1(i1) });
		}
		for (let i2 of fromEnum<number>(Flattener.flatten3(count, nx, y2, this.model.resolution))) {
			this.polygon.points.add(<Point>{ $type: Point_$type, x: nx(i2), y: y2(i2) });
			this.polyline2.points.add(<Point>{ $type: Point_$type, x: nx(i2), y: y2(i2) });
		}
		this.makeDirty();
	}
	clearRendering(): void {
		this.polygon.points.clear();
		this.polyline0.points.clear();
		this.polyline1.points.clear();
		this.polyline2.points.clear();
		this.makeDirty();
	}
	get fillArea(): Polygon {
		return this.polygon;
	}
	get line0(): Polyline {
		return this.polyline0;
	}
	get line1(): Polyline {
		return this.polyline1;
	}
	get line2(): Polyline {
		return this.polyline2;
	}
	private polygon: Polygon = new Polygon();
	private polyline0: Polyline = new Polyline();
	private polyline1: Polyline = new Polyline();
	private polyline2: Polyline = new Polyline();
	private _hitPolygon0: Polygon = new Polygon();
	private _hitPolyline0: Polyline = new Polyline();
	private _hitPolyline1: Polyline = new Polyline();
	private _hitPolyline2: Polyline = new Polyline();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolygon0.points = this.polygon.points;
		this._hitPolyline0.points = this.polyline0.points;
		this._hitPolyline1.points = this.polyline1.points;
		this._hitPolyline2.points = this.polyline2.points;
		let hitBrush: Brush = this.getHitBrush();
		this._hitPolygon0._fill = hitBrush;
		this._hitPolygon0._opacity = 1;
		this._hitPolyline0._stroke = hitBrush;
		this._hitPolyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolyline1._stroke = hitBrush;
		this._hitPolyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolyline2._stroke = hitBrush;
		this._hitPolyline2.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			if (isHitContext) {
				context.renderPolygon(this._hitPolygon0);
				context.renderPolyline(this._hitPolyline0);
				context.renderPolyline(this._hitPolyline1);
				context.renderPolyline(this._hitPolyline2);
			} else {
				context.renderPolygon(this.polygon);
				context.renderPolyline(this.polyline0);
				context.renderPolyline(this.polyline1);
				context.renderPolyline(this.polyline2);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPolygonData(svd, this.polygon, "FillShape", <string[]>[ "Fill" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this.polyline0, "BottomLine", <string[]>[ "Lower", "Main" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this.polyline1, "CentralLine", <string[]>[ "Central" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this.polyline2, "TopLine", <string[]>[ "Upper" ]);
	}
}


