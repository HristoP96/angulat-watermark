/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export const enum ZoomSliderVisualArea {
	LowerThumb = 0,
	HigherThumb = 1,
	LowerShade = 2,
	HigherShade = 3,
	RangeThumb = 4,
	Bar = 5,
	None = 6
}

/**
 * @hidden 
 */
export let ZoomSliderVisualArea_$type = markEnum('ZoomSliderVisualArea', 'LowerThumb,0|HigherThumb,1|LowerShade,2|HigherShade,3|RangeThumb,4|Bar,5|None,6');


