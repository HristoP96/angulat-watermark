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
import { Type, Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, ValueType, typeGetValue, Number_$type, typeCast, runOn, markType, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, fromEnum, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryFrame } from "./CategoryFrame";
import { Series } from "./Series";
import { Rect } from "igniteui-core/Rect";
import { SeriesView } from "./SeriesView";
import { FinancialSeries } from "./FinancialSeries";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { MathUtil } from "igniteui-core/MathUtil";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { ScalerParams } from "./ScalerParams";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Axis } from "./Axis";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Polyline } from "igniteui-core/Polyline";
import { Polygon } from "igniteui-core/Polygon";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { SeriesViewer } from "./SeriesViewer";
import { RangeValueList } from "./RangeValueList";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { Flattener } from "igniteui-core/Flattener";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class PriceChannelOverlay extends FinancialOverlay {
	static $t: Type = markType(PriceChannelOverlay, 'PriceChannelOverlay', (<any>FinancialOverlay).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>PriceChannelOverlay).$type;
		this.previousFrame = new CategoryFrame(3);
		this.transitionFrame = new CategoryFrame(3);
		this.currentFrame = new CategoryFrame(3);
	}
	get period(): number {
		return typeGetValue(this.getValue(PriceChannelOverlay.periodProperty));
	}
	set period(value: number) {
		this.setValue(PriceChannelOverlay.periodProperty, value);
	}
	static readonly periodPropertyName: string = "Period";
	static readonly periodProperty: DependencyProperty = DependencyProperty.register(PriceChannelOverlay.periodPropertyName, Number_$type, (<any>PriceChannelOverlay).$type, new PropertyMetadata(2, 14, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PriceChannelOverlay>sender).raisePropertyChanged(PriceChannelOverlay.periodPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case FinancialSeries.highColumnPropertyName:

			case FinancialSeries.lowColumnPropertyName:
			this.overlayValid = false;
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case PriceChannelOverlay.periodPropertyName:
			this.overlayValid = false;
			this.renderSeries(false);
			break;

		}

	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (this.highColumn == null || this.lowColumn == null) {
			isValid = false;
		}
		return isValid;
	}
	protected validateOverlay(): boolean {
		this.channelTopColumn.clear();
		this.channelBottomColumn.clear();
		let period: number = <number>truncate(MathUtil.clamp(this.period, 0, this.fastItemsSource.count));
		let count: number = Math.min(this.highColumn.count, this.lowColumn.count);
		let safeHigh: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.highColumn);
		let safeLow: IList$1<number> = this.makeReadOnlyAndEnsureSorted(this.lowColumn);
		for (let i: number = 0; i < count; i++) {
			let ago: number = Math.min(period, i);
			let highestHigh: number = -1.7976931348623157E+308;
			let lowestLow: number = 1.7976931348623157E+308;
			for (let j: number = 0; j < ago; j++) {
				if (!isNaN_(safeHigh.item(i - j))) {
					highestHigh = Math.max(highestHigh, safeHigh.item(i - j));
				}
				if (!isNaN_(safeLow.item(i - j))) {
					lowestLow = Math.min(lowestLow, safeLow.item(i - j));
				}
			}
			if (i == 0) {
				lowestLow = safeLow.item(0);
				highestHigh = safeHigh.item(0);
			}
			this.channelTopColumn.add(highestHigh);
			this.channelBottomColumn.add(lowestLow);
		}
		return true;
	}
	prepareFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.prepareFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let xaxis: CategoryAxisBase = this.xAxis;
		let yaxis: NumericYAxis = this.yAxis;
		frame.buckets.clear();
		frame.markers.clear();
		frame.trend.clear();
		let offset: number = 0;
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis);
		if (sortingXAxis != null && sortingXAxis.sortedIndices.count != this.fastItemsSource.count) {
			return;
		}
		offset = this.getOffset(windowRect, viewportRect, effectiveViewportRect);
		if (!this.overlayValid) {
			this.overlayValid = this.validateOverlay();
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
				let bucketTop: number = this.channelTopColumn._inner[i];
				let bucketBottom: number = this.channelBottomColumn._inner[i];
				let currentTop: number = bucketTop;
				let currentBottom: number = bucketBottom;
				let currentX: number = bucketX;
				while (i < view.bucketCalculator.lastBucket) {
					index = sortingXAxis.sortedIndices._inner[i + 1];
					currentX = sortingXAxis.getUnscaledValueAt(index);
					if (currentX - bucketX > singlePixelSpan) {
						break;
					}
					i++;
					currentTop = Math.max(bucketTop, this.channelTopColumn._inner[i]);
					currentBottom = Math.min(bucketBottom, this.channelBottomColumn._inner[i]);
				}
				if (!isInfinity(currentBottom) && !isInfinity(currentTop)) {
					let xVal: number = NaN;
					if (!isNaN_(bucketX)) {
						xVal = this.xAxis.getScaledValue(bucketX, xParams);
					}
					bucket = <number[]>[ xVal, currentBottom, currentTop ];
				} else {
					bucket = <number[]>[ NaN, NaN, NaN ];
				}
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
				frame.buckets.add(bucket);
			}
		}
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let priceChannelView = <PriceChannelOverlayView>view;
		if (priceChannelView != null) {
			priceChannelView.clearRendering();
		}
	}
	renderFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.renderFrame(frame, view);
		let priceChannelView: PriceChannelOverlayView = typeCast<PriceChannelOverlayView>((<any>PriceChannelOverlayView).$type, view);
		if (priceChannelView == null) {
			return;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		if (view.checkFrameDirty(frame)) {
			priceChannelView.clearRendering();
			let count: number = frame.buckets.count;
			let px: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][0];
			let nx: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[count - 1 - i][0];
			let y0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][1];
			let y1: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[count - 1 - i][2];
			priceChannelView.renderChannel(count, px, nx, y0, y1);
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
		let line0 = priceChannelView.line0;
		let line1 = priceChannelView.line1;
		let polygon = priceChannelView.fillArea;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(polygon, false, true, false, false);
		polygon._opacity = this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
	}
	channelTopColumn: List$1<number> = new List$1<number>(Number_$type, 0);
	channelBottomColumn: List$1<number> = new List$1<number>(Number_$type, 0);
	protected createView(): SeriesView {
		return new PriceChannelOverlayView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.priceChannelOverlayView = typeCast<PriceChannelOverlayView>((<any>PriceChannelOverlayView).$type, view);
	}
	private _priceChannelOverlayView: PriceChannelOverlayView;
	private get priceChannelOverlayView(): PriceChannelOverlayView {
		return this._priceChannelOverlayView;
	}
	private set priceChannelOverlayView(value: PriceChannelOverlayView) {
		this._priceChannelOverlayView = value;
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		let offset = this.getOffset(this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(new RangeValueList(this.channelTopColumn, this.channelBottomColumn), world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.channelTopColumn == null || this.channelBottomColumn == null) {
			return super.getNextOrExactIndex(world, skipUnknowns);
		}
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new RangeValueList(this.channelTopColumn, this.channelBottomColumn));
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.channelTopColumn == null || this.channelBottomColumn == null) {
			return super.getPreviousOrExactIndex(world, skipUnknowns);
		}
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new RangeValueList(this.channelTopColumn, this.channelBottomColumn));
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.channelBottomColumn, null);
	}
}

/**
 * @hidden 
 */
export class PriceChannelBucketCalculator extends FinancialBucketCalculator {
	static $t: Type = markType(PriceChannelBucketCalculator, 'PriceChannelBucketCalculator', (<any>FinancialBucketCalculator).$type);
	constructor(view: FinancialSeriesView) {
		super(view);
		this.priceChannelView = <PriceChannelOverlayView>view;
	}
	private _priceChannelView: PriceChannelOverlayView = null;
	protected get priceChannelView(): PriceChannelOverlayView {
		return this._priceChannelView;
	}
	protected set priceChannelView(value: PriceChannelOverlayView) {
		this._priceChannelView = value;
	}
	getBucket(index: number): number[] {
		let i0: number = index * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.view.financialModel.fastItemsSource.count - 1);
		if (i0 <= i1) {
			let highestHigh: number = -1.7976931348623157E+308;
			let lowestLow: number = 1.7976931348623157E+308;
			let cnt: number = 0;
			for (let i: number = i0; i <= i1; ++i) {
				if (!isNaN_(this.priceChannelView.priceChannelOverlayModel.channelTopColumn._inner[i]) && !isNaN_(this.priceChannelView.priceChannelOverlayModel.channelBottomColumn._inner[i])) {
					highestHigh = Math.max(highestHigh, this.priceChannelView.priceChannelOverlayModel.channelTopColumn._inner[i]);
					lowestLow = Math.min(lowestLow, this.priceChannelView.priceChannelOverlayModel.channelBottomColumn._inner[i]);
					++cnt;
				}
			}
			if (cnt > 0 && lowestLow != 1.7976931348623157E+308 && highestHigh != -1.7976931348623157E+308) {
				return <number[]>[ 0.5 * (i0 + i1), lowestLow, highestHigh ];
			}
		}
		return <number[]>[ NaN, NaN, NaN ];
	}
}

/**
 * @hidden 
 */
export class PriceChannelOverlayView extends FinancialSeriesView {
	static $t: Type = markType(PriceChannelOverlayView, 'PriceChannelOverlayView', (<any>FinancialSeriesView).$type);
	private polygon: Polygon = new Polygon();
	private polyline0: Polyline = new Polyline();
	private polyline1: Polyline = new Polyline();
	get fillArea(): Polygon {
		return this.polygon;
	}
	get line0(): Polyline {
		return this.polyline0;
	}
	get line1(): Polyline {
		return this.polyline1;
	}
	private _priceChannelOverlayModel: PriceChannelOverlay = null;
	get priceChannelOverlayModel(): PriceChannelOverlay {
		return this._priceChannelOverlayModel;
	}
	set priceChannelOverlayModel(value: PriceChannelOverlay) {
		this._priceChannelOverlayModel = value;
	}
	constructor(model: PriceChannelOverlay) {
		super(model);
		this.priceChannelOverlayModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	protected createBucketCalculator(): FinancialBucketCalculator {
		return new PriceChannelBucketCalculator(this);
	}
	clearRendering(): void {
		this.polygon.points.clear();
		this.polyline0.points.clear();
		this.polyline1.points.clear();
		this.makeDirty();
	}
	renderChannel(count: number, px: (arg1: number) => number, nx: (arg1: number) => number, y0: (arg1: number) => number, y1: (arg1: number) => number): void {
		for (let i of fromEnum<number>(Flattener.flatten3(count, px, y0, this.model.resolution))) {
			this.polygon.points.add(<Point>{ $type: Point_$type, x: px(i), y: y0(i) });
			this.polyline0.points.add(<Point>{ $type: Point_$type, x: px(i), y: y0(i) });
		}
		for (let i1 of fromEnum<number>(Flattener.flatten3(count, nx, y1, this.model.resolution))) {
			this.polygon.points.add(<Point>{ $type: Point_$type, x: nx(i1), y: y1(i1) });
			this.polyline1.points.add(<Point>{ $type: Point_$type, x: nx(i1), y: y1(i1) });
		}
		this.makeDirty();
	}
	private _hitPolygon0: Polygon = new Polygon();
	private _hitPolyline0: Polyline = new Polyline();
	private _hitPolyline1: Polyline = new Polyline();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolygon0.points = this.polygon.points;
		this._hitPolyline0.points = this.polyline0.points;
		this._hitPolyline1.points = this.polyline1.points;
		let hitBrush: Brush = this.getHitBrush();
		this._hitPolygon0._fill = hitBrush;
		this._hitPolygon0._opacity = 1;
		this._hitPolyline0._stroke = hitBrush;
		this._hitPolyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolyline1._stroke = hitBrush;
		this._hitPolyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			if (isHitContext) {
				context.renderPolygon(this._hitPolygon0);
				context.renderPolyline(this._hitPolyline0);
				context.renderPolyline(this._hitPolyline1);
			} else {
				context.renderPolygon(this.polygon);
				context.renderPolyline(this.polyline0);
				context.renderPolyline(this.polyline1);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPolygonData(svd, this.polygon, "fill", <string[]>[ "Fill" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this.polyline0, "bottom", <string[]>[ "Lower", "Main" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this.polyline1, "top", <string[]>[ "Upper" ]);
	}
}


