/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { LinearGraphRectFrame } from "./LinearGraphRectFrame";
import { Brush } from "igniteui-core/Brush";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { LinearScaleOrientation } from "./LinearScaleOrientation";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationUtil } from "igniteui-core/InterpolationUtil";
import { LinearGraphNeedleFrame } from "./LinearGraphNeedleFrame";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export abstract class LinearGraphScaleFrame extends Base {
	static $t: Type = markType(LinearGraphScaleFrame, 'LinearGraphScaleFrame');
	constructor() {
		super();
		this.ranges = new List$1<LinearGraphRectFrame>((<any>LinearGraphRectFrame).$type, 0);
		this.ticks = <number[]>new Array(0);
		this.minorTicks = <number[]>new Array(0);
		this.labelValues = <number[]>new Array(0);
		this.labels = <string[]>new Array(0);
		this.labelWidths = <number[]>new Array(0);
		this.labelHeights = <number[]>new Array(0);
		this.labelXOffsets = <number[]>new Array(0);
		this.labelYOffsets = <number[]>new Array(0);
		this.scaleBackgroundFrame = new LinearGraphRectFrame();
	}
	private _ranges: List$1<LinearGraphRectFrame> = null;
	get ranges(): List$1<LinearGraphRectFrame> {
		return this._ranges;
	}
	set ranges(value: List$1<LinearGraphRectFrame>) {
		this._ranges = value;
	}
	private _scaleStartExtent: number = 0;
	get scaleStartExtent(): number {
		return this._scaleStartExtent;
	}
	set scaleStartExtent(value: number) {
		this._scaleStartExtent = value;
	}
	private _scaleEndExtent: number = 0;
	get scaleEndExtent(): number {
		return this._scaleEndExtent;
	}
	set scaleEndExtent(value: number) {
		this._scaleEndExtent = value;
	}
	private _scaleInnerExtent: number = 0;
	get scaleInnerExtent(): number {
		return this._scaleInnerExtent;
	}
	set scaleInnerExtent(value: number) {
		this._scaleInnerExtent = value;
	}
	private _scaleOuterExtent: number = 0;
	get scaleOuterExtent(): number {
		return this._scaleOuterExtent;
	}
	set scaleOuterExtent(value: number) {
		this._scaleOuterExtent = value;
	}
	private _scaleBackgroundFrame: LinearGraphRectFrame = null;
	get scaleBackgroundFrame(): LinearGraphRectFrame {
		return this._scaleBackgroundFrame;
	}
	set scaleBackgroundFrame(value: LinearGraphRectFrame) {
		this._scaleBackgroundFrame = value;
	}
	private _ticks: number[] = null;
	get ticks(): number[] {
		return this._ticks;
	}
	set ticks(value: number[]) {
		this._ticks = value;
	}
	private _tickStartExtent: number = 0;
	get tickStartExtent(): number {
		return this._tickStartExtent;
	}
	set tickStartExtent(value: number) {
		this._tickStartExtent = value;
	}
	private _tickEndExtent: number = 0;
	get tickEndExtent(): number {
		return this._tickEndExtent;
	}
	set tickEndExtent(value: number) {
		this._tickEndExtent = value;
	}
	private _tickBrush: Brush = null;
	get tickBrush(): Brush {
		return this._tickBrush;
	}
	set tickBrush(value: Brush) {
		this._tickBrush = value;
	}
	private _tickStrokeThickness: number = 0;
	get tickStrokeThickness(): number {
		return this._tickStrokeThickness;
	}
	set tickStrokeThickness(value: number) {
		this._tickStrokeThickness = value;
	}
	private _minorTicks: number[] = null;
	get minorTicks(): number[] {
		return this._minorTicks;
	}
	set minorTicks(value: number[]) {
		this._minorTicks = value;
	}
	private _minorTickStartExtent: number = 0;
	get minorTickStartExtent(): number {
		return this._minorTickStartExtent;
	}
	set minorTickStartExtent(value: number) {
		this._minorTickStartExtent = value;
	}
	private _minorTickEndExtent: number = 0;
	get minorTickEndExtent(): number {
		return this._minorTickEndExtent;
	}
	set minorTickEndExtent(value: number) {
		this._minorTickEndExtent = value;
	}
	private _minorTickBrush: Brush = null;
	get minorTickBrush(): Brush {
		return this._minorTickBrush;
	}
	set minorTickBrush(value: Brush) {
		this._minorTickBrush = value;
	}
	private _minorTickStrokeThickness: number = 0;
	get minorTickStrokeThickness(): number {
		return this._minorTickStrokeThickness;
	}
	set minorTickStrokeThickness(value: number) {
		this._minorTickStrokeThickness = value;
	}
	private _labelValues: number[] = null;
	get labelValues(): number[] {
		return this._labelValues;
	}
	set labelValues(value: number[]) {
		this._labelValues = value;
	}
	private _labels: string[] = null;
	get labels(): string[] {
		return this._labels;
	}
	set labels(value: string[]) {
		this._labels = value;
	}
	private _labelWidths: number[] = null;
	get labelWidths(): number[] {
		return this._labelWidths;
	}
	set labelWidths(value: number[]) {
		this._labelWidths = value;
	}
	private _labelHeights: number[] = null;
	get labelHeights(): number[] {
		return this._labelHeights;
	}
	set labelHeights(value: number[]) {
		this._labelHeights = value;
	}
	private _labelXOffsets: number[] = null;
	get labelXOffsets(): number[] {
		return this._labelXOffsets;
	}
	set labelXOffsets(value: number[]) {
		this._labelXOffsets = value;
	}
	private _labelYOffsets: number[] = null;
	get labelYOffsets(): number[] {
		return this._labelYOffsets;
	}
	set labelYOffsets(value: number[]) {
		this._labelYOffsets = value;
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
	}
	private _fontBrush: Brush = null;
	get fontBrush(): Brush {
		return this._fontBrush;
	}
	set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	getPathGeometry(scaleStartPoint: Point, breadth: number, length: number, orientation: LinearScaleOrientation): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let scaleStartX = scaleStartPoint.x;
		let scaleStartY = scaleStartPoint.y;
		let tl: LineSegment, tr: LineSegment, br: LineSegment, bl: LineSegment;
		if (orientation == LinearScaleOrientation.Vertical) {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + breadth * this.scaleInnerExtent, y: scaleStartY };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + breadth * this.scaleOuterExtent, y: scaleStartY };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + breadth * this.scaleOuterExtent, y: scaleStartY + length };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + breadth * this.scaleInnerExtent, y: scaleStartY + length };
				return $ret;
			})());
		} else {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX, y: breadth * (1 - this.scaleOuterExtent) };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + length, y: breadth * (1 - this.scaleOuterExtent) };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX + length, y: breadth * (1 - this.scaleInnerExtent) };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: scaleStartX, y: breadth * (1 - this.scaleInnerExtent) };
				return $ret;
			})());
		}
		pf._startPoint = tl.point;
		pf._segments.add(tr);
		pf._segments.add(br);
		pf._segments.add(bl);
		pf._isClosed = true;
		pg.figures.add(pf);
		return pg;
	}
	interpolate(p: number, previous: LinearGraphScaleFrame, next: LinearGraphScaleFrame): void {
		this.tickBrush = BrushUtil.getInterpolation(previous.tickBrush, p, next.tickBrush, InterpolationMode.RGB);
		this.minorTickBrush = BrushUtil.getInterpolation(previous.minorTickBrush, p, next.minorTickBrush, InterpolationMode.RGB);
		if (previous.fontBrush == null && next.fontBrush == null) {
			this.fontBrush = null;
		} else {
			this.fontBrush = BrushUtil.getInterpolation(previous.fontBrush, p, next.fontBrush, InterpolationMode.RGB);
		}
		this.scaleStartExtent = previous.scaleStartExtent + (next.scaleStartExtent - previous.scaleStartExtent) * p;
		this.scaleEndExtent = previous.scaleEndExtent + (next.scaleEndExtent - previous.scaleEndExtent) * p;
		this.scaleInnerExtent = previous.scaleInnerExtent + (next.scaleInnerExtent - previous.scaleInnerExtent) * p;
		this.scaleOuterExtent = previous.scaleOuterExtent + (next.scaleOuterExtent - previous.scaleOuterExtent) * p;
		this.labelExtent = previous.labelExtent + (next.labelExtent - previous.labelExtent) * p;
		this.tickStartExtent = previous.tickStartExtent + (next.tickStartExtent - previous.tickStartExtent) * p;
		this.tickEndExtent = previous.tickEndExtent + (next.tickEndExtent - previous.tickEndExtent) * p;
		this.minorTickStartExtent = previous.minorTickStartExtent + (next.minorTickStartExtent - previous.minorTickStartExtent) * p;
		this.minorTickEndExtent = previous.minorTickEndExtent + (next.minorTickEndExtent - previous.minorTickEndExtent) * p;
		this.tickStrokeThickness = previous.tickStrokeThickness + (next.tickStrokeThickness - previous.tickStrokeThickness) * p;
		this.minorTickStrokeThickness = previous.minorTickStrokeThickness + (next.minorTickStrokeThickness - previous.minorTickStrokeThickness) * p;
		this.ticks = this.interpolateArray(p, this.ticks, previous.ticks, next.ticks);
		this.minorTicks = this.interpolateArray(p, this.minorTicks, previous.minorTicks, next.minorTicks);
		this.labelValues = this.interpolateArray(p, this.labelValues, previous.labelValues, next.labelValues);
		this.labelWidths = this.interpolateArray(p, this.labelWidths, previous.labelWidths, next.labelWidths);
		this.labelHeights = this.interpolateArray(p, this.labelHeights, previous.labelHeights, next.labelHeights);
		this.labelXOffsets = this.interpolateArray(p, this.labelXOffsets, previous.labelXOffsets, next.labelXOffsets);
		this.labelYOffsets = this.interpolateArray(p, this.labelYOffsets, previous.labelYOffsets, next.labelYOffsets);
		this.labels = this.interpolateStringArray(p, this.labels, previous.labels, next.labels);
		this.interpolateRectFrames(p, this.ranges, previous.ranges, next.ranges);
		this.scaleBackgroundFrame = this.interpolateRectFrame(p, previous.scaleBackgroundFrame, next.scaleBackgroundFrame);
	}
	private interpolateArray(p: number, dest: number[], prev: number[], next: number[]): number[] {
		let maxCount = Math.max(prev.length, next.length);
		let minCount = Math.min(prev.length, next.length);
		if (dest.length != maxCount) {
			dest = <number[]>new Array(maxCount);
		}
		let lastPrev: number = 0;
		if (prev.length > 0) {
			lastPrev = prev[prev.length - 1];
		}
		let lastNext: number = 0;
		if (next.length > 0) {
			lastNext = next[next.length - 1];
		}
		let usePrev: boolean = prev.length > next.length;
		let i = 0;
		for (i = 0; i < minCount; i++) {
			dest[i] = prev[i] + (next[i] - prev[i]) * p;
		}
		let prevVal: number;
		let nextVal: number;
		for (i = minCount; i < maxCount; i++) {
			if (usePrev) {
				prevVal = prev[i];
				nextVal = lastNext;
			} else {
				prevVal = lastPrev;
				nextVal = next[i];
			}
			dest[i] = prevVal + (nextVal - prevVal) * p;
		}
		return dest;
	}
	private interpolateStringArray(p: number, dest: string[], prev: string[], next: string[]): string[] {
		let maxCount = Math.max(prev.length, next.length);
		let minCount = Math.min(prev.length, next.length);
		if (dest.length != maxCount) {
			dest = <string[]>new Array(maxCount);
		}
		let lastPrev: string = null;
		if (prev.length > 0) {
			lastPrev = prev[prev.length - 1];
		}
		let lastNext: string = null;
		if (next.length > 0) {
			lastNext = next[next.length - 1];
		}
		let usePrev: boolean = prev.length > next.length;
		let i = 0;
		for (i = 0; i < minCount; i++) {
			dest[i] = next[i];
		}
		let prevVal: string;
		let nextVal: string;
		for (i = minCount; i < maxCount; i++) {
			if (usePrev) {
				prevVal = prev[i];
				nextVal = lastNext;
			} else {
				prevVal = lastPrev;
				nextVal = next[i];
			}
			if (nextVal != null) {
				dest[i] = nextVal;
			} else {
				dest[i] = prevVal;
			}
		}
		return dest;
	}
	protected interpolateRectFrames(p: number, interpolatedFrames: List$1<LinearGraphRectFrame>, previousFrames: List$1<LinearGraphRectFrame>, nextFrames: List$1<LinearGraphRectFrame>): void {
		InterpolationUtil.interpolateValues$1<LinearGraphRectFrame>((<any>LinearGraphRectFrame).$type, interpolatedFrames, p, previousFrames, nextFrames, () => new LinearGraphRectFrame(), LinearGraphRectFrame.interpolate);
	}
	protected interpolateRectFrame(p: number, previousFrame: LinearGraphRectFrame, nextFrame: LinearGraphRectFrame): LinearGraphRectFrame {
		let q = 1 - p;
		return LinearGraphRectFrame.interpolate(p, q, previousFrame, nextFrame);
	}
	protected interpolateNeedleFrames(p: number, interpolatedFrames: List$1<LinearGraphNeedleFrame>, previousFrames: List$1<LinearGraphNeedleFrame>, nextFrames: List$1<LinearGraphNeedleFrame>): void {
		InterpolationUtil.interpolateValues$1<LinearGraphNeedleFrame>((<any>LinearGraphNeedleFrame).$type, interpolatedFrames, p, previousFrames, nextFrames, () => new LinearGraphNeedleFrame(), LinearGraphNeedleFrame.interpolate);
	}
}


