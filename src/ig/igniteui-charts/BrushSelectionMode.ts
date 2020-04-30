/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available behaviors of selecting a brush from a brush collection.
 */
export enum BrushSelectionMode {
	/**
	 * alternates between brushes sequentially.
	 */
	Select = 0,
	/**
	 * Uses index-based interpolation.
	 */
	Interpolate = 1
}

/**
 * @hidden 
 */
export let BrushSelectionMode_$type = markEnum('BrushSelectionMode', 'Select,0|Interpolate,1');


