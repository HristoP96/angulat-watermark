/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TimeAxisBreak extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TimeAxisBreak, 'TimeAxisBreak', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private static readonly startPropertyName: string = "Start";
	private _start: Date = new Date();
	get start(): Date {
		return this._start;
	}
	set start(value: Date) {
		let oldValue: Date = this.start;
		if (+value != +oldValue) {
			this._start = value;
			this.onPropertyUpdated(TimeAxisBreak.startPropertyName, oldValue, this.start);
		}
	}
	private static readonly endPropertyName: string = "End";
	private _end: Date = new Date();
	get end(): Date {
		return this._end;
	}
	set end(value: Date) {
		let oldValue: Date = this.end;
		if (+value != +oldValue) {
			this._end = value;
			this.onPropertyUpdated(TimeAxisBreak.endPropertyName, oldValue, this.end);
		}
	}
	private static readonly intervalPropertyName: string = "Interval";
	private _interval: number = (0);
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		let oldValue: number = this.interval;
		if (value != oldValue) {
			this._interval = value;
			this.onPropertyUpdated(TimeAxisBreak.intervalPropertyName, oldValue, this.interval);
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


