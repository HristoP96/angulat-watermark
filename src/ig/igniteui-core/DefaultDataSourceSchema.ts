/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IDataSourceSchema, IDataSourceSchema_$type } from "./IDataSourceSchema";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";

/**
 * @hidden 
 */
export class DefaultDataSourceSchema extends Base implements IDataSourceSchema {
	static $t: Type = markType(DefaultDataSourceSchema, 'DefaultDataSourceSchema', (<any>Base).$type, [IDataSourceSchema_$type]);
	private _valueNames: string[] = null;
	private _valueTypes: DataSourceSchemaPropertyType[] = null;
	private _primaryKey: string[] = null;
	private _propertyDataIntents: string[][] = null;
	constructor(valueNames: string[], valueTypes: DataSourceSchemaPropertyType[], primaryKey: string[], propertyDataIntents: string[][]) {
		super();
		this._valueNames = valueNames;
		this._valueTypes = valueTypes;
		this._primaryKey = primaryKey;
		this._propertyDataIntents = propertyDataIntents;
	}
	get primaryKey(): string[] {
		return this._primaryKey;
	}
	get propertyNames(): string[] {
		return this._valueNames;
	}
	get propertyTypes(): DataSourceSchemaPropertyType[] {
		return this._valueTypes;
	}
	get propertyDataIntents(): string[][] {
		return this._propertyDataIntents;
	}
}


