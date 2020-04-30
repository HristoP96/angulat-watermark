/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Point_$type, typeCast, Type, markType, PointUtil } from "igniteui-core/type";
import { Frame } from "./Frame";
import { OwnedPoint } from "./OwnedPoint";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class PolarFrame extends ScatterFrameBase$1<PolarFrame> {
	static $t: Type = markType(PolarFrame, 'PolarFrame', (<any>ScatterFrameBase$1).$type.specialize(-1)).initSelfReferences();
	constructor() {
		super((<any>PolarFrame).$type);
		this.transformed = new List$1<Point>(Point_$type, 0);
		this.useCartesianInterpolation = true;
	}
	private _transformed: List$1<Point> = null;
	get transformed(): List$1<Point> {
		return this._transformed;
	}
	set transformed(value: List$1<Point>) {
		this._transformed = value;
	}
	private _useCartesianInterpolation: boolean = false;
	get useCartesianInterpolation(): boolean {
		return this._useCartesianInterpolation;
	}
	set useCartesianInterpolation(value: boolean) {
		this._useCartesianInterpolation = value;
	}
	private _retransform: (arg1: Point) => Point = null;
	get retransform(): (arg1: Point) => Point {
		return this._retransform;
	}
	set retransform(value: (arg1: Point) => Point) {
		this._retransform = value;
	}
	protected interpolateOverride(p: number, minFrame: Frame, maxFrame: Frame): void {
		let min: PolarFrame = typeCast<PolarFrame>((<any>PolarFrame).$type, minFrame);
		let max: PolarFrame = typeCast<PolarFrame>((<any>PolarFrame).$type, maxFrame);
		if (min == null || max == null) {
			return;
		}
		Frame.interpolate(this.transformed, p, min.transformed, max.transformed);
	}
	protected interpolateColumnValues(point: OwnedPoint, p: number, minPoint: OwnedPoint, maxPoint: OwnedPoint): void {
		if (this.useCartesianInterpolation) {
			super.interpolateColumnValues(point, p, minPoint, maxPoint);
		} else {
			super.interpolateColumnValues(point, p, minPoint, maxPoint);
			if (minPoint != null && maxPoint != null && (minPoint.columnValues.x != maxPoint.columnValues.x || minPoint.columnValues.y != maxPoint.columnValues.y)) {
				let q: number = 1 - p;
				point.columnValues = <Point>{ $type: Point_$type, x: minPoint.columnValues.x * q + maxPoint.columnValues.x * p, y: minPoint.columnValues.y * q + maxPoint.columnValues.y * p };
			}
		}
	}
	private isPlottable(point: Point): boolean {
		return !isNaN_(point.x) && !isNaN_(point.y) && !isInfinity(point.x) && !isInfinity(point.y);
	}
	protected interpolatePointOverride(point: OwnedPoint, p: number, min: OwnedPoint, max: OwnedPoint): void {
		if (this.useCartesianInterpolation) {
			super.interpolatePointOverride(point, p, min, max);
		} else {
			if (min != null && max != null && (min.point.x != max.point.x || min.point.y != max.point.y) && this.isPlottable(point.columnValues)) {
				point.point = this.retransform(point.columnValues);
			} else {
				super.interpolatePointOverride(point, p, min, max);
			}
		}
	}
}


