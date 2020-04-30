/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialSeriesDescriptionMetadata } from "./FinancialSeriesDescriptionMetadata";
import { FinancialPriceSeriesDescription } from "./FinancialPriceSeriesDescription";

/**
 * @hidden 
 */
export class FinancialPriceSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialPriceSeriesDescriptionMetadata, 'FinancialPriceSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialPriceSeriesDescriptionMetadata._metadata == null) {
			FinancialPriceSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialPriceSeriesDescriptionMetadata.fillMetadata(context, FinancialPriceSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FinancialSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("ActualTrendLineBrush", "Brush");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("TrendLinePeriod", "Number:int");
		metadata.item("DisplayType", "ExportedType:string:PriceDisplayType");
		metadata.item("NegativeOutline", "Brush");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialPriceSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FinancialPriceSeries", () => new FinancialPriceSeriesDescription());
		context.register("FinancialPriceSeries", FinancialPriceSeriesDescriptionMetadata._metadata);
	}
}


