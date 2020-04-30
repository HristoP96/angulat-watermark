/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescription } from "./CustomPaletteColorScaleDescription";

/**
 * @hidden 
 */
export class CustomPaletteColorScaleDescriptionMetadata extends Base {
	static $t: Type = markType(CustomPaletteColorScaleDescriptionMetadata, 'CustomPaletteColorScaleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CustomPaletteColorScaleDescriptionMetadata._metadata == null) {
			CustomPaletteColorScaleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CustomPaletteColorScaleDescriptionMetadata.fillMetadata(context, CustomPaletteColorScaleDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColorScaleDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("MinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("Palette", "ColorCollection:string");
		metadata.item("InterpolationMode", "ExportedType:string:ColorScaleInterpolationMode");
	}
	static register(context: TypeDescriptionContext): void {
		CustomPaletteColorScaleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CustomPaletteColorScale", () => new CustomPaletteColorScaleDescription());
		context.register("CustomPaletteColorScale", CustomPaletteColorScaleDescriptionMetadata._metadata);
	}
}


