/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class TimeAxisBaseDescription extends CategoryAxisBaseDescription {
	static $t: Type = markType(TimeAxisBaseDescription, 'TimeAxisBaseDescription', (<any>CategoryAxisBaseDescription).$type);
	protected get_type(): string {
		return "TimeAxisBase";
	}
	constructor() {
		super();
	}
	private _dateTimeMemberPath: string = null;
	get dateTimeMemberPath(): string {
		return this._dateTimeMemberPath;
	}
	set dateTimeMemberPath(value: string) {
		this._dateTimeMemberPath = value;
		this.markDirty("DateTimeMemberPath");
	}
	private _isDataPreSorted: boolean = false;
	get isDataPreSorted(): boolean {
		return this._isDataPreSorted;
	}
	set isDataPreSorted(value: boolean) {
		this._isDataPreSorted = value;
		this.markDirty("IsDataPreSorted");
	}
	private _actualMinimumValue: Date = new Date();
	get actualMinimumValue(): Date {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: Date) {
		this._actualMinimumValue = value;
		this.markDirty("ActualMinimumValue");
	}
	private _actualMaximumValue: Date = new Date();
	get actualMaximumValue(): Date {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: Date) {
		this._actualMaximumValue = value;
		this.markDirty("ActualMaximumValue");
	}
	private _minimumValue: Date = new Date();
	get minimumValue(): Date {
		return this._minimumValue;
	}
	set minimumValue(value: Date) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: Date = new Date();
	get maximumValue(): Date {
		return this._maximumValue;
	}
	set maximumValue(value: Date) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
}


