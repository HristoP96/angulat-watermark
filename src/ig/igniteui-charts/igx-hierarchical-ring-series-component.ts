import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxRingSeriesBaseComponent } from "./igx-ring-series-base-component";
import { HierarchicalRingSeries } from "./HierarchicalRingSeries";

/**
 * Represents a IgxDoughnutChartComponent hierarchical series.
*/
export const IgxHierarchicalRingSeriesComponent_PROVIDERS = [{provide: IgxRingSeriesBaseComponent, useExisting: forwardRef(() => IgxHierarchicalRingSeriesComponent)}];
@Component({
  selector: 'igx-hierarchical-ring-series',
  template: ``,
  providers: [{provide: IgxRingSeriesBaseComponent, useExisting: forwardRef(() => IgxHierarchicalRingSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxHierarchicalRingSeriesComponent extends IgxRingSeriesBaseComponent
{

protected createImplementation() : HierarchicalRingSeries
{
	return new HierarchicalRingSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : HierarchicalRingSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the property name that contains the children items collection.
	*/
	get childrenMemberPath() : string {
		return (this.i.childrenMemberPath as string);
	}
	@Input()
	set childrenMemberPath(v: string) {
		this.i.childrenMemberPath = v;
	}
}
