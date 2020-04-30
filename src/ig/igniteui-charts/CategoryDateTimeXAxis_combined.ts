/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FastItemDateTimeColumn } from "igniteui-core/FastItemDateTimeColumn";
import { TimeAxisBase } from "./TimeAxisBase";
import { TimeAxisDisplayType, TimeAxisDisplayType_$type } from "./TimeAxisDisplayType";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Axis } from "./Axis";
import { Type, Base, IList$1, IList$1_$type, enumGetBox, EnumUtil, Number_$type, typeGetValue, typeCast, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { AxisView } from "./AxisView";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { NumericYAxis } from "./NumericYAxis";
import { LinearNumericSnapper } from "./LinearNumericSnapper";
import { SeriesViewer } from "./SeriesViewer";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { ISortingAxis } from "./ISortingAxis";
import { List$1 } from "igniteui-core/List$1";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { LabelPosition } from "./LabelPosition";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { CategoryMode } from "./CategoryMode";
import { truncate, intDivide, isNaN_, isInfinity } from "igniteui-core/number";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { dateMinValue, dateFromTicks } from "igniteui-core/date";
import { timeSpanFromMilliseconds } from "igniteui-core/timespan";
import { CategoryAxisBaseView } from "./CategoryAxisBaseView";

/**
 * @hidden 
 */
export class CategoryDateTimeXAxis extends TimeAxisBase {
	static $t: Type = markType(CategoryDateTimeXAxis, 'CategoryDateTimeXAxis', (<any>TimeAxisBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>CategoryDateTimeXAxis).$type;
		this.actualMinimumValue = <Date>(new Date());
		this.actualMaximumValue = <Date>(new Date());
	}
	protected get_isContinuous(): boolean {
		return this.displayType == TimeAxisDisplayType.Continuous;
	}
	createView(): AxisView {
		return new CategoryDateTimeXAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.dateTimeView = <CategoryDateTimeXAxisView>view;
	}
	private _dateTimeView: CategoryDateTimeXAxisView;
	get dateTimeView(): CategoryDateTimeXAxisView {
		return this._dateTimeView;
	}
	set dateTimeView(value: CategoryDateTimeXAxisView) {
		this._dateTimeView = value;
	}
	static readonly displayTypePropertyName: string = "DisplayType";
	static readonly displayTypeProperty: DependencyProperty = DependencyProperty.register(CategoryDateTimeXAxis.displayTypePropertyName, TimeAxisDisplayType_$type, (<any>CategoryDateTimeXAxis).$type, new PropertyMetadata(2, enumGetBox<TimeAxisDisplayType>(TimeAxisDisplayType_$type, TimeAxisDisplayType.Continuous), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryDateTimeXAxis>sender).raisePropertyChanged(CategoryDateTimeXAxis.displayTypePropertyName, e.oldValue, e.newValue)));
	get displayType(): TimeAxisDisplayType {
		return EnumUtil.getEnumValue<TimeAxisDisplayType>(TimeAxisDisplayType_$type, this.getValue(CategoryDateTimeXAxis.displayTypeProperty));
	}
	set displayType(value: TimeAxisDisplayType) {
		this.setValue(CategoryDateTimeXAxis.displayTypeProperty, enumGetBox<TimeAxisDisplayType>(TimeAxisDisplayType_$type, value));
	}
	static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(CategoryDateTimeXAxis.intervalPropertyName, Number_$type, (<any>CategoryDateTimeXAxis).$type, new PropertyMetadata(2, <number>0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryDateTimeXAxis>sender).raisePropertyChanged(CategoryDateTimeXAxis.intervalPropertyName, e.oldValue, e.newValue)));
	get interval(): number {
		return typeGetValue(this.getValue(CategoryDateTimeXAxis.intervalProperty));
	}
	set interval(value: number) {
		this.setValue(CategoryDateTimeXAxis.intervalProperty, value);
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
			this.raisePropertyChanged(CategoryDateTimeXAxis.actualIntervalPropertyName, oldValue, this.actualInterval);
		}
	}
	resolveActualInterval(): number {
		return this.actualInterval;
	}
	private static readonly minorIntervalPropertyName: string = "MinorInterval";
	static readonly minorIntervalProperty: DependencyProperty = DependencyProperty.register(CategoryDateTimeXAxis.minorIntervalPropertyName, Number_$type, (<any>CategoryDateTimeXAxis).$type, new PropertyMetadata(2, <number>0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(typeCast<CategoryDateTimeXAxis>((<any>CategoryDateTimeXAxis).$type, sender)).raisePropertyChanged(CategoryDateTimeXAxis.minorIntervalPropertyName, e.oldValue, e.newValue);
		(typeCast<CategoryDateTimeXAxis>((<any>CategoryDateTimeXAxis).$type, sender)).renderAxis1(false);
	}));
	get minorInterval(): number {
		return typeGetValue(this.getValue(CategoryDateTimeXAxis.minorIntervalProperty));
	}
	set minorInterval(value: number) {
		this.setValue(CategoryDateTimeXAxis.minorIntervalProperty, value);
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
			this.raisePropertyChanged(CategoryDateTimeXAxis.actualMinorIntervalPropertyName, oldValue, this.actualMinorInterval);
		}
	}
	validateAxis(viewportRect: Rect, windowRect: Rect, view: AxisView): boolean {
		let isValid: boolean = super.validateAxis(viewportRect, windowRect, view);
		if (!isValid) {
			return false;
		}
		return +(this.actualMinimumValue) != +(this.actualMaximumValue);
	}
	getAxisInterval(): number {
		return <number>this.actualInterval;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let resolvedViewportRect: Rect = this.getContentViewport();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		if (this.dateTimeColumn == null && !this.maximumValueIsSet() && !this.minimumValueIsSet()) {
			return;
		}
		if (!windowRect.isEmpty && !viewportRect.isEmpty && (this.displayType != TimeAxisDisplayType.Discrete || this.dateTimeColumn != null)) {
			let crossingValue: number = viewportRect.bottom;
			let relativeCrossingValue: number = crossingValue - viewportRect.top;
			if (this.crossingAxis != null) {
				let yAxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.crossingAxis);
				if (yAxis != null) {
					let $ret = this.scaleCrossingValue(crossingValue, relativeCrossingValue, windowRect, viewportRect, effectiveViewportRect, viewportRect.top, viewportRect.bottom);
					crossingValue = $ret.p0;
					relativeCrossingValue = $ret.p1;
				}
			}
			if (isNaN_(crossingValue)) {
				crossingValue = 0;
			}
			this.horizontalLine(this.view.getAxisLinesGeometry(), crossingValue, viewportRect, this.view.getAxisLinesPathInfo(), true);
			this.labelPanel.crossingValue = relativeCrossingValue;
			let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
			let majorLinesPathInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
			let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
			let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
			let minorLinesPathInfo: PathRenderingInfo = this.view.getMinorLinesPathInfo();
			if (this.displayType == TimeAxisDisplayType.Discrete) {
				let first: number = (<ISortingAxis>this).getFirstVisibleIndex(windowRect, viewportRect, effectiveViewportRect, resolvedViewportRect);
				let last: number = (<ISortingAxis>this).getLastVisibleIndex(windowRect, viewportRect, effectiveViewportRect, resolvedViewportRect);
				if (first < 0 || last < 0) {
					return;
				}
				let lastMajorValue: number = NaN;
				for (let i: number = first; i <= last; i++) {
					let sortedIndex: number = this.sortedDateTimeIndices == null ? i : this.sortedDateTimeIndices._inner[i];
					let majorValue: number = this.getScaledValue(this.dateTimeColumn.item(sortedIndex).getTime(), xParams);
					if (majorValue == lastMajorValue) {
						continue;
					}
					lastMajorValue = majorValue;
					if (this.categoryMode == CategoryMode.Mode2) {
						majorValue += this.isInverted ? -this.getGroupCenter(i, windowRect, viewportRect, effectiveViewportRect) : this.getGroupCenter(i, windowRect, viewportRect, effectiveViewportRect);
					}
					if (majorValue < resolvedViewportRect.left || majorValue > resolvedViewportRect.right) {
						continue;
					}
					this.verticalLine(majorGeometry, majorValue, viewportRect, majorLinesPathInfo, false);
					this.majorLinePositions.add(majorValue);
					if (this.fastItemsSource != null && i < this.fastItemsSource.count) {
						let dataItem: any = this.fastItemsSource.item(sortedIndex);
						let labelText: any = super.getLabel(dataItem);
						if (!isNaN_(majorValue) && !isInfinity(majorValue) && labelText != null) {
							if ((typeof labelText === 'string') && Base.equalsStatic((<string>labelText), "")) {
							} else {
								this.labelDataContext.add1(labelText);
								this.labelPositions.add(new LabelPosition(majorValue));
							}
						}
					}
				}
			} else {
				let visibleMinimum: number = this.getUnscaledValue(resolvedViewportRect.left, xParams);
				let visibleMaximum: number = this.getUnscaledValue(resolvedViewportRect.right, xParams);
				let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
				let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
				let snapper: LinearNumericSnapper = new LinearNumericSnapper(0, trueVisibleMinimum, trueVisibleMaximum, resolvedViewportRect.width, this.resolveHeuristicResolution());
				let interval: number = this.hasUserInterval ? this.getUserIntervalTicks() : snapper.interval;
				this.setActualIntervalInternal(<number>truncate(interval));
				let first1: number = <number>truncate(Math.floor((trueVisibleMinimum - this.actualMinimumValue.getTime()) / interval));
				let last1: number = <number>truncate(Math.ceil((trueVisibleMaximum - this.actualMinimumValue.getTime()) / interval));
				let offset: number = 0;
				if (this.categoryMode == CategoryMode.Mode2) {
					offset = this.getGroupCenter(0, windowRect, viewportRect, effectiveViewportRect);
					offset = this.isInverted ? -offset : offset;
				}
				let viewportPixelRight: number = <number>truncate(Math.ceil(resolvedViewportRect.right));
				let viewportPixelLeft: number = <number>truncate(Math.floor(resolvedViewportRect.left));
				let majorValue1: number = this.getScaledValue(this.actualMinimumValue.getTime() + first1 * interval, xParams) + offset;
				for (let i1: number = first1; i1 <= last1; i1++) {
					let nextMajorValue: number = this.getScaledValue(this.actualMinimumValue.getTime() + (i1 + 1) * interval, xParams) + offset;
					if (!isNaN_(majorValue1) && !isInfinity(majorValue1)) {
						let categoryPixelValue: number = <number>truncate(Math.round(majorValue1));
						if (categoryPixelValue <= viewportPixelRight) {
							if (i1 % 2 == 0) {
								this.verticalStrip(stripsGeometry, majorValue1, nextMajorValue, viewportRect);
							}
							this.verticalLine(majorGeometry, majorValue1, viewportRect, majorLinesPathInfo, false);
							this.majorLinePositions.add(majorValue1);
							if (this.shouldRenderMinorLines) {
								let minorIntervalTicks = this.getMinorIntervalTicks();
								if (minorIntervalTicks > 0 && minorIntervalTicks < interval) {
									if (interval / minorIntervalTicks < 20) {
										let curValue: number = majorValue1;
										let step: number = Math.abs(this.getScaledValue(this.actualMinimumValue.getTime() + minorIntervalTicks, xParams) - this.getScaledValue(this.actualMinimumValue.getTime(), xParams));
										while (curValue + step < nextMajorValue) {
											if (Math.abs(curValue + step - nextMajorValue) < 0.0001) {
												break;
											}
											curValue += step;
											if (curValue > 0) {
												this.verticalLine(minorGeometry, curValue, viewportRect, minorLinesPathInfo, false);
											}
										}
										this.setActualMinorIntervalInternal(minorIntervalTicks);
									}
								} else {
									for (let j: number = 1; j < snapper.minorCount; ++j) {
										let minorValue: number = this.getScaledValue(this.actualMinimumValue.getTime() + i1 * interval + (j * interval) / snapper.minorCount, xParams) + offset;
										this.verticalLine(minorGeometry, minorValue, viewportRect, minorLinesPathInfo, false);
									}
									if (snapper.minorCount > 0) {
										this.setActualMinorIntervalInternal(<number>truncate((interval / snapper.minorCount)));
									}
								}
							}
						}
						if (categoryPixelValue >= viewportPixelLeft && categoryPixelValue <= viewportPixelRight) {
							let majorX: number = this.actualMinimumValue.getTime() + i1 * interval;
							let ticks_: number = <number>truncate(Math.floor(majorX));
							let dateValue: Date = <Date>(new Date(ticks_));
							let labelText1: any = this.getLabel(dateValue);
							if (labelText1 != null) {
								this.labelDataContext.add1(labelText1);
								this.labelPositions.add(new LabelPosition(majorValue1));
							}
						}
					}
					majorValue1 = nextMajorValue;
				}
			}
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.crossingAxis != null) {
				if (this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideTop || this.labelSettings.location == AxisLabelsLocation.InsideBottom)) {
					this.seriesViewer.invalidatePanels();
				}
			}
			this.labelPanel.labelDataContext = this.labelDataContext;
			this.labelPanel.labelPositions = this.labelPositions;
			this.renderLabels();
		}
	}
	protected getUserIntervalTicks(): number {
		return this.actualInterval;
	}
	private getMinorIntervalTicks(): number {
		return this.minorInterval;
	}
	private setActualIntervalInternal(ticks: number): void {
		this.actualInterval = ticks;
	}
	private setActualMinorIntervalInternal(ticks: number): void {
		this.actualMinorInterval = ticks;
	}
	private intervalIsSet(): boolean {
		return this.interval != 0;
	}
	private actualIntervalIsEmpty(): boolean {
		return this.actualInterval == 0;
	}
	private getDate(index: number): Date {
		return this.dateTimeColumn == null ? dateMinValue() : this.dateTimeColumn.item(index);
	}
	scrollIntoView(minimum: Date, maximum: Date): void {
		if (minimum > maximum || this.fastItemsSource == null || this.fastItemsSource.count == 0) {
			return;
		}
		let proportionMin: number = (minimum.getTime() - <number>this.actualMinimumValue.getTime()) / <number>(this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime());
		let proprotionMax: number = (maximum.getTime() - <number>this.actualMinimumValue.getTime()) / <number>(this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime());
		this.seriesViewer.windowRect = new Rect(0, proportionMin, this.seriesViewer.windowRect.y, proprotionMax - proportionMin, this.seriesViewer.windowRect.height);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryDateTimeXAxis.displayTypePropertyName:
			this.mustInvalidateLabels = true;
			this.labelPanel.areLabelsUnevenlySpaced = this.displayType == TimeAxisDisplayType.Discrete;
			this.renderAxis1(false);
			break;

			case CategoryDateTimeXAxis.intervalPropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

		}

	}
	initializeActualMinimumAndMaximum(): void {
		super.initializeActualMinimumAndMaximum();
		if (this.intervalIsSet()) {
			this.actualInterval = this.interval;
			let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
			let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
			let span: number = Math.abs(this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime());
			this.hasUserInterval = this.actualIntervalIsEmpty() || (this.displayType == TimeAxisDisplayType.Discrete) || (1 * span / this.getUserIntervalTicks() > (viewportRect.width / windowRect.width)) ? false : true;
		} else {
			this.hasUserInterval = false;
		}
	}
	protected mode2TimeOffset(min: Date, max: Date): number {
		let timeSpan: number = max.getTime() - min.getTime();
		let timeOffset_: number = <number>truncate(Math.round(intDivide(timeSpan, this.cachedItemsCount) / 2));
		return timeOffset_ == 0 ? timeSpanFromMilliseconds(1) : timeSpanFromMilliseconds(timeOffset_);
	}
	protected get_isCategoryDateTime(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class CategoryDateTimeXAxisView extends CategoryAxisBaseView {
	static $t: Type = markType(CategoryDateTimeXAxisView, 'CategoryDateTimeXAxisView', (<any>CategoryAxisBaseView).$type);
	private _xModel: CategoryDateTimeXAxis = null;
	protected get xModel(): CategoryDateTimeXAxis {
		return this._xModel;
	}
	protected set xModel(value: CategoryDateTimeXAxis) {
		this._xModel = value;
	}
	constructor(model: CategoryDateTimeXAxis) {
		super(model);
		this.xModel = model;
	}
	getValueLabel(value: number): string {
		let val = this.getLabelValue(dateFromTicks(<number>truncate(value)));
		return <string>val;
	}
}


