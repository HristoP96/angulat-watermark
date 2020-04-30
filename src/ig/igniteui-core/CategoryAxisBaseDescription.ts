/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisDescription } from "./AxisDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class CategoryAxisBaseDescription extends AxisDescription {
	static $t: Type = markType(CategoryAxisBaseDescription, 'CategoryAxisBaseDescription', (<any>AxisDescription).$type);
	protected get_type(): string {
		return "CategoryAxisBase";
	}
	constructor() {
		super();
	}
	private _itemsCount: number = 0;
	get itemsCount(): number {
		return this._itemsCount;
	}
	set itemsCount(value: number) {
		this._itemsCount = value;
		this.markDirty("ItemsCount");
	}
	private _gap: number = 0;
	get gap(): number {
		return this._gap;
	}
	set gap(value: number) {
		this._gap = value;
		this.markDirty("Gap");
	}
	private _overlap: number = 0;
	get overlap(): number {
		return this._overlap;
	}
	set overlap(value: number) {
		this._overlap = value;
		this.markDirty("Overlap");
	}
	private _useClusteringMode: boolean = false;
	get useClusteringMode(): boolean {
		return this._useClusteringMode;
	}
	set useClusteringMode(value: boolean) {
		this._useClusteringMode = value;
		this.markDirty("UseClusteringMode");
	}
	private _dataSourceRef: string = null;
	get dataSourceRef(): string {
		return this._dataSourceRef;
	}
	set dataSourceRef(value: string) {
		this._dataSourceRef = value;
		this.markDirty("DataSourceRef");
	}
}


