/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum representing a unit of time.
 */
export enum TimeAxisIntervalType {
	/**
	 * Ticks are ten millionths of seconds.
	 */
	Ticks = 0,
	/**
	 * Milliseconds.
	 */
	Milliseconds = 1,
	/**
	 * Seconds.
	 */
	Seconds = 2,
	/**
	 * Minutes.
	 */
	Minutes = 3,
	/**
	 * Hours.
	 */
	Hours = 4,
	/**
	 * Days.
	 */
	Days = 5,
	/**
	 * Weeks.
	 */
	Weeks = 6,
	/**
	 * Months.
	 */
	Months = 7,
	/**
	 * Years.
	 */
	Years = 8
}

/**
 * @hidden 
 */
export let TimeAxisIntervalType_$type = markEnum('TimeAxisIntervalType', 'Ticks,0|Milliseconds,1|Seconds,2|Minutes,3|Hours,4|Days,5|Weeks,6|Months,7|Years,8');


