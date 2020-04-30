/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ValueBrushScaleDescriptionMetadata } from "./ValueBrushScaleDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { TriangulationStatusEventArgsDescriptionMetadata } from "./TriangulationStatusEventArgsDescriptionMetadata";
import { GeographicXYTriangulatingSeriesDescriptionMetadata } from "./GeographicXYTriangulatingSeriesDescriptionMetadata";
import { GeographicContourLineSeriesDescription } from "./GeographicContourLineSeriesDescription";

/**
 * @hidden 
 */
export class GeographicContourLineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicContourLineSeriesDescriptionMetadata, 'GeographicContourLineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicContourLineSeriesDescriptionMetadata._metadata == null) {
			GeographicContourLineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicContourLineSeriesDescriptionMetadata.fillMetadata(context, GeographicContourLineSeriesDescriptionMetadata._metadata);
			ValueBrushScaleDescriptionMetadata.register(context);
			ContourValueResolverDescriptionMetadata.register(context);
			TriangulationStatusEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicXYTriangulatingSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ValueMemberPath", "String");
		metadata.item("FillScale", "ExportedType:ValueBrushScale");
		metadata.item("ValueResolver", "ExportedType:ContourValueResolver");
		metadata.item("TriangulationStatusChangedRef", "EventRef::triangulationStatusChanged");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicContourLineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicContourLineSeries", () => new GeographicContourLineSeriesDescription());
		context.register("GeographicContourLineSeries", GeographicContourLineSeriesDescriptionMetadata._metadata);
	}
}


