/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { HeatTileScaler } from "./HeatTileScaler";
import { Color } from "./Color";
import { Rect } from "./Rect";

/**
 * @hidden 
 */
export class TileWorkSettings extends Base {
	static $t: Type = markType(TileWorkSettings, 'TileWorkSettings');
	private _scaler: HeatTileScaler = null;
	get scaler(): HeatTileScaler {
		return this._scaler;
	}
	set scaler(value: HeatTileScaler) {
		this._scaler = value;
	}
	private _blurRadius: number = 0;
	get blurRadius(): number {
		return this._blurRadius;
	}
	set blurRadius(value: number) {
		this._blurRadius = value;
	}
	private _maxBlurRadius: number = 0;
	get maxBlurRadius(): number {
		return this._maxBlurRadius;
	}
	set maxBlurRadius(value: number) {
		this._maxBlurRadius = value;
	}
	private _useBlurRadiusAdjustedForZoom: boolean = false;
	get useBlurRadiusAdjustedForZoom(): boolean {
		return this._useBlurRadiusAdjustedForZoom;
	}
	set useBlurRadiusAdjustedForZoom(value: boolean) {
		this._useBlurRadiusAdjustedForZoom = value;
	}
	private _minimumColor: Color = new Color();
	get minimumColor(): Color {
		return this._minimumColor;
	}
	set minimumColor(value: Color) {
		this._minimumColor = value;
	}
	private _maximumColor: Color = new Color();
	get maximumColor(): Color {
		return this._maximumColor;
	}
	set maximumColor(value: Color) {
		this._maximumColor = value;
	}
	private _tileViewport: Rect = null;
	get tileViewport(): Rect {
		return this._tileViewport;
	}
	set tileViewport(value: Rect) {
		this._tileViewport = value;
	}
	private _yValues: number[] = null;
	get yValues(): number[] {
		return this._yValues;
	}
	set yValues(value: number[]) {
		this._yValues = value;
	}
	private _xValues: number[] = null;
	get xValues(): number[] {
		return this._xValues;
	}
	set xValues(value: number[]) {
		this._xValues = value;
	}
	private _values: number[] = null;
	get values(): number[] {
		return this._values;
	}
	set values(value: number[]) {
		this._values = value;
	}
	private _isNewData: boolean = false;
	get isNewData(): boolean {
		return this._isNewData;
	}
	set isNewData(value: boolean) {
		this._isNewData = value;
	}
	private _minimumVisibleLatitude: number = 0;
	get minimumVisibleLatitude(): number {
		return this._minimumVisibleLatitude;
	}
	set minimumVisibleLatitude(value: number) {
		this._minimumVisibleLatitude = value;
	}
	private _maximumVisibleLatitude: number = 0;
	get maximumVisibleLatitude(): number {
		return this._maximumVisibleLatitude;
	}
	set maximumVisibleLatitude(value: number) {
		this._maximumVisibleLatitude = value;
	}
	private _minimumVisibleLongitude: number = 0;
	get minimumVisibleLongitude(): number {
		return this._minimumVisibleLongitude;
	}
	set minimumVisibleLongitude(value: number) {
		this._minimumVisibleLongitude = value;
	}
	private _maximumVisibleLongitude: number = 0;
	get maximumVisibleLongitude(): number {
		return this._maximumVisibleLongitude;
	}
	set maximumVisibleLongitude(value: number) {
		this._maximumVisibleLongitude = value;
	}
	private _z: number = 0;
	get z(): number {
		return this._z;
	}
	set z(value: number) {
		this._z = value;
	}
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _testRun: boolean = false;
	get testRun(): boolean {
		return this._testRun;
	}
	set testRun(value: boolean) {
		this._testRun = value;
	}
	private _globalMinimum: number = 0;
	get globalMinimum(): number {
		return this._globalMinimum;
	}
	set globalMinimum(value: number) {
		this._globalMinimum = value;
	}
	private _globalMaximum: number = 0;
	get globalMaximum(): number {
		return this._globalMaximum;
	}
	set globalMaximum(value: number) {
		this._globalMaximum = value;
	}
	private _useGlobalMinMax: boolean = false;
	get useGlobalMinMax(): boolean {
		return this._useGlobalMinMax;
	}
	set useGlobalMinMax(value: boolean) {
		this._useGlobalMinMax = value;
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
	}
	private _scaleColors: Color[] = null;
	get scaleColors(): Color[] {
		return this._scaleColors;
	}
	set scaleColors(value: Color[]) {
		this._scaleColors = value;
	}
	private _scaleColorOffsets: number[] = null;
	get scaleColorOffsets(): number[] {
		return this._scaleColorOffsets;
	}
	set scaleColorOffsets(value: number[]) {
		this._scaleColorOffsets = value;
	}
	private _useLogarithmicScale: boolean = false;
	get useLogarithmicScale(): boolean {
		return this._useLogarithmicScale;
	}
	set useLogarithmicScale(value: boolean) {
		this._useLogarithmicScale = value;
	}
	private _logarithmBase: number = 0;
	get logarithmBase(): number {
		return this._logarithmBase;
	}
	set logarithmBase(value: number) {
		this._logarithmBase = value;
	}
	private _image: any = null;
	get image(): any {
		return this._image;
	}
	set image(value: any) {
		this._image = value;
	}
	flatten(): any {
		let minA_ = this.minimumColor.a;
		let minR_ = this.minimumColor.r;
		let minG_ = this.minimumColor.g;
		let minB_ = this.minimumColor.b;
		let maxA_ = this.maximumColor.a;
		let maxR_ = this.maximumColor.r;
		let maxG_ = this.maximumColor.g;
		let maxB_ = this.maximumColor.b;
		let scaleColors_: any[] = null;
		if (this.scaleColors != null) {
			scaleColors_ = <any[]>new Array(this.scaleColors.length);
			for (let i = 0; i < this.scaleColors.length; i++) {
				let a_ = this.scaleColors[i].a;
				let r_ = this.scaleColors[i].r;
				let g_ = this.scaleColors[i].g;
				let b_ = this.scaleColors[i].b;
				let color_ = { a: a_, r: r_, g: g_, b: b_ };
				scaleColors_[i] = color_;
			}
		}
		return {
				blurRadius: this.blurRadius,
				maxBlurRadius: this.maxBlurRadius,
                //isLinearScaler: this.isLinearScaler,
                //linearScalerMinimumXValue: this.linearScalerMinimumXValue,
                //linearScalerMinimumYValue: this.linearScalerMinimumYValue,
                //linearScalerMaximumXValue: this.linearScalerMaximumXValue,
                //linearScalerMaximumYValue: this.linearScalerMaximumYValue,
                //linearScalerXIsInverted: this.linearScalerXIsInverted,
                //linearScalerYIsInverted: this.linearScalerYIsInverted,
				useBlurRadiusAdjustedForZoom: this.useBlurRadiusAdjustedForZoom,
				minimumColor: { a: minA_, r: minR_, g: minG_, b: minB_ },
				maximumColor: { a: maxA_, r: maxR_, g: maxG_, b: maxB_ },
				tileViewport: { left: this.tileViewport.left, top: this.tileViewport.top, width: this.tileViewport.width, height: this.tileViewport.height },
				yValues:   this.yValues,
				xValues: this.xValues,
				values: this.values,
				isNewData: this.isNewData,
				minimumVisibleLatitude: this.minimumVisibleLatitude,
				minimumVisibleLongitude: this.minimumVisibleLongitude,
				maximumVisibleLatitude: this.maximumVisibleLatitude,
				maximumVisibleLongitude: this.maximumVisibleLongitude,
				z: this.z,
				x: this.x,
				y: this.y,
				window: { left: this.window.left, top: this.window.top, width: this.window.width, height: this.window.height },
				testRun: this.testRun,
				globalMinimum: this.globalMinimum,
				globalMaximum: this.globalMaximum,
				useGlobalMinMax: this.useGlobalMinMax,
				minimumValue: this.minimumValue,
				maximumValue: this.maximumValue,
				scaleColorOffsets: this.scaleColorOffsets,
				scaleColors: scaleColors_,
				useLogarithmicScale: this.useLogarithmicScale,
				logarithmBase: this.logarithmBase
			}
            ;
	}
}


