import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { NumericAngleAxis } from "./NumericAngleAxis";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent angle based axis for polar series.
*/
export const IgxNumericAngleAxisComponent_PROVIDERS = [{provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericAngleAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericAngleAxisComponent)}];
@Component({
  selector: 'igx-numeric-angle-axis',
  template: ``,
  providers: [{provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericAngleAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericAngleAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNumericAngleAxisComponent extends IgxNumericAxisBaseComponent
{

protected createImplementation() : NumericAngleAxis
{
	return new NumericAngleAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericAngleAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets if the current axis is of angular axis type
	*/
	get isAngular() : boolean {
		return (this.i.isAngular as boolean);
	}
	/**
	 * Indicates the angle in degress that the chart's 0th angle should be offset.
	*/
	get startAngleOffset() : number {
		return (this.i.startAngleOffset as number);
	}
	@Input()
	set startAngleOffset(v: number) {
		this.i.startAngleOffset = +v;
	}
	/**
	 * Gets the scaled angle value in radians based on the raw input.
	
	* @param unscaledValue  * The raw input value.
	*/
	public getScaledAngle(unscaledValue: number) : number {
		let iv = this.i.getScaledAngle(unscaledValue);
		return (iv);
	}
	/**
	 * Gets the raw axis value back from the angle that would be used on the chart.
	
	* @param scaledValue  * The chart angle value.
	*/
	public getUnscaledAngle(scaledValue: number) : number {
		let iv = this.i.getUnscaledAngle(scaledValue);
		return (iv);
	}
}
