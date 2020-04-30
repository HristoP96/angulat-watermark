/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { DictInterpolator$3 } from "./DictInterpolator$3";
import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, Point_$type, Array_$type, runOn, fromEnum, markType, PointUtil } from "igniteui-core/type";
import { OwnedPoint } from "./OwnedPoint";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { List$1 } from "igniteui-core/List$1";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ScatterFrameBase$1<T extends ScatterFrameBase$1<T>> extends Frame {
	static $t: Type = markType(ScatterFrameBase$1, 'ScatterFrameBase$1', (<any>Frame).$type);
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this.points = new List$1<Point>(Point_$type, 0);
		this.cachedPoints = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
		this.markers = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
		this.trendLine = new List$1<Point>(Point_$type, 0);
		this.horizontalErrorBars = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
		this.verticalErrorBars = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
		this.horizontalErrorBarWidths = new Dictionary$2<any, number[]>((<any>Base).$type, Array_$type, 0);
		this.verticalErrorBarHeights = new Dictionary$2<any, number[]>((<any>Base).$type, Array_$type, 0);
		this.getNewMinValue = (maxPoint: OwnedPoint, minFrame: T, maxFrame: T) => maxPoint;
		this.ownedPointDictInterpolator = new DictInterpolator$3<any, OwnedPoint, T>((<any>Base).$type, (<any>OwnedPoint).$type, this.$t, runOn(this, this.interpolatePoint), (p: OwnedPoint) => p.ownerItem, (p: OwnedPoint) => !isNaN_(p.point.x) && !isNaN_(p.point.y), () => new OwnedPoint());
	}
	private _ownedPointDictInterpolator: DictInterpolator$3<any, OwnedPoint, T> = null;
	get ownedPointDictInterpolator(): DictInterpolator$3<any, OwnedPoint, T> {
		return this._ownedPointDictInterpolator;
	}
	set ownedPointDictInterpolator(value: DictInterpolator$3<any, OwnedPoint, T>) {
		this._ownedPointDictInterpolator = value;
	}
	interpolate2(p: number, minFrame: Frame, maxFrame: Frame): void {
		let min = <T>minFrame;
		let max = <T>maxFrame;
		if (min == null || max == null) {
			return;
		}
		this.ownedPointDictInterpolator.interpolate(this.cachedPoints, p, min.cachedPoints, max.cachedPoints, min, max);
		Frame.interpolate(this.points, p, min.points, max.points);
		this.ownedPointDictInterpolator.interpolate(this.markers, p, min.markers, max.markers, min, max);
		this.ownedPointDictInterpolator.interpolate(this.horizontalErrorBars, p, min.horizontalErrorBars, max.horizontalErrorBars, min, max);
		this.ownedPointDictInterpolator.interpolate(this.verticalErrorBars, p, min.verticalErrorBars, max.verticalErrorBars, min, max);
		this.addPointsThatSweepThroughTheView(this.markers, p, min, max);
		Frame.interpolate(this.trendLine, p, min.trendLine, max.trendLine);
		this.horizontalErrorBarWidths = max.horizontalErrorBarWidths;
		this.verticalErrorBarHeights = max.verticalErrorBarHeights;
		this.interpolateOverride(p, min, max);
	}
	protected interpolateOverride(p: number, minFrame: Frame, maxFrame: Frame): void {
	}
	private addPointsThatSweepThroughTheView(markers: Dictionary$2<any, OwnedPoint>, p: number, minFrame: T, maxFrame: T): void {
		for (let changedPoint of fromEnum<OwnedPoint>(minFrame.cachedPoints.values)) {
			if (markers.containsKey(changedPoint.ownerItem)) {
				continue;
			}
			let maxPoint: OwnedPoint;
			if (!((() => { let $ret = maxFrame.cachedPoints.tryGetValue(changedPoint.ownerItem, maxPoint); maxPoint = $ret.p1; return $ret.ret; })()) || (maxPoint.columnValues.x == changedPoint.columnValues.x && maxPoint.columnValues.y == changedPoint.columnValues.y)) {
				continue;
			}
			let newPoint = new OwnedPoint();
			this.interpolatePoint(newPoint, p, changedPoint, maxPoint, minFrame, maxFrame);
			if (isNaN_(newPoint.point.x) || isNaN_(newPoint.point.y)) {
				continue;
			}
			markers.addItem(newPoint.ownerItem, newPoint);
		}
	}
	private _getNewMinValue: (arg1: OwnedPoint, arg2: T, arg3: T) => OwnedPoint = null;
	get getNewMinValue(): (arg1: OwnedPoint, arg2: T, arg3: T) => OwnedPoint {
		return this._getNewMinValue;
	}
	set getNewMinValue(value: (arg1: OwnedPoint, arg2: T, arg3: T) => OwnedPoint) {
		this._getNewMinValue = value;
	}
	protected interpolateColumnValues(point: OwnedPoint, p: number, minPoint: OwnedPoint, maxPoint: OwnedPoint): void {
		if (minPoint != null) {
			point.columnValues = <Point>{ $type: Point_$type, x: minPoint.columnValues.x, y: minPoint.columnValues.y };
		} else if (maxPoint != null) {
			point.columnValues = <Point>{ $type: Point_$type, x: maxPoint.columnValues.x, y: maxPoint.columnValues.y };
		}
	}
	private interpolatePoint(point: OwnedPoint, p: number, minPoint: OwnedPoint, maxPoint: OwnedPoint, minFrame: T, maxFrame: T): void {
		let min: OwnedPoint;
		let max: OwnedPoint;
		if (minPoint == null) {
			if (maxPoint != null) {
				let minValue: OwnedPoint;
				if (((() => { let $ret = minFrame.cachedPoints.tryGetValue(maxPoint.ownerItem, minValue); minValue = $ret.p1; return $ret.ret; })())) {
					min = minValue;
				} else {
					min = this.getNewMinValue(maxPoint, minFrame, maxFrame);
				}
			} else {
				point.point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
				return;
			}
		} else {
			min = minPoint;
			if (point.ownerItem == null) {
				point.ownerItem = minPoint.ownerItem;
			}
		}
		if (maxPoint == null) {
			if (minPoint != null) {
				let maxValue: OwnedPoint;
				if (((() => { let $ret = maxFrame.cachedPoints.tryGetValue(minPoint.ownerItem, maxValue); maxValue = $ret.p1; return $ret.ret; })())) {
					max = maxValue;
				} else {
					point.point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
					return;
				}
			} else {
				point.point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
				return;
			}
		} else {
			max = maxPoint;
			if (point.ownerItem == null) {
				point.ownerItem = maxPoint.ownerItem;
			}
		}
		this.interpolateColumnValues(point, p, min, max);
		if (isNaN_(min.point.x) || isNaN_(min.point.y)) {
			min = max;
		}
		this.interpolatePointOverride(point, p, min, max);
	}
	protected interpolatePointOverride(point: OwnedPoint, p: number, min: OwnedPoint, max: OwnedPoint): void {
		let q: number = 1 - p;
		point.point = <Point>{ $type: Point_$type, x: min.point.x * q + max.point.x * p, y: min.point.y * q + max.point.y * p };
	}
	private _markers: Dictionary$2<any, OwnedPoint> = null;
	get markers(): Dictionary$2<any, OwnedPoint> {
		return this._markers;
	}
	set markers(value: Dictionary$2<any, OwnedPoint>) {
		this._markers = value;
	}
	private _cachedPoints: Dictionary$2<any, OwnedPoint> = null;
	get cachedPoints(): Dictionary$2<any, OwnedPoint> {
		return this._cachedPoints;
	}
	set cachedPoints(value: Dictionary$2<any, OwnedPoint>) {
		this._cachedPoints = value;
	}
	private _points: List$1<Point> = null;
	get points(): List$1<Point> {
		return this._points;
	}
	set points(value: List$1<Point>) {
		this._points = value;
	}
	private _trendLine: List$1<Point> = null;
	get trendLine(): List$1<Point> {
		return this._trendLine;
	}
	set trendLine(value: List$1<Point>) {
		this._trendLine = value;
	}
	private _horizontalErrorBars: Dictionary$2<any, OwnedPoint> = null;
	get horizontalErrorBars(): Dictionary$2<any, OwnedPoint> {
		return this._horizontalErrorBars;
	}
	set horizontalErrorBars(value: Dictionary$2<any, OwnedPoint>) {
		this._horizontalErrorBars = value;
	}
	private _verticalErrorBars: Dictionary$2<any, OwnedPoint> = null;
	get verticalErrorBars(): Dictionary$2<any, OwnedPoint> {
		return this._verticalErrorBars;
	}
	set verticalErrorBars(value: Dictionary$2<any, OwnedPoint>) {
		this._verticalErrorBars = value;
	}
	private _horizontalErrorBarWidths: Dictionary$2<any, number[]> = null;
	get horizontalErrorBarWidths(): Dictionary$2<any, number[]> {
		return this._horizontalErrorBarWidths;
	}
	set horizontalErrorBarWidths(value: Dictionary$2<any, number[]>) {
		this._horizontalErrorBarWidths = value;
	}
	private _verticalErrorBarHeights: Dictionary$2<any, number[]> = null;
	get verticalErrorBarHeights(): Dictionary$2<any, number[]> {
		return this._verticalErrorBarHeights;
	}
	set verticalErrorBarHeights(value: Dictionary$2<any, number[]>) {
		this._verticalErrorBarHeights = value;
	}
}


