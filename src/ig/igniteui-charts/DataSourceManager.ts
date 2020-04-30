/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, String_$type, Type, markType } from "igniteui-core/type";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";

/**
 * @hidden 
 */
export class DataSourceManager extends Base {
	static $t: Type = markType(DataSourceManager, 'DataSourceManager');
	private _sourceMapping: Dictionary$2<any, any> = null;
	private _enumToDataSource: Dictionary$2<any, any> = null;
	private _dataSourceReferenceCount: Dictionary$2<any, number> = null;
	private _dataSourceById: Dictionary$2<string, any> = null;
	constructor() {
		super();
		this._sourceMapping = new Dictionary$2<any, any>((<any>Base).$type, (<any>Base).$type, 0);
		this._enumToDataSource = new Dictionary$2<any, any>((<any>Base).$type, (<any>Base).$type, 0);
		this._dataSourceReferenceCount = new Dictionary$2<any, number>((<any>Base).$type, Number_$type, 0);
		this._dataSourceById = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	}
	map(target_: any, dataSource_: any): void {
		if (this._sourceMapping.containsKey(target_)) {
			this.unMap(target_);
		}
		this._sourceMapping.addItem(target_, dataSource_);
		let arr_ = dataSource_.dataView();
		if (this._enumToDataSource.containsKey(arr_)) {
			this._enumToDataSource.removeItem(arr_);
		}
		this._enumToDataSource.addItem(arr_, dataSource_);
		let id = <string>(dataSource_.id);
		if (this._dataSourceById.containsKey(id)) {
			this._dataSourceById.removeItem(id);
		}
		this._dataSourceById.addItem(id, dataSource_);
		if (!this._dataSourceReferenceCount.containsKey(dataSource_)) {
			this._dataSourceReferenceCount.addItem(dataSource_, 1);
		} else {
			this._dataSourceReferenceCount.item(dataSource_, this._dataSourceReferenceCount.item(dataSource_) + 1);
		}
		target_.itemsSource(arr_);
	}
	private unMap(target_: any): void {
		let curr_ = target_.itemsSource();
		this._sourceMapping.removeItem(target_);
		if (!this._enumToDataSource.containsKey(curr_)) {
			return;
		}
		let ds_ = this._enumToDataSource.item(curr_);
		this._dataSourceReferenceCount.item(ds_, this._dataSourceReferenceCount.item(ds_) - 1);
		if (this._dataSourceReferenceCount.item(ds_) == 0) {
			this._dataSourceReferenceCount.removeItem(ds_);
			this._enumToDataSource.removeItem(curr_);
			let id = <string>(ds_.id);
			this._dataSourceById.removeItem(id);
		}
	}
}


