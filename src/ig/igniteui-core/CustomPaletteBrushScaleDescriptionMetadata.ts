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
import { CustomPaletteBrushScaleDescription } from "./CustomPaletteBrushScaleDescription";

/**
 * @hidden 
 */
export class CustomPaletteBrushScaleDescriptionMetadata extends Base {
	static $t: Type = markType(CustomPaletteBrushScaleDescriptionMetadata, 'CustomPaletteBrushScaleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CustomPaletteBrushScaleDescriptionMetadata._metadata == null) {
			CustomPaletteBrushScaleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CustomPaletteBrushScaleDescriptionMetadata.fillMetadata(context, CustomPaletteBrushScaleDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		BrushScaleDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("BrushSelectionMode", "ExportedType:string:BrushSelectionMode");
	}
	static register(context: TypeDescriptionContext): void {
		CustomPaletteBrushScaleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CustomPaletteBrushScale", () => new CustomPaletteBrushScaleDescription());
		context.register("CustomPaletteBrushScale", CustomPaletteBrushScaleDescriptionMetadata._metadata);
	}
}


