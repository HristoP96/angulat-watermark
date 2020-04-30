/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ProgressiveLoadStatusEventArgsDescriptionMetadata } from "./ProgressiveLoadStatusEventArgsDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { HighDensityScatterSeriesDescription } from "./HighDensityScatterSeriesDescription";

/**
 * @hidden 
 */
export class HighDensityScatterSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(HighDensityScatterSeriesDescriptionMetadata, 'HighDensityScatterSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (HighDensityScatterSeriesDescriptionMetadata._metadata == null) {
			HighDensityScatterSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			HighDensityScatterSeriesDescriptionMetadata.fillMetadata(context, HighDensityScatterSeriesDescriptionMetadata._metadata);
			ProgressiveLoadStatusEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
		metadata.item("XMemberPath", "String");
		metadata.item("YMemberPath", "String");
		metadata.item("UseBruteForce", "Boolean");
		metadata.item("ProgressiveLoad", "Boolean");
		metadata.item("HeatMinimum", "Number:double");
		metadata.item("HeatMaximum", "Number:double");
		metadata.item("HeatMinimumColor", "Color");
		metadata.item("HeatMaximumColor", "Color");
		metadata.item("PointExtent", "Number:int");
		metadata.item("ProgressiveStatus", "Number:int");
		metadata.item("ProgressiveLoadStatusChangedRef", "EventRef::progressiveLoadStatusChanged");
	}
	static register(context: TypeDescriptionContext): void {
		HighDensityScatterSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("HighDensityScatterSeries", () => new HighDensityScatterSeriesDescription());
		context.register("HighDensityScatterSeries", HighDensityScatterSeriesDescriptionMetadata._metadata);
	}
}


