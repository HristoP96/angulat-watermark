/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartPolarSeriesDescriptionCoreModule } from "./DataChartPolarSeriesDescriptionCoreModule";
import { PolarScatterSeriesDescriptionMetadata } from "./PolarScatterSeriesDescriptionMetadata";
import { PolarLineSeriesDescriptionMetadata } from "./PolarLineSeriesDescriptionMetadata";
import { PolarAreaSeriesDescriptionMetadata } from "./PolarAreaSeriesDescriptionMetadata";
import { PolarSplineAreaSeriesDescriptionMetadata } from "./PolarSplineAreaSeriesDescriptionMetadata";
import { PolarSplineSeriesDescriptionMetadata } from "./PolarSplineSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartPolarSeriesDescriptionModule extends Base {
	static $t: Type = markType(DataChartPolarSeriesDescriptionModule, 'DataChartPolarSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		DataChartPolarSeriesDescriptionCoreModule.register(context);
		PolarScatterSeriesDescriptionMetadata.register(context);
		PolarLineSeriesDescriptionMetadata.register(context);
		PolarAreaSeriesDescriptionMetadata.register(context);
		PolarSplineAreaSeriesDescriptionMetadata.register(context);
		PolarSplineSeriesDescriptionMetadata.register(context);
	}
}


