/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryTrendLineManagerBase } from "./CategoryTrendLineManagerBase";
import { List$1 } from "igniteui-core/List$1";
import { Point, IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { TrendFitCalculator } from "./TrendFitCalculator";
import { TrendAverageCalculator } from "./TrendAverageCalculator";

/**
 * @hidden 
 */
export class CategoryTrendLineManager extends CategoryTrendLineManagerBase {
	static $t: Type = markType(CategoryTrendLineManager, 'CategoryTrendLineManager', (<any>CategoryTrendLineManagerBase).$type);
	prepareLineCore(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams): void {
		let xmin: number = trendResolutionParams.firstBucket * trendResolutionParams.bucketSize;
		let xmax: number = trendResolutionParams.lastBucket * trendResolutionParams.bucketSize;
		let trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
		if (trendLineType == TrendLineType.None) {
			this.trendCoefficients = null;
			this.trendColumn.clear();
			return;
		}
		if (this.isFit(trendLineType)) {
			this.trendColumn.clear();
			this.trendCoefficients = TrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, valueColumn.count, (i: number) => <number>(i + 1), (i: number) => valueColumn.item(i), (x: number) => GetScaledXValue(x - 1), GetScaledYValue, xmin + 1, xmax + 1);
		}
		if (this.isAverage(trendLineType)) {
			this.trendCoefficients = null;
			TrendAverageCalculator.calculateSingleValueAverage(trendLineType, this.trendColumn, valueColumn, period);
			for (let i: number = trendResolutionParams.firstBucket; i <= trendResolutionParams.lastBucket; i += 1) {
				let itemIndex: number = i * trendResolutionParams.bucketSize;
				if (itemIndex >= 0 && itemIndex < this.trendColumn.count) {
					let xi: number = GetScaledXValue(<number>itemIndex);
					let yi: number = GetScaledYValue(this.trendColumn._inner[itemIndex]);
					trend.add(<Point>{ $type: Point_$type, x: xi + trendResolutionParams.offset, y: yi });
				}
			}
		}
		this.flattenTrendLine(trend, trendResolutionParams, flattenedPoints);
	}
}


