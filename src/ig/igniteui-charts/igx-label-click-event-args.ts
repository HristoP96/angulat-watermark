import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { LabelClickEventArgs as LabelClickEventArgs_internal } from "./LabelClickEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Contains PieChart label click event data.
*/
export class IgxLabelClickEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : LabelClickEventArgs_internal {
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
	 * Gets the slice data context.
	*/
	get item() : any {
		return this.i.item as any;
	}
	/**
	 * Gets and sets whether or not the owning pie chart should fire its SliceClick event
	*/
	get allowSliceClick() : boolean {
		return (this.i.allowSliceClick as boolean);
	}
	set allowSliceClick(v: boolean) {
		this.i.allowSliceClick = ensureBool(v);
	}
}
