/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { List$1 } from "igniteui-core/List$1";
import { RadialGaugeRangeFrame } from "./RadialGaugeRangeFrame";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationUtil } from "igniteui-core/InterpolationUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class RadialGaugeScaleFrame extends Base {
	static $t: Type = markType(RadialGaugeScaleFrame, 'RadialGaugeScaleFrame');
	constructor() {
		super();
		this.ranges = new List$1<RadialGaugeRangeFrame>((<any>RadialGaugeRangeFrame).$type, 0);
		this.tickAngles = <number[]>new Array(0);
		this.minorTickAngles = <number[]>new Array(0);
		this.labelAngles = <number[]>new Array(0);
		this.labels = <string[]>new Array(0);
		this.labelWidths = <number[]>new Array(0);
		this.labelHeights = <number[]>new Array(0);
		this.labelXOffsets = <number[]>new Array(0);
		this.labelYOffsets = <number[]>new Array(0);
	}
	private _tickAngles: number[] = null;
	get tickAngles(): number[] {
		return this._tickAngles;
	}
	set tickAngles(value: number[]) {
		this._tickAngles = value;
	}
	private _minorTickAngles: number[] = null;
	get minorTickAngles(): number[] {
		return this._minorTickAngles;
	}
	set minorTickAngles(value: number[]) {
		this._minorTickAngles = value;
	}
	private _labelAngles: number[] = null;
	get labelAngles(): number[] {
		return this._labelAngles;
	}
	set labelAngles(value: number[]) {
		this._labelAngles = value;
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
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
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
	private _scaleStartAngle: number = 0;
	get scaleStartAngle(): number {
		return this._scaleStartAngle;
	}
	set scaleStartAngle(value: number) {
		this._scaleStartAngle = value;
	}
	private _scaleEndAngle: number = 0;
	get scaleEndAngle(): number {
		return this._scaleEndAngle;
	}
	set scaleEndAngle(value: number) {
		this._scaleEndAngle = value;
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
	private _minorTickStrokeThickness: number = 0;
	get minorTickStrokeThickness(): number {
		return this._minorTickStrokeThickness;
	}
	set minorTickStrokeThickness(value: number) {
		this._minorTickStrokeThickness = value;
	}
	private _minorTickBrush: Brush = null;
	get minorTickBrush(): Brush {
		return this._minorTickBrush;
	}
	set minorTickBrush(value: Brush) {
		this._minorTickBrush = value;
	}
	private _scaleBrush: Brush = null;
	get scaleBrush(): Brush {
		return this._scaleBrush;
	}
	set scaleBrush(value: Brush) {
		this._scaleBrush = value;
	}
	private _fontBrush: Brush = null;
	get fontBrush(): Brush {
		return this._fontBrush;
	}
	set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	private _scaleOversweep: number = 0;
	get scaleOversweep(): number {
		return this._scaleOversweep;
	}
	set scaleOversweep(value: number) {
		this._scaleOversweep = value;
	}
	private _ranges: List$1<RadialGaugeRangeFrame> = null;
	get ranges(): List$1<RadialGaugeRangeFrame> {
		return this._ranges;
	}
	set ranges(value: List$1<RadialGaugeRangeFrame>) {
		this._ranges = value;
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
	interpolate(p: number, previous: RadialGaugeScaleFrame, next: RadialGaugeScaleFrame): void {
		this.scaleBrush = BrushUtil.getInterpolation(previous.scaleBrush, p, next.scaleBrush, InterpolationMode.RGB);
		this.tickBrush = BrushUtil.getInterpolation(previous.tickBrush, p, next.tickBrush, InterpolationMode.RGB);
		this.minorTickBrush = BrushUtil.getInterpolation(previous.minorTickBrush, p, next.minorTickBrush, InterpolationMode.RGB);
		if (previous.fontBrush == null && next.fontBrush == null) {
			this.fontBrush = null;
		} else {
			this.fontBrush = BrushUtil.getInterpolation(previous.fontBrush, p, next.fontBrush, InterpolationMode.RGB);
		}
		this.scaleStartExtent = previous.scaleStartExtent + (next.scaleStartExtent - previous.scaleStartExtent) * p;
		this.scaleEndExtent = previous.scaleEndExtent + (next.scaleEndExtent - previous.scaleEndExtent) * p;
		this.scaleStartAngle = previous.scaleStartAngle + (next.scaleStartAngle - previous.scaleStartAngle) * p;
		this.scaleEndAngle = previous.scaleEndAngle + (next.scaleEndAngle - previous.scaleEndAngle) * p;
		this.scaleOversweep = previous.scaleOversweep + (next.scaleOversweep - previous.scaleOversweep) * p;
		this.labelExtent = previous.labelExtent + (next.labelExtent - previous.labelExtent) * p;
		this.tickStartExtent = previous.tickStartExtent + (next.tickStartExtent - previous.tickStartExtent) * p;
		this.tickEndExtent = previous.tickEndExtent + (next.tickEndExtent - previous.tickEndExtent) * p;
		this.minorTickStartExtent = previous.minorTickStartExtent + (next.minorTickStartExtent - previous.minorTickStartExtent) * p;
		this.minorTickEndExtent = previous.minorTickEndExtent + (next.minorTickEndExtent - previous.minorTickEndExtent) * p;
		this.tickStrokeThickness = previous.tickStrokeThickness + (next.tickStrokeThickness - previous.tickStrokeThickness) * p;
		this.minorTickStrokeThickness = previous.minorTickStrokeThickness + (next.minorTickStrokeThickness - previous.minorTickStrokeThickness) * p;
		this.tickAngles = this.interpolateArray(p, this.tickAngles, previous.tickAngles, next.tickAngles);
		this.minorTickAngles = this.interpolateArray(p, this.minorTickAngles, previous.minorTickAngles, next.minorTickAngles);
		this.labelAngles = this.interpolateArray(p, this.labelAngles, previous.labelAngles, next.labelAngles);
		this.labelWidths = this.interpolateArray(p, this.labelWidths, previous.labelWidths, next.labelWidths);
		this.labelHeights = this.interpolateArray(p, this.labelHeights, previous.labelHeights, next.labelHeights);
		this.labelXOffsets = this.interpolateArray(p, this.labelXOffsets, previous.labelXOffsets, next.labelXOffsets);
		this.labelYOffsets = this.interpolateArray(p, this.labelYOffsets, previous.labelYOffsets, next.labelYOffsets);
		this.labels = this.interpolateStringArray(p, this.labels, previous.labels, next.labels);
		this.interpolateRanges(p, this.ranges, previous.ranges, next.ranges);
	}
	private interpolateRanges(p: number, interpolatedRanges: List$1<RadialGaugeRangeFrame>, previousRanges: List$1<RadialGaugeRangeFrame>, nextRanges: List$1<RadialGaugeRangeFrame>): void {
		InterpolationUtil.interpolateValues$1<RadialGaugeRangeFrame>((<any>RadialGaugeRangeFrame).$type, interpolatedRanges, p, previousRanges, nextRanges, () => new RadialGaugeRangeFrame(), RadialGaugeRangeFrame.interpolate);
	}
}


