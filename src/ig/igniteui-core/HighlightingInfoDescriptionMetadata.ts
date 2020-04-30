/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { HighlightingInfoDescription } from "./HighlightingInfoDescription";

/**
 * @hidden 
 */
export class HighlightingInfoDescriptionMetadata extends Base {
	static $t: Type = markType(HighlightingInfoDescriptionMetadata, 'HighlightingInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (HighlightingInfoDescriptionMetadata._metadata == null) {
			HighlightingInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			HighlightingInfoDescriptionMetadata.fillMetadata(context, HighlightingInfoDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("StartIndex", "Number:int");
		metadata.item("EndIndex", "Number:int");
		metadata.item("State", "ExportedType:string:HighlightingState");
		metadata.item("Progress", "Number:double");
		metadata.item("IsMarker", "Boolean");
		metadata.item("Series", "ExportedType:Series");
	}
	static register(context: TypeDescriptionContext): void {
		HighlightingInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("HighlightingInfo", () => new HighlightingInfoDescription());
		context.register("HighlightingInfo", HighlightingInfoDescriptionMetadata._metadata);
	}
}


