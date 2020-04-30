/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { OperationFilterExpressionDescription } from "./OperationFilterExpressionDescription";

/**
 * @hidden 
 */
export class OperationFilterExpressionDescriptionMetadata extends Base {
	static $t: Type = markType(OperationFilterExpressionDescriptionMetadata, 'OperationFilterExpressionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (OperationFilterExpressionDescriptionMetadata._metadata == null) {
			OperationFilterExpressionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			OperationFilterExpressionDescriptionMetadata.fillMetadata(context, OperationFilterExpressionDescriptionMetadata._metadata);
			FilterExpressionDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FilterExpressionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("PropertyName", "String");
		metadata.item("ValueRef", "(w:Value,wf:Value)DataRef");
		metadata.item("Left", "ExportedType:IFilterExpression");
		metadata.item("Right", "ExportedType:IFilterExpression");
		metadata.item("Operator", "ExportedType:string:FilterExpressionOperatorType");
	}
	static register(context: TypeDescriptionContext): void {
		OperationFilterExpressionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("OperationFilterExpression", () => new OperationFilterExpressionDescription());
		context.register("OperationFilterExpression", OperationFilterExpressionDescriptionMetadata._metadata);
	}
}


