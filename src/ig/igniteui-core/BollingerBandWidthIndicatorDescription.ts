/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class BollingerBandWidthIndicatorDescription extends StrategyBasedIndicatorDescription {
	static $t: Type = markType(BollingerBandWidthIndicatorDescription, 'BollingerBandWidthIndicatorDescription', (<any>StrategyBasedIndicatorDescription).$type);
	protected get_type(): string {
		return "BollingerBandWidthIndicator";
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
	private _multiplier: number = 0;
	get multiplier(): number {
		return this._multiplier;
	}
	set multiplier(value: number) {
		this._multiplier = value;
		this.markDirty("Multiplier");
	}
}


