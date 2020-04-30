/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredRadialSeriesDescriptionMetadata } from "./AnchoredRadialSeriesDescriptionMetadata";
import { RadialPieSeriesDescription } from "./RadialPieSeriesDescription";

/**
 * @hidden 
 */
export class RadialPieSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(RadialPieSeriesDescriptionMetadata, 'RadialPieSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RadialPieSeriesDescriptionMetadata._metadata == null) {
			RadialPieSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RadialPieSeriesDescriptionMetadata.fillMetadata(context, RadialPieSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnchoredRadialSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		RadialPieSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RadialPieSeries", () => new RadialPieSeriesDescription());
		context.register("RadialPieSeries", RadialPieSeriesDescriptionMetadata._metadata);
	}
}


