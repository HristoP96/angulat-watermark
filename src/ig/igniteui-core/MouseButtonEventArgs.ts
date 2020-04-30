/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MouseEventArgs } from "./MouseEventArgs";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class MouseButtonEventArgs extends MouseEventArgs {
	static $t: Type = markType(MouseButtonEventArgs, 'MouseButtonEventArgs', (<any>MouseEventArgs).$type);
	private _handled: boolean = false;
	get handled(): boolean {
		return this._handled;
	}
	set handled(value: boolean) {
		this._handled = value;
	}
}


