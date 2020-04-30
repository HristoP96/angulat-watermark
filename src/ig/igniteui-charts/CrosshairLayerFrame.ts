/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisAnnotationFrame } from "./AxisAnnotationFrame";
import { List$1 } from "igniteui-core/List$1";
import { Brush } from "igniteui-core/Brush";
import { Frame } from "./Frame";
import { FrameExtended } from "./FrameExtended";
import { Base, Number_$type, Type, markType } from "igniteui-core/type";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class CrosshairLayerFrame extends AxisAnnotationFrame {
	static $t: Type = markType(CrosshairLayerFrame, 'CrosshairLayerFrame', (<any>AxisAnnotationFrame).$type);
	private _lineHeights: List$1<number> = null;
	get lineHeights(): List$1<number> {
		return this._lineHeights;
	}
	set lineHeights(value: List$1<number>) {
		this._lineHeights = value;
	}
	private _lineWidths: List$1<number> = null;
	get lineWidths(): List$1<number> {
		return this._lineWidths;
	}
	set lineWidths(value: List$1<number>) {
		this._lineWidths = value;
	}
	private _horizontalLineBrushes: List$1<Brush> = null;
	get horizontalLineBrushes(): List$1<Brush> {
		return this._horizontalLineBrushes;
	}
	set horizontalLineBrushes(value: List$1<Brush>) {
		this._horizontalLineBrushes = value;
	}
	private _verticalLineBrushes: List$1<Brush> = null;
	get verticalLineBrushes(): List$1<Brush> {
		return this._verticalLineBrushes;
	}
	set verticalLineBrushes(value: List$1<Brush>) {
		this._verticalLineBrushes = value;
	}
	constructor() {
		super();
		this.lineHeights = new List$1<number>(Number_$type, 0);
		this.lineWidths = new List$1<number>(Number_$type, 0);
		this.horizontalLineBrushes = new List$1<Brush>((<any>Brush).$type, 0);
		this.verticalLineBrushes = new List$1<Brush>((<any>Brush).$type, 0);
	}
	interpolate2(p: number, min: Frame, max: Frame): void {
		super.interpolate2(p, min, max);
		let mn: CrosshairLayerFrame = <CrosshairLayerFrame>min;
		let mx: CrosshairLayerFrame = <CrosshairLayerFrame>max;
		Frame.interpolate1(this.lineHeights, p, mn.lineHeights, mx.lineHeights);
		Frame.interpolate1(this.lineWidths, p, mn.lineWidths, mx.lineWidths);
		FrameExtended.interpolate(this.horizontalLineBrushes, p, mn.horizontalLineBrushes, mx.horizontalLineBrushes, InterpolationMode.RGB);
		FrameExtended.interpolate(this.verticalLineBrushes, p, mn.verticalLineBrushes, mx.verticalLineBrushes, InterpolationMode.RGB);
	}
}


