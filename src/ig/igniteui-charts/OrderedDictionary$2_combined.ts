/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { OrderedDictionary } from "./OrderedDictionary";
import { IDictionary$2, IDictionary$2_$type } from "igniteui-core/IDictionary$2";
import { ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IDictionary, IDictionary_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Base, Type, getBoxIfEnum, markType, IDisposable, IDisposable_$type } from "igniteui-core/type";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class OrderedDictionary$2<TKey, TValue> extends OrderedDictionary implements IDictionary$2<TKey, TValue>, IDictionary {
	static $t: Type = markType(OrderedDictionary$2, 'OrderedDictionary$2', (<any>OrderedDictionary).$type, [IDictionary$2_$type.specialize(0, 1), IDictionary_$type]);
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	private _dictionary: Dictionary$2<TKey, TValue> = null;
	private get dictionary(): Dictionary$2<TKey, TValue> {
		return this._dictionary;
	}
	private set dictionary(value: Dictionary$2<TKey, TValue>) {
		this._dictionary = value;
	}
	private _orderedKeys: List$1<TKey> = null;
	private get orderedKeys(): List$1<TKey> {
		return this._orderedKeys;
	}
	private set orderedKeys(value: List$1<TKey>) {
		this._orderedKeys = value;
	}
	constructor($tKey: Type, $tValue: Type) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		this.dictionary = new Dictionary$2<TKey, TValue>(this.$tKey, this.$tValue, 0);
		this.orderedKeys = new List$1<TKey>(this.$tKey, 0);
	}
	item1(index: number): TKey {
		return this.orderedKeys._inner[index];
	}
	item(key: TKey, value?: TValue): TValue {
		if (arguments.length === 2) {
			let index: number = this.orderedKeys.indexOf(key);
			this.orderedKeys._inner[index] = key;
			this.dictionary.item(key, value);
			return value;
		} else {
			return this.dictionary.item(key);
		}
	}
	protected get_length(): number {
		return this.count;
	}
	get length(): number {
		return this.get_length();
	}
	get count(): number {
		return this.dictionary.count;
	}
	get isReadOnly(): boolean {
		return false;
	}
	get keys(): ICollection$1<TKey> {
		return this.orderedKeys;
	}
	get values(): ICollection$1<TValue> {
		return this.dictionary.values;
	}
	add(item: KeyValuePair$2<TKey, TValue>): void {
		this.addItem(item.key, item.value);
	}
	addItem(key: TKey, value: TValue): void {
		this.dictionary.addItem(key, value);
		this.orderedKeys.add(key);
	}
	clear(): void {
		this.dictionary.clear();
		this.orderedKeys.clear();
	}
	contains(item: KeyValuePair$2<TKey, TValue>): boolean {
		return (<IDictionary$2<TKey, TValue>>this.dictionary).contains(item);
	}
	containsKey(key: TKey): boolean {
		return this.dictionary.containsKey(key);
	}
	copyTo(array: KeyValuePair$2<TKey, TValue>[], arrayIndex: number): void {
		(<IDictionary$2<TKey, TValue>>this.dictionary).copyTo(array, arrayIndex);
	}
	getEnumerator(): IEnumerator$1<KeyValuePair$2<TKey, TValue>> {
		return new OrderedDictionary_Enumerator$2<TKey, TValue>(this.$tKey, this.$tValue, this);
	}
	remove(item: KeyValuePair$2<TKey, TValue>): boolean {
		return this.removeItem(item.key);
	}
	removeItem(key: TKey): boolean {
		return this.dictionary.removeItem(key) && this.orderedKeys.remove(key);
	}
	tryGetValue(key: TKey, value: TValue): { ret: boolean; p1: TValue; } {
		if (this.dictionary.containsKey(key)) {
			value = this.dictionary.item(key);
			return {
				ret: true,
				p1: value

			};
		}
		value = Type.getDefaultValue<TValue>(this.$tValue);
		return {
			ret: false,
			p1: value

		};
	}
	getEnumeratorObject(): IEnumerator {
		return new OrderedDictionary_Enumerator$2<TKey, TValue>(this.$tKey, this.$tValue, this);
	}
	keyAtIndex(index: number): any {
		return getBoxIfEnum<TKey>(this.$tKey, this.item1(index));
	}
	valueFromKey(key: any): any {
		return this.item(key);
	}
}

/**
 * @hidden 
 */
export class OrderedDictionary_Enumerator$2<TKey, TValue> extends Base implements IEnumerator$1<KeyValuePair$2<TKey, TValue>>, IEnumerator {
	static $t: Type = markType(OrderedDictionary_Enumerator$2, 'OrderedDictionary_Enumerator$2', (<any>Base).$type, [IEnumerator$1_$type.specialize((<any>KeyValuePair$2).$type.specialize(0, 1)), IEnumerator_$type]);
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	private _index: number = 0;
	private get index(): number {
		return this._index;
	}
	private set index(value: number) {
		this._index = value;
	}
	private _dictionary: OrderedDictionary$2<TKey, TValue> = null;
	private get dictionary(): OrderedDictionary$2<TKey, TValue> {
		return this._dictionary;
	}
	private set dictionary(value: OrderedDictionary$2<TKey, TValue>) {
		this._dictionary = value;
	}
	constructor($tKey: Type, $tValue: Type, dictionary: OrderedDictionary$2<TKey, TValue>) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		this.index = -1;
		this.dictionary = dictionary;
	}
	get currentObject(): any {
		return getBoxIfEnum<TValue>(this.$tValue, this.dictionary.item(this.dictionary.item1(this.index)));
	}
	get current(): KeyValuePair$2<TKey, TValue> {
		let key: TKey = this.dictionary.item1(this.index);
		return new KeyValuePair$2<TKey, TValue>(this.$tKey, this.$tValue, 1, key, this.dictionary.item(key));
	}
	moveNext(): boolean {
		this.index++;
		return this.index < this.dictionary.count;
	}
	reset(): void {
		this.index = -1;
	}
	dispose(): void {
	}
}


