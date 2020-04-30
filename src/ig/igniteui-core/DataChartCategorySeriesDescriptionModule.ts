/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartCategorySeriesDescriptionCoreModule } from "./DataChartCategorySeriesDescriptionCoreModule";
import { AreaSeriesDescriptionMetadata } from "./AreaSeriesDescriptionMetadata";
import { SplineAreaSeriesDescriptionMetadata } from "./SplineAreaSeriesDescriptionMetadata";
import { LineSeriesDescriptionMetadata } from "./LineSeriesDescriptionMetadata";
import { SplineSeriesDescriptionMetadata } from "./SplineSeriesDescriptionMetadata";
import { PointSeriesDescriptionMetadata } from "./PointSeriesDescriptionMetadata";
import { ColumnSeriesDescriptionMetadata } from "./ColumnSeriesDescriptionMetadata";
import { StepLineSeriesDescriptionMetadata } from "./StepLineSeriesDescriptionMetadata";
import { StepAreaSeriesDescriptionMetadata } from "./StepAreaSeriesDescriptionMetadata";
import { WaterfallSeriesDescriptionMetadata } from "./WaterfallSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartCategorySeriesDescriptionModule extends Base {
	static $t: Type = markType(DataChartCategorySeriesDescriptionModule, 'DataChartCategorySeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		DataChartCategorySeriesDescriptionCoreModule.register(context);
		AreaSeriesDescriptionMetadata.register(context);
		SplineAreaSeriesDescriptionMetadata.register(context);
		LineSeriesDescriptionMetadata.register(context);
		SplineSeriesDescriptionMetadata.register(context);
		PointSeriesDescriptionMetadata.register(context);
		ColumnSeriesDescriptionMetadata.register(context);
		StepLineSeriesDescriptionMetadata.register(context);
		StepAreaSeriesDescriptionMetadata.register(context);
		WaterfallSeriesDescriptionMetadata.register(context);
	}
}


