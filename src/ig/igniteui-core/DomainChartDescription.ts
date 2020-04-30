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
export abstract class DomainChartDescription extends Description {
	static $t: Type = markType(DomainChartDescription, 'DomainChartDescription', (<any>Description).$type);
	protected get_type(): string {
		return "DomainChart";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
		this.markDirty("PixelScalingRatio");
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
	private _subtitleLeftMargin: number = 0;
	get subtitleLeftMargin(): number {
		return this._subtitleLeftMargin;
	}
	set subtitleLeftMargin(value: number) {
		this._subtitleLeftMargin = value;
		this.markDirty("SubtitleLeftMargin");
	}
	private _subtitleTopMargin: number = 0;
	get subtitleTopMargin(): number {
		return this._subtitleTopMargin;
	}
	set subtitleTopMargin(value: number) {
		this._subtitleTopMargin = value;
		this.markDirty("SubtitleTopMargin");
	}
	private _subtitleRightMargin: number = 0;
	get subtitleRightMargin(): number {
		return this._subtitleRightMargin;
	}
	set subtitleRightMargin(value: number) {
		this._subtitleRightMargin = value;
		this.markDirty("SubtitleRightMargin");
	}
	private _subtitleBottomMargin: number = 0;
	get subtitleBottomMargin(): number {
		return this._subtitleBottomMargin;
	}
	set subtitleBottomMargin(value: number) {
		this._subtitleBottomMargin = value;
		this.markDirty("SubtitleBottomMargin");
	}
	private _subtitleTextColor: string = null;
	get subtitleTextColor(): string {
		return this._subtitleTextColor;
	}
	set subtitleTextColor(value: string) {
		this._subtitleTextColor = value;
		this.markDirty("SubtitleTextColor");
	}
	private _titleTextColor: string = null;
	get titleTextColor(): string {
		return this._titleTextColor;
	}
	set titleTextColor(value: string) {
		this._titleTextColor = value;
		this.markDirty("TitleTextColor");
	}
	private _leftMargin: number = 0;
	get leftMargin(): number {
		return this._leftMargin;
	}
	set leftMargin(value: number) {
		this._leftMargin = value;
		this.markDirty("LeftMargin");
	}
	private _topMargin: number = 0;
	get topMargin(): number {
		return this._topMargin;
	}
	set topMargin(value: number) {
		this._topMargin = value;
		this.markDirty("TopMargin");
	}
	private _rightMargin: number = 0;
	get rightMargin(): number {
		return this._rightMargin;
	}
	set rightMargin(value: number) {
		this._rightMargin = value;
		this.markDirty("RightMargin");
	}
	private _bottomMargin: number = 0;
	get bottomMargin(): number {
		return this._bottomMargin;
	}
	set bottomMargin(value: number) {
		this._bottomMargin = value;
		this.markDirty("BottomMargin");
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
	private _subtitleTextStyle: string = null;
	get subtitleTextStyle(): string {
		return this._subtitleTextStyle;
	}
	set subtitleTextStyle(value: string) {
		this._subtitleTextStyle = value;
		this.markDirty("SubtitleTextStyle");
	}
	private _titleTextStyle: string = null;
	get titleTextStyle(): string {
		return this._titleTextStyle;
	}
	set titleTextStyle(value: string) {
		this._titleTextStyle = value;
		this.markDirty("TitleTextStyle");
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
	private _includedProperties: string[] = null;
	get includedProperties(): string[] {
		return this._includedProperties;
	}
	set includedProperties(value: string[]) {
		this._includedProperties = value;
		this.markDirty("IncludedProperties");
	}
	private _excludedProperties: string[] = null;
	get excludedProperties(): string[] {
		return this._excludedProperties;
	}
	set excludedProperties(value: string[]) {
		this._excludedProperties = value;
		this.markDirty("ExcludedProperties");
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
	private _legendRef: string = null;
	get legendRef(): string {
		return this._legendRef;
	}
	set legendRef(value: string) {
		this._legendRef = value;
		this.markDirty("LegendRef");
	}
	private _isHorizontalZoomEnabled: boolean = false;
	get isHorizontalZoomEnabled(): boolean {
		return this._isHorizontalZoomEnabled;
	}
	set isHorizontalZoomEnabled(value: boolean) {
		this._isHorizontalZoomEnabled = value;
		this.markDirty("IsHorizontalZoomEnabled");
	}
	private _isVerticalZoomEnabled: boolean = false;
	get isVerticalZoomEnabled(): boolean {
		return this._isVerticalZoomEnabled;
	}
	set isVerticalZoomEnabled(value: boolean) {
		this._isVerticalZoomEnabled = value;
		this.markDirty("IsVerticalZoomEnabled");
	}
	private _isSeriesHighlightingEnabled: boolean = false;
	get isSeriesHighlightingEnabled(): boolean {
		return this._isSeriesHighlightingEnabled;
	}
	set isSeriesHighlightingEnabled(value: boolean) {
		this._isSeriesHighlightingEnabled = value;
		this.markDirty("IsSeriesHighlightingEnabled");
	}
	private _windowRect: RectDescription = null;
	get windowRect(): RectDescription {
		return this._windowRect;
	}
	set windowRect(value: RectDescription) {
		this._windowRect = value;
		this.markDirty("WindowRect");
	}
	private _chartTitle: string = null;
	get chartTitle(): string {
		return this._chartTitle;
	}
	set chartTitle(value: string) {
		this._chartTitle = value;
		this.markDirty("ChartTitle");
	}
	private _subtitle: string = null;
	get subtitle(): string {
		return this._subtitle;
	}
	set subtitle(value: string) {
		this._subtitle = value;
		this.markDirty("Subtitle");
	}
	private _titleAlignment: string = null;
	get titleAlignment(): string {
		return this._titleAlignment;
	}
	set titleAlignment(value: string) {
		this._titleAlignment = value;
		this.markDirty("TitleAlignment");
	}
	private _subtitleAlignment: string = null;
	get subtitleAlignment(): string {
		return this._subtitleAlignment;
	}
	set subtitleAlignment(value: string) {
		this._subtitleAlignment = value;
		this.markDirty("SubtitleAlignment");
	}
	private _unknownValuePlotting: string = null;
	get unknownValuePlotting(): string {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: string) {
		this._unknownValuePlotting = value;
		this.markDirty("UnknownValuePlotting");
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
		this.markDirty("Resolution");
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
		this.markDirty("Thickness");
	}
	private _markerTypes: string[] = null;
	get markerTypes(): string[] {
		return this._markerTypes;
	}
	set markerTypes(value: string[]) {
		this._markerTypes = value;
		this.markDirty("MarkerTypes");
	}
	private _markerBrushes: string[] = null;
	get markerBrushes(): string[] {
		return this._markerBrushes;
	}
	set markerBrushes(value: string[]) {
		this._markerBrushes = value;
		this.markDirty("MarkerBrushes");
	}
	private _markerOutlines: string[] = null;
	get markerOutlines(): string[] {
		return this._markerOutlines;
	}
	set markerOutlines(value: string[]) {
		this._markerOutlines = value;
		this.markDirty("MarkerOutlines");
	}
	private _markerMaxCount: number = 0;
	get markerMaxCount(): number {
		return this._markerMaxCount;
	}
	set markerMaxCount(value: number) {
		this._markerMaxCount = value;
		this.markDirty("MarkerMaxCount");
	}
	private _animateSeriesWhenAxisRangeChanges: boolean = false;
	get animateSeriesWhenAxisRangeChanges(): boolean {
		return this._animateSeriesWhenAxisRangeChanges;
	}
	set animateSeriesWhenAxisRangeChanges(value: boolean) {
		this._animateSeriesWhenAxisRangeChanges = value;
		this.markDirty("AnimateSeriesWhenAxisRangeChanges");
	}
	private _trendLineBrushes: string[] = null;
	get trendLineBrushes(): string[] {
		return this._trendLineBrushes;
	}
	set trendLineBrushes(value: string[]) {
		this._trendLineBrushes = value;
		this.markDirty("TrendLineBrushes");
	}
	private _trendLineType: string = null;
	get trendLineType(): string {
		return this._trendLineType;
	}
	set trendLineType(value: string) {
		this._trendLineType = value;
		this.markDirty("TrendLineType");
	}
	private _trendLineThickness: number = 0;
	get trendLineThickness(): number {
		return this._trendLineThickness;
	}
	set trendLineThickness(value: number) {
		this._trendLineThickness = value;
		this.markDirty("TrendLineThickness");
	}
	private _alignsGridLinesToPixels: boolean = false;
	get alignsGridLinesToPixels(): boolean {
		return this._alignsGridLinesToPixels;
	}
	set alignsGridLinesToPixels(value: boolean) {
		this._alignsGridLinesToPixels = value;
		this.markDirty("AlignsGridLinesToPixels");
	}
	private _trendLinePeriod: number = 0;
	get trendLinePeriod(): number {
		return this._trendLinePeriod;
	}
	set trendLinePeriod(value: number) {
		this._trendLinePeriod = value;
		this.markDirty("TrendLinePeriod");
	}
	private _toolTipType: string = null;
	get toolTipType(): string {
		return this._toolTipType;
	}
	set toolTipType(value: string) {
		this._toolTipType = value;
		this.markDirty("ToolTipType");
	}
	private _crosshairsDisplayMode: string = null;
	get crosshairsDisplayMode(): string {
		return this._crosshairsDisplayMode;
	}
	set crosshairsDisplayMode(value: string) {
		this._crosshairsDisplayMode = value;
		this.markDirty("CrosshairsDisplayMode");
	}
	private _crosshairsSnapToData: boolean = false;
	get crosshairsSnapToData(): boolean {
		return this._crosshairsSnapToData;
	}
	set crosshairsSnapToData(value: boolean) {
		this._crosshairsSnapToData = value;
		this.markDirty("CrosshairsSnapToData");
	}
	private _crosshairsAnnotationEnabled: boolean = false;
	get crosshairsAnnotationEnabled(): boolean {
		return this._crosshairsAnnotationEnabled;
	}
	set crosshairsAnnotationEnabled(value: boolean) {
		this._crosshairsAnnotationEnabled = value;
		this.markDirty("CrosshairsAnnotationEnabled");
	}
	private _finalValueAnnotationsVisible: boolean = false;
	get finalValueAnnotationsVisible(): boolean {
		return this._finalValueAnnotationsVisible;
	}
	set finalValueAnnotationsVisible(value: boolean) {
		this._finalValueAnnotationsVisible = value;
		this.markDirty("FinalValueAnnotationsVisible");
	}
	private _calloutsVisible: boolean = false;
	get calloutsVisible(): boolean {
		return this._calloutsVisible;
	}
	set calloutsVisible(value: boolean) {
		this._calloutsVisible = value;
		this.markDirty("CalloutsVisible");
	}
	private _calloutStyleUpdatingEventEnabled: boolean = false;
	get calloutStyleUpdatingEventEnabled(): boolean {
		return this._calloutStyleUpdatingEventEnabled;
	}
	set calloutStyleUpdatingEventEnabled(value: boolean) {
		this._calloutStyleUpdatingEventEnabled = value;
		this.markDirty("CalloutStyleUpdatingEventEnabled");
	}
	private _calloutsXMemberPath: string = null;
	get calloutsXMemberPath(): string {
		return this._calloutsXMemberPath;
	}
	set calloutsXMemberPath(value: string) {
		this._calloutsXMemberPath = value;
		this.markDirty("CalloutsXMemberPath");
	}
	private _calloutsYMemberPath: string = null;
	get calloutsYMemberPath(): string {
		return this._calloutsYMemberPath;
	}
	set calloutsYMemberPath(value: string) {
		this._calloutsYMemberPath = value;
		this.markDirty("CalloutsYMemberPath");
	}
	private _calloutsLabelMemberPath: string = null;
	get calloutsLabelMemberPath(): string {
		return this._calloutsLabelMemberPath;
	}
	set calloutsLabelMemberPath(value: string) {
		this._calloutsLabelMemberPath = value;
		this.markDirty("CalloutsLabelMemberPath");
	}
	private _calloutsContentMemberPath: string = null;
	get calloutsContentMemberPath(): string {
		return this._calloutsContentMemberPath;
	}
	set calloutsContentMemberPath(value: string) {
		this._calloutsContentMemberPath = value;
		this.markDirty("CalloutsContentMemberPath");
	}
	private _seriesAdded: string = null;
	get seriesAddedRef(): string {
		return this._seriesAdded;
	}
	set seriesAddedRef(value: string) {
		this._seriesAdded = value;
		this.markDirty("SeriesAddedRef");
	}
	private _seriesRemoved: string = null;
	get seriesRemovedRef(): string {
		return this._seriesRemoved;
	}
	set seriesRemovedRef(value: string) {
		this._seriesRemoved = value;
		this.markDirty("SeriesRemovedRef");
	}
	private _seriesPointerEnter: string = null;
	get seriesPointerEnterRef(): string {
		return this._seriesPointerEnter;
	}
	set seriesPointerEnterRef(value: string) {
		this._seriesPointerEnter = value;
		this.markDirty("SeriesPointerEnterRef");
	}
	private _seriesPointerLeave: string = null;
	get seriesPointerLeaveRef(): string {
		return this._seriesPointerLeave;
	}
	set seriesPointerLeaveRef(value: string) {
		this._seriesPointerLeave = value;
		this.markDirty("SeriesPointerLeaveRef");
	}
	private _seriesPointerMove: string = null;
	get seriesPointerMoveRef(): string {
		return this._seriesPointerMove;
	}
	set seriesPointerMoveRef(value: string) {
		this._seriesPointerMove = value;
		this.markDirty("SeriesPointerMoveRef");
	}
	private _seriesPointerDown: string = null;
	get seriesPointerDownRef(): string {
		return this._seriesPointerDown;
	}
	set seriesPointerDownRef(value: string) {
		this._seriesPointerDown = value;
		this.markDirty("SeriesPointerDownRef");
	}
	private _seriesPointerUp: string = null;
	get seriesPointerUpRef(): string {
		return this._seriesPointerUp;
	}
	set seriesPointerUpRef(value: string) {
		this._seriesPointerUp = value;
		this.markDirty("SeriesPointerUpRef");
	}
	private _calloutStyleUpdating: string = null;
	get calloutStyleUpdatingRef(): string {
		return this._calloutStyleUpdating;
	}
	set calloutStyleUpdatingRef(value: string) {
		this._calloutStyleUpdating = value;
		this.markDirty("CalloutStyleUpdatingRef");
	}
}


