import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { GridFilterDialogViewModelRow as GridFilterDialogViewModelRow_internal } from "./GridFilterDialogViewModelRow";
import { ColumnComparisonConditionOperatorType } from "./ColumnComparisonConditionOperatorType";

export class IgxGridFilterDialogViewModelRow
{

protected createImplementation() : GridFilterDialogViewModelRow_internal
{
	return new GridFilterDialogViewModelRow_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterDialogViewModelRow_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	get operatorTypes() : ColumnComparisonConditionOperatorType[] {
		return this.i.operatorTypes as ColumnComparisonConditionOperatorType[];
	}
	set operatorTypes(v: ColumnComparisonConditionOperatorType[]) {
		this.i.operatorTypes = v;
	}
	get operators() : string[] {
		return this.i.operators as string[];
	}
	set operators(v: string[]) {
		this.i.operators = v;
	}
	get currentOperator() : string {
		return (this.i.currentOperator as string);
	}
	set currentOperator(v: string) {
		this.i.currentOperator = v;
	}
	get operandNumber() : number[] {
		return this.i.operandNumber as number[];
	}
	set operandNumber(v: number[]) {
		this.i.operandNumber = v;
	}
	get operand1() : any {
		return this.i.operand1 as any;
	}
	set operand1(v: any) {
		this.i.operand1 = v;
	}
	get operand2() : any {
		return this.i.operand2 as any;
	}
	set operand2(v: any) {
		this.i.operand2 = v;
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
