/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, delegateRemove, delegateCombine, fromEnum } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "igniteui-core/dom";
import { Grid } from "./Grid";
import { CheckboxList } from "./CheckboxList";
import { CheckedChangedEventArgs } from "./CheckedChangedEventArgs";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { Column } from "./Column";
import { ColumnHiddenChangedEventArgs } from "./ColumnHiddenChangedEventArgs";
import { ColumnHiddenInfo } from "./ColumnHiddenInfo";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class ColumnHidingView extends Base {
	static $t: Type = markType(ColumnHidingView, 'ColumnHidingView');
	private _showAll: DomWrapper = null;
	private _hideAll: DomWrapper = null;
	constructor() {
		super();
	}
	private _model: ColumnHiding = null;
	get model(): ColumnHiding {
		return this._model;
	}
	set model(value: ColumnHiding) {
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
			if (this._showAll != null) {
				this._showAll.unlistenAll();
			}
			if (this._hideAll != null) {
				this._hideAll.unlistenAll();
			}
			return;
		}
		this._container = container;
		this._showAll = this._container.rootWrapper.getChildAt(1);
		this._showAll.listen("click", runOn(this, this.showAll_OnClick));
		this._hideAll = this._container.rootWrapper.getChildAt(2);
		this._hideAll.listen("click", runOn(this, this.hideAll_OnClick));
		let containerWidth = Math.round(<number>container.rootWrapper.width());
		let containerHeight = Math.round(<number>container.rootWrapper.height());
		this._container.rootWrapper.setStyleProperty("position", "relative");
	}
	private showAll_OnClick(e: NormalizedEvent): void {
		this.model.showAll();
	}
	private hideAll_OnClick(e: NormalizedEvent): void {
		this.model.hideAll();
	}
	notifySizeChanged(): void {
	}
}

/**
 * @hidden 
 */
export class ColumnHiding extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(ColumnHiding, 'ColumnHiding', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _view: ColumnHidingView = null;
	private get view(): ColumnHidingView {
		return this._view;
	}
	private set view(value: ColumnHidingView) {
		this._view = value;
	}
	private _checkboxList: CheckboxList = null;
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private _ignoreHiddenChanged: boolean = false;
	constructor() {
		super();
		this._ignoreHiddenChanged = false;
		let view: ColumnHidingView = new ColumnHidingView();
		view.model = this;
		this.view = view;
		this.view.onInit();
	}
	notifySizeChanged(): void {
		this.view.notifySizeChanged();
	}
	destroy(): void {
		this.provideContainer(null, null);
		if (this._checkboxList != null) {
			let $t = this._checkboxList;
			$t.checkedChanged = delegateRemove($t.checkedChanged, runOn(this, this.checkboxList_CheckedChanged));
		}
		if (this._targetGrid != null) {
			let $t1 = this._targetGrid.actualColumns;
			$t1.collectionChanged = delegateRemove($t1.collectionChanged, runOn(this, this.actualColumns_CollectionChanged));
			let $t2 = this._targetGrid;
			$t2.columnHiddenChanged = delegateRemove($t2.columnHiddenChanged, runOn(this, this.targetGrid_ColumnHiddenChanged));
		}
	}
	provideContainer(container: DomRenderer, checkboxList: CheckboxList): void {
		this._checkboxList = checkboxList;
		let $t = this._checkboxList;
		$t.checkedChanged = delegateCombine($t.checkedChanged, runOn(this, this.checkboxList_CheckedChanged));
		this.createCheckList();
		this.view.onContainerProvided(container);
	}
	private _targetGrid: Grid = null;
	static readonly targetGridPropertyName: string = "TargetGrid";
	get targetGrid(): Grid {
		return this._targetGrid;
	}
	set targetGrid(value: Grid) {
		let oldValue = this._targetGrid;
		this._targetGrid = value;
		if (oldValue != this._targetGrid) {
			this.onPropertyChanged(ColumnHiding.targetGridPropertyName, oldValue, this._targetGrid);
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
			case ColumnHiding.targetGridPropertyName:
			if (oldValue != null) {
				let $t = (<Grid>oldValue).actualColumns;
				$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.actualColumns_CollectionChanged));
				let $t1 = (<Grid>oldValue);
				$t1.columnHiddenChanged = delegateRemove($t1.columnHiddenChanged, runOn(this, this.targetGrid_ColumnHiddenChanged));
			}
			if (this._targetGrid != null) {
				let $t2 = this._targetGrid.actualColumns;
				$t2.collectionChanged = delegateCombine($t2.collectionChanged, runOn(this, this.actualColumns_CollectionChanged));
				let $t3 = this._targetGrid;
				$t3.columnHiddenChanged = delegateCombine($t3.columnHiddenChanged, runOn(this, this.targetGrid_ColumnHiddenChanged));
			}
			this.createCheckList();
			break;

		}

	}
	private targetGrid_ColumnHiddenChanged(sender: any, args: ColumnHiddenChangedEventArgs): void {
		if (this._ignoreHiddenChanged == false) {
			this.createCheckList();
		}
		this._ignoreHiddenChanged = false;
	}
	private actualColumns_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.createCheckList();
	}
	private createCheckList(): void {
		if (this._targetGrid != null && this._checkboxList != null) {
			let columnInfo: ColumnHiddenInfo;
			let columns: ObservableCollection$1<ColumnHiddenInfo> = new ObservableCollection$1<ColumnHiddenInfo>((<any>ColumnHiddenInfo).$type, 0);
			for (let column of fromEnum<Column>(this._targetGrid.actualColumns)) {
				columnInfo = new ColumnHiddenInfo();
				let columnText = column.propertyPath;
				if (column.headerText != null) {
					columnText = column.headerText;
				}
				columnInfo.columnName = columnText;
				columnInfo.isHidden = column.isHidden;
				columns.add(columnInfo);
			}
			this._checkboxList.itemsSource = columns;
			let columnName = "";
			let isHidden = "";
			columnName = "columnName";
			isHidden = "isHidden";
			this._checkboxList.selectedMemberPath = isHidden;
			this._checkboxList.dataMemberPath = columnName;
		}
	}
	showAll(): void {
		this._checkboxList.deselectAll();
		if (this._targetGrid != null) {
			for (let column of fromEnum<Column>(this._targetGrid.actualColumns)) {
				this._ignoreHiddenChanged = true;
				column.isHidden = false;
			}
		}
	}
	hideAll(): void {
		this._checkboxList.selectAll();
		if (this._targetGrid != null) {
			for (let column of fromEnum<Column>(this._targetGrid.actualColumns)) {
				this._ignoreHiddenChanged = true;
				column.isHidden = true;
			}
		}
	}
	private checkboxList_CheckedChanged(sender: any, args: CheckedChangedEventArgs): void {
		this._ignoreHiddenChanged = true;
		this._targetGrid.actualColumns._inner[args.index].isHidden = args.isChecked;
	}
}


