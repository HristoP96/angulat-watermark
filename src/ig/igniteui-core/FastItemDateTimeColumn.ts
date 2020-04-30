/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Date_$type, Type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal, IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1, IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
import { IGetItemAtIndex } from "./IGetItemAtIndex";
import { IFastItemsSource } from "./IFastItemsSource";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
import { dateMinValue } from "./date";

/**
 * @hidden 
 */
export class FastItemDateTimeColumn extends Base implements IFastItemColumnInternal, IFastItemColumn$1<Date> {
	static $t: Type = markType(FastItemDateTimeColumn, 'FastItemDateTimeColumn', (<any>Base).$type, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Date_$type)]);
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
	private hasMinimum: boolean = false;
	private hasMaximum: boolean = false;
	get minimum(): Date {
		if (!this.hasMinimum && this.values != null) {
			for (let value of fromEnum<Date>(this.values)) {
				if (value < this._minimum) {
					this._minimum = value;
				}
			}
			if (this.values.count > 0) {
				this.hasMinimum = true;
			}
		}
		return this._minimum;
	}
	set minimum(value: Date) {
		this._minimum = value;
	}
	private _minimum: Date = new Date();
	get maximum(): Date {
		if (!this.hasMaximum && this.values != null) {
			for (let value of fromEnum<Date>(this.values)) {
				if (value > this._maximum) {
					this._maximum = value;
				}
			}
			if (this.values.count > 0) {
				this.hasMaximum = true;
			}
		}
		return this._maximum;
	}
	set maximum(value: Date) {
		this._maximum = value;
	}
	private _maximum: Date = new Date();
	item(index: number, value?: Date): Date {
		if (arguments.length === 2) {
			return value;
		} else {
			return this.values._inner[index];
		}
	}
	getEnumerator(): IEnumerator$1<Date> {
		return this.values.getEnumerator();
	}
	getEnumeratorObject(): IEnumerator {
		return this.values.getEnumerator();
	}
	contains(item: Date): boolean {
		return this.values.contains(item);
	}
	copyTo(array: Date[], arrayIndex: number): void {
		this.values.copyTo(array, arrayIndex);
	}
	get count(): number {
		return this.values.count;
	}
	get isReadOnly(): boolean {
		return true;
	}
	indexOf(item: Date): number {
		return this.values.indexOf(item);
	}
	add(item: Date): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		throw new NotImplementedException(0);
	}
	remove(item: Date): boolean {
		throw new NotImplementedException(0);
	}
	insert(index: number, item: Date): void {
		throw new NotImplementedException(0);
	}
	removeAt(index: number): void {
		throw new NotImplementedException(0);
	}
	reset(): boolean {
		this.values = null;
		this.hasMinimum = false;
		this.hasMaximum = false;
		return this.fastItemsSource != null ? this.insertRange(0, this.fastItemsSource.count) : true;
	}
	insertRange(position: number, count: number): boolean {
		let newValues: Date[] = <Date[]>new Array(count);
		let source_: any[] = this._fastItemsSource.asArray();
		let item_: any;
		let minimum: Date = this.minimum;
		let maximum: Date = this.maximum;
		let newValue: Date;
		let newCount: number = 0;
		let coerce = this._coerceValue;
		let propertyName_ = this._propertyName;
		let sourceItem_: any = null;
		if (this._needsHelper) {
			for (let i_: number = position; i_ < position + count; ++i_) {
				sourceItem_ = source_[i_];
				item_ = <Date>this._helper.getPropertyValue(sourceItem_);
				if (this._expectFunctions) {
					if (<boolean>(typeof(item_) == 'function')) {
						item_ = item_.apply(sourceItem_);
					}
				}
				if (coerce != null) {
					item_ = coerce(item_);
				}
				newValue = item_ == null ? <Date>(new Date()) : <Date>item_;
				if (!this.hasMinimum) {
					minimum = newValue;
					this.hasMinimum = true;
				} else if (newValue < minimum) {
					minimum = newValue;
				}
				if (!this.hasMaximum) {
					maximum = newValue;
					this.hasMaximum = true;
				} else if (newValue > maximum) {
					maximum = newValue;
				}
				newValues[newCount] = newValue;
				newCount++;
			}
		} else {
			if (this._coerceValue != null || this._expectFunctions) {
				for (let i_: number = position; i_ < position + count; ++i_) {
					sourceItem_ = source_[i_];
					item_ = <Date>(source_[i_][propertyName_]);
					if (this._expectFunctions) {
						if (<boolean>(typeof(item_) == 'function')) {
							item_ = item_.apply(sourceItem_);
						}
					}
					if (coerce != null) {
						item_ = coerce(item_);
					}
					newValue = item_ == null ? <Date>(new Date()) : <Date>item_;
					if (!this.hasMinimum) {
						minimum = newValue;
						this.hasMinimum = true;
					} else if (newValue < minimum) {
						minimum = newValue;
					}
					if (!this.hasMaximum) {
						maximum = newValue;
						this.hasMaximum = true;
					} else if (newValue > maximum) {
						maximum = newValue;
					}
					newValues[newCount] = newValue;
					newCount++;
				}
			} else {
				for (let i_: number = position; i_ < position + count; ++i_) {
					item_ = <Date>(source_[i_][propertyName_]);
					newValue = item_ == null ? <Date>(new Date()) : <Date>item_;
					if (!this.hasMinimum) {
						minimum = newValue;
						this.hasMinimum = true;
					} else if (newValue < minimum) {
						minimum = newValue;
					}
					if (!this.hasMaximum) {
						maximum = newValue;
						this.hasMaximum = true;
					} else if (newValue > maximum) {
						maximum = newValue;
					}
					newValues[newCount] = newValue;
					newCount++;
				}
			}
		}
		this.minimum = minimum;
		this.maximum = maximum;
		if (this.values == null) {
			this.values = new List$1<Date>(Date_$type, 1, <IEnumerable$1<Date>><any>newValues);
		} else {
			this.values.insertRange1(position, <IEnumerable><any><any>newValues);
		}
		return true;
	}
	removeRange(position: number, count: number): boolean {
		for (let i: number = position; i < position + count; ++i) {
			if (+(this.item(i)) == +(this.minimum)) {
				this.hasMinimum = false;
			}
			if (+(this.item(i)) == +(this.maximum)) {
				this.hasMaximum = false;
			}
		}
		this.values.removeRange(position, count);
		return true;
	}
	replaceMinMax(oldValue: Date, newValue: Date): void {
		if (+oldValue != +(dateMinValue())) {
			if (+newValue != +(dateMinValue())) {
				this.minimum = newValue < this.minimum ? newValue : this.minimum;
				this.maximum = newValue > this.maximum ? newValue : this.maximum;
			}
			return;
		}
		this.minimum = newValue < this.minimum ? newValue : this.minimum;
		this.maximum = newValue > this.maximum ? newValue : this.maximum;
	}
	replaceRange(position: number, count: number): boolean {
		let ret: boolean = false;
		for (let i: number = 0; i < count; ++i) {
			let oldValue: Date = this.values._inner[position + i];
			let newValue: Date = this.toDateTime(this.fastItemsSource.item(position + i));
			if (+oldValue != +newValue) {
				this.values._inner[position + i] = newValue;
				ret = true;
				this.replaceMinMax(oldValue, newValue);
			}
		}
		return ret;
	}
	private toDateTime(item: any): Date {
		if (item == null) {
			return dateMinValue();
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
			return dateMinValue();
		}
		return <Date>item;
	}
	private _values: List$1<Date> = null;
	private get values(): List$1<Date> {
		return this._values;
	}
	private set values(value: List$1<Date>) {
		this._values = value;
	}
	get mayContainUnknowns(): boolean {
		return true;
	}
	getSortedIndices(): List$1<number> {
		return FastItemColumn.getSortedIndices1(this.values, (o1: any, o2: any) => {
			let d1: Date = <Date>o1;
			let d2: Date = <Date>o2;
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	asArray(): Date[] {
		return <Date[]><any>this.values.asArray();
	}
	getItem(index: number): any {
		return this.item(index);
	}
	static register(): void {
		TypeRegistrar.register("FastItemDateTimeColumn", (<any>FastItemDateTimeColumn).$type);
	}
}


