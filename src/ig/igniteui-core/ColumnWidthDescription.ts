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
export class ColumnWidthDescription extends Description {
	static $t: Type = markType(ColumnWidthDescription, 'ColumnWidthDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ColumnWidth";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _isStarSized: boolean = false;
	get isStarSized(): boolean {
		return this._isStarSized;
	}
	set isStarSized(value: boolean) {
		this._isStarSized = value;
		this.markDirty("IsStarSized");
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		this.markDirty("Value");
	}
	private _minimumWidth: number = 0;
	get minimumWidth(): number {
		return this._minimumWidth;
	}
	set minimumWidth(value: number) {
		this._minimumWidth = value;
		this.markDirty("MinimumWidth");
	}
}


