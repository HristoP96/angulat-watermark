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
export class LegendMouseButtonEventArgsDescription extends Description {
	static $t: Type = markType(LegendMouseButtonEventArgsDescription, 'LegendMouseButtonEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "LegendMouseButtonEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _handled: boolean = false;
	get handled(): boolean {
		return this._handled;
	}
	set handled(value: boolean) {
		this._handled = value;
		this.markDirty("Handled");
	}
	private _itemRef: string = null;
	get itemRef(): string {
		return this._itemRef;
	}
	set itemRef(value: string) {
		this._itemRef = value;
		this.markDirty("ItemRef");
	}
	private _legendItemRef: string = null;
	get legendItemRef(): string {
		return this._legendItemRef;
	}
	set legendItemRef(value: string) {
		this._legendItemRef = value;
		this.markDirty("LegendItemRef");
	}
}


