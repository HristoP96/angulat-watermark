/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { ISummaryResult, ISummaryResult_$type } from "./ISummaryResult";
import { SummaryOperand } from "./SummaryOperand";

/**
 * @hidden 
 */
export class DefaultSummaryResult extends Base implements ISummaryResult {
	static $t: Type = markType(DefaultSummaryResult, 'DefaultSummaryResult', (<any>Base).$type, [ISummaryResult_$type]);
	constructor(propertyName: string, operand: SummaryOperand, value: any) {
		super();
		this._propertyName = propertyName;
		this._operand = operand;
		this._value = value;
	}
	private _propertyName: string = null;
	private _value: any = null;
	private _operand: SummaryOperand = <SummaryOperand>0;
	private _summaryIndex: number = 0;
	get propertyName(): string {
		return this._propertyName;
	}
	get operand(): SummaryOperand {
		return this._operand;
	}
	get value(): any {
		return this._value;
	}
	get summaryIndex(): number {
		return this._summaryIndex;
	}
	set summaryIndex(value: number) {
		this._summaryIndex = value;
	}
}


