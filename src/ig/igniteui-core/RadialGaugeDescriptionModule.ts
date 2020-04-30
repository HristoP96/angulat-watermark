/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { RadialGaugeDescriptionMetadata } from "./RadialGaugeDescriptionMetadata";
import { RadialGaugeRangeDescriptionMetadata } from "./RadialGaugeRangeDescriptionMetadata";

/**
 * @hidden 
 */
export class RadialGaugeDescriptionModule extends Base {
	static $t: Type = markType(RadialGaugeDescriptionModule, 'RadialGaugeDescriptionModule');
	static register(context: TypeDescriptionContext): void {
		RadialGaugeDescriptionMetadata.register(context);
		RadialGaugeRangeDescriptionMetadata.register(context);
	}
}


