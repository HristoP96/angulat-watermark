/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescriptionMetadata } from "./ColumnSupportingCalculationDescriptionMetadata";
import { DataSourceSupportingCalculationDescriptionMetadata } from "./DataSourceSupportingCalculationDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescription } from "./FinancialCalculationSupportingCalculationsDescription";

/**
 * @hidden 
 */
export class FinancialCalculationSupportingCalculationsDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialCalculationSupportingCalculationsDescriptionMetadata, 'FinancialCalculationSupportingCalculationsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialCalculationSupportingCalculationsDescriptionMetadata._metadata == null) {
			FinancialCalculationSupportingCalculationsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialCalculationSupportingCalculationsDescriptionMetadata.fillMetadata(context, FinancialCalculationSupportingCalculationsDescriptionMetadata._metadata);
			ColumnSupportingCalculationDescriptionMetadata.register(context);
			DataSourceSupportingCalculationDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("EMA", "ExportedType:ColumnSupportingCalculation");
		metadata.item("SMA", "ExportedType:ColumnSupportingCalculation");
		metadata.item("STDEV", "ExportedType:ColumnSupportingCalculation");
		metadata.item("MovingSum", "ExportedType:ColumnSupportingCalculation");
		metadata.item("ShortVolumeOscillatorAverage", "ExportedType:DataSourceSupportingCalculation");
		metadata.item("LongVolumeOscillatorAverage", "ExportedType:DataSourceSupportingCalculation");
		metadata.item("ShortPriceOscillatorAverage", "ExportedType:DataSourceSupportingCalculation");
		metadata.item("LongPriceOscillatorAverage", "ExportedType:DataSourceSupportingCalculation");
		metadata.item("MakeSafeRef", "(w:MakeSafe,wf:MakeSafe)MethodRef");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialCalculationSupportingCalculationsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialCalculationSupportingCalculations", () => new FinancialCalculationSupportingCalculationsDescription());
		context.register("FinancialCalculationSupportingCalculations", FinancialCalculationSupportingCalculationsDescriptionMetadata._metadata);
	}
}


