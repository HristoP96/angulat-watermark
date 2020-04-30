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
import { LiteralFilterExpressionDescription } from "./LiteralFilterExpressionDescription";

/**
 * @hidden 
 */
export class LiteralFilterExpressionDescriptionMetadata extends Base {
	static $t: Type = markType(LiteralFilterExpressionDescriptionMetadata, 'LiteralFilterExpressionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LiteralFilterExpressionDescriptionMetadata._metadata == null) {
			LiteralFilterExpressionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LiteralFilterExpressionDescriptionMetadata.fillMetadata(context, LiteralFilterExpressionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FilterExpressionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LiteralValueRef", "(w:LiteralValue,wf:LiteralValue)DataRef");
		metadata.item("LeaveUnquoted", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		LiteralFilterExpressionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LiteralFilterExpression", () => new LiteralFilterExpressionDescription());
		context.register("LiteralFilterExpression", LiteralFilterExpressionDescriptionMetadata._metadata);
	}
}


