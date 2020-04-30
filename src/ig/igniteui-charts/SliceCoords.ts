/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Size } from "igniteui-core/Size";
import { Rect } from "igniteui-core/Rect";
import { ViewportUtils } from "./ViewportUtils";

/**
 * @hidden 
 */
export class SliceCoords extends Base {
	static $t: Type = markType(SliceCoords, 'SliceCoords');
	private _a: Point = null;
	get a(): Point {
		return this._a;
	}
	set a(value: Point) {
		this._a = value;
	}
	private _b: Point = null;
	get b(): Point {
		return this._b;
	}
	set b(value: Point) {
		this._b = value;
	}
	private _c: Point = null;
	get c(): Point {
		return this._c;
	}
	set c(value: Point) {
		this._c = value;
	}
	private _d: Point = null;
	get d(): Point {
		return this._d;
	}
	set d(value: Point) {
		this._d = value;
	}
	private _a2: Point = null;
	get a2(): Point {
		return this._a2;
	}
	set a2(value: Point) {
		this._a2 = value;
	}
	private _b2: Point = null;
	get b2(): Point {
		return this._b2;
	}
	set b2(value: Point) {
		this._b2 = value;
	}
	private _c2: Point = null;
	get c2(): Point {
		return this._c2;
	}
	set c2(value: Point) {
		this._c2 = value;
	}
	private _d2: Point = null;
	get d2(): Point {
		return this._d2;
	}
	set d2(value: Point) {
		this._d2 = value;
	}
	private _isLargeArc: boolean = false;
	get isLargeArc(): boolean {
		return this._isLargeArc;
	}
	set isLargeArc(value: boolean) {
		this._isLargeArc = value;
	}
	private _outerSize: Size = new Size();
	get outerSize(): Size {
		return this._outerSize;
	}
	set outerSize(value: Size) {
		this._outerSize = value;
	}
	private _innerSize: Size = new Size();
	get innerSize(): Size {
		return this._innerSize;
	}
	set innerSize(value: Size) {
		this._innerSize = value;
	}
	private _cornerSize: Size = new Size();
	get cornerSize(): Size {
		return this._cornerSize;
	}
	set cornerSize(value: Size) {
		this._cornerSize = value;
	}
	static getSliceCoords(windowRect: Rect, viewportRect: Rect, startAngle: number, endAngle: number, zero: number, radius: number, center: Point): SliceCoords {
		let angleMin: number = Math.min(startAngle, endAngle);
		let angleMax: number = Math.max(startAngle, endAngle);
		let cosAngleMin: number = Math.cos(angleMin);
		let sinAngleMin: number = Math.sin(angleMin);
		let minLength: number = Math.max(0, zero);
		let maxLength: number = radius;
		let startXmin: number = center.x + cosAngleMin * minLength;
		let startYmin: number = center.y + sinAngleMin * minLength;
		let endXmin: number = center.x + cosAngleMin * maxLength;
		let endYmin: number = center.y + sinAngleMin * maxLength;
		let cosAngleMax: number = Math.cos(angleMax);
		let sinAngleMax: number = Math.sin(angleMax);
		let startXmax: number = center.x + cosAngleMax * minLength;
		let startYmax: number = center.y + sinAngleMax * minLength;
		let endXmax: number = center.x + cosAngleMax * maxLength;
		let endYmax: number = center.y + sinAngleMax * maxLength;
		startXmin = ViewportUtils.transformXToViewport(startXmin, windowRect, viewportRect);
		startYmin = ViewportUtils.transformYToViewport(startYmin, windowRect, viewportRect);
		endXmin = ViewportUtils.transformXToViewport(endXmin, windowRect, viewportRect);
		endYmin = ViewportUtils.transformYToViewport(endYmin, windowRect, viewportRect);
		startXmax = ViewportUtils.transformXToViewport(startXmax, windowRect, viewportRect);
		startYmax = ViewportUtils.transformYToViewport(startYmax, windowRect, viewportRect);
		endXmax = ViewportUtils.transformXToViewport(endXmax, windowRect, viewportRect);
		endYmax = ViewportUtils.transformYToViewport(endYmax, windowRect, viewportRect);
		let a: Point = <Point>{ $type: Point_$type, x: startXmin, y: startYmin };
		let b: Point = <Point>{ $type: Point_$type, x: endXmin, y: endYmin };
		let c: Point = <Point>{ $type: Point_$type, x: endXmax, y: endYmax };
		let d: Point = <Point>{ $type: Point_$type, x: startXmax, y: startYmax };
		let maxLenX: number = ViewportUtils.transformXToViewportLength(maxLength, windowRect, viewportRect);
		let maxLenY: number = ViewportUtils.transformYToViewportLength(maxLength, windowRect, viewportRect);
		let minLenX: number = ViewportUtils.transformXToViewportLength(minLength, windowRect, viewportRect);
		let minLenY: number = ViewportUtils.transformYToViewportLength(minLength, windowRect, viewportRect);
		return ((() => {
			let $ret = new SliceCoords();
			$ret.a = a;
			$ret.b = b;
			$ret.c = c;
			$ret.d = d;
			$ret.isLargeArc = ((angleMax - angleMin) > Math.PI);
			$ret.outerSize = new Size(1, maxLenX, maxLenY);
			$ret.innerSize = new Size(1, minLenX, minLenY);
			return $ret;
		})());
	}
	static getRoundedSliceCoords(windowRect: Rect, viewportRect: Rect, startAngle: number, endAngle: number, zero: number, radius: number, center: Point, radiusX: number, radiusY: number): SliceCoords {
		let radDiff: number = ViewportUtils.transformXFromViewportLength(radiusY, windowRect, viewportRect);
		let radLength: number = radius - zero;
		if (radLength < 0) {
			return null;
		}
		if (ViewportUtils.transformXToViewportLength(radLength, windowRect, viewportRect) < 2) {
			return null;
		}
		if (radDiff * 2 > radLength) {
			radDiff = radLength / 2;
			radiusY = ViewportUtils.transformXToViewportLength(radDiff, windowRect, viewportRect);
		}
		let xDiff: number = ViewportUtils.transformXFromViewportLength(radiusX, windowRect, viewportRect);
		let oppOverAdj: number = xDiff / (radius - radDiff);
		let angleDiff: number = Math.atan(oppOverAdj);
		if (angleDiff * 2 > Math.abs(endAngle - startAngle)) {
			angleDiff = Math.abs(endAngle - startAngle) / 2;
			radiusX = ViewportUtils.transformXToViewportLength(Math.tan(angleDiff) * (radius - radDiff), windowRect, viewportRect);
		}
		let sc: SliceCoords = SliceCoords.getSliceCoords(windowRect, viewportRect, startAngle + angleDiff, endAngle - angleDiff, zero, radius, center);
		let sc2: SliceCoords = SliceCoords.getSliceCoords(windowRect, viewportRect, startAngle, endAngle, zero + (radDiff * (zero / radius)), radius - radDiff, center);
		sc.b2 = sc.b;
		sc.d2 = sc.d;
		sc.a2 = sc2.a;
		sc.b = sc2.b;
		sc.c2 = sc2.c;
		sc.d = sc2.d;
		sc.cornerSize = new Size(1, radiusX, radiusY);
		return sc;
	}
}


