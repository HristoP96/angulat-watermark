/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, typeGetValue, Number_$type, Type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal, IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1, IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
import { IGetItemAtIndex } from "./IGetItemAtIndex";
import { IFastItemsSource } from "./IFastItemsSource";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";

/**
 * @hidden 
 */
export class FastItemIntColumn extends Base implements IFastItemColumnInternal, IFastItemColumn$1<number> {
	static $t: Type = markType(FastItemIntColumn, 'FastItemIntColumn', (<any>Base).$type, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
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
		return this._minimum;
	}
	set minimum(value: number) {
		this._minimum = value;
	}
	private _minimum: number = 0;
	get maximum(): number {
		return this._maximum;
	}
	set maximum(value: number) {
		this._maximum = value;
	}
	private _maximum: number = 0;
	item(index: number, value?: number): number {
		if (arguments.length === 2) {
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
		return this.fastItemsSource != null ? this.insertRange(0, this.fastItemsSource.count) : true;
	}
	insertRange(position: number, count: number): boolean {
		let newValues: number[] = <number[]>new Array(count);
		let source_: any[] = this._fastItemsSource.asArray();
		let item_: any;
		let minimum: number = this.minimum;
		let maximum: number = this.maximum;
		let newCount: number = 0;
		let coerce = this._coerceValue;
		let propertyName_ = this._propertyName;
		let sourceItem_: any;
		if (this._needsHelper) {
			for (let i_: number = position; i_ < position + count; ++i_) {
				sourceItem_ = source_[i_];
				item_ = typeGetValue(this._helper.getPropertyValue(sourceItem_));
				if (this._expectFunctions) {
					if (<boolean>(typeof(item_) == 'function')) {
						item_ = item_.apply(sourceItem_);
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				let newValue: number = item_ == null ? 0 : typeGetValue(item_);
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			if (this._coerceValue != null || this._expectFunctions) {
				for (let i_: number = position; i_ < position + count; ++i_) {
					sourceItem_ = source_[i_];
					item_ = <number>(source_[i_][propertyName_]);
					if (this._expectFunctions) {
						if (<boolean>(typeof(item_) == 'function')) {
							item_ = item_.apply(sourceItem_);
						}
					}
					if (coerce != null) {
						item_ = coerce(item_);
					}
					let newValue1: number = item_ == null ? 0 : typeGetValue(item_);
					newValues[newCount] = newValue1;
					newCount++;
				}
			} else {
				for (let i_: number = position; i_ < position + count; ++i_) {
					item_ = <number>(source_[i_][propertyName_]);
					let newValue2: number = item_ == null ? 0 : typeGetValue(item_);
					newValues[newCount] = newValue2;
					newCount++;
				}
			}
		}
		if (this.values == null) {
			this.values = new List$1<number>(Number_$type, 1, <IEnumerable$1<number>><any>newValues);
		} else {
			this.values.insertRange1(position, <IEnumerable><any><any>newValues);
		}
		return true;
	}
	replaceRange(position: number, count: number): boolean {
		let ret: boolean = false;
		for (let i: number = 0; i < count; ++i) {
			let oldValue: number = this.values._inner[position + i];
			let newValue: number = this.toInt(this.fastItemsSource.item(position + i));
			if (oldValue != newValue) {
				this.values._inner[position + i] = newValue;
				ret = true;
			}
		}
		return ret;
	}
	removeRange(position: number, count: number): boolean {
		this.values.removeRange(position, count);
		return true;
	}
	private toInt(item: any): number {
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
			return 0;
		}
		return typeGetValue(item);
	}
	private _values: List$1<number> = null;
	private get values(): List$1<number> {
		return this._values;
	}
	private set values(value: List$1<number>) {
		this._values = value;
	}
	get mayContainUnknowns(): boolean {
		return true;
	}
	getSortedIndices(): List$1<number> {
		return FastItemColumn.getSortedIndices1(this.values, (o1: any, o2: any) => {
			let d1: number = typeGetValue(o1);
			let d2: number = typeGetValue(o2);
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
	static register(): void {
		TypeRegistrar.register("FastItemIntColumn", (<any>FastItemIntColumn).$type);
	}
}


