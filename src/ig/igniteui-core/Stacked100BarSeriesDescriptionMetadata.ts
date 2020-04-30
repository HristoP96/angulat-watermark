/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedBarSeriesDescriptionMetadata } from "./StackedBarSeriesDescriptionMetadata";
import { Stacked100BarSeriesDescription } from "./Stacked100BarSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100BarSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100BarSeriesDescriptionMetadata, 'Stacked100BarSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100BarSeriesDescriptionMetadata._metadata == null) {
			Stacked100BarSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100BarSeriesDescriptionMetadata.fillMetadata(context, Stacked100BarSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedBarSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100BarSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100BarSeries", () => new Stacked100BarSeriesDescription());
		context.register("Stacked100BarSeries", Stacked100BarSeriesDescriptionMetadata._metadata);
	}
}


