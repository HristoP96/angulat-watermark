/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";
import { IDataSourceSchema } from "./IDataSourceSchema";

/**
 * @hidden 
 */
export class DataSourceDataProviderSchemaChangedEventArgs extends EventArgs {
	static $t: Type = markType(DataSourceDataProviderSchemaChangedEventArgs, 'DataSourceDataProviderSchemaChangedEventArgs', (<any>EventArgs).$type);
	private _count: number = 0;
	private _schema: IDataSourceSchema = null;
	constructor(schema: IDataSourceSchema, currentCount: number) {
		super();
		this._schema = schema;
		this._count = currentCount;
	}
	get schema(): IDataSourceSchema {
		return this._schema;
	}
	get count(): number {
		return this._count;
	}
}


