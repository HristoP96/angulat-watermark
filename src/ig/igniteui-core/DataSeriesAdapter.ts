/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable, IEnumerable_$type, Delegate_$type, runOn, delegateCombine, Type, markType } from "./type";
import { IExternalDataSeriesAdapter, IExternalDataSeriesAdapter_$type } from "./IExternalDataSeriesAdapter";
import { DataSeriesAdapterImplementation } from "./DataSeriesAdapterImplementation";
import { List$1 } from "./List$1";
import { DataSeries } from "./DataSeries";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { IDataSeriesAdapterRule } from "./IDataSeriesAdapterRule";

/**
 * @hidden 
 */
export class DataSeriesAdapter extends Base implements IExternalDataSeriesAdapter {
	static $t: Type = markType(DataSeriesAdapter, 'DataSeriesAdapter', (<any>Base).$type, [IExternalDataSeriesAdapter_$type]);
	private _implementation: DataSeriesAdapterImplementation = null;
	get implementation(): DataSeriesAdapterImplementation {
		return this._implementation;
	}
	set implementation(value: DataSeriesAdapterImplementation) {
		this._implementation = value;
	}
	private _dataSeriesChanged: List$1<(arg1: DataSeriesAdapter, arg2: DataSeries[]) => void> = new List$1<(arg1: DataSeriesAdapter, arg2: DataSeries[]) => void>(Delegate_$type, 0);
	constructor() {
		super();
		this.implementation = new DataSeriesAdapterImplementation();
		this.implementation.externalObject = this;
		let $t = this.implementation.dataSeries;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this._dataSeries_CollectionChanged));
	}
	private _dataSeries_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		for (let i = 0; i < this._dataSeriesChanged.count; i++) {
			this._dataSeriesChanged._inner[i](this, this.getDataSeries());
		}
	}
	get dataSource(): any {
		return this.implementation.itemsSource;
	}
	set dataSource(value: any) {
		this.implementation.itemsSource = <IEnumerable><any>value;
	}
	getDataProvider(itemsSource: any): IDataSourceLocalDataProvider {
		return ((() => {
			let $ret = new DataSourceLocalDataProvider();
			$ret.dataSource = itemsSource;
			return $ret;
		})());
	}
	addDataSeriesChangedListener(callback: (arg1: DataSeriesAdapter, arg2: DataSeries[]) => void): void {
		this._dataSeriesChanged.add(callback);
	}
	removeDataSeriesChangedListener(callback: (arg1: DataSeriesAdapter, arg2: DataSeries[]) => void): void {
		this._dataSeriesChanged.remove(callback);
	}
	addDataSeries(dataSeries: DataSeries): void {
		this.implementation.dataSeries.add(dataSeries);
	}
	removeDataSeries(dataSeries: DataSeries): void {
		this.implementation.dataSeries.remove(dataSeries);
	}
	removeDataSeriesAt(index: number): void {
		this.implementation.dataSeries.removeAt(index);
	}
	getDataSeriesAt(index: number): DataSeries {
		return this.implementation.dataSeries._inner[index];
	}
	getDataSeries(): DataSeries[] {
		let dataSeries: DataSeries[] = <DataSeries[]>new Array(this.implementation.dataSeries.count);
		for (let i = 0; i < this.implementation.dataSeries.count; i++) {
			dataSeries[i] = this.implementation.dataSeries._inner[i];
		}
		return dataSeries;
	}
	clearDataSeriess(): void {
		this.implementation.dataSeries.clear();
	}
	insertDataSeries(index: number, dataSeries: DataSeries): void {
		this.implementation.dataSeries.insert(index, dataSeries);
	}
	getDataSeriessCount(): number {
		return this.implementation.dataSeries.count;
	}
	addRule(rule: IDataSeriesAdapterRule): void {
		this.implementation.rules.add(rule);
	}
	removeRule(rule: IDataSeriesAdapterRule): void {
		this.implementation.rules.remove(rule);
	}
	removeRuleAt(index: number): void {
		this.implementation.rules.removeAt(index);
	}
	getRuleAt(index: number): IDataSeriesAdapterRule {
		return this.implementation.rules._inner[index];
	}
	clearRules(): void {
		this.implementation.rules.clear();
	}
	insertRule(index: number, rule: IDataSeriesAdapterRule): void {
		this.implementation.rules.insert(index, rule);
	}
	getRulesCount(): number {
		return this.implementation.rules.count;
	}
	getRules(): IDataSeriesAdapterRule[] {
		let rules: IDataSeriesAdapterRule[] = <IDataSeriesAdapterRule[]>new Array(this.implementation.rules.count);
		for (let i = 0; i < this.implementation.rules.count; i++) {
			rules[i] = this.implementation.rules._inner[i];
		}
		return rules;
	}
	notifyClearItems(dataSource: any): void {
		this.implementation.notifyClearItems(dataSource);
	}
	notifyInsertItem(dataSource: any, index: number, newItem: any): void {
		this.implementation.notifyInsertItem(dataSource, index, newItem);
	}
	notifyRemoveItem(dataSource: any, index: number, oldItem: any): void {
		this.implementation.notifyRemoveItem(dataSource, index, oldItem);
	}
	notifySetItem(dataSource: any, index: number, oldItem: any, newItem: any): void {
		this.implementation.notifySetItem(dataSource, index, oldItem, newItem);
	}
}


