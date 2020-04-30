/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { GeographicMapShapeSeriesDescriptionCoreModule } from "./GeographicMapShapeSeriesDescriptionCoreModule";
import { GeographicShapeSeriesDescriptionMetadata } from "./GeographicShapeSeriesDescriptionMetadata";
import { GeographicPolylineSeriesDescriptionMetadata } from "./GeographicPolylineSeriesDescriptionMetadata";
import { GeographicContourLineSeriesDescriptionMetadata } from "./GeographicContourLineSeriesDescriptionMetadata";
import { GeographicScatterAreaSeriesDescriptionMetadata } from "./GeographicScatterAreaSeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicMapShapeSeriesDescriptionModule extends Base {
	static $t: Type = markType(GeographicMapShapeSeriesDescriptionModule, 'GeographicMapShapeSeriesDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		GeographicMapShapeSeriesDescriptionCoreModule.register(context);
		GeographicShapeSeriesDescriptionMetadata.register(context);
		GeographicPolylineSeriesDescriptionMetadata.register(context);
		GeographicContourLineSeriesDescriptionMetadata.register(context);
		GeographicScatterAreaSeriesDescriptionMetadata.register(context);
	}
}


