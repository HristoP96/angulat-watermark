/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumeration of preset needle shapes.
 */
export enum LinearGraphNeedleShape {
	/**
	 * A custom user defined needle shape.
	 */
	Custom = 0,
	/**
	 * A needle shaped like a rectangle.
	 */
	Rectangle = 1,
	/**
	 * A needle shaped like a triangle.
	 */
	Triangle = 2,
	/**
	 * A needle shaped like a needle.
	 */
	Needle = 3,
	/**
	 * A needle shaped like a trapezoid.
	 */
	Trapezoid = 4
}

/**
 * @hidden 
 */
export let LinearGraphNeedleShape_$type = markEnum('LinearGraphNeedleShape', 'Custom,0|Rectangle,1|Triangle,2|Needle,3|Trapezoid,4');


