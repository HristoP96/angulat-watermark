/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList, IList_$type, ICollection, ICollection_$type, fromEnum, Number_$type, typeGetValue, Type, markType } from "./type";
import { IFastItemColumnInternal, IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1, IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
import { IGetItemAtIndex } from "./IGetItemAtIndex";
import { IFastItemsSource } from "./IFastItemsSource";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class FastItemColumn extends Base implements IFastItemColumnInternal, IFastItemColumn$1<number> {
	static $t: Type = markType(FastItemColumn, 'FastItemColumn', (<any>Base).$type, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
	private _coerceValue: (arg1: any) => any = null;
	private _expectFunctions: boolean = false;
	private _needsHelper: boolean = false;
	private _helper: FastReflectionHelper = null;
	constructor(fastItemsSource: IFastItemsSource, propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean) {
		super();
		this._coerceValue = coerceValue;
		this._expectFunctions = expectFunctions;
		this.propertyName = propertyName;
		this._needsHelper = FastReflectionHelper.needsHelper(propertyName);
		if (this._needsHelper) {
			this._helper = new FastReflectionHelper(true, this.propertyName);
		}
		this.fastItemsSource = fastItemsSource;
	}
	get fastItemsSource(): IFastItemsSource {
		return this._fastItemsSource;
	}
	set fastItemsSource(value: IFastItemsSource) {
		this._fastItemsSource = value;
		this.reset();
	}
	private _fastItemsSource: IFastItemsSource = null;
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	get minimum(): number {
		if (isNaN_(this._minimum) && this.values != null) {
			this._minimum = Number.POSITIVE_INFINITY;
			for (let value of fromEnum<number>(this.values)) {
				if (!isNaN_(value)) {
					this._minimum = Math.min(this._minimum, value);
				}
			}
		}
		return this._minimum;
	}
	set minimum(value: number) {
		this._minimum = value;
	}
	private _minimum: number = 0;
	get maximum(): number {
		if (isNaN_(this._maximum) && this.values != null) {
			this._maximum = Number.NEGATIVE_INFINITY;
			for (let value of fromEnum<number>(this.values)) {
				if (!isNaN_(value)) {
					this._maximum = Math.max(this._maximum, value);
				}
			}
		}
		return this._maximum;
	}
	set maximum(value: number) {
		this._maximum = value;
	}
	private _maximum: number = 0;
	item(index: number, value?: number): number {
		if (arguments.length === 2) {
			this.values._inner[index] = value;
			return value;
		} else {
			return this.values._inner[index];
		}
	}
	getEnumerator(): IEnumerator$1<number> {
		return this.values.getEnumerator();
	}
	getEnumeratorObject(): IEnumerator {
		return this.values.getEnumerator();
	}
	contains(item: number): boolean {
		return this.values.contains(item);
	}
	copyTo(array: number[], arrayIndex: number): void {
		this.values.copyTo(array, arrayIndex);
	}
	get count(): number {
		return this.values.count;
	}
	get isReadOnly(): boolean {
		return true;
	}
	indexOf(item: number): number {
		return this.values.indexOf(item);
	}
	add(item: number): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		throw new NotImplementedException(0);
	}
	remove(item: number): boolean {
		throw new NotImplementedException(0);
	}
	insert(index: number, item: number): void {
		throw new NotImplementedException(0);
	}
	removeAt(index: number): void {
		throw new NotImplementedException(0);
	}
	reset(): boolean {
		this.values = null;
		this.minimum = NaN;
		this.maximum = NaN;
		this._unknownCount = 0;
		return this.fastItemsSource != null ? this.insertRange(0, this.fastItemsSource.count) : true;
	}
	insertRange(position: number, count: number): boolean {
		let newValues: number[] = <number[]>new Array(count);
		let source_: any[] = this._fastItemsSource.asArray();
		let item_: any;
		let minimum: number = this.minimum;
		let maximum: number = this.maximum;
		let minimumIsNaN: boolean = isNaN_(this.minimum);
		let maximumIsNaN: boolean = isNaN_(this.maximum);
		let newCount: number = 0;
		let newValue: number;
		let coerce = this._coerceValue;
		let sourceItem_: any = null;
		let propertyName_ = this._propertyName;
		if (this._needsHelper) {
			for (let i_: number = position; i_ < position + count; ++i_) {
				sourceItem_ = source_[i_];
				if (sourceItem_ == null) {
					item_ = NaN;
				} else {
					item_ = this._helper.getPropertyValue(sourceItem_);
				}
				if (this._expectFunctions) {
					if (<boolean>(typeof(item_) == 'function')) {
						item_ = item_.apply(sourceItem_);
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				newValue = item_ == null ? NaN : <number>item_;
				let valIsNaN: boolean = (newValue != newValue);
				if (valIsNaN) {
					this._unknownCount++;
				}
				if (minimumIsNaN || newValue < minimum) {
					minimum = newValue;
					minimumIsNaN = valIsNaN;
				}
				if (maximumIsNaN || newValue > maximum) {
					maximum = newValue;
					maximumIsNaN = valIsNaN;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			if (this._coerceValue != null || this._expectFunctions) {
				for (let i_: number = position; i_ < position + count; ++i_) {
					sourceItem_ = source_[i_];
					if (sourceItem_ == null) {
						item_ = NaN;
					} else {
						item_ = <number>(sourceItem_[propertyName_]);
					}
					if (this._expectFunctions) {
						if (<boolean>(typeof(item_) == 'function')) {
							item_ = item_.apply(sourceItem_);
						}
					}
					if (coerce != null) {
						item_ = coerce(item_);
					}
					newValue = item_ == null ? NaN : <number>item_;
					let valIsNaN1: boolean = (newValue != newValue);
					if (valIsNaN1) {
						this._unknownCount++;
					}
					if (minimumIsNaN || newValue < minimum) {
						minimum = newValue;
						minimumIsNaN = valIsNaN1;
					}
					if (maximumIsNaN || newValue > maximum) {
						maximum = newValue;
						maximumIsNaN = valIsNaN1;
					}
					newValues[newCount] = newValue;
					newCount++;
				}
			} else {
				for (let i_: number = position; i_ < position + count; ++i_) {
					sourceItem_ = source_[i_];
					if (sourceItem_ == null) {
						item_ = NaN;
					} else {
						item_ = <number>(sourceItem_[propertyName_]);
					}
					newValue = item_ == null ? NaN : <number>item_;
					let valIsNaN2: boolean = (newValue != newValue);
					if (valIsNaN2) {
						this._unknownCount++;
					}
					if (minimumIsNaN || newValue < minimum) {
						minimum = newValue;
						minimumIsNaN = valIsNaN2;
					}
					if (maximumIsNaN || newValue > maximum) {
						maximum = newValue;
						maximumIsNaN = valIsNaN2;
					}
					newValues[newCount] = newValue;
					newCount++;
				}
			}
		}
		this.minimum = minimum;
		this.maximum = maximum;
		if (this.values == null) {
			this.values = new List$1<number>(Number_$type, 1, <IEnumerable$1<number>><any>newValues);
		} else {
			this.values.insertRange1(position, <IEnumerable><any><any>newValues);
		}
		return true;
	}
	removeRange(position: number, count: number): boolean {
		for (let i: number = position; i < position + count && !isNaN_(this.minimum) && !isNaN_(this.maximum); ++i) {
			if (this.item(i) == this.minimum) {
				this.minimum = NaN;
			}
			if (this.item(i) == this.maximum) {
				this.maximum = NaN;
			}
			if (isNaN_(this.item(i))) {
				this._unknownCount--;
			}
		}
		this.values.removeRange(position, count);
		return true;
	}
	replaceMinMax(oldValue: number, newValue: number): void {
		if (isNaN_(oldValue)) {
			if (!isNaN_(newValue)) {
				if (!isNaN_(this.minimum)) {
					this.minimum = Math.min(newValue, this.minimum);
				}
				if (!isNaN_(this.maximum)) {
					this.maximum = Math.max(newValue, this.maximum);
				}
			}
			return;
		}
		if (isNaN_(newValue)) {
			this.minimum = !isNaN_(this.minimum) && oldValue == this.minimum ? NaN : this.minimum;
			this.maximum = !isNaN_(this.maximum) && oldValue == this.maximum ? NaN : this.maximum;
			return;
		}
		if (!isNaN_(this.minimum)) {
			if (oldValue == this.minimum && newValue > this.minimum) {
				this.minimum = NaN;
			} else {
				this.minimum = Math.min(newValue, this.minimum);
			}
		}
		if (!isNaN_(this.maximum)) {
			if (oldValue == this.maximum && newValue < this.maximum) {
				this.maximum = NaN;
			} else {
				this.maximum = Math.max(newValue, this.maximum);
			}
		}
	}
	replaceRange(position: number, count: number): boolean {
		let ret: boolean = false;
		for (let i: number = 0; i < count; ++i) {
			let oldValue: number = this.values._inner[position + i];
			let newValue: number = this.toDouble(this.fastItemsSource.item(position + i));
			if (isNaN_(oldValue)) {
				this._unknownCount--;
			}
			if (isNaN_(newValue)) {
				this._unknownCount++;
			}
			if (oldValue != newValue) {
				this.values._inner[position + i] = newValue;
				ret = true;
				this.replaceMinMax(oldValue, newValue);
			}
		}
		return ret;
	}
	private toDouble(item: any): number {
		if (item == null) {
			return NaN;
		}
		let sourceItem_ = item;
		let from_ = item;
		let propertyName_ = this._propertyName;
		if (this._needsHelper) {
			item = this._helper.getPropertyValue(from_);
		} else {
			item = from_[propertyName_];
		}
		if (this._expectFunctions) {
			from_ = item;
			if (<boolean>(typeof(from_) == 'function')) {
				item = from_.apply(sourceItem_);
			}
		}
		if (this._coerceValue != null) {
			item = this._coerceValue(item);
		}
		if (item == null) {
			return NaN;
		}
		return <number>item;
	}
	private _values: List$1<number> = null;
	get values(): List$1<number> {
		return this._values;
	}
	set values(value: List$1<number>) {
		this._values = value;
	}
	private _unknownCount: number = 0;
	get mayContainUnknowns(): boolean {
		return this._unknownCount > 0;
	}
	private static quickSort(list: IList, comparison: (arg1: any, arg2: any) => number): void {
		FastItemColumn.quickSort1(list, 0, list.count - 1, comparison);
	}
	private static quickSort1(list: IList, low: number, high: number, comparison: (arg1: any, arg2: any) => number): void {
		if (low < high) {
			let pp: number = FastItemColumn.partition(list, low, high, comparison);
			FastItemColumn.quickSort1(list, low, pp - 1, comparison);
			FastItemColumn.quickSort1(list, pp + 1, high, comparison);
		}
	}
	private static partition(list: IList, low: number, high: number, comparison: (arg1: any, arg2: any) => number): number {
		let pivot: any = list.item(high);
		let ii: number = low;
		for (let jj: number = low; jj < high; jj++) {
			if (comparison(list.item(jj), pivot) <= 0) {
				let swapA: any = list.item(ii);
				list.item(ii, list.item(jj));
				list.item(jj, swapA);
				ii++;
			}
		}
		let swapB: any = list.item(ii);
		list.item(ii, list.item(high));
		list.item(high, swapB);
		return ii;
	}
	static getSortedIndices1(values: IList, comparison: (arg1: any, arg2: any) => number): List$1<number> {
		let result: List$1<number> = new List$1<number>(Number_$type, 2, values.count);
		for (let i: number = 0; i < values.count; i++) {
			result.add(i);
		}
		if (values.count < 22) {
			FastItemColumn.quickSort(result, (i1: any, i2: any) => {
				let v1 = values.item(typeGetValue(i1));
				let v2 = values.item(typeGetValue(i2));
				return comparison(v1, v2);
			});
		} else {
			result.sort2((i1: number, i2: number) => {
				let v1 = values.item(i1);
				let v2 = values.item(i2);
				return comparison(v1, v2);
			});
		}
		return result;
	}
	getSortedIndices(): List$1<number> {
		return FastItemColumn.getSortedIndices1(this.values, (o1: any, o2: any) => {
			let d1: number = <number>o1;
			let d2: number = <number>o2;
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	asArray(): number[] {
		return <number[]><any>this.values.asArray();
	}
	getItem(index: number): any {
		return this.item(index);
	}
}


