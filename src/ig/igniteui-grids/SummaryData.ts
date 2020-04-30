/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { SummaryOperand } from "igniteui-core/SummaryOperand";

/**
 * @hidden 
 */
export class SummaryData extends Base {
	static $t: Type = markType(SummaryData, 'SummaryData');
	private _summaryName: string = null;
	get summaryName(): string {
		return this._summaryName;
	}
	set summaryName(value: string) {
		this._summaryName = value;
	}
	private _summaryValue: any = null;
	get summaryValue(): any {
		return this._summaryValue;
	}
	set summaryValue(value: any) {
		this._summaryValue = value;
	}
	private _summaryOperand: SummaryOperand = <SummaryOperand>0;
	get summaryOperand(): SummaryOperand {
		return this._summaryOperand;
	}
	set summaryOperand(value: SummaryOperand) {
		this._summaryOperand = value;
	}
	private _formattedText: string = null;
	get formattedText(): string {
		return this._formattedText;
	}
	set formattedText(value: string) {
		this._formattedText = value;
	}
	private _formattedValue: string = null;
	get formattedValue(): string {
		return this._formattedValue;
	}
	set formattedValue(value: string) {
		this._formattedValue = value;
	}
}


