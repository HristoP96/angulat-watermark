/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available actions that can cause a DataSource event. 
 */
export enum FastItemsSourceEventAction {
	/**
	 * One or more rows were removed from the data source.
	 */
	Remove = 0,
	/**
	 * One or more rows were added to the data source.
	 */
	Insert = 1,
	/**
	 * One or more rows were replaced in the data source.
	 */
	Replace = 2,
	/**
	 * An item property value changed in the data source.
	 */
	Change = 3,
	/**
	 * The entire data source contents were reset.
	 */
	Reset = 4
}

/**
 * @hidden 
 */
export let FastItemsSourceEventAction_$type = markEnum('FastItemsSourceEventAction', 'Remove,0|Insert,1|Replace,2|Change,3|Reset,4');


