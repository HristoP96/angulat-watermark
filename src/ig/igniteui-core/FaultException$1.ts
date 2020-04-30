/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FaultException } from "./FaultException";
import { FaultReason } from "./FaultReason";
import { FaultCode } from "./FaultCode";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class FaultException$1<TDetail> extends FaultException {
	static $t: Type = markType(FaultException$1, 'FaultException$1', (<any>FaultException).$type);
	protected $tDetail: Type = null;
	constructor($tDetail: Type, detail: TDetail, reason: FaultReason, code: FaultCode, action: string) {
		super(reason, code, action);
		this.$tDetail = $tDetail;
		this.$type = this.$type.specialize(this.$tDetail);
		this.detail = detail;
	}
	private _detail: TDetail = null;
	get detail(): TDetail {
		return this._detail;
	}
	set detail(value: TDetail) {
		this._detail = value;
	}
}


