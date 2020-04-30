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
import { RadialColumnSeriesDescription } from "./RadialColumnSeriesDescription";

/**
 * @hidden 
 */
export class RadialColumnSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(RadialColumnSeriesDescriptionMetadata, 'RadialColumnSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RadialColumnSeriesDescriptionMetadata._metadata == null) {
			RadialColumnSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RadialColumnSeriesDescriptionMetadata.fillMetadata(context, RadialColumnSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnchoredRadialSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		RadialColumnSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RadialColumnSeries", () => new RadialColumnSeriesDescription());
		context.register("RadialColumnSeries", RadialColumnSeriesDescriptionMetadata._metadata);
	}
}


