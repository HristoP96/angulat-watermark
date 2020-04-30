/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { BubbleSeriesDescription } from "./BubbleSeriesDescription";

/**
 * @hidden 
 */
export class BubbleSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(BubbleSeriesDescriptionMetadata, 'BubbleSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BubbleSeriesDescriptionMetadata._metadata == null) {
			BubbleSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BubbleSeriesDescriptionMetadata.fillMetadata(context, BubbleSeriesDescriptionMetadata._metadata);
			SizeScaleDescriptionMetadata.register(context);
			BrushScaleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ScatterBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusMemberPath", "String");
		metadata.item("RadiusScale", "ExportedType:SizeScale");
		metadata.item("LabelMemberPath", "String");
		metadata.item("FillMemberPath", "String");
		metadata.item("FillScale", "ExportedType:BrushScale");
	}
	static register(context: TypeDescriptionContext): void {
		BubbleSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BubbleSeries", () => new BubbleSeriesDescription());
		context.register("BubbleSeries", BubbleSeriesDescriptionMetadata._metadata);
	}
}


