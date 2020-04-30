/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { LegendDescription } from "./LegendDescription";

/**
 * @hidden 
 */
export class LegendDescriptionMetadata extends Base {
	static $t: Type = markType(LegendDescriptionMetadata, 'LegendDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LegendDescriptionMetadata._metadata == null) {
			LegendDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LegendDescriptionMetadata.fillMetadata(context, LegendDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		LegendBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Orientation", "ExportedType:string:LegendOrientation");
		metadata.item("TextColor", "String");
		metadata.item("TextStyle", "String");
		LegendDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		LegendDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Legend", () => new LegendDescription());
		context.register("Legend", LegendDescriptionMetadata._metadata);
	}
}


