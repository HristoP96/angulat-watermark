/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { RadialGaugeRangeDescription } from "./RadialGaugeRangeDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class RadialGaugeDescription extends Description {
	static $t: Type = markType(RadialGaugeDescription, 'RadialGaugeDescription', (<any>Description).$type);
	private _fontFamily: string = null;
	get fontFamily(): string {
		return this._fontFamily;
	}
	set fontFamily(value: string) {
		this._fontFamily = value;
		this.markDirty("FontFamily");
	}
	private _fontSize: number = 0;
	get fontSize(): number {
		return this._fontSize;
	}
	set fontSize(value: number) {
		this._fontSize = value;
		this.markDirty("FontSize");
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		this._fontWeight = value;
		this.markDirty("FontWeight");
	}
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		this._fontStyle = value;
		this.markDirty("FontStyle");
	}
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
		return "RadialGauge";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _rangeBrushes: string[] = null;
	get rangeBrushes(): string[] {
		return this._rangeBrushes;
	}
	set rangeBrushes(value: string[]) {
		this._rangeBrushes = value;
		this.markDirty("RangeBrushes");
	}
	private _rangeOutlines: string[] = null;
	get rangeOutlines(): string[] {
		return this._rangeOutlines;
	}
	set rangeOutlines(value: string[]) {
		this._rangeOutlines = value;
		this.markDirty("RangeOutlines");
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _actualMinimumValue: number = 0;
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		this._actualMinimumValue = value;
		this.markDirty("ActualMinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _actualMaximumValue: number = 0;
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		this._actualMaximumValue = value;
		this.markDirty("ActualMaximumValue");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
	private _centerX: number = 0;
	get centerX(): number {
		return this._centerX;
	}
	set centerX(value: number) {
		this._centerX = value;
		this.markDirty("CenterX");
	}
	private _centerY: number = 0;
	get centerY(): number {
		return this._centerY;
	}
	set centerY(value: number) {
		this._centerY = value;
		this.markDirty("CenterY");
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		this.markDirty("Value");
	}
	private _scaleStartAngle: number = 0;
	get scaleStartAngle(): number {
		return this._scaleStartAngle;
	}
	set scaleStartAngle(value: number) {
		this._scaleStartAngle = value;
		this.markDirty("ScaleStartAngle");
	}
	private _scaleEndAngle: number = 0;
	get scaleEndAngle(): number {
		return this._scaleEndAngle;
	}
	set scaleEndAngle(value: number) {
		this._scaleEndAngle = value;
		this.markDirty("ScaleEndAngle");
	}
	private _scaleSweepDirection: string = null;
	get scaleSweepDirection(): string {
		return this._scaleSweepDirection;
	}
	set scaleSweepDirection(value: string) {
		this._scaleSweepDirection = value;
		this.markDirty("ScaleSweepDirection");
	}
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		this._transitionDuration = value;
		this.markDirty("TransitionDuration");
	}
	private _transitionEasingFunctionRef: string = null;
	get transitionEasingFunctionRef(): string {
		return this._transitionEasingFunctionRef;
	}
	set transitionEasingFunctionRef(value: string) {
		this._transitionEasingFunctionRef = value;
		this.markDirty("TransitionEasingFunctionRef");
	}
	private _needleBrush: string = null;
	get needleBrush(): string {
		return this._needleBrush;
	}
	set needleBrush(value: string) {
		this._needleBrush = value;
		this.markDirty("NeedleBrush");
	}
	private _needleOutline: string = null;
	get needleOutline(): string {
		return this._needleOutline;
	}
	set needleOutline(value: string) {
		this._needleOutline = value;
		this.markDirty("NeedleOutline");
	}
	private _needleStartExtent: number = 0;
	get needleStartExtent(): number {
		return this._needleStartExtent;
	}
	set needleStartExtent(value: number) {
		this._needleStartExtent = value;
		this.markDirty("NeedleStartExtent");
	}
	private _needleEndExtent: number = 0;
	get needleEndExtent(): number {
		return this._needleEndExtent;
	}
	set needleEndExtent(value: number) {
		this._needleEndExtent = value;
		this.markDirty("NeedleEndExtent");
	}
	private _needleShape: string = null;
	get needleShape(): string {
		return this._needleShape;
	}
	set needleShape(value: string) {
		this._needleShape = value;
		this.markDirty("NeedleShape");
	}
	private _needleStartWidthRatio: number = 0;
	get needleStartWidthRatio(): number {
		return this._needleStartWidthRatio;
	}
	set needleStartWidthRatio(value: number) {
		this._needleStartWidthRatio = value;
		this.markDirty("NeedleStartWidthRatio");
	}
	private _needleEndWidthRatio: number = 0;
	get needleEndWidthRatio(): number {
		return this._needleEndWidthRatio;
	}
	set needleEndWidthRatio(value: number) {
		this._needleEndWidthRatio = value;
		this.markDirty("NeedleEndWidthRatio");
	}
	private _needleBaseFeatureWidthRatio: number = 0;
	get needleBaseFeatureWidthRatio(): number {
		return this._needleBaseFeatureWidthRatio;
	}
	set needleBaseFeatureWidthRatio(value: number) {
		this._needleBaseFeatureWidthRatio = value;
		this.markDirty("NeedleBaseFeatureWidthRatio");
	}
	private _needleBaseFeatureExtent: number = 0;
	get needleBaseFeatureExtent(): number {
		return this._needleBaseFeatureExtent;
	}
	set needleBaseFeatureExtent(value: number) {
		this._needleBaseFeatureExtent = value;
		this.markDirty("NeedleBaseFeatureExtent");
	}
	private _needlePointFeatureWidthRatio: number = 0;
	get needlePointFeatureWidthRatio(): number {
		return this._needlePointFeatureWidthRatio;
	}
	set needlePointFeatureWidthRatio(value: number) {
		this._needlePointFeatureWidthRatio = value;
		this.markDirty("NeedlePointFeatureWidthRatio");
	}
	private _needlePointFeatureExtent: number = 0;
	get needlePointFeatureExtent(): number {
		return this._needlePointFeatureExtent;
	}
	set needlePointFeatureExtent(value: number) {
		this._needlePointFeatureExtent = value;
		this.markDirty("NeedlePointFeatureExtent");
	}
	private _needlePivotWidthRatio: number = 0;
	get needlePivotWidthRatio(): number {
		return this._needlePivotWidthRatio;
	}
	set needlePivotWidthRatio(value: number) {
		this._needlePivotWidthRatio = value;
		this.markDirty("NeedlePivotWidthRatio");
	}
	private _needlePivotInnerWidthRatio: number = 0;
	get needlePivotInnerWidthRatio(): number {
		return this._needlePivotInnerWidthRatio;
	}
	set needlePivotInnerWidthRatio(value: number) {
		this._needlePivotInnerWidthRatio = value;
		this.markDirty("NeedlePivotInnerWidthRatio");
	}
	private _needlePivotShape: string = null;
	get needlePivotShape(): string {
		return this._needlePivotShape;
	}
	set needlePivotShape(value: string) {
		this._needlePivotShape = value;
		this.markDirty("NeedlePivotShape");
	}
	private _scaleStartExtent: number = 0;
	get scaleStartExtent(): number {
		return this._scaleStartExtent;
	}
	set scaleStartExtent(value: number) {
		this._scaleStartExtent = value;
		this.markDirty("ScaleStartExtent");
	}
	private _needlePivotBrush: string = null;
	get needlePivotBrush(): string {
		return this._needlePivotBrush;
	}
	set needlePivotBrush(value: string) {
		this._needlePivotBrush = value;
		this.markDirty("NeedlePivotBrush");
	}
	private _needlePivotOutline: string = null;
	get needlePivotOutline(): string {
		return this._needlePivotOutline;
	}
	set needlePivotOutline(value: string) {
		this._needlePivotOutline = value;
		this.markDirty("NeedlePivotOutline");
	}
	private _needleStrokeThickness: number = 0;
	get needleStrokeThickness(): number {
		return this._needleStrokeThickness;
	}
	set needleStrokeThickness(value: number) {
		this._needleStrokeThickness = value;
		this.markDirty("NeedleStrokeThickness");
	}
	private _needlePivotStrokeThickness: number = 0;
	get needlePivotStrokeThickness(): number {
		return this._needlePivotStrokeThickness;
	}
	set needlePivotStrokeThickness(value: number) {
		this._needlePivotStrokeThickness = value;
		this.markDirty("NeedlePivotStrokeThickness");
	}
	private _scaleEndExtent: number = 0;
	get scaleEndExtent(): number {
		return this._scaleEndExtent;
	}
	set scaleEndExtent(value: number) {
		this._scaleEndExtent = value;
		this.markDirty("ScaleEndExtent");
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
		this.markDirty("LabelExtent");
	}
	private _labelInterval: number = 0;
	get labelInterval(): number {
		return this._labelInterval;
	}
	set labelInterval(value: number) {
		this._labelInterval = value;
		this.markDirty("LabelInterval");
	}
	private _tickStartExtent: number = 0;
	get tickStartExtent(): number {
		return this._tickStartExtent;
	}
	set tickStartExtent(value: number) {
		this._tickStartExtent = value;
		this.markDirty("TickStartExtent");
	}
	private _tickEndExtent: number = 0;
	get tickEndExtent(): number {
		return this._tickEndExtent;
	}
	set tickEndExtent(value: number) {
		this._tickEndExtent = value;
		this.markDirty("TickEndExtent");
	}
	private _tickStrokeThickness: number = 0;
	get tickStrokeThickness(): number {
		return this._tickStrokeThickness;
	}
	set tickStrokeThickness(value: number) {
		this._tickStrokeThickness = value;
		this.markDirty("TickStrokeThickness");
	}
	private _tickBrush: string = null;
	get tickBrush(): string {
		return this._tickBrush;
	}
	set tickBrush(value: string) {
		this._tickBrush = value;
		this.markDirty("TickBrush");
	}
	private _fontBrush: string = null;
	get fontBrush(): string {
		return this._fontBrush;
	}
	set fontBrush(value: string) {
		this._fontBrush = value;
		this.markDirty("FontBrush");
	}
	private _minorTickStartExtent: number = 0;
	get minorTickStartExtent(): number {
		return this._minorTickStartExtent;
	}
	set minorTickStartExtent(value: number) {
		this._minorTickStartExtent = value;
		this.markDirty("MinorTickStartExtent");
	}
	private _minorTickEndExtent: number = 0;
	get minorTickEndExtent(): number {
		return this._minorTickEndExtent;
	}
	set minorTickEndExtent(value: number) {
		this._minorTickEndExtent = value;
		this.markDirty("MinorTickEndExtent");
	}
	private _minorTickStrokeThickness: number = 0;
	get minorTickStrokeThickness(): number {
		return this._minorTickStrokeThickness;
	}
	set minorTickStrokeThickness(value: number) {
		this._minorTickStrokeThickness = value;
		this.markDirty("MinorTickStrokeThickness");
	}
	private _minorTickBrush: string = null;
	get minorTickBrush(): string {
		return this._minorTickBrush;
	}
	set minorTickBrush(value: string) {
		this._minorTickBrush = value;
		this.markDirty("MinorTickBrush");
	}
	private _minorTickCount: number = 0;
	get minorTickCount(): number {
		return this._minorTickCount;
	}
	set minorTickCount(value: number) {
		this._minorTickCount = value;
		this.markDirty("MinorTickCount");
	}
	private _scaleBrush: string = null;
	get scaleBrush(): string {
		return this._scaleBrush;
	}
	set scaleBrush(value: string) {
		this._scaleBrush = value;
		this.markDirty("ScaleBrush");
	}
	private _backingBrush: string = null;
	get backingBrush(): string {
		return this._backingBrush;
	}
	set backingBrush(value: string) {
		this._backingBrush = value;
		this.markDirty("BackingBrush");
	}
	private _backingOutline: string = null;
	get backingOutline(): string {
		return this._backingOutline;
	}
	set backingOutline(value: string) {
		this._backingOutline = value;
		this.markDirty("BackingOutline");
	}
	private _backingStrokeThickness: number = 0;
	get backingStrokeThickness(): number {
		return this._backingStrokeThickness;
	}
	set backingStrokeThickness(value: number) {
		this._backingStrokeThickness = value;
		this.markDirty("BackingStrokeThickness");
	}
	private _backingOuterExtent: number = 0;
	get backingOuterExtent(): number {
		return this._backingOuterExtent;
	}
	set backingOuterExtent(value: number) {
		this._backingOuterExtent = value;
		this.markDirty("BackingOuterExtent");
	}
	private _backingOversweep: number = 0;
	get backingOversweep(): number {
		return this._backingOversweep;
	}
	set backingOversweep(value: number) {
		this._backingOversweep = value;
		this.markDirty("BackingOversweep");
	}
	private _scaleOversweep: number = 0;
	get scaleOversweep(): number {
		return this._scaleOversweep;
	}
	set scaleOversweep(value: number) {
		this._scaleOversweep = value;
		this.markDirty("ScaleOversweep");
	}
	private _scaleOversweepShape: string = null;
	get scaleOversweepShape(): string {
		return this._scaleOversweepShape;
	}
	set scaleOversweepShape(value: string) {
		this._scaleOversweepShape = value;
		this.markDirty("ScaleOversweepShape");
	}
	private _backingCornerRadius: number = 0;
	get backingCornerRadius(): number {
		return this._backingCornerRadius;
	}
	set backingCornerRadius(value: number) {
		this._backingCornerRadius = value;
		this.markDirty("BackingCornerRadius");
	}
	private _backingInnerExtent: number = 0;
	get backingInnerExtent(): number {
		return this._backingInnerExtent;
	}
	set backingInnerExtent(value: number) {
		this._backingInnerExtent = value;
		this.markDirty("BackingInnerExtent");
	}
	private _backingShape: string = null;
	get backingShape(): string {
		return this._backingShape;
	}
	set backingShape(value: string) {
		this._backingShape = value;
		this.markDirty("BackingShape");
	}
	private _ranges: RadialGaugeRangeDescription[] = null;
	get ranges(): RadialGaugeRangeDescription[] {
		return this._ranges;
	}
	set ranges(value: RadialGaugeRangeDescription[]) {
		this._ranges = value;
		this.markDirty("Ranges");
	}
	private _radiusMultiplier: number = 0;
	get radiusMultiplier(): number {
		return this._radiusMultiplier;
	}
	set radiusMultiplier(value: number) {
		this._radiusMultiplier = value;
		this.markDirty("RadiusMultiplier");
	}
	private _duplicateLabelOmissionStrategy: string = null;
	get duplicateLabelOmissionStrategy(): string {
		return this._duplicateLabelOmissionStrategy;
	}
	set duplicateLabelOmissionStrategy(value: string) {
		this._duplicateLabelOmissionStrategy = value;
		this.markDirty("DuplicateLabelOmissionStrategy");
	}
	private _isNeedleDraggingEnabled: boolean = false;
	get isNeedleDraggingEnabled(): boolean {
		return this._isNeedleDraggingEnabled;
	}
	set isNeedleDraggingEnabled(value: boolean) {
		this._isNeedleDraggingEnabled = value;
		this.markDirty("IsNeedleDraggingEnabled");
	}
	private _isNeedleDraggingConstrained: boolean = false;
	get isNeedleDraggingConstrained(): boolean {
		return this._isNeedleDraggingConstrained;
	}
	set isNeedleDraggingConstrained(value: boolean) {
		this._isNeedleDraggingConstrained = value;
		this.markDirty("IsNeedleDraggingConstrained");
	}
	private _font: string = null;
	get font(): string {
		return this._font;
	}
	set font(value: string) {
		this._font = value;
		this.markDirty("Font");
	}
	private _transitionProgress: number = 0;
	get transitionProgress(): number {
		return this._transitionProgress;
	}
	set transitionProgress(value: number) {
		this._transitionProgress = value;
		this.markDirty("TransitionProgress");
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
	private _formatLabel: string = null;
	get formatLabelRef(): string {
		return this._formatLabel;
	}
	set formatLabelRef(value: string) {
		this._formatLabel = value;
		this.markDirty("FormatLabelRef");
	}
	private _alignLabel: string = null;
	get alignLabelRef(): string {
		return this._alignLabel;
	}
	set alignLabelRef(value: string) {
		this._alignLabel = value;
		this.markDirty("AlignLabelRef");
	}
}


