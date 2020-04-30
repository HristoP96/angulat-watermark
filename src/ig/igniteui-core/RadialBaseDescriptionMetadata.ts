/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class RadialBaseDescriptionMetadata extends Base {
	static $t: Type = markType(RadialBaseDescriptionMetadata, 'RadialBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RadialBaseDescriptionMetadata._metadata == null) {
			RadialBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RadialBaseDescriptionMetadata.fillMetadata(context, RadialBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		MarkerSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("AngleAxisRef", "(w:AngleAxis,wf:AngleAxis)DataRef::object");
		metadata.item("ValueAxisRef", "(w:ValueAxis,wf:ValueAxis)DataRef::object");
		metadata.item("ClipSeriesToBounds", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		RadialBaseDescriptionMetadata.ensureMetadata(context);
		context.register("RadialBase", RadialBaseDescriptionMetadata._metadata);
	}
}


