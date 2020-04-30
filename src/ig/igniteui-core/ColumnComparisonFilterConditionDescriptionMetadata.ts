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
import { ColumnComparisonFilterConditionDescription } from "./ColumnComparisonFilterConditionDescription";

/**
 * @hidden 
 */
export class ColumnComparisonFilterConditionDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnComparisonFilterConditionDescriptionMetadata, 'ColumnComparisonFilterConditionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnComparisonFilterConditionDescriptionMetadata._metadata == null) {
			ColumnComparisonFilterConditionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnComparisonFilterConditionDescriptionMetadata.fillMetadata(context, ColumnComparisonFilterConditionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnFilterConditionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Operator", "ExportedType:string:ColumnComparisonConditionOperatorType");
		metadata.item("ValueRef", "(w:Value,wf:Value)DataRef");
		metadata.item("IsCaseSensitive", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnComparisonFilterConditionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnComparisonFilterCondition", () => new ColumnComparisonFilterConditionDescription());
		context.register("ColumnComparisonFilterCondition", ColumnComparisonFilterConditionDescriptionMetadata._metadata);
	}
}


