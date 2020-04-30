import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxProgressiveLoadStatusEventArgs } from "igniteui-charts/igx-progressive-load-status-event-args";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicHighDensityScatterSeries } from "./GeographicHighDensityScatterSeries";
import { ensureBool, colorToString, stringToColor } from "igniteui-core/componentUtil";

/**
 * Series class for a geographic map with points marked at given locations.
 * This is the geographic equivalent of a HighDensityScatterSeries.
*/
export const IgxGeographicHighDensityScatterSeriesComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicHighDensityScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicHighDensityScatterSeriesComponent)}];
@Component({
  selector: 'igx-geographic-high-density-scatter-series',
  template: ``,
  providers: [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicHighDensityScatterSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicHighDensityScatterSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicHighDensityScatterSeriesComponent extends IgxGeographicMapSeriesHostComponent
{

protected createImplementation() : GeographicHighDensityScatterSeries
{
	return new GeographicHighDensityScatterSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicHighDensityScatterSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property of ItemsSource items which contains the latitude coordinate of the symbol.
	*/
	get latitudeMemberPath() : string {
		return (this.i.latitudeMemberPath as string);
	}
	@Input()
	set latitudeMemberPath(v: string) {
		this.i.latitudeMemberPath = v;
	}
	/**
	 * The name of the property of ItemsSource items which contains the longitude coordinate of the symbol.
	*/
	get longitudeMemberPath() : string {
		return (this.i.longitudeMemberPath as string);
	}
	@Input()
	set longitudeMemberPath(v: string) {
		this.i.longitudeMemberPath = v;
	}
	/**
	 * Gets or sets the whether to use use brute force mode.
	*/
	get useBruteForce() : boolean {
		return (this.i.useBruteForce as boolean);
	}
	@Input()
	set useBruteForce(v: boolean) {
		this.i.useBruteForce = ensureBool(v);
	}
	/**
	 * Gets or sets the whether to progressively load the data into the chart.
	*/
	get progressiveLoad() : boolean {
		return (this.i.progressiveLoad as boolean);
	}
	@Input()
	set progressiveLoad(v: boolean) {
		this.i.progressiveLoad = ensureBool(v);
	}
	/**
	 * Gets or sets the whether the chart reacts to mouse move events.
	*/
	get mouseOverEnabled() : boolean {
		return (this.i.mouseOverEnabled as boolean);
	}
	@Input()
	set mouseOverEnabled(v: boolean) {
		this.i.mouseOverEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the density value that maps to the minimum heat color.
	*/
	get heatMinimum() : number {
		return (this.i.heatMinimum as number);
	}
	@Input()
	set heatMinimum(v: number) {
		this.i.heatMinimum = +v;
	}
	/**
	 * Gets or sets the value that maps to the maximum heat color.
	*/
	get heatMaximum() : number {
		return (this.i.heatMaximum as number);
	}
	@Input()
	set heatMaximum(v: number) {
		this.i.heatMaximum = +v;
	}
	/**
	 * Gets or sets the color to use for the minimum end of the scale.
	*/
	get heatMinimumColor() : string {
		return colorToString(this.i.heatMinimumColor);
	}
	@Input()
	set heatMinimumColor(v: string) {
		this.i.heatMinimumColor = stringToColor(v);
	}
	/**
	 * Gets or sets the color to use for the maximum end of the scale.
	*/
	get heatMaximumColor() : string {
		return colorToString(this.i.heatMaximumColor);
	}
	@Input()
	set heatMaximumColor(v: string) {
		this.i.heatMaximumColor = stringToColor(v);
	}
	/**
	 * Gets or sets the the pixel extent of the square data points that are rendered.
	*/
	get pointExtent() : number {
		return (this.i.pointExtent as number);
	}
	@Input()
	set pointExtent(v: number) {
		this.i.pointExtent = +v;
	}
	/**
	 * Represents the current status of the progressive load of the series. It will range from 0 to 100, where 100 is fully loaded.
	*/
	get progressiveStatus() : number {
		return (this.i.progressiveStatus as number);
	}
	@Input()
	set progressiveStatus(v: number) {
		this.i.progressiveStatus = +v;
	}
	private _progressiveLoadStatusChanged: EventEmitter<{ sender: any, args: IgxProgressiveLoadStatusEventArgs}> = null;
	/**
	 * Raised when the progressive loading state of the series has changed.
	*/
	@Output()
	get progressiveLoadStatusChanged(): EventEmitter<{ sender: any, args: IgxProgressiveLoadStatusEventArgs}> {
		if (this._progressiveLoadStatusChanged == null) {
			this._progressiveLoadStatusChanged = new EventEmitter<{sender: any, args: IgxProgressiveLoadStatusEventArgs}>();
			this.i.progressiveLoadStatusChanged = delegateCombine(this.i.progressiveLoadStatusChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxProgressiveLoadStatusEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeProgressiveLoadStatusChanged) {
	                        (this as any).beforeProgressiveLoadStatusChanged(this, outerArgs);
	                    }
					this._progressiveLoadStatusChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._progressiveLoadStatusChanged;
	}
}
