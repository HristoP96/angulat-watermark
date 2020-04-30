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
export class ColumnPropertySetter extends Base {
	static $t: Type = markType(ColumnPropertySetter, 'ColumnPropertySetter');
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _columnName: string = null;
	get columnName(): string {
		return this._columnName;
	}
	set columnName(value: string) {
		this._columnName = value;
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
	constructor(initNumber: number);
	constructor(initNumber: number, columnName: string, propertyName: string, value: any);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let columnName: string = <string>_rest[0];
				let propertyName: string = <string>_rest[1];
				let value: any = <any>_rest[2];
				this.columnName = columnName;
				this.propertyName = propertyName;
				this.value = value;
			}
			break;

		}

	}
}


