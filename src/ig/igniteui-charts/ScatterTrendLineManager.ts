/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { Point, IList$1, IList$1_$type, Base, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Clipper } from "igniteui-core/Clipper";
import { Rect } from "igniteui-core/Rect";
import { TrendFitCalculator } from "./TrendFitCalculator";
import { TrendAverageCalculator } from "./TrendAverageCalculator";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ScatterTrendLineManager extends TrendLineManagerBase$1<Point> {
	static $t: Type = markType(ScatterTrendLineManager, 'ScatterTrendLineManager', (<any>TrendLineManagerBase$1).$type.specialize(Point_$type));
	constructor() {
		super(Point_$type);
	}
	protected get_managerType(): TrendLineManagerType {
		return TrendLineManagerType.Scatter;
	}
	get managerType(): TrendLineManagerType {
		return this.get_managerType();
	}
	prepareLine(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, XColumn: IList$1<number>, YColumn: IList$1<number>, period: number, GetScaledXValue: (arg1: number) => number, GetScaledYValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams, clipper: Clipper, min: number, max: number): void {
		let xmin: number = min;
		let xmax: number = max;
		let trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
		let count: number = 0;
		if (XColumn != null) {
			count = XColumn.count;
		}
		if (YColumn != null) {
			count = Math.min(count, YColumn.count);
		}
		if (!trendResolutionParams.window.isEmpty && !trendResolutionParams.viewport.isEmpty) {
			if (trendLineType == TrendLineType.None) {
				this.trendCoefficients = null;
				this.trendColumn.clear();
			} else if (this.isFit(trendLineType)) {
				this.trendColumn.clear();
				this.trendCoefficients = TrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, count, (i: number) => XColumn.item(i), (i: number) => YColumn.item(i), GetScaledXValue, GetScaledYValue, xmin, xmax);
			} else if (this.isAverage(trendLineType)) {
				this.trendCoefficients = null;
				this.trendColumn.clear();
				TrendAverageCalculator.calculateXYAverage(trendLineType, this.trendColumn, XColumn, YColumn, period);
				for (let point of fromEnum<Point>(this.trendColumn)) {
					let xi: number = GetScaledXValue(point.x);
					let yi: number = GetScaledYValue(point.y);
					if (!isNaN_(xi) && !isNaN_(yi)) {
						trend.add(<Point>{ $type: Point_$type, x: xi, y: yi });
					}
				}
			}
			this.flattenTrendLine1(trend, trendResolutionParams, flattenedPoints, clipper);
		}
	}
}


