/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class NumericAngleAxisDescription extends NumericAxisBaseDescription {
	static $t: Type = markType(NumericAngleAxisDescription, 'NumericAngleAxisDescription', (<any>NumericAxisBaseDescription).$type);
	protected get_type(): string {
		return "NumericAngleAxis";
	}
	constructor() {
		super();
	}
	private _startAngleOffset: number = 0;
	get startAngleOffset(): number {
		return this._startAngleOffset;
	}
	set startAngleOffset(value: number) {
		this._startAngleOffset = value;
		this.markDirty("StartAngleOffset");
	}
}


