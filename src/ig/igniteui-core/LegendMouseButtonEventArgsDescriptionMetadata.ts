/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseButtonEventArgsDescription } from "./LegendMouseButtonEventArgsDescription";

/**
 * @hidden 
 */
export class LegendMouseButtonEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(LegendMouseButtonEventArgsDescriptionMetadata, 'LegendMouseButtonEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LegendMouseButtonEventArgsDescriptionMetadata._metadata == null) {
			LegendMouseButtonEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LegendMouseButtonEventArgsDescriptionMetadata.fillMetadata(context, LegendMouseButtonEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Handled", "Boolean");
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("LegendItemRef", "(w:LegendItem,wf:LegendItem)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		LegendMouseButtonEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LegendMouseButtonEventArgs", () => new LegendMouseButtonEventArgsDescription());
		context.register("LegendMouseButtonEventArgs", LegendMouseButtonEventArgsDescriptionMetadata._metadata);
	}
}


