/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { truncate, log10 } from "igniteui-core/number";

/**
 * @hidden 
 */
export class Snapper extends Base {
	static $t: Type = markType(Snapper, 'Snapper');
	private _resolution: number = 7;
	protected get resolution(): number {
		return this._resolution;
	}
	protected set resolution(value: number) {
		this._resolution = value;
	}
	private _customResolution: boolean = false;
	protected get customResolution(): boolean {
		return this._customResolution;
	}
	protected set customResolution(value: boolean) {
		this._customResolution = value;
	}
	protected static expt(a: number, n: number): number {
		let x: number = 1;
		if (n > 0) {
			for (; n > 0; --n) {
				x *= a;
			}
		} else {
			for (; n < 0; ++n) {
				x /= a;
			}
		}
		return x;
	}
	protected static nicenum(x: number, round: boolean): number {
		let exp: number = <number>truncate(Math.floor(log10(x)));
		let f: number = x / Math.pow(10, exp);
		if (round) {
			let nf: number = f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10;
			return nf * Math.pow(10, exp);
		} else {
			let nf1: number = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
			return nf1 * Math.pow(10, exp);
		}
	}
}


