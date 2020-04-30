/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";

/**
 * @hidden 
 */
export class TimeAxisBaseDescriptionMetadata extends Base {
	static $t: Type = markType(TimeAxisBaseDescriptionMetadata, 'TimeAxisBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TimeAxisBaseDescriptionMetadata._metadata == null) {
			TimeAxisBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TimeAxisBaseDescriptionMetadata.fillMetadata(context, TimeAxisBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategoryAxisBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DateTimeMemberPath", "String");
		metadata.item("IsDataPreSorted", "Boolean");
		metadata.item("ActualMinimumValue", "Date");
		metadata.item("ActualMaximumValue", "Date");
		metadata.item("MinimumValue", "Date");
		metadata.item("MaximumValue", "Date");
	}
	static register(context: TypeDescriptionContext): void {
		TimeAxisBaseDescriptionMetadata.ensureMetadata(context);
		context.register("TimeAxisBase", TimeAxisBaseDescriptionMetadata._metadata);
	}
}


