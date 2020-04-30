/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { BaseError, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class UploadStringCompletedEventArgs extends AsyncCompletedEventArgs {
	static $t: Type = markType(UploadStringCompletedEventArgs, 'UploadStringCompletedEventArgs', (<any>AsyncCompletedEventArgs).$type);
	private _result: string = null;
	constructor(result: string, exception: BaseError, cancelled: boolean, userToken: any) {
		super(exception, cancelled, userToken);
		this._result = result;
	}
	get result(): string {
		this.raiseExceptionIfNecessary();
		return this._result;
	}
}


