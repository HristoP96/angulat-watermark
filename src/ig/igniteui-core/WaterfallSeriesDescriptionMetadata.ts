/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { WaterfallSeriesDescription } from "./WaterfallSeriesDescription";

/**
 * @hidden 
 */
export class WaterfallSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(WaterfallSeriesDescriptionMetadata, 'WaterfallSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (WaterfallSeriesDescriptionMetadata._metadata == null) {
			WaterfallSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			WaterfallSeriesDescriptionMetadata.fillMetadata(context, WaterfallSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		HorizontalAnchoredCategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("NegativeBrush", "Brush");
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
		metadata.item("NegativeOutline", "Brush");
	}
	static register(context: TypeDescriptionContext): void {
		WaterfallSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("WaterfallSeries", () => new WaterfallSeriesDescription());
		context.register("WaterfallSeries", WaterfallSeriesDescriptionMetadata._metadata);
	}
}


