/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialCalculationDataSourceDescriptionMetadata } from "./FinancialCalculationDataSourceDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescriptionMetadata } from "./FinancialCalculationSupportingCalculationsDescriptionMetadata";
import { FinancialEventArgsDescription } from "./FinancialEventArgsDescription";

/**
 * @hidden 
 */
export class FinancialEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialEventArgsDescriptionMetadata, 'FinancialEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialEventArgsDescriptionMetadata._metadata == null) {
			FinancialEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialEventArgsDescriptionMetadata.fillMetadata(context, FinancialEventArgsDescriptionMetadata._metadata);
			FinancialCalculationDataSourceDescriptionMetadata.register(context);
			FinancialCalculationSupportingCalculationsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Position", "Number:int");
		metadata.item("Count", "Number:int");
		metadata.item("DataSource", "ExportedType:FinancialCalculationDataSource");
		metadata.item("SupportingCalculations", "ExportedType:FinancialCalculationSupportingCalculations");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialEventArgs", () => new FinancialEventArgsDescription());
		context.register("FinancialEventArgs", FinancialEventArgsDescriptionMetadata._metadata);
	}
}


