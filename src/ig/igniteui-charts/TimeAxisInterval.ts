/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox, Type, markType } from "igniteui-core/type";
import { TimeAxisIntervalType, TimeAxisIntervalType_$type } from "./TimeAxisIntervalType";
import { Debug } from "igniteui-core/Debug";
import { truncate } from "igniteui-core/number";
import { dateAddSeconds, dateFromValues, dateGetMonth, dateAddMinutes, dateAddHours, dateAddDays, dateMaxValue, dateAddMonths, dateAddYears } from "igniteui-core/date";
import { timeSpanFromTicks, timeSpanFromMilliseconds, timeSpanFromSeconds, timeSpanFromMinutes, timeSpanFromHours, timeSpanFromDays } from "igniteui-core/timespan";

/**
 * @hidden 
 */
export class TimeAxisInterval extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TimeAxisInterval, 'TimeAxisInterval', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private static readonly rangePropertyName: string = "Range";
	private _range: number = (0);
	get range(): number {
		return this._range;
	}
	set range(value: number) {
		let oldValue: number = this.range;
		if (value != oldValue) {
			this._range = value;
			this.onPropertyUpdated(TimeAxisInterval.rangePropertyName, oldValue, this.range);
		}
	}
	private static readonly intervalPropertyName: string = "Interval";
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		let oldValue: number = this.interval;
		if (value != oldValue) {
			this._interval = value;
			this.onPropertyUpdated(TimeAxisInterval.intervalPropertyName, oldValue, this.interval);
		}
	}
	private static readonly intervalTypePropertyName: string = "IntervalType";
	private _intervalType: TimeAxisIntervalType = <TimeAxisIntervalType>0;
	get intervalType(): TimeAxisIntervalType {
		return this._intervalType;
	}
	set intervalType(value: TimeAxisIntervalType) {
		let oldValue: TimeAxisIntervalType = this.intervalType;
		if (value != oldValue) {
			this._intervalType = value;
			this.onPropertyUpdated(TimeAxisInterval.intervalPropertyName, enumGetBox<TimeAxisIntervalType>(TimeAxisIntervalType_$type, oldValue), enumGetBox<TimeAxisIntervalType>(TimeAxisIntervalType_$type, this.intervalType));
		}
	}
	nextTime(start: Date): Date {
		let next: Date;
		switch (this.intervalType) {
			case TimeAxisIntervalType.Ticks:
			let ticksPerMillisecond: number = 10000;
			return dateAddSeconds(start, 1 / ticksPerMillisecond);

			case TimeAxisIntervalType.Milliseconds:
			next = dateAddSeconds(start, 1 / 1000);
			return dateFromValues(next.getFullYear(), dateGetMonth(next), next.getDate(), next.getHours(), next.getMinutes(), next.getSeconds(), next.getMilliseconds());

			case TimeAxisIntervalType.Seconds:
			next = dateAddSeconds(start, 1);
			return dateFromValues(next.getFullYear(), dateGetMonth(next), next.getDate(), next.getHours(), next.getMinutes(), next.getSeconds(), 0);

			case TimeAxisIntervalType.Minutes:
			next = dateAddMinutes(start, 1);
			return dateFromValues(next.getFullYear(), dateGetMonth(next), next.getDate(), next.getHours(), next.getMinutes(), 0, 0);

			case TimeAxisIntervalType.Hours:

			case TimeAxisIntervalType.Days:
			next = dateAddHours(start, 1);
			return dateFromValues(next.getFullYear(), dateGetMonth(next), next.getDate(), next.getHours(), 0, 0, 0);

			case TimeAxisIntervalType.Weeks:

			case TimeAxisIntervalType.Months:

			case TimeAxisIntervalType.Years:
			next = dateAddDays(start, 1);
			return dateFromValues(next.getFullYear(), dateGetMonth(next), next.getDate(), 0, 0, 0, 0);

			default:
			Debug.assert1(false, "Unrecognized interval type.");
			return start;

		}

	}
	addTo(start: Date): Date {
		let limit: number = +(dateMaxValue()) - +start;
		switch (this.intervalType) {
			case TimeAxisIntervalType.Ticks:
			let ticksPerMillisecond: number = 10000;
			if (limit > timeSpanFromTicks(<number>truncate(this.interval))) {
				return dateAddSeconds(start, this.interval / ticksPerMillisecond);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Milliseconds:
			if (limit > timeSpanFromMilliseconds(this.interval)) {
				return dateAddSeconds(start, this.interval / 1000);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Seconds:
			if (limit > timeSpanFromSeconds(this.interval)) {
				return dateAddSeconds(start, this.interval);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Minutes:
			if (limit > timeSpanFromMinutes(this.interval)) {
				return dateAddMinutes(start, this.interval);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Hours:
			if (limit > timeSpanFromHours(this.interval)) {
				return dateAddHours(start, this.interval);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Days:
			if (limit > timeSpanFromDays(this.interval)) {
				return dateAddDays(start, this.interval);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Weeks:
			if (limit > timeSpanFromDays(7 * this.interval)) {
				return dateAddDays(start, this.interval * 7);
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Months:
			if (limit > timeSpanFromDays(31 * <number>truncate(this.interval))) {
				return dateAddMonths(start, <number>truncate(this.interval));
			}
			return dateMaxValue();

			case TimeAxisIntervalType.Years:
			if (limit > timeSpanFromDays(365 * <number>truncate(this.interval))) {
				return dateAddYears(start, <number>truncate(this.interval));
			}
			return dateMaxValue();

			default:
			Debug.assert1(false, "Unrecognized interval type.");
			return start;

		}

	}
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdateOverride(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected propertyUpdateOverride(propertyName: string, oldValue: any, newValue: any): void {
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


