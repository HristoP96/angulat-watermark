import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxStraightNumericAxisBaseComponent } from "./igx-straight-numeric-axis-base-component";
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { PercentChangeYAxis } from "./PercentChangeYAxis";

/**
 * A horizontal axis that uses a DateTime scale.
* 
* You can use the `IgxPercentChangeYAxisComponent` show percentage values.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data">
*     <igx-percent-change-y-axis
* 		#yAxis>
*     </igx-percent-change-y-axis>
* </igx-data-chart>
* ```
* 
* ```ts
* let yAxis = new IgxPercentChangeYAxisComponent();
* this.chart.axes.add(yAxis);
* ```
*/
export const IgxPercentChangeYAxisComponent_PROVIDERS = [{provide: IgxNumericYAxisComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}];
@Component({
  selector: 'igx-percent-change-y-axis',
  template: ``,
  providers: [{provide: IgxNumericYAxisComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxStraightNumericAxisBaseComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxNumericAxisBaseComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxPercentChangeYAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPercentChangeYAxisComponent extends IgxNumericYAxisComponent
{

protected createImplementation() : PercentChangeYAxis
{
	return new PercentChangeYAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PercentChangeYAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
