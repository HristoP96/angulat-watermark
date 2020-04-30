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
import { ColumnFilterConditionGroupDescription } from "./ColumnFilterConditionGroupDescription";

/**
 * @hidden 
 */
export class ColumnFilterConditionGroupDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnFilterConditionGroupDescriptionMetadata, 'ColumnFilterConditionGroupDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnFilterConditionGroupDescriptionMetadata._metadata == null) {
			ColumnFilterConditionGroupDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnFilterConditionGroupDescriptionMetadata.fillMetadata(context, ColumnFilterConditionGroupDescriptionMetadata._metadata);
			ColumnFilterConditionDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnFilterConditionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("UsesOrOperator", "Boolean");
		metadata.item("Item", "(w:this[],wf:this[])ExportedType:ColumnFilterCondition");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnFilterConditionGroupDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnFilterConditionGroup", () => new ColumnFilterConditionGroupDescription());
		context.register("ColumnFilterConditionGroup", ColumnFilterConditionGroupDescriptionMetadata._metadata);
	}
}


