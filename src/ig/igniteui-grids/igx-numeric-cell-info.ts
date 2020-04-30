import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { NumericCellModel as NumericCellModel_internal } from "./NumericCellModel";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Backing information for a numeric cell in the grid.
*/
export class IgxNumericCellInfo extends IgxCellInfo
{

protected createImplementation() : NumericCellModel_internal
{
	return new NumericCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the numeric value to use for the cell.
	*/
	get numericValue() : number {
		return (this.i.numericValue as number);
	}
	set numericValue(v: number) {
		this.i.numericValue = +v;
	}
	/**
	 * Sets or gets whether there is a decimal numeric value to use for the cell.
	*/
	get hasDecimalValue() : boolean {
		return (this.i.hasDecimalValue as boolean);
	}
	set hasDecimalValue(v: boolean) {
		this.i.hasDecimalValue = ensureBool(v);
	}
	/**
	 * The format options to apply to the value
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
	/**
	 * Sets or gets the text prepended to a negative numeric value
	*/
	get negativePrefix() : string {
		return (this.i.negativePrefix as string);
	}
	set negativePrefix(v: string) {
		this.i.negativePrefix = v;
	}
	/**
	 * Sets or gets the text prepended to a positive numeric value
	*/
	get positivePrefix() : string {
		return (this.i.positivePrefix as string);
	}
	set positivePrefix(v: string) {
		this.i.positivePrefix = v;
	}
	/**
	 * Sets or gets the text appended to a negative numeric value
	*/
	get negativeSuffix() : string {
		return (this.i.negativeSuffix as string);
	}
	set negativeSuffix(v: string) {
		this.i.negativeSuffix = v;
	}
	/**
	 * Sets or gets the text appended to a positive numeric value
	*/
	get positiveSuffix() : string {
		return (this.i.positiveSuffix as string);
	}
	set positiveSuffix(v: string) {
		this.i.positiveSuffix = v;
	}
	/**
	 * The maximum number of decimal places to display when formatting
	*/
	get maxFractionDigits() : number {
		return (this.i.maxFractionDigits as number);
	}
	set maxFractionDigits(v: number) {
		this.i.maxFractionDigits = +v;
	}
	/**
	 * The minimum number of decimal places to display when formatting
	*/
	get minFractionDigits() : number {
		return (this.i.minFractionDigits as number);
	}
	set minFractionDigits(v: number) {
		this.i.minFractionDigits = +v;
	}
	/**
	 * The minimum number of integer digits to display when formatting
	*/
	get minIntegerDigits() : number {
		return (this.i.minIntegerDigits as number);
	}
	set minIntegerDigits(v: number) {
		this.i.minIntegerDigits = +v;
	}
	/**
	 * Sets or gets if the grouping separator is shown
	*/
	get showGroupingSeparator() : boolean {
		return (this.i.showGroupingSeparator as boolean);
	}
	set showGroupingSeparator(v: boolean) {
		this.i.showGroupingSeparator = ensureBool(v);
	}
}
