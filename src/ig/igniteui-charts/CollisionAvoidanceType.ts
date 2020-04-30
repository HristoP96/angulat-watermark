/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available methods of collision avoidance of series' markers.
 */
export enum CollisionAvoidanceType {
	/**
	 * Collision avoidance is disabled.
	 */
	None = 0,
	/**
	 * Items colliding with other items will be hidden from view.
	 */
	Omit = 1,
	/**
	 * Items colliding with other items will be partially hidden from view by reducing their opacity.
	 */
	Fade = 2,
	/**
	 * Items colliding with other items will be either hidden from view or moved to new positions.
	 */
	OmitAndShift = 3,
	/**
	 * Items colliding with other items will be either partially hidden from view by reducing their opacity, or moved to new positions, or a combination of both.
	 */
	FadeAndShift = 4
}

/**
 * @hidden 
 */
export let CollisionAvoidanceType_$type = markEnum('CollisionAvoidanceType', 'None,0|Omit,1|Fade,2|OmitAndShift,3|FadeAndShift,4');


