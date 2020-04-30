/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, BaseError, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AsyncCompletedEventArgs extends EventArgs {
	static $t: Type = markType(AsyncCompletedEventArgs, 'AsyncCompletedEventArgs', (<any>EventArgs).$type);
	private _error: BaseError = null;
	private _cancelled: boolean = false;
	private _userState: any = null;
	constructor(error: BaseError, cancelled: boolean, userState: any) {
		super();
		this._cancelled = cancelled;
		this._error = error;
		this._userState = userState;
	}
	get error(): BaseError {
		return this._error;
	}
	get cancelled(): boolean {
		return this._cancelled;
	}
	get userState(): any {
		return this._userState;
	}
	protected raiseExceptionIfNecessary(): void {
		if (this.error != null) {
			throw this.error;
		}
	}
}


