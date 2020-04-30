/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineAreaSeriesDescriptionMetadata } from "./StackedSplineAreaSeriesDescriptionMetadata";
import { Stacked100SplineAreaSeriesDescription } from "./Stacked100SplineAreaSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100SplineAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100SplineAreaSeriesDescriptionMetadata, 'Stacked100SplineAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100SplineAreaSeriesDescriptionMetadata._metadata == null) {
			Stacked100SplineAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100SplineAreaSeriesDescriptionMetadata.fillMetadata(context, Stacked100SplineAreaSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedSplineAreaSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100SplineAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100SplineAreaSeries", () => new Stacked100SplineAreaSeriesDescription());
		context.register("Stacked100SplineAreaSeries", Stacked100SplineAreaSeriesDescriptionMetadata._metadata);
	}
}


