/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { Stack$1 } from "./Stack$1";

/**
 * @hidden 
 */
export class StackPool$1<T> extends Base {
	static $t: Type = markType(StackPool$1, 'StackPool$1');
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this.active = new Dictionary$2<T, any>(this.$t, (<any>Base).$type, 0);
		this.limbo = new Stack$1<T>(this.$t);
		this.inactive = new Stack$1<T>(this.$t);
	}
	pop(): T {
		let t: T;
		if (this.limbo.count != 0) {
			t = this.limbo.pop();
		} else {
			t = this.inactive.count != 0 ? this.inactive.pop() : this.create();
			this.activate(t);
		}
		this.active.addItem(t, null);
		return t;
	}
	push(t: T): void {
		this.active.removeItem(t);
		if (this.deferDisactivate) {
			this.limbo.push(t);
		} else {
			this.deactivate(t);
			let inactiveCount: number = StackPool$1.roundUp<T>(this.$t, this.active.count);
			if (this.inactive.count < inactiveCount) {
				this.destroy(t);
			} else {
				this.inactive.push(t);
			}
		}
	}
	get deferDisactivate(): boolean {
		return this._deferDisactivate;
	}
	set deferDisactivate(value: boolean) {
		if (this._deferDisactivate != value) {
			this._deferDisactivate = value;
			if (!this._deferDisactivate) {
				let inactiveCount: number = StackPool$1.roundUp<T>(this.$t, this.active.count);
				while (this.limbo.count > 0 && this.inactive.count <= inactiveCount) {
					let t: T = this.limbo.pop();
					this.deactivate(t);
					this.inactive.push(t);
				}
				while (this.limbo.count > 0) {
					let t1: T = this.limbo.pop();
					this.deactivate(t1);
					this.destroy(t1);
				}
				while (this.inactive.count > inactiveCount) {
					this.destroy(this.inactive.pop());
				}
			}
		}
	}
	private _deferDisactivate: boolean = false;
	get activeCount(): number {
		return this.active.count;
	}
	get inactiveCount(): number {
		return this.inactive.count;
	}
	private _create: () => T = null;
	get create(): () => T {
		return this._create;
	}
	set create(value: () => T) {
		this._create = value;
	}
	private _deactivate: (arg1: T) => void = null;
	get deactivate(): (arg1: T) => void {
		return this._deactivate;
	}
	set deactivate(value: (arg1: T) => void) {
		this._deactivate = value;
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
	private static roundUp<T>($t: Type, a: number): number {
		let p: number = 2;
		while (a > p) {
			p = p << 1;
		}
		return p;
	}
	private active: Dictionary$2<T, any> = null;
	private limbo: Stack$1<T> = null;
	private inactive: Stack$1<T> = null;
}


