/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescription } from "./PropertyUpdatedEventArgsDescription";

/**
 * @hidden 
 */
export class PropertyUpdatedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(PropertyUpdatedEventArgsDescriptionMetadata, 'PropertyUpdatedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PropertyUpdatedEventArgsDescriptionMetadata._metadata == null) {
			PropertyUpdatedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PropertyUpdatedEventArgsDescriptionMetadata.fillMetadata(context, PropertyUpdatedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("PropertyName", "String");
		metadata.item("OldValueRef", "(w:OldValue,wf:OldValue)DataRef");
		metadata.item("NewValueRef", "(w:NewValue,wf:NewValue)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		PropertyUpdatedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PropertyUpdatedEventArgs", () => new PropertyUpdatedEventArgsDescription());
		context.register("PropertyUpdatedEventArgs", PropertyUpdatedEventArgsDescriptionMetadata._metadata);
	}
}


