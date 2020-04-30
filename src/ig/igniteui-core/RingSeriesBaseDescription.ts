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
export abstract class RingSeriesBaseDescription extends Description {
	static $t: Type = markType(RingSeriesBaseDescription, 'RingSeriesBaseDescription', (<any>Description).$type);
	private _tooltipTemplateRef: string = null;
	get tooltipTemplateRef(): string {
		return this._tooltipTemplateRef;
	}
	set tooltipTemplateRef(value: string) {
		this._tooltipTemplateRef = value;
		this.markDirty("TooltipTemplateRef");
	}
	private _legendRef: string = null;
	get legendRef(): string {
		return this._legendRef;
	}
	set legendRef(value: string) {
		this._legendRef = value;
		this.markDirty("LegendRef");
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
		return "RingSeriesBase";
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
	private _leaderLineVisibility: string = null;
	get leaderLineVisibility(): string {
		return this._leaderLineVisibility;
	}
	set leaderLineVisibility(value: string) {
		this._leaderLineVisibility = value;
		this.markDirty("LeaderLineVisibility");
	}
	private _leaderLineFill: string = null;
	get leaderLineFill(): string {
		return this._leaderLineFill;
	}
	set leaderLineFill(value: string) {
		this._leaderLineFill = value;
		this.markDirty("LeaderLineFill");
	}
	private _leaderLineStroke: string = null;
	get leaderLineStroke(): string {
		return this._leaderLineStroke;
	}
	set leaderLineStroke(value: string) {
		this._leaderLineStroke = value;
		this.markDirty("LeaderLineStroke");
	}
	private _leaderLineStrokeThickness: number = 0;
	get leaderLineStrokeThickness(): number {
		return this._leaderLineStrokeThickness;
	}
	set leaderLineStrokeThickness(value: number) {
		this._leaderLineStrokeThickness = value;
		this.markDirty("LeaderLineStrokeThickness");
	}
	private _leaderLineOpacity: number = 0;
	get leaderLineOpacity(): number {
		return this._leaderLineOpacity;
	}
	set leaderLineOpacity(value: number) {
		this._leaderLineOpacity = value;
		this.markDirty("LeaderLineOpacity");
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
	private _isSurfaceInteractionDisabled: boolean = false;
	get isSurfaceInteractionDisabled(): boolean {
		return this._isSurfaceInteractionDisabled;
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this._isSurfaceInteractionDisabled = value;
		this.markDirty("IsSurfaceInteractionDisabled");
	}
	private _radiusFactor: number = 0;
	get radiusFactor(): number {
		return this._radiusFactor;
	}
	set radiusFactor(value: number) {
		this._radiusFactor = value;
		this.markDirty("RadiusFactor");
	}
	private _propertyUpdated: string = null;
	get propertyUpdatedRef(): string {
		return this._propertyUpdated;
	}
	set propertyUpdatedRef(value: string) {
		this._propertyUpdated = value;
		this.markDirty("PropertyUpdatedRef");
	}
}


