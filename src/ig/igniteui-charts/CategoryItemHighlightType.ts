/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available shapes for a category item highlight.
 */
export enum CategoryItemHighlightType {
	/**
	 * The default depends on the series being highlighted.
	 */
	Auto = 0,
	/**
	 * The highlight should use a marker shape.
	 */
	Marker = 1,
	/**
	 * The highlight should use a filled band shape.
	 */
	Shape = 2
}

/**
 * @hidden 
 */
export let CategoryItemHighlightType_$type = markEnum('CategoryItemHighlightType', 'Auto,0|Marker,1|Shape,2');


