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
export class ProgressiveLoadStatusEventArgs extends EventArgs {
	static $t: Type = markType(ProgressiveLoadStatusEventArgs, 'ProgressiveLoadStatusEventArgs', (<any>EventArgs).$type);
	private _currentStatus: number = 0;
	get currentStatus(): number {
		return this._currentStatus;
	}
	set currentStatus(value: number) {
		this._currentStatus = value;
	}
	constructor(currentStatus: number) {
		super();
		this.currentStatus = currentStatus;
	}
}


