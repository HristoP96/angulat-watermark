/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { DataChartScatterSeriesDescriptionCoreModule } from "./DataChartScatterSeriesDescriptionCoreModule";
import { ScatterSeriesDescriptionMetadata } from "./ScatterSeriesDescriptionMetadata";
import { ScatterLineSeriesDescriptionMetadata } from "./ScatterLineSeriesDescriptionMetadata";
import { ScatterSplineSeriesDescriptionMetadata } from "./ScatterSplineSeriesDescriptionMetadata";
import { BubbleSeriesDescriptionMetadata } from "./BubbleSeriesDescriptionMetadata";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescriptionMetadata } from "./CustomPaletteColorScaleDescriptionMetadata";

/**
 * @hidden 
 */
export class DataChartScatterSeriesDescriptionModule extends Base {
	static $t: Type = markType(DataChartScatterSeriesDescriptionModule, 'DataChartScatterSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		DataChartScatterSeriesDescriptionCoreModule.register(context);
		ScatterSeriesDescriptionMetadata.register(context);
		ScatterLineSeriesDescriptionMetadata.register(context);
		ScatterSplineSeriesDescriptionMetadata.register(context);
		BubbleSeriesDescriptionMetadata.register(context);
		SizeScaleDescriptionMetadata.register(context);
		ColorScaleDescriptionMetadata.register(context);
		CustomPaletteColorScaleDescriptionMetadata.register(context);
	}
}


