/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { IPreparesCategoryTrendline, IPreparesCategoryTrendline_$type } from "./IPreparesCategoryTrendline";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { IHasCategoryTrendline } from "./IHasCategoryTrendline";
import { PreparationParams } from "./PreparationParams";
import { ValuesHolder } from "./ValuesHolder";
import { Base, IList$1, IList$1_$type, Point, Number_$type, typeCast, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { IScaler } from "./IScaler";
import { ScalerParams } from "./ScalerParams";
import { Series } from "./Series";
import { SingleValuesHolder } from "./SingleValuesHolder";
import { ISortingAxis } from "./ISortingAxis";
import { SafeSortedReadOnlyDoubleCollection } from "./SafeSortedReadOnlyDoubleCollection";
import { IHasTrendline } from "./IHasTrendline";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";

/**
 * @hidden 
 */
export abstract class CategoryTrendLineManagerBase extends TrendLineManagerBase$1<number> implements IPreparesCategoryTrendline {
	static $t: Type = markType(CategoryTrendLineManagerBase, 'CategoryTrendLineManagerBase', (<any>TrendLineManagerBase$1).$type.specialize(Number_$type), [IPreparesCategoryTrendline_$type]);
	constructor() {
		super(Number_$type);
	}
	protected get_managerType(): TrendLineManagerType {
		return TrendLineManagerType.Category;
	}
	get managerType(): TrendLineManagerType {
		return this.get_managerType();
	}
	prepareLine(trendlineHost: IHasCategoryTrendline, p: PreparationParams, h: ValuesHolder, offset: number): void {
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let xParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.scaler.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.yScaler.isInverted, effectiveViewportRect);
		if (typeCast<Series>((<any>Series).$type, trendlineHost) !== null) {
			yParams.referenceValue = (<Series><any>trendlineHost).getReferenceValue();
		}
		let values: IList$1<number> = (<SingleValuesHolder>h).values;
		if (p.sortingScaler != null && p.sortingScaler.sortedIndices != null) {
			values = new SafeSortedReadOnlyDoubleCollection(0, values, p.sortingScaler.sortedIndices);
		}
		let trendResolutionParams: TrendResolutionParams = ((() => {
			let $ret = new TrendResolutionParams();
			$ret.bucketSize = p.bucketSize;
			$ret.firstBucket = p.firstBucket;
			$ret.lastBucket = p.lastBucket;
			$ret.offset = offset;
			$ret.resolution = p.resolution;
			$ret.viewport = p.viewportRect;
			return $ret;
		})());
		if (<TrendLineType>trendlineHost.trendLineType != TrendLineType.None) {
			if (trendlineHost.isVertical) {
				this.prepareLineCore(p.frame.trend, trendlineHost.trendLineType, values, trendlineHost.trendLinePeriod, (y: number) => p.yScaler.getScaledValue(y, yParams), (x: number) => p.scaler.getScaledValue(x, xParams), trendResolutionParams);
			} else {
				this.prepareLineCore(p.frame.trend, trendlineHost.trendLineType, values, trendlineHost.trendLinePeriod, (x: number) => p.scaler.getScaledValue(x, xParams), (y: number) => p.yScaler.getScaledValue(y, yParams), trendResolutionParams);
			}
		}
	}
	abstract prepareLineCore(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams): void;
}


