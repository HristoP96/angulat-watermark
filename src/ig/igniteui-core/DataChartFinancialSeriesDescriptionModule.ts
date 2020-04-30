/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { NumericYAxisDescriptionMetadata } from "./NumericYAxisDescriptionMetadata";
import { FinancialPriceSeriesDescriptionMetadata } from "./FinancialPriceSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartFinancialSeriesDescriptionModule extends Base {
	static $t: Type = markType(DataChartFinancialSeriesDescriptionModule, 'DataChartFinancialSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		DataChartDescriptionCoreModule.register(context);
		CategoryXAxisDescriptionMetadata.register(context);
		NumericYAxisDescriptionMetadata.register(context);
		FinancialPriceSeriesDescriptionMetadata.register(context);
	}
}


