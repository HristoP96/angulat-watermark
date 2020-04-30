/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { Brush } from "igniteui-core/Brush";
import { IndicatorDisplayType } from "./IndicatorDisplayType";
import { Base, EventArgs, Type } from "igniteui-core/type";

/**
 * @hidden 
 */
export interface IIndicatorProxy { 
	setXAxis(indicator: Series, categoryAxisBase: CategoryAxisBase): void;
setYAxis(indicator: Series, numericYAxis: NumericYAxis): void;
setOpenMemberPath(indicator: Series, p: string): void;
setHighMemberPath(indicator: Series, p: string): void;
setLowMemberPath(indicator: Series, p: string): void;
setCloseMemberPath(indicator: Series, p: string): void;
setVolumeMemberPath(indicator: Series, p: string): void;
setNegativeBrush(indicator: Series, brush: Brush): void;
setDisplayType(indicator: Series, indicatorDisplayType: IndicatorDisplayType): void;
matchesType(series: Series): boolean;
setPeriodOverride(series: Series, indicatorPeriod: number): void;
setSmoothingPeriod(series: Series, indicatorSmoothingPeriod: number): void;
setShortPeriod(series: Series, indicatorShortPeriod: number): void;
setLongPeriod(series: Series, indicatorLongPeriod: number): void;
setSignalPeriod(series: Series, indicatorSignalPeriod: number): void;
handleCustomIndicatorEvent(indicator: Series, handler: (sender: any, e: EventArgs) => void): void;
}

/**
 * @hidden 
 */
export let IIndicatorProxy_$type = new Type(null, 'IIndicatorProxy');


