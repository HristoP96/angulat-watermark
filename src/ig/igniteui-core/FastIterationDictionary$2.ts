/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEqualityComparer$1, IEqualityComparer$1_$type, Type, Number_$type, Boolean_$type, getBoxIfEnum, markType } from "./type";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { HashSet$1 } from "./HashSet$1";

/**
 * @hidden 
 */
export class FastIterationDictionary$2<TKey, TValue> extends Base {
	static $t: Type = markType(FastIterationDictionary$2, 'FastIterationDictionary$2');
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	private _internalDictionary: Dictionary$2<TKey, TValue> = null;
	private _keyList: List$1<TKey> = null;
	get keyList(): List$1<TKey> {
		return this._keyList;
	}
	set keyList(value: List$1<TKey>) {
		this._keyList = value;
	}
	private _valueList: List$1<TValue> = null;
	get valueList(): List$1<TValue> {
		return this._valueList;
	}
	set valueList(value: List$1<TValue>) {
		this._valueList = value;
	}
	private _removedList: List$1<boolean> = null;
	get removedList(): List$1<boolean> {
		return this._removedList;
	}
	set removedList(value: List$1<boolean>) {
		this._removedList = value;
	}
	private _listMap: Dictionary$2<TKey, number> = null;
	get listMap(): Dictionary$2<TKey, number> {
		return this._listMap;
	}
	set listMap(value: Dictionary$2<TKey, number>) {
		this._listMap = value;
	}
	constructor($tKey: Type, $tValue: Type, initNumber: number);
	constructor($tKey: Type, $tValue: Type, initNumber: number, comparer: IEqualityComparer$1<TKey>);
	constructor($tKey: Type, $tValue: Type, initNumber: number, ..._rest: any[]);
	constructor($tKey: Type, $tValue: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ null ];
				{
					let comparer: IEqualityComparer$1<TKey> = <IEqualityComparer$1<TKey>>$outerArgs[0];
					this._internalDictionary = new Dictionary$2<TKey, TValue>(this.$tKey, this.$tValue, 2, comparer);
					this.keyList = new List$1<TKey>(this.$tKey, 0);
					this.valueList = new List$1<TValue>(this.$tValue, 0);
					this.listMap = new Dictionary$2<TKey, number>(this.$tKey, Number_$type, 0);
					this.removedList = new List$1<boolean>(Boolean_$type, 0);
				}
			}
			break;

			case 1:
			{
				let comparer: IEqualityComparer$1<TKey> = <IEqualityComparer$1<TKey>>_rest[0];
				this._internalDictionary = new Dictionary$2<TKey, TValue>(this.$tKey, this.$tValue, 2, comparer);
				this.keyList = new List$1<TKey>(this.$tKey, 0);
				this.valueList = new List$1<TValue>(this.$tValue, 0);
				this.listMap = new Dictionary$2<TKey, number>(this.$tKey, Number_$type, 0);
				this.removedList = new List$1<boolean>(Boolean_$type, 0);
			}
			break;

		}

	}
	add(key: TKey, value: TValue): void {
		this._internalDictionary.addItem(key, value);
		this.keyList.add(key);
		this.valueList.add(value);
		this.listMap.addItem(key, this.keyList.count - 1);
		this.removedList.add(false);
	}
	validate(): boolean {
		for (let i = 0; i < this.keyList.count; i++) {
			if (this.removedList._inner[i]) {
				continue;
			}
			if (<any>this.item(this.keyList._inner[i]) != <any>this.valueList._inner[i]) {
				return false;
			}
		}
		return true;
	}
	hasDuplicateValues(): boolean {
		let set: HashSet$1<TValue> = new HashSet$1<TValue>(this.$tValue, 0);
		for (let i = 0; i < this.valueList.count; i++) {
			if (this.removedList._inner[i]) {
				continue;
			}
			if (set.contains(this.valueList._inner[i])) {
				return true;
			}
			set.add_1(this.valueList._inner[i]);
		}
		return false;
	}
	validateValueKeys(getKey: (arg1: TValue) => TKey): boolean {
		for (let i = 0; i < this.valueList.count; i++) {
			if (this.removedList._inner[i]) {
				continue;
			}
			let key = getKey(this.valueList._inner[i]);
			if (!Base.equalsStatic(key, getBoxIfEnum<TKey>(this.$tKey, this.keyList._inner[i]))) {
				return false;
			}
		}
		return true;
	}
	clear(): void {
		this._internalDictionary.clear();
		this.keyList.clear();
		this.valueList.clear();
		this.listMap.clear();
		this.removedList.clear();
	}
	containsKey(key: TKey): boolean {
		return this._internalDictionary.containsKey(key);
	}
	get count(): number {
		return this._internalDictionary.count;
	}
	get keys(): IEnumerable$1<TKey> {
		return this._internalDictionary.keys;
	}
	private _suspendCleaning: boolean = false;
	get suspendCleaning(): boolean {
		return this._suspendCleaning;
	}
	set suspendCleaning(value: boolean) {
		this._suspendCleaning = value;
		if (this.removedList.count > (this.listMap.count * 3)) {
			this.clean();
		}
	}
	remove(key: TKey): boolean {
		let ret = this._internalDictionary.removeItem(key);
		if (ret) {
			let ind = this.listMap.item(key);
			this.removedList._inner[ind] = true;
			this.listMap.removeItem(key);
			if (this.removedList.count > (this.listMap.count * 3)) {
				this.clean();
			}
			return ret;
		}
		return ret;
	}
	private clean(): void {
		if (this.suspendCleaning) {
			return;
		}
		let count = this.removedList.count;
		let j = 0;
		let removed: boolean = false;
		for (let i_m = 0; i_m < count; i_m++) {
			if (this.removedList._inner[i_m]) {
				this.keyList.removeAt(i_m);
				this.valueList.removeAt(i_m);
				this.removedList.removeAt(i_m);
				i_m--;
				count--;
				removed = true;
			} else {
				if (removed) {
					this.listMap.removeItem(this.keyList._inner[i_m]);
					this.listMap.addItem(this.keyList._inner[i_m], j);
				}
				j++;
			}
		}
	}
	tryGetValue(key: TKey, value: TValue): { ret: boolean; p1: TValue; } {
		return {
			ret: ((() => { let $ret = this._internalDictionary.tryGetValue(key, value); value = $ret.p1; return $ret.ret; })()),
			p1: value

		};
	}
	tryGetValueFast(key: TKey): TValue {
		return this._internalDictionary.tryGetValueFast(key);
	}
	get values(): IEnumerable$1<TValue> {
		return this._internalDictionary.values;
	}
	item(key: TKey, value?: TValue): TValue {
		if (arguments.length === 2) {
			if (!this.containsKey(key)) {
				this.add(key, value);
			} else {
				this._internalDictionary.item(key, value);
				let index = this.listMap.item(key);
				this.valueList._inner[index] = value;
				this.removedList._inner[index] = false;
			}
			return value;
		} else {
			return this._internalDictionary.item(key);
		}
	}
}


