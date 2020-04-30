import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnSortDescriptionCollection } from "./igx-column-sort-description-collection";
import { GridSortDescriptionsChangedEventArgs as GridSortDescriptionsChangedEventArgs_internal } from "./GridSortDescriptionsChangedEventArgs";

/**
 * Information about the current sorting applied to the grid.
*/
export class IgxGridSortDescriptionsChangedEventArgs
{

protected createImplementation() : GridSortDescriptionsChangedEventArgs_internal
{
	return new GridSortDescriptionsChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridSortDescriptionsChangedEventArgs_internal {
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
	get sortDescriptions() : IgxColumnSortDescriptionCollection {
	                                        if (this.i.sortDescriptions == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.sortDescriptions as any).externalObject) {
	                                            let e = new IgxColumnSortDescriptionCollection();
	                                            (e as any)._implementation = this.i.sortDescriptions;
	                                            (this.i.sortDescriptions as any).externalObject = e;
	                                        }
		return (this.i.sortDescriptions as any).externalObject;
	}
	set sortDescriptions(v: IgxColumnSortDescriptionCollection) {
		v == null ? this.i.sortDescriptions = null : this.i.sortDescriptions = v.i;
	}
}
