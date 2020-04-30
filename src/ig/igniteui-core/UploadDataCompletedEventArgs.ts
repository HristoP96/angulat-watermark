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
export class UploadDataCompletedEventArgs extends AsyncCompletedEventArgs {
	static $t: Type = markType(UploadDataCompletedEventArgs, 'UploadDataCompletedEventArgs', (<any>AsyncCompletedEventArgs).$type);
	private m_Result: number[] = null;
	constructor(result: number[], exception: BaseError, cancelled: boolean, userToken: any) {
		super(exception, cancelled, userToken);
		this.m_Result = result;
	}
	get result(): number[] {
		this.raiseExceptionIfNecessary();
		return this.m_Result;
	}
}


