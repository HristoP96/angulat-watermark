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
export class FullStochasticOscillatorIndicatorDescription extends StrategyBasedIndicatorDescription {
	static $t: Type = markType(FullStochasticOscillatorIndicatorDescription, 'FullStochasticOscillatorIndicatorDescription', (<any>StrategyBasedIndicatorDescription).$type);
	protected get_type(): string {
		return "FullStochasticOscillatorIndicator";
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
	private _smoothingPeriod: number = 0;
	get smoothingPeriod(): number {
		return this._smoothingPeriod;
	}
	set smoothingPeriod(value: number) {
		this._smoothingPeriod = value;
		this.markDirty("SmoothingPeriod");
	}
	private _triggerPeriod: number = 0;
	get triggerPeriod(): number {
		return this._triggerPeriod;
	}
	set triggerPeriod(value: number) {
		this._triggerPeriod = value;
		this.markDirty("TriggerPeriod");
	}
}


