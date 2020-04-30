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
export abstract class PieChartBaseDescription extends Description {
	static $t: Type = markType(PieChartBaseDescription, 'PieChartBaseDescription', (<any>Description).$type);
	private _tooltipTemplateRef: string = null;
	get tooltipTemplateRef(): string {
		return this._tooltipTemplateRef;
	}
	set tooltipTemplateRef(value: string) {
		this._tooltipTemplateRef = value;
		this.markDirty("TooltipTemplateRef");
	}
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
	protected get_type(): string {
		return "PieChartBase";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
	private _innerExtent: number = 0;
	get innerExtent(): number {
		return this._innerExtent;
	}
	set innerExtent(value: number) {
		this._innerExtent = value;
		this.markDirty("InnerExtent");
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
	private _legendLabelMemberPath: string = null;
	get legendLabelMemberPath(): string {
		return this._legendLabelMemberPath;
	}
	set legendLabelMemberPath(value: string) {
		this._legendLabelMemberPath = value;
		this.markDirty("LegendLabelMemberPath");
	}
	private _labelsPosition: string = null;
	get labelsPosition(): string {
		return this._labelsPosition;
	}
	set labelsPosition(value: string) {
		this._labelsPosition = value;
		this.markDirty("LabelsPosition");
	}
	private _labelOuterColor: string = null;
	get labelOuterColor(): string {
		return this._labelOuterColor;
	}
	set labelOuterColor(value: string) {
		this._labelOuterColor = value;
		this.markDirty("LabelOuterColor");
	}
	private _labelInnerColor: string = null;
	get labelInnerColor(): string {
		return this._labelInnerColor;
	}
	set labelInnerColor(value: string) {
		this._labelInnerColor = value;
		this.markDirty("LabelInnerColor");
	}
	private _leaderLineVisibility: string = null;
	get leaderLineVisibility(): string {
		return this._leaderLineVisibility;
	}
	set leaderLineVisibility(value: string) {
		this._leaderLineVisibility = value;
		this.markDirty("LeaderLineVisibility");
	}
	private _leaderLineType: string = null;
	get leaderLineType(): string {
		return this._leaderLineType;
	}
	set leaderLineType(value: string) {
		this._leaderLineType = value;
		this.markDirty("LeaderLineType");
	}
	private _leaderLineMargin: number = 0;
	get leaderLineMargin(): number {
		return this._leaderLineMargin;
	}
	set leaderLineMargin(value: number) {
		this._leaderLineMargin = value;
		this.markDirty("LeaderLineMargin");
	}
	private _othersCategoryThreshold: number = 0;
	get othersCategoryThreshold(): number {
		return this._othersCategoryThreshold;
	}
	set othersCategoryThreshold(value: number) {
		this._othersCategoryThreshold = value;
		this.markDirty("OthersCategoryThreshold");
	}
	private _othersCategoryType: string = null;
	get othersCategoryType(): string {
		return this._othersCategoryType;
	}
	set othersCategoryType(value: string) {
		this._othersCategoryType = value;
		this.markDirty("OthersCategoryType");
	}
	private _othersCategoryText: string = null;
	get othersCategoryText(): string {
		return this._othersCategoryText;
	}
	set othersCategoryText(value: string) {
		this._othersCategoryText = value;
		this.markDirty("OthersCategoryText");
	}
	private _explodedRadius: number = 0;
	get explodedRadius(): number {
		return this._explodedRadius;
	}
	set explodedRadius(value: number) {
		this._explodedRadius = value;
		this.markDirty("ExplodedRadius");
	}
	private _radiusFactor: number = 0;
	get radiusFactor(): number {
		return this._radiusFactor;
	}
	set radiusFactor(value: number) {
		this._radiusFactor = value;
		this.markDirty("RadiusFactor");
	}
	private _allowSliceSelection: boolean = false;
	get allowSliceSelection(): boolean {
		return this._allowSliceSelection;
	}
	set allowSliceSelection(value: boolean) {
		this._allowSliceSelection = value;
		this.markDirty("AllowSliceSelection");
	}
	private _allowSliceExplosion: boolean = false;
	get allowSliceExplosion(): boolean {
		return this._allowSliceExplosion;
	}
	set allowSliceExplosion(value: boolean) {
		this._allowSliceExplosion = value;
		this.markDirty("AllowSliceExplosion");
	}
	private _explodedSlices: number[] = null;
	get explodedSlices(): number[] {
		return this._explodedSlices;
	}
	set explodedSlices(value: number[]) {
		this._explodedSlices = value;
		this.markDirty("ExplodedSlices");
	}
	private _labelExtent: number = 0;
	get labelExtent(): number {
		return this._labelExtent;
	}
	set labelExtent(value: number) {
		this._labelExtent = value;
		this.markDirty("LabelExtent");
	}
	private _startAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
		this.markDirty("StartAngle");
	}
	private _sweepDirection: string = null;
	get sweepDirection(): string {
		return this._sweepDirection;
	}
	set sweepDirection(value: string) {
		this._sweepDirection = value;
		this.markDirty("SweepDirection");
	}
	private _othersCategoryFill: string = null;
	get othersCategoryFill(): string {
		return this._othersCategoryFill;
	}
	set othersCategoryFill(value: string) {
		this._othersCategoryFill = value;
		this.markDirty("OthersCategoryFill");
	}
	private _othersCategoryStroke: string = null;
	get othersCategoryStroke(): string {
		return this._othersCategoryStroke;
	}
	set othersCategoryStroke(value: string) {
		this._othersCategoryStroke = value;
		this.markDirty("OthersCategoryStroke");
	}
	private _othersCategoryStrokeThickness: number = 0;
	get othersCategoryStrokeThickness(): number {
		return this._othersCategoryStrokeThickness;
	}
	set othersCategoryStrokeThickness(value: number) {
		this._othersCategoryStrokeThickness = value;
		this.markDirty("OthersCategoryStrokeThickness");
	}
	private _othersCategoryOpacity: number = 0;
	get othersCategoryOpacity(): number {
		return this._othersCategoryOpacity;
	}
	set othersCategoryOpacity(value: number) {
		this._othersCategoryOpacity = value;
		this.markDirty("OthersCategoryOpacity");
	}
	private _selectedSliceFill: string = null;
	get selectedSliceFill(): string {
		return this._selectedSliceFill;
	}
	set selectedSliceFill(value: string) {
		this._selectedSliceFill = value;
		this.markDirty("SelectedSliceFill");
	}
	private _selectedSliceStroke: string = null;
	get selectedSliceStroke(): string {
		return this._selectedSliceStroke;
	}
	set selectedSliceStroke(value: string) {
		this._selectedSliceStroke = value;
		this.markDirty("SelectedSliceStroke");
	}
	private _selectedSliceStrokeThickness: number = 0;
	get selectedSliceStrokeThickness(): number {
		return this._selectedSliceStrokeThickness;
	}
	set selectedSliceStrokeThickness(value: number) {
		this._selectedSliceStrokeThickness = value;
		this.markDirty("SelectedSliceStrokeThickness");
	}
	private _selectedSliceOpacity: number = 0;
	get selectedSliceOpacity(): number {
		return this._selectedSliceOpacity;
	}
	set selectedSliceOpacity(value: number) {
		this._selectedSliceOpacity = value;
		this.markDirty("SelectedSliceOpacity");
	}
	private _brushes: string[] = null;
	get brushes(): string[] {
		return this._brushes;
	}
	set brushes(value: string[]) {
		this._brushes = value;
		this.markDirty("Brushes");
	}
	private _outlines: string[] = null;
	get outlines(): string[] {
		return this._outlines;
	}
	set outlines(value: string[]) {
		this._outlines = value;
		this.markDirty("Outlines");
	}
	private _legendItemTemplateRef: string = null;
	get legendItemTemplateRef(): string {
		return this._legendItemTemplateRef;
	}
	set legendItemTemplateRef(value: string) {
		this._legendItemTemplateRef = value;
		this.markDirty("LegendItemTemplateRef");
	}
	private _legendItemBadgeTemplateRef: string = null;
	get legendItemBadgeTemplateRef(): string {
		return this._legendItemBadgeTemplateRef;
	}
	set legendItemBadgeTemplateRef(value: string) {
		this._legendItemBadgeTemplateRef = value;
		this.markDirty("LegendItemBadgeTemplateRef");
	}
	private _isSurfaceInteractionDisabled: boolean = false;
	get isSurfaceInteractionDisabled(): boolean {
		return this._isSurfaceInteractionDisabled;
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this._isSurfaceInteractionDisabled = value;
		this.markDirty("IsSurfaceInteractionDisabled");
	}
	private _formatLabelRef: string = null;
	get formatLabelRef(): string {
		return this._formatLabelRef;
	}
	set formatLabelRef(value: string) {
		this._formatLabelRef = value;
		this.markDirty("FormatLabelRef");
	}
	private _formatLegendLabelRef: string = null;
	get formatLegendLabelRef(): string {
		return this._formatLegendLabelRef;
	}
	set formatLegendLabelRef(value: string) {
		this._formatLegendLabelRef = value;
		this.markDirty("FormatLegendLabelRef");
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
	private _selectionMode: string = null;
	get selectionMode(): string {
		return this._selectionMode;
	}
	set selectionMode(value: string) {
		this._selectionMode = value;
		this.markDirty("SelectionMode");
	}
	private _selectedItemRef: string = null;
	get selectedItemRef(): string {
		return this._selectedItemRef;
	}
	set selectedItemRef(value: string) {
		this._selectedItemRef = value;
		this.markDirty("SelectedItemRef");
	}
	private _selectedItems: any[] = null;
	get selectedItems(): any[] {
		return this._selectedItems;
	}
	set selectedItems(value: any[]) {
		this._selectedItems = value;
		this.markDirty("SelectedItems");
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		this._textStyle = value;
		this.markDirty("TextStyle");
	}
	private _labelClick: string = null;
	get labelClickRef(): string {
		return this._labelClick;
	}
	set labelClickRef(value: string) {
		this._labelClick = value;
		this.markDirty("LabelClickRef");
	}
	private _selectedItemChanging: string = null;
	get selectedItemChangingRef(): string {
		return this._selectedItemChanging;
	}
	set selectedItemChangingRef(value: string) {
		this._selectedItemChanging = value;
		this.markDirty("SelectedItemChangingRef");
	}
	private _selectedItemsChanging: string = null;
	get selectedItemsChangingRef(): string {
		return this._selectedItemsChanging;
	}
	set selectedItemsChangingRef(value: string) {
		this._selectedItemsChanging = value;
		this.markDirty("SelectedItemsChangingRef");
	}
	private _selectedItemChanged: string = null;
	get selectedItemChangedRef(): string {
		return this._selectedItemChanged;
	}
	set selectedItemChangedRef(value: string) {
		this._selectedItemChanged = value;
		this.markDirty("SelectedItemChangedRef");
	}
	private _selectedItemsChanged: string = null;
	get selectedItemsChangedRef(): string {
		return this._selectedItemsChanged;
	}
	set selectedItemsChangedRef(value: string) {
		this._selectedItemsChanged = value;
		this.markDirty("SelectedItemsChangedRef");
	}
	private _sliceClick: string = null;
	get sliceClickRef(): string {
		return this._sliceClick;
	}
	set sliceClickRef(value: string) {
		this._sliceClick = value;
		this.markDirty("SliceClickRef");
	}
}


