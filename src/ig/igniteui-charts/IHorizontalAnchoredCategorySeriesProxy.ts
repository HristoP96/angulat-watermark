/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { CategoryMode } from "./CategoryMode";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IHorizontalAnchoredCategorySeriesProxy { 
	matchesType(series: Series): boolean;
setValueMemberPath(series: Series, valueMemberPath: string): void;
setXAxis(series: Series, xAxis: CategoryAxisBase): void;
setYAxis(series: Series, yAxis: NumericYAxis): void;
setCategoryMode(series: Series, mode1: CategoryMode): void;
}

/**
 * @hidden 
 */
export let IHorizontalAnchoredCategorySeriesProxy_$type = new Type(null, 'IHorizontalAnchoredCategorySeriesProxy');


