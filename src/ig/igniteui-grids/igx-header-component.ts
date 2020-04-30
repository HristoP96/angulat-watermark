import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SortIndicatorStyle, SortIndicatorStyle_$type } from "./SortIndicatorStyle";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { Header } from "./Header";
import { brushToString, stringToBrush, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a base class used to configure the appearance of the column header cells.
*/
export const IgxHeaderComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxHeaderComponent)}];
export abstract class IgxHeaderComponent extends IgxDefinitionBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : Header {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the color to use for the sort indicator icon
	*/
	get sortIndicatorColor() : string {
		return brushToString(this.i.sortIndicatorColor);
	}
	@Input()
	set sortIndicatorColor(v: string) {
		this.i.sortIndicatorColor = stringToBrush(v);
	}
	/**
	 * Gets the actual background color that is used for the cells when they are selected
	*/
	get actualSortIndicatorColor() : string {
		return brushToString(this.i.actualSortIndicatorColor);
	}
	@Input()
	set actualSortIndicatorColor(v: string) {
		this.i.actualSortIndicatorColor = stringToBrush(v);
	}
	get sortIndicatorStyle() : SortIndicatorStyle {
		return this.i.sortIndicatorStyle;
	}
	@Input()
	set sortIndicatorStyle(v: SortIndicatorStyle) {
		this.i.sortIndicatorStyle = ensureEnum<SortIndicatorStyle>(SortIndicatorStyle_$type, v);
	}
	get actualSortIndicatorStyle() : SortIndicatorStyle {
		return this.i.actualSortIndicatorStyle;
	}
	@Input()
	set actualSortIndicatorStyle(v: SortIndicatorStyle) {
		this.i.actualSortIndicatorStyle = ensureEnum<SortIndicatorStyle>(SortIndicatorStyle_$type, v);
	}
	/**
	 * Gets or sets the amount of left padding to use for the cell content.
	*/
	get paddingLeft() : number {
		return (this.i.paddingLeft as number);
	}
	@Input()
	set paddingLeft(v: number) {
		this.i.paddingLeft = +v;
	}
	/**
	 * Gets or sets the amount of top padding to use for the cell content.
	*/
	get paddingTop() : number {
		return (this.i.paddingTop as number);
	}
	@Input()
	set paddingTop(v: number) {
		this.i.paddingTop = +v;
	}
	/**
	 * Gets or sets the amount of right padding to use for the cell content.
	*/
	get paddingRight() : number {
		return (this.i.paddingRight as number);
	}
	@Input()
	set paddingRight(v: number) {
		this.i.paddingRight = +v;
	}
	/**
	 * Gets or sets the amount of bottom padding to use for the cell content.
	*/
	get paddingBottom() : number {
		return (this.i.paddingBottom as number);
	}
	@Input()
	set paddingBottom(v: number) {
		this.i.paddingBottom = +v;
	}
}
