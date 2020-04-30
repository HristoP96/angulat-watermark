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
export class LinkedListNode$1<T> extends Base {
	static $t: Type = markType(LinkedListNode$1, 'LinkedListNode$1');
	protected $t: Type = null;
	private _value: T = null;
	get value(): T {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
	}
	prev: LinkedListNode$1<T> = null;
	next: LinkedListNode$1<T> = null;
	constructor($t: Type, initNumber: number);
	constructor($t: Type, initNumber: number, item: T);
	constructor($t: Type, initNumber: number, ..._rest: any[]);
	constructor($t: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let item: T = <T>_rest[0];
				this.value = item;
			}
			break;

		}

	}
}


