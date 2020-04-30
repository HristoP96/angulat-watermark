/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

export enum SortIndicatorStyle {
	/**
	 * The sort indicator is rendered as a single arrow that points in the direction of the sort.
	 */
	Default = 0,
	/**
	 * The sort indicator is rendered as two arrows pointing opposite of each other.  The direction of the sort determines which arrow
	 * is faded and which is fully opaque.
	 */
	FadingUpDownArrows = 1,
	/**
	 * The sort indicator is rendered as two arrows without the stem, one ontop of the other.  The direction of the sort determines which arrow
	 * is faded and which is fully opaque.
	 */
	FadingSimpleUpDownArrows = 2,
	/**
	 * No style is set.
	 */
	Unset = 3
}

/**
 * @hidden 
 */
export let SortIndicatorStyle_$type = markEnum('SortIndicatorStyle', 'Default,0|FadingUpDownArrows,1|FadingSimpleUpDownArrows,2|Unset,3');


