/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the desired vertical alignment of the cell content.
 */
export enum CellContentVerticalAlignment {
	/**
	 * Align top.
	 */
	Top = 0,
	/**
	 * Align center.
	 */
	Center = 1,
	/**
	 * Align bottom.
	 */
	Bottom = 2,
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
export let CellContentVerticalAlignment_$type = markEnum('CellContentVerticalAlignment', 'Top,0|Center,1|Bottom,2|Stretch,3|Auto,4');


