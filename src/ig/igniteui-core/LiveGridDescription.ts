/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { ColumnDescription } from "./ColumnDescription";
import { SectionHeaderDescription } from "./SectionHeaderDescription";
import { SummaryRowRootDescription } from "./SummaryRowRootDescription";
import { SummaryRowSectionDescription } from "./SummaryRowSectionDescription";
import { RowSeparatorDescription } from "./RowSeparatorDescription";
import { HeaderSeparatorDescription } from "./HeaderSeparatorDescription";
import { ColumnResizingSeparatorDescription } from "./ColumnResizingSeparatorDescription";
import { ColumnMovingSeparatorDescription } from "./ColumnMovingSeparatorDescription";
import { PinnedAreaSeparatorDescription } from "./PinnedAreaSeparatorDescription";
import { GridAnimationSettingsDescription } from "./GridAnimationSettingsDescription";
import { GridCellPositionDescription } from "./GridCellPositionDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LiveGridDescription extends Description {
	static $t: Type = markType(LiveGridDescription, 'LiveGridDescription', (<any>Description).$type);
	private _columns: ColumnDescription[] = null;
	get columns(): ColumnDescription[] {
		return this._columns;
	}
	set columns(value: ColumnDescription[]) {
		this._columns = value;
		this.markDirty("Columns");
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
		return "LiveGrid";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _columnResizingMode: string = null;
	get columnResizingMode(): string {
		return this._columnResizingMode;
	}
	set columnResizingMode(value: string) {
		this._columnResizingMode = value;
		this.markDirty("ColumnResizingMode");
	}
	private _columnMovingMode: string = null;
	get columnMovingMode(): string {
		return this._columnMovingMode;
	}
	set columnMovingMode(value: string) {
		this._columnMovingMode = value;
		this.markDirty("ColumnMovingMode");
	}
	private _sectionHeader: SectionHeaderDescription = null;
	get sectionHeader(): SectionHeaderDescription {
		return this._sectionHeader;
	}
	set sectionHeader(value: SectionHeaderDescription) {
		this._sectionHeader = value;
		this.markDirty("SectionHeader");
	}
	private _summaryRowRoot: SummaryRowRootDescription = null;
	get summaryRowRoot(): SummaryRowRootDescription {
		return this._summaryRowRoot;
	}
	set summaryRowRoot(value: SummaryRowRootDescription) {
		this._summaryRowRoot = value;
		this.markDirty("SummaryRowRoot");
	}
	private _summaryRowSection: SummaryRowSectionDescription = null;
	get summaryRowSection(): SummaryRowSectionDescription {
		return this._summaryRowSection;
	}
	set summaryRowSection(value: SummaryRowSectionDescription) {
		this._summaryRowSection = value;
		this.markDirty("SummaryRowSection");
	}
	private _rowSeparator: RowSeparatorDescription = null;
	get rowSeparator(): RowSeparatorDescription {
		return this._rowSeparator;
	}
	set rowSeparator(value: RowSeparatorDescription) {
		this._rowSeparator = value;
		this.markDirty("RowSeparator");
	}
	private _headerSeparator: HeaderSeparatorDescription = null;
	get headerSeparator(): HeaderSeparatorDescription {
		return this._headerSeparator;
	}
	set headerSeparator(value: HeaderSeparatorDescription) {
		this._headerSeparator = value;
		this.markDirty("HeaderSeparator");
	}
	private _columnResizingSeparator: ColumnResizingSeparatorDescription = null;
	get columnResizingSeparator(): ColumnResizingSeparatorDescription {
		return this._columnResizingSeparator;
	}
	set columnResizingSeparator(value: ColumnResizingSeparatorDescription) {
		this._columnResizingSeparator = value;
		this.markDirty("ColumnResizingSeparator");
	}
	private _columnMovingSeparator: ColumnMovingSeparatorDescription = null;
	get columnMovingSeparator(): ColumnMovingSeparatorDescription {
		return this._columnMovingSeparator;
	}
	set columnMovingSeparator(value: ColumnMovingSeparatorDescription) {
		this._columnMovingSeparator = value;
		this.markDirty("ColumnMovingSeparator");
	}
	private _pinnedAreaSeparator: PinnedAreaSeparatorDescription = null;
	get pinnedAreaSeparator(): PinnedAreaSeparatorDescription {
		return this._pinnedAreaSeparator;
	}
	set pinnedAreaSeparator(value: PinnedAreaSeparatorDescription) {
		this._pinnedAreaSeparator = value;
		this.markDirty("PinnedAreaSeparator");
	}
	private _dataSourceDesiredProperties: string[] = null;
	get dataSourceDesiredProperties(): string[] {
		return this._dataSourceDesiredProperties;
	}
	set dataSourceDesiredProperties(value: string[]) {
		this._dataSourceDesiredProperties = value;
		this.markDirty("DataSourceDesiredProperties");
	}
	private _rowHeight: number = 0;
	get rowHeight(): number {
		return this._rowHeight;
	}
	set rowHeight(value: number) {
		this._rowHeight = value;
		this.markDirty("RowHeight");
	}
	private _defaultColumnMinWidth: number = 0;
	get defaultColumnMinWidth(): number {
		return this._defaultColumnMinWidth;
	}
	set defaultColumnMinWidth(value: number) {
		this._defaultColumnMinWidth = value;
		this.markDirty("DefaultColumnMinWidth");
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
		this.markDirty("HeaderHeight");
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
	private _headerClickAction: string = null;
	get headerClickAction(): string {
		return this._headerClickAction;
	}
	set headerClickAction(value: string) {
		this._headerClickAction = value;
		this.markDirty("HeaderClickAction");
	}
	private _autoGenerateColumns: boolean = false;
	get autoGenerateColumns(): boolean {
		return this._autoGenerateColumns;
	}
	set autoGenerateColumns(value: boolean) {
		this._autoGenerateColumns = value;
		this.markDirty("AutoGenerateColumns");
	}
	private _rowSeparatorHeight: number = 0;
	get rowSeparatorHeight(): number {
		return this._rowSeparatorHeight;
	}
	set rowSeparatorHeight(value: number) {
		this._rowSeparatorHeight = value;
		this.markDirty("RowSeparatorHeight");
	}
	private _isPlaceholderRenderingEnabled: boolean = false;
	get isPlaceholderRenderingEnabled(): boolean {
		return this._isPlaceholderRenderingEnabled;
	}
	set isPlaceholderRenderingEnabled(value: boolean) {
		this._isPlaceholderRenderingEnabled = value;
		this.markDirty("IsPlaceholderRenderingEnabled");
	}
	private _columnAddingAnimationMode: string = null;
	get columnAddingAnimationMode(): string {
		return this._columnAddingAnimationMode;
	}
	set columnAddingAnimationMode(value: string) {
		this._columnAddingAnimationMode = value;
		this.markDirty("ColumnAddingAnimationMode");
	}
	private _columnPropertyUpdatingAnimationMode: string = null;
	get columnPropertyUpdatingAnimationMode(): string {
		return this._columnPropertyUpdatingAnimationMode;
	}
	set columnPropertyUpdatingAnimationMode(value: string) {
		this._columnPropertyUpdatingAnimationMode = value;
		this.markDirty("ColumnPropertyUpdatingAnimationMode");
	}
	private _cellDataLoadedAnimationMode: string = null;
	get cellDataLoadedAnimationMode(): string {
		return this._cellDataLoadedAnimationMode;
	}
	set cellDataLoadedAnimationMode(value: string) {
		this._cellDataLoadedAnimationMode = value;
		this.markDirty("CellDataLoadedAnimationMode");
	}
	private _rowSelectionAnimationMode: string = null;
	get rowSelectionAnimationMode(): string {
		return this._rowSelectionAnimationMode;
	}
	set rowSelectionAnimationMode(value: string) {
		this._rowSelectionAnimationMode = value;
		this.markDirty("RowSelectionAnimationMode");
	}
	private _cellSelectionAnimationMode: string = null;
	get cellSelectionAnimationMode(): string {
		return this._cellSelectionAnimationMode;
	}
	set cellSelectionAnimationMode(value: string) {
		this._cellSelectionAnimationMode = value;
		this.markDirty("CellSelectionAnimationMode");
	}
	private _animationSettings: GridAnimationSettingsDescription = null;
	get animationSettings(): GridAnimationSettingsDescription {
		return this._animationSettings;
	}
	set animationSettings(value: GridAnimationSettingsDescription) {
		this._animationSettings = value;
		this.markDirty("AnimationSettings");
	}
	private _columnResizingAnimationMode: string = null;
	get columnResizingAnimationMode(): string {
		return this._columnResizingAnimationMode;
	}
	set columnResizingAnimationMode(value: string) {
		this._columnResizingAnimationMode = value;
		this.markDirty("ColumnResizingAnimationMode");
	}
	private _columnShowingAnimationMode: string = null;
	get columnShowingAnimationMode(): string {
		return this._columnShowingAnimationMode;
	}
	set columnShowingAnimationMode(value: string) {
		this._columnShowingAnimationMode = value;
		this.markDirty("ColumnShowingAnimationMode");
	}
	private _columnMovingAnimationMode: string = null;
	get columnMovingAnimationMode(): string {
		return this._columnMovingAnimationMode;
	}
	set columnMovingAnimationMode(value: string) {
		this._columnMovingAnimationMode = value;
		this.markDirty("ColumnMovingAnimationMode");
	}
	private _columnHidingAnimationMode: string = null;
	get columnHidingAnimationMode(): string {
		return this._columnHidingAnimationMode;
	}
	set columnHidingAnimationMode(value: string) {
		this._columnHidingAnimationMode = value;
		this.markDirty("ColumnHidingAnimationMode");
	}
	private _columnExchangingAnimationMode: string = null;
	get columnExchangingAnimationMode(): string {
		return this._columnExchangingAnimationMode;
	}
	set columnExchangingAnimationMode(value: string) {
		this._columnExchangingAnimationMode = value;
		this.markDirty("ColumnExchangingAnimationMode");
	}
	private _selectionMode: string = null;
	get selectionMode(): string {
		return this._selectionMode;
	}
	set selectionMode(value: string) {
		this._selectionMode = value;
		this.markDirty("SelectionMode");
	}
	private _activationMode: string = null;
	get activationMode(): string {
		return this._activationMode;
	}
	set activationMode(value: string) {
		this._activationMode = value;
		this.markDirty("ActivationMode");
	}
	private _selectionBehavior: string = null;
	get selectionBehavior(): string {
		return this._selectionBehavior;
	}
	set selectionBehavior(value: string) {
		this._selectionBehavior = value;
		this.markDirty("SelectionBehavior");
	}
	private _isFilterUIEnabled: boolean = false;
	get isFilterUIEnabled(): boolean {
		return this._isFilterUIEnabled;
	}
	set isFilterUIEnabled(value: boolean) {
		this._isFilterUIEnabled = value;
		this.markDirty("IsFilterUIEnabled");
	}
	private _isGroupRowSticky: boolean = false;
	get isGroupRowSticky(): boolean {
		return this._isGroupRowSticky;
	}
	set isGroupRowSticky(value: boolean) {
		this._isGroupRowSticky = value;
		this.markDirty("IsGroupRowSticky");
	}
	private _isHeaderSeparatorVisible: boolean = false;
	get isHeaderSeparatorVisible(): boolean {
		return this._isHeaderSeparatorVisible;
	}
	set isHeaderSeparatorVisible(value: boolean) {
		this._isHeaderSeparatorVisible = value;
		this.markDirty("IsHeaderSeparatorVisible");
	}
	private _cellSelectedBackground: string = null;
	get cellSelectedBackground(): string {
		return this._cellSelectedBackground;
	}
	set cellSelectedBackground(value: string) {
		this._cellSelectedBackground = value;
		this.markDirty("CellSelectedBackground");
	}
	private _sectionHeaderSelectedBackground: string = null;
	get sectionHeaderSelectedBackground(): string {
		return this._sectionHeaderSelectedBackground;
	}
	set sectionHeaderSelectedBackground(value: string) {
		this._sectionHeaderSelectedBackground = value;
		this.markDirty("SectionHeaderSelectedBackground");
	}
	private _summaryRootBackground: string = null;
	get summaryRootBackground(): string {
		return this._summaryRootBackground;
	}
	set summaryRootBackground(value: string) {
		this._summaryRootBackground = value;
		this.markDirty("SummaryRootBackground");
	}
	private _summarySectionBackground: string = null;
	get summarySectionBackground(): string {
		return this._summarySectionBackground;
	}
	set summarySectionBackground(value: string) {
		this._summarySectionBackground = value;
		this.markDirty("SummarySectionBackground");
	}
	private _pinnedRowOpacity: number = 0;
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		this._pinnedRowOpacity = value;
		this.markDirty("PinnedRowOpacity");
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
	private _activeCell: GridCellPositionDescription = null;
	get activeCell(): GridCellPositionDescription {
		return this._activeCell;
	}
	set activeCell(value: GridCellPositionDescription) {
		this._activeCell = value;
		this.markDirty("ActiveCell");
	}
	private _cellBackground: string = null;
	get cellBackground(): string {
		return this._cellBackground;
	}
	set cellBackground(value: string) {
		this._cellBackground = value;
		this.markDirty("CellBackground");
	}
	private _cellTextColor: string = null;
	get cellTextColor(): string {
		return this._cellTextColor;
	}
	set cellTextColor(value: string) {
		this._cellTextColor = value;
		this.markDirty("CellTextColor");
	}
	private _headerSortIndicatorColor: string = null;
	get headerSortIndicatorColor(): string {
		return this._headerSortIndicatorColor;
	}
	set headerSortIndicatorColor(value: string) {
		this._headerSortIndicatorColor = value;
		this.markDirty("HeaderSortIndicatorColor");
	}
	private _headerSortIndicatorStyle: string = null;
	get headerSortIndicatorStyle(): string {
		return this._headerSortIndicatorStyle;
	}
	set headerSortIndicatorStyle(value: string) {
		this._headerSortIndicatorStyle = value;
		this.markDirty("HeaderSortIndicatorStyle");
	}
	private _cellFontFamily: string = null;
	get cellFontFamily(): string {
		return this._cellFontFamily;
	}
	set cellFontFamily(value: string) {
		this._cellFontFamily = value;
	}
	private _cellFontSize: number = 0;
	get cellFontSize(): number {
		return this._cellFontSize;
	}
	set cellFontSize(value: number) {
		this._cellFontSize = value;
	}
	private _cellFontStyle: string = null;
	get cellFontStyle(): string {
		return this._cellFontStyle;
	}
	set cellFontStyle(value: string) {
		this._cellFontStyle = value;
	}
	private _cellFontWeight: string = null;
	get cellFontWeight(): string {
		return this._cellFontWeight;
	}
	set cellFontWeight(value: string) {
		this._cellFontWeight = value;
	}
	private _sectionHeaderBackground: string = null;
	get sectionHeaderBackground(): string {
		return this._sectionHeaderBackground;
	}
	set sectionHeaderBackground(value: string) {
		this._sectionHeaderBackground = value;
		this.markDirty("SectionHeaderBackground");
	}
	private _sectionHeaderTextColor: string = null;
	get sectionHeaderTextColor(): string {
		return this._sectionHeaderTextColor;
	}
	set sectionHeaderTextColor(value: string) {
		this._sectionHeaderTextColor = value;
		this.markDirty("SectionHeaderTextColor");
	}
	private _sectionHeaderFontFamily: string = null;
	get sectionHeaderFontFamily(): string {
		return this._sectionHeaderFontFamily;
	}
	set sectionHeaderFontFamily(value: string) {
		this._sectionHeaderFontFamily = value;
	}
	private _sectionHeaderFontSize: number = 0;
	get sectionHeaderFontSize(): number {
		return this._sectionHeaderFontSize;
	}
	set sectionHeaderFontSize(value: number) {
		this._sectionHeaderFontSize = value;
	}
	private _sectionHeaderFontStyle: string = null;
	get sectionHeaderFontStyle(): string {
		return this._sectionHeaderFontStyle;
	}
	set sectionHeaderFontStyle(value: string) {
		this._sectionHeaderFontStyle = value;
	}
	private _sectionHeaderFontWeight: string = null;
	get sectionHeaderFontWeight(): string {
		return this._sectionHeaderFontWeight;
	}
	set sectionHeaderFontWeight(value: string) {
		this._sectionHeaderFontWeight = value;
	}
	private _summaryRootTextColor: string = null;
	get summaryRootTextColor(): string {
		return this._summaryRootTextColor;
	}
	set summaryRootTextColor(value: string) {
		this._summaryRootTextColor = value;
		this.markDirty("SummaryRootTextColor");
	}
	private _summarySectionTextColor: string = null;
	get summarySectionTextColor(): string {
		return this._summarySectionTextColor;
	}
	set summarySectionTextColor(value: string) {
		this._summarySectionTextColor = value;
		this.markDirty("SummarySectionTextColor");
	}
	private _summaryRootNameTextColor: string = null;
	get summaryRootNameTextColor(): string {
		return this._summaryRootNameTextColor;
	}
	set summaryRootNameTextColor(value: string) {
		this._summaryRootNameTextColor = value;
		this.markDirty("SummaryRootNameTextColor");
	}
	private _summarySectionNameTextColor: string = null;
	get summarySectionNameTextColor(): string {
		return this._summarySectionNameTextColor;
	}
	set summarySectionNameTextColor(value: string) {
		this._summarySectionNameTextColor = value;
		this.markDirty("SummarySectionNameTextColor");
	}
	private _summaryRootSelectedBackground: string = null;
	get summaryRootSelectedBackground(): string {
		return this._summaryRootSelectedBackground;
	}
	set summaryRootSelectedBackground(value: string) {
		this._summaryRootSelectedBackground = value;
		this.markDirty("SummaryRootSelectedBackground");
	}
	private _summarySectionSelectedBackground: string = null;
	get summarySectionSelectedBackground(): string {
		return this._summarySectionSelectedBackground;
	}
	set summarySectionSelectedBackground(value: string) {
		this._summarySectionSelectedBackground = value;
		this.markDirty("SummarySectionSelectedBackground");
	}
	private _summaryFontFamily: string = null;
	get summaryFontFamily(): string {
		return this._summaryFontFamily;
	}
	set summaryFontFamily(value: string) {
		this._summaryFontFamily = value;
	}
	private _summaryFontSize: number = 0;
	get summaryFontSize(): number {
		return this._summaryFontSize;
	}
	set summaryFontSize(value: number) {
		this._summaryFontSize = value;
	}
	private _summaryFontStyle: string = null;
	get summaryFontStyle(): string {
		return this._summaryFontStyle;
	}
	set summaryFontStyle(value: string) {
		this._summaryFontStyle = value;
	}
	private _summaryFontWeight: string = null;
	get summaryFontWeight(): string {
		return this._summaryFontWeight;
	}
	set summaryFontWeight(value: string) {
		this._summaryFontWeight = value;
	}
	private _summarySectionFontFamily: string = null;
	get summarySectionFontFamily(): string {
		return this._summarySectionFontFamily;
	}
	set summarySectionFontFamily(value: string) {
		this._summarySectionFontFamily = value;
	}
	private _summarySectionFontSize: number = 0;
	get summarySectionFontSize(): number {
		return this._summarySectionFontSize;
	}
	set summarySectionFontSize(value: number) {
		this._summarySectionFontSize = value;
	}
	private _summarySectionFontStyle: string = null;
	get summarySectionFontStyle(): string {
		return this._summarySectionFontStyle;
	}
	set summarySectionFontStyle(value: string) {
		this._summarySectionFontStyle = value;
	}
	private _summarySectionFontWeight: string = null;
	get summarySectionFontWeight(): string {
		return this._summarySectionFontWeight;
	}
	set summarySectionFontWeight(value: string) {
		this._summarySectionFontWeight = value;
	}
	private _pinnedAreaSeparatorWidth: number = 0;
	get pinnedAreaSeparatorWidth(): number {
		return this._pinnedAreaSeparatorWidth;
	}
	set pinnedAreaSeparatorWidth(value: number) {
		this._pinnedAreaSeparatorWidth = value;
		this.markDirty("PinnedAreaSeparatorWidth");
	}
	private _headerSeparatorWidth: number = 0;
	get headerSeparatorWidth(): number {
		return this._headerSeparatorWidth;
	}
	set headerSeparatorWidth(value: number) {
		this._headerSeparatorWidth = value;
		this.markDirty("HeaderSeparatorWidth");
	}
	private _headerSeparatorBackground: string = null;
	get headerSeparatorBackground(): string {
		return this._headerSeparatorBackground;
	}
	set headerSeparatorBackground(value: string) {
		this._headerSeparatorBackground = value;
		this.markDirty("HeaderSeparatorBackground");
	}
	private _headerBackground: string = null;
	get headerBackground(): string {
		return this._headerBackground;
	}
	set headerBackground(value: string) {
		this._headerBackground = value;
		this.markDirty("HeaderBackground");
	}
	private _headerTextColor: string = null;
	get headerTextColor(): string {
		return this._headerTextColor;
	}
	set headerTextColor(value: string) {
		this._headerTextColor = value;
		this.markDirty("HeaderTextColor");
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
	private _rowSeparatorBackground: string = null;
	get rowSeparatorBackground(): string {
		return this._rowSeparatorBackground;
	}
	set rowSeparatorBackground(value: string) {
		this._rowSeparatorBackground = value;
		this.markDirty("RowSeparatorBackground");
	}
	private _rowSeparatorStickyRowBackground: string = null;
	get rowSeparatorStickyRowBackground(): string {
		return this._rowSeparatorStickyRowBackground;
	}
	set rowSeparatorStickyRowBackground(value: string) {
		this._rowSeparatorStickyRowBackground = value;
		this.markDirty("RowSeparatorStickyRowBackground");
	}
	private _rowSeparatorLastStickyRowBackground: string = null;
	get rowSeparatorLastStickyRowBackground(): string {
		return this._rowSeparatorLastStickyRowBackground;
	}
	set rowSeparatorLastStickyRowBackground(value: string) {
		this._rowSeparatorLastStickyRowBackground = value;
		this.markDirty("RowSeparatorLastStickyRowBackground");
	}
	private _rowSeparatorPinnedRowBackground: string = null;
	get rowSeparatorPinnedRowBackground(): string {
		return this._rowSeparatorPinnedRowBackground;
	}
	set rowSeparatorPinnedRowBackground(value: string) {
		this._rowSeparatorPinnedRowBackground = value;
		this.markDirty("RowSeparatorPinnedRowBackground");
	}
	private _columnResizingSeparatorWidth: number = 0;
	get columnResizingSeparatorWidth(): number {
		return this._columnResizingSeparatorWidth;
	}
	set columnResizingSeparatorWidth(value: number) {
		this._columnResizingSeparatorWidth = value;
		this.markDirty("ColumnResizingSeparatorWidth");
	}
	private _columnMovingSeparatorWidth: number = 0;
	get columnMovingSeparatorWidth(): number {
		return this._columnMovingSeparatorWidth;
	}
	set columnMovingSeparatorWidth(value: number) {
		this._columnMovingSeparatorWidth = value;
		this.markDirty("ColumnMovingSeparatorWidth");
	}
	private _columnResizingSeparatorBackground: string = null;
	get columnResizingSeparatorBackground(): string {
		return this._columnResizingSeparatorBackground;
	}
	set columnResizingSeparatorBackground(value: string) {
		this._columnResizingSeparatorBackground = value;
		this.markDirty("ColumnResizingSeparatorBackground");
	}
	private _columnMovingSeparatorBackground: string = null;
	get columnMovingSeparatorBackground(): string {
		return this._columnMovingSeparatorBackground;
	}
	set columnMovingSeparatorBackground(value: string) {
		this._columnMovingSeparatorBackground = value;
		this.markDirty("ColumnMovingSeparatorBackground");
	}
	private _shiftSectionContent: boolean = false;
	get shiftSectionContent(): boolean {
		return this._shiftSectionContent;
	}
	set shiftSectionContent(value: boolean) {
		this._shiftSectionContent = value;
		this.markDirty("ShiftSectionContent");
	}
	private _summaryScope: string = null;
	get summaryScope(): string {
		return this._summaryScope;
	}
	set summaryScope(value: string) {
		this._summaryScope = value;
		this.markDirty("SummaryScope");
	}
	private _isGroupCollapsable: boolean = false;
	get isGroupCollapsable(): boolean {
		return this._isGroupCollapsable;
	}
	set isGroupCollapsable(value: boolean) {
		this._isGroupCollapsable = value;
		this.markDirty("IsGroupCollapsable");
	}
	private _groupHeaderDisplayMode: string = null;
	get groupHeaderDisplayMode(): string {
		return this._groupHeaderDisplayMode;
	}
	set groupHeaderDisplayMode(value: string) {
		this._groupHeaderDisplayMode = value;
		this.markDirty("GroupHeaderDisplayMode");
	}
	private _isGroupExpandedDefault: boolean = false;
	get isGroupExpandedDefault(): boolean {
		return this._isGroupExpandedDefault;
	}
	set isGroupExpandedDefault(value: boolean) {
		this._isGroupExpandedDefault = value;
		this.markDirty("IsGroupExpandedDefault");
	}
	private _groupSummaryDisplayMode: string = null;
	get groupSummaryDisplayMode(): string {
		return this._groupSummaryDisplayMode;
	}
	set groupSummaryDisplayMode(value: string) {
		this._groupSummaryDisplayMode = value;
		this.markDirty("GroupSummaryDisplayMode");
	}
	private _primaryKey: string[] = null;
	get primaryKey(): string[] {
		return this._primaryKey;
	}
	set primaryKey(value: string[]) {
		this._primaryKey = value;
		this.markDirty("PrimaryKey");
	}
	private _actualPrimaryKey: string[] = null;
	get actualPrimaryKey(): string[] {
		return this._actualPrimaryKey;
	}
	set actualPrimaryKey(value: string[]) {
		this._actualPrimaryKey = value;
		this.markDirty("ActualPrimaryKey");
	}
	private _reactsToSortChanges: boolean = false;
	get reactsToSortChanges(): boolean {
		return this._reactsToSortChanges;
	}
	set reactsToSortChanges(value: boolean) {
		this._reactsToSortChanges = value;
		this.markDirty("ReactsToSortChanges");
	}
	private _reactsToGroupChanges: boolean = false;
	get reactsToGroupChanges(): boolean {
		return this._reactsToGroupChanges;
	}
	set reactsToGroupChanges(value: boolean) {
		this._reactsToGroupChanges = value;
		this.markDirty("ReactsToGroupChanges");
	}
	private _reactsToFilterChanges: boolean = false;
	get reactsToFilterChanges(): boolean {
		return this._reactsToFilterChanges;
	}
	set reactsToFilterChanges(value: boolean) {
		this._reactsToFilterChanges = value;
		this.markDirty("ReactsToFilterChanges");
	}
	private _filterExpressionsChanging: string = null;
	get filterExpressionsChangingRef(): string {
		return this._filterExpressionsChanging;
	}
	set filterExpressionsChangingRef(value: string) {
		this._filterExpressionsChanging = value;
		this.markDirty("FilterExpressionsChangingRef");
	}
	private _filterExpressionsChanged: string = null;
	get filterExpressionsChangedRef(): string {
		return this._filterExpressionsChanged;
	}
	set filterExpressionsChangedRef(value: string) {
		this._filterExpressionsChanged = value;
		this.markDirty("FilterExpressionsChangedRef");
	}
	private _cellPreviewPointerDown: string = null;
	get cellPreviewPointerDownRef(): string {
		return this._cellPreviewPointerDown;
	}
	set cellPreviewPointerDownRef(value: string) {
		this._cellPreviewPointerDown = value;
		this.markDirty("CellPreviewPointerDownRef");
	}
	private _cellPreviewPointerUp: string = null;
	get cellPreviewPointerUpRef(): string {
		return this._cellPreviewPointerUp;
	}
	set cellPreviewPointerUpRef(value: string) {
		this._cellPreviewPointerUp = value;
		this.markDirty("CellPreviewPointerUpRef");
	}
	private _cellPointerDown: string = null;
	get cellPointerDownRef(): string {
		return this._cellPointerDown;
	}
	set cellPointerDownRef(value: string) {
		this._cellPointerDown = value;
		this.markDirty("CellPointerDownRef");
	}
	private _cellPointerUp: string = null;
	get cellPointerUpRef(): string {
		return this._cellPointerUp;
	}
	set cellPointerUpRef(value: string) {
		this._cellPointerUp = value;
		this.markDirty("CellPointerUpRef");
	}
	private _cellClicked: string = null;
	get cellClickedRef(): string {
		return this._cellClicked;
	}
	set cellClickedRef(value: string) {
		this._cellClicked = value;
		this.markDirty("CellClickedRef");
	}
	private _sortDescriptionsChanged: string = null;
	get sortDescriptionsChangedRef(): string {
		return this._sortDescriptionsChanged;
	}
	set sortDescriptionsChangedRef(value: string) {
		this._sortDescriptionsChanged = value;
		this.markDirty("SortDescriptionsChangedRef");
	}
	private _groupDescriptionsChanged: string = null;
	get groupDescriptionsChangedRef(): string {
		return this._groupDescriptionsChanged;
	}
	set groupDescriptionsChangedRef(value: string) {
		this._groupDescriptionsChanged = value;
		this.markDirty("GroupDescriptionsChangedRef");
	}
	private _columnHiddenChanged: string = null;
	get columnHiddenChangedRef(): string {
		return this._columnHiddenChanged;
	}
	set columnHiddenChangedRef(value: string) {
		this._columnHiddenChanged = value;
		this.markDirty("ColumnHiddenChangedRef");
	}
	private _columnsAutoGenerated: string = null;
	get columnsAutoGeneratedRef(): string {
		return this._columnsAutoGenerated;
	}
	set columnsAutoGeneratedRef(value: string) {
		this._columnsAutoGenerated = value;
		this.markDirty("ColumnsAutoGeneratedRef");
	}
	private _selectedItemsChanged: string = null;
	get selectedItemsChangedRef(): string {
		return this._selectedItemsChanged;
	}
	set selectedItemsChangedRef(value: string) {
		this._selectedItemsChanged = value;
		this.markDirty("SelectedItemsChangedRef");
	}
	private _selectedKeysChanged: string = null;
	get selectedKeysChangedRef(): string {
		return this._selectedKeysChanged;
	}
	set selectedKeysChangedRef(value: string) {
		this._selectedKeysChanged = value;
		this.markDirty("SelectedKeysChangedRef");
	}
	private _selectedCellsChanged: string = null;
	get selectedCellsChangedRef(): string {
		return this._selectedCellsChanged;
	}
	set selectedCellsChangedRef(value: string) {
		this._selectedCellsChanged = value;
		this.markDirty("SelectedCellsChangedRef");
	}
	private _activeCellChanged: string = null;
	get activeCellChangedRef(): string {
		return this._activeCellChanged;
	}
	set activeCellChangedRef(value: string) {
		this._activeCellChanged = value;
		this.markDirty("ActiveCellChangedRef");
	}
	private _selectedCellRangesChanged: string = null;
	get selectedCellRangesChangedRef(): string {
		return this._selectedCellRangesChanged;
	}
	set selectedCellRangesChangedRef(value: string) {
		this._selectedCellRangesChanged = value;
		this.markDirty("SelectedCellRangesChangedRef");
	}
}


