import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStraightNumericAxisBaseComponent } from "./igx-straight-numeric-axis-base-component";
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { NumericYAxis } from "./NumericYAxis";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent numeric Y axis.
* 
* The `IgxNumericYAxisComponent` treats the data as continuously varying numerical data items. Labels on this axis are placed along the Y-axis. Location of labels varies according to the value in a data column that is mapped using the `YMemberPath` property for Scatter Series or `ValueMemberPath` property for Category Series.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis
*         label="label"
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
*         #yAxis>
*     </igx-numeric-y-axis>
*     <igx-column-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-column-series>
* </igx-data-chart>
* ```
*/
export const IgxNumericYAxisComponent_PROVIDERS = [{provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}];
@Component({
  selector: 'igx-numeric-y-axis',
  template: ``,
  providers: [{provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericYAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNumericYAxisComponent extends IgxStraightNumericAxisBaseComponent
{

protected createImplementation() : NumericYAxis
{
	return new NumericYAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericYAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets if the current axis is of vertical axis
	*/
	get isVertical() : boolean {
		return (this.i.isVertical as boolean);
	}
	public scrollRangeIntoView(minimum: number, maximum: number) {
		this.i.scrollRangeIntoView(minimum, maximum);
	}
}
