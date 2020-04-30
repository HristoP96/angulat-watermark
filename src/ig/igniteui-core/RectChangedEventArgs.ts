/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";
import { Rect } from "./Rect";

/**
 * @hidden 
 */
export class RectChangedEventArgs extends EventArgs {
	static $t: Type = markType(RectChangedEventArgs, 'RectChangedEventArgs', (<any>EventArgs).$type);
	constructor(oldRect: Rect, newRect: Rect) {
		super();
		this.oldRect = oldRect;
		this.newRect = newRect;
	}
	private _oldRect: Rect = null;
	get oldRect(): Rect {
		return this._oldRect;
	}
	set oldRect(value: Rect) {
		this._oldRect = value;
	}
	private _newRect: Rect = null;
	get newRect(): Rect {
		return this._newRect;
	}
	set newRect(value: Rect) {
		this._newRect = value;
	}
}


