/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum specifying various preset needle shapes.
 */
export enum RadialGaugeNeedleShape {
	/**
	 * No shape.
	 */
	None = 0,
	/**
	 * A rectangle shape.
	 */
	Rectangle = 1,
	/**
	 * A triangle shape.
	 */
	Triangle = 2,
	/**
	 * A needle shape.
	 */
	Needle = 3,
	/**
	 * A trapezoid shape.
	 */
	Trapezoid = 4,
	/**
	 * A rectangle shape with a bulb at the end.
	 */
	RectangleWithBulb = 5,
	/**
	 * A triangle shape with a bulb at the end.
	 */
	TriangleWithBulb = 6,
	/**
	 * A needle shape with a bulb at the end.
	 */
	NeedleWithBulb = 7,
	/**
	 * A trapezoid shape with a bulb at the end.
	 */
	TrapezoidWithBulb = 8
}

/**
 * @hidden 
 */
export let RadialGaugeNeedleShape_$type = markEnum('RadialGaugeNeedleShape', 'None,0|Rectangle,1|Triangle,2|Needle,3|Trapezoid,4|RectangleWithBulb,5|TriangleWithBulb,6|NeedleWithBulb,7|TrapezoidWithBulb,8');


