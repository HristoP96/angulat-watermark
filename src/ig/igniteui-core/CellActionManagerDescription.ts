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
export abstract class CellActionManagerDescription extends Description {
	static $t: Type = markType(CellActionManagerDescription, 'CellActionManagerDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CellActionManager";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _isLeaveActionDesired: boolean = false;
	get isLeaveActionDesired(): boolean {
		return this._isLeaveActionDesired;
	}
	set isLeaveActionDesired(value: boolean) {
		this._isLeaveActionDesired = value;
		this.markDirty("IsLeaveActionDesired");
	}
	private _isControlPressed: boolean = false;
	get isControlPressed(): boolean {
		return this._isControlPressed;
	}
	set isControlPressed(value: boolean) {
		this._isControlPressed = value;
		this.markDirty("IsControlPressed");
	}
	private _isShiftPressed: boolean = false;
	get isShiftPressed(): boolean {
		return this._isShiftPressed;
	}
	set isShiftPressed(value: boolean) {
		this._isShiftPressed = value;
		this.markDirty("IsShiftPressed");
	}
}


