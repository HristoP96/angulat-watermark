/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { TriangulationStatusEventArgsDescriptionMetadata } from "./TriangulationStatusEventArgsDescriptionMetadata";
import { GeographicXYTriangulatingSeriesDescriptionMetadata } from "./GeographicXYTriangulatingSeriesDescriptionMetadata";
import { GeographicScatterAreaSeriesDescription } from "./GeographicScatterAreaSeriesDescription";

/**
 * @hidden 
 */
export class GeographicScatterAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicScatterAreaSeriesDescriptionMetadata, 'GeographicScatterAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicScatterAreaSeriesDescriptionMetadata._metadata == null) {
			GeographicScatterAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicScatterAreaSeriesDescriptionMetadata.fillMetadata(context, GeographicScatterAreaSeriesDescriptionMetadata._metadata);
			ColorScaleDescriptionMetadata.register(context);
			TriangulationStatusEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicXYTriangulatingSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ColorMemberPath", "String");
		metadata.item("ColorScale", "ExportedType:ColorScale");
		metadata.item("TriangulationStatusChangedRef", "EventRef::triangulationStatusChanged");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicScatterAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicScatterAreaSeries", () => new GeographicScatterAreaSeriesDescription());
		context.register("GeographicScatterAreaSeries", GeographicScatterAreaSeriesDescriptionMetadata._metadata);
	}
}


