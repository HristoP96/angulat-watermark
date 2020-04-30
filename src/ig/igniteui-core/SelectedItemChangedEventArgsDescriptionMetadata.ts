/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemChangedEventArgsDescription } from "./SelectedItemChangedEventArgsDescription";

/**
 * @hidden 
 */
export class SelectedItemChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(SelectedItemChangedEventArgsDescriptionMetadata, 'SelectedItemChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SelectedItemChangedEventArgsDescriptionMetadata._metadata == null) {
			SelectedItemChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SelectedItemChangedEventArgsDescriptionMetadata.fillMetadata(context, SelectedItemChangedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
	}
	static register(context: TypeDescriptionContext): void {
		SelectedItemChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SelectedItemChangedEventArgs", () => new SelectedItemChangedEventArgsDescription());
		context.register("SelectedItemChangedEventArgs", SelectedItemChangedEventArgsDescriptionMetadata._metadata);
	}
}


