/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineSeriesDescriptionMetadata } from "./StackedSplineSeriesDescriptionMetadata";
import { Stacked100SplineSeriesDescription } from "./Stacked100SplineSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100SplineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100SplineSeriesDescriptionMetadata, 'Stacked100SplineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100SplineSeriesDescriptionMetadata._metadata == null) {
			Stacked100SplineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100SplineSeriesDescriptionMetadata.fillMetadata(context, Stacked100SplineSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedSplineSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100SplineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100SplineSeries", () => new Stacked100SplineSeriesDescription());
		context.register("Stacked100SplineSeries", Stacked100SplineSeriesDescriptionMetadata._metadata);
	}
}


