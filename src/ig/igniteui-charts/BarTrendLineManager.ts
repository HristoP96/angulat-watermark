/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryTrendLineManager } from "./CategoryTrendLineManager";
import { List$1 } from "igniteui-core/List$1";
import { Point, IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { BarTrendFitCalculator } from "./BarTrendFitCalculator";
import { TrendAverageCalculator } from "./TrendAverageCalculator";

/**
 * @hidden 
 */
export class BarTrendLineManager extends CategoryTrendLineManager {
	static $t: Type = markType(BarTrendLineManager, 'BarTrendLineManager', (<any>CategoryTrendLineManager).$type);
	prepareLineCore(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams): void {
		let ymin: number = trendResolutionParams.firstBucket * trendResolutionParams.bucketSize;
		let ymax: number = trendResolutionParams.lastBucket * trendResolutionParams.bucketSize;
		let trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
		if (trendLineType == TrendLineType.None) {
			this.trendCoefficients = null;
			this.trendColumn.clear();
			return;
		}
		if (this.isFit(trendLineType)) {
			this.trendColumn.clear();
			this.trendCoefficients = BarTrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, valueColumn.count, (i: number) => valueColumn.item(i), (i: number) => i + 1, GetScaledXValue, (x: number) => GetScaledYValue(x - 1), ymin + 1, ymax + 1);
		}
		if (this.isAverage(trendLineType)) {
			this.trendCoefficients = null;
			TrendAverageCalculator.calculateSingleValueAverage(trendLineType, this.trendColumn, valueColumn, period);
			for (let i: number = trendResolutionParams.firstBucket; i <= trendResolutionParams.lastBucket; i += 1) {
				let itemIndex: number = i * trendResolutionParams.bucketSize;
				if (itemIndex >= 0 && itemIndex < this.trendColumn.count) {
					let xi: number = GetScaledXValue(this.trendColumn._inner[itemIndex]);
					let yi: number = GetScaledYValue(itemIndex);
					trend.add(<Point>{ $type: Point_$type, x: xi, y: yi + trendResolutionParams.offset });
				}
			}
		}
		this.flattenTrendLine(trend, trendResolutionParams, flattenedPoints);
	}
}


