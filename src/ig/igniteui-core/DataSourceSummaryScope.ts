/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Enumerates different calculation modes for summaries in the data source.
 */
export enum DataSourceSummaryScope {
	/**
	 * Summaries are calculated for both the root and section level.
	 */
	Both = 0,
	/**
	 * Summaries are only calculated at the root level.
	 */
	Root = 1,
	/**
	 * Summaries are only calculated at the section level.
	 */
	Sections = 2,
	/**
	 * Summaries are not calculated at all.
	 */
	None = 3
}

/**
 * @hidden 
 */
export let DataSourceSummaryScope_$type = markEnum('DataSourceSummaryScope', 'Both,0|Root,1|Sections,2|None,3');


