/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IChartLegend, IChartLegend_$type } from "./IChartLegend";
import { List$1 } from "./List$1";
import { UIElement } from "./UIElement";
import { ILegendSeries } from "./ILegendSeries";
import { Type } from "./type";

/**
 * @hidden 
 */
export interface IChartItemLegend extends IChartLegend { 
	createItemwiseLegendItems(legendItems: List$1<UIElement>, series: ILegendSeries): void;
renderItemwiseContent(bubbleSeries: ILegendSeries): void;
createLegendItemsInsert(legendItems: List$1<UIElement>, ringSeries: ILegendSeries): void;
}

/**
 * @hidden 
 */
export let IChartItemLegend_$type = new Type(null, 'IChartItemLegend', null, [IChartLegend_$type]);


