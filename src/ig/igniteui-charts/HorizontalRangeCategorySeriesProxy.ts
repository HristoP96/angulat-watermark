/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { IHorizontalRangeCategorySeriesProxy, IHorizontalRangeCategorySeriesProxy_$type } from "./IHorizontalRangeCategorySeriesProxy";
import { Series } from "./Series";
import { HorizontalRangeCategorySeries } from "./HorizontalRangeCategorySeries";
import { RangeCategorySeries } from "./RangeCategorySeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";

/**
 * @hidden 
 */
export class HorizontalRangeCategorySeriesProxy extends Base implements IHorizontalRangeCategorySeriesProxy {
	static $t: Type = markType(HorizontalRangeCategorySeriesProxy, 'HorizontalRangeCategorySeriesProxy', (<any>Base).$type, [IHorizontalRangeCategorySeriesProxy_$type]);
	matchesType(series: Series): boolean {
		return typeCast<HorizontalRangeCategorySeries>((<any>HorizontalRangeCategorySeries).$type, series) !== null;
	}
	setHighMemberPath(series: Series, highMemberPath: string): void {
		(<HorizontalRangeCategorySeries>series).highMemberPath = highMemberPath;
	}
	setLowMemberPath(series: Series, lowMemberPath: string): void {
		(<HorizontalRangeCategorySeries>series).lowMemberPath = lowMemberPath;
	}
	setXAxis(series: Series, xAxis: CategoryAxisBase): void {
		(<HorizontalRangeCategorySeries>series).xAxis = xAxis;
	}
	setYAxis(series: Series, yAxis: NumericYAxis): void {
		(<HorizontalRangeCategorySeries>series).yAxis = yAxis;
	}
}


