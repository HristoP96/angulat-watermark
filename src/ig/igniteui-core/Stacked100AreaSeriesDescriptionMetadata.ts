/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedAreaSeriesDescriptionMetadata } from "./StackedAreaSeriesDescriptionMetadata";
import { Stacked100AreaSeriesDescription } from "./Stacked100AreaSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100AreaSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100AreaSeriesDescriptionMetadata, 'Stacked100AreaSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100AreaSeriesDescriptionMetadata._metadata == null) {
			Stacked100AreaSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100AreaSeriesDescriptionMetadata.fillMetadata(context, Stacked100AreaSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedAreaSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100AreaSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100AreaSeries", () => new Stacked100AreaSeriesDescription());
		context.register("Stacked100AreaSeries", Stacked100AreaSeriesDescriptionMetadata._metadata);
	}
}


