/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Type, markType, getEnumerator } from "./type";
import { GenericEnumerator$1 } from "./GenericEnumerator$1";

/**
 * @hidden 
 */
export class GenericEnumerable$1<T> extends Base implements IEnumerable$1<T> {
	static $t: Type = markType(GenericEnumerable$1, 'GenericEnumerable$1', (<any>Base).$type, [IEnumerable$1_$type.specialize(0)]);
	protected $t: Type = null;
	private _inner: () => IEnumerable$1<T> = null;
	constructor($t: Type, inner: any) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this._inner = <() => IEnumerable$1<T>>inner;
	}
	getEnumerator(): IEnumerator$1<T> {
		return new GenericEnumerator$1<T>(this.$t, getEnumerator(this._inner()));
	}
	getEnumeratorObject(): IEnumerator {
		return new GenericEnumerator$1<T>(this.$t, getEnumerator(this._inner()));
	}
}


