/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";

/**
 * @hidden 
 */
export class HeaderDescriptionMetadata extends Base {
	static $t: Type = markType(HeaderDescriptionMetadata, 'HeaderDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (HeaderDescriptionMetadata._metadata == null) {
			HeaderDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			HeaderDescriptionMetadata.fillMetadata(context, HeaderDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		DefinitionBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("SortIndicatorColor", "Brush");
		metadata.item("ActualSortIndicatorColor", "Brush");
		metadata.item("SortIndicatorStyle", "ExportedType:string:SortIndicatorStyle");
		metadata.item("ActualSortIndicatorStyle", "ExportedType:string:SortIndicatorStyle");
		metadata.item("PaddingLeft", "Number:int");
		metadata.item("PaddingTop", "Number:int");
		metadata.item("PaddingRight", "Number:int");
		metadata.item("PaddingBottom", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		HeaderDescriptionMetadata.ensureMetadata(context);
		context.register("Header", HeaderDescriptionMetadata._metadata);
	}
}


