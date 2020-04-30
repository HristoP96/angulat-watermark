/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class DragSelectEventArgs extends EventArgs {
	static $t: Type = markType(DragSelectEventArgs, 'DragSelectEventArgs', (<any>EventArgs).$type);
	private _startX: number = 0;
	get startX(): number {
		return this._startX;
	}
	set startX(value: number) {
		this._startX = value;
	}
	private _startY: number = 0;
	get startY(): number {
		return this._startY;
	}
	set startY(value: number) {
		this._startY = value;
	}
	private _currentX: number = 0;
	get currentX(): number {
		return this._currentX;
	}
	set currentX(value: number) {
		this._currentX = value;
	}
	private _currentY: number = 0;
	get currentY(): number {
		return this._currentY;
	}
	set currentY(value: number) {
		this._currentY = value;
	}
	private _controlPressed: boolean = false;
	get controlPressed(): boolean {
		return this._controlPressed;
	}
	set controlPressed(value: boolean) {
		this._controlPressed = value;
	}
}


