/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SparklineDescription extends Description {
	static $t: Type = markType(SparklineDescription, 'SparklineDescription', (<any>Description).$type);
	protected get_type(): string {
		return "Sparkline";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _brush: string = null;
	get brush(): string {
		return this._brush;
	}
	set brush(value: string) {
		this._brush = value;
		this.markDirty("Brush");
	}
	private _negativeBrush: string = null;
	get negativeBrush(): string {
		return this._negativeBrush;
	}
	set negativeBrush(value: string) {
		this._negativeBrush = value;
		this.markDirty("NegativeBrush");
	}
	private _markerBrush: string = null;
	get markerBrush(): string {
		return this._markerBrush;
	}
	set markerBrush(value: string) {
		this._markerBrush = value;
		this.markDirty("MarkerBrush");
	}
	private _negativeMarkerBrush: string = null;
	get negativeMarkerBrush(): string {
		return this._negativeMarkerBrush;
	}
	set negativeMarkerBrush(value: string) {
		this._negativeMarkerBrush = value;
		this.markDirty("NegativeMarkerBrush");
	}
	private _firstMarkerBrush: string = null;
	get firstMarkerBrush(): string {
		return this._firstMarkerBrush;
	}
	set firstMarkerBrush(value: string) {
		this._firstMarkerBrush = value;
		this.markDirty("FirstMarkerBrush");
	}
	private _lastMarkerBrush: string = null;
	get lastMarkerBrush(): string {
		return this._lastMarkerBrush;
	}
	set lastMarkerBrush(value: string) {
		this._lastMarkerBrush = value;
		this.markDirty("LastMarkerBrush");
	}
	private _highMarkerBrush: string = null;
	get highMarkerBrush(): string {
		return this._highMarkerBrush;
	}
	set highMarkerBrush(value: string) {
		this._highMarkerBrush = value;
		this.markDirty("HighMarkerBrush");
	}
	private _lowMarkerBrush: string = null;
	get lowMarkerBrush(): string {
		return this._lowMarkerBrush;
	}
	set lowMarkerBrush(value: string) {
		this._lowMarkerBrush = value;
		this.markDirty("LowMarkerBrush");
	}
	private _trendLineBrush: string = null;
	get trendLineBrush(): string {
		return this._trendLineBrush;
	}
	set trendLineBrush(value: string) {
		this._trendLineBrush = value;
		this.markDirty("TrendLineBrush");
	}
	private _horizontalAxisBrush: string = null;
	get horizontalAxisBrush(): string {
		return this._horizontalAxisBrush;
	}
	set horizontalAxisBrush(value: string) {
		this._horizontalAxisBrush = value;
		this.markDirty("HorizontalAxisBrush");
	}
	private _verticalAxisBrush: string = null;
	get verticalAxisBrush(): string {
		return this._verticalAxisBrush;
	}
	set verticalAxisBrush(value: string) {
		this._verticalAxisBrush = value;
		this.markDirty("VerticalAxisBrush");
	}
	private _normalRangeFill: string = null;
	get normalRangeFill(): string {
		return this._normalRangeFill;
	}
	set normalRangeFill(value: string) {
		this._normalRangeFill = value;
		this.markDirty("NormalRangeFill");
	}
	private _horizontalAxisVisibility: string = null;
	get horizontalAxisVisibility(): string {
		return this._horizontalAxisVisibility;
	}
	set horizontalAxisVisibility(value: string) {
		this._horizontalAxisVisibility = value;
		this.markDirty("HorizontalAxisVisibility");
	}
	private _verticalAxisVisibility: string = null;
	get verticalAxisVisibility(): string {
		return this._verticalAxisVisibility;
	}
	set verticalAxisVisibility(value: string) {
		this._verticalAxisVisibility = value;
		this.markDirty("VerticalAxisVisibility");
	}
	private _markerVisibility: string = null;
	get markerVisibility(): string {
		return this._markerVisibility;
	}
	set markerVisibility(value: string) {
		this._markerVisibility = value;
		this.markDirty("MarkerVisibility");
	}
	private _negativeMarkerVisibility: string = null;
	get negativeMarkerVisibility(): string {
		return this._negativeMarkerVisibility;
	}
	set negativeMarkerVisibility(value: string) {
		this._negativeMarkerVisibility = value;
		this.markDirty("NegativeMarkerVisibility");
	}
	private _firstMarkerVisibility: string = null;
	get firstMarkerVisibility(): string {
		return this._firstMarkerVisibility;
	}
	set firstMarkerVisibility(value: string) {
		this._firstMarkerVisibility = value;
		this.markDirty("FirstMarkerVisibility");
	}
	private _lastMarkerVisibility: string = null;
	get lastMarkerVisibility(): string {
		return this._lastMarkerVisibility;
	}
	set lastMarkerVisibility(value: string) {
		this._lastMarkerVisibility = value;
		this.markDirty("LastMarkerVisibility");
	}
	private _lowMarkerVisibility: string = null;
	get lowMarkerVisibility(): string {
		return this._lowMarkerVisibility;
	}
	set lowMarkerVisibility(value: string) {
		this._lowMarkerVisibility = value;
		this.markDirty("LowMarkerVisibility");
	}
	private _highMarkerVisibility: string = null;
	get highMarkerVisibility(): string {
		return this._highMarkerVisibility;
	}
	set highMarkerVisibility(value: string) {
		this._highMarkerVisibility = value;
		this.markDirty("HighMarkerVisibility");
	}
	private _normalRangeVisibility: string = null;
	get normalRangeVisibility(): string {
		return this._normalRangeVisibility;
	}
	set normalRangeVisibility(value: string) {
		this._normalRangeVisibility = value;
		this.markDirty("NormalRangeVisibility");
	}
	private _displayNormalRangeInFront: boolean = false;
	get displayNormalRangeInFront(): boolean {
		return this._displayNormalRangeInFront;
	}
	set displayNormalRangeInFront(value: boolean) {
		this._displayNormalRangeInFront = value;
		this.markDirty("DisplayNormalRangeInFront");
	}
	private _markerSize: number = 0;
	get markerSize(): number {
		return this._markerSize;
	}
	set markerSize(value: number) {
		this._markerSize = value;
		this.markDirty("MarkerSize");
	}
	private _firstMarkerSize: number = 0;
	get firstMarkerSize(): number {
		return this._firstMarkerSize;
	}
	set firstMarkerSize(value: number) {
		this._firstMarkerSize = value;
		this.markDirty("FirstMarkerSize");
	}
	private _lastMarkerSize: number = 0;
	get lastMarkerSize(): number {
		return this._lastMarkerSize;
	}
	set lastMarkerSize(value: number) {
		this._lastMarkerSize = value;
		this.markDirty("LastMarkerSize");
	}
	private _highMarkerSize: number = 0;
	get highMarkerSize(): number {
		return this._highMarkerSize;
	}
	set highMarkerSize(value: number) {
		this._highMarkerSize = value;
		this.markDirty("HighMarkerSize");
	}
	private _lowMarkerSize: number = 0;
	get lowMarkerSize(): number {
		return this._lowMarkerSize;
	}
	set lowMarkerSize(value: number) {
		this._lowMarkerSize = value;
		this.markDirty("LowMarkerSize");
	}
	private _negativeMarkerSize: number = 0;
	get negativeMarkerSize(): number {
		return this._negativeMarkerSize;
	}
	set negativeMarkerSize(value: number) {
		this._negativeMarkerSize = value;
		this.markDirty("NegativeMarkerSize");
	}
	private _lineThickness: number = 0;
	get lineThickness(): number {
		return this._lineThickness;
	}
	set lineThickness(value: number) {
		this._lineThickness = value;
		this.markDirty("LineThickness");
	}
	private _minimum: number = 0;
	get minimum(): number {
		return this._minimum;
	}
	set minimum(value: number) {
		this._minimum = value;
		this.markDirty("Minimum");
	}
	private _maximum: number = 0;
	get maximum(): number {
		return this._maximum;
	}
	set maximum(value: number) {
		this._maximum = value;
		this.markDirty("Maximum");
	}
	private _sataSourceRef: string = null;
	get sataSourceRef(): string {
		return this._sataSourceRef;
	}
	set sataSourceRef(value: string) {
		this._sataSourceRef = value;
		this.markDirty("SataSourceRef");
	}
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		this._valueMemberPath = value;
		this.markDirty("ValueMemberPath");
	}
	private _labelMemberPath: string = null;
	get labelMemberPath(): string {
		return this._labelMemberPath;
	}
	set labelMemberPath(value: string) {
		this._labelMemberPath = value;
		this.markDirty("LabelMemberPath");
	}
	private _trendLineType: string = null;
	get trendLineType(): string {
		return this._trendLineType;
	}
	set trendLineType(value: string) {
		this._trendLineType = value;
		this.markDirty("TrendLineType");
	}
	private _trendLinePeriod: number = 0;
	get trendLinePeriod(): number {
		return this._trendLinePeriod;
	}
	set trendLinePeriod(value: number) {
		this._trendLinePeriod = value;
		this.markDirty("TrendLinePeriod");
	}
	private _trendLineThickness: number = 0;
	get trendLineThickness(): number {
		return this._trendLineThickness;
	}
	set trendLineThickness(value: number) {
		this._trendLineThickness = value;
		this.markDirty("TrendLineThickness");
	}
	private _normalRangeMinimum: number = 0;
	get normalRangeMinimum(): number {
		return this._normalRangeMinimum;
	}
	set normalRangeMinimum(value: number) {
		this._normalRangeMinimum = value;
		this.markDirty("NormalRangeMinimum");
	}
	private _normalRangeMaximum: number = 0;
	get normalRangeMaximum(): number {
		return this._normalRangeMaximum;
	}
	set normalRangeMaximum(value: number) {
		this._normalRangeMaximum = value;
		this.markDirty("NormalRangeMaximum");
	}
	private _displayType: string = null;
	get displayType(): string {
		return this._displayType;
	}
	set displayType(value: string) {
		this._displayType = value;
		this.markDirty("DisplayType");
	}
	private _unknownValuePlotting: string = null;
	get unknownValuePlotting(): string {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: string) {
		this._unknownValuePlotting = value;
		this.markDirty("UnknownValuePlotting");
	}
	private _verticalAxisLabelRef: string = null;
	get verticalAxisLabelRef(): string {
		return this._verticalAxisLabelRef;
	}
	set verticalAxisLabelRef(value: string) {
		this._verticalAxisLabelRef = value;
		this.markDirty("VerticalAxisLabelRef");
	}
	private _horizontalAxisLabelRef: string = null;
	get horizontalAxisLabelRef(): string {
		return this._horizontalAxisLabelRef;
	}
	set horizontalAxisLabelRef(value: string) {
		this._horizontalAxisLabelRef = value;
		this.markDirty("HorizontalAxisLabelRef");
	}
	private _formatLabelRef: string = null;
	get formatLabelRef(): string {
		return this._formatLabelRef;
	}
	set formatLabelRef(value: string) {
		this._formatLabelRef = value;
		this.markDirty("FormatLabelRef");
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
}


