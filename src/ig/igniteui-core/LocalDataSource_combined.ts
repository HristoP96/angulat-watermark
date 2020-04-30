/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BaseDataSource } from "./BaseDataSource";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { Base, IList, IList_$type, ICollection$1, ICollection$1_$type, ICollection, ICollection_$type, IList$1, IList$1_$type, typeCast, Array_$type, Number_$type, Type, markType } from "./type";
import { IExternalLocalDataSource } from "./IExternalLocalDataSource";
import { IExternalDataSource } from "./IExternalDataSource";
import { RearrangedListView } from "./RearrangedListView";
import { DataSourcePropertiesComparer } from "./DataSourcePropertiesComparer";
import { List$1 } from "./List$1";
import { DataSourceExecutionContext } from "./DataSourceExecutionContext";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { ISupportsDataChangeNotifications, ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { SortDescription } from "./SortDescription";
import { ListSortDirection } from "./ListSortDirection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { IFilterExpression } from "./IFilterExpression";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { IComparer$1 } from "./IComparer$1";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { SummaryDescription } from "./SummaryDescription";
import { DataSourceRowType } from "./DataSourceRowType";
import { SectionData } from "./SectionData";
import { ISummaryResult } from "./ISummaryResult";
import { IDataSource } from "./IDataSource";
import { DataSourceSectionHeaderDisplayMode } from "./DataSourceSectionHeaderDisplayMode";
import { ISupportsExpansionChangeNotifications, ISupportsExpansionChangeNotifications_$type } from "./ISupportsExpansionChangeNotifications";

/**
 * @hidden 
 */
export class LocalDataSource extends BaseDataSource {
	static $t: Type = markType(LocalDataSource, 'LocalDataSource', (<any>BaseDataSource).$type);
	protected get_actualBaseDataProvider(): IDataSourceDataProvider {
		return this.actualDataProvider;
	}
	protected get actualBaseDataProvider(): IDataSourceDataProvider {
		return this.get_actualBaseDataProvider();
	}
	private _dataProvider: IDataSourceLocalDataProvider = null;
	static readonly dataProviderPropertyName: string = "DataProvider";
	get dataProvider(): IDataSourceLocalDataProvider {
		return this._dataProvider;
	}
	set dataProvider(value: IDataSourceLocalDataProvider) {
		let oldValue = this._dataProvider;
		this._dataProvider = value;
		if (oldValue != this._dataProvider) {
			this.onPropertyUpdated(LocalDataSource.dataProviderPropertyName, oldValue, this._dataProvider);
		}
	}
	private _actualDataProvider: IDataSourceLocalDataProvider = null;
	static readonly actualDataProviderPropertyName: string = "ActualDataProvider";
	get actualDataProvider(): IDataSourceLocalDataProvider {
		if (this._actualDataProvider == null) {
			this.actualDataProvider = this.resolveDataProvider();
		}
		return this._actualDataProvider;
	}
	set actualDataProvider(value: IDataSourceLocalDataProvider) {
		let oldValue = this._actualDataProvider;
		this._actualDataProvider = value;
		if (oldValue != this._actualDataProvider) {
			this.onPropertyUpdated(LocalDataSource.actualDataProviderPropertyName, oldValue, this._actualDataProvider);
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
			this.onPropertyUpdated(LocalDataSource.itemsSourcePropertyName, oldValue, this._itemsSource);
		}
	}
	protected canInitialize(): boolean {
		let baseCanInit = super.canInitialize();
		if (!baseCanInit) {
			return false;
		}
		return this.itemsSource != null;
	}
	private _externalLocalDataSource: IExternalLocalDataSource = null;
	get externalLocalDataSource(): IExternalLocalDataSource {
		return this._externalLocalDataSource;
	}
	set externalLocalDataSource(value: IExternalLocalDataSource) {
		this._externalLocalDataSource = value;
		this.actualDataProvider = this.resolveDataProvider();
	}
	constructor() {
		super();
		this.executionContext = new DataSourceExecutionContext();
	}
	protected resolveDataProvider(): IDataSourceLocalDataProvider {
		let provider_: IDataSourceLocalDataProvider = new DataSourceLocalDataProvider();
		provider_.executionContext = new DataSourceExecutionContext();
		return provider_;
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(propertyName, oldValue, newValue);
		switch (propertyName) {
			case LocalDataSource.dataProviderPropertyName:
			this.actualDataProvider = this.dataProvider;
			break;

			case LocalDataSource.actualDataProviderPropertyName:
			if (this.actualDataProvider != null) {
				this.actualDataProvider.dataSource = this.itemsSource;
				this.actualSchema = this.actualDataProvider.actualSchema;
				this.actualCount = this.resolveFullCount(this.actualDataProvider.actualCount);
			}
			this.queueAutoRefresh();
			break;

			case LocalDataSource.itemsSourcePropertyName:
			if (this.actualDataProvider != null) {
				this.actualDataProvider.dataSource = this.itemsSource;
				this.actualSchema = this.actualDataProvider.actualSchema;
				this.actualCount = this.resolveFullCount(this.actualDataProvider.actualCount);
			}
			this.queueAutoRefresh();
			break;

		}

	}
	getItemAtIndex(index: number): any {
		if (this._view != null && this._view.view != null) {
			return this._view.view.item(index);
		} else {
			return this.actualDataProvider.getItemAtIndex(index);
		}
	}
	getItemPropertyAtIndex(index: number, valueName: string): any {
		let item: any;
		if (this._view != null) {
			item = this._view.view.item(index);
		} else {
			item = this.actualDataProvider.getItemAtIndex(index);
		}
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			return this.getSpecialRowItemValue(<DataSourceSpecialRow>item, valueName);
		}
		return this.actualDataProvider.getItemValue(item, valueName);
	}
	private _view: RearrangedListView = null;
	private _viewUpdateNotifier: ISupportsDataChangeNotifications = null;
	private getItems(): IDataSourceSupportsIndexedAccess {
		return this.actualDataProvider;
	}
	private hasPinnedRows(): boolean {
		return this._pinnedKeys != null && this._pinnedKeys.count > 0;
	}
	protected refreshInternalOverride(): void {
		super.refreshInternalOverride();
		if (this.actualDataProvider != null) {
			if (this.needLocalFiltering() || this.needLocalGrouping() || this.needLocalSorting() || this.needLocalSummaries() || this.hasPinnedRows()) {
				if (this._view == null) {
					if (this._viewUpdateNotifier == null) {
						this._viewUpdateNotifier = new LocalDataSourceViewUpdateNotifier(this);
					}
					this._view = new RearrangedListView(this.actualDataProvider);
					this._view.updateNotifier = this._viewUpdateNotifier;
					this._view.expansionNotifier = new LocalDataSourceViewExpansionNotifier(this);
				}
				this.ensureComparables(this.actualDataProvider.actualSchema);
				this._view.shouldEmitSectionHeaders = this.shouldEmitSectionHeaders && this.hasGroups;
				this._view.shouldEmitSectionFooters = this.shouldEmitSectionFooters && this.hasGroups;
				this._view.shouldEmitShiftedRows = this.shouldEmitShiftedRows;
				this._view.setPinnedKeys(this._pinnedKeys);
				this._view.sortComparer = this.resolveSortComparer();
				this._view.groupComparer = this.resolveGroupComparer();
				this._view.primaryKeyComparer = this.getPrimaryKeyComparer();
				this._view.groupDescriptions = this.groupDescriptions;
				this._view.sortDescriptions = this.sortDescriptions;
				this._view.summaryDescriptions = this.summaryDescriptions;
				this._view.summaryScope = this.summaryScope;
				this._view.includeSummaryRowsInSection = this.includeSummaryRowsInSection;
				this._view.isSectionSummaryRowsAtBottom = this.isSectionSummaryRowsAtBottom;
				this._view.sectionHeaderDisplayMode = this.sectionHeaderDisplayMode;
				this._view.dataSource = this;
				this._view.isGrouping = this.groupDescriptions != null && this.groupDescriptions.all.count > 0;
				this._view.filter = this.resolveFilter();
				this._view.refresh();
				this.actualSchema = this.actualDataProvider.actualSchema;
				this.actualCount = this._view.view.count;
			} else {
				let items = this.getItems();
				this.actualSchema = this.actualDataProvider.actualSchema;
				if (items != null) {
					this.actualCount = items.actualCount;
				} else {
					this.actualCount = 0;
				}
				if (this._view != null) {
					this._view.updateNotifier = null;
					this._view = null;
					this.onBroadcastClearItems();
				}
			}
		} else {
			this.actualCount = 0;
			this.actualSchema = null;
		}
	}
	protected get_isItemIndexLookupSupported(): boolean {
		return true;
	}
	protected get_isKeyIndexLookupSupported(): boolean {
		return true;
	}
	indexOfItem(item: any): number {
		if (this._view != null) {
			return this._view.view.indexOf(item);
		}
		if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
			return this.actualDataProvider.indexOfItem(item);
		}
		if (this.actualDataProvider != null) {
			let count = this.actualDataProvider.actualCount;
			let currItem: any;
			for (let i = 0; i < count; i++) {
				currItem = this.actualDataProvider.getItemAtIndex(i);
				if (this.areEqual(currItem, item)) {
					return i;
				}
			}
		}
		return -1;
	}
	private areEqual(currItem: any, item: any): boolean {
		if (currItem == null && item == null) {
			return true;
		}
		if (currItem == null || item == null) {
			return false;
		}
		return Base.equalsStatic(currItem, item);
	}
	indexOfKey(key: any[]): number {
		let primaryKey = this.actualPrimaryKey;
		if (primaryKey == null || primaryKey.length < 1 || this.actualBaseDataProvider == null) {
			return this.indexOfItem(key[0]);
		}
		let comparer = this.getPrimaryKeyComparer();
		let currItem: any;
		if (this._view != null) {
			let count = this._view.view.count;
			for (let i = 0; i < count; i++) {
				currItem = this._view.view.item(i);
				if (typeCast<DataSourceSpecialRow>((<any>DataSourceSpecialRow).$type, currItem) !== null) {
					let specialRow = <DataSourceSpecialRow>currItem;
					if (specialRow.rowType == DataSourceRowType.SectionHeader && !this.isSectionContentVisible && this.isSectionHeaderNormalRow) {
						if (comparer.compareToKey(currItem, key) == 0) {
							return i;
						}
					}
				} else if (comparer.compareToKey(currItem, key) == 0) {
					return i;
				}
			}
			return -1;
		}
		if (this.actualDataProvider != null && this.actualDataProvider.isKeyIndexLookupSupported) {
			return this.actualDataProvider.indexOfKey(key);
		}
		if (this.actualDataProvider != null) {
			let count1 = this.actualDataProvider.actualCount;
			for (let i1 = 0; i1 < count1; i1++) {
				currItem = this.actualDataProvider.getItemAtIndex(i1);
				if (comparer.compareToKey(currItem, key) == 0) {
					return i1;
				}
			}
		}
		return -1;
	}
	protected onActualPrimaryKeyChangedOverrride(oldValue: string[], newValue: string[]): void {
		super.onActualPrimaryKeyChangedOverrride(oldValue, newValue);
		this._primaryKeyComparer = null;
	}
	private _primaryKeyComparer: DataSourcePropertiesComparer = null;
	private getPrimaryKeyComparer(): DataSourcePropertiesComparer {
		if (this._primaryKeyComparer != null) {
			return this._primaryKeyComparer;
		}
		if (this.actualPrimaryKey == null) {
			this._primaryKeyComparer = new DataSourcePropertiesComparer(null, null, null, this);
			return this._primaryKeyComparer;
		}
		let directions: ListSortDirection[] = <ListSortDirection[]>new Array(this.actualPrimaryKey.length);
		for (let i = 0; i < directions.length; i++) {
			directions[i] = ListSortDirection.Ascending;
		}
		this._primaryKeyComparer = new DataSourcePropertiesComparer(this.actualPrimaryKey, directions, this._schemaComparables, this);
		return this._primaryKeyComparer;
	}
	private resolveFilter(): (item: any) => boolean {
		if (this.filterExpressions.all.count == 0) {
			return null;
		}
		let provider = this.actualDataProvider;
		let schema = this.actualDataProvider.actualSchema;
		let expressions = this.filterExpressions.all;
		let del: (item: any) => boolean = (item: any) => {
			for (let i = 0; i < expressions.count; i++) {
				if (!expressions.item(i).match(item, provider, schema)) {
					return false;
				}
			}
			return true;
		};
		return del;
	}
	private resolveSortComparer(): IComparer$1<any> {
		let count: number = 0;
		if (this.sortDescriptions.all.count == 0 && (this.groupDescriptions == null || this.groupDescriptions.all.count == 0)) {
			return null;
		}
		count = this.sortDescriptions.all.count;
		if (this.groupDescriptions != null) {
			count += this.groupDescriptions.all.count;
		}
		let properties = <string[]>new Array(count);
		let directions = <ListSortDirection[]>new Array(count);
		let groupCount = 0;
		if (this.groupDescriptions != null) {
			for (let i = 0; i < this.groupDescriptions.all.count; i++) {
				properties[i] = this.groupDescriptions.all.item(i).propertyName;
				directions[i] = this.groupDescriptions.all.item(i).direction;
				groupCount++;
			}
		}
		for (let i1 = 0; i1 < this.sortDescriptions.all.count; i1++) {
			properties[i1 + groupCount] = this.sortDescriptions.all.item(i1).propertyName;
			directions[i1 + groupCount] = this.sortDescriptions.all.item(i1).direction;
		}
		return new DataSourcePropertiesComparer(properties, directions, this._schemaComparables, this);
	}
	private resolveGroupComparer(): IComparer$1<any> {
		if (this.groupDescriptions == null || this.groupDescriptions.all.count < 1) {
			return null;
		}
		let count: number = 0;
		count = this.groupDescriptions.all.count;
		let properties = <string[]>new Array(count);
		let directions = <ListSortDirection[]>new Array(count);
		if (this.groupDescriptions != null) {
			for (let i = 0; i < this.groupDescriptions.all.count; i++) {
				properties[i] = this.groupDescriptions.all.item(i).propertyName;
				directions[i] = this.groupDescriptions.all.item(i).direction;
			}
		}
		return new DataSourcePropertiesComparer(properties, directions, this._schemaComparables, this);
	}
	private needLocalGrouping(): boolean {
		if (this.groupDescriptions == null || this.groupDescriptions.all.count < 1) {
			return false;
		}
		if (this.actualDataProvider == null) {
			return false;
		}
		if (this.actualDataProvider.isGroupingSupported) {
			return false;
		}
		return true;
	}
	private needLocalSorting(): boolean {
		if (this.sortDescriptions == null || this.sortDescriptions.all.count < 1) {
			return false;
		}
		if (this.actualDataProvider == null) {
			return false;
		}
		if (this.actualDataProvider.isSortingSupported) {
			return false;
		}
		return true;
	}
	private needLocalFiltering(): boolean {
		return this.filterExpressions != null && this.filterExpressions.all.count > 0;
	}
	private needLocalSummaries(): boolean {
		if (this.summaryDescriptions == null || this.summaryDescriptions.all.count < 1) {
			return false;
		}
		return true;
	}
	onClearItemsOverride(): void {
		if (this._view != null) {
			this._view.notifyClearItems();
			this.queueAutoRefresh();
		} else {
			super.onClearItemsOverride();
		}
	}
	onSetItemOverride(index: number, oldItem: any, newItem: any): void {
		if (this._view != null) {
			this._view.notifySetItem(index, oldItem, newItem);
		} else {
			super.onSetItemOverride(index, oldItem, newItem);
		}
	}
	onInsertItemOverride(index: number, newItem: any): void {
		if (this._view != null) {
			this._view.notifyInsertItem(index, newItem);
		} else {
			super.onInsertItemOverride(index, newItem);
		}
	}
	onRemoveItemOverride(index: number, oldItem: any): void {
		if (this._view != null) {
			this._view.notifyRemoveItem(index, oldItem);
		} else {
			super.onRemoveItemOverride(index, oldItem);
		}
	}
	onViewClearItems(): void {
		this.actualCount = this._view.view.count;
		this.onBroadcastClearItems();
	}
	onViewSetItem(index: number, oldItem: any, newItem: any): void {
		this.actualCount = this._view.view.count;
		this.onBroadcastSetItem(index, oldItem, newItem);
	}
	onViewInsertItem(index: number, newItem: any): void {
		this.actualCount = this._view.view.count;
		this.onBroadcastInsertItem(index, newItem);
	}
	onViewRemoveItem(index: number, oldItem: any): void {
		this.actualCount = this._view.view.count;
		this.onBroadcastRemoveItem(index, oldItem);
	}
	private _pinnedKeys: List$1<any[]> = new List$1<any[]>(Array_$type, 0);
	pinRow(key: any[]): void {
		super.pinRow(key);
		this._lastStartSection = -1;
		this._lastEndSection = -1;
		if (this._view != null) {
			this._pinnedKeys.add(key);
			this._view.pinRow(key);
		} else {
			this._pinnedKeys.add(key);
			this.queueAutoRefresh();
		}
	}
	unpinRow(key: any[]): void {
		super.unpinRow(key);
		let comparer = this.getPrimaryKeyComparer();
		if (this._view != null) {
			for (let i = this._pinnedKeys.count - 1; i >= 0; i--) {
				let curr = this._pinnedKeys._inner[i];
				if (curr.length != key.length) {
					continue;
				}
				if (comparer.compareKeys(curr, key) == 0) {
					this._pinnedKeys.removeAt(i);
					this._view.unpinRow(curr);
				}
			}
		} else {
			for (let i1 = this._pinnedKeys.count - 1; i1 >= 0; i1--) {
				let curr1 = this._pinnedKeys._inner[i1];
				if (curr1.length != key.length) {
					continue;
				}
				if (comparer.compareKeys(curr1, key) == 0) {
					this._pinnedKeys.removeAt(i1);
				}
			}
			this.queueAutoRefresh();
		}
		this._lastStartSection = -1;
		this._lastEndSection = -1;
	}
	clearPinnedRows(): void {
		for (let i = this._pinnedKeys.count - 1; i >= 0; i--) {
			this.unpinRow(this._pinnedKeys._inner[i]);
		}
	}
	isRowPinned(row: number): boolean {
		if (this._view == null) {
			return false;
		}
		let item = this.getItemAtIndex(row);
		if (item == null) {
			return false;
		}
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			if ((<DataSourceSpecialRow>item_).rowType == DataSourceRowType.ShiftedRow) {
				return true;
			}
		}
		let keyComparer = this.getPrimaryKeyComparer();
		let itemKey: any[];
		if (this.actualPrimaryKey == null) {
			itemKey = <any[]>new Array(1);
			itemKey[0] = item;
		} else {
			let actualPrimaryKey = this.actualPrimaryKey;
			let len = actualPrimaryKey.length;
			itemKey = <any[]>new Array(len);
			for (let i = 0; i < len; i++) {
				itemKey[i] = this.getItemProperty(item, actualPrimaryKey[i]);
			}
		}
		for (let i1 = 0; i1 < this._pinnedKeys.count; i1++) {
			if (keyComparer.compareKeys(this._pinnedKeys._inner[i1], itemKey) == 0) {
				return true;
			}
		}
		return false;
	}
	private _checkingExternal: boolean = false;
	protected get_isSortingSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isSortingSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return true;
	}
	protected get_isFilteringSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isFilteringSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return true;
	}
	protected get_isGroupingSupported(): boolean {
		if (this.externalDataSource != null && !this._checkingExternal) {
			this._checkingExternal = true;
			let ret = this.externalDataSource.isGroupingSupportedOverride;
			this._checkingExternal = false;
			return ret;
		}
		return true;
	}
	getStickyRowPriority(row: number): number {
		let rowType = this.getRowType(row);
		switch (rowType) {
			case DataSourceRowType.SectionHeader: return 100 - this.getRowLevel(row);
			case DataSourceRowType.SectionFooter: return 99 - this.getRowLevel(row);
			case DataSourceRowType.ShiftedRow:

			case DataSourceRowType.SummaryRowSection: return 2;
			case DataSourceRowType.SummaryRowRoot: return 3;
		}

		return 1;
	}
	private _pinnedRowsInOrder: number[] = null;
	private _lastStartSection: number = -1;
	private _lastEndSection: number = -1;
	private _lastStartSectionPinCount: number = -1;
	private _lastEndSectionPinCount: number = -1;
	private _lastStartSectionStartIndex: number = -1;
	private _lastEndSectionStartIndex: number = -1;
	private _lastStartSectionEndIndex: number = -1;
	private _lastEndSectionEndIndex: number = -1;
	private _lastStartSummaryTopCount: number = -1;
	private _lastStartSummaryBottomCount: number = -1;
	private _lastEndSummaryTopCount: number = -1;
	private _lastEndSummaryBottomCount: number = -1;
	private _lastRootSummaryCount: number = -1;
	getStickyRowsInRange(firstVisibleIndex: number, lastVisibleIndex: number): number[] {
		if (this._view == null || ((this.groupDescriptions == null || this.groupDescriptions.all.count == 0) && (this.summaryDescriptions == null || this.summaryDescriptions.all.count == 0) && !this.hasPinnedRows())) {
			return null;
		}
		let startSection: SectionData = null;
		let endSection: SectionData = null;
		if (this._view.sections.count == 1) {
			startSection = this._view.sections._inner[0];
			endSection = this._view.sections._inner[0];
		} else {
			startSection = this._view.getSection(firstVisibleIndex);
			if (startSection != null) {
				while (startSection.parentSection != -1) {
					startSection = this._view.sections._inner[startSection.parentSection];
				}
			}
			endSection = this._view.getSection(lastVisibleIndex);
			if (lastVisibleIndex >= this._view.view.count - this._view.rootSummaryRowCount) {
				endSection = this._view.getLastSection();
			}
		}
		if (startSection == null || endSection == null) {
			return null;
		}
		if (startSection.sectionIndex == this._lastStartSection && startSection.pinnedCount == this._lastStartSectionPinCount && startSection.sectionStartIndex == this._lastStartSectionStartIndex && startSection.sectionEndIndex == this._lastStartSectionEndIndex && startSection.summaryTopCount == this._lastStartSummaryTopCount && startSection.summaryBottomCount == this._lastStartSummaryBottomCount && endSection.sectionIndex == this._lastEndSection && endSection.pinnedCount == this._lastEndSectionPinCount && endSection.sectionStartIndex == this._lastEndSectionStartIndex && endSection.sectionEndIndex == this._lastEndSectionEndIndex && endSection.summaryTopCount == this._lastEndSummaryTopCount && endSection.summaryBottomCount == this._lastEndSummaryBottomCount && this._view.rootSummaryRowCount == this._lastRootSummaryCount) {
			return this._pinnedRowsInOrder;
		}
		this._lastStartSection = startSection.sectionIndex;
		this._lastEndSection = endSection.sectionIndex;
		this._lastStartSectionPinCount = startSection.pinnedCount;
		this._lastEndSectionPinCount = endSection.pinnedCount;
		this._lastStartSectionStartIndex = startSection.sectionStartIndex;
		this._lastEndSectionStartIndex = endSection.sectionStartIndex;
		this._lastStartSectionEndIndex = startSection.sectionEndIndex;
		this._lastEndSectionEndIndex = endSection.sectionEndIndex;
		this._lastStartSummaryTopCount = startSection.summaryTopCount;
		this._lastStartSummaryBottomCount = startSection.summaryBottomCount;
		this._lastEndSummaryTopCount = endSection.summaryTopCount;
		this._lastEndSummaryBottomCount = endSection.summaryBottomCount;
		this._lastRootSummaryCount = this._view.rootSummaryRowCount;
		if (this._view.sections.count == 1) {
			this._lastEndSection = endSection.sectionEndIndex;
		}
		let headerOffset = 0;
		if (this.shouldEmitSectionHeaders && this.hasGroups) {
			headerOffset = 1;
		}
		let summaryRowsPerGroup = this._view.getSummaryRowCount();
		let values: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = startSection.sectionIndex; i <= endSection.sectionIndex; i++) {
			let section = this._view.sections._inner[i];
			let sectionHeaderCount = this._view.sections._inner[i].headerStates.length;
			let realSectionHeaderCount = this._view.sections._inner[i].getHeaderCount();
			if (this.shouldEmitSectionHeaders && this.hasGroups) {
				for (let level: number = 0; level < sectionHeaderCount; level++) {
					if (this._view.sections._inner[i].headerExpansionKeys[level] != null) {
						let headerPosition = section.sectionStartIndex + section.headerOffsets[level];
						values.add(headerPosition);
						if (section.headerStates[level] && this.includeSummaryRowsInSection && !this.isSectionSummaryRowsAtBottom) {
							for (let j = 0; j < summaryRowsPerGroup; j++) {
								values.add(headerPosition + 1 + j);
							}
						}
					}
					if (!this._view.sections._inner[i].headerStates[level]) {
						break;
					}
				}
			}
			if (this._view.sections._inner[i].isSectionContentVisible) {
				if (this.shouldEmitShiftedRows) {
					for (let j1 = 0; j1 < this._view.sections._inner[i].pinnedCount; j1++) {
						values.add(this._view.sections._inner[i].sectionStartIndex + this._view.sections._inner[i].summaryTopCount + j1 + realSectionHeaderCount);
					}
				}
			}
			for (let j2 = this._view.sections._inner[i].summaryBottomCount - 1; j2 >= 0; j2--) {
				if (this.shouldEmitSectionFooters) {
					values.add(this._view.sections._inner[i].sectionEndIndex - realSectionHeaderCount - j2);
				} else {
					values.add(this._view.sections._inner[i].sectionEndIndex - j2);
				}
			}
			if (this.shouldEmitSectionFooters && this.hasGroups) {
				for (let j3 = sectionHeaderCount - 1; j3 >= 0; j3--) {
					if (!this._view.sections._inner[i].headerStates[j3]) {
						break;
					}
					values.add(this._view.sections._inner[i].sectionEndIndex - j3);
				}
			}
		}
		for (let i1 = this._view.view.count - this._view.rootSummaryRowCount; i1 < this._view.view.count; i1++) {
			values.add(i1);
		}
		this._pinnedRowsInOrder = values.toArray();
		return this._pinnedRowsInOrder;
	}
	isExclusivelySticky(row: number): boolean {
		let rowType = this.getRowType(row);
		return rowType == DataSourceRowType.SectionHeader || rowType == DataSourceRowType.SectionFooter || rowType == DataSourceRowType.SummaryRowRoot || (this.isSectionSummaryRowsAtBottom && rowType == DataSourceRowType.SummaryRowSection);
	}
	getRowType(row: number): DataSourceRowType {
		if (row < 0) {
			return DataSourceRowType.Normal;
		}
		let item = this.getItemAtIndex(row);
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			let rowType = (<DataSourceSpecialRow>item).rowType;
			if (this.isSectionHeaderNormalRow && rowType == DataSourceRowType.SectionHeader) {
				return DataSourceRowType.Normal;
			}
			return rowType;
		}
		return DataSourceRowType.Normal;
	}
	setIsRowExpandedAtIndex(rowIndex: number, state: boolean): void {
		if (this.isSectionCollapsable && this._view != null && this._view.view.count > 0 && this._view.view.count > rowIndex) {
			this._view.setIsRowExpandedAtIndex(rowIndex, state);
		}
	}
	getIsRowExpandedAtIndex(rowIndex: number): boolean {
		if (this._view != null && this._view.view.count > 0 && this._view.view.count > rowIndex) {
			return this._view.getExpansionStateForRow(rowIndex);
		}
		return true;
	}
	getRowLevel(rowIndex: number): number {
		if (rowIndex < 0) {
			return 0;
		}
		let item = this.getItemAtIndex(rowIndex);
		let item_ = item;
		if (<boolean>(item_ != null && item_.$$isSpecialRow !== undefined)) {
			return (<DataSourceSpecialRow>item).level;
		}
		if (this.sectionHeaderDisplayMode == DataSourceSectionHeaderDisplayMode.Split) {
			return this.groupDescriptions.all.count;
		} else if (this.groupDescriptions.all.count > 0) {
			return 1;
		}
		return 0;
	}
	getRootSummaryRowCount(): number {
		if (this._view != null) {
			return this._view.rootSummaryRowCount;
		}
		return 0;
	}
	getRootSummaryResults(): ISummaryResult[] {
		if (this._view != null) {
			return this._view.rootSummaryResults;
		}
		return null;
	}
	getSectionSummaryResults(sectionIndex: number): ISummaryResult[][] {
		if (this._view != null && this._view.sections.count > 0 && sectionIndex >= 0 && sectionIndex < this._view.sections.count) {
			return this._view.sections._inner[sectionIndex].summaryResults2;
		}
		return null;
	}
	clone(): IDataSource {
		let localDataSource = new LocalDataSource();
		localDataSource.itemsSource = this.itemsSource;
		super.cloneProperties(localDataSource);
		return localDataSource;
	}
}

/**
 * @hidden 
 */
export class LocalDataSourceViewUpdateNotifier extends Base implements ISupportsDataChangeNotifications {
	static $t: Type = markType(LocalDataSourceViewUpdateNotifier, 'LocalDataSourceViewUpdateNotifier', (<any>Base).$type, [ISupportsDataChangeNotifications_$type]);
	private _owner: LocalDataSource = null;
	notifyClearItems(): void {
		this._owner.onViewClearItems();
	}
	notifyInsertItem(index: number, newItem: any): void {
		this._owner.onViewInsertItem(index, newItem);
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this._owner.onViewRemoveItem(index, oldItem);
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this._owner.onViewSetItem(index, oldItem, newItem);
	}
	constructor(owner: LocalDataSource) {
		super();
		this._owner = owner;
	}
}

/**
 * @hidden 
 */
export class LocalDataSourceViewExpansionNotifier extends Base implements ISupportsExpansionChangeNotifications {
	static $t: Type = markType(LocalDataSourceViewExpansionNotifier, 'LocalDataSourceViewExpansionNotifier', (<any>Base).$type, [ISupportsExpansionChangeNotifications_$type]);
	private _owner: LocalDataSource = null;
	notifyRowExpansionChanged(index: number, oldState: boolean, newState: boolean): void {
		this._owner.onRowExpansionChanged(index, oldState, newState);
	}
	constructor(owner: LocalDataSource) {
		super();
		this._owner = owner;
	}
}


