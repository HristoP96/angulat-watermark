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
export class SliceClickEventArgsDescription extends Description {
	static $t: Type = markType(SliceClickEventArgsDescription, 'SliceClickEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "SliceClickEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _isSelected: boolean = false;
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		this._isSelected = value;
		this.markDirty("IsSelected");
	}
	private _isExploded: boolean = false;
	get isExploded(): boolean {
		return this._isExploded;
	}
	set isExploded(value: boolean) {
		this._isExploded = value;
		this.markDirty("IsExploded");
	}
	private _originalEventRef: string = null;
	get originalEventRef(): string {
		return this._originalEventRef;
	}
	set originalEventRef(value: string) {
		this._originalEventRef = value;
		this.markDirty("OriginalEventRef");
	}
}


