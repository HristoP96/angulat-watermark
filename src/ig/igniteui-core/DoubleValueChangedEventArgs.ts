/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DoubleValueChangedEventArgs extends EventArgs {
	static $t: Type = markType(DoubleValueChangedEventArgs, 'DoubleValueChangedEventArgs', (<any>EventArgs).$type);
	constructor(oldValue: number, newValue: number) {
		super();
		this.oldValue = oldValue;
		this.newValue = newValue;
	}
	private _oldValue: number = 0;
	get oldValue(): number {
		return this._oldValue;
	}
	set oldValue(value: number) {
		this._oldValue = value;
	}
	private _newValue: number = 0;
	get newValue(): number {
		return this._newValue;
	}
	set newValue(value: number) {
		this._newValue = value;
	}
}


