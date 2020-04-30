/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, fromEnum, markType } from "./type";
import { IHashPool$2, IHashPool$2_$type } from "./IHashPool$2";
import { IPool$1 } from "./IPool$1";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class HashPool$2<TKey, TValue> extends Base implements IHashPool$2<TKey, TValue> {
	static $t: Type = markType(HashPool$2, 'HashPool$2', (<any>Base).$type, [IHashPool$2_$type.specialize(0, 1)]);
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	private _inactive: List$1<TValue> = null;
	protected get inactive(): List$1<TValue> {
		return this._inactive;
	}
	protected set inactive(value: List$1<TValue>) {
		this._inactive = value;
	}
	private _active: Dictionary$2<TKey, TValue> = null;
	protected get active(): Dictionary$2<TKey, TValue> {
		return this._active;
	}
	protected set active(value: Dictionary$2<TKey, TValue>) {
		this._active = value;
	}
	constructor($tKey: Type, $tValue: Type) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		this.inactive = new List$1<TValue>(this.$tValue, 0);
		this.active = new Dictionary$2<TKey, TValue>(this.$tKey, this.$tValue, 0);
	}
	private _create: () => TValue = null;
	get create(): () => TValue {
		return this._create;
	}
	set create(value: () => TValue) {
		this._create = value;
	}
	private _disactivate: (arg1: TValue) => void = null;
	get disactivate(): (arg1: TValue) => void {
		return this._disactivate;
	}
	set disactivate(value: (arg1: TValue) => void) {
		this._disactivate = value;
	}
	private _activate: (arg1: TValue) => void = null;
	get activate(): (arg1: TValue) => void {
		return this._activate;
	}
	set activate(value: (arg1: TValue) => void) {
		this._activate = value;
	}
	private _destroy: (arg1: TValue) => void = null;
	get destroy(): (arg1: TValue) => void {
		return this._destroy;
	}
	set destroy(value: (arg1: TValue) => void) {
		this._destroy = value;
	}
	item(key: TKey): TValue {
		let ret: TValue;
		if (!((() => { let $ret = this.active.tryGetValue(key, ret); ret = $ret.p1; return $ret.ret; })())) {
			if (this.inactive.count > 0) {
				ret = this.inactive._inner[this.inactive.count - 1];
				this.inactive.removeAt(this.inactive.count - 1);
			} else {
				ret = this.create();
			}
			if (this.activate != null) {
				this.activate(ret);
			}
			this.active.item(key, ret);
		}
		return ret;
	}
	get activeKeys(): IEnumerable$1<TKey> {
		return this.active.keys;
	}
	isActiveKey(key: TKey): boolean {
		return this.active.containsKey(key);
	}
	remove(key: TKey): void {
		let remove: TValue;
		if (((() => { let $ret = this.active.tryGetValue(key, remove); remove = $ret.p1; return $ret.ret; })())) {
			this.active.removeItem(key);
			if (this.disactivate != null) {
				this.disactivate(remove);
			}
			this.inactive.add(remove);
			let activeCount: number = this.active.count;
			let inactiveCount: number = 2;
			while (activeCount != 0) {
				activeCount >>= 1;
				inactiveCount <<= 1;
			}
			if (inactiveCount < this.inactive.count) {
				for (let i: number = inactiveCount; i < this.inactive.count; ++i) {
					this.destroy(this.inactive._inner[i]);
				}
				this.inactive.removeRange(inactiveCount, this.inactive.count - inactiveCount);
			}
		}
	}
	clear(): void {
		let deactivate: List$1<TKey> = new List$1<TKey>(this.$tKey, 0);
		for (let active of fromEnum<TKey>(this.active.keys)) {
			deactivate.add(active);
		}
		for (let key of fromEnum<TKey>(deactivate)) {
			this.remove(key);
		}
	}
	get activeCount(): number {
		return this.active.count;
	}
	doToAll(action: (arg1: TValue) => void): void {
		for (let i = 0; i < this.inactive.count; i++) {
			action(this.inactive._inner[i]);
		}
		for (let item of fromEnum<TValue>(this.active.values)) {
			action(item);
		}
	}
}


