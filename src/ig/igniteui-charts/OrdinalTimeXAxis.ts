/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FastItemDateTimeColumn } from "igniteui-core/FastItemDateTimeColumn";
import { CategoryXAxis } from "./CategoryXAxis";
import { ITimeRangeSelectorAxis, ITimeRangeSelectorAxis_$type } from "./ITimeRangeSelectorAxis";
import { Axis } from "./Axis";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { TimeAxisLabelFormatCollection } from "./TimeAxisLabelFormatCollection";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { CategoryMode } from "./CategoryMode";
import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Base, EventArgs, runOn, delegateCombine, typeCast, Date_$type, Type, markType } from "igniteui-core/type";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { TimeAxisLabelFormat } from "./TimeAxisLabelFormat";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { TimeAxisBase } from "./TimeAxisBase";
import { SeriesViewer } from "./SeriesViewer";
import { TimeXAxis } from "./TimeXAxis";
import { IGetItemAtIndex } from "igniteui-core/IGetItemAtIndex";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { truncate } from "igniteui-core/number";
import { dateMaxValue, dateMinValue } from "igniteui-core/date";

/**
 * @hidden 
 */
export class OrdinalTimeXAxis extends CategoryXAxis implements ITimeRangeSelectorAxis {
	static $t: Type = markType(OrdinalTimeXAxis, 'OrdinalTimeXAxis', (<any>CategoryXAxis).$type, [ITimeRangeSelectorAxis_$type]);
	getScaledValue2(unscaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		return this.getScaledValue(unscaledValue, new ScalerParams(0, windowRect, viewportRect, this.isInverted, this.getCurrentEffectiveViewport()));
	}
	getScaledValue1(unscaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		return this.getScaledValue(unscaledValue, p);
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		let actualMaximum: number = this.actualMaximum;
		let actualMinimum: number = this.actualMinimum;
		let actualRange: number = this.actualMaximum - this.actualMinimum;
		let scaledValue: number = actualRange >= 1 ? (unscaledValue - actualMinimum) / (actualMaximum - actualMinimum) : actualRange == 0 ? 0.5 : NaN;
		if (this.isInvertedCached) {
			scaledValue = 1 - scaledValue;
		}
		let viewportRect: Rect = p.viewportRect;
		let windowRect: Rect = p.windowRect;
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width;
	}
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		let input: number[][] = this.asBucketArray(unscaledValues);
		let useArray: boolean = input != null;
		for (let bucketIndex: number = 0; bucketIndex < bucketIndexes.count; bucketIndex++) {
			for (let i: number = startIndex; i < count; i++) {
				let unscaledValue: number[] = useArray ? input[i] : unscaledValues.item(i);
				unscaledValue[bucketIndex] = this.getScaledValue(unscaledValue[bucketIndex], p);
			}
		}
	}
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		for (let ii: number = startIndex; ii < count; ii++) {
			unscaledValues.item(ii, this.getScaledValue(unscaledValues.item(ii), p));
		}
	}
	getUnscaledValue2(scaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		return this.getUnscaledValue(scaledValue, new ScalerParams(0, windowRect, this.viewportRect, this.isInverted, this.getCurrentEffectiveViewport()));
	}
	getUnscaledValue3(scaledValue: number, windowRect: Rect, viewportRect: Rect, categoryMode: CategoryMode): number {
		return this.getUnscaledValue(scaledValue, new ScalerParams(0, windowRect, this.viewportRect, this.isInverted, this.getCurrentEffectiveViewport()));
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		let windowRect: Rect = p.windowRect;
		let viewportRect: Rect = p.viewportRect;
		let unscaledValue: number = windowRect.left + (scaledValue - viewportRect.left) * windowRect.width / viewportRect.width;
		if (this.isInvertedCached) {
			unscaledValue = 1 - unscaledValue;
		}
		return this.actualMinimum + unscaledValue * (this.actualMaximum - this.actualMinimum);
	}
	getUnscaledValue1(scaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		return this.getUnscaledValue(scaledValue, p);
	}
	getUnscaledValueList(scaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		for (let ii: number = startIndex; ii < count; ii++) {
			scaledValues.item(ii, this.getUnscaledValue(scaledValues.item(ii), p));
		}
	}
	constructor() {
		super();
		FastItemDateTimeColumn.register();
		this._labelFormats = new TimeAxisLabelFormatCollection();
		let $t = this.labelFormats;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.handleLabelFormatsCollectionChanged));
		this.actualMinimum = 0;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryAxisBase.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.dateTimeColumn);
				this.dateTimeColumn = null;
			}
			if (this.fastItemsSource != null) {
				this.dateTimeColumn = TimeAxisBase.registerDateTimeColumn1(this.dateTimeMemberPath, this);
			}
			break;

			case OrdinalTimeXAxis.dateTimeMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.dateTimeColumn);
				this.dateTimeColumn = TimeAxisBase.registerDateTimeColumn1(this.dateTimeMemberPath, this);
			}
			break;

			case OrdinalTimeXAxis.dateTimeColumnPropertyName:
			this.updateRange();
			this.inferredInterval = this.inferInterval();
			break;

			case OrdinalTimeXAxis.minimumValuePropertyName:

			case OrdinalTimeXAxis.maximumValuePropertyName:
			this.updateRange();
			this.renderAxis();
			break;

		}

	}
	private _actualMinimumValue: Date = dateMaxValue();
	get actualMinimumValue(): Date {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: Date) {
		this._actualMinimumValue = value;
	}
	private _actualMaximumValue: Date = dateMinValue();
	get actualMaximumValue(): Date {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: Date) {
		this._actualMaximumValue = value;
	}
	private _visibleMinimum: Date = dateMaxValue();
	get visibleMinimum(): Date {
		return this._visibleMinimum;
	}
	set visibleMinimum(value: Date) {
		this._visibleMinimum = value;
	}
	private _visibleMaximum: Date = dateMinValue();
	get visibleMaximum(): Date {
		return this._visibleMaximum;
	}
	set visibleMaximum(value: Date) {
		this._visibleMaximum = value;
	}
	private updateActualRange(): void {
		if (this.dateTimeColumn == null || this.dateTimeColumn.count == 0 || this.dateTimeColumn.count < this.actualMinimum - 1) {
			this.actualMinimumValue = dateMinValue();
			this.actualMaximumValue = dateMaxValue();
			return;
		}
		let actualMinimum: number = Math.max(0, Math.min(this.actualMinimum, this.dateTimeColumn.count - 1));
		let actualMaximum: number = Math.max(0, Math.min(this.actualMaximum, this.dateTimeColumn.count - 1));
		let changing: boolean = +(this.actualMinimumValue) != +(this.dateTimeColumn.item(actualMinimum)) || +(this.actualMaximumValue) != +(this.dateTimeColumn.item(actualMaximum));
		if (changing) {
			let oldActualMinimumValue: Date = this.actualMinimumValue;
			let oldActualMaximumValue: Date = this.actualMaximumValue;
			this.actualMinimumValue = this.dateTimeColumn.item(actualMinimum);
			this.actualMaximumValue = this.dateTimeColumn.item(actualMaximum);
			this.updateVisibleRange();
		}
	}
	private updateVisibleRange(): void {
		if (this.dateTimeColumn == null || this.dateTimeColumn.count == 0 || this.seriesViewer == null) {
			let change: boolean = +(this.visibleMinimum) != +(this.actualMinimumValue) || +(this.visibleMaximum) != +(this.actualMaximumValue);
			this.visibleMinimum = this.actualMinimumValue;
			this.visibleMaximum = this.actualMaximumValue;
			if (change && this.visibleRangeChanged != null) {
				this.visibleRangeChanged(this, EventArgs.empty);
			}
			return;
		}
		let scalerParams: ScalerParams = new ScalerParams(1, this.seriesViewer.windowRect, this.seriesViewer.viewportRect, this.isInverted);
		let firstVisibleIndex: number = <number>truncate(Math.ceil(this.getUnscaledValue(this.seriesViewer.viewportRect.left, scalerParams)));
		let lastVisibleIndex: number = <number>truncate(Math.ceil(this.getUnscaledValue(this.seriesViewer.viewportRect.right, scalerParams)));
		let visibleMinimum: Date = firstVisibleIndex >= 0 && firstVisibleIndex < this.dateTimeColumn.count ? this.dateTimeColumn.item(firstVisibleIndex) : this.actualMinimumValue;
		let visibleMaximum: Date = lastVisibleIndex >= 0 && lastVisibleIndex < this.dateTimeColumn.count ? this.dateTimeColumn.item(lastVisibleIndex) : this.actualMaximumValue;
		let changed: boolean = +(this.visibleMinimum) != +visibleMinimum || +(this.visibleMaximum) != +visibleMaximum;
		this.visibleMinimum = visibleMinimum;
		this.visibleMaximum = visibleMaximum;
		if (changed && this.visibleRangeChanged != null) {
			this.visibleRangeChanged(this, EventArgs.empty);
		}
	}
	private static readonly dateTimeMemberPathPropertyName: string = "DateTimeMemberPath";
	private _dateTimeMemberPath: string = null;
	get dateTimeMemberPath(): string {
		return this._dateTimeMemberPath;
	}
	set dateTimeMemberPath(value: string) {
		let oldValue: string = this.dateTimeMemberPath;
		if (value != oldValue) {
			this._dateTimeMemberPath = value;
			this.raisePropertyChanged(OrdinalTimeXAxis.dateTimeMemberPathPropertyName, oldValue, this.dateTimeMemberPath);
		}
	}
	private _dateTimeColumn: IFastItemColumn$1<Date> = null;
	static readonly dateTimeColumnPropertyName: string = "DateTimeColumn";
	private get dateTimeColumn(): IFastItemColumn$1<Date> {
		return this._dateTimeColumn;
	}
	private set dateTimeColumn(value: IFastItemColumn$1<Date>) {
		if (this._dateTimeColumn != value) {
			let oldDateTimeColumn: IFastItemColumn$1<Date> = this._dateTimeColumn;
			this._dateTimeColumn = value;
			this.raisePropertyChanged(OrdinalTimeXAxis.dateTimeColumnPropertyName, oldDateTimeColumn, this._dateTimeColumn);
		}
	}
	protected windowRectChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.windowRectChangedOverride(oldRect, newRect);
		this.updateVisibleRange();
	}
	getWindowRectForSelection(selectionStart: Date, selectionEnd: Date): Rect {
		if (this.dateTimeColumn == null) {
			return Rect.empty;
		}
		let backwards: boolean = selectionStart > selectionEnd;
		let start: Date = backwards ? selectionEnd : selectionStart;
		let end: Date = backwards ? selectionStart : selectionEnd;
		let startIndex: number = -1;
		while (++startIndex < this.dateTimeColumn.count && this.dateTimeColumn.item(startIndex) < start) {
			;
		}
		let endIndex: number = this.dateTimeColumn.count;
		while (--endIndex >= 0 && this.dateTimeColumn.item(endIndex) > end) {
			;
		}
		let scalerParams: ScalerParams = new ScalerParams(0, new Rect(0, 0, 0, 1, 1), new Rect(0, 0, 0, 1, 1), this.isInverted, this.seriesViewer.effectiveViewport);
		let windowLeft: number = this.getScaledValue(startIndex, scalerParams);
		let windowRight: number = this.getScaledValue(endIndex + 1, scalerParams);
		return new Rect(0, windowLeft, NaN, Math.max(0, windowRight - windowLeft), NaN);
	}
	private static readonly labelFormatsPropertyName: string = "LabelFormats";
	private _labelFormats: TimeAxisLabelFormatCollection = null;
	get labelFormats(): TimeAxisLabelFormatCollection {
		return this._labelFormats;
	}
	private handleLabelFormatsCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.renderAxis1(false);
	}
	provideDateTimeMemberPath(memberPath: string): void {
		super.provideDateTimeMemberPath(memberPath);
		this.dateTimeMemberPath = memberPath;
	}
	getLabel(dataItem: any): any {
		if (this.formatLabel != null) {
			return this.formatLabel(dataItem);
		}
		if (!(typeCast<Date>(Date_$type, dataItem) !== null)) {
			return super.getLabel(dataItem);
		}
		let result: any = TimeXAxis.getLabel1(<Date>dataItem, this.visibleRange, this.labelFormats, this.culture);
		return result == null ? super.getLabel(dataItem) : result;
	}
	getValueLabel(value: number): string {
		let index: number = 0;
		if (this.categoryMode == 0) {
			index = <number>truncate(Math.round(value));
		} else {
			index = <number>truncate(Math.floor(value));
		}
		if (index < 0 || index > this.itemsCount - 1) {
			return super.getValueLabel(value);
		}
		let item = this.dateTimeColumn.item(index);
		let label = this.getLabel(item);
		if (label == null) {
			return null;
		}
		return label.toString();
	}
	private get visibleRange(): number {
		return +(this.visibleMaximum) - +(this.visibleMinimum);
	}
	protected getDataItems(): IGetItemAtIndex {
		return this.dateTimeColumn;
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.viewportChangedOverride(oldRect, newRect);
		this.updateVisibleRange();
	}
	protected getMajorValue(unscaledValue: number, xParams: ScalerParams): number {
		let offset: number = this.categoryMode == CategoryMode.Mode0 ? 0 : 0.5;
		return super.getMajorValue(unscaledValue + offset, xParams);
	}
	protected getCategoryValue(unscaledValue: number, majorValue: number, mode0: boolean, xParams: ScalerParams): number {
		return majorValue;
	}
	private _inferredInterval: number = 0;
	private get inferredInterval(): number {
		return this._inferredInterval;
	}
	private set inferredInterval(value: number) {
		this._inferredInterval = value;
	}
	private inferInterval(): number {
		if (this.dateTimeColumn == null || this.dateTimeColumn.count < 2) {
			return (0);
		}
		return TimeXAxis.inferInterval1((ii: number) => this.dateTimeColumn.item(ii), this.dateTimeColumn.count);
	}
	itemLabelFormat(): string {
		return TimeXAxis.itemLabelFormatFor(this.inferredInterval);
	}
	private static readonly minimumValuePropertyName: string = "MinimumValue";
	private _minimumValue: Date = dateMinValue();
	get minimumValue(): Date {
		return this._minimumValue;
	}
	set minimumValue(value: Date) {
		let oldValue: Date = this.minimumValue;
		if (+value != +oldValue) {
			this._minimumValue = value;
			this.propertyUpdatedOverride(this, OrdinalTimeXAxis.minimumValuePropertyName, oldValue, this.minimumValue);
		}
	}
	private static readonly maximumValuePropertyName: string = "MaximumValue";
	private _maximumValue: Date = dateMaxValue();
	get maximumValue(): Date {
		return this._maximumValue;
	}
	set maximumValue(value: Date) {
		let oldValue: Date = this.maximumValue;
		if (+value != +oldValue) {
			this._maximumValue = value;
			this.propertyUpdatedOverride(this, OrdinalTimeXAxis.maximumValuePropertyName, oldValue, this.maximumValue);
		}
	}
	updateRangeOverride(): boolean {
		if (+(this.minimumValue) == +(dateMaxValue()) || +(this.maximumValue) == +(dateMinValue())) {
			return super.updateRangeOverride();
		}
		if (this.mustInvalidateLabels && this.useEnhancedIntervalManagement) {
			this.labelFontHeuristics = this.gatherLabelFontHeuristics();
		}
		if (this.fastItemsSource == null || this.dateTimeColumn == null) {
			return false;
		}
		let min: number = this.actualMinimum;
		if (+(this.minimumValue) != +(dateMinValue())) {
			let firstRowAboveMinimum: number = -1;
			while (firstRowAboveMinimum++ <= this.dateTimeColumn.count) {
				if (this.dateTimeColumn.item(firstRowAboveMinimum) >= this.minimumValue) {
					break;
				}
			}
			min = firstRowAboveMinimum;
		}
		let max: number = this.categoryMode == CategoryMode.Mode0 ? this.fastItemsSource.count - 1 : this.fastItemsSource.count;
		if (+(this.maximumValue) != +(dateMaxValue())) {
			let firstRowBelowMaximum: number = this.fastItemsSource.count;
			while (firstRowBelowMaximum-- > 0) {
				if (this.dateTimeColumn.item(firstRowBelowMaximum) <= this.maximumValue) {
					break;
				}
			}
			max = firstRowBelowMaximum;
		}
		if (min != this.actualMinimum || max != this.actualMaximum) {
			let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, this.actualMinimum, min, this.actualMaximum, max);
			this.actualMinimum = min;
			this.actualMaximum = max;
			this.raiseRangeChanged(ea);
			this.updateActualRange();
			this.forceSeriesUpdate();
			return true;
		}
		return false;
	}
	visibleRangeChanged: (sender: any, e: EventArgs) => void = null;
	protected onFastItemsSourceEvent(e: FastItemsSourceEventArgs): void {
		super.onFastItemsSourceEvent(e);
		this.updateRange1(true);
	}
}


