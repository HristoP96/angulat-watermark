/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { LinearGraphRangeDescription } from "./LinearGraphRangeDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LinearGaugeDescription extends Description {
	static $t: Type = markType(LinearGaugeDescription, 'LinearGaugeDescription', (<any>Description).$type);
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
		return "LinearGauge";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _transitionProgress: number = 0;
	get transitionProgress(): number {
		return this._transitionProgress;
	}
	set transitionProgress(value: number) {
		this._transitionProgress = value;
		this.markDirty("TransitionProgress");
	}
	private _orientation: string = null;
	get orientation(): string {
		return this._orientation;
	}
	set orientation(value: string) {
		this._orientation = value;
		this.markDirty("Orientation");
	}
	private _ranges: LinearGraphRangeDescription[] = null;
	get ranges(): LinearGraphRangeDescription[] {
		return this._ranges;
	}
	set ranges(value: LinearGraphRangeDescription[]) {
		this._ranges = value;
		this.markDirty("Ranges");
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
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		this.markDirty("Value");
	}
	private _needleShape: string = null;
	get needleShape(): string {
		return this._needleShape;
	}
	set needleShape(value: string) {
		this._needleShape = value;
		this.markDirty("NeedleShape");
	}
	private _needleName: string = null;
	get needleName(): string {
		return this._needleName;
	}
	set needleName(value: string) {
		this._needleName = value;
		this.markDirty("NeedleName");
	}
	private _rangeInnerExtent: number = 0;
	get rangeInnerExtent(): number {
		return this._rangeInnerExtent;
	}
	set rangeInnerExtent(value: number) {
		this._rangeInnerExtent = value;
		this.markDirty("RangeInnerExtent");
	}
	private _scaleInnerExtent: number = 0;
	get scaleInnerExtent(): number {
		return this._scaleInnerExtent;
	}
	set scaleInnerExtent(value: number) {
		this._scaleInnerExtent = value;
		this.markDirty("ScaleInnerExtent");
	}
	private _rangeOuterExtent: number = 0;
	get rangeOuterExtent(): number {
		return this._rangeOuterExtent;
	}
	set rangeOuterExtent(value: number) {
		this._rangeOuterExtent = value;
		this.markDirty("RangeOuterExtent");
	}
	private _scaleOuterExtent: number = 0;
	get scaleOuterExtent(): number {
		return this._scaleOuterExtent;
	}
	set scaleOuterExtent(value: number) {
		this._scaleOuterExtent = value;
		this.markDirty("ScaleOuterExtent");
	}
	private _needleInnerExtent: number = 0;
	get needleInnerExtent(): number {
		return this._needleInnerExtent;
	}
	set needleInnerExtent(value: number) {
		this._needleInnerExtent = value;
		this.markDirty("NeedleInnerExtent");
	}
	private _needleOuterExtent: number = 0;
	get needleOuterExtent(): number {
		return this._needleOuterExtent;
	}
	set needleOuterExtent(value: number) {
		this._needleOuterExtent = value;
		this.markDirty("NeedleOuterExtent");
	}
	private _needleInnerBaseWidth: number = 0;
	get needleInnerBaseWidth(): number {
		return this._needleInnerBaseWidth;
	}
	set needleInnerBaseWidth(value: number) {
		this._needleInnerBaseWidth = value;
		this.markDirty("NeedleInnerBaseWidth");
	}
	private _needleOuterBaseWidth: number = 0;
	get needleOuterBaseWidth(): number {
		return this._needleOuterBaseWidth;
	}
	set needleOuterBaseWidth(value: number) {
		this._needleOuterBaseWidth = value;
		this.markDirty("NeedleOuterBaseWidth");
	}
	private _needleInnerPointWidth: number = 0;
	get needleInnerPointWidth(): number {
		return this._needleInnerPointWidth;
	}
	set needleInnerPointWidth(value: number) {
		this._needleInnerPointWidth = value;
		this.markDirty("NeedleInnerPointWidth");
	}
	private _needleOuterPointWidth: number = 0;
	get needleOuterPointWidth(): number {
		return this._needleOuterPointWidth;
	}
	set needleOuterPointWidth(value: number) {
		this._needleOuterPointWidth = value;
		this.markDirty("NeedleOuterPointWidth");
	}
	private _needleInnerPointExtent: number = 0;
	get needleInnerPointExtent(): number {
		return this._needleInnerPointExtent;
	}
	set needleInnerPointExtent(value: number) {
		this._needleInnerPointExtent = value;
		this.markDirty("NeedleInnerPointExtent");
	}
	private _needleOuterPointExtent: number = 0;
	get needleOuterPointExtent(): number {
		return this._needleOuterPointExtent;
	}
	set needleOuterPointExtent(value: number) {
		this._needleOuterPointExtent = value;
		this.markDirty("NeedleOuterPointExtent");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
	private _ticksPostInitial: number = 0;
	get ticksPostInitial(): number {
		return this._ticksPostInitial;
	}
	set ticksPostInitial(value: number) {
		this._ticksPostInitial = value;
		this.markDirty("TicksPostInitial");
	}
	private _ticksPreTerminal: number = 0;
	get ticksPreTerminal(): number {
		return this._ticksPreTerminal;
	}
	set ticksPreTerminal(value: number) {
		this._ticksPreTerminal = value;
		this.markDirty("TicksPreTerminal");
	}
	private _labelInterval: number = 0;
	get labelInterval(): number {
		return this._labelInterval;
	}
	set labelInterval(value: number) {
		this._labelInterval = value;
		this.markDirty("LabelInterval");
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
		this.markDirty("LabelExtent");
	}
	private _labelsPostInitial: number = 0;
	get labelsPostInitial(): number {
		return this._labelsPostInitial;
	}
	set labelsPostInitial(value: number) {
		this._labelsPostInitial = value;
		this.markDirty("LabelsPostInitial");
	}
	private _labelsPreTerminal: number = 0;
	get labelsPreTerminal(): number {
		return this._labelsPreTerminal;
	}
	set labelsPreTerminal(value: number) {
		this._labelsPreTerminal = value;
		this.markDirty("LabelsPreTerminal");
	}
	private _minorTickCount: number = 0;
	get minorTickCount(): number {
		return this._minorTickCount;
	}
	set minorTickCount(value: number) {
		this._minorTickCount = value;
		this.markDirty("MinorTickCount");
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
	private _needleBreadth: number = 0;
	get needleBreadth(): number {
		return this._needleBreadth;
	}
	set needleBreadth(value: number) {
		this._needleBreadth = value;
		this.markDirty("NeedleBreadth");
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
	private _needleStrokeThickness: number = 0;
	get needleStrokeThickness(): number {
		return this._needleStrokeThickness;
	}
	set needleStrokeThickness(value: number) {
		this._needleStrokeThickness = value;
		this.markDirty("NeedleStrokeThickness");
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
	private _isScaleInverted: boolean = false;
	get isScaleInverted(): boolean {
		return this._isScaleInverted;
	}
	set isScaleInverted(value: boolean) {
		this._isScaleInverted = value;
		this.markDirty("IsScaleInverted");
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
	private _backingInnerExtent: number = 0;
	get backingInnerExtent(): number {
		return this._backingInnerExtent;
	}
	set backingInnerExtent(value: number) {
		this._backingInnerExtent = value;
		this.markDirty("BackingInnerExtent");
	}
	private _backingOuterExtent: number = 0;
	get backingOuterExtent(): number {
		return this._backingOuterExtent;
	}
	set backingOuterExtent(value: number) {
		this._backingOuterExtent = value;
		this.markDirty("BackingOuterExtent");
	}
	private _scaleStartExtent: number = 0;
	get scaleStartExtent(): number {
		return this._scaleStartExtent;
	}
	set scaleStartExtent(value: number) {
		this._scaleStartExtent = value;
		this.markDirty("ScaleStartExtent");
	}
	private _scaleEndExtent: number = 0;
	get scaleEndExtent(): number {
		return this._scaleEndExtent;
	}
	set scaleEndExtent(value: number) {
		this._scaleEndExtent = value;
		this.markDirty("ScaleEndExtent");
	}
	private _scaleBrush: string = null;
	get scaleBrush(): string {
		return this._scaleBrush;
	}
	set scaleBrush(value: string) {
		this._scaleBrush = value;
		this.markDirty("ScaleBrush");
	}
	private _scaleOutline: string = null;
	get scaleOutline(): string {
		return this._scaleOutline;
	}
	set scaleOutline(value: string) {
		this._scaleOutline = value;
		this.markDirty("ScaleOutline");
	}
	private _scaleStrokeThickness: number = 0;
	get scaleStrokeThickness(): number {
		return this._scaleStrokeThickness;
	}
	set scaleStrokeThickness(value: number) {
		this._scaleStrokeThickness = value;
		this.markDirty("ScaleStrokeThickness");
	}
	private _isNeedleDraggingEnabled: boolean = false;
	get isNeedleDraggingEnabled(): boolean {
		return this._isNeedleDraggingEnabled;
	}
	set isNeedleDraggingEnabled(value: boolean) {
		this._isNeedleDraggingEnabled = value;
		this.markDirty("IsNeedleDraggingEnabled");
	}
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		this._transitionDuration = value;
		this.markDirty("TransitionDuration");
	}
	private _showToolTipTimeout: number = 0;
	get showToolTipTimeout(): number {
		return this._showToolTipTimeout;
	}
	set showToolTipTimeout(value: number) {
		this._showToolTipTimeout = value;
		this.markDirty("ShowToolTipTimeout");
	}
	private _showToolTip: boolean = false;
	get showToolTip(): boolean {
		return this._showToolTip;
	}
	set showToolTip(value: boolean) {
		this._showToolTip = value;
		this.markDirty("ShowToolTip");
	}
	private _font: string = null;
	get font(): string {
		return this._font;
	}
	set font(value: string) {
		this._font = value;
		this.markDirty("Font");
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


