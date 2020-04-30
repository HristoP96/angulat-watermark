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
export class PolarBaseDescriptionMetadata extends Base {
	static $t: Type = markType(PolarBaseDescriptionMetadata, 'PolarBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PolarBaseDescriptionMetadata._metadata == null) {
			PolarBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PolarBaseDescriptionMetadata.fillMetadata(context, PolarBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		MarkerSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("AngleMemberPath", "String");
		metadata.item("RadiusMemberPath", "String");
		metadata.item("AngleAxisRef", "(w:AngleAxis,wf:AngleAxis)DataRef::object");
		metadata.item("RadiusAxisRef", "(w:RadiusAxis,wf:RadiusAxis)DataRef::object");
		metadata.item("UseCartesianInterpolation", "Boolean");
		metadata.item("MaximumMarkers", "Number:int");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("ActualTrendLineBrush", "Brush");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("TrendLineZIndex", "Number:int");
		metadata.item("ClipSeriesToBounds", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		PolarBaseDescriptionMetadata.ensureMetadata(context);
		context.register("PolarBase", PolarBaseDescriptionMetadata._metadata);
	}
}


