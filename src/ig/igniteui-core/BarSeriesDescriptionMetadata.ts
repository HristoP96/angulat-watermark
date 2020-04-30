/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { VerticalAnchoredCategorySeriesDescriptionMetadata } from "./VerticalAnchoredCategorySeriesDescriptionMetadata";
import { BarSeriesDescription } from "./BarSeriesDescription";

/**
 * @hidden 
 */
export class BarSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(BarSeriesDescriptionMetadata, 'BarSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BarSeriesDescriptionMetadata._metadata == null) {
			BarSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BarSeriesDescriptionMetadata.fillMetadata(context, BarSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		VerticalAnchoredCategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		BarSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BarSeries", () => new BarSeriesDescription());
		context.register("BarSeries", BarSeriesDescriptionMetadata._metadata);
	}
}


