/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Point, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IPolarRadialRenderingParameters { 
	minLength: number;
maxLength: number;
center: Point;
minAngle: number;
maxAngle: number;
crossingAngleRadians: number;
effectiveMaximum: number;
}

/**
 * @hidden 
 */
export let IPolarRadialRenderingParameters_$type = new Type(null, 'IPolarRadialRenderingParameters');


