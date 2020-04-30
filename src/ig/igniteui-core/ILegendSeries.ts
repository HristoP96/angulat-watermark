/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ILegendOwner } from "./ILegendOwner";
import { Base, Type } from "./type";

/**
 * @hidden 
 */
export interface ILegendSeries { 
	readonly container: ILegendOwner;
resolveLegendIndex(): number;
readonly isStacked: boolean;
readonly isVertical: boolean;
readonly isUsableInLegend: boolean;
readonly name: string;
readonly hasSubItems: boolean;
forSubItems(action: (arg1: any) => void): void;
readonly hasMarkers: boolean;
}

/**
 * @hidden 
 */
export let ILegendSeries_$type = new Type(null, 'ILegendSeries');


