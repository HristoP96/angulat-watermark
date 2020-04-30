/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, Type, markType } from "igniteui-core/type";
import { IPreparesCategoryTrendline, IPreparesCategoryTrendline_$type } from "./IPreparesCategoryTrendline";
import { IHasCategoryTrendline } from "./IHasCategoryTrendline";
import { PreparationParams } from "./PreparationParams";
import { ValuesHolder } from "./ValuesHolder";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";

/**
 * @hidden 
 */
export class DefaultCategoryTrendlinePreparer extends Base implements IPreparesCategoryTrendline {
	static $t: Type = markType(DefaultCategoryTrendlinePreparer, 'DefaultCategoryTrendlinePreparer', (<any>Base).$type, [IPreparesCategoryTrendline_$type]);
	prepareLine(trendlineHost: IHasCategoryTrendline, p: PreparationParams, h: ValuesHolder, offset: number): void {
	}
	prepareLineCore(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams): void {
	}
}


