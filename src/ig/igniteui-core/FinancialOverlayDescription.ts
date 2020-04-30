/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class FinancialOverlayDescription extends FinancialSeriesDescription {
	static $t: Type = markType(FinancialOverlayDescription, 'FinancialOverlayDescription', (<any>FinancialSeriesDescription).$type);
	protected get_type(): string {
		return "FinancialOverlay";
	}
	constructor() {
		super();
	}
	private _ignoreFirst: number = 0;
	get ignoreFirst(): number {
		return this._ignoreFirst;
	}
	set ignoreFirst(value: number) {
		this._ignoreFirst = value;
		this.markDirty("IgnoreFirst");
	}
}


