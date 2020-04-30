/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleSelectorDescription } from "./StyleSelectorDescription";

/**
 * @hidden 
 */
export class StyleSelectorDescriptionMetadata extends Base {
	static $t: Type = markType(StyleSelectorDescriptionMetadata, 'StyleSelectorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StyleSelectorDescriptionMetadata._metadata == null) {
			StyleSelectorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StyleSelectorDescriptionMetadata.fillMetadata(context, StyleSelectorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
	}
	static register(context: TypeDescriptionContext): void {
		StyleSelectorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("StyleSelector", () => new StyleSelectorDescription());
		context.register("StyleSelector", StyleSelectorDescriptionMetadata._metadata);
	}
}


