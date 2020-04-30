/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleDescriptionMetadata } from "./StyleDescriptionMetadata";
import { ShapeSeriesBaseDescriptionMetadata } from "./ShapeSeriesBaseDescriptionMetadata";
import { ScatterPolygonSeriesDescription } from "./ScatterPolygonSeriesDescription";

/**
 * @hidden 
 */
export class ScatterPolygonSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterPolygonSeriesDescriptionMetadata, 'ScatterPolygonSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterPolygonSeriesDescriptionMetadata._metadata == null) {
			ScatterPolygonSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterPolygonSeriesDescriptionMetadata.fillMetadata(context, ScatterPolygonSeriesDescriptionMetadata._metadata);
			StyleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ShapeSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ShapeStyle", "ExportedType:Style");
		metadata.item("MarkerType", "ExportedType:string:MarkerType");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("ActualMarkerTemplateRef", "(w:ActualMarkerTemplate,wf:ActualMarkerTemplate)DataRef::object");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("ActualMarkerBrush", "Brush");
		metadata.item("MarkerOutline", "Brush");
		metadata.item("ActualMarkerOutline", "Brush");
		metadata.item("MarkerCollisionAvoidance", "ExportedType:string:CollisionAvoidanceType");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterPolygonSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterPolygonSeries", () => new ScatterPolygonSeriesDescription());
		context.register("ScatterPolygonSeries", ScatterPolygonSeriesDescriptionMetadata._metadata);
	}
}


