/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GetTileImageUriArgsDescription } from "./GetTileImageUriArgsDescription";

/**
 * @hidden 
 */
export class GetTileImageUriArgsDescriptionMetadata extends Base {
	static $t: Type = markType(GetTileImageUriArgsDescriptionMetadata, 'GetTileImageUriArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GetTileImageUriArgsDescriptionMetadata._metadata == null) {
			GetTileImageUriArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GetTileImageUriArgsDescriptionMetadata.fillMetadata(context, GetTileImageUriArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("TileLevel", "Number:int");
		metadata.item("TilePositionX", "Number:int");
		metadata.item("TilePositionY", "Number:int");
		metadata.item("TileImageUri", "String");
	}
	static register(context: TypeDescriptionContext): void {
		GetTileImageUriArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GetTileImageUriArgs", () => new GetTileImageUriArgsDescription());
		context.register("GetTileImageUriArgs", GetTileImageUriArgsDescriptionMetadata._metadata);
	}
}


