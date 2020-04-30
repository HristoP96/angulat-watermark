/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class HalfEdge extends Base {
	static $t: Type = markType(HalfEdge, 'HalfEdge');
	constructor(b: number, e: number) {
		super();
		this.b = b;
		this.e = e;
	}
	private _b: number = 0;
	get b(): number {
		return this._b;
	}
	set b(value: number) {
		this._b = value;
	}
	private _e: number = 0;
	get e(): number {
		return this._e;
	}
	set e(value: number) {
		this._e = value;
	}
}


