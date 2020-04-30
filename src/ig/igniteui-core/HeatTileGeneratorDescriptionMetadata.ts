/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { HeatTileGeneratorDescription } from "./HeatTileGeneratorDescription";

/**
 * @hidden 
 */
export class HeatTileGeneratorDescriptionMetadata extends Base {
	static $t: Type = markType(HeatTileGeneratorDescriptionMetadata, 'HeatTileGeneratorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (HeatTileGeneratorDescriptionMetadata._metadata == null) {
			HeatTileGeneratorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			HeatTileGeneratorDescriptionMetadata.fillMetadata(context, HeatTileGeneratorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("YValues", "Array:double");
		metadata.item("XValues", "Array:double");
		metadata.item("Values", "Array:double");
		metadata.item("MinimumColor", "Color");
		metadata.item("MaximumColor", "Color");
		metadata.item("ScaleColors", "Array:string:Color");
		metadata.item("ScaleColorOffsets", "Array:double");
		metadata.item("BlurRadius", "Number:double");
		metadata.item("MaxBlurRadius", "Number:double");
		metadata.item("UseBlurRadiusAdjustedForZoom", "Boolean");
		metadata.item("UseGlobalMinMax", "Boolean");
		metadata.item("UseGlobalMinMaxAdjustedForZoom", "Boolean");
		metadata.item("MinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("LogarithmBase", "Number:double");
		metadata.item("UseLogarithmicScale", "Boolean");
		metadata.item("UseWebWorkers", "Boolean");
		metadata.item("WebWorkerScriptPath", "String");
		metadata.item("WebWorkerInstanceRef", "(w:WebWorkerInstance,wf:WebWorkerInstance)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		HeatTileGeneratorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("HeatTileGenerator", () => new HeatTileGeneratorDescription());
		context.register("HeatTileGenerator", HeatTileGeneratorDescriptionMetadata._metadata);
	}
}


