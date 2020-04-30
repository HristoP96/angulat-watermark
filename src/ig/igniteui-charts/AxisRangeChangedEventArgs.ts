/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AxisRangeChangedEventArgs extends EventArgs {
	static $t: Type = markType(AxisRangeChangedEventArgs, 'AxisRangeChangedEventArgs', (<any>EventArgs).$type);
	constructor(initNumber: number, oldMinimumValue: number, minimumValue: number, oldMaximumValue: number, maximumValue: number);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let oldMinimumValue: number = <number>_rest[0];
				let minimumValue: number = <number>_rest[1];
				let oldMaximumValue: number = <number>_rest[2];
				let maximumValue: number = <number>_rest[3];
				super();
				this._oldMinimumValue = 0;
				this._minimumValue = 0;
				this._oldMaximumValue = 0;
				this._maximumValue = 0;
				this.oldMinimumValue = oldMinimumValue;
				this.minimumValue = minimumValue;
				this.oldMaximumValue = oldMaximumValue;
				this.maximumValue = maximumValue;
			}
			break;

			case 1:
			{
				super();
				this._oldMinimumValue = 0;
				this._minimumValue = 0;
				this._oldMaximumValue = 0;
				this._maximumValue = 0;
			}
			break;

		}

	}
	private _oldMinimumValue: number;
	get oldMinimumValue(): number {
		return this._oldMinimumValue;
	}
	set oldMinimumValue(value: number) {
		this._oldMinimumValue = value;
	}
	private _minimumValue: number;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
	}
	private _oldMaximumValue: number;
	get oldMaximumValue(): number {
		return this._oldMaximumValue;
	}
	set oldMaximumValue(value: number) {
		this._oldMaximumValue = value;
	}
	private _maximumValue: number;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
	}
}


