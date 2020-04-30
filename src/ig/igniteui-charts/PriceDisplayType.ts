/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available display types of financial price series.
 */
export enum PriceDisplayType {
	/**
	 * Displays prices as a Japanese Candlestick.
	 */
	Candlestick = 0,
	/**
	 * Displays prices as an OHLC bar. 
	 */
	OHLC = 1
}

/**
 * @hidden 
 */
export let PriceDisplayType_$type = markEnum('PriceDisplayType', 'Candlestick,0|OHLC,1');


