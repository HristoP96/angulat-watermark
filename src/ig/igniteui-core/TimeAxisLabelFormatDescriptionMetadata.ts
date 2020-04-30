/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisLabelFormatDescription } from "./TimeAxisLabelFormatDescription";

/**
 * @hidden 
 */
export class TimeAxisLabelFormatDescriptionMetadata extends Base {
	static $t: Type = markType(TimeAxisLabelFormatDescriptionMetadata, 'TimeAxisLabelFormatDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TimeAxisLabelFormatDescriptionMetadata._metadata == null) {
			TimeAxisLabelFormatDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TimeAxisLabelFormatDescriptionMetadata.fillMetadata(context, TimeAxisLabelFormatDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Range", "TimeSpan");
		metadata.item("Format", "String");
	}
	static register(context: TypeDescriptionContext): void {
		TimeAxisLabelFormatDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TimeAxisLabelFormat", () => new TimeAxisLabelFormatDescription());
		context.register("TimeAxisLabelFormat", TimeAxisLabelFormatDescriptionMetadata._metadata);
	}
}


