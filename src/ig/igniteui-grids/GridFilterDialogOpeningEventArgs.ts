/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";

/**
 * @hidden 
 */
export class GridFilterDialogOpeningEventArgs extends Base {
	static $t: Type = markType(GridFilterDialogOpeningEventArgs, 'GridFilterDialogOpeningEventArgs');
	private _filter: ColumnFilterCondition = null;
	get filter(): ColumnFilterCondition {
		return this._filter;
	}
	set filter(value: ColumnFilterCondition) {
		this._filter = value;
	}
	private _propertyType: DataSourceSchemaPropertyType = <DataSourceSchemaPropertyType>0;
	get propertyType(): DataSourceSchemaPropertyType {
		return this._propertyType;
	}
	set propertyType(value: DataSourceSchemaPropertyType) {
		this._propertyType = value;
	}
}


