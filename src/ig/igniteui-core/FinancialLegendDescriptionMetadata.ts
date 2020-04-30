/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { FinancialLegendDescription } from "./FinancialLegendDescription";

/**
 * @hidden 
 */
export class FinancialLegendDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialLegendDescriptionMetadata, 'FinancialLegendDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialLegendDescriptionMetadata._metadata == null) {
			FinancialLegendDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialLegendDescriptionMetadata.fillMetadata(context, FinancialLegendDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		LegendBaseDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		FinancialLegendDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialLegend", () => new FinancialLegendDescription());
		context.register("FinancialLegend", FinancialLegendDescriptionMetadata._metadata);
	}
}


