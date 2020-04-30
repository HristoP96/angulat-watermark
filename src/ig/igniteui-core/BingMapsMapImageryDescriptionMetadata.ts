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
import { BingMapsMapImageryDescription } from "./BingMapsMapImageryDescription";

/**
 * @hidden 
 */
export class BingMapsMapImageryDescriptionMetadata extends Base {
	static $t: Type = markType(BingMapsMapImageryDescriptionMetadata, 'BingMapsMapImageryDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BingMapsMapImageryDescriptionMetadata._metadata == null) {
			BingMapsMapImageryDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BingMapsMapImageryDescriptionMetadata.fillMetadata(context, BingMapsMapImageryDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapImageryDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("IsInitialized", "Boolean");
		metadata.item("IsDeferredLoad", "Boolean");
		metadata.item("TilePath", "String");
		metadata.item("ActualTilePath", "String");
		metadata.item("SubDomains", "Collection:String:SubDomainsCollection:String");
		metadata.item("ActualSubDomains", "Collection:String:SubDomainsCollection:String");
		metadata.item("BingImageryRestUri", "String");
		metadata.item("ActualBingImageryRestUri", "String");
		metadata.item("CultureName", "String");
		metadata.item("ApiKey", "String");
		metadata.item("ImageryStyle", "ExportedType:string:BingMapsImageryStyle");
	}
	static register(context: TypeDescriptionContext): void {
		BingMapsMapImageryDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BingMapsMapImagery", () => new BingMapsMapImageryDescription());
		context.register("BingMapsMapImagery", BingMapsMapImageryDescriptionMetadata._metadata);
	}
}


