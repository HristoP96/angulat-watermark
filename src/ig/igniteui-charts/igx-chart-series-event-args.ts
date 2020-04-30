import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { ChartSeriesEventArgs as ChartSeriesEventArgs_internal } from "./ChartSeriesEventArgs";

/**
 * Represents event arguments for chart's SeriesAdded and SeriesRemoved events
*/
export class IgxChartSeriesEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ChartSeriesEventArgs_internal {
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
	 * Gets the series.
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
}
