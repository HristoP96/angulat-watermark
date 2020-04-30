/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ChartSeriesEventArgsDescription } from "./ChartSeriesEventArgsDescription";

/**
 * @hidden 
 */
export class ChartSeriesEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ChartSeriesEventArgsDescriptionMetadata, 'ChartSeriesEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ChartSeriesEventArgsDescriptionMetadata._metadata == null) {
			ChartSeriesEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ChartSeriesEventArgsDescriptionMetadata.fillMetadata(context, ChartSeriesEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Series", "ExportedType:Series");
	}
	static register(context: TypeDescriptionContext): void {
		ChartSeriesEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ChartSeriesEventArgs", () => new ChartSeriesEventArgsDescription());
		context.register("ChartSeriesEventArgs", ChartSeriesEventArgsDescriptionMetadata._metadata);
	}
}


