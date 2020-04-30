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
export abstract class AxisDescription extends Description {
	static $t: Type = markType(AxisDescription, 'AxisDescription', (<any>Description).$type);
	protected get_type(): string {
		return "Axis";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _formatLabelRef: string = null;
	get formatLabelRef(): string {
		return this._formatLabelRef;
	}
	set formatLabelRef(value: string) {
		this._formatLabelRef = value;
		this.markDirty("FormatLabelRef");
	}
	private _title: string = null;
	get title(): string {
		return this._title;
	}
	set title(value: string) {
		this._title = value;
		this.markDirty("Title");
	}
	private _stroke: string = null;
	get stroke(): string {
		return this._stroke;
	}
	set stroke(value: string) {
		this._stroke = value;
		this.markDirty("Stroke");
	}
	private _actualStroke: string = null;
	get actualStroke(): string {
		return this._actualStroke;
	}
	set actualStroke(value: string) {
		this._actualStroke = value;
		this.markDirty("ActualStroke");
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
		this.markDirty("StrokeThickness");
	}
	private _strip: string = null;
	get strip(): string {
		return this._strip;
	}
	set strip(value: string) {
		this._strip = value;
		this.markDirty("Strip");
	}
	private _majorStroke: string = null;
	get majorStroke(): string {
		return this._majorStroke;
	}
	set majorStroke(value: string) {
		this._majorStroke = value;
		this.markDirty("MajorStroke");
	}
	private _actualMajorStroke: string = null;
	get actualMajorStroke(): string {
		return this._actualMajorStroke;
	}
	set actualMajorStroke(value: string) {
		this._actualMajorStroke = value;
		this.markDirty("ActualMajorStroke");
	}
	private _majorStrokeThickness: number = 0;
	get majorStrokeThickness(): number {
		return this._majorStrokeThickness;
	}
	set majorStrokeThickness(value: number) {
		this._majorStrokeThickness = value;
		this.markDirty("MajorStrokeThickness");
	}
	private _minorStroke: string = null;
	get minorStroke(): string {
		return this._minorStroke;
	}
	set minorStroke(value: string) {
		this._minorStroke = value;
		this.markDirty("MinorStroke");
	}
	private _actualMinorStroke: string = null;
	get actualMinorStroke(): string {
		return this._actualMinorStroke;
	}
	set actualMinorStroke(value: string) {
		this._actualMinorStroke = value;
		this.markDirty("ActualMinorStroke");
	}
	private _minorStrokeThickness: number = 0;
	get minorStrokeThickness(): number {
		return this._minorStrokeThickness;
	}
	set minorStrokeThickness(value: number) {
		this._minorStrokeThickness = value;
		this.markDirty("MinorStrokeThickness");
	}
	private _tickStroke: string = null;
	get tickStroke(): string {
		return this._tickStroke;
	}
	set tickStroke(value: string) {
		this._tickStroke = value;
		this.markDirty("TickStroke");
	}
	private _tickStrokeThickness: number = 0;
	get tickStrokeThickness(): number {
		return this._tickStrokeThickness;
	}
	set tickStrokeThickness(value: number) {
		this._tickStrokeThickness = value;
		this.markDirty("TickStrokeThickness");
	}
	private _tickLength: number = 0;
	get tickLength(): number {
		return this._tickLength;
	}
	set tickLength(value: number) {
		this._tickLength = value;
		this.markDirty("TickLength");
	}
	private _isDisabled: boolean = false;
	get isDisabled(): boolean {
		return this._isDisabled;
	}
	set isDisabled(value: boolean) {
		this._isDisabled = value;
		this.markDirty("IsDisabled");
	}
	private _isInverted: boolean = false;
	get isInverted(): boolean {
		return this._isInverted;
	}
	set isInverted(value: boolean) {
		this._isInverted = value;
		this.markDirty("IsInverted");
	}
	private _useEnhancedIntervalManagement: boolean = false;
	get useEnhancedIntervalManagement(): boolean {
		return this._useEnhancedIntervalManagement;
	}
	set useEnhancedIntervalManagement(value: boolean) {
		this._useEnhancedIntervalManagement = value;
		this.markDirty("UseEnhancedIntervalManagement");
	}
	private _enhancedIntervalMinimumCharacters: number = 0;
	get enhancedIntervalMinimumCharacters(): number {
		return this._enhancedIntervalMinimumCharacters;
	}
	set enhancedIntervalMinimumCharacters(value: number) {
		this._enhancedIntervalMinimumCharacters = value;
		this.markDirty("EnhancedIntervalMinimumCharacters");
	}
	private _labelTextColor: string = null;
	get labelTextColor(): string {
		return this._labelTextColor;
	}
	set labelTextColor(value: string) {
		this._labelTextColor = value;
		this.markDirty("LabelTextColor");
	}
	private _labelLocation: string = null;
	get labelLocation(): string {
		return this._labelLocation;
	}
	set labelLocation(value: string) {
		this._labelLocation = value;
		this.markDirty("LabelLocation");
	}
	private _labelShowFirstLabel: boolean = false;
	get labelShowFirstLabel(): boolean {
		return this._labelShowFirstLabel;
	}
	set labelShowFirstLabel(value: boolean) {
		this._labelShowFirstLabel = value;
		this.markDirty("LabelShowFirstLabel");
	}
	private _labelAngle: number = 0;
	get labelAngle(): number {
		return this._labelAngle;
	}
	set labelAngle(value: number) {
		this._labelAngle = value;
		this.markDirty("LabelAngle");
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
		this.markDirty("LabelExtent");
	}
	private _labelLeftMargin: number = 0;
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		this._labelLeftMargin = value;
		this.markDirty("LabelLeftMargin");
	}
	private _labelRightMargin: number = 0;
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		this._labelRightMargin = value;
		this.markDirty("LabelRightMargin");
	}
	private _labelTopMargin: number = 0;
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		this._labelTopMargin = value;
		this.markDirty("LabelTopMargin");
	}
	private _labelBottomMargin: number = 0;
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		this._labelBottomMargin = value;
		this.markDirty("LabelBottomMargin");
	}
	private _labelHorizontalAlignment: string = null;
	get labelHorizontalAlignment(): string {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: string) {
		this._labelHorizontalAlignment = value;
		this.markDirty("LabelHorizontalAlignment");
	}
	private _labelVerticalAlignment: string = null;
	get labelVerticalAlignment(): string {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: string) {
		this._labelVerticalAlignment = value;
		this.markDirty("LabelVerticalAlignment");
	}
	private _crossingAxisRef: string = null;
	get crossingAxisRef(): string {
		return this._crossingAxisRef;
	}
	set crossingAxisRef(value: string) {
		this._crossingAxisRef = value;
		this.markDirty("CrossingAxisRef");
	}
	private _crossingValueRef: string = null;
	get crossingValueRef(): string {
		return this._crossingValueRef;
	}
	set crossingValueRef(value: string) {
		this._crossingValueRef = value;
		this.markDirty("CrossingValueRef");
	}
	private _titlePosition: string = null;
	get titlePosition(): string {
		return this._titlePosition;
	}
	set titlePosition(value: string) {
		this._titlePosition = value;
		this.markDirty("TitlePosition");
	}
	private _titleTextColor: string = null;
	get titleTextColor(): string {
		return this._titleTextColor;
	}
	set titleTextColor(value: string) {
		this._titleTextColor = value;
		this.markDirty("TitleTextColor");
	}
	private _titleLocation: string = null;
	get titleLocation(): string {
		return this._titleLocation;
	}
	set titleLocation(value: string) {
		this._titleLocation = value;
		this.markDirty("TitleLocation");
	}
	private _titleShowFirstLabel: boolean = false;
	get titleShowFirstLabel(): boolean {
		return this._titleShowFirstLabel;
	}
	set titleShowFirstLabel(value: boolean) {
		this._titleShowFirstLabel = value;
		this.markDirty("TitleShowFirstLabel");
	}
	private _titleAngle: number = 0;
	get titleAngle(): number {
		return this._titleAngle;
	}
	set titleAngle(value: number) {
		this._titleAngle = value;
		this.markDirty("TitleAngle");
	}
	private _titleExtent: number = 0;
	get titleExtent(): number {
		return this._titleExtent;
	}
	set titleExtent(value: number) {
		this._titleExtent = value;
		this.markDirty("TitleExtent");
	}
	private _titleLeftMargin: number = 0;
	get titleLeftMargin(): number {
		return this._titleLeftMargin;
	}
	set titleLeftMargin(value: number) {
		this._titleLeftMargin = value;
		this.markDirty("TitleLeftMargin");
	}
	private _titleRightMargin: number = 0;
	get titleRightMargin(): number {
		return this._titleRightMargin;
	}
	set titleRightMargin(value: number) {
		this._titleRightMargin = value;
		this.markDirty("TitleRightMargin");
	}
	private _titleTopMargin: number = 0;
	get titleTopMargin(): number {
		return this._titleTopMargin;
	}
	set titleTopMargin(value: number) {
		this._titleTopMargin = value;
		this.markDirty("TitleTopMargin");
	}
	private _titleBottomMargin: number = 0;
	get titleBottomMargin(): number {
		return this._titleBottomMargin;
	}
	set titleBottomMargin(value: number) {
		this._titleBottomMargin = value;
		this.markDirty("TitleBottomMargin");
	}
	private _titleHorizontalAlignment: string = null;
	get titleHorizontalAlignment(): string {
		return this._titleHorizontalAlignment;
	}
	set titleHorizontalAlignment(value: string) {
		this._titleHorizontalAlignment = value;
		this.markDirty("TitleHorizontalAlignment");
	}
	private _titleVerticalAlignment: string = null;
	get titleVerticalAlignment(): string {
		return this._titleVerticalAlignment;
	}
	set titleVerticalAlignment(value: string) {
		this._titleVerticalAlignment = value;
		this.markDirty("TitleVerticalAlignment");
	}
	private _coercionMethodsRef: string = null;
	get coercionMethodsRef(): string {
		return this._coercionMethodsRef;
	}
	set coercionMethodsRef(value: string) {
		this._coercionMethodsRef = value;
		this.markDirty("CoercionMethodsRef");
	}
	private _expectFunctions: boolean = false;
	get expectFunctions(): boolean {
		return this._expectFunctions;
	}
	set expectFunctions(value: boolean) {
		this._expectFunctions = value;
		this.markDirty("ExpectFunctions");
	}
	private _rangeChanged: string = null;
	get rangeChangedRef(): string {
		return this._rangeChanged;
	}
	set rangeChangedRef(value: string) {
		this._rangeChanged = value;
		this.markDirty("RangeChangedRef");
	}
	private _renderRequested: string = null;
	get renderRequestedRef(): string {
		return this._renderRequested;
	}
	set renderRequestedRef(value: string) {
		this._renderRequested = value;
		this.markDirty("RenderRequestedRef");
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
		this.markDirty("Label");
	}
	private _labelFontFamily: string = null;
	get labelFontFamily(): string {
		return this._labelFontFamily;
	}
	set labelFontFamily(value: string) {
		this._labelFontFamily = value;
		this.markDirty("LabelFontFamily");
	}
	private _labelFontSize: number = 0;
	get labelFontSize(): number {
		return this._labelFontSize;
	}
	set labelFontSize(value: number) {
		this._labelFontSize = value;
		this.markDirty("LabelFontSize");
	}
	private _labelFontWeight: string = null;
	get labelFontWeight(): string {
		return this._labelFontWeight;
	}
	set labelFontWeight(value: string) {
		this._labelFontWeight = value;
		this.markDirty("LabelFontWeight");
	}
	private _labelFontStyle: string = null;
	get labelFontStyle(): string {
		return this._labelFontStyle;
	}
	set labelFontStyle(value: string) {
		this._labelFontStyle = value;
		this.markDirty("LabelFontStyle");
	}
	private _titleFontFamily: string = null;
	get titleFontFamily(): string {
		return this._titleFontFamily;
	}
	set titleFontFamily(value: string) {
		this._titleFontFamily = value;
		this.markDirty("TitleFontFamily");
	}
	private _titleFontSize: number = 0;
	get titleFontSize(): number {
		return this._titleFontSize;
	}
	set titleFontSize(value: number) {
		this._titleFontSize = value;
		this.markDirty("TitleFontSize");
	}
	private _titleFontWeight: string = null;
	get titleFontWeight(): string {
		return this._titleFontWeight;
	}
	set titleFontWeight(value: string) {
		this._titleFontWeight = value;
		this.markDirty("TitleFontWeight");
	}
	private _titleFontStyle: string = null;
	get titleFontStyle(): string {
		return this._titleFontStyle;
	}
	set titleFontStyle(value: string) {
		this._titleFontStyle = value;
		this.markDirty("TitleFontStyle");
	}
	private _labelVisibility: string = null;
	get labelVisibility(): string {
		return this._labelVisibility;
	}
	set labelVisibility(value: string) {
		this._labelVisibility = value;
		this.markDirty("LabelVisibility");
	}
}


