/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the desired horizontal alignment of the cell content.
 */
export enum CellContentHorizontalAlignment {
	/**
	 * Align left.
	 */
	Left = 0,
	/**
	 * Align center.
	 */
	Center = 1,
	/**
	 * Align right.
	 */
	Right = 2,
	/**
	 * Align stretch
	 */
	Stretch = 3,
	/**
	 * Align auto
	 */
	Auto = 4
}

/**
 * @hidden 
 */
export let CellContentHorizontalAlignment_$type = markEnum('CellContentHorizontalAlignment', 'Left,0|Center,1|Right,2|Stretch,3|Auto,4');


