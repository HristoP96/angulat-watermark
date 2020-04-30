/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { NumericAngleAxisDescriptionMetadata } from "./NumericAngleAxisDescriptionMetadata";
import { NumericRadiusAxisDescriptionMetadata } from "./NumericRadiusAxisDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartPolarSeriesDescriptionCoreModule extends Base {
	static $t: Type = markType(DataChartPolarSeriesDescriptionCoreModule, 'DataChartPolarSeriesDescriptionCoreModule');
	static register(context: TypeDescriptionContext): void {
		DataChartDescriptionCoreModule.register(context);
		NumericAngleAxisDescriptionMetadata.register(context);
		NumericRadiusAxisDescriptionMetadata.register(context);
	}
}


