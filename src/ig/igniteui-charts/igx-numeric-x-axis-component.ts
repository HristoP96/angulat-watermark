import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStraightNumericAxisBaseComponent } from "./igx-straight-numeric-axis-base-component";
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { NumericXAxis } from "./NumericXAxis";

/**
 * Represents a IgxDataChartComponent numeric X axis.
* 
* The `IgxNumericXAxisComponent` treats the data as continuously varying numerical data items. Labels on this axis are placed along the X-axis. The location of labels varies according to the value in a data column that is mapped using the `XMemberPath` property of Scatter Series or `ValueMemberPath` property of Bar Series.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-numeric-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		crossingAxis= "xAxis"
* 		crossingValue= 700
* 		#yAxis>
*     </igx-numeric-y-axis>  
* </igx-data-chart>
* ```
*/
export const IgxNumericXAxisComponent_PROVIDERS = [{provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}];
@Component({
  selector: 'igx-numeric-x-axis',
  template: ``,
  providers: [{provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericXAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNumericXAxisComponent extends IgxStraightNumericAxisBaseComponent
{

protected createImplementation() : NumericXAxis
{
	return new NumericXAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NumericXAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	public scrollRangeIntoView(minimum: number, maximum: number) {
		this.i.scrollRangeIntoView(minimum, maximum);
	}
}
