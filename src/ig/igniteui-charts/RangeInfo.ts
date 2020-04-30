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
export class RangeInfo extends Base {
	static $t: Type = markType(RangeInfo, 'RangeInfo');
	constructor() {
		super();
		this.intervalOverride = -1;
		this.minorCountOverride = -1;
	}
	private _visibleMinimum: number = 0;
	get visibleMinimum(): number {
		return this._visibleMinimum;
	}
	set visibleMinimum(value: number) {
		this._visibleMinimum = value;
	}
	private _visibleMaximum: number = 0;
	get visibleMaximum(): number {
		return this._visibleMaximum;
	}
	set visibleMaximum(value: number) {
		this._visibleMaximum = value;
	}
	private _intervalOverride: number = 0;
	get intervalOverride(): number {
		return this._intervalOverride;
	}
	set intervalOverride(value: number) {
		this._intervalOverride = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _minorCountOverride: number = 0;
	get minorCountOverride(): number {
		return this._minorCountOverride;
	}
	set minorCountOverride(value: number) {
		this._minorCountOverride = value;
	}
}


