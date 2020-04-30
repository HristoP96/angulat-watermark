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
export class ErrorMessageDisplayingEventArgs extends EventArgs {
	static $t: Type = markType(ErrorMessageDisplayingEventArgs, 'ErrorMessageDisplayingEventArgs', (<any>EventArgs).$type);
	constructor(errorMessage: string) {
		super();
		this.errorMessage = errorMessage;
	}
	private _errorMessage: string = null;
	get errorMessage(): string {
		return this._errorMessage;
	}
	set errorMessage(value: string) {
		this._errorMessage = value;
	}
}


