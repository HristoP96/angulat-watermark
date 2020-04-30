/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Identifies which type of marker is suggested for a data series.
 */
export enum DataSeriesMarker {
	/**
	 * Used when Automatic marker shape is suggested.
	 */
	Automatic = 0,
	/**
	 * Used when no marker is suggested.
	 */
	None = 1,
	/**
	 * Used when Circle marker shape is suggested.
	 */
	Circle = 2,
	/**
	 * Used when Flat-top triangle marker shape is suggested.
	 */
	Triangle = 3,
	/**
	 * Used when Flat-base triangle marker shape is suggested.
	 */
	Pyramid = 4,
	/**
	 * Used when Square marker shape is suggested.
	 */
	Square = 5,
	/**
	 * Used when Diamond marker shape is suggested.
	 */
	Diamond = 6,
	/**
	 * Used when Pentagon marker shape is suggested.
	 */
	Pentagon = 7,
	/**
	 * Used when Hexagon marker shape is suggested.
	 */
	Hexagon = 8,
	/**
	 * Used when Four-pointed star marker shape is suggested.
	 */
	Tetragram = 9,
	/**
	 * Used when Five-pointed star marker shape is suggested.
	 */
	Pentagram = 10,
	/**
	 * Used when Six-pointed star marker shape is suggested.
	 */
	Hexagram = 11,
	/**
	 * Used when a hidden marker is suggested.
	 */
	Hidden = 12
}

/**
 * @hidden 
 */
export let DataSeriesMarker_$type = markEnum('DataSeriesMarker', 'Automatic,0|None,1|Circle,2|Triangle,3|Pyramid,4|Square,5|Diamond,6|Pentagon,7|Hexagon,8|Tetragram,9|Pentagram,10|Hexagram,11|Hidden,12');


