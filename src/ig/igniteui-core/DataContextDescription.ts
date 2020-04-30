/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DataContextDescription extends Description {
	static $t: Type = markType(DataContextDescription, 'DataContextDescription', (<any>Description).$type);
	protected get_type(): string {
		return "DataContext";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _itemRef: string = null;
	get itemRef(): string {
		return this._itemRef;
	}
	set itemRef(value: string) {
		this._itemRef = value;
		this.markDirty("ItemRef");
	}
	private _actualItemBrush: string = null;
	get actualItemBrush(): string {
		return this._actualItemBrush;
	}
	set actualItemBrush(value: string) {
		this._actualItemBrush = value;
		this.markDirty("ActualItemBrush");
	}
	private _outline: string = null;
	get outline(): string {
		return this._outline;
	}
	set outline(value: string) {
		this._outline = value;
		this.markDirty("Outline");
	}
	private _itemLabelRef: string = null;
	get itemLabelRef(): string {
		return this._itemLabelRef;
	}
	set itemLabelRef(value: string) {
		this._itemLabelRef = value;
		this.markDirty("ItemLabelRef");
	}
	private _itemBrush: string = null;
	get itemBrush(): string {
		return this._itemBrush;
	}
	set itemBrush(value: string) {
		this._itemBrush = value;
		this.markDirty("ItemBrush");
	}
	private _thickness: number = 0;
	get thickness(): number {
		return this._thickness;
	}
	set thickness(value: number) {
		this._thickness = value;
		this.markDirty("Thickness");
	}
	private _legendLabelRef: string = null;
	get legendLabelRef(): string {
		return this._legendLabelRef;
	}
	set legendLabelRef(value: string) {
		this._legendLabelRef = value;
		this.markDirty("LegendLabelRef");
	}
}


