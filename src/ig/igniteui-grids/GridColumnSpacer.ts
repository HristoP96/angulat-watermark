/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class GridColumnSpacer extends Base {
	static $t: Type = markType(GridColumnSpacer, 'GridColumnSpacer');
	constructor() {
		super();
		this._uniqueId = GridColumnSpacer._currentId;
		GridColumnSpacer._currentId++;
	}
	private static _currentId: number = 0;
	private _actualWidth: number = 0;
	get actualWidth(): number {
		return this._actualWidth;
	}
	set actualWidth(value: number) {
		this._actualWidth = value;
	}
	private _startWidth: number = 0;
	get startWidth(): number {
		return this._startWidth;
	}
	set startWidth(value: number) {
		this._startWidth = value;
	}
	private _uniqueId: number = 0;
	get uniqueId(): number {
		return this._uniqueId;
	}
	private _isStar: boolean = false;
	get isStar(): boolean {
		return this._isStar;
	}
	set isStar(value: boolean) {
		this._isStar = value;
	}
	private _owningColumnId: number = 0;
	get owningColumnId(): number {
		return this._owningColumnId;
	}
	set owningColumnId(value: number) {
		this._owningColumnId = value;
	}
	private _isShrinking: boolean = false;
	get isShrinking(): boolean {
		return this._isShrinking;
	}
	set isShrinking(value: boolean) {
		this._isShrinking = value;
	}
	private _isRight: boolean = false;
	get isRight(): boolean {
		return this._isRight;
	}
	set isRight(value: boolean) {
		this._isRight = value;
	}
}


