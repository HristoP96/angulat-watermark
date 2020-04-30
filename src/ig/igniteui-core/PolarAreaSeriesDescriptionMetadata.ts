/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarAreaSeriesDescription } from "./PolarAreaSeriesDescription";

/**
 * @hidden 
 */
export class PolarAreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(PolarAreaSeriesDescriptionMetadata, 'PolarAreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PolarAreaSeriesDescriptionMetadata._metadata == null) {
			PolarAreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PolarAreaSeriesDescriptionMetadata.fillMetadata(context, PolarAreaSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		PolarLineSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
	}
	static register(context: TypeDescriptionContext): void {
		PolarAreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PolarAreaSeries", () => new PolarAreaSeriesDescription());
		context.register("PolarAreaSeries", PolarAreaSeriesDescriptionMetadata._metadata);
	}
}


