/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum specifying oversweep shapes.
 */
export enum RadialGaugeScaleOversweepShape {
	/**
	 * A default oversweep shape.
	 */
	Auto = 0,
	/**
	 * A circular oversweep shape.
	 */
	Circular = 1,
	/**
	 * A fitted oversweep shape.
	 */
	Fitted = 2
}

/**
 * @hidden 
 */
export let RadialGaugeScaleOversweepShape_$type = markEnum('RadialGaugeScaleOversweepShape', 'Auto,0|Circular,1|Fitted,2');


