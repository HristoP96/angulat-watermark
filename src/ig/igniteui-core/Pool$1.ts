/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IIndexedPool$1, IIndexedPool$1_$type } from "./IIndexedPool$1";
import { IPool$1 } from "./IPool$1";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class Pool$1<T> extends Base implements IIndexedPool$1<T> {
	static $t: Type = markType(Pool$1, 'Pool$1', (<any>Base).$type, [IIndexedPool$1_$type.specialize(0)]);
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this.active = new List$1<T>(this.$t, 0);
		this.inactive = new List$1<T>(this.$t, 0);
	}
	private _create: () => T = null;
	get create(): () => T {
		return this._create;
	}
	set create(value: () => T) {
		this._create = value;
	}
	private _disactivate: (arg1: T) => void = null;
	get disactivate(): (arg1: T) => void {
		return this._disactivate;
	}
	set disactivate(value: (arg1: T) => void) {
		this._disactivate = value;
	}
	private _activate: (arg1: T) => void = null;
	get activate(): (arg1: T) => void {
		return this._activate;
	}
	set activate(value: (arg1: T) => void) {
		this._activate = value;
	}
	private _destroy: (arg1: T) => void = null;
	get destroy(): (arg1: T) => void {
		return this._destroy;
	}
	set destroy(value: (arg1: T) => void) {
		this._destroy = value;
	}
	item(index: number): T {
		if (index >= this.count) {
			this.count = index + 1;
		}
		return this.active._inner[index];
	}
	clear(): void {
		this.count = 0;
	}
	get count(): number {
		return this.active.count;
	}
	set count(value: number) {
		let activeCount: number = this.active.count;
		while (value > this.active.count && this.inactive.count > 0) {
			let item: T = this.inactive._inner[this.inactive.count - 1];
			this.active.add(item);
			this.inactive.removeAt(this.inactive.count - 1);
			if (this.activate != null) {
				this.activate(item);
			}
		}
		while (value > this.active.count && this.inactive.count == 0) {
			let item1: T = this.create();
			this.active.add(item1);
			if (this.activate != null) {
				this.activate(item1);
			}
		}
		let inactiveCount: number = 2;
		while (activeCount != 0) {
			activeCount >>= 1;
			inactiveCount <<= 1;
		}
		while (value < this.active.count) {
			let item2: T = this.active._inner[this.active.count - 1];
			this.active.removeAt(this.active.count - 1);
			if (this.disactivate != null) {
				this.disactivate(item2);
			}
			if (this.inactive.count < inactiveCount) {
				this.inactive.add(item2);
			} else {
				if (this.destroy != null) {
					this.destroy(item2);
				}
			}
		}
		if (inactiveCount < this.inactive.count) {
			for (let i: number = inactiveCount; i < this.inactive.count; ++i) {
				this.destroy(this.inactive._inner[i]);
			}
			this.inactive.removeRange(inactiveCount, this.inactive.count - inactiveCount);
		}
	}
	private _active: List$1<T> = null;
	get active(): List$1<T> {
		return this._active;
	}
	set active(value: List$1<T>) {
		this._active = value;
	}
	private _inactive: List$1<T> = null;
	get inactive(): List$1<T> {
		return this._inactive;
	}
	set inactive(value: List$1<T>) {
		this._inactive = value;
	}
	doToAll(action: (arg1: T) => void): void {
		for (let i = 0; i < this.inactive.count; i++) {
			action(this.inactive._inner[i]);
		}
		for (let i1 = 0; i1 < this.active.count; i1++) {
			action(this.active._inner[i1]);
		}
	}
}


