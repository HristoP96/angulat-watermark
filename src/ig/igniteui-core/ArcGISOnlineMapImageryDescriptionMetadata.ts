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
import { ArcGISOnlineMapImageryDescription } from "./ArcGISOnlineMapImageryDescription";

/**
 * @hidden 
 */
export class ArcGISOnlineMapImageryDescriptionMetadata extends Base {
	static $t: Type = markType(ArcGISOnlineMapImageryDescriptionMetadata, 'ArcGISOnlineMapImageryDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ArcGISOnlineMapImageryDescriptionMetadata._metadata == null) {
			ArcGISOnlineMapImageryDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ArcGISOnlineMapImageryDescriptionMetadata.fillMetadata(context, ArcGISOnlineMapImageryDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapImageryDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("MapServerUri", "String");
		metadata.item("UserName", "String");
		metadata.item("Password", "String");
		metadata.item("UserToken", "String");
		metadata.item("IsMapPublic", "Boolean");
		metadata.item("DefaultTokenTimeout", "Number:int");
		metadata.item("TokenGenerationEndPoint", "String");
		metadata.item("RefererUri", "String");
	}
	static register(context: TypeDescriptionContext): void {
		ArcGISOnlineMapImageryDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ArcGISOnlineMapImagery", () => new ArcGISOnlineMapImageryDescription());
		context.register("ArcGISOnlineMapImagery", ArcGISOnlineMapImageryDescriptionMetadata._metadata);
	}
}


