/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GeographicMapImageryDescriptionMetadata } from "./GeographicMapImageryDescriptionMetadata";
import { TileGeneratorMapImageryDescription } from "./TileGeneratorMapImageryDescription";

/**
 * @hidden 
 */
export class TileGeneratorMapImageryDescriptionMetadata extends Base {
	static $t: Type = markType(TileGeneratorMapImageryDescriptionMetadata, 'TileGeneratorMapImageryDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TileGeneratorMapImageryDescriptionMetadata._metadata == null) {
			TileGeneratorMapImageryDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TileGeneratorMapImageryDescriptionMetadata.fillMetadata(context, TileGeneratorMapImageryDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapImageryDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TileGenerator", "ExportedType");
	}
	static register(context: TypeDescriptionContext): void {
		TileGeneratorMapImageryDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TileGeneratorMapImagery", () => new TileGeneratorMapImageryDescription());
		context.register("TileGeneratorMapImagery", TileGeneratorMapImageryDescriptionMetadata._metadata);
	}
}


