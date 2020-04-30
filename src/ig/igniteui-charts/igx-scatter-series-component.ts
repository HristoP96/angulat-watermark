import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxScatterBaseComponent } from "./igx-scatter-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterSeries } from "./ScatterSeries";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent scatter series
*/
export const IgxScatterSeriesComponent_PROVIDERS = [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}];
@Component({
  selector: 'igx-scatter-series',
  template: ``,
  providers: [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterSeriesComponent extends IgxScatterBaseComponent
{

protected createImplementation() : ScatterSeries
{
	return new ScatterSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Overridden by derived series classes to indicate when markerless display is preferred or not.
	*/
	get isMarkerlessDisplayPreferred() : boolean {
		return (this.i.isMarkerlessDisplayPreferred as boolean);
	}
}
