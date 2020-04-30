/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryTrendLineManagerBase } from "./CategoryTrendLineManagerBase";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { TrendFitCalculator } from "./TrendFitCalculator";
import { TrendAverageCalculator } from "./TrendAverageCalculator";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class SortingTrendLineManager extends CategoryTrendLineManagerBase {
	static $t: Type = markType(SortingTrendLineManager, 'SortingTrendLineManager', (<any>CategoryTrendLineManagerBase).$type);
	protected get_managerType(): TrendLineManagerType {
		return TrendLineManagerType.Sorting;
	}
	constructor(getUnscaledXValueFromUnsortedIndex: (arg1: number) => number, getUnscaledXValue: (arg1: number, arg2: Rect, arg3: Rect) => number) {
		super();
		this.getUnscaledValueFromUnsortedIndex = getUnscaledXValueFromUnsortedIndex;
		this.getUnscaledXValue = getUnscaledXValue;
	}
	private _getUnscaledValueFromUnsortedIndex: (arg1: number) => number = null;
	get getUnscaledValueFromUnsortedIndex(): (arg1: number) => number {
		return this._getUnscaledValueFromUnsortedIndex;
	}
	set getUnscaledValueFromUnsortedIndex(value: (arg1: number) => number) {
		this._getUnscaledValueFromUnsortedIndex = value;
	}
	private _getUnscaledXValue: (arg1: number, arg2: Rect, arg3: Rect) => number = null;
	get getUnscaledXValue(): (arg1: number, arg2: Rect, arg3: Rect) => number {
		return this._getUnscaledXValue;
	}
	set getUnscaledXValue(value: (arg1: number, arg2: Rect, arg3: Rect) => number) {
		this._getUnscaledXValue = value;
	}
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
			this.trendCoefficients = TrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, valueColumn.count, (x: number) => <number>(x + 1), (i: number) => valueColumn.item(i), (x: number) => {
				let floor: number = <number>truncate(Math.floor(x));
				let ceil: number = <number>truncate(Math.ceil(x));
				let p: number = x - floor;
				let unscaled: number;
				if (ceil <= xmax) {
					unscaled = this.getUnscaledValueFromUnsortedIndex(floor) + p * (this.getUnscaledValueFromUnsortedIndex(ceil) - this.getUnscaledValueFromUnsortedIndex(floor));
				} else {
					unscaled = this.getUnscaledValueFromUnsortedIndex(floor) + p * (this.getUnscaledValueFromUnsortedIndex(<number>truncate(xmax)) - this.getUnscaledValueFromUnsortedIndex(floor));
				}
				return GetScaledXValue(unscaled);
			}, GetScaledYValue, xmin, xmax);
		}
		if (this.isAverage(trendLineType)) {
			this.trendCoefficients = null;
			TrendAverageCalculator.calculateSingleValueAverage(trendLineType, this.trendColumn, valueColumn, period);
			for (let i: number = trendResolutionParams.firstBucket; i <= trendResolutionParams.lastBucket; i += 1) {
				let itemIndex: number = i * trendResolutionParams.bucketSize;
				let unscaledX: number = this.getUnscaledValueFromUnsortedIndex(itemIndex);
				if (itemIndex >= 0 && itemIndex < this.trendColumn.count) {
					let xi: number = GetScaledXValue(unscaledX);
					let yi: number = GetScaledYValue(this.trendColumn._inner[itemIndex]);
					trend.add(<Point>{ $type: Point_$type, x: xi + trendResolutionParams.offset, y: yi });
				}
			}
		}
		this.flattenTrendLine(trend, trendResolutionParams, flattenedPoints);
	}
}


