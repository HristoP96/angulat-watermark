import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxPolarBaseComponent } from "./igx-polar-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarScatterSeries } from "./PolarScatterSeries";

/**
 * Represents a IgxDataChartComponent polar scatter series.
*/
export const IgxPolarScatterSeriesComponent_PROVIDERS = [{provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}];
@Component({
  selector: 'igx-polar-scatter-series',
  template: ``,
  providers: [{provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarScatterSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPolarScatterSeriesComponent extends IgxPolarBaseComponent
{

protected createImplementation() : PolarScatterSeries
{
	return new PolarScatterSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PolarScatterSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
