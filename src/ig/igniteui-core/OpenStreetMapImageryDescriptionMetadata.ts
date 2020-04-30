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
import { OpenStreetMapImageryDescription } from "./OpenStreetMapImageryDescription";

/**
 * @hidden 
 */
export class OpenStreetMapImageryDescriptionMetadata extends Base {
	static $t: Type = markType(OpenStreetMapImageryDescriptionMetadata, 'OpenStreetMapImageryDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (OpenStreetMapImageryDescriptionMetadata._metadata == null) {
			OpenStreetMapImageryDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			OpenStreetMapImageryDescriptionMetadata.fillMetadata(context, OpenStreetMapImageryDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapImageryDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TilePath", "String");
	}
	static register(context: TypeDescriptionContext): void {
		OpenStreetMapImageryDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("OpenStreetMapImagery", () => new OpenStreetMapImageryDescription());
		context.register("OpenStreetMapImagery", OpenStreetMapImageryDescriptionMetadata._metadata);
	}
}


