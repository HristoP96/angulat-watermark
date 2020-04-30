/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Rect } from "igniteui-core/Rect";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IAngleScaler { 
	getScaledAngle(unscaledAngle: number): number;
getUnscaledAngle(scaledAngle: number): number;
getMinMaxAngle(windowRect: Rect, minAngle: number, maxAngle: number): { p1: number; p2: number; };
}

/**
 * @hidden 
 */
export let IAngleScaler_$type = new Type(null, 'IAngleScaler');


