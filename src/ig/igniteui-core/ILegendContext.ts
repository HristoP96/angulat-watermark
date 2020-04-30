/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type } from "./type";
import { Brush } from "./Brush";

/**
 * @hidden 
 */
export interface ILegendContext { 
	readonly itemLabel: any;
readonly legendLabel: any;
readonly series: any;
readonly itemBrush: Brush;
readonly actualItemBrush: Brush;
readonly item: any;
}

/**
 * @hidden 
 */
export let ILegendContext_$type = new Type(null, 'ILegendContext');


