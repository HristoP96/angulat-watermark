import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { SummaryRow } from "./SummaryRow";
import { brushToString, stringToBrush } from "igniteui-core/componentUtil";

export const IgxSummaryRowComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSummaryRowComponent)}];
export abstract class IgxSummaryRowComponent extends IgxDefinitionBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : SummaryRow {
		return this._implementation;
	}
	constructor() {
		super();
	}
	get selectedBackground() : string {
		return brushToString(this.i.selectedBackground);
	}
	@Input()
	set selectedBackground(v: string) {
		this.i.selectedBackground = stringToBrush(v);
	}
	get actualSelectedBackground() : string {
		return brushToString(this.i.actualSelectedBackground);
	}
	@Input()
	set actualSelectedBackground(v: string) {
		this.i.actualSelectedBackground = stringToBrush(v);
	}
	get summaryNameTextColor() : string {
		return brushToString(this.i.summaryNameTextColor);
	}
	@Input()
	set summaryNameTextColor(v: string) {
		this.i.summaryNameTextColor = stringToBrush(v);
	}
	get actualSummaryNameTextColor() : string {
		return brushToString(this.i.actualSummaryNameTextColor);
	}
	@Input()
	set actualSummaryNameTextColor(v: string) {
		this.i.actualSummaryNameTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the amount of left padding to use for the cell content for this column.
	*/
	get paddingLeft() : number {
		return (this.i.paddingLeft as number);
	}
	@Input()
	set paddingLeft(v: number) {
		this.i.paddingLeft = +v;
	}
	/**
	 * Gets or sets the amount of top padding to use for the cell content for this column.
	*/
	get paddingTop() : number {
		return (this.i.paddingTop as number);
	}
	@Input()
	set paddingTop(v: number) {
		this.i.paddingTop = +v;
	}
	/**
	 * Gets or sets the amount of right padding to use for the cell content of this column.
	*/
	get paddingRight() : number {
		return (this.i.paddingRight as number);
	}
	@Input()
	set paddingRight(v: number) {
		this.i.paddingRight = +v;
	}
	/**
	 * Gets or sets the amount of bottom padding to use for the cell content of this column.
	*/
	get paddingBottom() : number {
		return (this.i.paddingBottom as number);
	}
	@Input()
	set paddingBottom(v: number) {
		this.i.paddingBottom = +v;
	}
}
