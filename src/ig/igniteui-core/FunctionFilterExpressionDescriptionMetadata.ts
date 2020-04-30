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
import { FunctionFilterExpressionDescription } from "./FunctionFilterExpressionDescription";

/**
 * @hidden 
 */
export class FunctionFilterExpressionDescriptionMetadata extends Base {
	static $t: Type = markType(FunctionFilterExpressionDescriptionMetadata, 'FunctionFilterExpressionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FunctionFilterExpressionDescriptionMetadata._metadata == null) {
			FunctionFilterExpressionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FunctionFilterExpressionDescriptionMetadata.fillMetadata(context, FunctionFilterExpressionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FilterExpressionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("FunctionType", "ExportedType:string:FilterExpressionFunctionType");
	}
	static register(context: TypeDescriptionContext): void {
		FunctionFilterExpressionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FunctionFilterExpression", () => new FunctionFilterExpressionDescription());
		context.register("FunctionFilterExpression", FunctionFilterExpressionDescriptionMetadata._metadata);
	}
}


