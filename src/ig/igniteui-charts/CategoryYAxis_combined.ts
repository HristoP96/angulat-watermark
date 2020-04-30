/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryAxisBase } from "./CategoryAxisBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Axis } from "./Axis";
import { AxisOrientation } from "./AxisOrientation";
import { AxisView } from "./AxisView";
import { Rect } from "igniteui-core/Rect";
import { Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Type, Base, typeCast, Array_$type, Number_$type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { ScalerParams } from "./ScalerParams";
import { Control } from "igniteui-core/Control";
import { NumericScaler } from "./NumericScaler";
import { CategoryMode } from "./CategoryMode";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SeriesViewer } from "./SeriesViewer";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { VerticalAxisLabelPanel } from "./VerticalAxisLabelPanel";
import { MathUtil } from "igniteui-core/MathUtil";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { SyncSettings } from "./SyncSettings";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { LinearCategorySnapper } from "./LinearCategorySnapper";
import { NumericXAxis } from "./NumericXAxis";
import { LabelPosition } from "./LabelPosition";
import { Pool$1 } from "igniteui-core/Pool$1";
import { TextBlock } from "igniteui-core/TextBlock";
import { Rectangle } from "igniteui-core/Rectangle";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { CategoryAxisBaseView } from "./CategoryAxisBaseView";

/**
 * @hidden 
 */
export class CategoryYAxis extends CategoryAxisBase {
	static $t: Type = markType(CategoryYAxis, 'CategoryYAxis', (<any>CategoryAxisBase).$type);
	createView(): AxisView {
		return new CategoryYAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.yView = <CategoryYAxisView>view;
	}
	private _yView: CategoryYAxisView;
	get yView(): CategoryYAxisView {
		return this._yView;
	}
	set yView(value: CategoryYAxisView) {
		this._yView = value;
	}
	protected get_isVertical(): boolean {
		return true;
	}
	getResolutionExtent(): number {
		return this.viewportRect.height;
	}
	getCategoryBoundingBox(point: Point, useInterpolation: boolean, singularWidth: number): Rect {
		return this.getCategoryBoundingBoxHelper(point, useInterpolation, singularWidth, true);
	}
	protected asBucketArray(unscaledValues: IList$1<number[]>): number[][] {
		if (typeCast<List$1<number[]>>((<any>List$1).$type.specialize(Array_$type), unscaledValues) !== null) {
			return <number[][]><any>(<List$1<number[]>>unscaledValues).asArray();
		}
		return null;
	}
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		let unscaledValue: number[];
		let windowRect: Rect = p.windowRect;
		let viewportRect: Rect = p.viewportRect;
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let isInverted: boolean = p.isInverted;
		let useEffectiveRect: boolean = !effectiveViewportRect.isEmpty;
		let itemCount: number = this.categoryMode == CategoryMode.Mode0 ? this.cachedItemsCount - 1 : this.cachedItemsCount;
		if (itemCount < 0) {
			itemCount = 0;
		}
		let effectiveTop: number = effectiveViewportRect.top;
		let effectiveHeight: number = effectiveViewportRect.height;
		let windowTop: number = windowRect.top;
		let windowHeight: number = windowRect.height;
		let viewportTop: number = viewportRect.top;
		let viewportHeight: number = viewportRect.height;
		let unitLeft: number = 0;
		let unitWidth: number = 1;
		let input: number[][] = this.asBucketArray(unscaledValues);
		let useArray: boolean = false;
		if (input != null) {
			useArray = true;
		}
		let bucketIndex: number;
		for (let j: number = 0; j < bucketIndexes.count; j++) {
			bucketIndex = bucketIndexes.item(j);
			for (let i: number = startIndex; i < count; i++) {
				if (useArray) {
					unscaledValue = input[i];
				} else {
					unscaledValue = unscaledValues.item(i);
				}
				if (useEffectiveRect) {
					let u: number = itemCount >= 1 ? (unscaledValue[bucketIndex]) / <number>(itemCount) : itemCount == 0 ? 0.5 : NaN;
					if (!isInverted) {
						u = 1 - u;
					}
					u = effectiveTop + effectiveHeight * (u - unitLeft) / unitWidth;
					let scaledValue: number = (u - (windowTop * viewportHeight)) / windowHeight;
					unscaledValue[bucketIndex] = scaledValue;
				} else {
					let scaledValue1: number = itemCount >= 1 ? (unscaledValue[bucketIndex]) / <number>(itemCount) : itemCount == 0 ? 0.5 : NaN;
					if (!isInverted) {
						scaledValue1 = 1 - scaledValue1;
					}
					scaledValue1 = viewportTop + viewportHeight * (scaledValue1 - windowTop) / windowHeight;
					unscaledValue[bucketIndex] = scaledValue1;
				}
			}
		}
	}
	constructor() {
		super();
		this.majorLinePositions = new List$1<number>(Number_$type, 0);
		this.defaultStyleKey = (<any>CategoryYAxis).$type;
	}
	private static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(CategoryYAxis.intervalPropertyName, Number_$type, (<any>CategoryYAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(<CategoryYAxis>sender).raisePropertyChanged(CategoryYAxis.intervalPropertyName, e.oldValue, e.newValue);
		(<CategoryYAxis>sender).renderAxis1(false);
	}));
	get interval(): number {
		return <number>this.getValue(CategoryYAxis.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(CategoryYAxis.intervalProperty, value);
	}
	private _actualInterval: number = 0;
	static readonly actualIntervalPropertyName: string = "ActualInterval";
	get actualInterval(): number {
		return this._actualInterval;
	}
	set actualInterval(value: number) {
		if (this.actualInterval != value) {
			let oldValue: number = this._actualInterval;
			this._actualInterval = value;
			this.raisePropertyChanged(CategoryYAxis.actualIntervalPropertyName, oldValue, this.actualInterval);
		}
	}
	resolveActualInterval(): number {
		return this.actualInterval;
	}
	private static readonly minorIntervalPropertyName: string = "MinorInterval";
	static readonly minorIntervalProperty: DependencyProperty = DependencyProperty.register(CategoryYAxis.minorIntervalPropertyName, Number_$type, (<any>CategoryYAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(typeCast<CategoryYAxis>((<any>CategoryYAxis).$type, sender)).raisePropertyChanged(CategoryYAxis.minorIntervalPropertyName, e.oldValue, e.newValue);
		(typeCast<CategoryYAxis>((<any>CategoryYAxis).$type, sender)).renderAxis1(false);
	}));
	get minorInterval(): number {
		return <number>this.getValue(CategoryYAxis.minorIntervalProperty);
	}
	set minorInterval(value: number) {
		this.setValue(CategoryYAxis.minorIntervalProperty, value);
	}
	private _actualMinorInterval: number = 0;
	static readonly actualMinorIntervalPropertyName: string = "ActualMinorInterval";
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		if (this.actualMinorInterval != value) {
			let oldValue: number = this._actualMinorInterval;
			this._actualMinorInterval = value;
			this.raisePropertyChanged(CategoryYAxis.actualMinorIntervalPropertyName, oldValue, this.actualMinorInterval);
		}
	}
	private _actualMinimum: number = 1;
	get actualMinimum(): number {
		return this._actualMinimum;
	}
	set actualMinimum(value: number) {
		this._actualMinimum = value;
	}
	private _actualMaximum: number = 1;
	get actualMaximum(): number {
		return this._actualMaximum;
	}
	set actualMaximum(value: number) {
		this._actualMaximum = value;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getScaledValueHelper(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect);
			scaledValue = (scaledValue - p.viewportRect.top) / p.viewportRect.height;
			scaledValue = p.viewportRect.top + p.viewportRect.height * (scaledValue - p.windowRect.top) / p.windowRect.height;
			return scaledValue;
		}
		return this.getScaledValueHelper(unscaledValue, p.windowRect, p.viewportRect);
	}
	private getScaledValueHelper(unscaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		let itemCount: number = this.categoryMode == CategoryMode.Mode0 ? this.cachedItemsCount - 1 : this.cachedItemsCount;
		if (itemCount < 0) {
			itemCount = 0;
		}
		let scaledValue: number = itemCount >= 1 ? (unscaledValue) / <number>(itemCount) : itemCount == 0 ? 0.5 : NaN;
		if (!this.isInvertedCached) {
			scaledValue = 1 - scaledValue;
		}
		return viewportRect.top + viewportRect.height * (scaledValue - windowRect.top) / windowRect.height;
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let unscaledValue: number = p.windowRect.top + p.windowRect.height * (scaledValue - p.viewportRect.top) / p.viewportRect.height;
			unscaledValue = (unscaledValue * p.viewportRect.height) + p.viewportRect.top;
			unscaledValue = this.getUnscaledValue3(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, this.categoryMode);
			return unscaledValue;
		}
		return this.getUnscaledValue3(scaledValue, p.windowRect, p.viewportRect, this.categoryMode);
	}
	getUnscaledValue1(scaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let unscaledValue: number = p.windowRect.top + p.windowRect.height * (scaledValue - p.viewportRect.top) / p.viewportRect.height;
			unscaledValue = (unscaledValue * p.viewportRect.height) + p.viewportRect.top;
			unscaledValue = this.getUnscaledValue3(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, categoryMode);
			return unscaledValue;
		}
		return this.getUnscaledValue3(scaledValue, p.windowRect, p.viewportRect, categoryMode);
	}
	getUnscaledValue3(scaledValue: number, windowRect: Rect, viewportRect: Rect, categoryMode: CategoryMode): number {
		let unscaledValue: number = windowRect.top + (scaledValue - viewportRect.top) * windowRect.height / viewportRect.height;
		if (!this.isInvertedCached) {
			unscaledValue = 1 - unscaledValue;
		}
		let itemCount: number = categoryMode == CategoryMode.Mode0 ? this.cachedItemsCount - 1 : this.cachedItemsCount;
		if (itemCount < 0) {
			itemCount = 0;
		}
		return unscaledValue * itemCount;
	}
	scrollRangeIntoView(minimum: number, maximum: number): void {
		if (minimum == NaN || maximum == NaN || this.fastItemsSource == null || this.fastItemsSource.count == 0) {
			return;
		}
		let proportionMin = minimum / this.fastItemsSource.count;
		let proportionMax = maximum / this.fastItemsSource.count;
		this.seriesViewer.windowRect = new Rect(0, this.seriesViewer.windowRect.x, 1 - proportionMax, this.seriesViewer.windowRect.width, proportionMax - proportionMin);
	}
	createLabelPanel(): AxisLabelPanelBase {
		return new VerticalAxisLabelPanel();
	}
	getAxisInterval(): number {
		return this.interval;
	}
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let effectiveViewport = this.getInitialSafeViewport(viewportRect, effectiveViewportRect);
		return effectiveViewport.height / (this.cachedItemsCount * windowRect.height);
	}
	getGroupSize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let gap: number = 0;
		if (!isNaN_(this.gap)) {
			gap = MathUtil.clamp(this.gap, 0, 1);
		}
		let overlap: number = 0;
		if (!isNaN_(this.overlap)) {
			overlap = Math.min(this.overlap, 1);
		}
		let categorySpace: number = 1 - 0.5 * gap;
		let ret: number = this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * categorySpace / (this.mode2GroupCount - (this.mode2GroupCount - 1) * overlap);
		return ret;
	}
	getGroupCenter(groupIndex: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let groupCenter: number = 0.5;
		if (this.mode2GroupCount > 1) {
			let gap: number = 0;
			if (!isNaN_(this.gap)) {
				gap = MathUtil.clamp(this.gap, 0, 1);
			}
			let overlap: number = 0;
			if (!isNaN_(this.overlap)) {
				overlap = Math.min(this.overlap, 1);
			}
			let categorySpace: number = 1 - 0.5 * gap;
			let groupWidth: number = categorySpace / (this.mode2GroupCount - (this.mode2GroupCount - 1) * overlap);
			let groupSep: number = (categorySpace - groupWidth) / (this.mode2GroupCount - 1);
			groupCenter = 0.25 * gap + 0.5 * groupWidth + groupIndex * groupSep;
		}
		return this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * groupCenter;
	}
	scrollIntoView(item: any): void {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.viewportRect;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport();
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.isInverted, effectiveViewportRect);
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let cy: number = index > -1 ? this.getScaledValue(index, yParams) : NaN;
		if (!isNaN_(cy) && this.seriesViewer.isSyncReady) {
			if (!isNaN_(cy)) {
				if (cy < windowRect.top + 0.1 * windowRect.height) {
					cy = cy + 0.4 * windowRect.height;
					windowRect.y = cy - 0.5 * windowRect.height;
				}
				if (cy > windowRect.bottom - 0.1 * windowRect.height) {
					cy = cy - 0.4 * windowRect.height;
					windowRect.y = cy - 0.5 * windowRect.height;
				}
			}
			this.seriesViewer.windowNotify1(windowRect, false, true);
		}
	}
	updateRangeOverride(): boolean {
		if (this.mustInvalidateLabels && this.useEnhancedIntervalManagement) {
			this.labelFontHeuristics = this.gatherLabelFontHeuristics();
		}
		if (this.fastItemsSource == null) {
			return false;
		}
		let max: number = this.fastItemsSource.count;
		if (max != this.actualMaximum) {
			let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, 1, 1, this.actualMaximum, max);
			this.actualMaximum = max;
			this.raiseRangeChanged(ea);
			return true;
		}
		return false;
	}
	shouldShareMode(chart: SeriesViewer): boolean {
		if (chart == null) {
			return false;
		}
		let settings: SyncSettings = this.getSyncSettings();
		if (settings == null) {
			return false;
		}
		return settings.synchronizeVertically;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.viewportRect;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let resolvedViewportRect: Rect = this.getContentViewport();
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
		let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
		let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
		let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
		let axisLinesPathInfo: PathRenderingInfo = this.view.getAxisLinesPathInfo();
		let majorLinesPathInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
		let minorLinesPathInfo: PathRenderingInfo = this.view.getMinorLinesPathInfo();
		this.updateLineVisibility();
		this.clearMarks(axisGeometry);
		this.clearMarks(stripsGeometry);
		this.clearMarks(majorGeometry);
		this.clearMarks(minorGeometry);
		this.labelDataContext.clear();
		this.labelPositions.clear();
		this.majorLinePositions.clear();
		this.view.updateLabelPanel(this, windowRect, viewportRect);
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			this.textBlocks.count = 0;
			this.annotationTextBlocks.count = 0;
			this.annotationBackings.count = 0;
		}
		if (this.textBlocks.count == 0 && this.annotationTextBlocks.count == 0) {
			this.view.clearLabelPanel();
		}
		if (this.labelSettings != null) {
			this.labelSettings.registerAxis(this);
		}
		if (this.itemsSource == null || this.fastItemsSource == null || this.fastItemsSource.count == 0) {
			this.textBlocks.count = 0;
			this.annotationTextBlocks.count = 0;
			this.annotationBackings.count = 0;
			this.view.clearLabelPanel();
			return;
		}
		if (!windowRect.isEmpty && !viewportRect.isEmpty) {
			let visibleMinimum: number = this.getUnscaledValue(resolvedViewportRect.top, yParams);
			let visibleMaximum: number = this.getUnscaledValue(resolvedViewportRect.bottom, yParams);
			if (!this.isInverted) {
				visibleMinimum = Math.ceil(visibleMinimum);
				visibleMaximum = Math.floor(visibleMaximum);
			} else {
				visibleMinimum = Math.floor(visibleMinimum);
				visibleMaximum = Math.ceil(visibleMaximum);
			}
			let crossingValue: number = viewportRect.left;
			let relativeCrossingValue: number = 0;
			if (this.crossingAxis != null) {
				let xAxis: NumericXAxis = typeCast<NumericXAxis>((<any>NumericXAxis).$type, this.crossingAxis);
				if (xAxis != null) {
					let $ret = this.scaleCrossingValue(crossingValue, relativeCrossingValue, windowRect, viewportRect, effectiveViewportRect, viewportRect.left, viewportRect.right);
					crossingValue = $ret.p0;
					relativeCrossingValue = $ret.p1;
				}
			}
			this.verticalLine(axisGeometry, crossingValue, viewportRect, axisLinesPathInfo, true);
			this.view.setLabelPanelCrossingValue(relativeCrossingValue);
			let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
			let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
			let snapper: LinearCategorySnapper = new LinearCategorySnapper(1, trueVisibleMinimum, trueVisibleMaximum, resolvedViewportRect.height, this.interval, this.categoryMode, this.resolveHeuristicResolution());
			let firstValue: number = Math.floor((trueVisibleMinimum - 0) / snapper.interval);
			let lastValue: number = Math.ceil((trueVisibleMaximum - 0) / snapper.interval);
			if (!isNaN_(firstValue) && !isNaN_(lastValue)) {
				let first: number = <number>truncate(firstValue);
				let last: number = <number>truncate(lastValue);
				let majorValue: number = this.getScaledValue(0 + first * snapper.interval, yParams);
				let majorSize = Math.abs(this.getScaledValue(snapper.interval, yParams) - this.getScaledValue(0, yParams));
				this.labelPanel.interval = this.getScaledValue(snapper.interval, yParams);
				for (let i: number = first; i <= last; ++i) {
					let nextMajorValue: number = this.getScaledValue(0 + (i + 1) * snapper.interval, yParams);
					if (majorValue <= resolvedViewportRect.bottom) {
						if (i % 2 == 0) {
							this.horizontalStrip(stripsGeometry, majorValue, nextMajorValue, viewportRect);
						}
						this.horizontalLine(majorGeometry, majorValue, viewportRect, majorLinesPathInfo, false);
						this.majorLinePositions.add(majorValue);
					}
					if (this.categoryMode != CategoryMode.Mode0 && this.mode2GroupCount != 0 && this.shouldRenderMinorLines) {
						if (this.minorInterval > 0 && this.minorInterval < snapper.interval) {
							let minIntervalValue = majorSize * this.minorInterval;
							if (!this.isInverted) {
								let curValue: number = majorValue;
								while (curValue - minIntervalValue > nextMajorValue) {
									curValue -= minIntervalValue;
									if (Math.abs(curValue - nextMajorValue) < 0.0001) {
										break;
									}
									this.horizontalLine(minorGeometry, curValue, viewportRect, minorLinesPathInfo, false);
								}
							} else {
								let curValue1: number = majorValue;
								while (curValue1 + minIntervalValue < nextMajorValue) {
									curValue1 += minIntervalValue;
									if (Math.abs(curValue1 - nextMajorValue) < 0.0001) {
										break;
									}
									this.horizontalLine(minorGeometry, curValue1, viewportRect, minorLinesPathInfo, false);
								}
							}
							this.actualMinorInterval = this.minorInterval;
						} else {
							for (let categoryNumber: number = 0; categoryNumber < <number>truncate(snapper.interval); categoryNumber++) {
								for (let groupNumber: number = 0; groupNumber < this.mode2GroupCount; groupNumber++) {
									let center: number = this.getGroupCenter(groupNumber, windowRect, viewportRect, effectiveViewportRect);
									if (!this.isInverted) {
										center = -center;
									}
									let minorValue: number = this.getScaledValue(categoryNumber + i * snapper.interval, yParams) + center;
									this.horizontalLine(minorGeometry, minorValue, viewportRect, minorLinesPathInfo, false);
								}
							}
							this.actualMinorInterval = 0.5;
						}
					}
					let categoryValue: number = majorValue;
					if (this.categoryMode != CategoryMode.Mode0) {
						let nextCategoryValue: number = this.getScaledValue(i * snapper.interval + 1, yParams);
						categoryValue = (majorValue + nextCategoryValue) / 2;
					}
					if (categoryValue <= resolvedViewportRect.bottom && categoryValue >= resolvedViewportRect.top) {
						let itemIndex: number = 0;
						if (snapper.interval >= 1) {
							itemIndex = i * <number>truncate(Math.floor(snapper.interval));
						} else {
							if ((i * snapper.interval) * 2 % 2 == 0) {
								itemIndex = <number>truncate(Math.floor(i * snapper.interval));
							} else {
								itemIndex = -1;
							}
						}
						if (this.fastItemsSource != null && itemIndex < this.fastItemsSource.count && itemIndex >= 0) {
							let dataItem: any = this.fastItemsSource.item(itemIndex);
							let labelText: any = this.getLabel(dataItem);
							if (!isNaN_(categoryValue) && !isInfinity(categoryValue) && labelText != null) {
								if ((typeof labelText === 'string') && Base.equalsStatic((<string>labelText), "")) {
								} else {
									this.labelDataContext.add1(labelText);
									this.labelPositions.add(new LabelPosition(categoryValue));
								}
							}
						}
					}
					majorValue = nextMajorValue;
				}
			}
			this.actualInterval = snapper.interval;
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.crossingAxis != null) {
				if (this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideLeft || this.labelSettings.location == AxisLabelsLocation.InsideRight)) {
					this.seriesViewer.invalidatePanels();
				}
			}
			this.view.updateLabelPanelContent(this.labelDataContext, this.labelPositions);
			this.renderLabels();
		}
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Vertical;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
}

/**
 * @hidden 
 */
export class CategoryYAxisView extends CategoryAxisBaseView {
	static $t: Type = markType(CategoryYAxisView, 'CategoryYAxisView', (<any>CategoryAxisBaseView).$type);
	private _yModel: CategoryYAxis = null;
	protected get yModel(): CategoryYAxis {
		return this._yModel;
	}
	protected set yModel(value: CategoryYAxis) {
		this._yModel = value;
	}
	constructor(model: CategoryYAxis) {
		super(model);
		this.yModel = model;
	}
}


