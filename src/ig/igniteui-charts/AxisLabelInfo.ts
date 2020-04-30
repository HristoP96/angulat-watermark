/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AxisLabelInfo extends Base {
	static $t: Type = markType(AxisLabelInfo, 'AxisLabelInfo');
	private _labelString: string = null;
	get labelString(): string {
		return this._labelString;
	}
	set labelString(value: string) {
		this._labelString = value;
	}
	private _labelPosition: number = 0;
	get labelPosition(): number {
		return this._labelPosition;
	}
	set labelPosition(value: number) {
		this._labelPosition = value;
	}
}


