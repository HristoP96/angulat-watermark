/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { Point, Base, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, fromEnum, Type, markType, PointUtil } from "igniteui-core/type";
import { TrendLineManagerType } from "./TrendLineManagerType";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
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
export class PolarTrendLineManager extends TrendLineManagerBase$1<Point> {
	static $t: Type = markType(PolarTrendLineManager, 'PolarTrendLineManager', (<any>TrendLineManagerBase$1).$type.specialize(Point_$type));
	constructor() {
		super(Point_$type);
	}
	protected get_managerType(): TrendLineManagerType {
		return TrendLineManagerType.Polar;
	}
	get managerType(): TrendLineManagerType {
		return this.get_managerType();
	}
	prepareLine(flattenedPoints: List$1<Point>, trendLineType: TrendLineType, angleColumn: IList$1<number>, radiusColumn: IList$1<number>, period: number, getScaledAngleValue: (arg1: number) => number, getScaledRadiusValue: (arg1: number) => number, trendResolutionParams: TrendResolutionParams, clipper: Clipper, min: number, max: number): void {
		let xmin: number = min;
		let xmax: number = max;
		let trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
		if (!trendResolutionParams.window.isEmpty && !trendResolutionParams.viewport.isEmpty) {
			let angleList: IList$1<number> = angleColumn;
			let radiusList: IList$1<number> = radiusColumn;
			let count: number = 0;
			if (angleList != null) {
				count = angleList.count;
			}
			if (radiusList != null) {
				count = Math.min(count, radiusList.count);
			}
			if (trendLineType == TrendLineType.None) {
				this.trendCoefficients = null;
				this.trendColumn.clear();
				return;
			}
			if (this.isFit(trendLineType)) {
				this.trendColumn.clear();
				this.trendCoefficients = TrendFitCalculator.calculateFit(trend, trendLineType, trendResolutionParams, this.trendCoefficients, count, (i: number) => angleList.item(i), (i: number) => radiusList.item(i), getScaledAngleValue, getScaledRadiusValue, xmin, xmax);
			}
			if (this.isAverage(trendLineType)) {
				this.trendCoefficients = null;
				TrendAverageCalculator.calculateXYAverage(trendLineType, this.trendColumn, angleColumn, radiusColumn, period);
				for (let point of fromEnum<Point>(this.trendColumn)) {
					let xi: number = getScaledAngleValue(point.x);
					let yi: number = getScaledRadiusValue(point.y);
					if (!isNaN_(xi) && !isNaN_(yi)) {
						trend.add(<Point>{ $type: Point_$type, x: xi, y: yi });
					}
				}
			}
			if (trend.count > 0) {
				this.flattenTrendLine1(trend, trendResolutionParams, flattenedPoints, clipper);
			}
		}
	}
	private _useCartesianInterpolation: boolean = false;
	get useCartesianInterpolation(): boolean {
		return this._useCartesianInterpolation;
	}
	set useCartesianInterpolation(value: boolean) {
		this._useCartesianInterpolation = value;
	}
	private _unknownValuePlotting: UnknownValuePlotting = <UnknownValuePlotting>0;
	get unknownValuePlotting(): UnknownValuePlotting {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this._unknownValuePlotting = value;
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
			$ret.useCartesianInterpolation = this.useCartesianInterpolation;
			$ret.unknownValuePlotting = this.unknownValuePlotting;
			$ret.viewport = trendResolutionParams.viewport;
			$ret.window = trendResolutionParams.window;
			return $ret;
		})());
		planner.prepareLine1(null, null);
	}
}


