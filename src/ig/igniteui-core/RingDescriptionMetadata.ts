/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingDescription } from "./RingDescription";

/**
 * @hidden 
 */
export class RingDescriptionMetadata extends Base {
	static $t: Type = markType(RingDescriptionMetadata, 'RingDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RingDescriptionMetadata._metadata == null) {
			RingDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RingDescriptionMetadata.fillMetadata(context, RingDescriptionMetadata._metadata);
			RingSeriesBaseDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Index", "Number:int");
		metadata.item("InnerExtend", "Number:double");
		metadata.item("ControlSize", "Size");
		metadata.item("Center", "Point");
		metadata.item("RingSeries", "ExportedType:RingSeriesBase");
		metadata.item("RingBreadth", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		RingDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Ring", () => new RingDescription());
		context.register("Ring", RingDescriptionMetadata._metadata);
	}
}


