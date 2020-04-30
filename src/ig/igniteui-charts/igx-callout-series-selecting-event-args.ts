import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { CalloutSeriesSelectingEventArgs as CalloutSeriesSelectingEventArgs_internal } from "./CalloutSeriesSelectingEventArgs";

/**
 * Represents event arguments for selecting callout layer
*/
export class IgxCalloutSeriesSelectingEventArgs
{

protected createImplementation() : CalloutSeriesSelectingEventArgs_internal
{
	return new CalloutSeriesSelectingEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CalloutSeriesSelectingEventArgs_internal {
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
	/**
	 * Gets data X-value assositated with callout layer
	*/
	get xValue() : any {
		return this.i.xValue as any;
	}
	set xValue(v: any) {
		this.i.xValue = v;
	}
	/**
	 * Gets data Y-value assositated with callout layer
	*/
	get yValue() : any {
		return this.i.yValue as any;
	}
	set yValue(v: any) {
		this.i.yValue = v;
	}
	/**
	 * Gets data item assositated with callout layer
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets or sets series object assositated with callout layer
	*/
	get series() : IgxSeriesComponent {
	                                        if (this.i.series == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.series as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.series);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.series;
	                                            }
	                                            (this.i.series as any).externalObject = e;
	                                        }
		return (this.i.series as any).externalObject;
	}
	set series(v: IgxSeriesComponent) {
		v == null ? this.i.series = null : this.i.series = v.i;
	}
	/**
	 * Gets or sets series name assositated with callout layer
	*/
	get seriesName() : string {
		return (this.i.seriesName as string);
	}
	set seriesName(v: string) {
		this.i.seriesName = v;
	}
}
