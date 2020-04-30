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
export class BulletGraphDescription extends Description {
	static $t: Type = markType(BulletGraphDescription, 'BulletGraphDescription', (<any>Description).$type);
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
		return "BulletGraph";
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
	private _scaleBackgroundBrush: string = null;
	get scaleBackgroundBrush(): string {
		return this._scaleBackgroundBrush;
	}
	set scaleBackgroundBrush(value: string) {
		this._scaleBackgroundBrush = value;
		this.markDirty("ScaleBackgroundBrush");
	}
	private _scaleBackgroundOutline: string = null;
	get scaleBackgroundOutline(): string {
		return this._scaleBackgroundOutline;
	}
	set scaleBackgroundOutline(value: string) {
		this._scaleBackgroundOutline = value;
		this.markDirty("ScaleBackgroundOutline");
	}
	private _scaleBackgroundThickness: number = 0;
	get scaleBackgroundThickness(): number {
		return this._scaleBackgroundThickness;
	}
	set scaleBackgroundThickness(value: number) {
		this._scaleBackgroundThickness = value;
		this.markDirty("ScaleBackgroundThickness");
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
	private _targetValue: number = 0;
	get targetValue(): number {
		return this._targetValue;
	}
	set targetValue(value: number) {
		this._targetValue = value;
		this.markDirty("TargetValue");
	}
	private _targetValueName: string = null;
	get targetValueName(): string {
		return this._targetValueName;
	}
	set targetValueName(value: string) {
		this._targetValueName = value;
		this.markDirty("TargetValueName");
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		this.markDirty("Value");
	}
	private _valueName: string = null;
	get valueName(): string {
		return this._valueName;
	}
	set valueName(value: string) {
		this._valueName = value;
		this.markDirty("ValueName");
	}
	private _rangeInnerExtent: number = 0;
	get rangeInnerExtent(): number {
		return this._rangeInnerExtent;
	}
	set rangeInnerExtent(value: number) {
		this._rangeInnerExtent = value;
		this.markDirty("RangeInnerExtent");
	}
	private _rangeOuterExtent: number = 0;
	get rangeOuterExtent(): number {
		return this._rangeOuterExtent;
	}
	set rangeOuterExtent(value: number) {
		this._rangeOuterExtent = value;
		this.markDirty("RangeOuterExtent");
	}
	private _valueInnerExtent: number = 0;
	get valueInnerExtent(): number {
		return this._valueInnerExtent;
	}
	set valueInnerExtent(value: number) {
		this._valueInnerExtent = value;
		this.markDirty("ValueInnerExtent");
	}
	private _valueOuterExtent: number = 0;
	get valueOuterExtent(): number {
		return this._valueOuterExtent;
	}
	set valueOuterExtent(value: number) {
		this._valueOuterExtent = value;
		this.markDirty("ValueOuterExtent");
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
	private _valueBrush: string = null;
	get valueBrush(): string {
		return this._valueBrush;
	}
	set valueBrush(value: string) {
		this._valueBrush = value;
		this.markDirty("ValueBrush");
	}
	private _valueOutline: string = null;
	get valueOutline(): string {
		return this._valueOutline;
	}
	set valueOutline(value: string) {
		this._valueOutline = value;
		this.markDirty("ValueOutline");
	}
	private _valueStrokeThickness: number = 0;
	get valueStrokeThickness(): number {
		return this._valueStrokeThickness;
	}
	set valueStrokeThickness(value: number) {
		this._valueStrokeThickness = value;
		this.markDirty("ValueStrokeThickness");
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
	private _targetValueBrush: string = null;
	get targetValueBrush(): string {
		return this._targetValueBrush;
	}
	set targetValueBrush(value: string) {
		this._targetValueBrush = value;
		this.markDirty("TargetValueBrush");
	}
	private _targetValueBreadth: number = 0;
	get targetValueBreadth(): number {
		return this._targetValueBreadth;
	}
	set targetValueBreadth(value: number) {
		this._targetValueBreadth = value;
		this.markDirty("TargetValueBreadth");
	}
	private _targetValueInnerExtent: number = 0;
	get targetValueInnerExtent(): number {
		return this._targetValueInnerExtent;
	}
	set targetValueInnerExtent(value: number) {
		this._targetValueInnerExtent = value;
		this.markDirty("TargetValueInnerExtent");
	}
	private _targetValueOuterExtent: number = 0;
	get targetValueOuterExtent(): number {
		return this._targetValueOuterExtent;
	}
	set targetValueOuterExtent(value: number) {
		this._targetValueOuterExtent = value;
		this.markDirty("TargetValueOuterExtent");
	}
	private _targetValueOutline: string = null;
	get targetValueOutline(): string {
		return this._targetValueOutline;
	}
	set targetValueOutline(value: string) {
		this._targetValueOutline = value;
		this.markDirty("TargetValueOutline");
	}
	private _targetValueStrokeThickness: number = 0;
	get targetValueStrokeThickness(): number {
		return this._targetValueStrokeThickness;
	}
	set targetValueStrokeThickness(value: number) {
		this._targetValueStrokeThickness = value;
		this.markDirty("TargetValueStrokeThickness");
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


