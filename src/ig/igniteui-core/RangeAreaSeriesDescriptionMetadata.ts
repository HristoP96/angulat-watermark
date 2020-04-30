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
import { RangeAreaSeriesDescription } from "./RangeAreaSeriesDescription";

/**
 * @hidden 
 */
export class RangeAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(RangeAreaSeriesDescriptionMetadata, 'RangeAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RangeAreaSeriesDescriptionMetadata._metadata == null) {
			RangeAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RangeAreaSeriesDescriptionMetadata.fillMetadata(context, RangeAreaSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		HorizontalRangeCategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		RangeAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RangeAreaSeries", () => new RangeAreaSeriesDescription());
		context.register("RangeAreaSeries", RangeAreaSeriesDescriptionMetadata._metadata);
	}
}


