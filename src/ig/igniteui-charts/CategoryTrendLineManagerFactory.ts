/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType, TypeRegistrar, NotSupportedException } from "igniteui-core/type";
import { ITrendLineManager } from "./ITrendLineManager";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Canvas } from "igniteui-core/Canvas";
import { Series } from "./Series";
import { SRProvider } from "igniteui-core/SRProvider";
import { List$1 } from "igniteui-core/List$1";
import { CategoryTrendLineManagerBase } from "./CategoryTrendLineManagerBase";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Rect } from "igniteui-core/Rect";
import { SortingTrendLineManager } from "./SortingTrendLineManager";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { CategoryTrendLineManager } from "./CategoryTrendLineManager";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { TrendLineManagerType } from "./TrendLineManagerType";

/**
 * @hidden 
 */
export class CategoryTrendLineManagerFactory extends Base {
	static $t: Type = markType(CategoryTrendLineManagerFactory, 'CategoryTrendLineManagerFactory');
	static selectManager(trendLineManager: ITrendLineManager, xAxis: CategoryAxisBase, rootCanvas: Canvas, series: Series, sr: SRProvider): ITrendLineManager {
		if (xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, xAxis) !== null) {
			if (trendLineManager != null) {
				trendLineManager.detach();
			}
			if (!TypeRegistrar.isRegistered("SortingTrendLineManager")) {
				throw new NotSupportedException(1, sr.dataChart_TrendLinesNotLoaded);
			}
			let newManager: ITrendLineManager = <ITrendLineManager><any>TypeRegistrar.create("SortingTrendLineManager", <(arg1: number) => number>((x: number) => {
				let sortedIndex: number = x;
				let axis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xAxis);
				if (axis != null) {
					x = Math.min(x, axis.sortedIndices.count - 1);
					sortedIndex = axis.sortedIndices._inner[x];
				}
				return axis.getUnscaledValueAt(sortedIndex);
			}), <(arg1: number, arg2: Rect, arg3: Rect) => number>((x: number, viewport: Rect, window: Rect) => {
				let effectiveViewportRect: Rect = series.getEffectiveViewport1(series.view);
				let xParams: ScalerParams = new ScalerParams(0, window, viewport, xAxis.isInverted, effectiveViewportRect);
				return xAxis.getUnscaledValue(x, xParams);
			}));
			newManager.attachPolyLine(rootCanvas, series);
			return newManager;
		} else if (trendLineManager == null || trendLineManager.managerType != TrendLineManagerType.Category) {
			if (trendLineManager != null) {
				trendLineManager.detach();
			}
			if (!TypeRegistrar.isRegistered("CategoryTrendLineManager")) {
				throw new NotSupportedException(1, sr.dataChart_TrendLinesNotLoaded);
			}
			let newManager1: ITrendLineManager = <ITrendLineManager><any>TypeRegistrar.create("CategoryTrendLineManager");
			newManager1.attachPolyLine(rootCanvas, series);
			return newManager1;
		}
		return trendLineManager;
	}
}


