/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IHasTrendline, IHasTrendline_$type } from "./IHasTrendline";
import { Type, Point, IList$1, IList$1_$type, Base } from "igniteui-core/type";
import { PreparationParams } from "./PreparationParams";
import { ValuesHolder } from "./ValuesHolder";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";

/**
 * @hidden 
 */
export interface IHasCategoryTrendline extends IHasTrendline { 
	readonly trendlinePreparer: IPreparesCategoryTrendline;
readonly trendLinePeriod: number;
readonly isVertical: boolean;
}

/**
 * @hidden 
 */
export let IHasCategoryTrendline_$type = new Type(null, 'IHasCategoryTrendline', null, [IHasTrendline_$type]);

/**
 * @hidden 
 */
export interface IPreparesCategoryTrendline { 
	prepareLine(trendlineHost: IHasCategoryTrendline, p: PreparationParams, h: ValuesHolder, offset: number): void;
prepareLineCore(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams): void;
}

/**
 * @hidden 
 */
export let IPreparesCategoryTrendline_$type = new Type(null, 'IPreparesCategoryTrendline');


