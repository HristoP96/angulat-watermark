/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RenderingMessage_Spark } from "./RenderingMessage_Spark";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class MarkerMessage_Spark extends RenderingMessage_Spark {
	static $t: Type = markType(MarkerMessage_Spark, 'MarkerMessage_Spark', (<any>RenderingMessage_Spark).$type);
	private _markerPoints: List$1<Point> = null;
	get markerPoints(): List$1<Point> {
		return this._markerPoints;
	}
	set markerPoints(value: List$1<Point>) {
		this._markerPoints = value;
	}
	private _negativeMarkerPoints: List$1<Point> = null;
	get negativeMarkerPoints(): List$1<Point> {
		return this._negativeMarkerPoints;
	}
	set negativeMarkerPoints(value: List$1<Point>) {
		this._negativeMarkerPoints = value;
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
	private _lowPoints: List$1<Point> = null;
	get lowPoints(): List$1<Point> {
		return this._lowPoints;
	}
	set lowPoints(value: List$1<Point>) {
		this._lowPoints = value;
	}
	private _highPoints: List$1<Point> = null;
	get highPoints(): List$1<Point> {
		return this._highPoints;
	}
	set highPoints(value: List$1<Point>) {
		this._highPoints = value;
	}
	private _markerSize: number = 0;
	get markerSize(): number {
		return this._markerSize;
	}
	set markerSize(value: number) {
		this._markerSize = value;
	}
	private _firstMarkerSize: number = 0;
	get firstMarkerSize(): number {
		return this._firstMarkerSize;
	}
	set firstMarkerSize(value: number) {
		this._firstMarkerSize = value;
	}
	private _lastMarkerSize: number = 0;
	get lastMarkerSize(): number {
		return this._lastMarkerSize;
	}
	set lastMarkerSize(value: number) {
		this._lastMarkerSize = value;
	}
	private _highMarkerSize: number = 0;
	get highMarkerSize(): number {
		return this._highMarkerSize;
	}
	set highMarkerSize(value: number) {
		this._highMarkerSize = value;
	}
	private _lowMarkerSize: number = 0;
	get lowMarkerSize(): number {
		return this._lowMarkerSize;
	}
	set lowMarkerSize(value: number) {
		this._lowMarkerSize = value;
	}
	private _negativeMarkerSize: number = 0;
	get negativeMarkerSize(): number {
		return this._negativeMarkerSize;
	}
	set negativeMarkerSize(value: number) {
		this._negativeMarkerSize = value;
	}
}


