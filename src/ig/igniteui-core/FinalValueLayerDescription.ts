/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FinalValueLayerDescription extends AnnotationLayerDescription {
	static $t: Type = markType(FinalValueLayerDescription, 'FinalValueLayerDescription', (<any>AnnotationLayerDescription).$type);
	protected get_type(): string {
		return "FinalValueLayer";
	}
	constructor() {
		super();
	}
	private _targetSeriesRef: string = null;
	get targetSeriesRef(): string {
		return this._targetSeriesRef;
	}
	set targetSeriesRef(value: string) {
		this._targetSeriesRef = value;
		this.markDirty("TargetSeriesRef");
	}
	private _finalValueSelectionMode: string = null;
	get finalValueSelectionMode(): string {
		return this._finalValueSelectionMode;
	}
	set finalValueSelectionMode(value: string) {
		this._finalValueSelectionMode = value;
		this.markDirty("FinalValueSelectionMode");
	}
	private _axisAnnotationTextColor: string = null;
	get axisAnnotationTextColor(): string {
		return this._axisAnnotationTextColor;
	}
	set axisAnnotationTextColor(value: string) {
		this._axisAnnotationTextColor = value;
		this.markDirty("AxisAnnotationTextColor");
	}
	private _axisAnnotationBackground: string = null;
	get axisAnnotationBackground(): string {
		return this._axisAnnotationBackground;
	}
	set axisAnnotationBackground(value: string) {
		this._axisAnnotationBackground = value;
		this.markDirty("AxisAnnotationBackground");
	}
	private _axisAnnotationInterpolatedValuePrecision: number = 0;
	get axisAnnotationInterpolatedValuePrecision(): number {
		return this._axisAnnotationInterpolatedValuePrecision;
	}
	set axisAnnotationInterpolatedValuePrecision(value: number) {
		this._axisAnnotationInterpolatedValuePrecision = value;
		this.markDirty("AxisAnnotationInterpolatedValuePrecision");
	}
	private _axisAnnotationOutline: string = null;
	get axisAnnotationOutline(): string {
		return this._axisAnnotationOutline;
	}
	set axisAnnotationOutline(value: string) {
		this._axisAnnotationOutline = value;
		this.markDirty("AxisAnnotationOutline");
	}
	private _axisAnnotationPaddingLeft: number = 0;
	get axisAnnotationPaddingLeft(): number {
		return this._axisAnnotationPaddingLeft;
	}
	set axisAnnotationPaddingLeft(value: number) {
		this._axisAnnotationPaddingLeft = value;
		this.markDirty("AxisAnnotationPaddingLeft");
	}
	private _axisAnnotationPaddingTop: number = 0;
	get axisAnnotationPaddingTop(): number {
		return this._axisAnnotationPaddingTop;
	}
	set axisAnnotationPaddingTop(value: number) {
		this._axisAnnotationPaddingTop = value;
		this.markDirty("AxisAnnotationPaddingTop");
	}
	private _axisAnnotationPaddingRight: number = 0;
	get axisAnnotationPaddingRight(): number {
		return this._axisAnnotationPaddingRight;
	}
	set axisAnnotationPaddingRight(value: number) {
		this._axisAnnotationPaddingRight = value;
		this.markDirty("AxisAnnotationPaddingRight");
	}
	private _axisAnnotationPaddingBottom: number = 0;
	get axisAnnotationPaddingBottom(): number {
		return this._axisAnnotationPaddingBottom;
	}
	set axisAnnotationPaddingBottom(value: number) {
		this._axisAnnotationPaddingBottom = value;
		this.markDirty("AxisAnnotationPaddingBottom");
	}
	private _axisAnnotationStrokeThickness: number = 0;
	get axisAnnotationStrokeThickness(): number {
		return this._axisAnnotationStrokeThickness;
	}
	set axisAnnotationStrokeThickness(value: number) {
		this._axisAnnotationStrokeThickness = value;
		this.markDirty("AxisAnnotationStrokeThickness");
	}
}


