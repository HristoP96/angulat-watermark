/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { GridFilterDialogOpeningEventArgsDescription } from "./GridFilterDialogOpeningEventArgsDescription";

/**
 * @hidden 
 */
export class GridFilterDialogOpeningEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridFilterDialogOpeningEventArgsDescriptionMetadata, 'GridFilterDialogOpeningEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridFilterDialogOpeningEventArgsDescriptionMetadata._metadata == null) {
			GridFilterDialogOpeningEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridFilterDialogOpeningEventArgsDescriptionMetadata.fillMetadata(context, GridFilterDialogOpeningEventArgsDescriptionMetadata._metadata);
			ColumnFilterConditionDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Filter", "ExportedType:ColumnFilterCondition");
		metadata.item("PropertyType", "ExportedType:string:DataSourceSchemaPropertyType");
	}
	static register(context: TypeDescriptionContext): void {
		GridFilterDialogOpeningEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridFilterDialogOpeningEventArgs", () => new GridFilterDialogOpeningEventArgsDescription());
		context.register("GridFilterDialogOpeningEventArgs", GridFilterDialogOpeningEventArgsDescriptionMetadata._metadata);
	}
}


