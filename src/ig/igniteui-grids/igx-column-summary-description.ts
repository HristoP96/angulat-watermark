import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxFormatSummaryTextEventArgs } from "./igx-format-summary-text-event-args";
import { IgxProvideCalculatorEventArgs } from "igniteui-core/igx-provide-calculator-event-args";
import { ColumnSummaryDescription as ColumnSummaryDescription_internal } from "./ColumnSummaryDescription";
import { SummaryOperand } from "igniteui-core/SummaryOperand";

/**
 * Represents a summary that is applied to a datasource. Changes to this object are not observed or expected after it is initially assigned to a collection.
*/
export class IgxColumnSummaryDescription
{

protected createImplementation() : ColumnSummaryDescription_internal
{
	return new ColumnSummaryDescription_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnSummaryDescription_internal {
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
	get propertyPath() : string {
		return (this.i.propertyPath as string);
	}
	set propertyPath(v: string) {
		this.i.propertyPath = v;
	}
	get operand() : SummaryOperand {
		return this.i.operand as SummaryOperand;
	}
	set operand(v: SummaryOperand) {
		this.i.operand = v;
	}
	/**
	 * Gets or sets the name to use when displaying the calculator name.
	*/
	get calculatorDisplayName() : string {
		return (this.i.calculatorDisplayName as string);
	}
	set calculatorDisplayName(v: string) {
		this.i.calculatorDisplayName = v;
	}
	/**
	 * Gets or sets the display name for the summary.
	*/
	get displayName() : string {
		return (this.i.displayName as string);
	}
	set displayName(v: string) {
		this.i.displayName = v;
	}
	/**
	 * Gets or sets an INTL.DateTimeFormat or INTL.NumericFormat to use to format the value.
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
	/**
	 * Gets or sets the minimum fraction digits. If FormatOverride is specificied this value is ignored.
	*/
	get maxFractionDigits() : number {
		return (this.i.maxFractionDigits as number);
	}
	set maxFractionDigits(v: number) {
		this.i.maxFractionDigits = +v;
	}
	public equals(other: any) : boolean {
		let iv = this.i.equals(other);
		return (iv);
	}
	public getHashCode() : number {
		let iv = this.i.getHashCode();
		return (iv);
	}
	private _formatText: EventEmitter<{ sender: any, args: IgxFormatSummaryTextEventArgs}> = null;
	/**
	 * Called when the value is being formatted.
	*/
	@Output()
	get formatText(): EventEmitter<{ sender: any, args: IgxFormatSummaryTextEventArgs}> {
		if (this._formatText == null) {
			this._formatText = new EventEmitter<{sender: any, args: IgxFormatSummaryTextEventArgs}>();
			this.i.formatText = delegateCombine(this.i.formatText, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFormatSummaryTextEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeFormatText) {
	                        (this as any).beforeFormatText(this, outerArgs);
	                    }
					this._formatText.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._formatText;
	}
	private _provideCalculator: EventEmitter<{ sender: any, args: IgxProvideCalculatorEventArgs}> = null;
	/**
	 * Called when the summary calculator is required.
	*/
	@Output()
	get provideCalculator(): EventEmitter<{ sender: any, args: IgxProvideCalculatorEventArgs}> {
		if (this._provideCalculator == null) {
			this._provideCalculator = new EventEmitter<{sender: any, args: IgxProvideCalculatorEventArgs}>();
			this.i.provideCalculator = delegateCombine(this.i.provideCalculator, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxProvideCalculatorEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeProvideCalculator) {
	                        (this as any).beforeProvideCalculator(this, outerArgs);
	                    }
					this._provideCalculator.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._provideCalculator;
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
