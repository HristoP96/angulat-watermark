import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxProgressiveLoadStatusEventArgs } from "./igx-progressive-load-status-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { HighDensityScatterSeries } from "./HighDensityScatterSeries";
import { ensureBool, colorToString, stringToColor, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent series where a high volume of scatter points can be displayed.
*/
export const IgxHighDensityScatterSeriesComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxHighDensityScatterSeriesComponent)}];
@Component({
  selector: 'igx-high-density-scatter-series',
  template: ``,
  providers: [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxHighDensityScatterSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxHighDensityScatterSeriesComponent extends IgxSeriesComponent
{

protected createImplementation() : HighDensityScatterSeries
{
	return new HighDensityScatterSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : HighDensityScatterSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if this series is a scatter series
	*/
	get isScatter() : boolean {
		return (this.i.isScatter as boolean);
	}
	/**
	 * Gets or sets the effective x-axis for the current object.
	*/
	get xAxis() : IgxNumericXAxisComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxNumericXAxisComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxNumericXAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * Gets or sets the effective y-axis for the current object.
	*/
	get yAxis() : IgxNumericYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxNumericYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxNumericYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * Gets or sets the x value mapping property for the current series object.
	*/
	get xMemberPath() : string {
		return (this.i.xMemberPath as string);
	}
	@Input()
	set xMemberPath(v: string) {
		this.i.xMemberPath = v;
	}
	/**
	 * Gets or sets the y value mapping property for the current series object.
	*/
	get yMemberPath() : string {
		return (this.i.yMemberPath as string);
	}
	@Input()
	set yMemberPath(v: string) {
		this.i.yMemberPath = v;
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
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.xAxis && (this.xAxis as any)._styling) {
	    (this.xAxis as any)._styling(container, component, this);
	}
	if (this.yAxis && (this.yAxis as any)._styling) {
	    (this.yAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as XAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsXAxis(axis: any) : boolean {
		let iv = this.i.canUseAsXAxis(axis);
		return (iv);
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
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
