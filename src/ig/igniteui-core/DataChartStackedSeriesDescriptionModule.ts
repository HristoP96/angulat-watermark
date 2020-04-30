/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartCategorySeriesDescriptionCoreModule } from "./DataChartCategorySeriesDescriptionCoreModule";
import { StackedColumnSeriesDescriptionMetadata } from "./StackedColumnSeriesDescriptionMetadata";
import { StackedAreaSeriesDescriptionMetadata } from "./StackedAreaSeriesDescriptionMetadata";
import { StackedLineSeriesDescriptionMetadata } from "./StackedLineSeriesDescriptionMetadata";
import { StackedBarSeriesDescriptionMetadata } from "./StackedBarSeriesDescriptionMetadata";
import { StackedSplineSeriesDescriptionMetadata } from "./StackedSplineSeriesDescriptionMetadata";
import { StackedSplineAreaSeriesDescriptionMetadata } from "./StackedSplineAreaSeriesDescriptionMetadata";
import { Stacked100ColumnSeriesDescriptionMetadata } from "./Stacked100ColumnSeriesDescriptionMetadata";
import { Stacked100AreaSeriesDescriptionMetadata } from "./Stacked100AreaSeriesDescriptionMetadata";
import { Stacked100LineSeriesDescriptionMetadata } from "./Stacked100LineSeriesDescriptionMetadata";
import { Stacked100BarSeriesDescriptionMetadata } from "./Stacked100BarSeriesDescriptionMetadata";
import { Stacked100SplineSeriesDescriptionMetadata } from "./Stacked100SplineSeriesDescriptionMetadata";
import { Stacked100SplineAreaSeriesDescriptionMetadata } from "./Stacked100SplineAreaSeriesDescriptionMetadata";
import { StackedFragmentSeriesDescriptionMetadata } from "./StackedFragmentSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartStackedSeriesDescriptionModule extends Base {
	static $t: Type = markType(DataChartStackedSeriesDescriptionModule, 'DataChartStackedSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		DataChartCategorySeriesDescriptionCoreModule.register(context);
		StackedColumnSeriesDescriptionMetadata.register(context);
		StackedAreaSeriesDescriptionMetadata.register(context);
		StackedLineSeriesDescriptionMetadata.register(context);
		StackedBarSeriesDescriptionMetadata.register(context);
		StackedSplineSeriesDescriptionMetadata.register(context);
		StackedSplineAreaSeriesDescriptionMetadata.register(context);
		Stacked100ColumnSeriesDescriptionMetadata.register(context);
		Stacked100AreaSeriesDescriptionMetadata.register(context);
		Stacked100LineSeriesDescriptionMetadata.register(context);
		Stacked100BarSeriesDescriptionMetadata.register(context);
		Stacked100SplineSeriesDescriptionMetadata.register(context);
		Stacked100SplineAreaSeriesDescriptionMetadata.register(context);
		StackedFragmentSeriesDescriptionMetadata.register(context);
	}
}


