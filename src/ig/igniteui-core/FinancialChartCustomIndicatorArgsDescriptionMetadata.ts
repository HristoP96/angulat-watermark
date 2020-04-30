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
import { FinancialChartCustomIndicatorArgsDescription } from "./FinancialChartCustomIndicatorArgsDescription";

/**
 * @hidden 
 */
export class FinancialChartCustomIndicatorArgsDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialChartCustomIndicatorArgsDescriptionMetadata, 'FinancialChartCustomIndicatorArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialChartCustomIndicatorArgsDescriptionMetadata._metadata == null) {
			FinancialChartCustomIndicatorArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialChartCustomIndicatorArgsDescriptionMetadata.fillMetadata(context, FinancialChartCustomIndicatorArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Series", "ExportedType:Series");
		metadata.item("Index", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialChartCustomIndicatorArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialChartCustomIndicatorArgs", () => new FinancialChartCustomIndicatorArgsDescription());
		context.register("FinancialChartCustomIndicatorArgs", FinancialChartCustomIndicatorArgsDescriptionMetadata._metadata);
	}
}


