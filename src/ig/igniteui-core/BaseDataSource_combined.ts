/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ICollection$1, ICollection$1_$type, PropertyChangedEventArgs, IList$1, IList$1_$type, runOn, delegateRemove, delegateCombine, enumGetBox, typeCast, Type, markType } from "./type";
import { IDataSource, IDataSource_$type } from "./IDataSource";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { IExternalDataSource } from "./IExternalDataSource";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { IDataSourceUpdateNotifier } from "./IDataSourceUpdateNotifier";
import { IDataSourceDataProviderUpdateNotifier, IDataSourceDataProviderUpdateNotifier_$type } from "./IDataSourceDataProviderUpdateNotifier";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { DataSourceSummaryScope, DataSourceSummaryScope_$type } from "./DataSourceSummaryScope";
import { DataSourceSectionHeaderDisplayMode, DataSourceSectionHeaderDisplayMode_$type } from "./DataSourceSectionHeaderDisplayMode";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { SortDescription } from "./SortDescription";
import { DataSourceRowExpansionChangedEventArgs } from "./DataSourceRowExpansionChangedEventArgs";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { DataSourceSchemaChangedEventArgs } from "./DataSourceSchemaChangedEventArgs";
import { DataSourceRowType } from "./DataSourceRowType";
import { DataSourceSchemaPropertyType } from "./DataSourceSchemaPropertyType";
import { ISummaryResult } from "./ISummaryResult";
import { IFilterExpression } from "./IFilterExpression";
import { SummaryDescription } from "./SummaryDescription";

/**
 * @hidden 
 */
export abstract class BaseDataSource extends Base implements IDataSource {
	static $t: Type = markType(BaseDataSource, 'BaseDataSource', (<any>Base).$type, [IDataSource_$type]);
	constructor() {
		super();
		this._dataProviderUpdateNotifier = new DefaultDataSourceDataProviderUpdateNotifier(this);
		this._sortDescriptions = new SortDescriptionCollection();
		this._groupDescriptions = new SortDescriptionCollection();
		this._summaryDescriptions = new SummaryDescriptionCollection();
		this._sortDescriptions.addListener(runOn(this, this.sortDescriptions_CollectionChanged));
		this._groupDescriptions.addListener(runOn(this, this.groupDescriptions_CollectionChanged));
		this._summaryDescriptions.addListener(runOn(this, this.summaryDescriptions_CollectionChanged));
		this._filterExpressions = new FilterExpressionCollection();
		this._filterExpressions.addListener(runOn(this, this.filterExpressions_CollectionChanged));
	}
	private sortDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onSortDescriptionsChanged(e);
	}
	private groupDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onGroupDescriptionsChanged(e);
	}
	private summaryDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onSummaryDescriptionsChanged(e);
	}
	private filterExpressions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.onFilterExpressionsChanged(e);
	}
	protected onSortDescriptionsChanged(args: NotifyCollectionChangedEventArgs): void {
		this.queueAutoRefresh();
	}
	protected onGroupDescriptionsChanged(args: NotifyCollectionChangedEventArgs): void {
		if (this.isGroupingSupported) {
			if (this.groupDescriptions != null && this.groupDescriptions.all.count > 0) {
				this.hasGroups = true;
			} else {
				this.hasGroups = false;
			}
			this.queueAutoRefresh();
		}
	}
	protected onSummaryDescriptionsChanged(args: NotifyCollectionChangedEventArgs): void {
		this.queueAutoRefresh();
	}
	private _hasGroups: boolean = false;
	protected get hasGroups(): boolean {
		return this._hasGroups;
	}
	protected set hasGroups(value: boolean) {
		this._hasGroups = value;
	}
	protected onFilterExpressionsChanged(args: NotifyCollectionChangedEventArgs): void {
		this.queueAutoRefresh();
	}
	onRowExpansionChanged(rowIndex: number, oldState: boolean, newState: boolean): void {
		if (this.rowExpansionChanged != null) {
			this.rowExpansionChanged(this, new DataSourceRowExpansionChangedEventArgs(rowIndex, oldState, newState));
		}
	}
	isPlaceholderItem(index: number): boolean {
		return false;
	}
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _externalDataSource: IExternalDataSource = null;
	get externalDataSource(): IExternalDataSource {
		return this._externalDataSource;
	}
	set externalDataSource(value: IExternalDataSource) {
		this._externalDataSource = value;
	}
	private _sortDescriptions: SortDescriptionCollection = null;
	private _groupDescriptions: SortDescriptionCollection = null;
	private _filterExpressions: FilterExpressionCollection = null;
	private _summaryDescriptions: SummaryDescriptionCollection = null;
	private _actualBaseDataProvider: IDataSourceDataProvider = null;
	static readonly actualBaseDataProviderPropertyName: string = "ActualBaseDataProvider";
	protected abstract get actualBaseDataProvider(): IDataSourceDataProvider;
	static readonly actualSchemaPropertyName: string = "ActualSchema";
	private _actualSchema: IDataSourceSchema = null;
	get actualSchema(): IDataSourceSchema {
		return this._actualSchema;
	}
	set actualSchema(value: IDataSourceSchema) {
		let oldValue = this._actualSchema;
		this._actualSchema = value;
		if (oldValue != this._actualSchema) {
			this.onPropertyUpdated(BaseDataSource.actualSchemaPropertyName, oldValue, this._actualSchema);
		}
	}
	static readonly actualCountPropertyName: string = "ActualCount";
	private _actualCount: number = 0;
	get actualCount(): number {
		return this._actualCount;
	}
	set actualCount(value: number) {
		let oldValue = this._actualCount;
		this._actualCount = value;
		if (oldValue != this._actualCount) {
			this.onPropertyUpdated(BaseDataSource.actualCountPropertyName, oldValue, this._actualCount);
		}
	}
	static readonly firstVisibleIndexRequestedPropertyName: string = "FirstVisibleIndexRequested";
	private _firstVisibleIndexRequested: number = 0;
	get firstVisibleIndexRequested(): number {
		return this._firstVisibleIndexRequested;
	}
	set firstVisibleIndexRequested(value: number) {
		let oldValue = this._firstVisibleIndexRequested;
		this._firstVisibleIndexRequested = value;
		if (oldValue != this._firstVisibleIndexRequested) {
			this.onPropertyUpdated(BaseDataSource.firstVisibleIndexRequestedPropertyName, oldValue, this._firstVisibleIndexRequested);
		}
	}
	static readonly lastVisibleIndexRequestedPropertyName: string = "LastVisibleIndexRequested";
	private _lastVisibleIndexRequested: number = 0;
	get lastVisibleIndexRequested(): number {
		return this._lastVisibleIndexRequested;
	}
	set lastVisibleIndexRequested(value: number) {
		let oldValue = this._lastVisibleIndexRequested;
		this._lastVisibleIndexRequested = value;
		if (oldValue != this._lastVisibleIndexRequested) {
			this.onPropertyUpdated(BaseDataSource.lastVisibleIndexRequestedPropertyName, oldValue, this._lastVisibleIndexRequested);
		}
	}
	static readonly updateNotifierPropertyName: string = "UpdateNotifier";
	private _updateNotifier: IDataSourceUpdateNotifier = null;
	get updateNotifier(): IDataSourceUpdateNotifier {
		return this._updateNotifier;
	}
	set updateNotifier(value: IDataSourceUpdateNotifier) {
		let oldValue = this._updateNotifier;
		this._updateNotifier = value;
		if (oldValue != this._updateNotifier) {
			this.onPropertyUpdated(BaseDataSource.updateNotifierPropertyName, oldValue, this._updateNotifier);
		}
	}
	getItemAtIndex(index: number): any {
		return null;
	}
	getItemProperty(item: any, propertyName: string): any {
		if (this.actualBaseDataProvider != null) {
			let item_ = item;
			if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
				return this.getSpecialRowItemValue(<DataSourceSpecialRow>item, propertyName);
			}
			return this.actualBaseDataProvider.getItemValue(item, propertyName);
		}
		return null;
	}
	getSpecialRowItemValue(item: DataSourceSpecialRow, valueName: string): any {
		if (item.rowType == DataSourceRowType.ShiftedRow) {
			return this.getItemProperty(item.targetRow, valueName);
		}
		return item.getSectionValue(valueName);
	}
	getItemPropertyAtIndex(index: number, valueName: string): any {
		return null;
	}
	protected get_fullSectionInformationWillForceLoad(): boolean {
		return false;
	}
	get fullSectionInformationWillForceLoad(): boolean {
		return this.get_fullSectionInformationWillForceLoad();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case BaseDataSource.primaryKeyPropertyName:
			this.actualPrimaryKey = this.primaryKey;
			break;

			case BaseDataSource.actualPrimaryKeyPropertyName:
			this.onActualPrimaryKeyChanged(<string[]>oldValue, <string[]>newValue);
			break;

			case BaseDataSource.executionContextPropertyName:
			if (this.actualBaseDataProvider != null) {
				this.actualBaseDataProvider.executionContext = this.executionContext;
			}
			this.queueAutoRefresh();
			break;

			case BaseDataSource.lastVisibleIndexRequestedPropertyName:

			case BaseDataSource.firstVisibleIndexRequestedPropertyName:
			this.onRequestedVisibleRangeChanged();
			break;

			case "ActualDataProvider":
			this.onActualDataProviderChanged(oldValue, newValue);
			break;

			case BaseDataSource.deferAutoRefreshPropertyName:
			if (this.actualBaseDataProvider != null) {
				this.actualBaseDataProvider.deferAutoRefresh = this.deferAutoRefresh;
			}
			if (!<boolean>newValue) {
				this.queueAutoRefresh();
			}
			break;

			case BaseDataSource.propertiesRequestedPropertyName:
			if (this.actualBaseDataProvider != null) {
				this.actualBaseDataProvider.propertiesRequested = this.propertiesRequested;
			}
			break;

			case BaseDataSource.shouldEmitSectionFootersPropertyName:

			case BaseDataSource.shouldEmitSectionHeadersPropertyName:

			case BaseDataSource.shouldEmitShiftedRowsPropertyName:

			case BaseDataSource.sectionHeaderDisplayModePropertyName:

			case BaseDataSource.isSectionCollapsablePropertyName:

			case BaseDataSource.includeSummaryRowsInSectionPropertyName:

			case BaseDataSource.isSectionSummaryRowsAtBottomPropertyName:

			case BaseDataSource.isSectionContentVisiblePropertyName:
			this.queueAutoRefresh();
			break;

			case BaseDataSource.summaryScopePropertyName:
			if (this.actualBaseDataProvider != null) {
				this.actualBaseDataProvider.summaryScope = this.summaryScope;
			}
			this.queueAutoRefresh();
			break;

		}

	}
	protected onActualPrimaryKeyChanged(oldValue: string[], newValue: string[]): void {
		this.onActualPrimaryKeyChangedOverrride(oldValue, newValue);
	}
	protected onActualPrimaryKeyChangedOverrride(oldValue: string[], newValue: string[]): void {
	}
	protected get_isVirtual(): boolean {
		return false;
	}
	get isVirtual(): boolean {
		return this.get_isVirtual();
	}
	private _dataProviderUpdateNotifier: IDataSourceDataProviderUpdateNotifier = null;
	protected get dataProviderUpdateNotifier(): IDataSourceDataProviderUpdateNotifier {
		return this._dataProviderUpdateNotifier;
	}
	protected onActualDataProviderChanged(oldValue: any, newValue: any): void {
		let oldProvider = <IDataSourceDataProvider><any>oldValue;
		let newProvider = <IDataSourceDataProvider><any>newValue;
		if (oldProvider != null) {
			oldProvider.updateNotifier = null;
		}
		if (newProvider != null) {
			newProvider.updateNotifier = this._dataProviderUpdateNotifier;
		}
		if (oldProvider != null) {
			oldProvider.schemaChanged = delegateRemove(oldProvider.schemaChanged, runOn(this, this.baseDataProvider_SchemaChanged));
		}
		if (newProvider != null) {
			newProvider.schemaChanged = delegateCombine(newProvider.schemaChanged, runOn(this, this.baseDataProvider_SchemaChanged));
			newProvider.executionContext = this.executionContext;
			this.notifyUsingSourceIndexes = this.actualBaseDataProvider.notifyUsingSourceIndexes;
		} else {
			this.notifyUsingSourceIndexes = false;
		}
		if (oldProvider != null) {
			this.sortDescriptions.syncTarget = null;
			this.groupDescriptions.syncTarget = null;
			this.filterExpressions.syncTarget = null;
			this.summaryDescriptions.syncTarget = null;
		}
		if (newProvider != null) {
			this.sortDescriptions.syncTarget = newProvider.sortDescriptions;
			this.groupDescriptions.syncTarget = newProvider.groupDescriptions;
			this.filterExpressions.syncTarget = newProvider.filterExpressions;
			this.summaryDescriptions.syncTarget = newProvider.summaryDescriptions;
			if (this.propertiesRequested != null) {
				newProvider.propertiesRequested = this.propertiesRequested;
			}
			newProvider.summaryScope = this.summaryScope;
		}
		this.queueAutoRefresh();
	}
	protected onRequestedVisibleRangeChanged(): void {
	}
	static readonly executionContextPropertyName: string = "ExecutionContext";
	private _executionContext: IDataSourceExecutionContext = null;
	get executionContext(): IDataSourceExecutionContext {
		return this._executionContext;
	}
	set executionContext(value: IDataSourceExecutionContext) {
		let oldValue = this._executionContext;
		this._executionContext = value;
		if (this._executionContext != oldValue) {
			this.onPropertyUpdated(BaseDataSource.executionContextPropertyName, oldValue, this._executionContext);
		}
	}
	schemaChanged: (sender: any, args: DataSourceSchemaChangedEventArgs) => void = null;
	rowExpansionChanged: (sender: any, args: DataSourceRowExpansionChangedEventArgs) => void = null;
	protected canInitialize(): boolean {
		if (this._executionContext != null && this.actualBaseDataProvider != null) {
			return true;
		}
		return false;
	}
	private _isInitializing: boolean = false;
	protected get isInitializing(): boolean {
		return this._isInitializing;
	}
	protected get_isSortingSupported(): boolean {
		return false;
	}
	get isSortingSupported(): boolean {
		return this.get_isSortingSupported();
	}
	protected get_isFilteringSupported(): boolean {
		return false;
	}
	get isFilteringSupported(): boolean {
		return this.get_isFilteringSupported();
	}
	get sortDescriptions(): SortDescriptionCollection {
		return this._sortDescriptions;
	}
	get groupDescriptions(): SortDescriptionCollection {
		return this._groupDescriptions;
	}
	get filterExpressions(): FilterExpressionCollection {
		return this._filterExpressions;
	}
	get summaryDescriptions(): SummaryDescriptionCollection {
		return this._summaryDescriptions;
	}
	static readonly summaryScopePropertyName: string = "SummaryScope";
	private _summaryScope: DataSourceSummaryScope = DataSourceSummaryScope.Both;
	get summaryScope(): DataSourceSummaryScope {
		return this._summaryScope;
	}
	set summaryScope(value: DataSourceSummaryScope) {
		let oldValue = this._summaryScope;
		this._summaryScope = value;
		if (this._summaryScope != oldValue) {
			this.onPropertyUpdated(BaseDataSource.summaryScopePropertyName, enumGetBox<DataSourceSummaryScope>(DataSourceSummaryScope_$type, oldValue), enumGetBox<DataSourceSummaryScope>(DataSourceSummaryScope_$type, this._summaryScope));
		}
	}
	static readonly deferAutoRefreshPropertyName: string = "DeferAutoRefresh";
	private _deferAutoRefresh: boolean = false;
	get deferAutoRefresh(): boolean {
		return this._deferAutoRefresh;
	}
	set deferAutoRefresh(value: boolean) {
		let oldValue = this._deferAutoRefresh;
		this._deferAutoRefresh = value;
		if (this._deferAutoRefresh != oldValue) {
			this.onPropertyUpdated(BaseDataSource.deferAutoRefreshPropertyName, oldValue, this._deferAutoRefresh);
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
			this.onPropertyUpdated(BaseDataSource.primaryKeyPropertyName, oldValue, this._primaryKey);
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
			this.onPropertyUpdated(BaseDataSource.actualPrimaryKeyPropertyName, oldValue, this._actualPrimaryKey);
		}
	}
	static readonly propertiesRequestedPropertyName: string = "PropertiesRequested";
	private _propertiesRequested: string[] = null;
	get propertiesRequested(): string[] {
		return this._propertiesRequested;
	}
	set propertiesRequested(value: string[]) {
		let oldValue = this._propertiesRequested;
		this._propertiesRequested = value;
		if (this._propertiesRequested != oldValue) {
			this.onPropertyUpdated(BaseDataSource.propertiesRequestedPropertyName, oldValue, this._propertiesRequested);
		}
	}
	static readonly notifyUsingSourceIndexesPropertyName: string = "NotifyUsingSourceIndexes";
	private _notifyUsingSourceIndexes: boolean = false;
	get notifyUsingSourceIndexes(): boolean {
		return this._notifyUsingSourceIndexes;
	}
	set notifyUsingSourceIndexes(value: boolean) {
		let oldValue = this._notifyUsingSourceIndexes;
		this._notifyUsingSourceIndexes = value;
		if (this._notifyUsingSourceIndexes != oldValue) {
			this.onPropertyUpdated(BaseDataSource.notifyUsingSourceIndexesPropertyName, oldValue, this._notifyUsingSourceIndexes);
		}
	}
	protected get_isItemIndexLookupSupported(): boolean {
		return false;
	}
	get isItemIndexLookupSupported(): boolean {
		return this.get_isItemIndexLookupSupported();
	}
	protected get_isKeyIndexLookupSupported(): boolean {
		return false;
	}
	get isKeyIndexLookupSupported(): boolean {
		return this.get_isKeyIndexLookupSupported();
	}
	protected initializeOverride(): void {
	}
	private _schemaDirty: boolean = false;
	protected resolveFullCount(count: number): number {
		return count;
	}
	private baseDataProvider_SchemaChanged(sender: any, args: DataSourceDataProviderSchemaChangedEventArgs): void {
		let executionContext = this.executionContext;
		executionContext.execute(() => {
			this._schemaDirty = true;
			this._comparablesDirty = true;
			this.queueAutoRefresh();
			if (this.deferAutoRefresh) {
				this.actualSchema = args.schema;
				this.actualCount = this.resolveFullCount(args.count);
				this.notifySchemaChanged();
			}
		});
	}
	private notifySchemaChanged(): void {
		if (this.schemaChanged != null) {
			this.schemaChanged(this, new DataSourceSchemaChangedEventArgs(this.actualSchema, this.actualCount));
		}
	}
	onSetItem(index: number, oldItem: any, newItem: any): void {
		this.onSetItemOverride(index, oldItem, newItem);
	}
	onBroadcastSetItem(index: number, oldItem: any, newItem: any): void {
		if (this.updateNotifier != null) {
			this.updateNotifier.notifySetItem(index, oldItem, newItem);
		}
	}
	onSetItemOverride(index: number, oldItem: any, newItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
		}
		this.onBroadcastSetItem(index, oldItem, newItem);
	}
	onClearItems(): void {
		this.onClearItemsOverride();
	}
	onBroadcastClearItems(): void {
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyClearItems();
		}
	}
	onClearItemsOverride(): void {
		if (this.actualBaseDataProvider != null) {
			this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
		}
		this.onBroadcastClearItems();
	}
	onInsertItem(index: number, newItem: any): void {
		this.onInsertItemOverride(index, newItem);
	}
	onBroadcastInsertItem(index: number, newItem: any): void {
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyInsertItem(index, newItem);
		}
	}
	onInsertItemOverride(index: number, newItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
		}
		this.onBroadcastInsertItem(index, newItem);
	}
	onRemoveItem(index: number, oldItem: any): void {
		this.onRemoveItemOverride(index, oldItem);
	}
	onBroadcastRemoveItem(index: number, oldItem: any): void {
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyRemoveItem(index, oldItem);
		}
	}
	onRemoveItemOverride(index: number, oldItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
		}
		this.onBroadcastRemoveItem(index, oldItem);
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.notifySetItem(index, oldItem, newItem);
		}
	}
	notifyClearItems(): void {
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.notifyClearItems();
		}
	}
	notifyInsertItem(index: number, newItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.notifyInsertItem(index, newItem);
		}
		;
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.notifyRemoveItem(index, oldItem);
		}
		;
	}
	_autoRefreshQueued: boolean = false;
	queueAutoRefresh(): void {
		if (this.deferAutoRefresh) {
			return;
		}
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.queueAutoRefresh();
		}
		if (this._autoRefreshQueued) {
			return;
		}
		if (this.executionContext != null) {
			this._autoRefreshQueued = true;
			this.executionContext.enqueueAction(runOn(this, this.doRefreshInternal));
		}
	}
	doRefreshInternal(): void {
		if (this.deferAutoRefresh) {
			this._autoRefreshQueued = false;
			return;
		}
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.flushAutoRefresh();
		}
		if (!this._autoRefreshQueued) {
			return;
		}
		this._autoRefreshQueued = false;
		this.refreshInternal();
	}
	refreshInternal(): void {
		if (this.actualBaseDataProvider != null) {
			this.actualSchema = this.actualBaseDataProvider.actualSchema;
			this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
		}
		if (this.actualSchema != null && this.primaryKey == null) {
			this.actualPrimaryKey = this.actualSchema.primaryKey;
		}
		this.refreshInternalOverride();
		if (this._schemaDirty) {
			this._schemaDirty = false;
			this.notifySchemaChanged();
		}
	}
	protected refreshInternalOverride(): void {
	}
	flushAutoRefresh(): void {
		this.doRefreshInternal();
	}
	refresh(): void {
		if (this.actualBaseDataProvider != null) {
			this.actualBaseDataProvider.refresh();
		}
		this.refreshInternal();
	}
	indexOfItem(item: any): number {
		return -1;
	}
	indexOfKey(key: any[]): number {
		return -1;
	}
	protected getPrimaryKeyValue(item: any, key: any[]): void {
		let primaryKey = this.actualPrimaryKey;
		if (primaryKey == null || primaryKey.length < 1 || this.actualBaseDataProvider == null) {
			return;
		}
		for (let i = 0; i < primaryKey.length; i++) {
			key[i] = this.actualBaseDataProvider.getItemValue(item, primaryKey[i]);
		}
	}
	getRowType(row: number): DataSourceRowType {
		return DataSourceRowType.Normal;
	}
	getMainValuePath(rowType: DataSourceRowType): string {
		return "SectionInformation";
	}
	getStickyRows(): number[] {
		return this.getStickyRowsInRange(this.firstVisibleIndexRequested, this.lastVisibleIndexRequested);
	}
	getStickyRowsInRange(firstRowIndex: number, lastRowIndex: number): number[] {
		return null;
	}
	isRowSpanning(rowType: DataSourceRowType): boolean {
		return rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter;
	}
	getStickyRowPriority(row: number): number {
		return -1;
	}
	isExclusivelySticky(row: number): boolean {
		return false;
	}
	pinRow(key: any[]): void {
	}
	unpinRow(key: any[]): void {
	}
	clearPinnedRows(): void {
	}
	isRowPinned(row: number): boolean {
		return false;
	}
	protected get_isGroupingSupported(): boolean {
		return false;
	}
	get isGroupingSupported(): boolean {
		return this.get_isGroupingSupported();
	}
	static readonly sectionHeaderDisplayModePropertyName: string = "SectionHeaderDisplayMode";
	private _sectionHeaderDisplayMode: DataSourceSectionHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Combined;
	protected get_sectionHeaderDisplayMode(): DataSourceSectionHeaderDisplayMode {
		return this._sectionHeaderDisplayMode;
	}
	protected set_sectionHeaderDisplayMode(value: DataSourceSectionHeaderDisplayMode): void {
		let oldValue = this._sectionHeaderDisplayMode;
		this._sectionHeaderDisplayMode = value;
		if (oldValue != this._sectionHeaderDisplayMode) {
			this.onPropertyUpdated(BaseDataSource.sectionHeaderDisplayModePropertyName, enumGetBox<DataSourceSectionHeaderDisplayMode>(DataSourceSectionHeaderDisplayMode_$type, oldValue), enumGetBox<DataSourceSectionHeaderDisplayMode>(DataSourceSectionHeaderDisplayMode_$type, this._sectionHeaderDisplayMode));
		}
	}
	get sectionHeaderDisplayMode(): DataSourceSectionHeaderDisplayMode {
		return this.get_sectionHeaderDisplayMode();
	}
	set sectionHeaderDisplayMode(value: DataSourceSectionHeaderDisplayMode) {
		this.set_sectionHeaderDisplayMode(value);
	}
	private _isSectionCollapsable: boolean = false;
	static readonly isSectionCollapsablePropertyName: string = "IsSectionCollapsable";
	protected get_isSectionCollapsable(): boolean {
		return this._isSectionCollapsable;
	}
	protected set_isSectionCollapsable(value: boolean): void {
		let oldValue = this._isSectionCollapsable;
		this._isSectionCollapsable = value;
		if (this._isSectionCollapsable != oldValue) {
			this.onPropertyUpdated(BaseDataSource.isSectionCollapsablePropertyName, oldValue, this._isSectionCollapsable);
		}
	}
	get isSectionCollapsable(): boolean {
		return this.get_isSectionCollapsable();
	}
	set isSectionCollapsable(value: boolean) {
		this.set_isSectionCollapsable(value);
	}
	private _isSectionExpandedDefault: boolean = true;
	protected get_isSectionExpandedDefault(): boolean {
		return this._isSectionExpandedDefault;
	}
	protected set_isSectionExpandedDefault(value: boolean): void {
		this._isSectionExpandedDefault = value;
	}
	get isSectionExpandedDefault(): boolean {
		return this.get_isSectionExpandedDefault();
	}
	set isSectionExpandedDefault(value: boolean) {
		this.set_isSectionExpandedDefault(value);
	}
	static readonly includeSummaryRowsInSectionPropertyName: string = "IncludeSummaryRowsInSection";
	private _includeSummaryRowsInSection: boolean = false;
	protected get_includeSummaryRowsInSection(): boolean {
		return this._includeSummaryRowsInSection;
	}
	protected set_includeSummaryRowsInSection(value: boolean): void {
		let oldValue = this._includeSummaryRowsInSection;
		this._includeSummaryRowsInSection = value;
		if (this._includeSummaryRowsInSection != oldValue) {
			this.onPropertyUpdated(BaseDataSource.includeSummaryRowsInSectionPropertyName, oldValue, this._includeSummaryRowsInSection);
		}
	}
	get includeSummaryRowsInSection(): boolean {
		return this.get_includeSummaryRowsInSection();
	}
	set includeSummaryRowsInSection(value: boolean) {
		this.set_includeSummaryRowsInSection(value);
	}
	static readonly isSectionSummaryRowsAtBottomPropertyName: string = "IsSectionSummaryRowsAtBottom";
	private _isSectionSummaryRowsAtBottom: boolean = false;
	protected get_isSectionSummaryRowsAtBottom(): boolean {
		return this._isSectionSummaryRowsAtBottom;
	}
	protected set_isSectionSummaryRowsAtBottom(value: boolean): void {
		let oldValue = this._isSectionSummaryRowsAtBottom;
		this._isSectionSummaryRowsAtBottom = value;
		if (this._isSectionSummaryRowsAtBottom != oldValue) {
			this.onPropertyUpdated(BaseDataSource.isSectionSummaryRowsAtBottomPropertyName, oldValue, this._isSectionSummaryRowsAtBottom);
		}
	}
	get isSectionSummaryRowsAtBottom(): boolean {
		return this.get_isSectionSummaryRowsAtBottom();
	}
	set isSectionSummaryRowsAtBottom(value: boolean) {
		this.set_isSectionSummaryRowsAtBottom(value);
	}
	static readonly isSectionHeaderNormalRowPropertyName: string = "IsSectionHeaderNormalRow";
	private _isSectionHeaderNormalRow: boolean = false;
	protected get_isSectionHeaderNormalRow(): boolean {
		return this._isSectionHeaderNormalRow;
	}
	protected set_isSectionHeaderNormalRow(value: boolean): void {
		let oldValue = this._isSectionHeaderNormalRow;
		this._isSectionHeaderNormalRow = value;
		if (this._isSectionHeaderNormalRow != oldValue) {
			this.onPropertyUpdated(BaseDataSource.isSectionHeaderNormalRowPropertyName, oldValue, this._isSectionHeaderNormalRow);
		}
	}
	get isSectionHeaderNormalRow(): boolean {
		return this.get_isSectionHeaderNormalRow();
	}
	set isSectionHeaderNormalRow(value: boolean) {
		this.set_isSectionHeaderNormalRow(value);
	}
	static readonly isSectionContentVisiblePropertyName: string = "IsSectionContentVisible";
	private _isSectionContentVisible: boolean = true;
	protected get_isSectionContentVisible(): boolean {
		return this._isSectionContentVisible;
	}
	protected set_isSectionContentVisible(value: boolean): void {
		let oldValue = this._isSectionContentVisible;
		this._isSectionContentVisible = value;
		if (this._isSectionContentVisible != oldValue) {
			this.onPropertyUpdated(BaseDataSource.isSectionContentVisiblePropertyName, oldValue, this._isSectionContentVisible);
		}
	}
	get isSectionContentVisible(): boolean {
		return this.get_isSectionContentVisible();
	}
	set isSectionContentVisible(value: boolean) {
		this.set_isSectionContentVisible(value);
	}
	private _shouldEmitSectionHeaders: boolean = true;
	static readonly shouldEmitSectionHeadersPropertyName: string = "ShouldEmitSectionHeaders";
	get shouldEmitSectionHeaders(): boolean {
		return this._shouldEmitSectionHeaders;
	}
	set shouldEmitSectionHeaders(value: boolean) {
		let oldValue = this._shouldEmitSectionHeaders;
		this._shouldEmitSectionHeaders = value;
		if (this._shouldEmitSectionHeaders != oldValue) {
			this.onPropertyUpdated(BaseDataSource.shouldEmitSectionHeadersPropertyName, oldValue, this._shouldEmitSectionHeaders);
		}
	}
	private _shouldEmitSectionFooters: boolean = false;
	static readonly shouldEmitSectionFootersPropertyName: string = "ShouldEmitSectionFooters";
	get shouldEmitSectionFooters(): boolean {
		return this._shouldEmitSectionFooters;
	}
	set shouldEmitSectionFooters(value: boolean) {
		let oldValue = this._shouldEmitSectionFooters;
		this._shouldEmitSectionFooters = value;
		if (this._shouldEmitSectionFooters != oldValue) {
			this.onPropertyUpdated(BaseDataSource.shouldEmitSectionFootersPropertyName, oldValue, this._shouldEmitSectionFooters);
		}
	}
	private _shouldEmitShiftedRows: boolean = true;
	static readonly shouldEmitShiftedRowsPropertyName: string = "ShouldEmitShiftedRows";
	get shouldEmitShiftedRows(): boolean {
		return this._shouldEmitShiftedRows;
	}
	set shouldEmitShiftedRows(value: boolean) {
		let oldValue = this._shouldEmitShiftedRows;
		this._shouldEmitShiftedRows = value;
		if (this._shouldEmitShiftedRows != oldValue) {
			this.onPropertyUpdated(BaseDataSource.shouldEmitShiftedRowsPropertyName, oldValue, this._shouldEmitShiftedRows);
		}
	}
	private _comparablesDirty: boolean = false;
	protected _schemaComparables: boolean[] = null;
	protected ensureComparables(schema: IDataSourceSchema): void {
		if (this._comparablesDirty && this.actualCount > 0 && this.actualBaseDataProvider != null) {
			this._schemaComparables = <boolean[]>new Array(schema.propertyNames.length);
			this._comparablesDirty = false;
		}
	}
	resolveSchemaPropertyType(propertyPath: string): DataSourceSchemaPropertyType {
		return this.actualBaseDataProvider.resolveSchemaPropertyType(propertyPath);
	}
	setIsRowExpandedAtIndex(rowIndex: number, state: boolean): void {
	}
	getIsRowExpandedAtIndex(rowIndex: number): boolean {
		return true;
	}
	getRowLevel(rowIndex: number): number {
		return 0;
	}
	getRootSummaryRowCount(): number {
		return 0;
	}
	getRootSummaryResults(): ISummaryResult[] {
		return null;
	}
	getSectionSummaryResults(sectionIndex: number): ISummaryResult[][] {
		return null;
	}
	clone(): IDataSource {
		return null;
	}
	cloneProperties(dataSource: IDataSource): void {
		let baseSource = typeCast<BaseDataSource>((<any>BaseDataSource).$type, dataSource);
		if (baseSource != null) {
			baseSource.executionContext = this.executionContext;
			baseSource.includeSummaryRowsInSection = this.includeSummaryRowsInSection;
			baseSource.isSectionCollapsable = this.isSectionCollapsable;
			baseSource.isSectionExpandedDefault = this.isSectionExpandedDefault;
			baseSource.isSectionHeaderNormalRow = this.isSectionHeaderNormalRow;
			baseSource.isSectionSummaryRowsAtBottom = this.isSectionSummaryRowsAtBottom;
			baseSource.isSectionContentVisible = this.isSectionContentVisible;
			baseSource.primaryKey = this.primaryKey;
			baseSource.propertiesRequested = this.propertiesRequested;
			baseSource.sectionHeaderDisplayMode = this.sectionHeaderDisplayMode;
			baseSource.shouldEmitSectionFooters = this.shouldEmitSectionFooters;
			baseSource.shouldEmitSectionHeaders = this.shouldEmitSectionHeaders;
			baseSource.shouldEmitShiftedRows = this.shouldEmitShiftedRows;
			baseSource.summaryScope = this.summaryScope;
			for (let i = 0; i < this.groupDescriptions.all.count; i++) {
				baseSource.groupDescriptions.add(this.groupDescriptions.all.item(i));
			}
			for (let i1 = 0; i1 < this.sortDescriptions.all.count; i1++) {
				baseSource.sortDescriptions.add(this.sortDescriptions.all.item(i1));
			}
			for (let i2 = 0; i2 < this.filterExpressions.all.count; i2++) {
				baseSource.filterExpressions.add(this.filterExpressions.all.item(i2));
			}
			for (let i3 = 0; i3 < this.summaryDescriptions.all.count; i3++) {
				baseSource.summaryDescriptions.add(this.summaryDescriptions.all.item(i3));
			}
		}
	}
}

/**
 * @hidden 
 */
export class DefaultDataSourceDataProviderUpdateNotifier extends Base implements IDataSourceDataProviderUpdateNotifier {
	static $t: Type = markType(DefaultDataSourceDataProviderUpdateNotifier, 'DefaultDataSourceDataProviderUpdateNotifier', (<any>Base).$type, [IDataSourceDataProviderUpdateNotifier_$type]);
	private _owner: BaseDataSource = null;
	constructor(owner: BaseDataSource) {
		super();
		this._owner = owner;
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


