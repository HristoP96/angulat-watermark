/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SortIndicatorRenderCompletedEventArgsDescriptionMetadata } from "./SortIndicatorRenderCompletedEventArgsDescriptionMetadata";
import { LiveGridSortIndicatorDescription } from "./LiveGridSortIndicatorDescription";

/**
 * @hidden 
 */
export class LiveGridSortIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(LiveGridSortIndicatorDescriptionMetadata, 'LiveGridSortIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LiveGridSortIndicatorDescriptionMetadata._metadata == null) {
			LiveGridSortIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LiveGridSortIndicatorDescriptionMetadata.fillMetadata(context, LiveGridSortIndicatorDescriptionMetadata._metadata);
			SortIndicatorRenderCompletedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("SortDirection", "ExportedType:string:ColumnSortDirection");
		metadata.item("IconColor", "Brush");
		metadata.item("IsAnimationEnabled", "Boolean");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("SortIndicatorStyle", "ExportedType:string:SortIndicatorStyle");
		metadata.item("RenderCompletedRef", "EventRef::renderCompleted");
	}
	static register(context: TypeDescriptionContext): void {
		LiveGridSortIndicatorDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LiveGridSortIndicator", () => new LiveGridSortIndicatorDescription());
		context.register("LiveGridSortIndicator", LiveGridSortIndicatorDescriptionMetadata._metadata);
	}
}


