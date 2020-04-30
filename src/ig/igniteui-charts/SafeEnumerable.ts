/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IDisposable, IDisposable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, NotSupportedException, fromEnum, toEnum, Number_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { Thread } from "igniteui-core/culture";
import { isInfinity, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class SafeEnumerable extends Base implements IEnumerable$1<number> {
	static $t: Type = markType(SafeEnumerable, 'SafeEnumerable', (<any>Base).$type, [IEnumerable$1_$type.specialize(Number_$type)]);
	private _target: IEnumerable$1<number> = null;
	constructor(target: IEnumerable$1<number>) {
		super();
		this._target = target;
	}
	makeSafe1(value: number): number {
		if (isInfinity(value) || isNaN_(value)) {
			return 0;
		}
		return value;
	}
	private *_makeSafe(): IterableIterator<any> {
		if (this._target == null) {
			return undefined;
		}
		for (let value of fromEnum<number>(this._target)) {
			yield this.makeSafe1(value);
		}
	}
	private makeSafe(): IEnumerable$1<number> {
		return toEnum(() => this._makeSafe());
	}
	getEnumerator(): IEnumerator$1<number> {
		return getEnumerator(this.makeSafe());
	}
	getEnumeratorObject(): IEnumerator {
		return this.getEnumerator();
	}
}


