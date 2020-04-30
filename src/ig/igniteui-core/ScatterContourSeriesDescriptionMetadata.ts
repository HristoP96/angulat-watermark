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
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterContourSeriesDescription } from "./ScatterContourSeriesDescription";

/**
 * @hidden 
 */
export class ScatterContourSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterContourSeriesDescriptionMetadata, 'ScatterContourSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterContourSeriesDescriptionMetadata._metadata == null) {
			ScatterContourSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterContourSeriesDescriptionMetadata.fillMetadata(context, ScatterContourSeriesDescriptionMetadata._metadata);
			ValueBrushScaleDescriptionMetadata.register(context);
			ContourValueResolverDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ScatterTriangulationSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ValueMemberPath", "String");
		metadata.item("FillScale", "ExportedType:ValueBrushScale");
		metadata.item("ValueResolver", "ExportedType:ContourValueResolver");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterContourSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterContourSeries", () => new ScatterContourSeriesDescription());
		context.register("ScatterContourSeries", ScatterContourSeriesDescriptionMetadata._metadata);
	}
}


