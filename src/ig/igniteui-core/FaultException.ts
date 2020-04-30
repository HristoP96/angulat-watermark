/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BaseError, Base, Type, markType } from "./type";
import { FaultCode } from "./FaultCode";
import { FaultReason } from "./FaultReason";

/**
 * @hidden 
 */
export class FaultException extends BaseError {
	static $t: Type = markType(FaultException, 'FaultException', (<any>BaseError).$type);
	constructor(reason: FaultReason, code: FaultCode, action: string) {
		super(0);
		this.reason = reason;
		this.code = code;
		this.action = action;
	}
	private _action: string = null;
	get action(): string {
		return this._action;
	}
	set action(value: string) {
		this._action = value;
	}
	private _code: FaultCode = null;
	get code(): FaultCode {
		return this._code;
	}
	set code(value: FaultCode) {
		this._code = value;
	}
	private _reason: FaultReason = null;
	get reason(): FaultReason {
		return this._reason;
	}
	set reason(value: FaultReason) {
		this._reason = value;
	}
}


