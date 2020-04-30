/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { CellActionManagerDescription } from "./CellActionManagerDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class CellInfoDescription extends Description {
	static $t: Type = markType(CellInfoDescription, 'CellInfoDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CellInfo";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _styleKey: string = null;
	get styleKey(): string {
		return this._styleKey;
	}
	set styleKey(value: string) {
		this._styleKey = value;
		this.markDirty("StyleKey");
	}
	private _dataRow: number = 0;
	get dataRow(): number {
		return this._dataRow;
	}
	set dataRow(value: number) {
		this._dataRow = value;
		this.markDirty("DataRow");
	}
	private _isPositionDirty: boolean = false;
	get isPositionDirty(): boolean {
		return this._isPositionDirty;
	}
	set isPositionDirty(value: boolean) {
		this._isPositionDirty = value;
		this.markDirty("IsPositionDirty");
	}
	private _isSizeDirty: boolean = false;
	get isSizeDirty(): boolean {
		return this._isSizeDirty;
	}
	set isSizeDirty(value: boolean) {
		this._isSizeDirty = value;
		this.markDirty("IsSizeDirty");
	}
	private _isContentDirty: boolean = false;
	get isContentDirty(): boolean {
		return this._isContentDirty;
	}
	set isContentDirty(value: boolean) {
		this._isContentDirty = value;
		this.markDirty("IsContentDirty");
	}
	private _isBorderDirty: boolean = false;
	get isBorderDirty(): boolean {
		return this._isBorderDirty;
	}
	set isBorderDirty(value: boolean) {
		this._isBorderDirty = value;
		this.markDirty("IsBorderDirty");
	}
	private _isLayerDirty: boolean = false;
	get isLayerDirty(): boolean {
		return this._isLayerDirty;
	}
	set isLayerDirty(value: boolean) {
		this._isLayerDirty = value;
		this.markDirty("IsLayerDirty");
	}
	private _isStateDirty: boolean = false;
	get isStateDirty(): boolean {
		return this._isStateDirty;
	}
	set isStateDirty(value: boolean) {
		this._isStateDirty = value;
		this.markDirty("IsStateDirty");
	}
	private _isDataDirty: boolean = false;
	get isDataDirty(): boolean {
		return this._isDataDirty;
	}
	set isDataDirty(value: boolean) {
		this._isDataDirty = value;
		this.markDirty("IsDataDirty");
	}
	private _isPlaceholdContentNeeded: boolean = false;
	get isPlaceholdContentNeeded(): boolean {
		return this._isPlaceholdContentNeeded;
	}
	set isPlaceholdContentNeeded(value: boolean) {
		this._isPlaceholdContentNeeded = value;
		this.markDirty("IsPlaceholdContentNeeded");
	}
	private _actionManager: CellActionManagerDescription = null;
	get actionManager(): CellActionManagerDescription {
		return this._actionManager;
	}
	set actionManager(value: CellActionManagerDescription) {
		this._actionManager = value;
		this.markDirty("ActionManager");
	}
	private _isRowPinned: boolean = false;
	get isRowPinned(): boolean {
		return this._isRowPinned;
	}
	set isRowPinned(value: boolean) {
		this._isRowPinned = value;
		this.markDirty("IsRowPinned");
	}
	private _isRowSticky: boolean = false;
	get isRowSticky(): boolean {
		return this._isRowSticky;
	}
	set isRowSticky(value: boolean) {
		this._isRowSticky = value;
		this.markDirty("IsRowSticky");
	}
	private _isLastStickyRow: boolean = false;
	get isLastStickyRow(): boolean {
		return this._isLastStickyRow;
	}
	set isLastStickyRow(value: boolean) {
		this._isLastStickyRow = value;
		this.markDirty("IsLastStickyRow");
	}
	private _indent: number = 0;
	get indent(): number {
		return this._indent;
	}
	set indent(value: number) {
		this._indent = value;
		this.markDirty("Indent");
	}
	private _rowItemRef: string = null;
	get rowItemRef(): string {
		return this._rowItemRef;
	}
	set rowItemRef(value: string) {
		this._rowItemRef = value;
		this.markDirty("RowItemRef");
	}
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		this._x = value;
		this.markDirty("X");
	}
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		this._y = value;
		this.markDirty("Y");
	}
	private _snappedX: number = 0;
	get snappedX(): number {
		return this._snappedX;
	}
	set snappedX(value: number) {
		this._snappedX = value;
		this.markDirty("SnappedX");
	}
	private _snappedY: number = 0;
	get snappedY(): number {
		return this._snappedY;
	}
	set snappedY(value: number) {
		this._snappedY = value;
		this.markDirty("SnappedY");
	}
	private _contentOpacity: number = 0;
	get contentOpacity(): number {
		return this._contentOpacity;
	}
	set contentOpacity(value: number) {
		this._contentOpacity = value;
		this.markDirty("ContentOpacity");
	}
	private _actualContentOpacity: number = 0;
	get actualContentOpacity(): number {
		return this._actualContentOpacity;
	}
	set actualContentOpacity(value: number) {
		this._actualContentOpacity = value;
		this.markDirty("ActualContentOpacity");
	}
	private _opacity: number = 0;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		this._opacity = value;
		this.markDirty("Opacity");
	}
	private _actualOpacity: number = 0;
	get actualOpacity(): number {
		return this._actualOpacity;
	}
	set actualOpacity(value: number) {
		this._actualOpacity = value;
		this.markDirty("ActualOpacity");
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
		this.markDirty("Height");
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
		this.markDirty("Width");
	}
	private _isSelected: boolean = false;
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		this._isSelected = value;
		this.markDirty("IsSelected");
	}
	private _selectedStatus: number = 0;
	get selectedStatus(): number {
		return this._selectedStatus;
	}
	set selectedStatus(value: number) {
		this._selectedStatus = value;
		this.markDirty("SelectedStatus");
	}
	private _activationStatus: number = 0;
	get activationStatus(): number {
		return this._activationStatus;
	}
	set activationStatus(value: number) {
		this._activationStatus = value;
		this.markDirty("ActivationStatus");
	}
	private _horizontalAlignment: string = null;
	get horizontalAlignment(): string {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: string) {
		this._horizontalAlignment = value;
		this.markDirty("HorizontalAlignment");
	}
	private _verticalAlignment: string = null;
	get verticalAlignment(): string {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: string) {
		this._verticalAlignment = value;
		this.markDirty("VerticalAlignment");
	}
	private _background: string = null;
	get background(): string {
		return this._background;
	}
	set background(value: string) {
		this._background = value;
		this.markDirty("Background");
	}
	private _border: string = null;
	get border(): string {
		return this._border;
	}
	set border(value: string) {
		this._border = value;
		this.markDirty("Border");
	}
	private _actualBackground: string = null;
	get actualBackground(): string {
		return this._actualBackground;
	}
	set actualBackground(value: string) {
		this._actualBackground = value;
		this.markDirty("ActualBackground");
	}
	private _actualBorder: string = null;
	get actualBorder(): string {
		return this._actualBorder;
	}
	set actualBorder(value: string) {
		this._actualBorder = value;
		this.markDirty("ActualBorder");
	}
	private _activationBorder: string = null;
	get activationBorder(): string {
		return this._activationBorder;
	}
	set activationBorder(value: string) {
		this._activationBorder = value;
		this.markDirty("ActivationBorder");
	}
	private _selectedBackground: string = null;
	get selectedBackground(): string {
		return this._selectedBackground;
	}
	set selectedBackground(value: string) {
		this._selectedBackground = value;
		this.markDirty("SelectedBackground");
	}
	private _sortIndicatorColor: string = null;
	get sortIndicatorColor(): string {
		return this._sortIndicatorColor;
	}
	set sortIndicatorColor(value: string) {
		this._sortIndicatorColor = value;
		this.markDirty("SortIndicatorColor");
	}
	private _stickyRowBackground: string = null;
	get stickyRowBackground(): string {
		return this._stickyRowBackground;
	}
	set stickyRowBackground(value: string) {
		this._stickyRowBackground = value;
		this.markDirty("StickyRowBackground");
	}
	private _pinnedRowBackground: string = null;
	get pinnedRowBackground(): string {
		return this._pinnedRowBackground;
	}
	set pinnedRowBackground(value: string) {
		this._pinnedRowBackground = value;
		this.markDirty("PinnedRowBackground");
	}
	private _lastStickyRowBackground: string = null;
	get lastStickyRowBackground(): string {
		return this._lastStickyRowBackground;
	}
	set lastStickyRowBackground(value: string) {
		this._lastStickyRowBackground = value;
		this.markDirty("LastStickyRowBackground");
	}
	private _pinnedRowOpacity: number = 0;
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		this._pinnedRowOpacity = value;
		this.markDirty("PinnedRowOpacity");
	}
	private _originalValueRef: string = null;
	get originalValueRef(): string {
		return this._originalValueRef;
	}
	set originalValueRef(value: string) {
		this._originalValueRef = value;
		this.markDirty("OriginalValueRef");
	}
	private _renderValue: string = null;
	get renderValue(): string {
		return this._renderValue;
	}
	set renderValue(value: string) {
		this._renderValue = value;
		this.markDirty("RenderValue");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
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
	private _lineBreakMode: string = null;
	get lineBreakMode(): string {
		return this._lineBreakMode;
	}
	set lineBreakMode(value: string) {
		this._lineBreakMode = value;
		this.markDirty("LineBreakMode");
	}
	private _virtualizationPercentage: number = 0;
	get virtualizationPercentage(): number {
		return this._virtualizationPercentage;
	}
	set virtualizationPercentage(value: number) {
		this._virtualizationPercentage = value;
		this.markDirty("VirtualizationPercentage");
	}
	private _paddingLeft: number = 0;
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		this._paddingLeft = value;
		this.markDirty("PaddingLeft");
	}
	private _paddingTop: number = 0;
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		this._paddingTop = value;
		this.markDirty("PaddingTop");
	}
	private _paddingRight: number = 0;
	get paddingRight(): number {
		return this._paddingRight;
	}
	set paddingRight(value: number) {
		this._paddingRight = value;
		this.markDirty("PaddingRight");
	}
	private _paddingBottom: number = 0;
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		this._paddingBottom = value;
		this.markDirty("PaddingBottom");
	}
	private _actualPaddingLeft: number = 0;
	get actualPaddingLeft(): number {
		return this._actualPaddingLeft;
	}
	set actualPaddingLeft(value: number) {
		this._actualPaddingLeft = value;
		this.markDirty("ActualPaddingLeft");
	}
	private _actualPaddingTop: number = 0;
	get actualPaddingTop(): number {
		return this._actualPaddingTop;
	}
	set actualPaddingTop(value: number) {
		this._actualPaddingTop = value;
		this.markDirty("ActualPaddingTop");
	}
	private _actualPaddingRight: number = 0;
	get actualPaddingRight(): number {
		return this._actualPaddingRight;
	}
	set actualPaddingRight(value: number) {
		this._actualPaddingRight = value;
		this.markDirty("ActualPaddingRight");
	}
	private _actualPaddingBottom: number = 0;
	get actualPaddingBottom(): number {
		return this._actualPaddingBottom;
	}
	set actualPaddingBottom(value: number) {
		this._actualPaddingBottom = value;
		this.markDirty("ActualPaddingBottom");
	}
	private _borderLeftWidth: number = 0;
	get borderLeftWidth(): number {
		return this._borderLeftWidth;
	}
	set borderLeftWidth(value: number) {
		this._borderLeftWidth = value;
		this.markDirty("BorderLeftWidth");
	}
	private _borderTopWidth: number = 0;
	get borderTopWidth(): number {
		return this._borderTopWidth;
	}
	set borderTopWidth(value: number) {
		this._borderTopWidth = value;
		this.markDirty("BorderTopWidth");
	}
	private _borderRightWidth: number = 0;
	get borderRightWidth(): number {
		return this._borderRightWidth;
	}
	set borderRightWidth(value: number) {
		this._borderRightWidth = value;
		this.markDirty("BorderRightWidth");
	}
	private _borderBottomWidth: number = 0;
	get borderBottomWidth(): number {
		return this._borderBottomWidth;
	}
	set borderBottomWidth(value: number) {
		this._borderBottomWidth = value;
		this.markDirty("BorderBottomWidth");
	}
	private _activationBorderLeftWidth: number = 0;
	get activationBorderLeftWidth(): number {
		return this._activationBorderLeftWidth;
	}
	set activationBorderLeftWidth(value: number) {
		this._activationBorderLeftWidth = value;
		this.markDirty("ActivationBorderLeftWidth");
	}
	private _activationBorderTopWidth: number = 0;
	get activationBorderTopWidth(): number {
		return this._activationBorderTopWidth;
	}
	set activationBorderTopWidth(value: number) {
		this._activationBorderTopWidth = value;
		this.markDirty("ActivationBorderTopWidth");
	}
	private _activationBorderRightWidth: number = 0;
	get activationBorderRightWidth(): number {
		return this._activationBorderRightWidth;
	}
	set activationBorderRightWidth(value: number) {
		this._activationBorderRightWidth = value;
		this.markDirty("ActivationBorderRightWidth");
	}
	private _activationBorderBottomWidth: number = 0;
	get activationBorderBottomWidth(): number {
		return this._activationBorderBottomWidth;
	}
	set activationBorderBottomWidth(value: number) {
		this._activationBorderBottomWidth = value;
		this.markDirty("ActivationBorderBottomWidth");
	}
	private _actualBorderLeftWidth: number = 0;
	get actualBorderLeftWidth(): number {
		return this._actualBorderLeftWidth;
	}
	set actualBorderLeftWidth(value: number) {
		this._actualBorderLeftWidth = value;
		this.markDirty("ActualBorderLeftWidth");
	}
	private _actualBorderTopWidth: number = 0;
	get actualBorderTopWidth(): number {
		return this._actualBorderTopWidth;
	}
	set actualBorderTopWidth(value: number) {
		this._actualBorderTopWidth = value;
		this.markDirty("ActualBorderTopWidth");
	}
	private _actualBorderRightWidth: number = 0;
	get actualBorderRightWidth(): number {
		return this._actualBorderRightWidth;
	}
	set actualBorderRightWidth(value: number) {
		this._actualBorderRightWidth = value;
		this.markDirty("ActualBorderRightWidth");
	}
	private _actualBorderBottomWidth: number = 0;
	get actualBorderBottomWidth(): number {
		return this._actualBorderBottomWidth;
	}
	set actualBorderBottomWidth(value: number) {
		this._actualBorderBottomWidth = value;
		this.markDirty("ActualBorderBottomWidth");
	}
	private _sortDirection: string = null;
	get sortDirection(): string {
		return this._sortDirection;
	}
	set sortDirection(value: string) {
		this._sortDirection = value;
		this.markDirty("SortDirection");
	}
	private _isExpanded: boolean = false;
	get isExpanded(): boolean {
		return this._isExpanded;
	}
	set isExpanded(value: boolean) {
		this._isExpanded = value;
		this.markDirty("IsExpanded");
	}
	private _isCollapsable: boolean = false;
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		this._isCollapsable = value;
		this.markDirty("IsCollapsable");
	}
	private _pinned: string = null;
	get pinned(): string {
		return this._pinned;
	}
	set pinned(value: string) {
		this._pinned = value;
		this.markDirty("Pinned");
	}
}


