/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ILegendSeries, ILegendSeries_$type } from "./ILegendSeries";
import { Brush } from "./Brush";
import { IChartLegend } from "./IChartLegend";
import { Base, Type } from "./type";

/**
 * @hidden 
 */
export interface IScaleLegendSeries extends ILegendSeries { 
	isAttachedTo(legend: IChartLegend): boolean;
readonly legendReady: boolean;
readonly minScaleText: string;
readonly maxScaleText: string;
readonly actualMarkerBrush: Brush;
forScaleColors(action: (arg1: Brush, arg2: number) => void): boolean;
}

/**
 * @hidden 
 */
export let IScaleLegendSeries_$type = new Type(null, 'IScaleLegendSeries', null, [ILegendSeries_$type]);


