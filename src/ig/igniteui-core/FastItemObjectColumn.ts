/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Type, markType, TypeRegistrar } from "./type";
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
export class FastItemObjectColumn extends Base implements IFastItemColumnInternal, IFastItemColumn$1<any> {
	static $t: Type = markType(FastItemObjectColumn, 'FastItemObjectColumn', (<any>Base).$type, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize((<any>Base).$type)]);
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
	get minimum(): any {
		return this._minimum;
	}
	set minimum(value: any) {
		this._minimum = value;
	}
	private _minimum: any = null;
	get maximum(): any {
		return this._maximum;
	}
	set maximum(value: any) {
		this._maximum = value;
	}
	private _maximum: any = null;
	item(index: number, value?: any): any {
		if (arguments.length === 2) {
			return value;
		} else {
			return this.values._inner[index];
		}
	}
	getEnumerator(): IEnumerator$1<any> {
		return this.values.getEnumerator();
	}
	getEnumeratorObject(): IEnumerator {
		return this.values.getEnumerator();
	}
	contains(item: any): boolean {
		return this.values.contains1(item);
	}
	copyTo(array: any[], arrayIndex: number): void {
		this.values.copyTo(array, arrayIndex);
	}
	get count(): number {
		return this.values.count;
	}
	get isReadOnly(): boolean {
		return true;
	}
	indexOf(item: any): number {
		return this.values.indexOf1(item);
	}
	add(item: any): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		throw new NotImplementedException(0);
	}
	remove(item: any): boolean {
		throw new NotImplementedException(0);
	}
	insert(index: number, item: any): void {
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
		let newValues: List$1<any> = ((() => {
			let $ret = new List$1<any>((<any>Base).$type, 0);
			$ret.capacity = count;
			return $ret;
		})());
		for (let i: number = position; i < position + count; ++i) {
			let newValue: any = this.toObject(this.fastItemsSource.item(i));
			newValues.add1(newValue);
		}
		if (this.values == null) {
			this.values = newValues;
		} else {
			this.values.insertRange1(position, <IEnumerable><any><any>(newValues));
		}
		return true;
	}
	replaceRange(position: number, count: number): boolean {
		let ret: boolean = false;
		for (let i: number = 0; i < count; ++i) {
			let oldValue: any = this.values._inner[position + i];
			let newValue: any = this.toObject(this.fastItemsSource.item(position + i));
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
	private toObject(item: any): any {
		if (item == null) {
			return null;
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
		return item;
	}
	private _values: List$1<any> = null;
	private get values(): List$1<any> {
		return this._values;
	}
	private set values(value: List$1<any>) {
		this._values = value;
	}
	get mayContainUnknowns(): boolean {
		return true;
	}
	getSortedIndices(): List$1<number> {
		return FastItemColumn.getSortedIndices1(this.values, (o1: any, o2: any) => {
			let d1: number = parseFloat(<string>o1);
			let d2: number = parseFloat(<string>o2);
			if (d1 < d2) {
				return -1;
			}
			if (d1 > d2) {
				return 1;
			}
			return 0;
		});
	}
	asArray(): any[] {
		return <any[]><any>this.values.asArray();
	}
	getItem(index: number): any {
		return this.item(index);
	}
	static register(): void {
		TypeRegistrar.register("FastItemObjectColumn", (<any>FastItemObjectColumn).$type);
	}
}


