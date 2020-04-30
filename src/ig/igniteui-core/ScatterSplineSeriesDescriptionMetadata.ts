/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterSplineSeriesDescription } from "./ScatterSplineSeriesDescription";

/**
 * @hidden 
 */
export class ScatterSplineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterSplineSeriesDescriptionMetadata, 'ScatterSplineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterSplineSeriesDescriptionMetadata._metadata == null) {
			ScatterSplineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterSplineSeriesDescriptionMetadata.fillMetadata(context, ScatterSplineSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ScatterBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Stiffness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterSplineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterSplineSeries", () => new ScatterSplineSeriesDescription());
		context.register("ScatterSplineSeries", ScatterSplineSeriesDescriptionMetadata._metadata);
	}
}


