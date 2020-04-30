/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ColumnPropertySetterDescription extends Description {
	static $t: Type = markType(ColumnPropertySetterDescription, 'ColumnPropertySetterDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ColumnPropertySetter";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _columnName: string = null;
	get columnName(): string {
		return this._columnName;
	}
	set columnName(value: string) {
		this._columnName = value;
		this.markDirty("ColumnName");
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
		this.markDirty("PropertyName");
	}
	private _valueRef: string = null;
	get valueRef(): string {
		return this._valueRef;
	}
	set valueRef(value: string) {
		this._valueRef = value;
		this.markDirty("ValueRef");
	}
}


