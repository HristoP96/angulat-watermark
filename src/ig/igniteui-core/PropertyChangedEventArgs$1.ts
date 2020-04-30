/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PropertyChangedEventArgs, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PropertyChangedEventArgs$1<T> extends PropertyChangedEventArgs {
	static $t: Type = markType(PropertyChangedEventArgs$1, 'PropertyChangedEventArgs$1', (<any>PropertyChangedEventArgs).$type);
	protected $t: Type = null;
	constructor($t: Type, propertyName: string, oldValue: T, newValue: T) {
		super(propertyName);
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this.oldValue = oldValue;
		this.newValue = newValue;
	}
	private _oldValue: T = null;
	get oldValue(): T {
		return this._oldValue;
	}
	set oldValue(value: T) {
		this._oldValue = value;
	}
	private _newValue: T = null;
	get newValue(): T {
		return this._newValue;
	}
	set newValue(value: T) {
		this._newValue = value;
	}
}


