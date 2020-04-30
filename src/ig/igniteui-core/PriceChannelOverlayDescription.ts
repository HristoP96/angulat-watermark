/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialOverlayDescription } from "./FinancialOverlayDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PriceChannelOverlayDescription extends FinancialOverlayDescription {
	static $t: Type = markType(PriceChannelOverlayDescription, 'PriceChannelOverlayDescription', (<any>FinancialOverlayDescription).$type);
	protected get_type(): string {
		return "PriceChannelOverlay";
	}
	constructor() {
		super();
	}
	private _period: number = 0;
	get period(): number {
		return this._period;
	}
	set period(value: number) {
		this._period = value;
		this.markDirty("Period");
	}
}


