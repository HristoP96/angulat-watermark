import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxLegendBaseComponent } from "./igx-legend-base-component";
import { ScaleLegend } from "./ScaleLegend";

/**
 * Represents a legend that indicates the size and the color scale for a collection of series.
*/
export const IgxScaleLegendComponent_PROVIDERS = [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxScaleLegendComponent)}];
@Component({
  selector: 'igx-scale-legend',
  template: ``,
  providers: [{provide: IgxLegendBaseComponent, useExisting: forwardRef(() => IgxScaleLegendComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScaleLegendComponent extends IgxLegendBaseComponent
{

protected createImplementation() : ScaleLegend
{
	return new ScaleLegend();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScaleLegend {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
