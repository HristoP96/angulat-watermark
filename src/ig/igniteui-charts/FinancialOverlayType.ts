/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of marker than can be displayed by default by series with markers.
 */
export enum FinancialOverlayType {
	/**
	 * Bollinger bands overlay.
	 */
	BollingerBands = 0,
	/**
	 * Price channel overlay.
	 */
	PriceChannel = 1
}

/**
 * @hidden 
 */
export let FinancialOverlayType_$type = markEnum('FinancialOverlayType', 'BollingerBands,0|PriceChannel,1');


