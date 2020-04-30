/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Array_$type, Point_$type, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class SparkFrame extends Base {
	static $t: Type = markType(SparkFrame, 'SparkFrame');
	private _buckets: List$1<number[]> = new List$1<number[]>(Array_$type, 0);
	get buckets(): List$1<number[]> {
		return this._buckets;
	}
	set buckets(value: List$1<number[]>) {
		this._buckets = value;
	}
	private _trendPoints: List$1<Point> = new List$1<Point>(Point_$type, 0);
	get trendPoints(): List$1<Point> {
		return this._trendPoints;
	}
	set trendPoints(value: List$1<Point>) {
		this._trendPoints = value;
	}
	private _markers: List$1<Point> = new List$1<Point>(Point_$type, 0);
	get markers(): List$1<Point> {
		return this._markers;
	}
	set markers(value: List$1<Point>) {
		this._markers = value;
	}
	private _negativeMarkers: List$1<Point> = new List$1<Point>(Point_$type, 0);
	get negativeMarkers(): List$1<Point> {
		return this._negativeMarkers;
	}
	set negativeMarkers(value: List$1<Point>) {
		this._negativeMarkers = value;
	}
	private _lowPoints: List$1<Point> = new List$1<Point>(Point_$type, 0);
	get lowPoints(): List$1<Point> {
		return this._lowPoints;
	}
	set lowPoints(value: List$1<Point>) {
		this._lowPoints = value;
	}
	private _highPoints: List$1<Point> = new List$1<Point>(Point_$type, 0);
	get highPoints(): List$1<Point> {
		return this._highPoints;
	}
	set highPoints(value: List$1<Point>) {
		this._highPoints = value;
	}
	private _firstPoint: Point = null;
	get firstPoint(): Point {
		return this._firstPoint;
	}
	set firstPoint(value: Point) {
		this._firstPoint = value;
	}
	private _lastPoint: Point = null;
	get lastPoint(): Point {
		return this._lastPoint;
	}
	set lastPoint(value: Point) {
		this._lastPoint = value;
	}
}


