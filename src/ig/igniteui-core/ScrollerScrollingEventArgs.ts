/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ScrollerScrollingEventArgs extends EventArgs {
	static $t: Type = markType(ScrollerScrollingEventArgs, 'ScrollerScrollingEventArgs', (<any>EventArgs).$type);
	private _deltaX: number = 0;
	get deltaX(): number {
		return this._deltaX;
	}
	set deltaX(value: number) {
		this._deltaX = value;
	}
	private _deltaY: number = 0;
	get deltaY(): number {
		return this._deltaY;
	}
	set deltaY(value: number) {
		this._deltaY = value;
	}
}


