/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class PrimaryKeyValue extends Base {
	static $t: Type = markType(PrimaryKeyValue, 'PrimaryKeyValue');
	private _primaryKey: string[] = null;
	private _primaryKeyValue: any[] = null;
	get key(): string[] {
		return this._primaryKey;
	}
	get value(): any[] {
		return this._primaryKeyValue;
	}
	constructor(primaryKey: string[], primaryKeyValue: any[]) {
		super();
		this._primaryKey = primaryKey;
		this._primaryKeyValue = primaryKeyValue;
	}
	static createIdentityKey(item: any): PrimaryKeyValue {
		return new PrimaryKeyValue(null, <any[]>[ item ]);
	}
	equals(other: any): boolean {
		let p = <PrimaryKeyValue>other;
		if (p == null) {
			return false;
		}
		if (p._primaryKeyValue == null && this._primaryKeyValue == null) {
			return true;
		}
		if (p._primaryKeyValue.length != this._primaryKeyValue.length) {
			return false;
		}
		if (this._primaryKey == null && p._primaryKey == null && this._primaryKeyValue.length == 1 && p._primaryKeyValue.length == 1) {
			let v1_ = this._primaryKeyValue[0];
			let v2_ = p._primaryKeyValue[0];
			return <boolean>(v1_ === v2_);
		}
		for (let i = 0; i < this._primaryKeyValue.length; i++) {
			if (!this.areEqual(this._primaryKeyValue[i], p._primaryKeyValue[i])) {
				return false;
			}
		}
		return true;
	}
	private areEqual(v1: any, v2: any): boolean {
		if (v1 == null && v2 == null) {
			return true;
		}
		if (v1 == null && v2 != null) {
			return false;
		}
		return Base.equalsStatic(v1, v2);
	}
	getHashCode(): number {
		if (this._primaryKeyValue == null || this._primaryKeyValue.length == 0) {
			return 0;
		}
		let ret: number = 0;
		ret = this.getSubHashCode(this._primaryKeyValue[0]);
		for (let i = 1; i < this._primaryKeyValue.length; i++) {
			ret = ret * 17 + this.getSubHashCode(this._primaryKeyValue[i]);
		}
		return ret;
	}
	private getSubHashCode(val_: any): number {
		if (val_ == null) {
			return 0;
		}
		return Base.getHashCodeStatic(val_);
	}
}


