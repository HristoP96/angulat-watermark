import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAssigningCategoryStyleEventArgsBase } from "./igx-assigning-category-style-event-args-base";
import { AssigningCategoryMarkerStyleEventArgs as AssigningCategoryMarkerStyleEventArgs_internal } from "./AssigningCategoryMarkerStyleEventArgs";

/**
 * Represents event arguments class for the AssigningCategoryStyleEvent
* 
* The `assigningCategoryMarkerStyle` event fired to allow you to override the style of markers for the items in a category or financial series.
*/
export class IgxAssigningCategoryMarkerStyleEventArgs extends IgxAssigningCategoryStyleEventArgsBase
{

protected createImplementation() : AssigningCategoryMarkerStyleEventArgs_internal
{
	return new AssigningCategoryMarkerStyleEventArgs_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AssigningCategoryMarkerStyleEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
