/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TriangulationStatusEventArgsDescriptionMetadata } from "./TriangulationStatusEventArgsDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class ScatterTriangulationSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterTriangulationSeriesDescriptionMetadata, 'ScatterTriangulationSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterTriangulationSeriesDescriptionMetadata._metadata == null) {
			ScatterTriangulationSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterTriangulationSeriesDescriptionMetadata.fillMetadata(context, ScatterTriangulationSeriesDescriptionMetadata._metadata);
			TriangulationStatusEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("XMemberPath", "String");
		metadata.item("YMemberPath", "String");
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
		metadata.item("TrianglesSourceRef", "(w:TrianglesSource,wf:TrianglesSource)DataRef::object");
		metadata.item("TriangleVertexMemberPath1", "String");
		metadata.item("TriangleVertexMemberPath2", "String");
		metadata.item("TriangleVertexMemberPath3", "String");
		metadata.item("TriangulationStatusChangedRef", "EventRef::triangulationStatusChanged");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterTriangulationSeriesDescriptionMetadata.ensureMetadata(context);
		context.register("ScatterTriangulationSeries", ScatterTriangulationSeriesDescriptionMetadata._metadata);
	}
}


