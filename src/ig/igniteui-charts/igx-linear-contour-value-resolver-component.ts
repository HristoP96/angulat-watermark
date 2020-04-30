import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxContourValueResolverComponent } from "./igx-contour-value-resolver-component";
import { LinearContourValueResolver } from "./LinearContourValueResolver";

/**
 * ContourValueResolver class which resolves contour lines to be distributed at linear intervals from the data minimum to the data maximum.
*/
export const IgxLinearContourValueResolverComponent_PROVIDERS = [{provide: IgxContourValueResolverComponent, useExisting: forwardRef(() => IgxLinearContourValueResolverComponent)}];
@Component({
  selector: 'igx-linear-contour-value-resolver',
  template: ``,
  providers: [{provide: IgxContourValueResolverComponent, useExisting: forwardRef(() => IgxLinearContourValueResolverComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxLinearContourValueResolverComponent extends IgxContourValueResolverComponent
{

protected createImplementation() : LinearContourValueResolver
{
	return new LinearContourValueResolver();
}
	/**
	                             * @hidden 
	                             */
	public get i() : LinearContourValueResolver {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets how many contour values to return.
	*/
	get valueCount() : number {
		return (this.i.valueCount as number);
	}
	@Input()
	set valueCount(v: number) {
		this.i.valueCount = +v;
	}
}
