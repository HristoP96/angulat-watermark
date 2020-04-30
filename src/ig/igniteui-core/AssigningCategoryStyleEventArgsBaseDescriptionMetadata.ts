/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { HighlightingInfoDescriptionMetadata } from "./HighlightingInfoDescriptionMetadata";

/**
 * @hidden 
 */
export class AssigningCategoryStyleEventArgsBaseDescriptionMetadata extends Base {
	static $t: Type = markType(AssigningCategoryStyleEventArgsBaseDescriptionMetadata, 'AssigningCategoryStyleEventArgsBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AssigningCategoryStyleEventArgsBaseDescriptionMetadata._metadata == null) {
			AssigningCategoryStyleEventArgsBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AssigningCategoryStyleEventArgsBaseDescriptionMetadata.fillMetadata(context, AssigningCategoryStyleEventArgsBaseDescriptionMetadata._metadata);
			HighlightingInfoDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("StartIndex", "Number:int");
		metadata.item("EndIndex", "Number:int");
		metadata.item("StartDate", "Date");
		metadata.item("EndDate", "Date");
		metadata.item("GetItemsRef", "(w:GetItems,wf:GetItems)MethodRef");
		metadata.item("Fill", "Brush");
		metadata.item("Stroke", "Brush");
		metadata.item("Opacity", "Number:double");
		metadata.item("HighlightingInfo", "ExportedType:HighlightingInfo");
		metadata.item("MaxAllSeriesHighlightingProgress", "Number:double");
		metadata.item("SumAllSeriesHighlightingProgress", "Number:double");
		metadata.item("HighlightingHandled", "Boolean");
		metadata.item("HasDateRange", "Boolean");
		metadata.item("IsNegativeShape", "Boolean");
		metadata.item("IsThumbnail", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		AssigningCategoryStyleEventArgsBaseDescriptionMetadata.ensureMetadata(context);
		context.register("AssigningCategoryStyleEventArgsBase", AssigningCategoryStyleEventArgsBaseDescriptionMetadata._metadata);
	}
}


