/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { NumericYAxisDescriptionMetadata } from "./NumericYAxisDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartCategorySeriesDescriptionCoreModule extends Base {
	static $t: Type = markType(DataChartCategorySeriesDescriptionCoreModule, 'DataChartCategorySeriesDescriptionCoreModule');
	static register(context: TypeDescriptionContext): void {
		DataChartDescriptionCoreModule.register(context);
		HorizontalAnchoredCategorySeriesDescriptionMetadata.register(context);
		CategoryXAxisDescriptionMetadata.register(context);
		NumericYAxisDescriptionMetadata.register(context);
	}
}


