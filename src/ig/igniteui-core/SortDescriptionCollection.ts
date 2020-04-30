/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, markType } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
import { SortDescription } from "./SortDescription";
import { SyncableObservableCollection$2 } from "./SyncableObservableCollection$2";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";

/**
 * @hidden 
 */
export class SortDescriptionCollection extends Base {
	static $t: Type = markType(SortDescriptionCollection, 'SortDescriptionCollection');
	getInner(): SyncableObservableCollection$1<SortDescription> {
		return this._inner;
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
		this._inner.syncTarget = this._syncTarget._inner;
	}
	private _inner: SyncableObservableCollection$1<SortDescription> = null;
	constructor() {
		super();
		this._inner = new SyncableObservableCollection$1<SortDescription>((<any>SortDescription).$type);
	}
	add(item: SortDescription): boolean {
		return this._inner.add(item);
	}
	insert(index: number, item: SortDescription): void {
		this._inner.add1(index, item);
	}
	clear(): void {
		this._inner.clear();
	}
	get(index: number): SortDescription {
		return this._inner.get(index);
	}
	indexOf(item: SortDescription): number {
		return this._inner.indexOf(item);
	}
	remove(item: SortDescription): boolean {
		return this._inner.remove1(item);
	}
	removeAt(index: number): SortDescription {
		return this._inner.remove(index);
	}
	set(index: number, value: SortDescription): SortDescription {
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
	get onChanged(): () => void {
		return this._inner.onChanged;
	}
	set onChanged(value: () => void) {
		this._inner.onChanged = value;
	}
	get all(): IList$1<SortDescription> {
		return this._inner.all;
	}
}


