/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TimeAxisBase } from "./TimeAxisBase";
import { ITimeRangeSelectorAxis, ITimeRangeSelectorAxis_$type } from "./ITimeRangeSelectorAxis";
import { List$1 } from "igniteui-core/List$1";
import { TimeAxisBreak } from "./TimeAxisBreak";
import { TimeAxisBreakCollection } from "./TimeAxisBreakCollection";
import { TimeAxisLabelFormatCollection } from "./TimeAxisLabelFormatCollection";
import { OrderedDictionary$2 } from "./OrderedDictionary$2";
import { TimeAxisInterval } from "./TimeAxisInterval";
import { TimeAxisIntervalCollection } from "./TimeAxisIntervalCollection";
import { Type, Base, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, EventArgs, runOn, delegateCombine, Number_$type, fromEnum, fromEn, typeCast, Date_$type, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { TimeAxisLabelFormat } from "./TimeAxisLabelFormat";
import { ScalerParams } from "./ScalerParams";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Axis } from "./Axis";
import { SeriesViewer } from "./SeriesViewer";
import { CultureInfo } from "igniteui-core/culture";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { NumericYAxis } from "./NumericYAxis";
import { AxisView } from "./AxisView";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { LabelPosition } from "./LabelPosition";
import { Extensions } from "igniteui-core/Extensions";
import { ISortingAxis } from "./ISortingAxis";
import { SortedListView$1 } from "./SortedListView$1";
import { Series } from "./Series";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { truncate, intDivide, isNaN_ } from "igniteui-core/number";
import { CategoryMode } from "./CategoryMode";
import { TimeAxisIntervalType } from "./TimeAxisIntervalType";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { dateFromTicks, dateMaxValue, dateAdd, dateSubtract, dateAddMonths, dateFromValues, dateGetMonth, dateGetTimeOfDay, dateAddDays, dateAddHours, dateMinValue } from "igniteui-core/date";
import { timeSpanTicks, timeSpanInit3, timeSpanInit1, timeSpanFromMilliseconds, timeSpanFromSeconds, timeSpanFromMinutes, timeSpanFromHours, timeSpanFromDays, timeSpanFromTicks, timeSpanTotalMilliseconds } from "igniteui-core/timespan";
import { dateToStringFormat } from "igniteui-core/dateExtended";

/**
 * @hidden 
 */
export class TimeXAxis extends TimeAxisBase implements ITimeRangeSelectorAxis {
	static $t: Type = markType(TimeXAxis, 'TimeXAxis', (<any>TimeAxisBase).$type, [ITimeRangeSelectorAxis_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>TimeXAxis).$type;
		this.omission = (0);
		this.scaledValueCursor = -2147483648;
		this._breaks = new TimeAxisBreakCollection();
		let $t = this.breaks;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.handleBreaksCollectionChanged));
		this._intervals = new TimeAxisIntervalCollection();
		let $t1 = this.intervals;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.handleIntervalsCollectionChanged));
		this._labelFormats = new TimeAxisLabelFormatCollection();
		let $t2 = this.labelFormats;
		$t2.collectionChanged = delegateCombine($t2.collectionChanged, runOn(this, this.handleLabelFormatsCollectionChanged));
		this.visibleRange = (0);
	}
	protected get_isPiecewise(): boolean {
		return this.breaks != null && this.breaks.count > 0;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		let precedingBreak: KeyValuePair$2<TimeAxisBreak, number> = new KeyValuePair$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type);
		let scaledValueCursor: number = this.scaledValueCursor != -2147483648 ? this.scaledValueCursor : 0;
		let breakCount: number = this.breakPositions != null ? this.breakPositions.count : 0;
		while (scaledValueCursor < breakCount) {
			let brk: TimeAxisBreak = this.breakPositions.item1(scaledValueCursor);
			if (brk.start.getTime() <= unscaledValue && brk.end.getTime() >= unscaledValue) {
				return NaN;
			}
			if (brk.end.getTime() <= unscaledValue) {
				precedingBreak = new KeyValuePair$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type, 1, brk, this.breakPositions.item(brk));
				scaledValueCursor++;
			} else {
				break;
			}
		}
		if (scaledValueCursor > 0) {
			scaledValueCursor -= 1;
		}
		if (this.scaledValueCursor != -2147483648) {
			this.scaledValueCursor = scaledValueCursor;
		}
		let precedingBreakPortion: number;
		let precedingBreakEnd: Date;
		if (precedingBreak.key != null) {
			precedingBreakPortion = precedingBreak.value;
			precedingBreakEnd = precedingBreak.key.end;
		} else {
			precedingBreakPortion = 0;
			precedingBreakEnd = this.actualMinimumValue;
		}
		let fromPrecedingBreak_: number = +(dateFromTicks(<number>truncate(unscaledValue))) - +precedingBreakEnd;
		let portionFromPrecedingBreak: number = <number>(fromPrecedingBreak_ / ((this.actualMaximumValue.getTime() - this.actualMinimumValue.getTime()) - this.omission));
		let portion: number = precedingBreakPortion + portionFromPrecedingBreak;
		portion -= p.windowRect.left;
		portion /= p.windowRect.width;
		let left: number = p.viewportRect.left;
		let right: number = p.viewportRect.right;
		let width: number = p.viewportRect.width;
		if (this.categoryMode != CategoryMode.Mode0) {
			let categorySize: number = this.getCategorySize(p.windowRect, p.viewportRect, p.effectiveViewportRect);
			left += categorySize / 2;
			right -= categorySize / 2;
			width -= categorySize;
		}
		if (this.isInverted) {
			return right - width * portion;
		}
		return left + width * portion;
	}
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		this.scaledValueCursor = 0;
		for (let ii: number = startIndex; ii < count; ii++) {
			unscaledValues.item(ii, this.getScaledValue(unscaledValues.item(ii), p));
		}
		this.scaledValueCursor = -2147483648;
	}
	protected startCursor(): void {
		this.scaledValueCursor = 0;
	}
	protected resetCursor(): void {
		this.scaledValueCursor = -2147483648;
	}
	private _scaledValueCursor: number = 0;
	private get scaledValueCursor(): number {
		return this._scaledValueCursor;
	}
	private set scaledValueCursor(value: number) {
		this._scaledValueCursor = value;
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		let left: number = p.viewportRect.left;
		let width: number = p.viewportRect.width;
		if (this.categoryMode != CategoryMode.Mode0) {
			let categorySize: number = this.getCategorySize(p.windowRect, p.viewportRect, p.effectiveViewportRect);
			left += categorySize / 2;
			width -= categorySize;
		}
		let scaleRelativePosition: number = p.windowRect.left + p.windowRect.width * (scaledValue - left) / width;
		if (this.isInverted) {
			scaleRelativePosition = 1 - scaleRelativePosition;
		}
		let precedingBreak: KeyValuePair$2<TimeAxisBreak, number> = new KeyValuePair$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type);
		if (this.breakPositions != null) {
			for (let breakPosition of fromEnum<KeyValuePair$2<TimeAxisBreak, number>>(this.breakPositions)) {
				if (breakPosition.value >= scaleRelativePosition && breakPosition.value <= scaleRelativePosition) {
					return breakPosition.key.start.getTime();
				}
				if (breakPosition.value < scaleRelativePosition && breakPosition.value > precedingBreak.value) {
					precedingBreak = breakPosition;
				}
			}
		}
		let precedingBreakEnd_: Date;
		let precedingBreakPortion: number;
		if (precedingBreak.key != null) {
			precedingBreakPortion = precedingBreak.value;
			precedingBreakEnd_ = precedingBreak.key.end;
		} else {
			precedingBreakPortion = 0;
			precedingBreakEnd_ = this.actualMinimumValue;
		}
		let portionFromPrecedingBreak_: number = scaleRelativePosition - precedingBreakPortion;
		let actualRange_: number = +(this.actualMaximumValue) - +(this.actualMinimumValue) - this.omission;
		return <number>(precedingBreakEnd_.getTime() + portionFromPrecedingBreak_ * actualRange_);
	}
	private static readonly breaksPropertyName: string = "Breaks";
	private _breaks: TimeAxisBreakCollection = null;
	get breaks(): TimeAxisBreakCollection {
		return this._breaks;
	}
	private static readonly labelFormatsPropertyName: string = "LabelFormats";
	private _labelFormats: TimeAxisLabelFormatCollection = null;
	get labelFormats(): TimeAxisLabelFormatCollection {
		return this._labelFormats;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case TimeAxisBase.actualMaximumValuePropertyName:
			this.calculateOmission();
			break;

			case TimeAxisBase.dateTimeColumnPropertyName:
			this.inferredInterval = this.inferInterval();
			break;

		}

	}
	protected windowRectChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.windowRectChangedOverride(oldRect, newRect);
		this.calculateBreakPositions();
		this.updateVisibleRange();
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.viewportChangedOverride(oldRect, newRect);
		this.calculateBreakPositions();
		this.updateVisibleRange();
	}
	updateRangeOverride(): boolean {
		let result: boolean = super.updateRangeOverride();
		this.calculateBreakPositions();
		return result;
	}
	private _omission: number = 0;
	private get omission(): number {
		return this._omission;
	}
	private set omission(value: number) {
		this._omission = value;
	}
	private calculateOmission(): void {
		let breaks: IEnumerable$1<TimeAxisBreak> = this.unrollRepeats(this.breaks);
		let sum: number = (0);
		for (let brk of fromEnum<TimeAxisBreak>(breaks)) {
			sum += (+(brk.end) - +(brk.start));
		}
		this.omission = sum;
	}
	private _breakPositions: OrderedDictionary$2<TimeAxisBreak, number> = null;
	private get breakPositions(): OrderedDictionary$2<TimeAxisBreak, number> {
		return this._breakPositions;
	}
	private set breakPositions(value: OrderedDictionary$2<TimeAxisBreak, number>) {
		this._breakPositions = value;
	}
	private unrollRepeats(breaks: IEnumerable): IEnumerable$1<TimeAxisBreak> {
		let result: List$1<TimeAxisBreak> = new List$1<TimeAxisBreak>((<any>TimeAxisBreak).$type, 0);
		if (breaks == null || +(this.actualMaximumValue) == +(dateMaxValue())) {
			return result;
		}
		for (let brk of fromEn<TimeAxisBreak>(breaks)) {
			if (brk.end >= this.actualMinimumValue && brk.start <= this.actualMaximumValue) {
				result.add(brk);
			}
			if (brk.interval != (0)) {
				let range: number = +(brk.end) - +(brk.start);
				let startTime: Date = dateAdd(+(brk.start), +(brk.interval));
				while (startTime <= this.actualMaximumValue) {
					let endTime: Date = this.addDatesIgnoringDST(startTime, range);
					let repeat: TimeAxisBreak = ((() => {
						let $ret = new TimeAxisBreak();
						$ret.start = startTime;
						$ret.end = endTime;
						return $ret;
					})());
					if (repeat.end >= this.actualMinimumValue && repeat.start <= this.actualMaximumValue) {
						result.add(repeat);
					}
					if (dateSubtract(+(dateMaxValue()), +(brk.interval)) < repeat.start) {
						break;
					}
					startTime = this.addDatesIgnoringDST(repeat.start, brk.interval);
				}
			}
		}
		return result;
	}
	private addDatesIgnoringDST(start: Date, addend: number): Date {
		let result: Date = dateFromTicks(start.getTime());
		result.setMilliseconds(result.getMilliseconds() + addend);
		return result;
	}
	private calculateBreakPositions(): void {
		this.breakPositions = new OrderedDictionary$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type);
		if (+(this.actualMaximumValue) == +(dateMaxValue()) || this.breaks == null || this.breaks.count == 0 || this.seriesViewer == null) {
			return;
		}
		let sortedBreaks: List$1<TimeAxisBreak> = new List$1<TimeAxisBreak>((<any>TimeAxisBreak).$type, 1, this.unrollRepeats(this.breaks));
		sortedBreaks.sort2((a: TimeAxisBreak, b: TimeAxisBreak) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
		let windowRect: Rect = this.seriesViewer.actualWindowRect;
		let scalerParams: ScalerParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.seriesViewer.viewportRect, this.isInverted, this.seriesViewer.effectiveViewport);
		let actualRange: number = +(this.actualMaximumValue) - +(this.actualMinimumValue) - this.omission;
		let omittedPortion: number = 0;
		for (let brk of fromEnum<TimeAxisBreak>(sortedBreaks)) {
			let scaleNormalizedStart: number = timeSpanTicks((+(brk.start) - +(this.actualMinimumValue))) / <number>timeSpanTicks(actualRange);
			let scaleNormalizedEnd: number = timeSpanTicks((+(brk.end) - +(this.actualMinimumValue))) / <number>timeSpanTicks(actualRange);
			if (scaleNormalizedEnd < 0 || scaleNormalizedStart - omittedPortion > 1) {
				continue;
			}
			this.breakPositions.addItem(brk, scaleNormalizedStart - omittedPortion);
			omittedPortion += (scaleNormalizedEnd - scaleNormalizedStart);
		}
	}
	getValueLabel(value: number): string {
		if (isNaN_(value)) {
			return null;
		}
		let ticks_: number = <number>truncate(value);
		let dateValue: Date = <Date>(new Date(ticks_));
		let label = this.getLabel(dateValue);
		if (label == null) {
			return null;
		}
		return label.toString();
	}
	getLabel(dataItem: any): any {
		if (!(typeCast<Date>(Date_$type, dataItem) !== null)) {
			return super.getLabel(dataItem);
		}
		let result: any = TimeXAxis.getLabel1(<Date>dataItem, this.visibleRange, this.labelFormats, this.culture);
		return result == null ? super.getLabel(dataItem) : result;
	}
	static getLabel1(time: Date, visibleRange: number, labelFormats: IList$1<TimeAxisLabelFormat>, culture: CultureInfo): any {
		let matchingFormat: TimeAxisLabelFormat = null;
		if (visibleRange == (0)) {
			return null;
		}
		let labelFormat: string;
		if (labelFormats == null || labelFormats.count == 0) {
			labelFormat = TimeXAxis.getAutoFormat1(visibleRange);
		} else {
			for (let format of fromEnum<TimeAxisLabelFormat>(labelFormats)) {
				if (format.range > visibleRange) {
					continue;
				}
				if (matchingFormat == null || format.range > matchingFormat.range) {
					matchingFormat = format;
				}
			}
			if (matchingFormat == null) {
				return null;
			}
			labelFormat = matchingFormat.format;
		}
		return dateToStringFormat(time, labelFormat, culture);
	}
	protected get_hasUserInterval(): boolean {
		return super.get_hasUserInterval() || (this.intervals != null && this.intervals.count > 0);
	}
	protected set_hasUserInterval(value: boolean): void {
		super.set_hasUserInterval(value);
	}
	private static readonly intervalsPropertyName: string = "Intervals";
	private _intervals: TimeAxisIntervalCollection = null;
	get intervals(): TimeAxisIntervalCollection {
		return this._intervals;
	}
	private getAutoFormat(): string {
		return TimeXAxis.getAutoFormat1(this.visibleRange);
	}
	static getAutoFormat1(visibleRange: number): string {
		visibleRange = Math.abs(visibleRange);
		if (visibleRange > timeSpanInit3(1825, 0, 0, 0)) {
			return "yyyy";
		}
		if (visibleRange > timeSpanInit3(365, 0, 0, 0)) {
			return "MMM yyyy";
		}
		if (visibleRange > timeSpanInit3(4, 0, 0, 0)) {
			return "MMM dd";
		}
		if (visibleRange > timeSpanInit3(1, 0, 0, 0)) {
			return "MMM dd hh:mmtt";
		}
		if (visibleRange > timeSpanInit1(0, 10, 0)) {
			return "hh:mm";
		}
		return "hh:mm:ss";
	}
	private static _goodIntervals: OrderedDictionary$2<number, TimeAxisInterval> = null;
	private static goodIntervals(): OrderedDictionary$2<number, TimeAxisInterval> {
		if (TimeXAxis._goodIntervals == null) {
			TimeXAxis._goodIntervals = ((() => {
				let $ret = new OrderedDictionary$2<number, TimeAxisInterval>(Number_$type, (<any>TimeAxisInterval).$type);
				$ret.addItem((0), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Ticks;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromMilliseconds(1), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Milliseconds;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromSeconds(1), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Seconds;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromSeconds(30), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Seconds;
					$ret.interval = 30;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromMinutes(2), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Minutes;
					$ret.interval = 2;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromMinutes(5), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Minutes;
					$ret.interval = 5;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromHours(1), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Hours;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(1), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Days;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(2), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Days;
					$ret.interval = 2;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(5), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Days;
					$ret.interval = 5;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(10), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Days;
					$ret.interval = 10;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(30), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Months;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(60), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Months;
					$ret.interval = 3;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(365), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Years;
					$ret.interval = 1;
					return $ret;
				})()));
				$ret.addItem(timeSpanFromDays(365 * 10), ((() => {
					let $ret = new TimeAxisInterval();
					$ret.intervalType = TimeAxisIntervalType.Years;
					$ret.interval = 10;
					return $ret;
				})()));
				return $ret;
			})());
		}
		return TimeXAxis._goodIntervals;
	}
	private getAutoInterval(): TimeAxisInterval {
		if (this.useEnhancedIntervalManagement && (this.labelSettings == null || this.labelSettings.angle == 0)) {
			let maxLabelWidth: number = this.resolveHeuristicHorizontalResolution();
			let viewportWidth: number = this.viewportRect.width;
			let desiredNumberOfLabels: number = <number>truncate(Math.floor(viewportWidth / maxLabelWidth));
			let maxVal = Number.MAX_VALUE;
			let targetInterval: number = desiredNumberOfLabels == 0 ? maxVal : timeSpanFromTicks(<number>(intDivide(timeSpanTicks(this.visibleRange), desiredNumberOfLabels)));
			let result: TimeAxisInterval = null;
			for (let goodInterval of fromEnum<KeyValuePair$2<number, TimeAxisInterval>>(TimeXAxis.goodIntervals())) {
				result = goodInterval.value;
				if (goodInterval.key > targetInterval) {
					break;
				}
			}
			return result;
		}
		let visibleRange: number = this.visibleRange;
		if (visibleRange == (0)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Years;
				$ret.interval = 1;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(365 * 100)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Years;
				$ret.interval = 10;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(365 * 5)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Years;
				$ret.interval = 1;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(365 * 2)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Months;
				$ret.interval = 3;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(150)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Months;
				$ret.interval = 1;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(60)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Days;
				$ret.interval = 10;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(30)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Days;
				$ret.interval = 5;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(20)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Days;
				$ret.interval = 2;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(4)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Days;
				$ret.interval = 1;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromDays(1)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Hours;
				$ret.interval = 12;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromHours(6)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Hours;
				$ret.interval = 1;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromMinutes(30)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Minutes;
				$ret.interval = 5;
				return $ret;
			})());
		}
		if (visibleRange >= timeSpanFromMinutes(10)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Minutes;
				$ret.interval = 2;
				return $ret;
			})());
		}
		return ((() => {
			let $ret = new TimeAxisInterval();
			$ret.intervalType = TimeAxisIntervalType.Seconds;
			$ret.interval = 30;
			return $ret;
		})());
	}
	private getInterval(): TimeAxisInterval {
		if (this.intervals == null || this.intervals.count == 0) {
			return this.getAutoInterval();
		}
		if (this.visibleRange == (0)) {
			return ((() => {
				let $ret = new TimeAxisInterval();
				$ret.intervalType = TimeAxisIntervalType.Years;
				$ret.interval = 1;
				return $ret;
			})());
		}
		let matchingInterval: TimeAxisInterval = null;
		for (let interval of fromEnum<TimeAxisInterval>(this.intervals)) {
			if (interval.range > this.visibleRange) {
				continue;
			}
			if (matchingInterval == null || interval.range > matchingInterval.range) {
				matchingInterval = interval;
			}
		}
		return matchingInterval == null ? this.getAutoInterval() : matchingInterval;
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
		if (!windowRect.isEmpty && !viewportRect.isEmpty) {
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
			let viewportPixelRight: number = <number>truncate(Math.ceil(resolvedViewportRect.right));
			let viewportPixelLeft: number = <number>truncate(Math.floor(resolvedViewportRect.left));
			let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
			let majorLinesPathInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
			let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
			this.updateVisibleRange();
			let majorValues: List$1<Date> = new List$1<Date>(Date_$type, 1, this.majorValues());
			let majorValuesScaled: List$1<number> = new List$1<number>(Number_$type, 0);
			for (let ii: number = 0; ii < majorValues.count; ii++) {
				majorValuesScaled.add(majorValues._inner[ii].getTime());
			}
			this.getScaledValueList(majorValuesScaled, 0, majorValuesScaled.count, xParams);
			for (let ii1: number = 0; ii1 < majorValues.count; ii1++) {
				let majorValue: Date = majorValues._inner[ii1];
				let majorValueScaled: number = majorValuesScaled._inner[ii1];
				let categoryPixelValue: number = <number>truncate(Math.round(majorValueScaled));
				if (categoryPixelValue <= viewportPixelRight) {
					if (ii1 % 2 == 0) {
						let nextMajorValueScaled: number = ii1 < majorValuesScaled.count - 1 ? majorValuesScaled._inner[ii1 + 1] : resolvedViewportRect.right;
						this.verticalStrip(stripsGeometry, majorValueScaled, nextMajorValueScaled, viewportRect);
					}
					this.verticalLine(majorGeometry, majorValueScaled, viewportRect, majorLinesPathInfo, false);
					this.majorLinePositions.add(majorValueScaled);
				}
				if (categoryPixelValue >= viewportPixelLeft && categoryPixelValue <= viewportPixelRight) {
					let labelText: any = this.getLabel(majorValue);
					if (labelText != null) {
						this.labelDataContext.add1(labelText);
						this.labelPositions.add(new LabelPosition(majorValueScaled));
					}
				}
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
	private majorValues(): IEnumerable$1<Date> {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let resolvedViewportRect: Rect = this.getContentViewport();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let interval: TimeAxisInterval = this.getInterval();
		let current: Date = this.visibleMinimum;
		if (!this.minimumValueIsSet() && interval != null) {
			if (interval.intervalType == TimeAxisIntervalType.Months && current.getDate() != 1) {
				current = dateAddMonths(current, 1);
				current = dateFromValues(current.getFullYear(), dateGetMonth(current), 1, 0, 0, 0, 0);
			} else if (interval.intervalType == TimeAxisIntervalType.Days && dateGetTimeOfDay(current) != (0)) {
				current = dateAddDays(current, 1);
				current = dateFromValues(current.getFullYear(), dateGetMonth(current), current.getDate(), 0, 0, 0, 0);
			} else if (interval.intervalType == TimeAxisIntervalType.Hours && current.getMinutes() != 0) {
				current = dateAddHours(current, 1);
				current = dateFromValues(current.getFullYear(), dateGetMonth(current), current.getDate(), current.getHours(), 0, 0, 0);
			}
		}
		let result: List$1<Date> = new List$1<Date>(Date_$type, 0);
		let totalTicks: number = 0;
		let maxTicks: number = 10000;
		if (interval.interval == 0) {
			return result;
		}
		while (current <= this.visibleMaximum && totalTicks++ < maxTicks) {
			let containingBreak: KeyValuePair$2<TimeAxisBreak, number> = this.getContainingBreak(current);
			let majorValue: Date = current;
			if (containingBreak.key != null) {
				majorValue = interval.nextTime(containingBreak.key.end);
			}
			result.add(majorValue);
			while (current <= majorValue) {
				current = interval.addTo(current);
			}
		}
		return result;
	}
	private getContainingBreak(time: Date): KeyValuePair$2<TimeAxisBreak, number> {
		if (this.breakPositions == null) {
			return new KeyValuePair$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type);
		}
		for (let breakPosition of fromEnum<KeyValuePair$2<TimeAxisBreak, number>>(this.breakPositions)) {
			if (breakPosition.key.start <= time && breakPosition.key.end >= time) {
				return breakPosition;
			}
		}
		return new KeyValuePair$2<TimeAxisBreak, number>((<any>TimeAxisBreak).$type, Number_$type);
	}
	private _visibleRange: number = 0;
	private get visibleRange(): number {
		return this._visibleRange;
	}
	private set visibleRange(value: number) {
		this._visibleRange = value;
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
	protected updateVisibleRange(): void {
		super.updateVisibleRange();
		if (this.seriesViewer == null || !Extensions.isPlottable1(this.seriesViewer.viewportRect)) {
			return;
		}
		let scalerParams: ScalerParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.seriesViewer.viewportRect, this.isInverted, this.seriesViewer.effectiveViewport);
		let left: number = this.seriesViewer.viewportRect.left;
		let right: number = this.seriesViewer.viewportRect.right;
		if (this.categoryMode != CategoryMode.Mode0) {
			let categorySize: number = this.getCategorySize(scalerParams.windowRect, scalerParams.viewportRect, scalerParams.effectiveViewportRect);
			left += categorySize / 2;
			right -= categorySize / 2;
		}
		let visibleMinimumValue: number = <number>truncate(this.getUnscaledValue(left, scalerParams));
		let visibleMaximumValue: number = <number>truncate(this.getUnscaledValue(right, scalerParams));
		if (visibleMinimumValue < 0 || visibleMaximumValue < 0) {
			this.visibleRange = (0);
			return;
		}
		visibleMinimumValue = Math.min(dateMaxValue().getTime(), visibleMinimumValue);
		visibleMaximumValue = Math.min(dateMaxValue().getTime(), visibleMaximumValue);
		let visibleMinimum: Date = dateFromTicks(Math.min(visibleMinimumValue, visibleMaximumValue));
		let visibleMaximum: Date = dateFromTicks(Math.max(visibleMinimumValue, visibleMaximumValue));
		let changed: boolean = +(this.visibleMinimum) != +visibleMinimum || +(this.visibleMaximum) != +visibleMaximum;
		this.visibleMinimum = visibleMinimum;
		this.visibleMaximum = visibleMaximum;
		if (changed && this.visibleRangeChanged != null) {
			this.visibleRangeChanged(this, EventArgs.empty);
		}
		this.visibleRange = +(this.visibleMaximum) - +(this.visibleMinimum);
	}
	getOffset1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, seriesIndex: number, categoryMode: number): number {
		return 0;
	}
	getIndexClosestToUnscaledValue(unscaledValue: number): number {
		let sorting: ISortingAxis = this;
		if (sorting.sortedIndices == null) {
			return -1;
		}
		let view = new SortedListView$1<Date>(Date_$type, this.dateTimeColumn, sorting.sortedIndices);
		let ticks_ = unscaledValue;
		let target: Date = <Date>(new Date(ticks_));
		let closestTimeIndex: number = this.getSearchResult(target, view);
		closestTimeIndex = Math.max(0, Math.min(sorting.sortedIndices.count - 1, closestTimeIndex));
		let closestTime: Date = view.item(closestTimeIndex);
		let precedingTimeIndex: number;
		let nextTimeIndex: number;
		if (closestTime < target) {
			precedingTimeIndex = closestTimeIndex;
			nextTimeIndex = precedingTimeIndex + 1;
		} else {
			nextTimeIndex = closestTimeIndex;
			precedingTimeIndex = closestTimeIndex - 1;
		}
		if (precedingTimeIndex < 0) {
			return nextTimeIndex;
		}
		if (nextTimeIndex >= sorting.sortedIndices.count) {
			return precedingTimeIndex;
		}
		let precedingTime: Date = view.item(precedingTimeIndex);
		let nextTime: Date = view.item(nextTimeIndex);
		let xParams: ScalerParams = new ScalerParams(0, this.seriesViewer.windowRect, this.viewportRect, this.isInverted, this.seriesViewer.effectiveViewport);
		this.startCursor();
		let precedingTimeScaled: number = this.getScaledValue(precedingTime.getTime(), xParams);
		let scaledValue: number = this.getScaledValue(unscaledValue, xParams);
		let nextTimeScaled: number = this.getScaledValue(nextTime.getTime(), xParams);
		this.resetCursor();
		if (precedingTime < this.visibleMinimum && nextTime <= this.visibleMaximum) {
			return this.sortedDateTimeIndices._inner[nextTimeIndex];
		}
		if (nextTime > this.visibleMaximum && precedingTime >= this.visibleMinimum) {
			return this.sortedDateTimeIndices._inner[precedingTimeIndex];
		}
		if (Math.abs(precedingTimeScaled - scaledValue) < Math.abs(nextTimeScaled - scaledValue)) {
			return this.sortedDateTimeIndices._inner[precedingTimeIndex];
		} else {
			return this.sortedDateTimeIndices._inner[nextTimeIndex];
		}
	}
	private handleBreaksCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.calculateOmission();
		this.calculateBreakPositions();
		if (this.labelPanel != null) {
			this.labelPanel.areLabelsUnevenlySpaced = this.breaks.count > 0;
		}
		this.renderAxis1(false);
		for (let series of fromEnum<Series>(this.directSeries())) {
			series.renderSeries(false);
		}
	}
	private handleLabelFormatsCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.renderAxis1(false);
	}
	private handleIntervalsCollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.renderAxis1(false);
	}
	protected get_isCategoryDateTime(): boolean {
		return false;
	}
	getWindowRectForSelection(selectionStart: Date, selectionEnd: Date): Rect {
		let fullRange: number = +(this.actualMaximumValue) - +(this.actualMinimumValue);
		let windowLeft: number = timeSpanTotalMilliseconds((+selectionStart - +(this.actualMinimumValue))) / timeSpanTotalMilliseconds(fullRange);
		let windowRight: number = 1 - (timeSpanTotalMilliseconds((+(this.actualMaximumValue) - +selectionEnd)) / timeSpanTotalMilliseconds(fullRange));
		windowRight = Math.min(1, windowRight);
		return new Rect(0, windowLeft, NaN, Math.max(0, windowRight - windowLeft), NaN);
	}
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		if (this.visibleRange != (0)) {
			let rangeInContext: number = timeSpanFromTicks(<number>truncate((timeSpanTicks(this.visibleRange) * (windowRect.width / (this.seriesViewer != null ? this.seriesViewer.actualWindowRect.width : 1)))));
			let intervalsInRange: number = timeSpanTicks(rangeInContext) / <number>timeSpanTicks(this.inferredInterval);
			let maxCategorySize: number = viewportRect.width / 4;
			return Math.min(maxCategorySize, viewportRect.width / (intervalsInRange + 1));
		}
		return super.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
	}
	private _inferredInterval: number = 0;
	private get inferredInterval(): number {
		return this._inferredInterval;
	}
	private set inferredInterval(value: number) {
		this._inferredInterval = value;
	}
	static inferInterval1(timeAt: (arg1: number) => Date, count: number): number {
		let limit: number = Math.min(5, count);
		let previous: Date = timeAt(0);
		let foundIntervals: Dictionary$2<number, number> = new Dictionary$2<number, number>(Number_$type, Number_$type, 0);
		let modeCount: number = 0;
		let mode: number = (0);
		for (let ii: number = 0; ii < limit; ii++) {
			let current: Date = timeAt(ii);
			let difference: number = +current - +previous;
			if (!foundIntervals.containsKey(difference)) {
				foundIntervals.addItem(difference, 0);
			}
			foundIntervals.item(difference, foundIntervals.item(difference) + 1);
			if (foundIntervals.item(difference) > modeCount) {
				modeCount = foundIntervals.item(difference);
				mode = difference;
			}
			previous = current;
		}
		return mode;
	}
	private inferInterval(): number {
		if (this.dateTimeColumn == null || this.dateTimeColumn.count < 2 || this.sortedDateTimeIndices == null) {
			return (0);
		}
		return TimeXAxis.inferInterval1((ii: number) => this.dateTimeColumn.item(this.sortedDateTimeIndices._inner[ii]), this.dateTimeColumn.count);
	}
	protected populateSortedIndices(): void {
		super.populateSortedIndices();
		this.inferredInterval = this.inferInterval();
	}
	static itemLabelFormatFor(interval: number): string {
		if (interval >= timeSpanFromDays(1)) {
			return "D";
		}
		return "g";
	}
	itemLabelFormat(): string {
		return TimeXAxis.itemLabelFormatFor(this.inferredInterval);
	}
	visibleRangeChanged: (sender: any, e: EventArgs) => void = null;
	protected firstVisibleIndex1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		return this.firstVisibleIndex(this.visibleMinimum);
	}
	protected lastVisibleIndex1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): number {
		return this.lastVisibleIndex(this.visibleMaximum);
	}
}


