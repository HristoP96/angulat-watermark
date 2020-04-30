/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AxisRangeChangedEventArgsDescription extends Description {
	static $t: Type = markType(AxisRangeChangedEventArgsDescription, 'AxisRangeChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "AxisRangeChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _oldMinimumValue: number = 0;
	get oldMinimumValue(): number {
		return this._oldMinimumValue;
	}
	set oldMinimumValue(value: number) {
		this._oldMinimumValue = value;
		this.markDirty("OldMinimumValue");
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _oldMaximumValue: number = 0;
	get oldMaximumValue(): number {
		return this._oldMaximumValue;
	}
	set oldMaximumValue(value: number) {
		this._oldMaximumValue = value;
		this.markDirty("OldMaximumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
}


