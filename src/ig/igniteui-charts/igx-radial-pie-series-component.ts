import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAnchoredRadialSeriesComponent } from "./igx-anchored-radial-series-component";
import { IgxRadialBaseComponent } from "./igx-radial-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RadialPieSeries } from "./RadialPieSeries";

/**
 * Represents a IgxDataChartComponent radial pie series.
 * Compare values across categories by using radial pie slices.
*/
export const IgxRadialPieSeriesComponent_PROVIDERS = [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}];
@Component({
  selector: 'igx-radial-pie-series',
  template: ``,
  providers: [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialPieSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRadialPieSeriesComponent extends IgxAnchoredRadialSeriesComponent
{

protected createImplementation() : RadialPieSeries
{
	return new RadialPieSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RadialPieSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the column.
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
