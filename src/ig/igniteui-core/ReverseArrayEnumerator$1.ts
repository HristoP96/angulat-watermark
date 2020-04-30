/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, typeCastObjTo$t, markType } from "./type";
import { ArrayBox$1 } from "./array";
import { NotImplementedException } from "./NotImplementedException";

/**
 * @hidden 
 */
export class ReverseArrayEnumerator$1<T> extends Base implements IEnumerator$1<T> {
	static $t: Type = markType(ReverseArrayEnumerator$1, 'ReverseArrayEnumerator$1', (<any>Base).$type, [IEnumerator$1_$type.specialize(0)]);
	protected $t: Type = null;
	private _index: number = 0;
	private _array: ArrayBox$1<any> = null;
	constructor($t: Type, array: ArrayBox$1<any>) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this._array = array;
		this._index = array.count;
	}
	get current(): T {
		return typeCastObjTo$t<T>(this.$t, this._array.item(this._index));
	}
	get currentObject(): any {
		return this._array.item(this._index);
	}
	moveNext(): boolean {
		this._index--;
		return this._index >= 0;
	}
	reset(): void {
		this._index = this._array.count;
	}
	dispose(): void {
		throw new NotImplementedException(0);
	}
}


