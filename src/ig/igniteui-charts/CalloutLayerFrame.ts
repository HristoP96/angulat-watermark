/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { List$1 } from "igniteui-core/List$1";
import { Base, IEnumerable$1, Number_$type, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { FrameExtended } from "./FrameExtended";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class CalloutLayerFrame extends Frame {
	static $t: Type = markType(CalloutLayerFrame, 'CalloutLayerFrame', (<any>Frame).$type);
	interpolate2(p: number, min: Frame, max: Frame): void {
		let mn: CalloutLayerFrame = <CalloutLayerFrame>min;
		let mx: CalloutLayerFrame = <CalloutLayerFrame>max;
		FrameExtended.interpolate(this.calloutTextColors, p, mn.calloutTextColors, mx.calloutTextColors, InterpolationMode.RGB);
		FrameExtended.interpolate(this.calloutBackgrounds, p, mn.calloutBackgrounds, mx.calloutBackgrounds, InterpolationMode.RGB);
		FrameExtended.interpolate(this.calloutOutlines, p, mn.calloutOutlines, mx.calloutOutlines, InterpolationMode.RGB);
		FrameExtended.interpolate(this.calloutLeaderBrushes, p, mn.calloutLeaderBrushes, mx.calloutLeaderBrushes, InterpolationMode.RGB);
		Frame.interpolate1(this.calloutPaddingsLeft, p, mn.calloutPaddingsLeft, mx.calloutPaddingsLeft);
		Frame.interpolate1(this.calloutPaddingsTop, p, mn.calloutPaddingsTop, mx.calloutPaddingsTop);
		Frame.interpolate1(this.calloutPaddingsRight, p, mn.calloutPaddingsRight, mx.calloutPaddingsRight);
		Frame.interpolate1(this.calloutPaddingsBottom, p, mn.calloutPaddingsBottom, mx.calloutPaddingsBottom);
		Frame.interpolate1(this.calloutStrokeThicknesses, p, mn.calloutStrokeThicknesses, mx.calloutStrokeThicknesses);
		Frame.interpolate1(this.targetXPositions, p, mn.targetXPositions, mx.targetXPositions);
		Frame.interpolate1(this.targetYPositions, p, mn.targetYPositions, mx.targetYPositions);
		Frame.interpolate1(this.labelXPositions, p, mn.labelXPositions, mx.labelXPositions);
		Frame.interpolate1(this.labelYPositions, p, mn.labelYPositions, mx.labelYPositions);
		CalloutLayerFrame.interpolateContents(this.contents, p, mn.contents, mx.contents);
		CalloutLayerFrame.interpolateContents(this.callouts, p, mn.callouts, mx.callouts);
		CalloutLayerFrame.interpolateContents(this.contexts, p, mn.contexts, mx.contexts);
	}
	protected static interpolateContents(ret: List$1<any>, p: number, min: List$1<any>, max: List$1<any>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			let newVals: any[] = <any[]>new Array(count - ret.count);
			for (let i = 0; i < count - ret.count; i++) {
				newVals[i] = null;
			}
			ret.insertRange(ret.count, <IEnumerable$1<any>><any>newVals);
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
			let mn: any = minCount > 0 ? min._inner[minCount - 1] : null;
			for (let i2: number = minCount; i2 < maxCount; ++i2) {
				if (p == 0) {
					ret._inner[i2] = mn;
				} else {
					ret._inner[i2] = max._inner[i2];
				}
			}
		}
		if (minCount > maxCount) {
			let mx: any = maxCount > 0 ? max._inner[maxCount - 1] : null;
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
		this.contents = new List$1<any>((<any>Base).$type, 0);
		this.callouts = new List$1<any>((<any>Base).$type, 0);
		this.contexts = new List$1<any>((<any>Base).$type, 0);
		this.calloutTextColors = new List$1<Brush>((<any>Brush).$type, 0);
		this.calloutOutlines = new List$1<Brush>((<any>Brush).$type, 0);
		this.calloutLeaderBrushes = new List$1<Brush>((<any>Brush).$type, 0);
		this.calloutBackgrounds = new List$1<Brush>((<any>Brush).$type, 0);
		this.calloutStrokeThicknesses = new List$1<number>(Number_$type, 0);
		this.calloutPaddingsLeft = new List$1<number>(Number_$type, 0);
		this.calloutPaddingsTop = new List$1<number>(Number_$type, 0);
		this.calloutPaddingsRight = new List$1<number>(Number_$type, 0);
		this.calloutPaddingsBottom = new List$1<number>(Number_$type, 0);
		this.targetXPositions = new List$1<number>(Number_$type, 0);
		this.targetYPositions = new List$1<number>(Number_$type, 0);
		this.labelXPositions = new List$1<number>(Number_$type, 0);
		this.labelYPositions = new List$1<number>(Number_$type, 0);
	}
	private _contents: List$1<any> = null;
	get contents(): List$1<any> {
		return this._contents;
	}
	set contents(value: List$1<any>) {
		this._contents = value;
	}
	private _callouts: List$1<any> = null;
	get callouts(): List$1<any> {
		return this._callouts;
	}
	set callouts(value: List$1<any>) {
		this._callouts = value;
	}
	private _contexts: List$1<any> = null;
	get contexts(): List$1<any> {
		return this._contexts;
	}
	set contexts(value: List$1<any>) {
		this._contexts = value;
	}
	private _calloutTextColors: List$1<Brush> = null;
	get calloutTextColors(): List$1<Brush> {
		return this._calloutTextColors;
	}
	set calloutTextColors(value: List$1<Brush>) {
		this._calloutTextColors = value;
	}
	private _calloutOutlines: List$1<Brush> = null;
	get calloutOutlines(): List$1<Brush> {
		return this._calloutOutlines;
	}
	set calloutOutlines(value: List$1<Brush>) {
		this._calloutOutlines = value;
	}
	private _calloutLeaderBrushes: List$1<Brush> = null;
	get calloutLeaderBrushes(): List$1<Brush> {
		return this._calloutLeaderBrushes;
	}
	set calloutLeaderBrushes(value: List$1<Brush>) {
		this._calloutLeaderBrushes = value;
	}
	private _calloutBackgrounds: List$1<Brush> = null;
	get calloutBackgrounds(): List$1<Brush> {
		return this._calloutBackgrounds;
	}
	set calloutBackgrounds(value: List$1<Brush>) {
		this._calloutBackgrounds = value;
	}
	private _calloutStrokeThicknesses: List$1<number> = null;
	get calloutStrokeThicknesses(): List$1<number> {
		return this._calloutStrokeThicknesses;
	}
	set calloutStrokeThicknesses(value: List$1<number>) {
		this._calloutStrokeThicknesses = value;
	}
	private _calloutPaddingsLeft: List$1<number> = null;
	get calloutPaddingsLeft(): List$1<number> {
		return this._calloutPaddingsLeft;
	}
	set calloutPaddingsLeft(value: List$1<number>) {
		this._calloutPaddingsLeft = value;
	}
	private _calloutPaddingsTop: List$1<number> = null;
	get calloutPaddingsTop(): List$1<number> {
		return this._calloutPaddingsTop;
	}
	set calloutPaddingsTop(value: List$1<number>) {
		this._calloutPaddingsTop = value;
	}
	private _calloutPaddingsRight: List$1<number> = null;
	get calloutPaddingsRight(): List$1<number> {
		return this._calloutPaddingsRight;
	}
	set calloutPaddingsRight(value: List$1<number>) {
		this._calloutPaddingsRight = value;
	}
	private _calloutPaddingsBottom: List$1<number> = null;
	get calloutPaddingsBottom(): List$1<number> {
		return this._calloutPaddingsBottom;
	}
	set calloutPaddingsBottom(value: List$1<number>) {
		this._calloutPaddingsBottom = value;
	}
	private _targetXPositions: List$1<number> = null;
	get targetXPositions(): List$1<number> {
		return this._targetXPositions;
	}
	set targetXPositions(value: List$1<number>) {
		this._targetXPositions = value;
	}
	private _targetYPositions: List$1<number> = null;
	get targetYPositions(): List$1<number> {
		return this._targetYPositions;
	}
	set targetYPositions(value: List$1<number>) {
		this._targetYPositions = value;
	}
	private _labelXPositions: List$1<number> = null;
	get labelXPositions(): List$1<number> {
		return this._labelXPositions;
	}
	set labelXPositions(value: List$1<number>) {
		this._labelXPositions = value;
	}
	private _labelYPositions: List$1<number> = null;
	get labelYPositions(): List$1<number> {
		return this._labelYPositions;
	}
	set labelYPositions(value: List$1<number>) {
		this._labelYPositions = value;
	}
}


