/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalRangeCategorySeriesDescriptionMetadata } from "./HorizontalRangeCategorySeriesDescriptionMetadata";
import { RangeColumnSeriesDescription } from "./RangeColumnSeriesDescription";

/**
 * @hidden 
 */
export class RangeColumnSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(RangeColumnSeriesDescriptionMetadata, 'RangeColumnSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RangeColumnSeriesDescriptionMetadata._metadata == null) {
			RangeColumnSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RangeColumnSeriesDescriptionMetadata.fillMetadata(context, RangeColumnSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		HorizontalRangeCategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		RangeColumnSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RangeColumnSeries", () => new RangeColumnSeriesDescription());
		context.register("RangeColumnSeries", RangeColumnSeriesDescriptionMetadata._metadata);
	}
}


