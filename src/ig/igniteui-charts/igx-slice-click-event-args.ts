import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SliceClickEventArgs as SliceClickEventArgs_internal } from "./SliceClickEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Contains PieChart click event data.
*/
export class IgxSliceClickEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : SliceClickEventArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * Gets or sets whether the slice is selected.
	*/
	get isSelected() : boolean {
		return (this.i.isSelected as boolean);
	}
	set isSelected(v: boolean) {
		this.i.isSelected = ensureBool(v);
	}
	/**
	 * Gets or sets whether the slice is exploded.
	*/
	get isExploded() : boolean {
		return (this.i.isExploded as boolean);
	}
	set isExploded(v: boolean) {
		this.i.isExploded = ensureBool(v);
	}
	/**
	 * Gets whether the current slice is part of the others slice.
	*/
	get isOthersSlice() : boolean {
		return (this.i.isOthersSlice as boolean);
	}
	/**
	 * Gets the slice data context.
	*/
	get dataContext() : any {
		return this.i.dataContext as any;
	}
	/**
	 * Holds a reference to the original event that triggered slice click.
	*/
	get originalEvent() : any {
		return this.i.originalEvent as any;
	}
	set originalEvent(v: any) {
		this.i.originalEvent = v;
	}
}
