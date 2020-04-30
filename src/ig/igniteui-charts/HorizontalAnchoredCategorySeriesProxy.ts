/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { IHorizontalAnchoredCategorySeriesProxy, IHorizontalAnchoredCategorySeriesProxy_$type } from "./IHorizontalAnchoredCategorySeriesProxy";
import { Series } from "./Series";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { CategoryMode } from "./CategoryMode";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";

/**
 * @hidden 
 */
export class HorizontalAnchoredCategorySeriesProxy extends Base implements IHorizontalAnchoredCategorySeriesProxy {
	static $t: Type = markType(HorizontalAnchoredCategorySeriesProxy, 'HorizontalAnchoredCategorySeriesProxy', (<any>Base).$type, [IHorizontalAnchoredCategorySeriesProxy_$type]);
	matchesType(series: Series): boolean {
		return typeCast<HorizontalAnchoredCategorySeries>((<any>HorizontalAnchoredCategorySeries).$type, series) !== null;
	}
	setCategoryMode(series: Series, mode: CategoryMode): void {
		(<HorizontalAnchoredCategorySeries>series).categoryMode = mode;
	}
	setValueMemberPath(series: Series, valueMemberPath: string): void {
		(<HorizontalAnchoredCategorySeries>series).valueMemberPath = valueMemberPath;
	}
	setXAxis(series: Series, xAxis: CategoryAxisBase): void {
		(<HorizontalAnchoredCategorySeries>series).xAxis = xAxis;
	}
	setYAxis(series: Series, yAxis: NumericYAxis): void {
		(<HorizontalAnchoredCategorySeries>series).yAxis = yAxis;
	}
}


