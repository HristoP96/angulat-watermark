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
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterAreaSeriesDescription } from "./ScatterAreaSeriesDescription";

/**
 * @hidden 
 */
export class ScatterAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterAreaSeriesDescriptionMetadata, 'ScatterAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterAreaSeriesDescriptionMetadata._metadata == null) {
			ScatterAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterAreaSeriesDescriptionMetadata.fillMetadata(context, ScatterAreaSeriesDescriptionMetadata._metadata);
			ColorScaleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ScatterTriangulationSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ColorScale", "ExportedType:ColorScale");
		metadata.item("ColorMemberPath", "String");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterAreaSeries", () => new ScatterAreaSeriesDescription());
		context.register("ScatterAreaSeries", ScatterAreaSeriesDescriptionMetadata._metadata);
	}
}


