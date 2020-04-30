import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SelectedItemChangedEventArgs as SelectedItemChangedEventArgs_internal } from "./SelectedItemChangedEventArgs";

/**
 * Provides data for the SelectedItemChanged event.
*/
export class IgxSelectedItemChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : SelectedItemChangedEventArgs_internal {
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
	 * The previously selected item.
	*/
	get oldItem() : any {
		return this.i.oldItem as any;
	}
	set oldItem(v: any) {
		this.i.oldItem = v;
	}
	/**
	 * The newly selected item.
	*/
	get newItem() : any {
		return this.i.newItem as any;
	}
	set newItem(v: any) {
		this.i.newItem = v;
	}
}
