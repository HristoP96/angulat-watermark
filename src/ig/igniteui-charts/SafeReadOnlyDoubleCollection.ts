/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Number_$type, typeCast, Type, markType } from "igniteui-core/type";
import { ReadOnlyCollection$1 } from "igniteui-core/ReadOnlyCollection$1";
import { SafeEnumerable } from "./SafeEnumerable";
import { isInfinity, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class SafeReadOnlyDoubleCollection extends Base implements IList$1<number> {
	static $t: Type = markType(SafeReadOnlyDoubleCollection, 'SafeReadOnlyDoubleCollection', (<any>Base).$type, [IList$1_$type.specialize(Number_$type)]);
	private _target: ReadOnlyCollection$1<number> = null;
	private _safeValue: number = 0;
	makeSafe(value: number): number {
		if (isInfinity(value) || isNaN_(value)) {
			return this._safeValue;
		}
		return value;
	}
	constructor(initNumber: number, target: IList$1<number>);
	constructor(initNumber: number, target: IList$1<number>, safeValue: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let target: IList$1<number> = <IList$1<number>>_rest[0];
				this._target = new ReadOnlyCollection$1<number>(Number_$type, 1, target);
			}
			break;

			case 1:
			{
				let target: IList$1<number> = <IList$1<number>>_rest[0];
				let safeValue: number = <number>_rest[1];
				this._target = new ReadOnlyCollection$1<number>(Number_$type, 1, target);
				this._safeValue = safeValue;
			}
			break;

		}

	}
	indexOf(item: number): number {
		return this._target.indexOf(item);
	}
	insert(index: number, item: number): void {
		(<IList$1<number>>this._target).insert(index, item);
	}
	removeAt(index: number): void {
		(<IList$1<number>>this._target).removeAt(index);
	}
	item(index: number, value?: number): number {
		if (arguments.length === 2) {
			(typeCast<IList$1<number>>(IList$1_$type.specialize(Number_$type), this._target)).item(index, value);
			return value;
		} else {
			return this.makeSafe(this._target.item(index));
		}
	}
	add(item: number): void {
		(<IList$1<number>>this._target).add(item);
	}
	clear(): void {
		(<IList$1<number>>this._target).clear();
	}
	contains(item: number): boolean {
		return this._target.contains(item);
	}
	copyTo(array: number[], arrayIndex: number): void {
		for (let i: number = arrayIndex; i < array.length; i++) {
			array[i] = this.item(i);
		}
	}
	get count(): number {
		return this._target.count;
	}
	get isReadOnly(): boolean {
		return (<IList$1<number>>this._target).isReadOnly;
	}
	remove(item: number): boolean {
		return (<IList$1<number>>this._target).remove(item);
	}
	getEnumerator(): IEnumerator$1<number> {
		return new SafeEnumerable(this._target).getEnumerator();
	}
	getEnumeratorObject(): IEnumerator {
		return this.getEnumerator();
	}
}


