import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnComponent } from "./igx-column-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { NumericColumn } from "./NumericColumn";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a Numeric grid column, used to allow the developer to display a formatted number in a cell.
*/
export const IgxNumericColumnComponent_PROVIDERS = [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxNumericColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxNumericColumnComponent)}];
@Component({
  selector: 'igx-numeric-column',
  template: ``,
  providers: [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxNumericColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxNumericColumnComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNumericColumnComponent extends IgxColumnComponent
{

protected createImplementation() : NumericColumn
{
	return new NumericColumn();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericColumn {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the string to prefix a negative value. If FormatString is specificied this value is ignored.
	*/
	get negativePrefix() : string {
		return (this.i.negativePrefix as string);
	}
	@Input()
	set negativePrefix(v: string) {
		this.i.negativePrefix = v;
	}
	/**
	 * Gets or sets the string to prefix a positive value. If FormatString is specificied this value is ignored.
	*/
	get positivePrefix() : string {
		return (this.i.positivePrefix as string);
	}
	@Input()
	set positivePrefix(v: string) {
		this.i.positivePrefix = v;
	}
	/**
	 * Gets or sets the string to suffix a negative value. If FormatString is specificied this value is ignored.
	*/
	get negativeSuffix() : string {
		return (this.i.negativeSuffix as string);
	}
	@Input()
	set negativeSuffix(v: string) {
		this.i.negativeSuffix = v;
	}
	/**
	 * Gets or sets the string to suffix a positive value. If FormatString is specificied this value is ignored.
	*/
	get positiveSuffix() : string {
		return (this.i.positiveSuffix as string);
	}
	@Input()
	set positiveSuffix(v: string) {
		this.i.positiveSuffix = v;
	}
	/**
	 * Gets or sets the maximum fraction digits. If FormatString is specificied this value is ignored.
	*/
	get maxFractionDigits() : number {
		return (this.i.maxFractionDigits as number);
	}
	@Input()
	set maxFractionDigits(v: number) {
		this.i.maxFractionDigits = +v;
	}
	/**
	 * Gets or sets the minimum fraction digits. If FormatString is specificied this value is ignored.
	*/
	get minFractionDigits() : number {
		return (this.i.minFractionDigits as number);
	}
	@Input()
	set minFractionDigits(v: number) {
		this.i.minFractionDigits = +v;
	}
	/**
	 * Gets or sets the minimum integer digits. If FormatString is specificied this value is ignored.
	*/
	get minIntegerDigits() : number {
		return (this.i.minIntegerDigits as number);
	}
	@Input()
	set minIntegerDigits(v: number) {
		this.i.minIntegerDigits = +v;
	}
	/**
	 * Gets or sets whether to show a grouping separator. If FormatString is specificied this value is ignored.
	*/
	get showGroupingSeparator() : boolean {
		return (this.i.showGroupingSeparator as boolean);
	}
	@Input()
	set showGroupingSeparator(v: boolean) {
		this.i.showGroupingSeparator = ensureBool(v);
	}
	/**
	 * Gets or sets the INTL NumericFormat object to use for formatting the date values.
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	@Input()
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
}
