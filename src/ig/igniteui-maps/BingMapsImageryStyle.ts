/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available map styles for the Bing Maps imagery.
 */
export enum BingMapsImageryStyle {
	/**
	 * Specifies the Aerial map style without road or labels overlay.
	 */
	Aerial = 0,
	/**
	 * Specifies the Aerial map style with road and labels overlay.
	 */
	AerialWithLabels = 1,
	/**
	 * Specifies the Roads map style without aerial overlay.
	 */
	Road = 2
}

/**
 * @hidden 
 */
export let BingMapsImageryStyle_$type = markEnum('BingMapsImageryStyle', 'Aerial,0|AerialWithLabels,1|Road,2');


