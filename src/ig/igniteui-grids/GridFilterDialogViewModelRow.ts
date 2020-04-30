/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Type, markType } from "igniteui-core/type";
import { ColumnComparisonConditionOperatorType } from "./ColumnComparisonConditionOperatorType";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelRow extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(GridFilterDialogViewModelRow, 'GridFilterDialogViewModelRow', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _operatorTypes: ColumnComparisonConditionOperatorType[] = null;
	get operatorTypes(): ColumnComparisonConditionOperatorType[] {
		return this._operatorTypes;
	}
	set operatorTypes(value: ColumnComparisonConditionOperatorType[]) {
		let oldValue = this._operatorTypes;
		this._operatorTypes = value;
		if (oldValue != this._operatorTypes) {
			this.onPropertyChanged("OperatorTypes");
		}
	}
	private onPropertyChanged(propertyName: string): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private _operators: string[] = null;
	get operators(): string[] {
		return this._operators;
	}
	set operators(value: string[]) {
		let oldValue = this._operators;
		this._operators = value;
		if (oldValue != this._operators) {
			this.onPropertyChanged("Operators");
		}
	}
	private _currentOperator: string = null;
	get currentOperator(): string {
		return this._currentOperator;
	}
	set currentOperator(value: string) {
		let oldValue = this._currentOperator;
		this._currentOperator = value;
		if (oldValue != this._currentOperator) {
			this.onPropertyChanged("CurrentOperator");
		}
	}
	private _operandNumber: number[] = null;
	get operandNumber(): number[] {
		return this._operandNumber;
	}
	set operandNumber(value: number[]) {
		let oldValue = this._operandNumber;
		this._operandNumber = value;
		if (oldValue != this._operandNumber) {
			this.onPropertyChanged("OperandNumber");
		}
	}
	private _operand1: any = null;
	get operand1(): any {
		return this._operand1;
	}
	set operand1(value: any) {
		let oldValue = this._operand1;
		this._operand1 = value;
		if (oldValue != this._operand1) {
			this.onPropertyChanged("Operand1");
		}
	}
	private _operand2: any = null;
	get operand2(): any {
		return this._operand2;
	}
	set operand2(value: any) {
		let oldValue = this._operand2;
		this._operand2 = value;
		if (oldValue != this._operand2) {
			this.onPropertyChanged("Operand2");
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}


