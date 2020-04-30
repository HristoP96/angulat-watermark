import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ensureBool, toPoint } from "igniteui-core/componentUtil";

/**
 * Base class for hosting chart series in a IgxGeographicMap.Component
*/
export const IgxGeographicMapSeriesHostComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicMapSeriesHostComponent)}];
export abstract class IgxGeographicMapSeriesHostComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : GeographicMapSeriesHost {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if this control is geographic coordinate system
	*/
	get isGeographic() : boolean {
		return (this.i.isGeographic as boolean);
	}
	/**
	 * The minimum scale at which this series becomes visible.
	 * The default value for this property is 1.0, which means the series will always be visible.  At a VisibleFromScale setting of 0.0, the series will never be visible.  At a VisibleFromScale setting of 0.5, the series will be visible as long as the map is zoomed in to at least 200%.
	*/
	get visibleFromScale() : number {
		return (this.i.visibleFromScale as number);
	}
	@Input()
	set visibleFromScale(v: number) {
		this.i.visibleFromScale = +v;
	}
	/**
	 * Gets or sets the coercion methods to use when loading data from data sources.
	 * Should be specified before setting any member paths, if being used. Setting it later 
	 * will not cause data to be reimported into the chart.
	*/
	get coercionMethods() : any {
		return this.i.coercionMethods as any;
	}
	@Input()
	set coercionMethods(v: any) {
		this.i.coercionMethods = v;
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	/**
	 * Renders the series.
	
	* @param animate  * True if the change should be animated.
	*/
	public renderSeries(animate: boolean) {
		this.i.renderSeries(animate);
	}
	/**
	 * Called when this series' Style is updated.
	
	*/
	public styleUpdated() {
		this.i.styleUpdated();
	}
}
