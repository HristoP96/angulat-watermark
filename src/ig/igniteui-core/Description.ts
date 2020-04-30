/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Boolean_$type, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class Description extends Base {
	static $t: Type = markType(Description, 'Description');
	private _isDirty: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
	protected markDirty(propertyName: string): void {
		this._isDirty.item(propertyName, true);
	}
	isDirty(propertyName: string): boolean {
		if (this._isDirty.containsKey(propertyName)) {
			return this._isDirty.item(propertyName);
		}
		return false;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
		this.markDirty("Name");
	}
}


