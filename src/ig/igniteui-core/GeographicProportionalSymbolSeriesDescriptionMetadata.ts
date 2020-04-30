/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { GeographicMapSeriesHostDescriptionMetadata } from "./GeographicMapSeriesHostDescriptionMetadata";
import { GeographicProportionalSymbolSeriesDescription } from "./GeographicProportionalSymbolSeriesDescription";

/**
 * @hidden 
 */
export class GeographicProportionalSymbolSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicProportionalSymbolSeriesDescriptionMetadata, 'GeographicProportionalSymbolSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicProportionalSymbolSeriesDescriptionMetadata._metadata == null) {
			GeographicProportionalSymbolSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicProportionalSymbolSeriesDescriptionMetadata.fillMetadata(context, GeographicProportionalSymbolSeriesDescriptionMetadata._metadata);
			SizeScaleDescriptionMetadata.register(context);
			BrushScaleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicMapSeriesHostDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("LatitudeMemberPath", "String");
		metadata.item("LongitudeMemberPath", "String");
		metadata.item("MarkerType", "ExportedType:string:MarkerType");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("MarkerOutline", "Brush");
		metadata.item("MaximumMarkers", "Number:int");
		metadata.item("RadiusMemberPath", "String");
		metadata.item("RadiusScale", "ExportedType:SizeScale");
		metadata.item("LabelMemberPath", "String");
		metadata.item("FillMemberPath", "String");
		metadata.item("FillScale", "ExportedType:BrushScale");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicProportionalSymbolSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicProportionalSymbolSeries", () => new GeographicProportionalSymbolSeriesDescription());
		context.register("GeographicProportionalSymbolSeries", GeographicProportionalSymbolSeriesDescriptionMetadata._metadata);
	}
}


