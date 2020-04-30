/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * The row type.
 */
export enum DataSourceRowType {
	/**
	 * Normal row
	 */
	Normal = 0,
	/**
	 * Section header
	 */
	SectionHeader = 1,
	/**
	 * Section footer
	 */
	SectionFooter = 2,
	/**
	 * A shited row
	 */
	ShiftedRow = 3,
	/**
	 * A summary row at the root level
	 */
	SummaryRowRoot = 4,
	/**
	 * A summary row at the section level
	 */
	SummaryRowSection = 5,
	/**
	 * Custom
	 */
	Custom = 6
}

/**
 * @hidden 
 */
export let DataSourceRowType_$type = markEnum('DataSourceRowType', 'Normal,0|SectionHeader,1|SectionFooter,2|ShiftedRow,3|SummaryRowRoot,4|SummaryRowSection,5|Custom,6');


