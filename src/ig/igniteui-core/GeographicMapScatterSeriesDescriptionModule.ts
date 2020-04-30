/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { GeographicMapScatterSeriesDescriptionCoreModule } from "./GeographicMapScatterSeriesDescriptionCoreModule";
import { GeographicSymbolSeriesDescriptionMetadata } from "./GeographicSymbolSeriesDescriptionMetadata";
import { GeographicProportionalSymbolSeriesDescriptionMetadata } from "./GeographicProportionalSymbolSeriesDescriptionMetadata";
import { GeographicHighDensityScatterSeriesDescriptionMetadata } from "./GeographicHighDensityScatterSeriesDescriptionMetadata";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescriptionMetadata } from "./CustomPaletteColorScaleDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicMapScatterSeriesDescriptionModule extends Base {
	static $t: Type = markType(GeographicMapScatterSeriesDescriptionModule, 'GeographicMapScatterSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		GeographicMapScatterSeriesDescriptionCoreModule.register(context);
		GeographicSymbolSeriesDescriptionMetadata.register(context);
		GeographicProportionalSymbolSeriesDescriptionMetadata.register(context);
		GeographicHighDensityScatterSeriesDescriptionMetadata.register(context);
		SizeScaleDescriptionMetadata.register(context);
		ColorScaleDescriptionMetadata.register(context);
		CustomPaletteColorScaleDescriptionMetadata.register(context);
	}
}


