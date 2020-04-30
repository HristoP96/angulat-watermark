/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { RenderRequestedEventArgsDescription } from "./RenderRequestedEventArgsDescription";

/**
 * @hidden 
 */
export class RenderRequestedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(RenderRequestedEventArgsDescriptionMetadata, 'RenderRequestedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RenderRequestedEventArgsDescriptionMetadata._metadata == null) {
			RenderRequestedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RenderRequestedEventArgsDescriptionMetadata.fillMetadata(context, RenderRequestedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Animate", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		RenderRequestedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RenderRequestedEventArgs", () => new RenderRequestedEventArgsDescription());
		context.register("RenderRequestedEventArgs", RenderRequestedEventArgsDescriptionMetadata._metadata);
	}
}


