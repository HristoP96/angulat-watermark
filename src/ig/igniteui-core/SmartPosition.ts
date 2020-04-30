/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available positions for smart label placement with respect to the notional rectangle's
 * origin
 */
export enum SmartPosition {
	/**
	 * Specifies left top as a valid smart placement position.
	 */
	LeftTop = 0,
	/**
	 * Specifies center top as a valid smart placement position.
	 */
	CenterTop = 1,
	/**
	 * Specifies right top as a valid smart placement position.
	 */
	RightTop = 2,
	/**
	 * Specifies left center as a valid smart placement position.
	 */
	LeftCenter = 3,
	/**
	 * Specifies center center as a valid smart placement position.
	 */
	CenterCenter = 4,
	/**
	 * Specifies right center as a valid smart placement position.
	 */
	RightCenter = 5,
	/**
	 * Specifies left bottom as a valid smart placement position.
	 */
	LeftBottom = 6,
	/**
	 * Specifies center bottom as a valid smart placement position.
	 */
	CenterBottom = 7,
	/**
	 * Specifies right bottom as a valid smart placement position.
	 */
	RightBottom = 8
}

/**
 * @hidden 
 */
export let SmartPosition_$type = markEnum('SmartPosition', 'LeftTop,0|CenterTop,1|RightTop,2|LeftCenter,3|CenterCenter,4|RightCenter,5|LeftBottom,6|CenterBottom,7|RightBottom,8');


