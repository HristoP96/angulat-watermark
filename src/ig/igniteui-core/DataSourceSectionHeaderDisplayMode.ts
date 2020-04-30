/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Enumerates possible display modes for section headers.
 */
export enum DataSourceSectionHeaderDisplayMode {
	/**
	 * Each group is preceded by a single section header that combines multiple groups into one.
	 */
	Combined = 0,
	/**
	 * Each group may be preceded by multiple section headers, one for each group.
	 */
	Split = 1
}

/**
 * @hidden 
 */
export let DataSourceSectionHeaderDisplayMode_$type = markEnum('DataSourceSectionHeaderDisplayMode', 'Combined,0|Split,1');


