/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { PointDescription } from "./PointDescription";
import { RectDescription } from "./RectDescription";
import { SeriesDescription } from "./SeriesDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class SeriesViewerDescription extends Description {
	static $t: Type = markType(SeriesViewerDescription, 'SeriesViewerDescription', (<any>Description).$type);
	protected get_type(): string {
		return "SeriesViewer";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _crosshairPoint: PointDescription = null;
	get crosshairPoint(): PointDescription {
		return this._crosshairPoint;
	}
	set crosshairPoint(value: PointDescription) {
		this._crosshairPoint = value;
		this.markDirty("CrosshairPoint");
	}
	private _animateSeriesWhenAxisRangeChanges: boolean = false;
	get animateSeriesWhenAxisRangeChanges(): boolean {
		return this._animateSeriesWhenAxisRangeChanges;
	}
	set animateSeriesWhenAxisRangeChanges(value: boolean) {
		this._animateSeriesWhenAxisRangeChanges = value;
		this.markDirty("AnimateSeriesWhenAxisRangeChanges");
	}
	private _effectiveViewport: RectDescription = null;
	get effectiveViewport(): RectDescription {
		return this._effectiveViewport;
	}
	set effectiveViewport(value: RectDescription) {
		this._effectiveViewport = value;
		this.markDirty("EffectiveViewport");
	}
	private _windowRect: RectDescription = null;
	get windowRect(): RectDescription {
		return this._windowRect;
	}
	set windowRect(value: RectDescription) {
		this._windowRect = value;
		this.markDirty("WindowRect");
	}
	private _useTiledZooming: boolean = false;
	get useTiledZooming(): boolean {
		return this._useTiledZooming;
	}
	set useTiledZooming(value: boolean) {
		this._useTiledZooming = value;
		this.markDirty("UseTiledZooming");
	}
	private _preferHigherResolutionTiles: boolean = false;
	get preferHigherResolutionTiles(): boolean {
		return this._preferHigherResolutionTiles;
	}
	set preferHigherResolutionTiles(value: boolean) {
		this._preferHigherResolutionTiles = value;
		this.markDirty("PreferHigherResolutionTiles");
	}
	private _zoomTileCacheSize: number = 0;
	get zoomTileCacheSize(): number {
		return this._zoomTileCacheSize;
	}
	set zoomTileCacheSize(value: number) {
		this._zoomTileCacheSize = value;
		this.markDirty("ZoomTileCacheSize");
	}
	private _highlightingTransitionDuration: number = 0;
	get highlightingTransitionDuration(): number {
		return this._highlightingTransitionDuration;
	}
	set highlightingTransitionDuration(value: number) {
		this._highlightingTransitionDuration = value;
		this.markDirty("HighlightingTransitionDuration");
	}
	private _isPagePanningAllowed: boolean = false;
	get isPagePanningAllowed(): boolean {
		return this._isPagePanningAllowed;
	}
	set isPagePanningAllowed(value: boolean) {
		this._isPagePanningAllowed = value;
		this.markDirty("IsPagePanningAllowed");
	}
	private _contentHitTestMode: string = null;
	get contentHitTestMode(): string {
		return this._contentHitTestMode;
	}
	set contentHitTestMode(value: string) {
		this._contentHitTestMode = value;
		this.markDirty("ContentHitTestMode");
	}
	private _actualContentHitTestMode: string = null;
	get actualContentHitTestMode(): string {
		return this._actualContentHitTestMode;
	}
	set actualContentHitTestMode(value: string) {
		this._actualContentHitTestMode = value;
		this.markDirty("ActualContentHitTestMode");
	}
	private _isSurfaceInteractionDisabled: boolean = false;
	get isSurfaceInteractionDisabled(): boolean {
		return this._isSurfaceInteractionDisabled;
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this._isSurfaceInteractionDisabled = value;
		this.markDirty("IsSurfaceInteractionDisabled");
	}
	private _windowResponse: string = null;
	get windowResponse(): string {
		return this._windowResponse;
	}
	set windowResponse(value: string) {
		this._windowResponse = value;
		this.markDirty("WindowResponse");
	}
	private _windowRectMinWidth: number = 0;
	get windowRectMinWidth(): number {
		return this._windowRectMinWidth;
	}
	set windowRectMinWidth(value: number) {
		this._windowRectMinWidth = value;
		this.markDirty("WindowRectMinWidth");
	}
	private _crosshairVisibility: string = null;
	get crosshairVisibility(): string {
		return this._crosshairVisibility;
	}
	set crosshairVisibility(value: string) {
		this._crosshairVisibility = value;
		this.markDirty("CrosshairVisibility");
	}
	private _plotAreaBackground: string = null;
	get plotAreaBackground(): string {
		return this._plotAreaBackground;
	}
	set plotAreaBackground(value: string) {
		this._plotAreaBackground = value;
		this.markDirty("PlotAreaBackground");
	}
	private _defaultInteraction: string = null;
	get defaultInteraction(): string {
		return this._defaultInteraction;
	}
	set defaultInteraction(value: string) {
		this._defaultInteraction = value;
		this.markDirty("DefaultInteraction");
	}
	private _rightButtonDefaultInteraction: string = null;
	get rightButtonDefaultInteraction(): string {
		return this._rightButtonDefaultInteraction;
	}
	set rightButtonDefaultInteraction(value: string) {
		this._rightButtonDefaultInteraction = value;
		this.markDirty("RightButtonDefaultInteraction");
	}
	private _dragModifier: string = null;
	get dragModifier(): string {
		return this._dragModifier;
	}
	set dragModifier(value: string) {
		this._dragModifier = value;
		this.markDirty("DragModifier");
	}
	private _panModifier: string = null;
	get panModifier(): string {
		return this._panModifier;
	}
	set panModifier(value: string) {
		this._panModifier = value;
		this.markDirty("PanModifier");
	}
	private _previewRect: RectDescription = null;
	get previewRect(): RectDescription {
		return this._previewRect;
	}
	set previewRect(value: RectDescription) {
		this._previewRect = value;
		this.markDirty("PreviewRect");
	}
	private _windowPositionHorizontal: number = 0;
	get windowPositionHorizontal(): number {
		return this._windowPositionHorizontal;
	}
	set windowPositionHorizontal(value: number) {
		this._windowPositionHorizontal = value;
		this.markDirty("WindowPositionHorizontal");
	}
	private _windowPositionVertical: number = 0;
	get windowPositionVertical(): number {
		return this._windowPositionVertical;
	}
	set windowPositionVertical(value: number) {
		this._windowPositionVertical = value;
		this.markDirty("WindowPositionVertical");
	}
	private _chartTitle: string = null;
	get chartTitle(): string {
		return this._chartTitle;
	}
	set chartTitle(value: string) {
		this._chartTitle = value;
		this.markDirty("ChartTitle");
	}
	private _titleHorizontalAlignment: string = null;
	get titleHorizontalAlignment(): string {
		return this._titleHorizontalAlignment;
	}
	set titleHorizontalAlignment(value: string) {
		this._titleHorizontalAlignment = value;
		this.markDirty("TitleHorizontalAlignment");
	}
	private _subtitleHorizontalAlignment: string = null;
	get subtitleHorizontalAlignment(): string {
		return this._subtitleHorizontalAlignment;
	}
	set subtitleHorizontalAlignment(value: string) {
		this._subtitleHorizontalAlignment = value;
		this.markDirty("SubtitleHorizontalAlignment");
	}
	private _titleTextStyle: string = null;
	get titleTextStyle(): string {
		return this._titleTextStyle;
	}
	set titleTextStyle(value: string) {
		this._titleTextStyle = value;
		this.markDirty("TitleTextStyle");
	}
	private _subtitleTextStyle: string = null;
	get subtitleTextStyle(): string {
		return this._subtitleTextStyle;
	}
	set subtitleTextStyle(value: string) {
		this._subtitleTextStyle = value;
		this.markDirty("SubtitleTextStyle");
	}
	private _titleTextColor: string = null;
	get titleTextColor(): string {
		return this._titleTextColor;
	}
	set titleTextColor(value: string) {
		this._titleTextColor = value;
		this.markDirty("TitleTextColor");
	}
	private _subtitleTextColor: string = null;
	get subtitleTextColor(): string {
		return this._subtitleTextColor;
	}
	set subtitleTextColor(value: string) {
		this._subtitleTextColor = value;
		this.markDirty("SubtitleTextColor");
	}
	private _titleTopMargin: number = 0;
	get titleTopMargin(): number {
		return this._titleTopMargin;
	}
	set titleTopMargin(value: number) {
		this._titleTopMargin = value;
		this.markDirty("TitleTopMargin");
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
	private _titleBottomMargin: number = 0;
	get titleBottomMargin(): number {
		return this._titleBottomMargin;
	}
	set titleBottomMargin(value: number) {
		this._titleBottomMargin = value;
		this.markDirty("TitleBottomMargin");
	}
	private _subtitleTopMargin: number = 0;
	get subtitleTopMargin(): number {
		return this._subtitleTopMargin;
	}
	set subtitleTopMargin(value: number) {
		this._subtitleTopMargin = value;
		this.markDirty("SubtitleTopMargin");
	}
	private _subtitleLeftMargin: number = 0;
	get subtitleLeftMargin(): number {
		return this._subtitleLeftMargin;
	}
	set subtitleLeftMargin(value: number) {
		this._subtitleLeftMargin = value;
		this.markDirty("SubtitleLeftMargin");
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
	private _subtitle: string = null;
	get subtitle(): string {
		return this._subtitle;
	}
	set subtitle(value: string) {
		this._subtitle = value;
		this.markDirty("Subtitle");
	}
	private _topMargin: number = 0;
	get topMargin(): number {
		return this._topMargin;
	}
	set topMargin(value: number) {
		this._topMargin = value;
		this.markDirty("TopMargin");
	}
	private _leftMargin: number = 0;
	get leftMargin(): number {
		return this._leftMargin;
	}
	set leftMargin(value: number) {
		this._leftMargin = value;
		this.markDirty("LeftMargin");
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
	private _autoMarginWidth: number = 0;
	get autoMarginWidth(): number {
		return this._autoMarginWidth;
	}
	set autoMarginWidth(value: number) {
		this._autoMarginWidth = value;
		this.markDirty("AutoMarginWidth");
	}
	private _autoMarginHeight: number = 0;
	get autoMarginHeight(): number {
		return this._autoMarginHeight;
	}
	set autoMarginHeight(value: number) {
		this._autoMarginHeight = value;
		this.markDirty("AutoMarginHeight");
	}
	private _isAntiAliasingEnabledDuringInteraction: boolean = false;
	get isAntiAliasingEnabledDuringInteraction(): boolean {
		return this._isAntiAliasingEnabledDuringInteraction;
	}
	set isAntiAliasingEnabledDuringInteraction(value: boolean) {
		this._isAntiAliasingEnabledDuringInteraction = value;
		this.markDirty("IsAntiAliasingEnabledDuringInteraction");
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
		this.markDirty("PixelScalingRatio");
	}
	private _interactionPixelScalingRatio: number = 0;
	get interactionPixelScalingRatio(): number {
		return this._interactionPixelScalingRatio;
	}
	set interactionPixelScalingRatio(value: number) {
		this._interactionPixelScalingRatio = value;
		this.markDirty("InteractionPixelScalingRatio");
	}
	private _actualPixelScalingRatio: number = 0;
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		this._actualPixelScalingRatio = value;
		this.markDirty("ActualPixelScalingRatio");
	}
	private _actualInteractionPixelScalingRatio: number = 0;
	get actualInteractionPixelScalingRatio(): number {
		return this._actualInteractionPixelScalingRatio;
	}
	set actualInteractionPixelScalingRatio(value: number) {
		this._actualInteractionPixelScalingRatio = value;
		this.markDirty("ActualInteractionPixelScalingRatio");
	}
	private _actualWindowRect: RectDescription = null;
	get actualWindowRect(): RectDescription {
		return this._actualWindowRect;
	}
	set actualWindowRect(value: RectDescription) {
		this._actualWindowRect = value;
		this.markDirty("ActualWindowRect");
	}
	private _actualWindowPositionHorizontal: number = 0;
	get actualWindowPositionHorizontal(): number {
		return this._actualWindowPositionHorizontal;
	}
	set actualWindowPositionHorizontal(value: number) {
		this._actualWindowPositionHorizontal = value;
		this.markDirty("ActualWindowPositionHorizontal");
	}
	private _actualWindowPositionVertical: number = 0;
	get actualWindowPositionVertical(): number {
		return this._actualWindowPositionVertical;
	}
	set actualWindowPositionVertical(value: number) {
		this._actualWindowPositionVertical = value;
		this.markDirty("ActualWindowPositionVertical");
	}
	private _seriesCursorMouseMove: string = null;
	get seriesCursorMouseMoveRef(): string {
		return this._seriesCursorMouseMove;
	}
	set seriesCursorMouseMoveRef(value: string) {
		this._seriesCursorMouseMove = value;
		this.markDirty("SeriesCursorMouseMoveRef");
	}
	private _seriesMouseLeftButtonDown: string = null;
	get seriesMouseLeftButtonDownRef(): string {
		return this._seriesMouseLeftButtonDown;
	}
	set seriesMouseLeftButtonDownRef(value: string) {
		this._seriesMouseLeftButtonDown = value;
		this.markDirty("SeriesMouseLeftButtonDownRef");
	}
	private _seriesMouseLeftButtonUp: string = null;
	get seriesMouseLeftButtonUpRef(): string {
		return this._seriesMouseLeftButtonUp;
	}
	set seriesMouseLeftButtonUpRef(value: string) {
		this._seriesMouseLeftButtonUp = value;
		this.markDirty("SeriesMouseLeftButtonUpRef");
	}
	private _seriesMouseMove: string = null;
	get seriesMouseMoveRef(): string {
		return this._seriesMouseMove;
	}
	set seriesMouseMoveRef(value: string) {
		this._seriesMouseMove = value;
		this.markDirty("SeriesMouseMoveRef");
	}
	private _seriesMouseEnter: string = null;
	get seriesMouseEnterRef(): string {
		return this._seriesMouseEnter;
	}
	set seriesMouseEnterRef(value: string) {
		this._seriesMouseEnter = value;
		this.markDirty("SeriesMouseEnterRef");
	}
	private _seriesMouseLeave: string = null;
	get seriesMouseLeaveRef(): string {
		return this._seriesMouseLeave;
	}
	set seriesMouseLeaveRef(value: string) {
		this._seriesMouseLeave = value;
		this.markDirty("SeriesMouseLeaveRef");
	}
	private _windowRectChanged: string = null;
	get windowRectChangedRef(): string {
		return this._windowRectChanged;
	}
	set windowRectChangedRef(value: string) {
		this._windowRectChanged = value;
		this.markDirty("WindowRectChangedRef");
	}
	private _sizeChanged: string = null;
	get sizeChangedRef(): string {
		return this._sizeChanged;
	}
	set sizeChangedRef(value: string) {
		this._sizeChanged = value;
		this.markDirty("SizeChangedRef");
	}
	private _actualWindowRectChanged: string = null;
	get actualWindowRectChangedRef(): string {
		return this._actualWindowRectChanged;
	}
	set actualWindowRectChangedRef(value: string) {
		this._actualWindowRectChanged = value;
		this.markDirty("ActualWindowRectChangedRef");
	}
	private _gridAreaRectChanged: string = null;
	get gridAreaRectChangedRef(): string {
		return this._gridAreaRectChanged;
	}
	set gridAreaRectChangedRef(value: string) {
		this._gridAreaRectChanged = value;
		this.markDirty("GridAreaRectChangedRef");
	}
	private _series: SeriesDescription[] = null;
	get series(): SeriesDescription[] {
		return this._series;
	}
	set series(value: SeriesDescription[]) {
		this._series = value;
		this.markDirty("Series");
	}
	private _legendRef: string = null;
	get legendRef(): string {
		return this._legendRef;
	}
	set legendRef(value: string) {
		this._legendRef = value;
		this.markDirty("LegendRef");
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
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
	private _subtitleFontFamily: string = null;
	get subtitleFontFamily(): string {
		return this._subtitleFontFamily;
	}
	set subtitleFontFamily(value: string) {
		this._subtitleFontFamily = value;
		this.markDirty("SubtitleFontFamily");
	}
	private _subtitleFontSize: number = 0;
	get subtitleFontSize(): number {
		return this._subtitleFontSize;
	}
	set subtitleFontSize(value: number) {
		this._subtitleFontSize = value;
		this.markDirty("SubtitleFontSize");
	}
	private _subtitleFontWeight: string = null;
	get subtitleFontWeight(): string {
		return this._subtitleFontWeight;
	}
	set subtitleFontWeight(value: string) {
		this._subtitleFontWeight = value;
		this.markDirty("SubtitleFontWeight");
	}
	private _subtitleFontStyle: string = null;
	get subtitleFontStyle(): string {
		return this._subtitleFontStyle;
	}
	set subtitleFontStyle(value: string) {
		this._subtitleFontStyle = value;
		this.markDirty("SubtitleFontStyle");
	}
}


