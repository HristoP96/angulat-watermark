/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ZoomSliderDescription extends Description {
	static $t: Type = markType(ZoomSliderDescription, 'ZoomSliderDescription', (<any>Description).$type);
	private _width: string = null;
	get width(): string {
		return this._width;
	}
	set width(value: string) {
		this._width = value;
		this.markDirty("Width");
	}
	private _height: string = null;
	get height(): string {
		return this._height;
	}
	set height(value: string) {
		this._height = value;
		this.markDirty("Height");
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	protected get_type(): string {
		return "ZoomSlider";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _panTransitionDuration: number = 0;
	get panTransitionDuration(): number {
		return this._panTransitionDuration;
	}
	set panTransitionDuration(value: number) {
		this._panTransitionDuration = value;
		this.markDirty("PanTransitionDuration");
	}
	private _maxZoomWidth: number = 0;
	get maxZoomWidth(): number {
		return this._maxZoomWidth;
	}
	set maxZoomWidth(value: number) {
		this._maxZoomWidth = value;
		this.markDirty("MaxZoomWidth");
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
		this.markDirty("PixelScalingRatio");
	}
	private _actualPixelScalingRatio: number = 0;
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		this._actualPixelScalingRatio = value;
		this.markDirty("ActualPixelScalingRatio");
	}
	private _windowRect: RectDescription = null;
	get windowRect(): RectDescription {
		return this._windowRect;
	}
	set windowRect(value: RectDescription) {
		this._windowRect = value;
		this.markDirty("WindowRect");
	}
	private _minZoomWidth: number = 0;
	get minZoomWidth(): number {
		return this._minZoomWidth;
	}
	set minZoomWidth(value: number) {
		this._minZoomWidth = value;
		this.markDirty("MinZoomWidth");
	}
	private _startInset: number = 0;
	get startInset(): number {
		return this._startInset;
	}
	set startInset(value: number) {
		this._startInset = value;
		this.markDirty("StartInset");
	}
	private _endInset: number = 0;
	get endInset(): number {
		return this._endInset;
	}
	set endInset(value: number) {
		this._endInset = value;
		this.markDirty("EndInset");
	}
	private _trackStartInset: number = 0;
	get trackStartInset(): number {
		return this._trackStartInset;
	}
	set trackStartInset(value: number) {
		this._trackStartInset = value;
		this.markDirty("TrackStartInset");
	}
	private _trackEndInset: number = 0;
	get trackEndInset(): number {
		return this._trackEndInset;
	}
	set trackEndInset(value: number) {
		this._trackEndInset = value;
		this.markDirty("TrackEndInset");
	}
	private _barExtent: number = 0;
	get barExtent(): number {
		return this._barExtent;
	}
	set barExtent(value: number) {
		this._barExtent = value;
		this.markDirty("BarExtent");
	}
	private _orientation: string = null;
	get orientation(): string {
		return this._orientation;
	}
	set orientation(value: string) {
		this._orientation = value;
		this.markDirty("Orientation");
	}
	private _lowerThumbBrush: string = null;
	get lowerThumbBrush(): string {
		return this._lowerThumbBrush;
	}
	set lowerThumbBrush(value: string) {
		this._lowerThumbBrush = value;
		this.markDirty("LowerThumbBrush");
	}
	private _lowerThumbStrokeThickness: number = 0;
	get lowerThumbStrokeThickness(): number {
		return this._lowerThumbStrokeThickness;
	}
	set lowerThumbStrokeThickness(value: number) {
		this._lowerThumbStrokeThickness = value;
		this.markDirty("LowerThumbStrokeThickness");
	}
	private _higherThumbStrokeThickness: number = 0;
	get higherThumbStrokeThickness(): number {
		return this._higherThumbStrokeThickness;
	}
	set higherThumbStrokeThickness(value: number) {
		this._higherThumbStrokeThickness = value;
		this.markDirty("HigherThumbStrokeThickness");
	}
	private _higherThumbBrush: string = null;
	get higherThumbBrush(): string {
		return this._higherThumbBrush;
	}
	set higherThumbBrush(value: string) {
		this._higherThumbBrush = value;
		this.markDirty("HigherThumbBrush");
	}
	private _lowerThumbOutline: string = null;
	get lowerThumbOutline(): string {
		return this._lowerThumbOutline;
	}
	set lowerThumbOutline(value: string) {
		this._lowerThumbOutline = value;
		this.markDirty("LowerThumbOutline");
	}
	private _higherThumbOutline: string = null;
	get higherThumbOutline(): string {
		return this._higherThumbOutline;
	}
	set higherThumbOutline(value: string) {
		this._higherThumbOutline = value;
		this.markDirty("HigherThumbOutline");
	}
	private _lowerThumbRidgesBrush: string = null;
	get lowerThumbRidgesBrush(): string {
		return this._lowerThumbRidgesBrush;
	}
	set lowerThumbRidgesBrush(value: string) {
		this._lowerThumbRidgesBrush = value;
		this.markDirty("LowerThumbRidgesBrush");
	}
	private _higherThumbRidgesBrush: string = null;
	get higherThumbRidgesBrush(): string {
		return this._higherThumbRidgesBrush;
	}
	set higherThumbRidgesBrush(value: string) {
		this._higherThumbRidgesBrush = value;
		this.markDirty("HigherThumbRidgesBrush");
	}
	private _lowerThumbWidth: number = 0;
	get lowerThumbWidth(): number {
		return this._lowerThumbWidth;
	}
	set lowerThumbWidth(value: number) {
		this._lowerThumbWidth = value;
		this.markDirty("LowerThumbWidth");
	}
	private _higherThumbWidth: number = 0;
	get higherThumbWidth(): number {
		return this._higherThumbWidth;
	}
	set higherThumbWidth(value: number) {
		this._higherThumbWidth = value;
		this.markDirty("HigherThumbWidth");
	}
	private _lowerThumbHeight: number = 0;
	get lowerThumbHeight(): number {
		return this._lowerThumbHeight;
	}
	set lowerThumbHeight(value: number) {
		this._lowerThumbHeight = value;
		this.markDirty("LowerThumbHeight");
	}
	private _higherThumbHeight: number = 0;
	get higherThumbHeight(): number {
		return this._higherThumbHeight;
	}
	set higherThumbHeight(value: number) {
		this._higherThumbHeight = value;
		this.markDirty("HigherThumbHeight");
	}
	private _lowerShadeBrush: string = null;
	get lowerShadeBrush(): string {
		return this._lowerShadeBrush;
	}
	set lowerShadeBrush(value: string) {
		this._lowerShadeBrush = value;
		this.markDirty("LowerShadeBrush");
	}
	private _lowerShadeOutline: string = null;
	get lowerShadeOutline(): string {
		return this._lowerShadeOutline;
	}
	set lowerShadeOutline(value: string) {
		this._lowerShadeOutline = value;
		this.markDirty("LowerShadeOutline");
	}
	private _lowerShadeStrokeThickness: number = 0;
	get lowerShadeStrokeThickness(): number {
		return this._lowerShadeStrokeThickness;
	}
	set lowerShadeStrokeThickness(value: number) {
		this._lowerShadeStrokeThickness = value;
		this.markDirty("LowerShadeStrokeThickness");
	}
	private _higherShadeBrush: string = null;
	get higherShadeBrush(): string {
		return this._higherShadeBrush;
	}
	set higherShadeBrush(value: string) {
		this._higherShadeBrush = value;
		this.markDirty("HigherShadeBrush");
	}
	private _higherShadeOutline: string = null;
	get higherShadeOutline(): string {
		return this._higherShadeOutline;
	}
	set higherShadeOutline(value: string) {
		this._higherShadeOutline = value;
		this.markDirty("HigherShadeOutline");
	}
	private _higherShadeStrokeThickness: number = 0;
	get higherShadeStrokeThickness(): number {
		return this._higherShadeStrokeThickness;
	}
	set higherShadeStrokeThickness(value: number) {
		this._higherShadeStrokeThickness = value;
		this.markDirty("HigherShadeStrokeThickness");
	}
	private _barBrush: string = null;
	get barBrush(): string {
		return this._barBrush;
	}
	set barBrush(value: string) {
		this._barBrush = value;
		this.markDirty("BarBrush");
	}
	private _barOutline: string = null;
	get barOutline(): string {
		return this._barOutline;
	}
	set barOutline(value: string) {
		this._barOutline = value;
		this.markDirty("BarOutline");
	}
	private _barStrokeThickness: number = 0;
	get barStrokeThickness(): number {
		return this._barStrokeThickness;
	}
	set barStrokeThickness(value: number) {
		this._barStrokeThickness = value;
		this.markDirty("BarStrokeThickness");
	}
	private _rangeThumbBrush: string = null;
	get rangeThumbBrush(): string {
		return this._rangeThumbBrush;
	}
	set rangeThumbBrush(value: string) {
		this._rangeThumbBrush = value;
		this.markDirty("RangeThumbBrush");
	}
	private _rangeThumbOutline: string = null;
	get rangeThumbOutline(): string {
		return this._rangeThumbOutline;
	}
	set rangeThumbOutline(value: string) {
		this._rangeThumbOutline = value;
		this.markDirty("RangeThumbOutline");
	}
	private _rangeThumbStrokeThickness: number = 0;
	get rangeThumbStrokeThickness(): number {
		return this._rangeThumbStrokeThickness;
	}
	set rangeThumbStrokeThickness(value: number) {
		this._rangeThumbStrokeThickness = value;
		this.markDirty("RangeThumbStrokeThickness");
	}
	private _rangeThumbRidgesBrush: string = null;
	get rangeThumbRidgesBrush(): string {
		return this._rangeThumbRidgesBrush;
	}
	set rangeThumbRidgesBrush(value: string) {
		this._rangeThumbRidgesBrush = value;
		this.markDirty("RangeThumbRidgesBrush");
	}
	private _lowerCalloutBrush: string = null;
	get lowerCalloutBrush(): string {
		return this._lowerCalloutBrush;
	}
	set lowerCalloutBrush(value: string) {
		this._lowerCalloutBrush = value;
		this.markDirty("LowerCalloutBrush");
	}
	private _lowerCalloutTextColor: string = null;
	get lowerCalloutTextColor(): string {
		return this._lowerCalloutTextColor;
	}
	set lowerCalloutTextColor(value: string) {
		this._lowerCalloutTextColor = value;
		this.markDirty("LowerCalloutTextColor");
	}
	private _lowerCalloutOutline: string = null;
	get lowerCalloutOutline(): string {
		return this._lowerCalloutOutline;
	}
	set lowerCalloutOutline(value: string) {
		this._lowerCalloutOutline = value;
		this.markDirty("LowerCalloutOutline");
	}
	private _lowerCalloutStrokeThickness: number = 0;
	get lowerCalloutStrokeThickness(): number {
		return this._lowerCalloutStrokeThickness;
	}
	set lowerCalloutStrokeThickness(value: number) {
		this._lowerCalloutStrokeThickness = value;
		this.markDirty("LowerCalloutStrokeThickness");
	}
	private _higherCalloutBrush: string = null;
	get higherCalloutBrush(): string {
		return this._higherCalloutBrush;
	}
	set higherCalloutBrush(value: string) {
		this._higherCalloutBrush = value;
		this.markDirty("HigherCalloutBrush");
	}
	private _higherCalloutTextColor: string = null;
	get higherCalloutTextColor(): string {
		return this._higherCalloutTextColor;
	}
	set higherCalloutTextColor(value: string) {
		this._higherCalloutTextColor = value;
		this.markDirty("HigherCalloutTextColor");
	}
	private _higherCalloutOutline: string = null;
	get higherCalloutOutline(): string {
		return this._higherCalloutOutline;
	}
	set higherCalloutOutline(value: string) {
		this._higherCalloutOutline = value;
		this.markDirty("HigherCalloutOutline");
	}
	private _higherCalloutStrokeThickness: number = 0;
	get higherCalloutStrokeThickness(): number {
		return this._higherCalloutStrokeThickness;
	}
	set higherCalloutStrokeThickness(value: number) {
		this._higherCalloutStrokeThickness = value;
		this.markDirty("HigherCalloutStrokeThickness");
	}
	private _areThumbCalloutsEnabled: boolean = false;
	get areThumbCalloutsEnabled(): boolean {
		return this._areThumbCalloutsEnabled;
	}
	set areThumbCalloutsEnabled(value: boolean) {
		this._areThumbCalloutsEnabled = value;
		this.markDirty("AreThumbCalloutsEnabled");
	}
	private _thumbCalloutFontFamily: string = null;
	get thumbCalloutFontFamily(): string {
		return this._thumbCalloutFontFamily;
	}
	set thumbCalloutFontFamily(value: string) {
		this._thumbCalloutFontFamily = value;
	}
	private _thumbCalloutFontSize: number = 0;
	get thumbCalloutFontSize(): number {
		return this._thumbCalloutFontSize;
	}
	set thumbCalloutFontSize(value: number) {
		this._thumbCalloutFontSize = value;
	}
	private _thumbCalloutFontStyle: string = null;
	get thumbCalloutFontStyle(): string {
		return this._thumbCalloutFontStyle;
	}
	set thumbCalloutFontStyle(value: string) {
		this._thumbCalloutFontStyle = value;
	}
	private _thumbCalloutFontWeight: string = null;
	get thumbCalloutFontWeight(): string {
		return this._thumbCalloutFontWeight;
	}
	set thumbCalloutFontWeight(value: string) {
		this._thumbCalloutFontWeight = value;
	}
	private _resolvingAxisValue: string = null;
	get resolvingAxisValueRef(): string {
		return this._resolvingAxisValue;
	}
	set resolvingAxisValueRef(value: string) {
		this._resolvingAxisValue = value;
		this.markDirty("ResolvingAxisValueRef");
	}
	private _windowRectChanged: string = null;
	get windowRectChangedRef(): string {
		return this._windowRectChanged;
	}
	set windowRectChangedRef(value: string) {
		this._windowRectChanged = value;
		this.markDirty("WindowRectChangedRef");
	}
}


