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
export class Pair$2<T1, T2> extends Base {
	static $t: Type = markType(Pair$2, 'Pair$2');
	protected $t1: Type = null;
	protected $t2: Type = null;
	constructor($t1: Type, $t2: Type, first: T1, second: T2) {
		super();
		this.$t1 = $t1;
		this.$t2 = $t2;
		this.$type = this.$type.specialize(this.$t1, this.$t2);
		this.first = first;
		this.second = second;
	}
	private _first: T1 = null;
	get first(): T1 {
		return this._first;
	}
	set first(value: T1) {
		this._first = value;
	}
	private _second: T2 = null;
	get second(): T2 {
		return this._second;
	}
	set second(value: T2) {
		this._second = value;
	}
}


