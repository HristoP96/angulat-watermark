/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SliceClickEventArgsDescription } from "./SliceClickEventArgsDescription";

/**
 * @hidden 
 */
export class SliceClickEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(SliceClickEventArgsDescriptionMetadata, 'SliceClickEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SliceClickEventArgsDescriptionMetadata._metadata == null) {
			SliceClickEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SliceClickEventArgsDescriptionMetadata.fillMetadata(context, SliceClickEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("IsSelected", "Boolean");
		metadata.item("IsExploded", "Boolean");
		metadata.item("OriginalEventRef", "(w:OriginalEvent,wf:OriginalEvent)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		SliceClickEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SliceClickEventArgs", () => new SliceClickEventArgsDescription());
		context.register("SliceClickEventArgs", SliceClickEventArgsDescriptionMetadata._metadata);
	}
}


