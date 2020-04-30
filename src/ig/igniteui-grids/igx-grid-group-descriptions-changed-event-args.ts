import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnGroupDescriptionCollection } from "./igx-column-group-description-collection";
import { GridGroupDescriptionsChangedEventArgs as GridGroupDescriptionsChangedEventArgs_internal } from "./GridGroupDescriptionsChangedEventArgs";

/**
 * Information about the current grouping applied to the grid.
*/
export class IgxGridGroupDescriptionsChangedEventArgs
{

protected createImplementation() : GridGroupDescriptionsChangedEventArgs_internal
{
	return new GridGroupDescriptionsChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridGroupDescriptionsChangedEventArgs_internal {
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
	get groupDescriptions() : IgxColumnGroupDescriptionCollection {
	                                        if (this.i.groupDescriptions == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.groupDescriptions as any).externalObject) {
	                                            let e = new IgxColumnGroupDescriptionCollection();
	                                            (e as any)._implementation = this.i.groupDescriptions;
	                                            (this.i.groupDescriptions as any).externalObject = e;
	                                        }
		return (this.i.groupDescriptions as any).externalObject;
	}
	set groupDescriptions(v: IgxColumnGroupDescriptionCollection) {
		v == null ? this.i.groupDescriptions = null : this.i.groupDescriptions = v.i;
	}
}
