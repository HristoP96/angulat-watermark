/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleShapeEventArgsDescriptionMetadata } from "./StyleShapeEventArgsDescriptionMetadata";
import { GeographicShapeSeriesBaseDescriptionMetadata } from "./GeographicShapeSeriesBaseDescriptionMetadata";
import { GeographicPolylineSeriesDescription } from "./GeographicPolylineSeriesDescription";

/**
 * @hidden 
 */
export class GeographicPolylineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicPolylineSeriesDescriptionMetadata, 'GeographicPolylineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicPolylineSeriesDescriptionMetadata._metadata == null) {
			GeographicPolylineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicPolylineSeriesDescriptionMetadata.fillMetadata(context, GeographicPolylineSeriesDescriptionMetadata._metadata);
			StyleShapeEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicShapeSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ShapeStyleSelectorRef", "(w:ShapeStyleSelector,wf:ShapeStyleSelector)DataRef::object");
		metadata.item("ShapeFill", "(w:ShapeStyle.Fill,wf:ShapeFill)String");
		metadata.item("ShapeStroke", "(w:ShapeStyle.Stroke,wf:ShapeStroke)String");
		metadata.item("ShapeStrokeThickness", "(w:ShapeStyle.StrokeThickness,wf:ShapeStrokeThickness)Number:double");
		metadata.item("ShapeOpacity", "(w:ShapeStyle.Opacity,wf:ShapeOpacity)Number:double");
		metadata.item("StyleShapeRef", "EventRef::styleShape");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicPolylineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicPolylineSeries", () => new GeographicPolylineSeriesDescription());
		context.register("GeographicPolylineSeries", GeographicPolylineSeriesDescriptionMetadata._metadata);
	}
}


