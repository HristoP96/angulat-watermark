/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { Axis } from "./Axis";
import { FrameExtended } from "./FrameExtended";
import { Base, IEnumerable$1, Number_$type, Type, markType } from "igniteui-core/type";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class AxisAnnotationFrame extends Frame {
	static $t: Type = markType(AxisAnnotationFrame, 'AxisAnnotationFrame', (<any>Frame).$type);
	protected static interpolateAxes(ret: List$1<Axis>, p: number, min: List$1<Axis>, max: List$1<Axis>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			let newVals: Axis[] = <Axis[]>new Array(count - ret.count);
			for (let i = 0; i < count - ret.count; i++) {
				newVals[i] = null;
			}
			ret.insertRange(ret.count, <IEnumerable$1<Axis>><any>newVals);
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		for (let i1: number = 0; i1 < Math.min(minCount, maxCount); ++i1) {
			if (p == 0) {
				ret._inner[i1] = min._inner[i1];
			} else {
				ret._inner[i1] = max._inner[i1];
			}
		}
		if (minCount < maxCount) {
			let mn: Axis = minCount > 0 ? min._inner[minCount - 1] : null;
			for (let i2: number = minCount; i2 < maxCount; ++i2) {
				if (p == 0) {
					ret._inner[i2] = mn;
				} else {
					ret._inner[i2] = max._inner[i2];
				}
			}
		}
		if (minCount > maxCount) {
			let mx: Axis = maxCount > 0 ? max._inner[maxCount - 1] : null;
			for (let i3: number = maxCount; i3 < minCount; ++i3) {
				if (p == 0) {
					ret._inner[i3] = min._inner[i3];
				} else {
					ret._inner[i3] = mx;
				}
			}
		}
	}
	constructor() {
		super();
		this.xAxisAnnotationTextColors = new List$1<Brush>((<any>Brush).$type, 0);
		this.xAxisAnnotationBackgrounds = new List$1<Brush>((<any>Brush).$type, 0);
		this.xAxisAnnotationOutlines = new List$1<Brush>((<any>Brush).$type, 0);
		this.xAxisAnnotationPaddingsLeft = new List$1<number>(Number_$type, 0);
		this.xAxisAnnotationPaddingsRight = new List$1<number>(Number_$type, 0);
		this.xAxisAnnotationPaddingsTop = new List$1<number>(Number_$type, 0);
		this.xAxisAnnotationPaddingsBottom = new List$1<number>(Number_$type, 0);
		this.xAxisAnnotationStrokeThicknesses = new List$1<number>(Number_$type, 0);
		this.yAxisAnnotationTextColors = new List$1<Brush>((<any>Brush).$type, 0);
		this.yAxisAnnotationBackgrounds = new List$1<Brush>((<any>Brush).$type, 0);
		this.yAxisAnnotationOutlines = new List$1<Brush>((<any>Brush).$type, 0);
		this.yAxisAnnotationPaddingsLeft = new List$1<number>(Number_$type, 0);
		this.yAxisAnnotationPaddingsRight = new List$1<number>(Number_$type, 0);
		this.yAxisAnnotationPaddingsTop = new List$1<number>(Number_$type, 0);
		this.yAxisAnnotationPaddingsBottom = new List$1<number>(Number_$type, 0);
		this.yAxisAnnotationStrokeThicknesses = new List$1<number>(Number_$type, 0);
		this.xAxes = new List$1<Axis>((<any>Axis).$type, 0);
		this.yAxes = new List$1<Axis>((<any>Axis).$type, 0);
		this.xAxisValues = new List$1<number>(Number_$type, 0);
		this.xAxisValuePositions = new List$1<number>(Number_$type, 0);
		this.yAxisValues = new List$1<number>(Number_$type, 0);
		this.yAxisValuePositions = new List$1<number>(Number_$type, 0);
	}
	private _xAxisAnnotationTextColors: List$1<Brush> = null;
	get xAxisAnnotationTextColors(): List$1<Brush> {
		return this._xAxisAnnotationTextColors;
	}
	set xAxisAnnotationTextColors(value: List$1<Brush>) {
		this._xAxisAnnotationTextColors = value;
	}
	private _xAxisAnnotationOutlines: List$1<Brush> = null;
	get xAxisAnnotationOutlines(): List$1<Brush> {
		return this._xAxisAnnotationOutlines;
	}
	set xAxisAnnotationOutlines(value: List$1<Brush>) {
		this._xAxisAnnotationOutlines = value;
	}
	private _xAxisAnnotationBackgrounds: List$1<Brush> = null;
	get xAxisAnnotationBackgrounds(): List$1<Brush> {
		return this._xAxisAnnotationBackgrounds;
	}
	set xAxisAnnotationBackgrounds(value: List$1<Brush>) {
		this._xAxisAnnotationBackgrounds = value;
	}
	private _xAxisAnnotationStrokeThicknesses: List$1<number> = null;
	get xAxisAnnotationStrokeThicknesses(): List$1<number> {
		return this._xAxisAnnotationStrokeThicknesses;
	}
	set xAxisAnnotationStrokeThicknesses(value: List$1<number>) {
		this._xAxisAnnotationStrokeThicknesses = value;
	}
	private _xAxisAnnotationPaddingsLeft: List$1<number> = null;
	get xAxisAnnotationPaddingsLeft(): List$1<number> {
		return this._xAxisAnnotationPaddingsLeft;
	}
	set xAxisAnnotationPaddingsLeft(value: List$1<number>) {
		this._xAxisAnnotationPaddingsLeft = value;
	}
	private _xAxisAnnotationPaddingsTop: List$1<number> = null;
	get xAxisAnnotationPaddingsTop(): List$1<number> {
		return this._xAxisAnnotationPaddingsTop;
	}
	set xAxisAnnotationPaddingsTop(value: List$1<number>) {
		this._xAxisAnnotationPaddingsTop = value;
	}
	private _xAxisAnnotationPaddingsRight: List$1<number> = null;
	get xAxisAnnotationPaddingsRight(): List$1<number> {
		return this._xAxisAnnotationPaddingsRight;
	}
	set xAxisAnnotationPaddingsRight(value: List$1<number>) {
		this._xAxisAnnotationPaddingsRight = value;
	}
	private _xAxisAnnotationPaddingsBottom: List$1<number> = null;
	get xAxisAnnotationPaddingsBottom(): List$1<number> {
		return this._xAxisAnnotationPaddingsBottom;
	}
	set xAxisAnnotationPaddingsBottom(value: List$1<number>) {
		this._xAxisAnnotationPaddingsBottom = value;
	}
	private _yAxisAnnotationTextColors: List$1<Brush> = null;
	get yAxisAnnotationTextColors(): List$1<Brush> {
		return this._yAxisAnnotationTextColors;
	}
	set yAxisAnnotationTextColors(value: List$1<Brush>) {
		this._yAxisAnnotationTextColors = value;
	}
	private _yAxisAnnotationOutlines: List$1<Brush> = null;
	get yAxisAnnotationOutlines(): List$1<Brush> {
		return this._yAxisAnnotationOutlines;
	}
	set yAxisAnnotationOutlines(value: List$1<Brush>) {
		this._yAxisAnnotationOutlines = value;
	}
	private _yAxisAnnotationBackgrounds: List$1<Brush> = null;
	get yAxisAnnotationBackgrounds(): List$1<Brush> {
		return this._yAxisAnnotationBackgrounds;
	}
	set yAxisAnnotationBackgrounds(value: List$1<Brush>) {
		this._yAxisAnnotationBackgrounds = value;
	}
	private _yAxisAnnotationStrokeThicknesses: List$1<number> = null;
	get yAxisAnnotationStrokeThicknesses(): List$1<number> {
		return this._yAxisAnnotationStrokeThicknesses;
	}
	set yAxisAnnotationStrokeThicknesses(value: List$1<number>) {
		this._yAxisAnnotationStrokeThicknesses = value;
	}
	private _yAxisAnnotationPaddingsLeft: List$1<number> = null;
	get yAxisAnnotationPaddingsLeft(): List$1<number> {
		return this._yAxisAnnotationPaddingsLeft;
	}
	set yAxisAnnotationPaddingsLeft(value: List$1<number>) {
		this._yAxisAnnotationPaddingsLeft = value;
	}
	private _yAxisAnnotationPaddingsTop: List$1<number> = null;
	get yAxisAnnotationPaddingsTop(): List$1<number> {
		return this._yAxisAnnotationPaddingsTop;
	}
	set yAxisAnnotationPaddingsTop(value: List$1<number>) {
		this._yAxisAnnotationPaddingsTop = value;
	}
	private _yAxisAnnotationPaddingsRight: List$1<number> = null;
	get yAxisAnnotationPaddingsRight(): List$1<number> {
		return this._yAxisAnnotationPaddingsRight;
	}
	set yAxisAnnotationPaddingsRight(value: List$1<number>) {
		this._yAxisAnnotationPaddingsRight = value;
	}
	private _yAxisAnnotationPaddingsBottom: List$1<number> = null;
	get yAxisAnnotationPaddingsBottom(): List$1<number> {
		return this._yAxisAnnotationPaddingsBottom;
	}
	set yAxisAnnotationPaddingsBottom(value: List$1<number>) {
		this._yAxisAnnotationPaddingsBottom = value;
	}
	private _xAxisValues: List$1<number> = null;
	get xAxisValues(): List$1<number> {
		return this._xAxisValues;
	}
	set xAxisValues(value: List$1<number>) {
		this._xAxisValues = value;
	}
	private _yAxisValues: List$1<number> = null;
	get yAxisValues(): List$1<number> {
		return this._yAxisValues;
	}
	set yAxisValues(value: List$1<number>) {
		this._yAxisValues = value;
	}
	private _xAxisValuePositions: List$1<number> = null;
	get xAxisValuePositions(): List$1<number> {
		return this._xAxisValuePositions;
	}
	set xAxisValuePositions(value: List$1<number>) {
		this._xAxisValuePositions = value;
	}
	private _yAxisValuePositions: List$1<number> = null;
	get yAxisValuePositions(): List$1<number> {
		return this._yAxisValuePositions;
	}
	set yAxisValuePositions(value: List$1<number>) {
		this._yAxisValuePositions = value;
	}
	private _xAxes: List$1<Axis> = null;
	get xAxes(): List$1<Axis> {
		return this._xAxes;
	}
	set xAxes(value: List$1<Axis>) {
		this._xAxes = value;
	}
	private _yAxes: List$1<Axis> = null;
	get yAxes(): List$1<Axis> {
		return this._yAxes;
	}
	set yAxes(value: List$1<Axis>) {
		this._yAxes = value;
	}
	interpolate2(p: number, min: Frame, max: Frame): void {
		let mn: AxisAnnotationFrame = <AxisAnnotationFrame>min;
		let mx: AxisAnnotationFrame = <AxisAnnotationFrame>max;
		FrameExtended.interpolate(this.xAxisAnnotationTextColors, p, mn.xAxisAnnotationTextColors, mx.xAxisAnnotationTextColors, InterpolationMode.RGB);
		FrameExtended.interpolate(this.xAxisAnnotationBackgrounds, p, mn.xAxisAnnotationBackgrounds, mx.xAxisAnnotationBackgrounds, InterpolationMode.RGB);
		FrameExtended.interpolate(this.xAxisAnnotationOutlines, p, mn.xAxisAnnotationOutlines, mx.xAxisAnnotationOutlines, InterpolationMode.RGB);
		Frame.interpolate1(this.xAxisAnnotationPaddingsLeft, p, mn.xAxisAnnotationPaddingsLeft, mx.xAxisAnnotationPaddingsLeft);
		Frame.interpolate1(this.xAxisAnnotationPaddingsRight, p, mn.xAxisAnnotationPaddingsRight, mx.xAxisAnnotationPaddingsRight);
		Frame.interpolate1(this.xAxisAnnotationPaddingsTop, p, mn.xAxisAnnotationPaddingsTop, mx.xAxisAnnotationPaddingsTop);
		Frame.interpolate1(this.xAxisAnnotationPaddingsBottom, p, mn.xAxisAnnotationPaddingsBottom, mx.xAxisAnnotationPaddingsBottom);
		Frame.interpolate1(this.xAxisAnnotationStrokeThicknesses, p, mn.xAxisAnnotationStrokeThicknesses, mx.xAxisAnnotationStrokeThicknesses);
		FrameExtended.interpolate(this.yAxisAnnotationTextColors, p, mn.yAxisAnnotationTextColors, mx.yAxisAnnotationTextColors, InterpolationMode.RGB);
		FrameExtended.interpolate(this.yAxisAnnotationBackgrounds, p, mn.yAxisAnnotationBackgrounds, mx.yAxisAnnotationBackgrounds, InterpolationMode.RGB);
		FrameExtended.interpolate(this.yAxisAnnotationOutlines, p, mn.yAxisAnnotationOutlines, mx.yAxisAnnotationOutlines, InterpolationMode.RGB);
		Frame.interpolate1(this.yAxisAnnotationPaddingsLeft, p, mn.yAxisAnnotationPaddingsLeft, mx.yAxisAnnotationPaddingsLeft);
		Frame.interpolate1(this.yAxisAnnotationPaddingsRight, p, mn.yAxisAnnotationPaddingsRight, mx.yAxisAnnotationPaddingsRight);
		Frame.interpolate1(this.yAxisAnnotationPaddingsTop, p, mn.yAxisAnnotationPaddingsTop, mx.yAxisAnnotationPaddingsTop);
		Frame.interpolate1(this.yAxisAnnotationPaddingsBottom, p, mn.yAxisAnnotationPaddingsBottom, mx.yAxisAnnotationPaddingsBottom);
		Frame.interpolate1(this.yAxisAnnotationStrokeThicknesses, p, mn.yAxisAnnotationStrokeThicknesses, mx.yAxisAnnotationStrokeThicknesses);
		AxisAnnotationFrame.interpolateAxes(this.xAxes, p, mn.xAxes, mx.xAxes);
		AxisAnnotationFrame.interpolateAxes(this.yAxes, p, mn.yAxes, mx.yAxes);
	}
}


