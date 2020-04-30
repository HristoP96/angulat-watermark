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
import { GridFilterDialogFilterChangeEventArgsDescription } from "./GridFilterDialogFilterChangeEventArgsDescription";

/**
 * @hidden 
 */
export class GridFilterDialogFilterChangeEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GridFilterDialogFilterChangeEventArgsDescriptionMetadata, 'GridFilterDialogFilterChangeEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GridFilterDialogFilterChangeEventArgsDescriptionMetadata._metadata == null) {
			GridFilterDialogFilterChangeEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GridFilterDialogFilterChangeEventArgsDescriptionMetadata.fillMetadata(context, GridFilterDialogFilterChangeEventArgsDescriptionMetadata._metadata);
			ColumnFilterConditionDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Filter", "ExportedType:ColumnFilterCondition");
	}
	static register(context: TypeDescriptionContext): void {
		GridFilterDialogFilterChangeEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GridFilterDialogFilterChangeEventArgs", () => new GridFilterDialogFilterChangeEventArgsDescription());
		context.register("GridFilterDialogFilterChangeEventArgs", GridFilterDialogFilterChangeEventArgsDescriptionMetadata._metadata);
	}
}


