/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { PriceDisplayType } from "./PriceDisplayType";
import { CategoryMode } from "./CategoryMode";
import { Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IFinancialPriceSeriesProxy { 
	setOpenMemberPath(priceSeries: Series, v: string): void;
setHighMemberPath(priceSeries: Series, v: string): void;
setLowMemberPath(priceSeries: Series, v: string): void;
setCloseMemberPath(priceSeries: Series, v: string): void;
setVolumeMemberPath(priceSeries: Series, v: string): void;
setXAxis(priceSeries: Series, xAxis: CategoryAxisBase): void;
setYAxis(priceSeries: Series, yAxis: NumericYAxis): void;
setDisplayType(priceSeries: Series, priceDisplayType: PriceDisplayType): void;
setCategoryMode(priceSeries: Series, mode1: CategoryMode): void;
matchesType(ss: Series): boolean;
getOpenMemberPath(financialSeries: Series): string;
getHighMemberPath(financialSeries: Series): string;
getLowMemberPath(financialSeries: Series): string;
getCloseMemberPath(financialSeries: Series): string;
getVolumeMemberPath(financialSeries: Series): string;
}

/**
 * @hidden 
 */
export let IFinancialPriceSeriesProxy_$type = new Type(null, 'IFinancialPriceSeriesProxy');


