import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent radius axis for polar and radial series.
* 
* ```html
* <igx-data-chart
*     [dataSource]="dataSource"   >
*     <igx-category-angle-axis name="angleAxis" label="Department" />
*     <igx-numeric-radius-axis name="radiusAxis" />   
*  </igx-data-chart>
* ```
* 
* ```ts
* this.series1.angleAxisName = "AngleAxis";
* this.series1.valueAxisName = "numericYAxis";
* ```
*/
export const IgxNumericRadiusAxisComponent_PROVIDERS = [{provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericRadiusAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericRadiusAxisComponent)}];
@Component({
  selector: 'igx-numeric-radius-axis',
  template: ``,
  providers: [{provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericRadiusAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericRadiusAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNumericRadiusAxisComponent extends IgxNumericAxisBaseComponent
{

protected createImplementation() : NumericRadiusAxis
{
	return new NumericRadiusAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericRadiusAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if the axis is of radial axis type
	* 
	* ```ts
	* let isRadial: boolean = this.series.isRadial;
	* ```
	*/
	get isRadial() : boolean {
		return (this.i.isRadial as boolean);
	}
	/**
	 * Defines the percentage of the maximum radius extent to use as the maximum radius. Should be 
	 * a value between 0.0 and 1.0.
	*/
	get radiusExtentScale() : number {
		return (this.i.radiusExtentScale as number);
	}
	@Input()
	set radiusExtentScale(v: number) {
		this.i.radiusExtentScale = +v;
	}
	/**
	 * Defines the percentage of the maximum radius extent to leave blank at the center of the chart. Should be 
	 * a value between 0.0 and 1.0.
	*/
	get innerRadiusExtentScale() : number {
		return (this.i.innerRadiusExtentScale as number);
	}
	@Input()
	set innerRadiusExtentScale(v: number) {
		this.i.innerRadiusExtentScale = +v;
	}
	/**
	 * Returns a world coordinates radius length (0 - 0.5) from a raw axis value.
	
	* @param unscaledValue  * The raw axis value.
	*/
	public getScaledValue3(unscaledValue: number) : number {
		let iv = this.i.getScaledValue3(unscaledValue);
		return (iv);
	}
	/**
	 * Returns a raw axis value from the world coordinates radius length provided.
	
	* @param scaledValue  * The scaled world coordinates radius length.
	*/
	public getUnscaledValue3(scaledValue: number) : number {
		let iv = this.i.getUnscaledValue3(scaledValue);
		return (iv);
	}
}
