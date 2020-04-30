/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { NumericAngleAxis } from "./NumericAngleAxis";
import { Rect } from "igniteui-core/Rect";
import { ViewportUtils } from "./ViewportUtils";
import { NumericAxisBase } from "./NumericAxisBase";
import { Axis } from "./Axis";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class PolarAxes extends Base {
	static $t: Type = markType(PolarAxes, 'PolarAxes');
	private _radiusAxis: NumericRadiusAxis = null;
	get radiusAxis(): NumericRadiusAxis {
		return this._radiusAxis;
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this._radiusAxis = value;
	}
	private _angleAxis: NumericAngleAxis = null;
	get angleAxis(): NumericAngleAxis {
		return this._angleAxis;
	}
	set angleAxis(value: NumericAngleAxis) {
		this._angleAxis = value;
	}
	constructor(radiusAxis: NumericRadiusAxis, angleAxis: NumericAngleAxis) {
		super();
		this.radiusAxis = radiusAxis;
		this.angleAxis = angleAxis;
	}
	private center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
	getXValue(angle: number, radius: number, windowRect: Rect, viewportRect: Rect, cosStrategy: (arg1: number) => number): number {
		let X: number = this.center.x + (radius * cosStrategy(angle));
		return ViewportUtils.transformXToViewport(X, windowRect, viewportRect);
	}
	getScaledPoint(angleValue: number, radiusValue: number, windowRect: Rect, viewportRect: Rect, angleLogarithmic: boolean, angleInverted: boolean, radiusLogarithmic: boolean, radiusInverted: boolean, radiusExtentScale: number, innerRadiusExtentScale: number): Point {
		let scaledAngle: number = this.angleAxis.getScaledAngle1(angleValue, angleLogarithmic, angleInverted);
		let scaledRadius: number = this.radiusAxis.getScaledValue4(radiusValue, radiusLogarithmic, radiusInverted, radiusExtentScale, innerRadiusExtentScale);
		let cX: number = this.center.x;
		let cY: number = this.center.y;
		let x: number = cX + (scaledRadius * Math.cos(scaledAngle));
		let y: number = cY + (scaledRadius * Math.sin(scaledAngle));
		x = viewportRect.left + viewportRect.width * (x - windowRect.left) / windowRect.width;
		y = viewportRect.top + viewportRect.height * (y - windowRect.top) / windowRect.height;
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	getScaledPoints(points: IList$1<Point>, angleColumn: IList$1<number>, radiusColumn: IList$1<number>, windowRect: Rect, viewportRect: Rect, cosStrategy: (arg1: number, arg2: number) => number, sinStrategy: (arg1: number, arg2: number) => number, excludeOutOfRange: boolean): void {
		let count: number = Math.min(angleColumn != null ? angleColumn.count : 0, radiusColumn != null ? radiusColumn.count : 0);
		points.clear();
		let scaledAngle: number;
		let scaledRadius: number;
		let cX: number = this.center.x;
		let cY: number = this.center.y;
		let X: number;
		let Y: number;
		let angleMin: number = Math.min(this.angleAxis.actualMinimumValue, this.angleAxis.actualMaximumValue);
		let angleMax: number = Math.max(this.angleAxis.actualMinimumValue, this.angleAxis.actualMaximumValue);
		let radiusMin: number = Math.min(this.radiusAxis.actualMaximumValue, this.radiusAxis.actualMinimumValue);
		let radiusMax: number = Math.max(this.radiusAxis.actualMaximumValue, this.radiusAxis.actualMinimumValue);
		let angleLogarithmic: boolean = this.angleAxis.isReallyLogarithmic;
		let angleInverted: boolean = this.angleAxis.isInverted;
		let radiusLogarithmic: boolean = this.radiusAxis.isReallyLogarithmic;
		let radiusInverted: boolean = this.radiusAxis.isInverted;
		let radiusExtentScale: number = this.radiusAxis.actualRadiusExtentScale;
		let innerRadiusExtentScale: number = this.radiusAxis.actualInnerRadiusExtentScale;
		for (let i: number = 0; i < count; i++) {
			if ((angleColumn.item(i) <= angleMax && angleColumn.item(i) >= angleMin && radiusColumn.item(i) <= radiusMax && radiusColumn.item(i) >= radiusMin) || (isNaN_(angleColumn.item(i)) || isNaN_(radiusColumn.item(i)))) {
				scaledAngle = this.angleAxis.getScaledAngle1(angleColumn.item(i), angleLogarithmic, angleInverted);
				scaledRadius = this.radiusAxis.getScaledValue4(radiusColumn.item(i), radiusLogarithmic, radiusInverted, radiusExtentScale, innerRadiusExtentScale);
				X = cX + (scaledRadius * cosStrategy(i, scaledAngle));
				Y = cY + (scaledRadius * sinStrategy(i, scaledAngle));
				X = viewportRect.left + viewportRect.width * (X - windowRect.left) / windowRect.width;
				Y = viewportRect.top + viewportRect.height * (Y - windowRect.top) / windowRect.height;
				points.add(<Point>{ $type: Point_$type, x: X, y: Y });
			} else {
				points.add(<Point>{ $type: Point_$type, x: NaN, y: NaN });
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
	getYValue(angle: number, radius: number, windowRect: Rect, viewportRect: Rect, sinStrategy: (arg1: number) => number): number {
		let Y: number = this.center.y + (radius * sinStrategy(angle));
		return ViewportUtils.transformYToViewport(Y, windowRect, viewportRect);
	}
}


