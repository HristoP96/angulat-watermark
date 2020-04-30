/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBreakDescription } from "./TimeAxisBreakDescription";

/**
 * @hidden 
 */
export class TimeAxisBreakDescriptionMetadata extends Base {
	static $t: Type = markType(TimeAxisBreakDescriptionMetadata, 'TimeAxisBreakDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TimeAxisBreakDescriptionMetadata._metadata == null) {
			TimeAxisBreakDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TimeAxisBreakDescriptionMetadata.fillMetadata(context, TimeAxisBreakDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Start", "Date");
		metadata.item("End", "Date");
		metadata.item("Interval", "TimeSpan");
	}
	static register(context: TypeDescriptionContext): void {
		TimeAxisBreakDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TimeAxisBreak", () => new TimeAxisBreakDescription());
		context.register("TimeAxisBreak", TimeAxisBreakDescriptionMetadata._metadata);
	}
}


