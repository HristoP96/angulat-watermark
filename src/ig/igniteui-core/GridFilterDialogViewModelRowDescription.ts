/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelRowDescription extends Description {
	static $t: Type = markType(GridFilterDialogViewModelRowDescription, 'GridFilterDialogViewModelRowDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridFilterDialogViewModelRow";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _operators: string[] = null;
	get operators(): string[] {
		return this._operators;
	}
	set operators(value: string[]) {
		this._operators = value;
		this.markDirty("Operators");
	}
	private _currentOperator: string = null;
	get currentOperator(): string {
		return this._currentOperator;
	}
	set currentOperator(value: string) {
		this._currentOperator = value;
		this.markDirty("CurrentOperator");
	}
	private _operandNumber: number[] = null;
	get operandNumber(): number[] {
		return this._operandNumber;
	}
	set operandNumber(value: number[]) {
		this._operandNumber = value;
		this.markDirty("OperandNumber");
	}
	private _operand1Ref: string = null;
	get operand1Ref(): string {
		return this._operand1Ref;
	}
	set operand1Ref(value: string) {
		this._operand1Ref = value;
		this.markDirty("Operand1Ref");
	}
	private _operand2Ref: string = null;
	get operand2Ref(): string {
		return this._operand2Ref;
	}
	set operand2Ref(value: string) {
		this._operand2Ref = value;
		this.markDirty("Operand2Ref");
	}
}


