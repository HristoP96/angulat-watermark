/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { ValueBrushScaleDescription } from "./ValueBrushScaleDescription";

/**
 * @hidden 
 */
export class ValueBrushScaleDescriptionMetadata extends Base {
	static $t: Type = markType(ValueBrushScaleDescriptionMetadata, 'ValueBrushScaleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ValueBrushScaleDescriptionMetadata._metadata == null) {
			ValueBrushScaleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ValueBrushScaleDescriptionMetadata.fillMetadata(context, ValueBrushScaleDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		BrushScaleDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("MinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("IsLogarithmic", "Boolean");
		metadata.item("LogarithmBase", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		ValueBrushScaleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ValueBrushScale", () => new ValueBrushScaleDescription());
		context.register("ValueBrushScale", ValueBrushScaleDescriptionMetadata._metadata);
	}
}


