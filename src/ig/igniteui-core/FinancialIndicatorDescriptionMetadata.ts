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

/**
 * @hidden 
 */
export class FinancialIndicatorDescriptionMetadata extends Base {
	static $t: Type = markType(FinancialIndicatorDescriptionMetadata, 'FinancialIndicatorDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FinancialIndicatorDescriptionMetadata._metadata == null) {
			FinancialIndicatorDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FinancialIndicatorDescriptionMetadata.fillMetadata(context, FinancialIndicatorDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FinancialSeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DisplayType", "ExportedType:string:IndicatorDisplayType");
		metadata.item("IgnoreFirst", "Number:int");
		metadata.item("TrendLineType", "ExportedType:string:TrendLineType");
		metadata.item("TrendLineBrush", "Brush");
		metadata.item("ActualTrendLineBrush", "Brush");
		metadata.item("TrendLineThickness", "Number:double");
		metadata.item("TrendLinePeriod", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		FinancialIndicatorDescriptionMetadata.ensureMetadata(context);
		context.register("FinancialIndicator", FinancialIndicatorDescriptionMetadata._metadata);
	}
}


