/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { Base, Type, Point, markType, PropertyChangedEventArgs, String_$type, Number_$type, enumGetBox, Boolean_$type, EnumUtil, Delegate_$type, typeGetValue, INotifyPropertyChanged, INotifyPropertyChanged_$type, EventArgs, IList, IList_$type, ICollection, ICollection_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, NotSupportedException, runOn, delegateRemove, delegateCombine, Point_$type, fromEnum, typeCast, PointUtil, getInstanceType, Date_$type, IEnumerable$1, IEnumerable$1_$type } from "igniteui-core/type";
import { IDataSource, IDataSource_$type } from "igniteui-core/IDataSource";
import { ICellActionManager, ICellActionManager_$type } from "./ICellActionManager";
import { IDragger } from "./IDragger";
import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { DataSourceSchemaPropertyType } from "igniteui-core/DataSourceSchemaPropertyType";
import { DateTimeFormats, DateTimeFormats_$type } from "./DateTimeFormats";
import { dateMinValue, dateNow } from "igniteui-core/date";
import { ModelStates, ModelStates_$type } from "./ModelStates";
import { CellPath } from "./CellPath";
import { ModelTypes, ModelTypes_$type } from "./ModelTypes";
import { CellContentHorizontalAlignment, CellContentHorizontalAlignment_$type } from "./CellContentHorizontalAlignment";
import { CellContentVerticalAlignment, CellContentVerticalAlignment_$type } from "./CellContentVerticalAlignment";
import { Brush } from "igniteui-core/Brush";
import { FontInfo } from "igniteui-core/FontInfo";
import { TextCellLineBreakMode, TextCellLineBreakMode_$type } from "./TextCellLineBreakMode";
import { ColumnSortDirection, ColumnSortDirection_$type } from "./ColumnSortDirection";
import { PinnedPositions, PinnedPositions_$type } from "./PinnedPositions";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { GridStyleRepository } from "./GridStyleRepository";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { CellModelExport } from "./CellModelExport";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { FontUtil } from "igniteui-core/FontUtil";
import { DataSourceRowType, DataSourceRowType_$type } from "igniteui-core/DataSourceRowType";
import { truncate, isNaN_, intDivide, tryParseNumber } from "igniteui-core/number";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { GroupSummaryDisplayMode, GroupSummaryDisplayMode_$type } from "./GroupSummaryDisplayMode";
import { DateTimeCellModelExport } from "./DateTimeCellModelExport";
import { SummaryCellModelExport } from "./SummaryCellModelExport";
import { ImageStretchOptions, ImageStretchOptions_$type } from "./ImageStretchOptions";
import { ImageResourceType, ImageResourceType_$type } from "./ImageResourceType";
import { ImageCellModelExport } from "./ImageCellModelExport";
import { NumericCellModelExport } from "./NumericCellModelExport";
import { RowSeparatorModelExport } from "./RowSeparatorModelExport";
import { GroupData } from "./GroupData";
import { SummaryData } from "./SummaryData";
import { SectionHeaderCellModelExport } from "./SectionHeaderCellModelExport";
import { SummaryOperand } from "igniteui-core/SummaryOperand";
import { TemplateCellModelExport } from "./TemplateCellModelExport";
import { TextCellModelExport } from "./TextCellModelExport";
import { SortIndicatorStyle, SortIndicatorStyle_$type } from "./SortIndicatorStyle";
import { TextHeaderCellModelExport } from "./TextHeaderCellModelExport";
import { INativeCell } from "./INativeCell";
import { IDataSourceUpdateNotifier, IDataSourceUpdateNotifier_$type } from "igniteui-core/IDataSourceUpdateNotifier";
import { IDataSourceSchema } from "igniteui-core/IDataSourceSchema";
import { List$1 } from "igniteui-core/List$1";
import { IPropertySetter } from "./IPropertySetter";
import { DragSelectEventArgs } from "./DragSelectEventArgs";
import { ColumnResizingMode, ColumnResizingMode_$type } from "./ColumnResizingMode";
import { ColumnMovingMode, ColumnMovingMode_$type } from "./ColumnMovingMode";
import { IDelayedExecutionManager } from "./IDelayedExecutionManager";
import { ITickProvider } from "igniteui-core/ITickProvider";
import { IViewportManager } from "./IViewportManager";
import { ColumnWidth } from "./ColumnWidth";
import { HeaderClickAction, HeaderClickAction_$type } from "./HeaderClickAction";
import { ColumnShowingAnimationMode, ColumnShowingAnimationMode_$type } from "./ColumnShowingAnimationMode";
import { ColumnPropertyUpdatingAnimationMode, ColumnPropertyUpdatingAnimationMode_$type } from "./ColumnPropertyUpdatingAnimationMode";
import { CellDataLoadedAnimationMode, CellDataLoadedAnimationMode_$type } from "./CellDataLoadedAnimationMode";
import { RowSelectionAnimationMode, RowSelectionAnimationMode_$type } from "./RowSelectionAnimationMode";
import { CellSelectionAnimationMode, CellSelectionAnimationMode_$type } from "./CellSelectionAnimationMode";
import { GridColumnAnimationSettings } from "./GridColumnAnimationSettings";
import { GridAnimationSettings } from "./GridAnimationSettings";
import { ColumnResizingAnimationMode, ColumnResizingAnimationMode_$type } from "./ColumnResizingAnimationMode";
import { ColumnMovingAnimationMode, ColumnMovingAnimationMode_$type } from "./ColumnMovingAnimationMode";
import { ColumnHidingAnimationMode, ColumnHidingAnimationMode_$type } from "./ColumnHidingAnimationMode";
import { ColumnExchangingAnimationMode, ColumnExchangingAnimationMode_$type } from "./ColumnExchangingAnimationMode";
import { Thickness } from "igniteui-core/Thickness";
import { GridSelectionMode, GridSelectionMode_$type } from "./GridSelectionMode";
import { GridActivationMode, GridActivationMode_$type } from "./GridActivationMode";
import { GridSelectionBehavior, GridSelectionBehavior_$type } from "./GridSelectionBehavior";
import { GridSelectedItemsCollection } from "./GridSelectedItemsCollection";
import { GridSelectedKeysCollection } from "./GridSelectedKeysCollection";
import { GridSelectedCellRangesCollection } from "./GridSelectedCellRangesCollection";
import { GridCellPosition } from "./GridCellPosition";
import { IPlatformPixelConverter } from "./IPlatformPixelConverter";
import { Rect } from "igniteui-core/Rect";
import { ColumnSortDescriptionCollection } from "./ColumnSortDescriptionCollection";
import { ColumnGroupDescriptionCollection } from "./ColumnGroupDescriptionCollection";
import { FilterExpressionCollection } from "igniteui-core/FilterExpressionCollection";
import { ColumnSummaryDescriptionCollection } from "./ColumnSummaryDescriptionCollection";
import { DataSourceSummaryScope, DataSourceSummaryScope_$type } from "igniteui-core/DataSourceSummaryScope";
import { DataSourceSectionHeaderDisplayMode, DataSourceSectionHeaderDisplayMode_$type } from "igniteui-core/DataSourceSectionHeaderDisplayMode";
import { GridFilterExpressionsEventArgs } from "./GridFilterExpressionsEventArgs";
import { RowPath } from "./RowPath";
import { CellRange } from "./CellRange";
import { IDraggerView } from "./IDraggerView";
import { DragType } from "./DragType";
import { FastIterationDictionary$2 } from "igniteui-core/FastIterationDictionary$2";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { DefaultPlatformPixelConverter } from "./DefaultPlatformPixelConverter";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { ColumnGroupDescription } from "./ColumnGroupDescription";
import { ColumnSortDescription } from "./ColumnSortDescription";
import { ColumnSummaryDescription } from "./ColumnSummaryDescription";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { GridGroupDescriptionsChangedEventArgs } from "./GridGroupDescriptionsChangedEventArgs";
import { GridSortDescriptionsChangedEventArgs } from "./GridSortDescriptionsChangedEventArgs";
import { ListSortDirection } from "igniteui-core/ListSortDirection";
import { PrimaryKeyValue } from "./PrimaryKeyValue";
import { DataSourceSchemaChangedEventArgs } from "igniteui-core/DataSourceSchemaChangedEventArgs";
import { DefinitionPropertyUpdatedEventArgs } from "./DefinitionPropertyUpdatedEventArgs";
import { CellPropertyAnimationType, CellPropertyAnimationType_$type } from "./CellPropertyAnimationType";
import { GridColumnsAutoGeneratedEventArgs } from "./GridColumnsAutoGeneratedEventArgs";
import { ColumnStates, ColumnStates_$type } from "./ColumnStates";
import { InvalidOperationException } from "igniteui-core/InvalidOperationException";
import { IFilterExpression } from "igniteui-core/IFilterExpression";
import { VisualModelExport } from "./VisualModelExport";
import { GridActiveCellChangedEventArgs } from "./GridActiveCellChangedEventArgs";
import { GridSelectedItemsChangedEventArgs } from "./GridSelectedItemsChangedEventArgs";
import { GridSelectedKeysChangedEventArgs } from "./GridSelectedKeysChangedEventArgs";
import { GridSelectedCellRangesChangedEventArgs } from "./GridSelectedCellRangesChangedEventArgs";
import { ISupportsDataChangeNotifications } from "igniteui-core/ISupportsDataChangeNotifications";
import { IDataSourceSupportsIndexedAccess } from "igniteui-core/IDataSourceSupportsIndexedAccess";
import { ISummaryResult } from "igniteui-core/ISummaryResult";
import { FilterFactory } from "igniteui-core/FilterFactory";
import { timeSpanTotalSeconds, timeSpanFromMilliseconds, timeSpanTotalMilliseconds } from "igniteui-core/timespan";
import { stringStartsWith, stringEmpty, stringIsNullOrWhiteSpace } from "igniteui-core/string";
import { GridAnimationPhaseSettings } from "./GridAnimationPhaseSettings";
import { GridAnimationManagerAnimationCreatedEventArgs } from "./GridAnimationManagerAnimationCreatedEventArgs";
import { GridAnimationManagerAnimationCompletedEventArgs } from "./GridAnimationManagerAnimationCompletedEventArgs";
import { GridAnimationManagerAnimationCanceledEventArgs } from "./GridAnimationManagerAnimationCanceledEventArgs";
import { GridColumnSpacer } from "./GridColumnSpacer";
import { GridColumnSpacerCollection } from "./GridColumnSpacerCollection";
import { Debug } from "igniteui-core/Debug";
import { GridEffectMainIntent } from "./GridEffectMainIntent";
import { FixedCellPositions } from "./FixedCellPositions";
import { GridEffectSubIntent } from "./GridEffectSubIntent";
import { HashSet$1 } from "igniteui-core/HashSet$1";
import { CellStyleRequestedEventArgs } from "./CellStyleRequestedEventArgs";
import { FormatSummaryTextEventArgs } from "./FormatSummaryTextEventArgs";
import { SummaryCalculator } from "igniteui-core/SummaryCalculator";
import { Stack$1 } from "igniteui-core/Stack$1";
import { DataSourceSpecialRow } from "igniteui-core/DataSourceSpecialRow";
import { IDataSourceSupportsCount } from "igniteui-core/IDataSourceSupportsCount";
import { ISectionInformation } from "igniteui-core/ISectionInformation";
import { DefaultSectionInformation } from "igniteui-core/DefaultSectionInformation";
import { Color } from "igniteui-core/Color";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { GridEasingFunctionType } from "./GridEasingFunctionType";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { CalculationParameters } from "./CalculationParameters";
import { ColumnPropertySettersCollection } from "./ColumnPropertySettersCollection";
import { ColumnPropertySetter } from "./ColumnPropertySetter";
import { ResponsiveStateEnteringEventArgs } from "./ResponsiveStateEnteringEventArgs";
import { ResponsiveStateEnteredEventArgs } from "./ResponsiveStateEnteredEventArgs";
import { ResponsiveStateExitedEventArgs } from "./ResponsiveStateExitedEventArgs";
import { RectData } from "igniteui-core/RectData";
import { GridLayerExport } from "./GridLayerExport";

/**
 * @hidden 
 */
export interface IExternalGrid { 
	readonly renderer: DomRenderer;
insertExternalColumnAtIndex(index: number, column: any): void;
removeExternalColumn(column: any): void;
ensureColumnsAreManual(): void;
onContentSizeChanged(): void;
createLocalDataSource(itemsSource: any): IDataSource;
createTextColumn(key: string): TextColumn;
createNumericColumn(key: string): NumericColumn;
createDateTimeColumn(key: string): DateTimeColumn;
createImageColumn(key: string): ImageColumn;
createTemplateColumn(key: string): TemplateColumn;
focusScroller(): void;
setHandCursor(): void;
setResizeCursor(): void;
setDefaultCursor(): void;
}

/**
 * @hidden 
 */
export let IExternalGrid_$type = new Type(null, 'IExternalGrid');

/**
 * @hidden 
 */
export class DefaultCellActionManager extends Base implements ICellActionManager {
	static $t: Type = markType(DefaultCellActionManager, 'DefaultCellActionManager', (<any>Base).$type, [ICellActionManager_$type]);
	private _grid: Grid = null;
	private _model: CellModel = null;
	private _isControlPressed: boolean = false;
	private _isShiftPressed: boolean = false;
	constructor(grid: Grid, model: CellModel) {
		super();
		this._grid = grid;
		this._model = model;
	}
	clickExpansionIndicator(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onExpansionClicked(this._model);
		}
	}
	clickCell(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellClicked(this._model, this._isControlPressed, this._isShiftPressed);
		}
	}
	dragStarted(): void {
		if (this._grid != null && this._grid.downedCell != null) {
			this._grid.onDragStarted(this._grid.downedCell, this.mousePosition.x, this.mousePosition.y, this._isControlPressed);
			this.mouseUpCell(this.mousePosition.x, this.mousePosition.y);
		}
	}
	previewPointerDownCell(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellPreviewPointerDown(this._model);
		}
	}
	previewPointerUpCell(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellPreviewPointerUp(this._model);
		}
	}
	pointerDownCell(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellPointerDown(this._model);
		}
	}
	pointerUpCell(): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellPointerUp(this._model);
		}
	}
	mouseDownCell(x: number, y: number): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellMouseDown(this._model, x, y);
		}
	}
	mouseUpCell(x: number, y: number): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellMouseUp(this._model, x, y);
		}
	}
	mouseLeaveCell(x: number, y: number): void {
		if (this._grid != null && this._model != null) {
			this._grid.onCellLeave(this._model, x, y);
		}
	}
	mouseIsOver(x: number, y: number): void {
		if (this._grid != null && this._model != null) {
			this._grid.onMouseIsOver(this._model, x, y);
		}
	}
	getColumnFilterCondition(): ColumnFilterCondition {
		if (this._grid == null) {
			return null;
		}
		return this._grid.getColumnFilterCondition(this._model);
	}
	getColumnPropertyType(): DataSourceSchemaPropertyType {
		if (this._grid == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		return this._grid.getColumnPropertyType(this._model);
	}
	columnFilterChanging(filter: ColumnFilterCondition): void {
		if (this._grid == null) {
			return;
		}
		this._grid.columnFilterChanging(this._model, filter);
	}
	columnFilterChanged(filter: ColumnFilterCondition): void {
		if (this._grid == null) {
			return;
		}
		this._grid.columnFilterChanged(this._model, filter);
	}
	isCellDown(): boolean {
		if (this._grid != null && this._grid.downedCell != null && this._model != null) {
			return this._grid.downedCell.equals(this._model.path);
		}
		return false;
	}
	private _isLeaveActionDesired: boolean = false;
	get isLeaveActionDesired(): boolean {
		return this._isLeaveActionDesired;
	}
	set isLeaveActionDesired(value: boolean) {
		this._isLeaveActionDesired = value;
	}
	get isClickActionDesired(): boolean {
		return this._grid.isClickActionDesired;
	}
	get isHoverActionDesired(): boolean {
		return this._grid.isHoverActionDesired;
	}
	get isPreviewPointerDownActionDesired(): boolean {
		return this._grid.isPreviewPointerDownDesired;
	}
	get isPreviewPointerUpActionDesired(): boolean {
		return this._grid.isPreviewPointerUpDesired;
	}
	get isPointerDownActionDesired(): boolean {
		return this._grid.isPointerDownDesired;
	}
	get isPointerUpActionDesired(): boolean {
		return this._grid.isPointerUpDesired;
	}
	get isControlPressed(): boolean {
		return this._isControlPressed;
	}
	set isControlPressed(value: boolean) {
		this._isControlPressed = value;
	}
	get isShiftPressed(): boolean {
		return this._isShiftPressed;
	}
	set isShiftPressed(value: boolean) {
		this._isShiftPressed = value;
	}
	get isDrag(): boolean {
		return this._grid.dragger.isDragActive;
	}
	get isMouseDown(): boolean {
		return this._grid.downedCell != null;
	}
	get mousePosition(): Point {
		return this._grid.mousePosition;
	}
}

/**
 * @hidden 
 */
export class DateTimeColumnValueFormatter extends Base {
	static $t: Type = markType(DateTimeColumnValueFormatter, 'DateTimeColumnValueFormatter');
	private _format: DateTimeFormats = <DateTimeFormats>0;
	private _invalidate: boolean = false;
	invalidateFormat(): void {
		this._invalidate = true;
	}
	ensureFormat(model: DateTimeCellModel): void {
		this._format = model.dateTimeFormat;
		this._invalidate = false;
	}
	private _dateTimeShortFormat: any = null;
	private _dateTimeLongFormat: any = null;
	private _dateLongFormat: any = null;
	private _dateShortFormat: any = null;
	private _timeLongFormat: any = null;
	private _timeShortFormat: any = null;
	formatDate(date: Date): string {
		if (+date == +(dateMinValue())) {
			return "";
		}
		let hasIntl: boolean = <boolean>(<any>Intl && <any>Intl.DateTimeFormat);
		if (hasIntl) {
			let format_: any = null;
			switch (this._format) {
				case DateTimeFormats.DateTimeShort:
				if (this._dateTimeShortFormat == null) {
					this._dateTimeShortFormat = <any>(new Intl.DateTimeFormat([], { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
				}
				format_ = this._dateTimeShortFormat;
				break;

				case DateTimeFormats.DateTimeLong:
				if (this._dateTimeLongFormat == null) {
					this._dateTimeLongFormat = <any>(new Intl.DateTimeFormat([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
				}
				format_ = this._dateTimeLongFormat;
				break;

				case DateTimeFormats.DateLong:
				if (this._dateLongFormat == null) {
					this._dateLongFormat = <any>(new Intl.DateTimeFormat([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
				}
				format_ = this._dateLongFormat;
				break;

				case DateTimeFormats.DateShort:
				if (this._dateShortFormat == null) {
					this._dateShortFormat = <any>(new Intl.DateTimeFormat([], { month: 'numeric', day: 'numeric', year: 'numeric' }));
				}
				format_ = this._dateShortFormat;
				break;

				case DateTimeFormats.TimeLong:
				if (this._timeLongFormat == null) {
					this._timeLongFormat = <any>(new Intl.DateTimeFormat([], { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
				}
				format_ = this._timeLongFormat;
				break;

				case DateTimeFormats.TimeShort:
				if (this._timeShortFormat == null) {
					this._timeShortFormat = <any>(new Intl.DateTimeFormat([], { hour: 'numeric', minute: 'numeric' }));
				}
				format_ = this._timeShortFormat;
				break;

			}

			let date_ = date;
			return <string>(format_.format(date_));
		} else {
			let date_ = date;
			switch (this._format) {
				case DateTimeFormats.DateTimeShort: return <string>(date_.toLocaleString());
				case DateTimeFormats.DateTimeLong: return <string>(date_.toLocaleString());
				case DateTimeFormats.DateLong: return <string>(date_.toLocaleDateString());
				case DateTimeFormats.DateShort: return <string>(date_.toLocaleDateString());
				case DateTimeFormats.TimeLong: return <string>(date_.toLocaleTimeString());
				case DateTimeFormats.TimeShort: return <string>(date_.toLocaleTimeString());
			}

			return date.toString();
		}
	}
}

/**
 * @hidden 
 */
export abstract class CellModel extends Base {
	static $t: Type = markType(CellModel, 'CellModel');
	private _owner: Grid = null;
	get owner(): Grid {
		return this._owner;
	}
	set owner(value: Grid) {
		this._owner = value;
	}
	constructor() {
		super();
		this.state = ModelStates.New;
		this.dataRow = -1;
		this.reset();
		this.background = GridStyleRepository.defaultBackgroundColor;
	}
	private static _nextCellModelPropertyId: number = 0;
	private static _maxCellModelPropertyId: number = 0;
	private static _propertyIdMap: Dictionary$2<string, number> = null;
	static getCellModelPropertyId(propertyName: string): number {
		if (CellModel._propertyIdMap == null || <any>CellModel._propertyIdMap == undefined) {
			CellModel._propertyIdMap = new Dictionary$2<string, number>(String_$type, Number_$type, 0);
		}
		if (CellModel._propertyIdMap.containsKey(propertyName)) {
			return CellModel._propertyIdMap.item(propertyName);
		}
		let id: number = CellModel._nextCellModelPropertyId;
		CellModel._nextCellModelPropertyId++;
		CellModel._maxCellModelPropertyId = id;
		CellModel._propertyIdMap.item(propertyName, id);
		return id;
	}
	private _presenter: ICellPresenter = null;
	get presenter(): ICellPresenter {
		return this._presenter;
	}
	set presenter(value: ICellPresenter) {
		this._presenter = value;
	}
	static readonly statePropertyName: string = "State";
	static statePropertyId: number = CellModel.getCellModelPropertyId(CellModel.statePropertyName);
	private _state: ModelStates = <ModelStates>0;
	get state(): ModelStates {
		return this._state;
	}
	set state(value: ModelStates) {
		let oldValue = this._state;
		this._state = value;
		if (this._state != oldValue) {
			this.onPropertyChanged(CellModel.statePropertyName, CellModel.statePropertyId, enumGetBox<ModelStates>(ModelStates_$type, oldValue), enumGetBox<ModelStates>(ModelStates_$type, this._state));
		}
	}
	private _styleKey: string = null;
	get styleKey(): string {
		return this._styleKey;
	}
	set styleKey(value: string) {
		this._styleKey = value;
	}
	private _path: CellPath = null;
	get path(): CellPath {
		return this._path;
	}
	set path(value: CellPath) {
		this._path = value;
	}
	private _dataRow: number = 0;
	get dataRow(): number {
		return this._dataRow;
	}
	set dataRow(value: number) {
		this._dataRow = value;
	}
	private _isPositionDirty: boolean = false;
	get isPositionDirty(): boolean {
		return this._isPositionDirty;
	}
	set isPositionDirty(value: boolean) {
		this._isPositionDirty = value;
	}
	private _isSizeDirty: boolean = false;
	get isSizeDirty(): boolean {
		return this._isSizeDirty;
	}
	set isSizeDirty(value: boolean) {
		this._isSizeDirty = value;
	}
	private _isContentDirty: boolean = false;
	get isContentDirty(): boolean {
		return this._isContentDirty;
	}
	set isContentDirty(value: boolean) {
		this._isContentDirty = value;
	}
	private _isBorderDirty: boolean = false;
	get isBorderDirty(): boolean {
		return this._isBorderDirty;
	}
	set isBorderDirty(value: boolean) {
		this._isBorderDirty = value;
	}
	private _isLayerDirty: boolean = false;
	get isLayerDirty(): boolean {
		return this._isLayerDirty;
	}
	set isLayerDirty(value: boolean) {
		this._isLayerDirty = value;
	}
	private _isStateDirty: boolean = false;
	get isStateDirty(): boolean {
		return this._isStateDirty;
	}
	set isStateDirty(value: boolean) {
		this._isStateDirty = value;
	}
	private _isDataDirty: boolean = false;
	get isDataDirty(): boolean {
		return this._isDataDirty;
	}
	set isDataDirty(value: boolean) {
		this._isDataDirty = value;
	}
	private _isPlaceholdContentNeeded: boolean = false;
	get isPlaceholdContentNeeded(): boolean {
		return this._isPlaceholdContentNeeded;
	}
	set isPlaceholdContentNeeded(value: boolean) {
		this._isPlaceholdContentNeeded = value;
	}
	private _actionManager: ICellActionManager = null;
	get actionManager(): ICellActionManager {
		return this._actionManager;
	}
	set actionManager(value: ICellActionManager) {
		this._actionManager = value;
	}
	private _isRowPinned: boolean = false;
	static readonly isRowPinnedPropertyName: string = "IsRowPinned";
	static isRowPinnedPropertyId: number = CellModel.getCellModelPropertyId(CellModel.isRowPinnedPropertyName);
	get isRowPinned(): boolean {
		return this._isRowPinned;
	}
	set isRowPinned(value: boolean) {
		let oldValue = this._isRowPinned;
		this._isRowPinned = value;
		if (this._isRowPinned != oldValue) {
			this.onPropertyChanged(CellModel.isRowPinnedPropertyName, CellModel.isRowPinnedPropertyId, oldValue, this._isRowPinned);
		}
	}
	private _isRowSticky: boolean = false;
	static readonly isRowStickyPropertyName: string = "IsRowSticky";
	static isRowStickyPropertyId: number = CellModel.getCellModelPropertyId(CellModel.isRowStickyPropertyName);
	get isRowSticky(): boolean {
		return this._isRowSticky;
	}
	set isRowSticky(value: boolean) {
		let oldValue = this._isRowSticky;
		this._isRowSticky = value;
		if (this._isRowSticky != oldValue) {
			this.onPropertyChanged(CellModel.isRowStickyPropertyName, CellModel.isRowStickyPropertyId, oldValue, this._isRowSticky);
		}
	}
	private _isLastStickyRow: boolean = false;
	static readonly isLastStickyRowPropertyName: string = "IsLastStickyRow";
	static isLastStickyRowPropertyId: number = CellModel.getCellModelPropertyId(CellModel.isLastStickyRowPropertyName);
	get isLastStickyRow(): boolean {
		return this._isLastStickyRow;
	}
	set isLastStickyRow(value: boolean) {
		let oldValue = this._isLastStickyRow;
		this._isLastStickyRow = value;
		if (this._isLastStickyRow != oldValue) {
			this.onPropertyChanged(CellModel.isLastStickyRowPropertyName, CellModel.isLastStickyRowPropertyId, oldValue, this._isLastStickyRow);
		}
	}
	private _indent: number = 0;
	static readonly indentPropertyName: string = "Indent";
	static indentPropertyId: number = CellModel.getCellModelPropertyId(CellModel.indentPropertyName);
	get indent(): number {
		return this._indent;
	}
	set indent(value: number) {
		let oldValue = this._indent;
		this._indent = value;
		if (this._indent != oldValue) {
			this.onPropertyChanged(CellModel.indentPropertyName, CellModel.indentPropertyId, oldValue, this._indent);
		}
	}
	private _dirtyCustomFields: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
	isCustomFieldDirty(propertyName: string): boolean {
		if (this._dirtyCustomFields.containsKey(propertyName)) {
			return this._dirtyCustomFields.item(propertyName);
		}
		return false;
	}
	isDirtyById(propertyId_: number): boolean {
		if (this._dirtyListCount == -1) {
			return false;
		}
		let ind: number = <number>((propertyId_ / 32) | 0);
		let shift: number = propertyId_ % 32;
		return ((this._dirtyList[ind] >> shift) & 1) != 0;
	}
	isDirty(propertyName: string): boolean {
		let id = CellModel._propertyIdMap.tryGetValueFast(propertyName);
		if (<any>id != undefined) {
			return this.isDirtyById(id);
		}
		if (this.isCustomFieldDirty(propertyName)) {
			return true;
		}
		return false;
	}
	private _dirtyListCount: number = -1;
	private _dirtyList: number[] = null;
	markDirty(propertyId_: number): void {
		if (this._dirtyListCount == -1) {
			this._dirtyListCount = <number>truncate(Math.ceil(CellModel._maxCellModelPropertyId / 32));
			this._dirtyList = <number[]>new Array(propertyId_);
		}
		let ind: number = <number>((propertyId_ / 32) | 0);
		let shift: number = propertyId_ % 32;
		this._dirtyList[ind] = this._dirtyList[ind] | (1 << shift);
	}
	clearDirty(): void {
		for (let i = 0; i < this._dirtyListCount; i++) {
			this._dirtyList[i] = 0;
		}
	}
	markDirtyByName(propertyName: string): void {
		let id = CellModel._propertyIdMap.tryGetValueFast(propertyName);
		if (<any>id != undefined) {
			this.markDirty(id);
			return;
		}
		this._dirtyCustomFields.item(propertyName, true);
	}
	protected onPropertyChanged(propertyName: string, propertyId: number, oldValue: any, newValue: any): void {
		this.markDirty(propertyId);
		this.propertyChangedOverride(propertyName, oldValue, newValue);
		if (this.owner != null) {
			this.owner.refresh();
		}
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	protected propertyChangedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case CellModel.statePropertyName:
			this.isPositionDirty = true;
			this.isSizeDirty = true;
			this.isContentDirty = true;
			this.isStateDirty = true;
			break;

			case CellModel.leftOffsetPropertyName:

			case CellModel.topOffsetPropertyName:

			case CellModel.leftPercentOffsetPropertyName:

			case CellModel.topPercentOffsetPropertyName:

			case CellModel.xPropertyName:

			case CellModel.yPropertyName:
			this.isPositionDirty = true;
			break;

			case CellModel.widthPropertyName:

			case CellModel.heightPropertyName:
			this.isSizeDirty = true;
			break;

			case CellModel.rowItemPropertyName:
			this.onRowItemChanged();
			break;

			case CellModel.backgroundPropertyName:

			case CellModel.selectedBackgroundPropertyName:

			case CellModel.selectedStatusPropertyName:

			case CellModel.isLastStickyRowPropertyName:

			case CellModel.stickyRowBackgroundPropertyName:

			case CellModel.pinnedRowBackgroundPropertyName:

			case CellModel.lastStickyRowBackgroundPropertyName:
			this.onCellBackgroundChanged();
			break;

			case CellModel.isRowStickyPropertyName:

			case CellModel.isRowPinnedPropertyName:

			case CellModel.pinnedRowOpacityPropertyName:
			this.onCellBackgroundChanged();
			this.onContentOpacityChanged();
			break;

			case CellModel.borderPropertyName:

			case CellModel.activationBorderPropertyName:

			case CellModel.borderLeftWidthPropertyName:

			case CellModel.borderTopWidthPropertyName:

			case CellModel.borderBottomWidthPropertyName:

			case CellModel.borderRightWidthPropertyName:

			case CellModel.activationBorderLeftWidthPropertyName:

			case CellModel.activationBorderTopWidthPropertyName:

			case CellModel.activationBorderBottomWidthPropertyName:

			case CellModel.activationBorderRightWidthPropertyName:

			case CellModel.activationStatusPropertyName:
			this.isBorderDirty = true;
			this.onCellBorderOrPaddingChanged();
			break;

			case CellModel.paddingLeftPropertyName:

			case CellModel.paddingTopPropertyName:

			case CellModel.paddingBottomPropertyName:

			case CellModel.paddingRightPropertyName:
			this.onCellBorderOrPaddingChanged();
			break;

			case CellModel.opacityPropertyName:
			this.onCellOpacityChanged();
			break;

			case CellModel.contentOpacityPropertyName:
			this.onContentOpacityChanged();
			break;

			default:
			this.isContentDirty = true;
			break;

		}

	}
	private onRowItemChanged(): void {
	}
	private onCellBackgroundChanged(): void {
		let desiredBackground: Brush = this.background;
		if (this.isLastStickyRow && this.lastStickyRowBackground != null) {
			desiredBackground = this.lastStickyRowBackground;
		} else if (this.isRowSticky && this.stickyRowBackground != null) {
			desiredBackground = this.stickyRowBackground;
		} else if (this.isRowPinned && this.pinnedRowBackground != null) {
			desiredBackground = this.pinnedRowBackground;
		}
		this.actualBackground = this.getResolvedBackgroundColor(desiredBackground, this.selectedBackground, this.selectedStatus);
	}
	private onCellBorderOrPaddingChanged(): void {
		let needActivationBorder: boolean = false;
		if (this.activationStatus != 0) {
			needActivationBorder = true;
		}
		if (needActivationBorder && (this.borderLeftWidth == 0 || this.borderTopWidth == 0 || this.borderRightWidth == 0 || this.borderBottomWidth == 0)) {
			let leftActivationDelta: number = this.activationBorderLeftWidth - this.borderLeftWidth;
			let topActivationDelta: number = this.activationBorderTopWidth - this.borderTopWidth;
			let rightActivationDelta: number = this.activationBorderRightWidth - this.borderRightWidth;
			let bottomActivationDelta: number = this.activationBorderBottomWidth - this.borderBottomWidth;
			this.actualPaddingLeft = Math.max(0, this.paddingLeft - leftActivationDelta);
			this.actualPaddingTop = Math.max(0, this.paddingTop - topActivationDelta);
			this.actualPaddingRight = Math.max(0, this.paddingRight - rightActivationDelta);
			this.actualPaddingBottom = Math.max(0, this.paddingBottom - bottomActivationDelta);
			this.actualBorderLeftWidth = Math.max(0, this.borderLeftWidth + leftActivationDelta);
			this.actualBorderTopWidth = Math.max(0, this.borderTopWidth + topActivationDelta);
			this.actualBorderRightWidth = Math.max(0, this.borderRightWidth + rightActivationDelta);
			this.actualBorderBottomWidth = Math.max(0, this.borderBottomWidth + bottomActivationDelta);
		} else {
			this.actualPaddingLeft = this.paddingLeft;
			this.actualPaddingTop = this.paddingTop;
			this.actualPaddingRight = this.paddingRight;
			this.actualPaddingBottom = this.paddingBottom;
			this.actualBorderLeftWidth = this.borderLeftWidth;
			this.actualBorderTopWidth = this.borderTopWidth;
			this.actualBorderRightWidth = this.borderRightWidth;
			this.actualBorderBottomWidth = this.borderBottomWidth;
		}
		let desiredBorder: Brush = this.border;
		this.actualBorder = this.getResolvedBackgroundColor(desiredBorder, this.activationBorder, this.activationStatus);
	}
	private onCellOpacityChanged(): void {
		this.actualOpacity = this.opacity;
	}
	private onContentOpacityChanged(): void {
		if (this.isRowPinned && !this.isRowSticky) {
			this.actualContentOpacity = this.pinnedRowOpacity;
		} else {
			this.actualContentOpacity = this.contentOpacity;
		}
	}
	private getResolvedBackgroundColor(minBrush: Brush, maxBrush: Brush, p: number): Brush {
		if (p == 0) {
			return minBrush;
		}
		if (p == 1) {
			return maxBrush;
		}
		return BrushUtil.getInterpolation(minBrush, p, maxBrush, InterpolationMode.RGB);
	}
	reset(): void {
		this.resetOverride();
	}
	protected resetOverride(): void {
		this.clearDirty();
		if (this._namedValues != null) {
			this._namedValues.clear();
		}
		this.selectedStatus = 0;
		this.isContentDirty = true;
		this.isPositionDirty = true;
		this.isSizeDirty = true;
		this.isLayerDirty = false;
	}
	private _namedValues: Dictionary$2<string, any> = null;
	setNamedValue(valueName: string, value: any): void {
		if (this._namedValues == null) {
			this._namedValues = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
		}
		let oldValue: any = null;
		if (this._namedValues.containsKey(valueName)) {
			oldValue = this._namedValues.item(valueName);
		}
		this._namedValues.item(valueName, value);
		let changed: boolean = false;
		if (oldValue == null && value != null) {
			changed = true;
		}
		if (oldValue != null) {
			if (!Base.equalsStatic(oldValue, value)) {
				changed = true;
			}
		}
		if (changed) {
			this.markDirtyByName(valueName);
			this.isContentDirty = true;
			if (this.owner != null) {
				this.owner.refresh();
			}
		}
	}
	hasNamedValue(valueName: string): boolean {
		if (this._namedValues == null) {
			return false;
		}
		return this._namedValues.containsKey(valueName);
	}
	removeNamedValue(valueName: string): void {
		if (this._namedValues == null) {
			return;
		}
		if (this._namedValues.containsKey(valueName)) {
			this._namedValues.removeItem(valueName);
		}
	}
	getNamedValue(valueName: string): any {
		if (this._namedValues == null) {
			return null;
		}
		if (this._namedValues.containsKey(valueName)) {
			return this._namedValues.item(valueName);
		}
		return null;
	}
	static readonly currentLayerPropertyName: string = "CurrentLayer";
	private _currentLayer: GridLayer = null;
	get currentLayer(): GridLayer {
		return this._currentLayer;
	}
	set currentLayer(value: GridLayer) {
		let oldValue = this._currentLayer;
		this._currentLayer = value;
		if (this._currentLayer != oldValue) {
			this.isLayerDirty = true;
		}
	}
	static readonly rowItemPropertyName: string = "RowItem";
	static rowItemPropertyId: number = CellModel.getCellModelPropertyId(CellModel.rowItemPropertyName);
	private _rowItem: any = null;
	get rowItem(): any {
		return this._rowItem;
	}
	set rowItem(value: any) {
		let oldValue = this._rowItem;
		this._rowItem = value;
		if (this._rowItem != oldValue) {
			this.onPropertyChanged(CellModel.rowItemPropertyName, CellModel.rowItemPropertyId, oldValue, this._rowItem);
		}
	}
	static readonly xPropertyName: string = "X";
	static readonly xPropertyId: number = CellModel.getCellModelPropertyId(CellModel.xPropertyName);
	private _x: number = 0;
	get x(): number {
		return this._x;
	}
	set x(value: number) {
		let oldValue = this._x;
		this._x = value;
		if (this._x != oldValue) {
			this.onPropertyChanged(CellModel.xPropertyName, CellModel.xPropertyId, oldValue, this._x);
		}
	}
	static readonly yPropertyName: string = "Y";
	static readonly yPropertyId: number = CellModel.getCellModelPropertyId(CellModel.yPropertyName);
	private _y: number = 0;
	get y(): number {
		return this._y;
	}
	set y(value: number) {
		let oldValue = this._y;
		this._y = value;
		if (this._y != oldValue) {
			this.onPropertyChanged(CellModel.yPropertyName, CellModel.yPropertyId, oldValue, this._y);
		}
	}
	static readonly snappedXPropertyName: string = "SnappedX";
	static readonly snappedXPropertyId: number = CellModel.getCellModelPropertyId(CellModel.snappedXPropertyName);
	private _snappedX: number = 0;
	get snappedX(): number {
		return this._snappedX;
	}
	set snappedX(value: number) {
		let oldValue = this._snappedX;
		this._snappedX = value;
		if (this._snappedX != oldValue) {
			this.onPropertyChanged(CellModel.snappedXPropertyName, CellModel.snappedXPropertyId, oldValue, this._snappedX);
		}
	}
	static readonly snappedYPropertyName: string = "SnappedY";
	static readonly snappedYPropertyId: number = CellModel.getCellModelPropertyId(CellModel.snappedYPropertyName);
	private _snappedY: number = 0;
	get snappedY(): number {
		return this._snappedY;
	}
	set snappedY(value: number) {
		let oldValue = this._snappedY;
		this._snappedY = value;
		if (this._snappedY != oldValue) {
			this.onPropertyChanged(CellModel.snappedYPropertyName, CellModel.snappedYPropertyId, oldValue, this._snappedY);
		}
	}
	static readonly contentOpacityPropertyName: string = "ContentOpacity";
	static readonly contentOpacityPropertyId: number = CellModel.getCellModelPropertyId(CellModel.contentOpacityPropertyName);
	private _contentOpacity: number = 1;
	get contentOpacity(): number {
		return this._contentOpacity;
	}
	set contentOpacity(value: number) {
		let oldValue = this._contentOpacity;
		this._contentOpacity = value;
		if (this._contentOpacity != oldValue) {
			this.onPropertyChanged(CellModel.contentOpacityPropertyName, CellModel.contentOpacityPropertyId, oldValue, this._contentOpacity);
		}
	}
	static readonly actualContentOpacityPropertyName: string = "ActualContentOpacity";
	static readonly actualContentOpacityPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualContentOpacityPropertyName);
	private _actualContentOpacity: number = 1;
	get actualContentOpacity(): number {
		return this._actualContentOpacity;
	}
	set actualContentOpacity(value: number) {
		let oldValue = this._actualContentOpacity;
		this._actualContentOpacity = value;
		if (this._actualContentOpacity != oldValue) {
			this.onPropertyChanged(CellModel.actualContentOpacityPropertyName, CellModel.actualContentOpacityPropertyId, oldValue, this._actualContentOpacity);
		}
	}
	static readonly opacityPropertyName: string = "Opacity";
	static readonly opacityPropertyId: number = CellModel.getCellModelPropertyId(CellModel.opacityPropertyName);
	private _opacity: number = 1;
	get opacity(): number {
		return this._opacity;
	}
	set opacity(value: number) {
		let oldValue = this._opacity;
		this._opacity = value;
		if (this._opacity != oldValue) {
			this.onPropertyChanged(CellModel.opacityPropertyName, CellModel.opacityPropertyId, oldValue, this._opacity);
		}
	}
	static readonly actualOpacityPropertyName: string = "ActualOpacity";
	static readonly actualOpacityPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualOpacityPropertyName);
	private _actualOpacity: number = 1;
	get actualOpacity(): number {
		return this._actualOpacity;
	}
	set actualOpacity(value: number) {
		let oldValue = this._actualOpacity;
		this._actualOpacity = value;
		if (this._actualOpacity != oldValue) {
			this.onPropertyChanged(CellModel.actualOpacityPropertyName, CellModel.actualOpacityPropertyId, oldValue, this._actualOpacity);
		}
	}
	static readonly leftOffsetPropertyName: string = "LeftOffset";
	static readonly leftOffsetPropertyId: number = CellModel.getCellModelPropertyId(CellModel.leftOffsetPropertyName);
	notifyReconciling(): void {
		if (this.cellReconciling != null) {
			this.cellReconciling(this);
		}
	}
	private _leftOffset: number = 0;
	get leftOffset(): number {
		return this._leftOffset;
	}
	set leftOffset(value: number) {
		let oldValue = this._leftOffset;
		this._leftOffset = value;
		if (this._leftOffset != oldValue) {
			this.onPropertyChanged(CellModel.leftOffsetPropertyName, CellModel.leftOffsetPropertyId, oldValue, this._leftOffset);
		}
	}
	static readonly topOffsetPropertyName: string = "TopOffset";
	static readonly topOffsetPropertyId: number = CellModel.getCellModelPropertyId(CellModel.topOffsetPropertyName);
	private _topOffset: number = 0;
	get topOffset(): number {
		return this._topOffset;
	}
	set topOffset(value: number) {
		let oldValue = this._topOffset;
		this._topOffset = value;
		if (this._topOffset != oldValue) {
			this.onPropertyChanged(CellModel.topOffsetPropertyName, CellModel.topOffsetPropertyId, oldValue, this._topOffset);
		}
	}
	static readonly leftPercentOffsetPropertyName: string = "LeftPercentOffset";
	static readonly leftPercentOffsetPropertyId: number = CellModel.getCellModelPropertyId(CellModel.leftPercentOffsetPropertyName);
	private _leftPercentOffset: number = 0;
	get leftPercentOffset(): number {
		return this._leftPercentOffset;
	}
	set leftPercentOffset(value: number) {
		let oldValue = this._leftPercentOffset;
		this._leftPercentOffset = value;
		if (this._leftPercentOffset != oldValue) {
			this.onPropertyChanged(CellModel.leftPercentOffsetPropertyName, CellModel.leftPercentOffsetPropertyId, oldValue, this._leftPercentOffset);
		}
	}
	static readonly topPercentOffsetPropertyName: string = "TopPercentOffset";
	static readonly topPercentOffsetPropertyId: number = CellModel.getCellModelPropertyId(CellModel.topPercentOffsetPropertyName);
	private _topPercentOffset: number = 0;
	get topPercentOffset(): number {
		return this._topPercentOffset;
	}
	set topPercentOffset(value: number) {
		let oldValue = this._topPercentOffset;
		this._topPercentOffset = value;
		if (this._topPercentOffset != oldValue) {
			this.onPropertyChanged(CellModel.topPercentOffsetPropertyName, CellModel.topPercentOffsetPropertyId, oldValue, this._topPercentOffset);
		}
	}
	static readonly heightPropertyName: string = "Height";
	static readonly heightPropertyId: number = CellModel.getCellModelPropertyId(CellModel.heightPropertyName);
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		let oldValue = this._height;
		this._height = value;
		if (this._height != oldValue) {
			this.onPropertyChanged(CellModel.heightPropertyName, CellModel.heightPropertyId, oldValue, this._height);
		}
	}
	static readonly widthPropertyName: string = "Width";
	static readonly widthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.widthPropertyName);
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		let oldValue = this._width;
		this._width = value;
		if (this._width != oldValue) {
			this.onPropertyChanged(CellModel.widthPropertyName, CellModel.widthPropertyId, oldValue, this._width);
		}
	}
	static readonly isSelectedPropertyName: string = "IsSelected";
	static readonly isSelectedPropertyId: number = CellModel.getCellModelPropertyId(CellModel.isSelectedPropertyName);
	private _isSelected: boolean = false;
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		let oldValue = this._isSelected;
		this._isSelected = value;
		if (this._isSelected != oldValue) {
			this.onPropertyChanged(CellModel.isSelectedPropertyName, CellModel.isSelectedPropertyId, oldValue, this._isSelected);
		}
	}
	static readonly modelTypePropertyName: string = "ModelType";
	static readonly modelTypePropertyId: number = CellModel.getCellModelPropertyId(CellModel.modelTypePropertyName);
	private _modelType: ModelTypes = <ModelTypes>0;
	get modelType(): ModelTypes {
		return this._modelType;
	}
	set modelType(value: ModelTypes) {
		let oldValue = this._modelType;
		this._modelType = value;
		if (this._modelType != oldValue) {
			this.onPropertyChanged(CellModel.modelTypePropertyName, CellModel.modelTypePropertyId, enumGetBox<ModelTypes>(ModelTypes_$type, oldValue), enumGetBox<ModelTypes>(ModelTypes_$type, this._modelType));
		}
	}
	static readonly selectedStatusPropertyName: string = "SelectedStatus";
	static readonly selectedStatusPropertyId: number = CellModel.getCellModelPropertyId(CellModel.selectedStatusPropertyName);
	private _selectedStatus: number = 0;
	get selectedStatus(): number {
		return this._selectedStatus;
	}
	set selectedStatus(value: number) {
		let oldValue = this._selectedStatus;
		this._selectedStatus = value;
		if (this._selectedStatus != oldValue) {
			this.onPropertyChanged(CellModel.selectedStatusPropertyName, CellModel.selectedStatusPropertyId, oldValue, this._selectedStatus);
		}
	}
	static readonly activationStatusPropertyName: string = "ActivationStatus";
	static readonly activationStatusPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationStatusPropertyName);
	private _activationStatus: number = 0;
	get activationStatus(): number {
		return this._activationStatus;
	}
	set activationStatus(value: number) {
		let oldValue = this._activationStatus;
		this._activationStatus = value;
		if (this._activationStatus != oldValue) {
			this.onPropertyChanged(CellModel.activationStatusPropertyName, CellModel.activationStatusPropertyId, oldValue, this._activationStatus);
		}
	}
	static readonly horizontalAlignmentPropertyName: string = "HorizontalAlignment";
	static readonly horizontalAlignmentPropertyId: number = CellModel.getCellModelPropertyId(CellModel.horizontalAlignmentPropertyName);
	private _horizontalAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Left;
	get horizontalAlignment(): CellContentHorizontalAlignment {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: CellContentHorizontalAlignment) {
		let oldValue = this._horizontalAlignment;
		this._horizontalAlignment = value;
		if (this._horizontalAlignment != oldValue) {
			this.onPropertyChanged(CellModel.horizontalAlignmentPropertyName, CellModel.horizontalAlignmentPropertyId, enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, oldValue), enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this._horizontalAlignment));
		}
	}
	static readonly verticalAlignmentPropertyName: string = "VerticalAlignment";
	static readonly verticalAlignmentPropertyId: number = CellModel.getCellModelPropertyId(CellModel.verticalAlignmentPropertyName);
	private _verticalAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Center;
	get verticalAlignment(): CellContentVerticalAlignment {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: CellContentVerticalAlignment) {
		let oldValue = this._verticalAlignment;
		this._verticalAlignment = value;
		if (this._verticalAlignment != oldValue) {
			this.onPropertyChanged(CellModel.verticalAlignmentPropertyName, CellModel.verticalAlignmentPropertyId, enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, oldValue), enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this._horizontalAlignment));
		}
	}
	static readonly backgroundPropertyName: string = "Background";
	static readonly backgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.backgroundPropertyName);
	private _background: Brush = null;
	get background(): Brush {
		return this._background;
	}
	set background(value: Brush) {
		let oldValue = this._background;
		this._background = value;
		if (this._background != oldValue) {
			this.onPropertyChanged(CellModel.backgroundPropertyName, CellModel.backgroundPropertyId, oldValue, this._background);
		}
	}
	static readonly borderPropertyName: string = "Border";
	static readonly borderPropertyId: number = CellModel.getCellModelPropertyId(CellModel.borderPropertyName);
	private _border: Brush = null;
	get border(): Brush {
		return this._border;
	}
	set border(value: Brush) {
		let oldValue = this._border;
		this._border = value;
		if (this._border != oldValue) {
			this.onPropertyChanged(CellModel.borderPropertyName, CellModel.borderPropertyId, oldValue, this._border);
		}
	}
	static readonly actualBackgroundPropertyName: string = "ActualBackground";
	static readonly actualBackgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBackgroundPropertyName);
	private _actualBackground: Brush = null;
	get actualBackground(): Brush {
		return this._actualBackground;
	}
	set actualBackground(value: Brush) {
		let oldValue = this._actualBackground;
		this._actualBackground = value;
		if (this._actualBackground != oldValue) {
			this.onPropertyChanged(CellModel.actualBackgroundPropertyName, CellModel.actualBackgroundPropertyId, oldValue, this._actualBackground);
		}
	}
	static readonly actualBorderPropertyName: string = "ActualBorder";
	static readonly actualBorderPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBorderPropertyName);
	private _actualBorder: Brush = null;
	get actualBorder(): Brush {
		return this._actualBorder;
	}
	set actualBorder(value: Brush) {
		let oldValue = this._actualBorder;
		this._actualBorder = value;
		if (this._actualBorder != oldValue) {
			this.onPropertyChanged(CellModel.actualBorderPropertyName, CellModel.actualBorderPropertyId, oldValue, this._actualBorder);
		}
	}
	static readonly activationBorderPropertyName: string = "ActivationBorder";
	static readonly activationBorderPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationBorderPropertyName);
	private _activationBorder: Brush = null;
	get activationBorder(): Brush {
		return this._activationBorder;
	}
	set activationBorder(value: Brush) {
		let oldValue = this._activationBorder;
		this._activationBorder = value;
		if (this._activationBorder != oldValue) {
			this.onPropertyChanged(CellModel.activationBorderPropertyName, CellModel.activationBorderPropertyId, oldValue, this._activationBorder);
		}
	}
	static readonly selectedBackgroundPropertyName: string = "SelectedBackground";
	static readonly selectedBackgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.selectedBackgroundPropertyName);
	private _selectedBackground: Brush = null;
	get selectedBackground(): Brush {
		return this._selectedBackground;
	}
	set selectedBackground(value: Brush) {
		let oldValue = this._selectedBackground;
		this._selectedBackground = value;
		if (this._selectedBackground != oldValue) {
			this.onPropertyChanged(CellModel.selectedBackgroundPropertyName, CellModel.selectedBackgroundPropertyId, oldValue, this._selectedBackground);
		}
	}
	static readonly sortIndicatorColorPropertyName: string = "SortIndicatorColor";
	static readonly sortIndicatorColorPropertyId: number = CellModel.getCellModelPropertyId(CellModel.sortIndicatorColorPropertyName);
	private _sortIndicatorColor: Brush = null;
	get sortIndicatorColor(): Brush {
		return this._sortIndicatorColor;
	}
	set sortIndicatorColor(value: Brush) {
		let oldValue = this._sortIndicatorColor;
		this._sortIndicatorColor = value;
		if (this._sortIndicatorColor != oldValue) {
			this.onPropertyChanged(CellModel.sortIndicatorColorPropertyName, CellModel.sortIndicatorColorPropertyId, oldValue, this._sortIndicatorColor);
		}
	}
	static readonly stickyRowBackgroundPropertyName: string = "StickyRowBackground";
	static readonly stickyRowBackgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.stickyRowBackgroundPropertyName);
	private _stickyRowBackground: Brush = null;
	get stickyRowBackground(): Brush {
		return this._stickyRowBackground;
	}
	set stickyRowBackground(value: Brush) {
		let oldValue = this._stickyRowBackground;
		this._stickyRowBackground = value;
		if (this._stickyRowBackground != oldValue) {
			this.onPropertyChanged(CellModel.stickyRowBackgroundPropertyName, CellModel.stickyRowBackgroundPropertyId, oldValue, this._stickyRowBackground);
		}
	}
	static readonly pinnedRowBackgroundPropertyName: string = "PinnedRowBackground";
	static readonly pinnedRowBackgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.pinnedRowBackgroundPropertyName);
	private _pinnedRowBackground: Brush = null;
	get pinnedRowBackground(): Brush {
		return this._pinnedRowBackground;
	}
	set pinnedRowBackground(value: Brush) {
		let oldValue = this._pinnedRowBackground;
		this._pinnedRowBackground = value;
		if (this._pinnedRowBackground != oldValue) {
			this.onPropertyChanged(CellModel.pinnedRowBackgroundPropertyName, CellModel.pinnedRowBackgroundPropertyId, oldValue, this._pinnedRowBackground);
		}
	}
	static readonly lastStickyRowBackgroundPropertyName: string = "LastStickyRowBackground";
	private _lastStickyRowBackground: Brush = null;
	static readonly lastStickyRowBackgroundPropertyId: number = CellModel.getCellModelPropertyId(CellModel.lastStickyRowBackgroundPropertyName);
	get lastStickyRowBackground(): Brush {
		return this._lastStickyRowBackground;
	}
	set lastStickyRowBackground(value: Brush) {
		let oldValue = this._lastStickyRowBackground;
		this._lastStickyRowBackground = value;
		if (this._lastStickyRowBackground != oldValue) {
			this.onPropertyChanged(CellModel.lastStickyRowBackgroundPropertyName, CellModel.lastStickyRowBackgroundPropertyId, oldValue, this._lastStickyRowBackground);
		}
	}
	static readonly pinnedRowOpacityPropertyName: string = "PinnedRowOpacity";
	static readonly pinnedRowOpacityPropertyId: number = CellModel.getCellModelPropertyId(CellModel.pinnedRowOpacityPropertyName);
	private _pinnedRowOpacity: number = 0.3;
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		let oldValue = this._pinnedRowOpacity;
		this._pinnedRowOpacity = value;
		if (this._pinnedRowOpacity != oldValue) {
			this.onPropertyChanged(CellModel.pinnedRowOpacityPropertyName, CellModel.pinnedRowOpacityPropertyId, oldValue, this._pinnedRowOpacity);
		}
	}
	static readonly originalValuePropertyName: string = "OriginalValue";
	static readonly originalValuePropertyId: number = CellModel.getCellModelPropertyId(CellModel.originalValuePropertyName);
	private _originalValue: any = null;
	get originalValue(): any {
		return this._originalValue;
	}
	set originalValue(value: any) {
		let oldValue = this._originalValue;
		this._originalValue = value;
		if (this._originalValue != oldValue) {
			this.onPropertyChanged(CellModel.originalValuePropertyName, CellModel.originalValuePropertyId, oldValue, this._originalValue);
		}
	}
	static readonly renderValuePropertyName: string = "RenderValue";
	static readonly renderValuePropertyId: number = CellModel.getCellModelPropertyId(CellModel.renderValuePropertyName);
	private _renderValue: string = "";
	get renderValue(): string {
		return this._renderValue;
	}
	set renderValue(value: string) {
		let oldValue = this._renderValue;
		this._renderValue = value;
		if (this._renderValue != oldValue) {
			this.onPropertyChanged(CellModel.renderValuePropertyName, CellModel.renderValuePropertyId, oldValue, this._renderValue);
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	static readonly textColorPropertyId: number = CellModel.getCellModelPropertyId(CellModel.textColorPropertyName);
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (this._textColor != oldValue) {
			this.onPropertyChanged(CellModel.textColorPropertyName, CellModel.textColorPropertyId, oldValue, this._textColor);
		}
	}
	static readonly fontInfoPropertyName: string = "FontInfo";
	static readonly fontInfoPropertyId: number = CellModel.getCellModelPropertyId(CellModel.fontInfoPropertyName);
	private _fontInfo: FontInfo = null;
	get fontInfo(): FontInfo {
		return this._fontInfo;
	}
	set fontInfo(value: FontInfo) {
		let oldValue = this._fontInfo;
		this._fontInfo = value;
		if (this._fontInfo != oldValue) {
			this.onPropertyChanged(CellModel.fontInfoPropertyName, CellModel.fontInfoPropertyId, oldValue, this._fontInfo);
		}
	}
	static readonly lineBreakModePropertyName: string = "LineBreakMode";
	static readonly lineBreakModePropertyId: number = CellModel.getCellModelPropertyId(CellModel.lineBreakModePropertyName);
	private _lineBreakMode: TextCellLineBreakMode = TextCellLineBreakMode.Ellipsis;
	get lineBreakMode(): TextCellLineBreakMode {
		return this._lineBreakMode;
	}
	set lineBreakMode(value: TextCellLineBreakMode) {
		let oldValue = this._lineBreakMode;
		this._lineBreakMode = value;
		if (this._lineBreakMode != oldValue) {
			this.onPropertyChanged(CellModel.lineBreakModePropertyName, CellModel.lineBreakModePropertyId, enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, oldValue), enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, this._lineBreakMode));
		}
	}
	static readonly virtualizationPercentagePropertyName: string = "VirtualizationPercentage";
	static readonly virtualizationPercentagePropertyId: number = CellModel.getCellModelPropertyId(CellModel.virtualizationPercentagePropertyName);
	private _virtualizationPercentage: number = 0;
	get virtualizationPercentage(): number {
		return this._virtualizationPercentage;
	}
	set virtualizationPercentage(value: number) {
		let oldValue = this._virtualizationPercentage;
		this._virtualizationPercentage = value;
		if (this._virtualizationPercentage != oldValue) {
			this.onPropertyChanged(CellModel.virtualizationPercentagePropertyName, CellModel.virtualizationPercentagePropertyId, oldValue, this._virtualizationPercentage);
		}
	}
	static readonly paddingLeftPropertyName: string = "PaddingLeft";
	static readonly paddingLeftPropertyId: number = CellModel.getCellModelPropertyId(CellModel.paddingLeftPropertyName);
	private _paddingLeft: number = 0;
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		let oldValue = this._paddingLeft;
		this._paddingLeft = value;
		if (this._paddingLeft != oldValue) {
			this.onPropertyChanged(CellModel.paddingLeftPropertyName, CellModel.paddingLeftPropertyId, oldValue, this._paddingLeft);
		}
	}
	static readonly paddingTopPropertyName: string = "PaddingTop";
	static readonly paddingTopPropertyId: number = CellModel.getCellModelPropertyId(CellModel.paddingTopPropertyName);
	private _paddingTop: number = 0;
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		let oldValue = this._paddingTop;
		this._paddingTop = value;
		if (this._paddingTop != oldValue) {
			this.onPropertyChanged(CellModel.paddingTopPropertyName, CellModel.paddingTopPropertyId, oldValue, this._paddingTop);
		}
	}
	static readonly paddingRightPropertyName: string = "PaddingRight";
	static readonly paddingRightPropertyId: number = CellModel.getCellModelPropertyId(CellModel.paddingRightPropertyName);
	private _paddingRight: number = 0;
	get paddingRight(): number {
		return this._paddingRight;
	}
	set paddingRight(value: number) {
		let oldValue = this._paddingRight;
		this._paddingRight = value;
		if (this._paddingRight != oldValue) {
			this.onPropertyChanged(CellModel.paddingRightPropertyName, CellModel.paddingRightPropertyId, oldValue, this._paddingRight);
		}
	}
	static readonly paddingBottomPropertyName: string = "PaddingBottom";
	static readonly paddingBottomPropertyId: number = CellModel.getCellModelPropertyId(CellModel.paddingBottomPropertyName);
	private _paddingBottom: number = 0;
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		let oldValue = this._paddingBottom;
		this._paddingBottom = value;
		if (this._paddingBottom != oldValue) {
			this.onPropertyChanged(CellModel.paddingBottomPropertyName, CellModel.paddingBottomPropertyId, oldValue, this._paddingBottom);
		}
	}
	static readonly actualPaddingLeftPropertyName: string = "ActualPaddingLeft";
	static readonly actualPaddingLeftPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualPaddingLeftPropertyName);
	private _actualPaddingLeft: number = 0;
	get actualPaddingLeft(): number {
		return this._actualPaddingLeft;
	}
	set actualPaddingLeft(value: number) {
		let oldValue = this._actualPaddingLeft;
		this._actualPaddingLeft = value;
		if (this._actualPaddingLeft != oldValue) {
			this.onPropertyChanged(CellModel.actualPaddingLeftPropertyName, CellModel.actualPaddingLeftPropertyId, oldValue, this._actualPaddingLeft);
		}
	}
	static readonly actualPaddingTopPropertyName: string = "ActualPaddingTop";
	static readonly actualPaddingTopPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualPaddingTopPropertyName);
	private _actualPaddingTop: number = 0;
	get actualPaddingTop(): number {
		return this._actualPaddingTop;
	}
	set actualPaddingTop(value: number) {
		let oldValue = this._actualPaddingTop;
		this._actualPaddingTop = value;
		if (this._actualPaddingTop != oldValue) {
			this.onPropertyChanged(CellModel.actualPaddingTopPropertyName, CellModel.actualPaddingTopPropertyId, oldValue, this._actualPaddingTop);
		}
	}
	static readonly actualPaddingRightPropertyName: string = "ActualPaddingRight";
	static readonly actualPaddingRightPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualPaddingRightPropertyName);
	private _actualPaddingRight: number = 0;
	get actualPaddingRight(): number {
		return this._actualPaddingRight;
	}
	set actualPaddingRight(value: number) {
		let oldValue = this._actualPaddingRight;
		this._actualPaddingRight = value;
		if (this._actualPaddingRight != oldValue) {
			this.onPropertyChanged(CellModel.actualPaddingRightPropertyName, CellModel.actualPaddingRightPropertyId, oldValue, this._actualPaddingRight);
		}
	}
	static readonly actualPaddingBottomPropertyName: string = "ActualPaddingBottom";
	static readonly actualPaddingBottomPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualPaddingBottomPropertyName);
	private _actualPaddingBottom: number = 0;
	get actualPaddingBottom(): number {
		return this._actualPaddingBottom;
	}
	set actualPaddingBottom(value: number) {
		let oldValue = this._actualPaddingBottom;
		this._actualPaddingBottom = value;
		if (this._actualPaddingBottom != oldValue) {
			this.onPropertyChanged(CellModel.actualPaddingBottomPropertyName, CellModel.actualPaddingBottomPropertyId, oldValue, this._actualPaddingBottom);
		}
	}
	static readonly borderLeftWidthPropertyName: string = "BorderLeftWidth";
	static readonly borderLeftWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.borderLeftWidthPropertyName);
	private _borderLeftWidth: number = 0;
	get borderLeftWidth(): number {
		return this._borderLeftWidth;
	}
	set borderLeftWidth(value: number) {
		let oldValue = this._borderLeftWidth;
		this._borderLeftWidth = value;
		if (this._borderLeftWidth != oldValue) {
			this.onPropertyChanged(CellModel.borderLeftWidthPropertyName, CellModel.borderLeftWidthPropertyId, oldValue, this._borderLeftWidth);
		}
	}
	static readonly borderTopWidthPropertyName: string = "BorderTopWidth";
	static readonly borderTopWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.borderTopWidthPropertyName);
	private _borderTopWidth: number = 0;
	get borderTopWidth(): number {
		return this._borderTopWidth;
	}
	set borderTopWidth(value: number) {
		let oldValue = this._borderTopWidth;
		this._borderTopWidth = value;
		if (this._borderTopWidth != oldValue) {
			this.onPropertyChanged(CellModel.borderTopWidthPropertyName, CellModel.borderTopWidthPropertyId, oldValue, this._borderTopWidth);
		}
	}
	static readonly borderRightWidthPropertyName: string = "BorderRightWidth";
	static readonly borderRightWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.borderRightWidthPropertyName);
	private _borderRightWidth: number = 0;
	get borderRightWidth(): number {
		return this._borderRightWidth;
	}
	set borderRightWidth(value: number) {
		let oldValue = this._borderRightWidth;
		this._borderRightWidth = value;
		if (this._borderRightWidth != oldValue) {
			this.onPropertyChanged(CellModel.borderRightWidthPropertyName, CellModel.borderRightWidthPropertyId, oldValue, this._borderRightWidth);
		}
	}
	static readonly borderBottomWidthPropertyName: string = "BorderBottomWidth";
	static readonly borderBottomWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.borderBottomWidthPropertyName);
	private _borderBottomWidth: number = 0;
	get borderBottomWidth(): number {
		return this._borderBottomWidth;
	}
	set borderBottomWidth(value: number) {
		let oldValue = this._borderBottomWidth;
		this._borderBottomWidth = value;
		if (this._borderBottomWidth != oldValue) {
			this.onPropertyChanged(CellModel.borderBottomWidthPropertyName, CellModel.borderBottomWidthPropertyId, oldValue, this._borderBottomWidth);
		}
	}
	static readonly activationBorderLeftWidthPropertyName: string = "ActivationBorderLeftWidth";
	static readonly activationBorderLeftWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationBorderLeftWidthPropertyName);
	private _activationBorderLeftWidth: number = 1;
	get activationBorderLeftWidth(): number {
		return this._activationBorderLeftWidth;
	}
	set activationBorderLeftWidth(value: number) {
		let oldValue = this._activationBorderLeftWidth;
		this._activationBorderLeftWidth = value;
		if (this._activationBorderLeftWidth != oldValue) {
			this.onPropertyChanged(CellModel.activationBorderLeftWidthPropertyName, CellModel.activationBorderLeftWidthPropertyId, oldValue, this._activationBorderLeftWidth);
		}
	}
	static readonly activationBorderTopWidthPropertyName: string = "ActivationBorderTopWidth";
	static readonly activationBorderTopWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationBorderTopWidthPropertyName);
	private _activationBorderTopWidth: number = 1;
	get activationBorderTopWidth(): number {
		return this._activationBorderTopWidth;
	}
	set activationBorderTopWidth(value: number) {
		let oldValue = this._activationBorderTopWidth;
		this._activationBorderTopWidth = value;
		if (this._activationBorderTopWidth != oldValue) {
			this.onPropertyChanged(CellModel.activationBorderTopWidthPropertyName, CellModel.activationBorderTopWidthPropertyId, oldValue, this._activationBorderTopWidth);
		}
	}
	static readonly activationBorderRightWidthPropertyName: string = "ActivationBorderRightWidth";
	static readonly activationBorderRightWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationBorderRightWidthPropertyName);
	private _activationBorderRightWidth: number = 1;
	get activationBorderRightWidth(): number {
		return this._activationBorderRightWidth;
	}
	set activationBorderRightWidth(value: number) {
		let oldValue = this._activationBorderRightWidth;
		this._activationBorderRightWidth = value;
		if (this._activationBorderRightWidth != oldValue) {
			this.onPropertyChanged(CellModel.activationBorderRightWidthPropertyName, CellModel.activationBorderRightWidthPropertyId, oldValue, this._activationBorderRightWidth);
		}
	}
	static readonly activationBorderBottomWidthPropertyName: string = "ActivationBorderBottomWidth";
	static readonly activationBorderBottomWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.activationBorderBottomWidthPropertyName);
	private _activationBorderBottomWidth: number = 1;
	get activationBorderBottomWidth(): number {
		return this._activationBorderBottomWidth;
	}
	set activationBorderBottomWidth(value: number) {
		let oldValue = this._activationBorderBottomWidth;
		this._activationBorderBottomWidth = value;
		if (this._activationBorderBottomWidth != oldValue) {
			this.onPropertyChanged(CellModel.activationBorderBottomWidthPropertyName, CellModel.activationBorderBottomWidthPropertyId, oldValue, this._activationBorderBottomWidth);
		}
	}
	static readonly actualBorderLeftWidthPropertyName: string = "ActualBorderLeftWidth";
	static readonly actualBorderLeftWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBorderLeftWidthPropertyName);
	private _actualBorderLeftWidth: number = 0;
	get actualBorderLeftWidth(): number {
		return this._actualBorderLeftWidth;
	}
	set actualBorderLeftWidth(value: number) {
		let oldValue = this._actualBorderLeftWidth;
		this._actualBorderLeftWidth = value;
		if (this._actualBorderLeftWidth != oldValue) {
			this.onPropertyChanged(CellModel.actualBorderLeftWidthPropertyName, CellModel.actualBorderLeftWidthPropertyId, oldValue, this._actualBorderLeftWidth);
		}
	}
	static readonly actualBorderTopWidthPropertyName: string = "ActualBorderTopWidth";
	static readonly actualBorderTopWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBorderTopWidthPropertyName);
	private _actualBorderTopWidth: number = 0;
	get actualBorderTopWidth(): number {
		return this._actualBorderTopWidth;
	}
	set actualBorderTopWidth(value: number) {
		let oldValue = this._actualBorderTopWidth;
		this._actualBorderTopWidth = value;
		if (this._actualBorderTopWidth != oldValue) {
			this.onPropertyChanged(CellModel.actualBorderTopWidthPropertyName, CellModel.actualBorderTopWidthPropertyId, oldValue, this._actualBorderTopWidth);
		}
	}
	static readonly actualBorderRightWidthPropertyName: string = "ActualBorderRightWidth";
	static readonly actualBorderRightWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBorderRightWidthPropertyName);
	private _actualBorderRightWidth: number = 0;
	get actualBorderRightWidth(): number {
		return this._actualBorderRightWidth;
	}
	set actualBorderRightWidth(value: number) {
		let oldValue = this._actualBorderRightWidth;
		this._actualBorderRightWidth = value;
		if (this._actualBorderRightWidth != oldValue) {
			this.onPropertyChanged(CellModel.actualBorderRightWidthPropertyName, CellModel.actualBorderRightWidthPropertyId, oldValue, this._actualBorderRightWidth);
		}
	}
	static readonly actualBorderBottomWidthPropertyName: string = "ActualBorderBottomWidth";
	static readonly actualBorderBottomWidthPropertyId: number = CellModel.getCellModelPropertyId(CellModel.actualBorderBottomWidthPropertyName);
	private _actualBorderBottomWidth: number = 0;
	get actualBorderBottomWidth(): number {
		return this._actualBorderBottomWidth;
	}
	set actualBorderBottomWidth(value: number) {
		let oldValue = this._actualBorderBottomWidth;
		this._actualBorderBottomWidth = value;
		if (this._actualBorderBottomWidth != oldValue) {
			this.onPropertyChanged(CellModel.actualBorderBottomWidthPropertyName, CellModel.actualBorderBottomWidthPropertyId, oldValue, this._actualBorderBottomWidth);
		}
	}
	static readonly sortDirectionPropertyName: string = "SortDirection";
	static readonly sortDirectionPropertyId: number = CellModel.getCellModelPropertyId(CellModel.sortDirectionPropertyName);
	private _sortDirection: ColumnSortDirection = <ColumnSortDirection>0;
	get sortDirection(): ColumnSortDirection {
		return this._sortDirection;
	}
	set sortDirection(value: ColumnSortDirection) {
		let oldValue = this._sortDirection;
		this._sortDirection = value;
		if (this._sortDirection != oldValue) {
			this.onPropertyChanged(CellModel.sortDirectionPropertyName, CellModel.sortDirectionPropertyId, enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, oldValue), enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, this._sortDirection));
		}
	}
	static readonly isExpandedPropertyName: string = "IsExpanded";
	static readonly isExpandedPropertyId: number = CellModel.getCellModelPropertyId(CellModel.isExpandedPropertyName);
	private _isExpanded: boolean = false;
	get isExpanded(): boolean {
		return this._isExpanded;
	}
	set isExpanded(value: boolean) {
		let oldValue = this._isExpanded;
		this._isExpanded = value;
		if (this._isExpanded != oldValue) {
			this.onPropertyChanged(CellModel.isExpandedPropertyName, CellModel.isExpandedPropertyId, oldValue, this._isExpanded);
		}
	}
	static readonly isCollapsablePropertyName: string = "IsCollapsable";
	static readonly isCollapsablePropertyId: number = CellModel.getCellModelPropertyId(CellModel.isCollapsablePropertyName);
	private _isCollapsable: boolean = false;
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		let oldValue = this._isCollapsable;
		this._isCollapsable = value;
		if (this._isCollapsable != oldValue) {
			this.onPropertyChanged(CellModel.isCollapsablePropertyName, CellModel.isCollapsablePropertyId, oldValue, this._isCollapsable);
		}
	}
	static readonly pinnedPropertyName: string = "Pinned";
	static readonly pinnedPropertyId: number = CellModel.getCellModelPropertyId(CellModel.pinnedPropertyName);
	private _pinned: PinnedPositions = PinnedPositions.None;
	get pinned(): PinnedPositions {
		return this._pinned;
	}
	set pinned(value: PinnedPositions) {
		let oldValue = this._pinned;
		this._pinned = value;
		if (this._pinned != oldValue) {
			this.onPropertyChanged(CellModel.pinnedPropertyName, CellModel.pinnedPropertyId, enumGetBox<PinnedPositions>(PinnedPositions_$type, oldValue), enumGetBox<PinnedPositions>(PinnedPositions_$type, this._pinned));
		}
	}
	private _zVersion: number = 0;
	get zVersion(): number {
		return this._zVersion;
	}
	set zVersion(value: number) {
		this._zVersion = value;
	}
	cleanDirtyFlags(): void {
		this.cleanDirtyFlagsOverride();
	}
	protected cleanDirtyFlagsOverride(): void {
		this.isPositionDirty = false;
		this.isSizeDirty = false;
		this.isContentDirty = false;
		this.isBorderDirty = false;
		this.isLayerDirty = false;
		this.isStateDirty = false;
		this.isDataDirty = false;
		this.clearDirty();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new CellModelExport();
		}
		$export.x = this.x;
		$export.y = this.y;
		$export.snappedX = this.snappedX;
		$export.snappedY = this.snappedY;
		$export.height = this.height;
		$export.width = this.width;
		$export.selectedStatus = this.selectedStatus;
		$export.activationStatus = this.activationStatus;
		$export.lineBreakMode = EnumUtil.getName<TextCellLineBreakMode>(TextCellLineBreakMode_$type, this.lineBreakMode);
		$export.backgroundBrushData = AppearanceHelper.fromBrushExtended(this.actualBackground);
		$export.opacity = this.actualOpacity;
		$export.indent = this.indent;
		$export.isCollapsable = this.isCollapsable;
		$export.horizontalAlignment = <CellContentHorizontalAlignment>this.horizontalAlignment;
		$export.verticalAlignment = <CellContentVerticalAlignment>this.verticalAlignment;
		$export.renderValue = this.renderValue;
		$export.virtualizationPercentage = this.virtualizationPercentage;
		$export.sortDirection = <ColumnSortDirection>this.sortDirection;
		$export.textColor = AppearanceHelper.fromBrushExtended(this.textColor);
		if (this.fontInfo != null) {
			let fi = this.fontInfo;
			if (this.owner != null && fi.fontFamily == null) {
				let ren: DomRenderer = this.owner.externalGrid.renderer;
				let tfi = FontUtil.getFontInfoFromString(ren, fi.fontString);
				fi.fontFamily = tfi.fontFamily;
				fi.fontSize = tfi.fontSize;
				fi.fontStretch = tfi.fontStretch;
				fi.fontStyle = tfi.fontStyle;
				fi.fontVariant = tfi.fontVariant;
				fi.fontWeight = tfi.fontWeight;
			}
			if (this.fontInfo.fontFamily != null) {
				$export.fontFamily = this.fontInfo.fontFamily;
			}
			if (!isNaN_(this.fontInfo.fontSize)) {
				$export.fontSize = this.fontInfo.fontSize;
			}
			if (this.fontInfo.fontWeight != null) {
				$export.fontWeight = this.fontInfo.fontWeight;
			}
			if (this.fontInfo.fontStyle != null) {
				$export.fontStyle = this.fontInfo.fontStyle;
			}
			if (this.fontInfo.fontStretch != null) {
				$export.fontStretch = this.fontInfo.fontStyle;
			}
		}
		return $export;
	}
	private static _setterMap: Dictionary$2<string, (arg1: CellModel, arg2: any) => void> = null;
	protected ensureSetterMap(): void {
		if (CellModel._setterMap == null) {
			CellModel._setterMap = new Dictionary$2<string, (arg1: CellModel, arg2: any) => void>(String_$type, Delegate_$type, 0);
			CellModel._setterMap.addItem(CellModel.xPropertyName, (c: CellModel, o: any) => c.x = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.yPropertyName, (c: CellModel, o: any) => c.y = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.snappedXPropertyName, (c: CellModel, o: any) => c.snappedX = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.snappedYPropertyName, (c: CellModel, o: any) => c.snappedY = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.contentOpacityPropertyName, (c: CellModel, o: any) => c.contentOpacity = <number>o);
			CellModel._setterMap.addItem(CellModel.opacityPropertyName, (c: CellModel, o: any) => c.opacity = <number>o);
			CellModel._setterMap.addItem(CellModel.leftOffsetPropertyName, (c: CellModel, o: any) => c.leftOffset = <number>o);
			CellModel._setterMap.addItem(CellModel.leftPercentOffsetPropertyName, (c: CellModel, o: any) => c.leftPercentOffset = <number>o);
			CellModel._setterMap.addItem(CellModel.topOffsetPropertyName, (c: CellModel, o: any) => c.topOffset = <number>o);
			CellModel._setterMap.addItem(CellModel.topPercentOffsetPropertyName, (c: CellModel, o: any) => c.topPercentOffset = <number>o);
			CellModel._setterMap.addItem(CellModel.heightPropertyName, (c: CellModel, o: any) => c.height = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.widthPropertyName, (c: CellModel, o: any) => c.width = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.isSelectedPropertyName, (c: CellModel, o: any) => c.isSelected = <boolean>o);
			CellModel._setterMap.addItem(CellModel.modelTypePropertyName, (c: CellModel, o: any) => c.modelType = EnumUtil.getEnumValue<ModelTypes>(ModelTypes_$type, o));
			CellModel._setterMap.addItem(CellModel.selectedStatusPropertyName, (c: CellModel, o: any) => c.selectedStatus = <number>o);
			CellModel._setterMap.addItem(CellModel.activationStatusPropertyName, (c: CellModel, o: any) => c.activationStatus = <number>o);
			CellModel._setterMap.addItem(CellModel.horizontalAlignmentPropertyName, (c: CellModel, o: any) => c.horizontalAlignment = EnumUtil.getEnumValue<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, o));
			CellModel._setterMap.addItem(CellModel.verticalAlignmentPropertyName, (c: CellModel, o: any) => c.verticalAlignment = EnumUtil.getEnumValue<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, o));
			CellModel._setterMap.addItem(CellModel.backgroundPropertyName, (c: CellModel, o: any) => c.background = <Brush>o);
			CellModel._setterMap.addItem(CellModel.borderPropertyName, (c: CellModel, o: any) => c.border = <Brush>o);
			CellModel._setterMap.addItem(CellModel.activationBorderPropertyName, (c: CellModel, o: any) => c.activationBorder = <Brush>o);
			CellModel._setterMap.addItem(CellModel.selectedBackgroundPropertyName, (c: CellModel, o: any) => c.selectedBackground = <Brush>o);
			CellModel._setterMap.addItem(CellModel.renderValuePropertyName, (c: CellModel, o: any) => c.renderValue = <string>o);
			CellModel._setterMap.addItem(CellModel.originalValuePropertyName, (c: CellModel, o: any) => c.originalValue = o);
			CellModel._setterMap.addItem(CellModel.textColorPropertyName, (c: CellModel, o: any) => c.textColor = <Brush>o);
			CellModel._setterMap.addItem(CellModel.sortIndicatorColorPropertyName, (c: CellModel, o: any) => c.sortIndicatorColor = <Brush>o);
			CellModel._setterMap.addItem(CellModel.fontInfoPropertyName, (c: CellModel, o: any) => c.fontInfo = <FontInfo>o);
			CellModel._setterMap.addItem(CellModel.lineBreakModePropertyName, (c: CellModel, o: any) => c.lineBreakMode = EnumUtil.getEnumValue<TextCellLineBreakMode>(TextCellLineBreakMode_$type, o));
			CellModel._setterMap.addItem(CellModel.virtualizationPercentagePropertyName, (c: CellModel, o: any) => c.virtualizationPercentage = <number>o);
			CellModel._setterMap.addItem(CellModel.paddingLeftPropertyName, (c: CellModel, o: any) => c.paddingLeft = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.paddingTopPropertyName, (c: CellModel, o: any) => c.paddingTop = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.paddingRightPropertyName, (c: CellModel, o: any) => c.paddingRight = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.paddingBottomPropertyName, (c: CellModel, o: any) => c.paddingBottom = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.borderLeftWidthPropertyName, (c: CellModel, o: any) => c.borderLeftWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.borderTopWidthPropertyName, (c: CellModel, o: any) => c.borderTopWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.borderRightWidthPropertyName, (c: CellModel, o: any) => c.borderRightWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.borderBottomWidthPropertyName, (c: CellModel, o: any) => c.borderBottomWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.activationBorderLeftWidthPropertyName, (c: CellModel, o: any) => c.activationBorderLeftWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.activationBorderTopWidthPropertyName, (c: CellModel, o: any) => c.activationBorderTopWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.activationBorderRightWidthPropertyName, (c: CellModel, o: any) => c.activationBorderRightWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.activationBorderBottomWidthPropertyName, (c: CellModel, o: any) => c.activationBorderBottomWidth = typeGetValue(o));
			CellModel._setterMap.addItem(CellModel.sortDirectionPropertyName, (c: CellModel, o: any) => c.sortDirection = EnumUtil.getEnumValue<ColumnSortDirection>(ColumnSortDirection_$type, o));
			CellModel._setterMap.addItem(CellModel.pinnedRowBackgroundPropertyName, (c: CellModel, o: any) => c.pinnedRowBackground = <Brush>o);
			CellModel._setterMap.addItem(CellModel.stickyRowBackgroundPropertyName, (c: CellModel, o: any) => c.stickyRowBackground = <Brush>o);
			CellModel._setterMap.addItem(CellModel.lastStickyRowBackgroundPropertyName, (c: CellModel, o: any) => c.lastStickyRowBackground = <Brush>o);
			CellModel._setterMap.addItem(CellModel.pinnedRowOpacityPropertyName, (c: CellModel, o: any) => c.pinnedRowOpacity = <number>o);
			CellModel._setterMap.addItem(CellModel.pinnedPropertyName, (c: CellModel, o: any) => c.pinned = EnumUtil.getEnumValue<PinnedPositions>(PinnedPositions_$type, o));
		}
	}
	private static _getterMap: Dictionary$2<string, (arg1: CellModel) => any> = null;
	protected ensureGetterMap(): void {
		if (CellModel._getterMap == null) {
			CellModel._getterMap = new Dictionary$2<string, (arg1: CellModel) => any>(String_$type, Delegate_$type, 0);
			CellModel._getterMap.addItem(CellModel.xPropertyName, (c: CellModel) => c.x);
			CellModel._getterMap.addItem(CellModel.yPropertyName, (c: CellModel) => c.y);
			CellModel._getterMap.addItem(CellModel.snappedXPropertyName, (c: CellModel) => c.snappedX);
			CellModel._getterMap.addItem(CellModel.snappedYPropertyName, (c: CellModel) => c.snappedY);
			CellModel._getterMap.addItem(CellModel.contentOpacityPropertyName, (c: CellModel) => c.contentOpacity);
			CellModel._getterMap.addItem(CellModel.opacityPropertyName, (c: CellModel) => c.opacity);
			CellModel._getterMap.addItem(CellModel.leftOffsetPropertyName, (c: CellModel) => c.leftOffset);
			CellModel._getterMap.addItem(CellModel.leftPercentOffsetPropertyName, (c: CellModel) => c.leftPercentOffset);
			CellModel._getterMap.addItem(CellModel.topOffsetPropertyName, (c: CellModel) => c.topOffset);
			CellModel._getterMap.addItem(CellModel.topPercentOffsetPropertyName, (c: CellModel) => c.topPercentOffset);
			CellModel._getterMap.addItem(CellModel.heightPropertyName, (c: CellModel) => c.height);
			CellModel._getterMap.addItem(CellModel.widthPropertyName, (c: CellModel) => c.width);
			CellModel._getterMap.addItem(CellModel.isSelectedPropertyName, (c: CellModel) => c.isSelected);
			CellModel._getterMap.addItem(CellModel.modelTypePropertyName, (c: CellModel) => enumGetBox<ModelTypes>(ModelTypes_$type, c.modelType));
			CellModel._getterMap.addItem(CellModel.selectedStatusPropertyName, (c: CellModel) => c.selectedStatus);
			CellModel._getterMap.addItem(CellModel.activationStatusPropertyName, (c: CellModel) => c.activationStatus);
			CellModel._getterMap.addItem(CellModel.horizontalAlignmentPropertyName, (c: CellModel) => enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, c.horizontalAlignment));
			CellModel._getterMap.addItem(CellModel.verticalAlignmentPropertyName, (c: CellModel) => enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, c.verticalAlignment));
			CellModel._getterMap.addItem(CellModel.backgroundPropertyName, (c: CellModel) => c.background);
			CellModel._getterMap.addItem(CellModel.borderPropertyName, (c: CellModel) => c.border);
			CellModel._getterMap.addItem(CellModel.activationBorderPropertyName, (c: CellModel) => c.activationBorder);
			CellModel._getterMap.addItem(CellModel.selectedBackgroundPropertyName, (c: CellModel) => c.selectedBackground);
			CellModel._getterMap.addItem(CellModel.renderValuePropertyName, (c: CellModel) => c.renderValue);
			CellModel._getterMap.addItem(CellModel.originalValuePropertyName, (c: CellModel) => c.originalValue);
			CellModel._getterMap.addItem(CellModel.textColorPropertyName, (c: CellModel) => c.textColor);
			CellModel._getterMap.addItem(CellModel.sortIndicatorColorPropertyName, (c: CellModel) => c.sortIndicatorColor);
			CellModel._getterMap.addItem(CellModel.fontInfoPropertyName, (c: CellModel) => c.fontInfo);
			CellModel._getterMap.addItem(CellModel.lineBreakModePropertyName, (c: CellModel) => enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, c.lineBreakMode));
			CellModel._getterMap.addItem(CellModel.virtualizationPercentagePropertyName, (c: CellModel) => c.virtualizationPercentage);
			CellModel._getterMap.addItem(CellModel.paddingLeftPropertyName, (c: CellModel) => c.paddingLeft);
			CellModel._getterMap.addItem(CellModel.paddingTopPropertyName, (c: CellModel) => c.paddingTop);
			CellModel._getterMap.addItem(CellModel.paddingRightPropertyName, (c: CellModel) => c.paddingRight);
			CellModel._getterMap.addItem(CellModel.paddingBottomPropertyName, (c: CellModel) => c.paddingBottom);
			CellModel._getterMap.addItem(CellModel.borderLeftWidthPropertyName, (c: CellModel) => c.borderLeftWidth);
			CellModel._getterMap.addItem(CellModel.borderTopWidthPropertyName, (c: CellModel) => c.borderTopWidth);
			CellModel._getterMap.addItem(CellModel.borderRightWidthPropertyName, (c: CellModel) => c.borderRightWidth);
			CellModel._getterMap.addItem(CellModel.borderBottomWidthPropertyName, (c: CellModel) => c.borderBottomWidth);
			CellModel._getterMap.addItem(CellModel.activationBorderLeftWidthPropertyName, (c: CellModel) => c.activationBorderLeftWidth);
			CellModel._getterMap.addItem(CellModel.activationBorderTopWidthPropertyName, (c: CellModel) => c.activationBorderTopWidth);
			CellModel._getterMap.addItem(CellModel.activationBorderRightWidthPropertyName, (c: CellModel) => c.activationBorderRightWidth);
			CellModel._getterMap.addItem(CellModel.activationBorderBottomWidthPropertyName, (c: CellModel) => c.activationBorderBottomWidth);
			CellModel._getterMap.addItem(CellModel.sortDirectionPropertyName, (c: CellModel) => enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, c.sortDirection));
			CellModel._getterMap.addItem(CellModel.pinnedRowBackgroundPropertyName, (c: CellModel) => c.pinnedRowBackground);
			CellModel._getterMap.addItem(CellModel.stickyRowBackgroundPropertyName, (c: CellModel) => c.stickyRowBackground);
			CellModel._getterMap.addItem(CellModel.lastStickyRowBackgroundPropertyName, (c: CellModel) => c.lastStickyRowBackground);
			CellModel._getterMap.addItem(CellModel.pinnedRowOpacityPropertyName, (c: CellModel) => c.pinnedRowOpacity);
			CellModel._getterMap.addItem(CellModel.pinnedPropertyName, (c: CellModel) => enumGetBox<PinnedPositions>(PinnedPositions_$type, c.pinned));
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		this.ensureSetterMap();
		if (CellModel._setterMap.containsKey(propertyName)) {
			CellModel._setterMap.item(propertyName)(this, value);
		} else {
			this.setNamedValue(propertyName, value);
		}
	}
	getPropertyValue(propertyName: string): any {
		this.ensureGetterMap();
		if (CellModel._getterMap.containsKey(propertyName)) {
			return CellModel._getterMap.item(propertyName)(this);
		}
		if (this.hasNamedValue(propertyName)) {
			return this.getNamedValue(propertyName);
		}
		return null;
	}
	cellReconciling: (model: CellModel) => void = null;
	isRowTypeCompatible(rowType: DataSourceRowType): boolean {
		return (rowType != DataSourceRowType.SectionHeader || (rowType == DataSourceRowType.SectionHeader && this._owner.groupSummaryDisplayMode == GroupSummaryDisplayMode.Cells)) && rowType != DataSourceRowType.SectionFooter && rowType != DataSourceRowType.SummaryRowRoot && rowType != DataSourceRowType.SummaryRowSection;
	}
}

/**
 * @hidden 
 */
export class DateTimeCellModel extends CellModel {
	static $t: Type = markType(DateTimeCellModel, 'DateTimeCellModel', (<any>CellModel).$type);
	constructor() {
		super();
		this.dateTimeValue = dateMinValue();
		this.markDirty(DateTimeCellModel.dateTimeValuePropertyId);
	}
	static readonly dateTimeValuePropertyName: string = "DateTimeValue";
	static readonly dateTimeValuePropertyId: number = CellModel.getCellModelPropertyId(DateTimeCellModel.dateTimeValuePropertyName);
	private _dateTimeValue: Date = new Date();
	get dateTimeValue(): Date {
		return this._dateTimeValue;
	}
	set dateTimeValue(value: Date) {
		let oldValue = this._dateTimeValue;
		this._dateTimeValue = value;
		if (+(this._dateTimeValue) != +oldValue) {
			this.onPropertyChanged(DateTimeCellModel.dateTimeValuePropertyName, DateTimeCellModel.dateTimeValuePropertyId, oldValue, this._dateTimeValue);
		}
	}
	private _intlOptions: any = null;
	static readonly formatOverridePropertyName: string = "FormatOverride";
	static readonly formatOverridePropertyId: number = CellModel.getCellModelPropertyId(DateTimeCellModel.formatOverridePropertyName);
	private _formatOverride: any = null;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		let oldValue = this._formatOverride;
		this._formatOverride = value;
		if (this._formatOverride != oldValue) {
			this.onPropertyChanged(DateTimeCellModel.formatOverridePropertyName, DateTimeCellModel.formatOverridePropertyId, oldValue, this._formatOverride);
		}
	}
	static readonly dateTimeFormatPropertyName: string = "DateTimeFormat";
	static readonly dateTimeFormatPropertyId: number = CellModel.getCellModelPropertyId(DateTimeCellModel.dateTimeFormatPropertyName);
	private _dateTimeFormat: DateTimeFormats = <DateTimeFormats>0;
	get dateTimeFormat(): DateTimeFormats {
		return this._dateTimeFormat;
	}
	set dateTimeFormat(value: DateTimeFormats) {
		let oldValue = this._dateTimeFormat;
		this._dateTimeFormat = value;
		if (this._dateTimeFormat != oldValue) {
			this.onPropertyChanged(DateTimeCellModel.dateTimeFormatPropertyName, DateTimeCellModel.dateTimeFormatPropertyId, enumGetBox<DateTimeFormats>(DateTimeFormats_$type, oldValue), enumGetBox<DateTimeFormats>(DateTimeFormats_$type, this._dateTimeFormat));
		}
	}
	format(date: Date): string {
		if (this._formatOverride != null) {
			let date_ = date;
			return <string>(this._formatOverride.format(date_));
		}
		this._formatter.ensureFormat(this);
		return this._formatter.formatDate(date);
	}
	static readonly formatterPropertyName: string = "Formatter";
	static readonly formatterPropertyId: number = CellModel.getCellModelPropertyId(DateTimeCellModel.formatterPropertyName);
	private _formatter: DateTimeColumnValueFormatter = null;
	get formatter(): DateTimeColumnValueFormatter {
		return this._formatter;
	}
	set formatter(value: DateTimeColumnValueFormatter) {
		let oldValue = this._formatter;
		this._formatter = value;
		if (this._formatter != oldValue) {
			this.onPropertyChanged(DateTimeCellModel.formatterPropertyName, DateTimeCellModel.formatterPropertyId, oldValue, this._formatter);
		}
	}
	static readonly isOffsetValuePropertyName: string = "IsOffsetValue";
	static readonly isOffsetValuePropertyId: number = CellModel.getCellModelPropertyId(DateTimeCellModel.isOffsetValuePropertyName);
	private _isOffsetValue: boolean = false;
	get isOffsetValue(): boolean {
		return this._isOffsetValue;
	}
	set isOffsetValue(value: boolean) {
		let oldValue = this._isOffsetValue;
		this._isOffsetValue = value;
		if (this._isOffsetValue != oldValue) {
			this.onPropertyChanged(DateTimeCellModel.isOffsetValuePropertyName, DateTimeCellModel.isOffsetValuePropertyId, oldValue, this._isOffsetValue);
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == DateTimeCellModel.dateTimeFormatPropertyName) {
			this.dateTimeFormat = EnumUtil.getEnumValue<DateTimeFormats>(DateTimeFormats_$type, value);
		}
		if (propertyName == DateTimeCellModel.dateTimeValuePropertyName) {
			this.dateTimeValue = <Date>value;
		}
		if (propertyName == DateTimeCellModel.isOffsetValuePropertyName) {
			this.isOffsetValue = <boolean>value;
		}
		if (propertyName == DateTimeCellModel.formatOverridePropertyName) {
			this.formatOverride = value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == DateTimeCellModel.dateTimeFormatPropertyName) {
			return enumGetBox<DateTimeFormats>(DateTimeFormats_$type, this.dateTimeFormat);
		}
		if (propertyName == DateTimeCellModel.dateTimeValuePropertyName) {
			return this.dateTimeValue;
		}
		if (propertyName == DateTimeCellModel.isOffsetValuePropertyName) {
			return this.isOffsetValue;
		}
		if (propertyName == DateTimeCellModel.formatOverridePropertyName) {
			return this.formatOverride;
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new DateTimeCellModelExport();
		}
		$export = super.createModelExport($export);
		let dateTimeExport = <DateTimeCellModelExport>$export;
		dateTimeExport.dateTimeValue = this.dateTimeValue;
		dateTimeExport.dateTimeFormat = <number>this.dateTimeFormat;
		dateTimeExport.isOffsetValue = this.isOffsetValue;
		return dateTimeExport;
	}
}

/**
 * @hidden 
 */
export class SummaryCellModel extends CellModel {
	static $t: Type = markType(SummaryCellModel, 'SummaryCellModel', (<any>CellModel).$type);
	static readonly resolvedSummaryTextPropertyName: string = "ResolvedSummaryText";
	static readonly resolvedSummaryTextPropertyId: number = CellModel.getCellModelPropertyId(SummaryCellModel.resolvedSummaryTextPropertyName);
	private _resolvedSummaryText: string = null;
	get resolvedSummaryText(): string {
		return this._resolvedSummaryText;
	}
	set resolvedSummaryText(value: string) {
		let oldValue = this._resolvedSummaryText;
		this._resolvedSummaryText = value;
		if (this._resolvedSummaryText != oldValue) {
			this.onPropertyChanged(SummaryCellModel.resolvedSummaryTextPropertyName, SummaryCellModel.resolvedSummaryTextPropertyId, oldValue, this._resolvedSummaryText);
		}
	}
	static readonly resolvedSummaryValuePropertyName: string = "ResolvedSummaryValue";
	static readonly resolvedSummaryValuePropertyId: number = CellModel.getCellModelPropertyId(SummaryCellModel.resolvedSummaryValuePropertyName);
	private _resolvedSummaryValue: string = null;
	get resolvedSummaryValue(): string {
		return this._resolvedSummaryValue;
	}
	set resolvedSummaryValue(value: string) {
		let oldValue = this._resolvedSummaryValue;
		this._resolvedSummaryValue = value;
		if (this._resolvedSummaryValue != oldValue) {
			this.onPropertyChanged(SummaryCellModel.resolvedSummaryValuePropertyName, SummaryCellModel.resolvedSummaryValuePropertyId, oldValue, this._resolvedSummaryValue);
		}
	}
	static readonly summaryNameTextColorPropertyName: string = "SummaryNameTextColor";
	static readonly summaryNameTextColorPropertyId: number = CellModel.getCellModelPropertyId(SummaryCellModel.summaryNameTextColorPropertyName);
	private _summaryNameTextColor: Brush = null;
	get summaryNameTextColor(): Brush {
		return this._summaryNameTextColor;
	}
	set summaryNameTextColor(value: Brush) {
		let oldValue = this._summaryNameTextColor;
		this._summaryNameTextColor = value;
		if (this._summaryNameTextColor != oldValue) {
			this.onPropertyChanged(SummaryCellModel.summaryNameTextColorPropertyName, SummaryCellModel.summaryNameTextColorPropertyId, oldValue, this._summaryNameTextColor);
		}
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new SummaryCellModelExport();
		}
		$export = super.createModelExport($export);
		let summaryCellExport = <SummaryCellModelExport>$export;
		summaryCellExport.summaryText = this.resolvedSummaryText;
		summaryCellExport.summaryValue = this.resolvedSummaryValue;
		return summaryCellExport;
	}
	isRowTypeCompatible(rowType: DataSourceRowType): boolean {
		return rowType == DataSourceRowType.SummaryRowRoot || rowType == DataSourceRowType.SummaryRowSection;
	}
}

/**
 * @hidden 
 */
export class VerticalSeparatorCellModel extends CellModel {
	static $t: Type = markType(VerticalSeparatorCellModel, 'VerticalSeparatorCellModel', (<any>CellModel).$type);
	constructor() {
		super();
	}
	static readonly isHitTestVisiblePropertyName: string = "IsHitTestVisible";
	static readonly isHitTestVisiblePropertyId: number = CellModel.getCellModelPropertyId(VerticalSeparatorCellModel.isHitTestVisiblePropertyName);
	private _isHitTestVisible: boolean = true;
	get isHitTestVisible(): boolean {
		return this._isHitTestVisible;
	}
	set isHitTestVisible(value: boolean) {
		let oldValue = this._isHitTestVisible;
		this._isHitTestVisible = value;
		if (oldValue != this._isHitTestVisible) {
			this.onPropertyChanged(VerticalSeparatorCellModel.isHitTestVisiblePropertyName, VerticalSeparatorCellModel.isHitTestVisiblePropertyId, oldValue, this._isHitTestVisible);
		}
	}
}

/**
 * @hidden 
 */
export class ImageCellModel extends CellModel {
	static $t: Type = markType(ImageCellModel, 'ImageCellModel', (<any>CellModel).$type);
	constructor() {
		super();
		this.horizontalAlignment = CellContentHorizontalAlignment.Stretch;
	}
	static readonly imagePathPropertyName: string = "ImagePath";
	static readonly imagePathPropertyId: number = CellModel.getCellModelPropertyId(ImageCellModel.imagePathPropertyName);
	private _imagePath: string = "";
	get imagePath(): string {
		return this._imagePath;
	}
	set imagePath(value: string) {
		let oldValue = this._imagePath;
		this._imagePath = value;
		if (this._imagePath != oldValue) {
			this.onPropertyChanged(ImageCellModel.imagePathPropertyName, ImageCellModel.imagePathPropertyId, oldValue, this._imagePath);
		}
	}
	static readonly imageStretchOptionPropertyName: string = "ImageStretchOption";
	static readonly imageStretchOptionPropertyId: number = CellModel.getCellModelPropertyId(ImageCellModel.imageStretchOptionPropertyName);
	private _imageStretchOption: ImageStretchOptions = ImageStretchOptions.Uniform;
	get imageStretchOption(): ImageStretchOptions {
		return this._imageStretchOption;
	}
	set imageStretchOption(value: ImageStretchOptions) {
		let oldValue = this._imageStretchOption;
		this._imageStretchOption = value;
		if (this._imageStretchOption != oldValue) {
			this.onPropertyChanged(ImageCellModel.imageStretchOptionPropertyName, ImageCellModel.imageStretchOptionPropertyId, enumGetBox<ImageStretchOptions>(ImageStretchOptions_$type, oldValue), enumGetBox<ImageStretchOptions>(ImageStretchOptions_$type, this._imageStretchOption));
		}
	}
	static readonly imageResourceTypePropertyName: string = "ImageResourceType";
	static readonly imageResourceTypePropertyId: number = CellModel.getCellModelPropertyId(ImageCellModel.imageResourceTypePropertyName);
	private _imageResourceType: ImageResourceType = ImageResourceType.Unspecified;
	get imageResourceType(): ImageResourceType {
		return this._imageResourceType;
	}
	set imageResourceType(value: ImageResourceType) {
		let oldValue = this._imageResourceType;
		this._imageResourceType = value;
		if (this._imageResourceType != oldValue) {
			this.onPropertyChanged(ImageCellModel.imageResourceTypePropertyName, ImageCellModel.imageResourceTypePropertyId, enumGetBox<ImageResourceType>(ImageResourceType_$type, oldValue), enumGetBox<ImageResourceType>(ImageResourceType_$type, this._imageResourceType));
		}
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new ImageCellModelExport();
		}
		$export = super.createModelExport($export);
		let imageExport = <ImageCellModelExport>$export;
		imageExport.imagePath = this.imagePath;
		return imageExport;
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == ImageCellModel.imageStretchOptionPropertyName) {
			this.imageStretchOption = EnumUtil.getEnumValue<ImageStretchOptions>(ImageStretchOptions_$type, value);
		}
		if (propertyName == ImageCellModel.imageResourceTypePropertyName) {
			this.imageResourceType = EnumUtil.getEnumValue<ImageResourceType>(ImageResourceType_$type, value);
		}
		if (propertyName == ImageCellModel.imagePathPropertyName) {
			this.imagePath = <string>value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == ImageCellModel.imageStretchOptionPropertyName) {
			return enumGetBox<ImageStretchOptions>(ImageStretchOptions_$type, this.imageStretchOption);
		}
		if (propertyName == ImageCellModel.imageResourceTypePropertyName) {
			return enumGetBox<ImageResourceType>(ImageResourceType_$type, this.imageResourceType);
		}
		if (propertyName == ImageCellModel.imagePathPropertyName) {
			return this.imagePath;
		}
		return super.getPropertyValue(propertyName);
	}
}

/**
 * @hidden 
 */
export class NumericCellModel extends CellModel {
	static $t: Type = markType(NumericCellModel, 'NumericCellModel', (<any>CellModel).$type);
	constructor() {
		super();
		this.horizontalAlignment = CellContentHorizontalAlignment.Right;
	}
	static readonly numericValuePropertyName: string = "NumericValue";
	static readonly numericValuePropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.numericValuePropertyName);
	private _numericValue: number = NaN;
	get numericValue(): number {
		return this._numericValue;
	}
	set numericValue(value: number) {
		let oldValue = this._numericValue;
		this._numericValue = value;
		if (this._numericValue != oldValue) {
			this.onPropertyChanged(NumericCellModel.numericValuePropertyName, NumericCellModel.numericValuePropertyId, oldValue, this._numericValue);
		}
	}
	static readonly hasDecimalValuePropertyName: string = "HasDecimalValue";
	static readonly hasDecimalValuePropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.hasDecimalValuePropertyName);
	private _hasDecimalValue: boolean = false;
	get hasDecimalValue(): boolean {
		return this._hasDecimalValue;
	}
	set hasDecimalValue(value: boolean) {
		let oldValue = this._hasDecimalValue;
		this._hasDecimalValue = value;
		if (this._hasDecimalValue != oldValue) {
			this.onPropertyChanged(NumericCellModel.hasDecimalValuePropertyName, NumericCellModel.hasDecimalValuePropertyId, oldValue, this._hasDecimalValue);
		}
	}
	private _intlOptions: any = null;
	static readonly formatOverridePropertyName: string = "FormatOverride";
	static readonly formatOverridePropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.formatOverridePropertyName);
	private _formatOverride: any = null;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		let oldValue = this._formatOverride;
		this._formatOverride = value;
		if (this._formatOverride != oldValue) {
			this.onPropertyChanged(NumericCellModel.formatOverridePropertyName, NumericCellModel.formatOverridePropertyId, oldValue, this._formatOverride);
		}
	}
	static readonly negativePrefixPropertyName: string = "NegativePrefix";
	static readonly negativePrefixPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.negativePrefixPropertyName);
	private _negativePrefix: string = null;
	get negativePrefix(): string {
		return this._negativePrefix;
	}
	set negativePrefix(value: string) {
		let oldValue = this._negativePrefix;
		this._negativePrefix = value;
		if (this._negativePrefix != oldValue) {
			this.onPropertyChanged(NumericCellModel.negativePrefixPropertyName, NumericCellModel.negativePrefixPropertyId, oldValue, this._negativePrefix);
		}
	}
	static readonly positivePrefixPropertyName: string = "PositivePrefix";
	static readonly positivePrefixPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.positivePrefixPropertyName);
	private _positivePrefix: string = null;
	get positivePrefix(): string {
		return this._positivePrefix;
	}
	set positivePrefix(value: string) {
		let oldValue = this._positivePrefix;
		this._positivePrefix = value;
		if (this._positivePrefix != oldValue) {
			this.onPropertyChanged(NumericCellModel.positivePrefixPropertyName, NumericCellModel.positivePrefixPropertyId, oldValue, this._positivePrefix);
		}
	}
	static readonly negativeSuffixPropertyName: string = "NegativeSuffix";
	static readonly negativeSuffixPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.negativeSuffixPropertyName);
	private _negativeSuffix: string = null;
	get negativeSuffix(): string {
		return this._negativeSuffix;
	}
	set negativeSuffix(value: string) {
		let oldValue = this._negativeSuffix;
		this._negativeSuffix = value;
		if (this._negativeSuffix != oldValue) {
			this.onPropertyChanged(NumericCellModel.negativeSuffixPropertyName, NumericCellModel.negativeSuffixPropertyId, oldValue, this._negativeSuffix);
		}
	}
	static readonly positiveSuffixPropertyName: string = "PositiveSuffix";
	static readonly positiveSuffixPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.positiveSuffixPropertyName);
	private _positiveSuffix: string = "";
	get positiveSuffix(): string {
		return this._positiveSuffix;
	}
	set positiveSuffix(value: string) {
		let oldValue = this._positiveSuffix;
		this._positiveSuffix = value;
		if (this._positiveSuffix != oldValue) {
			this.onPropertyChanged(NumericCellModel.positiveSuffixPropertyName, NumericCellModel.positiveSuffixPropertyId, oldValue, this._positiveSuffix);
		}
	}
	static readonly maxFractionDigitsPropertyName: string = "MaxFractionDigits";
	static readonly maxFractionDigitsPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.maxFractionDigitsPropertyName);
	private _maxFractionDigits: number = 5;
	get maxFractionDigits(): number {
		return this._maxFractionDigits;
	}
	set maxFractionDigits(value: number) {
		let oldValue = this._maxFractionDigits;
		this._maxFractionDigits = value;
		if (this._maxFractionDigits != oldValue) {
			this.onPropertyChanged(NumericCellModel.maxFractionDigitsPropertyName, NumericCellModel.maxFractionDigitsPropertyId, oldValue, this._maxFractionDigits);
		}
	}
	static readonly minFractionDigitsPropertyName: string = "MinFractionDigits";
	static readonly minFractionDigitsPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.minFractionDigitsPropertyName);
	private _minFractionDigits: number = 0;
	get minFractionDigits(): number {
		return this._minFractionDigits;
	}
	set minFractionDigits(value: number) {
		let oldValue = this._minFractionDigits;
		this._minFractionDigits = value;
		if (this._minFractionDigits != oldValue) {
			this.onPropertyChanged(NumericCellModel.minFractionDigitsPropertyName, NumericCellModel.minFractionDigitsPropertyId, oldValue, this._minFractionDigits);
		}
	}
	static readonly minIntegerDigitsPropertyName: string = "MinIntegerDigits";
	static readonly minIntegerDigitsPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.minIntegerDigitsPropertyName);
	private _minIntegerDigits: number = -1;
	get minIntegerDigits(): number {
		return this._minIntegerDigits;
	}
	set minIntegerDigits(value: number) {
		let oldValue = this._minIntegerDigits;
		this._minIntegerDigits = value;
		if (this._minIntegerDigits != oldValue) {
			this.onPropertyChanged(NumericCellModel.minIntegerDigitsPropertyName, NumericCellModel.minIntegerDigitsPropertyId, oldValue, this._minIntegerDigits);
		}
	}
	static readonly showGroupingSeparatorPropertyName: string = "ShowGroupingSeparator";
	static readonly showGroupingSeparatorPropertyId: number = CellModel.getCellModelPropertyId(NumericCellModel.showGroupingSeparatorPropertyName);
	private _showGroupingSeparator: boolean = false;
	get showGroupingSeparator(): boolean {
		return this._showGroupingSeparator;
	}
	set showGroupingSeparator(value: boolean) {
		let oldValue = this._showGroupingSeparator;
		this._showGroupingSeparator = value;
		if (this._showGroupingSeparator != oldValue) {
			this.onPropertyChanged(NumericCellModel.showGroupingSeparatorPropertyName, NumericCellModel.showGroupingSeparatorPropertyId, oldValue, this._showGroupingSeparator);
		}
	}
	isFormatDirty(): boolean {
		if (this.isDirtyById(NumericCellModel.minFractionDigitsPropertyId) || this.isDirtyById(NumericCellModel.maxFractionDigitsPropertyId) || this.isDirtyById(NumericCellModel.minIntegerDigitsPropertyId) || this.isDirtyById(NumericCellModel.positiveSuffixPropertyId) || this.isDirtyById(NumericCellModel.negativeSuffixPropertyId) || this.isDirtyById(NumericCellModel.positivePrefixPropertyId) || this.isDirtyById(NumericCellModel.negativePrefixPropertyId) || this.isDirtyById(NumericCellModel.formatOverridePropertyId) || this.isDirtyById(NumericCellModel.showGroupingSeparatorPropertyId)) {
			return true;
		}
		return false;
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == NumericCellModel.numericValuePropertyName) {
			this.numericValue = <number>value;
		}
		if (propertyName == NumericCellModel.negativePrefixPropertyName) {
			this.negativePrefix = <string>value;
		}
		if (propertyName == NumericCellModel.positivePrefixPropertyName) {
			this.positivePrefix = <string>value;
		}
		if (propertyName == NumericCellModel.negativeSuffixPropertyName) {
			this.negativeSuffix = <string>value;
		}
		if (propertyName == NumericCellModel.positiveSuffixPropertyName) {
			this.positiveSuffix = <string>value;
		}
		if (propertyName == NumericCellModel.minFractionDigitsPropertyName) {
			this.minFractionDigits = typeGetValue(value);
		}
		if (propertyName == NumericCellModel.maxFractionDigitsPropertyName) {
			this.maxFractionDigits = typeGetValue(value);
		}
		if (propertyName == NumericCellModel.minIntegerDigitsPropertyName) {
			this.minIntegerDigits = typeGetValue(value);
		}
		if (propertyName == NumericCellModel.showGroupingSeparatorPropertyName) {
			this.showGroupingSeparator = <boolean>value;
		}
		if (propertyName == NumericCellModel.formatOverridePropertyName) {
			this.formatOverride = <any>value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == NumericCellModel.numericValuePropertyName) {
			return this.numericValue;
		}
		if (propertyName == NumericCellModel.negativePrefixPropertyName) {
			return this.negativePrefix;
		}
		if (propertyName == NumericCellModel.positivePrefixPropertyName) {
			return this.positivePrefix;
		}
		if (propertyName == NumericCellModel.negativeSuffixPropertyName) {
			return this.negativePrefix;
		}
		if (propertyName == NumericCellModel.positiveSuffixPropertyName) {
			return this.positiveSuffix;
		}
		if (propertyName == NumericCellModel.minFractionDigitsPropertyName) {
			return this.minFractionDigits;
		}
		if (propertyName == NumericCellModel.maxFractionDigitsPropertyName) {
			return this.maxFractionDigits;
		}
		if (propertyName == NumericCellModel.minIntegerDigitsPropertyName) {
			return this.minIntegerDigits;
		}
		if (propertyName == NumericCellModel.showGroupingSeparatorPropertyName) {
			return this.showGroupingSeparator;
		}
		if (propertyName == NumericCellModel.formatOverridePropertyName) {
			return this.formatOverride;
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new NumericCellModelExport();
		}
		$export = super.createModelExport($export);
		let numericExport = <NumericCellModelExport>$export;
		numericExport.numericValue = this.numericValue;
		return numericExport;
	}
}

/**
 * @hidden 
 */
export class RowSeparatorModel extends CellModel {
	static $t: Type = markType(RowSeparatorModel, 'RowSeparatorModel', (<any>CellModel).$type);
	constructor() {
		super();
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new RowSeparatorModelExport();
		}
		$export = super.createModelExport($export);
		return $export;
	}
}

/**
 * @hidden 
 */
export class SectionHeaderCellModel extends CellModel {
	static $t: Type = markType(SectionHeaderCellModel, 'SectionHeaderCellModel', (<any>CellModel).$type);
	static readonly groupsPropertyName: string = "Groups";
	static readonly groupsPropertyId: number = CellModel.getCellModelPropertyId(SectionHeaderCellModel.groupsPropertyName);
	private _groups: GroupData[] = null;
	get groups(): GroupData[] {
		return this._groups;
	}
	set groups(value: GroupData[]) {
		let oldValue = this._groups;
		this._groups = value;
		if (this._groups != oldValue) {
			this.onPropertyChanged(SectionHeaderCellModel.groupsPropertyName, SectionHeaderCellModel.groupsPropertyId, oldValue, this._groups);
		}
	}
	static readonly summariesPropertyName: string = "Summaries";
	static readonly summariesPropertyId: number = CellModel.getCellModelPropertyId(SectionHeaderCellModel.summariesPropertyName);
	private _summaries: SummaryData[] = null;
	get summaries(): SummaryData[] {
		return this._summaries;
	}
	set summaries(value: SummaryData[]) {
		let oldValue = this._summaries;
		this._summaries = value;
		if (this._summaries != oldValue) {
			this.onPropertyChanged(SectionHeaderCellModel.summariesPropertyName, SectionHeaderCellModel.summariesPropertyId, oldValue, this._summaries);
		}
	}
	static readonly resolvedTextPropertyName: string = "ResolvedText";
	static readonly resolvedTextPropertyId: number = CellModel.getCellModelPropertyId(SectionHeaderCellModel.resolvedTextPropertyName);
	private _resolvedText: string = null;
	get resolvedText(): string {
		return this._resolvedText;
	}
	set resolvedText(value: string) {
		let oldValue = this._resolvedText;
		this._resolvedText = value;
		if (this._resolvedText != oldValue) {
			this.onPropertyChanged(SectionHeaderCellModel.resolvedTextPropertyName, SectionHeaderCellModel.resolvedTextPropertyId, oldValue, this._resolvedText);
		}
	}
	static readonly resolvedSummaryTextPropertyName: string = "ResolvedSummaryText";
	static readonly resolvedSummaryTextPropertyId: number = CellModel.getCellModelPropertyId(SectionHeaderCellModel.resolvedSummaryTextPropertyName);
	private _resolvedSummaryText: string = null;
	get resolvedSummaryText(): string {
		return this._resolvedSummaryText;
	}
	set resolvedSummaryText(value: string) {
		let oldValue = this._resolvedSummaryText;
		this._resolvedSummaryText = value;
		if (this._resolvedSummaryText != oldValue) {
			this.onPropertyChanged(SectionHeaderCellModel.resolvedSummaryTextPropertyName, SectionHeaderCellModel.resolvedSummaryTextPropertyId, oldValue, this._resolvedSummaryText);
		}
	}
	static readonly summaryDisplayModePropertyName: string = "SummaryDisplayMode";
	static readonly summaryDisplayModePropertyId: number = CellModel.getCellModelPropertyId(SectionHeaderCellModel.summaryDisplayModePropertyName);
	private _summaryDisplayMode: GroupSummaryDisplayMode = GroupSummaryDisplayMode.None;
	get summaryDisplayMode(): GroupSummaryDisplayMode {
		return this._summaryDisplayMode;
	}
	set summaryDisplayMode(value: GroupSummaryDisplayMode) {
		let oldValue = this._summaryDisplayMode;
		this._summaryDisplayMode = value;
		if (this._summaryDisplayMode != oldValue) {
			this.onPropertyChanged(SectionHeaderCellModel.summaryDisplayModePropertyName, SectionHeaderCellModel.summaryDisplayModePropertyId, enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, oldValue), enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, this._summaryDisplayMode));
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == SectionHeaderCellModel.groupsPropertyName) {
			this.groups = <GroupData[]>value;
		} else if (propertyName == SectionHeaderCellModel.summaryDisplayModePropertyName) {
			this.summaryDisplayMode = EnumUtil.getEnumValue<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, value);
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == SectionHeaderCellModel.groupsPropertyName) {
			return this.groups;
		} else if (propertyName == CellModel.isCollapsablePropertyName) {
			return this.isCollapsable;
		} else if (propertyName == SectionHeaderCellModel.summaryDisplayModePropertyName) {
			return enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, this.summaryDisplayMode);
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new SectionHeaderCellModelExport();
		}
		$export = super.createModelExport($export);
		let sectionExport = <SectionHeaderCellModelExport>$export;
		sectionExport.groupNames = <string[]>new Array(this.groups.length);
		sectionExport.groupValues = <any[]>new Array(this.groups.length);
		sectionExport.groupFormattedText = <string[]>new Array(this.groups.length);
		sectionExport.formattedText = this.resolvedText;
		sectionExport.summaryNames = <string[]>new Array(this.summaries.length);
		sectionExport.summaryValues = <any[]>new Array(this.summaries.length);
		sectionExport.summaryOperands = <SummaryOperand[]>new Array(this.summaries.length);
		sectionExport.summaryFormattedText = <string[]>new Array(this.summaries.length);
		sectionExport.fullSummaryFormattedText = this.resolvedSummaryText;
		for (let i: number = 0; i < this.groups.length; i++) {
			sectionExport.groupNames[i] = this.groups[i].groupName;
			sectionExport.groupValues[i] = this.groups[i].groupValue;
			sectionExport.groupFormattedText[i] = this.groups[i].formattedText;
		}
		for (let i1: number = 0; i1 < this.summaries.length; i1++) {
			sectionExport.summaryNames[i1] = this.summaries[i1].summaryName;
			sectionExport.summaryValues[i1] = this.summaries[i1].summaryValue;
			sectionExport.summaryOperands[i1] = this.summaries[i1].summaryOperand;
			sectionExport.summaryFormattedText[i1] = this.summaries[i1].formattedText;
		}
		return sectionExport;
	}
	isRowTypeCompatible(rowType: DataSourceRowType): boolean {
		return rowType == DataSourceRowType.SectionHeader;
	}
}

/**
 * @hidden 
 */
export class TemplateCellModel extends CellModel {
	static $t: Type = markType(TemplateCellModel, 'TemplateCellModel', (<any>CellModel).$type);
	static readonly valuePropertyName: string = "Value";
	static readonly valuePropertyId: number = CellModel.getCellModelPropertyId(TemplateCellModel.valuePropertyName);
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		let oldValue = this._value;
		this._value = value;
		if (this._value != oldValue) {
			this.onPropertyChanged(TemplateCellModel.valuePropertyName, TemplateCellModel.valuePropertyId, oldValue, this._value);
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == TemplateCellModel.valuePropertyName) {
			this.value = <any>value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == TemplateCellModel.valuePropertyName) {
			return this.value;
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new TemplateCellModelExport();
		}
		$export = super.createModelExport($export);
		let templateExport = <TemplateCellModelExport>$export;
		templateExport.value = this.value;
		return templateExport;
	}
}

/**
 * @hidden 
 */
export class TextCellModel extends CellModel {
	static $t: Type = markType(TextCellModel, 'TextCellModel', (<any>CellModel).$type);
	static readonly textValuePropertyName: string = "TextValue";
	static readonly textValuePropertyId: number = CellModel.getCellModelPropertyId(TextCellModel.textValuePropertyName);
	private _textValue: string = "";
	get textValue(): string {
		return this._textValue;
	}
	set textValue(value: string) {
		let oldValue = this._textValue;
		this._textValue = value;
		if (this._textValue != oldValue) {
			this.onPropertyChanged(TextCellModel.textValuePropertyName, TextCellModel.textValuePropertyId, oldValue, this._textValue);
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == TextCellModel.textValuePropertyName) {
			this.textValue = <string>value;
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == TextCellModel.textValuePropertyName) {
			return this.textValue;
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new TextCellModelExport();
		}
		$export = super.createModelExport($export);
		let textExport = <TextCellModelExport>$export;
		textExport.textValue = this.textValue;
		return textExport;
	}
}

/**
 * @hidden 
 */
export class TextHeaderCellModel extends TextCellModel {
	static $t: Type = markType(TextHeaderCellModel, 'TextHeaderCellModel', (<any>TextCellModel).$type);
	constructor() {
		super();
	}
	static readonly isFilterUIVisiblePropertyName: string = "IsFilterUIVisible";
	static readonly isFilterUIVisiblePropertyId: number = CellModel.getCellModelPropertyId(TextHeaderCellModel.isFilterUIVisiblePropertyName);
	private _isFilterUIVisible: boolean = false;
	get isFilterUIVisible(): boolean {
		return this._isFilterUIVisible;
	}
	set isFilterUIVisible(value: boolean) {
		let oldValue = this._isFilterUIVisible;
		this._isFilterUIVisible = value;
		if (this._isFilterUIVisible != oldValue) {
			this.onPropertyChanged(TextHeaderCellModel.isFilterUIVisiblePropertyName, TextHeaderCellModel.isFilterUIVisiblePropertyId, oldValue, this._isFilterUIVisible);
		}
	}
	static readonly sortIndicatorStylePropertyName: string = "SortIndicatorStyle";
	static readonly sortIndicatorStylePropertyId: number = CellModel.getCellModelPropertyId(TextHeaderCellModel.sortIndicatorStylePropertyName);
	private _sortIndicatorStyle: SortIndicatorStyle = SortIndicatorStyle.Default;
	get sortIndicatorStyle(): SortIndicatorStyle {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: SortIndicatorStyle) {
		let oldValue = this._sortIndicatorStyle;
		this._sortIndicatorStyle = value;
		if (this._sortIndicatorStyle != oldValue) {
			this.onPropertyChanged(TextHeaderCellModel.sortIndicatorStylePropertyName, TextHeaderCellModel.sortIndicatorStylePropertyId, enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, oldValue), enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this._sortIndicatorStyle));
		}
	}
	setPropertyValue(propertyName: string, value: any): void {
		super.setPropertyValue(propertyName, value);
		if (propertyName == TextHeaderCellModel.isFilterUIVisiblePropertyName) {
			this.isFilterUIVisible = <boolean>value;
		} else if (propertyName == TextHeaderCellModel.sortIndicatorStylePropertyName) {
			this.sortIndicatorStyle = EnumUtil.getEnumValue<SortIndicatorStyle>(SortIndicatorStyle_$type, value);
		}
	}
	getPropertyValue(propertyName: string): any {
		if (propertyName == TextHeaderCellModel.isFilterUIVisiblePropertyName) {
			return this.isFilterUIVisible;
		}
		if (propertyName == TextHeaderCellModel.sortIndicatorStylePropertyName) {
			return enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this.sortIndicatorStyle);
		}
		return super.getPropertyValue(propertyName);
	}
	createModelExport($export: CellModelExport): CellModelExport {
		if ($export == null) {
			$export = new TextHeaderCellModelExport();
		}
		$export = super.createModelExport($export);
		let textExport = <TextHeaderCellModelExport>$export;
		return textExport;
	}
}

/**
 * @hidden 
 */
export interface ICellPresenter { 
	modelUpdated(model: CellModel): void;
readonly isCanvasBased: boolean;
readonly nativeCell: INativeCell;
}

/**
 * @hidden 
 */
export let ICellPresenter_$type = new Type(null, 'ICellPresenter');

/**
 * @hidden 
 */
export class DataSourceNotificationBridge extends Base implements IDataSourceUpdateNotifier {
	static $t: Type = markType(DataSourceNotificationBridge, 'DataSourceNotificationBridge', (<any>Base).$type, [IDataSourceUpdateNotifier_$type]);
	private _owner: Grid = null;
	constructor(grid: Grid) {
		super();
		this._owner = grid;
	}
	rangeActualized(startIndex: number, endIndex: number): void {
		this._owner.onDataSourceRangeActualized(startIndex, endIndex);
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this._owner.onSetItem(index, oldItem, newItem);
	}
	notifyClearItems(): void {
		this._owner.onClearItems();
	}
	notifyInsertItem(index: number, newItem: any): void {
		this._owner.onInsertItem(index, newItem);
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this._owner.onRemoveItem(index, oldItem);
	}
}

/**
 * @hidden 
 */
export class ColumnController extends Base {
	static $t: Type = markType(ColumnController, 'ColumnController');
	private _actualColumns: GridColumnCollection = null;
	private _autoGenerateColumns: boolean = false;
	private _schema: IDataSourceSchema = null;
	get autoGenerateColumns(): boolean {
		return this._autoGenerateColumns;
	}
	set autoGenerateColumns(value: boolean) {
		let oldValue = this._autoGenerateColumns;
		this._autoGenerateColumns = value;
		if (oldValue != this._autoGenerateColumns) {
			this._areGenerated = false;
		}
		this.updateAutoGeneratedColumns();
	}
	get schema(): IDataSourceSchema {
		return this._schema;
	}
	set schema(value: IDataSourceSchema) {
		let oldValue = this._schema;
		this._schema = value;
		if (oldValue != this._schema) {
			this._areGenerated = false;
		}
		this.updateAutoGeneratedColumns();
	}
	get actualColumns(): GridColumnCollection {
		return this._actualColumns;
	}
	protected get areGenerated(): boolean {
		return this._areGenerated;
	}
	protected set areGenerated(value: boolean) {
		this._areGenerated = value;
	}
	private _areGenerated: boolean = false;
	private _columnFactory: IExternalGrid = null;
	get columnFactory(): IExternalGrid {
		return this._columnFactory;
	}
	set columnFactory(value: IExternalGrid) {
		this._columnFactory = value;
	}
	updateAutoGeneratedColumns(): boolean {
		if (this._areGenerated) {
			return false;
		}
		if (this._schema == null) {
			return false;
		}
		let userKeys: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
		for (let i: number = 0; i < this._actualColumns.count; i++) {
			let col = this._actualColumns._inner[i];
			if (!col.isAutoGenerated) {
				userKeys.item(col.propertyPath, true);
			}
		}
		let generated: boolean = false;
		for (let j = this._actualColumns.count - 1; j >= 0; j--) {
			if (this._actualColumns._inner[j].isAutoGenerated) {
				this.columnFactory.removeExternalColumn(this._actualColumns._inner[j].externalObject);
			}
		}
		if (this._autoGenerateColumns && this._schema != null) {
			generated = this.autogenerateColumns(userKeys, this._schema);
		}
		this._areGenerated = true;
		if (generated) {
			this.notifyGenerated();
		}
		return generated;
	}
	private _notifyGenerated: () => void = null;
	private get notifyGenerated(): () => void {
		return this._notifyGenerated;
	}
	private set notifyGenerated(value: () => void) {
		this._notifyGenerated = value;
	}
	private autogenerateColumns(userKeys: Dictionary$2<string, boolean>, schema: IDataSourceSchema): boolean {
		let newAutoColumns: GridColumnCollection = new GridColumnCollection();
		for (let i = 0; i < schema.propertyNames.length; i++) {
			let name: string = schema.propertyNames[i];
			if (!userKeys.containsKey(name)) {
				let column = this.createColumnFromSchemaType(name, schema.propertyTypes[i]);
				newAutoColumns.add(column);
				userKeys.item(name, true);
			}
		}
		let autoKeys: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
		for (let i1 = 0; i1 < newAutoColumns.count; i1++) {
			autoKeys.item(newAutoColumns._inner[i1].propertyPath, true);
		}
		let generated: boolean = false;
		let count: number = this._actualColumns.count;
		for (let i2 = 0; i2 < newAutoColumns.count; i2++) {
			generated = true;
			this.columnFactory.insertExternalColumnAtIndex(count + i2, newAutoColumns._inner[i2].externalObject);
		}
		return generated;
	}
	private createColumnFromSchemaType(name: string, dataSourceSchemaValueType: DataSourceSchemaPropertyType): Column {
		let column: Column = null;
		switch (dataSourceSchemaValueType) {
			case DataSourceSchemaPropertyType.DateTimeValue:

			case DataSourceSchemaPropertyType.DateTimeOffsetValue:
			column = this.columnFactory.createDateTimeColumn(name);
			break;

			case DataSourceSchemaPropertyType.DoubleValue:

			case DataSourceSchemaPropertyType.DecimalValue:

			case DataSourceSchemaPropertyType.SingleValue:

			case DataSourceSchemaPropertyType.IntValue:

			case DataSourceSchemaPropertyType.LongValue:

			case DataSourceSchemaPropertyType.ShortValue:

			case DataSourceSchemaPropertyType.ByteValue:
			column = this.columnFactory.createNumericColumn(name);
			break;

			case DataSourceSchemaPropertyType.ObjectValue:
			column = this.columnFactory.createTextColumn(name);
			break;

			case DataSourceSchemaPropertyType.StringValue:

			case DataSourceSchemaPropertyType.BooleanValue:
			column = this.columnFactory.createTextColumn(name);
			break;

		}

		column.propertyPath = name;
		column.isAutoGenerated = true;
		return column;
	}
	constructor(userDefinedColumns: GridColumnCollection, autoGenerateColumns: boolean, notifyGenerated: () => void) {
		super();
		this._autoGenerateColumns = autoGenerateColumns;
		this._actualColumns = userDefinedColumns;
		this.notifyGenerated = notifyGenerated;
	}
	getContainingColumn(path: CellPath): Column {
		if (path.column < 0 || this._actualColumns.count == 0 || this._actualColumns.count <= path.column) {
			return null;
		}
		return this._actualColumns._inner[path.column];
	}
	getColumnById(uniqueId: number): Column {
		for (let i = 0; i < this._actualColumns.count; i++) {
			if (this._actualColumns._inner[i].uniqueId == uniqueId) {
				return this._actualColumns._inner[i];
			}
		}
		return null;
	}
	getColumnByUniqueName(name: string): Column {
		for (let i = 0; i < this._actualColumns.count; i++) {
			if (this._actualColumns._inner[i].getUniqueKey() == name) {
				return this._actualColumns._inner[i];
			}
		}
		return null;
	}
	isFixedLeft(column: Column): boolean {
		return false;
	}
	isFixedRight(column: Column): boolean {
		return false;
	}
}

/**
 * @hidden 
 */
export class Grid extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Grid, 'Grid', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	static readonly columnResizeSeparatorIndex: number = -103;
	static readonly headerGrabberIndex: number = -102;
	static readonly headerSeparatorIndex: number = -101;
	static readonly headerSectionIndex: number = -100;
	static readonly headerRowIndex: number = -100;
	static readonly sectionHeaderRowIndex: number = -200;
	static readonly sectionFooterRowIndex: number = -201;
	static readonly rowSeparatorColumnIndex: number = -300;
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _propertySetter: IPropertySetter = null;
	get propertySetter(): IPropertySetter {
		return this._propertySetter;
	}
	set propertySetter(value: IPropertySetter) {
		this._propertySetter = value;
	}
	private _externalGrid: IExternalGrid = null;
	get externalGrid(): IExternalGrid {
		return this._externalGrid;
	}
	set externalGrid(value: IExternalGrid) {
		this._externalGrid = value;
		if (this.columnController != null) {
			this.columnController.columnFactory = this._externalGrid;
		}
	}
	private _dragger: IDragger = null;
	get dragger(): IDragger {
		return this._dragger;
	}
	set dragger(value: IDragger) {
		if (this._dragger != null) {
			let $t = this._dragger;
			$t.onDrag = delegateRemove($t.onDrag, runOn(this, this.onDrag));
			let $t1 = this._dragger;
			$t1.onDragEnd = delegateCombine($t1.onDragEnd, runOn(this, this.onDragEnd));
		}
		this._dragger = value;
		let $t2 = this._dragger;
		$t2.onDrag = delegateCombine($t2.onDrag, runOn(this, this.onDrag));
		let $t3 = this._dragger;
		$t3.onDragEnd = delegateCombine($t3.onDragEnd, runOn(this, this.onDragEnd));
	}
	private _rowHeight: number = <number>truncate(DeviceUtils.toPixelUnits(48));
	columnExchangingAnimationCompleted: (sender: any, e: EventArgs) => void = null;
	columnExchangingAnimationCanceled: (sender: any, e: EventArgs) => void = null;
	onColumnExchangingAnimationCompleted(column: Column): void {
		if (this.columnExchangingAnimationCompleted != null) {
			this.columnExchangingAnimationCompleted(column.externalObject, new EventArgs());
		}
	}
	onColumnExchangingAnimationCanceled(column: Column): void {
		if (this.columnExchangingAnimationCanceled != null) {
			this.columnExchangingAnimationCanceled(column.externalObject, new EventArgs());
		}
	}
	columnShowingAnimationCompleted: (sender: any, e: EventArgs) => void = null;
	columnShowingAnimationCanceled: (sender: any, e: EventArgs) => void = null;
	getColumnFilterCondition(model: CellModel): ColumnFilterCondition {
		let column = this.getContainingColumn(model.path);
		if (column == null) {
			return null;
		}
		return column.filter;
	}
	getColumnPropertyType(model: CellModel): DataSourceSchemaPropertyType {
		let column = this.getContainingColumn(model.path);
		if (column == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		if (this.actualDataSource == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		return this.actualDataSource.resolveSchemaPropertyType(column.propertyPath);
	}
	onColumnShowingAnimationCompleted(column: Column): void {
		if (this.columnShowingAnimationCompleted != null) {
			this.columnShowingAnimationCompleted(column.externalObject, new EventArgs());
		}
	}
	filterExpressionsChanging: (sender: any, args: GridFilterExpressionsEventArgs) => void = null;
	filterExpressionsChanged: (sender: any, args: GridFilterExpressionsEventArgs) => void = null;
	columnFilterChanging(model: CellModel, filter: ColumnFilterCondition): void {
		let column = this.getContainingColumn(model.path);
		if (column == null) {
			return;
		}
		if (!Base.equalsStatic(column.filter, filter)) {
			column.filter = filter;
			if (this.filterExpressionsChanging != null) {
				this.filterExpressionsChanging(this, ((() => {
					let $ret = new GridFilterExpressionsEventArgs();
					$ret.filterExpressions = this.filterExpressions;
					return $ret;
				})()));
			}
		}
	}
	columnFilterChanged(model: CellModel, filter: ColumnFilterCondition): void {
		let column = this.getContainingColumn(model.path);
		if (column == null) {
			return;
		}
		if (!Base.equalsStatic(column.filter, filter)) {
			column.filter = filter;
		}
		if (this.filterExpressionsChanged != null) {
			this.filterExpressionsChanged(this, ((() => {
				let $ret = new GridFilterExpressionsEventArgs();
				$ret.filterExpressions = this.filterExpressions;
				return $ret;
			})()));
		}
	}
	onColumnShowingAnimationCanceled(column: Column): void {
		if (this.columnShowingAnimationCanceled != null) {
			this.columnShowingAnimationCanceled(column.externalObject, new EventArgs());
		}
	}
	columnMovingAnimationCompleted: (sender: any, e: EventArgs) => void = null;
	columnMovingAnimationCanceled: (sender: any, e: EventArgs) => void = null;
	onColumnMovingAnimationCompleted(column: Column): void {
		if (this.columnMovingAnimationCompleted != null) {
			this.columnMovingAnimationCompleted(column.externalObject, new EventArgs());
		}
	}
	onColumnMovingAnimationCanceled(column: Column): void {
		if (this.columnMovingAnimationCanceled != null) {
			this.columnMovingAnimationCanceled(column.externalObject, new EventArgs());
		}
	}
	columnHidingAnimationCompleted: (sender: any, e: EventArgs) => void = null;
	columnHidingAnimationCanceled: (sender: any, e: EventArgs) => void = null;
	onColumnHidingAnimationCompleted(column: Column): void {
		if (this.columnHidingAnimationCompleted != null) {
			this.columnHidingAnimationCompleted(column.externalObject, new EventArgs());
		}
	}
	onColumnHidingAnimationCanceled(column: Column): void {
		if (this.columnHidingAnimationCanceled != null) {
			this.columnHidingAnimationCanceled(column.externalObject, new EventArgs());
		}
	}
	cellPreviewPointerDown: (sender: any, args: GridCellEventArgs) => void = null;
	onCellPreviewPointerDown(model: CellModel): void {
		if (this.cellPreviewPointerDown != null) {
			this.cellPreviewPointerDown(model, ((() => {
				let $ret = new GridCellEventArgs();
				$ret.cellInfo = model;
				$ret.grid = this;
				return $ret;
			})()));
		}
	}
	cellPreviewPointerUp: (sender: any, args: GridCellEventArgs) => void = null;
	onCellPreviewPointerUp(model: CellModel): void {
		if (this.cellPreviewPointerUp != null) {
			this.cellPreviewPointerUp(model, ((() => {
				let $ret = new GridCellEventArgs();
				$ret.cellInfo = model;
				$ret.grid = this;
				return $ret;
			})()));
		}
	}
	cellPointerDown: (sender: any, args: GridCellEventArgs) => void = null;
	onCellPointerDown(model: CellModel): void {
		if (this.cellPointerDown != null) {
			this.cellPointerDown(model, ((() => {
				let $ret = new GridCellEventArgs();
				$ret.cellInfo = model;
				$ret.grid = this;
				return $ret;
			})()));
		}
	}
	cellPointerUp: (sender: any, args: GridCellEventArgs) => void = null;
	onCellPointerUp(model: CellModel): void {
		if (this.cellPointerUp != null) {
			this.cellPointerUp(model, ((() => {
				let $ret = new GridCellEventArgs();
				$ret.cellInfo = model;
				$ret.grid = this;
				return $ret;
			})()));
		}
	}
	onRowItemPropertyChanged(dataRow: number, propertyName: string): void {
		this.invalidateRow(dataRow);
	}
	cellClicked: (sender: any, args: GridCellEventArgs) => void = null;
	onExpansionClicked(model: CellModel): void {
		if (model.modelType == ModelTypes.SectionHeader) {
			this.updateExpansionState(model.path.row);
		}
	}
	updateExpansionState(rowIndex: number): void {
		let state = !this.actualDataSource.getIsRowExpandedAtIndex(rowIndex);
		this.actualDataSource.setIsRowExpandedAtIndex(rowIndex, state);
		let rowLevel = this.actualDataSource.getRowLevel(rowIndex);
		if (rowIndex < this.model.topRow.row) {
			this.scrollToRowByIndex(rowIndex - rowLevel);
		}
	}
	onCellClicked(model: CellModel, isControl: boolean, isShift: boolean): void {
		this.externalGrid.focusScroller();
		if (model.modelType == ModelTypes.ColumnHeader && this.headerClickAction != HeaderClickAction.None) {
			this.sortManager.cycleToNextSortDirectionForColumn(this.getContainingColumn(model.path));
		}
		if (this.selectionMode == GridSelectionMode.RangeCell) {
			if (model.path.isContentCell && !model.path.isSpanningCell) {
				let columnIndex = this.model.columns._inner[model.path.column].renderedIndex;
				if (this.selectionBehavior == GridSelectionBehavior.ModifierBased) {
					if (isControl) {
						this.rangeSelectCellToggle(model.path.row, columnIndex);
					} else {
						if (isShift && this._lastAddedCellRange != null) {
							let endCellColumnIndex = columnIndex;
							let endcellRowindex = model.path.row;
							this.selectedCellRanges.remove(this._lastAddedCellRange);
							this.addCellRange1(Math.min(this._lastAddedCellRange.startColumn, endCellColumnIndex), Math.max(this._lastAddedCellRange.startColumn, endCellColumnIndex), Math.min(this._lastAddedCellRange.startRow, endcellRowindex), Math.max(this._lastAddedCellRange.startRow, endcellRowindex));
						} else {
							this.removeAllRanges();
							this.addCellRange1(columnIndex, columnIndex, model.path.row, model.path.row);
						}
					}
				} else if (this.selectionBehavior == GridSelectionBehavior.Toggle) {
					this.rangeSelectCellToggle(model.path.row, columnIndex);
				}
			}
		} else {
			if (this.selectionBehavior == GridSelectionBehavior.Toggle) {
				this.selectionManager.toggleSelection(model);
			} else if (this.selectionBehavior == GridSelectionBehavior.ModifierBased) {
				if (isControl) {
					this.selectionManager.toggleSelection(model);
				} else {
					this.selectionManager.singleSelection(model);
				}
			}
		}
		if (this.activationMode == GridActivationMode.Cell) {
			this.activationManager.activateModel(model);
		}
		if (this.cellClicked != null) {
			this.cellClicked(model, ((() => {
				let $ret = new GridCellEventArgs();
				$ret.cellInfo = model;
				$ret.grid = this;
				return $ret;
			})()));
		}
	}
	private rangeSelectCellToggle(row: number, column: number): void {
		let removed = false;
		for (let i = 0; i < this.selectedCellRanges.count; i++) {
			let range = this.selectedCellRanges._inner[i];
			if (range.startColumn == column && range.endColumn == column && range.startRow == row && range.endRow == row) {
				this.removeCellRange(this.selectedCellRanges._inner[i]);
				removed = true;
				break;
			}
		}
		if (!removed) {
			this.addCellRange1(column, column, row, row);
		}
	}
	private _columnResizingMode: ColumnResizingMode = ColumnResizingMode.Deferred;
	static readonly columnResizingModePropertyName: string = "ColumnResizingMode";
	get columnResizingMode(): ColumnResizingMode {
		return this._columnResizingMode;
	}
	set columnResizingMode(value: ColumnResizingMode) {
		let oldValue = this._columnResizingMode;
		this._columnResizingMode = value;
		if (oldValue != this._columnResizingMode) {
			this.onPropertyChanged(Grid.columnResizingModePropertyName, enumGetBox<ColumnResizingMode>(ColumnResizingMode_$type, oldValue), enumGetBox<ColumnResizingMode>(ColumnResizingMode_$type, this._columnResizingMode));
		}
	}
	private _columnMovingMode: ColumnMovingMode = ColumnMovingMode.Deferred;
	static readonly columnMovingModePropertyName: string = "ColumnMovingMode";
	get columnMovingMode(): ColumnMovingMode {
		return this._columnMovingMode;
	}
	set columnMovingMode(value: ColumnMovingMode) {
		let oldValue = this._columnMovingMode;
		this._columnMovingMode = value;
		if (oldValue != this._columnMovingMode) {
			this.onPropertyChanged(Grid.columnMovingModePropertyName, enumGetBox<ColumnMovingMode>(ColumnMovingMode_$type, oldValue), enumGetBox<ColumnMovingMode>(ColumnMovingMode_$type, this._columnMovingMode));
		}
	}
	private _mousePosition: Point = null;
	get mousePosition(): Point {
		return this._mousePosition;
	}
	set mousePosition(value: Point) {
		this._mousePosition = value;
	}
	private _downedCell: CellPath = null;
	get downedCell(): CellPath {
		return this._downedCell;
	}
	set downedCell(value: CellPath) {
		this._downedCell = value;
	}
	private _isDownCellPinnedRow: boolean = false;
	onCellMouseDown(model: CellModel, x: number, y: number): void {
		this.downedCell = <CellPath>model.path.clone();
		this.mousePosition = <Point>{ $type: Point_$type, x: x, y: y };
		this._isDownCellPinnedRow = model.isRowPinned && model.isRowSticky;
		if (this.columnResizingMode != ColumnResizingMode.None && this.downedCell.isHeaderSeparatorCell) {
			let column = this.columnController.actualColumns._inner[model.path.column];
			if (column.isResizingEnabled) {
				let columnInfo = this.model.columns._inner[this.downedCell.column];
				this._resizingColumnStartWidth = columnInfo.actualWidth;
				this._pinnedLeftAreaStartWidth = this.model.fixedColumnWidthLeft;
				this._pinnedRightAreaStartWidth = this.model.fixedColumnWidthRight;
				this._scrollPositionX = this.model.actualVisibleRegion.left;
				this._scrollPositionY = this.model.actualVisibleRegion.top;
				let transformedPoint = this.dragger.view.transformPoint(x, y);
				this.resizePosition = <number>truncate((transformedPoint.x + this._scrollPositionX)) - (intDivide(this.columnResizingSeparatorWidth, 2));
				this._calculatedWidth = -1;
				this.externalGrid.setResizeCursor();
				this.dragger.dragStart(x, y, this.model.actualVisibleRegion.x, this.model.actualVisibleRegion.y, DragType.HeaderResize, this.downedCell, false);
				if (this.columnResizingMode == ColumnResizingMode.Deferred) {
					this.refresh();
				}
			}
		}
	}
	onCellMouseUp(model: CellModel, x: number, y: number): void {
		this.downedCell = null;
	}
	onCellLeave(model: CellModel, x: number, y: number): void {
		let totalColumnWidth = 0;
		for (let i = 0; i < this.model.columns.count; i++) {
			let column = this.model.columns._inner[i];
			totalColumnWidth += column.actualWidth;
		}
		let transformedPoint = this.dragger.view.transformPoint(x, y);
		if (!this.dragger.isDragActive && transformedPoint.x >= totalColumnWidth) {
			this.externalGrid.setDefaultCursor();
		}
	}
	onMouseIsOver(model: CellModel, x: number, y: number): void {
		if (!this.dragger.isDragActive) {
			if (model.path.isHeaderSeparatorCell && this.columnResizingMode != ColumnResizingMode.None) {
				let column = this.columnController.actualColumns._inner[model.path.column];
				if (column.isResizingEnabled) {
					this.externalGrid.setResizeCursor();
				}
			} else {
				this.externalGrid.setDefaultCursor();
			}
		} else if (this.dragger.dragType != DragType.HeaderResize && this.dragger.dragType != DragType.ColumnMove) {
			this.externalGrid.setDefaultCursor();
		}
	}
	private _scrollTickID: number = -1;
	private _needsVScroll: boolean = false;
	private _needsHScroll: boolean = false;
	private _hVelocity: number = 0;
	private _vVelocity: number = 0;
	private _scrollPositionX: number = 0;
	private _scrollPositionY: number = 0;
	private _scrollLastTime: Date = new Date();
	private _dragStartX: number = 0;
	private _dragStartY: number = 0;
	private _dragX: number = 0;
	private _dragY: number = 0;
	private _currentRange: CellRange = null;
	private _startRow: number = 0;
	private _startColumn: number = 0;
	private _startedInPinnedRow: boolean = false;
	cleanUpScrollTick(): void {
		if (this._scrollTickID != -1) {
			this._tickProvider.teardownTicking(this._scrollTickID);
			this._scrollTickID = -1;
		}
	}
	onDragStarted(path: CellPath, x: number, y: number, isControl: boolean): void {
		this._scrollPositionX = this.model.actualVisibleRegion.left;
		this._scrollPositionY = this.model.actualVisibleRegion.top;
		if (!this.dragger.isDragActive && path.isHeaderCell && !path.isHeaderSeparatorCell && this.columnMovingMode != ColumnMovingMode.None) {
			let movingColumn = this.getContainingColumn(path);
			if (movingColumn != null && movingColumn.isFromMarkup) {
				this.externalGrid.ensureColumnsAreManual();
			}
			this.externalGrid.setHandCursor();
			this.dragger.dragStart(x, y, this.model.actualVisibleRegion.x, this.model.actualVisibleRegion.y, DragType.ColumnMove, path, isControl);
		} else if (this.selectionMode == GridSelectionMode.RangeCell && path.isContentCell && !path.isSpanningCell) {
			if (!isControl) {
				this.removeAllRanges();
			}
			this._startRow = path.row;
			this._startColumn = this.model.columns._inner[path.column].renderedIndex;
			this._startedInPinnedRow = this._isDownCellPinnedRow;
			if (this.activationMode == GridActivationMode.Cell) {
				this.activationManager.activateCellPath(path);
			}
			this.dragger.dragStart(x, y, this.model.actualVisibleRegion.x, this.model.actualVisibleRegion.y, DragType.RangeSelect, path, isControl);
		}
	}
	onDragEnd(sender: any, args: DragSelectEventArgs): void {
		this.cleanUpScrollTick();
		this._currentRange = null;
		this._resizeSeparator = null;
		this._resizePosition = -1;
		this.downedCell = null;
		if (this.dragger.dragType == DragType.HeaderResize) {
			this.externalGrid.setDefaultCursor();
			if (this.columnResizingMode == ColumnResizingMode.Deferred) {
				if (this._calculatedWidth != -1) {
					let columnInfo = this.model.columns._inner[this.dragger.cellPath.column];
					this.animationManager.startColumnResizeAnimation(this, this.columnAnimationSettings, columnInfo, this._calculatedWidth);
				} else {
					this.renderingEngine.refresh(this.model, false);
				}
			}
		} else if (this.dragger.dragType == DragType.ColumnMove) {
			this.externalGrid.setDefaultCursor();
			if (this.columnMovingMode == ColumnMovingMode.Deferred) {
				let needsRefresh = true;
				if ((this._targetColumnForMove != -1 && this._targetColumnForMove != this.dragger.cellPath.column) || this._targetPosition != this.columns._inner[this.dragger.cellPath.column].pinned) {
					let draggedColumnFixedPosition = this.columns._inner[this.dragger.cellPath.column].pinned;
					if (draggedColumnFixedPosition != this._targetPosition) {
						this.suppressColumnMoveAnimations = true;
						this.moveColumn(this.dragger.cellPath.column, this._targetColumnForMove);
						this.suppressColumnMoveAnimations = false;
						this.pinColumn(this.columns._inner[this._targetColumnForMove], this._targetPosition);
					} else {
						this.moveColumn(this.dragger.cellPath.column, this._targetColumnForMove);
					}
					needsRefresh = false;
				}
				if (needsRefresh) {
					this.refresh();
				}
				this._targetColumnForMove = -1;
			}
		}
	}
	onDrag(sender: any, args: DragSelectEventArgs): void {
		this._dragStartX = args.startX;
		this._dragStartY = args.startY;
		this._dragX = args.currentX;
		this._dragY = args.currentY;
		switch (this.dragger.dragType) {
			case DragType.RangeSelect:
			this.onDragRangeSelect(false);
			break;

			case DragType.HeaderResize:
			this.onDragHeaderResize();
			break;

			case DragType.ColumnMove:
			this.onDragColumnMove(false);
			break;

		}

	}
	private _resizePosition: number = -1;
	get resizePosition(): number {
		return this._resizePosition;
	}
	set resizePosition(value: number) {
		if (this._resizePosition != value) {
			this._resizePosition = value;
		}
	}
	private _targetColumnForMove: number = -1;
	private _targetPosition: PinnedPositions = <PinnedPositions>0;
	private onDragColumnMove(autoScrolling: boolean): void {
		let x = this._dragX + this.model.actualVisibleRegion.x;
		if (autoScrolling || !this.autoScroll(x, NaN)) {
			let targetColumn = this.dragger.cellPath.column;
			let resizePosition: number = this.resizePosition;
			this._targetPosition = PinnedPositions.None;
			for (let i = 0; i < this.model.columns.count; i++) {
				let column = this.model.columns._inner[i];
				let columnLeft: number = column.computedOffset;
				if (column.fixedPosition == PinnedPositions.Left) {
					columnLeft = column.computedOffset + this.model.actualVisibleRegion.x;
				}
				let columnRight = columnLeft + column.actualWidth;
				let columnCenter = columnLeft + (intDivide(column.actualWidth, 2));
				if ((column.renderedIndex == 0 && x < columnLeft) || (x > columnLeft && x <= columnCenter)) {
					resizePosition = columnLeft;
					if (i != targetColumn) {
						targetColumn = i < this.dragger.cellPath.column ? i : i - 1;
					}
					if (column.fixedPosition != PinnedPositions.Left && resizePosition < this.model.actualVisibleRegion.x + this.model.fixedColumnWidthLeft) {
						resizePosition = this.model.actualVisibleRegion.x + this.model.fixedColumnWidthLeft;
					}
					this._targetPosition = column.fixedPosition;
					break;
				} else if ((x > columnCenter && x < columnRight) || (i == this.model.columns.count - 1 && x > columnRight)) {
					resizePosition = columnRight - this.columnMovingSeparatorWidth;
					if (i != targetColumn) {
						targetColumn = i < this.dragger.cellPath.column ? i + 1 : i;
					}
					this._targetPosition = column.fixedPosition;
					break;
				}
			}
			if (resizePosition != this.resizePosition) {
				let oldResizePosition = this.resizePosition;
				this.resizePosition = <number>truncate(resizePosition);
				if (oldResizePosition == -1) {
					this.renderingEngine.invalidateVisibility(() => this.visibilityEngine.calculate(this));
					this.renderingEngine.refresh(this.model, true);
				} else {
					if (this._resizeSeparator == null) {
						this._resizeSeparator = this.gridLayerController.getModel(new CellPath(1, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, 0, RowPath.rESIZE_SEPARATOR_INDEX), this.model);
					}
					this._resizeSeparator.x = this.resizePosition;
					this.renderingEngine.refresh(this.model, false);
				}
				this._targetColumnForMove = targetColumn;
			}
		}
	}
	private _resizeSeparator: CellModel = null;
	private _calculatedWidth: number = -1;
	private _resizingColumnStartWidth: number = 0;
	private _pinnedLeftAreaStartWidth: number = 0;
	private _pinnedRightAreaStartWidth: number = 0;
	private onDragHeaderResize(): void {
		let column = this.columnController.getContainingColumn(this.dragger.cellPath);
		if (this._resizeSeparator == null) {
			this._resizeSeparator = this.gridLayerController.getModel(new CellPath(1, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, 0, RowPath.rESIZE_SEPARATOR_INDEX), this.model);
		}
		let diff = (this._dragX + this.model.actualVisibleRegion.x) - this._dragStartX;
		let minWidth = isNaN_(column.minWidth) ? isNaN_(this.defaultColumnMinWidth) ? 5 : this.defaultColumnMinWidth : column.minWidth;
		this._calculatedWidth = Math.max(this._resizingColumnStartWidth + diff, minWidth);
		let limitOffset = 20;
		if (column.pinned == PinnedPositions.Left) {
			let pinnedLeftWidthLimit = this.actualVisibleRegion.width - limitOffset - this.model.fixedColumnWidthRight;
			let calculatedPinnedLeftWidth = this._pinnedLeftAreaStartWidth + (this._calculatedWidth - this._resizingColumnStartWidth);
			if (calculatedPinnedLeftWidth > pinnedLeftWidthLimit) {
				this._calculatedWidth = this._calculatedWidth - (calculatedPinnedLeftWidth - pinnedLeftWidthLimit);
			}
		} else if (column.pinned == PinnedPositions.Right) {
			let pinnedRightWidthLimit = this.actualVisibleRegion.width - limitOffset - this.model.fixedColumnWidthLeft;
			let calculatedPinnedRightWidth = this._pinnedRightAreaStartWidth + (this._calculatedWidth - this._resizingColumnStartWidth);
			if (calculatedPinnedRightWidth > pinnedRightWidthLimit) {
				this._calculatedWidth = this._calculatedWidth - (calculatedPinnedRightWidth - pinnedRightWidthLimit);
			}
		}
		if (this.columnResizingMode == ColumnResizingMode.Deferred) {
			this.resizePosition = <number>truncate((this._dragStartX - this._resizingColumnStartWidth + this._calculatedWidth)) - (intDivide(this.columnResizingSeparatorWidth, 2));
			if (this._resizeSeparator != null) {
				this._resizeSeparator.x = this.resizePosition;
				this.renderingEngine.refresh(this.model, false);
			}
		} else {
			let columnWidth = ((() => {
				let $ret = new ColumnWidth();
				$ret.value = this._calculatedWidth;
				$ret.isStarSized = false;
				return $ret;
			})());
			if (!isNaN_(column.minWidth)) {
				columnWidth.minimumWidth = column.minWidth;
			}
			column.width = columnWidth;
		}
	}
	private onDragRangeSelect(autoScrolling: boolean): void {
		if (autoScrolling || !this.autoScroll(this._dragX + this.model.actualVisibleRegion.x, this._dragY + this.model.actualVisibleRegion.y)) {
			let d = this._dragX + this.model.actualVisibleRegion.x;
			let selectionArea = this.getSelectionArea(d, this._dragStartY, this._dragX, this._dragY);
			let range = this.getCellRangeFromSelection(selectionArea, this._startRow, this._startColumn, this._startedInPinnedRow);
			if (this._currentRange == null) {
				this._currentRange = range;
				this.addCellRange(this._currentRange);
			} else {
				this.updateSelectionState(range);
			}
		}
	}
	private getSelectionArea(initialX: number, initialY: number, x: number, y: number): Rect {
		x += this.model.actualVisibleRegion.x;
		y += this.model.actualVisibleRegion.y;
		return new Rect(0, Math.min(initialX, x), Math.min(initialY, y), Math.abs(x - initialX), Math.abs(y - initialY));
	}
	private _lastHitCell: CellModel = null;
	getHitCell(x: number, y: number): CellModel {
		if (this._model == null) {
			return null;
		}
		return this._model.getHitCell(x, y);
	}
	private getCellRangeFromSelection(selection: Rect, startRow: number, startColumn: number, startedInPinnedRow: boolean): CellRange {
		let cellModels = this.model.contentLayer.valueList;
		let pinnedModels = this.model.pinnedRowsLayer.valueList;
		let groupModels = this.model.pinnedSectionLayer.valueList;
		let fixedModels = this.model.fixedContentLayer.valueList;
		let combinedCells = new List$1<CellModel>((<any>CellModel).$type, 1, pinnedModels);
		combinedCells.addRange(cellModels);
		combinedCells.addRange(groupModels);
		combinedCells.addRange(fixedModels);
		let furthestRow = startRow;
		let furthestColumn = startColumn;
		let mouseX = this._dragX + this.model.actualVisibleRegion.x;
		for (let i = 0; i < combinedCells.count; i++) {
			let cell = combinedCells._inner[i];
			if (!cell.path.isContentCell || cell.path.isSpanningCell) {
				continue;
			}
			if (mouseX < this.model.actualVisibleRegion.x + this.model.fixedColumnWidthLeft && cell.path.pinned != PinnedPositions.Left) {
				continue;
			}
			if (mouseX > this.model.actualVisibleRegion.right - this.model.fixedColumnWidthRight && cell.path.pinned != PinnedPositions.Right) {
				continue;
			}
			if (this.selectionMode == GridSelectionMode.RangeCell) {
				if (startedInPinnedRow) {
					if (!cell.isRowPinned || (cell.isRowPinned && !cell.isRowSticky)) {
						continue;
					}
				} else {
					if (cell.isRowPinned && cell.isRowSticky) {
						continue;
					}
				}
				let cellRect = new Rect(0, cell.x, cell.y, cell.width, cell.height);
				if (selection.intersectsWith(cellRect)) {
					let columnRenderedIndex = this.model.columns._inner[cell.path.column].renderedIndex;
					let rowDist = Math.abs(cell.path.row - startRow);
					let columnDist = Math.abs(Math.max(0, columnRenderedIndex) - startColumn);
					let currentFurthestRowDist = Math.abs(furthestRow - startRow);
					let currentFurthestColumnDist = Math.abs(furthestColumn - startColumn);
					if (rowDist > currentFurthestRowDist) {
						furthestRow = cell.path.row;
					}
					if (columnDist > currentFurthestColumnDist && !cell.path.isSpanningCell) {
						furthestColumn = columnRenderedIndex;
					}
				}
			}
		}
		let r = new CellRange();
		r.startColumn = Math.min(startColumn, furthestColumn);
		r.endColumn = Math.max(startColumn, furthestColumn);
		r.startRow = Math.min(startRow, furthestRow);
		r.endRow = Math.max(startRow, furthestRow);
		return r;
	}
	private autoScroll(x: number, y: number): boolean {
		let offsetY = 20;
		let offsetX = 20;
		let scrollBoundary = new Rect(0, this.model.actualVisibleRegion.x + offsetX, this.model.actualVisibleRegion.y + offsetY, this.model.actualVisibleRegion.width - offsetX * 2, this.model.actualVisibleRegion.height - offsetY * 2);
		let verticalMultiplier = 5;
		let verticalMax = 1000;
		let horizontalMultiplier = 5;
		let horizontalMax = 1000;
		if (!this._startedInPinnedRow && !isNaN_(y)) {
			if (y > scrollBoundary.bottom) {
				let diff = y - scrollBoundary.bottom;
				this._vVelocity = Math.min(diff * verticalMultiplier, verticalMax);
				this._needsVScroll = true;
			} else if (y < scrollBoundary.top) {
				let diff1 = scrollBoundary.top - y;
				this._vVelocity = -Math.min(diff1 * verticalMultiplier, verticalMax);
				this._needsVScroll = true;
			} else {
				this._vVelocity = 0;
				this._needsVScroll = false;
			}
		}
		if (x > scrollBoundary.right) {
			let diff2 = x - scrollBoundary.right;
			this._hVelocity = Math.min(diff2 * horizontalMultiplier, horizontalMax);
			this._needsHScroll = true;
		} else if (x < scrollBoundary.left) {
			let diff3 = scrollBoundary.left - x;
			this._hVelocity = -Math.min(diff3 * horizontalMultiplier, horizontalMax);
			this._needsHScroll = true;
		} else {
			this._hVelocity = 0;
			this._needsHScroll = false;
		}
		if ((this._needsVScroll || this._needsHScroll) && this._scrollTickID == -1) {
			this._scrollLastTime = dateNow();
			this._scrollTickID = this._tickProvider.setupTicking(runOn(this, this.dragScrollTick));
			this._tickProvider.requestFrame(this._scrollTickID);
		}
		if (!this._needsVScroll && !this._needsHScroll) {
			this.cleanUpScrollTick();
		}
		return this._needsHScroll || this._needsVScroll;
	}
	private dragScrollTick(): void {
		let currentTime: Date = dateNow();
		let dt: number = timeSpanTotalSeconds((+currentTime - +(this._scrollLastTime)));
		this._scrollLastTime = currentTime;
		this._scrollPositionX = Math.max(this._scrollPositionX + this._hVelocity * dt, 0);
		this._scrollPositionY = Math.max(this._scrollPositionY + this._vVelocity * dt, 0);
		if (this.model.absoluteWidth > 0 && this.model.actualVisibleRegion.width > 0 && this._scrollPositionX + this.model.actualVisibleRegion.width > this.model.absoluteWidth) {
			this._scrollPositionX = Math.round(this.model.absoluteWidth - this.model.actualVisibleRegion.width);
		}
		if (this.model.absoluteHeight > 0 && this.model.actualVisibleRegion.height > 0 && this._scrollPositionY + this.model.actualVisibleRegion.height > this.model.absoluteHeight) {
			this._scrollPositionY = Math.round(this.model.absoluteHeight - this.model.actualVisibleRegion.height);
		}
		this.viewportManager.moveViewportTo(<number>truncate(this._scrollPositionX), <number>truncate(this._scrollPositionY));
		switch (this.dragger.dragType) {
			case DragType.RangeSelect:
			this.onDragRangeSelect(true);
			break;

			case DragType.HeaderResize:
			this.onDragHeaderResize();
			break;

			case DragType.ColumnMove:
			this.onDragColumnMove(true);
			break;

		}

		this._tickProvider.requestFrame(this._scrollTickID);
	}
	private updateSelectionState(range: CellRange): void {
		if (range.startColumn != this._currentRange.startColumn || range.endColumn != this._currentRange.endColumn || range.startRow != this._currentRange.startRow || range.endRow != this._currentRange.endRow) {
			this._currentRange.startColumn = range.startColumn;
			this._currentRange.endColumn = range.endColumn;
			this._currentRange.startRow = range.startRow;
			this._currentRange.endRow = range.endRow;
			this._updatingCellStates = true;
			this.selectionManager.updateSelectedCellRangeState();
			this._updatingCellStates = false;
			this.notifyCellRangeUpdated(this._currentRange);
		}
	}
	constructor() {
		super();
		this.sectionHeader = new SectionHeader();
		this.rowSeparator = new RowSeparator();
		this.headerSeparator = new HeaderSeparator();
		this.columnResizingSeparator = new ColumnResizingSeparator();
		this.columnMovingSeparator = new ColumnMovingSeparator();
		this.pinnedAreaSeparator = new PinnedAreaSeparator();
		this.summaryRowRoot = new SummaryRowRoot();
		this.summaryRowSection = new SummaryRowSection();
		this._columnController = new ColumnController(this._columns, this.autoGenerateColumns, runOn(this, this.notifyColumnsAutoGenerated));
		let $t = this._columnController.actualColumns;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.actualColumns_CollectionChanged));
		this._adapter = new DataAdapter(this._columnController);
		this._responsiveStates = new ResponsiveStatesCollection();
		this._responsiveEngine = new ResponsiveEngine(this);
		this._responsiveEngine.responsiveStates = this._responsiveStates;
		this.isClickActionDesired = this.resolveIsClickActionDesired();
		this.isHoverActionDesired = this.resolveIsHoverActionDesired();
		this.selectionManager = new SelectionManager(this, this.animationManager);
		this.activationManager = new ActivationManager(this, this.animationManager);
		this._selectedItems.addListener(runOn(this, this.selectedItems_CollectionChanged));
		this._selectedKeys.addListener(runOn(this, this.selectedKeys_CollectionChanged));
		this._selectedCells.addListener(runOn(this, this.selectedCells_CollectionChanged));
		let $t1 = this._selectedCellRanges;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.selectedCellRanges_CollectionChanged));
		this._pinnedItems.addListener(runOn(this, this.pinnedItems_CollectionChanged));
		this._pinnedKeys.addListener(runOn(this, this.pinnedKeys_CollectionChanged));
		this._sortDescriptions = new ColumnSortDescriptionCollection();
		this._groupDescriptions = new ColumnGroupDescriptionCollection();
		this._summaryDescriptions = new ColumnSummaryDescriptionCollection();
		this._sortDescriptions.addListener(runOn(this, this.sortDescriptions_CollectionChanged));
		this._groupDescriptions.addListener(runOn(this, this.groupDescriptions_CollectionChanged));
		this._summaryDescriptions.addListener(runOn(this, this.summaryDescriptions_CollectionChanged));
		this._filterExpressions = new FilterExpressionCollection();
		this.sortManager = new SortManager(this);
	}
	resolveSchemaForGroupDescription(groupDescription: ColumnGroupDescription): void {
		if (this.actualDataSource != null && this.actualDataSource.actualSchema != null) {
			groupDescription.resolvedPropertySchema = this.actualDataSource.resolveSchemaPropertyType(groupDescription.propertyPath);
			groupDescription.hasResolvedSchema = true;
		}
	}
	resolveSchemaForSummaryDescription(summaryDescription: ColumnSummaryDescription): void {
		if (this.actualDataSource != null && this.actualDataSource.actualSchema != null) {
			summaryDescription.resolvedPropertySchema = this.actualDataSource.resolveSchemaPropertyType(summaryDescription.propertyPath);
			summaryDescription.hasResolvedSchema = true;
		}
	}
	private summaryDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			if (e.newItems != null) {
				for (let i = 0; i < e.newItems.count; i++) {
					let desc = <ColumnSummaryDescription>e.newItems.item(i);
					if (!desc.hasResolvedSchema) {
						this.resolveSchemaForSummaryDescription(desc);
					}
				}
			}
			break;

		}

	}
	private groupDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			if (e.newItems != null) {
				for (let i = 0; i < e.newItems.count; i++) {
					let desc = <ColumnGroupDescription>e.newItems.item(i);
					if (!desc.hasResolvedSchema) {
						this.resolveSchemaForGroupDescription(desc);
					}
				}
			}
			break;

		}

		if (this.groupDescriptionsChanged != null) {
			this.groupDescriptionsChanged(this, ((() => {
				let $ret = new GridGroupDescriptionsChangedEventArgs();
				$ret.groupDescriptions = this.groupDescriptions;
				return $ret;
			})()));
		}
	}
	private isInSortDescriptions_CollectionChanged: boolean = false;
	private sortDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.isInSortDescriptions_CollectionChanged = true;
		try {
			switch (e.action) {
				case NotifyCollectionChangedAction.Add:
				if (e.newItems != null) {
					for (let i = 0; i < e.newItems.count; i++) {
						let sortDescription: ColumnSortDescription = <ColumnSortDescription>e.newItems.item(i);
						this.updateColumnSortDirection(sortDescription.propertyPath, this.columnSortDirectionFromListSortDirection(sortDescription.sortDirection));
					}
				}
				break;

				case NotifyCollectionChangedAction.Remove:
				if (e.oldItems != null) {
					for (let i1 = 0; i1 < e.oldItems.count; i1++) {
						let sortDescription1: ColumnSortDescription = <ColumnSortDescription>e.oldItems.item(i1);
						this.updateColumnSortDirection(sortDescription1.propertyPath, ColumnSortDirection.None);
					}
				}
				break;

				case NotifyCollectionChangedAction.Replace:
				if (e.oldItems != null) {
					for (let i2 = 0; i2 < e.oldItems.count; i2++) {
						let sortDescription2: ColumnSortDescription = <ColumnSortDescription>e.oldItems.item(i2);
						this.updateColumnSortDirection(sortDescription2.propertyPath, ColumnSortDirection.None);
					}
				}
				if (e.newItems != null) {
					for (let i3 = 0; i3 < e.newItems.count; i3++) {
						let sortDescription3: ColumnSortDescription = <ColumnSortDescription>e.newItems.item(i3);
						this.updateColumnSortDirection(sortDescription3.propertyPath, this.columnSortDirectionFromListSortDirection(sortDescription3.sortDirection));
					}
				}
				break;

				case NotifyCollectionChangedAction.Reset:
				for (let column of fromEnum<Column>(this.columns)) {
					column.sortDirection = ColumnSortDirection.None;
				}
				break;

			}

			if (this.sortDescriptionsChanged != null) {
				this.sortDescriptionsChanged(this, ((() => {
					let $ret = new GridSortDescriptionsChangedEventArgs();
					$ret.sortDescriptions = this.sortDescriptions;
					return $ret;
				})()));
			}
		}
		finally {
			this.isInSortDescriptions_CollectionChanged = false;
		}
	}
	private updateColumnSortDirection(columnName: string, newSortDirection: ColumnSortDirection): void {
		for (let i = 0; i < this.columns.count; i++) {
			if (this.columns._inner[i].propertyPath == columnName) {
				this.columns._inner[i].sortDirection = newSortDirection;
			}
		}
	}
	private columnSortDirectionFromListSortDirection(listSortDirection: ListSortDirection): ColumnSortDirection {
		switch (listSortDirection) {
			case ListSortDirection.Ascending: return ColumnSortDirection.Ascending;
			case ListSortDirection.Descending: return ColumnSortDirection.Descending;
		}

		return ColumnSortDirection.None;
	}
	private _syncingSelection: boolean = false;
	private selectedItems_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.ignoreSelectionChanged && this.actualDataSource != null) {
			if (!this._syncingSelection) {
				this._syncingSelection = true;
				switch (e.action) {
					case NotifyCollectionChangedAction.Add:
					if (e.newItems != null) {
						for (let i = 0; i < e.newItems.count; i++) {
							let key = this.adapter.getItemKey(this.getResolvedPrimaryKey(), e.newItems.item(i));
							this.selectedKeys.all.insert(i + e.newStartingIndex, key);
						}
					}
					break;

					case NotifyCollectionChangedAction.Remove:
					if (e.oldItems != null) {
						for (let j = 0; j < e.oldItems.count; j++) {
							this.selectedKeys.all.removeAt(e.oldStartingIndex);
						}
					}
					break;

					case NotifyCollectionChangedAction.Replace:
					if (e.oldItems != null) {
						for (let k = 0; k < e.oldItems.count; k++) {
							this.selectedKeys.all.removeAt(e.oldStartingIndex);
						}
					}
					if (e.newItems != null) {
						for (let m = 0; m < e.newItems.count; m++) {
							let key1 = this.adapter.getItemKey(this.getResolvedPrimaryKey(), e.newItems.item(m));
							this.selectedKeys.all.insert(m + e.newStartingIndex, key1);
						}
					}
					break;

					case NotifyCollectionChangedAction.Reset:
					this.selectedKeys.clear();
					for (let item of fromEnum<any>(this.selectedItems.all)) {
						let key2 = this.adapter.getItemKey(this.getResolvedPrimaryKey(), item);
						this.selectedKeys.add(key2);
					}
					break;

				}

				this.selectionManager.updateSelectedState();
				this._syncingSelection = false;
			}
		}
	}
	private selectedKeys_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.ignoreSelectionChanged && this.actualDataSource != null) {
			if (!this._syncingSelection) {
				this._syncingSelection = true;
				switch (e.action) {
					case NotifyCollectionChangedAction.Add:
					if (e.newItems != null) {
						for (let i = 0; i < e.newItems.count; i++) {
							let item = this.adapter.getItemForKey(<PrimaryKeyValue>e.newItems.item(i));
							this.selectedItems.all.insert1(i + e.newStartingIndex, item);
						}
					}
					break;

					case NotifyCollectionChangedAction.Remove:
					if (e.oldItems != null) {
						for (let j = 0; j < e.oldItems.count; j++) {
							this.selectedItems.all.removeAt(e.oldStartingIndex);
						}
					}
					break;

					case NotifyCollectionChangedAction.Replace:
					if (e.oldItems != null) {
						for (let k = 0; k < e.oldItems.count; k++) {
							this.selectedItems.all.removeAt(e.oldStartingIndex);
						}
					}
					if (e.newItems != null) {
						for (let m = 0; m < e.newItems.count; m++) {
							let item1 = this.adapter.getItemForKey(<PrimaryKeyValue>e.newItems.item(m));
							this.selectedItems.all.insert1(m + e.newStartingIndex, item1);
						}
					}
					break;

					case NotifyCollectionChangedAction.Reset:
					this.selectedItems.clear();
					for (let key of fromEnum<PrimaryKeyValue>(this.selectedKeys.all)) {
						let item2 = this.adapter.getItemForKey(key);
						this.selectedItems.add1(item2);
					}
					break;

				}

				this.selectionManager.updateSelectedState();
				this._syncingSelection = false;
			}
		}
	}
	private _updatingCellStates: boolean = false;
	private selectedCells_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:

			case NotifyCollectionChangedAction.Replace:
			for (let i = 0; i < e.newItems.count; i++) {
				(typeCast<CellKey>((<any>CellKey).$type, e.newItems.item(i))).grid = this;
			}
			break;

		}

		if (!this.ignoreSelectionChanged) {
			this._updatingCellStates = true;
			this.selectionManager.updateSelectedCellsState();
			this._updatingCellStates = false;
		}
	}
	private selectedCellRanges_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this._updatingCellStates = true;
		this.selectionManager.updateSelectedCellRangeState();
		this._updatingCellStates = false;
	}
	private _syncingPinning: boolean = false;
	private pinnedItems_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.ignorePinnedChanged && this.actualDataSource != null) {
			if (!this._syncingPinning) {
				this._syncingPinning = true;
				switch (e.action) {
					case NotifyCollectionChangedAction.Add:
					if (e.newItems != null) {
						for (let i = 0; i < e.newItems.count; i++) {
							let key = this.adapter.getItemKey(this.getResolvedPrimaryKey(), e.newItems.item(i));
							this.pinnedKeys.all.insert(i + e.newStartingIndex, key);
							this.adapter.pinRow(key);
						}
					}
					break;

					case NotifyCollectionChangedAction.Remove:
					if (e.oldItems != null) {
						for (let j = 0; j < e.oldItems.count; j++) {
							this.adapter.unpinRow(this.pinnedKeys.all._inner[e.oldStartingIndex]);
							this.pinnedKeys.all.removeAt(e.oldStartingIndex);
						}
					}
					break;

					case NotifyCollectionChangedAction.Replace:
					if (e.oldItems != null) {
						for (let k = 0; k < e.oldItems.count; k++) {
							this.adapter.unpinRow(this.pinnedKeys.all._inner[e.oldStartingIndex]);
							this.pinnedKeys.all.removeAt(e.oldStartingIndex);
						}
					}
					if (e.newItems != null) {
						for (let m = 0; m < e.newItems.count; m++) {
							let key1 = this.adapter.getItemKey(this.getResolvedPrimaryKey(), e.newItems.item(m));
							this.pinnedKeys.all.insert(m + e.newStartingIndex, key1);
							this.adapter.pinRow(key1);
						}
					}
					break;

					case NotifyCollectionChangedAction.Reset:
					this.pinnedKeys.clear();
					this.adapter.clearPinnedRows();
					for (let item of fromEnum<any>(this.pinnedItems.all)) {
						let key2 = this.adapter.getItemKey(this.getResolvedPrimaryKey(), item);
						this.pinnedKeys.add(key2);
						this.adapter.pinRow(key2);
					}
					break;

				}

				this._syncingPinning = false;
			}
		}
	}
	private pinnedKeys_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.ignorePinnedChanged && this.actualDataSource != null) {
			if (!this._syncingPinning) {
				this._syncingPinning = true;
				switch (e.action) {
					case NotifyCollectionChangedAction.Add:
					if (e.newItems != null) {
						for (let i = 0; i < e.newItems.count; i++) {
							let item = this.adapter.getItemForKey(<PrimaryKeyValue>e.newItems.item(i));
							this.pinnedItems.all.insert1(i + e.newStartingIndex, item);
							this.adapter.pinRow(<PrimaryKeyValue>e.newItems.item(i));
						}
					}
					break;

					case NotifyCollectionChangedAction.Remove:
					if (e.oldItems != null) {
						for (let j = 0; j < e.oldItems.count; j++) {
							this.adapter.unpinRow(<PrimaryKeyValue>e.oldItems.item(j));
							this.pinnedItems.all.removeAt(e.oldStartingIndex);
						}
					}
					break;

					case NotifyCollectionChangedAction.Replace:
					if (e.oldItems != null) {
						for (let k = 0; k < e.oldItems.count; k++) {
							this.adapter.unpinRow(<PrimaryKeyValue>e.oldItems.item(k));
							this.pinnedItems.all.removeAt(e.oldStartingIndex);
						}
					}
					if (e.newItems != null) {
						for (let m = 0; m < e.newItems.count; m++) {
							let item1 = this.adapter.getItemForKey(<PrimaryKeyValue>e.newItems.item(m));
							let index = this.adapter.indexOfKey(<PrimaryKeyValue>e.newItems.item(m));
							this.pinnedItems.all.insert1(m + e.newStartingIndex, item1);
							this.adapter.pinRow(<PrimaryKeyValue>e.newItems.item(m));
						}
					}
					break;

					case NotifyCollectionChangedAction.Reset:
					this.pinnedItems.clear();
					this.adapter.clearPinnedRows();
					for (let key of fromEnum<PrimaryKeyValue>(this.pinnedKeys.all)) {
						let item2 = this.adapter.getItemForKey(key);
						this.pinnedItems.add1(item2);
						this.adapter.pinRow(key);
					}
					break;

				}

				this._syncingPinning = false;
			}
		}
	}
	private _animationManager: GridAnimationManager = new GridAnimationManager();
	get animationManager(): GridAnimationManager {
		return this._animationManager;
	}
	set animationManager(value: GridAnimationManager) {
		this._animationManager = value;
	}
	private _delayedExecutionManager: IDelayedExecutionManager = null;
	get delayedExecutionManager(): IDelayedExecutionManager {
		return this._delayedExecutionManager;
	}
	set delayedExecutionManager(value: IDelayedExecutionManager) {
		this._delayedExecutionManager = value;
	}
	private _responsiveEngine: ResponsiveEngine = null;
	get responsiveEngine(): ResponsiveEngine {
		return this._responsiveEngine;
	}
	private _adapter: IDataAdapter = null;
	get adapter(): IDataAdapter {
		return this._adapter;
	}
	set adapter(value: IDataAdapter) {
		this._adapter = value;
	}
	private _columnController: ColumnController = null;
	get columnController(): ColumnController {
		return this._columnController;
	}
	set columnController(value: ColumnController) {
		this._columnController = value;
	}
	private _gridLayerController: GridLayerController = new GridLayerController();
	get gridLayerController(): GridLayerController {
		return this._gridLayerController;
	}
	set gridLayerController(value: GridLayerController) {
		this._gridLayerController = value;
	}
	private _spatialEngine: SpatialEngine = new SpatialEngine();
	get spatialEngine(): SpatialEngine {
		return this._spatialEngine;
	}
	set spatialEngine(value: SpatialEngine) {
		this._spatialEngine = value;
	}
	private _effectManager: GridEffectManager = null;
	get effectManager(): GridEffectManager {
		return this._effectManager;
	}
	set effectManager(value: GridEffectManager) {
		this._effectManager = value;
	}
	private _selectionManager: SelectionManager = null;
	get selectionManager(): SelectionManager {
		return this._selectionManager;
	}
	set selectionManager(value: SelectionManager) {
		this._selectionManager = value;
	}
	private _activationManager: ActivationManager = null;
	get activationManager(): ActivationManager {
		return this._activationManager;
	}
	set activationManager(value: ActivationManager) {
		this._activationManager = value;
	}
	private _sortManager: SortManager = null;
	get sortManager(): SortManager {
		return this._sortManager;
	}
	set sortManager(value: SortManager) {
		this._sortManager = value;
	}
	private _tickProvider: ITickProvider = null;
	get tickProvider(): ITickProvider {
		return this._tickProvider;
	}
	set tickProvider(value: ITickProvider) {
		this._tickProvider = value;
		this._effectManager = new GridEffectManager(this._tickProvider, this);
	}
	private static readonly sectionHeaderPropertyName: string = "SectionHeader";
	private _sectionHeader: SectionHeader = null;
	get sectionHeader(): SectionHeader {
		return this._sectionHeader;
	}
	set sectionHeader(value: SectionHeader) {
		let oldValue = this._sectionHeader;
		this._sectionHeader = value;
		if (this._sectionHeader == null) {
			this._sectionHeader = new SectionHeader();
		}
		this._sectionHeader.grid = this;
		if (oldValue != this._sectionHeader) {
			this.onPropertyChanged(Grid.sectionHeaderPropertyName, oldValue, this._sectionHeader);
		}
	}
	private _sectionFooter: SectionFooter = new SectionFooter();
	get sectionFooter(): SectionFooter {
		return this._sectionFooter;
	}
	set sectionFooter(value: SectionFooter) {
		this._sectionFooter = value;
	}
	private static readonly summaryRowRootPropertyName: string = "SummaryRowRoot";
	private _summaryRowRoot: SummaryRowRoot = null;
	get summaryRowRoot(): SummaryRowRoot {
		return this._summaryRowRoot;
	}
	set summaryRowRoot(value: SummaryRowRoot) {
		let oldValue = this._summaryRowRoot;
		this._summaryRowRoot = value;
		if (this._summaryRowRoot == null) {
			this._summaryRowRoot = new SummaryRowRoot();
		}
		this._summaryRowRoot.grid = this;
		if (oldValue != this._summaryRowRoot) {
			this.onPropertyChanged(Grid.summaryRowRootPropertyName, oldValue, this._summaryRowRoot);
		}
	}
	private static readonly summaryRowSectionPropertyName: string = "SummaryRowSection";
	private _summaryRowSection: SummaryRowSection = null;
	get summaryRowSection(): SummaryRowSection {
		return this._summaryRowSection;
	}
	set summaryRowSection(value: SummaryRowSection) {
		let oldValue = this._summaryRowSection;
		this._summaryRowSection = value;
		if (this._summaryRowSection == null) {
			this._summaryRowSection = new SummaryRowSection();
		}
		this._summaryRowSection.grid = this;
		if (oldValue != this._summaryRowSection) {
			this.onPropertyChanged(Grid.summaryRowSectionPropertyName, oldValue, this._summaryRowSection);
		}
	}
	static readonly rowSeparatorPropertyName: string = "RowSeparator";
	private _rowSeparator: RowSeparator = null;
	get rowSeparator(): RowSeparator {
		return this._rowSeparator;
	}
	set rowSeparator(value: RowSeparator) {
		let oldValue = this._rowSeparator;
		this._rowSeparator = value;
		if (oldValue != this._rowSeparator) {
			this.onPropertyChanged(Grid.rowSeparatorPropertyName, oldValue, this._rowSeparator);
		}
	}
	static readonly headerSeparatorPropertyName: string = "HeaderSeparator";
	private _headerSeparator: HeaderSeparator = null;
	get headerSeparator(): HeaderSeparator {
		return this._headerSeparator;
	}
	set headerSeparator(value: HeaderSeparator) {
		let oldValue = this._headerSeparator;
		this._headerSeparator = value;
		if (oldValue != this._headerSeparator) {
			this.onPropertyChanged(Grid.headerSeparatorPropertyName, oldValue, this._headerSeparator);
		}
	}
	static readonly columnResizingSeparatorPropertyName: string = "ColumnResizingSeparator";
	private _columnResizingSeparator: ColumnResizingSeparator = null;
	get columnResizingSeparator(): ColumnResizingSeparator {
		return this._columnResizingSeparator;
	}
	set columnResizingSeparator(value: ColumnResizingSeparator) {
		let oldValue = this._columnResizingSeparator;
		this._columnResizingSeparator = value;
		if (oldValue != this._columnResizingSeparator) {
			this.onPropertyChanged(Grid.columnResizingSeparatorPropertyName, oldValue, this._columnResizingSeparator);
		}
	}
	static readonly columnMovingSeparatorPropertyName: string = "ColumnMovingSeparator";
	private _columnMovingSeparator: ColumnMovingSeparator = null;
	get columnMovingSeparator(): ColumnMovingSeparator {
		return this._columnMovingSeparator;
	}
	set columnMovingSeparator(value: ColumnMovingSeparator) {
		let oldValue = this._columnMovingSeparator;
		this._columnMovingSeparator = value;
		if (oldValue != this._columnMovingSeparator) {
			this.onPropertyChanged(Grid.columnMovingSeparatorPropertyName, oldValue, this._columnMovingSeparator);
		}
	}
	static readonly pinnedAreaSeparatorPropertyName: string = "PinnedAreaSeparator";
	private _pinnedAreaSeparator: PinnedAreaSeparator = null;
	get pinnedAreaSeparator(): PinnedAreaSeparator {
		return this._pinnedAreaSeparator;
	}
	set pinnedAreaSeparator(value: PinnedAreaSeparator) {
		let oldValue = this._pinnedAreaSeparator;
		this._pinnedAreaSeparator = value;
		if (oldValue != this._pinnedAreaSeparator) {
			this.onPropertyChanged(Grid.pinnedAreaSeparatorPropertyName, oldValue, this._pinnedAreaSeparator);
		}
	}
	static readonly dataSourceDesiredPropertiesPropertyName: string = "DataSourceDesiredProperties";
	private _dataSourceDesiredProperties: string[] = null;
	get dataSourceDesiredProperties(): string[] {
		return this._dataSourceDesiredProperties;
	}
	set dataSourceDesiredProperties(value: string[]) {
		let oldValue = this._dataSourceDesiredProperties;
		this._dataSourceDesiredProperties = value;
		if (oldValue != this._dataSourceDesiredProperties) {
			this.onPropertyChanged(Grid.rowSeparatorPropertyName, oldValue, this._dataSourceDesiredProperties);
		}
	}
	private _visibilityEngine: VisibilityEngine = new VisibilityEngine();
	get visibilityEngine(): VisibilityEngine {
		return this._visibilityEngine;
	}
	set visibilityEngine(value: VisibilityEngine) {
		this._visibilityEngine = value;
	}
	private _viewportManager: IViewportManager = null;
	get viewportManager(): IViewportManager {
		return this._viewportManager;
	}
	set viewportManager(value: IViewportManager) {
		this._viewportManager = value;
	}
	private _availableWidth: number = 0;
	get availableWidth(): number {
		return this._availableWidth;
	}
	set availableWidth(value: number) {
		this._availableWidth = value;
	}
	private _availableHeight: number = 0;
	get availableHeight(): number {
		return this._availableHeight;
	}
	set availableHeight(value: number) {
		this._availableHeight = value;
	}
	static readonly rowHeightPropertyName: string = "RowHeight";
	get rowHeight(): number {
		return this._rowHeight;
	}
	set rowHeight(value: number) {
		let oldValue = this._rowHeight;
		this._rowHeight = value;
		if (oldValue != this._rowHeight) {
			this.onPropertyChanged(Grid.rowHeightPropertyName, oldValue, this._rowHeight);
		}
	}
	private _defaultColumnWidth: ColumnWidth = ColumnWidth.$default;
	static readonly defaultColumnWidthPropertyName: string = "DefaultColumnWidth";
	get defaultColumnWidth(): ColumnWidth {
		return this._defaultColumnWidth;
	}
	set defaultColumnWidth(value: ColumnWidth) {
		let oldValue = this._defaultColumnWidth;
		this._defaultColumnWidth = value;
		if (oldValue != this._defaultColumnWidth) {
			this.onPropertyChanged(Grid.defaultColumnWidthPropertyName, oldValue, this._defaultColumnWidth);
		}
	}
	private _defaultColumnMinWidth: number = 0;
	static readonly defaultColumnMinWidthPropertyName: string = "DefaultColumnMinWidth";
	get defaultColumnMinWidth(): number {
		return this._defaultColumnMinWidth;
	}
	set defaultColumnMinWidth(value: number) {
		let oldValue = this._defaultColumnMinWidth;
		this._defaultColumnMinWidth = value;
		if (oldValue != this._defaultColumnMinWidth) {
			this.onPropertyChanged(Grid.defaultColumnMinWidthPropertyName, oldValue, this._defaultColumnMinWidth);
		}
	}
	private _headerHeight: number = <number>truncate(DeviceUtils.toPixelUnits(64));
	static readonly headerHeightPropertyName: string = "HeaderHeight";
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		let oldValue = this._headerHeight;
		this._headerHeight = value;
		if (oldValue != this._headerHeight) {
			this.onPropertyChanged(Grid.headerHeightPropertyName, oldValue, this._headerHeight);
		}
	}
	private _sectionHeaderHeight: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	static readonly sectionHeaderHeightPropertyName: string = "SectionHeaderHeight";
	get sectionHeaderHeight(): number {
		return this._sectionHeaderHeight;
	}
	set sectionHeaderHeight(value: number) {
		let oldValue = this._sectionHeaderHeight;
		this._sectionHeaderHeight = value;
		if (oldValue != this._sectionHeaderHeight) {
			this.onPropertyChanged(Grid.sectionHeaderHeightPropertyName, oldValue, this._sectionHeaderHeight);
		}
	}
	private _itemsSource: any = null;
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	get itemsSource(): any {
		return this._itemsSource;
	}
	set itemsSource(value: any) {
		let oldValue = this._itemsSource;
		this._itemsSource = value;
		if (oldValue != this._itemsSource) {
			this.onPropertyChanged(Grid.itemsSourcePropertyName, oldValue, this._itemsSource);
		}
	}
	private _sectionFooterHeight: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	static readonly sectionFooterHeightPropertyName: string = "SectionFooterHeight";
	get sectionFooterHeight(): number {
		return this._sectionFooterHeight;
	}
	set sectionFooterHeight(value: number) {
		let oldValue = this._sectionFooterHeight;
		this._sectionFooterHeight = value;
		if (oldValue != this._sectionFooterHeight) {
			this.onPropertyChanged(Grid.sectionFooterHeightPropertyName, oldValue, this._sectionFooterHeight);
		}
	}
	private _rowSpacingHeight: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	static readonly rowSpacingHeightPropertyName: string = "RowSpacingHeight";
	get rowSpacingHeight(): number {
		return this._rowSpacingHeight;
	}
	set rowSpacingHeight(value: number) {
		let oldValue = this._rowSpacingHeight;
		this._rowSpacingHeight = value;
		if (oldValue != this._rowSpacingHeight) {
			this.onPropertyChanged(Grid.rowSpacingHeightPropertyName, oldValue, this._rowSpacingHeight);
		}
	}
	private _columnSpacingWidth: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	static readonly columnSpacingWidthPropertyName: string = "ColumnSpacingWidth";
	get columnSpacingWidth(): number {
		return this._columnSpacingWidth;
	}
	set columnSpacingWidth(value: number) {
		let oldValue = this._columnSpacingWidth;
		this._columnSpacingWidth = value;
		if (oldValue != this._columnSpacingWidth) {
			this.onPropertyChanged(Grid.columnSpacingWidthPropertyName, oldValue, this._columnSpacingWidth);
		}
	}
	private _headerClickAction: HeaderClickAction = HeaderClickAction.SortByOneColumnOnly;
	static readonly headerClickActionPropertyName: string = "HeaderClickAction";
	get headerClickAction(): HeaderClickAction {
		return this._headerClickAction;
	}
	set headerClickAction(value: HeaderClickAction) {
		let oldValue = this._headerClickAction;
		this._headerClickAction = value;
		if (oldValue != this._headerClickAction) {
			this.onPropertyChanged(Grid.headerClickActionPropertyName, enumGetBox<HeaderClickAction>(HeaderClickAction_$type, oldValue), enumGetBox<HeaderClickAction>(HeaderClickAction_$type, this._headerClickAction));
			if ((this._headerClickAction == HeaderClickAction.SortByOneColumnOnly || this._headerClickAction == HeaderClickAction.SortByOneColumnOnlyTriState) && (oldValue == HeaderClickAction.SortByMultipleColumns || oldValue == HeaderClickAction.SortByMultipleColumnsTriState)) {
				this.sortManager.clearAllButPrimarySortDescription();
			}
		}
	}
	private _autoGenerateColumns: boolean = true;
	static readonly autoGenerateColumnsPropertyName: string = "AutoGenerateColumns";
	get autoGenerateColumns(): boolean {
		return this._autoGenerateColumns;
	}
	set autoGenerateColumns(value: boolean) {
		let oldValue = this._autoGenerateColumns;
		this._autoGenerateColumns = value;
		if (oldValue != this._autoGenerateColumns) {
			this.onPropertyChanged(Grid.autoGenerateColumnsPropertyName, oldValue, this._autoGenerateColumns);
		}
	}
	private _rowSeparatorHeight: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	static readonly rowSeparatorHeightPropertyName: string = "RowSeparatorHeight";
	get rowSeparatorHeight(): number {
		return this._rowSeparatorHeight;
	}
	set rowSeparatorHeight(value: number) {
		let oldValue = this._rowSeparatorHeight;
		this._rowSeparatorHeight = value;
		if (oldValue != this._rowSeparatorHeight) {
			this.onPropertyChanged(Grid.rowSeparatorHeightPropertyName, oldValue, this._rowSeparatorHeight);
		}
	}
	private _isPlaceholderRenderingEnabled: boolean = true;
	static readonly isPlaceholderRenderingEnabledPropertyName: string = "IsPlaceholderRenderingEnabled";
	get isPlaceholderRenderingEnabled(): boolean {
		return this._isPlaceholderRenderingEnabled;
	}
	set isPlaceholderRenderingEnabled(value: boolean) {
		let oldValue = this._isPlaceholderRenderingEnabled;
		this._isPlaceholderRenderingEnabled = value;
		if (oldValue != this._isPlaceholderRenderingEnabled) {
			this.onPropertyChanged(Grid.isPlaceholderRenderingEnabledPropertyName, oldValue, this._isPlaceholderRenderingEnabled);
		}
	}
	private isColumnAddingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnAddingAnimation(column) != ColumnShowingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	private getResolvedColumnAddingAnimation(column: Column): ColumnShowingAnimationMode {
		if (this._columnAddingAnimationMode == ColumnShowingAnimationMode.Auto) {
			return column.getPreferredShowingAnimationMode();
		}
		return this._columnAddingAnimationMode;
	}
	static readonly columnAddingAnimationModePropertyName: string = "ColumnAddingAnimationMode";
	private _columnAddingAnimationMode: ColumnShowingAnimationMode = ColumnShowingAnimationMode.None;
	get columnAddingAnimationMode(): ColumnShowingAnimationMode {
		return this._columnAddingAnimationMode;
	}
	set columnAddingAnimationMode(value: ColumnShowingAnimationMode) {
		let oldValue = this._columnAddingAnimationMode;
		this._columnAddingAnimationMode = value;
		this.onPropertyChanged(Grid.columnAddingAnimationModePropertyName, enumGetBox<ColumnShowingAnimationMode>(ColumnShowingAnimationMode_$type, oldValue), enumGetBox<ColumnShowingAnimationMode>(ColumnShowingAnimationMode_$type, this._columnAddingAnimationMode));
	}
	get isColumnPropertyUpdatingAnimationEnabled(): boolean {
		return this._columnPropertyUpdatingAnimationMode != ColumnPropertyUpdatingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	static readonly columnPropertyUpdatingAnimationModePropertyName: string = "ColumnPropertyUpdatingAnimationMode";
	private _columnPropertyUpdatingAnimationMode: ColumnPropertyUpdatingAnimationMode = ColumnPropertyUpdatingAnimationMode.Auto;
	get columnPropertyUpdatingAnimationMode(): ColumnPropertyUpdatingAnimationMode {
		return this._columnPropertyUpdatingAnimationMode;
	}
	set columnPropertyUpdatingAnimationMode(value: ColumnPropertyUpdatingAnimationMode) {
		let oldValue = this._columnPropertyUpdatingAnimationMode;
		this._columnPropertyUpdatingAnimationMode = value;
		this.onPropertyChanged(Grid.columnPropertyUpdatingAnimationModePropertyName, enumGetBox<ColumnPropertyUpdatingAnimationMode>(ColumnPropertyUpdatingAnimationMode_$type, oldValue), enumGetBox<ColumnPropertyUpdatingAnimationMode>(ColumnPropertyUpdatingAnimationMode_$type, this._columnPropertyUpdatingAnimationMode));
	}
	protected get isColumnAnimationEnabled(): boolean {
		return this.renderingEngine.initialRefreshFinished;
	}
	get isCellDataLoadedAnimationEnabled(): boolean {
		return this._cellDataLoadedAnimationMode != CellDataLoadedAnimationMode.None;
	}
	static readonly cellDataLoadedAnimationModePropertyName: string = "CellDataLoadedAnimationMode";
	private _cellDataLoadedAnimationMode: CellDataLoadedAnimationMode = CellDataLoadedAnimationMode.Auto;
	get cellDataLoadedAnimationMode(): CellDataLoadedAnimationMode {
		return this._cellDataLoadedAnimationMode;
	}
	set cellDataLoadedAnimationMode(value: CellDataLoadedAnimationMode) {
		let oldValue = this._cellDataLoadedAnimationMode;
		this._cellDataLoadedAnimationMode = value;
		this.onPropertyChanged(Grid.cellDataLoadedAnimationModePropertyName, enumGetBox<CellDataLoadedAnimationMode>(CellDataLoadedAnimationMode_$type, oldValue), enumGetBox<CellDataLoadedAnimationMode>(CellDataLoadedAnimationMode_$type, this._cellDataLoadedAnimationMode));
	}
	get isRowSelectionAnimationEnabled(): boolean {
		return this._rowSelectionAnimationMode != RowSelectionAnimationMode.None;
	}
	static readonly rowSelectionAnimationModePropertyName: string = "RowSelectionAnimationMode";
	private _rowSelectionAnimationMode: RowSelectionAnimationMode = RowSelectionAnimationMode.Auto;
	get rowSelectionAnimationMode(): RowSelectionAnimationMode {
		return this._rowSelectionAnimationMode;
	}
	set rowSelectionAnimationMode(value: RowSelectionAnimationMode) {
		let oldValue = this._rowSelectionAnimationMode;
		this._rowSelectionAnimationMode = value;
		this.onPropertyChanged(Grid.rowSelectionAnimationModePropertyName, enumGetBox<RowSelectionAnimationMode>(RowSelectionAnimationMode_$type, oldValue), enumGetBox<RowSelectionAnimationMode>(RowSelectionAnimationMode_$type, this._rowSelectionAnimationMode));
	}
	get isCellSelectionAnimationEnabled(): boolean {
		return this._cellSelectionAnimationMode != CellSelectionAnimationMode.None;
	}
	static readonly cellSelectionAnimationModePropertyName: string = "CellSelectionAnimationMode";
	private _cellSelectionAnimationMode: CellSelectionAnimationMode = CellSelectionAnimationMode.Auto;
	get cellSelectionAnimationMode(): CellSelectionAnimationMode {
		return this._cellSelectionAnimationMode;
	}
	set cellSelectionAnimationMode(value: CellSelectionAnimationMode) {
		let oldValue = this._cellSelectionAnimationMode;
		this._cellSelectionAnimationMode = value;
		this.onPropertyChanged(Grid.cellSelectionAnimationModePropertyName, enumGetBox<CellSelectionAnimationMode>(CellSelectionAnimationMode_$type, oldValue), enumGetBox<CellSelectionAnimationMode>(CellSelectionAnimationMode_$type, this._cellSelectionAnimationMode));
	}
	private _columnAnimationSettings: GridColumnAnimationSettings = new GridColumnAnimationSettings();
	static readonly columnAnimationSettingsPropertyName: string = "ColumnAnimationSettings";
	get columnAnimationSettings(): GridColumnAnimationSettings {
		return this._columnAnimationSettings;
	}
	set columnAnimationSettings(value: GridColumnAnimationSettings) {
		let oldValue = this._columnAnimationSettings;
		this._columnAnimationSettings = value;
		if (oldValue != this._columnAnimationSettings) {
			this.onPropertyChanged(Grid.columnAnimationSettingsPropertyName, oldValue, this._columnAnimationSettings);
		}
	}
	private _animationSettings: GridAnimationSettings = new GridAnimationSettings();
	static readonly animationSettingsPropertyName: string = "AnimationSettings";
	get animationSettings(): GridAnimationSettings {
		return this._animationSettings;
	}
	set animationSettings(value: GridAnimationSettings) {
		let oldValue = this._animationSettings;
		this._animationSettings = value;
		if (oldValue != this._animationSettings) {
			this.onPropertyChanged(Grid.animationSettingsPropertyName, oldValue, this._animationSettings);
		}
	}
	isColumnResizingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnResizingAnimation(column) != ColumnResizingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	private getResolvedColumnResizingAnimation(column: Column): ColumnResizingAnimationMode {
		if (this._columnResizingAnimationMode == ColumnResizingAnimationMode.Auto) {
			return column.getPreferredResizingAnimationMode();
		}
		return this._columnResizingAnimationMode;
	}
	static readonly columnResizingAnimationModePropertyName: string = "ColumnResizingAnimationMode";
	private _columnResizingAnimationMode: ColumnResizingAnimationMode = ColumnResizingAnimationMode.None;
	get columnResizingAnimationMode(): ColumnResizingAnimationMode {
		return this._columnResizingAnimationMode;
	}
	set columnResizingAnimationMode(value: ColumnResizingAnimationMode) {
		let oldValue = this._columnResizingAnimationMode;
		this._columnResizingAnimationMode = value;
		this.onPropertyChanged(Grid.columnResizingAnimationModePropertyName, enumGetBox<ColumnResizingAnimationMode>(ColumnResizingAnimationMode_$type, oldValue), enumGetBox<ColumnResizingAnimationMode>(ColumnResizingAnimationMode_$type, this._columnResizingAnimationMode));
	}
	private isColumnShowingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnShowingAnimation(column) != ColumnShowingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	private getResolvedColumnShowingAnimation(column: Column): ColumnShowingAnimationMode {
		if (this._columnShowingAnimationMode == ColumnShowingAnimationMode.Auto) {
			return column.getPreferredShowingAnimationMode();
		}
		return this._columnShowingAnimationMode;
	}
	static readonly columnShowingAnimationModePropertyName: string = "ColumnShowingAnimationMode";
	private _columnShowingAnimationMode: ColumnShowingAnimationMode = ColumnShowingAnimationMode.None;
	get columnShowingAnimationMode(): ColumnShowingAnimationMode {
		return this._columnShowingAnimationMode;
	}
	set columnShowingAnimationMode(value: ColumnShowingAnimationMode) {
		let oldValue = this._columnShowingAnimationMode;
		this._columnShowingAnimationMode = value;
		this.onPropertyChanged(Grid.columnShowingAnimationModePropertyName, enumGetBox<ColumnShowingAnimationMode>(ColumnShowingAnimationMode_$type, oldValue), enumGetBox<ColumnShowingAnimationMode>(ColumnShowingAnimationMode_$type, this._columnShowingAnimationMode));
	}
	private isColumnMovingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnMovingAnimation(column) != ColumnMovingAnimationMode.None && this.isColumnAnimationEnabled && !this.suppressColumnMoveAnimations;
	}
	private getResolvedColumnMovingAnimation(column: Column): ColumnMovingAnimationMode {
		if (this._columnMovingAnimationMode == ColumnMovingAnimationMode.Auto) {
			return ColumnMovingAnimationMode.SlideOver;
		}
		return this._columnMovingAnimationMode;
	}
	static readonly columnMovingAnimationModePropertyName: string = "ColumnMovingAnimationMode";
	private _columnMovingAnimationMode: ColumnMovingAnimationMode = ColumnMovingAnimationMode.None;
	get columnMovingAnimationMode(): ColumnMovingAnimationMode {
		return this._columnMovingAnimationMode;
	}
	set columnMovingAnimationMode(value: ColumnMovingAnimationMode) {
		let oldValue = this._columnMovingAnimationMode;
		this._columnMovingAnimationMode = value;
		this.onPropertyChanged(Grid.columnMovingAnimationModePropertyName, enumGetBox<ColumnMovingAnimationMode>(ColumnMovingAnimationMode_$type, oldValue), enumGetBox<ColumnMovingAnimationMode>(ColumnMovingAnimationMode_$type, this._columnMovingAnimationMode));
	}
	private isColumnHidingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnHidingAnimation(column) != ColumnHidingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	private getResolvedColumnHidingAnimation(column: Column): ColumnHidingAnimationMode {
		if (this._columnHidingAnimationMode == ColumnHidingAnimationMode.Auto) {
			return column.getPreferredHidingAnimationMode();
		}
		return this._columnHidingAnimationMode;
	}
	static readonly columnHidingAnimationModePropertyName: string = "ColumnHidingAnimationMode";
	private _columnHidingAnimationMode: ColumnHidingAnimationMode = ColumnHidingAnimationMode.None;
	get columnHidingAnimationMode(): ColumnHidingAnimationMode {
		return this._columnHidingAnimationMode;
	}
	set columnHidingAnimationMode(value: ColumnHidingAnimationMode) {
		let oldValue = this._columnHidingAnimationMode;
		this._columnHidingAnimationMode = value;
		this.onPropertyChanged(Grid.columnHidingAnimationModePropertyName, enumGetBox<ColumnHidingAnimationMode>(ColumnHidingAnimationMode_$type, oldValue), enumGetBox<ColumnHidingAnimationMode>(ColumnHidingAnimationMode_$type, this._columnHidingAnimationMode));
	}
	private isColumnExchangingAnimationEnabled(column: Column): boolean {
		return this.getResolvedColumnExchangingAnimation(column) != ColumnExchangingAnimationMode.None && this.isColumnAnimationEnabled;
	}
	private getResolvedColumnExchangingAnimation(column: Column): ColumnExchangingAnimationMode {
		if (this._columnExchangingAnimationMode == ColumnExchangingAnimationMode.Auto) {
			return column.getPreferredExchangingAnimationMode();
		}
		return this._columnExchangingAnimationMode;
	}
	static readonly columnExchangingAnimationModePropertyName: string = "ColumnExchangingAnimationMode";
	private _columnExchangingAnimationMode: ColumnExchangingAnimationMode = ColumnExchangingAnimationMode.None;
	get columnExchangingAnimationMode(): ColumnExchangingAnimationMode {
		return this._columnExchangingAnimationMode;
	}
	set columnExchangingAnimationMode(value: ColumnExchangingAnimationMode) {
		let oldValue = this._columnExchangingAnimationMode;
		this._columnExchangingAnimationMode = value;
		this.onPropertyChanged(Grid.columnExchangingAnimationModePropertyName, enumGetBox<ColumnExchangingAnimationMode>(ColumnExchangingAnimationMode_$type, oldValue), enumGetBox<ColumnExchangingAnimationMode>(ColumnExchangingAnimationMode_$type, this._columnExchangingAnimationMode));
	}
	private _inset: Thickness = new Thickness(1, 0, 0, 0, 0);
	static readonly insetPropertyName: string = "Inset";
	get inset(): Thickness {
		return this._inset;
	}
	set inset(value: Thickness) {
		let oldValue = this._inset;
		this._inset = value;
		if (oldValue != this._inset) {
			this.onPropertyChanged(Grid.insetPropertyName, oldValue, this._inset);
		}
	}
	private _selectionMode: GridSelectionMode = GridSelectionMode.None;
	static readonly selectionModePropertyName: string = "SelectionMode";
	get selectionMode(): GridSelectionMode {
		return this._selectionMode;
	}
	set selectionMode(value: GridSelectionMode) {
		let oldValue = this._selectionMode;
		this._selectionMode = value;
		if (oldValue != this._selectionMode) {
			this.onPropertyChanged(Grid.selectionModePropertyName, enumGetBox<GridSelectionMode>(GridSelectionMode_$type, oldValue), enumGetBox<GridSelectionMode>(GridSelectionMode_$type, this._selectionMode));
		}
	}
	private _activationMode: GridActivationMode = GridActivationMode.None;
	static readonly activationModePropertyName: string = "ActivationMode";
	get activationMode(): GridActivationMode {
		return this._activationMode;
	}
	set activationMode(value: GridActivationMode) {
		let oldValue = this._activationMode;
		this._activationMode = value;
		if (oldValue != this._activationMode) {
			this.onPropertyChanged(Grid.activationModePropertyName, enumGetBox<GridActivationMode>(GridActivationMode_$type, oldValue), enumGetBox<GridActivationMode>(GridActivationMode_$type, this._activationMode));
		}
	}
	private _selectionBehavior: GridSelectionBehavior = GridSelectionBehavior.Toggle;
	static readonly selectionBehaviorPropertyName: string = "SelectionBehavior";
	get selectionBehavior(): GridSelectionBehavior {
		return this._selectionBehavior;
	}
	set selectionBehavior(value: GridSelectionBehavior) {
		let oldValue = this._selectionBehavior;
		this._selectionBehavior = value;
		if (oldValue != this._selectionBehavior) {
			this.onPropertyChanged(Grid.selectionBehaviorPropertyName, enumGetBox<GridSelectionBehavior>(GridSelectionBehavior_$type, oldValue), enumGetBox<GridSelectionBehavior>(GridSelectionBehavior_$type, this._selectionBehavior));
		}
	}
	private _ignoreSelectionChanges: boolean = false;
	get ignoreSelectionChanged(): boolean {
		return this._ignoreSelectionChanges;
	}
	set ignoreSelectionChanged(value: boolean) {
		this._ignoreSelectionChanges = value;
	}
	private _selectedItems: GridSelectedItemsCollection = new GridSelectedItemsCollection();
	static readonly selectedItemsPropertyName: string = "SelectedItems";
	get selectedItems(): GridSelectedItemsCollection {
		return this._selectedItems;
	}
	private _selectedKeys: GridSelectedKeysCollection = new GridSelectedKeysCollection();
	static readonly selectedKeysPropertyName: string = "SelectedKeys";
	get selectedKeys(): GridSelectedKeysCollection {
		return this._selectedKeys;
	}
	private _selectedCells: GridSelectedCellsCollection = new GridSelectedCellsCollection();
	static readonly selectedCellsPropertyName: string = "SelectedCells";
	get selectedCells(): GridSelectedCellsCollection {
		return this._selectedCells;
	}
	private _selectedCellRanges: GridSelectedCellRangesCollection = new GridSelectedCellRangesCollection();
	static readonly selectedCellRangesPropertyName: string = "SelectedCellRanges";
	get selectedCellRanges(): GridSelectedCellRangesCollection {
		return this._selectedCellRanges;
	}
	private _ignorePinnedChanged: boolean = false;
	get ignorePinnedChanged(): boolean {
		return this._ignorePinnedChanged;
	}
	set ignorePinnedChanged(value: boolean) {
		this._ignorePinnedChanged = value;
	}
	private _pinnedItems: GridSelectedItemsCollection = new GridSelectedItemsCollection();
	static readonly pinnedItemsPropertyName: string = "PinnedItems";
	get pinnedItems(): GridSelectedItemsCollection {
		return this._pinnedItems;
	}
	private _pinnedKeys: GridSelectedKeysCollection = new GridSelectedKeysCollection();
	static readonly pinnedKeysPropertyName: string = "PinnedKeys";
	get pinnedKeys(): GridSelectedKeysCollection {
		return this._pinnedKeys;
	}
	private synchronizeKeysAndItems(items: GridSelectedItemsCollection, keys: GridSelectedKeysCollection): void {
		if (this.actualDataSource == null) {
			return;
		}
		if (items.all.count > 0 && keys.all.count == 0) {
			let primaryKey = this.getResolvedPrimaryKey();
			for (let item of fromEnum<any>(items.all)) {
				let key = this.adapter.getItemKey(primaryKey, item);
				keys.all.add(key);
			}
		} else if (items.all.count == 0 && keys.all.count > 0) {
			for (let key1 of fromEnum<PrimaryKeyValue>(keys.all)) {
				let item1 = this.adapter.getItemForKey(key1);
				items.all.add1(item1);
			}
		} else {
			items.all.clear();
			for (let key2 of fromEnum<PrimaryKeyValue>(keys.all)) {
				let item2 = this.adapter.getItemForKey(key2);
				items.all.add1(item2);
			}
		}
	}
	private _isFilterUIEnabled: boolean = false;
	static readonly isFilterUIEnabledPropertyName: string = "IsFilterUIEnabled";
	get isFilterUIEnabled(): boolean {
		return this._isFilterUIEnabled;
	}
	set isFilterUIEnabled(value: boolean) {
		let oldValue = this._isFilterUIEnabled;
		this._isFilterUIEnabled = value;
		if (oldValue != this._isFilterUIEnabled) {
			this.onPropertyChanged(Grid.isFilterUIEnabledPropertyName, oldValue, this._isFilterUIEnabled);
		}
	}
	private _isGroupRowSticky: boolean = true;
	static readonly isGroupRowStickyPropertyName: string = "IsGroupRowSticky";
	get isGroupRowSticky(): boolean {
		return this._isGroupRowSticky;
	}
	set isGroupRowSticky(value: boolean) {
		let oldValue = this._isGroupRowSticky;
		this._isGroupRowSticky = value;
		if (oldValue != this._isGroupRowSticky) {
			this.onPropertyChanged(Grid.isGroupRowStickyPropertyName, oldValue, this._isGroupRowSticky);
		}
	}
	private _isHeaderSeparatorVisible: boolean = true;
	static readonly isHeaderSeparatorVisiblePropertyName: string = "IsHeaderSeparatorVisible";
	get isHeaderSeparatorVisible(): boolean {
		return this._isHeaderSeparatorVisible;
	}
	set isHeaderSeparatorVisible(value: boolean) {
		let oldValue = this._isHeaderSeparatorVisible;
		this._isHeaderSeparatorVisible = value;
		if (oldValue != this._isHeaderSeparatorVisible) {
			this.onPropertyChanged(Grid.isHeaderSeparatorVisiblePropertyName, oldValue, this._isHeaderSeparatorVisible);
		}
	}
	private _cellSelectedBackground: Brush = null;
	static readonly cellSelectedBackgroundPropertyName: string = "CellSelectedBackground";
	get cellSelectedBackground(): Brush {
		return this._cellSelectedBackground;
	}
	set cellSelectedBackground(value: Brush) {
		let oldValue = this._cellSelectedBackground;
		this._cellSelectedBackground = value;
		if (oldValue != this._cellSelectedBackground) {
			this.onPropertyChanged(Grid.cellSelectedBackgroundPropertyName, oldValue, this._cellSelectedBackground);
		}
	}
	private _sectionHeaderSelectedBackground: Brush = null;
	static readonly sectionHeaderSelectedBackgroundPropertyName: string = "SectionHeaderSelectedBackground";
	get sectionHeaderSelectedBackground(): Brush {
		return this._sectionHeaderSelectedBackground;
	}
	set sectionHeaderSelectedBackground(value: Brush) {
		let oldValue = this._sectionHeaderSelectedBackground;
		this._sectionHeaderSelectedBackground = value;
		if (oldValue != this._sectionHeaderSelectedBackground) {
			this.onPropertyChanged(Grid.sectionHeaderSelectedBackgroundPropertyName, oldValue, this._sectionHeaderSelectedBackground);
		}
	}
	private _summaryRootBackground: Brush = null;
	static readonly summaryRootBackgroundPropertyName: string = "SummaryRootBackground";
	get summaryRootBackground(): Brush {
		return this._summaryRootBackground;
	}
	set summaryRootBackground(value: Brush) {
		let oldValue = this._summaryRootBackground;
		this._summaryRootBackground = value;
		if (oldValue != this._summaryRootBackground) {
			this.onPropertyChanged(Grid.summaryRootBackgroundPropertyName, oldValue, this._summaryRootBackground);
		}
	}
	private _summarySectionBackground: Brush = null;
	static readonly summarySectionBackgroundPropertyName: string = "SummarySectionBackground";
	get summarySectionBackground(): Brush {
		return this._summarySectionBackground;
	}
	set summarySectionBackground(value: Brush) {
		let oldValue = this._summarySectionBackground;
		this._summarySectionBackground = value;
		if (oldValue != this._summarySectionBackground) {
			this.onPropertyChanged(Grid.summarySectionBackgroundPropertyName, oldValue, this._summarySectionBackground);
		}
	}
	private _pinnedRowOpacity: number = NaN;
	static readonly pinnedRowOpacityPropertyName: string = "PinnedRowOpacity";
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		let oldValue = this._pinnedRowOpacity;
		this._pinnedRowOpacity = value;
		if (oldValue != this._pinnedRowOpacity) {
			this.onPropertyChanged(Grid.pinnedRowOpacityPropertyName, oldValue, this._pinnedRowOpacity);
		}
	}
	private _stickyRowBackground: Brush = null;
	static readonly stickyRowBackgroundPropertyName: string = "StickyRowBackground";
	get stickyRowBackground(): Brush {
		return this._stickyRowBackground;
	}
	set stickyRowBackground(value: Brush) {
		let oldValue = this._stickyRowBackground;
		this._stickyRowBackground = value;
		if (oldValue != this._stickyRowBackground) {
			this.onPropertyChanged(Grid.stickyRowBackgroundPropertyName, oldValue, this._stickyRowBackground);
		}
	}
	private _pinnedRowBackground: Brush = null;
	static readonly pinnedRowBackgroundPropertyName: string = "PinnedRowBackground";
	get pinnedRowBackground(): Brush {
		return this._pinnedRowBackground;
	}
	set pinnedRowBackground(value: Brush) {
		let oldValue = this._pinnedRowBackground;
		this._pinnedRowBackground = value;
		if (oldValue != this._pinnedRowBackground) {
			this.onPropertyChanged(Grid.pinnedRowBackgroundPropertyName, oldValue, this._pinnedRowBackground);
		}
	}
	private _lastStickyRowBackground: Brush = null;
	static readonly lastStickyRowBackgroundPropertyName: string = "LastStickyRowBackground";
	get lastStickyRowBackground(): Brush {
		return this._lastStickyRowBackground;
	}
	set lastStickyRowBackground(value: Brush) {
		let oldValue = this._lastStickyRowBackground;
		this._lastStickyRowBackground = value;
		if (oldValue != this._lastStickyRowBackground) {
			this.onPropertyChanged(Grid.lastStickyRowBackgroundPropertyName, oldValue, this._lastStickyRowBackground);
		}
	}
	private _oldActiveCell: GridCellPosition = null;
	private _activeCell: GridCellPosition = null;
	static readonly activeCellPropertyName: string = "ActiveCell";
	get activeCell(): GridCellPosition {
		return this._activeCell;
	}
	set activeCell(value: GridCellPosition) {
		let oldValue = this._activeCell;
		this._activeCell = value;
		if (oldValue != this._activeCell) {
			this.onPropertyChanged(Grid.activeCellPropertyName, oldValue, this._activeCell);
		}
	}
	private _cellBackground: Brush = null;
	static readonly cellBackgroundPropertyName: string = "CellBackground";
	get cellBackground(): Brush {
		return this._cellBackground;
	}
	set cellBackground(value: Brush) {
		let oldValue = this._cellBackground;
		this._cellBackground = value;
		if (oldValue != this._cellBackground) {
			this.onPropertyChanged(Grid.cellBackgroundPropertyName, oldValue, this._cellBackground);
		}
	}
	private _cellTextColor: Brush = null;
	static readonly cellTextColorPropertyName: string = "CellTextColor";
	get cellTextColor(): Brush {
		return this._cellTextColor;
	}
	set cellTextColor(value: Brush) {
		let oldValue = this._cellTextColor;
		this._cellTextColor = value;
		if (oldValue != this._cellTextColor) {
			this.onPropertyChanged(Grid.cellTextColorPropertyName, oldValue, this._cellTextColor);
		}
	}
	private _headerSortIndicatorColor: Brush = null;
	static readonly headerSortIndicatorColorPropertyName: string = "HeaderSortIndicatorColor";
	get headerSortIndicatorColor(): Brush {
		return this._headerSortIndicatorColor;
	}
	set headerSortIndicatorColor(value: Brush) {
		let oldValue = this._headerSortIndicatorColor;
		this._headerSortIndicatorColor = value;
		if (oldValue != this._headerSortIndicatorColor) {
			this.onPropertyChanged(Grid.headerSortIndicatorColorPropertyName, oldValue, this._headerSortIndicatorColor);
		}
	}
	private _headerSortIndicatorStyle: SortIndicatorStyle = SortIndicatorStyle.Default;
	static readonly headerSortIndicatorStylePropertyName: string = "HeaderSortIndicatorStyle";
	get headerSortIndicatorStyle(): SortIndicatorStyle {
		return this._headerSortIndicatorStyle;
	}
	set headerSortIndicatorStyle(value: SortIndicatorStyle) {
		let oldValue = this._headerSortIndicatorStyle;
		this._headerSortIndicatorStyle = value;
		if (oldValue != this._headerSortIndicatorStyle) {
			this.onPropertyChanged(Grid.headerSortIndicatorStylePropertyName, enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, oldValue), enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this._headerSortIndicatorStyle));
		}
	}
	private _cellTextStyle: FontInfo = null;
	static readonly cellTextStylePropertyName: string = "CellTextStyle";
	get cellTextStyle(): FontInfo {
		return this._cellTextStyle;
	}
	set cellTextStyle(value: FontInfo) {
		let oldValue = this._cellTextStyle;
		this._cellTextStyle = value;
		if (oldValue != this._cellTextStyle) {
			this.onPropertyChanged(Grid.cellTextStylePropertyName, oldValue, this._cellTextStyle);
		}
	}
	private _sectionHeaderBackground: Brush = null;
	static readonly sectionHeaderBackgroundPropertyName: string = "SectionHeaderBackground";
	get sectionHeaderBackground(): Brush {
		return this._sectionHeaderBackground;
	}
	set sectionHeaderBackground(value: Brush) {
		let oldValue = this._sectionHeaderBackground;
		this._sectionHeaderBackground = value;
		if (oldValue != this._sectionHeaderBackground) {
			this.onPropertyChanged(Grid.sectionHeaderBackgroundPropertyName, oldValue, this._sectionHeaderBackground);
		}
	}
	private _sectionHeaderTextColor: Brush = null;
	static readonly sectionHeaderTextColorPropertyName: string = "SectionHeaderTextColor";
	get sectionHeaderTextColor(): Brush {
		return this._sectionHeaderTextColor;
	}
	set sectionHeaderTextColor(value: Brush) {
		let oldValue = this._sectionHeaderTextColor;
		this._sectionHeaderTextColor = value;
		if (oldValue != this._sectionHeaderTextColor) {
			this.onPropertyChanged(Grid.sectionHeaderTextColorPropertyName, oldValue, this._sectionHeaderTextColor);
		}
	}
	private _sectionHeaderTextStyle: FontInfo = null;
	static readonly sectionHeaderTextStylePropertyName: string = "SectionHeaderTextStyle";
	get sectionHeaderTextStyle(): FontInfo {
		return this._sectionHeaderTextStyle;
	}
	set sectionHeaderTextStyle(value: FontInfo) {
		let oldValue = this._sectionHeaderTextStyle;
		this._sectionHeaderTextStyle = value;
		if (oldValue != this._sectionHeaderTextStyle) {
			this.onPropertyChanged(Grid.sectionHeaderTextStylePropertyName, oldValue, this._sectionHeaderTextStyle);
		}
	}
	private _summaryRootTextColor: Brush = null;
	static readonly summaryRootTextColorPropertyName: string = "SummaryRootTextColor";
	get summaryRootTextColor(): Brush {
		return this._summaryRootTextColor;
	}
	set summaryRootTextColor(value: Brush) {
		let oldValue = this._summaryRootTextColor;
		this._summaryRootTextColor = value;
		if (oldValue != this._summaryRootTextColor) {
			this.onPropertyChanged(Grid.summaryRootTextColorPropertyName, oldValue, this._summaryRootTextColor);
		}
	}
	private _summarySectionTextColor: Brush = null;
	static readonly summarySectionTextColorPropertyName: string = "SummarySectionTextColor";
	get summarySectionTextColor(): Brush {
		return this._summarySectionTextColor;
	}
	set summarySectionTextColor(value: Brush) {
		let oldValue = this._summarySectionTextColor;
		this._summarySectionTextColor = value;
		if (oldValue != this._summarySectionTextColor) {
			this.onPropertyChanged(Grid.summarySectionTextColorPropertyName, oldValue, this._summarySectionTextColor);
		}
	}
	private _summaryRootNameTextColor: Brush = null;
	static readonly summaryRootNameTextColorPropertyName: string = "SummaryRootNameTextColor";
	get summaryRootNameTextColor(): Brush {
		return this._summaryRootNameTextColor;
	}
	set summaryRootNameTextColor(value: Brush) {
		let oldValue = this._summaryRootNameTextColor;
		this._summaryRootNameTextColor = value;
		if (oldValue != this._summaryRootNameTextColor) {
			this.onPropertyChanged(Grid.summaryRootNameTextColorPropertyName, oldValue, this._summaryRootNameTextColor);
		}
	}
	private _summarySectionNameTextColor: Brush = null;
	static readonly summarySectionNameTextColorPropertyName: string = "SummarySectionNameTextColor";
	get summarySectionNameTextColor(): Brush {
		return this._summarySectionNameTextColor;
	}
	set summarySectionNameTextColor(value: Brush) {
		let oldValue = this._summarySectionNameTextColor;
		this._summarySectionNameTextColor = value;
		if (oldValue != this._summarySectionNameTextColor) {
			this.onPropertyChanged(Grid.summarySectionNameTextColorPropertyName, oldValue, this._summarySectionNameTextColor);
		}
	}
	private _summaryRootSelectedBackground: Brush = null;
	static readonly summaryRootSelectedBackgroundPropertyName: string = "SummaryRootSelectedBackground";
	get summaryRootSelectedBackground(): Brush {
		return this._summaryRootSelectedBackground;
	}
	set summaryRootSelectedBackground(value: Brush) {
		let oldValue = this._summaryRootSelectedBackground;
		this._summaryRootSelectedBackground = value;
		if (oldValue != this._summaryRootSelectedBackground) {
			this.onPropertyChanged(Grid.summaryRootSelectedBackgroundPropertyName, oldValue, this._summaryRootSelectedBackground);
		}
	}
	private _summarySectionSelectedBackground: Brush = null;
	static readonly summarySectionSelectedBackgroundPropertyName: string = "SummarySectionSelectedBackground";
	get summarySectionSelectedBackground(): Brush {
		return this._summarySectionSelectedBackground;
	}
	set summarySectionSelectedBackground(value: Brush) {
		let oldValue = this._summarySectionSelectedBackground;
		this._summarySectionSelectedBackground = value;
		if (oldValue != this._summarySectionSelectedBackground) {
			this.onPropertyChanged(Grid.summarySectionSelectedBackgroundPropertyName, oldValue, this._summarySectionSelectedBackground);
		}
	}
	private _summaryTextStyle: FontInfo = null;
	static readonly summaryTextStylePropertyName: string = "SummaryTextStyle";
	get summaryTextStyle(): FontInfo {
		return this._summaryTextStyle;
	}
	set summaryTextStyle(value: FontInfo) {
		let oldValue = this._summaryTextStyle;
		this._summaryTextStyle = value;
		if (oldValue != this._summaryTextStyle) {
			this.onPropertyChanged(Grid.summaryTextStylePropertyName, oldValue, this._summaryTextStyle);
		}
	}
	private _summarySectionTextStyle: FontInfo = null;
	static readonly summarySectionTextStylePropertyName: string = "SummarySectionTextStyle";
	get summarySectionTextStyle(): FontInfo {
		return this._summarySectionTextStyle;
	}
	set summarySectionTextStyle(value: FontInfo) {
		let oldValue = this._summarySectionTextStyle;
		this._summarySectionTextStyle = value;
		if (oldValue != this._summarySectionTextStyle) {
			this.onPropertyChanged(Grid.summarySectionTextStylePropertyName, oldValue, this._summarySectionTextStyle);
		}
	}
	static readonly pinnedAreaSeparatorWidthPropertyName: string = "PinnedAreaSeparatorWidth";
	private _pinnedAreaSeparatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(2));
	get pinnedAreaSeparatorWidth(): number {
		return this._pinnedAreaSeparatorWidth;
	}
	set pinnedAreaSeparatorWidth(value: number) {
		let oldValue = this._pinnedAreaSeparatorWidth;
		this._pinnedAreaSeparatorWidth = value;
		if (oldValue != this._pinnedAreaSeparatorWidth) {
			this.onPropertyChanged(Grid.pinnedAreaSeparatorWidthPropertyName, oldValue, this._pinnedAreaSeparatorWidth);
		}
	}
	private _headerSeparatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	static readonly headerSeparatorWidthPropertyName: string = "HeaderSeparatorWidth";
	get headerSeparatorWidth(): number {
		return this._headerSeparatorWidth;
	}
	set headerSeparatorWidth(value: number) {
		let oldValue = this._headerSeparatorWidth;
		this._headerSeparatorWidth = value;
		if (oldValue != this._headerSeparatorWidth) {
			this.onPropertyChanged(Grid.headerSeparatorWidthPropertyName, oldValue, this._headerSeparatorWidth);
		}
	}
	calculateHeaderSeparatorBorderWidth(width: number): number {
		let maxSeparatorWidthForBorder = 3;
		let borderRequired = Math.max(maxSeparatorWidthForBorder - width, 0);
		if (borderRequired % 2 == 1) {
			borderRequired += 1;
		}
		return intDivide(borderRequired, 2);
	}
	private _headerSeparatorBackground: Brush = null;
	static readonly headerSeparatorBackgroundPropertyName: string = "HeaderSeparatorBackground";
	get headerSeparatorBackground(): Brush {
		return this._headerSeparatorBackground;
	}
	set headerSeparatorBackground(value: Brush) {
		let oldValue = this._headerSeparatorBackground;
		this._headerSeparatorBackground = value;
		if (oldValue != this._headerSeparatorBackground) {
			this.onPropertyChanged(Grid.headerSeparatorBackgroundPropertyName, oldValue, this._headerSeparatorBackground);
		}
	}
	private _headerBackground: Brush = null;
	static readonly headerBackgroundPropertyName: string = "HeaderBackground";
	get headerBackground(): Brush {
		return this._headerBackground;
	}
	set headerBackground(value: Brush) {
		let oldValue = this._headerBackground;
		this._headerBackground = value;
		if (oldValue != this._headerBackground) {
			this.onPropertyChanged(Grid.headerBackgroundPropertyName, oldValue, this._headerBackground);
		}
	}
	private _headerTextColor: Brush = null;
	static readonly headerTextColorPropertyName: string = "HeaderTextColor";
	get headerTextColor(): Brush {
		return this._headerTextColor;
	}
	set headerTextColor(value: Brush) {
		let oldValue = this._headerTextColor;
		this._headerTextColor = value;
		if (oldValue != this._headerTextColor) {
			this.onPropertyChanged(Grid.headerTextColorPropertyName, oldValue, this._headerTextColor);
		}
	}
	private _headerTextStyle: FontInfo = null;
	static readonly headerTextStylePropertyName: string = "HeaderTextStyle";
	get headerTextStyle(): FontInfo {
		return this._headerTextStyle;
	}
	set headerTextStyle(value: FontInfo) {
		let oldValue = this._headerTextStyle;
		this._headerTextStyle = value;
		if (oldValue != this._headerTextStyle) {
			this.onPropertyChanged(Grid.headerTextStylePropertyName, oldValue, this._headerTextStyle);
		}
	}
	private _rowSeparatorBackground: Brush = null;
	static readonly rowSeparatorBackgroundPropertyName: string = "RowSeparatorBackground";
	get rowSeparatorBackground(): Brush {
		return this._rowSeparatorBackground;
	}
	set rowSeparatorBackground(value: Brush) {
		let oldValue = this._rowSeparatorBackground;
		this._rowSeparatorBackground = value;
		if (oldValue != this._rowSeparatorBackground) {
			this.onPropertyChanged(Grid.rowSeparatorBackgroundPropertyName, oldValue, this._rowSeparatorBackground);
		}
	}
	private _rowSeparatorStickyRowBackground: Brush = null;
	static readonly rowSeparatorStickyRowBackgroundPropertyName: string = "RowSeparatorStickyRowBackground";
	get rowSeparatorStickyRowBackground(): Brush {
		return this._rowSeparatorStickyRowBackground;
	}
	set rowSeparatorStickyRowBackground(value: Brush) {
		let oldValue = this._rowSeparatorStickyRowBackground;
		this._rowSeparatorStickyRowBackground = value;
		if (oldValue != this._rowSeparatorStickyRowBackground) {
			this.onPropertyChanged(Grid.rowSeparatorStickyRowBackgroundPropertyName, oldValue, this._rowSeparatorStickyRowBackground);
		}
	}
	private _rowSeparatorLastStickyRowBackground: Brush = null;
	static readonly rowSeparatorLastStickyRowBackgroundPropertyName: string = "RowSeparatorLastStickyRowBackground";
	get rowSeparatorLastStickyRowBackground(): Brush {
		return this._rowSeparatorLastStickyRowBackground;
	}
	set rowSeparatorLastStickyRowBackground(value: Brush) {
		let oldValue = this._rowSeparatorLastStickyRowBackground;
		this._rowSeparatorLastStickyRowBackground = value;
		if (oldValue != this._rowSeparatorLastStickyRowBackground) {
			this.onPropertyChanged(Grid.rowSeparatorLastStickyRowBackgroundPropertyName, oldValue, this._rowSeparatorLastStickyRowBackground);
		}
	}
	private _rowSeparatorPinnedRowBackground: Brush = null;
	static readonly rowSeparatorPinnedRowBackgroundPropertyName: string = "RowSeparatorPinnedRowBackground";
	get rowSeparatorPinnedRowBackground(): Brush {
		return this._rowSeparatorPinnedRowBackground;
	}
	set rowSeparatorPinnedRowBackground(value: Brush) {
		let oldValue = this._rowSeparatorPinnedRowBackground;
		this._rowSeparatorPinnedRowBackground = value;
		if (oldValue != this._rowSeparatorPinnedRowBackground) {
			this.onPropertyChanged(Grid.rowSeparatorPinnedRowBackgroundPropertyName, oldValue, this._rowSeparatorPinnedRowBackground);
		}
	}
	private _columnResizingSeparatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	static readonly columnResizingSeparatorWidthPropertyName: string = "ColumnResizingSeparatorWidth";
	get columnResizingSeparatorWidth(): number {
		return this._columnResizingSeparatorWidth;
	}
	set columnResizingSeparatorWidth(value: number) {
		let oldValue = this._columnResizingSeparatorWidth;
		this._columnResizingSeparatorWidth = value;
		if (oldValue != this._columnResizingSeparatorWidth) {
			this.onPropertyChanged(Grid.columnResizingSeparatorWidthPropertyName, oldValue, this._columnResizingSeparatorWidth);
		}
	}
	private _columnMovingSeparatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(2));
	static readonly columnMovingSeparatorWidthPropertyName: string = "ColumnMovingSeparatorWidth";
	get columnMovingSeparatorWidth(): number {
		return this._columnMovingSeparatorWidth;
	}
	set columnMovingSeparatorWidth(value: number) {
		let oldValue = this._columnMovingSeparatorWidth;
		this._columnMovingSeparatorWidth = value;
		if (oldValue != this._columnMovingSeparatorWidth) {
			this.onPropertyChanged(Grid.columnMovingSeparatorWidthPropertyName, oldValue, this._columnMovingSeparatorWidth);
		}
	}
	private _columnResizingSeparatorBackground: Brush = null;
	static readonly columnResizingSeparatorBackgroundPropertyName: string = "ColumnResizingSeparatorBackground";
	get columnResizingSeparatorBackground(): Brush {
		return this._columnResizingSeparatorBackground;
	}
	set columnResizingSeparatorBackground(value: Brush) {
		let oldValue = this._columnResizingSeparatorBackground;
		this._columnResizingSeparatorBackground = value;
		if (oldValue != this._columnResizingSeparatorBackground) {
			this.onPropertyChanged(Grid.columnResizingSeparatorBackgroundPropertyName, oldValue, this._columnResizingSeparatorBackground);
		}
	}
	private _columnMovingSeparatorBackground: Brush = null;
	static readonly columnMovingSeparatorBackgroundPropertyName: string = "ColumnMovingSeparatorBackground";
	get columnMovingSeparatorBackground(): Brush {
		return this._columnMovingSeparatorBackground;
	}
	set columnMovingSeparatorBackground(value: Brush) {
		let oldValue = this._columnMovingSeparatorBackground;
		this._columnMovingSeparatorBackground = value;
		if (oldValue != this._columnMovingSeparatorBackground) {
			this.onPropertyChanged(Grid.columnMovingSeparatorBackgroundPropertyName, oldValue, this._columnMovingSeparatorBackground);
		}
	}
	private _shiftSectionContent: boolean = false;
	static readonly shiftSectionContentPropertyName: string = "ShiftSectionContent";
	get shiftSectionContent(): boolean {
		return this._shiftSectionContent;
	}
	set shiftSectionContent(value: boolean) {
		let oldValue = this._shiftSectionContent;
		this._shiftSectionContent = value;
		if (oldValue != this._shiftSectionContent) {
			this.onPropertyChanged(Grid.shiftSectionContentPropertyName, oldValue, this._shiftSectionContent);
		}
	}
	private _platformPixelConverter: IPlatformPixelConverter = new DefaultPlatformPixelConverter();
	get platformPixelConverter(): IPlatformPixelConverter {
		return this._platformPixelConverter;
	}
	set platformPixelConverter(value: IPlatformPixelConverter) {
		this._platformPixelConverter = value;
	}
	private _renderingEngine: ICellRenderingEngine = null;
	get renderingEngine(): ICellRenderingEngine {
		return this._renderingEngine;
	}
	set renderingEngine(value: ICellRenderingEngine) {
		this._renderingEngine = value;
		this.onRenderingEngineProvided(this._renderingEngine);
	}
	private onRenderingEngineProvided(renderingEngine: ICellRenderingEngine): void {
		if (renderingEngine != null) {
			renderingEngine.refresh(this.model, false);
		}
	}
	private _responsiveStates: ResponsiveStatesCollection = null;
	get responsiveStates(): ResponsiveStatesCollection {
		return this._responsiveStates;
	}
	private _model: VisualModel = new VisualModel();
	get model(): VisualModel {
		return this._model;
	}
	set model(value: VisualModel) {
		this._model = value;
	}
	get actualVisibleRegion(): Rect {
		return new Rect(0, this._model.left, this._model.top, this._model.width, this._model.height);
	}
	private _sortDescriptions: ColumnSortDescriptionCollection = null;
	private _groupDescriptions: ColumnGroupDescriptionCollection = null;
	private _filterExpressions: FilterExpressionCollection = null;
	private _summaryDescriptions: ColumnSummaryDescriptionCollection = null;
	get sortDescriptions(): ColumnSortDescriptionCollection {
		return this._sortDescriptions;
	}
	get groupDescriptions(): ColumnGroupDescriptionCollection {
		return this._groupDescriptions;
	}
	sortDescriptionsChanged: (sender: any, args: GridSortDescriptionsChangedEventArgs) => void = null;
	groupDescriptionsChanged: (sender: any, args: GridGroupDescriptionsChangedEventArgs) => void = null;
	columnHiddenChanged: (sender: any, args: ColumnHiddenChangedEventArgs) => void = null;
	get filterExpressions(): FilterExpressionCollection {
		return this._filterExpressions;
	}
	get summaryDescriptions(): ColumnSummaryDescriptionCollection {
		return this._summaryDescriptions;
	}
	static readonly summaryScopePropertyName: string = "SummaryScope";
	private _summaryScopeUserSet: boolean = false;
	private _summaryScope: DataSourceSummaryScope = DataSourceSummaryScope.Both;
	get summaryScope(): DataSourceSummaryScope {
		return this._summaryScope;
	}
	set summaryScope(value: DataSourceSummaryScope) {
		let oldValue = this._summaryScope;
		this._summaryScope = value;
		this._summaryScopeUserSet = true;
		if (oldValue != this._summaryScope) {
			this.onPropertyChanged(Grid.summaryScopePropertyName, enumGetBox<DataSourceSummaryScope>(DataSourceSummaryScope_$type, oldValue), enumGetBox<DataSourceSummaryScope>(DataSourceSummaryScope_$type, this._summaryScope));
		}
	}
	static readonly isGroupCollapsablePropertyName: string = "IsGroupCollapsable";
	private _isGroupCollapsableUserSet: boolean = false;
	private _isGroupCollapsable: boolean = false;
	get isGroupCollapsable(): boolean {
		return this._isGroupCollapsable;
	}
	set isGroupCollapsable(value: boolean) {
		let oldValue = this._isGroupCollapsable;
		this._isGroupCollapsable = value;
		this._isGroupCollapsableUserSet = true;
		if (oldValue != this._isGroupCollapsable) {
			this.onPropertyChanged(Grid.isGroupCollapsablePropertyName, oldValue, this._isGroupCollapsable);
		}
	}
	static readonly groupHeaderDisplayModePropertyName: string = "GroupHeaderDisplayMode";
	private _groupHeaderDisplayModeUserSet: boolean = false;
	private _groupHeaderDisplayMode: DataSourceSectionHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Combined;
	get groupHeaderDisplayMode(): DataSourceSectionHeaderDisplayMode {
		return this._groupHeaderDisplayMode;
	}
	set groupHeaderDisplayMode(value: DataSourceSectionHeaderDisplayMode) {
		let oldValue = this._groupHeaderDisplayMode;
		this._groupHeaderDisplayMode = value;
		this._groupHeaderDisplayModeUserSet = true;
		if (oldValue != this._groupHeaderDisplayMode) {
			this.onPropertyChanged(Grid.groupHeaderDisplayModePropertyName, enumGetBox<DataSourceSectionHeaderDisplayMode>(DataSourceSectionHeaderDisplayMode_$type, oldValue), enumGetBox<DataSourceSectionHeaderDisplayMode>(DataSourceSectionHeaderDisplayMode_$type, this._groupHeaderDisplayMode));
		}
	}
	static readonly isGroupExpandedDefaultPropertyName: string = "IsGroupExpandedDefault";
	private _isGroupExpandedDefaultUserSet: boolean = false;
	private _isGroupExpandedDefault: boolean = true;
	get isGroupExpandedDefault(): boolean {
		return this._isGroupExpandedDefault;
	}
	set isGroupExpandedDefault(value: boolean) {
		let oldValue = this._isGroupExpandedDefault;
		this._isGroupExpandedDefault = value;
		this._isGroupExpandedDefaultUserSet = true;
		if (oldValue != this._isGroupExpandedDefault) {
			this.onPropertyChanged(Grid.isGroupExpandedDefaultPropertyName, oldValue, this._isGroupExpandedDefault);
		}
	}
	static readonly groupSummaryDisplayModePropertyName: string = "GroupSummaryDisplayMode";
	private _groupSummaryDisplayModeUserSet: boolean = false;
	private _groupSummaryDisplayMode: GroupSummaryDisplayMode = GroupSummaryDisplayMode.None;
	get groupSummaryDisplayMode(): GroupSummaryDisplayMode {
		return this._groupSummaryDisplayMode;
	}
	set groupSummaryDisplayMode(value: GroupSummaryDisplayMode) {
		let oldValue = this._groupSummaryDisplayMode;
		this._groupSummaryDisplayMode = value;
		this._groupSummaryDisplayModeUserSet = true;
		if (oldValue != this._groupSummaryDisplayMode) {
			this.onPropertyChanged(Grid.groupSummaryDisplayModePropertyName, enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, oldValue), enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, this._groupSummaryDisplayMode));
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	reset(): void {
	}
	refreshLayout(): void {
		if (this._availableWidth == 0) {
			return;
		}
		let currContentWidth: number = this.model.absoluteWidth;
		let currContentHeight: number = this.model.absoluteHeight;
		this.refreshSuspended = true;
		this.spatialEngine.invalidateLayoutData(this, this.model, <number>truncate(this.availableWidth));
		if (currContentWidth != this.model.absoluteWidth || currContentHeight != this.model.absoluteHeight) {
			this.externalGrid.onContentSizeChanged();
		}
		this.refreshSuspended = false;
		this.visibilityEngine.markRefreshRequired();
		this.renderingEngine.invalidateVisibility(() => this.visibilityEngine.calculate(this));
		this.renderingEngine.refresh(this.model, false);
	}
	refreshPosition(): void {
		if (this._invalidateVisibleRowsQueued) {
			this.flushRowsInvalidate();
		} else {
			this.renderingEngine.invalidateVisibility(() => this.visibilityEngine.calculate(this));
			this.renderingEngine.refresh(this.model, true);
		}
	}
	flushRowsInvalidate(): void {
		if (this._invalidateVisibleRowsQueued) {
			this._invalidateVisibleRowsQueued = false;
			this.refreshLayout();
			this.invalidateVisibleRows();
		}
	}
	private _refreshSuspended: boolean = false;
	get refreshSuspended(): boolean {
		return this._refreshSuspended;
	}
	set refreshSuspended(value: boolean) {
		this._refreshSuspended = value;
	}
	refresh(): void {
		if (this._refreshSuspended) {
			return;
		}
		this.renderingEngine.invalidateVisibility(() => this.visibilityEngine.calculate(this));
		this.renderingEngine.refresh(this.model, false);
	}
	flush(): void {
		if (this.actualDataSource != null) {
			this.actualDataSource.flushAutoRefresh();
		}
		this.effectManager.tick(true);
		this.renderingEngine.refresh(this.model, true);
	}
	private _actualDataSource: IDataSource = null;
	static readonly actualDataSourcePropertyName: string = "ActualDataSource";
	get actualDataSource(): IDataSource {
		return this._actualDataSource;
	}
	set actualDataSource(value: IDataSource) {
		let oldValue = this._actualDataSource;
		this._actualDataSource = value;
		if (this._actualDataSource != oldValue) {
			this.onPropertyChanged(Grid.actualDataSourcePropertyName, oldValue, this._actualDataSource);
		}
	}
	static readonly primaryKeyPropertyName: string = "PrimaryKey";
	private _primaryKey: string[] = null;
	get primaryKey(): string[] {
		return this._primaryKey;
	}
	set primaryKey(value: string[]) {
		let oldValue = this._primaryKey;
		this._primaryKey = value;
		if (this._primaryKey != oldValue) {
			this.onPropertyChanged(Grid.primaryKeyPropertyName, oldValue, this._primaryKey);
		}
	}
	static readonly actualPrimaryKeyPropertyName: string = "ActualPrimaryKey";
	private _actualPrimaryKey: string[] = null;
	get actualPrimaryKey(): string[] {
		return this._actualPrimaryKey;
	}
	set actualPrimaryKey(value: string[]) {
		let oldValue = this._actualPrimaryKey;
		this._actualPrimaryKey = value;
		if (this._actualPrimaryKey != oldValue) {
			this.onPropertyChanged(Grid.actualPrimaryKeyPropertyName, oldValue, this._actualPrimaryKey);
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		if (propertyName == Grid.itemsSourcePropertyName) {
			if (this._actualDataSource != null) {
				let $t = this._actualDataSource;
				$t.schemaChanged = delegateRemove($t.schemaChanged, runOn(this, this.dataSource_SchemaChanged));
				this._actualDataSource.updateNotifier = null;
				this.sortDescriptions.syncTarget = null;
				this.groupDescriptions.syncTarget = null;
				this.filterExpressions.syncTarget = null;
				this.summaryDescriptions.syncTarget = null;
				this.actualPrimaryKey = this.resolveActualPrimaryKey();
			}
			if (typeCast<IDataSource>(IDataSource_$type, this.itemsSource) !== null) {
				this.actualDataSource = <IDataSource><any>this.itemsSource;
			} else {
				let dataSource = this.externalGrid.createLocalDataSource(this.itemsSource);
				this.actualDataSource = dataSource;
			}
			if (this._actualDataSource != null) {
				let $t1 = this._actualDataSource;
				$t1.schemaChanged = delegateCombine($t1.schemaChanged, runOn(this, this.dataSource_SchemaChanged));
				this._actualDataSource.updateNotifier = new DataSourceNotificationBridge(this);
				if (this._actualDataSource.isVirtual) {
					this.model.isPlaceholderContentNeeded = this.isPlaceholderRenderingEnabled;
				}
				if (this.reactsToSortChanges) {
					this.sortDescriptions.syncTarget = this._actualDataSource.sortDescriptions;
				}
				if (this.reactsToGroupChanges) {
					this.groupDescriptions.syncTarget = this._actualDataSource.groupDescriptions;
				}
				if (this.reactsToFilterChanges) {
					this.filterExpressions.syncTarget = this._actualDataSource.filterExpressions;
				}
				this.summaryDescriptions.syncTarget = this._actualDataSource.summaryDescriptions;
				this._actualDataSource.propertiesRequested = this.resolveDesiredProperties();
				if (this.primaryKey != null) {
					this.actualDataSource.primaryKey = this.primaryKey;
				}
				this.actualPrimaryKey = this.resolveActualPrimaryKey();
				if (this._actualDataSource.actualSchema != null) {
					this.onDataSourceReady();
				}
				this.ignoreSelectionChanged = true;
				this.ignorePinnedChanged = true;
				this._syncingSelection = true;
				this._syncingPinning = true;
				this.synchronizeKeysAndItems(this.selectedItems, this.selectedKeys);
				this.synchronizeKeysAndItems(this.pinnedItems, this.pinnedKeys);
				this.selectionManager.updateSelectedState();
				this.ignoreSelectionChanged = false;
				this.ignorePinnedChanged = false;
				this._syncingSelection = false;
				this._syncingPinning = false;
				for (let i = 0; i < this.pinnedKeys.all.count; ++i) {
					this.adapter.pinRow(this.pinnedKeys.all._inner[i]);
				}
				if (this._isGroupCollapsableUserSet) {
					this.actualDataSource.isSectionCollapsable = this.isGroupCollapsable;
				}
				if (this._groupHeaderDisplayModeUserSet) {
					this.actualDataSource.sectionHeaderDisplayMode = this.groupHeaderDisplayMode;
				}
				if (this._summaryScopeUserSet) {
					this.actualDataSource.summaryScope = this.summaryScope;
				}
				if (this._isGroupExpandedDefaultUserSet) {
					this.actualDataSource.isSectionExpandedDefault = this.isGroupExpandedDefault;
				}
				if (this._groupSummaryDisplayModeUserSet) {
					switch (this.groupSummaryDisplayMode) {
						case GroupSummaryDisplayMode.Cells:

						case GroupSummaryDisplayMode.List:

						case GroupSummaryDisplayMode.None:
						this.actualDataSource.includeSummaryRowsInSection = false;
						break;

						case GroupSummaryDisplayMode.RowTop:
						this.actualDataSource.includeSummaryRowsInSection = true;
						this.actualDataSource.isSectionSummaryRowsAtBottom = false;
						break;

						case GroupSummaryDisplayMode.RowBottom:
						this.actualDataSource.includeSummaryRowsInSection = true;
						this.actualDataSource.isSectionSummaryRowsAtBottom = true;
						break;

					}

				}
			}
		}
		if (propertyName == Grid.autoGenerateColumnsPropertyName) {
			this.columnController.autoGenerateColumns = this.autoGenerateColumns;
		}
		if (propertyName == Grid.isPlaceholderRenderingEnabledPropertyName) {
			if (this._actualDataSource != null && this._actualDataSource.isVirtual) {
				this.model.isPlaceholderContentNeeded = this.isPlaceholderRenderingEnabled;
			}
		}
		if (propertyName == Grid.columnResizingModePropertyName) {
			this.isHoverActionDesired = this.resolveIsHoverActionDesired();
		}
		if (propertyName == Grid.activationModePropertyName) {
			this.isClickActionDesired = this.resolveIsClickActionDesired();
		}
		if (propertyName == Grid.selectionModePropertyName) {
			this.isClickActionDesired = this.resolveIsClickActionDesired();
			switch (this.selectionMode) {
				case GridSelectionMode.SingleRow:
				if (this.selectedCellRanges.count > 0) {
					this.selectedCellRanges.clear();
				}
				if (this.selectedCells.count > 0) {
					this.selectedCells.clear();
				}
				if (this.selectedKeys.count > 1) {
					let last = this.selectedKeys._inner[this.selectedKeys.count - 1];
					this.selectedKeys.clear();
					this.selectedKeys.add(last);
				}
				break;

				case GridSelectionMode.MultipleRow:
				if (this.selectedCellRanges.count > 0) {
					this.selectedCellRanges.clear();
				}
				if (this.selectedCells.count > 0) {
					this.selectedCells.clear();
				}
				break;

				case GridSelectionMode.SingleCell:
				if (this.selectedKeys.count > 0) {
					this.selectedKeys.clear();
				}
				if (this.selectedCellRanges.count > 0) {
					this.selectedCellRanges.clear();
				}
				if (this.selectedCells.count > 1) {
					let last1 = this.selectedCells._inner[this.selectedCells.count - 1];
					this.selectedCells.clear();
					this.selectedCells.add(last1);
				}
				break;

				case GridSelectionMode.MultipleCell:
				if (this.selectedKeys.count > 0) {
					this.selectedKeys.clear();
				}
				if (this.selectedCellRanges.count > 0) {
					this.selectedCellRanges.clear();
				}
				break;

				case GridSelectionMode.RangeCell:
				if (this.selectedCells.count > 0) {
					this.selectedCells.clear();
				}
				if (this.selectedKeys.count > 0) {
					this.selectedKeys.clear();
				}
				break;

				case GridSelectionMode.None:
				if (this.selectedKeys.count > 0) {
					this.selectedKeys.clear();
				}
				if (this.selectedCells.count > 0) {
					this.selectedCells.clear();
				}
				if (this.selectedCellRanges.count > 0) {
					this.selectedCellRanges.clear();
				}
				break;

			}

		}
		if (propertyName == Grid.rowSeparatorPropertyName) {
			let oldHeader = <RowSeparator>oldValue;
			let newHeader = <RowSeparator>newValue;
			if (oldHeader != null) {
				oldHeader.definitionPropertyUpdated = delegateRemove(oldHeader.definitionPropertyUpdated, runOn(this, this.rowSeparator_DefinitionPropertyUpdated));
				oldHeader.grid = null;
			}
			if (newHeader != null) {
				newHeader.definitionPropertyUpdated = delegateCombine(newHeader.definitionPropertyUpdated, runOn(this, this.rowSeparator_DefinitionPropertyUpdated));
				newHeader.grid = this;
			}
		}
		if (propertyName == Grid.headerSeparatorPropertyName) {
			let oldSeparator = <HeaderSeparator>oldValue;
			let newSeparator = <HeaderSeparator>newValue;
			if (oldSeparator != null) {
				oldSeparator.definitionPropertyUpdated = delegateRemove(oldSeparator.definitionPropertyUpdated, runOn(this, this.headerSeparator_DefinitionPropertyUpdated));
				oldSeparator.grid = null;
			}
			if (newSeparator != null) {
				newSeparator.definitionPropertyUpdated = delegateCombine(newSeparator.definitionPropertyUpdated, runOn(this, this.headerSeparator_DefinitionPropertyUpdated));
				newSeparator.grid = this;
			}
		}
		if (propertyName == Grid.columnResizingSeparatorPropertyName) {
			let oldSeparator1 = <ColumnResizingSeparator>oldValue;
			let newSeparator1 = <ColumnResizingSeparator>newValue;
			if (oldSeparator1 != null) {
				oldSeparator1.grid = null;
			}
			if (newSeparator1 != null) {
				newSeparator1.grid = this;
			}
		}
		if (propertyName == Grid.columnMovingSeparatorPropertyName) {
			let oldSeparator2 = <ColumnMovingSeparator>oldValue;
			let newSeparator2 = <ColumnMovingSeparator>newValue;
			if (oldSeparator2 != null) {
				oldSeparator2.grid = null;
			}
			if (newSeparator2 != null) {
				newSeparator2.grid = this;
			}
		}
		if (propertyName == Grid.dataSourceDesiredPropertiesPropertyName) {
			if (this._actualDataSource != null) {
				this._actualDataSource.propertiesRequested = this.dataSourceDesiredProperties;
			}
		}
		if (propertyName == Grid.primaryKeyPropertyName) {
			if (this.actualDataSource != null && this.primaryKey != null) {
				this.actualDataSource.primaryKey = <string[]>newValue;
			}
			this.actualPrimaryKey = this.resolveActualPrimaryKey();
		}
		if (propertyName == Grid.rowHeightPropertyName || propertyName == Grid.headerHeightPropertyName || propertyName == Grid.rowSeparatorHeightPropertyName || propertyName == Grid.isGroupRowStickyPropertyName || propertyName == Grid.isHeaderSeparatorVisiblePropertyName || propertyName == Grid.shiftSectionContentPropertyName || propertyName == Grid.pinnedAreaSeparatorWidthPropertyName) {
			this.isHoverActionDesired = this.resolveIsHoverActionDesired();
			if (this.rowsAreVisible()) {
				this.refreshLayout();
			}
		}
		if (propertyName == Grid.defaultColumnWidthPropertyName || propertyName == Grid.defaultColumnMinWidthPropertyName || propertyName == Grid.insetPropertyName || propertyName == Grid.headerSeparatorWidthPropertyName) {
			if (this.model != null && this.model.columns != null && this.model.columns.count > 0) {
				this.refreshLayout();
			}
		}
		if (propertyName == Grid.sectionHeaderPropertyName) {
			if (oldValue != null) {
				let oldSectionHeader = typeCast<SectionHeader>((<any>SectionHeader).$type, oldValue);
				oldSectionHeader.sectionHeaderPropertyUpdating = delegateRemove(oldSectionHeader.sectionHeaderPropertyUpdating, runOn(this, this.onSectionHeaderPropertyChanged));
				oldSectionHeader.grid = null;
			}
			if (this.sectionHeader != null) {
				let $t2 = this.sectionHeader;
				$t2.sectionHeaderPropertyUpdating = delegateCombine($t2.sectionHeaderPropertyUpdating, runOn(this, this.onSectionHeaderPropertyChanged));
				this.sectionHeader.grid = this;
			}
			this.model.isSectionHeaderDirty = true;
			this.refreshLayout();
		}
		if (propertyName == Grid.pinnedAreaSeparatorPropertyName) {
			if (oldValue != null) {
				let oldSeparator3 = typeCast<PinnedAreaSeparator>((<any>PinnedAreaSeparator).$type, oldValue);
				oldSeparator3.grid = null;
			}
			if (this.pinnedAreaSeparator != null) {
				this.pinnedAreaSeparator.grid = this;
			}
			this.refreshLayout();
		}
		if (propertyName == Grid.activeCellPropertyName) {
			this._oldActiveCell = typeCast<GridCellPosition>((<any>GridCellPosition).$type, oldValue);
			this._updatingActiveCell = true;
			if (this.activeCell != null && this.activeCell.rowIndex >= 0) {
				this.activationManager.activateModelByColumnUniqueKey(this.activeCell.rowIndex, this.activeCell.columnUniqueKey);
			} else {
				this.activationManager.deactivateAll();
			}
			this._updatingActiveCell = false;
		}
		if (propertyName == Grid.reactsToSortChangesPropertyName) {
			let newReact = <boolean>newValue;
			if (!newReact) {
				this.sortDescriptions.syncTarget = null;
			} else {
				if (this._actualDataSource != null) {
					this.sortDescriptions.syncTarget = this._actualDataSource.sortDescriptions;
				}
			}
		}
		if (propertyName == Grid.reactsToGroupChangesPropertyName) {
			let newReact1 = <boolean>newValue;
			if (!newReact1) {
				this.groupDescriptions.syncTarget = null;
			} else {
				if (this._actualDataSource != null) {
					this.groupDescriptions.syncTarget = this._actualDataSource.groupDescriptions;
				}
			}
		}
		if (propertyName == Grid.reactsToFilterChangesPropertyName) {
			let newReact2 = <boolean>newValue;
			if (!newReact2) {
				this.filterExpressions.syncTarget = null;
			} else {
				if (this._actualDataSource != null) {
					this.filterExpressions.syncTarget = this._actualDataSource.filterExpressions;
				}
			}
		}
		if (propertyName == Grid.isGroupCollapsablePropertyName) {
			if (this.actualDataSource != null) {
				this.actualDataSource.isSectionCollapsable = <boolean>newValue;
			}
		}
		if (propertyName == Grid.groupHeaderDisplayModePropertyName) {
			if (this.actualDataSource != null) {
				this.actualDataSource.sectionHeaderDisplayMode = EnumUtil.getEnumValue<DataSourceSectionHeaderDisplayMode>(DataSourceSectionHeaderDisplayMode_$type, newValue);
			}
		}
		if (propertyName == Grid.summaryScopePropertyName) {
			if (this.actualDataSource != null) {
				this.actualDataSource.summaryScope = EnumUtil.getEnumValue<DataSourceSummaryScope>(DataSourceSummaryScope_$type, newValue);
			}
		}
		if (propertyName == Grid.isGroupExpandedDefaultPropertyName) {
			if (this.actualDataSource != null) {
				this.actualDataSource.isSectionExpandedDefault = <boolean>newValue;
			}
		}
		if (propertyName == Grid.groupSummaryDisplayModePropertyName) {
			this.sectionHeader.summaryDisplayMode = this.groupSummaryDisplayMode;
			this.model.isSectionHeaderDirty = true;
			if (this.actualDataSource != null) {
				switch (this.groupSummaryDisplayMode) {
					case GroupSummaryDisplayMode.Cells:

					case GroupSummaryDisplayMode.List:

					case GroupSummaryDisplayMode.None:
					this.actualDataSource.includeSummaryRowsInSection = false;
					break;

					case GroupSummaryDisplayMode.RowTop:
					this.actualDataSource.includeSummaryRowsInSection = true;
					this.actualDataSource.isSectionSummaryRowsAtBottom = false;
					break;

					case GroupSummaryDisplayMode.RowBottom:
					this.actualDataSource.includeSummaryRowsInSection = true;
					this.actualDataSource.isSectionSummaryRowsAtBottom = true;
					break;

				}

			}
			this.refreshLayout();
		}
	}
	private resolveActualPrimaryKey(): string[] {
		if (this.primaryKey != null) {
			return this.primaryKey;
		}
		if (this.actualDataSource != null) {
			return this.actualDataSource.actualPrimaryKey;
		}
		return null;
	}
	private resolveDesiredProperties(): string[] {
		if (!this.autoGenerateColumns && this.dataSourceDesiredProperties == null && this._actualDataSource.propertiesRequested == null && this.columns.count > 0) {
			return this.getDesiredPropertiesFromColumns();
		}
		if (this.dataSourceDesiredProperties != null) {
			return this.dataSourceDesiredProperties;
		}
		return this._actualDataSource.propertiesRequested;
	}
	private getDesiredPropertiesFromColumns(): string[] {
		let columnKeys: string[] = <string[]>new Array(this.columns.count);
		for (let i = 0; i < this.columns.count; i++) {
			columnKeys[i] = this.columns._inner[i].propertyPath;
		}
		return columnKeys;
	}
	private rowSeparator_DefinitionPropertyUpdated(sender: any, args: DefinitionPropertyUpdatedEventArgs): void {
		this.rowSeparatorCellsPropertyUpdating(args.propertyName, args.animationType, args.oldValue, args.newValue);
	}
	private headerSeparator_DefinitionPropertyUpdated(sender: any, args: DefinitionPropertyUpdatedEventArgs): void {
		this.headerSeparatorCellsPropertyUpdating(args.propertyName, args.animationType, args.oldValue, args.newValue);
	}
	private rowSeparatorCellsPropertyUpdating(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (propertyAnimationType == CellPropertyAnimationType.IgnoredValue) {
			return;
		}
		if (propertyName != null && stringStartsWith(propertyName, "Actual")) {
			propertyName = propertyName.substr(6);
		}
		this.animationManager.animateColumnCellsPropertyChange(this, null, propertyName, propertyAnimationType, oldValue, newValue, false, true, false, false);
	}
	private headerSeparatorCellsPropertyUpdating(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (propertyAnimationType == CellPropertyAnimationType.IgnoredValue) {
			return;
		}
		if (propertyName != null && stringStartsWith(propertyName, "Actual")) {
			propertyName = propertyName.substr(6);
		}
		for (let i = 0; i < this.model.columns.count; i++) {
			let columnInfo = this.model.columns._inner[i];
			this.animationManager.animateColumnCellsPropertyChange(this, columnInfo, propertyName, propertyAnimationType, oldValue, newValue, true, false, false, true);
		}
	}
	private dataSource_SchemaChanged(sender: any, args: DataSourceSchemaChangedEventArgs): void {
		this.onDataSourceReady();
	}
	private onDataSourceReady(): void {
		this._adapter.setDataSource(this._actualDataSource);
		this.columnController.schema = this._actualDataSource.actualSchema;
		this.updateColumnsFilter();
		for (let i = 0; i < this.groupDescriptions.all.count; i++) {
			this.resolveSchemaForGroupDescription(this.groupDescriptions.all.item(i));
		}
		for (let i1 = 0; i1 < this.summaryDescriptions.all.count; i1++) {
			this.resolveSchemaForSummaryDescription(this.summaryDescriptions.all.item(i1));
		}
		this.refreshLayout();
		this.invalidateVisibleRows();
	}
	notifyColumnsAutoGenerated(): void {
		if (this.columnsAutoGenerated != null) {
			this.columnsAutoGenerated(this, new GridColumnsAutoGeneratedEventArgs());
		}
	}
	sizeChanged(width: number, height: number): void {
		this.availableWidth = width;
		this.availableHeight = height;
		this._responsiveEngine.sizeChanged(width, height);
		this.refreshLayout();
	}
	private _pendingLeftScroll: number = -1;
	private _pendingTopScroll: number = -1;
	setViewport(left: number, top: number, right: number, bottom: number): void {
		this._pendingLeftScroll = -1;
		this._pendingTopScroll = -1;
		let width: number = right - left;
		this.model.actualVisibleRegion = new Rect(0, left, top, right - left, bottom - top);
		this.refreshPosition();
	}
	get actualColumns(): GridColumnCollection {
		return this._columnController.actualColumns;
	}
	private _columns: GridColumnCollection = new GridColumnCollection();
	get columns(): GridColumnCollection {
		return this._columns;
	}
	onModelRejoined(cellModel: CellModel, resolvedValue: any, rowObject: any): void {
		let target = this.getTargetDefinition(cellModel.path);
		target.onAttaching(cellModel, this, resolvedValue, rowObject);
		target.onDataBind(cellModel, this, resolvedValue, rowObject);
	}
	onModelDataRefresh(cellModel: CellModel, resolvedValue: any, rowObject: any, styleKey: string): void {
		cellModel.styleKey = styleKey;
		let target = this.getTargetDefinition(cellModel.path);
		target.onDataBind(cellModel, this, resolvedValue, rowObject);
	}
	getContainingColumn(path: CellPath): Column {
		return this.columnController.getContainingColumn(path);
	}
	hideThenRemoveColumn(column: Column): void {
		column.internalShouldRemoveWhenHidden = true;
		column.isHidden = true;
	}
	exchangeColumn(newColumn: Column, oldColumn: Column): void {
		let oldColumnIndex = this.columns.indexOf(oldColumn);
		if (oldColumnIndex == -1) {
			return;
		}
		if ((newColumn != null && newColumn.isFromMarkup) || (oldColumn != null && oldColumn.isFromMarkup)) {
			throw new InvalidOperationException(1, "Cannot exchange a column created from markup");
		}
		if (this.columns.contains(newColumn)) {
			if (newColumn.isHidden) {
				this.externalGrid.removeExternalColumn(newColumn.externalObject);
			} else {
				return;
			}
		}
		let actualExchangeStyle = this.columnExchangingAnimationMode;
		if (actualExchangeStyle == ColumnExchangingAnimationMode.Auto) {
			actualExchangeStyle = newColumn.getPreferredExchangingAnimationMode();
		}
		let fromRight: boolean = false;
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToLeft || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToLeftAndCrossfade) {
			fromRight = true;
		}
		newColumn.state = ColumnStates.Hidden;
		if (fromRight) {
			this.externalGrid.insertExternalColumnAtIndex(oldColumnIndex + 1, newColumn.externalObject);
		} else {
			this.externalGrid.insertExternalColumnAtIndex(oldColumnIndex, newColumn.externalObject);
		}
		oldColumn.pinned = newColumn.pinned;
		if (!this.isColumnExchangingAnimationEnabled(newColumn)) {
			newColumn.isHidden = false;
			newColumn.state = ColumnStates.Visible;
			this.externalGrid.removeExternalColumn(oldColumn.externalObject);
			this.onColumnExchangingAnimationCompleted(newColumn);
		}
		this.refreshLayout();
		if (this.isColumnExchangingAnimationEnabled(newColumn)) {
			let oldColumnPreviousState = this.model.getColumnById(oldColumn.uniqueId).state;
			oldColumn.state = ColumnStates.Hiding;
			newColumn.state = ColumnStates.Showing;
			this.animationManager.startExchangingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(oldColumn.uniqueId), this.model.getColumnById(newColumn.uniqueId), oldColumnPreviousState);
		}
	}
	private actualColumns_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.selectionManager.invalidateColumnMap();
		this.activationManager.invalidateColumnMap();
		this.selectionManager.updateSelectedCellsState();
		if (this.suppressColumnChangeReactions) {
			return;
		}
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			if (e.newItems != null) {
				for (let i = 0; i < e.newItems.count; i++) {
					this.onColumnInsertedAt(i + e.newStartingIndex, <Column>e.newItems.item(i));
				}
			}
			break;

			case NotifyCollectionChangedAction.Remove:
			if (e.oldItems != null) {
				for (let i1 = 0; i1 < e.oldItems.count; i1++) {
					this.onColumnRemovedAt(e.oldStartingIndex, <Column>e.oldItems.item(i1));
				}
			}
			break;

			case NotifyCollectionChangedAction.Replace:
			if (e.oldItems != null) {
				for (let i2 = 0; i2 < e.oldItems.count; i2++) {
					this.onColumnRemovedAt(e.oldStartingIndex, <Column>e.oldItems.item(i2));
				}
			}
			if (e.newItems != null) {
				for (let i3 = 0; i3 < e.newItems.count; i3++) {
					this.onColumnInsertedAt(i3 + e.newStartingIndex, <Column>e.newItems.item(i3));
				}
			}
			break;

			case NotifyCollectionChangedAction.Reset:
			this.onColumnsReset();
			break;

		}

		this.refreshLayout();
	}
	private onColumnsReset(): void {
		this.spatialEngine.onColumnsReset(this.gridLayerController, this.model);
	}
	private onColumnRemovedAt(index: number, column: Column): void {
		column.grid = null;
		column.propertyChanged = delegateRemove(column.propertyChanged, runOn(this, this.column_PropertyChanged));
		column.columnCellsPropertyUpdating = delegateRemove(column.columnCellsPropertyUpdating, runOn(this, this.columnCellsPropertyUpdating));
		column.columnHeaderCellsPropertyUpdating = delegateRemove(column.columnHeaderCellsPropertyUpdating, runOn(this, this.columnHeaderCellsPropertyUpdating));
		this.spatialEngine.onColumnRemovedAt(this.gridLayerController, index, column, this.model);
		this.refreshLayout();
		column.state = ColumnStates.Detached;
		this.selectionManager.onColumnRemovedAt(index, column);
	}
	private onColumnInsertedAt(index: number, column: Column): void {
		column.grid = this;
		column.propertyChanged = delegateCombine(column.propertyChanged, runOn(this, this.column_PropertyChanged));
		column.columnCellsPropertyUpdating = delegateCombine(column.columnCellsPropertyUpdating, runOn(this, this.columnCellsPropertyUpdating));
		column.columnHeaderCellsPropertyUpdating = delegateCombine(column.columnHeaderCellsPropertyUpdating, runOn(this, this.columnHeaderCellsPropertyUpdating));
		this.spatialEngine.onColumnInsertedAt(index, column, this.model);
		if (column.isHidden) {
			column.state = ColumnStates.Hidden;
		}
		if (this.isColumnAddingAnimationEnabled(column) && !column.isHidden && column.state != ColumnStates.Hidden) {
			let previousState = column.state;
			column.state = ColumnStates.Showing;
			this.refreshLayout();
			this.animationManager.startShowingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(column.uniqueId), true, previousState);
		} else {
			this.refreshLayout();
		}
		for (let i = 0; i < this.sortDescriptions.all.count; i++) {
			if (column.propertyPath == this.sortDescriptions.all.item(i).propertyPath) {
				column.sortDirection = this.columnSortDirectionFromListSortDirection(this.sortDescriptions.all.item(i).sortDirection);
				break;
			}
		}
		this.selectionManager.onColumnInsertedAt(index, column);
	}
	private columnCellsPropertyUpdating(column: Column, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (propertyName == Column.widthPropertyName || propertyName == Column.minWidthPropertyName || propertyName == Column.pinnedPropertyName) {
			this.refreshLayout();
			this.coerceView();
			return;
		}
		if (propertyAnimationType == CellPropertyAnimationType.IgnoredValue) {
			return;
		}
		let columnInfo = this.model.getColumnById(column.uniqueId);
		if (columnInfo == null) {
			return;
		}
		if (propertyName != null && stringStartsWith(propertyName, "Actual")) {
			propertyName = propertyName.substr(6);
		}
		if (propertyName == "HeaderText") {
			this.columnHeaderCellsPropertyUpdating(column, "TextValue", propertyAnimationType, oldValue, newValue);
			return;
		}
		if (propertyName == "FormatString") {
			if (typeCast<NumericColumn>((<any>NumericColumn).$type, column) !== null || typeCast<DateTimeColumn>((<any>DateTimeColumn).$type, column) !== null) {
				propertyName = "FormatStringOverride";
			}
		}
		if (propertyName == Column.sortDirectionPropertyName && false == this.isInSortDescriptions_CollectionChanged) {
			this.sortManager.setSortDirection(column, column.sortDirection);
		}
		this.animationManager.animateColumnCellsPropertyChange(this, columnInfo, propertyName, propertyAnimationType, oldValue, newValue, false, false, false, false);
	}
	private onSectionHeaderPropertyChanged(sectionHeader: SectionHeader, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (propertyAnimationType == CellPropertyAnimationType.IgnoredValue) {
			return;
		}
		if (propertyName != null && stringStartsWith(propertyName, "Actual")) {
			propertyName = propertyName.substr(6);
		}
		this.animationManager.animateColumnCellsPropertyChange(this, null, propertyName, propertyAnimationType, oldValue, newValue, false, false, true, false);
	}
	private columnHeaderCellsPropertyUpdating(column: Column, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (propertyAnimationType == CellPropertyAnimationType.IgnoredValue) {
			return;
		}
		let columnInfo = this.model.getColumnById(column.uniqueId);
		if (columnInfo == null) {
			return;
		}
		if (propertyName != null && stringStartsWith(propertyName, "Actual")) {
			propertyName = propertyName.substr(6);
		}
		this.animationManager.animateColumnCellsPropertyChange(this, columnInfo, propertyName, propertyAnimationType, oldValue, newValue, true, false, false, false);
	}
	pinColumn(column: Column, position: PinnedPositions): void {
		let index = this.columns.indexOf(column);
		if (index == -1) {
			return;
		}
		column.oldLeftPosition = this.spatialEngine.getColumnOffset(index, this, this.model);
		column.oldRenderedIndex = this.model.columns._inner[index].renderedIndex;
		column.oldPinned = column.pinned;
		column.pinned = position;
		this.spatialEngine.invalidateRenderIndexes(this.model);
		let previousState = column.state;
		if (this.isColumnMovingAnimationEnabled(column)) {
			column.state = ColumnStates.Moving;
			this.animationManager.startMovingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(column.uniqueId), previousState);
		}
	}
	private _suppressColumnChangeReactions: boolean = false;
	private get suppressColumnChangeReactions(): boolean {
		return this._suppressColumnChangeReactions;
	}
	private set suppressColumnChangeReactions(value: boolean) {
		this._suppressColumnChangeReactions = value;
	}
	private _suppressColumnMoveAnimations: boolean = false;
	private get suppressColumnMoveAnimations(): boolean {
		return this._suppressColumnMoveAnimations;
	}
	private set suppressColumnMoveAnimations(value: boolean) {
		this._suppressColumnMoveAnimations = value;
	}
	moveColumn(oldIndex: number, newIndex: number): void {
		this.externalGrid.ensureColumnsAreManual();
		let movingColumn = this.columns._inner[oldIndex];
		this.suppressColumnChangeReactions = true;
		if (movingColumn != null && movingColumn.isFromMarkup) {
			throw new InvalidOperationException(1, "Can't move a column that was created from markup");
		}
		if (newIndex > oldIndex) {
			let rightItem = this.columns._inner[newIndex - 1];
			if (rightItem.isFromMarkup) {
				throw new InvalidOperationException(1, "Can't move a column to before columns created from markup");
			}
		} else {
			let rightItem1 = this.columns._inner[newIndex];
			if (rightItem1.isFromMarkup) {
				throw new InvalidOperationException(1, "Can't move a column to before columns created from markup");
			}
		}
		this.externalGrid.removeExternalColumn(movingColumn.externalObject);
		this.externalGrid.insertExternalColumnAtIndex(newIndex, movingColumn.externalObject);
		this.suppressColumnChangeReactions = false;
		this.onColumnMoved(oldIndex, newIndex, movingColumn);
	}
	moveColumnLeft(columnIndex: number): void {
		this.moveColumnHelper(columnIndex, true, true);
	}
	moveColumnRight(columnIndex: number): void {
		this.moveColumnHelper(columnIndex, false, true);
	}
	canMoveColumnLeft(columnIndex: number): boolean {
		return this.moveColumnHelper(columnIndex, true, false);
	}
	canMoveColumnRight(columnIndex: number): boolean {
		return this.moveColumnHelper(columnIndex, false, false);
	}
	private moveColumnHelper(columnIndex: number, left: boolean, performMove: boolean): boolean {
		let actualColumns = this.actualColumns;
		let maxColumnIndex: number = actualColumns.count - 1;
		let movingColumn = actualColumns._inner[columnIndex];
		let movingColumnPinned = movingColumn.pinned;
		let newColumnIndex = -1;
		let testColumnIndex: number = columnIndex;
		do {
			testColumnIndex += left ? -1 : 1;
			if (testColumnIndex < 0 || testColumnIndex > maxColumnIndex) {
				break;
			}
			let testColumn = actualColumns._inner[testColumnIndex];
			if (testColumn.pinned == movingColumnPinned) {
				newColumnIndex = testColumnIndex;
			}
		} while (newColumnIndex == -1);
		if (newColumnIndex != -1) {
			if (performMove) {
				this.moveColumn(columnIndex, newColumnIndex);
			}
			return true;
		}
		switch (movingColumn.pinned) {
			case PinnedPositions.None:
			let edgeColumn = this.findPinnedEdgeColumn(left);
			if (null == edgeColumn) {
				return false;
			}
			if (performMove) {
				newColumnIndex = actualColumns.indexOf(edgeColumn);
				if (left) {
					newColumnIndex++;
				}
				this.moveColumn(columnIndex, newColumnIndex);
				movingColumn.pinned = edgeColumn.pinned;
			}
			break;

			case PinnedPositions.Left:
			if (left) {
				return false;
			}
			if (performMove) {
				newColumnIndex = 0;
				this.moveColumn(columnIndex, newColumnIndex);
				movingColumn.pinned = PinnedPositions.None;
			}
			break;

			case PinnedPositions.Right:
			if (!left) {
				return false;
			}
			if (performMove) {
				newColumnIndex = maxColumnIndex;
				this.moveColumn(columnIndex, newColumnIndex);
				movingColumn.pinned = PinnedPositions.None;
			}
			break;

		}

		return true;
	}
	private findPinnedEdgeColumn(left: boolean): Column {
		let targetPinnedPosition = left ? PinnedPositions.Left : PinnedPositions.Right;
		let columns = this.actualColumns;
		let visibleColumns = this.model.visibleColumns;
		let maxVisibleIndex: number = visibleColumns.count - 1;
		let testVisibleIndex: number = left ? 0 : maxVisibleIndex;
		let testColumnIndex: number = visibleColumns._inner[testVisibleIndex];
		let testColumn = columns._inner[testColumnIndex];
		let edgeColumn: Column = null;
		while (testColumn.pinned == targetPinnedPosition) {
			edgeColumn = testColumn;
			testVisibleIndex += left ? 1 : -1;
			if (testVisibleIndex < 0 || testVisibleIndex > maxVisibleIndex) {
				break;
			}
			testColumn = columns._inner[testColumnIndex];
		}
		return edgeColumn;
	}
	private onColumnMoved(oldIndex: number, newIndex: number, column: Column): void {
		column.oldLeftPosition = this.spatialEngine.getColumnOffset(oldIndex, this, this.model);
		column.oldIndex = oldIndex;
		column.oldRenderedIndex = this.model.columns._inner[oldIndex].renderedIndex;
		let previousState = column.state;
		this.spatialEngine.onColumnMoved(this.gridLayerController, this.model, oldIndex, newIndex, column.uniqueId);
		if (!this.isColumnMovingAnimationEnabled(column) && previousState != ColumnStates.Hidden) {
			column.state = ColumnStates.Visible;
		}
		this.refreshLayout();
		if (this.isColumnMovingAnimationEnabled(column)) {
			column.state = ColumnStates.Moving;
			this.animationManager.startMovingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(column.uniqueId), previousState);
		}
		this.selectionManager.onColumnMoved(oldIndex, newIndex, column);
	}
	private column_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		let column: Column = <Column>sender;
		switch (e.propertyName) {
			case Column.filterPropertyName:
			this.updateColumnsFilter();
			break;

			case Column.isHiddenPropertyName:
			if (column.isHidden) {
				if (this.isColumnHidingAnimationEnabled(column)) {
					let previousState = column.state;
					column.state = ColumnStates.Hiding;
					this.refreshLayout();
					this.animationManager.startHidingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(column.uniqueId), false, previousState);
				} else {
					column.state = ColumnStates.Hidden;
					if (column.actualShouldRemoveWhenHidden) {
						this.externalGrid.ensureColumnsAreManual();
						this.externalGrid.removeExternalColumn(column.externalObject);
					}
					this.refreshLayout();
				}
			} else {
				if (this.isColumnShowingAnimationEnabled(column)) {
					let previousState1 = column.state;
					column.state = ColumnStates.Showing;
					this.refreshLayout();
					this.animationManager.startShowingColumnAnimations(this, this.columnAnimationSettings, this.model.getColumnById(column.uniqueId), false, previousState1);
				} else {
					column.state = ColumnStates.Visible;
					this.animationManager.startEnsureCellShownAnimations(this, this.model.getColumnById(column.uniqueId));
					this.effectManager.forceTickCells();
					this.refreshLayout();
				}
			}
			if (this.columnHiddenChanged != null) {
				this.columnHiddenChanged(this, ((() => {
					let $ret = new ColumnHiddenChangedEventArgs();
					$ret.column = column;
					$ret.isHidden = column.isHidden;
					return $ret;
				})()));
			}
			break;

		}

	}
	private updateColumnsFilter(): void {
		if (this.actualDataSource == null) {
			return;
		}
		let columnsFilter: IFilterExpression = this.getColumnsFilterExcludingColumn(null);
		if (columnsFilter != null) {
			columnsFilter.markAutoGenerated();
			let inserted: boolean = false;
			if (this.filterExpressions != null) {
				for (let i = 0; i < this.filterExpressions.all.count; i++) {
					if (this.filterExpressions.all.item(i).isAutoGenerated) {
						this.filterExpressions.all.item(i, columnsFilter);
						inserted = true;
						break;
					}
				}
			}
			if (!inserted) {
				this.filterExpressions.add(columnsFilter);
			}
		} else {
			for (let i1 = this.filterExpressions.all.count - 1; i1 >= 0; i1--) {
				if (this.filterExpressions.all.item(i1).isAutoGenerated) {
					this.filterExpressions.removeAt(i1);
				}
			}
		}
	}
	private getTargetDefinition(path: CellPath): DefinitionBase {
		let rowType = this._adapter.getRowType(path.row);
		if (rowType != DataSourceRowType.Normal && rowType != DataSourceRowType.ShiftedRow) {
			if (path.isRowSeparator) {
				return this.rowSeparator;
			}
			switch (rowType) {
				case DataSourceRowType.SectionHeader: if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
					return this.sectionHeader;
				} else {
					return this.getContainingColumn(path);
				}
				case DataSourceRowType.SectionFooter: return this.sectionFooter;
				case DataSourceRowType.SummaryRowRoot: return this.summaryRowRoot;
				case DataSourceRowType.SummaryRowSection: return this.summaryRowSection;
				default: throw new NotSupportedException(0);
			}

		} else {
			if (path.isRowSeparator) {
				return this.rowSeparator;
			} else {
				if (path.isResizeSeparatorCell) {
					if (this.dragger.dragType == DragType.HeaderResize) {
						return this.columnResizingSeparator;
					} else if (this.dragger.dragType == DragType.ColumnMove) {
						return this.columnMovingSeparator;
					}
				}
				if (path.isPinnedLeftSeparatorCell || path.isPinnedRightSeparatorCell || path.isPinnedLeftHeaderSeparatorCell || path.isPinnedRightHeaderSeparatorCell) {
					return this.pinnedAreaSeparator;
				}
				let column = this.getContainingColumn(path);
				if (path.isHeaderCell) {
					if (path.isHeaderSeparatorCell) {
						return this.headerSeparator;
					} else {
						return column.header;
					}
				} else {
					return column;
				}
			}
		}
	}
	getStyleKey(path: CellPath, grid: Grid, resolvedValue: any, fullRow: number): string {
		return this.getTargetDefinition(path).getStyleKey(path, grid, resolvedValue, fullRow);
	}
	createModel(path: CellPath, resolvedStyleKey: string): CellModel {
		let def = this.getTargetDefinition(path);
		let model = def.createModel(path, resolvedStyleKey);
		model.owner = this;
		return model;
	}
	exportVisualModel(): any {
		return this.model.$export();
	}
	exportSerializedVisualModel(): string {
		let vme: VisualModelExport = this.model.$export();
		return vme.serialize();
	}
	getRowPathForAbsoluteRow(row: number): RowPath {
		return this.adapter.getRowPathForRow(row);
	}
	private _accountForCurrentStickyHeight: boolean = false;
	scrollToRowByIndex(rowNumber: number): void {
		let x: number = <number>truncate(this.model.actualVisibleRegion.left);
		if (this._pendingLeftScroll != -1) {
			x = this._pendingLeftScroll;
		}
		let y: number = 0;
		let rowCount: number = 0;
		if (rowNumber < 0) {
			rowNumber = 0;
		}
		if (rowNumber >= this.adapter.getRowCount()) {
			rowNumber = this.adapter.getRowCount() - 1;
		}
		let rowIndex: number = 0;
		for (let section of fromEnum<SectionInfo>(this.model.sections)) {
			if (rowCount + section.rowCount > rowNumber) {
				rowIndex = <number>truncate(Math.floor(rowNumber - rowCount));
				let rowHeight: number = section.getHeightForRow(rowIndex);
				y = section.getOffsetForRow(rowIndex);
				y += <number>truncate(Math.round(rowHeight * ((rowNumber - rowCount) - rowIndex)));
			} else {
				rowCount += section.rowCount;
				continue;
			}
		}
		let pinnedRowInfos = this.visibilityEngine.testRunCalculateRows(this, this.model, new Rect(0, x, y, this.model.width, this.model.height));
		let stickyRowsHeight: number = 0;
		for (let i = 0; i < pinnedRowInfos.count; i++) {
			if (pinnedRowInfos._inner[i].index >= rowIndex) {
				break;
			}
			stickyRowsHeight += pinnedRowInfos._inner[i].height + this.rowSeparatorHeight + this.rowSpacingHeight;
		}
		y -= <number>truncate(stickyRowsHeight);
		y = Math.max(y, 0);
		if (this.model.absoluteHeight > 0 && this.model.actualVisibleRegion.height > 0 && y + this.model.actualVisibleRegion.height > this.model.absoluteHeight) {
			y = <number>truncate(Math.round(<number>this.model.absoluteHeight - this.model.actualVisibleRegion.height));
		}
		if (y < 0) {
			y = 0;
		}
		this._pendingTopScroll = y;
		this._pendingLeftScroll = x;
		this.viewportManager.moveViewportTo(x, y);
	}
	scrollToLastRowByIndex(rowNumber: number): void {
		let x: number = <number>truncate(this.model.actualVisibleRegion.left);
		if (this._pendingLeftScroll != -1) {
			x = this._pendingLeftScroll;
		}
		let y: number = 0;
		let rowCount: number = 0;
		if (rowNumber < 0) {
			rowNumber = 0;
		}
		if (rowNumber >= this.adapter.getRowCount()) {
			rowNumber = this.adapter.getRowCount() - 1;
		}
		let rowH: number = 0;
		for (let section of fromEnum<SectionInfo>(this.model.sections)) {
			if (rowCount + section.rowCount > rowNumber) {
				let rowIndex = <number>truncate(Math.floor(rowNumber - rowCount));
				let rowHeight = section.getHeightForRow(rowIndex);
				rowH = rowHeight;
				y = section.offset + section.getOffsetForRow(rowIndex);
				y += <number>truncate(Math.round(rowHeight * ((rowNumber - rowCount) - rowIndex)));
			} else {
				rowCount += section.rowCount;
				continue;
			}
		}
		y -= this.model.fullHeaderHeight;
		y = Math.max(y, 0);
		if (this.model.absoluteHeight > 0 && this.model.actualVisibleRegion.height > 0) {
			y -= <number>truncate(Math.round(this.model.actualVisibleRegion.height - this.model.stickyFootersRowsHeight - (rowH + this.model.fullHeaderHeight)));
		}
		if (this.model.absoluteHeight > 0 && this.model.actualVisibleRegion.height > 0 && y + this.model.actualVisibleRegion.height > this.model.absoluteHeight) {
			y = <number>truncate(Math.round(<number>this.model.absoluteHeight - this.model.actualVisibleRegion.height));
		}
		if (y < 0) {
			y = 0;
		}
		this._pendingTopScroll = y;
		this._pendingLeftScroll = x;
		this.viewportManager.moveViewportTo(x, y);
	}
	scrollToItem(item: any): boolean {
		let index = this.dataIndexOfItem(item);
		if (index == -1) {
			return false;
		}
		this.scrollToRowByIndex(index);
		return true;
	}
	scrollToPrimaryKey(key: any[]): boolean {
		let index = this.dataIndexOfPrimaryKey(key);
		if (index == -1) {
			return false;
		}
		this.scrollToRowByIndex(index);
		return true;
	}
	scrollToColumnByIndex(columnNumber: number): void {
		let columnIndex = <number>truncate(columnNumber);
		if (columnIndex < 0) {
			columnIndex = 0;
			columnNumber = 0;
		}
		if (columnNumber > this.model.columns.count) {
			columnIndex = this.model.columns.count - 1;
			columnNumber = this.model.columns.count - 1;
		}
		let column = this.columns._inner[columnIndex];
		if (column.pinned != PinnedPositions.None) {
			return;
		}
		let offset: number = this.spatialEngine.getColumnOffset(columnIndex, this, this.model);
		let y: number = <number>truncate(this.model.actualVisibleRegion.top);
		if (this._pendingTopScroll != -1) {
			y = this._pendingTopScroll;
		}
		let x: number = offset + <number>truncate((this.model.columns._inner[columnIndex].actualWidth * (columnNumber - columnIndex)));
		x -= this.model.fixedColumnWidthLeft;
		if (this.model.absoluteWidth > 0 && this.model.actualVisibleRegion.width > 0 && x + this.model.actualVisibleRegion.width > this.model.absoluteWidth) {
			x = <number>truncate(Math.round(<number>this.model.absoluteWidth - this.model.actualVisibleRegion.width));
		}
		if (x < 0) {
			x = 0;
		}
		this._pendingTopScroll = y;
		this._pendingLeftScroll = x;
		this.viewportManager.moveViewportTo(x, y);
	}
	private scrollToLastColumnByIndex(columnNumber: number): void {
		let columnIndex = <number>truncate(columnNumber);
		if (columnIndex < 0) {
			columnIndex = 0;
			columnNumber = 0;
		}
		if (columnNumber > this.model.columns.count) {
			columnIndex = this.model.columns.count - 1;
			columnNumber = this.model.columns.count - 1;
		}
		let column = this.columns._inner[columnIndex];
		let offset: number = this.spatialEngine.getColumnOffset(columnIndex, this, this.model);
		let y: number = <number>truncate(this.model.actualVisibleRegion.top);
		if (this._pendingTopScroll != -1) {
			y = this._pendingTopScroll;
		}
		let x: number = offset + <number>truncate((this.model.columns._inner[columnIndex].actualWidth * (columnNumber - columnIndex)));
		let regionWidth = this.model.actualVisibleRegion.width - this.model.fixedColumnWidthRight;
		if (this.model.absoluteWidth > 0 && regionWidth > 0) {
			x -= <number>truncate(Math.round(regionWidth - this.model.columns._inner[columnIndex].actualWidth));
		}
		if (this.model.absoluteWidth > 0 && this.model.actualVisibleRegion.width > 0 && x + this.model.actualVisibleRegion.width > this.model.absoluteWidth) {
			x = <number>truncate(Math.round(<number>this.model.absoluteWidth - this.model.actualVisibleRegion.width));
		}
		if (x < 0) {
			x = 0;
		}
		this._pendingTopScroll = y;
		this._pendingLeftScroll = x;
		this.viewportManager.moveViewportTo(x, y);
	}
	shouldAnimateColumnAdding(column: Column): boolean {
		return this.isColumnAddingAnimationEnabled(column);
	}
	onDataSourceRangeActualized(startIndex: number, endIndex: number): void {
		let firstVisible: number = this.getFirstVisibleIndex();
		let lastVisible: number = this.getLastVisibleIndex();
		if (endIndex < firstVisible || startIndex > lastVisible) {
			return;
		}
		if (startIndex < firstVisible) {
			startIndex = firstVisible;
		}
		if (endIndex > lastVisible) {
			endIndex = lastVisible;
		}
		if (!this.rowsAreVisible()) {
			return;
		}
		this.animationManager.startActualizationAnimations(this, startIndex, endIndex, false);
		if (this.adapter.getRowCount() != this.model.getRowCount()) {
			this.refreshLayout();
		} else {
			this.refreshPosition();
		}
		this.coerceView();
	}
	private coerceView(): void {
		if (this.model.actualVisibleRegion.isEmpty) {
			return;
		}
		if (this.model.actualVisibleRegion.bottom > this.model.absoluteHeight || this.model.actualVisibleRegion.top > this.model.absoluteHeight) {
			let scrollTo = this.adapter.getRowCount() - 1;
			if (scrollTo < 0) {
				scrollTo = 0;
			}
			this.scrollToRowByIndex(scrollTo);
		}
		if (this.model.actualVisibleRegion.right > this.model.absoluteWidth || this.model.actualVisibleRegion.left > this.model.absoluteWidth) {
			let scrollTo1 = this.columnController.actualColumns.count - 1;
			if (scrollTo1 < 0) {
				scrollTo1 = 0;
			}
			this.scrollToLastColumnByIndex(scrollTo1);
		}
	}
	private getAbsoluteIndex(model: CellModel): number {
		return this.spatialEngine.getAbsoluteIndex(this.model, model.path);
	}
	private rowsAreVisible(): boolean {
		return this.model.bottomRow != null && this.model.topRow != null && this.model.topRow.row >= 0 && this.model.bottomRow.row >= 0;
	}
	getLastVisibleIndex(): number {
		return this.spatialEngine.getAbsoluteIndex(this.model, this.model.bottomRow);
	}
	getFirstVisibleIndex(): number {
		return this.spatialEngine.getAbsoluteIndex(this.model, this.model.topRow);
	}
	getFirstUncoveredIndex(): number {
		let uncovered = this.spatialEngine.positionToRow(this.model.actualVisibleRegion.top + this.model.headerHeight + this.model.headerRowSeparatorHeight + this.model.stickyRowsHeight, this.model);
		return this.spatialEngine.getAbsoluteIndex(this.model, uncovered);
	}
	getLastUnconveredIndex(): number {
		let uncovered = this.spatialEngine.positionToRow(this.model.actualVisibleRegion.bottom - this.model.stickyFootersRowsHeight, this.model);
		return this.spatialEngine.getAbsoluteIndex(this.model, uncovered);
	}
	onVisibleRangeChanged(): void {
		let firstVisible: number = this.getFirstVisibleIndex();
		let lastVisible: number = this.getLastVisibleIndex();
		this.adapter.firstVisibleIndexRequested = firstVisible;
		this.adapter.lastVisibleIndexRequested = lastVisible;
	}
	private _isClickActionDesired: boolean = false;
	get isClickActionDesired(): boolean {
		return this._isClickActionDesired;
	}
	set isClickActionDesired(value: boolean) {
		this._isClickActionDesired = value;
	}
	private _isHoverActionDesired: boolean = false;
	get isHoverActionDesired(): boolean {
		return this._isHoverActionDesired;
	}
	set isHoverActionDesired(value: boolean) {
		this._isHoverActionDesired = value;
	}
	get isPreviewPointerDownDesired(): boolean {
		return this.cellPreviewPointerDown != null;
	}
	get isPreviewPointerUpDesired(): boolean {
		return this.cellPreviewPointerUp != null;
	}
	get isPointerDownDesired(): boolean {
		return this.cellPointerDown != null;
	}
	get isPointerUpDesired(): boolean {
		return this.cellPointerUp != null;
	}
	private resolveIsClickActionDesired(): boolean {
		return this.selectionMode != GridSelectionMode.None || this.cellClicked != null || this.activationMode != GridActivationMode.None || this.columnResizingMode != ColumnResizingMode.None || this.columnMovingMode != ColumnMovingMode.None;
	}
	private resolveIsHoverActionDesired(): boolean {
		return (this.columnResizingMode != ColumnResizingMode.None && this.isHeaderSeparatorVisible) || this.columnMovingMode != ColumnMovingMode.None;
	}
	onRowSelected(item: any, key: PrimaryKeyValue): void {
		this.ignoreSelectionChanged = true;
		this.addSelectedItem(item, key);
		this.ignoreSelectionChanged = false;
	}
	onRowUnselected(item: any, key: PrimaryKeyValue): void {
		this.ignoreSelectionChanged = true;
		this.removeSelectedItem(item, key);
		this.ignoreSelectionChanged = false;
	}
	onSelectedRowItemUpdated(index: number, item: any, key: PrimaryKeyValue): void {
		this.ignoreSelectionChanged = true;
		this.updateSelectedItem(index, item, key);
		this.ignoreSelectionChanged = false;
	}
	private _updatingActiveCell: boolean = false;
	onCellActivated(row: number, columnUniqueKey: string): void {
		if (!this._updatingActiveCell) {
			let pos: GridCellPosition = new GridCellPosition();
			pos.columnUniqueKey = columnUniqueKey;
			pos.rowIndex = row;
			this.activeCell = pos;
		}
		if (this.activeCellChanged != null) {
			let args: GridActiveCellChangedEventArgs = new GridActiveCellChangedEventArgs();
			args.newActiveCell = this.activeCell;
			args.oldActiveCell = this._oldActiveCell;
			this.activeCellChanged(this, args);
		}
	}
	onCellDeactivated(row: number, columnUniqueKey: string): void {
		if (columnUniqueKey == null) {
			return;
		}
		let oldCell = this.activeCell;
		if (!this._updatingActiveCell) {
			let pos: GridCellPosition = new GridCellPosition();
			pos.columnUniqueKey = columnUniqueKey;
			pos.rowIndex = row;
			this.activeCell = pos;
		}
		if (this.activeCellChanged != null) {
			let args: GridActiveCellChangedEventArgs = new GridActiveCellChangedEventArgs();
			args.newActiveCell = this.activeCell;
			args.oldActiveCell = oldCell;
			this.activeCellChanged(this, args);
		}
	}
	onDownArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let previousRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (previousRow > this.adapter.getRowCount() - 1) {
			return false;
		}
		let currentRow = previousRow + 1;
		if (isCtrlPressed) {
			currentRow = this.adapter.getRowCount() - 1;
		}
		if (currentRow > this.adapter.getRowCount() - 1) {
			currentRow = this.adapter.getRowCount() - 1;
		}
		if (currentRow == previousRow) {
			return false;
		}
		let currentColumnIdx = Math.min(this.activationManager.getColumnIndex(), this.actualColumns.count - 1);
		currentColumnIdx = this.ensureColumnIndexVisible(currentColumnIdx);
		let currentColumn = this.actualColumns._inner[currentColumnIdx];
		if (currentKey != currentColumn.getUniqueKey()) {
			currentKey = currentColumn.getUniqueKey();
		}
		if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
			let rowType = this.adapter.getRowType(currentRow);
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				currentKey = null;
			}
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		let currentColumnIndex = this.activationManager.getColumnIndex();
		this.bringCellIntoView(currentRow, this.model.columns._inner[currentColumnIndex].renderedIndex, false);
		return true;
	}
	onEnd(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		if (!isCtrlPressed) {
			return false;
		}
		let lastColIndex = this.getLastColumnIndex();
		let lastCol = this.actualColumns._inner[lastColIndex];
		let currentRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (currentRow >= this.adapter.getRowCount() - 1 && currentKey == lastCol.getUniqueKey()) {
			return false;
		}
		currentRow = this.adapter.getRowCount() - 1;
		currentKey = lastCol.getUniqueKey();
		let rowType = this.adapter.getRowType(currentRow);
		if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
			currentKey = null;
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		this._accountForCurrentStickyHeight = true;
		this.scrollToLastRowByIndex(currentRow);
		this._accountForCurrentStickyHeight = false;
		this.scrollToColumnByIndex(lastColIndex);
		return true;
	}
	private getLastColumnIndex(): number {
		let renderIndex: number = this.actualColumns.count - 1;
		let columnIndex: number = this.spatialEngine.getColumnAtRenderedIndex(renderIndex, this.model);
		while (renderIndex > 0 && this.actualColumns._inner[columnIndex].isHidden) {
			renderIndex--;
			columnIndex = this.spatialEngine.getColumnAtRenderedIndex(renderIndex, this.model);
		}
		return columnIndex;
	}
	private getFirstColumnIndex(): number {
		let renderIndex: number = 0;
		let columnIndex: number = this.spatialEngine.getColumnAtRenderedIndex(renderIndex, this.model);
		while (renderIndex < this.actualColumns.count - 1 && this.actualColumns._inner[columnIndex].isHidden) {
			renderIndex++;
			columnIndex = this.spatialEngine.getColumnAtRenderedIndex(renderIndex, this.model);
		}
		return columnIndex;
	}
	private getPreviousColumnIndex(colIndex: number, logical: boolean = true): number {
		let ind: number = Math.max(0, colIndex - 1);
		if (!logical) {
			ind = this.spatialEngine.getColumnAtRenderedIndex(ind, this.model);
		}
		if (this.actualColumns._inner[ind].isHidden) {
			let tempInd = ind;
			let renderInd = this.model.columns._inner[ind].renderedIndex;
			while (renderInd > 0 && this.actualColumns._inner[tempInd].isHidden) {
				renderInd--;
				tempInd = this.spatialEngine.getColumnAtRenderedIndex(renderInd, this.model);
			}
			if (this.actualColumns._inner[tempInd].isHidden) {
				tempInd = ind;
				renderInd = this.model.columns._inner[ind].renderedIndex;
				while (renderInd < this.actualColumns.count - 1 && this.actualColumns._inner[tempInd].isHidden) {
					renderInd++;
					tempInd = this.spatialEngine.getColumnAtRenderedIndex(renderInd, this.model);
				}
				if (!this.actualColumns._inner[tempInd].isHidden) {
					ind = tempInd;
				}
			} else {
				ind = tempInd;
			}
		}
		return ind;
	}
	private getNextColumnIndex(colIndex: number, logical: boolean = true): number {
		let ind: number = Math.min(this.actualColumns.count - 1, colIndex + 1);
		if (!logical) {
			ind = this.spatialEngine.getColumnAtRenderedIndex(ind, this.model);
		}
		return this.ensureColumnIndexVisible(ind);
	}
	private ensureColumnIndexVisible(columnIndex: number): number {
		columnIndex = Math.min(columnIndex, this.actualColumns.count - 1);
		if (this.actualColumns._inner[columnIndex].isHidden) {
			let ind = columnIndex;
			let renderInd = this.model.columns._inner[ind].renderedIndex;
			while (renderInd < this.actualColumns.count - 1 && this.actualColumns._inner[ind].isHidden) {
				renderInd++;
				ind = this.spatialEngine.getColumnAtRenderedIndex(renderInd, this.model);
			}
			if (this.actualColumns._inner[ind].isHidden) {
				ind = columnIndex;
				renderInd = this.model.columns._inner[ind].renderedIndex;
				while (renderInd > 0 && this.actualColumns._inner[ind].isHidden) {
					renderInd--;
					ind = this.spatialEngine.getColumnAtRenderedIndex(renderInd, this.model);
				}
				if (!this.actualColumns._inner[ind].isHidden) {
					columnIndex = ind;
				}
			} else {
				columnIndex = ind;
			}
		}
		return columnIndex;
	}
	private bringCellIntoView(rowIndex: number, columnIndex: number, forceToTop: boolean): void {
		if (columnIndex <= this.getFirstVisibleColumnIndex()) {
			columnIndex = this.spatialEngine.getColumnAtRenderedIndex(columnIndex, this.model);
			this.scrollToColumnByIndex(columnIndex);
		} else if (columnIndex >= this.getLastVisibleColumnIndex()) {
			columnIndex = this.spatialEngine.getColumnAtRenderedIndex(columnIndex, this.model);
			this.scrollToLastColumnByIndex(columnIndex);
		}
		if (rowIndex <= this.getFirstUncoveredIndex()) {
			this.scrollToRowByIndex(rowIndex);
		} else if (rowIndex >= this.getLastUnconveredIndex()) {
			if (forceToTop) {
				this.scrollToRowByIndex(rowIndex);
			} else {
				this.scrollToLastRowByIndex(rowIndex);
			}
		}
	}
	onHome(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (!isCtrlPressed) {
			return false;
		}
		let firstColIndex = this.getFirstColumnIndex();
		let firstCol = this.actualColumns._inner[firstColIndex];
		let currentRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (currentRow <= 0 && currentKey == firstCol.getUniqueKey()) {
			return false;
		}
		currentRow = 0;
		currentKey = firstCol.getUniqueKey();
		if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
			let rowType = this.adapter.getRowType(currentRow);
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				currentKey = null;
			}
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		this._accountForCurrentStickyHeight = true;
		this.scrollToLastRowByIndex(currentRow);
		this._accountForCurrentStickyHeight = false;
		this.scrollToColumnByIndex(firstColIndex);
		return true;
	}
	onLeftArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let colIndex = this.activationManager.getColumnIndex();
		let colRenderedIndex = this.model.columns._inner[colIndex].renderedIndex;
		let currentRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (currentKey == null) {
			return false;
		}
		let prevColumnIndex = this.getPreviousColumnIndex(colRenderedIndex, false);
		if (isCtrlPressed) {
			prevColumnIndex = this.getFirstColumnIndex();
		}
		let prevColumn = this.actualColumns._inner[prevColumnIndex];
		if (currentKey == prevColumn.getUniqueKey()) {
			return false;
		}
		currentKey = prevColumn.getUniqueKey();
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		if (prevColumn.pinned == PinnedPositions.None) {
			this.bringCellIntoView(currentRow, this.model.columns._inner[prevColumnIndex].renderedIndex, false);
		}
		return true;
	}
	onPageDown(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let currentKey = this._activeCell.columnUniqueKey;
		let currentColumnIndex = this.activationManager.getColumnIndex();
		let firstRow = this.getFirstVisibleIndex();
		let lastRow = this.getLastVisibleIndex();
		let pageSize = lastRow - firstRow;
		let toRow = Math.min(lastRow + 1, this.adapter.getRowCount() - 1);
		let rowType = this.adapter.getRowType(toRow);
		if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
			currentKey = null;
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = toRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		this.bringCellIntoView(toRow, this.model.columns._inner[currentColumnIndex].renderedIndex, true);
		return true;
	}
	onPageUp(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let currentKey = this._activeCell.columnUniqueKey;
		let currentColumnIndex = this.activationManager.getColumnIndex();
		let firstRow = this.getFirstVisibleIndex();
		let lastRow = this.getLastVisibleIndex();
		let pageSize = lastRow - firstRow;
		let toRow = Math.max(firstRow - pageSize - 1, 0);
		let rowType = this.adapter.getRowType(toRow);
		if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
			currentKey = null;
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = toRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		this.bringCellIntoView(toRow, this.model.columns._inner[currentColumnIndex].renderedIndex, false);
		return true;
	}
	onRightArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let colIndex = this.activationManager.getColumnIndex();
		let colRenderedIndex = this.model.columns._inner[colIndex].renderedIndex;
		let currentRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (currentKey == null) {
			return false;
		}
		let nextColumnIndex = this.getNextColumnIndex(colRenderedIndex, false);
		if (isCtrlPressed) {
			nextColumnIndex = this.getLastColumnIndex();
		}
		let nextColumn = this.actualColumns._inner[nextColumnIndex];
		if (currentKey == nextColumn.getUniqueKey()) {
			return false;
		}
		currentKey = nextColumn.getUniqueKey();
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		if (nextColumn.pinned == PinnedPositions.None) {
			this.bringCellIntoView(currentRow, this.model.columns._inner[nextColumnIndex].renderedIndex, false);
		}
		return true;
	}
	onTab(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let colIndex = this.activationManager.getColumnIndex();
		let colRenderIndex = this.model.columns._inner[colIndex].renderedIndex;
		let currentRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		let currentActiveColumnIndex: number = colIndex;
		let currentRowType = DataSourceRowType.Normal;
		if (currentRow >= 0 && currentRow < this.adapter.getRowCount()) {
			currentRowType = this.adapter.getRowType(currentRow);
		}
		let isSectionHeader = this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells && currentRowType == DataSourceRowType.SectionHeader;
		if (isShiftPressed) {
			let prevColumnIndex = this.getPreviousColumnIndex(colRenderIndex, false);
			let prevColumn = this.actualColumns._inner[prevColumnIndex];
			if (currentKey == prevColumn.getUniqueKey() || isSectionHeader) {
				if (currentRow > 0) {
					currentRow--;
					currentRowType = this.adapter.getRowType(currentRow);
					if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells && currentRowType == DataSourceRowType.SectionHeader) {
						prevColumnIndex = this.getFirstColumnIndex();
					} else {
						prevColumnIndex = this.getLastColumnIndex();
					}
					prevColumn = this.actualColumns._inner[prevColumnIndex];
				} else {
					return false;
				}
			}
			currentKey = prevColumn.getUniqueKey();
			if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
				if (currentRowType == DataSourceRowType.SectionHeader || currentRowType == DataSourceRowType.SectionFooter) {
					currentKey = null;
				}
			}
			this.activeCell = ((() => {
				let $ret = new GridCellPosition();
				$ret.rowIndex = currentRow;
				$ret.columnUniqueKey = currentKey;
				return $ret;
			})());
			currentActiveColumnIndex = prevColumnIndex;
		} else {
			let nextColumnIndex = this.getNextColumnIndex(colRenderIndex, false);
			let nextColumn = this.actualColumns._inner[nextColumnIndex];
			if (currentKey == nextColumn.getUniqueKey() || isSectionHeader) {
				if (currentRow < this.adapter.getRowCount() - 1) {
					nextColumnIndex = this.getFirstColumnIndex();
					nextColumn = this.actualColumns._inner[nextColumnIndex];
					currentRow++;
					currentRowType = this.adapter.getRowType(currentRow);
				} else {
					return false;
				}
			}
			currentKey = nextColumn.getUniqueKey();
			if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
				if (currentRowType == DataSourceRowType.SectionHeader || currentRowType == DataSourceRowType.SectionFooter) {
					currentKey = null;
				}
			}
			this.activeCell = ((() => {
				let $ret = new GridCellPosition();
				$ret.rowIndex = currentRow;
				$ret.columnUniqueKey = currentKey;
				return $ret;
			})());
			currentActiveColumnIndex = nextColumnIndex;
		}
		this.bringCellIntoView(currentRow, this.model.columns._inner[currentActiveColumnIndex].renderedIndex, false);
		return true;
	}
	onWheel(): void {
	}
	onUpArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode == GridActivationMode.None || this.activeCell == null) {
			return false;
		}
		let previousRow = this._activeCell.rowIndex;
		let currentKey = this._activeCell.columnUniqueKey;
		if (previousRow < 0) {
			return false;
		}
		let currentRow = previousRow - 1;
		if (isCtrlPressed) {
			currentRow = 0;
		}
		if (currentRow < 0) {
			currentRow = 0;
		}
		if (currentRow == previousRow) {
			return false;
		}
		let currentColumnIdx = Math.min(this.activationManager.getColumnIndex(), this.actualColumns.count - 1);
		currentColumnIdx = this.ensureColumnIndexVisible(currentColumnIdx);
		let currentColumn = this.actualColumns._inner[currentColumnIdx];
		if (currentKey != currentColumn.getUniqueKey()) {
			currentKey = currentColumn.getUniqueKey();
		}
		if (this.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
			let rowType = this.adapter.getRowType(currentRow);
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				currentKey = null;
			}
		}
		this.activeCell = ((() => {
			let $ret = new GridCellPosition();
			$ret.rowIndex = currentRow;
			$ret.columnUniqueKey = currentKey;
			return $ret;
		})());
		let currentColumnIndex = this.activationManager.getColumnIndex();
		this.bringCellIntoView(currentRow, this.model.columns._inner[currentColumnIndex].renderedIndex, false);
		return true;
	}
	onEnter(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.activationMode != GridActivationMode.None && this.activeCell != null) {
			let rowType = this.adapter.getRowType(this.activeCell.rowIndex);
			if (rowType == DataSourceRowType.SectionHeader) {
				this.updateExpansionState(this.activeCell.rowIndex);
			}
		}
		return false;
	}
	onCellSelected(key: PrimaryKeyValue, columnId: number): void {
		this.ignoreSelectionChanged = true;
		if (!this._updatingCellStates) {
			let addedCell = this.selectedCells.addCell1(key, this.columnController.getColumnById(columnId).getUniqueKey());
		}
		if (this.selectedCellsChanged != null) {
			let args: GridSelectedCellsChangedEventArgs = new GridSelectedCellsChangedEventArgs();
			args.addedCells = new GridSelectedCellsCollection();
			args.addedCells.add(this.selectedCells.getKey(key, columnId));
			args.removedCells = new GridSelectedCellsCollection();
			this.selectedCellsChanged(this, args);
		}
		this.ignoreSelectionChanged = false;
	}
	onCellUnselected(key: PrimaryKeyValue, columnId: number): void {
		this.ignoreSelectionChanged = true;
		let cellToRemove = this.selectedCells.getKey(key, columnId);
		if (cellToRemove != null) {
			if (!this._updatingCellStates) {
				this.selectedCells.remove(cellToRemove);
			}
			if (this.selectedCellsChanged != null) {
				let args: GridSelectedCellsChangedEventArgs = new GridSelectedCellsChangedEventArgs();
				args.addedCells = new GridSelectedCellsCollection();
				args.removedCells = new GridSelectedCellsCollection();
				args.removedCells.add(cellToRemove);
				this.selectedCellsChanged(this, args);
			}
		}
		this.ignoreSelectionChanged = false;
	}
	columnsAutoGenerated: (sender: any, args: GridColumnsAutoGeneratedEventArgs) => void = null;
	selectedItemsChanged: (sender: any, args: GridSelectedItemsChangedEventArgs) => void = null;
	selectedKeysChanged: (sender: any, args: GridSelectedKeysChangedEventArgs) => void = null;
	selectedCellsChanged: (sender: any, args: GridSelectedCellsChangedEventArgs) => void = null;
	activeCellChanged: (sender: any, args: GridActiveCellChangedEventArgs) => void = null;
	selectedCellRangesChanged: (sender: any, args: GridSelectedCellRangesChangedEventArgs) => void = null;
	addSelectedItem(item: any, key: PrimaryKeyValue): void {
		if (!this._syncingSelection) {
			this.selectedItems.add1(item);
			this.selectedKeys.add(key);
		}
		let args: GridSelectedItemsChangedEventArgs = new GridSelectedItemsChangedEventArgs();
		let addedItems = new List$1<any>((<any>Base).$type, 0);
		addedItems.add1(item);
		args.addedItems = addedItems;
		if (this.selectedItemsChanged != null) {
			this.selectedItemsChanged(this, args);
		}
		let keyArgs: GridSelectedKeysChangedEventArgs = new GridSelectedKeysChangedEventArgs();
		let addedKeys = new GridSelectedKeysCollection();
		addedKeys.add(key);
		keyArgs.addedKeys = addedKeys;
		if (this.selectedKeysChanged != null) {
			this.selectedKeysChanged(this, keyArgs);
		}
	}
	updateSelectedItem(index: number, item: any, key: PrimaryKeyValue): void {
		let oldItem = this.selectedItems.all._inner[index];
		if (!this._syncingSelection) {
			this.selectedItems.all._inner[index] = item;
		}
		let args: GridSelectedItemsChangedEventArgs = new GridSelectedItemsChangedEventArgs();
		let addedItems = new List$1<any>((<any>Base).$type, 0);
		addedItems.add1(item);
		args.addedItems = addedItems;
		let removedItems = new List$1<any>((<any>Base).$type, 0);
		removedItems.add1(item);
		args.removedItems = removedItems;
		if (this.selectedItemsChanged != null) {
			this.selectedItemsChanged(this, args);
		}
	}
	removeSelectedItem(item: any, key: PrimaryKeyValue): void {
		if (!this._syncingSelection) {
			this.selectedItems.remove1(item);
			this.selectedKeys.remove(key);
		}
		let args: GridSelectedItemsChangedEventArgs = new GridSelectedItemsChangedEventArgs();
		let removedItems = new List$1<any>((<any>Base).$type, 0);
		removedItems.add1(item);
		args.removedItems = removedItems;
		if (this.selectedItemsChanged != null) {
			this.selectedItemsChanged(this, args);
		}
		let keyArgs: GridSelectedKeysChangedEventArgs = new GridSelectedKeysChangedEventArgs();
		let removedKeys = new GridSelectedKeysCollection();
		removedKeys.add(key);
		keyArgs.removedKeys = removedKeys;
		if (this.selectedKeysChanged != null) {
			this.selectedKeysChanged(this, keyArgs);
		}
	}
	private _lastAddedCellRange: CellRange = null;
	addCellRange1(startColumn: number, endColumn: number, startRow: number, endRow: number): void {
		let r = new CellRange();
		r.startColumn = startColumn;
		r.endColumn = endColumn;
		r.startRow = startRow;
		r.endRow = endRow;
		this.addCellRange(r);
	}
	addCellRange(range: CellRange): void {
		this.selectedCellRanges.add(range);
		this._lastAddedCellRange = range;
		if (this.selectedCellRangesChanged != null) {
			let args = new GridSelectedCellRangesChangedEventArgs();
			args.addedRanges = ((() => {
				let $ret = new GridSelectedCellRangesCollection();
				$ret.add(range);
				return $ret;
			})());
			this.selectedCellRangesChanged(this, args);
		}
	}
	removeCellRange(range: CellRange): void {
		if (this.selectedCellRanges.contains(range)) {
			this.selectedCellRanges.remove(range);
			if (this.selectedCellRangesChanged != null) {
				let args = new GridSelectedCellRangesChangedEventArgs();
				args.removedRanges = ((() => {
					let $ret = new GridSelectedCellRangesCollection();
					$ret.add(range);
					return $ret;
				})());
				this.selectedCellRangesChanged(this, args);
			}
		}
	}
	removeAllRanges(): void {
		if (this.selectedCellRanges.count > 0) {
			let removedRanges = new GridSelectedCellRangesCollection();
			for (let i = 0; i < this.selectedCellRanges.count; i++) {
				removedRanges.add(this.selectedCellRanges._inner[i]);
			}
			this.selectedCellRanges.clear();
			if (this.selectedCellRangesChanged != null) {
				let args = new GridSelectedCellRangesChangedEventArgs();
				args.removedRanges = removedRanges;
				this.selectedCellRangesChanged(this, args);
			}
		}
	}
	private notifyCellRangeUpdated(updatedRange: CellRange): void {
		if (this.selectedCellRanges.contains(updatedRange)) {
			if (this.selectedCellRangesChanged != null) {
				let args = new GridSelectedCellRangesChangedEventArgs();
				args.updatedRanges = ((() => {
					let $ret = new GridSelectedCellRangesCollection();
					$ret.add(updatedRange);
					return $ret;
				})());
				this.selectedCellRangesChanged(this, args);
			}
		}
	}
	onSetItem(index: number, oldItem: any, newItem: any): void {
		this.invalidateRow(index);
		if (oldItem != newItem) {
			this.selectionManager.onSetItem(index);
			this.activationManager.onSetItem(index);
		}
	}
	private invalidateRow(index: number): void {
		this.animationManager.startRowDataChangeAnimations(this, index, index);
	}
	onClearItems(): void {
		this.selectionManager.onClearItems();
		this.refreshLayout();
		this.invalidateVisibleRows();
	}
	invalidateVisibleRows(): void {
		if (!this.rowsAreVisible()) {
			return;
		}
		let firstVisible: number = this.getFirstVisibleIndex();
		let lastVisible: number = this.getLastVisibleIndex();
		this.invalidateRows(firstVisible, lastVisible);
	}
	private invalidateRows(startIndex: number, endIndex: number): void {
		let firstVisible: number = this.getFirstVisibleIndex();
		let lastVisible: number = this.getLastVisibleIndex();
		if (endIndex < firstVisible || startIndex > lastVisible) {
			return;
		}
		if (startIndex < firstVisible) {
			startIndex = firstVisible;
		}
		if (endIndex > lastVisible) {
			endIndex = lastVisible;
		}
		this.animationManager.startActualizationAnimations(this, startIndex, endIndex, true);
		this.model.isSectionHeaderDirty = true;
		this.refreshPosition();
	}
	private getFirstVisibleColumnIndex(): number {
		return this.spatialEngine.positionToColumn(this.model.actualVisibleRegion.left + this.model.fixedColumnWidthLeft, this, this.model);
	}
	private getLastVisibleColumnIndex(): number {
		return this.spatialEngine.positionToColumn(this.model.actualVisibleRegion.right - this.model.fixedColumnWidthRight, this, this.model);
	}
	private invalidateRowsBetween(startRow: RowPath, endRow: RowPath): void {
		let startIndex = this.spatialEngine.getAbsoluteIndex(this.model, startRow);
		let endIndex = this.spatialEngine.getAbsoluteIndex(this.model, endRow);
		this.invalidateRows(startIndex, endIndex);
	}
	private _invalidateVisibleRowsQueued: boolean = false;
	queueInvalidateVisibleRows(): void {
		if (!this._invalidateVisibleRowsQueued) {
			this._invalidateVisibleRowsQueued = true;
			this.visibilityEngine.markRefreshRequired();
			this.renderingEngine.invalidateVisibility(() => this.visibilityEngine.calculate(this));
			this.renderingEngine.refresh(this.model, false);
		}
	}
	onInsertItem(index: number, newItem: any): void {
		let row = this.adapter.getRowPathForRow(index);
		this.effectManager.onRowInsertedAt(row);
		this.selectionManager.onRowInsertedAt(this.spatialEngine.getAbsoluteIndex(this.model, row));
		this.activationManager.onRowInsertedAt(this.spatialEngine.getAbsoluteIndex(this.model, row));
		this.queueInvalidateVisibleRows();
	}
	onRemoveItem(index: number, oldItem: any): void {
		let row = this.adapter.getRowPathForRow(index);
		this.effectManager.onRowRemovedAt(row);
		this.selectionManager.onRowRemovedAt(this.spatialEngine.getAbsoluteIndex(this.model, row));
		this.activationManager.onRowRemovedAt(this.spatialEngine.getAbsoluteIndex(this.model, row));
		this.queueInvalidateVisibleRows();
	}
	setActiveResponsiveState1(name: string): void {
		for (let i: number = 0; i < this._responsiveEngine.responsiveStates.count; i++) {
			if (this._responsiveEngine.responsiveStates._inner[i].name == name) {
				this.setActiveResponsiveState(this._responsiveEngine.responsiveStates._inner[i]);
			}
		}
	}
	setActiveResponsiveState(state: ResponsiveState): void {
		this._responsiveEngine.setManualState(state);
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		if (this._actualDataSource != null) {
			this._actualDataSource.notifySetItem(index, oldItem, newItem);
		}
	}
	notifyClearItems(): void {
		if (this._actualDataSource != null) {
			this._actualDataSource.notifyClearItems();
		}
	}
	notifyInsertItem(index: number, newItem: any): void {
		if (this._actualDataSource != null) {
			this._actualDataSource.notifyInsertItem(index, newItem);
		}
		;
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		if (this._actualDataSource != null) {
			this._actualDataSource.notifyRemoveItem(index, oldItem);
		}
		;
	}
	dataIndexOfItem(item: any): number {
		if (this._actualDataSource == null) {
			return -1;
		}
		return this._actualDataSource.indexOfItem(item);
	}
	dataIndexOfPrimaryKey(key: any[]): number {
		if (this._actualDataSource == null) {
			return -1;
		}
		return this._actualDataSource.indexOfKey(key);
	}
	getResolvedPrimaryKey(): string[] {
		if (this.actualDataSource != null) {
			return this.actualDataSource.actualPrimaryKey;
		}
		return this.actualPrimaryKey;
	}
	resolveCellValue(cellKey: CellKey): any {
		let column: Column = cellKey.resolvedColumn != null ? cellKey.resolvedColumn : this.columnController.getColumnByUniqueName(cellKey.columnUniqueKey);
		let item: any = null;
		if (cellKey.rowItem != null) {
			item = cellKey.rowItem;
		} else if (cellKey.primaryKey != null) {
			if (this.getResolvedPrimaryKey() == null && cellKey.primaryKey.key == null && cellKey.primaryKey.value.length == 1) {
				item = cellKey.primaryKey.value[0];
			} else {
				item = this.adapter.getItemForKey(cellKey.primaryKey);
			}
		}
		if (column != null && item != null) {
			return this.actualDataSource.getItemProperty(item, column.propertyPath);
		}
		return null;
	}
	resolveCellValueFromPosition(row: number, column: number): any {
		if (column < 0 || column > this.columnController.actualColumns.count) {
			return null;
		}
		if (row < 0 || row > this.adapter.getRowCount() - 1) {
			return null;
		}
		let item = this.actualDataSource.getItemAtIndex(row);
		if (item == null) {
			return null;
		} else {
			let rowType = this.adapter.getRowType(row);
			if (rowType != DataSourceRowType.Normal && rowType != DataSourceRowType.ShiftedRow) {
				return null;
			}
		}
		let index = this.spatialEngine.getColumnAtRenderedIndex(column, this.model);
		let c: Column = this.columnController.actualColumns._inner[index];
		return this.actualDataSource.getItemProperty(item, c.propertyPath);
	}
	getColumnAtRenderedIndex(index: number): Column {
		let columnIndex = this.spatialEngine.getColumnAtRenderedIndex(index, this.model);
		if (columnIndex >= 0 && columnIndex < this.columnController.actualColumns.count) {
			return this.columnController.actualColumns._inner[columnIndex];
		}
		return null;
	}
	getRootSummaryResults(): ISummaryResult[] {
		if (this.actualDataSource != null) {
			return this.actualDataSource.getRootSummaryResults();
		}
		return null;
	}
	getSectionSummaryResults(sectionIndex: number): ISummaryResult[][] {
		if (this.actualDataSource != null) {
			return this.actualDataSource.getSectionSummaryResults(sectionIndex);
		}
		return null;
	}
	static readonly reactsToSortChangesPropertyName: string = "ReactsToSortChanges";
	private _reactsToSortChanges: boolean = true;
	get reactsToSortChanges(): boolean {
		return this._reactsToSortChanges;
	}
	set reactsToSortChanges(value: boolean) {
		let oldValue = this._reactsToSortChanges;
		this._reactsToSortChanges = value;
		if (oldValue != this._reactsToSortChanges) {
			this.onPropertyChanged(Grid.reactsToSortChangesPropertyName, oldValue, this._reactsToSortChanges);
		}
	}
	static readonly reactsToGroupChangesPropertyName: string = "ReactsToGroupChanges";
	private _reactsToGroupChanges: boolean = true;
	get reactsToGroupChanges(): boolean {
		return this._reactsToGroupChanges;
	}
	set reactsToGroupChanges(value: boolean) {
		let oldValue = this._reactsToGroupChanges;
		this._reactsToGroupChanges = value;
		if (oldValue != this._reactsToGroupChanges) {
			this.onPropertyChanged(Grid.reactsToGroupChangesPropertyName, oldValue, this._reactsToGroupChanges);
		}
	}
	static readonly reactsToFilterChangesPropertyName: string = "ReactsToFilterChanges";
	private _reactsToFilterChanges: boolean = true;
	get reactsToFilterChanges(): boolean {
		return this._reactsToFilterChanges;
	}
	set reactsToFilterChanges(value: boolean) {
		let oldValue = this._reactsToFilterChanges;
		this._reactsToFilterChanges = value;
		if (oldValue != this._reactsToFilterChanges) {
			this.onPropertyChanged(Grid.reactsToFilterChangesPropertyName, oldValue, this._reactsToFilterChanges);
		}
	}
	getColumnsFilterExcludingColumn(excludedColumn: Column): IFilterExpression {
		let columnsFilter: IFilterExpression = null;
		for (let i = 0; i < this.columnController.actualColumns.count; i++) {
			let column = this.columnController.actualColumns._inner[i];
			if (column != excludedColumn && column.filter != null) {
				let columnType = this.actualDataSource.resolveSchemaPropertyType(column.propertyPath);
				let filter = column.filter.resolveFilter(column.propertyPath, columnType);
				if (columnsFilter != null) {
					columnsFilter = FilterFactory.instance.and(columnsFilter, filter);
				} else {
					columnsFilter = filter;
				}
			}
		}
		return columnsFilter;
	}
}

/**
 * @hidden 
 */
export class GridSelectedCellsChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridSelectedCellsChangedEventArgs, 'GridSelectedCellsChangedEventArgs', (<any>EventArgs).$type);
	private _addedCells: GridSelectedCellsCollection = null;
	get addedCells(): GridSelectedCellsCollection {
		return this._addedCells;
	}
	set addedCells(value: GridSelectedCellsCollection) {
		this._addedCells = value;
	}
	private _removedCells: GridSelectedCellsCollection = null;
	get removedCells(): GridSelectedCellsCollection {
		return this._removedCells;
	}
	set removedCells(value: GridSelectedCellsCollection) {
		this._removedCells = value;
	}
}

/**
 * @hidden 
 */
export class GridCellEventArgs extends EventArgs {
	static $t: Type = markType(GridCellEventArgs, 'GridCellEventArgs', (<any>EventArgs).$type);
	private _cellInfo: CellModel = null;
	get cellInfo(): CellModel {
		return this._cellInfo;
	}
	set cellInfo(value: CellModel) {
		this._cellInfo = value;
	}
	private _grid: Grid = null;
	get grid(): Grid {
		return this._grid;
	}
	set grid(value: Grid) {
		this._grid = value;
	}
}

/**
 * @hidden 
 */
export class ColumnHiddenChangedEventArgs extends Base {
	static $t: Type = markType(ColumnHiddenChangedEventArgs, 'ColumnHiddenChangedEventArgs');
	private _column: Column = null;
	get column(): Column {
		return this._column;
	}
	set column(value: Column) {
		this._column = value;
	}
	private _isHidden: boolean = false;
	get isHidden(): boolean {
		return this._isHidden;
	}
	set isHidden(value: boolean) {
		this._isHidden = value;
	}
}

/**
 * @hidden 
 */
export class GridAnimationManager extends Base {
	static $t: Type = markType(GridAnimationManager, 'GridAnimationManager');
	constructor() {
		super();
		this._rowDataAnimationSettings = new GridAnimationPhaseSettings();
		this._rowDataAnimationSettings.durationMilliseconds = 0;
		this._rowDataAnimationSettings.shouldItemsFinishSimultaneously = true;
		this._rowDataAnimationSettings.perItemDelayMilliseconds = 0;
		this._ensureCellShownSettings = new GridAnimationPhaseSettings();
		this._ensureCellShownSettings.durationMilliseconds = 0;
		this._ensureCellShownSettings.shouldItemsFinishSimultaneously = true;
		this._ensureCellShownSettings.perItemDelayMilliseconds = 0;
	}
	get defaultSettings(): GridColumnAnimationSettings {
		return this._defaultColumnSettings;
	}
	private static _nextAnimationId: number = 0;
	protected getAnimationId(): number {
		let id: number = GridAnimationManager._nextAnimationId;
		GridAnimationManager._nextAnimationId++;
		return id;
	}
	private _trackedAnimations: List$1<number> = new List$1<number>(Number_$type, 0);
	private _tracking: boolean = false;
	startTrackingAnimations(): void {
		this._tracking = true;
		this._trackedAnimations = new List$1<number>(Number_$type, 0);
	}
	endTrackingAnimations(): List$1<number> {
		this._tracking = false;
		return this._trackedAnimations;
	}
	animationCreated: (sender: any, args: GridAnimationManagerAnimationCreatedEventArgs) => void = null;
	animationCompleted: (sender: any, args: GridAnimationManagerAnimationCompletedEventArgs) => void = null;
	animationCanceled: (sender: any, args: GridAnimationManagerAnimationCanceledEventArgs) => void = null;
	protected onAnimationCreated(animationId: number): void {
		if (this._tracking) {
			this._trackedAnimations.add(animationId);
		}
		if (this.animationCreated != null) {
			this.animationCreated(this, ((() => {
				let $ret = new GridAnimationManagerAnimationCreatedEventArgs();
				$ret.animationId = animationId;
				return $ret;
			})()));
		}
	}
	protected onAnimationCanceled(animationId: number): void {
		if (this._tracking) {
			this._trackedAnimations.remove(animationId);
		}
		if (this.animationCanceled != null) {
			this.animationCanceled(this, ((() => {
				let $ret = new GridAnimationManagerAnimationCanceledEventArgs();
				$ret.animationId = animationId;
				return $ret;
			})()));
		}
	}
	protected onAnimationCompleted(animationId: number): void {
		if (this._tracking) {
			this._trackedAnimations.remove(animationId);
		}
		if (this.animationCompleted != null) {
			this.animationCompleted(this, ((() => {
				let $ret = new GridAnimationManagerAnimationCompletedEventArgs();
				$ret.animationId = animationId;
				return $ret;
			})()));
		}
	}
	private _defaultColumnSettings: GridColumnAnimationSettings = new GridColumnAnimationSettings();
	private _defaultSettings: GridAnimationSettings = new GridAnimationSettings();
	startShowingColumnAnimations(grid: Grid, animationSettings: GridColumnAnimationSettings, column: ColumnInfo, isAdding: boolean, previousState: ColumnStates): void {
		if (column == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let preSettings: GridAnimationPhaseSettings;
		let mainSettings: GridAnimationPhaseSettings;
		let actualColumn: Column = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		let finishedGrouping: GridEffectGroup = new GridEffectGroup(1);
		finishedGrouping.effectsFinished = delegateCombine(finishedGrouping.effectsFinished, (o: any, e: EventArgs) => {
			actualColumn.state = ColumnStates.Visible;
			column.state = ColumnStates.Visible;
			grid.model.isClipRectEnabled = false;
			grid.refreshLayout();
			grid.onColumnShowingAnimationCompleted(actualColumn);
			this.onAnimationCompleted(animationId);
		});
		finishedGrouping.effectsCanceled = delegateCombine(finishedGrouping.effectsCanceled, (o: any, e: EventArgs) => {
			grid.model.isClipRectEnabled = false;
			grid.onColumnShowingAnimationCanceled(actualColumn);
			this.onAnimationCanceled(animationId);
		});
		if (isAdding) {
			if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnAddingPrePhase != null) {
				preSettings = actualColumn.animationSettings.columnAddingPrePhase;
			} else if (animationSettings != null && animationSettings.columnAddingPrePhase != null) {
				preSettings = animationSettings.columnAddingPrePhase;
			} else {
				preSettings = this._defaultColumnSettings.columnAddingPrePhase;
			}
			if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnAddingMainPhase != null) {
				mainSettings = actualColumn.animationSettings.columnAddingMainPhase;
			} else if (animationSettings != null && animationSettings.columnAddingMainPhase != null) {
				mainSettings = animationSettings.columnAddingMainPhase;
			} else {
				mainSettings = this._defaultColumnSettings.columnAddingMainPhase;
			}
		} else {
			if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnShowingPrePhase != null) {
				preSettings = actualColumn.animationSettings.columnShowingPrePhase;
			} else if (animationSettings != null && animationSettings.columnShowingPrePhase != null) {
				preSettings = animationSettings.columnShowingPrePhase;
			} else {
				preSettings = this._defaultColumnSettings.columnShowingPrePhase;
			}
			if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnShowingMainPhase != null) {
				mainSettings = actualColumn.animationSettings.columnShowingMainPhase;
			} else if (animationSettings != null && animationSettings.columnShowingMainPhase != null) {
				mainSettings = animationSettings.columnShowingMainPhase;
			} else {
				mainSettings = this._defaultColumnSettings.columnShowingMainPhase;
			}
		}
		let showingStyle = grid.columnAddingAnimationMode;
		if (!isAdding) {
			showingStyle = grid.columnShowingAnimationMode;
		}
		if (showingStyle == ColumnShowingAnimationMode.Auto) {
			showingStyle = actualColumn.getPreferredShowingAnimationMode();
		}
		if (previousState == ColumnStates.Hidden || previousState == ColumnStates.Detached) {
			switch (showingStyle) {
				case ColumnShowingAnimationMode.SlideFromLeft:

				case ColumnShowingAnimationMode.SlideFromTop:

				case ColumnShowingAnimationMode.SlideFromBottom:

				case ColumnShowingAnimationMode.SlideFromLeftAndFadeIn:

				case ColumnShowingAnimationMode.SlideFromTopAndFadeIn:

				case ColumnShowingAnimationMode.SlideFromBottomAndFadeIn:

				case ColumnShowingAnimationMode.FadeIn:
				column.leftPercentOffset = -1;
				break;

				case ColumnShowingAnimationMode.SlideFromRight:

				case ColumnShowingAnimationMode.SlideFromRightAndFadeIn:
				column.leftPercentOffset = 1;
				break;

			}

		}
		grid.model.isClipRectEnabled = true;
		let columnEffect = new ColumnEffect();
		columnEffect.populateFromSettings(preSettings);
		columnEffect.fromCurrentValue = true;
		columnEffect.toValue = 0;
		columnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			col.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
		};
		columnEffect.getInitialValue = (target: any, model: VisualModel) => column.leftPercentOffset;
		finishedGrouping.add(columnEffect);
		grid.effectManager.addColumnEffect(column, columnEffect);
		let columnCellsEffect = new ColumnCellsEffect();
		columnCellsEffect.intent = GridEffectMainIntent.Position;
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = 0;
		columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let c: CellModel = <CellModel>target;
			switch (showingStyle) {
				case ColumnShowingAnimationMode.FadeIn:

				case ColumnShowingAnimationMode.SlideFromLeft:

				case ColumnShowingAnimationMode.SlideFromRight:

				case ColumnShowingAnimationMode.SlideFromLeftAndFadeIn:

				case ColumnShowingAnimationMode.SlideFromRightAndFadeIn:
				c.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

				case ColumnShowingAnimationMode.SlideFromTop:

				case ColumnShowingAnimationMode.SlideFromBottom:

				case ColumnShowingAnimationMode.SlideFromTopAndFadeIn:

				case ColumnShowingAnimationMode.SlideFromBottomAndFadeIn:
				c.topOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

			}

		};
		columnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOffset: number = cellModel.leftPercentOffset;
			if (showingStyle == ColumnShowingAnimationMode.SlideFromTop || showingStyle == ColumnShowingAnimationMode.SlideFromBottom || showingStyle == ColumnShowingAnimationMode.SlideFromTopAndFadeIn || showingStyle == ColumnShowingAnimationMode.SlideFromBottomAndFadeIn) {
				currentOffset = cellModel.topOffset;
			}
			if (previousState == ColumnStates.Detached || previousState == ColumnStates.Hidden) {
				switch (showingStyle) {
					case ColumnShowingAnimationMode.FadeIn:
					currentOffset = 0;
					cellModel.leftPercentOffset = currentOffset;
					cellModel.topPercentOffset = currentOffset;
					cellModel.leftOffset = 0;
					cellModel.topOffset = 0;
					break;

					case ColumnShowingAnimationMode.SlideFromLeft:

					case ColumnShowingAnimationMode.SlideFromLeftAndFadeIn:
					currentOffset = -1;
					cellModel.leftPercentOffset = currentOffset;
					cellModel.leftOffset = 0;
					cellModel.topPercentOffset = 0;
					cellModel.topOffset = 0;
					break;

					case ColumnShowingAnimationMode.SlideFromRight:

					case ColumnShowingAnimationMode.SlideFromRightAndFadeIn:
					currentOffset = 1;
					cellModel.leftPercentOffset = currentOffset;
					cellModel.leftOffset = 0;
					cellModel.topPercentOffset = 0;
					cellModel.topOffset = 0;
					break;

					case ColumnShowingAnimationMode.SlideFromTop:

					case ColumnShowingAnimationMode.SlideFromTopAndFadeIn:
					currentOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * -1;
					cellModel.topOffset = currentOffset;
					cellModel.leftOffset = 0;
					cellModel.leftPercentOffset = 0;
					cellModel.topPercentOffset = 0;
					break;

					case ColumnShowingAnimationMode.SlideFromBottom:

					case ColumnShowingAnimationMode.SlideFromBottomAndFadeIn:
					currentOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * 1;
					cellModel.topOffset = currentOffset;
					cellModel.leftOffset = 0;
					cellModel.leftPercentOffset = 0;
					cellModel.topPercentOffset = 0;
					break;

				}

			}
			return currentOffset;
		};
		if (grid.model.isRangeValid()) {
			columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		finishedGrouping.add(columnCellsEffect);
		if (showingStyle == ColumnShowingAnimationMode.SlideFromTop || showingStyle == ColumnShowingAnimationMode.SlideFromTopAndFadeIn) {
			columnCellsEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
		let columnCellsOpacityEffect = new ColumnCellsEffect();
		columnCellsOpacityEffect.intent = GridEffectMainIntent.Opacity;
		columnCellsOpacityEffect.populateFromSettings(mainSettings);
		columnCellsOpacityEffect.fromCurrentValue = true;
		columnCellsOpacityEffect.toValue = 1;
		columnCellsOpacityEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOpacity: number = <number>to;
			let fromOpacity: number = <number>from;
			let c: CellModel = <CellModel>target;
			let opacity = fromOpacity + (toOpacity - fromOpacity) * p;
			if (opacity < 0) {
				opacity = 0;
			}
			c.contentOpacity = opacity;
		};
		columnCellsOpacityEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			if (previousState == ColumnStates.Detached || previousState == ColumnStates.Hidden) {
				switch (showingStyle) {
					case ColumnShowingAnimationMode.SlideFromBottomAndFadeIn:

					case ColumnShowingAnimationMode.SlideFromLeftAndFadeIn:

					case ColumnShowingAnimationMode.SlideFromRightAndFadeIn:

					case ColumnShowingAnimationMode.SlideFromTopAndFadeIn:
					cellModel.contentOpacity = -1;
					break;

					case ColumnShowingAnimationMode.FadeIn:
					cellModel.contentOpacity = 0;
					break;

				}

			}
			return cellModel.contentOpacity;
		};
		if (grid.model.isRangeValid()) {
			columnCellsOpacityEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsOpacityEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		finishedGrouping.add(columnCellsOpacityEffect);
		if (showingStyle == ColumnShowingAnimationMode.SlideFromTop || showingStyle == ColumnShowingAnimationMode.SlideFromTopAndFadeIn) {
			columnCellsOpacityEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsOpacityEffect);
	}
	private _exchangingIn: Dictionary$2<number, List$1<() => void>> = new Dictionary$2<number, List$1<() => void>>(Number_$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	startExchangingColumnAnimations(grid: Grid, animationSettings: GridColumnAnimationSettings, oldColumn: ColumnInfo, newColumn: ColumnInfo, oldColumnPreviousState: ColumnStates): void {
		if (oldColumn == null || newColumn == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		oldColumn.state = ColumnStates.Hiding;
		newColumn.state = ColumnStates.Showing;
		let postSettings: GridAnimationPhaseSettings;
		let mainSettings: GridAnimationPhaseSettings;
		let actualNewColumn: Column = grid.columnController.getColumnById(newColumn.uniqueID);
		let actualOldColumn: Column = grid.columnController.getColumnById(oldColumn.uniqueID);
		if (actualNewColumn == null || actualOldColumn == null) {
			return;
		}
		if (actualNewColumn.animationSettings != null && actualNewColumn.animationSettings.columnExchangingCleanupPhase != null) {
			postSettings = actualNewColumn.animationSettings.columnExchangingCleanupPhase;
		} else if (actualOldColumn.animationSettings != null && actualOldColumn.animationSettings.columnExchangingCleanupPhase != null) {
			postSettings = actualOldColumn.animationSettings.columnExchangingCleanupPhase;
		} else if (animationSettings != null && animationSettings.columnShowingPrePhase != null) {
			postSettings = animationSettings.columnExchangingCleanupPhase;
		} else {
			postSettings = this._defaultColumnSettings.columnExchangingCleanupPhase;
		}
		if (actualNewColumn.animationSettings != null && actualNewColumn.animationSettings.columnExchangingMainPhase != null) {
			mainSettings = actualNewColumn.animationSettings.columnExchangingMainPhase;
		} else if (actualOldColumn.animationSettings != null && actualOldColumn.animationSettings.columnExchangingMainPhase != null) {
			mainSettings = actualOldColumn.animationSettings.columnExchangingMainPhase;
		} else if (animationSettings != null && animationSettings.columnExchangingMainPhase != null) {
			mainSettings = animationSettings.columnExchangingMainPhase;
		} else {
			mainSettings = this._defaultColumnSettings.columnExchangingMainPhase;
		}
		let actualExchangeStyle = grid.columnExchangingAnimationMode;
		if (actualExchangeStyle == ColumnExchangingAnimationMode.Auto) {
			actualExchangeStyle = actualNewColumn.getPreferredExchangingAnimationMode();
		}
		let fromRight: boolean = false;
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToLeft || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToLeftAndCrossfade) {
			fromRight = true;
		}
		if (fromRight) {
			newColumn.leftPercentOffset = 1;
		} else {
			newColumn.leftPercentOffset = -1;
		}
		if (this._exchangingIn.containsKey(oldColumn.uniqueID)) {
			this._exchangingIn.addItem(newColumn.uniqueID, new List$1<() => void>(Delegate_$type, 0));
			this._exchangingIn.item(oldColumn.uniqueID).add(() => {
				oldColumn = grid.model.getColumnById(oldColumn.uniqueID);
				newColumn = grid.model.getColumnById(newColumn.uniqueID);
				if (oldColumn == null || newColumn == null) {
					return;
				}
				actualOldColumn.state = ColumnStates.Hiding;
				oldColumn.state = ColumnStates.Hiding;
				actualNewColumn.state = ColumnStates.Showing;
				newColumn.state = ColumnStates.Showing;
				this.queueExchange(grid, oldColumn, newColumn, postSettings, mainSettings, actualNewColumn, actualOldColumn, actualExchangeStyle, fromRight, animationId);
			});
		} else {
			this._exchangingIn.addItem(newColumn.uniqueID, new List$1<() => void>(Delegate_$type, 0));
			this.queueExchange(grid, oldColumn, newColumn, postSettings, mainSettings, actualNewColumn, actualOldColumn, actualExchangeStyle, fromRight, animationId);
		}
	}
	private queueExchange(grid: Grid, oldColumn: ColumnInfo, newColumn: ColumnInfo, postSettings: GridAnimationPhaseSettings, mainSettings: GridAnimationPhaseSettings, actualNewColumn: Column, actualOldColumn: Column, actualExchangeStyle: ColumnExchangingAnimationMode, fromRight: boolean, animationId: number): void {
		if (oldColumn == null || newColumn == null) {
			return;
		}
		let finishedGrouping: GridEffectGroup = new GridEffectGroup(1);
		finishedGrouping.effectsFinished = delegateCombine(finishedGrouping.effectsFinished, (o: any, e: EventArgs) => {
			let info: ColumnInfo = grid.model.getColumnById(oldColumn.uniqueID);
			let newInfo: ColumnInfo = grid.model.getColumnById(newColumn.uniqueID);
			let subGrouping: GridEffectGroup = new GridEffectGroup(1);
			subGrouping.effectsFinished = delegateCombine(subGrouping.effectsFinished, (obj: any, ea: EventArgs) => {
				actualOldColumn.state = ColumnStates.Hidden;
				oldColumn.state = ColumnStates.Hidden;
				grid.columns.remove(actualOldColumn);
				actualNewColumn.state = ColumnStates.Visible;
				newColumn.state = ColumnStates.Visible;
				grid.model.isClipRectEnabled = false;
				grid.refreshLayout();
				if (this._exchangingIn.containsKey(newColumn.uniqueID)) {
					let list = this._exchangingIn.item(newColumn.uniqueID);
					if (list.count == 0) {
						this._exchangingIn.removeItem(newColumn.uniqueID);
					} else {
						let first = list._inner[0];
						list.removeAt(0);
						first();
					}
				}
				grid.onColumnExchangingAnimationCompleted(actualNewColumn);
				this.onAnimationCompleted(animationId);
			});
			subGrouping.effectsCanceled = delegateCombine(subGrouping.effectsCanceled, (obj: any, ea: EventArgs) => {
				grid.model.isClipRectEnabled = false;
				grid.onColumnExchangingAnimationCanceled(actualNewColumn);
				this.onAnimationCanceled(animationId);
			});
			this.doExchangeOldColumnRemoval(grid, info, newInfo, postSettings, actualOldColumn, fromRight, subGrouping);
			this.doExchangeCleanupAnimation(grid, info, newInfo, postSettings, actualNewColumn, actualOldColumn, fromRight, subGrouping);
		});
		finishedGrouping.effectsCanceled = delegateCombine(finishedGrouping.effectsCanceled, (o: any, e: EventArgs) => {
			grid.onColumnExchangingAnimationCanceled(actualNewColumn);
			let subGrouping: GridEffectGroup = new GridEffectGroup(1);
			subGrouping.effectsFinished = delegateCombine(subGrouping.effectsFinished, (obj: any, ea: EventArgs) => {
				actualOldColumn.state = ColumnStates.Hidden;
				oldColumn.state = ColumnStates.Hidden;
				Debug.writeLine("removing old column");
				grid.columns.remove(actualOldColumn);
				grid.model.isClipRectEnabled = false;
				grid.refreshLayout();
			});
			subGrouping.effectsCanceled = delegateCombine(subGrouping.effectsCanceled, (obj: any, ea: EventArgs) => grid.model.isClipRectEnabled = false);
			let info2: ColumnInfo = grid.model.getColumnById(oldColumn.uniqueID);
			let newInfo2: ColumnInfo = grid.model.getColumnById(newColumn.uniqueID);
			this.doExchangeOldColumnRemoval(grid, info2, newInfo2, postSettings, actualOldColumn, fromRight, subGrouping);
		});
		let oldColumnCellsEffect = new ColumnCellsEffect();
		oldColumnCellsEffect.intent = GridEffectMainIntent.Position;
		oldColumnCellsEffect.populateFromSettings(mainSettings);
		oldColumnCellsEffect.fromCurrentValue = true;
		finishedGrouping.add(oldColumnCellsEffect);
		if (newColumn.fixedPosition != PinnedPositions.None) {
			grid.model.isClipRectEnabled = true;
		}
		if (fromRight) {
			oldColumnCellsEffect.toValue = -1 - oldColumn.leftPercentOffset;
		} else {
			oldColumnCellsEffect.toValue = 1 + oldColumn.leftPercentOffset;
		}
		let isTopOrBottom: boolean = false;
		switch (actualExchangeStyle) {
			case ColumnExchangingAnimationMode.SlideToTop:

			case ColumnExchangingAnimationMode.SlideToTopAndCrossfade:
			oldColumnCellsEffect.toValue = (grid.availableHeight + grid.model.fullHeaderHeight) * -1;
			isTopOrBottom = true;
			break;

			case ColumnExchangingAnimationMode.SlideToBottom:

			case ColumnExchangingAnimationMode.SlideToBottomAndCrossfade:
			oldColumnCellsEffect.toValue = (grid.availableHeight + grid.model.fullHeaderHeight) * 1;
			isTopOrBottom = true;
			break;

		}

		if (isTopOrBottom) {
			oldColumnCellsEffect.perItemDelayMilliseconds = 0;
		}
		oldColumnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let c: CellModel = <CellModel>target;
			switch (actualExchangeStyle) {
				case ColumnExchangingAnimationMode.SlideToLeft:

				case ColumnExchangingAnimationMode.SlideToRight:

				case ColumnExchangingAnimationMode.SlideToLeftAndCrossfade:

				case ColumnExchangingAnimationMode.SlideToRightAndCrossfade:
				c.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

				case ColumnExchangingAnimationMode.SlideToTop:

				case ColumnExchangingAnimationMode.SlideToBottom:

				case ColumnExchangingAnimationMode.SlideToTopAndCrossfade:

				case ColumnExchangingAnimationMode.SlideToBottomAndCrossfade:
				c.topOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

			}

		};
		oldColumnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOffset: number = cellModel.leftPercentOffset;
			if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTop || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottom || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTopAndCrossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade) {
				currentOffset = cellModel.topOffset;
			}
			if (actualExchangeStyle == ColumnExchangingAnimationMode.Crossfade) {
				currentOffset = 0;
			}
			switch (actualExchangeStyle) {
				case ColumnExchangingAnimationMode.SlideToLeft:

				case ColumnExchangingAnimationMode.SlideToLeftAndCrossfade:

				case ColumnExchangingAnimationMode.Crossfade:
				cellModel.leftPercentOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.topPercentOffset = 0;
				cellModel.topOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToRight:

				case ColumnExchangingAnimationMode.SlideToRightAndCrossfade:
				cellModel.leftPercentOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.topPercentOffset = 0;
				cellModel.topOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToTop:

				case ColumnExchangingAnimationMode.SlideToTopAndCrossfade:
				currentOffset = cellModel.topOffset;
				cellModel.topOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.leftPercentOffset = 0;
				cellModel.topPercentOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToBottom:

				case ColumnExchangingAnimationMode.SlideToBottomAndCrossfade:
				currentOffset = cellModel.topOffset;
				cellModel.topOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.leftPercentOffset = 0;
				cellModel.topPercentOffset = 0;
				break;

			}

			return currentOffset;
		};
		if (grid.model.isRangeValid()) {
			oldColumnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, oldColumn.index, grid.model.topRow.section, grid.model.topRow.row);
			oldColumnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, oldColumn.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		oldColumnCellsEffect.onFinished = delegateCombine(oldColumnCellsEffect.onFinished, (e: any) => {
		});
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTop || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTopAndCrossfade) {
			oldColumnCellsEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(oldColumn, oldColumnCellsEffect);
		let newColumnCellsEffect = new ColumnCellsEffect();
		newColumnCellsEffect.intent = GridEffectMainIntent.Position;
		newColumnCellsEffect.populateFromSettings(mainSettings);
		newColumnCellsEffect.fromCurrentValue = true;
		finishedGrouping.add(newColumnCellsEffect);
		if (fromRight) {
			newColumnCellsEffect.toValue = -1;
		} else {
			newColumnCellsEffect.toValue = 1;
		}
		if (isTopOrBottom) {
			newColumnCellsEffect.toValue = 0;
		}
		if (isTopOrBottom) {
			newColumnCellsEffect.perItemDelayMilliseconds = 0;
		}
		newColumnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let c: CellModel = <CellModel>target;
			switch (actualExchangeStyle) {
				case ColumnExchangingAnimationMode.SlideToLeft:

				case ColumnExchangingAnimationMode.SlideToRight:

				case ColumnExchangingAnimationMode.SlideToLeftAndCrossfade:

				case ColumnExchangingAnimationMode.SlideToRightAndCrossfade:
				c.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

				case ColumnExchangingAnimationMode.SlideToTop:

				case ColumnExchangingAnimationMode.SlideToBottom:

				case ColumnExchangingAnimationMode.SlideToTopAndCrossfade:

				case ColumnExchangingAnimationMode.SlideToBottomAndCrossfade:
				c.topOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

			}

		};
		newColumnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOffset: number = cellModel.leftPercentOffset;
			if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTop || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottom || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTopAndCrossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade) {
				currentOffset = cellModel.topOffset;
			}
			if (actualExchangeStyle == ColumnExchangingAnimationMode.Crossfade) {
				currentOffset = <number>newColumnCellsEffect.toValue;
			} else {
				currentOffset = 0;
			}
			switch (actualExchangeStyle) {
				case ColumnExchangingAnimationMode.SlideToLeft:

				case ColumnExchangingAnimationMode.SlideToLeftAndCrossfade:

				case ColumnExchangingAnimationMode.Crossfade:
				cellModel.leftPercentOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.topPercentOffset = 0;
				cellModel.topOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToRight:

				case ColumnExchangingAnimationMode.SlideToRightAndCrossfade:
				cellModel.leftPercentOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.topPercentOffset = 0;
				cellModel.topOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToTop:

				case ColumnExchangingAnimationMode.SlideToTopAndCrossfade:
				currentOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * 1;
				cellModel.topOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.leftPercentOffset = 1;
				cellModel.topPercentOffset = 0;
				break;

				case ColumnExchangingAnimationMode.SlideToBottom:

				case ColumnExchangingAnimationMode.SlideToBottomAndCrossfade:
				currentOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * -1;
				cellModel.topOffset = currentOffset;
				cellModel.leftOffset = 0;
				cellModel.leftPercentOffset = 1;
				cellModel.topPercentOffset = 0;
				break;

			}

			return currentOffset;
		};
		if (grid.model.isRangeValid()) {
			newColumnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, newColumn.index, grid.model.topRow.section, grid.model.topRow.row);
			newColumnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, newColumn.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottom || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade) {
			newColumnCellsEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(newColumn, newColumnCellsEffect);
		let oldColumnCellsOpacityEffect = new ColumnCellsEffect();
		oldColumnCellsOpacityEffect.intent = GridEffectMainIntent.Opacity;
		oldColumnCellsOpacityEffect.populateFromSettings(mainSettings);
		oldColumnCellsOpacityEffect.fromCurrentValue = true;
		oldColumnCellsOpacityEffect.toValue = 0;
		finishedGrouping.add(oldColumnCellsOpacityEffect);
		if (actualExchangeStyle != ColumnExchangingAnimationMode.Crossfade && actualExchangeStyle != ColumnExchangingAnimationMode.SlideToBottomAndCrossfade && actualExchangeStyle != ColumnExchangingAnimationMode.SlideToLeftAndCrossfade && actualExchangeStyle != ColumnExchangingAnimationMode.SlideToTopAndCrossfade) {
			oldColumnCellsOpacityEffect.toValue = 1;
		}
		oldColumnCellsOpacityEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOpacity: number = <number>to;
			let fromOpacity: number = <number>from;
			let c: CellModel = <CellModel>target;
			c.opacity = fromOpacity + (toOpacity - fromOpacity) * p;
		};
		oldColumnCellsOpacityEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOpaticy: number = cellModel.opacity;
			return currentOpaticy;
		};
		if (grid.model.isRangeValid()) {
			oldColumnCellsOpacityEffect.startItem = new CellPath(0, FixedCellPositions.None, oldColumn.index, grid.model.topRow.section, grid.model.topRow.row);
			oldColumnCellsOpacityEffect.lastItem = new CellPath(0, FixedCellPositions.None, oldColumn.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		oldColumnCellsOpacityEffect.onFinished = delegateCombine(oldColumnCellsOpacityEffect.onFinished, (e: any) => {
		});
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottom || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade) {
			oldColumnCellsOpacityEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(oldColumn, oldColumnCellsOpacityEffect);
		let newColumnCellsOpacityEffect = new ColumnCellsEffect();
		newColumnCellsOpacityEffect.intent = GridEffectMainIntent.Opacity;
		newColumnCellsOpacityEffect.populateFromSettings(mainSettings);
		newColumnCellsOpacityEffect.fromCurrentValue = true;
		newColumnCellsOpacityEffect.toValue = 1;
		finishedGrouping.add(newColumnCellsOpacityEffect);
		newColumnCellsOpacityEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOpacity: number = <number>to;
			let fromOpacity: number = <number>from;
			let c: CellModel = <CellModel>target;
			c.opacity = fromOpacity + (toOpacity - fromOpacity) * p;
		};
		newColumnCellsOpacityEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOpaticy: number = cellModel.opacity;
			if (actualExchangeStyle == ColumnExchangingAnimationMode.Crossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToRightAndCrossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToLeftAndCrossfade || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToTopAndCrossfade) {
				currentOpaticy = 0;
			}
			cellModel.opacity = currentOpaticy;
			return currentOpaticy;
		};
		if (grid.model.isRangeValid()) {
			newColumnCellsOpacityEffect.startItem = new CellPath(0, FixedCellPositions.None, newColumn.index, grid.model.topRow.section, grid.model.topRow.row);
			newColumnCellsOpacityEffect.lastItem = new CellPath(0, FixedCellPositions.None, newColumn.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		if (actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottom || actualExchangeStyle == ColumnExchangingAnimationMode.SlideToBottomAndCrossfade) {
			newColumnCellsOpacityEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(newColumn, newColumnCellsOpacityEffect);
	}
	private doExchangeOldColumnRemoval(grid: Grid, oldColumn: ColumnInfo, newColumn: ColumnInfo, postSettings: GridAnimationPhaseSettings, actualOldColumn: Column, fromRight: boolean, subGroup: GridEffectGroup): void {
		if (oldColumn == null) {
			return;
		}
		let oldColumnEffect = new ColumnEffect();
		oldColumnEffect.populateFromSettings(postSettings);
		oldColumnEffect.fromCurrentValue = true;
		subGroup.add(oldColumnEffect);
		if (fromRight) {
			oldColumnEffect.toValue = -1;
		} else {
			oldColumnEffect.toValue = 1;
		}
		oldColumnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			col.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
		};
		oldColumnEffect.getInitialValue = (target: any, model: VisualModel) => {
			if (this.columnsSameSize(oldColumn, newColumn)) {
				oldColumn.leftPercentOffset = <number>oldColumnEffect.toValue;
				return oldColumnEffect.toValue;
			}
			return oldColumn.leftPercentOffset;
		};
		grid.effectManager.addColumnEffect(oldColumn, oldColumnEffect);
	}
	private doExchangeCleanupAnimation(grid: Grid, oldColumn: ColumnInfo, newColumn: ColumnInfo, postSettings: GridAnimationPhaseSettings, actualNewColumn: Column, actualOldColumn: Column, fromRight: boolean, subGroup: GridEffectGroup): void {
		if (newColumn == null) {
			return;
		}
		let newColumnEffect = new ColumnEffect();
		newColumnEffect.populateFromSettings(postSettings);
		newColumnEffect.fromCurrentValue = true;
		newColumnEffect.toValue = 0;
		subGroup.add(newColumnEffect);
		newColumnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			col.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
		};
		newColumnEffect.getInitialValue = (target: any, model: VisualModel) => {
			if (this.columnsSameSize(oldColumn, newColumn)) {
				newColumn.leftPercentOffset = <number>newColumnEffect.toValue;
				return newColumn.leftPercentOffset;
			}
			return newColumn.leftPercentOffset;
		};
		grid.effectManager.addColumnEffect(newColumn, newColumnEffect);
		let newColumnCellsPostEffect = new ColumnCellsEffect();
		newColumnCellsPostEffect.populateFromSettings(postSettings);
		newColumnCellsPostEffect.fromCurrentValue = true;
		newColumnCellsPostEffect.toValue = 0;
		subGroup.add(newColumnCellsPostEffect);
		newColumnCellsPostEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let cell: CellModel = <CellModel>target;
			cell.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
		};
		newColumnCellsPostEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cell: CellModel = <CellModel>target;
			if (this.columnsSameSize(oldColumn, newColumn)) {
				cell.leftPercentOffset = <number>newColumnCellsPostEffect.toValue;
				return cell.leftPercentOffset;
			}
			return cell.leftPercentOffset;
		};
		grid.effectManager.addColumnCellsEffect(newColumn, newColumnCellsPostEffect);
	}
	private columnsSameSize(oldColumn: ColumnInfo, newColumn: ColumnInfo): boolean {
		if (oldColumn == null) {
			return true;
		}
		if (newColumn == null) {
			return true;
		}
		if (oldColumn.width == null && newColumn.width == null) {
			return true;
		}
		if (oldColumn.width == null && (newColumn.width.isStarSized && newColumn.width.value == 1)) {
			return true;
		}
		if ((oldColumn.width.isStarSized && oldColumn.width.value == 1) && newColumn.width == null) {
			return true;
		}
		if (oldColumn.width.isStarSized && newColumn.width.isStarSized && oldColumn.width.value == newColumn.width.value) {
			return true;
		}
		if (!oldColumn.width.isStarSized && !newColumn.width.isStarSized && oldColumn.width.value == newColumn.width.value) {
			return true;
		}
		return false;
	}
	startColumnResizeAnimation(grid: Grid, animationSettings: GridColumnAnimationSettings, column: ColumnInfo, width: number): void {
		if (column == null) {
			return;
		}
		let actualColumn = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings: GridAnimationPhaseSettings;
		if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnResizingMainPhase != null) {
			mainSettings = actualColumn.animationSettings.columnResizingMainPhase;
		} else if (animationSettings != null && animationSettings.columnResizingMainPhase != null) {
			mainSettings = animationSettings.columnResizingMainPhase;
		} else {
			mainSettings = this._defaultColumnSettings.columnResizingMainPhase;
		}
		let columnEffect = new ColumnEffect();
		columnEffect.populateFromSettings(mainSettings);
		columnEffect.fromCurrentValue = true;
		columnEffect.toValue = width;
		columnEffect.onFinished = delegateCombine(columnEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		columnEffect.onCanceled = delegateCombine(columnEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		columnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			let w = fromOffset + (toOffset - fromOffset) * p;
			let columnWidth = ((() => {
				let $ret = new ColumnWidth();
				$ret.value = w;
				$ret.isStarSized = false;
				return $ret;
			})());
			if (!isNaN_(actualColumn.minWidth)) {
				columnWidth.minimumWidth = actualColumn.minWidth;
			}
			actualColumn.width = columnWidth;
		};
		columnEffect.getInitialValue = (target: any, model: VisualModel) => <number>column.actualWidth;
		if (!grid.isColumnResizingAnimationEnabled(actualColumn)) {
			columnEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addColumnEffect(column, columnEffect);
	}
	startMovingColumnAnimations(grid: Grid, animationSettings: GridColumnAnimationSettings, column: ColumnInfo, previousState: ColumnStates): void {
		if (column == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let preSettings: GridAnimationPhaseSettings;
		let mainSettings: GridAnimationPhaseSettings;
		let actualColumn: Column = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnMovingPrePhase != null) {
			preSettings = actualColumn.animationSettings.columnMovingPrePhase;
		} else if (animationSettings != null && animationSettings.columnMovingPrePhase != null) {
			preSettings = animationSettings.columnMovingPrePhase;
		} else {
			preSettings = this._defaultColumnSettings.columnMovingPrePhase;
		}
		if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnMovingMainPhase != null) {
			mainSettings = actualColumn.animationSettings.columnMovingMainPhase;
		} else if (animationSettings != null && animationSettings.columnShowingMainPhase != null) {
			mainSettings = animationSettings.columnMovingMainPhase;
		} else {
			mainSettings = this._defaultColumnSettings.columnMovingMainPhase;
		}
		let movingStyle = grid.columnMovingAnimationMode;
		let finishedGrouping: GridEffectGroup = new GridEffectGroup(1);
		finishedGrouping.effectsFinished = delegateCombine(finishedGrouping.effectsFinished, (o: any, e: EventArgs) => {
			let endCol = grid.model.getColumnById(column.uniqueID);
			let columnSpacers = grid.model.getSpacersForColumn(endCol);
			for (let i = 0; i < columnSpacers.count; i++) {
				grid.model.removeSpacer(columnSpacers._inner[i]);
			}
			actualColumn.state = ColumnStates.Visible;
			grid.refreshLayout();
			grid.onColumnMovingAnimationCompleted(actualColumn);
			this.onAnimationCompleted(animationId);
		});
		finishedGrouping.effectsCanceled = delegateCombine(finishedGrouping.effectsCanceled, (o: any, e: EventArgs) => {
			grid.onColumnMovingAnimationCanceled(actualColumn);
			this.onAnimationCanceled(animationId);
		});
		if (movingStyle == ColumnMovingAnimationMode.Auto) {
			movingStyle = ColumnMovingAnimationMode.SlideOver;
		}
		let newLeft: number = 0;
		let oldOffset = column.leftPercentOffset;
		column.leftPercentOffset = 0;
		newLeft = grid.spatialEngine.getColumnOffset(column.index, grid, grid.model);
		column.leftPercentOffset = oldOffset;
		let previousColumn = grid.spatialEngine.getColumnAtRenderedIndex(actualColumn.oldRenderedIndex, grid.model);
		let spacerIndex = previousColumn;
		let leftMove: boolean = false;
		if (column.renderedIndex < actualColumn.oldRenderedIndex) {
			leftMove = true;
		}
		let fromSpacer: GridColumnSpacer = null;
		if (previousState != ColumnStates.Moving) {
			fromSpacer = grid.model.createSpacer(spacerIndex, column, (column.actualWidth + grid.model.columnSpacing) - column.getShiftAmount(grid.model), column.width == null || column.width.isStarSized, leftMove);
		}
		let spacers = grid.model.getSpacersForColumn(column);
		for (let i = 0; i < spacers.count; i++) {
			spacers._inner[i].isShrinking = true;
		}
		let toSpacerIndex = column.index;
		let existingTo: GridColumnSpacer = null;
		let allSpacers = grid.model.spacers;
		if (allSpacers._inner[toSpacerIndex].count > 0) {
			for (let i1 = 0; i1 < allSpacers._inner[toSpacerIndex].count; i1++) {
				if (allSpacers._inner[toSpacerIndex]._inner[i1].owningColumnId == column.uniqueID) {
					existingTo = allSpacers._inner[toSpacerIndex]._inner[i1];
					break;
				}
			}
		}
		let toSpacer: GridColumnSpacer;
		if (existingTo != null) {
			toSpacer = existingTo;
			toSpacer.isShrinking = false;
		} else {
			toSpacer = grid.model.createSpacer(toSpacerIndex, column, 0, column.width == null || column.width.isStarSized, !leftMove);
			toSpacer.isShrinking = false;
		}
		let oldLeft: number = actualColumn.oldLeftPosition;
		let $ret = GridAnimationManager.transformOffsetsForPinnedColumns(grid.model, column, actualColumn, newLeft, oldLeft);
		newLeft = $ret.p3;
		oldLeft = $ret.p4;
		let displacement = newLeft - oldLeft;
		let shiftAmount: number = -1 * displacement;
		column.leftPercentOffset = shiftAmount / column.actualWidth;
		column.state = ColumnStates.Moving;
		let columnEffect = new ColumnEffect();
		columnEffect.populateFromSettings(preSettings);
		columnEffect.fromCurrentValue = true;
		columnEffect.toValue = 0;
		let currWidth = column.actualWidth;
		let cellsTicking: boolean = false;
		let prevOffset: number = 0;
		let prevIndex: number = column.index;
		let prevLeft = grid.spatialEngine.getColumnOffset(column.index, grid, grid.model);
		let intersection = this.getVisualIntersectionWithColumnZone(grid, column, column.index);
		prevLeft = this.updateSpacersFromIntersection(grid, column, prevLeft, grid.model.getSpacersForColumn(column), intersection);
		finishedGrouping.add(columnEffect);
		columnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			col.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
			if (col.actualWidth > 0) {
				let thisArea = grid.spatialEngine.getColumnOffset1(col.index, model, true);
				oldLeft = actualColumn.oldLeftPosition;
				let $ret = GridAnimationManager.transformOffsetsForPinnedColumns(grid.model, column, actualColumn, thisArea, oldLeft);
				thisArea = $ret.p3;
				oldLeft = $ret.p4;
				if (thisArea - oldLeft != displacement) {
					let newDisp = thisArea - oldLeft;
					let deltaDisp = displacement - newDisp;
					let newOffset = prevOffset + (deltaDisp / <number>col.actualWidth);
					let newFrom = newOffset / (1 - p);
					columnEffect.updateFromValue(newFrom, model, col.uniqueID);
					col.leftPercentOffset = newOffset;
					prevOffset = newOffset;
					displacement = newDisp;
					col.leftPercentOffset = newFrom + (toOffset - newFrom) * p;
				}
				if (!cellsTicking) {
					let cells = grid.model.getCellsForColumn(col);
					for (let i = 0; i < cells.count; i++) {
						let cell = cells._inner[i];
						cell.leftPercentOffset += (prevOffset - col.leftPercentOffset);
					}
				}
				prevOffset = col.leftPercentOffset;
				prevIndex = col.index;
				let columnSpacers = grid.model.getSpacersForColumn(col);
				intersection = this.getVisualIntersectionWithColumnZone(grid, col, col.index);
				prevLeft = this.updateSpacersFromIntersection(grid, col, prevLeft, columnSpacers, intersection);
			}
		};
		columnEffect.getInitialValue = (target: any, model: VisualModel) => {
			prevOffset = column.leftPercentOffset;
			return column.leftPercentOffset;
		};
		grid.effectManager.addColumnEffect(column, columnEffect);
		let columnCellsEffect = new ColumnCellsEffect();
		columnCellsEffect.shouldWaitTillAfterHold = true;
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = 0;
		finishedGrouping.add(columnCellsEffect);
		columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			if (p > 0) {
				cellsTicking = true;
			}
			if (cellsTicking) {
				let toOffset: number = <number>to;
				let fromOffset: number = <number>from;
				let c: CellModel = <CellModel>target;
				let newOffset = fromOffset + (toOffset - fromOffset) * p;
				c.leftPercentOffset = newOffset;
			}
		};
		columnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cm: CellModel = <CellModel>target;
			return cm.leftPercentOffset;
		};
		if (grid.model.isRangeValid()) {
			columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
	}
	private static transformOffsetsForPinnedColumns(model: VisualModel, column: ColumnInfo, actualColumn: Column, newLeft: number, oldLeft: number): { p3?: number; p4?: number; } {
		if (model.left > model.insetLeft) {
			if (column.fixedPosition == PinnedPositions.Left) {
				oldLeft += <number>truncate(model.insetLeft);
				newLeft += <number>truncate(model.left);
			} else if (column.fixedPosition == PinnedPositions.None && actualColumn.oldPinned == PinnedPositions.Left) {
				oldLeft += <number>truncate(model.left);
				newLeft += <number>truncate(model.insetLeft);
			}
		}
		if (model.right < model.absoluteWidth - model.insetRight) {
			let overlap = model.absoluteWidth - model.insetRight - model.right;
			if (column.fixedPosition == PinnedPositions.Right) {
				newLeft -= <number>truncate(overlap);
			} else if (column.fixedPosition == PinnedPositions.None && actualColumn.oldPinned == PinnedPositions.Right) {
				oldLeft -= <number>truncate(overlap);
			}
		}
		return {
			p3: newLeft,
			p4: oldLeft

		};
	}
	private updateSpacersFromIntersection(grid: Grid, col: ColumnInfo, prevLeft: number, columnSpacers: List$1<GridColumnSpacer>, intersection: number): number {
		if (intersection > 0) {
			let delta: number = 0;
			for (let i = 0; i < columnSpacers.count; i++) {
				if (!columnSpacers._inner[i].isShrinking) {
					if (intersection > columnSpacers._inner[i].actualWidth) {
						delta = Math.abs(columnSpacers._inner[i].actualWidth - intersection);
						columnSpacers._inner[i].actualWidth = intersection;
					}
				}
			}
			let sum: number = 0;
			for (let i1 = 0; i1 < columnSpacers.count; i1++) {
				if (columnSpacers._inner[i1].isShrinking) {
					sum += columnSpacers._inner[i1].actualWidth;
				}
			}
			let newSum: number = sum - delta;
			if (newSum < 0) {
				newSum = 0;
			}
			let reductionRatio: number = 1;
			if (sum == 0) {
				reductionRatio = 0;
			} else {
				reductionRatio = newSum / sum;
			}
			for (let i2 = 0; i2 < columnSpacers.count; i2++) {
				if (columnSpacers._inner[i2].isShrinking) {
					columnSpacers._inner[i2].actualWidth = columnSpacers._inner[i2].actualWidth * reductionRatio;
				}
			}
		}
		if (col.uniqueID == 0) {
			prevLeft = grid.spatialEngine.getColumnOffset(col.index, grid, grid.model);
		}
		return prevLeft;
	}
	private getVisualIntersectionWithColumnZone(grid: Grid, column: ColumnInfo, zoneIndex: number): number {
		let left = grid.spatialEngine.getColumnOffset1(zoneIndex, grid.model, true);
		let right = left + column.actualWidth;
		let columnLeft = grid.spatialEngine.getColumnOffset1(column.index, grid.model, false);
		if (left > columnLeft) {
			return Math.max(0, (columnLeft + column.actualWidth) - left);
		} else {
			return Math.max(0, (left + column.actualWidth) - columnLeft);
		}
	}
	startHidingColumnAnimations(grid: Grid, animationSettings: GridColumnAnimationSettings, column: ColumnInfo, shouldRemove: boolean, previousState: ColumnStates): void {
		if (column == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings: GridAnimationPhaseSettings;
		let postSettings: GridAnimationPhaseSettings;
		let actualColumn: Column = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnHidingMainPhase != null) {
			mainSettings = actualColumn.animationSettings.columnHidingMainPhase;
		} else if (animationSettings != null && animationSettings.columnHidingMainPhase != null) {
			mainSettings = animationSettings.columnHidingMainPhase;
		} else {
			mainSettings = this._defaultColumnSettings.columnHidingMainPhase;
		}
		if (actualColumn.animationSettings != null && actualColumn.animationSettings.columnHidingPostPhase != null) {
			postSettings = actualColumn.animationSettings.columnHidingPostPhase;
		} else if (animationSettings != null && animationSettings.columnHidingPostPhase != null) {
			postSettings = animationSettings.columnHidingPostPhase;
		} else {
			postSettings = this._defaultColumnSettings.columnHidingPostPhase;
		}
		let hidingStyle = grid.columnHidingAnimationMode;
		let finishedGrouping: GridEffectGroup = new GridEffectGroup(1);
		finishedGrouping.effectsFinished = delegateCombine(finishedGrouping.effectsFinished, (o: any, e: EventArgs) => {
			actualColumn.state = ColumnStates.Hidden;
			column.state = ColumnStates.Hidden;
			if (actualColumn.actualShouldRemoveWhenHidden) {
				grid.externalGrid.ensureColumnsAreManual();
				grid.externalGrid.removeExternalColumn(actualColumn.externalObject);
			}
			grid.model.isClipRectEnabled = false;
			grid.refreshLayout();
			grid.onColumnHidingAnimationCompleted(actualColumn);
			this.onAnimationCompleted(animationId);
		});
		finishedGrouping.effectsCanceled = delegateCombine(finishedGrouping.effectsCanceled, (o: any, e: EventArgs) => {
			grid.model.isClipRectEnabled = false;
			grid.onColumnHidingAnimationCanceled(actualColumn);
			this.onAnimationCanceled(animationId);
		});
		if (hidingStyle == ColumnHidingAnimationMode.Auto) {
			hidingStyle = actualColumn.getPreferredHidingAnimationMode();
		}
		let targetCellOffset: number = 0;
		switch (hidingStyle) {
			case ColumnHidingAnimationMode.SlideToLeft:

			case ColumnHidingAnimationMode.SlideToLeftAndFadeOut:
			targetCellOffset = -1;
			break;

			case ColumnHidingAnimationMode.SlideToRight:

			case ColumnHidingAnimationMode.SlideToRightAndFadeOut:
			targetCellOffset = 1;
			break;

			case ColumnHidingAnimationMode.SlideToTop:

			case ColumnHidingAnimationMode.SlideToTopAndFadeOut:
			targetCellOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * -1;
			break;

			case ColumnHidingAnimationMode.SlideToBottom:

			case ColumnHidingAnimationMode.SlideToBottomAndFadeOut:
			targetCellOffset = (grid.availableHeight + grid.model.fullHeaderHeight) * 1;
			break;

		}

		grid.model.isClipRectEnabled = true;
		let columnCellsEffect = new ColumnCellsEffect();
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.intent = GridEffectMainIntent.Position;
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = targetCellOffset;
		finishedGrouping.add(columnCellsEffect);
		columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let c: CellModel = <CellModel>target;
			switch (hidingStyle) {
				case ColumnHidingAnimationMode.SlideToLeft:

				case ColumnHidingAnimationMode.SlideToRight:

				case ColumnHidingAnimationMode.SlideToLeftAndFadeOut:

				case ColumnHidingAnimationMode.SlideToRightAndFadeOut:
				c.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

				case ColumnHidingAnimationMode.SlideToTop:

				case ColumnHidingAnimationMode.SlideToBottom:

				case ColumnHidingAnimationMode.SlideToTopAndFadeOut:

				case ColumnHidingAnimationMode.SlideToBottomAndFadeOut:
				c.topOffset = fromOffset + (toOffset - fromOffset) * p;
				break;

			}

		};
		columnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			let currentOffset: number = cellModel.leftPercentOffset;
			if (hidingStyle == ColumnHidingAnimationMode.SlideToTop || hidingStyle == ColumnHidingAnimationMode.SlideToBottom) {
				currentOffset = cellModel.topOffset;
			}
			return currentOffset;
		};
		if (grid.model.isRangeValid()) {
			columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		if (hidingStyle == ColumnHidingAnimationMode.SlideToBottom || hidingStyle == ColumnHidingAnimationMode.SlideToBottomAndFadeOut) {
			columnCellsEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
		let targetOffset: number = 0;
		switch (hidingStyle) {
			case ColumnHidingAnimationMode.SlideToLeft:

			case ColumnHidingAnimationMode.SlideToTop:

			case ColumnHidingAnimationMode.SlideToBottom:

			case ColumnHidingAnimationMode.SlideToLeftAndFadeOut:

			case ColumnHidingAnimationMode.SlideToTopAndFadeOut:

			case ColumnHidingAnimationMode.SlideToBottomAndFadeOut:

			case ColumnHidingAnimationMode.FadeOut:
			targetOffset = -1;
			break;

			case ColumnHidingAnimationMode.SlideToRight:

			case ColumnHidingAnimationMode.SlideToRightAndFadeOut:
			targetOffset = 1;
			break;

		}

		let columnEffect = new ColumnEffect();
		columnEffect.populateFromSettings(postSettings);
		columnEffect.fromCurrentValue = true;
		columnEffect.toValue = targetOffset;
		finishedGrouping.add(columnEffect);
		columnEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOffset: number = <number>to;
			let fromOffset: number = <number>from;
			let col: ColumnInfo = <ColumnInfo>target;
			col.leftPercentOffset = fromOffset + (toOffset - fromOffset) * p;
		};
		columnEffect.getInitialValue = (target: any, model: VisualModel) => column.leftPercentOffset;
		grid.effectManager.addColumnEffect(column, columnEffect);
		let columnCellsOpacityEffect = new ColumnCellsEffect();
		columnCellsOpacityEffect.intent = GridEffectMainIntent.Opacity;
		columnCellsOpacityEffect.populateFromSettings(mainSettings);
		columnCellsOpacityEffect.fromCurrentValue = true;
		if (hidingStyle == ColumnHidingAnimationMode.FadeOut || hidingStyle == ColumnHidingAnimationMode.SlideToBottomAndFadeOut || hidingStyle == ColumnHidingAnimationMode.SlideToLeftAndFadeOut || hidingStyle == ColumnHidingAnimationMode.SlideToRightAndFadeOut || hidingStyle == ColumnHidingAnimationMode.SlideToTopAndFadeOut) {
			columnCellsOpacityEffect.toValue = 0;
		} else {
			columnCellsOpacityEffect.toValue = 1;
		}
		columnCellsOpacityEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
			let toOpacity: number = <number>to;
			let fromOpacity: number = <number>from;
			let c: CellModel = <CellModel>target;
			let opacity = fromOpacity + (toOpacity - fromOpacity) * p;
			if (opacity < 0) {
				opacity = 0;
			}
			c.contentOpacity = opacity;
		};
		columnCellsOpacityEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			if (previousState == ColumnStates.Detached || previousState == ColumnStates.Hidden) {
				switch (hidingStyle) {
					case ColumnHidingAnimationMode.SlideToBottomAndFadeOut:

					case ColumnHidingAnimationMode.SlideToLeftAndFadeOut:

					case ColumnHidingAnimationMode.SlideToRightAndFadeOut:

					case ColumnHidingAnimationMode.SlideToTopAndFadeOut:
					cellModel.contentOpacity = 1;
					break;

					case ColumnHidingAnimationMode.FadeOut:
					cellModel.contentOpacity = 1;
					break;

				}

			}
			return cellModel.contentOpacity;
		};
		if (grid.model.isRangeValid()) {
			columnCellsOpacityEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsOpacityEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		finishedGrouping.add(columnCellsOpacityEffect);
		if (hidingStyle == ColumnHidingAnimationMode.SlideToBottom || hidingStyle == ColumnHidingAnimationMode.SlideToBottomAndFadeOut) {
			columnCellsOpacityEffect.isItemDelayInverted = true;
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsOpacityEffect);
	}
	animateColumnCellsPropertyChange(grid: Grid, column: ColumnInfo, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any, isHeaderChange: boolean, isRowSeparatorChange: boolean, isSectionHeaderChange: boolean, isHeaderSeparatorChange: boolean): void {
		if (!grid.model.isRangeValid()) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultColumnSettings.columnPropertyUpdatingMainPhase;
		if (grid.columnAnimationSettings != null && grid.columnAnimationSettings.columnPropertyUpdatingMainPhase != null) {
			mainSettings = grid.columnAnimationSettings.columnPropertyUpdatingMainPhase;
		}
		let updatingStyle = grid.columnPropertyUpdatingAnimationMode;
		let columnCellsEffect = new ColumnCellsEffect();
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.intent = GridEffectMainIntent.ColumnPropertyChange;
		columnCellsEffect.subIntentMustMatchToCancel = true;
		if (isHeaderChange) {
			columnCellsEffect.subIntent = GridEffectSubIntent.HeaderPropertyChange;
		}
		columnCellsEffect.subIntentModifier = propertyName;
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = newValue;
		columnCellsEffect.onFinished = delegateCombine(columnCellsEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		columnCellsEffect.onCanceled = delegateCombine(columnCellsEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		if (updatingStyle == ColumnPropertyUpdatingAnimationMode.Auto) {
			updatingStyle = ColumnPropertyUpdatingAnimationMode.Interpolate;
		}
		if (propertyAnimationType == CellPropertyAnimationType.None) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				c.setPropertyValue(propertyName, to);
			};
		}
		if (propertyAnimationType == CellPropertyAnimationType.BoolValue || propertyAnimationType == CellPropertyAnimationType.EnumValue || propertyAnimationType == CellPropertyAnimationType.ObjectValue || propertyAnimationType == CellPropertyAnimationType.StringValue || (updatingStyle != ColumnPropertyUpdatingAnimationMode.InterpolateDeep && (propertyAnimationType == CellPropertyAnimationType.DateValue || propertyAnimationType == CellPropertyAnimationType.NumberValue || propertyAnimationType == CellPropertyAnimationType.FontValue))) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				if (p > 0.5) {
					c.setPropertyValue(propertyName, to);
				} else {
					c.setPropertyValue(propertyName, from);
				}
			};
		}
		if (updatingStyle == ColumnPropertyUpdatingAnimationMode.InterpolateDeep && propertyAnimationType == CellPropertyAnimationType.NumberValue) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				let fromNumber: number = <number>from;
				let toNumber: number = <number>to;
				let actualNumber = fromNumber + (toNumber - fromNumber) * p;
				c.setPropertyValue(propertyName, actualNumber);
			};
		}
		if (propertyAnimationType == CellPropertyAnimationType.DoubleValue) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				let fromDouble: number = <number>from;
				let toDouble: number = <number>to;
				let actualDouble = fromDouble + (toDouble - fromDouble) * p;
				c.setPropertyValue(propertyName, actualDouble);
			};
		}
		if (propertyAnimationType == CellPropertyAnimationType.BrushValue) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				let fromBrush: Brush = <Brush>from;
				let toBrush: Brush = <Brush>to;
				let actualBrush = BrushUtil.getInterpolation(fromBrush, p, toBrush, InterpolationMode.RGB);
				c.setPropertyValue(propertyName, actualBrush);
			};
		}
		if (propertyAnimationType == CellPropertyAnimationType.FontValue) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				let fromFont: FontInfo = <FontInfo>from;
				let toFont: FontInfo = <FontInfo>to;
				if (fromFont != null) {
					fromFont.ensurePopulated(grid.externalGrid.renderer);
				}
				if (toFont != null) {
					toFont.ensurePopulated(grid.externalGrid.renderer);
				}
				let actualFont: FontInfo = new FontInfo();
				FontUtil.interpolateFont(actualFont, p, fromFont, toFont);
				c.setPropertyValue(propertyName, actualFont);
			};
		}
		if (propertyAnimationType == CellPropertyAnimationType.IntValue) {
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, model: VisualModel) => {
				let c: CellModel = <CellModel>target;
				if (!isRowSeparatorChange && isHeaderChange != c.path.isHeaderCell) {
					return;
				}
				if (isHeaderSeparatorChange && !c.path.isHeaderSeparatorCell) {
					return;
				}
				let fromInt: number = typeGetValue(from);
				let toInt: number = typeGetValue(to);
				let actualInt = <number>truncate((Math.round(<number>fromInt + (<number>toInt - <number>fromInt) * p)));
				c.setPropertyValue(propertyName, actualInt);
			};
		}
		columnCellsEffect.getInitialValue = (target: any, model: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.getPropertyValue(propertyName);
		};
		if (grid.model.isRangeValid()) {
			if (isRowSeparatorChange) {
				columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, CellPath.rOW_SEPARATOR_COLUMN_INDEX, grid.model.topRow.section, grid.model.topRow.row);
				columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, CellPath.rOW_SEPARATOR_COLUMN_INDEX, grid.model.bottomRow.section, grid.model.bottomRow.row);
			} else if (isSectionHeaderChange) {
				columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, grid.model.topRow.section, grid.model.topRow.row);
				columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, grid.model.bottomRow.section, grid.model.bottomRow.row);
			} else {
				columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
				columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
			}
		}
		if (!grid.isColumnPropertyUpdatingAnimationEnabled || propertyAnimationType == CellPropertyAnimationType.None) {
			columnCellsEffect.durationMilliseconds = 0;
		}
		if (isRowSeparatorChange) {
			grid.effectManager.addRowSeparatorsEffect(columnCellsEffect);
		} else if (isSectionHeaderChange) {
			grid.effectManager.addSectionCellsEffect(columnCellsEffect);
		} else {
			grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
		}
	}
	private _rowDataAnimationSettings: GridAnimationPhaseSettings = null;
	startRowDataChangeAnimations(grid: Grid, startRow: number, endRow: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._rowDataAnimationSettings;
		let model = grid.model;
		let effectGroup: GridEffectGroup = new GridEffectGroup(1);
		effectGroup.effectsCanceled = delegateCombine(effectGroup.effectsCanceled, (o: any, e: EventArgs) => this.onAnimationCanceled(animationId));
		effectGroup.effectsFinished = delegateCombine(effectGroup.effectsFinished, (o: any, e: EventArgs) => this.onAnimationCompleted(animationId));
		for (let i = startRow; i <= endRow; i++) {
			let rowCellsEffect = new RowCellsEffect();
			effectGroup.add(rowCellsEffect);
			rowCellsEffect.intent = GridEffectMainIntent.DataChange;
			rowCellsEffect.populateFromSettings(mainSettings);
			rowCellsEffect.fromCurrentValue = true;
			rowCellsEffect.toValue = 1;
			rowCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			};
			rowCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
				let cellModel = (<CellModel>target);
				if (cellModel.path.isContentCell) {
					let fullRow: number = grid.adapter.getDataRow(cellModel.path);
					cellModel.dataRow = fullRow;
					if (fullRow == -1) {
						return cellModel.renderValue;
					}
					let rowType = grid.adapter.getRowType(fullRow);
					if (cellModel.isRowTypeCompatible(rowType)) {
						let resolvedValue = grid.adapter.resolveValueForPath(grid, cellModel.path);
						let resolvedStyleKey = grid.getStyleKey(cellModel.path, grid, resolvedValue, fullRow);
						grid.onModelDataRefresh(cellModel, resolvedValue, grid.adapter.resolveRow(fullRow), resolvedStyleKey);
					}
				}
				return cellModel.renderValue;
			};
			let path = grid.getRowPathForAbsoluteRow(i);
			if (grid.model.isRangeValid()) {
				rowCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
				rowCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
			}
			if (!grid.isRowSelectionAnimationEnabled) {
				rowCellsEffect.durationMilliseconds = 0;
			}
			grid.effectManager.addRowCellsEffect(path, rowCellsEffect);
		}
	}
	private _ensureCellShownSettings: GridAnimationPhaseSettings = null;
	startEnsureCellShownAnimations(grid: Grid, column: ColumnInfo): void {
		if (column == null) {
			return;
		}
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._ensureCellShownSettings;
		let model = grid.model;
		let group: GridEffectGroup = new GridEffectGroup(1);
		group.effectsFinished = delegateCombine(group.effectsFinished, (o: any, e: EventArgs) => this.onAnimationCompleted(animationId));
		group.effectsCanceled = delegateCombine(group.effectsCanceled, (o: any, e: EventArgs) => this.onAnimationCanceled(animationId));
		let actualColumn = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		let columnEffect = new ColumnEffect();
		group.add(columnEffect);
		columnEffect.populateFromSettings(mainSettings);
		columnEffect.fromCurrentValue = true;
		columnEffect.toValue = 1;
		columnEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
		};
		columnEffect.getInitialValue = (target: any, m: VisualModel) => {
			let columnInfo = (<ColumnInfo>target);
			columnInfo.leftOffset = 0;
			columnInfo.leftPercentOffset = 0;
			columnInfo.topOffset = 0;
			grid.refreshLayout();
			return columnInfo.leftOffset;
		};
		grid.effectManager.addColumnEffect(column, columnEffect);
		let columnCellsEffect = new ColumnCellsEffect();
		group.add(columnCellsEffect);
		columnCellsEffect.intent = GridEffectMainIntent.Position;
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = 1;
		columnCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
		};
		columnCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			cellModel.leftOffset = 0;
			cellModel.leftPercentOffset = 0;
			cellModel.topOffset = 0;
			cellModel.topPercentOffset = 0;
			cellModel.contentOpacity = 1;
			return cellModel.leftOffset;
		};
		grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
	}
	startActualizationAnimations(grid: Grid, startIndex: number, endIndex: number, forceZeroDuration: boolean): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.cellDataLoadedMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.cellDataLoadedMainPhase != null) {
			mainSettings = grid.animationSettings.cellDataLoadedMainPhase;
		}
		let actualizationStyle = grid.cellDataLoadedAnimationMode;
		let model = grid.model;
		let group: GridEffectGroup = new GridEffectGroup(1);
		group.effectsFinished = delegateCombine(group.effectsFinished, (o: any, e: EventArgs) => this.onAnimationCompleted(animationId));
		group.effectsCanceled = delegateCombine(group.effectsCanceled, (o: any, e: EventArgs) => this.onAnimationCanceled(animationId));
		for (let i = 0; i < model.columns.count; i++) {
			let column = model.columns._inner[i];
			let actualColumn = grid.columnController.getColumnById(column.uniqueID);
			if (actualColumn == null) {
				continue;
			}
			let columnCellsEffect = new ColumnCellsEffect();
			group.add(columnCellsEffect);
			columnCellsEffect.intent = GridEffectMainIntent.Virtualization;
			columnCellsEffect.populateFromSettings(mainSettings);
			columnCellsEffect.fromCurrentValue = true;
			columnCellsEffect.toValue = 0;
			if (actualizationStyle == CellDataLoadedAnimationMode.Auto) {
				actualizationStyle = CellDataLoadedAnimationMode.CrossFade;
			}
			columnCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
				let c: CellModel = <CellModel>target;
				let fromPercent: number = <number>from;
				let toPercent: number = <number>to;
				if (c.path.isContentCell) {
					let col = grid.getContainingColumn(c.path);
					if (grid.adapter.isPlaceholderValue(c.path)) {
						p = 0;
					}
				}
				c.virtualizationPercentage = fromPercent + (toPercent - fromPercent) * p;
			};
			columnCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
				let cellModel = (<CellModel>target);
				if (cellModel.path.isContentCell) {
					let fullRow: number = grid.adapter.getDataRow(cellModel.path);
					cellModel.dataRow = fullRow;
					if (fullRow == -1) {
						return cellModel.virtualizationPercentage;
					}
					let resolvedValue = grid.adapter.resolveValueForPath(grid, cellModel.path);
					let isPlaceholder: boolean = false;
					if (resolvedValue == null && grid.adapter.isPlaceholderValue(cellModel.path)) {
						isPlaceholder = true;
					}
					if (cellModel.isRowTypeCompatible(grid.adapter.getRowType(cellModel.path.row))) {
						let resolvedStyleKey = grid.getStyleKey(cellModel.path, grid, resolvedValue, fullRow);
						grid.onModelDataRefresh(cellModel, resolvedValue, grid.adapter.resolveRow(fullRow), resolvedStyleKey);
					}
					if (isPlaceholder) {
						cellModel.virtualizationPercentage = 1;
					}
				}
				return cellModel.virtualizationPercentage;
			};
			if (grid.model.isRangeValid()) {
				columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
				columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
			}
			if (!grid.isCellDataLoadedAnimationEnabled || forceZeroDuration) {
				columnCellsEffect.durationMilliseconds = 0;
			}
			grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
		}
	}
	startColumnActualizationAnimation(grid: Grid, startIndex: number, endIndex: number, columnIdx: number, forceZeroDuration: boolean): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.cellDataLoadedMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.cellDataLoadedMainPhase != null) {
			mainSettings = grid.animationSettings.cellDataLoadedMainPhase;
		}
		let actualizationStyle = grid.cellDataLoadedAnimationMode;
		let model = grid.model;
		if (columnIdx < 0 || columnIdx >= model.columns.count) {
			return;
		}
		let column = model.columns._inner[columnIdx];
		let actualColumn = grid.columnController.getColumnById(column.uniqueID);
		if (actualColumn == null) {
			return;
		}
		let columnCellsEffect = new ColumnCellsEffect();
		columnCellsEffect.onFinished = delegateCombine(columnCellsEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		columnCellsEffect.onCanceled = delegateCombine(columnCellsEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		columnCellsEffect.intent = GridEffectMainIntent.Virtualization;
		columnCellsEffect.populateFromSettings(mainSettings);
		columnCellsEffect.fromCurrentValue = true;
		columnCellsEffect.toValue = 0;
		if (actualizationStyle == CellDataLoadedAnimationMode.Auto) {
			actualizationStyle = CellDataLoadedAnimationMode.CrossFade;
		}
		columnCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromPercent: number = <number>from;
			let toPercent: number = <number>to;
			if (c.path.isContentCell) {
				let col = grid.getContainingColumn(c.path);
				if (grid.adapter.isPlaceholderValue(c.path)) {
					p = 0;
				}
			}
			c.virtualizationPercentage = fromPercent + (toPercent - fromPercent) * p;
		};
		columnCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			if (cellModel.path.isContentCell) {
				let fullRow: number = grid.adapter.getDataRow(cellModel.path);
				cellModel.dataRow = fullRow;
				if (fullRow == -1) {
					return cellModel.virtualizationPercentage;
				}
				let resolvedValue = grid.adapter.resolveValueForPath(grid, cellModel.path);
				let isPlaceholder: boolean = false;
				if (resolvedValue == null && grid.adapter.isPlaceholderValue(cellModel.path)) {
					isPlaceholder = true;
				}
				if (cellModel.isRowTypeCompatible(grid.adapter.getRowType(cellModel.path.row))) {
					let resolvedStyleKey = grid.getStyleKey(cellModel.path, grid, resolvedValue, fullRow);
					grid.onModelDataRefresh(cellModel, resolvedValue, grid.adapter.resolveRow(fullRow), resolvedStyleKey);
				}
				if (isPlaceholder) {
					cellModel.virtualizationPercentage = 1;
				}
			}
			return cellModel.virtualizationPercentage;
		};
		if (grid.model.isRangeValid()) {
			columnCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.topRow.section, grid.model.topRow.row);
			columnCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, column.index, grid.model.bottomRow.section, grid.model.bottomRow.row);
		}
		if (!grid.isCellDataLoadedAnimationEnabled || forceZeroDuration) {
			columnCellsEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addColumnCellsEffect(column, columnCellsEffect);
	}
	startRowSelectionAnimation(grid: Grid, row: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.columnAnimationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let selectionStyle = grid.rowSelectionAnimationMode;
		let model = grid.model;
		let rowCellsEffect = new RowCellsEffect();
		rowCellsEffect.onFinished = delegateCombine(rowCellsEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		rowCellsEffect.onCanceled = delegateCombine(rowCellsEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		rowCellsEffect.intent = GridEffectMainIntent.Selection;
		rowCellsEffect.populateFromSettings(mainSettings);
		rowCellsEffect.fromCurrentValue = true;
		rowCellsEffect.toValue = 1;
		if (selectionStyle == RowSelectionAnimationMode.Auto) {
			selectionStyle = RowSelectionAnimationMode.ColorBlend;
		}
		rowCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		rowCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = grid.getRowPathForAbsoluteRow(row);
		if (grid.model.isRangeValid()) {
			rowCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			rowCellsEffect.startItem.pinned = grid.model.columns._inner[grid.model.leftColumn].fixedPosition;
			rowCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
			rowCellsEffect.lastItem.pinned = grid.model.columns._inner[grid.model.rightColumn].fixedPosition;
		}
		if (!grid.isRowSelectionAnimationEnabled || grid.dragger.isDragActive) {
			rowCellsEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addRowCellsEffect(path, rowCellsEffect);
	}
	startRowUnselectionAnimation(grid: Grid, row: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.columnAnimationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let selectionStyle = grid.rowSelectionAnimationMode;
		let model = grid.model;
		let rowCellsEffect = new RowCellsEffect();
		rowCellsEffect.onFinished = delegateCombine(rowCellsEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		rowCellsEffect.onCanceled = delegateCombine(rowCellsEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		rowCellsEffect.intent = GridEffectMainIntent.Selection;
		rowCellsEffect.populateFromSettings(mainSettings);
		rowCellsEffect.fromCurrentValue = true;
		rowCellsEffect.toValue = 0;
		if (selectionStyle == RowSelectionAnimationMode.Auto) {
			selectionStyle = RowSelectionAnimationMode.ColorBlend;
		}
		rowCellsEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		rowCellsEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = grid.getRowPathForAbsoluteRow(row);
		if (grid.model.isRangeValid()) {
			rowCellsEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			rowCellsEffect.startItem.pinned = grid.model.columns._inner[grid.model.leftColumn].fixedPosition;
			rowCellsEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
			rowCellsEffect.lastItem.pinned = grid.model.columns._inner[grid.model.rightColumn].fixedPosition;
		}
		if (!grid.isRowSelectionAnimationEnabled || grid.dragger.isDragActive) {
			rowCellsEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addRowCellsEffect(path, rowCellsEffect);
	}
	startCellSelectionAnimation(grid: Grid, row: number, column: number, columnId: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let model = grid.model;
		let cellEffect = new CellEffect();
		cellEffect.onFinished = delegateCombine(cellEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellEffect.onCanceled = delegateCombine(cellEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellEffect.intent = GridEffectMainIntent.Selection;
		cellEffect.populateFromSettings(mainSettings);
		cellEffect.fromCurrentValue = true;
		cellEffect.toValue = 1;
		cellEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		cellEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			cellEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
		}
		if (!grid.isCellSelectionAnimationEnabled || grid.dragger.isDragActive) {
			cellEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addCellEffect(path, cellEffect, columnId);
	}
	startCellActivationAnimation(grid: Grid, row: number, column: number, columnId: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.cellActivationMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.cellActivationMainPhase != null) {
			mainSettings = grid.animationSettings.cellActivationMainPhase;
		}
		let model = grid.model;
		let cellEffect = new CellEffect();
		cellEffect.onFinished = delegateCombine(cellEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellEffect.onCanceled = delegateCombine(cellEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellEffect.intent = GridEffectMainIntent.Activation;
		cellEffect.populateFromSettings(mainSettings);
		cellEffect.fromCurrentValue = true;
		cellEffect.toValue = 1;
		cellEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.activationStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.activationStatus = 0;
			}
		};
		cellEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.activationStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellEffect.startItem = new CellPath(0, FixedCellPositions.None, column, path.section, path.row);
			cellEffect.lastItem = new CellPath(0, FixedCellPositions.None, column, path.section, path.row);
		}
		grid.effectManager.addCellEffect(path, cellEffect, columnId);
	}
	startCellUnselectionAnimation(grid: Grid, row: number, column: number, columnId: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let model = grid.model;
		let cellEffect = new CellEffect();
		cellEffect.onFinished = delegateCombine(cellEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellEffect.onCanceled = delegateCombine(cellEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellEffect.intent = GridEffectMainIntent.Selection;
		cellEffect.populateFromSettings(mainSettings);
		cellEffect.fromCurrentValue = true;
		cellEffect.toValue = 0;
		cellEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		cellEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			cellEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
		}
		if (!grid.isCellSelectionAnimationEnabled || grid.dragger.isDragActive) {
			cellEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addCellEffect(path, cellEffect, columnId);
	}
	startCellDeactivationAnimation(grid: Grid, row: number, column: number, columnId: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.cellActivationMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.cellActivationMainPhase != null) {
			mainSettings = grid.animationSettings.cellActivationMainPhase;
		}
		let model = grid.model;
		let cellEffect = new CellEffect();
		cellEffect.onFinished = delegateCombine(cellEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellEffect.onCanceled = delegateCombine(cellEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellEffect.intent = GridEffectMainIntent.Activation;
		cellEffect.populateFromSettings(mainSettings);
		cellEffect.fromCurrentValue = true;
		cellEffect.toValue = 0;
		cellEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.activationStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.activationStatus = 0;
			}
		};
		cellEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.activationStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellEffect.startItem = new CellPath(0, FixedCellPositions.None, column, path.section, path.row);
			cellEffect.lastItem = new CellPath(0, FixedCellPositions.None, column, path.section, path.row);
		}
		grid.effectManager.addCellEffect(path, cellEffect, columnId);
	}
	startCellPositionSelectionAnimation(grid: Grid, row: number, column: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let model = grid.model;
		let cellPositionEffect = new CellPositionEffect();
		cellPositionEffect.onFinished = delegateCombine(cellPositionEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellPositionEffect.onCanceled = delegateCombine(cellPositionEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellPositionEffect.intent = GridEffectMainIntent.Selection;
		cellPositionEffect.populateFromSettings(mainSettings);
		cellPositionEffect.fromCurrentValue = true;
		cellPositionEffect.toValue = 1;
		cellPositionEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		cellPositionEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellPositionEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			cellPositionEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
		}
		if (!grid.isCellSelectionAnimationEnabled || grid.dragger.isDragActive) {
			cellPositionEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addCellPositionEffect(path, cellPositionEffect);
	}
	startCellPositionUnselectionAnimation(grid: Grid, row: number, column: number): void {
		let animationId: number = this.getAnimationId();
		this.onAnimationCreated(animationId);
		let mainSettings = this._defaultSettings.rowSelectionMainPhase;
		if (grid.animationSettings != null && grid.animationSettings.rowSelectionMainPhase != null) {
			mainSettings = grid.animationSettings.rowSelectionMainPhase;
		}
		let model = grid.model;
		let cellPositionEffect = new CellPositionEffect();
		cellPositionEffect.onFinished = delegateCombine(cellPositionEffect.onFinished, (t: any) => this.onAnimationCompleted(animationId));
		cellPositionEffect.onCanceled = delegateCombine(cellPositionEffect.onCanceled, (t: any, c: GridEffect) => this.onAnimationCanceled(animationId));
		cellPositionEffect.intent = GridEffectMainIntent.Selection;
		cellPositionEffect.populateFromSettings(mainSettings);
		cellPositionEffect.fromCurrentValue = true;
		cellPositionEffect.toValue = 0;
		cellPositionEffect.tick = (p: number, from: any, to: any, target: any, m: VisualModel) => {
			let c: CellModel = <CellModel>target;
			let fromStatus: number = <number>from;
			let toStatus: number = <number>to;
			if (c.path.isContentCell) {
				c.selectedStatus = fromStatus + (toStatus - fromStatus) * p;
			} else {
				c.selectedStatus = 0;
			}
		};
		cellPositionEffect.getInitialValue = (target: any, m: VisualModel) => {
			let cellModel = (<CellModel>target);
			return cellModel.selectedStatus;
		};
		let path = new CellPath(1, column, 0, row);
		if (grid.model.isRangeValid()) {
			cellPositionEffect.startItem = new CellPath(0, FixedCellPositions.None, grid.model.leftColumn, path.section, path.row);
			cellPositionEffect.lastItem = new CellPath(0, FixedCellPositions.None, grid.model.rightColumn, path.section, path.row);
		}
		if (!grid.isCellSelectionAnimationEnabled || grid.dragger.isDragActive) {
			cellPositionEffect.durationMilliseconds = 0;
		}
		grid.effectManager.addCellPositionEffect(path, cellPositionEffect);
	}
}

/**
 * @hidden 
 */
export class CellKey extends Base {
	static $t: Type = markType(CellKey, 'CellKey');
	private _primaryKey: PrimaryKeyValue = null;
	private _rowItem: any = null;
	private _columnUniqueKey: string = null;
	private _resolvedColumn: Column = null;
	private _grid: Grid = null;
	get primaryKey(): PrimaryKeyValue {
		if (this._primaryKey == null && this._rowItem != null && this.grid != null) {
			this._primaryKey = this.grid.adapter.getItemKey(this.grid.getResolvedPrimaryKey(), this._rowItem);
		}
		return this._primaryKey;
	}
	set primaryKey(value: PrimaryKeyValue) {
		this._primaryKey = value;
	}
	get rowItem(): any {
		if (this._rowItem == null && this._primaryKey != null && this.grid != null) {
			this._rowItem = this.grid.adapter.getItemForKey(this.primaryKey);
		}
		return this._rowItem;
	}
	set rowItem(value: any) {
		this._rowItem = value;
	}
	get columnUniqueKey(): string {
		return this._columnUniqueKey;
	}
	set columnUniqueKey(value: string) {
		this._columnUniqueKey = value;
	}
	get resolvedColumn(): Column {
		if ((this._resolvedColumn == null || this._resolvedColumn.grid != this.grid) && this.grid != null) {
			this._resolvedColumn = this.grid.columnController.getColumnByUniqueName(this.columnUniqueKey);
		}
		return this._resolvedColumn;
	}
	get grid(): Grid {
		return this._grid;
	}
	set grid(value: Grid) {
		this._grid = value;
	}
}

/**
 * @hidden 
 */
export class GridSelectedCellsCollection extends ObservableCollection$1<CellKey> {
	static $t: Type = markType(GridSelectedCellsCollection, 'GridSelectedCellsCollection', (<any>ObservableCollection$1).$type.specialize((<any>CellKey).$type));
	constructor() {
		super((<any>CellKey).$type, 0);
	}
	addListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this.collectionChanged = delegateCombine(this.collectionChanged, eventHandler);
	}
	removeListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this.collectionChanged = delegateRemove(this.collectionChanged, eventHandler);
	}
	get all(): IList$1<CellKey> {
		return this;
	}
	getKey(key: PrimaryKeyValue, columnId: number): CellKey {
		for (let i = 0; i < this.count; i++) {
			if (this._inner[i].primaryKey != null && this._inner[i].primaryKey.equals(key) && this._inner[i].resolvedColumn != null && this._inner[i].resolvedColumn.uniqueId == columnId) {
				return this._inner[i];
			}
		}
		return null;
	}
	getKey1(key: PrimaryKeyValue, columnUniqueName: string): CellKey {
		for (let i = 0; i < this.count; i++) {
			if (this._inner[i].primaryKey.equals(key) && this._inner[i].columnUniqueKey == columnUniqueName) {
				return this._inner[i];
			}
		}
		return null;
	}
	getKey2(item: any, columnUniqueName: string): CellKey {
		for (let i = 0; i < this.count; i++) {
			if (this._inner[i].rowItem == item && this._inner[i].columnUniqueKey == columnUniqueName) {
				return this._inner[i];
			}
		}
		return null;
	}
	addCell(key: PrimaryKeyValue, column: Column): CellKey {
		return this.addCell1(key, column.getUniqueKey());
	}
	addCell1(key: PrimaryKeyValue, columnUniqueName: string): CellKey {
		if (this.getKey1(key, columnUniqueName) != null) {
			return null;
		}
		let cellKey = new CellKey();
		cellKey.primaryKey = key;
		cellKey.columnUniqueKey = columnUniqueName;
		this.add(cellKey);
		return cellKey;
	}
	addCell2(item: any, column: Column): CellKey {
		return this.addCell3(item, column.getUniqueKey());
	}
	addCell3(item: any, columnUniqueName: string): CellKey {
		if (this.getKey2(item, columnUniqueName) != null) {
			return null;
		}
		let cellKey = new CellKey();
		cellKey.rowItem = item;
		cellKey.columnUniqueKey = columnUniqueName;
		this.add(cellKey);
		return cellKey;
	}
	removeCell(key: PrimaryKeyValue, columnId: number): CellKey {
		let cellKey = this.getKey(key, columnId);
		if (cellKey != null) {
			this.remove(cellKey);
		}
		return cellKey;
	}
}

/**
 * @hidden 
 */
export abstract class DefinitionBase extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(DefinitionBase, 'DefinitionBase', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.actualBackground = this.getDefaultBackgroundColor();
		this.actualStickyRowBackground = this.getDefaultStickyRowBackgroundColor();
		this.actualPinnedRowBackground = this.getDefaultPinnedRowBackgroundColor();
		this.actualLastStickyRowBackground = this.getDefaultLastStickyRowBackgroundColor();
		this.actualPinnedRowOpacity = this.getDefaultPinnedRowOpacity();
		this.actualTextColor = this.getDefaultTextColor();
		this.actualFontInfo = this.getDefaultFontInfo();
		this.actualActivationBorder = this.getDefaultActivationBorder();
	}
	static readonly externalObjectPropertyName: string = "ExternalObject";
	private _externalObject: any = null;
	private _externalDefinitionProxy: IExternalDefinitionBase = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		let oldValue = this._externalObject;
		this._externalObject = value;
		this._externalDefinitionProxy = typeCast<IExternalDefinitionBase>(IExternalDefinitionBase_$type, this._externalObject);
		if (this._externalObject != oldValue) {
			this.onPropertyChanged(DefinitionBase.externalObjectPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._externalObject);
		}
	}
	static readonly backgroundPropertyName: string = "Background";
	private _background_1: Brush = null;
	private get _background(): Brush {
		return this._background_1;
	}
	private set _background(value: Brush) {
		this._background_1 = value;
	}
	get background(): Brush {
		return this._background;
	}
	set background(value: Brush) {
		let oldValue = this._background;
		this._background = value;
		if (this._background != oldValue) {
			this.onPropertyChanged(DefinitionBase.backgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._background);
		}
	}
	static readonly borderPropertyName: string = "Border";
	private _border: Brush = null;
	get border(): Brush {
		return this._border;
	}
	set border(value: Brush) {
		let oldValue = this._border;
		this._border = value;
		if (this._border != oldValue) {
			this.onPropertyChanged(DefinitionBase.borderPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._border);
		}
	}
	static readonly activationBorderPropertyName: string = "ActivationBorder";
	private _activationBorder: Brush = null;
	get activationBorder(): Brush {
		return this._activationBorder;
	}
	set activationBorder(value: Brush) {
		let oldValue = this._activationBorder;
		this._activationBorder = value;
		if (this._activationBorder != oldValue) {
			this.onPropertyChanged(DefinitionBase.activationBorderPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._activationBorder);
		}
	}
	static readonly actualBorderPropertyName: string = "ActualBorder";
	private _actualBorder: Brush = null;
	get actualBorder(): Brush {
		return this._actualBorder;
	}
	set actualBorder(value: Brush) {
		let oldValue = this._actualBorder;
		this._actualBorder = value;
		if (this._actualBorder != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualBorderPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualBorder);
		}
	}
	static readonly borderLeftWidthPropertyName: string = "BorderLeftWidth";
	private _borderLeftWidth: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	get borderLeftWidth(): number {
		return this._borderLeftWidth;
	}
	set borderLeftWidth(value: number) {
		let oldValue = this._borderLeftWidth;
		this._borderLeftWidth = value;
		if (this._borderLeftWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.borderLeftWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._borderLeftWidth);
		}
	}
	static readonly borderTopWidthPropertyName: string = "BorderTopWidth";
	private _borderTopWidth: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	get borderTopWidth(): number {
		return this._borderTopWidth;
	}
	set borderTopWidth(value: number) {
		let oldValue = this._borderTopWidth;
		this._borderTopWidth = value;
		if (this._borderTopWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.borderTopWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._borderTopWidth);
		}
	}
	static readonly borderRightWidthPropertyName: string = "BorderRightWidth";
	private _borderRightWidth: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	get borderRightWidth(): number {
		return this._borderRightWidth;
	}
	set borderRightWidth(value: number) {
		let oldValue = this._borderRightWidth;
		this._borderRightWidth = value;
		if (this._borderRightWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.borderRightWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._borderRightWidth);
		}
	}
	static readonly borderBottomWidthPropertyName: string = "BorderBottomWidth";
	private _borderBottomWidth: number = <number>truncate(DeviceUtils.toPixelUnits(0));
	get borderBottomWidth(): number {
		return this._borderBottomWidth;
	}
	set borderBottomWidth(value: number) {
		let oldValue = this._borderBottomWidth;
		this._borderBottomWidth = value;
		if (this._borderBottomWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.borderBottomWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._borderBottomWidth);
		}
	}
	static readonly activationBorderLeftWidthPropertyName: string = "ActivationBorderLeftWidth";
	private _activationBorderLeftWidth: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	get activationBorderLeftWidth(): number {
		return this._activationBorderLeftWidth;
	}
	set activationBorderLeftWidth(value: number) {
		let oldValue = this._activationBorderLeftWidth;
		this._activationBorderLeftWidth = value;
		if (this._activationBorderLeftWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.activationBorderLeftWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._activationBorderLeftWidth);
		}
	}
	static readonly activationBorderTopWidthPropertyName: string = "ActivationBorderTopWidth";
	private _activationBorderTopWidth: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	get activationBorderTopWidth(): number {
		return this._activationBorderTopWidth;
	}
	set activationBorderTopWidth(value: number) {
		let oldValue = this._activationBorderTopWidth;
		this._activationBorderTopWidth = value;
		if (this._activationBorderTopWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.activationBorderTopWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._activationBorderTopWidth);
		}
	}
	static readonly activationBorderRightWidthPropertyName: string = "ActivationBorderRightWidth";
	private _activationBorderRightWidth: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	get activationBorderRightWidth(): number {
		return this._activationBorderRightWidth;
	}
	set activationBorderRightWidth(value: number) {
		let oldValue = this._activationBorderRightWidth;
		this._activationBorderRightWidth = value;
		if (this._activationBorderRightWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.activationBorderRightWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._activationBorderRightWidth);
		}
	}
	static readonly activationBorderBottomWidthPropertyName: string = "ActivationBorderBottomWidth";
	private _activationBorderBottomWidth: number = <number>truncate(DeviceUtils.toPixelUnits(1));
	get activationBorderBottomWidth(): number {
		return this._activationBorderBottomWidth;
	}
	set activationBorderBottomWidth(value: number) {
		let oldValue = this._activationBorderBottomWidth;
		this._activationBorderBottomWidth = value;
		if (this._activationBorderBottomWidth != oldValue) {
			this.onPropertyChanged(DefinitionBase.activationBorderBottomWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._activationBorderBottomWidth);
		}
	}
	private _grid: Grid = null;
	get grid(): Grid {
		return this._grid;
	}
	set grid(value: Grid) {
		let oldValue = this._grid;
		this._grid = value;
		this.onGridChanged(oldValue, value);
	}
	protected onGridChanged(oldGrid: Grid, newGrid: Grid): void {
	}
	static readonly actualBackgroundPropertyName: string = "ActualBackground";
	private _actualBackground_1: Brush = null;
	private get _actualBackground(): Brush {
		return this._actualBackground_1;
	}
	private set _actualBackground(value: Brush) {
		this._actualBackground_1 = value;
	}
	get actualBackground(): Brush {
		return this._actualBackground;
	}
	set actualBackground(value: Brush) {
		let oldValue = this._actualBackground;
		this._actualBackground = value;
		if (this._actualBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualBackground);
		}
	}
	static readonly actualActivationBorderPropertyName: string = "ActualActivationBorder";
	private _actualActivationBorder_1: Brush = null;
	private get _actualActivationBorder(): Brush {
		return this._actualActivationBorder_1;
	}
	private set _actualActivationBorder(value: Brush) {
		this._actualActivationBorder_1 = value;
	}
	get actualActivationBorder(): Brush {
		return this._actualActivationBorder;
	}
	set actualActivationBorder(value: Brush) {
		let oldValue = this._actualActivationBorder;
		this._actualActivationBorder = value;
		if (this._actualActivationBorder != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualActivationBorderPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualActivationBorder);
		}
	}
	static readonly stickyRowBackgroundPropertyName: string = "PinnedBackground";
	private _stickyRowBackground: Brush = null;
	get stickyRowBackground(): Brush {
		return this._stickyRowBackground;
	}
	set stickyRowBackground(value: Brush) {
		let oldValue = this._stickyRowBackground;
		this._stickyRowBackground = value;
		if (this._stickyRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.stickyRowBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._stickyRowBackground);
		}
	}
	static readonly actualStickyRowBackgroundPropertyName: string = "ActualStickyRowBackground";
	private _actualStickyRowBackground: Brush = null;
	get actualStickyRowBackground(): Brush {
		return this._actualStickyRowBackground;
	}
	set actualStickyRowBackground(value: Brush) {
		let oldValue = this._actualStickyRowBackground;
		this._actualStickyRowBackground = value;
		if (this._actualStickyRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualStickyRowBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualStickyRowBackground);
		}
	}
	static readonly pinnedRowBackgroundPropertyName: string = "PinnedRowBackground";
	private _pinnedRowBackground: Brush = null;
	get pinnedRowBackground(): Brush {
		return this._pinnedRowBackground;
	}
	set pinnedRowBackground(value: Brush) {
		let oldValue = this._pinnedRowBackground;
		this._pinnedRowBackground = value;
		if (this._pinnedRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.pinnedRowBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._pinnedRowBackground);
		}
	}
	static readonly actualPinnedRowBackgroundPropertyName: string = "ActualPinnedRowBackground";
	private _actualPinnedRowBackground: Brush = null;
	get actualPinnedRowBackground(): Brush {
		return this._actualPinnedRowBackground;
	}
	set actualPinnedRowBackground(value: Brush) {
		let oldValue = this._actualPinnedRowBackground;
		this._actualPinnedRowBackground = value;
		if (this._actualPinnedRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualPinnedRowBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualPinnedRowBackground);
		}
	}
	static readonly lastStickyRowBackgroundPropertyName: string = "LastStickyRowBackground";
	private _lastStickyRowBackground: Brush = null;
	get lastStickyRowBackground(): Brush {
		return this._lastStickyRowBackground;
	}
	set lastStickyRowBackground(value: Brush) {
		let oldValue = this._lastStickyRowBackground;
		this._lastStickyRowBackground = value;
		if (this._lastStickyRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.lastStickyRowBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._lastStickyRowBackground);
		}
	}
	static readonly actualLastStickyRowBackgroundPropertyName: string = "ActualLastStickyRowBackground";
	private _actualLastStickyRowBackground: Brush = null;
	get actualLastStickyRowBackground(): Brush {
		return this._actualLastStickyRowBackground;
	}
	set actualLastStickyRowBackground(value: Brush) {
		let oldValue = this._actualLastStickyRowBackground;
		this._actualLastStickyRowBackground = value;
		if (this._actualLastStickyRowBackground != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualLastStickyRowBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualLastStickyRowBackground);
		}
	}
	static readonly contentOpacityPropertyName: string = "ContentOpacity";
	private _contentOpacity: number = 1;
	get contentOpacity(): number {
		return this._contentOpacity;
	}
	set contentOpacity(value: number) {
		let oldValue = this._contentOpacity;
		this._contentOpacity = value;
		if (this._contentOpacity != oldValue) {
			this.onPropertyChanged(DefinitionBase.contentOpacityPropertyName, CellPropertyAnimationType.DoubleValue, oldValue, this._contentOpacity);
		}
	}
	static readonly horizontalAlignmentPropertyName: string = "HorizontalAlignment";
	private _horizontalAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Auto;
	get horizontalAlignment(): CellContentHorizontalAlignment {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: CellContentHorizontalAlignment) {
		let oldValue = this._horizontalAlignment;
		this._horizontalAlignment = value;
		if (this._horizontalAlignment != oldValue) {
			this.onPropertyChanged(DefinitionBase.horizontalAlignmentPropertyName, CellPropertyAnimationType.IgnoredValue, enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, oldValue), enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this._horizontalAlignment));
		}
	}
	static readonly verticalAlignmentPropertyName: string = "VerticalAlignment";
	private _verticalAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Auto;
	get verticalAlignment(): CellContentVerticalAlignment {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: CellContentVerticalAlignment) {
		let oldValue = this._verticalAlignment;
		this._verticalAlignment = value;
		if (this._verticalAlignment != oldValue) {
			this.onPropertyChanged(DefinitionBase.verticalAlignmentPropertyName, CellPropertyAnimationType.IgnoredValue, enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, oldValue), enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, this._verticalAlignment));
		}
	}
	static readonly actualHorizontalAlignmentPropertyName: string = "ActualHorizontalAlignment";
	private _actualHorizontalAlignment: CellContentHorizontalAlignment = CellContentHorizontalAlignment.Left;
	get actualHorizontalAlignment(): CellContentHorizontalAlignment {
		return this._actualHorizontalAlignment;
	}
	set actualHorizontalAlignment(value: CellContentHorizontalAlignment) {
		let oldValue = this._actualHorizontalAlignment;
		this._actualHorizontalAlignment = value;
		if (this._actualHorizontalAlignment != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualHorizontalAlignmentPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, oldValue), enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this._actualHorizontalAlignment));
		}
	}
	static readonly actualVerticalAlignmentPropertyName: string = "VerticalAlignment";
	private _actualVerticalAlignment: CellContentVerticalAlignment = CellContentVerticalAlignment.Center;
	get actualVerticalAlignment(): CellContentVerticalAlignment {
		return this._actualVerticalAlignment;
	}
	set actualVerticalAlignment(value: CellContentVerticalAlignment) {
		let oldValue = this._actualVerticalAlignment;
		this._actualVerticalAlignment = value;
		if (this._actualVerticalAlignment != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualVerticalAlignmentPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, oldValue), enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, this._actualVerticalAlignment));
		}
	}
	static readonly lineBreakModePropertyName: string = "LineBreakMode";
	private _lineBreakMode: TextCellLineBreakMode = TextCellLineBreakMode.Ellipsis;
	get lineBreakMode(): TextCellLineBreakMode {
		return this._lineBreakMode;
	}
	set lineBreakMode(value: TextCellLineBreakMode) {
		let oldValue = this._lineBreakMode;
		this._lineBreakMode = value;
		if (this._lineBreakMode != oldValue) {
			this.onPropertyChanged(DefinitionBase.lineBreakModePropertyName, CellPropertyAnimationType.IgnoredValue, enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, oldValue), enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, this._lineBreakMode));
		}
	}
	static readonly actualLineBreakModePropertyName: string = "ActualLineBreakMode";
	private _actualLineBreakMode: TextCellLineBreakMode = TextCellLineBreakMode.Ellipsis;
	get actualLineBreakMode(): TextCellLineBreakMode {
		return this._actualLineBreakMode;
	}
	set actualLineBreakMode(value: TextCellLineBreakMode) {
		let oldValue = this._actualLineBreakMode;
		this._actualLineBreakMode = value;
		if (this._actualLineBreakMode != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualLineBreakModePropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, oldValue), enumGetBox<TextCellLineBreakMode>(TextCellLineBreakMode_$type, this._actualLineBreakMode));
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (this._textColor != oldValue) {
			this.onPropertyChanged(DefinitionBase.textColorPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._textColor);
		}
	}
	private _actualTextColor: Brush = null;
	static readonly actualTextColorPropertyName: string = "ActualTextColor";
	get actualTextColor(): Brush {
		return this._actualTextColor;
	}
	set actualTextColor(value: Brush) {
		let oldValue = this._actualTextColor;
		this._actualTextColor = value;
		if (this._actualTextColor != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualTextColorPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualTextColor);
		}
	}
	static readonly pinnedRowOpacityPropertyName: string = "PinnedRowOpacity";
	private _pinnedRowOpacity: number = NaN;
	get pinnedRowOpacity(): number {
		return this._pinnedRowOpacity;
	}
	set pinnedRowOpacity(value: number) {
		let oldValue = this._pinnedRowOpacity;
		this._pinnedRowOpacity = value;
		if (this._pinnedRowOpacity != oldValue) {
			this.onPropertyChanged(DefinitionBase.pinnedRowOpacityPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._pinnedRowOpacity);
		}
	}
	static readonly actualPinnedRowOpacityPropertyName: string = "ActualPinnedRowOpacity";
	private _actualPinnedRowOpacity: number = 0;
	get actualPinnedRowOpacity(): number {
		return this._actualPinnedRowOpacity;
	}
	set actualPinnedRowOpacity(value: number) {
		let oldValue = this._actualPinnedRowOpacity;
		this._actualPinnedRowOpacity = value;
		if (this._actualPinnedRowOpacity != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualPinnedRowOpacityPropertyName, CellPropertyAnimationType.DoubleValue, oldValue, this._actualPinnedRowOpacity);
		}
	}
	static readonly fontInfoPropertyName: string = "FontInfo";
	private _fontInfo: FontInfo = null;
	get textStyle(): FontInfo {
		return this._fontInfo;
	}
	set textStyle(value: FontInfo) {
		let oldValue = this._fontInfo;
		this._fontInfo = value;
		if (this._fontInfo != oldValue) {
			this.onPropertyChanged(DefinitionBase.fontInfoPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._fontInfo);
		}
	}
	static readonly actualFontInfoPropertyName: string = "ActualFontInfo";
	private _actualActualFontInfo: FontInfo = null;
	get actualFontInfo(): FontInfo {
		return this._actualActualFontInfo;
	}
	set actualFontInfo(value: FontInfo) {
		let oldValue = this._actualActualFontInfo;
		this._actualActualFontInfo = value;
		if (this._actualActualFontInfo != oldValue) {
			this.onPropertyChanged(DefinitionBase.actualFontInfoPropertyName, CellPropertyAnimationType.FontValue, oldValue, this._actualActualFontInfo);
		}
	}
	createModel(path: CellPath, resolvedStyleKey: string): CellModel {
		let model = this.createModelOverride(path);
		model.styleKey = resolvedStyleKey;
		return model;
	}
	protected abstract createModelOverride(path: CellPath): CellModel;
	getStyleKey(path: CellPath, grid: Grid, resolvedValue: any, fullRow: number): string {
		let defaultKey = this.getStyleKeyOverride(path, grid, resolvedValue);
		if (this.cellStyleKeyRequested == null) {
			return defaultKey;
		}
		let args = new CellStyleRequestedEventArgs();
		args.resolvedValue = resolvedValue;
		args.rowNumber = fullRow;
		args.styleKey = defaultKey;
		this.cellStyleKeyRequested(this, args);
		return args.styleKey;
	}
	protected abstract getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string;
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		cellModel.isPlaceholdContentNeeded = grid.model.isPlaceholderContentNeeded;
		cellModel.horizontalAlignment = this.actualHorizontalAlignment;
		cellModel.verticalAlignment = this.actualVerticalAlignment;
		cellModel.leftOffset = 0;
		cellModel.topOffset = 0;
		cellModel.leftPercentOffset = 0;
		cellModel.topPercentOffset = 0;
		cellModel.contentOpacity = 1;
		cellModel.virtualizationPercentage = 0;
		cellModel.opacity = 1;
		cellModel.contentOpacity = this.contentOpacity;
		cellModel.textColor = this.actualTextColor;
		cellModel.background = this.actualBackground;
		cellModel.activationBorder = this.actualActivationBorder;
		cellModel.activationBorderLeftWidth = this.activationBorderLeftWidth;
		cellModel.activationBorderTopWidth = this.activationBorderTopWidth;
		cellModel.activationBorderRightWidth = this.activationBorderRightWidth;
		cellModel.activationBorderBottomWidth = this.activationBorderBottomWidth;
		if (this._borderRequired) {
			cellModel.border = this.actualBorder;
			cellModel.borderLeftWidth = this.borderLeftWidth;
			cellModel.borderRightWidth = this.borderRightWidth;
			cellModel.borderTopWidth = this.borderTopWidth;
			cellModel.borderBottomWidth = this.borderBottomWidth;
		} else {
			if (cellModel.border != null) {
				cellModel.border = null;
				cellModel.borderLeftWidth = 0;
				cellModel.borderTopWidth = 0;
				cellModel.borderRightWidth = 0;
				cellModel.borderBottomWidth = 0;
			}
		}
		if (this.actualFontInfo != null && this.grid != null) {
			this.actualFontInfo.ensurePopulated(this.grid.externalGrid.renderer);
		}
		cellModel.fontInfo = this.actualFontInfo;
		cellModel.lineBreakMode = this.actualLineBreakMode;
		cellModel.stickyRowBackground = this.actualStickyRowBackground;
		cellModel.pinnedRowBackground = this.actualPinnedRowBackground;
		cellModel.lastStickyRowBackground = this.actualLastStickyRowBackground;
		cellModel.pinnedRowOpacity = this.actualPinnedRowOpacity;
		if (cellModel.actionManager == null) {
			cellModel.actionManager = new DefaultCellActionManager(grid, cellModel);
		}
	}
	onDataBind(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		if (this.dataBinding != null) {
			let args = this.createDataBindingArgs(cellModel, grid, resolvedValue, rowObject);
			this.dataBinding(this, args);
			resolvedValue = args.resolvedValue;
			rowObject = args.rowObject;
		}
		this.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		if (this.dataBound != null) {
			this.dataBound(this, this.createDataBindingArgs(cellModel, grid, resolvedValue, rowObject));
		}
	}
	private createDataBindingArgs(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): DataBindingEventArgs {
		let args: DataBindingEventArgs = new DataBindingEventArgs();
		args.cellInfo = cellModel;
		args.resolvedValue = resolvedValue;
		args.rowObject = rowObject;
		return args;
	}
	dataBinding: (sender: any, args: DataBindingEventArgs) => void = null;
	dataBound: (sender: any, args: DataBindingEventArgs) => void = null;
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		cellModel.rowItem = rowObject;
		if (!cellModel.path.isHeaderCell && this.hasNamedValues()) {
			let internalNamedValues = this.internalNamedValues;
			let keyList = internalNamedValues.keyList;
			let count = keyList.count;
			let removedlist = internalNamedValues.removedList;
			let valueList = internalNamedValues.valueList;
			for (let i = 0; i < count; i++) {
				if (removedlist._inner[i]) {
					continue;
				}
				cellModel.setNamedValue(keyList._inner[i], valueList._inner[i]);
			}
		}
	}
	replayUserProperties(): void {
		for (let i = 0; i < this._hasUserValueProperties.count; i++) {
			if (!this.replayUserProperty(this._hasUserValueProperties._inner[i])) {
				this.replayUserNamedValue(this._hasUserValueProperties._inner[i]);
			}
		}
	}
	protected replayUserNamedValue(valueName: string): boolean {
		if (this.hasNamedValue(valueName)) {
			let animationType: CellPropertyAnimationType = CellPropertyAnimationType.None;
			if (this._userAnimationTypes.containsKey(valueName)) {
				animationType = this._userAnimationTypes.item(valueName);
			}
			this.propertyUpdatedOverride(valueName, animationType, this.getNamedValue(valueName), this.getNamedValue(valueName));
			return true;
		}
		return false;
	}
	protected replayUserProperty(propertyName: string): boolean {
		if (stringStartsWith(propertyName, "Actual")) {
			return false;
		}
		switch (propertyName) {
			case DefinitionBase.backgroundPropertyName:
			this.onPropertyChanged(DefinitionBase.actualBackgroundPropertyName, CellPropertyAnimationType.BrushValue, this.actualBackground, this.actualBackground);
			return true;

			case DefinitionBase.contentOpacityPropertyName:
			this.onPropertyChanged(DefinitionBase.contentOpacityPropertyName, CellPropertyAnimationType.DoubleValue, this.contentOpacity, this.contentOpacity);
			return true;

			case DefinitionBase.fontInfoPropertyName:
			this.onPropertyChanged(DefinitionBase.actualFontInfoPropertyName, CellPropertyAnimationType.FontValue, this.actualFontInfo, this.actualFontInfo);
			return true;

			case DefinitionBase.horizontalAlignmentPropertyName:
			this.onPropertyChanged(DefinitionBase.actualHorizontalAlignmentPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this.actualHorizontalAlignment), enumGetBox<CellContentHorizontalAlignment>(CellContentHorizontalAlignment_$type, this.actualHorizontalAlignment));
			return true;

			case DefinitionBase.textColorPropertyName:
			this.onPropertyChanged(DefinitionBase.actualTextColorPropertyName, CellPropertyAnimationType.BrushValue, this.actualTextColor, this.actualTextColor);
			return true;

			case DefinitionBase.verticalAlignmentPropertyName:
			this.onPropertyChanged(DefinitionBase.actualVerticalAlignmentPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, this.actualVerticalAlignment), enumGetBox<CellContentVerticalAlignment>(CellContentVerticalAlignment_$type, this.actualVerticalAlignment));
			return true;

			case DefinitionBase.borderPropertyName:
			this.onPropertyChanged(DefinitionBase.actualBorderPropertyName, CellPropertyAnimationType.BrushValue, this.actualBorder, this.actualBorder);
			return true;

			case DefinitionBase.activationBorderPropertyName:
			this.onPropertyChanged(DefinitionBase.actualActivationBorderPropertyName, CellPropertyAnimationType.BrushValue, this.actualActivationBorder, this.actualActivationBorder);
			return true;

			case DefinitionBase.borderLeftWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.borderLeftWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.borderLeftWidth, this.borderLeftWidth);
			return true;

			case DefinitionBase.borderTopWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.borderTopWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.borderTopWidth, this.borderTopWidth);
			return true;

			case DefinitionBase.borderRightWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.borderRightWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.borderRightWidth, this.borderRightWidth);
			return true;

			case DefinitionBase.borderBottomWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.borderBottomWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.borderBottomWidth, this.borderBottomWidth);
			return true;

			case DefinitionBase.activationBorderLeftWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.activationBorderLeftWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.activationBorderLeftWidth, this.activationBorderLeftWidth);
			return true;

			case DefinitionBase.activationBorderTopWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.activationBorderTopWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.activationBorderTopWidth, this.activationBorderTopWidth);
			return true;

			case DefinitionBase.activationBorderRightWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.activationBorderRightWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.activationBorderRightWidth, this.activationBorderRightWidth);
			return true;

			case DefinitionBase.activationBorderBottomWidthPropertyName:
			this.onPropertyChanged(DefinitionBase.activationBorderBottomWidthPropertyName, CellPropertyAnimationType.DoubleValue, this.activationBorderBottomWidth, this.activationBorderBottomWidth);
			return true;

		}

		return false;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyChanged(propertyName: string, propertyType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, propertyType, oldValue, newValue);
		if (this.definitionPropertyUpdated != null) {
			this.definitionPropertyUpdated(this, ((() => {
				let $ret = new DefinitionPropertyUpdatedEventArgs();
				$ret.propertyName = propertyName;
				$ret.animationType = propertyType;
				$ret.newValue = newValue;
				$ret.oldValue = oldValue;
				return $ret;
			})()));
		}
	}
	protected updateBackgroundColor(): void {
		if (this.background != null) {
			this.actualBackground = this.background;
		} else {
			this.actualBackground = this.getDefaultBackgroundColor();
		}
	}
	protected updateTextColor(): void {
		if (this.textColor != null) {
			this.actualTextColor = this.textColor;
		} else {
			this.actualTextColor = this.getDefaultTextColor();
		}
	}
	protected updateTextStyle(): void {
		this.actualFontInfo = this.textStyle;
	}
	protected updatePinnedRowOpacity(): void {
		if (!isNaN_(this.pinnedRowOpacity)) {
			this.actualPinnedRowOpacity = this.pinnedRowOpacity;
		} else {
			this.actualPinnedRowOpacity = this.getDefaultPinnedRowOpacity();
		}
	}
	protected updatePinnedRowBackground(): void {
		if (this.pinnedRowBackground != null) {
			this.actualPinnedRowBackground = this.pinnedRowBackground;
		} else {
			this.actualPinnedRowBackground = this.getDefaultPinnedRowBackgroundColor();
		}
	}
	protected updateStickyRowBackground(): void {
		if (this.stickyRowBackground != null) {
			this.actualStickyRowBackground = this.stickyRowBackground;
		} else {
			this.actualStickyRowBackground = this.getDefaultStickyRowBackgroundColor();
		}
	}
	protected updateLastStickyRowBackground(): void {
		if (this.lastStickyRowBackground != null) {
			this.actualLastStickyRowBackground = this.lastStickyRowBackground;
		} else {
			this.actualLastStickyRowBackground = this.getDefaultLastStickyRowBackgroundColor();
		}
	}
	protected propertyUpdatedOverride(propertyName: string, propertyType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		this.markUserValue(propertyName, propertyType);
		switch (propertyName) {
			case DefinitionBase.textColorPropertyName:
			this.updateTextColor();
			break;

			case DefinitionBase.backgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case DefinitionBase.stickyRowBackgroundPropertyName:
			this.updateStickyRowBackground();
			break;

			case DefinitionBase.pinnedRowBackgroundPropertyName:
			this.updatePinnedRowBackground();
			break;

			case DefinitionBase.lastStickyRowBackgroundPropertyName:
			this.updateLastStickyRowBackground();
			break;

			case DefinitionBase.pinnedRowOpacityPropertyName:
			this.updatePinnedRowOpacity();
			break;

			case DefinitionBase.verticalAlignmentPropertyName:
			if (this.verticalAlignment == CellContentVerticalAlignment.Auto) {
				this.actualVerticalAlignment = this.determineVerticalAlignment();
			} else {
				this.actualVerticalAlignment = this.verticalAlignment;
			}
			break;

			case DefinitionBase.horizontalAlignmentPropertyName:
			if (this.horizontalAlignment == CellContentHorizontalAlignment.Auto) {
				this.actualHorizontalAlignment = this.determineHorizontalAlignment();
			} else {
				this.actualHorizontalAlignment = this.horizontalAlignment;
			}
			break;

			case DefinitionBase.lineBreakModePropertyName:
			this.actualLineBreakMode = this.lineBreakMode;
			break;

			case DefinitionBase.fontInfoPropertyName:
			this.updateTextStyle();
			break;

			case DefinitionBase.borderPropertyName:

			case DefinitionBase.borderLeftWidthPropertyName:

			case DefinitionBase.borderTopWidthPropertyName:

			case DefinitionBase.borderRightWidthPropertyName:

			case DefinitionBase.borderBottomWidthPropertyName:
			this.updateBorder();
			break;

			case DefinitionBase.activationBorderPropertyName:
			this.updateActivationBorder();
			break;

		}

	}
	private _borderRequired: boolean = false;
	protected updateBorder(): void {
		if (this.borderLeftWidth != 0 || this.borderTopWidth != 0 || this.borderRightWidth != 0 || this.borderBottomWidth != 0) {
			if (this.border != null) {
				this._borderRequired = true;
				this.actualBorder = this.border;
			} else if (this.actualBorder != null) {
				this._borderRequired = true;
			}
		}
	}
	private updateActivationBorder(): void {
		this.actualActivationBorder = this.activationBorder;
	}
	private _hasUserValue: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
	private _hasUserValueProperties: List$1<string> = new List$1<string>(String_$type, 0);
	private _userAnimationTypes: Dictionary$2<string, CellPropertyAnimationType> = new Dictionary$2<string, CellPropertyAnimationType>(String_$type, CellPropertyAnimationType_$type, 0);
	protected get hasUserValue(): HashSet$1<string> {
		return this._hasUserValue;
	}
	protected get hasUserValueProperties(): List$1<string> {
		return this._hasUserValueProperties;
	}
	private markUserValue(propertyName: string, animationType: CellPropertyAnimationType): void {
		if (this._hasUserValue.contains(propertyName)) {
			return;
		}
		this._hasUserValue.add_1(propertyName);
		this._hasUserValueProperties.add(propertyName);
		this._userAnimationTypes.addItem(propertyName, animationType);
	}
	protected determineHorizontalAlignment(): CellContentHorizontalAlignment {
		if (this.horizontalAlignment != CellContentHorizontalAlignment.Auto) {
			return this.horizontalAlignment;
		}
		return CellContentHorizontalAlignment.Left;
	}
	protected determineVerticalAlignment(): CellContentVerticalAlignment {
		if (this.verticalAlignment != CellContentVerticalAlignment.Auto) {
			return this.verticalAlignment;
		}
		return CellContentVerticalAlignment.Center;
	}
	protected getDefaultTextColor(): Brush {
		return GridStyleRepository.textCellTextColor;
	}
	protected getDefaultActivationBorder(): Brush {
		return GridStyleRepository.activationBorderColor;
	}
	protected getDefaultFontInfo(): FontInfo {
		return GridStyleRepository.textCellFontInfo;
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultBackgroundColor;
	}
	protected getDefaultStickyRowBackgroundColor(): Brush {
		return null;
	}
	protected getDefaultPinnedRowBackgroundColor(): Brush {
		return null;
	}
	protected getDefaultLastStickyRowBackgroundColor(): Brush {
		return null;
	}
	protected getDefaultSelectedBackgroundColor(): Brush {
		return GridStyleRepository.defaultSelectedBackground;
	}
	protected getDefaultPinnedRowOpacity(): number {
		return 0.3;
	}
	definitionPropertyUpdated: (sender: any, args: DefinitionPropertyUpdatedEventArgs) => void = null;
	private _namedValues: FastIterationDictionary$2<string, any> = null;
	setNamedValue(valueName: string, animationType: CellPropertyAnimationType, value: any): void {
		if (this._namedValues == null) {
			this._namedValues = new FastIterationDictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
		}
		let oldValue: any = null;
		if (this._namedValues.containsKey(valueName)) {
			oldValue = this._namedValues.item(valueName);
		}
		this._namedValues.item(valueName, value);
		let changed: boolean = false;
		if (oldValue == null && value != null) {
			changed = true;
		}
		if (oldValue != null) {
			if (!Base.equalsStatic(oldValue, value)) {
				changed = true;
			}
		}
		if (changed) {
			this.onPropertyChanged(valueName, animationType, oldValue, value);
		}
	}
	hasNamedValues(): boolean {
		if (this._namedValues == null) {
			return false;
		}
		return this._namedValues.count > 0;
	}
	get internalNamedValues(): FastIterationDictionary$2<string, any> {
		return this._namedValues;
	}
	hasNamedValue(valueName: string): boolean {
		if (this._namedValues == null) {
			return false;
		}
		return this._namedValues.containsKey(valueName);
	}
	removeNamedValue(valueName: string): void {
		if (this._namedValues == null) {
			return;
		}
		if (this._namedValues.containsKey(valueName)) {
			this._namedValues.remove(valueName);
		}
	}
	getNamedValue(valueName: string): any {
		if (this._namedValues == null) {
			return null;
		}
		if (this._namedValues.containsKey(valueName)) {
			return this._namedValues.item(valueName);
		}
		return null;
	}
	formatValue(value: any, schemaType: DataSourceSchemaPropertyType, format: any): string {
		let formattedValue: string = stringEmpty();
		switch (schemaType) {
			case DataSourceSchemaPropertyType.ByteValue:
			if (format != null) {
				let override_ = format;
				let val_ = typeGetValue(value);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (typeGetValue(value)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.DateTimeValue:
			if (format != null) {
				let override_ = format;
				let val_ = <Date>value;
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<Date>value).toString();
			}
			break;

			case DataSourceSchemaPropertyType.DoubleValue:
			if (format != null) {
				let override_ = format;
				let val_ = <number>value;
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>value).toString();
			}
			break;

			case DataSourceSchemaPropertyType.IntValue:
			if (format != null) {
				let override_ = format;
				let val_ = typeGetValue(value);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (typeGetValue(value)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.LongValue:
			if (format != null) {
				let override_ = format;
				let val_ = typeGetValue(value);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>typeGetValue(value)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.ShortValue:
			if (format != null) {
				let override_ = format;
				let val_ = typeGetValue(value);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>typeGetValue(value)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.SingleValue:
			if (format != null) {
				let override_ = format;
				let val_ = <number>value;
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>value).toString();
			}
			break;

			case DataSourceSchemaPropertyType.DecimalValue:
			if (format != null) {
				let override_ = format;
				let val_ = <number>value;
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>value).toString();
			}
			break;

			case DataSourceSchemaPropertyType.StringValue:

			case DataSourceSchemaPropertyType.BooleanValue:

			case DataSourceSchemaPropertyType.ObjectValue:
			formattedValue = value.toString();
			break;

		}

		return formattedValue;
	}
	formatSummaryResult(summary: ColumnSummaryDescription, summaryResult: ISummaryResult): SummaryData {
		let formattedValue: string = summaryResult != null ? summaryResult.value.toString() : stringEmpty();
		let schemaType = summary.resolvedPropertySchema;
		if (summary.operand == SummaryOperand.Count) {
			schemaType = DataSourceSchemaPropertyType.IntValue;
		}
		let summaryValue: any = summaryResult.value;
		switch (schemaType) {
			case DataSourceSchemaPropertyType.ByteValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = typeGetValue(summaryValue);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (typeGetValue(summaryValue)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.DateTimeValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = <Date>summaryValue;
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<Date>summaryValue).toString();
			}
			break;

			case DataSourceSchemaPropertyType.DoubleValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = <number>summaryValue;
				formattedValue = <string>(override_.format(val_));
			} else {
				let summaryValue_ = <number>summaryValue;
				let maxFractionDigits_ = summary.maxFractionDigits;
				formattedValue = <string>(parseFloat(summaryValue_.toFixed(maxFractionDigits_)).toString());
			}
			break;

			case DataSourceSchemaPropertyType.IntValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = typeGetValue(summaryValue);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (typeGetValue(summaryValue)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.LongValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = typeGetValue(summaryValue);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>typeGetValue(summaryValue)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.ShortValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = typeGetValue(summaryValue);
				formattedValue = <string>(override_.format(val_));
			} else {
				formattedValue = (<number>typeGetValue(summaryValue)).toString();
			}
			break;

			case DataSourceSchemaPropertyType.SingleValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = <number>summaryValue;
				formattedValue = <string>(override_.format(val_));
			} else {
				let summaryValue_ = <number>summaryValue;
				let maxFractionDigits_ = summary.maxFractionDigits;
				formattedValue = <string>(parseFloat(summaryValue_.toFixed(maxFractionDigits_)).toString());
			}
			break;

			case DataSourceSchemaPropertyType.DecimalValue:
			if (summary.formatOverride != null) {
				let override_ = summary.formatOverride;
				let val_ = <number>summaryValue;
				formattedValue = <string>(override_.format(val_));
			} else {
				let summaryValue_ = <number>summaryValue;
				let maxFractionDigits_ = summary.maxFractionDigits;
				formattedValue = <string>(parseFloat(summaryValue_.toFixed(maxFractionDigits_)).toString());
			}
			break;

			case DataSourceSchemaPropertyType.StringValue:

			case DataSourceSchemaPropertyType.BooleanValue:

			case DataSourceSchemaPropertyType.ObjectValue:
			formattedValue = summaryValue.toString();
			break;

		}

		let calculatorDisplayName: string = summary.calculatorDisplayName != null ? summary.calculatorDisplayName : summary.calculator != null ? summary.calculator.displayName : stringEmpty();
		let propertyText: string = stringIsNullOrWhiteSpace(summary.displayName) ? summary.propertyPath : summary.displayName;
		let formattedText: string = propertyText + " " + calculatorDisplayName + " = " + formattedValue;
		let args = summary.userFormatValue(summaryResult, formattedValue, formattedText);
		formattedText = args.formattedText;
		formattedValue = args.formattedResult;
		return ((() => {
			let $ret = new SummaryData();
			$ret.summaryName = propertyText;
			$ret.summaryValue = summaryValue;
			$ret.summaryOperand = summary.operand;
			$ret.formattedText = args.formattedText;
			$ret.formattedValue = args.formattedResult;
			return $ret;
		})());
	}
	cellStyleKeyRequested: (sender: any, args: CellStyleRequestedEventArgs) => void = null;
}

/**
 * @hidden 
 */
export abstract class Column extends DefinitionBase {
	static $t: Type = markType(Column, 'Column', (<any>DefinitionBase).$type);
	constructor() {
		super();
		this._dontReplayHeaderProperties = true;
		this.header = new TextHeader();
		this._dontReplayHeaderProperties = false;
		this.actualHorizontalAlignment = this.determineHorizontalAlignment();
		this.actualVerticalAlignment = this.determineVerticalAlignment();
		this.actualSelectedBackground = this.getDefaultSelectedBackground();
		this.uniqueId = Column._currentUniqueId++;
	}
	protected getDefaultSelectedBackground(): Brush {
		return GridStyleRepository.defaultSelectedBackground;
	}
	private static _currentUniqueId: number = 0;
	private _uniqueId: number = 0;
	get uniqueId(): number {
		return this._uniqueId;
	}
	set uniqueId(value: number) {
		this._uniqueId = value;
	}
	static readonly statePropertyName: string = "State";
	private _state: ColumnStates = ColumnStates.Detached;
	get state(): ColumnStates {
		return this._state;
	}
	set state(value: ColumnStates) {
		let oldValue = this._state;
		this._state = value;
		if (this._state != oldValue) {
			this.onPropertyChanged(Column.statePropertyName, CellPropertyAnimationType.IgnoredValue, enumGetBox<ColumnStates>(ColumnStates_$type, oldValue), enumGetBox<ColumnStates>(ColumnStates_$type, this._state));
		}
	}
	static readonly paddingLeftPropertyName: string = "PaddingLeft";
	private _paddingLeft: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		let oldValue = this._paddingLeft;
		this._paddingLeft = value;
		if (this._paddingLeft != oldValue) {
			this.onPropertyChanged(Column.paddingLeftPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingLeft);
		}
	}
	static readonly paddingTopPropertyName: string = "PaddingTop";
	private _paddingTop: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		let oldValue = this._paddingTop;
		this._paddingTop = value;
		if (this._paddingTop != oldValue) {
			this.onPropertyChanged(Column.paddingTopPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingTop);
		}
	}
	static readonly paddingRightPropertyName: string = "PaddingRight";
	private _paddingRiht: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingRight(): number {
		return this._paddingRiht;
	}
	set paddingRight(value: number) {
		let oldValue = this._paddingRiht;
		this._paddingRiht = value;
		if (this._paddingRiht != oldValue) {
			this.onPropertyChanged(Column.paddingRightPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingRiht);
		}
	}
	static readonly paddingBottomPropertyName: string = "PaddingBottom";
	private _paddingBottom: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		let oldValue = this._paddingBottom;
		this._paddingBottom = value;
		if (this._paddingBottom != oldValue) {
			this.onPropertyChanged(Column.paddingBottomPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingBottom);
		}
	}
	static readonly namePropertyName: string = "Name";
	private _name: string = stringEmpty();
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		let oldValue = this._name;
		this._name = value;
		if (this._name != oldValue) {
			this.onPropertyChanged(Column.namePropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._name);
		}
	}
	private _oldLeftPosition: number = 0;
	get oldLeftPosition(): number {
		return this._oldLeftPosition;
	}
	set oldLeftPosition(value: number) {
		this._oldLeftPosition = value;
	}
	private _oldIndex: number = 0;
	get oldIndex(): number {
		return this._oldIndex;
	}
	set oldIndex(value: number) {
		this._oldIndex = value;
	}
	private _oldRenderedIndex: number = 0;
	get oldRenderedIndex(): number {
		return this._oldRenderedIndex;
	}
	set oldRenderedIndex(value: number) {
		this._oldRenderedIndex = value;
	}
	private _oldPinned: PinnedPositions = <PinnedPositions>0;
	get oldPinned(): PinnedPositions {
		return this._oldPinned;
	}
	set oldPinned(value: PinnedPositions) {
		this._oldPinned = value;
	}
	private _propertyPath: string = null;
	get propertyPath(): string {
		return this._propertyPath;
	}
	set propertyPath(value: string) {
		this._propertyPath = value;
		if (this.headerText == null) {
			this.actualHeaderText = this.propertyPath;
		}
	}
	static readonly headerTextPropertyName: string = "HeaderText";
	private _headerText: string = null;
	get headerText(): string {
		return this._headerText;
	}
	set headerText(value: string) {
		let oldValue = this._headerText;
		this._headerText = value;
		if (this._headerText != oldValue) {
			this.onPropertyChanged(Column.headerTextPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._headerText);
		}
	}
	static readonly actualHeaderTextPropertyName: string = "ActualHeaderText";
	private _actualHeaderText: string = null;
	get actualHeaderText(): string {
		return this._actualHeaderText;
	}
	set actualHeaderText(value: string) {
		let oldValue = this._actualHeaderText;
		this._actualHeaderText = value;
		if (this._actualHeaderText != oldValue) {
			this.onPropertyChanged(Column.actualHeaderTextPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._actualHeaderText);
		}
	}
	static readonly selectedBackgroundPropertyName: string = "SelectedBackground";
	private _selectedBackground_1: Brush = null;
	private get _selectedBackground(): Brush {
		return this._selectedBackground_1;
	}
	private set _selectedBackground(value: Brush) {
		this._selectedBackground_1 = value;
	}
	get selectedBackground(): Brush {
		return this._selectedBackground;
	}
	set selectedBackground(value: Brush) {
		let oldValue = this._selectedBackground;
		this._selectedBackground = value;
		if (this._selectedBackground != oldValue) {
			this.onPropertyChanged(Column.selectedBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._selectedBackground);
		}
	}
	static readonly actualSelectedBackgroundPropertyName: string = "ActualSelectedBackground";
	private _actualSelectedBackground_1: Brush = null;
	private get _actualSelectedBackground(): Brush {
		return this._actualSelectedBackground_1;
	}
	private set _actualSelectedBackground(value: Brush) {
		this._actualSelectedBackground_1 = value;
	}
	get actualSelectedBackground(): Brush {
		return this._actualSelectedBackground;
	}
	set actualSelectedBackground(value: Brush) {
		let oldValue = this._actualSelectedBackground;
		this._actualSelectedBackground = value;
		if (this._actualSelectedBackground != oldValue) {
			this.onPropertyChanged(Column.actualSelectedBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualSelectedBackground);
		}
	}
	static readonly animationSettingsPropertyName: string = "AnimationSettings";
	private _animationSettings: GridColumnAnimationSettings = null;
	get animationSettings(): GridColumnAnimationSettings {
		return this._animationSettings;
	}
	set animationSettings(value: GridColumnAnimationSettings) {
		let oldValue = this._animationSettings;
		this._animationSettings = value;
		if (this._animationSettings != oldValue) {
			this.onPropertyChanged(Column.animationSettingsPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, Column.animationSettingsPropertyName);
		}
	}
	static readonly widthPropertyName: string = "Width";
	private _width: ColumnWidth = null;
	get width(): ColumnWidth {
		return this._width;
	}
	set width(value: ColumnWidth) {
		let oldValue = this._width;
		this._width = value;
		if (this._width != oldValue) {
			this.onPropertyChanged("Width", CellPropertyAnimationType.IgnoredValue, oldValue, value);
		}
	}
	static readonly minWidthPropertyName: string = "MinWidth";
	private _minWidth: number = NaN;
	get minWidth(): number {
		return this._minWidth;
	}
	set minWidth(value: number) {
		let oldValue = this._minWidth;
		this._minWidth = value;
		if (this._minWidth != oldValue) {
			this.onPropertyChanged("MinWidth", CellPropertyAnimationType.IgnoredValue, oldValue, value);
		}
	}
	static readonly isFromMarkupPropertyName: string = "IsFromMarkup";
	private _isFromMarkup: boolean = false;
	get isFromMarkup(): boolean {
		return this._isFromMarkup;
	}
	set isFromMarkup(value: boolean) {
		let oldValue = this._isFromMarkup;
		this._isFromMarkup = value;
		if (this._isFromMarkup != oldValue) {
			this.onPropertyChanged(Column.isFromMarkupPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._isFromMarkup);
		}
	}
	static readonly isAutoGeneratedPropertyName: string = "IsAutoGenerated";
	private _isAutoGenerated: boolean = false;
	get isAutoGenerated(): boolean {
		return this._isAutoGenerated;
	}
	set isAutoGenerated(value: boolean) {
		let oldValue = this._isAutoGenerated;
		this._isAutoGenerated = value;
		if (this._isAutoGenerated != oldValue) {
			this.onPropertyChanged(Column.isAutoGeneratedPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._isAutoGenerated);
		}
	}
	static readonly filterPropertyName: string = "Filter";
	private _filter: ColumnFilterCondition = null;
	get filter(): ColumnFilterCondition {
		return this._filter;
	}
	set filter(value: ColumnFilterCondition) {
		let oldValue = this._filter;
		this._filter = value;
		if (this._filter != oldValue) {
			this.onPropertyChanged(Column.filterPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._filter);
		}
	}
	static readonly headerPropertyName: string = "Header";
	private _header: Header = null;
	get header(): Header {
		return this._header;
	}
	set header(value: Header) {
		let oldValue = this._header;
		this._header = value;
		if (this._header != oldValue) {
			this.onPropertyChanged(Column.headerPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._header);
		}
		this._header.grid = this.grid;
	}
	static readonly isFilteringEnabledPropertyName: string = "IsFilteringEnabled";
	private _isFilteringEnabled: boolean = true;
	get isFilteringEnabled(): boolean {
		return this._isFilteringEnabled;
	}
	set isFilteringEnabled(value: boolean) {
		let oldValue = this._isFilteringEnabled;
		this._isFilteringEnabled = value;
		if (this._isFilteringEnabled != oldValue) {
			this.onPropertyChanged(Column.isFilteringEnabledPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._isFilteringEnabled);
		}
	}
	static readonly isResizingEnabledPropertyName: string = "IsResizingEnabled";
	private _isResizingEnabled: boolean = true;
	get isResizingEnabled(): boolean {
		return this._isResizingEnabled;
	}
	set isResizingEnabled(value: boolean) {
		let oldValue = this._isResizingEnabled;
		this._isResizingEnabled = value;
		if (this._isResizingEnabled != oldValue) {
			this.onPropertyChanged(Column.isResizingEnabledPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._isResizingEnabled);
		}
	}
	static readonly isHiddenPropertyName: string = "IsHidden";
	private _isHidden: boolean = false;
	get isHidden(): boolean {
		return this._isHidden;
	}
	set isHidden(value: boolean) {
		let oldValue = this._isHidden;
		this._isHidden = value;
		if (this._isHidden != oldValue) {
			this.onPropertyChanged(Column.isHiddenPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._isHidden);
		}
	}
	static readonly shouldRemoveWhenHiddenPropertyName: string = "ShouldRemoveWhenHidden";
	private _shouldRemoveWhenHidden: boolean = false;
	get shouldRemoveWhenHidden(): boolean {
		return this._shouldRemoveWhenHidden;
	}
	set shouldRemoveWhenHidden(value: boolean) {
		let oldValue = this._shouldRemoveWhenHidden;
		this._shouldRemoveWhenHidden = value;
		if (this._shouldRemoveWhenHidden != oldValue) {
			this.onPropertyChanged(Column.shouldRemoveWhenHiddenPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._shouldRemoveWhenHidden);
		}
	}
	static readonly sortDirectionPropertyName: string = "SortDirection";
	private _sortDirection: ColumnSortDirection = ColumnSortDirection.None;
	get sortDirection(): ColumnSortDirection {
		return this._sortDirection;
	}
	set sortDirection(value: ColumnSortDirection) {
		let oldValue = this._sortDirection;
		this._sortDirection = value;
		if (this._sortDirection != oldValue) {
			this.onPropertyChanged(Column.sortDirectionPropertyName, CellPropertyAnimationType.None, enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, oldValue), enumGetBox<ColumnSortDirection>(ColumnSortDirection_$type, this._sortDirection));
		}
	}
	static readonly pinnedPropertyName: string = "Pinned";
	private _pinned: PinnedPositions = PinnedPositions.None;
	get pinned(): PinnedPositions {
		return this._pinned;
	}
	set pinned(value: PinnedPositions) {
		let oldValue = this._pinned;
		this._pinned = value;
		if (this._pinned != oldValue) {
			this.onPropertyChanged(Column.pinnedPropertyName, CellPropertyAnimationType.None, enumGetBox<PinnedPositions>(PinnedPositions_$type, oldValue), enumGetBox<PinnedPositions>(PinnedPositions_$type, this._pinned));
		}
	}
	static readonly internalShouldRemoveWhenHiddenPropertyName: string = "InternalShouldRemoveWhenHidden";
	private _internalShouldRemoveWhenHidden: boolean = false;
	get internalShouldRemoveWhenHidden(): boolean {
		return this._internalShouldRemoveWhenHidden;
	}
	set internalShouldRemoveWhenHidden(value: boolean) {
		let oldValue = this._internalShouldRemoveWhenHidden;
		this._internalShouldRemoveWhenHidden = value;
		if (this._internalShouldRemoveWhenHidden != oldValue) {
			this.onPropertyChanged(Column.internalShouldRemoveWhenHiddenPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._internalShouldRemoveWhenHidden);
		}
	}
	get actualShouldRemoveWhenHidden(): boolean {
		if (this._internalShouldRemoveWhenHidden) {
			return true;
		}
		return this._shouldRemoveWhenHidden;
	}
	protected getDefaultPinnedRowBackgroundColor(): Brush {
		return GridStyleRepository.defaultPinnedRowBackground;
	}
	protected getDefaultStickyRowBackgroundColor(): Brush {
		return GridStyleRepository.defaultStickyRowBackground;
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		cellModel.originalValue = resolvedValue;
		if (grid.selectionManager.isSelected(cellModel)) {
			cellModel.selectedStatus = 1;
		} else {
			cellModel.selectedStatus = 0;
		}
		if (grid.activationManager.isActivated(cellModel)) {
			cellModel.activationStatus = 1;
		} else {
			cellModel.activationStatus = 0;
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		cellModel.selectedBackground = this.actualSelectedBackground;
		cellModel.paddingLeft = this.paddingLeft;
		cellModel.paddingTop = this.paddingTop;
		cellModel.paddingRight = this.paddingRight;
		cellModel.paddingBottom = this.paddingBottom;
	}
	protected propertyUpdatedOverride(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, propertyAnimationType, oldValue, newValue);
		switch (propertyName) {
			case Column.headerPropertyName:
			let oldHeader = <Header>oldValue;
			let newHeader = <Header>newValue;
			if (oldHeader != null) {
				oldHeader.definitionPropertyUpdated = delegateRemove(oldHeader.definitionPropertyUpdated, runOn(this, this.header_DefinitionPropertyUpdated));
			}
			if (newHeader != null) {
				newHeader.definitionPropertyUpdated = delegateCombine(newHeader.definitionPropertyUpdated, runOn(this, this.header_DefinitionPropertyUpdated));
				if (newHeader.horizontalAlignment == CellContentHorizontalAlignment.Auto) {
					newHeader.actualHorizontalAlignment = this.resolveHeaderAutoHorizontalAlignment();
				}
				if (newHeader.verticalAlignment == CellContentVerticalAlignment.Auto) {
					newHeader.actualVerticalAlignment = this.resolveHeaderAutoVerticalAlignment();
				}
				if (!this._dontReplayHeaderProperties) {
					newHeader.replayUserProperties();
				}
			}
			break;

			case Column.headerTextPropertyName:
			this.actualHeaderText = <string>newValue;
			break;

			case Column.selectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

			case DefinitionBase.actualHorizontalAlignmentPropertyName:
			if (this.header != null) {
				if (this.header.horizontalAlignment == CellContentHorizontalAlignment.Auto) {
					this.header.actualHorizontalAlignment = this.resolveHeaderAutoHorizontalAlignment();
				}
			}
			break;

			case DefinitionBase.actualVerticalAlignmentPropertyName:
			if (this.header != null) {
				if (this.header.verticalAlignment == CellContentVerticalAlignment.Auto) {
					this.header.actualVerticalAlignment = this.resolveHeaderAutoVerticalAlignment();
				}
			}
			break;

			case Column.sortDirectionPropertyName:
			this.updateHeaderCells(this, Column.sortDirectionPropertyName, CellPropertyAnimationType.None, oldValue, newValue);
			break;

			case DefinitionBase.actualLastStickyRowBackgroundPropertyName:
			if (oldValue != null && this.actualLastStickyRowBackground == null) {
				newValue = this.actualStickyRowBackground;
			}
			break;

		}

		this.updateColumnCells(propertyName, propertyAnimationType, oldValue, newValue);
	}
	protected resolveHeaderAutoVerticalAlignment(): CellContentVerticalAlignment {
		return this.actualVerticalAlignment;
	}
	protected resolveHeaderAutoHorizontalAlignment(): CellContentHorizontalAlignment {
		return this.actualHorizontalAlignment;
	}
	private updateHeaderCells(column: Column, propertyName: string, animationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (this.columnHeaderCellsPropertyUpdating != null) {
			this.columnHeaderCellsPropertyUpdating(this, propertyName, animationType, oldValue, newValue);
		}
	}
	private header_DefinitionPropertyUpdated(sender: any, args: DefinitionPropertyUpdatedEventArgs): void {
		this.updateHeaderCells(this, args.propertyName, args.animationType, args.oldValue, args.newValue);
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (this.header != null) {
			this.header.grid = newValue;
		}
		this.updateSelectedBackgroundColor();
		this.updateSelectedBackgroundColor();
		this.updateBackgroundColor();
		this.updateTextColor();
		this.updateTextStyle();
		this.updateStickyRowBackground();
		this.updateLastStickyRowBackground();
		this.updatePinnedRowBackground();
		this.updatePinnedRowOpacity();
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.cellSelectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

			case Grid.cellBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case Grid.cellTextColorPropertyName:
			this.updateTextColor();
			break;

			case Grid.cellTextStylePropertyName:
			this.updateTextStyle();
			break;

			case Grid.stickyRowBackgroundPropertyName:
			this.updateStickyRowBackground();
			break;

			case Grid.lastStickyRowBackgroundPropertyName:
			this.updateLastStickyRowBackground();
			break;

			case Grid.pinnedRowBackgroundPropertyName:
			this.updatePinnedRowBackground();
			break;

			case Grid.pinnedRowOpacityPropertyName:
			this.updatePinnedRowOpacity();
			break;

		}

	}
	updateSelectedBackgroundColor(): void {
		if (this.selectedBackground == null) {
			if (this.grid != null && this.grid.cellSelectedBackground != null) {
				this.actualSelectedBackground = this.grid.cellSelectedBackground;
				return;
			}
			this.actualSelectedBackground = this.getDefaultSelectedBackground();
		} else {
			this.actualSelectedBackground = this.selectedBackground;
		}
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.cellBackground != null) {
				this.actualBackground = this.grid.cellBackground;
			} else {
				this.actualBackground = this.getDefaultBackgroundColor();
			}
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updateTextColor(): void {
		if (this.textColor == null) {
			if (this.grid != null && this.grid.cellTextColor != null) {
				this.actualTextColor = this.grid.cellTextColor;
				return;
			}
			this.actualTextColor = this.getDefaultTextColor();
		} else {
			this.actualTextColor = this.textColor;
		}
	}
	protected updateTextStyle(): void {
		if (this.textStyle == null) {
			if (this.grid != null && this.grid.cellTextStyle != null) {
				this.actualFontInfo = this.grid.cellTextStyle;
				return;
			}
			this.actualFontInfo = this.getDefaultFontInfo();
		} else {
			this.actualFontInfo = this.textStyle;
		}
	}
	protected updatePinnedRowOpacity(): void {
		if (isNaN_(this.pinnedRowOpacity)) {
			if (this.grid != null && !isNaN_(this.grid.pinnedRowOpacity)) {
				this.actualPinnedRowOpacity = this.grid.pinnedRowOpacity;
				return;
			}
			this.actualPinnedRowOpacity = this.getDefaultPinnedRowOpacity();
		} else {
			this.actualPinnedRowOpacity = this.pinnedRowOpacity;
		}
	}
	protected updatePinnedRowBackground(): void {
		if (this.pinnedRowBackground == null) {
			if (this.grid != null && this.grid.pinnedRowBackground != null) {
				this.actualPinnedRowBackground = this.grid.pinnedRowBackground;
				return;
			}
			this.actualPinnedRowBackground = this.getDefaultPinnedRowBackgroundColor();
		} else {
			this.actualPinnedRowBackground = this.pinnedRowBackground;
		}
	}
	protected updateStickyRowBackground(): void {
		if (this.stickyRowBackground == null) {
			if (this.grid != null && this.grid.stickyRowBackground != null) {
				this.actualStickyRowBackground = this.grid.stickyRowBackground;
				return;
			}
			this.actualStickyRowBackground = this.getDefaultStickyRowBackgroundColor();
		} else {
			this.actualStickyRowBackground = this.stickyRowBackground;
		}
	}
	protected updateLastStickyRowBackground(): void {
		if (this.lastStickyRowBackground == null) {
			if (this.grid != null && this.grid.lastStickyRowBackground != null) {
				this.actualLastStickyRowBackground = this.grid.lastStickyRowBackground;
				return;
			}
			this.actualLastStickyRowBackground = this.getDefaultLastStickyRowBackgroundColor();
		} else {
			this.actualLastStickyRowBackground = this.lastStickyRowBackground;
		}
	}
	columnCellsPropertyUpdating: (column: Column, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any) => void = null;
	columnHeaderCellsPropertyUpdating: (column: Column, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any) => void = null;
	protected updateColumnCells(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		if (this.columnCellsPropertyUpdating != null) {
			this.columnCellsPropertyUpdating(this, propertyName, propertyAnimationType, oldValue, newValue);
		}
	}
	getPreferredHidingAnimationMode(): ColumnHidingAnimationMode {
		if (this.actualHorizontalAlignment == CellContentHorizontalAlignment.Left) {
			return ColumnHidingAnimationMode.SlideToRight;
		}
		return ColumnHidingAnimationMode.SlideToLeft;
	}
	getPreferredShowingAnimationMode(): ColumnShowingAnimationMode {
		if (this.actualHorizontalAlignment == CellContentHorizontalAlignment.Left) {
			return ColumnShowingAnimationMode.SlideFromRight;
		}
		return ColumnShowingAnimationMode.SlideFromLeft;
	}
	getPreferredExchangingAnimationMode(): ColumnExchangingAnimationMode {
		return ColumnExchangingAnimationMode.SlideToLeft;
	}
	getPreferredResizingAnimationMode(): ColumnResizingAnimationMode {
		return ColumnResizingAnimationMode.Interpolate;
	}
	getUniqueKey(): string {
		return this.name != null && this.name != "" ? this.name : this.propertyPath;
	}
	private _namedHeaderValues: FastIterationDictionary$2<string, any> = null;
	private _dontReplayHeaderProperties: boolean = false;
	setNamedHeaderValue(valueName: string, animationType: CellPropertyAnimationType, value: any): void {
		if (this._namedHeaderValues == null) {
			this._namedHeaderValues = new FastIterationDictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
		}
		let oldValue: any = null;
		if (this._namedHeaderValues.containsKey(valueName)) {
			oldValue = this._namedHeaderValues.item(valueName);
		}
		this._namedHeaderValues.item(valueName, value);
		let changed: boolean = false;
		if (oldValue == null && value != null) {
			changed = true;
		}
		if (oldValue != null) {
			if (!Base.equalsStatic(oldValue, value)) {
				changed = true;
			}
		}
		if (changed) {
			this.updateHeaderCells(this, valueName, animationType, oldValue, value);
		}
	}
	hasNamedHeaderValues(): boolean {
		if (this._namedHeaderValues == null) {
			return false;
		}
		return this._namedHeaderValues.count > 0;
	}
	get internalNamedHeaderValues(): FastIterationDictionary$2<string, any> {
		return this._namedHeaderValues;
	}
	hasNamedHeaderValue(valueName: string): boolean {
		if (this._namedHeaderValues == null) {
			return false;
		}
		return this._namedHeaderValues.containsKey(valueName);
	}
	removeNamedHeaderValue(valueName: string): void {
		if (this._namedHeaderValues == null) {
			return;
		}
		if (this._namedHeaderValues.containsKey(valueName)) {
			this._namedHeaderValues.remove(valueName);
		}
	}
	getNamedHeaderValue(valueName: string): any {
		if (this._namedHeaderValues == null) {
			return null;
		}
		if (this._namedHeaderValues.containsKey(valueName)) {
			return this._namedHeaderValues.item(valueName);
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class GridColumnCollection extends ObservableCollection$1<Column> {
	static $t: Type = markType(GridColumnCollection, 'GridColumnCollection', (<any>ObservableCollection$1).$type.specialize((<any>Column).$type));
	constructor() {
		super((<any>Column).$type, 0);
	}
}

/**
 * @hidden 
 */
export class GridEffectGroup extends Base {
	static $t: Type = markType(GridEffectGroup, 'GridEffectGroup');
	private _finishingGroup: List$1<GridEffect> = null;
	private _areFinished: number = 0;
	private _autoReset: boolean = false;
	private _hasOneCanceled: boolean = false;
	effectsFinished: (sender: any, e: EventArgs) => void = null;
	effectsCanceled: (sender: any, e: EventArgs) => void = null;
	constructor(initNumber: number, autoReset: boolean);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let autoReset: boolean = <boolean>_rest[0];
				this._autoReset = autoReset;
				this._finishingGroup = new List$1<GridEffect>((<any>GridEffect).$type, 0);
				this._hasOneCanceled = false;
			}
			break;

			case 1:
			{
				let $outerArgs = <any[]>[ true ];
				{
					let autoReset: boolean = <boolean>$outerArgs[0];
					this._autoReset = autoReset;
					this._finishingGroup = new List$1<GridEffect>((<any>GridEffect).$type, 0);
					this._hasOneCanceled = false;
				}
			}
			break;

		}

	}
	reset(): void {
		this._hasOneCanceled = false;
		for (let i: number = 0; i < this._finishingGroup.count; i++) {
			let $t = this._finishingGroup._inner[i];
			$t.onFinished = delegateRemove($t.onFinished, runOn(this, this.effect_OnFinished));
			let $t1 = this._finishingGroup._inner[i];
			$t1.onCanceled = delegateRemove($t1.onCanceled, runOn(this, this.effect_OnCanceled));
		}
		this._areFinished = 0;
		this._finishingGroup.clear();
	}
	add(effect: GridEffect): void {
		this._finishingGroup.add(effect);
		effect.onFinished = delegateCombine(effect.onFinished, runOn(this, this.effect_OnFinished));
		effect.onCanceled = delegateCombine(effect.onCanceled, runOn(this, this.effect_OnCanceled));
	}
	private effect_OnCanceled(target: any, canceledBy: GridEffect): void {
		this._hasOneCanceled = true;
		this._areFinished++;
		if (this._areFinished == this._finishingGroup.count) {
			this.onEffectsFinished();
		}
	}
	private effect_OnFinished(target: any): void {
		this._areFinished++;
		if (this._areFinished == this._finishingGroup.count) {
			this.onEffectsFinished();
		}
	}
	protected onEffectsFinished(): void {
		if (this._hasOneCanceled) {
			if (this.effectsCanceled != null) {
				this.effectsCanceled(this, new EventArgs());
			}
		} else {
			if (this.effectsFinished != null) {
				this.effectsFinished(this, new EventArgs());
			}
		}
		if (this._autoReset) {
			this.reset();
		}
	}
}

/**
 * @hidden 
 */
export class RecyclingManager extends Base {
	static $t: Type = markType(RecyclingManager, 'RecyclingManager');
	private _pools: Dictionary$2<string, Stack$1<CellModel>> = null;
	constructor() {
		super();
		this._pools = new Dictionary$2<string, Stack$1<CellModel>>(String_$type, (<any>Stack$1).$type.specialize((<any>CellModel).$type), 0);
	}
	dequeue(id: string): CellModel {
		if (!this._pools.containsKey(id)) {
			this._pools.addItem(id, new Stack$1<CellModel>((<any>CellModel).$type));
			return null;
		}
		let pool: Stack$1<CellModel> = this._pools.item(id);
		if (pool.count > 0) {
			let model: CellModel = pool.pop();
			if (model.state == ModelStates.Inview) {
				model.state = ModelStates.Recycled;
			}
			return model;
		}
		return null;
	}
	enqueue(model: CellModel): void {
		model.state = ModelStates.Recycled;
		if (!this._pools.containsKey(model.styleKey)) {
			this._pools.addItem(model.styleKey, new Stack$1<CellModel>((<any>CellModel).$type));
		}
		this._pools.item(model.styleKey).push(model);
	}
}

/**
 * @hidden 
 */
export class ActivationManager extends Base {
	static $t: Type = markType(ActivationManager, 'ActivationManager');
	private _grid: Grid = null;
	private _animationManager: GridAnimationManager = null;
	private _columnIdToIndexMap: FastIterationDictionary$2<number, number> = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _columnIndexToIdMap: FastIterationDictionary$2<number, number> = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _columnIdToUniqueKeyMap: FastIterationDictionary$2<number, string> = new FastIterationDictionary$2<number, string>(Number_$type, String_$type, 0);
	private _columnUniqueKeyToIdMap: FastIterationDictionary$2<string, number> = new FastIterationDictionary$2<string, number>(String_$type, Number_$type, 0);
	private _isColumnMapDirty: boolean = false;
	private _singleSelect: boolean = false;
	private _activeRowIndex: number = -1;
	private _activeColumnId: number = -1;
	private _activeColumnIdx: number = -1;
	private get columnIdToIndexMap(): FastIterationDictionary$2<number, number> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnIdToIndexMap;
	}
	private get columnIndexToIdMap(): FastIterationDictionary$2<number, number> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnIndexToIdMap;
	}
	private get columnIdToUniqueKeyMap(): FastIterationDictionary$2<number, string> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnIdToUniqueKeyMap;
	}
	private get columnUniqueKeyToIdMap(): FastIterationDictionary$2<string, number> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnUniqueKeyToIdMap;
	}
	constructor(grid: Grid, animationManager: GridAnimationManager) {
		super();
		this._grid = grid;
		this._animationManager = animationManager;
	}
	toggleActivation(model: CellModel): void {
		if (!model.path.isContentCell) {
			return;
		}
		if (this.isActivated(model)) {
			this.deactivateModel(model);
		} else {
			this.activateModel(model);
		}
	}
	isActivated(model: CellModel): boolean {
		let isActivated: boolean = false;
		let rowIndex = this._grid.adapter.getDataRow(model.path);
		if (rowIndex == -1) {
			return false;
		}
		if (this._activeRowIndex < 0) {
			return false;
		}
		if (rowIndex != this._activeRowIndex) {
			return false;
		}
		if (typeCast<SectionHeaderCellModel>((<any>SectionHeaderCellModel).$type, model) !== null) {
			return true;
		}
		if (this.columnIndexToIdMap.containsKey(model.path.column)) {
			let columnId = this.columnIndexToIdMap.item(model.path.column);
			if (columnId >= 0) {
				isActivated = this.isCellActivated(rowIndex, columnId);
			}
		}
		return isActivated;
	}
	private isCellActivated(rowIndex: number, columnId: number): boolean {
		return this._activeRowIndex == rowIndex && columnId == this._activeColumnId;
	}
	private isCellActivationEnabled(): boolean {
		return this._grid.activationMode == GridActivationMode.Cell;
	}
	deactivateAll(): void {
		if (this._activeRowIndex >= 0 && this._activeColumnId >= 0) {
			this.deactivateCell(this._activeRowIndex, this._activeColumnId, true);
		}
	}
	private deactivateModel(model: CellModel): void {
		let rowIndex = this._grid.adapter.getDataRow(model.path);
		if (rowIndex == -1) {
			return;
		}
		if (this.columnIndexToIdMap.containsKey(model.path.column)) {
			let columnId = this.columnIndexToIdMap.item(model.path.column);
			if (this.isCellActivated(rowIndex, columnId)) {
				this.deactivateCell(rowIndex, columnId, true);
			}
		}
	}
	activateModel(model: CellModel): void {
		this.activateCellPath(model.path);
	}
	activateCellPath(path: CellPath): void {
		if (!path.isContentCell) {
			return;
		}
		if (!this.isCellActivationEnabled()) {
			return;
		}
		if (this._activeRowIndex >= 0 && this._activeColumnId != null) {
			this.deactivateCell(this._activeRowIndex, this._activeColumnId, false);
		}
		let rowIndex = this._grid.adapter.getDataRow(path);
		if (rowIndex == -1) {
			return;
		}
		if (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
			if (this._activeRowIndex != rowIndex) {
				this.activateCellByColumnIdx(rowIndex, 0);
			}
		}
		if (this.columnIndexToIdMap.containsKey(path.column)) {
			let columnId = this.columnIndexToIdMap.item(path.column);
			if (!this.isCellActivated(rowIndex, columnId)) {
				this.activateCellByColumnId(rowIndex, columnId);
			}
		}
	}
	activateModelByColumnUniqueKey(row: number, uniqueKey: string): void {
		let columnId: number = this._activeColumnId;
		if (uniqueKey == null) {
			if (this._grid.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
				let rowType = this._grid.adapter.getRowType(row);
				if (this._grid.adapter.isRowSpanning(rowType) && this._activeColumnId == -1) {
					columnId = this.columnIndexToIdMap.item(0);
				}
			}
		} else if (this.columnUniqueKeyToIdMap.containsKey(uniqueKey)) {
			columnId = this.columnUniqueKeyToIdMap.item(uniqueKey);
		}
		if (columnId != -1) {
			if (this._activeRowIndex >= 0 && this._activeColumnId >= 0) {
				if (row != this._activeRowIndex || columnId != this._activeColumnId) {
					this.deactivateCell(this._activeRowIndex, this._activeColumnId, false);
					this.activateCellByColumnId(row, columnId);
				}
			} else if (this._activeRowIndex == -1 && this._activeColumnId == -1) {
				this.activateCellByColumnId(row, columnId);
			}
		}
	}
	private activateCellByColumnIdx(row: number, columnIdx: number): void {
		if (!this.columnIndexToIdMap.containsKey(columnIdx)) {
			return;
		}
		let columnId = this.columnIndexToIdMap.item(columnIdx);
		if (row != this._activeRowIndex || columnId != this._activeColumnId) {
			this._activeRowIndex = row;
			this._activeColumnId = columnId;
			this._activeColumnIdx = columnIdx;
			if (row >= 0 && columnIdx >= 0) {
				if (row >= 0 && row < this._grid.adapter.getRowCount()) {
					if (this._grid.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
						let rowType = this._grid.adapter.getRowType(row);
						if (this._grid.adapter.isRowSpanning(rowType)) {
							columnIdx = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
							columnId = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
						}
					}
				}
				this._animationManager.startCellActivationAnimation(this._grid, row, columnIdx, columnId);
			}
			this._grid.onCellActivated(row, this.getUniqueKey(columnId));
		}
	}
	private activateCellByColumnId(row: number, columnId: number): void {
		if (!this.columnIdToIndexMap.containsKey(columnId)) {
			return;
		}
		let columnIdx = this.columnIdToIndexMap.item(columnId);
		if (row != this._activeRowIndex || columnId != this._activeColumnId) {
			this._activeRowIndex = row;
			this._activeColumnId = columnId;
			this._activeColumnIdx = columnIdx;
			if (row >= 0 && columnIdx >= 0) {
				if (row >= 0 && row < this._grid.adapter.getRowCount()) {
					if (this._grid.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
						let rowType = this._grid.adapter.getRowType(row);
						if (this._grid.adapter.isRowSpanning(rowType)) {
							columnIdx = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
							columnId = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
						}
					}
				}
				this._animationManager.startCellActivationAnimation(this._grid, row, columnIdx, columnId);
			}
			this._grid.onCellActivated(row, this.getUniqueKey(columnId));
		}
	}
	private deactivateCell(row: number, columnId: number, sendEvent: boolean): void {
		if (this.isCellActivated(row, columnId)) {
			this._activeColumnId = -1;
			this._activeRowIndex = -1;
			this._activeColumnIdx = -1;
			if (row >= 0) {
				if (this.columnIdToIndexMap.containsKey(columnId)) {
					let columnIdx = this.columnIdToIndexMap.item(columnId);
					if (columnIdx >= 0) {
						if (row >= 0 && row < this._grid.adapter.getRowCount()) {
							if (this._grid.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells) {
								let rowType = this._grid.adapter.getRowType(row);
								if (this._grid.adapter.isRowSpanning(rowType)) {
									columnIdx = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
									columnId = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
								}
							}
						}
						this._animationManager.startCellDeactivationAnimation(this._grid, row, columnIdx, columnId);
					}
				}
			}
			if (sendEvent) {
				this._grid.onCellDeactivated(row, this.getUniqueKey(columnId));
			}
		}
	}
	onClearItems(): void {
		this._activeRowIndex = -1;
		this._activeColumnId = -1;
		this._activeColumnIdx = -1;
	}
	onRowInsertedAt(row: number): void {
	}
	onRowRemovedAt(row: number): void {
	}
	private getUniqueKey(columnId: number): string {
		if (!this.columnIdToUniqueKeyMap.containsKey(columnId)) {
			return null;
		}
		return this.columnIdToUniqueKeyMap.item(columnId);
	}
	onSetItem(index: number): void {
	}
	invalidateColumnMap(): void {
		this._isColumnMapDirty = true;
	}
	private buildColumnMap(): void {
		this._columnIdToIndexMap.clear();
		this._columnIndexToIdMap.clear();
		this._columnIdToUniqueKeyMap.clear();
		this._columnUniqueKeyToIdMap.clear();
		for (let i = 0; i < this._grid.actualColumns.count; i++) {
			this._columnIdToIndexMap.add(this._grid.actualColumns._inner[i].uniqueId, i);
			this._columnIndexToIdMap.add(i, this._grid.actualColumns._inner[i].uniqueId);
			this._columnIdToUniqueKeyMap.add(this._grid.actualColumns._inner[i].uniqueId, this._grid.actualColumns._inner[i].getUniqueKey());
			this._columnUniqueKeyToIdMap.add(this._grid.actualColumns._inner[i].getUniqueKey(), this._grid.actualColumns._inner[i].uniqueId);
		}
	}
	getColumnIndex(): number {
		if (this.columnIdToIndexMap.containsKey(this._activeColumnId)) {
			return this.columnIdToIndexMap.item(this._activeColumnId);
		}
		if (this._activeColumnIdx != -1) {
			return this._activeColumnIdx;
		}
		return 0;
	}
}

/**
 * @hidden 
 */
export class SelectionManager extends Base {
	static $t: Type = markType(SelectionManager, 'SelectionManager');
	private _grid: Grid = null;
	private _animationManager: GridAnimationManager = null;
	private _selectedRows: FastIterationDictionary$2<PrimaryKeyValue, number> = new FastIterationDictionary$2<PrimaryKeyValue, number>((<any>PrimaryKeyValue).$type, Number_$type, 0);
	private _selectedCells: FastIterationDictionary$2<PrimaryKeyValue, FastIterationDictionary$2<number, number>> = new FastIterationDictionary$2<PrimaryKeyValue, FastIterationDictionary$2<number, number>>((<any>PrimaryKeyValue).$type, (<any>FastIterationDictionary$2).$type.specialize(Number_$type, Number_$type), 0);
	private _columnIdToIndexMap: FastIterationDictionary$2<number, number> = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _columnIndexToIdMap: FastIterationDictionary$2<number, number> = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
	private _isColumnMapDirty: boolean = false;
	private get columnIdToIndexMap(): FastIterationDictionary$2<number, number> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnIdToIndexMap;
	}
	private get columnIndexToIdMap(): FastIterationDictionary$2<number, number> {
		if (this._isColumnMapDirty) {
			this.buildColumnMap();
			this._isColumnMapDirty = false;
		}
		return this._columnIndexToIdMap;
	}
	private _previousRanges: List$1<CellRange> = new List$1<CellRange>((<any>CellRange).$type, 0);
	private _currentRanges: List$1<CellRange> = new List$1<CellRange>((<any>CellRange).$type, 0);
	private _singleSelect: boolean = false;
	constructor(grid: Grid, animationManager: GridAnimationManager) {
		super();
		this._grid = grid;
		this._animationManager = animationManager;
	}
	toggleSelection(model: CellModel): void {
		if (!model.path.isContentCell) {
			return;
		}
		if (this.isSelected(model)) {
			this.unselectModel(model);
		} else {
			this.selectModel(model);
		}
	}
	singleSelection(model: CellModel): void {
		if (!model.path.isContentCell) {
			return;
		}
		this._singleSelect = true;
		this.selectModel(model);
		this._singleSelect = false;
	}
	isSelected(model: CellModel): boolean {
		let rowIndex = this._grid.adapter.getDataRow(model.path);
		if (rowIndex == -1) {
			return false;
		}
		if (this._grid.adapter.isPlaceholderItem(rowIndex)) {
			return false;
		}
		let key = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), rowIndex);
		if (key == null) {
			return false;
		}
		let isSelected: boolean = this._selectedRows.containsKey(key);
		if (isSelected) {
			let index = this._selectedRows.item(key);
			if (index == -1) {
				this._selectedRows.item(key, rowIndex);
			}
			let item = this._grid.adapter.resolveValueForRow(model.path);
			let selectedIndex = this._grid.selectedKeys.indexOf(key);
			if (selectedIndex >= 0) {
				if (this._grid.selectedItems.all._inner[selectedIndex] == null) {
					this._grid.onSelectedRowItemUpdated(selectedIndex, item, key);
				}
			}
		}
		if (!isSelected) {
			if (this.columnIndexToIdMap.containsKey(model.path.column)) {
				let columnId = this.columnIndexToIdMap.item(model.path.column);
				if (columnId >= 0) {
					isSelected = this.isCellSelected(key, columnId);
					if (isSelected && this._selectedCells.item(key).item(columnId) == -1) {
						this._selectedCells.item(key).item(columnId, rowIndex);
					}
				}
			}
		}
		if (!isSelected) {
			for (let i = 0; i < this._currentRanges.count; i++) {
				if (this._currentRanges._inner[i].inRange(model.path.row, model.path.column)) {
					isSelected = true;
					break;
				}
			}
		}
		if (!isSelected) {
			if (this._grid.adapter.isRowPinned(rowIndex)) {
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
				if (specialRow != null) {
					let targetRowKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
					isSelected = this._selectedRows.containsKey(targetRowKey);
					if (!isSelected) {
						if (this.columnIndexToIdMap.containsKey(model.path.column)) {
							let columnId1 = this.columnIndexToIdMap.item(model.path.column);
							if (columnId1 >= 0) {
								isSelected = this.isCellSelected(targetRowKey, columnId1);
							}
						}
					}
				}
			}
		}
		return isSelected;
	}
	private isRowSelected(key: PrimaryKeyValue): boolean {
		return this._selectedRows.containsKey(key);
	}
	private isCellSelected(key: PrimaryKeyValue, columnId: number): boolean {
		return this._selectedCells.containsKey(key) && this._selectedCells.item(key).containsKey(columnId);
	}
	private isRowSelectEnabled(): boolean {
		return this._grid.selectionMode == GridSelectionMode.SingleRow || this._grid.selectionMode == GridSelectionMode.MultipleRow;
	}
	private isCellSelectEnabled(): boolean {
		return this._grid.selectionMode == GridSelectionMode.SingleCell || this._grid.selectionMode == GridSelectionMode.MultipleCell;
	}
	private unselectModel(model: CellModel): void {
		let rowIndex = this._grid.adapter.getDataRow(model.path);
		if (rowIndex == -1) {
			return;
		}
		if (this._grid.adapter.isPlaceholderItem(rowIndex)) {
			return;
		}
		let key = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), rowIndex);
		if (this.isRowSelected(key)) {
			this.unselectRow(key, rowIndex, false);
		}
		if (this.columnIndexToIdMap.containsKey(model.path.column)) {
			let columnId = this.columnIndexToIdMap.item(model.path.column);
			if (this.isCellSelected(key, columnId)) {
				this.unselectCell(key, rowIndex, columnId);
			}
		}
	}
	private selectModel(model: CellModel): void {
		if (this._grid.selectionMode == GridSelectionMode.None) {
			return;
		}
		if (this._grid.selectionMode == GridSelectionMode.SingleRow || this._singleSelect) {
			let keys = this._selectedRows.keyList;
			let removed = this._selectedRows.removedList;
			let toRemove: List$1<PrimaryKeyValue> = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
			let toRemoveRows: List$1<number> = new List$1<number>(Number_$type, 0);
			for (let i = 0; i < keys.count; i++) {
				if (removed._inner[i]) {
					continue;
				}
				toRemove.add(keys._inner[i]);
				toRemoveRows.add(this._selectedRows.valueList._inner[i]);
			}
			for (let i1 = 0; i1 < toRemove.count; i1++) {
				this.unselectRow(toRemove._inner[i1], toRemoveRows._inner[i1], false);
			}
		}
		if (this._grid.selectionMode == GridSelectionMode.SingleCell || this._singleSelect) {
			let keyList = this._selectedCells.keyList;
			let removedList = this._selectedCells.removedList;
			let toRemoveKeys: List$1<PrimaryKeyValue> = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
			let toRemoveCells: List$1<number> = new List$1<number>(Number_$type, 0);
			let toRemoveCellRows: List$1<number> = new List$1<number>(Number_$type, 0);
			for (let i2 = 0; i2 < keyList.count; i2++) {
				if (removedList._inner[i2]) {
					continue;
				}
				let rowKey = keyList._inner[i2];
				let cellKeyList = this._selectedCells.item(rowKey).keyList;
				let cellValueList = this._selectedCells.item(rowKey).valueList;
				let cellRemovedList = this._selectedCells.item(rowKey).removedList;
				for (let j = 0; j < cellKeyList.count; j++) {
					if (cellRemovedList._inner[j]) {
						continue;
					}
					let column = cellKeyList._inner[j];
					let row = cellValueList._inner[j];
					if (this.columnIndexToIdMap.containsKey(model.path.column) && this.columnIndexToIdMap.item(model.path.column) == column && model.path.row == row) {
						continue;
					}
					toRemoveKeys.add(rowKey);
					toRemoveCells.add(column);
					toRemoveCellRows.add(row);
				}
			}
			for (let i3 = 0; i3 < toRemoveKeys.count; i3++) {
				this.unselectCell(toRemoveKeys._inner[i3], toRemoveCellRows._inner[i3], toRemoveCells._inner[i3]);
			}
		}
		let datarow = this._grid.adapter.getDataRow(model.path);
		if (datarow == -1) {
			return;
		}
		if (this._grid.adapter.isPlaceholderItem(datarow)) {
			return;
		}
		let key = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), datarow);
		if (key == null) {
			return;
		}
		if (this.isRowSelectEnabled()) {
			this.selectRow(key, datarow, false);
		} else if (this.isCellSelectEnabled()) {
			this.selectCellByColumnIdx(key, datarow, model.path.column);
		}
	}
	private selectRow(key: PrimaryKeyValue, row: number, ignorePinnedRow: boolean): void {
		let notifyGrid = true;
		let isPinned = false;
		if (!ignorePinnedRow) {
			if (this._grid.adapter.getRowType(row) == DataSourceRowType.ShiftedRow) {
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
				if (specialRow.targetRow != null) {
					let targetKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
					let targetIndex = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), targetKey, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
					this.selectRow1(targetKey, targetIndex, specialRow.targetRow, true);
				}
				isPinned = true;
				notifyGrid = false;
			}
		}
		let item: any = null;
		if (!isPinned) {
			item = this._grid.adapter.resolveValueForDataRow(row);
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (!this.isRowSelected(pinnedRowKey)) {
						this.selectRow1(pinnedRowKey, pinnedRow, null, false);
					}
				}
			}
		}
		this.selectRow1(key, row, item, notifyGrid);
	}
	private selectRow1(key: PrimaryKeyValue, row: number, item: any, notifyGrid: boolean): void {
		if (!this._selectedRows.containsKey(key)) {
			this._selectedRows.add(key, row);
			if (row >= 0) {
				this._animationManager.startRowSelectionAnimation(this._grid, row);
			}
		}
		if (notifyGrid && item != null) {
			this._grid.onRowSelected(item, key);
		}
	}
	private unselectRow1(key: PrimaryKeyValue, row: number, rowItem: any, notifyGrid: boolean): void {
		if (this._selectedRows.containsKey(key)) {
			this._selectedRows.remove(key);
			if (row >= 0) {
				let rowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), row);
				if (rowKey != null && rowKey.equals(key) && row >= 0) {
					this._animationManager.startRowUnselectionAnimation(this._grid, row);
				}
			}
		}
		if (notifyGrid && rowItem != null) {
			this._grid.onRowUnselected(rowItem, key);
		}
	}
	private unselectRow(key: PrimaryKeyValue, row: number, ignorePinnedRow: boolean): void {
		let notifyGrid = true;
		let isPinned = false;
		if (!ignorePinnedRow) {
			if (this._grid.adapter.getRowType(row) == DataSourceRowType.ShiftedRow) {
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
				if (specialRow.targetRow != null) {
					let targetKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
					let targetIndex = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), targetKey, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
					this.unselectRow1(targetKey, targetIndex, specialRow.targetRow, true);
				}
				isPinned = true;
				notifyGrid = false;
			}
		}
		let item: any = null;
		if (!isPinned) {
			item = this._grid.adapter.resolveValueForDataRow(row);
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (this.isRowSelected(pinnedRowKey)) {
						this.unselectRow1(pinnedRowKey, pinnedRow, null, false);
					}
				}
			}
		}
		this.unselectRow1(key, row, item, notifyGrid);
	}
	private selectCellByColumnIdx(key: PrimaryKeyValue, row: number, columnIdx: number): void {
		if (!this.columnIndexToIdMap.containsKey(columnIdx)) {
			return;
		}
		let columnId = this.columnIndexToIdMap.item(columnIdx);
		let notifyGrid = true;
		if (this._grid.adapter.getRowType(row) == DataSourceRowType.ShiftedRow) {
			let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
			if (specialRow.targetRow != null) {
				let pinnedTargetKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
				let pinnedTargetIndex = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), pinnedTargetKey, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
				this.selectCell(pinnedTargetKey, columnId, columnIdx, pinnedTargetIndex, true);
			}
			notifyGrid = false;
		} else {
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (!this.isCellSelected(pinnedRowKey, columnId)) {
						this.selectCell(pinnedRowKey, columnId, columnIdx, pinnedRow, false);
					}
				}
			}
		}
		this.selectCell(key, columnId, columnIdx, row, notifyGrid);
	}
	private selectCellByColumnId(key: PrimaryKeyValue, row: number, columnId: number): void {
		if (!this.columnIdToIndexMap.containsKey(columnId)) {
			return;
		}
		let columnIdx = this.columnIdToIndexMap.item(columnId);
		if (!this._selectedCells.containsKey(key)) {
			let dict = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
			dict.add(columnId, row);
			this._selectedCells.add(key, dict);
			if (row >= 0 && columnIdx >= 0) {
				this._animationManager.startCellSelectionAnimation(this._grid, row, columnIdx, columnId);
			}
			this._grid.onCellSelected(key, columnId);
		} else {
			if (!this._selectedCells.item(key).containsKey(columnId)) {
				this._selectedCells.item(key).add(columnId, row);
				if (row >= 0) {
					this._animationManager.startCellSelectionAnimation(this._grid, row, columnIdx, columnId);
				}
				this._grid.onCellSelected(key, columnId);
			}
		}
	}
	private selectCell(key: PrimaryKeyValue, columnId: number, columnIdx: number, row: number, notifyGrid: boolean): void {
		if (!this._selectedCells.containsKey(key)) {
			if (columnId >= 0) {
				let dict = new FastIterationDictionary$2<number, number>(Number_$type, Number_$type, 0);
				dict.add(columnId, row);
				this._selectedCells.add(key, dict);
				if (row >= 0) {
					this._animationManager.startCellSelectionAnimation(this._grid, row, columnIdx, columnId);
				}
				if (notifyGrid) {
					this._grid.onCellSelected(key, columnId);
				}
			}
		} else {
			if (!this._selectedCells.item(key).containsKey(columnId)) {
				this._selectedCells.item(key).add(columnId, row);
				if (row >= 0) {
					this._animationManager.startCellSelectionAnimation(this._grid, row, columnIdx, columnId);
				}
				if (notifyGrid) {
					this._grid.onCellSelected(key, columnId);
				}
			}
		}
	}
	private unselectCell1(key: PrimaryKeyValue, row: number, columnId: number, notifyGrid: boolean): void {
		if (this.isCellSelected(key, columnId)) {
			this._selectedCells.item(key).remove(columnId);
			if (this._selectedCells.item(key).count == 0) {
				this._selectedCells.remove(key);
			}
			if (row >= 0) {
				let rowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), row);
				if (rowKey != null && rowKey.equals(key) && row >= 0) {
					if (this.columnIdToIndexMap.containsKey(columnId)) {
						let columnIdx = this.columnIdToIndexMap.item(columnId);
						if (columnIdx >= 0) {
							this._animationManager.startCellUnselectionAnimation(this._grid, row, columnIdx, columnId);
						}
					}
				}
			}
			if (notifyGrid) {
				this._grid.onCellUnselected(key, columnId);
			}
		}
	}
	private unselectCell(key: PrimaryKeyValue, row: number, columnId: number): void {
		let notifyGrid = true;
		if (this._grid.adapter.getRowType(row) == DataSourceRowType.ShiftedRow) {
			let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
			if (specialRow.targetRow != null) {
				let pinnedTargetKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
				let pinnedTargetIndex = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), pinnedTargetKey, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
				this.unselectCell1(pinnedTargetKey, pinnedTargetIndex, columnId, true);
			}
			notifyGrid = false;
		} else {
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (this.isCellSelected(pinnedRowKey, columnId)) {
						this.unselectCell1(pinnedRowKey, pinnedRow, columnId, false);
					}
				}
			}
		}
		this.unselectCell1(key, row, columnId, notifyGrid);
	}
	private getPinnedRowByKey(key: PrimaryKeyValue): number {
		let pinnedRow = -1;
		let pinnedRows = this._grid.adapter.getStickyRows();
		if (pinnedRows != null) {
			for (let j = 0; j < pinnedRows.length; j++) {
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, this._grid.actualDataSource.getItemAtIndex(pinnedRows[j]));
				if (specialRow != null && specialRow.rowType == DataSourceRowType.ShiftedRow) {
					let rowKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
					if (rowKey != null && rowKey.equals(key)) {
						pinnedRow = pinnedRows[j];
						break;
					}
				}
			}
		}
		return pinnedRow;
	}
	updateSelectedState(): void {
		let resolvedSelection = this.getResolvedSelectedKeys();
		let currentSelection: Dictionary$2<PrimaryKeyValue, number> = new Dictionary$2<PrimaryKeyValue, number>((<any>PrimaryKeyValue).$type, Number_$type, 0);
		for (let i = 0; i < resolvedSelection.count; i++) {
			let key = resolvedSelection.item(i);
			let index: number = -1;
			if (this._selectedRows.containsKey(key)) {
				index = this._selectedRows.item(key);
			}
			if (index == -1) {
				index = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), key, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
			}
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (!currentSelection.containsKey(pinnedRowKey)) {
						currentSelection.addItem(pinnedRowKey, pinnedRow);
					}
					if (!this.isRowSelected(pinnedRowKey)) {
						this.selectRow(pinnedRowKey, pinnedRow, true);
					}
				}
			}
			if (!currentSelection.containsKey(key)) {
				currentSelection.addItem(key, index);
			}
			if (!this.isRowSelected(key)) {
				this.selectRow(key, index, true);
			}
		}
		let keys = this._selectedRows.keyList;
		let removedList = this._selectedRows.removedList;
		let toRemoveKeys: List$1<PrimaryKeyValue> = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
		let toRemove: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1 = 0; i1 < keys.count; i1++) {
			if (removedList._inner[i1]) {
				continue;
			}
			let key1 = keys._inner[i1];
			if (!currentSelection.containsKey(key1)) {
				toRemoveKeys.add(key1);
				toRemove.add(this._selectedRows.valueList._inner[i1]);
			}
		}
		for (let i2 = 0; i2 < toRemove.count; i2++) {
			this.unselectRow(toRemoveKeys._inner[i2], toRemove._inner[i2], false);
		}
		for (let i3 = 0; i3 < this._grid.selectedItems.all.count; i3++) {
			let key2 = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), this._grid.selectedItems.all._inner[i3]);
			if (key2 != null && !currentSelection.containsKey(key2)) {
				let index1: number = -1;
				if (this._selectedRows.containsKey(key2)) {
					index1 = this._selectedRows.item(key2);
				}
				if (index1 == -1) {
					index1 = this._grid.adapter.fastGetItemIndexForKey(this._grid.getResolvedPrimaryKey(), key2, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
				}
				this.unselectRow(key2, index1, false);
			}
		}
	}
	updateSelectedCellsState(): void {
		let resolvedSelectedCells = this._grid.selectedCells.all;
		let currentSelection: Dictionary$2<PrimaryKeyValue, IList$1<number>> = new Dictionary$2<PrimaryKeyValue, IList$1<number>>((<any>PrimaryKeyValue).$type, IList$1_$type.specialize(Number_$type), 0);
		for (let i = 0; i < resolvedSelectedCells.count; i++) {
			let key = resolvedSelectedCells.item(i).primaryKey;
			if (key == null) {
				continue;
			}
			if (resolvedSelectedCells.item(i).resolvedColumn == null) {
				continue;
			}
			let columnId = resolvedSelectedCells.item(i).resolvedColumn.uniqueId;
			let index: number = -1;
			if (this.isCellSelected(key, columnId)) {
				index = this._selectedCells.item(key).item(columnId);
			}
			if (index == -1) {
				let startIndex = this._grid.getFirstVisibleIndex();
				let endIndex = this._grid.getLastVisibleIndex();
				if (startIndex != -1 && endIndex != -1) {
					index = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), key, startIndex, endIndex);
				}
			}
			if (this._grid.pinnedKeys.contains(key)) {
				let pinnedRow = this.getPinnedRowByKey(key);
				if (pinnedRow >= 0) {
					let pinnedRowKey = this._grid.adapter.getRowKey(this._grid.getResolvedPrimaryKey(), pinnedRow);
					if (!currentSelection.containsKey(pinnedRowKey)) {
						currentSelection.addItem(pinnedRowKey, ((() => {
							let $ret = new List$1<number>(Number_$type, 0);
							$ret.add(columnId);
							return $ret;
						})()));
					} else if (!currentSelection.item(pinnedRowKey).contains(columnId)) {
						currentSelection.item(pinnedRowKey).add(columnId);
					}
					if (!this.isCellSelected(pinnedRowKey, columnId)) {
						this.selectCellByColumnId(pinnedRowKey, index, columnId);
					}
				}
			}
			if (!currentSelection.containsKey(key)) {
				currentSelection.addItem(key, ((() => {
					let $ret = new List$1<number>(Number_$type, 0);
					$ret.add(columnId);
					return $ret;
				})()));
			} else if (!currentSelection.item(key).contains(columnId)) {
				currentSelection.item(key).add(columnId);
			}
			if (!this.isCellSelected(key, columnId)) {
				this.selectCellByColumnId(key, index, columnId);
			}
		}
		let keyList = this._selectedCells.keyList;
		let removedList = this._selectedCells.removedList;
		let toRemoveKeys: List$1<PrimaryKeyValue> = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
		let toRemoveCells: List$1<number> = new List$1<number>(Number_$type, 0);
		let toRemoveCellRows: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1 = 0; i1 < keyList.count; i1++) {
			if (removedList._inner[i1]) {
				continue;
			}
			let key1 = keyList._inner[i1];
			for (let j = 0; j < this._selectedCells.item(key1).count; j++) {
				let columnId1 = this._selectedCells.item(key1).keyList._inner[j];
				let row = this._selectedCells.item(key1).valueList._inner[j];
				if (!currentSelection.containsKey(key1) || !currentSelection.item(key1).contains(columnId1)) {
					toRemoveKeys.add(key1);
					toRemoveCells.add(columnId1);
					toRemoveCellRows.add(row);
				}
			}
		}
		for (let i2 = 0; i2 < toRemoveKeys.count; i2++) {
			this.unselectCell(toRemoveKeys._inner[i2], toRemoveCellRows._inner[i2], toRemoveCells._inner[i2]);
		}
	}
	updateSelectedCellRangeState(): void {
		let resolvedCellRanges = this._grid.selectedCellRanges.all;
		this._previousRanges.clear();
		this._previousRanges = this._currentRanges;
		this._currentRanges = new List$1<CellRange>((<any>CellRange).$type, 0);
		for (let i = 0; i < resolvedCellRanges.count; i++) {
			this._currentRanges.add(resolvedCellRanges.item(i).clone());
		}
		let stickyRows = this._grid.adapter.getStickyRows();
		if (stickyRows != null) {
			for (let i1 = 0; i1 < stickyRows.length; i1++) {
				let rowType = this._grid.adapter.getRowType(stickyRows[i1]);
				if (rowType == DataSourceRowType.ShiftedRow) {
					for (let j = 0; j < this._grid.model.visibleColumns.count; j++) {
						let columnIndex = this._grid.model.visibleColumns._inner[j];
						let columnRenderedIndex = this._grid.model.columns._inner[columnIndex].renderedIndex;
						this.animateCellInRange(stickyRows[i1], columnRenderedIndex);
					}
				}
			}
		}
		let topRow = this._grid.getFirstVisibleIndex();
		let bottomRow = this._grid.getLastVisibleIndex();
		for (let i2 = topRow; i2 <= bottomRow; i2++) {
			for (let j1 = 0; j1 < this._grid.model.visibleColumns.count; j1++) {
				let columnIndex1 = this._grid.model.visibleColumns._inner[j1];
				let columnRenderedIndex1 = this._grid.model.columns._inner[columnIndex1].renderedIndex;
				this.animateCellInRange(i2, columnRenderedIndex1);
			}
		}
	}
	private animateCellInRange(i: number, j: number): void {
		let wasInRange = false;
		let curInRange = false;
		for (let k = 0; k < this._previousRanges.count; k++) {
			let prev = this._previousRanges._inner[k];
			if (prev.inRange(i, j)) {
				wasInRange = true;
			}
		}
		for (let k1 = 0; k1 < this._currentRanges.count; k1++) {
			let cur = this._currentRanges._inner[k1];
			if (cur.inRange(i, j)) {
				curInRange = true;
			}
		}
		if (wasInRange && !curInRange) {
			let columnIndex = this._grid.spatialEngine.getColumnAtRenderedIndex(j, this._grid.model);
			this._grid.animationManager.startCellPositionUnselectionAnimation(this._grid, i, columnIndex);
		} else if (!wasInRange && curInRange) {
			let columnIndex1 = this._grid.spatialEngine.getColumnAtRenderedIndex(j, this._grid.model);
			this._grid.animationManager.startCellPositionSelectionAnimation(this._grid, i, columnIndex1);
		}
	}
	private getResolvedSelectedKeys(): IList$1<PrimaryKeyValue> {
		return this._grid.selectedKeys.all;
	}
	onClearItems(): void {
		this.invalidateSelectedRows();
		this.invalidateSelectedCells();
	}
	onRowInsertedAt(row: number): void {
		for (let i = 0; i < this._selectedRows.keyList.count; i++) {
			if (this._selectedRows.removedList._inner[i]) {
				continue;
			}
			let key = this._selectedRows.keyList._inner[i];
			let value = this._selectedRows.valueList._inner[i];
			if (value >= row) {
				this._selectedRows.item(key, value + 1);
			}
		}
		for (let i1 = 0; i1 < this._selectedCells.keyList.count; i1++) {
			if (this._selectedCells.removedList._inner[i1]) {
				continue;
			}
			let key1 = this._selectedCells.keyList._inner[i1];
			let value1 = this._selectedCells.valueList._inner[i1];
			for (let j = 0; j < value1.keyList.count; j++) {
				if (this._selectedCells.item(key1).removedList._inner[j]) {
					continue;
				}
				let columnId = value1.keyList._inner[j];
				let cellRow = this._selectedCells.item(key1).item(columnId);
				if (cellRow >= row) {
					this._selectedCells.item(key1).item(columnId, cellRow + 1);
				}
			}
		}
	}
	onRowRemovedAt(row: number): void {
		let toRemoveKeys = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
		let toRemoveIndexes = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._selectedRows.keyList.count; i++) {
			if (this._selectedRows.removedList._inner[i]) {
				continue;
			}
			let key = this._selectedRows.keyList._inner[i];
			let value = this._selectedRows.valueList._inner[i];
			if (value == row) {
				toRemoveKeys.add(key);
				toRemoveIndexes.add(value);
			}
			if (value > row) {
				this._selectedRows.item(key, value - 1);
			}
		}
		for (let i1 = 0; i1 < toRemoveKeys.count; i1++) {
			this.unselectRow(toRemoveKeys._inner[i1], toRemoveIndexes._inner[i1], true);
		}
		for (let i2 = 0; i2 < this._selectedCells.keyList.count; i2++) {
			if (this._selectedCells.removedList._inner[i2]) {
				continue;
			}
			let key1 = this._selectedCells.keyList._inner[i2];
			let value1 = this._selectedCells.valueList._inner[i2];
			for (let j = 0; j < value1.keyList.count; j++) {
				if (this._selectedCells.item(key1).removedList._inner[j]) {
					continue;
				}
				let columnId = value1.keyList._inner[j];
				let cellRow = this._selectedCells.item(key1).item(columnId);
				if (cellRow == row) {
					this._selectedCells.item(key1).item(columnId, -1);
				}
				if (cellRow > row) {
					this._selectedCells.item(key1).item(columnId, cellRow - 1);
				}
			}
		}
	}
	onColumnRemovedAt(index: number, column: Column): void {
		let startIndex = this._grid.getFirstVisibleIndex();
		let endIndex = this._grid.getLastVisibleIndex();
		let columnsToUpdate: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._currentRanges.count; i++) {
			let range = this._currentRanges._inner[i];
			if (range.startRow > endIndex || range.endRow < startIndex) {
				continue;
			}
			if (index < range.startColumn) {
				this.addUniqueColumnIndex(columnsToUpdate, range.startColumn - 1);
			}
			if (index <= range.endColumn) {
				this.addUniqueColumnIndex(columnsToUpdate, range.endColumn);
			}
		}
		for (let i1 = 0; i1 < columnsToUpdate.count; i1++) {
			if (columnsToUpdate._inner[i1] >= 0 && columnsToUpdate._inner[i1] <= this._grid.actualColumns.count) {
				this._grid.animationManager.startColumnActualizationAnimation(this._grid, startIndex, endIndex, columnsToUpdate._inner[i1], true);
			}
		}
	}
	onColumnInsertedAt(index: number, column: Column): void {
		let startIndex = this._grid.getFirstVisibleIndex();
		let endIndex = this._grid.getLastVisibleIndex();
		let columnsToUpdate: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._currentRanges.count; i++) {
			let range = this._currentRanges._inner[i];
			if (range.startRow > endIndex || range.endRow < startIndex) {
				continue;
			}
			if (index < range.startColumn) {
				this.addUniqueColumnIndex(columnsToUpdate, range.startColumn);
			}
			if (index <= range.endColumn) {
				this.addUniqueColumnIndex(columnsToUpdate, range.endColumn + 1);
			}
		}
		for (let i1 = 0; i1 < columnsToUpdate.count; i1++) {
			if (columnsToUpdate._inner[i1] >= 0 && columnsToUpdate._inner[i1] <= this._grid.actualColumns.count) {
				this._grid.animationManager.startColumnActualizationAnimation(this._grid, startIndex, endIndex, columnsToUpdate._inner[i1], true);
			}
		}
	}
	onColumnMoved(oldIndex: number, newIndex: number, column: Column): void {
		let startIndex = this._grid.getFirstVisibleIndex();
		let endIndex = this._grid.getLastVisibleIndex();
		let columnsToUpdate: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._currentRanges.count; i++) {
			let range = this._currentRanges._inner[i];
			if (range.startRow > endIndex || range.endRow < startIndex) {
				continue;
			}
			if (range.isColumnInRange(oldIndex) && !range.isColumnInRange(newIndex)) {
				this.addUniqueColumnIndex(columnsToUpdate, newIndex);
				if (newIndex > range.endColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.endColumn);
				} else if (newIndex < range.startColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.startColumn);
				}
			} else if (!range.isColumnInRange(oldIndex) && range.isColumnInRange(newIndex)) {
				this.addUniqueColumnIndex(columnsToUpdate, newIndex);
				if (oldIndex > range.endColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.endColumn + 1);
				} else if (oldIndex < range.startColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.startColumn - 1);
				}
			} else if (!range.isColumnInRange(oldIndex) && !range.isColumnInRange(newIndex)) {
				if (oldIndex < range.startColumn && newIndex > range.endColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.startColumn - 1);
					this.addUniqueColumnIndex(columnsToUpdate, range.endColumn);
				}
				if (oldIndex > range.endColumn && newIndex < range.startColumn) {
					this.addUniqueColumnIndex(columnsToUpdate, range.startColumn);
					this.addUniqueColumnIndex(columnsToUpdate, range.endColumn + 1);
				}
			}
		}
		for (let i1 = 0; i1 < columnsToUpdate.count; i1++) {
			this._grid.animationManager.startColumnActualizationAnimation(this._grid, startIndex, endIndex, columnsToUpdate._inner[i1], true);
		}
	}
	private addUniqueColumnIndex(columns: List$1<number>, column: number): void {
		if (column < 0 || column >= this._grid.actualColumns.count) {
			return;
		}
		if (!columns.contains(column)) {
			columns.add(column);
		}
	}
	onSetItem(index: number): void {
		let toRemoveKeys = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
		let toRemoveIndexes = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._selectedRows.keyList.count; i++) {
			if (this._selectedRows.removedList._inner[i]) {
				continue;
			}
			let key = this._selectedRows.keyList._inner[i];
			let value = this._selectedRows.valueList._inner[i];
			if (value == index) {
				toRemoveKeys.add(key);
				toRemoveIndexes.add(value);
			}
		}
		for (let i1 = 0; i1 < toRemoveKeys.count; i1++) {
			this.unselectRow(toRemoveKeys._inner[i1], toRemoveIndexes._inner[i1], true);
		}
	}
	invalidateColumnMap(): void {
		this._isColumnMapDirty = true;
	}
	private buildColumnMap(): void {
		this._columnIdToIndexMap.clear();
		this._columnIndexToIdMap.clear();
		for (let i = 0; i < this._grid.actualColumns.count; i++) {
			this._columnIdToIndexMap.add(this._grid.actualColumns._inner[i].uniqueId, i);
			this._columnIndexToIdMap.add(i, this._grid.actualColumns._inner[i].uniqueId);
		}
	}
	private invalidateSelectedRows(): void {
		let previousRows: List$1<number> = new List$1<number>(Number_$type, 0);
		let currentRows: HashSet$1<number> = new HashSet$1<number>(Number_$type, 0);
		for (let i = 0; i < this._selectedRows.keyList.count; i++) {
			if (this._selectedRows.removedList._inner[i]) {
				continue;
			}
			let key = this._selectedRows.keyList._inner[i];
			previousRows.add(this._selectedRows.item(key));
			let currentRow = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), key, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
			currentRows.add_1(currentRow);
			this._selectedRows.item(key, -1);
		}
		for (let i1 = 0; i1 < previousRows.count; i1++) {
			if (!currentRows.contains(previousRows._inner[i1])) {
				this._grid.animationManager.startRowUnselectionAnimation(this._grid, previousRows._inner[i1]);
			}
		}
	}
	private invalidateSelectedCells(): void {
		let previousRows = new FastIterationDictionary$2<PrimaryKeyValue, number>((<any>PrimaryKeyValue).$type, Number_$type, 0);
		let currentRows = new FastIterationDictionary$2<PrimaryKeyValue, number>((<any>PrimaryKeyValue).$type, Number_$type, 0);
		let columns = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this._selectedCells.valueList.count; i++) {
			let key = this._selectedCells.keyList._inner[i];
			let currentRow = this._grid.adapter.indexOfVisibleItemByKey(this._grid.getResolvedPrimaryKey(), key, this._grid.getFirstVisibleIndex(), this._grid.getLastVisibleIndex());
			let value = this._selectedCells.valueList._inner[i];
			for (let j = 0; j < value.valueList.count; j++) {
				let columnId = value.keyList._inner[j];
				previousRows.add(key, this._selectedCells.item(key).item(columnId));
				currentRows.add(key, currentRow);
				columns.add(columnId);
				this._selectedCells.item(key).item(columnId, -1);
			}
		}
		for (let i1 = 0; i1 < previousRows.valueList.count; i1++) {
			let key1 = previousRows.keyList._inner[i1];
			let previousRow = previousRows.valueList._inner[i1];
			let currentRow1 = currentRows.valueList._inner[i1];
			if (previousRow > -1 && previousRow < this._grid.adapter.getRowCount()) {
				let currentItem = this._grid.actualDataSource.getItemAtIndex(previousRow);
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, currentItem);
				if (specialRow != null && specialRow.rowType == DataSourceRowType.ShiftedRow) {
					let pinnedKey = this._grid.adapter.getItemKey(this._grid.getResolvedPrimaryKey(), specialRow.targetRow);
					if (pinnedKey.equals(key1)) {
						continue;
					}
				}
			}
			if (!currentRows.valueList.contains(previousRow)) {
				this._grid.animationManager.startCellUnselectionAnimation(this._grid, previousRow, this._columnIdToIndexMap.item(columns._inner[i1]), columns._inner[i1]);
			}
		}
	}
}

/**
 * @hidden 
 */
export class SortManager extends Base {
	static $t: Type = markType(SortManager, 'SortManager');
	private _grid: Grid = null;
	private isInSetSortDirection: boolean = false;
	constructor(grid: Grid) {
		super();
		this._grid = grid;
	}
	cycleToNextSortDirectionForColumn(column: Column): boolean {
		if (null == column) {
			return false;
		}
		let columnKey: string = column.propertyPath;
		let sortDescriptions: ColumnSortDescriptionCollection = this._grid.sortDescriptions;
		let existingColumnSortDescription = this.getSortDescriptionForColumn(columnKey, sortDescriptions);
		let existingColumnSortDirection: ColumnSortDirection = null == existingColumnSortDescription ? ColumnSortDirection.None : existingColumnSortDescription.sortDirection == ListSortDirection.Ascending ? ColumnSortDirection.Ascending : ColumnSortDirection.Descending;
		let isTriState: boolean = (this._grid.headerClickAction == HeaderClickAction.SortByMultipleColumnsTriState || this._grid.headerClickAction == HeaderClickAction.SortByOneColumnOnlyTriState);
		let newColumnSortDirection: ColumnSortDirection = this.getNextSortDirection(existingColumnSortDirection, isTriState);
		this.setSortDirection(column, newColumnSortDirection);
		return true;
	}
	setSortDirection(column: Column, newColumnSortDirection: ColumnSortDirection): boolean {
		if (null == column) {
			return false;
		}
		let columnKey: string = column.propertyPath;
		let sortDescriptions: ColumnSortDescriptionCollection = this._grid.sortDescriptions;
		let existingColumnSortDescription = this.getSortDescriptionForColumn(columnKey, sortDescriptions);
		return this.setSortDirection1(columnKey, newColumnSortDirection, existingColumnSortDescription);
	}
	private setSortDirection1(columnKey: string, newColumnSortDirection: ColumnSortDirection, existingColumnSortDescription: ColumnSortDescription): boolean {
		if (this.isInSetSortDirection) {
			return false;
		}
		this.isInSetSortDirection = true;
		try {
			let sortDescriptions: ColumnSortDescriptionCollection = this._grid.sortDescriptions;
			let existingColumnSortDescriptionIndex: number = sortDescriptions.indexOf(existingColumnSortDescription);
			let gridAllowsMultiColumnSorting: boolean = (this._grid.headerClickAction == HeaderClickAction.SortByMultipleColumns || this._grid.headerClickAction == HeaderClickAction.SortByMultipleColumnsTriState);
			if (null != existingColumnSortDescription) {
				sortDescriptions.remove(existingColumnSortDescription);
			}
			if (false == gridAllowsMultiColumnSorting) {
				sortDescriptions.clear();
			}
			switch (newColumnSortDirection) {
				case ColumnSortDirection.None: break;
				case ColumnSortDirection.Descending:

				case ColumnSortDirection.Ascending:
				{
					let listSortDirection = newColumnSortDirection == ColumnSortDirection.Ascending ? ListSortDirection.Ascending : ListSortDirection.Descending;
					let newSortDescription: ColumnSortDescription = new ColumnSortDescription(2, columnKey, listSortDirection);
					if (gridAllowsMultiColumnSorting && existingColumnSortDescriptionIndex >= 0) {
						sortDescriptions.all.insert(existingColumnSortDescriptionIndex, newSortDescription);
					} else {
						sortDescriptions.add(newSortDescription);
					}
				}
				break;

			}

			return true;
		}
		finally {
			this.isInSetSortDirection = false;
		}
	}
	clearAllButPrimarySortDescription(): void {
		let sortDescriptions: ColumnSortDescriptionCollection = this._grid.sortDescriptions;
		let sortDescriptionsCount: number = sortDescriptions.all.count;
		if (sortDescriptionsCount > 1) {
			for (let i: number = sortDescriptionsCount - 1; i > 0; i--) {
				sortDescriptions.all.removeAt(i);
			}
		}
	}
	private getSortDescriptionForColumn(columnKey: string, sortDescriptions: ColumnSortDescriptionCollection): ColumnSortDescription {
		if (null == sortDescriptions || sortDescriptions.all.count < 1) {
			return null;
		}
		for (let i = 0; i < sortDescriptions.all.count; i++) {
			let sortDescription: ColumnSortDescription = sortDescriptions.all.item(i);
			if (sortDescription.propertyPath == columnKey) {
				return sortDescription;
			}
		}
		return null;
	}
	private getNextSortDirection(existingColumnSortDirection: ColumnSortDirection, isTriState: boolean): ColumnSortDirection {
		if (isTriState) {
			switch (existingColumnSortDirection) {
				case ColumnSortDirection.None: return ColumnSortDirection.Ascending;
				case ColumnSortDirection.Ascending: return ColumnSortDirection.Descending;
				case ColumnSortDirection.Descending: return ColumnSortDirection.None;
			}

		} else {
			switch (existingColumnSortDirection) {
				case ColumnSortDirection.None:

				case ColumnSortDirection.Descending: return ColumnSortDirection.Ascending;
				default: return ColumnSortDirection.Descending;
			}

		}
		return ColumnSortDirection.None;
	}
}

/**
 * @hidden 
 */
export interface IDataAdapter { 
	setDataSource(dataSource: IDataSource): void;
getItemForKey(key: PrimaryKeyValue): any;
getItemKey(primaryKey: string[], item: any): PrimaryKeyValue;
getRowKey(primaryKey: string[], rowIndex: number): PrimaryKeyValue;
getRowCount(): number;
getSectionCount(): number;
getStickyRows(): number[];
getStickyRowsInRange(firstVisibleIndex: number, lastVisibleIndex: number): number[];
getStickRowPriority(row: number): number;
isExclusivelySticky(row: number): boolean;
pinRow(key: PrimaryKeyValue): void;
unpinRow(key: PrimaryKeyValue): void;
clearPinnedRows(): void;
isRowPinned(row: number): boolean;
firstVisibleIndexRequested: number;
lastVisibleIndexRequested: number;
indexOfKey(key: PrimaryKeyValue): number;
fastGetItemIndexForKey(primaryKey: string[], key: PrimaryKeyValue, startIndex: number, endIndex: number): number;
indexOfVisibleItemByKey(primaryKey: string[], key: PrimaryKeyValue, startIndex: number, endIndex: number): number;
getDataRow(path: CellPath): number;
resolveValue(fullRow: number, key: string): any;
resolveValueForPath(controller: Grid, path: CellPath): any;
resolveRow(fullRow: number): any;
resolveValueForDataRow(dataRow: number): any;
resolveValueForRow(path: CellPath): any;
getSectionForRow(row: number): number;
getRowPathForRow(row: number): RowPath;
isPlaceholderValue(path: CellPath): boolean;
isPlaceholderItem(row: number): boolean;
getRowType(row: number): DataSourceRowType;
isRowSpanning(rowType: DataSourceRowType): boolean;
getRowIndent(row: number): number;
getRootSummaryRowCount(): number;
}

/**
 * @hidden 
 */
export let IDataAdapter_$type = new Type(null, 'IDataAdapter');

/**
 * @hidden 
 */
export class DataAdapter extends Base implements INotifyPropertyChanged, IDataAdapter {
	static $t: Type = markType(DataAdapter, 'DataAdapter', (<any>Base).$type, [INotifyPropertyChanged_$type, IDataAdapter_$type]);
	private _groups: ISectionInformation[] = null;
	private _sectionMap: Dictionary$2<any, number> = new Dictionary$2<any, number>((<any>Base).$type, Number_$type, 0);
	private _cachedPinnedRows: List$1<PrimaryKeyValue> = new List$1<PrimaryKeyValue>((<any>PrimaryKeyValue).$type, 0);
	private _columnController: ColumnController = null;
	get columnController(): ColumnController {
		return this._columnController;
	}
	set columnController(value: ColumnController) {
		this._columnController = value;
	}
	constructor(columnController: ColumnController) {
		super();
		this.columnController = columnController;
	}
	private _dataSource: IDataSource = null;
	get dataSource(): IDataSource {
		return this._dataSource;
	}
	set dataSource(value: IDataSource) {
		let oldValue = this._dataSource;
		this._dataSource = value;
		if (this._dataSource != oldValue) {
			this.onPropertyChanged("DataSource", oldValue, this._dataSource);
		}
	}
	setDataSource(dataSource: IDataSource): void {
		this.dataSource = dataSource;
	}
	getItemForKey(key: PrimaryKeyValue): any {
		let index = this.indexOfKey(key);
		if (index == -1) {
			if (key.value != null && key.value.length == 1) {
				return key.value[0];
			}
			return null;
		}
		return this.dataSource.getItemAtIndex(index);
	}
	getItemKey(primaryKey: string[], item_: any): PrimaryKeyValue {
		let isSpecialRow: boolean = <boolean>(item_ != null && item_.$$isSpecialRow !== undefined);
		if (primaryKey == null) {
			if (item_ == null) {
				return null;
			}
			return PrimaryKeyValue.createIdentityKey(item_);
		}
		if (isSpecialRow) {
			let specialRow = <DataSourceSpecialRow>item_;
			if (this.dataSource.isSectionContentVisible || !this.dataSource.isSectionHeaderNormalRow || specialRow.rowType != DataSourceRowType.SectionHeader) {
				return PrimaryKeyValue.createIdentityKey(item_);
			} else if (specialRow.rowType == DataSourceRowType.SectionHeader) {
				let keys = specialRow.getSectionKeys();
				for (let i = 0; i < keys.length; i++) {
					for (let j = 0; j < primaryKey.length; j++) {
						if (primaryKey[j] != keys[i]) {
							return PrimaryKeyValue.createIdentityKey(item_);
						}
					}
				}
			}
		}
		let primaryKeyValue: any[] = <any[]>new Array(primaryKey.length);
		for (let i1 = 0; i1 < primaryKey.length; i1++) {
			primaryKeyValue[i1] = this.dataSource.getItemProperty(item_, primaryKey[i1]);
		}
		return new PrimaryKeyValue(primaryKey, primaryKeyValue);
	}
	getRowKey(primaryKey: string[], rowIndex: number): PrimaryKeyValue {
		if (this.dataSource == null) {
			return null;
		}
		if (rowIndex < 0 || rowIndex > this.dataSource.actualCount - 1) {
			return null;
		}
		let item = this.dataSource.getItemAtIndex(rowIndex);
		if (item == null) {
			return null;
		}
		return this.getItemKey(primaryKey, item);
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyChangedOverride(propertyName, oldValue, newValue);
	}
	protected propertyChangedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case "DataSource":
			this._groups = null;
			this._sectionMap.clear();
			if (this.dataSource != null) {
				if (this._groups == null) {
					this._groups = <DefaultSectionInformation[]>new Array(1);
					this._groups[0] = new DefaultSectionInformation(0, this._dataSource.actualCount, null, null, null);
				}
				for (let i = 0; i < this._groups.length; i++) {
					if (this._groups[i].groupKeyValues != null) {
						this._sectionMap.addItem(this._groups[i].groupKeyValues, i);
					}
				}
				for (let i1 = 0; i1 < this._cachedPinnedRows.count; i1++) {
					this._dataSource.pinRow(this._cachedPinnedRows._inner[i1].value);
				}
				this._cachedPinnedRows.clear();
			}
			break;

		}

	}
	getRowCount(): number {
		return this.getRowCountForSection(0);
	}
	indexOfItemWithKey(key: PrimaryKeyValue, item: any): number {
		if (this._dataSource == null) {
			return -1;
		}
		if (this._dataSource.actualPrimaryKey != null && this._dataSource.isKeyIndexLookupSupported) {
			return this.indexOfKey(key);
		}
		if (this._dataSource.isItemIndexLookupSupported) {
			return this._dataSource.indexOfItem(item);
		}
		return -1;
	}
	indexOfKey(key: PrimaryKeyValue): number {
		if (this._dataSource == null) {
			return -1;
		}
		if (this._dataSource.actualPrimaryKey != null && this._dataSource.isKeyIndexLookupSupported) {
			return this._dataSource.indexOfKey(key.value);
		}
		return -1;
	}
	fastGetItemIndexForKey(primaryKey: string[], key: PrimaryKeyValue, startIndex: number, endIndex: number): number {
		let ret = this.indexOfVisibleItemByKey(primaryKey, key, startIndex, endIndex);
		if (ret >= 0) {
			return ret;
		}
		return this.indexOfKey(key);
	}
	indexOfVisibleItemByKey(primaryKey: string[], key: PrimaryKeyValue, startIndex: number, endIndex: number): number {
		if (this._dataSource == null) {
			return -1;
		}
		for (let i = startIndex; i <= endIndex; i++) {
			if (i > this._dataSource.actualCount - 1) {
				break;
			}
			let item = this._dataSource.getItemAtIndex(i);
			if (item == null) {
				continue;
			}
			let currentKey = this.getItemKey(primaryKey, item);
			if (currentKey == null) {
				continue;
			}
			if (currentKey.value != null && currentKey.value.length == 1 && getInstanceType(currentKey.value[0]) == (<any>DataSourceSpecialRow).$type && key.value != null && key.value.length == 1 && getInstanceType(key.value[0]) == (<any>DataSourceSpecialRow).$type) {
				let specialRow1 = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, currentKey.value[0]);
				let specialRow2 = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, key.value[0]);
				if (specialRow1.rowType == specialRow2.rowType && specialRow1.targetRow == specialRow2.targetRow) {
					return i;
				}
			}
			if (currentKey.equals(key)) {
				return i;
			}
		}
		return -1;
	}
	getRowCountForSection(section: number): number {
		if (this._dataSource == null) {
			return 0;
		}
		return this._dataSource.actualCount;
	}
	getSectionCount(): number {
		if (this._groups == null) {
			return 0;
		}
		return this._groups.length;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private normalizePath(path: CellPath): CellPath {
		return path;
	}
	getDataRow(path: CellPath): number {
		if (path == null) {
			return -1;
		}
		path = this.normalizePath(path);
		if (this._groups == null || this._groups.length < 1) {
			if (this._dataSource.actualCount > path.row) {
				return path.row;
			}
		} else {
			let sectionOffset = this._groups[path.section].startIndex;
			let fullRow = sectionOffset + path.row;
			if (fullRow < 0 || fullRow >= this._dataSource.actualCount) {
				return -1;
			}
			return fullRow;
		}
		return -1;
	}
	resolveValue(fullRow: number, key: string): any {
		if (fullRow < 0 || fullRow > this._dataSource.actualCount - 1) {
			return null;
		}
		if (key != null && key.length == 1 && key.charAt(0) == '.') {
			return this._dataSource.getItemAtIndex(fullRow);
		}
		return this._dataSource.getItemPropertyAtIndex(fullRow, key);
	}
	resolveValueForPath(controller: Grid, path: CellPath): any {
		let key: string = null;
		if (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
			let rowType = this._dataSource.getRowType(path.row);
			let valuePath = this._dataSource.getMainValuePath(rowType);
			key = valuePath;
		} else {
			let col = controller.getContainingColumn(path);
			key = col.propertyPath;
		}
		return this.resolveValue(path.row, key);
	}
	resolveRow(fullRow: number): any {
		if (fullRow < 0 || fullRow > this._dataSource.actualCount - 1) {
			return null;
		}
		return this._dataSource.getItemAtIndex(fullRow);
	}
	resolveValueForDataRow(dataRow: number): any {
		if (dataRow < 0 || dataRow > this._dataSource.actualCount - 1) {
			return null;
		}
		return this._dataSource.getItemAtIndex(dataRow);
	}
	resolveValueForRow(path: CellPath): any {
		path = this.normalizePath(path);
		if (path == null) {
			return null;
		}
		let dataRow: number = this.getDataRow(path);
		if (dataRow < 0 || dataRow > this._dataSource.actualCount - 1) {
			return null;
		}
		return this._dataSource.getItemAtIndex(dataRow);
	}
	getSectionForRow(row: number): number {
		if (this._groups == null || this._groups.length < 2) {
			return 0;
		}
		for (let i = 0; i < this._groups.length; i++) {
			if (i < this._groups.length - 1) {
				if (row > this._groups[i + 1].startIndex) {
					continue;
				}
			}
			return i;
		}
		return this._groups.length - 1;
	}
	getRowPathForRow(row: number): RowPath {
		let section = this.getSectionForRow(row);
		return new RowPath(section, row - this._groups[section].startIndex);
	}
	private _firstVisibleIndexRequested: number = 0;
	get firstVisibleIndexRequested(): number {
		return this._firstVisibleIndexRequested = 0;
	}
	set firstVisibleIndexRequested(value: number) {
		this._firstVisibleIndexRequested = value;
		if (this._dataSource != null) {
			this._dataSource.firstVisibleIndexRequested = this._firstVisibleIndexRequested;
		}
	}
	private _lastVisibleIndexRequested: number = 0;
	get lastVisibleIndexRequested(): number {
		return this._lastVisibleIndexRequested = 0;
	}
	set lastVisibleIndexRequested(value: number) {
		this._lastVisibleIndexRequested = value;
		if (this._dataSource != null) {
			this._dataSource.lastVisibleIndexRequested = this._lastVisibleIndexRequested;
		}
	}
	isPlaceholderValue(path: CellPath): boolean {
		if (this._dataSource == null) {
			return false;
		}
		let dataRow: number = this.getDataRow(path);
		if (dataRow < 0 || dataRow > this._dataSource.actualCount - 1) {
			return false;
		}
		return this._dataSource.isPlaceholderItem(dataRow);
	}
	isPlaceholderItem(row: number): boolean {
		if (this._dataSource == null) {
			return false;
		}
		return this._dataSource.isPlaceholderItem(row);
	}
	getRowType(row: number): DataSourceRowType {
		if (this._dataSource == null) {
			return DataSourceRowType.Normal;
		}
		return this._dataSource.getRowType(row);
	}
	getStickyRows(): number[] {
		if (this._dataSource == null) {
			return null;
		}
		return this._dataSource.getStickyRows();
	}
	getStickyRowsInRange(firstRowIndex: number, lastRowIndex: number): number[] {
		if (this._dataSource == null) {
			return null;
		}
		return this._dataSource.getStickyRowsInRange(firstRowIndex, lastRowIndex);
	}
	getStickRowPriority(row: number): number {
		if (this._dataSource == null) {
			return -1;
		}
		return this._dataSource.getStickyRowPriority(row);
	}
	isExclusivelySticky(row: number): boolean {
		if (this._dataSource == null) {
			return false;
		}
		return this._dataSource.isExclusivelySticky(row);
	}
	isRowSpanning(rowType: DataSourceRowType): boolean {
		if (this._dataSource == null) {
			return false;
		}
		return this._dataSource.isRowSpanning(rowType);
	}
	pinRow(key: PrimaryKeyValue): void {
		if (this._dataSource == null) {
			this._cachedPinnedRows.add(key);
			return;
		}
		this._dataSource.pinRow(key.value);
	}
	unpinRow(key: PrimaryKeyValue): void {
		if (this._dataSource == null) {
			for (let i: number = 0; i < this._cachedPinnedRows.count; i++) {
				if (this._cachedPinnedRows._inner[i].equals(key)) {
					this._cachedPinnedRows.remove(this._cachedPinnedRows._inner[i]);
					break;
				}
			}
			return;
		}
		this._dataSource.unpinRow(key.value);
	}
	clearPinnedRows(): void {
		if (this._dataSource == null) {
			return;
		}
		this._dataSource.clearPinnedRows();
	}
	isRowPinned(row: number): boolean {
		if (this._dataSource == null) {
			return false;
		}
		return this._dataSource.isRowPinned(row);
	}
	getRowIndent(row: number): number {
		if (this._dataSource == null) {
			return 0;
		}
		return this._dataSource.getRowLevel(row);
	}
	getRootSummaryRowCount(): number {
		if (this._dataSource == null) {
			return 0;
		}
		return this._dataSource.getRootSummaryRowCount();
	}
}

/**
 * @hidden 
 */
export class ColumnMovingSeparator extends DefinitionBase {
	static $t: Type = markType(ColumnMovingSeparator, 'ColumnMovingSeparator', (<any>DefinitionBase).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "columnMovingSeparator";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new VerticalSeparatorCellModel();
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultColumnMoveSeparatorBackground;
	}
	static readonly separatorWidthPropertyName: string = "SeparatorWidth";
	private _separatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(2));
	get separatorWidth(): number {
		return this._separatorWidth;
	}
	set separatorWidth(value: number) {
		let oldValue = this._separatorWidth;
		this._separatorWidth = value;
		if (this._separatorWidth != oldValue) {
			this.onPropertyChanged(ColumnMovingSeparator.separatorWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._separatorWidth);
		}
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.columnMovingSeparatorBackground != null) {
				this.actualBackground = this.grid.columnMovingSeparatorBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.columnMovingSeparatorBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class DateTimeColumn extends Column {
	static $t: Type = markType(DateTimeColumn, 'DateTimeColumn', (<any>Column).$type);
	private _formatter: DateTimeColumnValueFormatter = new DateTimeColumnValueFormatter();
	static readonly dateTimeFormatPropertyName: string = "DateTimeFormat";
	private _dateTimeFormat: DateTimeFormats = DateTimeFormats.DateShort;
	get dateTimeFormat(): DateTimeFormats {
		return this._dateTimeFormat;
	}
	set dateTimeFormat(value: DateTimeFormats) {
		let oldValue = this._dateTimeFormat;
		this._dateTimeFormat = value;
		if (this._dateTimeFormat != oldValue) {
			this.onPropertyChanged(DateTimeColumn.dateTimeFormatPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<DateTimeFormats>(DateTimeFormats_$type, oldValue), enumGetBox<DateTimeFormats>(DateTimeFormats_$type, this._dateTimeFormat));
		}
	}
	static readonly formatStringPropertyName: string = "FormatString";
	private _formatString: string = null;
	get formatString(): string {
		return this._formatString;
	}
	set formatString(value: string) {
		let oldValue = this._formatString;
		this._formatString = value;
		if (this._formatString != oldValue) {
			this.onPropertyChanged(DateTimeColumn.formatStringPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._formatString);
		}
	}
	static readonly formatOverridePropertyName: string = "FormatOverride";
	private _formatOverride: any = null;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		let oldValue = this._formatOverride;
		this._formatOverride = value;
		if (this._formatOverride != oldValue) {
			this.onPropertyChanged(DateTimeColumn.formatOverridePropertyName, CellPropertyAnimationType.ObjectValue, oldValue, this._formatOverride);
		}
	}
	protected propertyUpdatedOverride(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, propertyAnimationType, oldValue, newValue);
		switch (propertyName) {
			case DateTimeColumn.dateTimeFormatPropertyName:
			this._formatter.invalidateFormat();
			break;

		}

	}
	constructor() {
		super();
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new DateTimeCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "datetime";
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let dateTimeModel = <DateTimeCellModel>cellModel;
		dateTimeModel.dateTimeValue = this.extractDateTime(resolvedValue);
		dateTimeModel.formatter = this._formatter;
		this._formatter.ensureFormat(dateTimeModel);
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		let dateTimeModel = <DateTimeCellModel>cellModel;
		dateTimeModel.dateTimeFormat = this.dateTimeFormat;
		dateTimeModel.formatOverride = this.formatOverride;
	}
	private extractDateTime(value: any): Date {
		if (value == null) {
			return dateMinValue();
		}
		if (typeCast<Date>(Date_$type, value) !== null) {
			return <Date>value;
		}
		return dateMinValue();
	}
}

/**
 * @hidden 
 */
export interface IExternalDefinitionBase { 
	resolveStyleKey(key: string, path: CellPath, grid: Grid, resolvedValue: any): string;
}

/**
 * @hidden 
 */
export let IExternalDefinitionBase_$type = new Type(null, 'IExternalDefinitionBase');

/**
 * @hidden 
 */
export class DataBindingEventArgs extends EventArgs {
	static $t: Type = markType(DataBindingEventArgs, 'DataBindingEventArgs', (<any>EventArgs).$type);
	private _resolvedValue: any = null;
	get resolvedValue(): any {
		return this._resolvedValue;
	}
	set resolvedValue(value: any) {
		this._resolvedValue = value;
	}
	private _rowObject: any = null;
	get rowObject(): any {
		return this._rowObject;
	}
	set rowObject(value: any) {
		this._rowObject = value;
	}
	private _cellInfo: CellModel = null;
	get cellInfo(): CellModel {
		return this._cellInfo;
	}
	set cellInfo(value: CellModel) {
		this._cellInfo = value;
	}
}

/**
 * @hidden 
 */
export abstract class Header extends DefinitionBase {
	static $t: Type = markType(Header, 'Header', (<any>DefinitionBase).$type);
	constructor() {
		super();
		this.actualSortIndicatorColor = this.getDefaultSortIndicatorColor();
	}
	protected getDefaultTextColor(): Brush {
		return GridStyleRepository.headerTextColor;
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.headerBackgroundColor;
	}
	protected getDefaultSortIndicatorColor(): Brush {
		return GridStyleRepository.sortIndicatorColor;
	}
	protected getDefaultFontInfo(): FontInfo {
		return GridStyleRepository.headerTextCellFontInfo;
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
		this.updateTextColor();
		this.updateTextStyle();
		this.updateSortIndicatorColor();
		this.updateSortIndicatorStyle();
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.headerBackground != null) {
				this.actualBackground = this.grid.headerBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updateTextColor(): void {
		if (this.textColor == null) {
			if (this.grid != null && this.grid.headerTextColor != null) {
				this.actualTextColor = this.grid.headerTextColor;
				return;
			}
			this.actualTextColor = this.getDefaultTextColor();
		} else {
			this.actualTextColor = this.textColor;
		}
	}
	protected updateTextStyle(): void {
		if (this.textStyle == null) {
			if (this.grid != null && this.grid.headerTextStyle != null) {
				this.actualFontInfo = this.grid.headerTextStyle;
				return;
			}
			this.actualFontInfo = this.getDefaultFontInfo();
		} else {
			this.actualFontInfo = this.textStyle;
		}
	}
	protected updateSortIndicatorColor(): void {
		if (this.sortIndicatorColor == null) {
			if (this.grid != null && this.grid.headerSortIndicatorColor != null) {
				this.actualSortIndicatorColor = this.grid.headerSortIndicatorColor;
				return;
			}
			this.actualSortIndicatorColor = this.getDefaultSortIndicatorColor();
		} else {
			this.actualSortIndicatorColor = this.sortIndicatorColor;
		}
	}
	protected updateSortIndicatorStyle(): void {
		if (this.sortIndicatorStyle == SortIndicatorStyle.Unset) {
			if (this.grid != null) {
				this.actualSortIndicatorStyle = this.grid.headerSortIndicatorStyle;
				return;
			}
			this.actualSortIndicatorStyle = SortIndicatorStyle.Default;
		} else {
			this.actualSortIndicatorStyle = this.sortIndicatorStyle;
		}
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.headerBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case Grid.headerTextColorPropertyName:
			this.updateTextColor();
			break;

			case Grid.headerTextStylePropertyName:
			this.updateTextStyle();
			break;

			case Grid.headerSortIndicatorColorPropertyName:
			this.updateSortIndicatorColor();
			break;

			case Grid.headerSortIndicatorStylePropertyName:
			this.updateSortIndicatorStyle();
			break;

		}

	}
	static readonly sortIndicatorColorPropertyName: string = "SortIndicatorColor";
	private _sortIndicatorColor_1: Brush = null;
	private get _sortIndicatorColor(): Brush {
		return this._sortIndicatorColor_1;
	}
	private set _sortIndicatorColor(value: Brush) {
		this._sortIndicatorColor_1 = value;
	}
	get sortIndicatorColor(): Brush {
		return this._sortIndicatorColor;
	}
	set sortIndicatorColor(value: Brush) {
		let oldValue = this._sortIndicatorColor;
		this._sortIndicatorColor = value;
		if (this._sortIndicatorColor != oldValue) {
			this.onPropertyChanged(Header.sortIndicatorColorPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._sortIndicatorColor);
		}
	}
	static readonly actualSortIndicatorColorPropertyName: string = "ActualSortIndicatorColor";
	private _actualSortIndicatorColor_1: Brush = null;
	private get _actualSortIndicatorColor(): Brush {
		return this._actualSortIndicatorColor_1;
	}
	private set _actualSortIndicatorColor(value: Brush) {
		this._actualSortIndicatorColor_1 = value;
	}
	get actualSortIndicatorColor(): Brush {
		return this._actualSortIndicatorColor;
	}
	set actualSortIndicatorColor(value: Brush) {
		let oldValue = this._actualSortIndicatorColor;
		this._actualSortIndicatorColor = value;
		if (this._actualSortIndicatorColor != oldValue) {
			this.onPropertyChanged(Header.actualSortIndicatorColorPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualSortIndicatorColor);
		}
	}
	static readonly sortIndicatorStylePropertyName: string = "SortIndicatorStyle";
	private _sortIndicatorStyle: SortIndicatorStyle = SortIndicatorStyle.Unset;
	get sortIndicatorStyle(): SortIndicatorStyle {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: SortIndicatorStyle) {
		let oldValue = this._sortIndicatorStyle;
		this._sortIndicatorStyle = value;
		if (this._sortIndicatorStyle != oldValue) {
			this.onPropertyChanged(Header.sortIndicatorStylePropertyName, CellPropertyAnimationType.None, enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, oldValue), enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this._sortIndicatorStyle));
		}
	}
	static readonly actualSortIndicatorStylePropertyName: string = "ActualSortIndicatorStyle";
	private _actualSortIndicatorStyle: SortIndicatorStyle = SortIndicatorStyle.Unset;
	get actualSortIndicatorStyle(): SortIndicatorStyle {
		return this._actualSortIndicatorStyle;
	}
	set actualSortIndicatorStyle(value: SortIndicatorStyle) {
		let oldValue = this._actualSortIndicatorStyle;
		this._actualSortIndicatorStyle = value;
		if (this._actualSortIndicatorStyle != oldValue) {
			this.onPropertyChanged(Header.actualSortIndicatorStylePropertyName, CellPropertyAnimationType.None, enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, oldValue), enumGetBox<SortIndicatorStyle>(SortIndicatorStyle_$type, this._actualSortIndicatorStyle));
		}
	}
	static readonly paddingLeftPropertyName: string = "PaddingLeft";
	private _paddingLeft: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		let oldValue = this._paddingLeft;
		this._paddingLeft = value;
		if (this._paddingLeft != oldValue) {
			this.onPropertyChanged(Header.paddingLeftPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingLeft);
		}
	}
	static readonly paddingTopPropertyName: string = "PaddingTop";
	private _paddingTop: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		let oldValue = this._paddingTop;
		this._paddingTop = value;
		if (this._paddingTop != oldValue) {
			this.onPropertyChanged(Header.paddingTopPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingTop);
		}
	}
	static readonly paddingRightPropertyName: string = "PaddingRight";
	private _paddingRiht: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingRight(): number {
		return this._paddingRiht;
	}
	set paddingRight(value: number) {
		let oldValue = this._paddingRiht;
		this._paddingRiht = value;
		if (this._paddingRiht != oldValue) {
			this.onPropertyChanged(Header.paddingRightPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingRiht);
		}
	}
	static readonly paddingBottomPropertyName: string = "PaddingBottom";
	private _paddingBottom: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		let oldValue = this._paddingBottom;
		this._paddingBottom = value;
		if (this._paddingBottom != oldValue) {
			this.onPropertyChanged(Header.paddingBottomPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingBottom);
		}
	}
	protected replayUserProperty(propertyName: string): boolean {
		if (super.replayUserProperty(propertyName)) {
			return true;
		}
		if (stringStartsWith(propertyName, "Actual")) {
			return false;
		}
		switch (propertyName) {
			case Header.paddingBottomPropertyName:
			this.onPropertyChanged(Header.paddingBottomPropertyName, CellPropertyAnimationType.DoubleValue, this.paddingBottom, this.paddingBottom);
			return true;

			case Header.paddingLeftPropertyName:
			this.onPropertyChanged(Header.paddingLeftPropertyName, CellPropertyAnimationType.DoubleValue, this.paddingLeft, this.paddingLeft);
			return true;

			case Header.paddingRightPropertyName:
			this.onPropertyChanged(Header.paddingRightPropertyName, CellPropertyAnimationType.DoubleValue, this.paddingRight, this.paddingRight);
			return true;

			case Header.paddingTopPropertyName:
			this.onPropertyChanged(Header.paddingTopPropertyName, CellPropertyAnimationType.DoubleValue, this.paddingTop, this.paddingTop);
			return true;

			case Header.sortIndicatorColorPropertyName:
			this.onPropertyChanged(Header.actualSortIndicatorColorPropertyName, CellPropertyAnimationType.BrushValue, this.actualSortIndicatorColor, this.actualSortIndicatorColor);
			return true;

		}

		return false;
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		cellModel.paddingLeft = this.paddingLeft;
		cellModel.paddingTop = this.paddingTop;
		cellModel.paddingRight = this.paddingRight;
		cellModel.paddingBottom = this.paddingBottom;
		cellModel.sortIndicatorColor = this.actualSortIndicatorColor;
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let column = grid.getContainingColumn(cellModel.path);
		if (column != null) {
			if (cellModel.path.isHeaderCell && column.hasNamedHeaderValues()) {
				let internalHeaderNamedValues = column.internalNamedHeaderValues;
				let keyList = internalHeaderNamedValues.keyList;
				let count = keyList.count;
				let removedlist = internalHeaderNamedValues.removedList;
				let valueList = internalHeaderNamedValues.valueList;
				for (let i = 0; i < count; i++) {
					if (removedlist._inner[i]) {
						continue;
					}
					cellModel.setNamedValue(keyList._inner[i], valueList._inner[i]);
				}
			}
		}
	}
}

/**
 * @hidden 
 */
export class ColumnResizingSeparator extends DefinitionBase {
	static $t: Type = markType(ColumnResizingSeparator, 'ColumnResizingSeparator', (<any>DefinitionBase).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "columnResizingSeparator";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new VerticalSeparatorCellModel();
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.rowSeparatorBackgroundColor;
	}
	static readonly separatorWidthPropertyName: string = "SeparatorWidth";
	private _separatorWidth: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get separatorWidth(): number {
		return this._separatorWidth;
	}
	set separatorWidth(value: number) {
		let oldValue = this._separatorWidth;
		this._separatorWidth = value;
		if (this._separatorWidth != oldValue) {
			this.onPropertyChanged(ColumnResizingSeparator.separatorWidthPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._separatorWidth);
		}
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.columnResizingSeparatorBackground != null) {
				this.actualBackground = this.grid.columnResizingSeparatorBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.columnResizingSeparatorBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class HeaderSeparator extends DefinitionBase {
	static $t: Type = markType(HeaderSeparator, 'HeaderSeparator', (<any>DefinitionBase).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "headerSeparator";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new VerticalSeparatorCellModel();
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.rowSeparatorBackgroundColor;
	}
	protected getDefaultSeparatorWidth(): number {
		return <number>truncate(DeviceUtils.toPixelUnits(1));
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
		this.updateHitTestBorder();
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.headerSeparatorBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

		}

	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.headerSeparatorBackground != null) {
				this.actualBackground = this.grid.headerSeparatorBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	private updateHitTestBorder(): void {
		if (this.grid != null) {
			this.actualBorder = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(0, 0, 0, 0);
				return $ret;
			})());
			let borderWidth = this.grid.calculateHeaderSeparatorBorderWidth(this.grid.headerSeparatorWidth);
			this.borderLeftWidth = borderWidth;
			this.borderRightWidth = borderWidth;
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		cellModel.actionManager.isLeaveActionDesired = true;
	}
}

/**
 * @hidden 
 */
export class ImageColumn extends Column {
	static $t: Type = markType(ImageColumn, 'ImageColumn', (<any>Column).$type);
	static readonly imageStretchOptionPropertyName: string = "ImageStretchOption";
	private _imageStretchOption: ImageStretchOptions = ImageStretchOptions.Uniform;
	get imageStretchOption(): ImageStretchOptions {
		return this._imageStretchOption;
	}
	set imageStretchOption(value: ImageStretchOptions) {
		let oldValue = this._imageStretchOption;
		this._imageStretchOption = value;
		if (this._imageStretchOption != oldValue) {
			this.onPropertyChanged(ImageColumn.imageStretchOptionPropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<ImageStretchOptions>(ImageStretchOptions_$type, oldValue), enumGetBox<ImageStretchOptions>(ImageStretchOptions_$type, this._imageStretchOption));
		}
	}
	static readonly imageResourceTypePropertyName: string = "ImageResourceType";
	private _imageResourceType: ImageResourceType = ImageResourceType.Unspecified;
	get imageResourceType(): ImageResourceType {
		return this._imageResourceType;
	}
	set imageResourceType(value: ImageResourceType) {
		let oldValue = this._imageResourceType;
		this._imageResourceType = value;
		if (this._imageResourceType != oldValue) {
			this.onPropertyChanged(ImageColumn.imageResourceTypePropertyName, CellPropertyAnimationType.None, enumGetBox<ImageResourceType>(ImageResourceType_$type, oldValue), enumGetBox<ImageResourceType>(ImageResourceType_$type, this._imageResourceType));
		}
	}
	constructor() {
		super();
		this.imageStretchOption = ImageStretchOptions.Uniform;
		this.actualVerticalAlignment = this.determineVerticalAlignment();
		this.actualHorizontalAlignment = this.determineHorizontalAlignment();
	}
	protected determineVerticalAlignment(): CellContentVerticalAlignment {
		if (this.verticalAlignment != CellContentVerticalAlignment.Auto) {
			return this.verticalAlignment;
		}
		return CellContentVerticalAlignment.Stretch;
	}
	protected resolveHeaderAutoHorizontalAlignment(): CellContentHorizontalAlignment {
		if (this.actualHorizontalAlignment == CellContentHorizontalAlignment.Stretch) {
			return CellContentHorizontalAlignment.Center;
		}
		return super.resolveHeaderAutoHorizontalAlignment();
	}
	protected resolveHeaderAutoVerticalAlignment(): CellContentVerticalAlignment {
		if (this.actualVerticalAlignment == CellContentVerticalAlignment.Stretch) {
			return CellContentVerticalAlignment.Center;
		}
		return super.resolveHeaderAutoVerticalAlignment();
	}
	protected determineHorizontalAlignment(): CellContentHorizontalAlignment {
		if (this.horizontalAlignment != CellContentHorizontalAlignment.Auto) {
			return this.horizontalAlignment;
		}
		return CellContentHorizontalAlignment.Stretch;
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new ImageCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "image";
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let imageModel = <ImageCellModel>cellModel;
		if (resolvedValue != null) {
			imageModel.renderValue = resolvedValue.toString();
			imageModel.imageStretchOption = this.imageStretchOption;
			imageModel.imageResourceType = this.imageResourceType;
			imageModel.imagePath = this.extractImagePath(resolvedValue);
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
	}
	private extractImagePath(value: any): string {
		if (value == null) {
			return "";
		}
		if (typeof value === 'string') {
			return <string>value;
		}
		return value.toString();
	}
}

/**
 * @hidden 
 */
export class NumericColumn extends Column {
	static $t: Type = markType(NumericColumn, 'NumericColumn', (<any>Column).$type);
	constructor() {
		super();
		this.actualHorizontalAlignment = this.determineHorizontalAlignment();
	}
	protected determineHorizontalAlignment(): CellContentHorizontalAlignment {
		if (this.horizontalAlignment != CellContentHorizontalAlignment.Auto) {
			return this.horizontalAlignment;
		}
		return CellContentHorizontalAlignment.Right;
	}
	static readonly negativePrefixPropertyName: string = "NegativePrefix";
	private _negativePrefix: string = null;
	get negativePrefix(): string {
		return this._negativePrefix;
	}
	set negativePrefix(value: string) {
		let oldValue = this._negativePrefix;
		this._negativePrefix = value;
		if (this._negativePrefix != oldValue) {
			this.onPropertyChanged(NumericColumn.negativePrefixPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._negativePrefix);
		}
	}
	static readonly positivePrefixPropertyName: string = "PositivePrefix";
	private _positivePrefix: string = null;
	get positivePrefix(): string {
		return this._positivePrefix;
	}
	set positivePrefix(value: string) {
		let oldValue = this._positivePrefix;
		this._positivePrefix = value;
		if (this._positivePrefix != oldValue) {
			this.onPropertyChanged(NumericColumn.positivePrefixPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._positivePrefix);
		}
	}
	static readonly negativeSuffixPropertyName: string = "NegativeSuffix";
	private _negativeSuffix: string = null;
	get negativeSuffix(): string {
		return this._negativeSuffix;
	}
	set negativeSuffix(value: string) {
		let oldValue = this._negativeSuffix;
		this._negativeSuffix = value;
		if (this._negativeSuffix != oldValue) {
			this.onPropertyChanged(NumericColumn.negativeSuffixPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._negativeSuffix);
		}
	}
	static readonly positiveSuffixPropertyName: string = "PositiveSuffix";
	private _positiveSuffix: string = "";
	get positiveSuffix(): string {
		return this._positiveSuffix;
	}
	set positiveSuffix(value: string) {
		let oldValue = this._positiveSuffix;
		this._positiveSuffix = value;
		if (this._positiveSuffix != oldValue) {
			this.onPropertyChanged(NumericColumn.positiveSuffixPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._positiveSuffix);
		}
	}
	static readonly maxFractionDigitsPropertyName: string = "MaxFractionDigits";
	private _maxFractionDigits: number = 10;
	get maxFractionDigits(): number {
		return this._maxFractionDigits;
	}
	set maxFractionDigits(value: number) {
		let oldValue = this._maxFractionDigits;
		this._maxFractionDigits = value;
		if (this._maxFractionDigits != oldValue) {
			this.onPropertyChanged(NumericColumn.maxFractionDigitsPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._maxFractionDigits);
		}
	}
	static readonly minFractionDigitsPropertyName: string = "MinFractionDigits";
	private _minFractionDigits: number = 0;
	get minFractionDigits(): number {
		return this._minFractionDigits;
	}
	set minFractionDigits(value: number) {
		let oldValue = this._minFractionDigits;
		this._minFractionDigits = value;
		if (this._minFractionDigits != oldValue) {
			this.onPropertyChanged(NumericColumn.minFractionDigitsPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._minFractionDigits);
		}
	}
	static readonly minIntegerDigitsPropertyName: string = "MinIntegerDigits";
	private _minIntegerDigits: number = -1;
	get minIntegerDigits(): number {
		return this._minIntegerDigits;
	}
	set minIntegerDigits(value: number) {
		let oldValue = this._minIntegerDigits;
		this._minIntegerDigits = value;
		if (this._minIntegerDigits != oldValue) {
			this.onPropertyChanged(NumericColumn.minIntegerDigitsPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._minIntegerDigits);
		}
	}
	static readonly showGroupingSeparatorPropertyName: string = "ShowGroupingSeparator";
	private _showGroupingSeparator: boolean = false;
	get showGroupingSeparator(): boolean {
		return this._showGroupingSeparator;
	}
	set showGroupingSeparator(value: boolean) {
		let oldValue = this._showGroupingSeparator;
		this._showGroupingSeparator = value;
		if (this._showGroupingSeparator != oldValue) {
			this.onPropertyChanged(NumericColumn.showGroupingSeparatorPropertyName, CellPropertyAnimationType.BoolValue, oldValue, this._showGroupingSeparator);
		}
	}
	static readonly formatStringPropertyName: string = "FormatString";
	private _formatString: string = null;
	get formatString(): string {
		return this._formatString;
	}
	set formatString(value: string) {
		let oldValue = this._formatString;
		this._formatString = value;
		if (this._formatString != oldValue) {
			this.onPropertyChanged(NumericColumn.formatStringPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._formatString);
		}
	}
	static readonly formatOverridePropertyName: string = "FormatOverride";
	private _formatOverride: any = null;
	get formatOverride(): any {
		return this._formatOverride;
	}
	set formatOverride(value: any) {
		let oldValue = this._formatOverride;
		this._formatOverride = value;
		if (this._formatOverride != oldValue) {
			this.onPropertyChanged(NumericColumn.formatOverridePropertyName, CellPropertyAnimationType.ObjectValue, oldValue, this._formatOverride);
		}
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new NumericCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "numeric";
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let numericModel = <NumericCellModel>cellModel;
		{
			numericModel.hasDecimalValue = false;
			numericModel.numericValue = this.extractDouble(resolvedValue);
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		let numericModel = <NumericCellModel>cellModel;
		numericModel.minFractionDigits = this.minFractionDigits;
		numericModel.maxFractionDigits = this.maxFractionDigits;
		numericModel.minIntegerDigits = this.minIntegerDigits;
		numericModel.positivePrefix = this.positivePrefix;
		numericModel.negativePrefix = this.negativePrefix;
		numericModel.positiveSuffix = this.positiveSuffix;
		numericModel.negativeSuffix = this.negativeSuffix;
		numericModel.formatOverride = this.formatOverride;
		numericModel.showGroupingSeparator = this.showGroupingSeparator;
	}
	private extractDouble(value: any): number {
		if (value == null) {
			return NaN;
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'number') {
			return <number>value;
		}
		if (typeof value === 'number') {
			return <number>value;
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'string') {
			let ret: number;
			if (((() => { let $ret = tryParseNumber(<string>value, ret); ret = $ret.p1; return $ret.ret; })())) {
				return ret;
			}
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		if (typeof value === 'number') {
			return typeGetValue(value);
		}
		return NaN;
	}
}

/**
 * @hidden 
 */
export class PinnedAreaSeparator extends DefinitionBase {
	static $t: Type = markType(PinnedAreaSeparator, 'PinnedAreaSeparator', (<any>DefinitionBase).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "pinnedAreaSeparator";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return ((() => {
			let $ret = new VerticalSeparatorCellModel();
			$ret.isHitTestVisible = false;
			return $ret;
		})());
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultPinnedAreaSeparatorBackground;
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
	}
}

/**
 * @hidden 
 */
export class SectionFooter extends DefinitionBase {
	static $t: Type = markType(SectionFooter, 'SectionFooter', (<any>DefinitionBase).$type);
	protected createModelOverride(path: CellPath): CellModel {
		return new TextCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "sectionFooter";
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		this.actualBackground = GridStyleRepository.defaultSectionFooterBackground;
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
	}
}

/**
 * @hidden 
 */
export class SectionHeader extends DefinitionBase {
	static $t: Type = markType(SectionHeader, 'SectionHeader', (<any>DefinitionBase).$type);
	static readonly selectedBackgroundPropertyName: string = "SelectedBackground";
	private _selectedBackground: Brush = null;
	get selectedBackground(): Brush {
		return this._selectedBackground;
	}
	set selectedBackground(value: Brush) {
		let oldValue = this._selectedBackground;
		this._selectedBackground = value;
		if (this._selectedBackground != oldValue) {
			this.onPropertyChanged(SectionHeader.selectedBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._selectedBackground);
		}
	}
	static readonly actualSelectedBackgroundPropertyName: string = "ActualSelectedBackground";
	private _actualSelectedBackground: Brush = null;
	get actualSelectedBackground(): Brush {
		return this._actualSelectedBackground;
	}
	set actualSelectedBackground(value: Brush) {
		let oldValue = this._actualSelectedBackground;
		this._actualSelectedBackground = value;
		if (this._actualSelectedBackground != oldValue) {
			this.onPropertyChanged(SectionHeader.actualSelectedBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualSelectedBackground);
		}
	}
	static readonly paddingLeftPropertyName: string = "PaddingLeft";
	private _paddingLeft: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		let oldValue = this._paddingLeft;
		this._paddingLeft = value;
		if (this._paddingLeft != oldValue) {
			this.onPropertyChanged(SectionHeader.paddingLeftPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingLeft);
		}
	}
	static readonly paddingTopPropertyName: string = "PaddingTop";
	private _paddingTop: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		let oldValue = this._paddingTop;
		this._paddingTop = value;
		if (this._paddingTop != oldValue) {
			this.onPropertyChanged(SectionHeader.paddingTopPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingTop);
		}
	}
	static readonly paddingRightPropertyName: string = "PaddingRight";
	private _paddingRiht: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingRight(): number {
		return this._paddingRiht;
	}
	set paddingRight(value: number) {
		let oldValue = this._paddingRiht;
		this._paddingRiht = value;
		if (this._paddingRiht != oldValue) {
			this.onPropertyChanged(SectionHeader.paddingRightPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingRiht);
		}
	}
	static readonly paddingBottomPropertyName: string = "PaddingBottom";
	private _paddingBottom: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		let oldValue = this._paddingBottom;
		this._paddingBottom = value;
		if (this._paddingBottom != oldValue) {
			this.onPropertyChanged(SectionHeader.paddingBottomPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingBottom);
		}
	}
	private _isCollapsable: boolean = false;
	static readonly isCollapsablePropertyName: string = "IsCollapsable";
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		let oldValue = this._isCollapsable;
		this._isCollapsable = value;
		if (this._isCollapsable != oldValue) {
			this.onPropertyChanged(SectionHeader.isCollapsablePropertyName, CellPropertyAnimationType.BoolValue, oldValue, this._isCollapsable);
		}
	}
	private _summaryDisplayMode: GroupSummaryDisplayMode = GroupSummaryDisplayMode.None;
	static readonly summaryDisplayModePropertyName: string = "SummaryDisplayMode";
	get summaryDisplayMode(): GroupSummaryDisplayMode {
		return this._summaryDisplayMode;
	}
	set summaryDisplayMode(value: GroupSummaryDisplayMode) {
		let oldValue = this._summaryDisplayMode;
		this._summaryDisplayMode = value;
		if (this._summaryDisplayMode != oldValue) {
			this.onPropertyChanged(SectionHeader.summaryDisplayModePropertyName, CellPropertyAnimationType.EnumValue, enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, oldValue), enumGetBox<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, this._summaryDisplayMode));
		}
	}
	sectionHeaderPropertyUpdating: (sectionHeader: SectionHeader, propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any) => void = null;
	constructor() {
		super();
		this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "sectionHeader";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new SectionHeaderCellModel();
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultSectionHeaderBackground;
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let groupData: List$1<GroupData> = new List$1<GroupData>((<any>GroupData).$type, 0);
		let summaryData: List$1<SummaryData> = new List$1<SummaryData>((<any>SummaryData).$type, 0);
		let groupText: string = stringEmpty();
		let summaryText: string = stringEmpty();
		let groups: Dictionary$2<string, any> = typeCast<Dictionary$2<string, any>>((<any>Dictionary$2).$type.specialize(String_$type, (<any>Base).$type), resolvedValue);
		if (groups != null) {
			let schema = grid.actualDataSource.actualSchema;
			let index: number = 0;
			for (let group of fromEnum<KeyValuePair$2<string, any>>(groups)) {
				let description: ColumnGroupDescription = null;
				for (let i = 0; i < grid.groupDescriptions.all.count; i++) {
					if (grid.groupDescriptions.all.item(i).propertyPath == group.key) {
						description = grid.groupDescriptions.all.item(i);
						break;
					}
				}
				if (!description.hasResolvedSchema) {
					grid.resolveSchemaForGroupDescription(description);
				}
				if (index > 0) {
					groupText += ", ";
				}
				groupData.add(this.formatGroup(group.key, group.value, description, description.resolvedPropertySchema));
				groupText += groupData._inner[index].formattedText;
				index++;
			}
			if (this.summaryDisplayMode == GroupSummaryDisplayMode.List && grid.summaryDescriptions.all.count > 0) {
				let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, rowObject);
				if (specialRow != null && specialRow.summaryResults != null) {
					for (let i1 = 0; i1 < specialRow.summaryResults.length; i1++) {
						if (specialRow.summaryResults[i1] != null) {
							let associatedSummaryIndex = specialRow.summaryResults[i1].summaryIndex;
							let summaryDescription = grid.summaryDescriptions.all.item(associatedSummaryIndex);
							if (i1 > 0) {
								summaryText += ", ";
							}
							summaryData.add(this.formatSummaryResult(summaryDescription, specialRow.summaryResults[i1]));
							summaryText += summaryData._inner[i1].formattedText;
						}
					}
				}
			}
		}
		let sectionModel = typeCast<SectionHeaderCellModel>((<any>SectionHeaderCellModel).$type, cellModel);
		if (sectionModel != null) {
			sectionModel.groups = groupData.toArray();
			sectionModel.summaries = summaryData.toArray();
			sectionModel.resolvedText = groupText;
			sectionModel.resolvedSummaryText = summaryText;
			sectionModel.summaryDisplayMode = this.summaryDisplayMode;
			if (grid.selectionManager.isSelected(sectionModel)) {
				sectionModel.selectedStatus = 1;
			} else {
				sectionModel.selectedStatus = 0;
			}
			if (grid.activationManager.isActivated(sectionModel)) {
				sectionModel.activationStatus = 1;
			} else {
				sectionModel.activationStatus = 0;
			}
			sectionModel.isCollapsable = this.isCollapsable;
			sectionModel.isExpanded = grid.actualDataSource.getIsRowExpandedAtIndex(cellModel.path.row);
			sectionModel.indent = grid.adapter.getRowIndent(cellModel.path.row);
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		cellModel.selectedBackground = this.actualSelectedBackground;
		cellModel.paddingLeft = this.paddingLeft;
		cellModel.paddingTop = this.paddingTop;
		cellModel.paddingRight = this.paddingRight;
		cellModel.paddingBottom = this.paddingBottom;
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateSelectedBackgroundColor();
		this.updateBackgroundColor();
		this.updateTextColor();
		this.updateTextStyle();
		this.updateCollapsability();
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.sectionHeaderSelectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

			case Grid.sectionHeaderBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case Grid.sectionHeaderTextColorPropertyName:
			this.updateTextColor();
			break;

			case Grid.sectionHeaderTextStylePropertyName:
			this.updateTextStyle();
			break;

			case Grid.isGroupCollapsablePropertyName:
			this.updateCollapsability();
			break;

		}

	}
	updateSelectedBackgroundColor(): void {
		if (this.selectedBackground == null) {
			if (this.grid != null && this.grid.sectionHeaderSelectedBackground != null) {
				this.actualSelectedBackground = this.grid.sectionHeaderSelectedBackground;
			} else {
				this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
			}
		} else {
			this.actualSelectedBackground = this.selectedBackground;
		}
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.sectionHeaderBackground != null) {
				this.actualBackground = this.grid.sectionHeaderBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updateTextColor(): void {
		if (this.textColor == null) {
			if (this.grid != null && this.grid.sectionHeaderTextColor != null) {
				this.actualTextColor = this.grid.sectionHeaderTextColor;
				return;
			}
			this.actualTextColor = this.getDefaultTextColor();
		} else {
			this.actualTextColor = this.textColor;
		}
	}
	protected updateTextStyle(): void {
		if (this.textStyle == null) {
			if (this.grid != null && this.grid.sectionHeaderTextStyle != null) {
				this.actualFontInfo = this.grid.sectionHeaderTextStyle;
				return;
			}
			this.actualFontInfo = this.getDefaultFontInfo();
		} else {
			this.actualFontInfo = this.textStyle;
		}
	}
	updateCollapsability(): void {
		if (this.grid != null) {
			this.isCollapsable = this.grid.isGroupCollapsable;
		}
	}
	protected propertyUpdatedOverride(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, propertyAnimationType, oldValue, newValue);
		switch (propertyName) {
			case SectionHeader.selectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

		}

		if (this.sectionHeaderPropertyUpdating != null) {
			this.sectionHeaderPropertyUpdating(this, propertyName, propertyAnimationType, oldValue, newValue);
		}
	}
	private formatGroup(groupName: string, groupValue: any, description: ColumnGroupDescription, propertyType: DataSourceSchemaPropertyType): GroupData {
		let formattedValue: string = groupValue != null ? groupValue.toString() : stringEmpty();
		let formattedText: string = groupName + ": " + formattedValue;
		let displayName: string = stringEmpty();
		if (description != null) {
			if (description.displayName == null) {
				displayName = groupName + ": ";
			} else if (description.displayName != stringEmpty()) {
				displayName = description.displayName + ": ";
			}
			if (groupValue != null) {
				switch (propertyType) {
					case DataSourceSchemaPropertyType.ByteValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = typeGetValue(groupValue);
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (typeGetValue(groupValue)).toString();
					}
					break;

					case DataSourceSchemaPropertyType.DateTimeValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = <Date>groupValue;
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (<Date>groupValue).toString();
					}
					break;

					case DataSourceSchemaPropertyType.DoubleValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = <number>groupValue;
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (<number>groupValue).toString();
					}
					break;

					case DataSourceSchemaPropertyType.IntValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = typeGetValue(groupValue);
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (typeGetValue(groupValue)).toString();
					}
					break;

					case DataSourceSchemaPropertyType.LongValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = typeGetValue(groupValue);
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (<number>typeGetValue(groupValue)).toString();
					}
					break;

					case DataSourceSchemaPropertyType.ShortValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = typeGetValue(groupValue);
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (<number>typeGetValue(groupValue)).toString();
					}
					break;

					case DataSourceSchemaPropertyType.SingleValue:
					if (description.formatOverride != null) {
						let override_ = description.formatOverride;
						let val_ = <number>groupValue;
						formattedValue = <string>(override_.format(val_));
					} else {
						formattedValue = (<number>groupValue).toString();
					}
					break;

					case DataSourceSchemaPropertyType.StringValue:

					case DataSourceSchemaPropertyType.DecimalValue:

					case DataSourceSchemaPropertyType.BooleanValue:

					case DataSourceSchemaPropertyType.ObjectValue:
					formattedValue = groupValue.toString();
					break;

				}

			}
			formattedText = displayName + formattedValue;
			formattedText = description.userFormatValue(groupValue, formattedValue, formattedText);
		}
		return ((() => {
			let $ret = new GroupData();
			$ret.groupName = groupName;
			$ret.groupValue = groupValue;
			$ret.formattedText = formattedText;
			return $ret;
		})());
	}
}

/**
 * @hidden 
 */
export class RowSeparator extends DefinitionBase {
	static $t: Type = markType(RowSeparator, 'RowSeparator', (<any>DefinitionBase).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		if (path.isHeaderCell) {
			return "headerRowSeparator";
		}
		return "rowSeparator";
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateBackgroundColor();
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.rowSeparatorBackground != null) {
				this.actualBackground = this.grid.rowSeparatorBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updatePinnedRowBackground(): void {
		if (this.pinnedRowBackground == null) {
			if (this.grid != null && this.grid.rowSeparatorPinnedRowBackground != null) {
				this.actualPinnedRowBackground = this.grid.rowSeparatorPinnedRowBackground;
				return;
			}
			this.actualPinnedRowBackground = this.getDefaultPinnedRowBackgroundColor();
		} else {
			this.actualPinnedRowBackground = this.pinnedRowBackground;
		}
	}
	protected updateStickyRowBackground(): void {
		if (this.stickyRowBackground == null) {
			if (this.grid != null && this.grid.rowSeparatorStickyRowBackground != null) {
				this.actualStickyRowBackground = this.grid.rowSeparatorStickyRowBackground;
				return;
			}
			this.actualStickyRowBackground = this.getDefaultStickyRowBackgroundColor();
		} else {
			this.actualStickyRowBackground = this.stickyRowBackground;
		}
	}
	protected updateLastStickyRowBackground(): void {
		if (this.lastStickyRowBackground == null) {
			if (this.grid != null && this.grid.rowSeparatorLastStickyRowBackground != null) {
				this.actualLastStickyRowBackground = this.grid.rowSeparatorLastStickyRowBackground;
				return;
			}
			this.actualLastStickyRowBackground = this.getDefaultLastStickyRowBackgroundColor();
		} else {
			this.actualLastStickyRowBackground = this.lastStickyRowBackground;
		}
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.rowSeparatorBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case Grid.rowSeparatorLastStickyRowBackgroundPropertyName:
			this.updateLastStickyRowBackground();
			break;

			case Grid.rowSeparatorPinnedRowBackgroundPropertyName:
			this.updatePinnedRowBackground();
			break;

			case Grid.rowSeparatorStickyRowBackgroundPropertyName:
			this.updateStickyRowBackground();
			break;

		}

	}
	protected createModelOverride(path: CellPath): CellModel {
		return new RowSeparatorModel();
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.rowSeparatorBackgroundColor;
	}
	protected getDefaultStickyRowBackgroundColor(): Brush {
		return GridStyleRepository.defaultStickyRowSeparatorBackground;
	}
	protected getDefaultLastStickyRowBackgroundColor(): Brush {
		return GridStyleRepository.defaultLastStickyRowSeparatorBackground;
	}
	protected getDefaultPinnedRowBackgroundColor(): Brush {
		return this.getDefaultBackgroundColor();
	}
	protected getDefaultPinnedRowOpacity(): number {
		return 1;
	}
}

/**
 * @hidden 
 */
export abstract class SummaryRow extends DefinitionBase {
	static $t: Type = markType(SummaryRow, 'SummaryRow', (<any>DefinitionBase).$type);
	static readonly selectedBackgroundPropertyName: string = "SelectedBackground";
	private _selectedBackground: Brush = null;
	get selectedBackground(): Brush {
		return this._selectedBackground;
	}
	set selectedBackground(value: Brush) {
		let oldValue = this._selectedBackground;
		this._selectedBackground = value;
		if (this._selectedBackground != oldValue) {
			this.onPropertyChanged(SummaryRow.selectedBackgroundPropertyName, CellPropertyAnimationType.IgnoredValue, oldValue, this._selectedBackground);
		}
	}
	static readonly actualSelectedBackgroundPropertyName: string = "ActualSelectedBackground";
	private _actualSelectedBackground: Brush = null;
	get actualSelectedBackground(): Brush {
		return this._actualSelectedBackground;
	}
	set actualSelectedBackground(value: Brush) {
		let oldValue = this._actualSelectedBackground;
		this._actualSelectedBackground = value;
		if (this._actualSelectedBackground != oldValue) {
			this.onPropertyChanged(SummaryRow.actualSelectedBackgroundPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualSelectedBackground);
		}
	}
	static readonly summaryNameTextColorPropertyName: string = "SummaryNameTextColor";
	private _summaryNameTextColor: Brush = null;
	get summaryNameTextColor(): Brush {
		return this._summaryNameTextColor;
	}
	set summaryNameTextColor(value: Brush) {
		let oldValue = this._summaryNameTextColor;
		this._summaryNameTextColor = value;
		if (this._summaryNameTextColor != oldValue) {
			this.onPropertyChanged(SummaryRow.summaryNameTextColorPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._summaryNameTextColor);
		}
	}
	static readonly actualSummaryNameTextColorPropertyName: string = "ActualSummaryNameTextColor";
	private _actualSummaryNameTextColor: Brush = null;
	get actualSummaryNameTextColor(): Brush {
		return this._actualSummaryNameTextColor;
	}
	set actualSummaryNameTextColor(value: Brush) {
		let oldValue = this._actualSummaryNameTextColor;
		this._actualSummaryNameTextColor = value;
		if (this._actualSummaryNameTextColor != oldValue) {
			this.onPropertyChanged(SummaryRow.actualSummaryNameTextColorPropertyName, CellPropertyAnimationType.BrushValue, oldValue, this._actualSummaryNameTextColor);
		}
	}
	static readonly paddingLeftPropertyName: string = "PaddingLeft";
	private _paddingLeft: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		let oldValue = this._paddingLeft;
		this._paddingLeft = value;
		if (this._paddingLeft != oldValue) {
			this.onPropertyChanged(SummaryRow.paddingLeftPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingLeft);
		}
	}
	static readonly paddingTopPropertyName: string = "PaddingTop";
	private _paddingTop: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		let oldValue = this._paddingTop;
		this._paddingTop = value;
		if (this._paddingTop != oldValue) {
			this.onPropertyChanged(SummaryRow.paddingTopPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingTop);
		}
	}
	static readonly paddingRightPropertyName: string = "PaddingRight";
	private _paddingRiht: number = <number>truncate(DeviceUtils.toPixelUnits(10));
	get paddingRight(): number {
		return this._paddingRiht;
	}
	set paddingRight(value: number) {
		let oldValue = this._paddingRiht;
		this._paddingRiht = value;
		if (this._paddingRiht != oldValue) {
			this.onPropertyChanged(SummaryRow.paddingRightPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingRiht);
		}
	}
	static readonly paddingBottomPropertyName: string = "PaddingBottom";
	private _paddingBottom: number = <number>truncate(DeviceUtils.toPixelUnits(5));
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		let oldValue = this._paddingBottom;
		this._paddingBottom = value;
		if (this._paddingBottom != oldValue) {
			this.onPropertyChanged(SummaryRow.paddingBottomPropertyName, CellPropertyAnimationType.IntValue, oldValue, this._paddingBottom);
		}
	}
	constructor() {
		super();
		this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "summary";
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new SummaryCellModel();
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let specialRow = typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, rowObject);
		let summaryText: string = stringEmpty();
		let summaryValue: string = stringEmpty();
		let column = grid.getContainingColumn(cellModel.path);
		if (column != null) {
			let summaryResults = specialRow.getSummaryResults(column.propertyPath);
			if (summaryResults.length > 0 && grid.summaryDescriptions.all.count > 0) {
				let summaryDescription = grid.summaryDescriptions.all.item(summaryResults[0].summaryIndex);
				if (summaryDescription.calculator != null) {
					let summaryData = this.formatSummaryResult(summaryDescription, summaryResults[0]);
					summaryText = summaryDescription.calculatorDisplayName != null ? summaryDescription.calculatorDisplayName : summaryDescription.calculator.displayName;
					summaryValue = summaryData.formattedValue;
				}
			}
		}
		let summaryCellModel = typeCast<SummaryCellModel>((<any>SummaryCellModel).$type, cellModel);
		if (summaryCellModel != null) {
			summaryCellModel.resolvedSummaryText = summaryText;
			summaryCellModel.resolvedSummaryValue = summaryValue;
			summaryCellModel.indent = grid.adapter.getRowIndent(cellModel.path.row);
			if (grid.selectionManager.isSelected(summaryCellModel)) {
				summaryCellModel.selectedStatus = 1;
			} else {
				summaryCellModel.selectedStatus = 0;
			}
			if (grid.activationManager.isActivated(summaryCellModel)) {
				summaryCellModel.activationStatus = 1;
			} else {
				summaryCellModel.activationStatus = 0;
			}
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		let model = typeCast<SummaryCellModel>((<any>SummaryCellModel).$type, cellModel);
		model.selectedBackground = this.actualSelectedBackground;
		model.background = this.actualBackground;
		model.summaryNameTextColor = this.actualSummaryNameTextColor;
		model.paddingLeft = this.paddingLeft;
		model.paddingTop = this.paddingTop;
		model.paddingRight = this.paddingRight;
		model.paddingBottom = this.paddingBottom;
	}
	protected onGridChanged(oldValue: Grid, newValue: Grid): void {
		if (oldValue != null) {
			oldValue.propertyChanged = delegateRemove(oldValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		if (newValue != null) {
			newValue.propertyChanged = delegateCombine(newValue.propertyChanged, runOn(this, this.grid_PropertyChanged));
		}
		this.updateSelectedBackgroundColor();
		this.updateSummaryNameTextColor();
		this.updateBackgroundColor();
		this.updateTextColor();
		this.updateTextStyle();
	}
	protected getDefaultSummaryNameTextColor(): Brush {
		return GridStyleRepository.defaultSummaryNameTextColor;
	}
	private grid_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		switch (e.propertyName) {
			case Grid.summaryRootSelectedBackgroundPropertyName:

			case Grid.summarySectionSelectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

			case Grid.summaryRootBackgroundPropertyName:

			case Grid.summarySectionBackgroundPropertyName:
			this.updateBackgroundColor();
			break;

			case Grid.summaryRootTextColorPropertyName:

			case Grid.summarySectionTextColorPropertyName:
			this.updateTextColor();
			break;

			case Grid.summaryRootNameTextColorPropertyName:

			case Grid.summarySectionNameTextColorPropertyName:
			this.updateSummaryNameTextColor();
			break;

			case Grid.summaryTextStylePropertyName:
			this.updateTextStyle();
			break;

		}

	}
	protected updateSelectedBackgroundColor(): void {
		if (this.selectedBackground == null) {
			this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
		} else {
			this.actualSelectedBackground = this.selectedBackground;
		}
	}
	protected updateSummaryNameTextColor(): void {
		if (this.summaryNameTextColor == null) {
			this.actualSummaryNameTextColor = this.getDefaultSummaryNameTextColor();
		} else {
			this.actualSummaryNameTextColor = this.summaryNameTextColor;
		}
	}
	protected updateTextStyle(): void {
		if (this.textStyle == null) {
			if (this.grid != null && this.grid.summaryTextStyle != null) {
				this.actualFontInfo = this.grid.summaryTextStyle;
			} else {
				this.actualFontInfo = this.getDefaultFontInfo();
			}
		} else {
			this.actualFontInfo = this.textStyle;
		}
	}
	protected propertyUpdatedOverride(propertyName: string, propertyAnimationType: CellPropertyAnimationType, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, propertyAnimationType, oldValue, newValue);
		switch (propertyName) {
			case SummaryRow.selectedBackgroundPropertyName:
			this.updateSelectedBackgroundColor();
			break;

			case SummaryRow.summaryNameTextColorPropertyName:
			this.updateSummaryNameTextColor();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class SummaryRowRoot extends SummaryRow {
	static $t: Type = markType(SummaryRowRoot, 'SummaryRowRoot', (<any>SummaryRow).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "summaryRowRoot";
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultRootSummaryCellBackground;
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.summaryRootBackground != null) {
				this.actualBackground = this.grid.summaryRootBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updateSelectedBackgroundColor(): void {
		if (this.selectedBackground == null) {
			if (this.grid != null && this.grid.summaryRootSelectedBackground != null) {
				this.actualSelectedBackground = this.grid.summaryRootSelectedBackground;
			} else {
				this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
			}
		} else {
			this.actualSelectedBackground = this.selectedBackground;
		}
	}
	protected updateSummaryNameTextColor(): void {
		if (this.summaryNameTextColor == null) {
			if (this.grid != null && this.grid.summaryRootNameTextColor != null) {
				this.actualSummaryNameTextColor = this.grid.summaryRootNameTextColor;
			} else {
				this.actualSummaryNameTextColor = this.getDefaultSummaryNameTextColor();
			}
		} else {
			this.actualSummaryNameTextColor = this.summaryNameTextColor;
		}
	}
	protected updateTextColor(): void {
		if (this.textColor == null) {
			if (this.grid != null && this.grid.summaryRootTextColor != null) {
				this.actualTextColor = this.grid.summaryRootTextColor;
			} else {
				this.actualTextColor = this.getDefaultTextColor();
			}
		} else {
			this.actualTextColor = this.textColor;
		}
	}
}

/**
 * @hidden 
 */
export class SummaryRowSection extends SummaryRow {
	static $t: Type = markType(SummaryRowSection, 'SummaryRowSection', (<any>SummaryRow).$type);
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "summaryRowSection";
	}
	protected getDefaultBackgroundColor(): Brush {
		return GridStyleRepository.defaultSectionSummaryCellBackground;
	}
	protected updateBackgroundColor(): void {
		if (this.background == null) {
			if (this.grid != null && this.grid.summarySectionBackground != null) {
				this.actualBackground = this.grid.summarySectionBackground;
				return;
			}
			this.actualBackground = this.getDefaultBackgroundColor();
		} else {
			this.actualBackground = this.background;
		}
	}
	protected updateSelectedBackgroundColor(): void {
		if (this.selectedBackground == null) {
			if (this.grid != null && this.grid.summarySectionSelectedBackground != null) {
				this.actualSelectedBackground = this.grid.summarySectionSelectedBackground;
			} else {
				this.actualSelectedBackground = this.getDefaultSelectedBackgroundColor();
			}
		} else {
			this.actualSelectedBackground = this.selectedBackground;
		}
	}
	protected updateSummaryNameTextColor(): void {
		if (this.summaryNameTextColor == null) {
			if (this.grid != null && this.grid.summarySectionNameTextColor != null) {
				this.actualSummaryNameTextColor = this.grid.summarySectionNameTextColor;
			} else {
				this.actualSummaryNameTextColor = this.getDefaultSummaryNameTextColor();
			}
		} else {
			this.actualSummaryNameTextColor = this.summaryNameTextColor;
		}
	}
	protected updateTextColor(): void {
		if (this.textColor == null) {
			if (this.grid != null && this.grid.summarySectionTextColor != null) {
				this.actualTextColor = this.grid.summarySectionTextColor;
			} else {
				this.actualTextColor = this.getDefaultTextColor();
			}
		} else {
			this.actualTextColor = this.textColor;
		}
	}
}

/**
 * @hidden 
 */
export class TemplateColumn extends Column {
	static $t: Type = markType(TemplateColumn, 'TemplateColumn', (<any>Column).$type);
	protected createModelOverride(path: CellPath): CellModel {
		return new TemplateCellModel();
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		let defaultKey = "template-" + this.uniqueId;
		return defaultKey;
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let templateModel = <TemplateCellModel>cellModel;
		templateModel.value = resolvedValue;
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
	}
	prepareCreateOrUpdateCall(model: TemplateCellModel, cell: any): void {
		if (this.cellUpdating != null) {
			this.cellUpdating(this, ((() => {
				let $ret = new TemplateCellUpdatingEventArgs();
				$ret.cellInfo = model;
				$ret.content = cell;
				return $ret;
			})()));
		}
	}
	cellUpdating: (sender: any, args: TemplateCellUpdatingEventArgs) => void = null;
}

/**
 * @hidden 
 */
export class TemplateCellUpdatingEventArgs extends EventArgs {
	static $t: Type = markType(TemplateCellUpdatingEventArgs, 'TemplateCellUpdatingEventArgs', (<any>EventArgs).$type);
	private _cellInfo: TemplateCellModel = null;
	get cellInfo(): TemplateCellModel {
		return this._cellInfo;
	}
	set cellInfo(value: TemplateCellModel) {
		this._cellInfo = value;
	}
	private _content: any = null;
	get content(): any {
		return this._content;
	}
	set content(value: any) {
		this._content = value;
	}
}

/**
 * @hidden 
 */
export class TextColumn extends Column {
	static $t: Type = markType(TextColumn, 'TextColumn', (<any>Column).$type);
	static readonly formatStringPropertyName: string = "FormatString";
	private _formatString: string = null;
	get formatString(): string {
		return this._formatString;
	}
	set formatString(value: string) {
		let oldValue = this._formatString;
		this._formatString = value;
		if (this._formatString != oldValue) {
			this.onPropertyChanged(TextColumn.formatStringPropertyName, CellPropertyAnimationType.StringValue, oldValue, this._formatString);
		}
	}
	protected createModelOverride(path: CellPath): CellModel {
		return new TextCellModel();
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let textModel = <TextCellModel>cellModel;
		if (resolvedValue != null) {
			textModel.textValue = this.extractString(resolvedValue);
		} else {
			textModel.textValue = null;
		}
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
		let textModel = <TextCellModel>cellModel;
	}
	private extractString(value: any): string {
		if (typeof value === 'string') {
			return <string>value;
		}
		return null;
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "text";
	}
}

/**
 * @hidden 
 */
export class TextHeader extends Header {
	static $t: Type = markType(TextHeader, 'TextHeader', (<any>Header).$type);
	constructor() {
		super();
		this.actualHorizontalAlignment = CellContentHorizontalAlignment.Left;
		this.actualVerticalAlignment = CellContentVerticalAlignment.Center;
	}
	protected createModelOverride(path: CellPath): CellModel {
		let model = new TextHeaderCellModel();
		return model;
	}
	protected getStyleKeyOverride(path: CellPath, grid: Grid, resolvedValue: any): string {
		return "textHeader";
	}
	onAttaching(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onAttaching(cellModel, grid, resolvedValue, rowObject);
	}
	onDataBindOverride(cellModel: CellModel, grid: Grid, resolvedValue: any, rowObject: any): void {
		super.onDataBindOverride(cellModel, grid, resolvedValue, rowObject);
		let textModel = <TextHeaderCellModel>cellModel;
		let owningColumn = grid.getContainingColumn(cellModel.path);
		textModel.textValue = owningColumn.actualHeaderText;
		textModel.renderValue = textModel.textValue;
		textModel.sortDirection = owningColumn.sortDirection;
		textModel.isFilterUIVisible = owningColumn.isFilteringEnabled && grid.isFilterUIEnabled;
		textModel.sortIndicatorStyle = this.actualSortIndicatorStyle;
	}
}

/**
 * @hidden 
 */
export abstract class GridEffect extends Base {
	static $t: Type = markType(GridEffect, 'GridEffect');
	constructor() {
		super();
	}
	notifyFinished(): void {
		if (this.onFinished != null) {
			this.onFinished(this);
		}
	}
	notifyCanceled(canceledBy: GridEffect): void {
		if (this.onCanceled != null) {
			this.onCanceled(this, canceledBy);
		}
	}
	private _intent: GridEffectMainIntent = GridEffectMainIntent.Default;
	get intent(): GridEffectMainIntent {
		return this._intent;
	}
	set intent(value: GridEffectMainIntent) {
		this._intent = value;
	}
	intentsMatchForCancel(other: GridEffect): boolean {
		if (other == null) {
			return false;
		}
		if (other._intent != this._intent) {
			return false;
		}
		if (!this._subIntentMustMatchToCancel) {
			return true;
		}
		if (other._subIntent != this._subIntent) {
			return false;
		}
		if (other._subIntentModifier != this._subIntentModifier) {
			return false;
		}
		return true;
	}
	private _subIntent: GridEffectSubIntent = GridEffectSubIntent.Default;
	get subIntent(): GridEffectSubIntent {
		return this._subIntent;
	}
	set subIntent(value: GridEffectSubIntent) {
		this._subIntent = value;
	}
	private _subIntentModifier: string = "";
	get subIntentModifier(): string {
		return this._subIntentModifier;
	}
	set subIntentModifier(value: string) {
		this._subIntentModifier = value;
	}
	private _subIntentMustMatchToCancel: boolean = false;
	get subIntentMustMatchToCancel(): boolean {
		return this._subIntentMustMatchToCancel;
	}
	set subIntentMustMatchToCancel(value: boolean) {
		this._subIntentMustMatchToCancel = value;
	}
	private _markFinished: boolean = false;
	get markFinished(): boolean {
		return this._markFinished;
	}
	set markFinished(value: boolean) {
		this._markFinished = value;
	}
	onFinished: (target: any) => void = null;
	onCanceled: (target: any, canceledBy: GridEffect) => void = null;
	private _durationMilliseconds: number = 0;
	private _adjustedDuration: number = 0;
	get durationMilliseconds(): number {
		return this._durationMilliseconds;
	}
	set durationMilliseconds(value: number) {
		this._durationMilliseconds = value;
		this._adjustedDuration = value;
	}
	private _animationDelayForItem: (startItem: CellPath, numberOfItems: number, item: CellPath) => number = null;
	get animationDelayForItem(): (startItem: CellPath, numberOfItems: number, item: CellPath) => number {
		return this._animationDelayForItem;
	}
	set animationDelayForItem(value: (startItem: CellPath, numberOfItems: number, item: CellPath) => number) {
		this._animationDelayForItem = value;
	}
	private _perItemDelayMilliseconds: number = -1;
	get perItemDelayMilliseconds(): number {
		return this._perItemDelayMilliseconds;
	}
	set perItemDelayMilliseconds(value: number) {
		this._perItemDelayMilliseconds = value;
	}
	private _subItemDurationMilliseconds: number = -1;
	get subItemDurationMilliseconds(): number {
		return this._subItemDurationMilliseconds;
	}
	set subItemDurationMilliseconds(value: number) {
		this._subItemDurationMilliseconds = value;
	}
	private _desiredSubItemDurationMilliseconds: number = 300;
	get desiredSubItemDurationMilliseconds(): number {
		return this._desiredSubItemDurationMilliseconds;
	}
	set desiredSubItemDurationMilliseconds(value: number) {
		this._desiredSubItemDurationMilliseconds = value;
	}
	private _animationDurationForItem: (startItem: CellPath, numberOfItems: number, item: CellPath) => number = null;
	get animationDurationForItem(): (startItem: CellPath, numberOfItems: number, item: CellPath) => number {
		return this._animationDurationForItem;
	}
	set animationDurationForItem(value: (startItem: CellPath, numberOfItems: number, item: CellPath) => number) {
		this._animationDurationForItem = value;
	}
	private _holdInitialMilliseconds: number = 0;
	get holdInitialMilliseconds(): number {
		return this._holdInitialMilliseconds;
	}
	set holdInitialMilliseconds(value: number) {
		this._holdInitialMilliseconds = value;
	}
	private _startItem: CellPath = null;
	get startItem(): CellPath {
		return this._startItem;
	}
	set startItem(value: CellPath) {
		this._startItem = value;
	}
	private _lastItem: CellPath = null;
	get lastItem(): CellPath {
		return this._lastItem;
	}
	set lastItem(value: CellPath) {
		this._lastItem = value;
	}
	private _numberOfItems: number = -1;
	get numberOfItems(): number {
		return this._numberOfItems;
	}
	set numberOfItems(value: number) {
		this._numberOfItems = value;
	}
	private _shouldItemsFinishSimultaneously: boolean = false;
	get shouldItemsFinishSimultaneously(): boolean {
		return this._shouldItemsFinishSimultaneously;
	}
	set shouldItemsFinishSimultaneously(value: boolean) {
		this._shouldItemsFinishSimultaneously = value;
	}
	private _isItemDelayInverted: boolean = false;
	get isItemDelayInverted(): boolean {
		return this._isItemDelayInverted;
	}
	set isItemDelayInverted(value: boolean) {
		this._isItemDelayInverted = value;
	}
	private _startTime: number = -1;
	get startTime(): number {
		return this._startTime;
	}
	set startTime(value: number) {
		this._startTime = value;
	}
	private _fromValue: any = null;
	get fromValue(): any {
		return this._fromValue;
	}
	set fromValue(value: any) {
		this._fromValue = value;
	}
	private _toValue: any = null;
	get toValue(): any {
		return this._toValue;
	}
	set toValue(value: any) {
		this._toValue = value;
	}
	private _tick: (progress: number, fromValue: any, toValue: any, target: any, model: VisualModel) => void = null;
	get tick(): (progress: number, fromValue: any, toValue: any, target: any, model: VisualModel) => void {
		return this._tick;
	}
	set tick(value: (progress: number, fromValue: any, toValue: any, target: any, model: VisualModel) => void) {
		this._tick = value;
	}
	private _easingFunction: (progress: number) => number = null;
	get easingFunction(): (progress: number) => number {
		return this._easingFunction;
	}
	set easingFunction(value: (progress: number) => number) {
		this._easingFunction = value;
	}
	private _fromCurrentValue: boolean = false;
	get fromCurrentValue(): boolean {
		return this._fromCurrentValue;
	}
	set fromCurrentValue(value: boolean) {
		this._fromCurrentValue = value;
	}
	private _getInitialValue: (target: any, model: VisualModel) => any = null;
	get getInitialValue(): (target: any, model: VisualModel) => any {
		return this._getInitialValue;
	}
	set getInitialValue(value: (target: any, model: VisualModel) => any) {
		this._getInitialValue = value;
	}
	private _shouldWaitTillAfterHold: boolean = false;
	get shouldWaitTillAfterHold(): boolean {
		return this._shouldWaitTillAfterHold;
	}
	set shouldWaitTillAfterHold(value: boolean) {
		this._shouldWaitTillAfterHold = value;
	}
	populateFromSettings(settings: GridAnimationPhaseSettings): void {
		this.durationMilliseconds = settings.durationMilliseconds;
		this.holdInitialMilliseconds = settings.holdInitialMilliseconds;
		this.perItemDelayMilliseconds = settings.perItemDelayMilliseconds;
		this.subItemDurationMilliseconds = settings.subItemDurationMilliseconds;
		this.shouldItemsFinishSimultaneously = settings.shouldItemsFinishSimultaneously;
		this.easingFunction = this.getEasingFunction(settings.easingFunctionType);
	}
	private getEasingFunction(gridEasingFunctionType: GridEasingFunctionType): (progress: number) => number {
		switch (gridEasingFunctionType) {
			case GridEasingFunctionType.Linear: return null;
			case GridEasingFunctionType.CubicInOut: return EasingFunctions.cubicEase;
			case GridEasingFunctionType.CircleInOut: return EasingFunctions.circleEase;
			case GridEasingFunctionType.ExponentialInOut: return EasingFunctions.exponentialEase;
		}

		return null;
	}
	private _fromValues: Dictionary$2<any, any> = null;
	tickForColumn(column: ColumnInfo, model: VisualModel, controller: GridLayerController, currentTime: number): boolean {
		if (this.shouldWaitTillAfterHold && this.isDuringHold(currentTime)) {
			return false;
		}
		let elapsedTime: number = this.getElapsedTime(currentTime);
		let progress: number = 1;
		if (this._durationMilliseconds > 0) {
			progress = elapsedTime / <number>this._durationMilliseconds;
		}
		let finished: boolean = false;
		if (this._tick == null) {
			return true;
		}
		if (progress >= 1) {
			progress = 1;
			finished = true;
		}
		if (this._easingFunction != null) {
			progress = this._easingFunction(progress);
		}
		let fromValue = this.resolveFromValue(this._fromValue, model, column, column.uniqueID);
		this._tick(progress, fromValue, this._toValue, column, model);
		return finished;
	}
	tickForObject(spacer: any, model: VisualModel, controller: GridLayerController, currentTime: number): boolean {
		if (this.shouldWaitTillAfterHold && this.isDuringHold(currentTime)) {
			return false;
		}
		let elapsedTime: number = this.getElapsedTime(currentTime);
		let progress: number = 1;
		if (this._durationMilliseconds > 0) {
			progress = elapsedTime / <number>this._durationMilliseconds;
		}
		let finished: boolean = false;
		if (this._tick == null) {
			return true;
		}
		if (progress >= 1) {
			progress = 1;
			finished = true;
		}
		if (this._easingFunction != null) {
			progress = this._easingFunction(progress);
		}
		let fromValue = this.resolveFromValue(this._fromValue, model, spacer, spacer);
		this._tick(progress, fromValue, this._toValue, spacer, model);
		return finished;
	}
	private getElapsedTime(currentTime: number): number {
		let elapsedTime = <number>(currentTime - this._startTime);
		if (this._holdInitialMilliseconds > 0) {
			if (elapsedTime < this._holdInitialMilliseconds) {
				elapsedTime = 0;
			} else {
				elapsedTime -= this._holdInitialMilliseconds;
			}
		}
		return elapsedTime;
	}
	private isDuringHold(currentTime: number): boolean {
		let elapsedTime = <number>(currentTime - this._startTime);
		if (this._holdInitialMilliseconds > 0) {
			if (elapsedTime < this._holdInitialMilliseconds) {
				return true;
			}
		}
		return false;
	}
	updateTimeExpansion(cellPath: CellPath, model: VisualModel, controller: GridLayerController, currentTime: number): void {
		let cellIndex: number = this.getAbsoluteIndex(model, cellPath);
		if (this.maxSeenItem == null) {
			return;
		}
		let absoluteIndex: number = this.getAbsoluteIndex(model, this.maxSeenItem);
		let ratio = <number>absoluteIndex / <number>this._numberOfItems;
		if (ratio > 5) {
			ratio = 5;
		}
		if (ratio == this._lastRatio) {
			return;
		}
		let deltaRatio = ratio / this._lastRatio;
		this._lastRatio = ratio;
		let newDuration = <number>truncate(Math.round(<number>this._adjustedDuration * deltaRatio));
		if (newDuration <= 0) {
			let a: number = 0;
			a += 1;
		}
		{
			this._adjustedDuration = newDuration;
		}
	}
	tickForCell(cell: CellModel, model: VisualModel, controller: GridLayerController, currentTime: number): boolean {
		let finished: boolean = false;
		this.updateTimeExpansion(cell.path, model, controller, currentTime);
		if (this.shouldWaitTillAfterHold && this.isDuringHold(currentTime)) {
			return false;
		}
		let elapsedTime: number = this.getElapsedTime(currentTime);
		let startDelay: number = this.getStartDelayForItem(model, controller, cell.path, currentTime);
		let duration: number = this.getDurationForItem(model, controller, cell.path, currentTime);
		if (duration < 300) {
			let a: number = 0;
			a += 1;
		}
		let relativeTime: number = elapsedTime - startDelay;
		if (relativeTime < 0) {
			relativeTime = 0;
		}
		let progress: number = 1;
		if (duration > 0) {
			progress = relativeTime / duration;
		}
		if (progress >= 1) {
			progress = 1;
			finished = true;
		}
		if (this._easingFunction != null) {
			progress = this._easingFunction(progress);
		}
		let fromValue = this.resolveFromValue(this._fromValue, model, cell, cell.path);
		this._tick(progress, fromValue, this._toValue, cell, model);
		return finished;
	}
	private _lastRatio: number = 1;
	updateFromValue(fromValue: any, model: VisualModel, item: any): void {
		if (this._fromValues == null) {
			this._fromValues = new Dictionary$2<any, any>((<any>Base).$type, (<any>Base).$type, 0);
		}
		this._fromValues.item(item, fromValue);
	}
	private resolveFromValue(fromValue: any, model: VisualModel, item: any, key: any): any {
		if (this.fromCurrentValue) {
			if (this._fromValues == null) {
				this._fromValues = new Dictionary$2<any, any>((<any>Base).$type, (<any>Base).$type, 0);
			}
			if (this._fromValues.containsKey(key)) {
				return this._fromValues.item(key);
			}
			let value: any = this.getInitialValue(item, model);
			this._fromValues.item(key, value);
			return value;
		} else {
			return this._fromValue;
		}
	}
	tickForRowSection(sectionInfo: SectionInfo, model: VisualModel, controller: GridLayerController, currentTime: number): boolean {
		if (this.shouldWaitTillAfterHold && this.isDuringHold(currentTime)) {
			return false;
		}
		let elapsedTime: number = this.getElapsedTime(currentTime);
		let progress: number = 1;
		if (this._durationMilliseconds > 0) {
			progress = elapsedTime / <number>this._durationMilliseconds;
		}
		let finished: boolean = false;
		if (this._tick == null) {
			return true;
		}
		if (progress >= 1) {
			progress = 1;
			finished = true;
		}
		if (this._easingFunction != null) {
			progress = this._easingFunction(progress);
		}
		this._tick(progress, this._fromValue, this._toValue, sectionInfo, model);
		return finished;
	}
	appliesToCell(path: CellPath, model: VisualModel): boolean {
		return false;
	}
	appliesToColumn(column: ColumnInfo, model: VisualModel): boolean {
		return false;
	}
	appliesToRow(path: RowPath, model: VisualModel): boolean {
		return false;
	}
	appliesToSpacer(spacer: GridColumnSpacer, model: VisualModel): boolean {
		return false;
	}
	onRowInsertedAt(path: RowPath): void {
	}
	onRowRemovedAt(path: RowPath): void {
	}
	private _maxAbsoluteIndex: number = -1;
	private _maxSeenItem: CellPath = null;
	protected get maxSeenItem(): CellPath {
		return this._maxSeenItem;
	}
	getStartDelayForItem(model: VisualModel, controller: GridLayerController, item: CellPath, currentTime: number): number {
		if (item == null) {
			return 0;
		}
		let absoluteIndex: number = this.getAbsoluteIndex(model, item);
		let maxCount: number = this.getMaxCountForItem(model, controller, item, currentTime);
		let duration: number = this._durationMilliseconds;
		if (this._shouldItemsFinishSimultaneously) {
			duration = <number>truncate(((<number>maxCount / <number>this._numberOfItems) * <number>duration));
		}
		let perItemDelay = this._perItemDelayMilliseconds;
		if (perItemDelay == -1) {
			perItemDelay = <number>truncate((<number>duration / <number>maxCount));
			if ((duration - <number>truncate((<number>maxCount * <number>perItemDelay))) < this._desiredSubItemDurationMilliseconds) {
				perItemDelay = <number>truncate((<number>(duration - this._desiredSubItemDurationMilliseconds) / <number>maxCount));
			}
			if (perItemDelay < 0) {
				perItemDelay = 0;
			}
		}
		let delay: number = perItemDelay * absoluteIndex;
		if (this._animationDelayForItem != null) {
			delay = this._animationDelayForItem(this._startItem, this._numberOfItems, item);
		}
		let trueMax: number = this._adjustedDuration;
		if (delay < (trueMax * -1)) {
			delay = (trueMax * -1);
		}
		if (delay > (trueMax)) {
			delay = trueMax - this._desiredSubItemDurationMilliseconds;
		}
		if (this._shouldItemsFinishSimultaneously && this.getElapsedTime(currentTime) > delay && item != null && !this._cachedMaxCounts.containsKey(item)) {
			this._cachedMaxCounts.addItem(item, maxCount);
		}
		return delay;
	}
	private _cachedMaxCounts: Dictionary$2<CellPath, number> = new Dictionary$2<CellPath, number>((<any>CellPath).$type, Number_$type, 0);
	private getMaxCountForItem(model: VisualModel, controller: GridLayerController, item: CellPath, currentTime: number): number {
		if (this.maxSeenItem == null || !this._shouldItemsFinishSimultaneously) {
			return this._numberOfItems;
		}
		if (this._cachedMaxCounts.containsKey(item)) {
			return this._cachedMaxCounts.item(item);
		}
		let maxCount = this.getAbsoluteIndex(model, this.maxSeenItem);
		return maxCount;
	}
	private getAbsoluteIndex(model: VisualModel, item: CellPath): number {
		if (item == null) {
			return 0;
		}
		let relativeIndex: number = this.getRelativeIndex(model, item);
		if (this._numberOfItems == -1) {
			this._numberOfItems = this.getRelativeIndex(model, this._lastItem) + 1;
		}
		if (this._isItemDelayInverted) {
			relativeIndex = ((this._numberOfItems - 1) - relativeIndex);
		}
		let absoluteIndex: number = relativeIndex;
		if (absoluteIndex > this._numberOfItems && absoluteIndex > this._maxAbsoluteIndex) {
			this._maxAbsoluteIndex = absoluteIndex;
			this._maxSeenItem = item;
		}
		return absoluteIndex;
	}
	getRelativeIndex(model: VisualModel, item: CellPath): number {
		return 0;
	}
	getDurationForItem(model: VisualModel, controller: GridLayerController, item: CellPath, currentTime: number): number {
		let duration: number = this._adjustedDuration;
		if (this._animationDurationForItem != null) {
			if (this._numberOfItems == -1) {
				this._numberOfItems = this.getRelativeIndex(model, this._lastItem) + 1;
			}
			duration = this._animationDurationForItem(this._startItem, this._numberOfItems, item);
		} else {
			if (this._subItemDurationMilliseconds == -1) {
				if (this._shouldItemsFinishSimultaneously) {
					let maxCount: number = this.getMaxCountForItem(model, controller, item, currentTime);
					duration = this._durationMilliseconds;
					duration = <number>truncate(((<number>maxCount / <number>this._numberOfItems) * <number>duration));
					duration = duration - this.getStartDelayForItem(model, controller, item, currentTime);
				} else {
					if (this._isItemDelayInverted) {
						duration = this._durationMilliseconds - this.getStartDelayForItem(model, controller, this.getTrueStart(model), currentTime);
					} else {
						duration = this._durationMilliseconds - this.getStartDelayForItem(model, controller, this._lastItem, currentTime);
					}
				}
			} else {
				duration = this._subItemDurationMilliseconds;
			}
		}
		return duration;
	}
	protected getTrueStart(model: VisualModel): CellPath {
		return this._startItem;
	}
	protected modifyRowForInsertion(toModify: RowPath, insertedRow: RowPath): RowPath {
		if (insertedRow.section == toModify.section) {
			if (insertedRow.row <= toModify.row) {
				toModify = <RowPath>toModify.clone();
				toModify.row += 1;
			}
		}
		return toModify;
	}
	protected modifyRowForRemoval(toModify: RowPath, removedRow: RowPath): RowPath {
		if (removedRow.section == toModify.section) {
			if (removedRow.row < toModify.row) {
				toModify = <RowPath>toModify.clone();
				toModify.row -= 1;
			}
		}
		return toModify;
	}
	durationHasElapsed(model: VisualModel, controller: GridLayerController, currentTime: number): boolean {
		let elapsed = this.getElapsedTime(currentTime);
		return elapsed >= this._adjustedDuration;
	}
}

/**
 * @hidden 
 */
export class ColumnEffect extends GridEffect {
	static $t: Type = markType(ColumnEffect, 'ColumnEffect', (<any>GridEffect).$type);
	private _columnId: number = 0;
	get columnId(): number {
		return this._columnId;
	}
	set columnId(value: number) {
		this._columnId = value;
	}
	appliesToColumn(column: ColumnInfo, model: VisualModel): boolean {
		if (this.columnId == column.uniqueID) {
			return true;
		}
		return false;
	}
}

/**
 * @hidden 
 */
export class SpacerEffect extends GridEffect {
	static $t: Type = markType(SpacerEffect, 'SpacerEffect', (<any>GridEffect).$type);
	private _spacerId: number = 0;
	get spacerId(): number {
		return this._spacerId;
	}
	set spacerId(value: number) {
		this._spacerId = value;
	}
	appliesToSpacer(spacer: GridColumnSpacer, model: VisualModel): boolean {
		return spacer.uniqueId == this.spacerId;
	}
}

/**
 * @hidden 
 */
export class ColumnCellsEffect extends GridEffect {
	static $t: Type = markType(ColumnCellsEffect, 'ColumnCellsEffect', (<any>GridEffect).$type);
	private _columnId: number = 0;
	get columnId(): number {
		return this._columnId;
	}
	set columnId(value: number) {
		this._columnId = value;
	}
	private _tempColumnIndex: number = 0;
	get tempColumnIndex(): number {
		return this._tempColumnIndex;
	}
	set tempColumnIndex(value: number) {
		this._tempColumnIndex = value;
	}
	private _tempColumnFixedPosition: FixedCellPositions = <FixedCellPositions>0;
	get tempColumnFixedPosition(): FixedCellPositions {
		return this._tempColumnFixedPosition;
	}
	set tempColumnFixedPosition(value: FixedCellPositions) {
		this._tempColumnFixedPosition = value;
	}
	appliesToCell(path: CellPath, model: VisualModel): boolean {
		if (this.columnId == CellPath.rOW_SEPARATOR_COLUMN_INDEX) {
			if (path.isRowSeparator) {
				return true;
			}
		}
		if (this.columnId == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
			if (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
				return true;
			}
		}
		if (this.tempColumnIndex >= 0) {
			if (this.tempColumnIndex == path.column && this.tempColumnFixedPosition == path.fixedPosition) {
				return true;
			}
		} else {
			let column = model.getColumnById(this.columnId);
			if (column == null) {
				return false;
			}
			if (path.column == column.index && column.position == path.fixedPosition) {
				return true;
			}
		}
		return false;
	}
	protected getTrueStart(model: VisualModel): CellPath {
		if (model.fullHeaderHeight > 0) {
			let start = this.startItem;
			let actualStart = new CellPath(0, start.fixedPosition, start.column, CellPath.hEADER_SECTION_INDEX, CellPath.hEADER_ROW_INDEX);
			return actualStart;
		} else {
			return this.startItem;
		}
	}
	getRelativeIndex(model: VisualModel, item: CellPath): number {
		let startPath = this.startItem;
		let lastPath = this.lastItem;
		let targetPath = item;
		if (targetPath == null) {
			return 0;
		}
		if (targetPath.isHeaderCell) {
			return 0;
		}
		let offset = 0;
		if (model.fullHeaderHeight > 0) {
			offset++;
		}
		if (startPath == null) {
			return 0;
		}
		if (targetPath.isSummaryCell && targetPath.isPinnedBottom) {
			if (lastPath == null) {
				return 0;
			}
			return (lastPath.row - startPath.row) + offset - targetPath.bottomPinnedPosition;
		}
		if (targetPath.section == startPath.section) {
			return (targetPath.row - startPath.row) + offset;
		}
		let relativeIndex: number = offset;
		let currentSectionIndex: number = startPath.section;
		if (targetPath.section > startPath.section) {
			while (currentSectionIndex <= targetPath.section) {
				if (currentSectionIndex == startPath.section) {
					relativeIndex += (model.sections._inner[currentSectionIndex].rowCount - 1) - startPath.row;
					if (model.sections._inner[currentSectionIndex].footerHeight > 0) {
						relativeIndex++;
					}
				} else if (currentSectionIndex == targetPath.section) {
					if (model.sections._inner[currentSectionIndex].headerHeight > 0) {
						relativeIndex++;
					}
					relativeIndex += (targetPath.row + 1);
				} else {
					if (model.sections._inner[currentSectionIndex].headerHeight > 0) {
						relativeIndex++;
					}
					relativeIndex += model.sections._inner[currentSectionIndex].rowCount;
					if (model.sections._inner[currentSectionIndex].footerHeight > 0) {
						relativeIndex++;
					}
				}
				currentSectionIndex++;
			}
		} else if (targetPath.section < startPath.section) {
			while (currentSectionIndex >= targetPath.section) {
				if (currentSectionIndex == startPath.section) {
					relativeIndex -= startPath.row;
					if (model.sections._inner[currentSectionIndex].footerHeight > 0) {
						relativeIndex++;
					}
				} else if (currentSectionIndex == targetPath.section) {
					if (model.sections._inner[currentSectionIndex].footerHeight > 0) {
						relativeIndex--;
					}
					relativeIndex -= (model.sections._inner[currentSectionIndex].rowCount - targetPath.row);
				} else {
					if (model.sections._inner[currentSectionIndex].headerHeight > 0) {
						relativeIndex--;
					}
					relativeIndex -= model.sections._inner[currentSectionIndex].rowCount;
					if (model.sections._inner[currentSectionIndex].footerHeight > 0) {
						relativeIndex--;
					}
				}
				currentSectionIndex--;
			}
		}
		return relativeIndex;
	}
}

/**
 * @hidden 
 */
export class CellEffect extends GridEffect {
	static $t: Type = markType(CellEffect, 'CellEffect', (<any>GridEffect).$type);
	private _columnId: number = 0;
	get columnId(): number {
		return this._columnId;
	}
	set columnId(value: number) {
		this._columnId = value;
	}
	private _tempColumnIndex: number = 0;
	get tempColumnIndex(): number {
		return this._tempColumnIndex;
	}
	set tempColumnIndex(value: number) {
		this._tempColumnIndex = value;
	}
	private _tempColumnFixedPosition: FixedCellPositions = <FixedCellPositions>0;
	get tempColumnFixedPosition(): FixedCellPositions {
		return this._tempColumnFixedPosition;
	}
	set tempColumnFixedPosition(value: FixedCellPositions) {
		this._tempColumnFixedPosition = value;
	}
	private _path: CellPath = null;
	get path(): CellPath {
		return this._path;
	}
	set path(value: CellPath) {
		this._path = value;
	}
	private _requiresColumnId: boolean = false;
	get requiresColumnId(): boolean {
		return this._requiresColumnId;
	}
	set requiresColumnId(value: boolean) {
		this._requiresColumnId = value;
	}
	appliesToCell(path: CellPath, model: VisualModel): boolean {
		if (this.path.row == path.row) {
			if (this.columnId == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
				if (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) {
					return true;
				}
			}
			if (this.tempColumnIndex >= 0) {
				if (this.tempColumnIndex == path.column && this.tempColumnFixedPosition == path.fixedPosition) {
					return true;
				}
			} else {
				let column = model.getColumnById(this.columnId);
				if (column == null) {
					return false;
				}
				if (path.column == column.index && column.position == path.fixedPosition) {
					return true;
				}
			}
		}
		return false;
	}
	onRowInsertedAt(path: RowPath): void {
		this.path = <CellPath>this.modifyRowForInsertion(this.path, path);
	}
	onRowRemovedAt(path: RowPath): void {
		this.path = <CellPath>this.modifyRowForRemoval(this.path, path);
	}
}

/**
 * @hidden 
 */
export class CellPositionEffect extends CellEffect {
	static $t: Type = markType(CellPositionEffect, 'CellPositionEffect', (<any>CellEffect).$type);
	appliesToCell(path: CellPath, model: VisualModel): boolean {
		return this.path.equals(path);
	}
	onRowInsertedAt(path: RowPath): void {
		this.path = <CellPath>this.modifyRowForInsertion(this.path, path);
	}
	onRowRemovedAt(path: RowPath): void {
		this.path = <CellPath>this.modifyRowForRemoval(this.path, path);
	}
}

/**
 * @hidden 
 */
export class RowEffect extends GridEffect {
	static $t: Type = markType(RowEffect, 'RowEffect', (<any>GridEffect).$type);
	private _path: RowPath = null;
	get path(): RowPath {
		return this._path;
	}
	set path(value: RowPath) {
		this._path = value;
	}
	appliesToRow(path: RowPath, model: VisualModel): boolean {
		if (this.path.equals(path)) {
			return true;
		}
		return false;
	}
	onRowInsertedAt(path: RowPath): void {
		this.path = this.modifyRowForInsertion(this.path, path);
	}
	onRowRemovedAt(path: RowPath): void {
		this.path = this.modifyRowForRemoval(this.path, path);
	}
}

/**
 * @hidden 
 */
export class RowCellsEffect extends GridEffect {
	static $t: Type = markType(RowCellsEffect, 'RowCellsEffect', (<any>GridEffect).$type);
	private _path: RowPath = null;
	get path(): RowPath {
		return this._path;
	}
	set path(value: RowPath) {
		this._path = value;
	}
	appliesToCell(path: CellPath, model: VisualModel): boolean {
		if (this.path.section == path.section && this.path.row == path.row && this.path.fixedPosition == path.fixedPosition) {
			return true;
		}
		return false;
	}
	onRowInsertedAt(path: RowPath): void {
		this.path = this.modifyRowForInsertion(this.path, path);
	}
	onRowRemovedAt(path: RowPath): void {
		this.path = this.modifyRowForRemoval(this.path, path);
	}
	getRelativeIndex(model: VisualModel, item: CellPath): number {
		if (this.startItem == null || item.isSpanningCell) {
			return 0;
		}
		if (item.isRowSeparator) {
			return this.getRelativeIndex(model, this.lastItem);
		}
		let startRenderedIndex = model.columns._inner[this.startItem.column].renderedIndex;
		let itemRenderedIndex = model.columns._inner[item.column].renderedIndex;
		if (item.pinned == PinnedPositions.None) {
			itemRenderedIndex = model.columns._inner[item.column].renderedIndex - model.leftColumnOffset;
		} else if (item.pinned == PinnedPositions.Right) {
			itemRenderedIndex = model.columns._inner[item.column].renderedIndex - (model.leftColumnOffset + model.rightColumnOffset);
		}
		return itemRenderedIndex - startRenderedIndex;
	}
}

/**
 * @hidden 
 */
export class GridEffectManager extends Base {
	static $t: Type = markType(GridEffectManager, 'GridEffectManager');
	private _tickProvider: ITickProvider = null;
	protected get tickProvider(): ITickProvider {
		return this._tickProvider;
	}
	constructor(tickProvider: ITickProvider, owner: Grid) {
		super();
		this._tickProvider = tickProvider;
		this.owner = owner;
	}
	onRowInsertedAt(row: RowPath): void {
		for (let i = 0; i < this._rowCellsEffects.count; i++) {
			this._rowCellsEffects._inner[i].onRowInsertedAt(row);
		}
		for (let i1 = 0; i1 < this._rowEffects.count; i1++) {
			this._rowEffects._inner[i1].onRowInsertedAt(row);
		}
		for (let i2 = 0; i2 < this._cellEffects.count; i2++) {
			this._cellEffects._inner[i2].onRowInsertedAt(row);
		}
	}
	onRowRemovedAt(row: RowPath): void {
		for (let i = this._rowCellsEffects.count - 1; i >= 0; i--) {
			if (row.equals(this._rowCellsEffects._inner[i].path)) {
				this.removeRowCellsEffect(this._rowCellsEffects._inner[i].path, false, this._rowCellsEffects._inner[i]);
			} else {
				this._rowCellsEffects._inner[i].onRowRemovedAt(row);
			}
		}
		for (let i1 = this._rowEffects.count - 1; i1 >= 0; i1--) {
			if (row.equals(this._rowEffects._inner[i1].path)) {
				this.removeRowEffect(this._rowEffects._inner[i1].path, false, this._rowEffects._inner[i1]);
			} else {
				this._rowEffects._inner[i1].onRowRemovedAt(row);
			}
		}
		for (let i2 = this._cellEffects.count - 1; i2 >= 0; i2--) {
			if (row.equals(this._cellEffects._inner[i2].path)) {
				this.removeCellEffect(this._cellEffects._inner[i2].path, false, this._cellEffects._inner[i2]);
			} else {
				this._cellEffects._inner[i2].onRowRemovedAt(row);
			}
		}
	}
	private _columnEffects: List$1<ColumnEffect> = new List$1<ColumnEffect>((<any>ColumnEffect).$type, 0);
	private _columnCellsEffects: List$1<ColumnCellsEffect> = new List$1<ColumnCellsEffect>((<any>ColumnCellsEffect).$type, 0);
	private _rowEffects: List$1<RowEffect> = new List$1<RowEffect>((<any>RowEffect).$type, 0);
	private _rowCellsEffects: List$1<RowCellsEffect> = new List$1<RowCellsEffect>((<any>RowCellsEffect).$type, 0);
	private _cellEffects: List$1<CellEffect> = new List$1<CellEffect>((<any>CellEffect).$type, 0);
	private _spacerEffects: List$1<SpacerEffect> = new List$1<SpacerEffect>((<any>SpacerEffect).$type, 0);
	private lastRenderTime: number = -30;
	private _tickId: number = -1;
	private _owner: Grid = null;
	get owner(): Grid {
		return this._owner;
	}
	set owner(value: Grid) {
		this._owner = value;
	}
	private normalTick(): void {
		let hasColumnEffects: boolean = this._columnEffects.count > 0;
		this.owner.refreshSuspended = true;
		this.tick(false);
		if (hasColumnEffects) {
			this.owner.spatialEngine.invalidateColumnWidths(this.owner, this.owner.model, <number>truncate(this.owner.availableWidth));
			this.forceTickColumns();
		}
		this.owner.refreshSuspended = false;
		this.owner.renderingEngine.invalidateVisibility(() => this.owner.visibilityEngine.calculate(this.owner));
		this.owner.renderingEngine.refresh(this.owner.model, true);
	}
	forceTickColumns(): boolean {
		let hasColumnEffects: boolean = this._columnEffects.count > 0;
		let currentTime: number = this.getCurrentTime();
		let model = this.owner.model;
		let controller = this.owner.gridLayerController;
		this.tickColumnEffects(currentTime, model, controller);
		return hasColumnEffects;
	}
	forceTickRows(): void {
		let currentTime: number = this.getCurrentTime();
		let model = this.owner.model;
		let controller = this.owner.gridLayerController;
		this.tickRowEffects(currentTime, model, controller);
	}
	forceTickCells(): void {
		let currentTime: number = this.getCurrentTime();
		let model = this.owner.model;
		let controller = this.owner.gridLayerController;
		this.tickCellEffects(currentTime, model, controller);
	}
	tick(force: boolean): void {
		let currentTime: number = this.getCurrentTime();
		if ((currentTime - this.lastRenderTime < 15) && !force) {
			this._tickProvider.requestFrame(this._tickId);
			return;
		}
		let model = this.owner.model;
		let controller = this.owner.gridLayerController;
		let done: boolean = true;
		if (!this.tickColumnEffects(currentTime, model, controller)) {
			done = false;
		}
		if (!this.tickSpacerEffects(currentTime, model, controller)) {
			done = false;
		}
		if (!this.tickRowEffects(currentTime, model, controller)) {
			done = false;
		}
		if (!this.tickCellEffects(currentTime, model, controller)) {
			done = false;
		}
		if (done && this._columnEffects.count == 0 && this._columnCellsEffects.count == 0 && this._cellEffects.count == 0 && this._rowEffects.count == 0 && this._rowCellsEffects.count == 0 && this._spacerEffects.count == 0) {
			this.teardownTicking();
		} else {
			this._tickProvider.requestFrame(this._tickId);
		}
	}
	private getCurrentTime(): number {
		let time: Date = dateNow();
		return time.getTime();
	}
	private teardownTicking(): void {
		this._tickProvider.teardownTicking(this._tickId);
		this._tickId = -1;
	}
	private ensureTicking(): void {
		if (this._tickId == -1) {
			this._tickId = this._tickProvider.setupTicking(runOn(this, this.normalTick));
			this._tickProvider.requestFrame(this._tickId);
		}
	}
	addColumnEffect(column: ColumnInfo, effect: ColumnEffect): void {
		effect.columnId = column.uniqueID;
		effect.startTime = this.getCurrentTime();
		this.removeColumnEffect(column.uniqueID, true, effect);
		this._columnEffects.add(effect);
		this.ensureTicking();
	}
	removeColumnEffect(columnId: number, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._columnEffects.count - 1; i >= 0; i--) {
			if (this._columnEffects._inner[i].columnId == columnId && this._columnEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._columnEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._columnEffects.removeAt(i);
			}
		}
	}
	addSpacerEffect(spacer: GridColumnSpacer, effect: SpacerEffect): void {
		effect.spacerId = spacer.uniqueId;
		effect.startTime = this.getCurrentTime();
		this.removeSpacerEffect(spacer, true, effect);
		this._spacerEffects.add(effect);
		this.ensureTicking();
	}
	removeSpacerEffect(spacer: GridColumnSpacer, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._spacerEffects.count - 1; i >= 0; i--) {
			if (this._spacerEffects._inner[i].spacerId == spacer.uniqueId && this._spacerEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._spacerEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._spacerEffects.removeAt(i);
			}
		}
	}
	addColumnCellsEffect(column: ColumnInfo, effect: ColumnCellsEffect): void {
		effect.columnId = column.uniqueID;
		effect.startTime = this.getCurrentTime();
		this.removeColumnCellsEffect(column.uniqueID, true, effect);
		this._columnCellsEffects.add(effect);
		this.ensureTicking();
	}
	addRowSeparatorsEffect(effect: ColumnCellsEffect): void {
		effect.columnId = CellPath.rOW_SEPARATOR_COLUMN_INDEX;
		effect.startTime = this.getCurrentTime();
		this.removeColumnCellsEffect(CellPath.rOW_SEPARATOR_COLUMN_INDEX, true, effect);
		this._columnCellsEffects.add(effect);
		this.ensureTicking();
	}
	addSectionCellsEffect(effect: ColumnCellsEffect): void {
		effect.columnId = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
		effect.startTime = this.getCurrentTime();
		this.removeColumnCellsEffect(CellPath.sPANNING_ELEMENT_COLUMN_INDEX, true, effect);
		this._columnCellsEffects.add(effect);
		this.ensureTicking();
	}
	removeColumnCellsEffect(columnId: number, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._columnCellsEffects.count - 1; i >= 0; i--) {
			if (this._columnCellsEffects._inner[i].columnId == columnId && this._columnCellsEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._columnCellsEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._columnCellsEffects.removeAt(i);
			}
		}
	}
	addRowEffect(row: RowPath, effect: RowEffect): void {
		effect.path = row;
		effect.startTime = this.getCurrentTime();
		this.removeRowEffect(row, true, effect);
		this._rowEffects.add(effect);
		this.ensureTicking();
	}
	removeRowEffect(row: RowPath, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._rowEffects.count - 1; i >= 0; i--) {
			if (this._rowEffects._inner[i].path.equals(row) && this._rowEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._rowEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._rowEffects.removeAt(i);
			}
		}
	}
	addRowCellsEffect(row: RowPath, effect: RowCellsEffect): void {
		effect.path = row;
		effect.startTime = this.getCurrentTime();
		this.removeRowCellsEffect(row, true, effect);
		this._rowCellsEffects.add(effect);
		this.ensureTicking();
	}
	removeRowCellsEffect(row: RowPath, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._rowCellsEffects.count - 1; i >= 0; i--) {
			if (this._rowCellsEffects._inner[i].path.equals(row) && this._rowCellsEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._rowCellsEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._rowCellsEffects.removeAt(i);
			}
		}
	}
	addCellEffect(cell: CellPath, effect: CellEffect, columnId: number): void {
		effect.columnId = columnId;
		effect.path = cell;
		effect.startTime = this.getCurrentTime();
		effect.requiresColumnId = true;
		this.removeCellEffect(cell, true, effect);
		this._cellEffects.add(effect);
		this.ensureTicking();
	}
	addCellPositionEffect(cell: CellPath, effect: CellPositionEffect): void {
		effect.path = cell;
		effect.startTime = this.getCurrentTime();
		effect.requiresColumnId = false;
		this.removeCellEffect(cell, true, effect);
		this._cellEffects.add(effect);
		this.ensureTicking();
	}
	removeCellEffect(cell: CellPath, isCancel: boolean, canceledBy: GridEffect): void {
		for (let i = this._cellEffects.count - 1; i >= 0; i--) {
			if (this._cellEffects._inner[i].path.equals(cell) && this._cellEffects._inner[i].intentsMatchForCancel(canceledBy)) {
				if (isCancel) {
					this._cellEffects._inner[i].notifyCanceled(canceledBy);
				}
				this._cellEffects.removeAt(i);
			}
		}
	}
	tickColumnEffects(currentTime: number, model: VisualModel, controller: GridLayerController): boolean {
		let done: boolean = true;
		let column: ColumnInfo;
		let columnEffect: ColumnEffect;
		let finishedEffects: List$1<ColumnEffect> = new List$1<ColumnEffect>((<any>ColumnEffect).$type, 0);
		for (let j = 0; j < this._columnEffects.count; j++) {
			if (model.getColumnById(this._columnEffects._inner[j].columnId) == null) {
				this.removeColumnEffect(this._columnEffects._inner[j].columnId, false, this._columnEffects._inner[j]);
			}
		}
		for (let i = 0; i < model.columns.count; i++) {
			column = model.columns._inner[i];
			for (let j1 = 0; j1 < this._columnEffects.count; j1++) {
				columnEffect = this._columnEffects._inner[j1];
				if (columnEffect.appliesToColumn(column, model)) {
					if (!columnEffect.tickForColumn(column, model, controller, currentTime)) {
						done = false;
					} else {
						finishedEffects.add(columnEffect);
					}
				}
			}
		}
		for (let i1 = 0; i1 < finishedEffects.count; i1++) {
			this.removeColumnEffect(finishedEffects._inner[i1].columnId, false, finishedEffects._inner[i1]);
			finishedEffects._inner[i1].notifyFinished();
		}
		return done;
	}
	tickSpacerEffects(currentTime: number, model: VisualModel, controller: GridLayerController): boolean {
		let done: boolean = true;
		let spacers = model.spacers;
		let finishedSpacers: List$1<GridColumnSpacer> = new List$1<GridColumnSpacer>((<any>GridColumnSpacer).$type, 0);
		let finishedEffects: List$1<SpacerEffect> = new List$1<SpacerEffect>((<any>SpacerEffect).$type, 0);
		for (let i = 0; i < spacers.count; i++) {
			let spacerCollection = spacers._inner[i];
			for (let j = 0; j < spacerCollection.count; j++) {
				let currSpacer = spacerCollection._inner[j];
				for (let k = 0; k < this._spacerEffects.count; k++) {
					if (this._spacerEffects._inner[k].appliesToSpacer(currSpacer, model)) {
						if (!this._spacerEffects._inner[k].tickForObject(currSpacer, model, controller, currentTime)) {
							done = false;
						} else {
							finishedSpacers.add(currSpacer);
							finishedEffects.add(this._spacerEffects._inner[k]);
						}
					}
				}
			}
		}
		for (let i1 = 0; i1 < finishedSpacers.count; i1++) {
			this.removeSpacerEffect(finishedSpacers._inner[i1], false, finishedEffects._inner[i1]);
			finishedEffects._inner[i1].notifyFinished();
		}
		return done;
	}
	tickRowEffects(currentTime: number, model: VisualModel, controller: GridLayerController): boolean {
		let done: boolean = true;
		let path: CellPath = new CellPath(1, 0, 0, 0);
		let rowEffect: RowEffect;
		for (let i = 0; i < this._rowEffects.count; i++) {
			rowEffect = this._rowEffects._inner[i];
			path.fixedPosition = rowEffect.path.fixedPosition;
			path.row = rowEffect.path.row;
			path.section = rowEffect.path.section;
			if (!rowEffect.tickForRowSection(model.sections._inner[path.section], model, controller, currentTime)) {
				done = false;
			}
		}
		return done;
	}
	tickCellEffects(currentTime: number, model: VisualModel, controller: GridLayerController): boolean {
		let done: boolean = true;
		if (this._columnCellsEffects.count == 0 && this._rowCellsEffects.count == 0 && this._cellEffects.count == 0) {
			return true;
		}
		for (let v = 0; v < this._columnCellsEffects.count; v++) {
			this._columnCellsEffects._inner[v].tempColumnIndex = -1;
			let column = model.getColumnById(this._columnCellsEffects._inner[v].columnId);
			if (column != null) {
				this._columnCellsEffects._inner[v].tempColumnIndex = column.index;
				this._columnCellsEffects._inner[v].tempColumnFixedPosition = column.position;
			}
			this._columnCellsEffects._inner[v].markFinished = true;
		}
		for (let x = 0; x < this._rowCellsEffects.count; x++) {
			this._rowCellsEffects._inner[x].markFinished = true;
		}
		for (let y = 0; y < this._cellEffects.count; y++) {
			this._cellEffects._inner[y].tempColumnIndex = -1;
			if (this._cellEffects._inner[y].requiresColumnId) {
				let column1 = model.getColumnById(this._cellEffects._inner[y].columnId);
				if (column1 != null) {
					this._cellEffects._inner[y].tempColumnIndex = column1.index;
					this._cellEffects._inner[y].tempColumnFixedPosition = column1.position;
				}
			}
			this._cellEffects._inner[y].markFinished = true;
		}
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let currLayer = model.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				for (let k = 0; k < this._columnCellsEffects.count; k++) {
					let columnCellsEffect = this._columnCellsEffects._inner[k];
					if (columnCellsEffect.appliesToCell(currKey, model)) {
						if (!columnCellsEffect.tickForCell(currLayer.valueList._inner[p], model, controller, currentTime)) {
							columnCellsEffect.markFinished = false;
						}
					}
				}
				for (let k1 = 0; k1 < this._rowCellsEffects.count; k1++) {
					let rowCellsEffect = this._rowCellsEffects._inner[k1];
					if (rowCellsEffect.appliesToCell(currKey, model)) {
						if (!rowCellsEffect.tickForCell(currLayer.valueList._inner[p], model, controller, currentTime)) {
							rowCellsEffect.markFinished = false;
						}
					}
				}
				for (let k2 = 0; k2 < this._cellEffects.count; k2++) {
					let cellEffect = this._cellEffects._inner[k2];
					if (cellEffect.appliesToCell(currKey, model)) {
						if (!cellEffect.tickForCell(currLayer.valueList._inner[p], model, controller, currentTime)) {
							cellEffect.markFinished = false;
						}
					}
				}
			}
		}
		let finishedColumnCellEffects: List$1<ColumnCellsEffect> = new List$1<ColumnCellsEffect>((<any>ColumnCellsEffect).$type, 0);
		for (let n = 0; n < this._columnCellsEffects.count; n++) {
			if (this._columnCellsEffects._inner[n].durationHasElapsed(model, controller, currentTime) && this._columnCellsEffects._inner[n].markFinished) {
				finishedColumnCellEffects.add(this._columnCellsEffects._inner[n]);
			} else {
				done = false;
			}
		}
		let finishedRowCellEffects: List$1<RowCellsEffect> = new List$1<RowCellsEffect>((<any>RowCellsEffect).$type, 0);
		for (let p1 = 0; p1 < this._rowCellsEffects.count; p1++) {
			if (this._rowCellsEffects._inner[p1].durationHasElapsed(model, controller, currentTime) && this._rowCellsEffects._inner[p1].markFinished) {
				finishedRowCellEffects.add(this._rowCellsEffects._inner[p1]);
			} else {
				done = false;
			}
		}
		let finishedCellEffects: List$1<CellEffect> = new List$1<CellEffect>((<any>CellEffect).$type, 0);
		for (let q = 0; q < this._cellEffects.count; q++) {
			if (this._cellEffects._inner[q].durationHasElapsed(model, controller, currentTime) && this._cellEffects._inner[q].markFinished) {
				finishedCellEffects.add(this._cellEffects._inner[q]);
			} else {
				done = false;
			}
		}
		for (let r = 0; r < finishedColumnCellEffects.count; r++) {
			this.removeColumnCellsEffect(finishedColumnCellEffects._inner[r].columnId, false, finishedColumnCellEffects._inner[r]);
			finishedColumnCellEffects._inner[r].notifyFinished();
		}
		for (let s = 0; s < finishedRowCellEffects.count; s++) {
			this.removeRowCellsEffect(finishedRowCellEffects._inner[s].path, false, finishedRowCellEffects._inner[s]);
			finishedRowCellEffects._inner[s].notifyFinished();
		}
		for (let t = 0; t < finishedCellEffects.count; t++) {
			this.removeCellEffect(finishedCellEffects._inner[t].path, false, finishedCellEffects._inner[t]);
			finishedCellEffects._inner[t].notifyFinished();
		}
		return done;
	}
}

/**
 * @hidden 
 */
export class GridLayerController extends Base {
	static $t: Type = markType(GridLayerController, 'GridLayerController');
	private _recyclingManager: RecyclingManager = new RecyclingManager();
	containsPath(path: CellPath, model: VisualModel): CellModel {
		let layers = model.gridLayers;
		let count = layers.count;
		for (let l: number = 0; l < count; l++) {
			let ret = layers._inner[l].tryGetValueFast(path);
			if (<any>ret != undefined) {
				return ret;
			}
		}
		return null;
	}
	ensureModelReady(path: CellPath, grid: Grid, visualModel: VisualModel, desiredLayer: GridLayer, modelType: ModelTypes, isPinned: boolean, isSticky: boolean, isLastPinnedModel: boolean): CellModel {
		let existingModel = this.containsPath(path, visualModel);
		if (existingModel == null) {
			let model: CellModel = null;
			let resolvedValue: any = null;
			let isPlaceholder: boolean = false;
			let fullRow: number = -1;
			if (path.isContentCell) {
				fullRow = grid.adapter.getDataRow(path);
				resolvedValue = grid.adapter.resolveValueForPath(grid, path);
				if (resolvedValue == null && grid.adapter.isPlaceholderValue(path)) {
					isPlaceholder = true;
				}
			}
			let resolvedStyleKey = grid.getStyleKey(path, grid, resolvedValue, fullRow);
			model = this._recyclingManager.dequeue(resolvedStyleKey);
			if (model == null) {
				model = grid.createModel(path, resolvedStyleKey);
			} else {
				model.reset();
			}
			let checkPath = path;
			if (model.path != null) {
				checkPath = model.path;
			}
			if (visualModel.hiddenLayer.containsKey(checkPath)) {
				visualModel.hiddenLayer.item(checkPath).remove(model);
				if (visualModel.hiddenLayer.item(checkPath).count == 0) {
					visualModel.hiddenLayer.remove(checkPath);
				}
			}
			desiredLayer.add(path, model);
			model.currentLayer = desiredLayer;
			model.path = path;
			model.modelType = modelType;
			model.dataRow = fullRow;
			model.isRowPinned = isPinned;
			model.isRowSticky = isSticky;
			model.isLastStickyRow = isLastPinnedModel;
			model.pinned = path.pinned;
			let isCollapsableCell = false;
			let isExpanded = false;
			let indent = 0;
			let columnIdx = model.path.column;
			let isFirstColumn = (columnIdx >= 0 && visualModel.columns._inner[columnIdx].renderedIndex == 0) || path.isSpanningCell;
			if (isFirstColumn) {
				indent = grid.adapter.getRowIndent(model.path.row);
				let rowType = grid.adapter.getRowType(model.path.row);
				if (rowType == DataSourceRowType.SectionHeader && grid.isGroupCollapsable) {
					if (grid.shiftSectionContent) {
						if (path.column == CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX || (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX && visualModel.fixedColumnWidthLeft == 0)) {
							isCollapsableCell = grid.isGroupCollapsable;
							isExpanded = grid.actualDataSource.getIsRowExpandedAtIndex(model.path.row);
						}
					} else {
						isCollapsableCell = grid.isGroupCollapsable;
						isExpanded = grid.actualDataSource.getIsRowExpandedAtIndex(model.path.row);
					}
				}
			}
			model.isCollapsable = isCollapsableCell;
			model.isExpanded = isExpanded;
			model.indent = indent;
			grid.onModelRejoined(model, resolvedValue, grid.adapter.resolveRow(fullRow));
			if (isPlaceholder) {
				model.virtualizationPercentage = 1;
			}
			return model;
		} else {
			this.moveToLayer(path, visualModel, desiredLayer);
			existingModel.modelType = modelType;
			existingModel.path = path;
			existingModel.isRowPinned = isPinned;
			existingModel.isRowSticky = isSticky;
			existingModel.isLastStickyRow = isLastPinnedModel;
			existingModel.pinned = path.pinned;
			let isCollapsableCell1 = false;
			let isExpanded1 = false;
			let indent1 = 0;
			let columnIdx1 = existingModel.path.column;
			let isFirstColumn1 = (columnIdx1 >= 0 && visualModel.columns._inner[columnIdx1].renderedIndex == 0) || path.isSpanningCell;
			if (isFirstColumn1) {
				indent1 = grid.adapter.getRowIndent(existingModel.path.row);
				let rowType1 = grid.adapter.getRowType(existingModel.path.row);
				if (rowType1 == DataSourceRowType.SectionHeader && grid.isGroupCollapsable) {
					if (grid.shiftSectionContent) {
						if (path.column == CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX || (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX && visualModel.fixedColumnWidthLeft == 0)) {
							isCollapsableCell1 = grid.isGroupCollapsable;
							isExpanded1 = grid.actualDataSource.getIsRowExpandedAtIndex(existingModel.path.row);
						}
					} else {
						isCollapsableCell1 = grid.isGroupCollapsable;
						isExpanded1 = grid.actualDataSource.getIsRowExpandedAtIndex(existingModel.path.row);
					}
				}
			}
			existingModel.isCollapsable = isCollapsableCell1;
			existingModel.isExpanded = isExpanded1;
			existingModel.indent = indent1;
			return existingModel;
		}
	}
	private getLayer(path: CellPath, model: VisualModel): GridLayer {
		for (let l: number = 0; l < model.gridLayers.count; l++) {
			if (model.gridLayers._inner[l].containsKey(path)) {
				return model.gridLayers._inner[l];
			}
		}
		return null;
	}
	private moveToLayer(path: CellPath, visualModel: VisualModel, desiredLayer: GridLayer): void {
		let currentLayer = this.getLayer(path, visualModel);
		if (currentLayer == null || currentLayer == desiredLayer) {
			return;
		}
		let model = currentLayer.item(path);
		currentLayer.remove(path);
		desiredLayer.add(path, model);
		model.currentLayer = desiredLayer;
	}
	private moveToHiddenLayer(path: CellPath, visualModel: VisualModel, currentLayer: GridLayer): void {
		if (currentLayer == null) {
			currentLayer = this.getLayer(path, visualModel);
		}
		if (currentLayer == null) {
			return;
		}
		let model = currentLayer.item(path);
		currentLayer.remove(path);
		let models: List$1<CellModel> = null;
		if (visualModel.hiddenLayer.containsKey(path)) {
			models = visualModel.hiddenLayer.item(path);
			if (models.count == 1) {
				let newPath = <CellPath>path.clone();
				visualModel.hiddenLayer.remove(path);
				visualModel.hiddenLayer.add(newPath, models);
			}
		} else {
			models = new List$1<CellModel>((<any>CellModel).$type, 0);
			visualModel.hiddenLayer.add(path, models);
		}
		models.add(model);
	}
	removeModel(path: CellPath, visualModel: VisualModel): void {
		let currLayer = this.getLayer(path, visualModel);
		if (currLayer == null) {
			return;
		}
		let model = this.getModel(path, visualModel);
		this.moveToHiddenLayer(path, visualModel, currLayer);
		this._recyclingManager.enqueue(model);
	}
	removeModelFromLayer(path: CellPath, layer: GridLayer, visualModel: VisualModel): void {
		if (layer == null) {
			return;
		}
		let model = layer.item(path);
		this.moveToHiddenLayer(path, visualModel, layer);
		this._recyclingManager.enqueue(model);
	}
	getModel(path: CellPath, model: VisualModel): CellModel {
		for (let l: number = 0; l < model.gridLayers.count; l++) {
			if (model.gridLayers._inner[l].containsKey(path)) {
				return model.gridLayers._inner[l].item(path);
			}
		}
		return null;
	}
	positionModel(model: CellModel, visualModel: VisualModel, left: number, top: number, width: number, height: number): void {
		if (model.path.isHeaderSeparatorCell) {
			model.x = left + model.leftOffset + (model.leftPercentOffset * visualModel.columns._inner[model.path.column].actualWidth);
		} else {
			model.x = left + model.leftOffset + (model.leftPercentOffset * model.width);
		}
		model.y = top + model.topOffset + (model.topPercentOffset * model.height);
		model.snappedX = <number>truncate(Math.round(model.x));
		model.snappedY = <number>truncate(Math.round(model.y));
		model.width = <number>truncate(width);
		model.height = <number>truncate(height);
	}
}

/**
 * @hidden 
 */
export class VisibilityEngine extends Base {
	static $t: Type = markType(VisibilityEngine, 'VisibilityEngine');
	private _topRow: RowPath = null;
	private _bottomRow: RowPath = null;
	private _headerIsSeparatePanel: boolean = false;
	get headerIsSeparatePanel(): boolean {
		return this._headerIsSeparatePanel;
	}
	set headerIsSeparatePanel(value: boolean) {
		this._headerIsSeparatePanel = value;
	}
	private _visibleRegionExpansion: number = 0;
	get visibleRegionExpansion(): number {
		return this._visibleRegionExpansion;
	}
	set visibleRegionExpansion(value: number) {
		this._visibleRegionExpansion = value;
	}
	constructor() {
		super();
	}
	private _refreshRequired: boolean = false;
	markRefreshRequired(): void {
		this._refreshRequired = true;
	}
	calculate(controller: Grid): void {
		let force: boolean = false;
		if (this._refreshRequired) {
			this._refreshRequired = false;
			force = true;
		}
		this.calculate1(controller, controller.model, controller.spatialEngine, force);
	}
	calculate1(controller: Grid, model: VisualModel, spatialEngine: SpatialEngine, forceRefresh: boolean): void {
		controller.flushRowsInvalidate();
		let actualVisibleRegion = model.actualVisibleRegion;
		if (actualVisibleRegion.isEmpty) {
			return;
		}
		if (actualVisibleRegion.width == 0 || actualVisibleRegion.height == 0) {
			return;
		}
		if (model.columns.count == 0) {
			return;
		}
		if (controller.adapter == null) {
			return;
		}
		let parameters = this.getCalculationParameters(controller, model, spatialEngine, actualVisibleRegion);
		for (let i = 0; i < model.visibleColumns.count; i++) {
			let columnIndex = model.visibleColumns._inner[i];
			let columnOffset = spatialEngine.getColumnOffset(columnIndex, controller, model);
			model.columns._inner[columnIndex].computedOffset = columnOffset;
		}
		model.pinnedBottomCount = 0;
		model.stickyRowsHeight = 0;
		model.rootSummaryCount = 0;
		model.topRow = parameters.topRow;
		model.bottomRow = parameters.bottomRow;
		model.leftColumn = parameters.leftColumn;
		model.rightColumn = parameters.rightColumn;
		model.leftColumnOffset = parameters.leftColumnOffset;
		model.rightColumnOffset = parameters.rightColumnOffset;
		controller.onVisibleRangeChanged();
		if (model.visibleColumns.count == 0) {
			return;
		}
		this._topRow = parameters.topRow;
		this._bottomRow = parameters.bottomRow;
		let layersController = controller.gridLayerController;
		controller.refreshSuspended = true;
		this.hideNonVisibleModels(controller, model, parameters, layersController);
		this.calculateHeaders(controller, model, parameters, layersController);
		parameters.top += model.fixedRowHeight;
		if (this._bottomRow.row == -1) {
			return;
		}
		this.calculateRows(controller, model, model.actualVisibleRegion, parameters, false);
		this.calculatePinnedArea(controller, model, parameters, layersController);
		controller.effectManager.forceTickCells();
		controller.refreshSuspended = false;
	}
	getCalculationParameters(controller: Grid, model: VisualModel, spatialEngine: SpatialEngine, actualVisibleRegion: Rect): CalculationParameters {
		let parameters: CalculationParameters;
		parameters = new CalculationParameters();
		parameters.top = actualVisibleRegion.top;
		parameters.bottom = actualVisibleRegion.bottom;
		parameters.left = actualVisibleRegion.left;
		parameters.right = actualVisibleRegion.right;
		if (this.visibleRegionExpansion > 0) {
			let expansionAmount = this.visibleRegionExpansion * controller.rowHeight;
			parameters.top = Math.max(parameters.top - expansionAmount, 0);
			parameters.bottom = Math.min(parameters.bottom + expansionAmount, model.absoluteHeight);
			parameters.left = Math.max(parameters.left - expansionAmount, 0);
			parameters.right = Math.min(parameters.right + expansionAmount, model.absoluteWidth);
		}
		parameters.inset = controller.inset;
		parameters.adjustedLeft = Math.max(parameters.left, controller.inset.left);
		parameters.adjustedRight = Math.min(parameters.right, model.absoluteWidth - controller.inset.right);
		parameters.adjustedMaxWidth = parameters.adjustedRight - parameters.adjustedLeft;
		parameters.topRow = spatialEngine.positionToRow(parameters.top + model.headerHeight + model.headerRowSeparatorHeight, model);
		parameters.bottomRow = spatialEngine.positionToRow(parameters.bottom, model);
		parameters.leftColumn = 0;
		parameters.rightColumn = 0;
		model.visibleColumns.clear();
		let width: number = model.fixedColumnWidthLeft + <number>truncate(controller.inset.left);
		let previousWidth: number = width;
		let pinnedLeftCount: number = 0;
		let pinnedRightCount: number = 0;
		for (let i = 0; i < model.columns.count; i++) {
			let columnInfo = model.columns._inner[i];
			let spacer = model.spacers._inner[i];
			let accumulateWidth = model.columns._inner[i].fixedPosition == PinnedPositions.None;
			if (accumulateWidth) {
				width += <number>truncate(Math.round(spacer.getLeftActualWidth(-1)));
				if (columnInfo.state != ColumnStates.Moving) {
					width += (columnInfo.actualWidth) + controller.model.columnSpacing - <number>truncate(Math.round(columnInfo.getShiftAmount(model)));
				}
			}
			if (model.columns._inner[i].fixedPosition == PinnedPositions.Left) {
				model.visibleColumns.insert(pinnedLeftCount, i);
				pinnedLeftCount++;
			} else if (model.columns._inner[i].fixedPosition == PinnedPositions.Right) {
				model.visibleColumns.insert(model.visibleColumns.count, i);
				pinnedRightCount++;
			} else {
				if (width >= parameters.adjustedLeft + model.fixedColumnWidthLeft && previousWidth <= parameters.adjustedRight - model.fixedColumnWidthRight) {
					model.visibleColumns.insert(model.visibleColumns.count - pinnedRightCount, i);
				} else if (model.columns._inner[i].state == ColumnStates.Hiding || model.columns._inner[i].state == ColumnStates.Showing || model.columns._inner[i].state == ColumnStates.Moving) {
					model.visibleColumns.insert(model.visibleColumns.count - pinnedRightCount, i);
				} else if (width < parameters.adjustedLeft + model.fixedColumnWidthLeft) {
					parameters.leftColumnOffset++;
				} else if (previousWidth > parameters.adjustedRight - model.fixedColumnWidthRight) {
					parameters.rightColumnOffset++;
				}
			}
			if (accumulateWidth) {
				previousWidth = width;
				width += <number>truncate(Math.round(spacer.getRightActualWidth(-1)));
			}
		}
		if (model.visibleColumns.count > 0) {
			parameters.leftColumn = model.visibleColumns._inner[0];
			parameters.rightColumn = model.visibleColumns._inner[model.visibleColumns.count - 1];
		}
		return parameters;
	}
	private hideNonVisibleModels(controller: Grid, model: VisualModel, parameters: CalculationParameters, layersController: GridLayerController): void {
		let startSection: number = this._topRow.section;
		let endSection: number = this._bottomRow.section;
		let startRow: number = this._topRow.row;
		let endRow: number = this._bottomRow.row;
		let currSection: number = 0;
		let currRow: number = 0;
		let currColumn: number = 0;
		let currHidden: boolean = false;
		let currSpansColumns: boolean = false;
		let currIsRowPinned: boolean = false;
		let currIsHeader: boolean = false;
		let currSpansRows: boolean = false;
		let currIsFixed: boolean = false;
		let headersHidden: boolean = controller.headerHeight == 0;
		let separatorsHidden: boolean = controller.rowSeparatorHeight == 0;
		let pinned: HashSet$1<number> = null;
		let pinnedRows = controller.adapter.getStickyRows();
		if (pinnedRows != null) {
			for (let i: number = 0; i < pinnedRows.length; i++) {
				if (pinned == null) {
					pinned = new HashSet$1<number>(Number_$type, 0);
				}
				pinned.add_1(pinnedRows[i]);
			}
		}
		for (let i1: number = 0; i1 < model.gridLayers.count; i1++) {
			let currLayer = model.gridLayers._inner[i1];
			currLayer.suspendCleaning = true;
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				currSpansColumns = false;
				currHidden = false;
				currSection = currKey.section;
				currRow = currKey.row;
				currColumn = currKey.column;
				currSpansColumns = currKey.isRowSeparator || currKey.isSectionBoundingCell || currKey.isSpanningCell || currKey.isPinnedLeftSeparatorCell || currKey.isPinnedRightSeparatorCell || currKey.isPinnedLeftHeaderSeparatorCell || currKey.isPinnedRightHeaderSeparatorCell;
				currSpansRows = currKey.isResizeSeparatorCell || currKey.isPinnedLeftSeparatorCell || currKey.isPinnedRightSeparatorCell;
				currIsHeader = currKey.isHeaderCell;
				currIsRowPinned = pinned != null && pinned.contains(currRow);
				currIsFixed = currKey.pinned != PinnedPositions.None;
				if (currRow == 1) {
					let a: number = 0;
				}
				if (currKey.isRowSeparator && separatorsHidden) {
					currHidden = true;
				}
				if (currKey.isHeaderCell && headersHidden) {
					currHidden = true;
				}
				if (currKey.isResizeSeparatorCell && !controller.dragger.isDragActive) {
					currHidden = true;
				}
				if ((currKey.isPinnedLeftSeparatorCell || currKey.isPinnedLeftHeaderSeparatorCell) && model.fixedColumnWidthLeft == 0) {
					currHidden = true;
				}
				if ((currKey.isPinnedRightSeparatorCell || currKey.isPinnedRightHeaderSeparatorCell) && model.fixedColumnWidthRight == 0) {
					currHidden = true;
				}
				if (!currSpansColumns && !model.visibleColumns.contains(currColumn)) {
					currHidden = true;
				} else if (!currIsHeader && (currSection < startSection || currSection > endSection)) {
					currHidden = true;
				} else {
					if (!currIsRowPinned && !currSpansRows && !currKey.isPinnedLeftSeparatorCell && !currKey.isPinnedRightSeparatorCell && !currKey.isPinnedLeftHeaderSeparatorCell && !currKey.isPinnedRightHeaderSeparatorCell) {
						if (currSection == startSection && currRow < startRow) {
							currHidden = true;
						}
						if (currSection == endSection && currRow > endRow) {
							currHidden = true;
						}
					}
				}
				if (!controller.shiftSectionContent && (currKey.column == CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX || currKey.column == CellPath.sPANNING_ELEMENT_PINNED_RIGHT_COLUMN_INDEX)) {
					currHidden = true;
				}
				if (!currHidden) {
					let rowType = controller.adapter.getRowType(currRow);
					let rowTypeSpanning = controller.adapter.isRowSpanning(rowType) && controller.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells;
					if (!currKey.isRowSeparator && !currKey.isResizeSeparatorCell && !currKey.isPinnedLeftSeparatorCell && !currKey.isPinnedRightSeparatorCell && !currKey.isPinnedLeftHeaderSeparatorCell && !currKey.isPinnedRightHeaderSeparatorCell) {
						if (model.isSectionHeaderDirty && (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter)) {
							currHidden = true;
						} else if ((rowTypeSpanning && !currSpansColumns) || (currSpansColumns && !rowTypeSpanning)) {
							currHidden = true;
						} else if ((currKey.isSectionSummaryCell && rowType != DataSourceRowType.SummaryRowSection) || (currKey.isRootSummaryCell && rowType != DataSourceRowType.SummaryRowRoot) || (!currKey.isSectionSummaryCell && rowType == DataSourceRowType.SummaryRowSection) || (!currKey.isRootSummaryCell && rowType == DataSourceRowType.SummaryRowRoot)) {
							currHidden = true;
						}
					} else if ((rowType == DataSourceRowType.SummaryRowRoot && !currKey.isRootSummarySeparator) || (rowType != DataSourceRowType.SummaryRowRoot && currKey.isRootSummarySeparator)) {
						currHidden = true;
					}
				}
				if (currHidden) {
					controller.gridLayerController.removeModelFromLayer(currKey, currLayer, model);
				}
			}
			currLayer.suspendCleaning = false;
		}
		model.isSectionHeaderDirty = false;
	}
	private calculateSections(controller: Grid, model: VisualModel, parameters: CalculationParameters): void {
		let topRow: RowPath = parameters.topRow;
		let bottomRow: RowPath = parameters.bottomRow;
		let bottomRowSection: number = bottomRow.section;
		let reusablePath = new CellPath(1, 0, 0, 0);
		for (let sectionIndex: number = topRow.section; sectionIndex <= bottomRowSection; sectionIndex++) {
			this.calculateSection(sectionIndex, controller, model, parameters, reusablePath);
		}
	}
	private calculateSection(sectionIndex: number, controller: Grid, model: VisualModel, parameters: CalculationParameters, reusablePath: CellPath): void {
		let topRow: RowPath = parameters.topRow;
		let bottomRow: RowPath = parameters.bottomRow;
		let sections: List$1<SectionInfo> = model.sections;
		let layersController: GridLayerController = controller.gridLayerController;
		let bottomRowSection: number = bottomRow.section;
		let adjustedLeft: number = parameters.adjustedLeft;
		let adjustedRight: number = parameters.adjustedRight;
		let adjustedMaxWidth: number = parameters.adjustedMaxWidth;
		let sectionInfo: SectionInfo = sections._inner[sectionIndex];
		let endRowIndex: number = sectionIndex == bottomRowSection ? bottomRow.row : sectionInfo.rowCount - 1;
		if (endRowIndex == Grid.sectionFooterRowIndex) {
			endRowIndex = sectionInfo.rowCount - 1;
		}
		let startIndex: number = 0;
		if (topRow.section == sectionIndex) {
			startIndex = topRow.row == Grid.sectionHeaderRowIndex ? 0 : topRow.row;
		}
		if (startIndex == Grid.sectionFooterRowIndex) {
			let path: CellPath = new CellPath(1, 0, sectionIndex, Grid.sectionHeaderRowIndex);
			this.updateSectionVisual(path, model, adjustedLeft, sectionInfo.offset + sectionInfo.resolveTotalHeight() - sectionInfo.footerHeight, adjustedMaxWidth, sectionIndex, false, controller);
			reusablePath.section = sectionIndex;
			reusablePath.row = Grid.sectionFooterRowIndex;
			reusablePath.column = 0;
			return;
		}
		if (sectionInfo.headerHeight > 0) {
			this.calculateSectionHeader(sectionIndex, controller, model, parameters, reusablePath, topRow, sectionInfo, startIndex);
		}
		if (sectionInfo.footerHeight > 0) {
			this.calculateSectionFooter(sectionIndex, controller, model, parameters, reusablePath, layersController, bottomRowSection, sectionInfo);
		}
		reusablePath.section = sectionIndex;
	}
	testRunCalculateRows(controller: Grid, model: VisualModel, actualVisibleRegion: Rect): List$1<PinnedRowInfo> {
		let parameters = this.getCalculationParameters(controller, model, controller.spatialEngine, actualVisibleRegion);
		return this.calculateRows(controller, model, actualVisibleRegion, parameters, true);
	}
	calculateRows(controller: Grid, model: VisualModel, actualVisibleRegion: Rect, parameters: CalculationParameters, testRun: boolean): List$1<PinnedRowInfo> {
		let bottomRow = parameters.bottomRow;
		let topRow = parameters.topRow;
		let bottomRowSection = parameters.bottomRow.section;
		let topRowSection = parameters.topRow.section;
		let reusablePath = new CellPath(1, 0, 0, 0);
		let sectionInfo = model.sections._inner[0];
		let stickyRows = controller.adapter.getStickyRowsInRange(topRow.row, bottomRow.row);
		let calculatedMax = -1;
		let calculatedFooter = -1;
		let calculatedFooterStart = -1;
		let maxPinnedTopRow = -1;
		let hasPinnedBottom = false;
		let rowSeparatorHeight = controller.rowSeparatorHeight;
		let sectionSummariesAtBottom = controller.groupSummaryDisplayMode == GroupSummaryDisplayMode.RowBottom;
		let pinnedInfos: Dictionary$2<number, PinnedRowInfo> = new Dictionary$2<number, PinnedRowInfo>(Number_$type, (<any>PinnedRowInfo).$type, 0);
		let actualPinnedRows: List$1<PinnedRowInfo> = new List$1<PinnedRowInfo>((<any>PinnedRowInfo).$type, 0);
		model.stickyFootersRowsHeight = 0;
		if (stickyRows != null && ((controller.groupDescriptions.all.count > 0 && controller.isGroupRowSticky) || controller.groupDescriptions.all.count == 0)) {
			let headerBottom = actualVisibleRegion.top + model.fullHeaderHeight;
			let gridBottom = actualVisibleRegion.bottom;
			for (let i: number = 0; i < stickyRows.length; i++) {
				let currentRowIndex: number = stickyRows[i];
				let rowType = controller.adapter.getRowType(currentRowIndex);
				let rowTop = currentRowIndex * sectionInfo.resolveFullRowHeight() + sectionInfo.offset;
				let rowInfo = new PinnedRowInfo();
				rowInfo.model = model;
				rowInfo.rowType = rowType;
				rowInfo.height = sectionInfo.getHeightForRow(currentRowIndex);
				rowInfo.actualHeight = sectionInfo.resolveFullHeightForRow(currentRowIndex);
				rowInfo.priority = controller.adapter.getStickRowPriority(currentRowIndex);
				rowInfo.index = currentRowIndex;
				rowInfo.top = rowTop;
				rowInfo.isLastRowInSection = (i == stickyRows.length - 1) || stickyRows[i + 1] != currentRowIndex + 1;
				rowInfo.isLastSummaryInSection = rowType == DataSourceRowType.SummaryRowSection && (i == stickyRows.length - 1);
				pinnedInfos.addItem(currentRowIndex, rowInfo);
				if (i == 0) {
					if (rowInfo.rowType != DataSourceRowType.SummaryRowRoot) {
						if (rowInfo.top <= headerBottom) {
							rowInfo.top += (headerBottom - rowInfo.top);
							maxPinnedTopRow = i;
						} else if (rowInfo.bottom > actualVisibleRegion.bottom) {
							rowInfo.top += (actualVisibleRegion.bottom - rowInfo.bottom);
							hasPinnedBottom = true;
						}
					} else {
						if (rowInfo.bottom > actualVisibleRegion.bottom) {
							rowInfo.top += (actualVisibleRegion.bottom - rowInfo.bottom);
							rowInfo.pinnedAtBottom = true;
							hasPinnedBottom = true;
						}
					}
					continue;
				}
				let previousRowIndex: number = stickyRows[i - 1];
				let previousRowPriority: number = controller.adapter.getStickRowPriority(previousRowIndex);
				let currentRowPriority: number = controller.adapter.getStickRowPriority(currentRowIndex);
				let previousInfo = pinnedInfos.item(previousRowIndex);
				let canPushSamePriority: boolean = controller.adapter.isExclusivelySticky(currentRowIndex);
				let previousWasPinned: boolean = i - 1 == maxPinnedTopRow;
				previousInfo.isLastSummaryInSection = (rowType != DataSourceRowType.SummaryRowSection && previousInfo.rowType == DataSourceRowType.SummaryRowSection) || (rowType == DataSourceRowType.SummaryRowSection && i == stickyRows.length - 1);
				let pushRowSettings = ((() => {
					let $ret = new PushRowSettings();
					$ret.stickyRows = stickyRows;
					$ret.pinnedInfos = pinnedInfos;
					$ret.pinnedTop = true;
					$ret.canPushSamePriority = canPushSamePriority;
					return $ret;
				})());
				if (rowInfo.rowType != DataSourceRowType.SummaryRowRoot) {
					if (rowInfo.top <= previousInfo.bottom && previousWasPinned) {
						maxPinnedTopRow = i;
						let result = this.pushRowsUpV3(i - 1, i, i, pushRowSettings);
						if (!result.success) {
							rowInfo.top = result.row.bottom;
						}
					}
					if (rowInfo.rowType == DataSourceRowType.SectionFooter) {
						let summaryRowCount = controller.adapter.getRootSummaryRowCount();
						let regionBottom = actualVisibleRegion.bottom - summaryRowCount * sectionInfo.resolveFullRowHeight();
						if (rowInfo.bottom > regionBottom) {
							rowInfo.top -= rowInfo.bottom - regionBottom;
							rowInfo.pinnedAtBottom = true;
							hasPinnedBottom = true;
							pushRowSettings.pinnedTop = false;
							let result1 = this.pushRowsUpV3(i - 1, i, i, pushRowSettings);
							if (!result1.success) {
								rowInfo.top = result1.row.bottom;
							}
						}
					} else if (sectionSummariesAtBottom && rowInfo.rowType == DataSourceRowType.SummaryRowSection) {
						let summaryRowCount1 = controller.adapter.getRootSummaryRowCount();
						let regionBottom1 = actualVisibleRegion.bottom - summaryRowCount1 * sectionInfo.resolveFullRowHeight();
						if (rowInfo.bottom > regionBottom1) {
							rowInfo.top -= rowInfo.bottom - regionBottom1;
							rowInfo.pinnedAtBottom = true;
							hasPinnedBottom = true;
							pushRowSettings.pinnedTop = false;
							let result2 = this.pushRowsUpV3(i - 1, i, i, pushRowSettings);
							if (!result2.success) {
								rowInfo.top = result2.row.bottom;
							}
						}
					}
				}
				if (rowType == DataSourceRowType.SummaryRowRoot) {
					rowInfo.top += (actualVisibleRegion.bottom - rowInfo.bottom);
					rowInfo.pinnedAtBottom = true;
					model.rootSummaryCount++;
					hasPinnedBottom = true;
					this.pushRootSummaries(controller, i - 1, i, DataSourceRowType.SummaryRowRoot, stickyRows, pinnedInfos);
				}
			}
			for (let i1 = 0; i1 < stickyRows.length; i1++) {
				for (let j = i1 + 1; j < stickyRows.length; j++) {
					let p1 = pinnedInfos.item(stickyRows[i1]);
					let p2 = pinnedInfos.item(stickyRows[j]);
					if (p2.top < p1.bottom) {
						p2.isPushedUnderStickyRows = true;
						p2.isHidden = Math.round(p2.bottom) <= Math.round(p1.bottom);
					} else {
						break;
					}
				}
			}
			for (let i2 = 0; i2 <= maxPinnedTopRow; i2++) {
				let rowIndex = stickyRows[i2];
				let top = pinnedInfos.item(rowIndex).top;
				let bottom = pinnedInfos.item(rowIndex).bottom;
				let height = pinnedInfos.item(rowIndex).height;
				let pushedUnder = pinnedInfos.item(rowIndex).isPushedUnderStickyRows;
				let isHidden = pinnedInfos.item(rowIndex).isHidden;
				calculatedMax = rowIndex;
				let isPinned = false;
				let isSticky = false;
				let lastPinnedRow = false;
				if (pinnedInfos.item(rowIndex).rowType == DataSourceRowType.ShiftedRow) {
					isPinned = true;
					isSticky = true;
				}
				if (pinnedInfos.item(rowIndex).rowType == DataSourceRowType.ShiftedRow && pinnedInfos.item(rowIndex).isLastRowInSection) {
					lastPinnedRow = true;
				}
				actualPinnedRows.add(pinnedInfos.item(rowIndex));
				if (!testRun) {
					this.calculateRow(controller, model, parameters, reusablePath, controller.gridLayerController, rowIndex, top, height, true, isPinned, isSticky, lastPinnedRow, pushedUnder, isHidden);
				}
			}
			if (hasPinnedBottom) {
				let pinnedPosition = 0;
				for (let i3 = 0; i3 < stickyRows.length; i3++) {
					let footerRowIndex = stickyRows[i3];
					if (!pinnedInfos.item(footerRowIndex).pinnedAtBottom) {
						continue;
					}
					if (calculatedFooterStart == -1) {
						calculatedFooterStart = footerRowIndex;
					}
					let top1 = pinnedInfos.item(footerRowIndex).top;
					let bottom1 = pinnedInfos.item(footerRowIndex).bottom;
					let height1 = pinnedInfos.item(footerRowIndex).height;
					let pushedUnder1 = pinnedInfos.item(footerRowIndex).isPushedUnderStickyRows;
					let isHidden1 = pinnedInfos.item(footerRowIndex).isHidden;
					calculatedFooter = footerRowIndex;
					let lastPinnedRow1 = pinnedInfos.item(footerRowIndex).rowType == DataSourceRowType.ShiftedRow && pinnedInfos.item(footerRowIndex).isLastRowInSection;
					let isSticky1 = pinnedInfos.item(footerRowIndex).rowType == DataSourceRowType.ShiftedRow;
					if (!testRun) {
						reusablePath.isPinnedBottom = true;
						reusablePath.bottomPinnedPosition = (model.pinnedBottomCount - 1) - pinnedPosition;
						this.calculateRow(controller, model, parameters, reusablePath, controller.gridLayerController, footerRowIndex, top1, height1, true, isSticky1, isSticky1, lastPinnedRow1, pushedUnder1, isHidden1);
						reusablePath.isPinnedBottom = false;
						reusablePath.bottomPinnedPosition = -1;
					}
					pinnedPosition++;
				}
			}
		}
		for (let rowIndex1: number = Math.max(calculatedMax + 1, topRow.row); rowIndex1 <= bottomRow.row; rowIndex1++) {
			if (calculatedFooterStart != -1 && calculatedFooter != -1) {
				if (rowIndex1 >= calculatedFooterStart && rowIndex1 <= calculatedFooter) {
					continue;
				}
			}
			let top2 = sectionInfo.getOffsetForRow(rowIndex1);
			top2 += sectionInfo.offset;
			let height2 = sectionInfo.getHeightForRow(rowIndex1);
			let lastPinnedRow2 = false;
			let isPinned1 = false;
			let isSticky2 = false;
			let rowType1 = controller.adapter.getRowType(rowIndex1);
			if (rowType1 == DataSourceRowType.ShiftedRow) {
				isSticky2 = true;
				isPinned1 = true;
			}
			if (rowType1 == DataSourceRowType.Normal && controller.adapter.isRowPinned(rowIndex1)) {
				isPinned1 = true;
			}
			if (rowType1 == DataSourceRowType.ShiftedRow) {
				if (pinnedInfos.containsKey(rowIndex1) && pinnedInfos.item(rowIndex1).isLastRowInSection) {
					lastPinnedRow2 = true;
				}
			}
			if (!testRun) {
				this.calculateRow(controller, model, parameters, reusablePath, controller.gridLayerController, rowIndex1, top2, height2, false, isPinned1, isSticky2, lastPinnedRow2, false, false);
			}
		}
		return actualPinnedRows;
	}
	private pushRootSummaries(controller: Grid, rowToPush: number, currentRow: number, rowType: DataSourceRowType, pinnedRows: number[], pinnedInfos: Dictionary$2<number, PinnedRowInfo>): void {
		if (rowToPush < 0) {
			return;
		}
		let nextIndex = pinnedRows[rowToPush];
		let currentIndex = pinnedRows[currentRow];
		if (pinnedInfos.item(nextIndex).rowType == rowType) {
			if (pinnedInfos.item(nextIndex).bottom > pinnedInfos.item(currentIndex).top) {
				pinnedInfos.item(nextIndex).top -= pinnedInfos.item(nextIndex).bottom - pinnedInfos.item(currentIndex).top;
				pinnedInfos.item(nextIndex).pinnedAtBottom = true;
				this.pushRootSummaries(controller, rowToPush - 1, rowToPush, rowType, pinnedRows, pinnedInfos);
			}
		}
	}
	private pushRowsUpV3(topRow: number, curRow: number, initialRow: number, settings: PushRowSettings): PushRowResult {
		let topRowIndex = settings.stickyRows[topRow];
		let curRowIndex = settings.stickyRows[curRow];
		let initialRowIndex = settings.stickyRows[initialRow];
		let pinnedInfos = settings.pinnedInfos;
		let topRowPriority = pinnedInfos.item(topRowIndex).priority;
		let curRowPriority = pinnedInfos.item(curRowIndex).priority;
		let initialRowPriority = pinnedInfos.item(initialRowIndex).priority;
		let lowPrioritySlidesUnderHighPriority = true;
		if (curRowIndex == 12) {
			let a: number = 0;
		}
		settings.depth++;
		if (pinnedInfos.item(curRowIndex).top < pinnedInfos.item(topRowIndex).bottom) {
			if (curRowPriority > topRowPriority || (curRowPriority == topRowPriority && settings.canPushSamePriority)) {
				let overlap = pinnedInfos.item(curRowIndex).top - pinnedInfos.item(topRowIndex).bottom;
				let canPush: boolean = this.pushRow(overlap, topRow, initialRow, settings);
				let result: PushRowResult = null;
				while (canPush && topRow > 0) {
					topRow = topRow - 1;
					result = this.pushRowsUpV3(topRow, initialRow, initialRow, settings);
					canPush = result.success;
				}
				if (result == null) {
					result = ((() => {
						let $ret = new PushRowResult();
						$ret.success = canPush;
						$ret.row = pinnedInfos.item(settings.stickyRows[topRow]);
						return $ret;
					})());
				}
				return result;
			} else if (curRowPriority == topRowPriority && !settings.canPushSamePriority) {
				return ((() => {
					let $ret = new PushRowResult();
					$ret.success = false;
					$ret.row = pinnedInfos.item(topRowIndex);
					return $ret;
				})());
			} else if (curRowPriority < topRowPriority) {
				if (initialRowPriority >= topRowPriority) {
					if (!lowPrioritySlidesUnderHighPriority) {
						let overlap1 = pinnedInfos.item(curRowIndex).top - pinnedInfos.item(topRowIndex).bottom;
						return ((() => {
							let $ret = new PushRowResult();
							$ret.success = this.pushRow(overlap1, topRow, initialRow, settings);
							$ret.row = pinnedInfos.item(topRowIndex);
							return $ret;
						})());
					} else {
						if (pinnedInfos.item(initialRowIndex).top < pinnedInfos.item(topRowIndex).bottom) {
							let overlap2 = pinnedInfos.item(initialRowIndex).top - pinnedInfos.item(topRowIndex).bottom;
							return ((() => {
								let $ret = new PushRowResult();
								$ret.success = this.pushRow(overlap2, topRow, initialRow, settings);
								$ret.row = pinnedInfos.item(topRowIndex);
								return $ret;
							})());
						}
					}
					return ((() => {
						let $ret = new PushRowResult();
						$ret.success = true;
						$ret.row = pinnedInfos.item(topRowIndex);
						return $ret;
					})());
				}
				return ((() => {
					let $ret = new PushRowResult();
					$ret.success = false;
					$ret.row = pinnedInfos.item(topRowIndex);
					return $ret;
				})());
			}
		}
		return ((() => {
			let $ret = new PushRowResult();
			$ret.success = true;
			$ret.row = pinnedInfos.item(topRowIndex);
			return $ret;
		})());
	}
	private pushRow(amount: number, rowToPush: number, initialRow: number, settings: PushRowSettings): boolean {
		let rowToPushIndex = settings.stickyRows[rowToPush];
		settings.pinnedInfos.item(rowToPushIndex).top += amount;
		settings.pinnedInfos.item(rowToPushIndex).pinnedAtBottom = !settings.pinnedTop;
		if (rowToPush > 0) {
			let result = this.pushRowsUpV3(rowToPush - 1, rowToPush, initialRow, settings);
			if (!settings.canPushSamePriority || !settings.pinnedTop) {
				if (!result.success) {
					let topRowIndex = settings.stickyRows[rowToPush - 1];
					settings.pinnedInfos.item(rowToPushIndex).top = settings.pinnedInfos.item(topRowIndex).bottom;
					return false;
				}
			}
		}
		return true;
	}
	private calculateRow(controller: Grid, model: VisualModel, parameters: CalculationParameters, reusablePath: CellPath, layersController: GridLayerController, rowIndex: number, top: number, height: number, isFloating: boolean, isPinned: boolean, isSticky: boolean, isLastPinnedRow: boolean, isPushedUnderStickyRows: boolean, isHidden: boolean): void {
		reusablePath.row = rowIndex;
		reusablePath.pinned = PinnedPositions.None;
		reusablePath.isPushedUnderStickyRows = isPushedUnderStickyRows;
		reusablePath.isCompletelyHiddenUnderStickyRows = isHidden;
		let columns: List$1<ColumnInfo> = model.columns;
		let adjustedLeft: number = parameters.adjustedLeft;
		let adjustedRight: number = parameters.adjustedRight;
		let adjustedMaxWidth: number = parameters.adjustedMaxWidth;
		let rowSeparatorHeight = controller.rowSeparatorHeight;
		let rowType = controller.adapter.getRowType(rowIndex);
		reusablePath.isRootSummaryCell = rowType == DataSourceRowType.SummaryRowRoot;
		reusablePath.isSectionSummaryCell = rowType == DataSourceRowType.SummaryRowSection;
		let isSpanning: boolean = false;
		if (rowType != DataSourceRowType.Normal) {
			isSpanning = controller.adapter.isRowSpanning(rowType) && controller.groupSummaryDisplayMode != GroupSummaryDisplayMode.Cells;
		}
		if (isSpanning) {
			let fixedLeftWidth = controller.shiftSectionContent ? model.fixedColumnWidthLeft : 0;
			let fixedRightWidth = controller.shiftSectionContent ? model.fixedColumnWidthRight : 0;
			let spanElementLeft = adjustedLeft;
			let spanElementWidth = adjustedMaxWidth;
			if (fixedLeftWidth > 0) {
				reusablePath.column = CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX;
				spanElementWidth = model.fixedColumnWidthLeft;
				this.updateCellModel(spanElementLeft, spanElementWidth, top, height, <CellPath>reusablePath.clone(), model, adjustedLeft, adjustedRight, controller, isFloating, isPinned, isSticky, isLastPinnedRow, rowType);
			}
			reusablePath.column = CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
			spanElementLeft = adjustedLeft + fixedLeftWidth;
			spanElementWidth = adjustedMaxWidth - fixedLeftWidth - fixedRightWidth;
			this.updateCellModel(spanElementLeft, spanElementWidth, top, height, <CellPath>reusablePath.clone(), model, adjustedLeft, adjustedRight, controller, isFloating, isPinned, isSticky, isLastPinnedRow, rowType);
			if (fixedRightWidth > 0) {
				reusablePath.column = CellPath.sPANNING_ELEMENT_PINNED_RIGHT_COLUMN_INDEX;
				spanElementLeft = adjustedRight - model.fixedColumnWidthRight;
				spanElementWidth = model.fixedColumnWidthRight;
				this.updateCellModel(spanElementLeft, spanElementWidth, top, height, <CellPath>reusablePath.clone(), model, adjustedLeft, adjustedRight, controller, isFloating, isPinned, isSticky, isLastPinnedRow, rowType);
			}
		} else {
			for (let i: number = 0; i < model.visibleColumns.count; i++) {
				let columnIndex = model.visibleColumns._inner[i];
				let colInfo: ColumnInfo = columns._inner[columnIndex];
				reusablePath.column = colInfo.index;
				reusablePath.pinned = colInfo.fixedPosition;
				let clonedPath = <CellPath>reusablePath.clone();
				this.updateCellModel(parameters.inset.left + colInfo.computedOffset, colInfo.actualWidth, top, height, clonedPath, model, adjustedLeft, adjustedRight, controller, isFloating, isPinned, isSticky, isLastPinnedRow, rowType);
			}
		}
		let isValidTopPinnedRow = rowType != DataSourceRowType.SummaryRowRoot && rowType != DataSourceRowType.SectionFooter && (rowType != DataSourceRowType.SummaryRowSection || controller.groupSummaryDisplayMode != GroupSummaryDisplayMode.RowBottom);
		if (isValidTopPinnedRow && isFloating) {
			model.stickyRowsHeight = <number>truncate(Math.round((top + height + controller.rowSpacingHeight) - parameters.top));
		}
		let isValidBottomPinnedRow = rowType == DataSourceRowType.SummaryRowRoot || (rowType == DataSourceRowType.SummaryRowSection && controller.groupSummaryDisplayMode == GroupSummaryDisplayMode.RowBottom);
		if (isValidBottomPinnedRow && isFloating && top < parameters.bottom) {
			model.stickyFootersRowsHeight += <number>truncate(height) + controller.rowSpacingHeight;
		}
		if (rowSeparatorHeight > 0) {
			if (isValidTopPinnedRow && isFloating) {
				model.stickyRowsHeight = <number>truncate(Math.round((top + height + controller.rowSpacingHeight + rowSeparatorHeight) - parameters.top));
			}
			if (isValidBottomPinnedRow && isFloating && top < parameters.bottom) {
				model.stickyFootersRowsHeight += rowSeparatorHeight;
			}
			reusablePath.pinned = PinnedPositions.None;
			reusablePath.column = Grid.rowSeparatorColumnIndex;
			reusablePath.isRootSummarySeparator = rowType == DataSourceRowType.SummaryRowRoot;
			this.updateSeparatorVisual(parameters, <CellPath>reusablePath.clone(), model, adjustedLeft, adjustedMaxWidth, top + height + controller.rowSpacingHeight, rowSeparatorHeight, controller, isFloating, isPinned, isSticky, isLastPinnedRow, rowType);
		}
	}
	private calculateSectionFooter(sectionIndex: number, controller: Grid, model: VisualModel, parameters: CalculationParameters, reusablePath: CellPath, layersController: GridLayerController, bottomRowSection: number, sectionInfo: SectionInfo): void {
		let adjustedLeft: number = parameters.adjustedLeft;
		let adjustedRight: number = parameters.adjustedRight;
		let adjustedMaxWidth: number = parameters.adjustedMaxWidth;
		reusablePath.section = sectionIndex;
		reusablePath.row = Grid.sectionFooterRowIndex;
		reusablePath.column = 0;
		let finalPath: CellPath = new CellPath(1, reusablePath.column, reusablePath.section, reusablePath.row);
		let actualSectionBottom: number = sectionInfo.offset + sectionInfo.resolveTotalHeight() - sectionInfo.footerHeight;
		let bottomRowTop: number = actualSectionBottom;
		if (sectionIndex == bottomRowSection) {
			bottomRowTop = parameters.bottom - sectionInfo.footerHeight;
			if (bottomRowTop < (sectionInfo.offset + sectionInfo.headerHeight)) {
				bottomRowTop = (sectionInfo.offset + sectionInfo.headerHeight);
			}
			this.updateSectionVisual1(finalPath, model, adjustedLeft, Math.min(actualSectionBottom, bottomRowTop), adjustedMaxWidth, sectionIndex, false, true, controller);
		} else {
			this.updateSectionVisual(finalPath, model, adjustedLeft, Math.min(actualSectionBottom, bottomRowTop), adjustedMaxWidth, sectionIndex, false, controller);
		}
	}
	private calculateSectionHeader(sectionIndex: number, controller: Grid, model: VisualModel, parameters: CalculationParameters, reusablePath: CellPath, topRow: RowPath, sectionInfo: SectionInfo, startIndex: number): void {
		let adjustedLeft: number = parameters.adjustedLeft;
		let adjustedRight: number = parameters.adjustedRight;
		let adjustedMaxWidth: number = parameters.adjustedMaxWidth;
		reusablePath.section = sectionIndex;
		reusablePath.row = Grid.sectionHeaderRowIndex;
		reusablePath.column = 0;
		let finalPath: CellPath = new CellPath(1, reusablePath.column, reusablePath.section, reusablePath.row);
		if (sectionIndex == topRow.section) {
			if (startIndex == sectionInfo.rowCount - 1) {
				let lastRowHeight: number = sectionInfo.resolveFullHeightForRow(startIndex);
				let lastRowPos: number = sectionInfo.getOffsetForRow(startIndex) + sectionInfo.offset;
				let proposedTop: number = (lastRowPos + lastRowHeight) - sectionInfo.headerHeight;
				this.updateSectionVisual1(finalPath, model, adjustedLeft, Math.min(proposedTop, parameters.top), adjustedMaxWidth, sectionIndex, true, true, controller);
			} else {
				this.updateSectionVisual1(finalPath, model, adjustedLeft, Math.max(sectionInfo.offset, parameters.top - controller.inset.top), adjustedMaxWidth, sectionIndex, true, true, controller);
			}
		} else {
			this.updateSectionVisual(finalPath, model, adjustedLeft, sectionInfo.offset, adjustedMaxWidth, sectionIndex, true, controller);
		}
	}
	private calculateHeaders(controller: Grid, model: VisualModel, parameters: CalculationParameters, layersController: GridLayerController): void {
		let columns: List$1<ColumnInfo> = model.columns;
		let inset = controller.inset;
		let topInset = inset.top;
		if (model.fullHeaderHeight > 0) {
			let headerTop = Math.max(parameters.top, topInset);
			model.headerIsSeparatePanel = this.headerIsSeparatePanel;
			if (this.headerIsSeparatePanel) {
				headerTop = topInset;
			}
			for (let i: number = 0; i < model.visibleColumns.count; i++) {
				let columnIndex = model.visibleColumns._inner[i];
				let colInfo: ColumnInfo = columns._inner[columnIndex];
				let path: CellPath = new CellPath(1, colInfo.index, Grid.headerSectionIndex, Grid.headerRowIndex);
				path.pinned = colInfo.fixedPosition;
				this.updateHeaderVisual(path, model, headerTop, parameters.adjustedLeft, parameters.adjustedRight, controller);
				if (controller.isHeaderSeparatorVisible) {
					let sepPath: CellPath = new CellPath(1, colInfo.index, Grid.headerSectionIndex, Grid.headerSeparatorIndex);
					sepPath.pinned = colInfo.fixedPosition;
					let border = controller.calculateHeaderSeparatorBorderWidth(controller.headerSeparatorWidth);
					let separatorWidth = controller.headerSeparatorWidth + border * 2;
					let separatorLeft = parameters.inset.left + model.columns._inner[path.column].computedOffset + model.columns._inner[path.column].actualWidth - controller.headerSeparatorWidth - border;
					this.updateVerticalSeparatorVisual(sepPath, model, headerTop, separatorLeft, separatorWidth, model.headerHeight, parameters.adjustedLeft, parameters.adjustedRight, controller);
				}
			}
			if (model.headerRowSeparatorHeight > 0) {
				let path1: CellPath = new CellPath(1, Grid.rowSeparatorColumnIndex, Grid.headerSectionIndex, Grid.headerRowIndex);
				this.updateSeparatorVisual(parameters, path1, model, parameters.adjustedLeft, parameters.adjustedMaxWidth, 0, model.headerRowSeparatorHeight, controller, false, false, false, false, DataSourceRowType.Normal);
			}
		}
		if (controller.columnResizingMode == ColumnResizingMode.Deferred && controller.dragger != null && controller.dragger.isDragActive && controller.dragger.dragType == DragType.HeaderResize) {
			let resizePath: CellPath = new CellPath(1, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, 0, RowPath.rESIZE_SEPARATOR_INDEX);
			this.updateVerticalSeparatorVisual(resizePath, model, Math.max(parameters.top, topInset), controller.resizePosition, controller.columnResizingSeparatorWidth, model.height, parameters.left, parameters.right, controller);
		}
		if (controller.columnMovingMode != ColumnMovingMode.None && controller.dragger != null && controller.dragger.isDragActive && controller.dragger.dragType == DragType.ColumnMove) {
			let resizePath1: CellPath = new CellPath(1, CellPath.sPANNING_ELEMENT_COLUMN_INDEX, 0, RowPath.rESIZE_SEPARATOR_INDEX);
			this.updateVerticalSeparatorVisual(resizePath1, model, parameters.top, controller.resizePosition, controller.columnMovingSeparatorWidth, model.height, parameters.left, parameters.right, controller);
		}
	}
	private calculatePinnedArea(controller: Grid, model: VisualModel, parameters: CalculationParameters, layersController: GridLayerController): void {
		if (model.firstNormalColumn > -1) {
			model.pinnedLeftSeparatorLeft = parameters.adjustedLeft + controller.spatialEngine.getColumnOffset(model.firstNormalColumn, controller, model) - controller.pinnedAreaSeparatorWidth;
		}
		if (model.firstRightPinnedColumn > -1) {
			let columnOffset = model.columns._inner[model.firstRightPinnedColumn].computedOffset - controller.pinnedAreaSeparatorWidth;
			if (parameters.right >= model.absoluteWidth) {
				model.pinnedRightSeparatorLeft = columnOffset + controller.inset.left;
			} else {
				model.pinnedRightSeparatorLeft = columnOffset - (model.absoluteWidth - parameters.right - controller.inset.left - controller.inset.right);
			}
		}
		let headerTop = Math.max(parameters.top - model.fullHeaderHeight, controller.inset.top);
		let headerBottom = parameters.top;
		let rootSummaryHeight = model.rootSummaryCount * (controller.rowHeight + controller.rowSeparatorHeight + controller.rowSpacingHeight);
		let rootSummaryTop = parameters.bottom - rootSummaryHeight;
		let adjustedBottom = Math.min(model.absoluteHeight - rootSummaryHeight, parameters.bottom - rootSummaryHeight);
		let contentHeight = Math.max(0, adjustedBottom - headerBottom);
		let reusablePath = new CellPath(1, 0, 0, 0);
		if (model.fixedColumnWidthLeft > 0) {
			reusablePath.column = CellPath.pINNED_LEFT_COLUMN_INDEX;
			if (model.fullHeaderHeight > 0) {
				reusablePath.row = RowPath.hEADER_ROW_INDEX;
				this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, headerTop, model.pinnedLeftSeparatorLeft, controller.pinnedAreaSeparatorWidth, model.fullHeaderHeight, parameters.adjustedLeft, parameters.right, controller);
			}
			reusablePath.row = RowPath.pINNED_SEPARATOR_INDEX;
			this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, headerBottom, model.pinnedLeftSeparatorLeft, controller.pinnedAreaSeparatorWidth, contentHeight, parameters.adjustedLeft, parameters.right, controller);
			if (model.rootSummaryCount > 0) {
				reusablePath.row = RowPath.pINNED_SEPARATOR_SUMMARY_INDEX;
				this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, rootSummaryTop, model.pinnedLeftSeparatorLeft, controller.pinnedAreaSeparatorWidth, rootSummaryHeight, parameters.adjustedLeft, parameters.right, controller);
			}
		}
		if (model.fixedColumnWidthRight > 0) {
			reusablePath.column = CellPath.pINNED_RIGHT_COLUMN_INDEX;
			if (model.fullHeaderHeight > 0) {
				reusablePath.row = RowPath.hEADER_ROW_INDEX;
				this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, headerTop, model.pinnedRightSeparatorLeft, controller.pinnedAreaSeparatorWidth, model.fullHeaderHeight, parameters.adjustedLeft, parameters.right, controller);
			}
			reusablePath.row = RowPath.pINNED_SEPARATOR_INDEX;
			this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, headerBottom, model.pinnedRightSeparatorLeft, controller.pinnedAreaSeparatorWidth, contentHeight, parameters.adjustedLeft, parameters.right, controller);
			if (model.rootSummaryCount > 0) {
				reusablePath.row = RowPath.pINNED_SEPARATOR_SUMMARY_INDEX;
				this.updateVerticalSeparatorVisual(<CellPath>reusablePath.clone(), model, rootSummaryTop, model.pinnedRightSeparatorLeft, controller.pinnedAreaSeparatorWidth, rootSummaryHeight, parameters.adjustedLeft, parameters.right, controller);
			}
		}
	}
	private prepareModel(controller: Grid, model: VisualModel, path: CellPath, desiredLayer: GridLayer, modelType: ModelTypes, left: number, top: number, width: number, height: number): void {
		this.prepareModel1(controller, model, path, desiredLayer, modelType, left, top, width, height, false, false, false);
	}
	private prepareModel1(controller: Grid, model: VisualModel, path: CellPath, desiredLayer: GridLayer, modelType: ModelTypes, left: number, top: number, width: number, height: number, isPinned: boolean, isSticky: boolean, isLastPinnedModel: boolean): void {
		let cellModel = controller.gridLayerController.ensureModelReady(path, controller, model, desiredLayer, modelType, isPinned, isSticky, isLastPinnedModel);
		controller.gridLayerController.positionModel(cellModel, model, left, top, width, height);
	}
	private updateCellModel(left: number, width: number, top: number, height: number, path: CellPath, model: VisualModel, leftEdge: number, rightEdge: number, controller: Grid, isFloating: boolean, isPinned: boolean, isSticky: boolean, isLastPinnedRow: boolean, rowType: DataSourceRowType): void {
		let desiredLayer: GridLayer = model.contentLayer;
		let fixedColumnPosition = path.pinned;
		let isColumnPinned = path.pinned != PinnedPositions.None;
		let spatialEngine = controller.spatialEngine;
		let modelType = ModelTypes.Cell;
		if (rowType == DataSourceRowType.SectionHeader) {
			modelType = ModelTypes.SectionHeader;
		}
		if (rowType == DataSourceRowType.SectionFooter) {
			modelType = ModelTypes.SectionFooter;
		}
		if (path.column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX || path.column == CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX || path.column == CellPath.sPANNING_ELEMENT_PINNED_RIGHT_COLUMN_INDEX) {
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				if (!path.isCompletelyHiddenUnderStickyRows) {
					desiredLayer = isFloating && !path.isPushedUnderStickyRows ? model.pinnedSectionLayer : model.sectionLayer;
				} else {
					desiredLayer = model.contentLayer;
				}
			}
		} else {
			if (model.columns._inner[path.column].state == ColumnStates.Showing || model.columns._inner[path.column].state == ColumnStates.Hiding || model.columns._inner[path.column].state == ColumnStates.Hidden) {
				if (isFloating) {
					desiredLayer = rowType != DataSourceRowType.SummaryRowRoot ? model.pinnedRowsSubLayer : model.subHeaderLayer;
				} else {
					desiredLayer = isColumnPinned ? model.fixedSubContentLayer : model.subContentLayer;
				}
			} else if (model.columns._inner[path.column].state == ColumnStates.Moving) {
				isColumnPinned = path.pinned != PinnedPositions.None || controller.columns._inner[path.column].oldPinned != PinnedPositions.None;
				if (isFloating) {
					desiredLayer = rowType != DataSourceRowType.SummaryRowRoot ? model.pinnedRowsSuperLayer : model.superHeaderLayer;
				} else {
					desiredLayer = isColumnPinned ? model.fixedSuperContentLayer : model.superContentLayer;
				}
			} else {
				if (isFloating) {
					desiredLayer = rowType != DataSourceRowType.SummaryRowRoot ? (isColumnPinned ? model.fixedPinnedRowsLayer : model.pinnedRowsLayer) : (isColumnPinned ? model.fixedHeaderLayer : model.headerLayer);
				} else {
					desiredLayer = isColumnPinned ? model.fixedContentLayer : model.contentLayer;
				}
			}
		}
		if (fixedColumnPosition == PinnedPositions.Left) {
			let columnOffset = model.columns._inner[path.column].computedOffset;
			left = leftEdge + columnOffset;
		} else if (fixedColumnPosition == PinnedPositions.Right) {
			let columnOffset1 = model.columns._inner[path.column].computedOffset;
			if (rightEdge >= model.absoluteWidth) {
				left = columnOffset1 + controller.inset.left;
			} else {
				left = columnOffset1 - (model.absoluteWidth - rightEdge - controller.inset.left - controller.inset.right);
			}
		}
		this.prepareModel1(controller, model, path, desiredLayer, modelType, left, top, width, height, isPinned, isSticky, isLastPinnedRow);
	}
	private updateHeaderVisual(path: CellPath, model: VisualModel, top: number, leftEdge: number, rightEdge: number, controller: Grid): void {
		let desiredLayer = path.pinned == PinnedPositions.None ? model.headerLayer : model.fixedHeaderLayer;
		if (model.columns._inner[path.column].state == ColumnStates.Showing || model.columns._inner[path.column].state == ColumnStates.Hiding || model.columns._inner[path.column].state == ColumnStates.Hidden) {
			desiredLayer = path.pinned == PinnedPositions.None ? model.subHeaderLayer : model.fixedSubHeaderLayer;
		}
		if (model.columns._inner[path.column].state == ColumnStates.Moving) {
			desiredLayer = path.pinned == PinnedPositions.None && controller.columns._inner[path.column].oldPinned == PinnedPositions.None ? model.superHeaderLayer : model.fixedSuperHeaderLayer;
		}
		let left: number = model.columns._inner[path.column].computedOffset + controller.inset.left;
		let width: number = model.columns._inner[path.column].actualWidth;
		if (path.pinned == PinnedPositions.Left) {
			left = leftEdge + model.columns._inner[path.column].computedOffset;
		} else if (path.pinned == PinnedPositions.Right) {
			let columnOffset = model.columns._inner[path.column].computedOffset;
			if (rightEdge >= model.absoluteWidth) {
				left = columnOffset + controller.inset.left;
			} else {
				left = columnOffset - (model.absoluteWidth - rightEdge - controller.inset.left - controller.inset.right);
			}
		}
		this.prepareModel(controller, model, path, desiredLayer, ModelTypes.ColumnHeader, left, top, width, model.headerHeight);
	}
	private updateVerticalSeparatorVisual(path: CellPath, model: VisualModel, top: number, left: number, width: number, height: number, leftEdge: number, rightEdge: number, controller: Grid): void {
		let desiredLayer = model.verticalSeparatorLayer;
		if (path.isHeaderSeparatorCell) {
			desiredLayer = path.pinned == PinnedPositions.None ? model.headerDecoratorLayer : model.fixedHeaderDecoratorLayer;
			if (model.columns._inner[path.column].state == ColumnStates.Showing || model.columns._inner[path.column].state == ColumnStates.Hiding || model.columns._inner[path.column].state == ColumnStates.Hidden) {
				desiredLayer = path.pinned == PinnedPositions.None ? model.subHeaderDecoratorLayer : model.fixedSubHeaderDecoratorLayer;
			}
			if (model.columns._inner[path.column].state == ColumnStates.Moving) {
				desiredLayer = path.pinned == PinnedPositions.None && controller.columns._inner[path.column].oldPinned == PinnedPositions.None ? model.superHeaderDecoratorLayer : model.fixedSuperHeaderDecoratorLayer;
			}
			if (path.pinned == PinnedPositions.Left) {
				left += leftEdge - controller.inset.left;
			} else if (path.pinned == PinnedPositions.Right) {
				if (rightEdge < model.absoluteWidth) {
					left -= model.absoluteWidth - rightEdge - controller.inset.right;
				}
			}
		}
		if (!controller.shiftSectionContent) {
			if ((path.isPinnedLeftSeparatorCell || path.isPinnedRightSeparatorCell) && path.row != RowPath.pINNED_SEPARATOR_SUMMARY_INDEX) {
				desiredLayer = model.fixedSeparatorLayer;
			}
		}
		this.prepareModel(controller, model, path, desiredLayer, ModelTypes.VerticalSeparator, left, top, width, height);
	}
	private updateSectionVisual(path: CellPath, model: VisualModel, x: number, y: number, width: number, section: number, isHeader: boolean, controller: Grid): void {
		this.updateSectionVisual1(path, model, x, y, width, section, isHeader, false, controller);
	}
	private updateSectionVisual1(path: CellPath, model: VisualModel, x: number, y: number, width: number, section: number, isHeader: boolean, bringToFront: boolean, controller: Grid): void {
		let height: number = isHeader ? model.sections._inner[section].headerHeight : model.sections._inner[section].footerHeight;
		let modelType = ModelTypes.SectionFooter;
		let desiredLayer = model.sectionLayer;
		if (isHeader) {
			modelType = ModelTypes.SectionHeader;
		}
		if (bringToFront) {
			desiredLayer = model.sectionLayer;
		}
		this.prepareModel(controller, model, path, desiredLayer, modelType, x, y, width, height);
	}
	private updateSeparatorVisual(parameters: CalculationParameters, path: CellPath, model: VisualModel, left: number, width: number, top: number, height: number, controller: Grid, isFloating: boolean, isPinned: boolean, isSticky: boolean, isLastPinnedRow: boolean, rowType: DataSourceRowType): void {
		let y: number = 0;
		let desiredLayer: GridLayer = model.contentLayer;
		if (isFloating) {
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				desiredLayer = !path.isPushedUnderStickyRows ? model.pinnedSectionLayer : model.sectionLayer;
			} else if (rowType == DataSourceRowType.SummaryRowSection) {
				desiredLayer = model.pinnedRowsLayer;
			} else if (rowType == DataSourceRowType.SummaryRowRoot) {
				desiredLayer = model.pinnedSectionSuperLayer;
			} else {
				desiredLayer = model.fixedPinnedRowsLayer;
			}
		} else {
			if (rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter) {
				desiredLayer = model.sectionLayer;
			}
		}
		if (path.isHeaderCell) {
			let inset = controller.inset;
			let topInset = inset.top;
			let headerTop = Math.max(parameters.top, topInset);
			y = headerTop + model.headerHeight;
			if (this.headerIsSeparatePanel) {
				y = parameters.inset.top + model.headerHeight;
			}
			desiredLayer = model.headerDecoratorLayer;
		} else {
			let sectionInfo: SectionInfo = model.sections._inner[path.section];
			y = top;
		}
		this.prepareModel1(controller, model, path, desiredLayer, ModelTypes.RowSeparator, left, y, width, height, isPinned, isSticky, isLastPinnedRow);
	}
}

/**
 * @hidden 
 */
export class PinnedRowInfo extends Base {
	static $t: Type = markType(PinnedRowInfo, 'PinnedRowInfo');
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _pinnedKey: string = null;
	get pinnedKey(): string {
		return this._pinnedKey;
	}
	set pinnedKey(value: string) {
		this._pinnedKey = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	get bottom(): number {
		return this.top + this.actualHeight;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	private _actualHeight: number = 0;
	get actualHeight(): number {
		return this._actualHeight;
	}
	set actualHeight(value: number) {
		this._actualHeight = value;
	}
	private _isLastRowInSection: boolean = false;
	get isLastRowInSection(): boolean {
		return this._isLastRowInSection;
	}
	set isLastRowInSection(value: boolean) {
		this._isLastRowInSection = value;
	}
	private _pinnedAtBottom: boolean = false;
	get pinnedAtBottom(): boolean {
		return this._pinnedAtBottom;
	}
	set pinnedAtBottom(value: boolean) {
		let oldValue = this._pinnedAtBottom;
		this._pinnedAtBottom = value;
		if (this._pinnedAtBottom != oldValue) {
			if (this.model != null) {
				this.model.pinnedBottomCount = Math.min(0, this._pinnedAtBottom ? this.model.pinnedBottomCount + 1 : this.model.pinnedBottomCount - 1);
			}
		}
	}
	private _rowType: DataSourceRowType = <DataSourceRowType>0;
	get rowType(): DataSourceRowType {
		return this._rowType;
	}
	set rowType(value: DataSourceRowType) {
		this._rowType = value;
	}
	private _isLastSummaryInSection: boolean = false;
	get isLastSummaryInSection(): boolean {
		return this._isLastSummaryInSection;
	}
	set isLastSummaryInSection(value: boolean) {
		this._isLastSummaryInSection = value;
	}
	private _priority: number = 0;
	get priority(): number {
		return this._priority;
	}
	set priority(value: number) {
		this._priority = value;
	}
	private _isPushedUnderStickyRows: boolean = false;
	get isPushedUnderStickyRows(): boolean {
		return this._isPushedUnderStickyRows;
	}
	set isPushedUnderStickyRows(value: boolean) {
		this._isPushedUnderStickyRows = value;
	}
	private _isHidden: boolean = false;
	get isHidden(): boolean {
		return this._isHidden;
	}
	set isHidden(value: boolean) {
		this._isHidden = value;
	}
	private _model: VisualModel = null;
	get model(): VisualModel {
		return this._model;
	}
	set model(value: VisualModel) {
		this._model = value;
	}
	toString(): string {
		return EnumUtil.getName<DataSourceRowType>(DataSourceRowType_$type, this.rowType) + "(" + this.priority + ") " + this.bottom;
	}
}

/**
 * @hidden 
 */
export class PushRowSettings extends Base {
	static $t: Type = markType(PushRowSettings, 'PushRowSettings');
	private _stickyRows: number[] = null;
	get stickyRows(): number[] {
		return this._stickyRows;
	}
	set stickyRows(value: number[]) {
		this._stickyRows = value;
	}
	private _pinnedInfos: Dictionary$2<number, PinnedRowInfo> = null;
	get pinnedInfos(): Dictionary$2<number, PinnedRowInfo> {
		return this._pinnedInfos;
	}
	set pinnedInfos(value: Dictionary$2<number, PinnedRowInfo>) {
		this._pinnedInfos = value;
	}
	private _canPushSamePriority: boolean = false;
	get canPushSamePriority(): boolean {
		return this._canPushSamePriority;
	}
	set canPushSamePriority(value: boolean) {
		this._canPushSamePriority = value;
	}
	private _pinnedTop: boolean = false;
	get pinnedTop(): boolean {
		return this._pinnedTop;
	}
	set pinnedTop(value: boolean) {
		this._pinnedTop = value;
	}
	private _depth: number = 0;
	get depth(): number {
		return this._depth;
	}
	set depth(value: number) {
		this._depth = value;
	}
}

/**
 * @hidden 
 */
export class PushRowResult extends Base {
	static $t: Type = markType(PushRowResult, 'PushRowResult');
	private _success: boolean = false;
	get success(): boolean {
		return this._success;
	}
	set success(value: boolean) {
		this._success = value;
	}
	private _row: PinnedRowInfo = null;
	get row(): PinnedRowInfo {
		return this._row;
	}
	set row(value: PinnedRowInfo) {
		this._row = value;
	}
}

/**
 * @hidden 
 */
export interface ICellRenderingEngine { 
	refresh(visualModel: VisualModel, immediate: boolean): void;
viewportChanged(): void;
invalidateVisibility(validateVisibility: () => void): void;
readonly initialRefreshFinished: boolean;
}

/**
 * @hidden 
 */
export let ICellRenderingEngine_$type = new Type(null, 'ICellRenderingEngine');

/**
 * @hidden 
 */
export class SpatialEngine extends Base {
	static $t: Type = markType(SpatialEngine, 'SpatialEngine');
	private _pendingColumnShowingAnimation: List$1<ColumnInfo> = new List$1<ColumnInfo>((<any>ColumnInfo).$type, 0);
	private _previousColumns: Dictionary$2<number, ColumnInfo> = new Dictionary$2<number, ColumnInfo>(Number_$type, (<any>ColumnInfo).$type, 0);
	private _cachePinnedLeft: List$1<number> = new List$1<number>(Number_$type, 0);
	private _cachePinnedRight: List$1<number> = new List$1<number>(Number_$type, 0);
	invalidateLayoutData(controller: Grid, model: VisualModel, availableWidth: number): void {
		model.absoluteHeight = 0;
		model.absoluteWidth = 0;
		model.absoluteHeight = <number>truncate(controller.inset.top);
		model.fixedRowHeight = <number>truncate(controller.inset.top);
		model.sections.clear();
		this._previousColumns.clear();
		for (let i = 0; i < controller.model.columns.count; i++) {
			this._previousColumns.addItem(controller.model.columns._inner[i].uniqueID, controller.model.columns._inner[i]);
		}
		model.resetColumns();
		model.fixedColumnWidthLeft = 0;
		model.fixedColumnWidthRight = 0;
		model.firstNormalColumn = -1;
		model.firstRightPinnedColumn = -1;
		controller.model.columnSpacing = controller.columnSpacingWidth;
		if (controller.adapter == null) {
			return;
		}
		let sectionCount: number = controller.adapter.getSectionCount();
		sectionCount = Math.max(1, sectionCount);
		controller.model.headerRowSeparatorHeight = controller.headerHeight > 0 ? controller.rowSeparatorHeight : 0;
		controller.model.fullHeaderHeight = controller.headerHeight + controller.model.headerRowSeparatorHeight;
		controller.model.headerHeight = controller.headerHeight;
		controller.model.absoluteHeight += controller.model.fullHeaderHeight;
		controller.model.fixedRowHeight += controller.model.fullHeaderHeight;
		controller.model.insetLeft = controller.inset.left;
		controller.model.insetRight = controller.inset.right;
		controller.model.insetTop = controller.inset.top;
		controller.model.insetBottom = controller.inset.bottom;
		for (let sectionIndex: number = 0; sectionIndex < sectionCount; sectionIndex++) {
			let sectionInfo: SectionInfo = new SectionInfo();
			sectionInfo.index = sectionIndex;
			sectionInfo.offset = model.absoluteHeight;
			sectionInfo.rowCount = controller.adapter.getRowCount();
			sectionInfo.headerHeight = controller.sectionHeaderHeight;
			sectionInfo.footerHeight = controller.sectionFooterHeight;
			sectionInfo.rowSeparatorHeight = controller.rowSeparatorHeight;
			sectionInfo.rowSpacing = controller.rowSpacingHeight;
			sectionInfo.rowHeight = controller.rowHeight;
			sectionInfo.totalRowHeight = sectionInfo.rowCount * sectionInfo.rowHeight;
			controller.model.absoluteHeight += sectionInfo.resolveTotalHeight();
			controller.model.sections.add(sectionInfo);
		}
		let colWidth: ColumnWidth = controller.defaultColumnWidth;
		let columnIndex: number = 0;
		let defaultColumnWidth: ColumnWidth = controller.defaultColumnWidth;
		let defaultColumnMinWidth: number = controller.defaultColumnMinWidth;
		this._pendingColumnShowingAnimation.clear();
		this._cachePinnedLeft.clear();
		this._cachePinnedRight.clear();
		for (columnIndex = 0; columnIndex < controller.actualColumns.count; columnIndex++) {
			let info: ColumnInfo = new ColumnInfo();
			if (this._previousColumns.containsKey(controller.actualColumns._inner[columnIndex].uniqueId)) {
				info = this._previousColumns.item(controller.actualColumns._inner[columnIndex].uniqueId);
			}
			info.index = columnIndex;
			let column = controller.actualColumns._inner[columnIndex];
			info.key = column.propertyPath;
			info.uniqueID = column.uniqueId;
			if (column.state == ColumnStates.Hidden) {
				info.leftPercentOffset = -1;
			}
			if (column.state == ColumnStates.Visible) {
				info.leftPercentOffset = 0;
			}
			info.state = column.state;
			let width: ColumnWidth = null;
			colWidth = column.width;
			if (width == null) {
				width = (colWidth == null) ? defaultColumnWidth : colWidth;
			}
			let minWidth: number = 0;
			if (!isNaN_(defaultColumnMinWidth)) {
				minWidth = defaultColumnMinWidth;
			}
			if (!isNaN_(width.minimumWidth) && width.minimumWidth > 0) {
				minWidth = Math.max(minWidth, width.minimumWidth);
			}
			if (!isNaN_(column.minWidth)) {
				minWidth = column.minWidth;
			}
			info.width = width;
			info.minWidth = minWidth;
			info.fixedPosition = column.pinned;
			info.renderedIndex = columnIndex;
			if (info.fixedPosition == PinnedPositions.Left) {
				this._cachePinnedLeft.add(columnIndex);
			}
			if (info.fixedPosition == PinnedPositions.Right) {
				this._cachePinnedRight.add(columnIndex);
			}
			if (column.state != ColumnStates.Hiding && column.state != ColumnStates.Hidden) {
				if (column.pinned == PinnedPositions.None) {
					if (model.firstNormalColumn == -1) {
						model.firstNormalColumn = columnIndex;
					}
				}
				if (model.firstRightPinnedColumn == -1 && column.pinned == PinnedPositions.Right) {
					model.firstRightPinnedColumn = columnIndex;
				}
			}
			controller.model.addColumn(info);
		}
		this.invalidateRenderIndexes(model);
		this._previousColumns.clear();
		controller.model.fixedColumnWidthLeft = 0;
		controller.model.fixedColumnWidthRight = 0;
		this.invalidateColumnWidths(controller, model, availableWidth);
		controller.effectManager.forceTickRows();
		controller.model.absoluteHeight += <number>truncate(controller.inset.bottom);
	}
	invalidateRenderIndexes(model: VisualModel): void {
		if (this._cachePinnedLeft.count > 0 || this._cachePinnedRight.count > 0) {
			for (let i = 0; i < model.columns.count; i++) {
				model.columns._inner[i].renderedIndex = this.getRenderedColumnIndex(model.columns._inner[i].fixedPosition, i, model);
			}
		}
	}
	invalidateColumnWidths(controller: Grid, model: VisualModel, availableWidth: number): void {
		model.absoluteWidth = 0;
		model.fullWidth = 0;
		model.fixedColumnWidthLeft = 0;
		model.fixedColumnWidthRight = 0;
		let totalWidth: number = controller.model.columnSpacing;
		let absoluteWidth: number = controller.model.columnSpacing;
		let starCount: number = 0;
		let starCols: List$1<ColumnInfo> = new List$1<ColumnInfo>((<any>ColumnInfo).$type, 0);
		let spacers = model.spacers;
		for (let col of fromEnum<ColumnInfo>(model.columns)) {
			if (col.width.isStarSized) {
				starCount += col.width.value * this.getVisibleRatio(col);
				starCols.add(col);
			} else {
				col.actualWidth = <number>truncate((Math.max(DeviceUtils.toPixelUnits(col.width.value), col.minWidth)));
				if (col.state != ColumnStates.Hidden) {
					if (col.state == ColumnStates.Moving) {
						absoluteWidth += col.actualWidth + controller.model.columnSpacing;
					} else {
						absoluteWidth += col.actualWidth + controller.model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
					}
					model.fullWidth += col.actualWidth + controller.model.columnSpacing;
					if (col.fixedPosition == PinnedPositions.Left) {
						model.fixedColumnWidthLeft += col.actualWidth + model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
					}
					if (col.fixedPosition == PinnedPositions.Right) {
						model.fixedColumnWidthRight += col.actualWidth + model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
					}
				}
				if (col.state == ColumnStates.Moving) {
					totalWidth += col.actualWidth + controller.model.columnSpacing;
				} else {
					totalWidth += col.actualWidth + controller.model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
				}
			}
		}
		model.fixedColumnWidthLeft = Math.max(0, model.fixedColumnWidthLeft - model.columnSpacing);
		if (starCount > 0) {
			let beforeAbsolute: number = absoluteWidth;
			absoluteWidth = SpatialEngine.updateStarWidths(controller, model, availableWidth, totalWidth, absoluteWidth, starCount, starCols);
		}
		controller.model.absoluteWidth = absoluteWidth;
		controller.model.absoluteWidth += <number>truncate((controller.inset.left + controller.inset.right));
		controller.model.fullWidth += <number>truncate((controller.inset.left + controller.inset.right));
	}
	getVisibleRatio(col: ColumnInfo): number {
		if (col.state == ColumnStates.Moving) {
			return 1;
		}
		if (col.state == ColumnStates.Hidden) {
			return 0;
		}
		let offset = 1 - Math.max(0, Math.min(1, Math.abs(col.leftPercentOffset)));
		return offset;
	}
	private static updateStarWidths(controller: Grid, model: VisualModel, availableWidth: number, totalWidth: number, absoluteWidth: number, starCount: number, starCols: List$1<ColumnInfo>): number {
		availableWidth -= totalWidth;
		availableWidth -= <number>truncate((controller.inset.left + controller.inset.right));
		availableWidth -= (starCols.count * controller.model.columnSpacing);
		availableWidth -= controller.model.separatorLeft + controller.model.separatorRight;
		let totalStarWidth: number = 0;
		let starSize: number = <number>(availableWidth) / starCount;
		if (starSize < 0) {
			starSize = 0;
		}
		if (availableWidth < 0) {
			availableWidth = 0;
		}
		let done: boolean = false;
		let isFixedSize: HashSet$1<ColumnInfo> = new HashSet$1<ColumnInfo>((<any>ColumnInfo).$type, 0);
		while (starCount > 0 && !done) {
			done = true;
			for (let col of fromEnum<ColumnInfo>(starCols)) {
				if (isFixedSize.contains(col)) {
					continue;
				}
				if (col.minWidth > starSize * col.width.value) {
					done = false;
					starCount--;
					isFixedSize.add_1(col);
					col.actualWidth = <number>truncate(col.minWidth);
					if (col.state != ColumnStates.Moving) {
						if (col.state != ColumnStates.Hidden) {
							absoluteWidth += (col.actualWidth) + controller.model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
							model.fullWidth += col.actualWidth + controller.model.columnSpacing;
						}
						if (<ColumnStates>col.state == ColumnStates.Moving) {
							let width = (col.actualWidth) + controller.model.columnSpacing;
							totalWidth += width;
							availableWidth -= width;
						} else {
							let width1 = (col.actualWidth) + controller.model.columnSpacing - <number>truncate(Math.round(col.getShiftAmount(model)));
							totalWidth += width1;
							availableWidth -= width1;
						}
					}
				}
			}
			starSize = <number>(availableWidth) / starCount;
		}
		if (availableWidth < 0) {
			availableWidth = 0;
		}
		let startPos: number = 0;
		for (let col1 of fromEnum<ColumnInfo>(starCols)) {
			if (isFixedSize.contains(col1)) {
				if (col1.fixedPosition == PinnedPositions.Left) {
					controller.model.fixedColumnWidthLeft += col1.actualWidth + controller.model.columnSpacing;
				}
				if (col1.fixedPosition == PinnedPositions.Right) {
					controller.model.fixedColumnWidthRight += col1.actualWidth + controller.model.columnSpacing;
				}
				continue;
			}
			let newWidth: number = Math.max(<number>col1.minWidth, starSize * col1.width.value);
			let newEnd: number = startPos + newWidth;
			startPos += newWidth;
			if (Math.round(newEnd) >= newEnd) {
				col1.actualWidth = <number>truncate(Math.ceil(newWidth));
			} else {
				col1.actualWidth = <number>truncate(Math.floor(newWidth));
			}
			if (col1.fixedPosition == PinnedPositions.Left) {
				controller.model.fixedColumnWidthLeft += col1.actualWidth + controller.model.columnSpacing;
			}
			if (col1.fixedPosition == PinnedPositions.Right) {
				controller.model.fixedColumnWidthRight += col1.actualWidth + controller.model.columnSpacing;
			}
			absoluteWidth += controller.model.columnSpacing;
			totalWidth += controller.model.columnSpacing;
			totalStarWidth += controller.model.columnSpacing;
			startPos += controller.model.columnSpacing;
			model.fullWidth += controller.model.columnSpacing;
			if (col1.state != ColumnStates.Hidden) {
				if (col1.state == ColumnStates.Moving) {
					absoluteWidth += col1.actualWidth;
				} else {
					absoluteWidth += col1.actualWidth - <number>truncate(Math.round(col1.getShiftAmount(model)));
				}
				model.fullWidth += col1.actualWidth;
			}
			if (col1.state == ColumnStates.Moving) {
				totalWidth += col1.actualWidth;
				totalStarWidth += col1.actualWidth;
			} else {
				totalWidth += col1.actualWidth - <number>truncate(Math.round(col1.getShiftAmount(model)));
				totalStarWidth += col1.actualWidth - <number>truncate(Math.round(col1.getShiftAmount(model)));
			}
		}
		controller.model.fixedColumnWidthLeft = Math.max(0, controller.model.fixedColumnWidthLeft - controller.model.columnSpacing);
		if (totalStarWidth < availableWidth) {
			let delta = (availableWidth - totalStarWidth - controller.model.columnSpacing);
			starCols._inner[starCols.count - 1].actualWidth += delta;
			absoluteWidth += delta;
			totalWidth += delta;
			model.fullWidth += delta;
		}
		if (totalStarWidth > availableWidth) {
			let delta1 = (availableWidth - totalStarWidth - controller.model.columnSpacing);
			starCols._inner[starCols.count - 1].actualWidth += delta1;
			absoluteWidth += delta1;
			totalWidth += delta1;
			model.fullWidth += delta1;
		}
		return absoluteWidth;
	}
	getColumnOffset(col: number, controller: Grid, model: VisualModel): number {
		return this.getColumnOffset1(col, model, false);
	}
	getColumnOffset1(col: number, model: VisualModel, ignoreLeftOffset: boolean): number {
		let offset: number = 0;
		if (model.columns._inner[col].fixedPosition == PinnedPositions.Left) {
			offset += this.calcOffsetForColumn(col, model.columns._inner[col].uniqueID, PinnedPositions.Left, model);
		}
		if (model.columns._inner[col].fixedPosition == PinnedPositions.None) {
			offset += this.calcOffsetForColumn(model.columns.count, model.columns._inner[col].uniqueID, PinnedPositions.Left, model);
			offset += this.calcOffsetForColumn(col, model.columns._inner[col].uniqueID, PinnedPositions.None, model);
		}
		if (model.columns._inner[col].fixedPosition == PinnedPositions.Right) {
			offset += this.calcOffsetForColumn(model.columns.count, model.columns._inner[col].uniqueID, PinnedPositions.Left, model);
			offset += this.calcOffsetForColumn(model.columns.count, model.columns._inner[col].uniqueID, PinnedPositions.None, model);
			offset += this.calcOffsetForColumn(col, model.columns._inner[col].uniqueID, PinnedPositions.Right, model);
		}
		offset += <number>truncate(Math.round(model.spacers._inner[col].getLeftActualWidth(model.columns._inner[col].uniqueID)));
		if (!ignoreLeftOffset) {
			offset = <number>truncate((offset + Math.round(model.columns._inner[col].getResolvedLeftOffset(model))));
		}
		return offset;
	}
	private calcOffsetForColumn(columnLimit: number, columnId: number, filter: PinnedPositions, model: VisualModel): number {
		let offset: number = 0;
		for (let i = 0; i < columnLimit; i++) {
			if (model.columns._inner[i].fixedPosition == filter) {
				offset += <number>truncate(Math.round(model.spacers._inner[i].getLeftActualWidth(columnId)));
				if (model.columns._inner[i].state != ColumnStates.Moving) {
					offset += (model.columns._inner[i].actualWidth) + model.columnSpacing - <number>truncate(Math.round(model.columns._inner[i].getShiftAmount(model)));
				}
				offset += <number>truncate(Math.round(model.spacers._inner[i].getRightActualWidth(columnId)));
			}
		}
		return offset;
	}
	getRenderedColumnIndex(fixedColumnPosition: PinnedPositions, columnIndex: number, model: VisualModel): number {
		let visibleIndex = columnIndex;
		if (fixedColumnPosition == PinnedPositions.None) {
			let columnVisibleIndex: number = 0;
			for (let i = 0; i < columnIndex; i++) {
				if (model.columns._inner[i].fixedPosition == PinnedPositions.None) {
					columnVisibleIndex++;
				}
			}
			visibleIndex = this._cachePinnedLeft.count + columnVisibleIndex;
		}
		if (fixedColumnPosition == PinnedPositions.Left) {
			let columnVisibleIndex1: number = 0;
			for (let i1 = 0; i1 < this._cachePinnedLeft.count; i1++) {
				if (this._cachePinnedLeft._inner[i1] < columnIndex) {
					columnVisibleIndex1++;
				}
			}
			visibleIndex = columnVisibleIndex1;
		}
		if (fixedColumnPosition == PinnedPositions.Right) {
			let columnVisibleIndex2: number = 0;
			for (let i2 = 0; i2 < this._cachePinnedRight.count; i2++) {
				if (this._cachePinnedRight._inner[i2] > columnIndex) {
					columnVisibleIndex2++;
				}
			}
			visibleIndex = model.columns.count - 1 - columnVisibleIndex2;
		}
		return visibleIndex;
	}
	getColumnAtRenderedIndex(renderedIndex: number, model: VisualModel): number {
		for (let i = 0; i < model.columns.count; i++) {
			if (model.columns._inner[i].renderedIndex == renderedIndex) {
				return i;
			}
		}
		return -1;
	}
	getStartOfColumnArea(col: number, controller: Grid, model: VisualModel): number {
		let columnId = model.columns._inner[col].uniqueID;
		let offset: number = <number>truncate(controller.inset.left) + model.fixedColumnWidthLeft + model.columnSpacing;
		let spacers = model.spacers;
		let columns = model.columns;
		for (let i: number = 0; i < col; i++) {
			if (columns._inner[i].fixedPosition != PinnedPositions.None) {
				continue;
			}
			offset += <number>truncate(Math.round(spacers._inner[i].getLeftActualWidth(columnId)));
			if (columns._inner[i].state != ColumnStates.Moving) {
				offset += (columns._inner[i].actualWidth) + controller.model.columnSpacing - <number>truncate(Math.round(columns._inner[i].getShiftAmount(model)));
			}
			offset += <number>truncate(Math.round(spacers._inner[i].getRightActualWidth(columnId)));
		}
		offset += <number>truncate(Math.round(spacers._inner[col].getLeftActualWidth(columnId)));
		return <number>(offset);
	}
	positionToColumn(position: number, controller: Grid, model: VisualModel): number {
		let col: number = 0;
		let width: number = 0;
		let startingOffset: number = <number>truncate(controller.inset.left);
		width += startingOffset;
		let spacers = model.spacers;
		let columns = model.columns;
		let columnsCount = columns.count;
		for (let i = 0; i < columnsCount; i++) {
			let columnInfo: ColumnInfo = columns._inner[i];
			width += <number>truncate(Math.round(spacers._inner[col].getLeftActualWidth(-1)));
			if (columnInfo.state != ColumnStates.Moving) {
				width += (columnInfo.actualWidth) + controller.model.columnSpacing - <number>truncate(Math.round(columnInfo.getShiftAmount(model)));
			}
			if (position <= width) {
				return col;
			}
			width += <number>truncate(Math.round(spacers._inner[col].getRightActualWidth(-1)));
			col++;
		}
		let limit: number = model.columns.count - 1;
		if (col > limit) {
			col = limit;
		}
		return col;
	}
	positionToRow(position: number, model: VisualModel): RowPath {
		let sectionCount: number = model.sections.count;
		for (let i = 0; i < sectionCount; i++) {
			let sectionInfo: SectionInfo = model.sections._inner[i];
			let sectionTop: number = sectionInfo.offset;
			let sectionBottom: number = sectionTop + sectionInfo.resolveTotalHeight();
			if (position <= sectionBottom) {
				if (position < sectionTop) {
					position = sectionTop;
				}
				return sectionInfo.findRowAtLocation(position);
			}
		}
		return new RowPath(model.sections.count - 1, model.sections._inner[model.sections.count - 1].rowCount - 1);
	}
	onColumnRemovedAt(layerController: GridLayerController, index: number, column: Column, model: VisualModel): void {
		this.yankColumn(layerController, index, model, false);
		for (let i = index + 1; i < model.columns.count; i++) {
			this.shiftColumn(i, model, false, index);
		}
	}
	onColumnInsertedAt(index: number, column: Column, model: VisualModel): void {
		for (let i = model.columns.count - 1; i >= index; i--) {
			this.shiftColumn(i, model, true, index);
		}
	}
	onRowInsertedAt(row: RowPath, model: VisualModel): void {
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let toIncrement = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = model.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				if (currKey.section > row.section || (currKey.section == row.section && currKey.row >= row.row)) {
					toIncrement.add(currLayer.valueList._inner[p]);
				}
			}
			currLayer.suspendCleaning = true;
			for (let j: number = 0; j < toIncrement.count; j++) {
				let currModel = toIncrement._inner[j];
				currLayer.remove(currModel.path);
				currModel.path.row = currModel.path.row + 1;
			}
			for (let j1: number = 0; j1 < toIncrement.count; j1++) {
				let currModel1 = toIncrement._inner[j1];
				currLayer.add(currModel1.path, currModel1);
			}
			currLayer.suspendCleaning = false;
		}
	}
	onRowRemovedAt(layerController: GridLayerController, row: RowPath, model: VisualModel): void {
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let toIncrement = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = model.gridLayers._inner[i];
			let toRemove: List$1<CellPath> = new List$1<CellPath>((<any>CellPath).$type, 0);
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				if (currKey.section > row.section || (currKey.section == row.section && currKey.row > row.row)) {
					toIncrement.add(currLayer.valueList._inner[p]);
				}
				if (currKey.section == row.section && currKey.row == row.row) {
					toRemove.add(currKey);
				}
			}
			currLayer.suspendCleaning = true;
			for (let k = 0; k < toRemove.count; k++) {
				let currRemove = toRemove._inner[k];
				layerController.removeModelFromLayer(currRemove, currLayer, model);
			}
			for (let j: number = 0; j < toIncrement.count; j++) {
				let currModel = toIncrement._inner[j];
				currLayer.remove(currModel.path);
				currModel.path.row = currModel.path.row - 1;
			}
			for (let j1: number = 0; j1 < toIncrement.count; j1++) {
				let currModel1 = toIncrement._inner[j1];
				currLayer.add(currModel1.path, currModel1);
			}
			currLayer.suspendCleaning = false;
		}
	}
	private shiftColumn(index: number, model: VisualModel, up: boolean, startIndex: number): void {
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let toIncrement = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = model.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				if (currKey.column == index && (currKey.isContentCell || currKey.isHeaderContentCell)) {
					toIncrement.add(currLayer.valueList._inner[p]);
				}
			}
			currLayer.suspendCleaning = true;
			for (let j: number = 0; j < toIncrement.count; j++) {
				let currModel = toIncrement._inner[j];
				currLayer.remove(currModel.path);
				if (up) {
					currModel.path.column = currModel.path.column + 1;
				} else {
					currModel.path.column = currModel.path.column - 1;
				}
				currLayer.add(currModel.path, currModel);
			}
			currLayer.suspendCleaning = false;
		}
		let spacers = model.spacers;
		if (up) {
			if (index == spacers.count - 1) {
				spacers.add(new GridColumnSpacerCollection());
			}
			for (let i1 = spacers._inner[index].count - 1; i1 >= 0; i1--) {
				if (index != startIndex || spacers._inner[index]._inner[i1].isRight) {
					spacers._inner[index + 1].add(spacers._inner[index]._inner[i1]);
					spacers._inner[index].removeAt(i1);
				}
			}
		} else {
			for (let i2 = spacers._inner[index].count - 1; i2 >= 0; i2--) {
				spacers._inner[index - 1].add(spacers._inner[index]._inner[i2]);
				spacers._inner[index].removeAt(i2);
			}
		}
	}
	private _yankedSpacers: GridColumnSpacerCollection = new GridColumnSpacerCollection();
	private yankColumn(layerController: GridLayerController, index: number, model: VisualModel, tempYank: boolean): void {
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let toYank = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = model.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				if (currKey.column == index && (currKey.isContentCell || currKey.isHeaderContentCell)) {
					toYank.add(currLayer.valueList._inner[p]);
				}
			}
			currLayer.suspendCleaning = true;
			for (let j: number = 0; j < toYank.count; j++) {
				let currModel = toYank._inner[j];
				if (tempYank) {
					currLayer.remove(currModel.path);
					currModel.path.column = CellPath.tEMP_YANKED_COLUMN_INDEX;
					currLayer.add(currModel.path, currModel);
				} else {
					layerController.removeModelFromLayer(currModel.path, currLayer, model);
				}
			}
			currLayer.suspendCleaning = false;
		}
		let spacers = model.spacers;
		if (index < spacers.count) {
			for (let i1 = spacers._inner[index].count - 1; i1 >= 0; i1--) {
				this._yankedSpacers.add(spacers._inner[index]._inner[i1]);
				spacers._inner[index].removeAt(i1);
			}
		}
	}
	private restoreColumn(index: number, model: VisualModel): void {
		for (let i: number = 0; i < model.gridLayers.count; i++) {
			let toRestore = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = model.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currKey = currLayer.keyList._inner[p];
				if (currKey.column == CellPath.tEMP_YANKED_COLUMN_INDEX && (currKey.isContentCell || currKey.isHeaderContentCell)) {
					toRestore.add(currLayer.valueList._inner[p]);
				}
			}
			currLayer.suspendCleaning = true;
			for (let j: number = 0; j < toRestore.count; j++) {
				let currModel = toRestore._inner[j];
				currLayer.remove(currModel.path);
				currModel.path.column = index;
				currLayer.add(currModel.path, currModel);
			}
			currLayer.suspendCleaning = false;
		}
	}
	onColumnsReset(layerController: GridLayerController, model: VisualModel): void {
		for (let i = 0; i < model.columns.count; i++) {
			this.yankColumn(layerController, i, model, false);
		}
	}
	onColumnMoved(layerController: GridLayerController, model: VisualModel, oldIndex: number, newIndex: number, columnId: number): void {
		this.yankColumn(layerController, oldIndex, model, true);
		for (let i = oldIndex + 1; i < model.columns.count; i++) {
			this.shiftColumn(i, model, false, oldIndex);
		}
		for (let i1 = model.columns.count - 1; i1 >= newIndex; i1--) {
			this.shiftColumn(i1, model, true, newIndex);
		}
		this.restoreColumn(newIndex, model);
		let spacers = model.spacers;
		for (let i2 = this._yankedSpacers.count - 1; i2 >= 0; i2--) {
			spacers._inner[oldIndex].add(this._yankedSpacers._inner[i2]);
			this._yankedSpacers.removeAt(i2);
		}
	}
	getAbsoluteIndex(model: VisualModel, rowPath: RowPath): number {
		if (rowPath == null) {
			return 0;
		}
		let index: number = 0;
		for (let i = 0; i < rowPath.section; i++) {
			index += model.sections._inner[i].rowCount;
		}
		index += rowPath.row;
		return index;
	}
}

/**
 * @hidden 
 */
export class ColumnExchanger extends Base {
	static $t: Type = markType(ColumnExchanger, 'ColumnExchanger');
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _column: Column = null;
	get column(): Column {
		return this._column;
	}
	set column(value: Column) {
		this._column = value;
	}
	private _targetIndex: number = 0;
	get targetIndex(): number {
		return this._targetIndex;
	}
	set targetIndex(value: number) {
		this._targetIndex = value;
	}
	constructor(initNumber: number);
	constructor(initNumber: number, column: Column, targetIndex: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let column: Column = <Column>_rest[0];
				let targetIndex: number = <number>_rest[1];
				this.column = column;
				this.targetIndex = targetIndex;
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class ColumnExchangersCollection extends ObservableCollection$1<ColumnExchanger> {
	static $t: Type = markType(ColumnExchangersCollection, 'ColumnExchangersCollection', (<any>ObservableCollection$1).$type.specialize((<any>ColumnExchanger).$type));
	constructor() {
		super((<any>ColumnExchanger).$type, 0);
	}
}

/**
 * @hidden 
 */
export class ResponsiveEngine extends Base {
	static $t: Type = markType(ResponsiveEngine, 'ResponsiveEngine');
	private _lastExecutedState: ResponsiveState = null;
	private _orientationDelayMS: number = 500;
	private _sizeChangedDelayMS: number = 200;
	private _lastSizeChange: Date = dateMinValue();
	private _isFirstTime: boolean = false;
	private _isPending: boolean = false;
	private _pendingAnimationIds: List$1<number> = null;
	private _grid: Grid = null;
	private _responsiveStates: ResponsiveStatesCollection = null;
	get responsiveStates(): ResponsiveStatesCollection {
		return this._responsiveStates;
	}
	set responsiveStates(value: ResponsiveStatesCollection) {
		this._responsiveStates = value;
	}
	private _enteringState: ResponsiveState = null;
	private _manualStateRequested: ResponsiveState = null;
	constructor(grid: Grid) {
		super();
		this._grid = grid;
		this.responsiveStates = new ResponsiveStatesCollection();
		this._pendingAnimationIds = new List$1<number>(Number_$type, 0);
		this._isFirstTime = true;
		this._manualStateRequested = null;
	}
	setManualState(state: ResponsiveState): void {
		if (this._enteringState == state) {
			return;
		}
		this._manualStateRequested = state;
		if (this._isFirstTime) {
		} else {
			this.requestResponsiveExecute();
		}
	}
	sizeChanged(width: number, height: number): void {
		this._lastSizeChange = dateNow();
		if (this._isFirstTime) {
			this.executeResponsiveHandler();
			this._isFirstTime = false;
		} else {
			this.requestResponsiveExecute();
		}
	}
	private requestResponsiveExecute(): void {
		if (this._isPending) {
			return;
		}
		let delayInMS = this.resolveRemainingDelayInMS();
		this._isPending = true;
		this._grid.delayedExecutionManager.executeIn(() => {
			if (!this._isPending) {
				return;
			}
			this._isPending = false;
			if (this.resolveRemainingDelayInMS() < 1) {
				this.executeResponsiveHandler();
			} else {
				this.requestResponsiveExecute();
			}
		}, delayInMS);
	}
	private executeResponsiveHandler(): void {
		if (this._enteringState != null) {
			return;
		}
		let toState: ResponsiveState = null;
		if (this.responsiveStates.count > 0) {
			toState = this.findProperState(this._grid.availableWidth);
		}
		if (toState == this._lastExecutedState) {
			return;
		}
		if (this._lastExecutedState != null && toState != null) {
			this._lastExecutedState.onStateExited();
			this._lastExecutedState = null;
		}
		if (toState != null) {
			if (this._manualStateRequested != null) {
				this._manualStateRequested = null;
			}
			this._enteringState = toState;
			this._lastExecutedState = toState;
			this._lastExecutedState.activePhase = 0;
			this._lastExecutedState.onStateEntering();
			this.processPhases(this._lastExecutedState);
			this._lastExecutedState.onStateEntered();
		}
	}
	private processPhases(state: ResponsiveState): void {
		if (state.responsivePhases.count == state.activePhase) {
			this._enteringState = null;
			let properState = this.findProperState(this._grid.availableWidth);
			{
				if (properState != this._lastExecutedState) {
					this.requestResponsiveExecute();
				}
			}
			return;
		}
		if (this._isFirstTime) {
			this.processPhasesCore(state);
			this._lastExecutedState.activePhase = this._lastExecutedState.activePhase + 1;
			this.processPhases(state);
		} else {
			this._grid.delayedExecutionManager.executeIn(() => {
				let $t = this._grid.animationManager;
				$t.animationCompleted = delegateCombine($t.animationCompleted, runOn(this, this.animationManager_AnimationCompleted));
				let $t1 = this._grid.animationManager;
				$t1.animationCanceled = delegateCombine($t1.animationCanceled, runOn(this, this.animationManager_AnimationCanceled));
				this._grid.animationManager.startTrackingAnimations();
				this.processPhasesCore(state);
				this._pendingAnimationIds = this._grid.animationManager.endTrackingAnimations();
				if (this._pendingAnimationIds.count == 0) {
					this.handleAnimationCompleted(-1);
				}
			}, state.responsivePhases._inner[0].delayMilliseconds);
		}
	}
	private processPhasesCore(state: ResponsiveState): void {
		let phase = state.responsivePhases._inner[state.activePhase];
		this.processPropertySetters(phase.columnPropertySetters);
		this.processColumnExchangers(phase.columnExchangers);
	}
	private animationManager_AnimationCanceled(sender: any, args: GridAnimationManagerAnimationCanceledEventArgs): void {
		this.handleAnimationCompleted(args.animationId);
	}
	private animationManager_AnimationCompleted(sender: any, args: GridAnimationManagerAnimationCompletedEventArgs): void {
		this.handleAnimationCompleted(args.animationId);
	}
	private handleAnimationCompleted(id: number): void {
		if (this._pendingAnimationIds.contains(id)) {
			this._pendingAnimationIds.remove(id);
		}
		if (this._pendingAnimationIds.count == 0) {
			let $t = this._grid.animationManager;
			$t.animationCompleted = delegateRemove($t.animationCompleted, runOn(this, this.animationManager_AnimationCompleted));
			let $t1 = this._grid.animationManager;
			$t1.animationCanceled = delegateRemove($t1.animationCanceled, runOn(this, this.animationManager_AnimationCanceled));
			this._lastExecutedState.activePhase = this._lastExecutedState.activePhase + 1;
			this.processPhases(this._lastExecutedState);
		}
	}
	private processPropertySetters(propSetters: ColumnPropertySettersCollection): void {
		for (let i: number = 0; i < propSetters.count; i++) {
			let setter = propSetters._inner[i];
			let col: Column = null;
			for (let j = 0; j < this._grid.actualColumns.count; j++) {
				if (this._grid.actualColumns._inner[j].name == setter.columnName) {
					col = this._grid.actualColumns._inner[j];
					break;
				}
			}
			if (col == null) {
				for (let j1 = 0; j1 < this._grid.actualColumns.count; j1++) {
					if (this._grid.actualColumns._inner[j1].propertyPath == setter.columnName) {
						col = this._grid.actualColumns._inner[j1];
						break;
					}
				}
			}
			if (col == null) {
				continue;
			}
			let externalObject: any = col.externalObject;
			this._grid.propertySetter.setProperty(externalObject, setter.propertyName, setter.value);
		}
	}
	private processColumnExchangers(columnExchangers: ColumnExchangersCollection): void {
		for (let i: number = 0; i < columnExchangers.count; i++) {
			let exchanger = columnExchangers._inner[i];
			if (exchanger.column == null) {
				continue;
			}
			if (exchanger.targetIndex >= this._grid.actualColumns.count) {
				continue;
			}
			let oldCol = this._grid.actualColumns._inner[exchanger.targetIndex];
			this._grid.exchangeColumn(exchanger.column, oldCol);
		}
	}
	private findProperState(width: number): ResponsiveState {
		if (this._manualStateRequested != null) {
			return this._manualStateRequested;
		}
		for (let i: number = 0; i < this.responsiveStates.count; i++) {
			let state = this.responsiveStates._inner[i];
			if (width >= state.minimumWidth && width <= state.maximumWidth && !state.isManualState) {
				return state;
			}
		}
		return null;
	}
	private resolveRemainingDelayInMS(): number {
		let timeFromLastSizeChanged: number = timeSpanFromMilliseconds(this._sizeChangedDelayMS);
		let timeFromLastOrientation: number = timeSpanFromMilliseconds(this._orientationDelayMS);
		if (+(this._lastSizeChange) != +(dateMinValue())) {
			timeFromLastSizeChanged = +(dateNow()) - +(this._lastSizeChange);
		}
		let timeFromLastSizeChangedMilliseconds: number = <number>truncate(timeSpanTotalMilliseconds(timeFromLastSizeChanged));
		let diffSizeChanged = <number>(this._sizeChangedDelayMS - timeFromLastSizeChangedMilliseconds);
		if (diffSizeChanged < 1) {
			diffSizeChanged = 0;
		}
		return diffSizeChanged;
	}
}

/**
 * @hidden 
 */
export class ResponsivePhase extends Base {
	static $t: Type = markType(ResponsivePhase, 'ResponsivePhase');
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _delayMilliseconds: number = 0;
	get delayMilliseconds(): number {
		return this._delayMilliseconds;
	}
	set delayMilliseconds(value: number) {
		this._delayMilliseconds = value;
	}
	private _columnPropertySetters: ColumnPropertySettersCollection = new ColumnPropertySettersCollection();
	get columnPropertySetters(): ColumnPropertySettersCollection {
		return this._columnPropertySetters;
	}
	private _columnExchangers: ColumnExchangersCollection = new ColumnExchangersCollection();
	get columnExchangers(): ColumnExchangersCollection {
		return this._columnExchangers;
	}
	addColumnPropertySetter(setter: ColumnPropertySetter): ResponsivePhase {
		this.columnPropertySetters.add(setter);
		return this;
	}
	columnPropertySetter(): ColumnPropertySetter {
		let setter: ColumnPropertySetter = new ColumnPropertySetter(0);
		this.columnPropertySetters.add(setter);
		return setter;
	}
	addColumnExchanger(exchanger: ColumnExchanger): ResponsivePhase {
		this.columnExchangers.add(exchanger);
		return this;
	}
	columnExchanger(): ResponsivePhase {
		let exchanger: ColumnExchanger = new ColumnExchanger(0);
		this.columnExchangers.add(exchanger);
		return this;
	}
}

/**
 * @hidden 
 */
export class ResponsivePhasesCollection extends ObservableCollection$1<ResponsivePhase> {
	static $t: Type = markType(ResponsivePhasesCollection, 'ResponsivePhasesCollection', (<any>ObservableCollection$1).$type.specialize((<any>ResponsivePhase).$type));
	constructor() {
		super((<any>ResponsivePhase).$type, 0);
	}
}

/**
 * @hidden 
 */
export class ResponsiveState extends Base {
	static $t: Type = markType(ResponsiveState, 'ResponsiveState');
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _minimumWidth: number = 0;
	get minimumWidth(): number {
		return this._minimumWidth;
	}
	set minimumWidth(value: number) {
		this._minimumWidth = value;
	}
	private _maximumWidth: number = 0;
	get maximumWidth(): number {
		return this._maximumWidth;
	}
	set maximumWidth(value: number) {
		this._maximumWidth = value;
	}
	stateEntering: (sender: any, eventArgs: ResponsiveStateEnteringEventArgs) => void = null;
	stateEntered: (sender: any, eventArgs: ResponsiveStateEnteredEventArgs) => void = null;
	stateExited: (sender: any, eventArgs: ResponsiveStateExitedEventArgs) => void = null;
	private _isManualState: boolean = false;
	get isManualState(): boolean {
		return this._isManualState;
	}
	set isManualState(value: boolean) {
		this._isManualState = value;
	}
	private _activePhase: number = 0;
	get activePhase(): number {
		return this._activePhase;
	}
	set activePhase(value: number) {
		this._activePhase = value;
	}
	private _responsivePhases: ResponsivePhasesCollection = new ResponsivePhasesCollection();
	get responsivePhases(): ResponsivePhasesCollection {
		return this._responsivePhases;
	}
	addResponsivePhase(phase: ResponsivePhase): ResponsiveState {
		this.responsivePhases.add(phase);
		return this;
	}
	responsivePhase(): ResponsivePhase {
		let phase = new ResponsivePhase();
		this.responsivePhases.add(phase);
		return phase;
	}
	onStateEntering(): void {
		if (this.stateEntering != null) {
			this.stateEntering(this, new ResponsiveStateEnteringEventArgs());
		}
	}
	onStateEntered(): void {
		if (this.stateEntered != null) {
			this.stateEntered(this, new ResponsiveStateEnteredEventArgs());
		}
	}
	onStateExited(): void {
		if (this.stateExited != null) {
			this.stateExited(this, new ResponsiveStateExitedEventArgs());
		}
	}
}

/**
 * @hidden 
 */
export class ResponsiveStatesCollection extends ObservableCollection$1<ResponsiveState> {
	static $t: Type = markType(ResponsiveStatesCollection, 'ResponsiveStatesCollection', (<any>ObservableCollection$1).$type.specialize((<any>ResponsiveState).$type));
	constructor() {
		super((<any>ResponsiveState).$type, 0);
	}
}

/**
 * @hidden 
 */
export class GridLayer extends FastIterationDictionary$2<CellPath, CellModel> {
	static $t: Type = markType(GridLayer, 'GridLayer', (<any>FastIterationDictionary$2).$type.specialize((<any>CellPath).$type, (<any>CellModel).$type));
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	constructor(name: string) {
		super((<any>CellPath).$type, (<any>CellModel).$type, 0);
		this.name = name;
	}
}

/**
 * @hidden 
 */
export class ColumnInfo extends Base {
	static $t: Type = markType(ColumnInfo, 'ColumnInfo');
	constructor() {
		super();
		this.leftOffset = 0;
		this.leftPercentOffset = 0;
		this.topOffset = 0;
		this.minWidth = 0;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _renderedIndex: number = 0;
	get renderedIndex(): number {
		return this._renderedIndex;
	}
	set renderedIndex(value: number) {
		this._renderedIndex = value;
	}
	private _width: ColumnWidth = null;
	get width(): ColumnWidth {
		return this._width;
	}
	set width(value: ColumnWidth) {
		this._width = value;
	}
	private _minWidth: number = 0;
	get minWidth(): number {
		return this._minWidth;
	}
	set minWidth(value: number) {
		this._minWidth = value;
	}
	private _actualWidth: number = 0;
	get actualWidth(): number {
		return this._actualWidth;
	}
	set actualWidth(value: number) {
		this._actualWidth = value;
	}
	private _computedOffset: number = 0;
	get computedOffset(): number {
		return this._computedOffset;
	}
	set computedOffset(value: number) {
		this._computedOffset = value;
	}
	private _key: string = null;
	get key(): string {
		return this._key;
	}
	set key(value: string) {
		this._key = value;
	}
	private _uniqueID: number = 0;
	get uniqueID(): number {
		return this._uniqueID;
	}
	set uniqueID(value: number) {
		this._uniqueID = value;
	}
	private _position: FixedCellPositions = <FixedCellPositions>0;
	get position(): FixedCellPositions {
		return this._position;
	}
	set position(value: FixedCellPositions) {
		this._position = value;
	}
	private _leftOffset: number = 0;
	get leftOffset(): number {
		return this._leftOffset;
	}
	set leftOffset(value: number) {
		this._leftOffset = value;
	}
	private _topOffset: number = 0;
	get topOffset(): number {
		return this._topOffset;
	}
	set topOffset(value: number) {
		this._topOffset = value;
	}
	private _leftPercentOffset: number = 0;
	get leftPercentOffset(): number {
		return this._leftPercentOffset;
	}
	set leftPercentOffset(value: number) {
		this._leftPercentOffset = value;
	}
	getResolvedLeftOffset(model: VisualModel): number {
		let actualLeftOffset = this.leftPercentOffset;
		if (this.state != ColumnStates.Moving) {
			if (actualLeftOffset > 0 && actualLeftOffset < 1) {
				actualLeftOffset = 0;
			}
			if (actualLeftOffset >= 1) {
				actualLeftOffset = actualLeftOffset - 1;
			}
		}
		return this.leftOffset + actualLeftOffset * <number>(this.actualWidth + model.columnSpacing);
	}
	getShiftAmount(model: VisualModel): number {
		let shiftAmount: number = Math.abs(this.leftOffset + this.leftPercentOffset * <number>(this.actualWidth + model.columnSpacing));
		if (shiftAmount < (-1 * (this.actualWidth + model.columnSpacing))) {
			shiftAmount = (-1 * (this.actualWidth + model.columnSpacing));
		}
		if (shiftAmount > (this.actualWidth + model.columnSpacing)) {
			shiftAmount = (this.actualWidth + model.columnSpacing);
		}
		return shiftAmount;
	}
	private _state: ColumnStates = <ColumnStates>0;
	get state(): ColumnStates {
		return this._state;
	}
	set state(value: ColumnStates) {
		this._state = value;
	}
	private _fixedPosition: PinnedPositions = <PinnedPositions>0;
	get fixedPosition(): PinnedPositions {
		return this._fixedPosition;
	}
	set fixedPosition(value: PinnedPositions) {
		this._fixedPosition = value;
	}
}

/**
 * @hidden 
 */
export class SectionInfo extends Base {
	static $t: Type = markType(SectionInfo, 'SectionInfo');
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _rowCount: number = 0;
	get rowCount(): number {
		return this._rowCount;
	}
	set rowCount(value: number) {
		this._rowCount = value;
	}
	private _totalRowHeight: number = 0;
	get totalRowHeight(): number {
		return this._totalRowHeight;
	}
	set totalRowHeight(value: number) {
		this._totalRowHeight = value;
	}
	private _rowSeparatorHeight: number = 0;
	get rowSeparatorHeight(): number {
		return this._rowSeparatorHeight;
	}
	set rowSeparatorHeight(value: number) {
		this._rowSeparatorHeight = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	private _footerHeight: number = 0;
	get footerHeight(): number {
		return this._footerHeight;
	}
	set footerHeight(value: number) {
		this._footerHeight = value;
	}
	private _rowHeight: number = 0;
	get rowHeight(): number {
		return this._rowHeight;
	}
	set rowHeight(value: number) {
		this._rowHeight = value;
	}
	private _rowSpacing: number = 0;
	get rowSpacing(): number {
		return this._rowSpacing;
	}
	set rowSpacing(value: number) {
		this._rowSpacing = value;
	}
	private _offset: number = 0;
	get offset(): number {
		return this._offset;
	}
	set offset(value: number) {
		this._offset = value;
	}
	private _rowHeights: List$1<number> = null;
	get rowHeights(): List$1<number> {
		return this._rowHeights;
	}
	set rowHeights(value: List$1<number>) {
		this._rowHeights = value;
	}
	private _rowOffsets: List$1<number> = null;
	get rowOffsets(): List$1<number> {
		return this._rowOffsets;
	}
	set rowOffsets(value: List$1<number>) {
		this._rowOffsets = value;
	}
	resolveTotalHeight(): number {
		return this.totalRowHeight + this.headerHeight + this.footerHeight + ((this.rowSeparatorHeight + this.rowSpacing) * this.rowCount);
	}
	getHeightForRow(row: number): number {
		if (row == Grid.sectionHeaderRowIndex) {
			return this.headerHeight;
		}
		if (row == Grid.sectionFooterRowIndex) {
			return this.footerHeight;
		}
		if (this.rowHeights == null) {
			return this.rowHeight;
		} else {
			return this.rowHeights._inner[row];
		}
	}
	getOffsetForRow(row: number): number {
		if (this.rowOffsets == null) {
			if (row == Grid.sectionHeaderRowIndex) {
				return 0;
			} else if (row == Grid.sectionFooterRowIndex) {
				return this.resolveTotalHeight() - this.headerHeight;
			}
			return (row * this.resolveFullRowHeight()) + this.headerHeight;
		} else {
			if (row == Grid.sectionHeaderRowIndex) {
				return 0;
			} else if (row == Grid.sectionFooterRowIndex) {
				return this.resolveTotalHeight() - this.footerHeight;
			}
			return this.rowOffsets._inner[row];
		}
	}
	resolveFullRowHeight(): number {
		return this.rowHeight + this.rowSpacing + this.rowSeparatorHeight;
	}
	resolveFullHeightForRow(rowIndex: number): number {
		if (this.rowOffsets == null) {
			return this.rowHeight + this.rowSpacing + this.rowSeparatorHeight;
		} else {
			return this.rowHeights._inner[rowIndex] + this.rowSeparatorHeight + this.rowSpacing;
		}
	}
	findRowAtLocation(y: number): RowPath {
		y -= this.offset;
		if (y < this.headerHeight) {
			return new RowPath(this.index, Grid.sectionHeaderRowIndex);
		} else if (y > this.resolveTotalHeight() - this.footerHeight) {
			return new RowPath(this.index, Grid.sectionFooterRowIndex);
		}
		y -= this.headerHeight;
		if (this.rowHeights == null) {
			let height: number = this.resolveFullRowHeight();
			let i: number = <number>truncate((y / height));
			if (i >= this.rowCount) {
				i = this.rowCount - 1;
			}
			return new RowPath(this.index, i);
		} else {
			for (let i1: number = 0; i1 < this.rowCount; i1++) {
				let rowTop: number = this.rowOffsets._inner[i1];
				let height1: number = this.resolveFullHeightForRow(i1);
				if (y >= rowTop && y <= rowTop + height1) {
					return new RowPath(this.index, i1);
				}
			}
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class VisualModel extends Base {
	static $t: Type = markType(VisualModel, 'VisualModel');
	private _actualVisibleRegion: Rect = null;
	get actualVisibleRegion(): Rect {
		return this._actualVisibleRegion;
	}
	set actualVisibleRegion(value: Rect) {
		this._actualVisibleRegion = value;
	}
	private _absoluteWidth: number = 0;
	get absoluteWidth(): number {
		return this._absoluteWidth;
	}
	set absoluteWidth(value: number) {
		this._absoluteWidth = value;
	}
	private _absoluteHeight: number = 0;
	get absoluteHeight(): number {
		return this._absoluteHeight;
	}
	set absoluteHeight(value: number) {
		this._absoluteHeight = value;
	}
	private _fullHeaderHeight: number = 0;
	get fullHeaderHeight(): number {
		return this._fullHeaderHeight;
	}
	set fullHeaderHeight(value: number) {
		this._fullHeaderHeight = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	private _headerRowSeparatorHeight: number = 0;
	get headerRowSeparatorHeight(): number {
		return this._headerRowSeparatorHeight;
	}
	set headerRowSeparatorHeight(value: number) {
		this._headerRowSeparatorHeight = value;
	}
	private _fixedRowHeight: number = 0;
	get fixedRowHeight(): number {
		return this._fixedRowHeight;
	}
	set fixedRowHeight(value: number) {
		this._fixedRowHeight = value;
	}
	private _fixedColumnWidthLeft: number = 0;
	get fixedColumnWidthLeft(): number {
		return this._fixedColumnWidthLeft;
	}
	set fixedColumnWidthLeft(value: number) {
		this._fixedColumnWidthLeft = value;
	}
	private _fixedColumnWidthRight: number = 0;
	get fixedColumnWidthRight(): number {
		return this._fixedColumnWidthRight;
	}
	set fixedColumnWidthRight(value: number) {
		this._fixedColumnWidthRight = value;
	}
	private _columnSpacing: number = 0;
	get columnSpacing(): number {
		return this._columnSpacing;
	}
	set columnSpacing(value: number) {
		this._columnSpacing = value;
	}
	private _separatorLeft: number = 0;
	get separatorLeft(): number {
		return this._separatorLeft;
	}
	set separatorLeft(value: number) {
		this._separatorLeft = value;
	}
	private _separatorRight: number = 0;
	get separatorRight(): number {
		return this._separatorRight;
	}
	set separatorRight(value: number) {
		this._separatorRight = value;
	}
	private _pinnedLeftSeparatorLeft: number = 0;
	get pinnedLeftSeparatorLeft(): number {
		return this._pinnedLeftSeparatorLeft;
	}
	set pinnedLeftSeparatorLeft(value: number) {
		this._pinnedLeftSeparatorLeft = value;
	}
	private _pinnedRightSeparatorLeft: number = 0;
	get pinnedRightSeparatorLeft(): number {
		return this._pinnedRightSeparatorLeft;
	}
	set pinnedRightSeparatorLeft(value: number) {
		this._pinnedRightSeparatorLeft = value;
	}
	private _firstNormalColumn: number = 0;
	get firstNormalColumn(): number {
		return this._firstNormalColumn;
	}
	set firstNormalColumn(value: number) {
		this._firstNormalColumn = value;
	}
	private _firstRightPinnedColumn: number = 0;
	get firstRightPinnedColumn(): number {
		return this._firstRightPinnedColumn;
	}
	set firstRightPinnedColumn(value: number) {
		this._firstRightPinnedColumn = value;
	}
	private _fullWidth: number = 0;
	get fullWidth(): number {
		return this._fullWidth;
	}
	set fullWidth(value: number) {
		this._fullWidth = value;
	}
	private _pinnedBottomCount: number = 0;
	get pinnedBottomCount(): number {
		return this._pinnedBottomCount;
	}
	set pinnedBottomCount(value: number) {
		this._pinnedBottomCount = value;
	}
	private _rootSummaryCount: number = 0;
	get rootSummaryCount(): number {
		return this._rootSummaryCount;
	}
	set rootSummaryCount(value: number) {
		this._rootSummaryCount = value;
	}
	get top(): number {
		return <number>truncate(this.actualVisibleRegion.top);
	}
	get left(): number {
		return <number>truncate(this.actualVisibleRegion.left);
	}
	get right(): number {
		return <number>truncate(this.actualVisibleRegion.right);
	}
	get height(): number {
		return <number>truncate(this.actualVisibleRegion.height);
	}
	get width(): number {
		return <number>truncate(this.actualVisibleRegion.width);
	}
	private _insetLeft: number = 0;
	get insetLeft(): number {
		return this._insetLeft;
	}
	set insetLeft(value: number) {
		this._insetLeft = value;
	}
	private _insetRight: number = 0;
	get insetRight(): number {
		return this._insetRight;
	}
	set insetRight(value: number) {
		this._insetRight = value;
	}
	private _insetTop: number = 0;
	get insetTop(): number {
		return this._insetTop;
	}
	set insetTop(value: number) {
		this._insetTop = value;
	}
	private _insetBottom: number = 0;
	get insetBottom(): number {
		return this._insetBottom;
	}
	set insetBottom(value: number) {
		this._insetBottom = value;
	}
	private _subContentLayer: GridLayer = null;
	get subContentLayer(): GridLayer {
		return this._subContentLayer;
	}
	set subContentLayer(value: GridLayer) {
		this._subContentLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSubContentLayer: GridLayer = null;
	get fixedSubContentLayer(): GridLayer {
		return this._fixedSubContentLayer;
	}
	set fixedSubContentLayer(value: GridLayer) {
		this._fixedSubContentLayer = value;
		this.updateLayerOrder();
	}
	private _contentLayer: GridLayer = null;
	get contentLayer(): GridLayer {
		return this._contentLayer;
	}
	set contentLayer(value: GridLayer) {
		this._contentLayer = value;
		this.updateLayerOrder();
	}
	private _fixedContentLayer: GridLayer = null;
	get fixedContentLayer(): GridLayer {
		return this._fixedContentLayer;
	}
	set fixedContentLayer(value: GridLayer) {
		this._fixedContentLayer = value;
		this.updateLayerOrder();
	}
	private _superContentLayer: GridLayer = null;
	get superContentLayer(): GridLayer {
		return this._superContentLayer;
	}
	set superContentLayer(value: GridLayer) {
		this._superContentLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSuperContentLayer: GridLayer = null;
	get fixedSuperContentLayer(): GridLayer {
		return this._fixedSuperContentLayer;
	}
	set fixedSuperContentLayer(value: GridLayer) {
		this._fixedSuperContentLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSeparatorLayer: GridLayer = null;
	get fixedSeparatorLayer(): GridLayer {
		return this._fixedSeparatorLayer;
	}
	set fixedSeparatorLayer(value: GridLayer) {
		this._fixedSeparatorLayer = value;
		this.updateLayerOrder();
	}
	private _decoratorLayer: GridLayer = null;
	get decoratorLayer(): GridLayer {
		return this._decoratorLayer;
	}
	set decoratorLayer(value: GridLayer) {
		this._decoratorLayer = value;
		this.updateLayerOrder();
	}
	private _subHeaderLayer: GridLayer = null;
	get subHeaderLayer(): GridLayer {
		return this._subHeaderLayer;
	}
	set subHeaderLayer(value: GridLayer) {
		this._subHeaderLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSubHeaderLayer: GridLayer = null;
	get fixedSubHeaderLayer(): GridLayer {
		return this._fixedSubHeaderLayer;
	}
	set fixedSubHeaderLayer(value: GridLayer) {
		this._fixedSubHeaderLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSubHeaderDecoratorLayer: GridLayer = null;
	get fixedSubHeaderDecoratorLayer(): GridLayer {
		return this._fixedSubHeaderDecoratorLayer;
	}
	set fixedSubHeaderDecoratorLayer(value: GridLayer) {
		this._fixedSubHeaderDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _subHeaderDecoratorLayer: GridLayer = null;
	get subHeaderDecoratorLayer(): GridLayer {
		return this._subHeaderDecoratorLayer;
	}
	set subHeaderDecoratorLayer(value: GridLayer) {
		this._subHeaderDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _headerLayer: GridLayer = null;
	get headerLayer(): GridLayer {
		return this._headerLayer;
	}
	set headerLayer(value: GridLayer) {
		this._headerLayer = value;
		this.updateLayerOrder();
	}
	private _headerDecoratorLayer: GridLayer = null;
	get headerDecoratorLayer(): GridLayer {
		return this._headerDecoratorLayer;
	}
	set headerDecoratorLayer(value: GridLayer) {
		this._headerDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _fixedHeaderDecoratorLayer: GridLayer = null;
	get fixedHeaderDecoratorLayer(): GridLayer {
		return this._fixedHeaderDecoratorLayer;
	}
	set fixedHeaderDecoratorLayer(value: GridLayer) {
		this._fixedHeaderDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _superHeaderLayer: GridLayer = null;
	get superHeaderLayer(): GridLayer {
		return this._superHeaderLayer;
	}
	set superHeaderLayer(value: GridLayer) {
		this._superHeaderLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSuperHeaderLayer: GridLayer = null;
	get fixedSuperHeaderLayer(): GridLayer {
		return this._fixedSuperHeaderLayer;
	}
	set fixedSuperHeaderLayer(value: GridLayer) {
		this._fixedSuperHeaderLayer = value;
		this.updateLayerOrder();
	}
	private _fixedSuperHeaderDecoratorLayer: GridLayer = null;
	get fixedSuperHeaderDecoratorLayer(): GridLayer {
		return this._fixedSuperHeaderDecoratorLayer;
	}
	set fixedSuperHeaderDecoratorLayer(value: GridLayer) {
		this._fixedSuperHeaderDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _superHeaderDecoratorLayer: GridLayer = null;
	get superHeaderDecoratorLayer(): GridLayer {
		return this._superHeaderDecoratorLayer;
	}
	set superHeaderDecoratorLayer(value: GridLayer) {
		this._superHeaderDecoratorLayer = value;
		this.updateLayerOrder();
	}
	private _fixedHeaderLayer: GridLayer = null;
	get fixedHeaderLayer(): GridLayer {
		return this._fixedHeaderLayer;
	}
	set fixedHeaderLayer(value: GridLayer) {
		this._fixedHeaderLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedRowsLayer: GridLayer = null;
	get pinnedRowsLayer(): GridLayer {
		return this._pinnedRowsLayer;
	}
	set pinnedRowsLayer(value: GridLayer) {
		this._pinnedRowsLayer = value;
		this.updateLayerOrder();
	}
	private _fixedPinnedRowsLayer: GridLayer = null;
	get fixedPinnedRowsLayer(): GridLayer {
		return this._fixedPinnedRowsLayer;
	}
	set fixedPinnedRowsLayer(value: GridLayer) {
		this._fixedPinnedRowsLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedRowsSubLayer: GridLayer = null;
	get pinnedRowsSubLayer(): GridLayer {
		return this._pinnedRowsSubLayer;
	}
	set pinnedRowsSubLayer(value: GridLayer) {
		this._pinnedRowsSubLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedRowsSuperLayer: GridLayer = null;
	get pinnedRowsSuperLayer(): GridLayer {
		return this._pinnedRowsSuperLayer;
	}
	set pinnedRowsSuperLayer(value: GridLayer) {
		this._pinnedRowsSuperLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedSectionLayer: GridLayer = null;
	get pinnedSectionLayer(): GridLayer {
		return this._pinnedSectionLayer;
	}
	set pinnedSectionLayer(value: GridLayer) {
		this._pinnedSectionLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedSectionSubLayer: GridLayer = null;
	get pinnedSectionSubLayer(): GridLayer {
		return this._pinnedSectionSubLayer;
	}
	set pinnedSectionSubLayer(value: GridLayer) {
		this._pinnedSectionSubLayer = value;
		this.updateLayerOrder();
	}
	private _pinnedSectionSuperLayer: GridLayer = null;
	get pinnedSectionSuperLayer(): GridLayer {
		return this._pinnedSectionSuperLayer;
	}
	set pinnedSectionSuperLayer(value: GridLayer) {
		this._pinnedSectionSuperLayer = value;
		this.updateLayerOrder();
	}
	private _sectionLayer: GridLayer = null;
	get sectionLayer(): GridLayer {
		return this._sectionLayer;
	}
	set sectionLayer(value: GridLayer) {
		this._sectionLayer = value;
		this.updateLayerOrder();
	}
	private _verticalSeparatorLayer: GridLayer = null;
	get verticalSeparatorLayer(): GridLayer {
		return this._verticalSeparatorLayer;
	}
	set verticalSeparatorLayer(value: GridLayer) {
		this._verticalSeparatorLayer = value;
		this.updateLayerOrder();
	}
	private _lastHitCell: CellModel = null;
	getHitCell(x: number, y: number): CellModel {
		x += this.actualVisibleRegion.left;
		y += this.actualVisibleRegion.top;
		let layers: List$1<GridLayer> = this.gridLayers;
		let layersCount: number = layers.count;
		for (let i: number = layersCount - 1; i >= 0; i--) {
			if (layers._inner[i] == this.contentLayer) {
				break;
			}
			let values = layers._inner[i].valueList;
			let valuesCount: number = layers._inner[i].valueList.count;
			let removed = layers._inner[i].removedList;
			for (let j: number = 0; j < valuesCount; j++) {
				if (removed._inner[j]) {
					continue;
				}
				let model: CellModel = values._inner[j];
				if (x >= model.x && x <= model.x + model.width && y >= model.y && y <= model.y + model.height) {
					this._lastHitCell = model;
					return model;
				}
			}
		}
		if (this._lastHitCell != null) {
			let model1 = this._lastHitCell;
			if (x >= model1.x && x <= model1.x + model1.width && y >= model1.y && y <= model1.y + model1.height) {
				this._lastHitCell = model1;
				return model1;
			}
		}
		layers = this.gridLayers;
		layersCount = layers.count;
		for (let i1: number = layersCount - 1; i1 >= 0; i1--) {
			let values1 = layers._inner[i1].valueList;
			let valuesCount1: number = layers._inner[i1].valueList.count;
			let removed1 = layers._inner[i1].removedList;
			for (let j1: number = 0; j1 < valuesCount1; j1++) {
				if (removed1._inner[j1]) {
					continue;
				}
				let model2: CellModel = values1._inner[j1];
				if (x >= model2.x && x <= model2.x + model2.width && y >= model2.y && y <= model2.y + model2.height) {
					this._lastHitCell = model2;
					return model2;
				}
			}
		}
		return null;
	}
	private _hiddenLayer: FastIterationDictionary$2<CellPath, List$1<CellModel>> = null;
	get hiddenLayer(): FastIterationDictionary$2<CellPath, List$1<CellModel>> {
		return this._hiddenLayer;
	}
	set hiddenLayer(value: FastIterationDictionary$2<CellPath, List$1<CellModel>>) {
		this._hiddenLayer = value;
	}
	private _sections: List$1<SectionInfo> = null;
	get sections(): List$1<SectionInfo> {
		return this._sections;
	}
	set sections(value: List$1<SectionInfo>) {
		this._sections = value;
	}
	private _columns: List$1<ColumnInfo> = null;
	get columns(): List$1<ColumnInfo> {
		return this._columns;
	}
	set columns(value: List$1<ColumnInfo>) {
		this._columns = value;
	}
	private _isPlaceholderContentNeeded: boolean = false;
	get isPlaceholderContentNeeded(): boolean {
		return this._isPlaceholderContentNeeded;
	}
	set isPlaceholderContentNeeded(value: boolean) {
		this._isPlaceholderContentNeeded = value;
	}
	private _isSectionHeaderDirty: boolean = false;
	get isSectionHeaderDirty(): boolean {
		return this._isSectionHeaderDirty;
	}
	set isSectionHeaderDirty(value: boolean) {
		this._isSectionHeaderDirty = value;
	}
	private _isClipRectEnabled: boolean = false;
	get isClipRectEnabled(): boolean {
		return this._isClipRectEnabled;
	}
	set isClipRectEnabled(value: boolean) {
		this._isClipRectEnabled = value;
	}
	private _spacers: List$1<GridColumnSpacerCollection> = new List$1<GridColumnSpacerCollection>((<any>GridColumnSpacerCollection).$type, 0);
	get spacers(): List$1<GridColumnSpacerCollection> {
		while (this._spacers.count < this.columns.count) {
			this._spacers.add(new GridColumnSpacerCollection());
		}
		return this._spacers;
	}
	set spacers(value: List$1<GridColumnSpacerCollection>) {
		this._spacers = value;
	}
	private _columnIndexes: Dictionary$2<number, number> = null;
	get columnIndexes(): Dictionary$2<number, number> {
		return this._columnIndexes;
	}
	set columnIndexes(value: Dictionary$2<number, number>) {
		this._columnIndexes = value;
	}
	private _topRow: RowPath = null;
	get topRow(): RowPath {
		return this._topRow;
	}
	set topRow(value: RowPath) {
		this._topRow = value;
	}
	private _bottomRow: RowPath = null;
	get bottomRow(): RowPath {
		return this._bottomRow;
	}
	set bottomRow(value: RowPath) {
		this._bottomRow = value;
	}
	isRangeValid(): boolean {
		if (this.topRow != null && this.bottomRow != null && this.topRow.row >= 0 && this.bottomRow.row >= 0) {
			return true;
		}
		return false;
	}
	private _lastRequest: number = -1;
	private _lastRequestColumnInfo: ColumnInfo = null;
	getColumnById(uniqueId: number): ColumnInfo {
		if (uniqueId == this._lastRequest) {
			return this._lastRequestColumnInfo;
		}
		let retVal: ColumnInfo = null;
		if (this.columnIndexes.containsKey(uniqueId)) {
			retVal = this.columns._inner[this.columnIndexes.item(uniqueId)];
		}
		this._lastRequest = uniqueId;
		this._lastRequestColumnInfo = retVal;
		return retVal;
	}
	addColumn(column: ColumnInfo): void {
		this.columns.add(column);
		this.columnIndexes.addItem(column.uniqueID, this.columns.count - 1);
	}
	constructor() {
		super();
		this.actualVisibleRegion = Rect.empty;
		this._subContentLayer = new GridLayer("SubContentLayer");
		this._contentLayer = new GridLayer("ContentLayer");
		this._superContentLayer = new GridLayer("SuperContentLayer");
		this._decoratorLayer = new GridLayer("DecoratorLayer");
		this._pinnedRowsLayer = new GridLayer("PinnedRowsLayer");
		this._pinnedRowsSubLayer = new GridLayer("PinnedRowsSubLayer");
		this._pinnedRowsSuperLayer = new GridLayer("PinnedRowsSuperLayer");
		this._pinnedSectionLayer = new GridLayer("PinnedSectionLayer");
		this._pinnedSectionSubLayer = new GridLayer("PinnedSectionSubLayer");
		this._pinnedSectionSuperLayer = new GridLayer("PinnedSectionSuperLayer");
		this._sectionLayer = new GridLayer("SectionLayer");
		this._subHeaderLayer = new GridLayer("SubHeaderLayer");
		this._headerLayer = new GridLayer("HeaderLayer");
		this._headerDecoratorLayer = new GridLayer("HeaderDecoratorLayer");
		this._superHeaderLayer = new GridLayer("SuperHeaderLayer");
		this._verticalSeparatorLayer = new GridLayer("VerticalSeparatorLayer");
		this._subHeaderDecoratorLayer = new GridLayer("SubHeaderDecoratorLayer");
		this._superHeaderDecoratorLayer = new GridLayer("SuperHeaderDecoratorLayer");
		this._fixedContentLayer = new GridLayer("FixedContentLayer");
		this._fixedHeaderLayer = new GridLayer("FixedHeaderLayer");
		this._fixedPinnedRowsLayer = new GridLayer("FixedPinnedRowsLayer");
		this._fixedSeparatorLayer = new GridLayer("FixedSeparatorLayer");
		this._fixedSubContentLayer = new GridLayer("FixedSubContentLayer");
		this._fixedSubHeaderLayer = new GridLayer("FixedSubHeaderLayer");
		this._fixedSuperContentLayer = new GridLayer("FixedSuperContentLayer");
		this._fixedSuperHeaderLayer = new GridLayer("FixedSuperHeaderLayer");
		this._fixedSubHeaderDecoratorLayer = new GridLayer("FixedSubHeaderDecoratorLayer");
		this._fixedSuperHeaderLayer = new GridLayer("FixedSuperHeaderLayer");
		this._fixedSuperHeaderDecoratorLayer = new GridLayer("FixedSuperHeaderDecoratorLayer");
		this._fixedHeaderDecoratorLayer = new GridLayer("FixedHeaderDecoratorLayer");
		this._hiddenLayer = new FastIterationDictionary$2<CellPath, List$1<CellModel>>((<any>CellPath).$type, (<any>List$1).$type.specialize((<any>CellModel).$type), 0);
		this.updateLayerOrder();
		this.sections = new List$1<SectionInfo>((<any>SectionInfo).$type, 0);
		this.columns = new List$1<ColumnInfo>((<any>ColumnInfo).$type, 0);
		this.columnIndexes = new Dictionary$2<number, number>(Number_$type, Number_$type, 0);
		this.visibleColumns = new List$1<number>(Number_$type, 0);
	}
	private updateLayerOrder(): void {
		this._gridLayers = new List$1<GridLayer>((<any>GridLayer).$type, 0);
		this._gridLayers.add(this.subContentLayer);
		this._gridLayers.add(this.contentLayer);
		this._gridLayers.add(this.superContentLayer);
		this._gridLayers.add(this.decoratorLayer);
		this._gridLayers.add(this.pinnedRowsSubLayer);
		this._gridLayers.add(this.pinnedRowsLayer);
		this._gridLayers.add(this.pinnedRowsSuperLayer);
		this._gridLayers.add(this.fixedSubContentLayer);
		this._gridLayers.add(this.fixedContentLayer);
		this._gridLayers.add(this.fixedSuperContentLayer);
		this._gridLayers.add(this.fixedPinnedRowsLayer);
		this._gridLayers.add(this.fixedSeparatorLayer);
		this._gridLayers.add(this.sectionLayer);
		this._gridLayers.add(this.pinnedSectionSubLayer);
		this._gridLayers.add(this.pinnedSectionLayer);
		this._gridLayers.add(this.pinnedSectionSuperLayer);
		this._gridLayers.add(this.subHeaderLayer);
		this._gridLayers.add(this.subHeaderDecoratorLayer);
		this._gridLayers.add(this.headerLayer);
		this._gridLayers.add(this.headerDecoratorLayer);
		this._gridLayers.add(this.superHeaderLayer);
		this._gridLayers.add(this.superHeaderDecoratorLayer);
		this._gridLayers.add(this.fixedSubHeaderLayer);
		this._gridLayers.add(this.fixedSubHeaderDecoratorLayer);
		this._gridLayers.add(this.fixedHeaderLayer);
		this._gridLayers.add(this.fixedHeaderDecoratorLayer);
		this._gridLayers.add(this.fixedSuperHeaderLayer);
		this._gridLayers.add(this.fixedSuperHeaderDecoratorLayer);
		this._gridLayers.add(this.verticalSeparatorLayer);
	}
	private _gridLayers: List$1<GridLayer> = null;
	get gridLayers(): List$1<GridLayer> {
		return this._gridLayers;
	}
	checkLayers(): boolean {
		for (let i = 0; i < this._gridLayers.count; i++) {
			for (let j = 0; j < this._gridLayers._inner[i].keyList.count; j++) {
				if (this._gridLayers._inner[i].removedList._inner[j]) {
					continue;
				}
				let key = this._gridLayers._inner[i].keyList._inner[j];
				let value = this._gridLayers._inner[i].valueList._inner[j];
				if (<any>key != <any>value.path) {
					return false;
				}
			}
		}
		return true;
	}
	resetColumns(): void {
		this._lastRequestColumnInfo = null;
		this._lastRequest = -1;
		this.columns.clear();
		this.columnIndexes.clear();
	}
	reset(): void {
		this.resetColumns();
		this.sections.clear();
		this.subContentLayer.clear();
		this.contentLayer.clear();
		this.superContentLayer.clear();
		this.decoratorLayer.clear();
		this.pinnedRowsSubLayer.clear();
		this.pinnedRowsLayer.clear();
		this.pinnedRowsSuperLayer.clear();
		this.fixedSubContentLayer.clear();
		this.fixedContentLayer.clear();
		this.fixedSuperContentLayer.clear();
		this.fixedPinnedRowsLayer.clear();
		this.fixedSeparatorLayer.clear();
		this.sectionLayer.clear();
		this.pinnedSectionSubLayer.clear();
		this.pinnedSectionLayer.clear();
		this.pinnedSectionSuperLayer.clear();
		this.subHeaderLayer.clear();
		this.subHeaderDecoratorLayer.clear();
		this.headerLayer.clear();
		this.headerDecoratorLayer.clear();
		this.superHeaderLayer.clear();
		this.superHeaderDecoratorLayer.clear();
		this.fixedSubHeaderLayer.clear();
		this.fixedSubHeaderDecoratorLayer.clear();
		this.fixedHeaderLayer.clear();
		this.fixedHeaderDecoratorLayer.clear();
		this.fixedSuperHeaderLayer.clear();
		this.fixedSuperHeaderDecoratorLayer.clear();
		this.verticalSeparatorLayer.clear();
	}
	$export(): VisualModelExport {
		let $export = new VisualModelExport();
		$export.actualVisibleRegion = new RectData(this.actualVisibleRegion.x, this.actualVisibleRegion.y, this.actualVisibleRegion.width, this.actualVisibleRegion.height);
		$export.absoluteWidth = this.absoluteWidth;
		$export.absoluteHeight = this.absoluteHeight;
		$export.headerHeight = this.headerHeight;
		$export.fullHeaderHeight = this.fullHeaderHeight;
		$export.fixedRowHeight = this.fixedRowHeight;
		$export.fixedColumnWidthLeft = this.fixedColumnWidthLeft;
		$export.fixedColumnWidthRight = this.fixedColumnWidthRight;
		$export.columnSpacing = this.columnSpacing;
		$export.separatorLeft = this.separatorLeft;
		$export.separatorRight = this.separatorRight;
		$export.top = this.top;
		$export.left = this.left;
		$export.height = this.height;
		$export.width = this.width;
		$export.subContentLayer = this.createGridLayerExport(this.subContentLayer);
		$export.contentLayer = this.createGridLayerExport(this.contentLayer);
		$export.superContentLayer = this.createGridLayerExport(this.superContentLayer);
		$export.decoratorLayer = this.createGridLayerExport(this.decoratorLayer);
		$export.pinnedRowsSubLayer = this.createGridLayerExport(this.pinnedRowsSubLayer);
		$export.pinnedRowsLayer = this.createGridLayerExport(this.pinnedRowsLayer);
		$export.pinnedRowsSuperLayer = this.createGridLayerExport(this.pinnedRowsSuperLayer);
		$export.fixedSubContentLayer = this.createGridLayerExport(this.fixedSubContentLayer);
		$export.fixedContentLayer = this.createGridLayerExport(this.fixedContentLayer);
		$export.fixedSuperContentLayer = this.createGridLayerExport(this.fixedSuperContentLayer);
		$export.fixedPinnedRowsLayer = this.createGridLayerExport(this.fixedPinnedRowsLayer);
		$export.fixedSeparatorLayer = this.createGridLayerExport(this.fixedSeparatorLayer);
		$export.sectionLayer = this.createGridLayerExport(this.sectionLayer);
		$export.pinnedSectionSubLayer = this.createGridLayerExport(this.pinnedSectionSubLayer);
		$export.pinnedSectionLayer = this.createGridLayerExport(this.pinnedSectionLayer);
		$export.pinnedSectionSuperLayer = this.createGridLayerExport(this.pinnedSectionSuperLayer);
		$export.subHeaderLayer = this.createGridLayerExport(this.subHeaderLayer);
		$export.subHeaderDecoratorLayer = this.createGridLayerExport(this.subHeaderDecoratorLayer);
		$export.headerLayer = this.createGridLayerExport(this.headerLayer);
		$export.headerDecoratorLayer = this.createGridLayerExport(this.headerDecoratorLayer);
		$export.superHeaderLayer = this.createGridLayerExport(this.superHeaderLayer);
		$export.superHeaderDecoratorLayer = this.createGridLayerExport(this.superHeaderDecoratorLayer);
		$export.fixedSubHeaderLayer = this.createGridLayerExport(this.fixedSubHeaderLayer);
		$export.fixedSubHeaderDecoratorLayer = this.createGridLayerExport(this.fixedSubHeaderDecoratorLayer);
		$export.fixedHeaderLayer = this.createGridLayerExport(this.fixedHeaderLayer);
		$export.fixedHeaderDecoratorLayer = this.createGridLayerExport(this.fixedHeaderDecoratorLayer);
		$export.fixedSuperHeaderLayer = this.createGridLayerExport(this.fixedSuperHeaderLayer);
		$export.fixedSuperHeaderDecoratorLayer = this.createGridLayerExport(this.fixedSuperHeaderDecoratorLayer);
		$export.verticalSeparatorLayer = this.createGridLayerExport(this.verticalSeparatorLayer);
		$export.updateLayerOrder();
		return $export;
	}
	private createGridLayerExport(gridLayer: GridLayer): GridLayerExport {
		let $export = new GridLayerExport(gridLayer.name);
		let isHeader = gridLayer == this.headerLayer;
		for (let cell of fromEnum<CellModel>(gridLayer.values)) {
			let cellExport = cell.createModelExport(null);
			if (this.headerIsSeparatePanel && isHeader) {
				cellExport.y += this.top;
			}
			$export.add(cellExport);
		}
		return $export;
	}
	private _visibleColumns: List$1<number> = null;
	get visibleColumns(): List$1<number> {
		return this._visibleColumns;
	}
	set visibleColumns(value: List$1<number>) {
		this._visibleColumns = value;
	}
	private _leftColumn: number = 0;
	get leftColumn(): number {
		return this._leftColumn;
	}
	set leftColumn(value: number) {
		this._leftColumn = value;
	}
	private _rightColumn: number = 0;
	get rightColumn(): number {
		return this._rightColumn;
	}
	set rightColumn(value: number) {
		this._rightColumn = value;
	}
	private _leftColumnOffset: number = 0;
	get leftColumnOffset(): number {
		return this._leftColumnOffset;
	}
	set leftColumnOffset(value: number) {
		this._leftColumnOffset = value;
	}
	private _rightColumnOffset: number = 0;
	get rightColumnOffset(): number {
		return this._rightColumnOffset;
	}
	set rightColumnOffset(value: number) {
		this._rightColumnOffset = value;
	}
	private _headerIsSeparatePanel: boolean = false;
	get headerIsSeparatePanel(): boolean {
		return this._headerIsSeparatePanel;
	}
	set headerIsSeparatePanel(value: boolean) {
		this._headerIsSeparatePanel = value;
	}
	private _stickyRowsHeight: number = 0;
	get stickyRowsHeight(): number {
		return this._stickyRowsHeight;
	}
	set stickyRowsHeight(value: number) {
		this._stickyRowsHeight = value;
	}
	private _stickyTopRowsBottom: number = 0;
	get stickyTopRowsBottom(): number {
		return this._stickyTopRowsBottom;
	}
	set stickyTopRowsBottom(value: number) {
		this._stickyTopRowsBottom = value;
	}
	private _stickyFootersRowsHeight: number = 0;
	get stickyFootersRowsHeight(): number {
		return this._stickyFootersRowsHeight;
	}
	set stickyFootersRowsHeight(value: number) {
		this._stickyFootersRowsHeight = value;
	}
	createSpacer(index: number, column: ColumnInfo, actualWidth: number, isStar: boolean, isRight: boolean): GridColumnSpacer {
		let spacer: GridColumnSpacer = new GridColumnSpacer();
		spacer.actualWidth = actualWidth;
		spacer.startWidth = actualWidth;
		spacer.isStar = isStar;
		spacer.owningColumnId = column.uniqueID;
		spacer.isRight = isRight;
		this.spacers._inner[index].add(spacer);
		return spacer;
	}
	removeSpacer(spacer: GridColumnSpacer): void {
		let spacers = this.spacers;
		for (let i = 0; i < spacers.count; i++) {
			let currSpacers = spacers._inner[i];
			for (let j = currSpacers.count - 1; j >= 0; j--) {
				if (currSpacers._inner[j].uniqueId == spacer.uniqueId) {
					currSpacers.removeAt(j);
				}
			}
		}
	}
	getSpacersForColumn(column: ColumnInfo): List$1<GridColumnSpacer> {
		let ret: List$1<GridColumnSpacer> = new List$1<GridColumnSpacer>((<any>GridColumnSpacer).$type, 0);
		let spacers = this.spacers;
		for (let i = 0; i < spacers.count; i++) {
			let currSpacers = spacers._inner[i];
			for (let j = currSpacers.count - 1; j >= 0; j--) {
				if (currSpacers._inner[j].owningColumnId == column.uniqueID) {
					ret.add(currSpacers._inner[j]);
				}
			}
		}
		return ret;
	}
	getCellsForColumn(col: ColumnInfo): List$1<CellModel> {
		let cells: List$1<CellModel> = new List$1<CellModel>((<any>CellModel).$type, 0);
		for (let i: number = 0; i < this.gridLayers.count; i++) {
			let toIncrement = new List$1<CellModel>((<any>CellModel).$type, 0);
			let currLayer = this.gridLayers._inner[i];
			for (let p: number = 0; p < currLayer.keyList.count; p++) {
				if (currLayer.removedList._inner[p]) {
					continue;
				}
				let currModel = currLayer.valueList._inner[p];
				if (currModel.path.column == col.index && currModel.path.fixedPosition == col.position) {
					cells.add(currModel);
				}
			}
		}
		return cells;
	}
	getRowCount(): number {
		let count: number = 0;
		for (let i = 0; i < this.sections.count; i++) {
			count += this.sections._inner[i].rowCount;
		}
		return count;
	}
}


