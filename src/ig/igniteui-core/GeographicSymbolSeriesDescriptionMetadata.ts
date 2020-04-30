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
import { GeographicSymbolSeriesDescription } from "./GeographicSymbolSeriesDescription";

/**
 * @hidden 
 */
export class GeographicSymbolSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicSymbolSeriesDescriptionMetadata, 'GeographicSymbolSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicSymbolSeriesDescriptionMetadata._metadata == null) {
			GeographicSymbolSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicSymbolSeriesDescriptionMetadata.fillMetadata(context, GeographicSymbolSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapSeriesHostDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LatitudeMemberPath", "String");
		metadata.item("LongitudeMemberPath", "String");
		metadata.item("MarkerType", "ExportedType:string:MarkerType");
		metadata.item("MarkerCollisionAvoidance", "ExportedType:string:CollisionAvoidanceType");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("MarkerOutline", "Brush");
		metadata.item("MaximumMarkers", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicSymbolSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicSymbolSeries", () => new GeographicSymbolSeriesDescription());
		context.register("GeographicSymbolSeries", GeographicSymbolSeriesDescriptionMetadata._metadata);
	}
}


