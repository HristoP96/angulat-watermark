/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, typeGetValue, fromEnum, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IList, IList_$type, ICollection, ICollection_$type, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Number_$type, delegateCombine, delegateRemove } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "igniteui-core/dom";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { List$1 } from "igniteui-core/List$1";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";
import { Grid } from "./Grid";
import { IDataSource } from "igniteui-core/IDataSource";
import { GridSelectedKeysCollection } from "./GridSelectedKeysCollection";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { PrimaryKeyValue } from "./PrimaryKeyValue";
import { FilterFactory } from "igniteui-core/FilterFactory";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { CheckedChangedEventArgs } from "./CheckedChangedEventArgs";
import { GridCellEventArgs } from "./GridCellEventArgs";
import { TemplateColumn } from "./TemplateColumn";
import { TemplateCellUpdatingEventArgs } from "./TemplateCellUpdatingEventArgs";
import { CellModel } from "./CellModel";
import { TemplateCellContainer } from "./TemplateCellContainer";
import { FilterExpression } from "igniteui-core/FilterExpression";
import { FilterExpressionCollection } from "igniteui-core/FilterExpressionCollection";
import { IFilterExpression } from "igniteui-core/IFilterExpression";
import { ColumnGroupDescriptionCollection } from "./ColumnGroupDescriptionCollection";
import { ColumnSortDescriptionCollection } from "./ColumnSortDescriptionCollection";
import { ColumnSummaryDescriptionCollection } from "./ColumnSummaryDescriptionCollection";
import { FastReflectionHelper } from "igniteui-core/FastReflectionHelper";
import { IDataSourceSupportsCount } from "igniteui-core/IDataSourceSupportsCount";
import { IDataSourceSupportsIndexedAccess } from "igniteui-core/IDataSourceSupportsIndexedAccess";
import { TextColumn } from "./TextColumn";
import { Column } from "./Column";
import { ArgumentException } from "igniteui-core/ArgumentException";

/**
 * @hidden 
 */
export class CheckboxListView extends Base {
	static $t: Type = markType(CheckboxListView, 'CheckboxListView');
	private _checkboxPool: Dictionary$2<DomWrapper, DomWrapper> = new Dictionary$2<DomWrapper, DomWrapper>(DomWrapper_$type, DomWrapper_$type, 0);
	private _input: DomWrapper = null;
	constructor() {
		super();
	}
	private _model: CheckboxList = null;
	get model(): CheckboxList {
		return this._model;
	}
	set model(value: CheckboxList) {
		this._model = value;
	}
	onInit(): void {
	}
	private _container_1: DomRenderer = null;
	private get _container(): DomRenderer {
		return this._container_1;
	}
	private set _container(value: DomRenderer) {
		this._container_1 = value;
	}
	onContainerProvided(container: DomRenderer): void {
		if (container == null) {
			this._container = null;
			if (this._input != null) {
				this._input.unlistenAll();
			}
			this._checkboxPool.clear();
			return;
		}
		this._container = container;
		this._input = this._container.rootWrapper.getChildAt(0);
		this._input.listen("input", runOn(this, this.input_OnInput));
		let containerWidth = Math.round(<number>container.rootWrapper.width());
		let containerHeight = Math.round(<number>container.rootWrapper.height());
		this._container.rootWrapper.setStyleProperty("position", "relative");
	}
	onTemplateProvided(content: DomWrapper, index: any): void {
		let checkbox: DomWrapper = null;
		if (content.getChildCount() == 0) {
			checkbox = this._container.createElement("input");
			checkbox.setProperty("type", "checkbox");
			checkbox.listen("change", runOn(this, this.checkbox_Change));
			content.append(checkbox);
			this._checkboxPool.addItem(content, checkbox);
		} else {
			checkbox = this._checkboxPool.item(content);
		}
		if (checkbox != null) {
			checkbox.setProperty("value", index);
			if (this.model.indexes.contains1(index)) {
				if (this.model.isSelectAll == true) {
					checkbox.setProperty("checked", false);
				} else {
					checkbox.setProperty("checked", true);
				}
			} else {
				if (this.model.isSelectAll == true) {
					checkbox.setProperty("checked", true);
				} else {
					checkbox.setProperty("checked", false);
				}
			}
		}
	}
	private checkbox_Change(e: NormalizedEvent): void {
		let index = parseInt((<HTMLInputElement>(<Event>e.originalEvent).target).value);
		let isChecked = (<HTMLInputElement>(<Event>e.originalEvent).target).checked;
		if (isChecked == true) {
			if (this.model.isSelectAll == true) {
				this.model.removeItem(index);
			} else {
				this.model.addItem(index);
			}
		} else {
			if (this.model.isSelectAll == true) {
				this.model.addItem(index);
			} else {
				this.model.removeItem(index);
			}
		}
		this.model.onCheckedChanged(index, isChecked);
	}
	private input_OnInput(e: NormalizedEvent): void {
		let expression = (<HTMLInputElement>(<Event>e.originalEvent).target).value.toLowerCase();
		this.model.onFilterChanged(expression);
	}
	notifySizeChanged(): void {
	}
	setSelection(rowIndex: number, isSelected: boolean): void {
		for (let kvp of fromEnum<KeyValuePair$2<DomWrapper, DomWrapper>>(this._checkboxPool)) {
			let checkBoxContainer = <DomWrapper><any><any>kvp.key;
			let checkboxDOM = checkBoxContainer.getChildAt(0);
			let checkboxIndex = typeGetValue(checkboxDOM.getProperty("value"));
			if (checkboxIndex == rowIndex) {
				let checkbox = <DomWrapper><any><any>kvp.value;
				checkbox.setProperty("checked", isSelected);
			}
		}
	}
	setSelectionAllRowsInView(isSelected: boolean): void {
		for (let kvp of fromEnum<KeyValuePair$2<DomWrapper, DomWrapper>>(this._checkboxPool)) {
			let checkbox = <DomWrapper><any><any>kvp.value;
			checkbox.setProperty("checked", isSelected);
		}
	}
}

/**
 * @hidden 
 */
export class CheckboxList extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(CheckboxList, 'CheckboxList', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _view: CheckboxListView = null;
	private get view(): CheckboxListView {
		return this._view;
	}
	private set view(value: CheckboxListView) {
		this._view = value;
	}
	private _grid: Grid = null;
	get grid(): Grid {
		return this._grid;
	}
	set grid(value: Grid) {
		this._grid = value;
	}
	private _templateColumn: TemplateColumn = null;
	private _frhSelectedMemberPath: FastReflectionHelper = null;
	private _filterFactory: FilterFactory = null;
	private _ignoreKeyValueChanges: boolean = false;
	private _filter: FilterExpression = null;
	private get dataSource(): IDataSource {
		if (this.grid == null) {
			return null;
		}
		return this.grid.actualDataSource;
	}
	isSelectAll: boolean = false;
	indexes: List$1<number> = null;
	private _keys: GridSelectedKeysCollection = new GridSelectedKeysCollection();
	get keys(): GridSelectedKeysCollection {
		return this._keys;
	}
	static readonly primaryKeyPropertyName: string = "PrimaryKey";
	private _primaryKey: string[] = null;
	get primaryKey(): string[] {
		return this._primaryKey;
	}
	set primaryKey(value: string[]) {
		let oldValue = this._primaryKey;
		this._primaryKey = value;
		if (oldValue != this._primaryKey) {
			this.onPropertyChanged(CheckboxList.primaryKeyPropertyName, oldValue, this._primaryKey);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	constructor() {
		super();
		this.indexes = new List$1<number>(Number_$type, 0);
		let $t = this._keys;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.primaryKeyValues_CollectionChanged));
		this._filterFactory = new FilterFactory();
		this.isSelectAll = false;
		let view: CheckboxListView = new CheckboxListView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	private primaryKeyValues_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (this.dataSource == null || this._ignoreKeyValueChanges) {
			return;
		}
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			for (let i = 0; i < e.newItems.count; i++) {
				this.onKeyValueAdded(<PrimaryKeyValue>e.newItems.item(i));
			}
			break;

			case NotifyCollectionChangedAction.Remove:
			for (let i1 = 0; i1 < e.oldItems.count; i1++) {
				this.onKeyValueRemoved(<PrimaryKeyValue>e.oldItems.item(i1));
			}
			break;

			case NotifyCollectionChangedAction.Replace:
			for (let i2 = 0; i2 < e.oldItems.count; i2++) {
				this.onKeyValueRemoved(<PrimaryKeyValue>e.oldItems.item(i2));
			}
			for (let i3 = 0; i3 < e.newItems.count; i3++) {
				this.onKeyValueAdded(<PrimaryKeyValue>e.newItems.item(i3));
			}
			break;

			case NotifyCollectionChangedAction.Reset:
			this.view.setSelectionAllRowsInView(this.isSelectAll);
			for (let i4 = 0; i4 < this.keys.all.count; i4++) {
				this.onKeyValueAdded(this.keys.all._inner[i4]);
			}
			break;

		}

	}
	private onKeyValueAdded(kvp: PrimaryKeyValue): void {
		let itemIndex = this.dataSource.indexOfKey(kvp.value);
		if (itemIndex >= 0) {
			this.view.setSelection(itemIndex, !this.isSelectAll);
		}
	}
	private onKeyValueRemoved(kvp: PrimaryKeyValue): void {
		let itemIndex = this.dataSource.indexOfKey(kvp.value);
		if (itemIndex >= 0) {
			this.view.setSelection(itemIndex, this.isSelectAll);
		}
	}
	checkedChanged: (sender: any, args: CheckedChangedEventArgs) => void = null;
	onCheckedChanged(index: number, isChecked: boolean): void {
		if (this.checkedChanged != null) {
			this.checkedChanged(this, ((() => {
				let $ret = new CheckedChangedEventArgs();
				$ret.index = index;
				$ret.isChecked = isChecked;
				return $ret;
			})()));
		}
	}
	notifySizeChanged(): void {
		this.view.notifySizeChanged();
	}
	destroy(): void {
		if (this.grid != null) {
			let $t = this.grid;
			$t.cellClicked = delegateRemove($t.cellClicked, runOn(this, this.grid_CellClicked));
		}
		this.provideContainer(null, null);
		if (this._templateColumn != null) {
			let $t1 = this._templateColumn;
			$t1.cellUpdating = delegateRemove($t1.cellUpdating, runOn(this, this.checkboxColumn_CellUpdating));
		}
	}
	provideContainer(container: DomRenderer, grid: Grid): void {
		this.grid = grid;
		this.grid.headerHeight = 0;
		this.grid.rowSeparatorHeight = 0;
		this.grid.autoGenerateColumns = false;
		let $t = this.grid;
		$t.cellClicked = delegateCombine($t.cellClicked, runOn(this, this.grid_CellClicked));
		if (this._itemsSource != null) {
			this.grid.itemsSource = this._itemsSource;
			this.createIndexes();
		}
		if (this._dataMemberPath != null) {
			this.createIndexes();
			this.setupGrid();
		}
		this.view.onContainerProvided(container);
	}
	private grid_CellClicked(sender: any, args: GridCellEventArgs): void {
		let index = this.getIndex(args.cellInfo.rowItem);
		let kvp = this.generateKey(args.cellInfo.rowItem);
		if (this.keys.contains(kvp)) {
			this.keys.remove(kvp);
			this.indexes.remove(index);
			this.view.setSelection(index, this.isSelectAll);
		} else {
			this.keys.add(kvp);
			this.indexes.remove(index);
			this.view.setSelection(index, !this.isSelectAll);
		}
	}
	private checkboxColumn_CellUpdating(sender: any, args: TemplateCellUpdatingEventArgs): void {
		let index = this.getIndex(args.cellInfo.rowItem);
		let kvp = this.generateKey(args.cellInfo.rowItem);
		if (this.keys.contains(kvp)) {
			if (!this.indexes.contains(index)) {
				this.indexes.add(index);
			}
		} else {
			if (this.indexes.contains(index)) {
				this.indexes.remove(index);
			}
		}
		this.view.onTemplateProvided((<TemplateCellContainer>args.content).element, index);
	}
	onFilterChanged(expression: string): void {
		if (this._dataMemberPath != null) {
			let column = this._filterFactory.property(this._dataMemberPath).toLower();
			let filter = column.contains(expression);
			if (!this.grid.filterExpressions.all.contains(this._filter)) {
				this._filter = filter;
				this.grid.filterExpressions.add(this._filter);
			} else {
				let filterIndex = this.grid.filterExpressions.all.indexOf(this._filter);
				this.grid.filterExpressions.all.item(filterIndex, this._filter = filter);
			}
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
			this.onPropertyChanged(CheckboxList.itemsSourcePropertyName, oldValue, this._itemsSource);
		}
	}
	private _dataMemberPath: string = null;
	static readonly dataMemberPathPropertyName: string = "DataMemberPath";
	get dataMemberPath(): string {
		return this._dataMemberPath;
	}
	set dataMemberPath(value: string) {
		let oldValue = this._dataMemberPath;
		this._dataMemberPath = value;
		if (oldValue != this._dataMemberPath) {
			this.onPropertyChanged(CheckboxList.dataMemberPathPropertyName, oldValue, this._dataMemberPath);
		}
	}
	private _selectedMemberPath: string = null;
	static readonly selectedMemberPathPropertyName: string = "SelectedMemberPath";
	get selectedMemberPath(): string {
		return this._selectedMemberPath;
	}
	set selectedMemberPath(value: string) {
		let oldValue = this._selectedMemberPath;
		this._selectedMemberPath = value;
		if (oldValue != this._selectedMemberPath) {
			this.onPropertyChanged(CheckboxList.selectedMemberPathPropertyName, oldValue, this._selectedMemberPath);
		}
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case CheckboxList.itemsSourcePropertyName:
			if (this.grid != null) {
				if (newValue != null) {
					this.grid.groupDescriptions.clear();
					this.grid.sortDescriptions.clear();
					this.grid.filterExpressions.clear();
					this.grid.summaryDescriptions.clear();
				}
				this.grid.itemsSource = this._itemsSource;
				this.createIndexes();
			}
			break;

			case CheckboxList.dataMemberPathPropertyName:

			case CheckboxList.selectedMemberPathPropertyName:
			if (this.grid != null) {
				if (this._dataMemberPath != null) {
					this.createIndexes();
					this.setupGrid();
				}
			}
			break;

			case CheckboxList.primaryKeyPropertyName:
			if (this.grid != null) {
				this.grid.primaryKey = this.primaryKey;
			}
			break;

		}

	}
	private createIndexes(): void {
		if (this._frhSelectedMemberPath == null && this._selectedMemberPath != null && this._selectedMemberPath != "") {
			this._frhSelectedMemberPath = new FastReflectionHelper(false, this._selectedMemberPath);
		}
		if (this._itemsSource != null && this._frhSelectedMemberPath != null) {
			this._frhSelectedMemberPath.propertyName = this._selectedMemberPath;
			let itemCount = this.grid.actualDataSource.actualCount;
			for (let i: number = 0; i < itemCount; i++) {
				let row = this.grid.actualDataSource.getItemAtIndex(i);
				let isSelected = <boolean>this._frhSelectedMemberPath.getPropertyValue(row);
				if (isSelected == true) {
					this.indexes.add(i);
				}
			}
		}
	}
	private setupGrid(): void {
		this.grid.actualColumns.clear();
		this.grid.primaryKey = this.primaryKey;
		let checkboxColumn: TemplateColumn = new TemplateColumn();
		if (this._selectedMemberPath == null) {
			this._selectedMemberPath = "";
		}
		checkboxColumn.propertyPath = this._selectedMemberPath;
		checkboxColumn.name = "CheckboxColumn";
		checkboxColumn.cellUpdating = delegateCombine(checkboxColumn.cellUpdating, runOn(this, this.checkboxColumn_CellUpdating));
		this.grid.columns.add(checkboxColumn);
		this._templateColumn = checkboxColumn;
		let textColumn: TextColumn = new TextColumn();
		textColumn.propertyPath = this._dataMemberPath;
		textColumn.name = "DataColumn";
		this.grid.columns.add(textColumn);
	}
	private getIndex(rowItem: any): number {
		let index = -1;
		let rowCount = this.grid.actualDataSource.actualCount;
		for (let i: number = 0; i < rowCount; i++) {
			let item = this.grid.actualDataSource.getItemAtIndex(i);
			if (item == rowItem) {
				index = i;
				break;
			}
		}
		return index;
	}
	private generateKey(item: any): PrimaryKeyValue {
		if (this.primaryKey == null) {
			return PrimaryKeyValue.createIdentityKey(item);
		}
		let key = <string[]>new Array(this.primaryKey.length);
		let value = <any[]>new Array(this.primaryKey.length);
		for (let i = 0; i < key.length; i++) {
			key[i] = this.primaryKey[i];
			value[i] = this.dataSource.getItemProperty(item, key[i]);
		}
		return new PrimaryKeyValue(key, value);
	}
	removeItem(itemIndex: number): void {
		this.indexes.remove(itemIndex);
		this._ignoreKeyValueChanges = true;
		let item = this.dataSource.getItemAtIndex(itemIndex);
		let kvp = this.generateKey(item);
		this.keys.remove(kvp);
		this._ignoreKeyValueChanges = false;
	}
	addItem(itemIndex: number): void {
		this.indexes.add(itemIndex);
		this._ignoreKeyValueChanges = true;
		let item = this.dataSource.getItemAtIndex(itemIndex);
		let kvp = this.generateKey(item);
		this.keys.add(kvp);
		this._ignoreKeyValueChanges = false;
	}
	selectAll(): void {
		this.isSelectAll = true;
		this.indexes.clear();
		this.keys.clear();
	}
	deselectAll(): void {
		this.isSelectAll = false;
		this.indexes.clear();
		this.keys.clear();
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		if (this.grid != null) {
			this.grid.notifySetItem(index, oldItem, newItem);
		}
	}
	notifyClearItems(): void {
		if (this.grid != null) {
			this.grid.notifyClearItems();
		}
	}
	notifyInsertItem(index: number, newItem: any): void {
		if (this.grid != null) {
			this.grid.notifyInsertItem(index, newItem);
		}
		;
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		if (this.grid != null) {
			this.grid.notifyRemoveItem(index, oldItem);
		}
		;
	}
	addKeyValue(value: any[]): void {
		let kvp: PrimaryKeyValue = null;
		if (this.primaryKey == null || this.primaryKey.length == 0) {
			kvp = new PrimaryKeyValue(null, value);
		} else if (this.primaryKey.length == value.length) {
			kvp = new PrimaryKeyValue(this.primaryKey, value);
		} else {
			throw new ArgumentException(1, "value length must match PrimaryKey length");
		}
		if (kvp != null) {
			this.keys.add(kvp);
		}
	}
	removeKeyValue(value: any[]): void {
		let kvp: PrimaryKeyValue = null;
		if (this.primaryKey == null || this.primaryKey.length == 0) {
			kvp = new PrimaryKeyValue(null, value);
		} else if (this.primaryKey.length == value.length) {
			kvp = new PrimaryKeyValue(this.primaryKey, value);
		} else {
			throw new ArgumentException(1, "value length must match PrimaryKey length");
		}
		if (this.keys.contains(kvp)) {
			this.keys.remove(kvp);
		}
	}
}


