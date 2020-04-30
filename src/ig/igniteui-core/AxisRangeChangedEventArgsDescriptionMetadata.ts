/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisRangeChangedEventArgsDescription } from "./AxisRangeChangedEventArgsDescription";

/**
 * @hidden 
 */
export class AxisRangeChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(AxisRangeChangedEventArgsDescriptionMetadata, 'AxisRangeChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AxisRangeChangedEventArgsDescriptionMetadata._metadata == null) {
			AxisRangeChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AxisRangeChangedEventArgsDescriptionMetadata.fillMetadata(context, AxisRangeChangedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("OldMinimumValue", "Number:double");
		metadata.item("MinimumValue", "Number:double");
		metadata.item("OldMaximumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		AxisRangeChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AxisRangeChangedEventArgs", () => new AxisRangeChangedEventArgsDescription());
		context.register("AxisRangeChangedEventArgs", AxisRangeChangedEventArgsDescriptionMetadata._metadata);
	}
}


