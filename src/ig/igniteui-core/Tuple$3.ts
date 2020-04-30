/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, typeCast, getBoxIfEnum, markType } from "./type";

/**
 * @hidden 
 */
export class Tuple$3<T1, T2, T3> extends Base {
	static $t: Type = markType(Tuple$3, 'Tuple$3');
	protected $t1: Type = null;
	protected $t2: Type = null;
	protected $t3: Type = null;
	private _item1: T1 = null;
	get item1(): T1 {
		return this._item1;
	}
	set item1(value: T1) {
		this._item1 = value;
	}
	private _item2: T2 = null;
	get item2(): T2 {
		return this._item2;
	}
	set item2(value: T2) {
		this._item2 = value;
	}
	private _item3: T3 = null;
	get item3(): T3 {
		return this._item3;
	}
	set item3(value: T3) {
		this._item3 = value;
	}
	constructor($t1: Type, $t2: Type, $t3: Type, item1: T1, item2: T2, item3: T3) {
		super();
		this.$t1 = $t1;
		this.$t2 = $t2;
		this.$t3 = $t3;
		this.$type = this.$type.specialize(this.$t1, this.$t2, this.$t3);
		this.item1 = item1;
		this.item2 = item2;
		this.item3 = item3;
	}
	equals(other: any): boolean {
		let tOther = typeCast<Tuple$3<T1, T2, T3>>((<any>Tuple$3).$type.specialize(this.$t1, this.$t2, this.$t3), other);
		return tOther != null && Base.equalsStatic(getBoxIfEnum<T1>(this.$t1, this.item1), getBoxIfEnum<T1>(this.$t1, tOther.item1)) && Base.equalsStatic(getBoxIfEnum<T2>(this.$t2, this.item2), getBoxIfEnum<T2>(this.$t2, tOther.item2)) && Base.equalsStatic(getBoxIfEnum<T3>(this.$t3, this.item3), getBoxIfEnum<T3>(this.$t3, tOther.item3));
	}
	getHashCode(): number {
		let hash = 0;
		if (getBoxIfEnum<T1>(this.$t1, this.item1) != null) {
			hash = Base.getHashCodeStatic(this.item1);
		}
		if (getBoxIfEnum<T2>(this.$t2, this.item2) != null) {
			hash = hash ^ Base.getHashCodeStatic(this.item2) << 8;
		}
		if (getBoxIfEnum<T3>(this.$t3, this.item3) != null) {
			hash = hash ^ Base.getHashCodeStatic(this.item3) << 16;
		}
		return hash;
	}
}


