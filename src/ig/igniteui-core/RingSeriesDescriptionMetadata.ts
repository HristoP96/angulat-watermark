/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { RingDescriptionMetadata } from "./RingDescriptionMetadata";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingSeriesDescription } from "./RingSeriesDescription";

/**
 * @hidden 
 */
export class RingSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(RingSeriesDescriptionMetadata, 'RingSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RingSeriesDescriptionMetadata._metadata == null) {
			RingSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RingSeriesDescriptionMetadata.fillMetadata(context, RingSeriesDescriptionMetadata._metadata);
			RingDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		RingSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Ring", "ExportedType:Ring");
	}
	static register(context: TypeDescriptionContext): void {
		RingSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("RingSeries", () => new RingSeriesDescription());
		context.register("RingSeries", RingSeriesDescriptionMetadata._metadata);
	}
}


