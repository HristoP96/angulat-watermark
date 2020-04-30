/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisDescriptionMetadata } from "./AxisDescriptionMetadata";

/**
 * @hidden 
 */
export class CategoryAxisBaseDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryAxisBaseDescriptionMetadata, 'CategoryAxisBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryAxisBaseDescriptionMetadata._metadata == null) {
			CategoryAxisBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryAxisBaseDescriptionMetadata.fillMetadata(context, CategoryAxisBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AxisDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ItemsCount", "Number:int");
		metadata.item("Gap", "Number:double");
		metadata.item("Overlap", "Number:double");
		metadata.item("UseClusteringMode", "Boolean");
		CategoryAxisBaseDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		CategoryAxisBaseDescriptionMetadata.ensureMetadata(context);
		context.register("CategoryAxisBase", CategoryAxisBaseDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
	}
}


