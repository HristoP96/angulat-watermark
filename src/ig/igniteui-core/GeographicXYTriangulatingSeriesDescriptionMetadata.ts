/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GeographicMapSeriesHostDescriptionMetadata } from "./GeographicMapSeriesHostDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicXYTriangulatingSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicXYTriangulatingSeriesDescriptionMetadata, 'GeographicXYTriangulatingSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicXYTriangulatingSeriesDescriptionMetadata._metadata == null) {
			GeographicXYTriangulatingSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicXYTriangulatingSeriesDescriptionMetadata.fillMetadata(context, GeographicXYTriangulatingSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapSeriesHostDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LongitudeMemberPath", "String");
		metadata.item("LatitudeMemberPath", "String");
		metadata.item("TrianglesSourceRef", "(w:TrianglesSource,wf:TrianglesSource)DataRef::object");
		metadata.item("TriangleVertexMemberPath1", "String");
		metadata.item("TriangleVertexMemberPath2", "String");
		metadata.item("TriangleVertexMemberPath3", "String");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicXYTriangulatingSeriesDescriptionMetadata.ensureMetadata(context);
		context.register("GeographicXYTriangulatingSeries", GeographicXYTriangulatingSeriesDescriptionMetadata._metadata);
	}
}


