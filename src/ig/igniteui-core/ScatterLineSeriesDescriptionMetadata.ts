/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterLineSeriesDescription } from "./ScatterLineSeriesDescription";

/**
 * @hidden 
 */
export class ScatterLineSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ScatterLineSeriesDescriptionMetadata, 'ScatterLineSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ScatterLineSeriesDescriptionMetadata._metadata == null) {
			ScatterLineSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ScatterLineSeriesDescriptionMetadata.fillMetadata(context, ScatterLineSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ScatterBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
	}
	static register(context: TypeDescriptionContext): void {
		ScatterLineSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ScatterLineSeries", () => new ScatterLineSeriesDescription());
		context.register("ScatterLineSeries", ScatterLineSeriesDescriptionMetadata._metadata);
	}
}


