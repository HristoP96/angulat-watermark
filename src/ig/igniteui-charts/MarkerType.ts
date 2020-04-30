/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of marker than can be displayed by default by series with markers.
 */
export enum MarkerType {
	/**
	 * Marker hasn't been set.
	 */
	Unset = 0,
	/**
	 * No markerItems.
	 */
	None = 1,
	/**
	 * Automatic marker shape.
	 */
	Automatic = 2,
	/**
	 * Circle marker shape.
	 */
	Circle = 3,
	/**
	 * Flat-top triangle marker shape.
	 */
	Triangle = 4,
	/**
	 * Flat-base triangle marker shape.
	 */
	Pyramid = 5,
	/**
	 * Square marker shape.
	 */
	Square = 6,
	/**
	 * Diamond marker shape.
	 */
	Diamond = 7,
	/**
	 * Pentagon marker shape. 
	 */
	Pentagon = 8,
	/**
	 * Hexagon marker shape. 
	 */
	Hexagon = 9,
	/**
	 * Four-pointed star marker shape.
	 */
	Tetragram = 10,
	/**
	 * Five-pointed star marker shape.
	 */
	Pentagram = 11,
	/**
	 * Six-pointed star marker shape.
	 */
	Hexagram = 12,
	/**
	 * Renders transparent circular markers.
	 */
	Hidden = 13
}

/**
 * @hidden 
 */
export let MarkerType_$type = markEnum('MarkerType', 'Unset,0|None,1|Automatic,2|Circle,3|Triangle,4|Pyramid,5|Square,6|Diamond,7|Pentagon,8|Hexagon,9|Tetragram,10|Pentagram,11|Hexagram,12|Hidden,13');


