/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { CategoryAngleAxis } from "./CategoryAngleAxis";
import { Rect } from "igniteui-core/Rect";
import { ViewportUtils } from "./ViewportUtils";

/**
 * @hidden 
 */
export class RadialAxes extends Base {
	static $t: Type = markType(RadialAxes, 'RadialAxes');
	private _radiusAxis: NumericRadiusAxis = null;
	get radiusAxis(): NumericRadiusAxis {
		return this._radiusAxis;
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this._radiusAxis = value;
	}
	private _angleAxis: CategoryAngleAxis = null;
	get angleAxis(): CategoryAngleAxis {
		return this._angleAxis;
	}
	set angleAxis(value: CategoryAngleAxis) {
		this._angleAxis = value;
	}
	constructor(radiusAxis: NumericRadiusAxis, angleAxis: CategoryAngleAxis) {
		super();
		this.radiusAxis = radiusAxis;
		this.angleAxis = angleAxis;
	}
	private center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
	getXValue(angle: number, radius: number, windowRect: Rect, viewportRect: Rect): number {
		let X: number = this.center.x + (radius * Math.cos(angle));
		return ViewportUtils.transformXToViewport(X, windowRect, viewportRect);
	}
	getScaledPoints(points: IList$1<Point>, angleColumn: IList$1<number>, radiusColumn: IList$1<number>, windowRect: Rect, viewportRect: Rect, cosStrategy: (arg1: number, arg2: number) => number, sinStrategy: (arg1: number, arg2: number) => number): void {
		let count: number = Math.min(angleColumn != null ? angleColumn.count : 0, radiusColumn != null ? radiusColumn.count : 0);
		let fillInPlace: boolean = false;
		if (points.count == count) {
			fillInPlace = true;
		}
		let scaledAngle: number;
		let scaledRadius: number;
		let cX: number = this.center.x;
		let cY: number = this.center.y;
		let X: number;
		let Y: number;
		for (let i: number = 0; i < count; i++) {
			scaledAngle = this.angleAxis.getScaledAngle(angleColumn.item(i));
			scaledRadius = this.radiusAxis.getScaledValue3(radiusColumn.item(i));
			X = cX + (scaledRadius * cosStrategy(i, scaledAngle));
			Y = cY + (scaledRadius * sinStrategy(i, scaledAngle));
			X = viewportRect.left + viewportRect.width * (X - windowRect.left) / windowRect.width;
			Y = viewportRect.top + viewportRect.height * (Y - windowRect.top) / windowRect.height;
			if (!fillInPlace) {
				points.add(<Point>{ $type: Point_$type, x: X, y: Y });
			} else {
				points.item(i, <Point>{ $type: Point_$type, x: X, y: Y });
			}
		}
	}
	getUnscaledValues(scaledXValue: number, scaledYValue: number, windowRect: Rect, viewportRect: Rect, unscaledAngle: number, unscaledRadius: number): { p4: number; p5: number; } {
		let X: number = ViewportUtils.transformXFromViewport(scaledXValue, windowRect, viewportRect);
		let Y: number = ViewportUtils.transformYFromViewport(scaledYValue, windowRect, viewportRect);
		let scaledRadius: number = Math.sqrt(Math.pow(X - this.center.x, 2) + Math.pow(Y - this.center.y, 2));
		let scaledAngle: number = Math.acos((X - this.center.x) / scaledRadius);
		if ((Y - this.center.y) < 0) {
			scaledAngle = (2 * Math.PI) - scaledAngle;
		}
		unscaledAngle = this.angleAxis.getUnscaledAngle(scaledAngle);
		unscaledRadius = this.radiusAxis.getUnscaledValue3(scaledRadius);
		return {
			p4: unscaledAngle,
			p5: unscaledRadius

		};
	}
	getYValue(angle: number, radius: number, windowRect: Rect, viewportRect: Rect): number {
		let Y: number = this.center.y + (radius * Math.sin(angle));
		return ViewportUtils.transformYToViewport(Y, windowRect, viewportRect);
	}
	getAngleTo(world: Point): number {
		let radius: number = Math.sqrt(Math.pow(world.x - this.center.x, 2) + Math.pow(world.y - this.center.y, 2));
		let angle: number = Math.acos((world.x - this.center.x) / radius);
		if ((world.y - this.center.y) < 0) {
			angle = (2 * Math.PI) - angle;
		}
		return angle;
	}
}


