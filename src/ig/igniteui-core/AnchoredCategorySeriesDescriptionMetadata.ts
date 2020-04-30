/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CategorySeriesDescriptionMetadata } from "./CategorySeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class AnchoredCategorySeriesDescriptionMetadata extends Base {
	static $t: Type = markType(AnchoredCategorySeriesDescriptionMetadata, 'AnchoredCategorySeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AnchoredCategorySeriesDescriptionMetadata._metadata == null) {
			AnchoredCategorySeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AnchoredCategorySeriesDescriptionMetadata.fillMetadata(context, AnchoredCategorySeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ValueMemberPath", "String");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("ActualTrendLineBrush", "Brush");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("MarkerCollisionAvoidance", "ExportedType:string:CategorySeriesMarkerCollisionAvoidance");
		metadata.item("ConsolidatedItemHitTestBehavior", "ExportedType:string:ConsolidatedItemHitTestBehavior");
	}
	static register(context: TypeDescriptionContext): void {
		AnchoredCategorySeriesDescriptionMetadata.ensureMetadata(context);
		context.register("AnchoredCategorySeries", AnchoredCategorySeriesDescriptionMetadata._metadata);
	}
}


