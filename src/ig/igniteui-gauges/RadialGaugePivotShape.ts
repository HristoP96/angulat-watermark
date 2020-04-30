/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum specifying shapes for the needle pivot.
 */
export enum RadialGaugePivotShape {
	/**
	 * No pivot shape.
	 */
	None = 0,
	/**
	 * A circle shaped pivot.
	 */
	Circle = 1,
	/**
	 * A circle pivot with a hole in it.
	 */
	CircleWithHole = 2,
	/**
	 * A circle pivot overlayed on top of the needle.
	 */
	CircleOverlay = 3,
	/**
	 * A circle pivot with a hole in it overlayed on top of the needle.
	 */
	CircleOverlayWithHole = 4,
	/**
	 * A circle pivot rendered underneath the needle.
	 */
	CircleUnderlay = 5,
	/**
	 * A circle pivot with a hold in it rendered underneath the needle.
	 */
	CircleUnderlayWithHole = 6
}

/**
 * @hidden 
 */
export let RadialGaugePivotShape_$type = markEnum('RadialGaugePivotShape', 'None,0|Circle,1|CircleWithHole,2|CircleOverlay,3|CircleOverlayWithHole,4|CircleUnderlay,5|CircleUnderlayWithHole,6');


