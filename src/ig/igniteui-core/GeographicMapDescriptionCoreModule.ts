/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { GeographicMapDescriptionMetadata } from "./GeographicMapDescriptionMetadata";
import { BingMapsMapImageryDescriptionMetadata } from "./BingMapsMapImageryDescriptionMetadata";
import { OpenStreetMapImageryDescriptionMetadata } from "./OpenStreetMapImageryDescriptionMetadata";
import { CustomMapImageryDescriptionMetadata } from "./CustomMapImageryDescriptionMetadata";
import { ShapeDataSourceDescriptionMetadata } from "./ShapeDataSourceDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicMapDescriptionCoreModule extends Base {
	static $t: Type = markType(GeographicMapDescriptionCoreModule, 'GeographicMapDescriptionCoreModule');
	static register(context: TypeDescriptionContext): void {
		GeographicMapDescriptionMetadata.register(context);
		BingMapsMapImageryDescriptionMetadata.register(context);
		OpenStreetMapImageryDescriptionMetadata.register(context);
		CustomMapImageryDescriptionMetadata.register(context);
		ShapeDataSourceDescriptionMetadata.register(context);
	}
}


