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
import { ScatterPolylineSeriesDescription } from "./ScatterPolylineSeriesDescription";

/**
 * @hidden 
 */
export class ScatterPolylineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterPolylineSeriesDescriptionMetadata, 'ScatterPolylineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterPolylineSeriesDescriptionMetadata._metadata == null) {
			ScatterPolylineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterPolylineSeriesDescriptionMetadata.fillMetadata(context, ScatterPolylineSeriesDescriptionMetadata._metadata);
			StyleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ShapeSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ShapeStyle", "ExportedType:Style");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterPolylineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterPolylineSeries", () => new ScatterPolylineSeriesDescription());
		context.register("ScatterPolylineSeries", ScatterPolylineSeriesDescriptionMetadata._metadata);
	}
}


