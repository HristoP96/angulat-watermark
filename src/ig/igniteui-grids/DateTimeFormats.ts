/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates some simple date formats to be used.
 */
export enum DateTimeFormats {
	/**
	 * A standard short date format is used.
	 */
	DateShort = 0,
	/**
	 * A standard long date format is used.
	 */
	DateLong = 1,
	/**
	 * A standard short time format is used.
	 */
	TimeShort = 2,
	/**
	 * A standard long time format is used.
	 */
	TimeLong = 3,
	/**
	 * A standard short date/time format is used.
	 */
	DateTimeShort = 4,
	/**
	 * A standard long date/time format is used.
	 */
	DateTimeLong = 5
}

/**
 * @hidden 
 */
export let DateTimeFormats_$type = markEnum('DateTimeFormats', 'DateShort,0|DateLong,1|TimeShort,2|TimeLong,3|DateTimeShort,4|DateTimeLong,5');


