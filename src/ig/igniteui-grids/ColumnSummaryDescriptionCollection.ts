/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, markType } from "igniteui-core/type";
import { SummaryDescriptionCollection } from "igniteui-core/SummaryDescriptionCollection";
import { SyncableObservableCollection$2 } from "igniteui-core/SyncableObservableCollection$2";
import { ColumnSummaryDescription } from "./ColumnSummaryDescription";
import { SummaryDescription } from "igniteui-core/SummaryDescription";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";

/**
 * @hidden 
 */
export class ColumnSummaryDescriptionCollection extends Base {
	static $t: Type = markType(ColumnSummaryDescriptionCollection, 'ColumnSummaryDescriptionCollection');
	private _inner: SyncableObservableCollection$2<ColumnSummaryDescription, SummaryDescription> = new SyncableObservableCollection$2<ColumnSummaryDescription, SummaryDescription>((<any>ColumnSummaryDescription).$type, (<any>SummaryDescription).$type, 0);
	constructor() {
		super();
		let target = this._inner;
		target.compare = (s1: ColumnSummaryDescription, s2: SummaryDescription) => s1.propertyPath == s2.propertyName && s1.operand == s2.operand && s1.calculator == s2.calculator && s1.dataSourceSummaryDesc == s2;
		target.createFrom = (s2: SummaryDescription) => {
			let desc = new ColumnSummaryDescription(1, s2.propertyName);
			desc.operand = s2.operand;
			desc.calculator = s2.calculator;
			desc.dataSourceSummaryDesc = s2;
			return desc;
		};
		target.createTo = (s1: ColumnSummaryDescription) => {
			let desc = new SummaryDescription(1, s1.propertyPath);
			desc.operand = s1.operand;
			desc.calculator = s1.calculator;
			s1.dataSourceSummaryDesc = desc;
			return desc;
		};
	}
	private _syncTarget: SummaryDescriptionCollection = null;
	get syncTarget(): SummaryDescriptionCollection {
		return this._syncTarget;
	}
	set syncTarget(value: SummaryDescriptionCollection) {
		if (value == null) {
			this._inner.syncTarget = null;
			this._syncTarget = null;
			return;
		}
		this._syncTarget = value;
		this._inner.syncTarget = this._syncTarget.getInner();
	}
	add(item: ColumnSummaryDescription): boolean {
		return this._inner.add(item);
	}
	insert(index: number, item: ColumnSummaryDescription): void {
		this._inner.add1(index, item);
	}
	clear(): void {
		this._inner.clear();
	}
	get(index: number): ColumnSummaryDescription {
		return this._inner.get(index);
	}
	indexOf(item: ColumnSummaryDescription): number {
		return this._inner.indexOf(item);
	}
	remove(item: ColumnSummaryDescription): boolean {
		return this._inner.remove1(item);
	}
	removeAt(index: number): ColumnSummaryDescription {
		return this._inner.remove(index);
	}
	set(index: number, value: ColumnSummaryDescription): ColumnSummaryDescription {
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
	get all(): IList$1<ColumnSummaryDescription> {
		return this._inner.all;
	}
}


