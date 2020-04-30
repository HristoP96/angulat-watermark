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
export class ScatterBaseDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterBaseDescriptionMetadata, 'ScatterBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterBaseDescriptionMetadata._metadata == null) {
			ScatterBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterBaseDescriptionMetadata.fillMetadata(context, ScatterBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		MarkerSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
		metadata.item("XMemberPath", "String");
		metadata.item("YMemberPath", "String");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("ActualTrendLineBrush", "Brush");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("MarkerCollisionAvoidance", "ExportedType:string:CollisionAvoidanceType");
		metadata.item("TrendLineZIndex", "Number:int");
		metadata.item("MaximumMarkers", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterBaseDescriptionMetadata.ensureMetadata(context);
		context.register("ScatterBase", ScatterBaseDescriptionMetadata._metadata);
	}
}


