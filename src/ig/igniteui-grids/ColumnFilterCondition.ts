/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IFilterExpression } from "igniteui-core/IFilterExpression";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";

/**
 * @hidden 
 */
export abstract class ColumnFilterCondition extends Base {
	static $t: Type = markType(ColumnFilterCondition, 'ColumnFilterCondition');
	isGroup(): boolean {
		return false;
	}
	resolveFilter(columnName: string, columnType: DataSourceSchemaPropertyType): IFilterExpression {
		return null;
	}
}


