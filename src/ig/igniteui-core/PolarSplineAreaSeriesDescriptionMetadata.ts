/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarSplineAreaSeriesDescription } from "./PolarSplineAreaSeriesDescription";

/**
 * @hidden 
 */
export class PolarSplineAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(PolarSplineAreaSeriesDescriptionMetadata, 'PolarSplineAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PolarSplineAreaSeriesDescriptionMetadata._metadata == null) {
			PolarSplineAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PolarSplineAreaSeriesDescriptionMetadata.fillMetadata(context, PolarSplineAreaSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		PolarLineSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Stiffness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		PolarSplineAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PolarSplineAreaSeries", () => new PolarSplineAreaSeriesDescription());
		context.register("PolarSplineAreaSeries", PolarSplineAreaSeriesDescriptionMetadata._metadata);
	}
}


