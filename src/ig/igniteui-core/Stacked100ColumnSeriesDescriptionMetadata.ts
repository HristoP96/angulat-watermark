/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedColumnSeriesDescriptionMetadata } from "./StackedColumnSeriesDescriptionMetadata";
import { Stacked100ColumnSeriesDescription } from "./Stacked100ColumnSeriesDescription";

/**
 * @hidden 
 */
export class Stacked100ColumnSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(Stacked100ColumnSeriesDescriptionMetadata, 'Stacked100ColumnSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (Stacked100ColumnSeriesDescriptionMetadata._metadata == null) {
			Stacked100ColumnSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			Stacked100ColumnSeriesDescriptionMetadata.fillMetadata(context, Stacked100ColumnSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedColumnSeriesDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		Stacked100ColumnSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("Stacked100ColumnSeries", () => new Stacked100ColumnSeriesDescription());
		context.register("Stacked100ColumnSeries", Stacked100ColumnSeriesDescriptionMetadata._metadata);
	}
}


