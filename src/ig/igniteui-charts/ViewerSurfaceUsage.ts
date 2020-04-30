/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumeration of options for the usage of the surface.
 */
export enum ViewerSurfaceUsage {
	/**
	 * Normal surface usage.
	 */
	Normal = 0,
	/**
	 * Minimal surface usage.
	 */
	Minimal = 1
}

/**
 * @hidden 
 */
export let ViewerSurfaceUsage_$type = markEnum('ViewerSurfaceUsage', 'Normal,0|Minimal,1');


