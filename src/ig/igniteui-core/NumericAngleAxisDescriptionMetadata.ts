/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
import { NumericAngleAxisDescription } from "./NumericAngleAxisDescription";

/**
 * @hidden 
 */
export class NumericAngleAxisDescriptionMetadata extends Base {
	static $t: Type = markType(NumericAngleAxisDescriptionMetadata, 'NumericAngleAxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (NumericAngleAxisDescriptionMetadata._metadata == null) {
			NumericAngleAxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			NumericAngleAxisDescriptionMetadata.fillMetadata(context, NumericAngleAxisDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		NumericAxisBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("StartAngleOffset", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		NumericAngleAxisDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("NumericAngleAxis", () => new NumericAngleAxisDescription());
		context.register("NumericAngleAxis", NumericAngleAxisDescriptionMetadata._metadata);
	}
}


