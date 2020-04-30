/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available methods of collision avoidance of category series' markers.
 */
export enum CategorySeriesMarkerCollisionAvoidance {
	/**
	 * Collision avoidance is disabled.
	 */
	None = 0,
	/**
	 * Items colliding with other items will be hidden from view.
	 */
	Omit = 1
}

/**
 * @hidden 
 */
export let CategorySeriesMarkerCollisionAvoidance_$type = markEnum('CategorySeriesMarkerCollisionAvoidance', 'None,0|Omit,1');


