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
export abstract class StraightNumericAxisBaseDescription extends NumericAxisBaseDescription {
	static $t: Type = markType(StraightNumericAxisBaseDescription, 'StraightNumericAxisBaseDescription', (<any>NumericAxisBaseDescription).$type);
	protected get_type(): string {
		return "StraightNumericAxisBase";
	}
	constructor() {
		super();
	}
	private _scaleMode: string = null;
	get scaleMode(): string {
		return this._scaleMode;
	}
	set scaleMode(value: string) {
		this._scaleMode = value;
		this.markDirty("ScaleMode");
	}
}


