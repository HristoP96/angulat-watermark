/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList, IList_$type, ICollection, ICollection_$type, runOn, String_$type, typeCast, Array_$type, Type, markType } from "./type";
import { IDataSourceLocalDataProvider, IDataSourceLocalDataProvider_$type } from "./IDataSourceLocalDataProvider";
import { IDataSourceDataProvider } from "./IDataSourceDataProvider";
import { ISupportsDataChangeNotifications } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount } from "./IDataSourceSupportsCount";
import { IDataSourceSupportsIndexedAccess } from "./IDataSourceSupportsIndexedAccess";
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSchemaPropertyType, DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { DefaultDataSourceSchema } from "./DefaultDataSourceSchema";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
import { IDataSourceDataProviderUpdateNotifier } from "./IDataSourceDataProviderUpdateNotifier";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { SummaryDescriptionCollection } from "./SummaryDescriptionCollection";
import { DataSourceSummaryScope } from "./DataSourceSummaryScope";
import { Dictionary$2 } from "./Dictionary$2";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { stringStartsWith } from "./string";

/**
 * @hidden 
 */
export class DataSourceLocalDataProvider extends Base implements IDataSourceLocalDataProvider {
	static $t: Type = markType(DataSourceLocalDataProvider, 'DataSourceLocalDataProvider', (<any>Base).$type, [IDataSourceLocalDataProvider_$type]);
	constructor() {
		super();
		this._sortDescriptions = new SortDescriptionCollection();
		this._sortDescriptions.addListener(runOn(this, this.sortDescriptions_CollectionChanged));
	}
	private sortDescriptions_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.queueAutoRefresh();
	}
	private _sortDescriptions: SortDescriptionCollection = null;
	private _groupDescriptions: SortDescriptionCollection = null;
	private _filterExpressions: FilterExpressionCollection = null;
	private _summaryDescriptions: SummaryDescriptionCollection = null;
	private _summaryScope: DataSourceSummaryScope = <DataSourceSummaryScope>0;
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	private _dataSource: any = null;
	get dataSource(): any {
		return this._dataSource;
	}
	set dataSource(value: any) {
		let oldValue = this._dataSource;
		this._dataSource = value;
		if (oldValue != this._dataSource) {
			this.onPropertyChanged(DataSourceLocalDataProvider.itemsSourcePropertyName, oldValue, this._dataSource);
		}
	}
	schemaChanged: (sender: any, args: DataSourceDataProviderSchemaChangedEventArgs) => void = null;
	getItemAtIndex(index: number): any {
		if (this._list == null) {
			return null;
		}
		if (this._isArray) {
			return (<any>this._list)[index];
		}
		return this._list.item(index);
	}
	private _reflectionHelpers: Dictionary$2<string, FastReflectionHelper> = new Dictionary$2<string, FastReflectionHelper>(String_$type, (<any>FastReflectionHelper).$type, 0);
	getItemValue(item: any, valueName: string): any {
		this.ensureSchema();
		let helper: FastReflectionHelper;
		let $ret = this._reflectionHelpers.tryGetValue(valueName, helper);
		helper = $ret.p1;
		if (helper == null) {
			return null;
		}
		let val_ = helper.getPropertyValue(item);
		if (<boolean>(val_ === undefined)) {
			return null;
		}
		return val_;
	}
	private ensureSchema(): void {
		if (this._schema == null) {
			this._schema = this.actualSchema;
			if (this.schemaChanged != null) {
				this.schemaChanged(this, new DataSourceDataProviderSchemaChangedEventArgs(this._schema, this.actualCount));
			}
		}
	}
	get actualCount(): number {
		if (this._list == null) {
			return 0;
		}
		if (this._isArray) {
			return <number>((<any>this._list).length);
		}
		return this._list.count;
	}
	private _schema: IDataSourceSchema = null;
	get actualSchema(): IDataSourceSchema {
		if (this._schema == null) {
			if (this._list == null) {
				this._schema = new DefaultDataSourceSchema(<string[]>[], <DataSourceSchemaPropertyType[]>[], null, null);
			} else {
				this._schema = this.resolveSchema();
			}
		}
		return this._schema;
	}
	private resolveSchema(): IDataSourceSchema {
		let schemaItem = this.findSchemaItem();
		if (schemaItem == null) {
			return new DefaultDataSourceSchema(<string[]>[], <DataSourceSchemaPropertyType[]>[], null, null);
		}
		this._reflectionHelpers.clear();
		let names: List$1<string> = new List$1<string>(String_$type, 0);
		let namesSet: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
		let types: List$1<DataSourceSchemaPropertyType> = new List$1<DataSourceSchemaPropertyType>(DataSourceSchemaPropertyType_$type, 0);
		let dataIntents: List$1<List$1<string>> = new List$1<List$1<string>>((<any>List$1).$type.specialize(String_$type), 0);
		let propertyKeys: List$1<string> = this.getPropertyKeys(schemaItem);
		for (let i = 0; i < propertyKeys.count; i++) {
			let p = propertyKeys._inner[i];
			if (stringStartsWith(p, "_")) {
				continue;
			}
			if (p == "$hashCode") {
				continue;
			}
			if (namesSet.contains(p)) {
				continue;
			} else {
				names.add(p);
				namesSet.add_1(p);
				this._reflectionHelpers.addItem(p, new FastReflectionHelper(false, p));
				types.add(this.resolveSchemaType(schemaItem, p));
				dataIntents.add(this.resolveDataIntents(schemaItem, p));
			}
		}
		let actualDataIntents: string[][] = <string[][]>new Array(dataIntents.count);
		for (let i1 = 0; i1 < dataIntents.count; i1++) {
			actualDataIntents[i1] = dataIntents._inner[i1].toArray();
		}
		return new DefaultDataSourceSchema(names.toArray(), types.toArray(), null, actualDataIntents);
	}
	resolveSchemaPropertyType(propertyPath: string): DataSourceSchemaPropertyType {
		let propertiesInPath = propertyPath.split('.');
		if (propertiesInPath.length == 1) {
			for (let i: number = 0; i < this.actualSchema.propertyNames.length; i++) {
				if (this.actualSchema.propertyNames[i] == propertiesInPath[0]) {
					return this.actualSchema.propertyTypes[i];
				}
			}
			return DataSourceSchemaPropertyType.ObjectValue;
		} else {
			let item = this.findSchemaItem();
			let value = this.getItemValue(item, propertyPath);
			if (value == null) {
				return DataSourceSchemaPropertyType.ObjectValue;
			} else {
				return DataSourceLocalDataProvider.resolveSchemaTypeFromValue(value);
			}
		}
	}
	private getPropertyKeys(schemaItem_: any): List$1<string> {
		let propertyKey_: string = null;
		let ret_: List$1<string> = new List$1<string>(String_$type, 0);
		let exclusions_ = {};
		for (propertyKey_ in schemaItem_) {
				
				if (!isNaN(<any>propertyKey_)) {
					continue;
				}
				if (!exclusions_.hasOwnProperty(propertyKey_)) {
					ret_.add(propertyKey_);
				}
};
		return ret_;
	}
	private getDataIntentsFromTarget(ret: List$1<string>, item_: any, propertyName_: string, isParent: boolean): void {
		if (<boolean>(item_.__dataIntents !== undefined)) {
			if (<boolean>(item_.__dataIntents[propertyName_] !== undefined)) {
				this.getDataIntentsForKey(ret, item_, propertyName_);
			}
			let selfName_ = "self." + propertyName_;
			if (!isParent && <boolean>(item_.__dataIntents[selfName_] !== undefined)) {
				this.getDataIntentsForKey(ret, item_, selfName_);
			}
			let selfName2_ = "self_" + propertyName_;
			if (!isParent && <boolean>(item_.__dataIntents[selfName2_] !== undefined)) {
				this.getDataIntentsForKey(ret, item_, selfName2_);
			}
		}
	}
	private getDataIntentsForKey(ret: List$1<string>, item_: any, propertyName_: string): void {
		let val = item_.__dataIntents[propertyName_];
		if (typeCast<any[]>(Array_$type, val) !== null) {
			let arr = <any[]>val;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] != null) {
					ret.add(arr[i].toString());
				}
			}
		}
	}
	private resolveDataIntents(item_: any, propertyName_: string): List$1<string> {
		let ret: List$1<string> = new List$1<string>(String_$type, 0);
		let list_ = this._list;
		let dataIntents_: any = null;
		this.getDataIntentsFromTarget(ret, item_, propertyName_, false);
		this.getDataIntentsFromTarget(ret, list_, propertyName_, true);
		return ret;
	}
	private resolveSchemaType(item_: any, propertyName_: string): DataSourceSchemaPropertyType {
		if (item_ == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		if (<boolean>(item_[propertyName_] == undefined)) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		let value_ = item_[propertyName_];
		return DataSourceLocalDataProvider.resolveSchemaTypeFromValue(value_);
	}
	private static resolveSchemaTypeFromValue(value_: any): DataSourceSchemaPropertyType {
		if (value_ == null) {
			return DataSourceSchemaPropertyType.ObjectValue;
		}
		if (<boolean>(typeof value_ == 'number')) {
			return DataSourceSchemaPropertyType.DoubleValue;
		}
		if (<boolean>(typeof value_ == 'boolean')) {
			return DataSourceSchemaPropertyType.BooleanValue;
		}
		if (<boolean>(typeof value_ == 'string')) {
			return DataSourceSchemaPropertyType.StringValue;
		}
		if (<boolean>(typeof value_ == 'object')) {
			if (<boolean>(value_ instanceof Date)) {
				return DataSourceSchemaPropertyType.DateTimeValue;
			}
		}
		return DataSourceSchemaPropertyType.ObjectValue;
	}
	private findSchemaItem(): any {
		let count: number = 0;
		if (this._isArray) {
			count = <number>((<any>this._list).length);
		} else {
			count = this._list.count;
		}
		for (let i = 0; i < count; i++) {
			let currItem: any;
			if (this._isArray) {
				currItem = (<any>this._list)[i];
			} else {
				currItem = this._list.item(i);
			}
			if (currItem != null) {
				return currItem;
			}
		}
		return null;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	private _list: IList = null;
	protected get list(): IList {
		return this._list;
	}
	private _isArray: boolean = false;
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case DataSourceLocalDataProvider.itemsSourcePropertyName:
			this._schema = null;
			if (this.dataSource != null) {
				this._isArray = false;
				if (typeCast<any[]>(Array_$type, this.dataSource) !== null) {
					this._isArray = true;
					this._list = <IList><any>this.dataSource;
				} else if (typeCast<IList>(IList_$type, this.dataSource) !== null) {
					this._list = <IList><any>this.dataSource;
				}
			} else {
				this._list = null;
			}
			this.ensureSchema();
			break;

			case DataSourceLocalDataProvider.deferAutoRefreshPropertyName:
			if (!<boolean>newValue) {
				this.queueAutoRefresh();
			}
			break;

		}

	}
	private _executionContext: IDataSourceExecutionContext = null;
	get executionContext(): IDataSourceExecutionContext {
		return this._executionContext;
	}
	set executionContext(value: IDataSourceExecutionContext) {
		this._executionContext = value;
	}
	protected get mustSyncListWithChanges(): boolean {
		return false;
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		if (this.mustSyncListWithChanges) {
			if (this._isArray) {
				(<any>this._list)[index] = newItem;
			} else {
				this._list.item(index, newItem);
			}
		}
		if (this.updateNotifier != null) {
			this.updateNotifier.notifySetItem(index, oldItem, newItem);
		}
	}
	notifyClearItems(): void {
		if (this.mustSyncListWithChanges) {
			if (this._isArray) {
				(<any>this._list).length = 0;
			} else {
				this._list.clear();
			}
		}
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyClearItems();
		}
	}
	notifyInsertItem(index: number, newItem: any): void {
		if (this.mustSyncListWithChanges) {
			if (this._isArray) {
				(<any>this._list).splice(index, 0, newItem);
			} else {
				this._list.insert(index, newItem);
			}
		}
		let count: number = 0;
		if (this._isArray) {
			count = <number>((<any>this._list).length);
		} else {
			count = this._list.count;
		}
		if (this._list != null && count == 1 && (this.actualSchema == null || this.actualSchema.propertyNames.length == 0)) {
			this._schema = null;
			this.ensureSchema();
		}
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyInsertItem(index, newItem);
		}
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		if (this.mustSyncListWithChanges) {
			if (this._isArray) {
				(<any>this._list).splice(index, 1);
			} else {
				this._list.remove(index);
			}
		}
		if (this.updateNotifier != null) {
			this.updateNotifier.notifyRemoveItem(index, oldItem);
		}
	}
	private _updateNotifier: IDataSourceDataProviderUpdateNotifier = null;
	get updateNotifier(): IDataSourceDataProviderUpdateNotifier {
		return this._updateNotifier;
	}
	set updateNotifier(value: IDataSourceDataProviderUpdateNotifier) {
		this._updateNotifier = value;
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
			this.onPropertyChanged(DataSourceLocalDataProvider.deferAutoRefreshPropertyName, oldValue, this._deferAutoRefresh);
		}
	}
	get isSortingSupported(): boolean {
		return false;
	}
	get isFilteringSupported(): boolean {
		return false;
	}
	get sortDescriptions(): SortDescriptionCollection {
		return this._sortDescriptions;
	}
	get filterExpressions(): FilterExpressionCollection {
		return this._filterExpressions;
	}
	get summaryDescriptions(): SummaryDescriptionCollection {
		return this._summaryDescriptions;
	}
	static readonly summaryScopePropertyName: string = "SummaryScope";
	get summaryScope(): DataSourceSummaryScope {
		return this._summaryScope;
	}
	set summaryScope(value: DataSourceSummaryScope) {
		this._summaryScope = value;
	}
	get notifyUsingSourceIndexes(): boolean {
		return true;
	}
	private _propertiesRequested: string[] = null;
	get propertiesRequested(): string[] {
		return this._propertiesRequested;
	}
	set propertiesRequested(value: string[]) {
		this._propertiesRequested = value;
	}
	get isItemIndexLookupSupported(): boolean {
		return true;
	}
	get isKeyIndexLookupSupported(): boolean {
		return false;
	}
	get isGroupingSupported(): boolean {
		return false;
	}
	get groupDescriptions(): SortDescriptionCollection {
		return this._groupDescriptions;
	}
	_autoRefreshQueued: boolean = false;
	queueAutoRefresh(): void {
		if (this.deferAutoRefresh) {
			return;
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
		if (!this._autoRefreshQueued) {
			return;
		}
		this._autoRefreshQueued = false;
		this.refreshInternal();
	}
	refreshInternal(): void {
		this.refreshInternalOverride();
	}
	protected refreshInternalOverride(): void {
	}
	flushAutoRefresh(): void {
		this.doRefreshInternal();
	}
	refresh(): void {
		this.refreshInternal();
	}
	indexOfItem(item: any): number {
		if (this._list == null) {
			return -1;
		}
		return this._list.indexOf(item);
	}
	indexOfKey(key: any[]): number {
		return -1;
	}
}


