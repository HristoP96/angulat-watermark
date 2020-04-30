/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, markType } from "igniteui-core/type";
import { SortDescriptionCollection } from "igniteui-core/SortDescriptionCollection";
import { SyncableObservableCollection$2 } from "igniteui-core/SyncableObservableCollection$2";
import { ColumnGroupDescription } from "./ColumnGroupDescription";
import { SortDescription } from "igniteui-core/SortDescription";
import { ColumnSortDescription } from "./ColumnSortDescription";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ListSortDirection } from "igniteui-core/ListSortDirection";

/**
 * @hidden 
 */
export class ColumnGroupDescriptionCollection extends Base {
	static $t: Type = markType(ColumnGroupDescriptionCollection, 'ColumnGroupDescriptionCollection');
	private _inner: SyncableObservableCollection$2<ColumnGroupDescription, SortDescription> = new SyncableObservableCollection$2<ColumnGroupDescription, SortDescription>((<any>ColumnGroupDescription).$type, (<any>SortDescription).$type, 0);
	constructor() {
		super();
		let target = this._inner;
		target.compare = (s1: ColumnGroupDescription, s2: SortDescription) => {
			if (s1.propertyPath == s2.propertyName) {
				return true;
			}
			return false;
		};
		target.createFrom = (s2: SortDescription) => new ColumnGroupDescription(2, s2.propertyName, <ListSortDirection><number>s2.direction);
		target.createTo = (s1: ColumnGroupDescription) => {
			let sortDirection = <ListSortDirection><number>s1.sortDirection;
			return SortDescription.create(s1.propertyPath, sortDirection);
		};
	}
	private _syncTarget: SortDescriptionCollection = null;
	get syncTarget(): SortDescriptionCollection {
		return this._syncTarget;
	}
	set syncTarget(value: SortDescriptionCollection) {
		if (value == null) {
			this._inner.syncTarget = null;
			this._syncTarget = null;
			return;
		}
		this._syncTarget = value;
		this._inner.syncTarget = this._syncTarget.getInner();
	}
	add(item: ColumnGroupDescription): boolean {
		return this._inner.add(item);
	}
	insert(index: number, item: ColumnGroupDescription): void {
		this._inner.add1(index, item);
	}
	clear(): void {
		this._inner.clear();
	}
	get(index: number): ColumnGroupDescription {
		return this._inner.get(index);
	}
	indexOf(item: ColumnGroupDescription): number {
		return this._inner.indexOf(item);
	}
	remove(item: ColumnGroupDescription): boolean {
		return this._inner.remove1(item);
	}
	removeAt(index: number): ColumnGroupDescription {
		return this._inner.remove(index);
	}
	set(index: number, value: ColumnGroupDescription): ColumnGroupDescription {
		return this._inner.set(index, value);
	}
	size(): number {
		return this._inner.size();
	}
	addListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.addListener(eventHandler);
	}
	removeListener(eventHandler: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this._inner.removeListener(eventHandler);
	}
	get all(): IList$1<ColumnGroupDescription> {
		return this._inner.all;
	}
}


