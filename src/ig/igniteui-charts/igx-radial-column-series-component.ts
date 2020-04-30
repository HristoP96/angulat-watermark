import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAnchoredRadialSeriesComponent } from "./igx-anchored-radial-series-component";
import { IgxRadialBaseComponent } from "./igx-radial-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RadialColumnSeries } from "./RadialColumnSeries";

/**
 * Represents a IgxDataChartComponent radial column series.
 * Compare values across categories by using radial rectangles.
*/
export const IgxRadialColumnSeriesComponent_PROVIDERS = [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}];
@Component({
  selector: 'igx-radial-column-series',
  template: ``,
  providers: [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialColumnSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRadialColumnSeriesComponent extends IgxAnchoredRadialSeriesComponent
{

protected createImplementation() : RadialColumnSeries
{
	return new RadialColumnSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RadialColumnSeries {
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
	 * When overridden in a derived class, is invoked whenever application code or internal processes
	 * call ApplyTemplate.
	
	*/
	public onApplyTemplate() {
		this.i.onApplyTemplate();
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
