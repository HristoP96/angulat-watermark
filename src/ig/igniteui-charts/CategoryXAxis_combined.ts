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
import { List$1 } from "igniteui-core/List$1";
import { Type, Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Number_$type, typeCast, Array_$type, markType, TypeRegistrar } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { HorizontalAxisLabelPanel } from "./HorizontalAxisLabelPanel";
import { Rect } from "igniteui-core/Rect";
import { MathUtil } from "igniteui-core/MathUtil";
import { ScalerParams } from "./ScalerParams";
import { SeriesViewer } from "./SeriesViewer";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { NumericScaler } from "./NumericScaler";
import { CategoryMode } from "./CategoryMode";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { IGetItemAtIndex } from "igniteui-core/IGetItemAtIndex";
import { LinearCategorySnapper } from "./LinearCategorySnapper";
import { NumericYAxis } from "./NumericYAxis";
import { LabelPosition } from "./LabelPosition";
import { Pool$1 } from "igniteui-core/Pool$1";
import { TextBlock } from "igniteui-core/TextBlock";
import { Rectangle } from "igniteui-core/Rectangle";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { SyncSettings } from "./SyncSettings";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { CategoryAxisBaseView } from "./CategoryAxisBaseView";

/**
 * @hidden 
 */
export class CategoryXAxis extends CategoryAxisBase {
	static $t: Type = markType(CategoryXAxis, 'CategoryXAxis', (<any>CategoryAxisBase).$type);
	createView(): AxisView {
		return new CategoryXAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.xView = <CategoryXAxisView>view;
	}
	private _xView: CategoryXAxisView;
	get xView(): CategoryXAxisView {
		return this._xView;
	}
	set xView(value: CategoryXAxisView) {
		this._xView = value;
	}
	constructor() {
		super();
		this.majorLinePositions = new List$1<number>(Number_$type, 0);
		this.defaultStyleKey = (<any>CategoryXAxis).$type;
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
	createLabelPanel(): AxisLabelPanelBase {
		if (this.useSmartAxis) {
			return <AxisLabelPanelBase>(TypeRegistrar.create('HorizontalSmartAxisLabelPanel'));
		} else {
			return new HorizontalAxisLabelPanel();
		}
	}
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let effectiveViewport = this.getInitialSafeViewport(viewportRect, effectiveViewportRect);
		return effectiveViewport.width / (this.cachedItemsCount * windowRect.width);
	}
	getGroupSize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
		let overlap: number = 0;
		if (!isNaN_(this.overlap)) {
			overlap = Math.min(this.overlap, 1);
		} else {
			overlap = 0;
		}
		;
		let categorySpace: number = 1 - 0.5 * gap;
		let mode2GroupCount: number = this.mode2GroupCount == 0 ? 1 : this.mode2GroupCount;
		let ret: number = this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * categorySpace / (mode2GroupCount - (mode2GroupCount - 1) * overlap);
		return ret;
	}
	getGroupCenter(groupIndex: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let groupCenter: number = 0.5;
		if (this.mode2GroupCount > 1) {
			let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
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
	getAxisInterval(): number {
		return this.interval;
	}
	scrollIntoView(item: any): void {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.viewportRect;
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport();
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.isInverted, effectiveViewportRect);
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let cx: number = index > -1 ? this.getScaledValue(index, xParams) : NaN;
		if (!isNaN_(cx) && this.seriesViewer.isSyncReady) {
			if (!isNaN_(cx)) {
				if (cx < windowRect.left + 0.1 * windowRect.width) {
					cx = cx + 0.4 * windowRect.width;
					windowRect.x = cx - 0.5 * windowRect.width;
				}
				if (cx > windowRect.right - 0.1 * windowRect.width) {
					cx = cx - 0.4 * windowRect.width;
					windowRect.x = cx - 0.5 * windowRect.width;
				}
			}
			this.seriesViewer.windowNotify1(windowRect, false, true);
		}
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getScaledValueHelper(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, this.categoryMode);
			scaledValue = (scaledValue - p.viewportRect.left) / p.viewportRect.width;
			scaledValue = p.viewportRect.left + p.viewportRect.width * (scaledValue - p.windowRect.left) / p.windowRect.width;
			return scaledValue;
		}
		return this.getScaledValueHelper(unscaledValue, p.windowRect, p.viewportRect, this.categoryMode);
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
		let effectiveLeft: number = effectiveViewportRect.left;
		let effectiveWidth: number = effectiveViewportRect.width;
		let windowLeft: number = windowRect.left;
		let windowWidth: number = windowRect.width;
		let viewportLeft: number = viewportRect.left;
		let viewportWidth: number = viewportRect.width;
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
					if (isInverted) {
						u = 1 - u;
					}
					u = effectiveLeft + effectiveWidth * (u - unitLeft) / unitWidth;
					let scaledValue: number = (u - (windowLeft * viewportWidth)) / windowWidth;
					unscaledValue[bucketIndex] = scaledValue;
				} else {
					let scaledValue1: number = itemCount >= 1 ? (unscaledValue[bucketIndex]) / <number>(itemCount) : itemCount == 0 ? 0.5 : NaN;
					if (isInverted) {
						scaledValue1 = 1 - scaledValue1;
					}
					scaledValue1 = viewportLeft + viewportWidth * (scaledValue1 - windowLeft) / windowWidth;
					unscaledValue[bucketIndex] = scaledValue1;
				}
			}
		}
	}
	getScaledValue1(unscaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getScaledValueHelper(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, categoryMode);
			scaledValue = (scaledValue - p.viewportRect.left) / p.viewportRect.width;
			scaledValue = p.viewportRect.left + p.viewportRect.width * (scaledValue - p.windowRect.left) / p.windowRect.width;
			return scaledValue;
		}
		return this.getScaledValueHelper(unscaledValue, p.windowRect, p.viewportRect, categoryMode);
	}
	private getScaledValueHelper(unscaledValue: number, windowRect: Rect, viewportRect: Rect, mode: CategoryMode): number {
		let itemCount: number = mode == CategoryMode.Mode0 ? this.cachedItemsCount - 1 : this.cachedItemsCount;
		if (itemCount < 0) {
			itemCount = 0;
		}
		let scaledValue: number = itemCount >= 1 ? (unscaledValue) / <number>(itemCount) : itemCount == 0 ? 0.5 : NaN;
		if (this.isInvertedCached) {
			scaledValue = 1 - scaledValue;
		}
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width;
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let unscaledValue: number = p.windowRect.left + p.windowRect.width * (scaledValue - p.viewportRect.left) / p.viewportRect.width;
			unscaledValue = (unscaledValue * p.viewportRect.width) + p.viewportRect.left;
			unscaledValue = this.getUnscaledValue3(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, this.categoryMode);
			return unscaledValue;
		}
		return this.getUnscaledValue3(scaledValue, p.windowRect, p.viewportRect, this.categoryMode);
	}
	getUnscaledValue1(scaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let unscaledValue: number = p.windowRect.left + p.windowRect.width * (scaledValue - p.viewportRect.left) / p.viewportRect.width;
			unscaledValue = (unscaledValue * p.viewportRect.width) + p.viewportRect.left;
			unscaledValue = this.getUnscaledValue3(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, categoryMode);
			return unscaledValue;
		}
		return this.getUnscaledValue3(scaledValue, p.windowRect, p.viewportRect, categoryMode);
	}
	getUnscaledValue3(scaledValue: number, windowRect: Rect, viewportRect: Rect, categoryMode: CategoryMode): number {
		let unscaledValue: number = windowRect.left + (scaledValue - viewportRect.left) * windowRect.width / viewportRect.width;
		if (this.isInvertedCached) {
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
		let proportionMax = (maximum + 1) / this.fastItemsSource.count;
		this.seriesViewer.windowRect = new Rect(0, proportionMin, this.seriesViewer.windowRect.y, proportionMax - proportionMin, this.seriesViewer.windowRect.height);
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.viewportRect;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let resolvedViewportRect: Rect = this.getContentViewport();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
		let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
		let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
		let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
		let axisLinesPathInfo: PathRenderingInfo = this.view.getAxisLinesPathInfo();
		let majorLinesPathInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
		let minorLinesPathInfo: PathRenderingInfo = this.view.getMinorLinesPathInfo();
		let fastItemsSource: IFastItemsSource = this.fastItemsSource;
		let dataItems: IGetItemAtIndex = this.getDataItems();
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
		if (this.itemsSource == null || dataItems == null || fastItemsSource.count == 0) {
			this.textBlocks.count = 0;
			this.annotationTextBlocks.count = 0;
			this.annotationBackings.count = 0;
			this.view.clearLabelPanel();
			return;
		}
		if (!windowRect.isEmpty && !viewportRect.isEmpty) {
			let visibleMinimum: number = this.getUnscaledValue(resolvedViewportRect.left, xParams);
			let visibleMaximum: number = this.getUnscaledValue(resolvedViewportRect.right, xParams);
			if (this.isInverted) {
				visibleMinimum = Math.ceil(visibleMinimum);
				visibleMaximum = Math.floor(visibleMaximum);
			} else {
				visibleMinimum = Math.floor(visibleMinimum);
				visibleMaximum = Math.ceil(visibleMaximum);
			}
			let crossingValue: number = viewportRect.bottom;
			let relativeCrossingValue: number = crossingValue - viewportRect.top;
			if (this.crossingAxis != null) {
				let yAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.crossingAxis);
				if (yAxis != null) {
					let $ret = this.scaleCrossingValue(crossingValue, relativeCrossingValue, windowRect, viewportRect, effectiveViewportRect, viewportRect.top, viewportRect.bottom);
					crossingValue = $ret.p0;
					relativeCrossingValue = $ret.p1;
				}
			}
			this.horizontalLine(axisGeometry, crossingValue, viewportRect, axisLinesPathInfo, true);
			this.view.setLabelPanelCrossingValue(relativeCrossingValue);
			let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
			let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
			let snapper: LinearCategorySnapper = new LinearCategorySnapper(1, trueVisibleMinimum, trueVisibleMaximum, resolvedViewportRect.width, this.interval, this.categoryMode, this.resolveHeuristicResolution());
			let firstValue: number = Math.floor((trueVisibleMinimum - 0) / snapper.interval);
			let lastValue: number = Math.ceil((trueVisibleMaximum - 0) / snapper.interval);
			this.actualInterval = snapper.interval;
			if (!isNaN_(firstValue) && !isNaN_(lastValue)) {
				let first: number = <number>truncate(firstValue);
				let last: number = <number>truncate(lastValue);
				let majorValue: number = this.getMajorValue(0 + first * snapper.interval, xParams);
				let scaledValueAtInterval: number = this.getScaledValue(snapper.interval, xParams);
				let majorSize = Math.abs(scaledValueAtInterval - this.getScaledValue(0, xParams));
				this.view.setLabelPanelInterval(scaledValueAtInterval);
				let viewportPixelRight: number = <number>truncate(Math.ceil(resolvedViewportRect.right));
				let viewportPixelLeft: number = <number>truncate(Math.floor(resolvedViewportRect.left));
				let minorInterval = this.minorInterval;
				let hasUserMinorInterval = minorInterval > 0 && minorInterval < snapper.interval;
				let viewportRight = viewportRect.right;
				let majorLinePositions = this.majorLinePositions;
				let snapperInterval = snapper.interval;
				let intSnapperInterval = <number>truncate(snapperInterval);
				let mode2GroupCount = this.mode2GroupCount;
				let isInverted = this.isInverted;
				let categoryMode = this.categoryMode;
				for (let i: number = first; i <= last; ++i) {
					let nextMajorValue: number = this.getMajorValue(0 + (i + 1) * snapper.interval, xParams);
					if (majorValue <= viewportRight) {
						if (i % 2 == 0) {
							this.verticalStrip(stripsGeometry, majorValue, nextMajorValue, viewportRect);
						}
						this.verticalLine(majorGeometry, majorValue, viewportRect, majorLinesPathInfo, false);
						majorLinePositions.add(majorValue);
					}
					if (this.categoryMode != CategoryMode.Mode0 && this.mode2GroupCount != 0 && this.shouldRenderMinorLines) {
						if (hasUserMinorInterval) {
							let minIntervalValue = majorSize * this.minorInterval;
							if (this.isInverted) {
								let curValue: number = majorValue;
								while (curValue - minIntervalValue > nextMajorValue) {
									curValue -= minIntervalValue;
									if (Math.abs(curValue - nextMajorValue) < 0.0001) {
										break;
									}
									this.verticalLine(minorGeometry, curValue, viewportRect, minorLinesPathInfo, false);
								}
							} else {
								let curValue1: number = majorValue;
								while (curValue1 + minIntervalValue < nextMajorValue) {
									curValue1 += minIntervalValue;
									if (Math.abs(curValue1 - nextMajorValue) < 0.0001) {
										break;
									}
									this.verticalLine(minorGeometry, curValue1, viewportRect, minorLinesPathInfo, false);
								}
							}
							this.actualMinorInterval = this.minorInterval;
						} else {
							for (let categoryNumber: number = 0; categoryNumber < <number>truncate(snapper.interval); categoryNumber++) {
								for (let groupNumber: number = 0; groupNumber < this.mode2GroupCount; groupNumber++) {
									let center: number = this.getGroupCenter(groupNumber, windowRect, viewportRect, effectiveViewportRect);
									if (this.isInverted) {
										center = -center;
									}
									let minorValue: number = this.getScaledValue(categoryNumber + i * snapper.interval, xParams) + center;
									this.verticalLine(minorGeometry, minorValue, viewportRect, minorLinesPathInfo, false);
								}
							}
							this.actualMinorInterval = 0.5;
						}
					}
					let categoryValue: number = this.getCategoryValue(i * snapperInterval, majorValue, categoryMode == CategoryMode.Mode0, xParams);
					let categoryPixelValue: number = <number>truncate(Math.round(categoryValue));
					if (categoryPixelValue >= viewportPixelLeft && categoryPixelValue <= viewportPixelRight) {
						let itemIndex: number = 0;
						if (snapperInterval >= 1) {
							itemIndex = i * <number>truncate(Math.floor(snapperInterval));
						} else {
							if ((i * snapperInterval) * 2 % 2 == 0) {
								itemIndex = <number>truncate(Math.floor(i * snapperInterval));
							} else {
								itemIndex = -1;
							}
						}
						if (dataItems != null && itemIndex < fastItemsSource.count && itemIndex >= 0) {
							let dataItem: any = dataItems.getItem(itemIndex);
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
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.crossingAxis != null) {
				if (this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideTop || this.labelSettings.location == AxisLabelsLocation.InsideBottom)) {
					this.seriesViewer.invalidatePanels();
				}
			}
			this.view.updateLabelPanelContent(this.labelDataContext, this.labelPositions);
			this.renderLabels();
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
	private static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(CategoryXAxis.intervalPropertyName, Number_$type, (<any>CategoryXAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(<CategoryXAxis>sender).raisePropertyChanged(CategoryXAxis.intervalPropertyName, e.oldValue, e.newValue);
		(<CategoryXAxis>sender).renderAxis1(false);
	}));
	get interval(): number {
		return <number>this.getValue(CategoryXAxis.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(CategoryXAxis.intervalProperty, value);
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
			this.raisePropertyChanged(CategoryXAxis.actualIntervalPropertyName, oldValue, this.actualInterval);
		}
	}
	resolveActualInterval(): number {
		return this.actualInterval;
	}
	private static readonly minorIntervalPropertyName: string = "MinorInterval";
	static readonly minorIntervalProperty: DependencyProperty = DependencyProperty.register(CategoryXAxis.minorIntervalPropertyName, Number_$type, (<any>CategoryXAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, sender)).raisePropertyChanged(CategoryXAxis.minorIntervalPropertyName, e.oldValue, e.newValue);
		(typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, sender)).renderAxis1(false);
	}));
	get minorInterval(): number {
		return <number>this.getValue(CategoryXAxis.minorIntervalProperty);
	}
	set minorInterval(value: number) {
		this.setValue(CategoryXAxis.minorIntervalProperty, value);
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
			this.raisePropertyChanged(CategoryXAxis.actualMinorIntervalPropertyName, oldValue, this.actualMinorInterval);
		}
	}
	shouldShareMode(chart: SeriesViewer): boolean {
		if (chart == null) {
			return false;
		}
		let settings: SyncSettings = this.getSyncSettings();
		if (settings == null) {
			return false;
		}
		return settings.synchronizeHorizontally;
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Horizontal;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	protected getDataItems(): IGetItemAtIndex {
		return this.fastItemsSource;
	}
	protected getMajorValue(unscaledValue: number, xParams: ScalerParams): number {
		return this.getScaledValue(unscaledValue, xParams);
	}
	protected getCategoryValue(unscaledValue: number, majorValue: number, mode0: boolean, xParams: ScalerParams): number {
		if (!mode0) {
			let nextCategoryValue: number = this.getMajorValue(unscaledValue + 1, xParams);
			return (majorValue + nextCategoryValue) / 2;
		}
		return majorValue;
	}
}

/**
 * @hidden 
 */
export class CategoryXAxisView extends CategoryAxisBaseView {
	static $t: Type = markType(CategoryXAxisView, 'CategoryXAxisView', (<any>CategoryAxisBaseView).$type);
	private _xModel: CategoryXAxis = null;
	protected get xModel(): CategoryXAxis {
		return this._xModel;
	}
	protected set xModel(value: CategoryXAxis) {
		this._xModel = value;
	}
	constructor(model: CategoryXAxis) {
		super(model);
		this.xModel = model;
	}
}


