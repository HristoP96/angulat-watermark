/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList, IList_$type, ICollection, ICollection_$type, fromEnum, fromEn, Number_$type, typeCast, Date_$type, String_$type, Type, markType, TypeRegistrar } from "./type";
import { IFastItemsSource, IFastItemsSource_$type } from "./IFastItemsSource";
import { IGetItemAtIndex } from "./IGetItemAtIndex";
import { ColumnReference } from "./ColumnReference";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { IFastItemColumnInternal } from "./IFastItemColumnInternal";
import { FastItemsSourceEventArgs } from "./FastItemsSourceEventArgs";
import { FastItemsSourceEventAction } from "./FastItemsSourceEventAction";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { NotifyCollectionChangedAction } from "./NotifyCollectionChangedAction";
import { KeyValuePair$2 } from "./KeyValuePair$2";
import { ArgumentException } from "./ArgumentException";
import { IFastItemColumn$1, IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { Tuple$2 } from "./Tuple$2";
import { FastItemColumn } from "./FastItemColumn";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
import { stringIsNullOrEmpty, stringStartsWith, stringEndsWith } from "./string";

/**
 * @hidden 
 */
export class FastItemsSource extends Base implements IEnumerable, IFastItemsSource {
	static $t: Type = markType(FastItemsSource, 'FastItemsSource', (<any>Base).$type, [IEnumerable_$type, IFastItemsSource_$type]);
	constructor() {
		super();
	}
	event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	private raiseDataSourceEvent(action: FastItemsSourceEventAction, position: number, count: number): void {
		if (this.event != null) {
			this.event(this, new FastItemsSourceEventArgs(0, action, position, count));
		}
	}
	private raiseDataSourceEvent1(position: number, propertyName: string): void {
		if (this.event != null) {
			this.event(this, new FastItemsSourceEventArgs(1, position, propertyName));
		}
	}
	get itemsSource(): IEnumerable {
		return this._itemsSource;
	}
	set itemsSource(value: IEnumerable) {
		if (this._itemsSource == value) {
			return;
		}
		this.detach();
		this._itemsSource = value;
		this.contents.clear();
		this.index = null;
		this.attach();
		for (let referencedColumn of fromEnum<ColumnReference>(this.columns.values)) {
			referencedColumn.fastItemColumn.reset();
		}
		this.raiseDataSourceEvent(FastItemsSourceEventAction.Insert, 0, this.contents.count);
	}
	detach(): void {
	}
	onItemsSourceEventProxyWeakCollectionChanged(fastItemsSource: IFastItemsSource, sender: any, e: NotifyCollectionChangedEventArgs): void {
		let fis = <FastItemsSource>fastItemsSource;
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			fis.dataSourceAdd(e.newStartingIndex, e.newItems);
			break;

			case NotifyCollectionChangedAction.Remove:
			fis.dataSourceRemove(e.oldStartingIndex, e.oldItems);
			break;

			case NotifyCollectionChangedAction.Replace:
			fis.dataSourceReplace(e.newStartingIndex, e.oldItems, e.newItems);
			break;

			case NotifyCollectionChangedAction.Reset:
			fis.dataSourceReset();
			break;

		}

	}
	attach(): void {
		this.contents.insertRange1(this.contents.count, this._itemsSource);
	}
	private dataSourceAdd(position: number, newItems: IList): void {
		if (this.index != null) {
			for (let i: number = 0; i < newItems.count; ++i) {
				this.index.addItem(newItems.item(i), position + i);
			}
			for (let i1: number = position; i1 < this.contents.count; ++i1) {
				this.index.item(this.contents._inner[i1], i1 + newItems.count);
			}
		}
		this.contents.insertRange1(position, newItems);
		for (let referencedColumn of fromEnum<ColumnReference>(this.columns.values)) {
			referencedColumn.fastItemColumn.insertRange(position, newItems.count);
		}
		this.raiseDataSourceEvent(FastItemsSourceEventAction.Insert, position, newItems.count);
	}
	private dataSourceRemove(position: number, oldItems: IList): void {
		this.contents.removeRange(position, oldItems.count);
		if (this.index != null) {
			for (let item of fromEn<any>(oldItems)) {
				this.index.removeItem(item);
			}
			for (let i: number = position; i < this.contents.count; ++i) {
				this.index.item(this.contents._inner[i], i);
			}
		}
		for (let referencedColumn of fromEnum<ColumnReference>(this.columns.values)) {
			referencedColumn.fastItemColumn.removeRange(position, oldItems.count);
		}
		this.raiseDataSourceEvent(FastItemsSourceEventAction.Remove, position, oldItems.count);
	}
	private dataSourceReplace(position: number, oldItems: IList, newItems: IList): void {
		for (let i: number = 0; i < newItems.count; ++i) {
			this.contents._inner[position + i] = newItems.item(i);
		}
		if (this.index != null) {
			for (let item of fromEn<any>(oldItems)) {
				this.index.removeItem(item);
			}
			for (let i1: number = 0; i1 < newItems.count; ++i1) {
				this.index.addItem(newItems.item(i1), position + i1);
			}
		}
		for (let referencedColumn of fromEnum<ColumnReference>(this.columns.values)) {
			referencedColumn.fastItemColumn.replaceRange(position, newItems.count);
		}
		this.raiseDataSourceEvent(FastItemsSourceEventAction.Replace, position, oldItems.count);
	}
	private dataSourceReset(): void {
		this.contents.clear();
		this.index = null;
		this.contents.insertRange1(0, this._itemsSource);
		for (let referencedColumn of fromEnum<ColumnReference>(this.columns.values)) {
			referencedColumn.fastItemColumn.reset();
		}
		this.raiseDataSourceEvent(FastItemsSourceEventAction.Reset, 0, this.contents.count);
	}
	private dataSourceChange(item: any, propertyName: string): void {
		let columnReference: ColumnReference = null;
		let position: number = this.indexOf(item);
		if (position == -1) {
			throw new ArgumentException(1, "item");
		}
		if (stringIsNullOrEmpty(propertyName)) {
			for (let col of fromEnum<KeyValuePair$2<string, ColumnReference>>(this.columns)) {
				col.value.fastItemColumn.replaceRange(position, 1);
				this.raiseDataSourceEvent1(position, col.value.fastItemColumn.propertyName);
			}
		} else if (propertyName == "Item[]") {
			for (let col1 of fromEnum<KeyValuePair$2<string, ColumnReference>>(this.columns)) {
				if (col1.key != null && stringStartsWith(col1.key, "[") && stringEndsWith(col1.key, "]")) {
					col1.value.fastItemColumn.replaceRange(position, 1);
					this.raiseDataSourceEvent1(position, col1.value.fastItemColumn.propertyName);
				}
			}
		} else {
			if (((() => { let $ret = this.columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
				columnReference.fastItemColumn.replaceRange(position, 1);
			}
			if (((() => { let $ret = this.columns.tryGetValue(propertyName + "_object", columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
				columnReference.fastItemColumn.replaceRange(position, 1);
			}
			this.raiseDataSourceEvent1(position, propertyName);
		}
	}
	get count(): number {
		return this.contents.count;
	}
	item(i: number): any {
		return this.contents._inner[i];
	}
	getEnumeratorObject(): IEnumerator {
		return this.contents.getEnumerator();
	}
	indexOf(item: any): number {
		let ret: number;
		if (this.index == null && this.contents.count > 0) {
			this.index = new Dictionary$2<any, number>((<any>Base).$type, Number_$type, 0);
			let contents_ = this.contents;
			let index_ = this.index;
			for (let j_ = 0; j_ < this.contents.count; j_++) {
				let o = (<any>contents_)._inner[j_];
				if (!this.index.containsKey(o)) {
					this.index.addItem(o, j_);
				}
			}
		}
		if (this.index != null && ((() => { let $ret = this.index.tryGetValue(item, ret); ret = $ret.p1; return $ret.ret; })())) {
			return ret;
		} else {
			return -1;
		}
	}
	registerColumnDateTime(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<Date> {
		let fastItemColumn: IFastItemColumn$1<Date> = null;
		if (propertyName != null) {
			let columnReference: ColumnReference = null;
			if (!((() => { let $ret = this.columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
				let actualPropertyName: string = FastItemsSource.parseMemberPath(propertyName).item1;
				columnReference = new ColumnReference(<IFastItemColumnInternal><any>TypeRegistrar.create("FastItemDateTimeColumn", this, actualPropertyName, coerceValue, expectFunctions));
				this.columns.addItem(propertyName, columnReference);
			}
			columnReference.references = columnReference.references + 1;
			fastItemColumn = typeCast<IFastItemColumn$1<Date>>(IFastItemColumn$1_$type.specialize(Date_$type), columnReference.fastItemColumn);
		}
		return fastItemColumn;
	}
	registerColumnObject(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<any> {
		let fastItemColumn: IFastItemColumn$1<any> = null;
		let key: string = propertyName + "_object";
		if (propertyName != null) {
			let columnReference: ColumnReference = null;
			if (!((() => { let $ret = this.columns.tryGetValue(key, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
				let actualPropertyName: string = FastItemsSource.parseMemberPath(propertyName).item1;
				columnReference = new ColumnReference(<IFastItemColumnInternal><any>TypeRegistrar.create("FastItemObjectColumn", this, actualPropertyName, coerceValue, expectFunctions));
				this.columns.addItem(key, columnReference);
			}
			columnReference.references = columnReference.references + 1;
			fastItemColumn = typeCast<IFastItemColumn$1<any>>(IFastItemColumn$1_$type.specialize((<any>Base).$type), columnReference.fastItemColumn);
		}
		return fastItemColumn;
	}
	registerColumnInt(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<number> {
		let fastItemColumn: IFastItemColumn$1<number> = null;
		if (propertyName == null) {
			propertyName = "";
		}
		let columnReference: ColumnReference = null;
		if (!((() => { let $ret = this.columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
			let actualPropertyName: string = FastItemsSource.parseMemberPath(propertyName).item1;
			columnReference = new ColumnReference(<IFastItemColumnInternal><any>TypeRegistrar.create("FastItemIntColumn", this, actualPropertyName, coerceValue, expectFunctions));
			this.columns.addItem(propertyName, columnReference);
		}
		columnReference.references = columnReference.references + 1;
		fastItemColumn = typeCast<IFastItemColumn$1<number>>(IFastItemColumn$1_$type.specialize(Number_$type), columnReference.fastItemColumn);
		return fastItemColumn;
	}
	registerColumn(propertyName: string, coerceValue: (arg1: any) => any, expectFunctions: boolean): IFastItemColumn$1<number> {
		let fastItemColumn: IFastItemColumn$1<number> = null;
		if (propertyName == null) {
			propertyName = "";
		}
		let columnReference: ColumnReference = null;
		if (!((() => { let $ret = this.columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
			let actualPropertyName: string = FastItemsSource.parseMemberPath(propertyName).item1;
			columnReference = new ColumnReference(new FastItemColumn(this, actualPropertyName, coerceValue, expectFunctions));
			this.columns.addItem(propertyName, columnReference);
		}
		columnReference.references = columnReference.references + 1;
		fastItemColumn = typeCast<IFastItemColumn$1<number>>(IFastItemColumn$1_$type.specialize(Number_$type), columnReference.fastItemColumn);
		return fastItemColumn;
	}
	deregisterColumn(fastItemColumn: IFastItemColumnPropertyName): void {
		let propertyName: string = fastItemColumn != null ? fastItemColumn.propertyName : null;
		let key: string = propertyName;
		if (typeCast<IFastItemColumn$1<any>>(IFastItemColumn$1_$type.specialize((<any>Base).$type), fastItemColumn) !== null) {
			key += "_object";
		}
		if (propertyName != null) {
			let columnReference: ColumnReference = null;
			if (((() => { let $ret = this.columns.tryGetValue(propertyName, columnReference); columnReference = $ret.p1; return $ret.ret; })())) {
				columnReference.references = columnReference.references - 1;
				if (columnReference.references == 0) {
					this.columns.removeItem(key);
				}
			}
		}
	}
	private columns: Dictionary$2<string, ColumnReference> = new Dictionary$2<string, ColumnReference>(String_$type, (<any>ColumnReference).$type, 0);
	private _itemsSource: IEnumerable = null;
	private contents: List$1<any> = new List$1<any>((<any>Base).$type, 0);
	private index: Dictionary$2<any, number> = null;
	asArray(): any[] {
		return <any[]><any>this.contents.asArray();
	}
	handleCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		switch (e.action) {
			case NotifyCollectionChangedAction.Add:
			this.dataSourceAdd(e.newStartingIndex, e.newItems);
			break;

			case NotifyCollectionChangedAction.Remove:
			this.dataSourceRemove(e.oldStartingIndex, e.oldItems);
			break;

			case NotifyCollectionChangedAction.Replace:
			this.dataSourceReplace(e.newStartingIndex, e.oldItems, e.newItems);
			break;

			case NotifyCollectionChangedAction.Reset:
			this.dataSourceReset();
			break;

		}

	}
	static parseMemberPath(memberPath: string): Tuple$2<string, string> {
		let vals = memberPath.split('!');
		if (vals.length == 2) {
			return new Tuple$2<string, string>(String_$type, String_$type, vals[0], vals[1]);
		} else {
			return new Tuple$2<string, string>(String_$type, String_$type, memberPath, null);
		}
	}
	getItem(index: number): any {
		return this.item(index);
	}
}


