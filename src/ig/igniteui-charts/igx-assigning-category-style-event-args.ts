import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAssigningCategoryStyleEventArgsBase } from "./igx-assigning-category-style-event-args-base";
import { AssigningCategoryStyleEventArgs as AssigningCategoryStyleEventArgs_internal } from "./AssigningCategoryStyleEventArgs";

/**
 * Represents event arguments class for the AssigningCategoryStyleEvent
* 
* The `AssigningCategoryStyle` event fired to allow you to override the style of items in a category or financial series
*/
export class IgxAssigningCategoryStyleEventArgs extends IgxAssigningCategoryStyleEventArgsBase
{

protected createImplementation() : AssigningCategoryStyleEventArgs_internal
{
	return new AssigningCategoryStyleEventArgs_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AssigningCategoryStyleEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets stroke thickness to use for the current item.
	* 
	* Used the `strokeThickness` proprty  for the current item thickness.
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
	/**
	 * Gets or sets corner radius X to use for the current item, if applicable.
	* 
	* Use the `radiusX` property to round the corners of the column.
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets corner radius Y to use for the current item, if applicable.
	* 
	* Use the `radiusY` property for the y-radius of the ellipse that is used to round the corners of the column.
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
}
