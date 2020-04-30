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
export class CancelEventArgs extends EventArgs {
	static $t: Type = markType(CancelEventArgs, 'CancelEventArgs', (<any>EventArgs).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, cancel: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super();
				this._cancel = false;
			}
			break;

			case 1:
			{
				let cancel: boolean = <boolean>_rest[0];
				super();
				this._cancel = false;
			}
			break;

		}

	}
	private _cancel: boolean;
	get cancel(): boolean {
		return this._cancel;
	}
	set cancel(value: boolean) {
		this._cancel = value;
	}
}


