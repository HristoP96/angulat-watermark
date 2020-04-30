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
export class TreemapDescription extends Description {
	static $t: Type = markType(TreemapDescription, 'TreemapDescription', (<any>Description).$type);
	protected get_type(): string {
		return "Treemap";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		this._valueMemberPath = value;
		this.markDirty("ValueMemberPath");
	}
	private _rootTitle: string = null;
	get rootTitle(): string {
		return this._rootTitle;
	}
	set rootTitle(value: string) {
		this._rootTitle = value;
		this.markDirty("RootTitle");
	}
	private _breadcrumbSequence: string = null;
	get breadcrumbSequence(): string {
		return this._breadcrumbSequence;
	}
	set breadcrumbSequence(value: string) {
		this._breadcrumbSequence = value;
		this.markDirty("BreadcrumbSequence");
	}
	private _parentIdMemberPath: string = null;
	get parentIdMemberPath(): string {
		return this._parentIdMemberPath;
	}
	set parentIdMemberPath(value: string) {
		this._parentIdMemberPath = value;
		this.markDirty("ParentIdMemberPath");
	}
	private _labelMemberPath: string = null;
	get labelMemberPath(): string {
		return this._labelMemberPath;
	}
	set labelMemberPath(value: string) {
		this._labelMemberPath = value;
		this.markDirty("LabelMemberPath");
	}
	private _customValueMemberPath: string = null;
	get customValueMemberPath(): string {
		return this._customValueMemberPath;
	}
	set customValueMemberPath(value: string) {
		this._customValueMemberPath = value;
		this.markDirty("CustomValueMemberPath");
	}
	private _idMemberPath: string = null;
	get idMemberPath(): string {
		return this._idMemberPath;
	}
	set idMemberPath(value: string) {
		this._idMemberPath = value;
		this.markDirty("IdMemberPath");
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
	private _fillBrushes: string[] = null;
	get fillBrushes(): string[] {
		return this._fillBrushes;
	}
	set fillBrushes(value: string[]) {
		this._fillBrushes = value;
		this.markDirty("FillBrushes");
	}
	private _fillScaleMode: string = null;
	get fillScaleMode(): string {
		return this._fillScaleMode;
	}
	set fillScaleMode(value: string) {
		this._fillScaleMode = value;
		this.markDirty("FillScaleMode");
	}
	private _isFillScaleLogarithmic: boolean = false;
	get isFillScaleLogarithmic(): boolean {
		return this._isFillScaleLogarithmic;
	}
	set isFillScaleLogarithmic(value: boolean) {
		this._isFillScaleLogarithmic = value;
		this.markDirty("IsFillScaleLogarithmic");
	}
	private _fillScaleLogarithmBase: number = 0;
	get fillScaleLogarithmBase(): number {
		return this._fillScaleLogarithmBase;
	}
	set fillScaleLogarithmBase(value: number) {
		this._fillScaleLogarithmBase = value;
		this.markDirty("FillScaleLogarithmBase");
	}
	private _fillScaleMinimumValue: number = 0;
	get fillScaleMinimumValue(): number {
		return this._fillScaleMinimumValue;
	}
	set fillScaleMinimumValue(value: number) {
		this._fillScaleMinimumValue = value;
		this.markDirty("FillScaleMinimumValue");
	}
	private _fillScaleMaximumValue: number = 0;
	get fillScaleMaximumValue(): number {
		return this._fillScaleMaximumValue;
	}
	set fillScaleMaximumValue(value: number) {
		this._fillScaleMaximumValue = value;
		this.markDirty("FillScaleMaximumValue");
	}
	private _labelVerticalFitMode: string = null;
	get labelVerticalFitMode(): string {
		return this._labelVerticalFitMode;
	}
	set labelVerticalFitMode(value: string) {
		this._labelVerticalFitMode = value;
		this.markDirty("LabelVerticalFitMode");
	}
	private _labelHorizontalFitMode: string = null;
	get labelHorizontalFitMode(): string {
		return this._labelHorizontalFitMode;
	}
	set labelHorizontalFitMode(value: string) {
		this._labelHorizontalFitMode = value;
		this.markDirty("LabelHorizontalFitMode");
	}
	private _overlayHeaderHoverBackground: string = null;
	get overlayHeaderHoverBackground(): string {
		return this._overlayHeaderHoverBackground;
	}
	set overlayHeaderHoverBackground(value: string) {
		this._overlayHeaderHoverBackground = value;
		this.markDirty("OverlayHeaderHoverBackground");
	}
	private _headerHoverBackground: string = null;
	get headerHoverBackground(): string {
		return this._headerHoverBackground;
	}
	set headerHoverBackground(value: string) {
		this._headerHoverBackground = value;
		this.markDirty("HeaderHoverBackground");
	}
	private _headerBackground: string = null;
	get headerBackground(): string {
		return this._headerBackground;
	}
	set headerBackground(value: string) {
		this._headerBackground = value;
		this.markDirty("HeaderBackground");
	}
	private _overlayHeaderBackground: string = null;
	get overlayHeaderBackground(): string {
		return this._overlayHeaderBackground;
	}
	set overlayHeaderBackground(value: string) {
		this._overlayHeaderBackground = value;
		this.markDirty("OverlayHeaderBackground");
	}
	private _headerTextColor: string = null;
	get headerTextColor(): string {
		return this._headerTextColor;
	}
	set headerTextColor(value: string) {
		this._headerTextColor = value;
		this.markDirty("HeaderTextColor");
	}
	private _headerDarkTextColor: string = null;
	get headerDarkTextColor(): string {
		return this._headerDarkTextColor;
	}
	set headerDarkTextColor(value: string) {
		this._headerDarkTextColor = value;
		this.markDirty("HeaderDarkTextColor");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
	}
	private _darkTextColor: string = null;
	get darkTextColor(): string {
		return this._darkTextColor;
	}
	set darkTextColor(value: string) {
		this._darkTextColor = value;
		this.markDirty("DarkTextColor");
	}
	private _headerHoverTextColor: string = null;
	get headerHoverTextColor(): string {
		return this._headerHoverTextColor;
	}
	set headerHoverTextColor(value: string) {
		this._headerHoverTextColor = value;
		this.markDirty("HeaderHoverTextColor");
	}
	private _headerHoverDarkTextColor: string = null;
	get headerHoverDarkTextColor(): string {
		return this._headerHoverDarkTextColor;
	}
	set headerHoverDarkTextColor(value: string) {
		this._headerHoverDarkTextColor = value;
		this.markDirty("HeaderHoverDarkTextColor");
	}
	private _fontFamily: string = null;
	get fontFamily(): string {
		return this._fontFamily;
	}
	set fontFamily(value: string) {
		this._fontFamily = value;
	}
	private _fontSize: number = 0;
	get fontSize(): number {
		return this._fontSize;
	}
	set fontSize(value: number) {
		this._fontSize = value;
	}
	private _fontStyle: string = null;
	get fontStyle(): string {
		return this._fontStyle;
	}
	set fontStyle(value: string) {
		this._fontStyle = value;
	}
	private _fontWeight: string = null;
	get fontWeight(): string {
		return this._fontWeight;
	}
	set fontWeight(value: string) {
		this._fontWeight = value;
	}
	private _headerFontFamily: string = null;
	get headerFontFamily(): string {
		return this._headerFontFamily;
	}
	set headerFontFamily(value: string) {
		this._headerFontFamily = value;
	}
	private _headerFontSize: number = 0;
	get headerFontSize(): number {
		return this._headerFontSize;
	}
	set headerFontSize(value: number) {
		this._headerFontSize = value;
	}
	private _headerFontStyle: string = null;
	get headerFontStyle(): string {
		return this._headerFontStyle;
	}
	set headerFontStyle(value: string) {
		this._headerFontStyle = value;
	}
	private _headerFontWeight: string = null;
	get headerFontWeight(): string {
		return this._headerFontWeight;
	}
	set headerFontWeight(value: string) {
		this._headerFontWeight = value;
	}
	private _headerDisplayMode: string = null;
	get headerDisplayMode(): string {
		return this._headerDisplayMode;
	}
	set headerDisplayMode(value: string) {
		this._headerDisplayMode = value;
		this.markDirty("HeaderDisplayMode");
	}
	private _headerLabelLeftMargin: number = 0;
	get headerLabelLeftMargin(): number {
		return this._headerLabelLeftMargin;
	}
	set headerLabelLeftMargin(value: number) {
		this._headerLabelLeftMargin = value;
		this.markDirty("HeaderLabelLeftMargin");
	}
	private _headerLabelTopMargin: number = 0;
	get headerLabelTopMargin(): number {
		return this._headerLabelTopMargin;
	}
	set headerLabelTopMargin(value: number) {
		this._headerLabelTopMargin = value;
		this.markDirty("HeaderLabelTopMargin");
	}
	private _headerLabelRightMargin: number = 0;
	get headerLabelRightMargin(): number {
		return this._headerLabelRightMargin;
	}
	set headerLabelRightMargin(value: number) {
		this._headerLabelRightMargin = value;
		this.markDirty("HeaderLabelRightMargin");
	}
	private _headerLabelBottomMargin: number = 0;
	get headerLabelBottomMargin(): number {
		return this._headerLabelBottomMargin;
	}
	set headerLabelBottomMargin(value: number) {
		this._headerLabelBottomMargin = value;
		this.markDirty("HeaderLabelBottomMargin");
	}
	private _overlayHeaderLabelLeftMargin: number = 0;
	get overlayHeaderLabelLeftMargin(): number {
		return this._overlayHeaderLabelLeftMargin;
	}
	set overlayHeaderLabelLeftMargin(value: number) {
		this._overlayHeaderLabelLeftMargin = value;
		this.markDirty("OverlayHeaderLabelLeftMargin");
	}
	private _overlayHeaderLabelTopMargin: number = 0;
	get overlayHeaderLabelTopMargin(): number {
		return this._overlayHeaderLabelTopMargin;
	}
	set overlayHeaderLabelTopMargin(value: number) {
		this._overlayHeaderLabelTopMargin = value;
		this.markDirty("OverlayHeaderLabelTopMargin");
	}
	private _overlayHeaderLabelRightMargin: number = 0;
	get overlayHeaderLabelRightMargin(): number {
		return this._overlayHeaderLabelRightMargin;
	}
	set overlayHeaderLabelRightMargin(value: number) {
		this._overlayHeaderLabelRightMargin = value;
		this.markDirty("OverlayHeaderLabelRightMargin");
	}
	private _overlayHeaderLabelBottomMargin: number = 0;
	get overlayHeaderLabelBottomMargin(): number {
		return this._overlayHeaderLabelBottomMargin;
	}
	set overlayHeaderLabelBottomMargin(value: number) {
		this._overlayHeaderLabelBottomMargin = value;
		this.markDirty("OverlayHeaderLabelBottomMargin");
	}
	private _labelLeftMargin: number = 0;
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		this._labelLeftMargin = value;
		this.markDirty("LabelLeftMargin");
	}
	private _labelTopMargin: number = 0;
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		this._labelTopMargin = value;
		this.markDirty("LabelTopMargin");
	}
	private _labelRightMargin: number = 0;
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		this._labelRightMargin = value;
		this.markDirty("LabelRightMargin");
	}
	private _labelBottomMargin: number = 0;
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		this._labelBottomMargin = value;
		this.markDirty("LabelBottomMargin");
	}
	private _parentNodeLeftMargin: number = 0;
	get parentNodeLeftMargin(): number {
		return this._parentNodeLeftMargin;
	}
	set parentNodeLeftMargin(value: number) {
		this._parentNodeLeftMargin = value;
		this.markDirty("ParentNodeLeftMargin");
	}
	private _parentNodeTopMargin: number = 0;
	get parentNodeTopMargin(): number {
		return this._parentNodeTopMargin;
	}
	set parentNodeTopMargin(value: number) {
		this._parentNodeTopMargin = value;
		this.markDirty("ParentNodeTopMargin");
	}
	private _parentNodeRightMargin: number = 0;
	get parentNodeRightMargin(): number {
		return this._parentNodeRightMargin;
	}
	set parentNodeRightMargin(value: number) {
		this._parentNodeRightMargin = value;
		this.markDirty("ParentNodeRightMargin");
	}
	private _parentNodeBottomMargin: number = 0;
	get parentNodeBottomMargin(): number {
		return this._parentNodeBottomMargin;
	}
	set parentNodeBottomMargin(value: number) {
		this._parentNodeBottomMargin = value;
		this.markDirty("ParentNodeBottomMargin");
	}
	private _parentNodeLeftPadding: number = 0;
	get parentNodeLeftPadding(): number {
		return this._parentNodeLeftPadding;
	}
	set parentNodeLeftPadding(value: number) {
		this._parentNodeLeftPadding = value;
		this.markDirty("ParentNodeLeftPadding");
	}
	private _parentNodeTopPadding: number = 0;
	get parentNodeTopPadding(): number {
		return this._parentNodeTopPadding;
	}
	set parentNodeTopPadding(value: number) {
		this._parentNodeTopPadding = value;
		this.markDirty("ParentNodeTopPadding");
	}
	private _parentNodeRightPadding: number = 0;
	get parentNodeRightPadding(): number {
		return this._parentNodeRightPadding;
	}
	set parentNodeRightPadding(value: number) {
		this._parentNodeRightPadding = value;
		this.markDirty("ParentNodeRightPadding");
	}
	private _parentNodeBottomPadding: number = 0;
	get parentNodeBottomPadding(): number {
		return this._parentNodeBottomPadding;
	}
	set parentNodeBottomPadding(value: number) {
		this._parentNodeBottomPadding = value;
		this.markDirty("ParentNodeBottomPadding");
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
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
		this.markDirty("HeaderHeight");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
		this.markDirty("StrokeThickness");
	}
	private _layoutOrientation: string = null;
	get layoutOrientation(): string {
		return this._layoutOrientation;
	}
	set layoutOrientation(value: string) {
		this._layoutOrientation = value;
		this.markDirty("LayoutOrientation");
	}
	private _layoutType: string = null;
	get layoutType(): string {
		return this._layoutType;
	}
	set layoutType(value: string) {
		this._layoutType = value;
		this.markDirty("LayoutType");
	}
	private _minimumDisplaySize: number = 0;
	get minimumDisplaySize(): number {
		return this._minimumDisplaySize;
	}
	set minimumDisplaySize(value: number) {
		this._minimumDisplaySize = value;
		this.markDirty("MinimumDisplaySize");
	}
	private _transitionDuration: number = 0;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		this._transitionDuration = value;
		this.markDirty("TransitionDuration");
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
	private _interactionPixelScalingRatio: number = 0;
	get interactionPixelScalingRatio(): number {
		return this._interactionPixelScalingRatio;
	}
	set interactionPixelScalingRatio(value: number) {
		this._interactionPixelScalingRatio = value;
		this.markDirty("InteractionPixelScalingRatio");
	}
	private _actualInteractionPixelScalingRatio: number = 0;
	get actualInteractionPixelScalingRatio(): number {
		return this._actualInteractionPixelScalingRatio;
	}
	set actualInteractionPixelScalingRatio(value: number) {
		this._actualInteractionPixelScalingRatio = value;
		this.markDirty("ActualInteractionPixelScalingRatio");
	}
	private _focusItemRef: string = null;
	get focusItemRef(): string {
		return this._focusItemRef;
	}
	set focusItemRef(value: string) {
		this._focusItemRef = value;
		this.markDirty("FocusItemRef");
	}
	private _nodeStyling: string = null;
	get nodeStylingRef(): string {
		return this._nodeStyling;
	}
	set nodeStylingRef(value: string) {
		this._nodeStyling = value;
		this.markDirty("NodeStylingRef");
	}
	private _nodePointerOver: string = null;
	get nodePointerOverRef(): string {
		return this._nodePointerOver;
	}
	set nodePointerOverRef(value: string) {
		this._nodePointerOver = value;
		this.markDirty("NodePointerOverRef");
	}
	private _nodePointerEnter: string = null;
	get nodePointerEnterRef(): string {
		return this._nodePointerEnter;
	}
	set nodePointerEnterRef(value: string) {
		this._nodePointerEnter = value;
		this.markDirty("NodePointerEnterRef");
	}
	private _nodePointerLeave: string = null;
	get nodePointerLeaveRef(): string {
		return this._nodePointerLeave;
	}
	set nodePointerLeaveRef(value: string) {
		this._nodePointerLeave = value;
		this.markDirty("NodePointerLeaveRef");
	}
	private _nodePointerPressed: string = null;
	get nodePointerPressedRef(): string {
		return this._nodePointerPressed;
	}
	set nodePointerPressedRef(value: string) {
		this._nodePointerPressed = value;
		this.markDirty("NodePointerPressedRef");
	}
	private _nodePointerReleased: string = null;
	get nodePointerReleasedRef(): string {
		return this._nodePointerReleased;
	}
	set nodePointerReleasedRef(value: string) {
		this._nodePointerReleased = value;
		this.markDirty("NodePointerReleasedRef");
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


