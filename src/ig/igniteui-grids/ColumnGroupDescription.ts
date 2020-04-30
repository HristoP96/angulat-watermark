/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnSortDescription } from "./ColumnSortDescription";
import { Base, Type, markType } from "igniteui-core/type";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { ListSortDirection } from "igniteui-core/ListSortDirection";
import { FormatGroupTextEventArgs } from "./FormatGroupTextEventArgs";

/**
 * @hidden 
 */
export class ColumnGroupDescription extends ColumnSortDescription {
	static $t: Type = markType(ColumnGroupDescription, 'ColumnGroupDescription', (<any>ColumnSortDescription).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, propertyPath: string);
	constructor(initNumber: number, propertyPath: string, direction: ListSortDirection);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(0);
				this._formatOverride = null;
				this._displayName = null;
				this._hasResolvedSchema = false;
				this._resolvedPropertySchema = <DataSourceSchemaPropertyType>0;
				this.formatText = null;
				this.hasResolvedSchema = false;
				this.resolvedPropertySchema = DataSourceSchemaPropertyType.ObjectValue;
			}
			break;

			case 1:
			{
				let propertyPath: string = <string>_rest[0];
				super(1, propertyPath);
				this._formatOverride = null;
				this._displayName = null;
				this._hasResolvedSchema = false;
				this._resolvedPropertySchema = <DataSourceSchemaPropertyType>0;
				this.formatText = null;
				this.hasResolvedSchema = false;
				this.resolvedPropertySchema = DataSourceSchemaPropertyType.ObjectValue;
			}
			break;

			case 2:
			{
				let propertyPath: string = <string>_rest[0];
				let direction: ListSortDirection = <ListSortDirection>_rest[1];
				super(2, propertyPath, direction);
				this._formatOverride = null;
				this._displayName = null;
				this._hasResolvedSchema = false;
				this._resolvedPropertySchema = <DataSourceSchemaPropertyType>0;
				this.formatText = null;
				this.hasResolvedSchema = false;
				this.resolvedPropertySchema = DataSourceSchemaPropertyType.ObjectValue;
			}
			break;

		}

	}
	private _formatOverride: any;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		this._formatOverride = value;
	}
	private _displayName: string;
	get displayName(): string {
		return this._displayName;
	}
	set displayName(value: string) {
		this._displayName = value;
	}
	private _hasResolvedSchema: boolean;
	get hasResolvedSchema(): boolean {
		return this._hasResolvedSchema;
	}
	set hasResolvedSchema(value: boolean) {
		this._hasResolvedSchema = value;
	}
	private _resolvedPropertySchema: DataSourceSchemaPropertyType;
	get resolvedPropertySchema(): DataSourceSchemaPropertyType {
		return this._resolvedPropertySchema;
	}
	set resolvedPropertySchema(value: DataSourceSchemaPropertyType) {
		this._resolvedPropertySchema = value;
	}
	formatText: (sender: any, e: FormatGroupTextEventArgs) => void;
	userFormatValue(value: any, formattedValue: string, formattedText: string): string {
		let args: FormatGroupTextEventArgs = null;
		if (this.formatText != null) {
			args = ((() => {
				let $ret = new FormatGroupTextEventArgs();
				$ret.groupName = this.propertyPath;
				$ret.groupValue = value;
				$ret.formattedValue = formattedValue;
				$ret.formattedText = formattedText;
				return $ret;
			})());
			this.formatText(this, args);
		}
		return args == null ? formattedText : args.formattedText;
	}
}


