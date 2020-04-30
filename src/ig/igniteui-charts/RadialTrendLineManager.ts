/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Number_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Clipper } from "igniteui-core/Clipper";
import { Rect } from "igniteui-core/Rect";
import { TrendFitCalculator } from "./TrendFitCalculator";
import { TrendAverageCalculator } from "./TrendAverageCalculator";
import { PolarLinePlanner } from "./PolarLinePlanner";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RadialTrendLineManager extends TrendLineManagerBase$1<number> {
	static $t: Type = markType(RadialTrendLineManager, 'RadialTrendLineManager', (<any>TrendLineManagerBase$1).$type.specialize(Number_$type));
	constructor() {
		super(Number_$type);
	}
	protected get_managerType(): TrendLineManagerType {
		return TrendLineManagerType.Radial;
	}
	get managerType(): TrendLineManagerType {
		return this.get_managerType();
	}
	prepareLine(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, valueColumn: IList$1<number>, period: number, GetScaledAngleValue: (arg1: number) => number, GetScaledRadiusValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams, clipper: Clipper): void {
		let xmin: number = trendResolutionParams.firstBucket * trendResolutionParams.bucketSize;
		let xmax: number = trendResolutionParams.lastBucket * trendResolutionParams.bucketSize;
		let trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
		if (!trendResolutionParams.window.isEmpty && !trendResolutionParams.viewport.isEmpty) {
			if (trendLineType == TrendLineType.None) {
				this.trendCoefficients = null;
				this.trendColumn.clear();
				return;
			}
			if (this.isFit(trendLineType)) {
				this.trendColumn.clear();
				this.trendCoefficients = TrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, valueColumn.count, (i: number) => <number>(i + 1), (i: number) => valueColumn.item(i), (x: number) => GetScaledAngleValue(x - 1), GetScaledRadiusValue, xmin + 1, xmax + 1);
			}
			if (this.isAverage(trendLineType)) {
				this.trendCoefficients = null;
				TrendAverageCalculator.calculateSingleValueAverage(trendLineType, this.trendColumn, valueColumn, period);
				for (let i: number = trendResolutionParams.firstBucket; i <= trendResolutionParams.lastBucket; i += 1) {
					let itemIndex: number = (i % valueColumn.count) * trendResolutionParams.bucketSize;
					if (itemIndex >= 0 && itemIndex < this.trendColumn.count) {
						let xi: number = GetScaledAngleValue(<number>itemIndex);
						let yi: number = GetScaledRadiusValue(this.trendColumn._inner[itemIndex]);
						if (!isNaN_(xi) && !isNaN_(yi)) {
							trend.add(<Point>{ $type: Point_$type, x: xi + trendResolutionParams.offset, y: yi });
						}
					}
				}
			}
			if (trend.count > 0) {
				this.flattenTrendLine1(trend, trendResolutionParams, flattenedPoints, clipper);
			}
		}
	}
	private _radiusExtentScale: number = 0;
	get radiusExtentScale(): number {
		return this._radiusExtentScale;
	}
	set radiusExtentScale(value: number) {
		this._radiusExtentScale = value;
	}
	private _innerRadiusExtentScale: number = 0;
	get innerRadiusExtentScale(): number {
		return this._innerRadiusExtentScale;
	}
	set innerRadiusExtentScale(value: number) {
		this._innerRadiusExtentScale = value;
	}
	private _projectX: (arg1: number, arg2: number) => number = null;
	get projectX(): (arg1: number, arg2: number) => number {
		return this._projectX;
	}
	set projectX(value: (arg1: number, arg2: number) => number) {
		this._projectX = value;
	}
	private _projectY: (arg1: number, arg2: number) => number = null;
	get projectY(): (arg1: number, arg2: number) => number {
		return this._projectY;
	}
	set projectY(value: (arg1: number, arg2: number) => number) {
		this._projectY = value;
	}
	protected flattenTrendLine(trend: IList$1<Point>, trendResolutionParams: TrendResolutionParams, flattenedPoints: List$1<Point>): void {
		this.flattenTrendLine1(trend, trendResolutionParams, flattenedPoints, null);
	}
	protected flattenTrendLine1(trend: IList$1<Point>, trendResolutionParams: TrendResolutionParams, flattenedPoints: List$1<Point>, clipper: Clipper): void {
		if (clipper != null) {
			clipper.target = flattenedPoints;
		}
		let planner: PolarLinePlanner = ((() => {
			let $ret = new PolarLinePlanner();
			$ret.angleProvider = (i: number) => trend.item(i).x;
			$ret.radiusProvider = (i2: number) => trend.item(i2).y;
			$ret.clipper = clipper;
			$ret.count = trend.count;
			$ret.resolution = trendResolutionParams.resolution;
			$ret.transformedXProvider = (i3: number) => this.projectX(trend.item(i3).x, trend.item(i3).y);
			$ret.transformedYProvider = (i4: number) => this.projectY(trend.item(i4).x, trend.item(i4).y);
			$ret.useCartesianInterpolation = true;
			$ret.viewport = trendResolutionParams.viewport;
			$ret.window = trendResolutionParams.window;
			return $ret;
		})());
		planner.prepareLine1(null, null);
	}
}


