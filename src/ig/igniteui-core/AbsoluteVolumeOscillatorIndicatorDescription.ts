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
export class AbsoluteVolumeOscillatorIndicatorDescription extends StrategyBasedIndicatorDescription {
	static $t: Type = markType(AbsoluteVolumeOscillatorIndicatorDescription, 'AbsoluteVolumeOscillatorIndicatorDescription', (<any>StrategyBasedIndicatorDescription).$type);
	protected get_type(): string {
		return "AbsoluteVolumeOscillatorIndicator";
	}
	constructor() {
		super();
	}
	private _shortPeriod: number = 0;
	get shortPeriod(): number {
		return this._shortPeriod;
	}
	set shortPeriod(value: number) {
		this._shortPeriod = value;
		this.markDirty("ShortPeriod");
	}
	private _longPeriod: number = 0;
	get longPeriod(): number {
		return this._longPeriod;
	}
	set longPeriod(value: number) {
		this._longPeriod = value;
		this.markDirty("LongPeriod");
	}
}


