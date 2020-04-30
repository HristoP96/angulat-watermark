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
export class CrosshairLayerDescription extends AnnotationLayerDescription {
	static $t: Type = markType(CrosshairLayerDescription, 'CrosshairLayerDescription', (<any>AnnotationLayerDescription).$type);
	protected get_type(): string {
		return "CrosshairLayer";
	}
	constructor() {
		super();
	}
	private _horizontalLineStroke: string = null;
	get horizontalLineStroke(): string {
		return this._horizontalLineStroke;
	}
	set horizontalLineStroke(value: string) {
		this._horizontalLineStroke = value;
		this.markDirty("HorizontalLineStroke");
	}
	private _verticalLineStroke: string = null;
	get verticalLineStroke(): string {
		return this._verticalLineStroke;
	}
	set verticalLineStroke(value: string) {
		this._verticalLineStroke = value;
		this.markDirty("VerticalLineStroke");
	}
	private _targetSeriesRef: string = null;
	get targetSeriesRef(): string {
		return this._targetSeriesRef;
	}
	set targetSeriesRef(value: string) {
		this._targetSeriesRef = value;
		this.markDirty("TargetSeriesRef");
	}
	private _useInterpolation: boolean = false;
	get useInterpolation(): boolean {
		return this._useInterpolation;
	}
	set useInterpolation(value: boolean) {
		this._useInterpolation = value;
		this.markDirty("UseInterpolation");
	}
	private _isAxisAnnotationEnabled: boolean = false;
	get isAxisAnnotationEnabled(): boolean {
		return this._isAxisAnnotationEnabled;
	}
	set isAxisAnnotationEnabled(value: boolean) {
		this._isAxisAnnotationEnabled = value;
		this.markDirty("IsAxisAnnotationEnabled");
	}
	private _xAxisAnnotationTextColor: string = null;
	get xAxisAnnotationTextColor(): string {
		return this._xAxisAnnotationTextColor;
	}
	set xAxisAnnotationTextColor(value: string) {
		this._xAxisAnnotationTextColor = value;
		this.markDirty("XAxisAnnotationTextColor");
	}
	private _xAxisAnnotationBackground: string = null;
	get xAxisAnnotationBackground(): string {
		return this._xAxisAnnotationBackground;
	}
	set xAxisAnnotationBackground(value: string) {
		this._xAxisAnnotationBackground = value;
		this.markDirty("XAxisAnnotationBackground");
	}
	private _xAxisAnnotationInterpolatedValuePrecision: number = 0;
	get xAxisAnnotationInterpolatedValuePrecision(): number {
		return this._xAxisAnnotationInterpolatedValuePrecision;
	}
	set xAxisAnnotationInterpolatedValuePrecision(value: number) {
		this._xAxisAnnotationInterpolatedValuePrecision = value;
		this.markDirty("XAxisAnnotationInterpolatedValuePrecision");
	}
	private _xAxisAnnotationOutline: string = null;
	get xAxisAnnotationOutline(): string {
		return this._xAxisAnnotationOutline;
	}
	set xAxisAnnotationOutline(value: string) {
		this._xAxisAnnotationOutline = value;
		this.markDirty("XAxisAnnotationOutline");
	}
	private _xAxisAnnotationPaddingLeft: number = 0;
	get xAxisAnnotationPaddingLeft(): number {
		return this._xAxisAnnotationPaddingLeft;
	}
	set xAxisAnnotationPaddingLeft(value: number) {
		this._xAxisAnnotationPaddingLeft = value;
		this.markDirty("XAxisAnnotationPaddingLeft");
	}
	private _xAxisAnnotationPaddingTop: number = 0;
	get xAxisAnnotationPaddingTop(): number {
		return this._xAxisAnnotationPaddingTop;
	}
	set xAxisAnnotationPaddingTop(value: number) {
		this._xAxisAnnotationPaddingTop = value;
		this.markDirty("XAxisAnnotationPaddingTop");
	}
	private _xAxisAnnotationPaddingRight: number = 0;
	get xAxisAnnotationPaddingRight(): number {
		return this._xAxisAnnotationPaddingRight;
	}
	set xAxisAnnotationPaddingRight(value: number) {
		this._xAxisAnnotationPaddingRight = value;
		this.markDirty("XAxisAnnotationPaddingRight");
	}
	private _xAxisAnnotationPaddingBottom: number = 0;
	get xAxisAnnotationPaddingBottom(): number {
		return this._xAxisAnnotationPaddingBottom;
	}
	set xAxisAnnotationPaddingBottom(value: number) {
		this._xAxisAnnotationPaddingBottom = value;
		this.markDirty("XAxisAnnotationPaddingBottom");
	}
	private _yAxisAnnotationPaddingLeft: number = 0;
	get yAxisAnnotationPaddingLeft(): number {
		return this._yAxisAnnotationPaddingLeft;
	}
	set yAxisAnnotationPaddingLeft(value: number) {
		this._yAxisAnnotationPaddingLeft = value;
		this.markDirty("YAxisAnnotationPaddingLeft");
	}
	private _yAxisAnnotationPaddingTop: number = 0;
	get yAxisAnnotationPaddingTop(): number {
		return this._yAxisAnnotationPaddingTop;
	}
	set yAxisAnnotationPaddingTop(value: number) {
		this._yAxisAnnotationPaddingTop = value;
		this.markDirty("YAxisAnnotationPaddingTop");
	}
	private _yAxisAnnotationPaddingRight: number = 0;
	get yAxisAnnotationPaddingRight(): number {
		return this._yAxisAnnotationPaddingRight;
	}
	set yAxisAnnotationPaddingRight(value: number) {
		this._yAxisAnnotationPaddingRight = value;
		this.markDirty("YAxisAnnotationPaddingRight");
	}
	private _yAxisAnnotationPaddingBottom: number = 0;
	get yAxisAnnotationPaddingBottom(): number {
		return this._yAxisAnnotationPaddingBottom;
	}
	set yAxisAnnotationPaddingBottom(value: number) {
		this._yAxisAnnotationPaddingBottom = value;
		this.markDirty("YAxisAnnotationPaddingBottom");
	}
	private _xAxisAnnotationStrokeThickness: number = 0;
	get xAxisAnnotationStrokeThickness(): number {
		return this._xAxisAnnotationStrokeThickness;
	}
	set xAxisAnnotationStrokeThickness(value: number) {
		this._xAxisAnnotationStrokeThickness = value;
		this.markDirty("XAxisAnnotationStrokeThickness");
	}
	private _yAxisAnnotationTextColor: string = null;
	get yAxisAnnotationTextColor(): string {
		return this._yAxisAnnotationTextColor;
	}
	set yAxisAnnotationTextColor(value: string) {
		this._yAxisAnnotationTextColor = value;
		this.markDirty("YAxisAnnotationTextColor");
	}
	private _yAxisAnnotationBackground: string = null;
	get yAxisAnnotationBackground(): string {
		return this._yAxisAnnotationBackground;
	}
	set yAxisAnnotationBackground(value: string) {
		this._yAxisAnnotationBackground = value;
		this.markDirty("YAxisAnnotationBackground");
	}
	private _yAxisAnnotationInterpolatedValuePrecision: number = 0;
	get yAxisAnnotationInterpolatedValuePrecision(): number {
		return this._yAxisAnnotationInterpolatedValuePrecision;
	}
	set yAxisAnnotationInterpolatedValuePrecision(value: number) {
		this._yAxisAnnotationInterpolatedValuePrecision = value;
		this.markDirty("YAxisAnnotationInterpolatedValuePrecision");
	}
	private _yAxisAnnotationOutline: string = null;
	get yAxisAnnotationOutline(): string {
		return this._yAxisAnnotationOutline;
	}
	set yAxisAnnotationOutline(value: string) {
		this._yAxisAnnotationOutline = value;
		this.markDirty("YAxisAnnotationOutline");
	}
	private _yAxisAnnotationStrokeThickness: number = 0;
	get yAxisAnnotationStrokeThickness(): number {
		return this._yAxisAnnotationStrokeThickness;
	}
	set yAxisAnnotationStrokeThickness(value: number) {
		this._yAxisAnnotationStrokeThickness = value;
		this.markDirty("YAxisAnnotationStrokeThickness");
	}
	private _verticalLineVisibility: string = null;
	get verticalLineVisibility(): string {
		return this._verticalLineVisibility;
	}
	set verticalLineVisibility(value: string) {
		this._verticalLineVisibility = value;
		this.markDirty("VerticalLineVisibility");
	}
	private _horizontalLineVisibility: string = null;
	get horizontalLineVisibility(): string {
		return this._horizontalLineVisibility;
	}
	set horizontalLineVisibility(value: string) {
		this._horizontalLineVisibility = value;
		this.markDirty("HorizontalLineVisibility");
	}
	private _skipUnknownValues: boolean = false;
	get skipUnknownValues(): boolean {
		return this._skipUnknownValues;
	}
	set skipUnknownValues(value: boolean) {
		this._skipUnknownValues = value;
		this.markDirty("SkipUnknownValues");
	}
}


