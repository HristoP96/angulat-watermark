/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Indicates the vertica position of an item relative to another object.
 */
export enum VerticalAlignment {
	/**
	 * Align the item to the top
	 */
	Top = 0,
	/**
	 * Center the item
	 */
	Center = 1,
	/**
	 * Align the item to the bottom
	 */
	Bottom = 2,
	/**
	 * Stretch the item to the full height
	 */
	Stretch = 3
}

/**
 * @hidden 
 */
export let VerticalAlignment_$type = markEnum('VerticalAlignment', 'Top,0|Center,1|Bottom,2|Stretch,3');


