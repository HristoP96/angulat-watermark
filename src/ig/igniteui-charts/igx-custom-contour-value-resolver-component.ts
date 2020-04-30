import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxCustomContourValueResolverEventArgs } from "./igx-custom-contour-value-resolver-event-args";
import { IgxContourValueResolverComponent } from "./igx-contour-value-resolver-component";
import { CustomContourValueResolver } from "./CustomContourValueResolver";

/**
 * ContourValueResolver class which fires an event to resolve the contour values.
*/
export const IgxCustomContourValueResolverComponent_PROVIDERS = [{provide: IgxContourValueResolverComponent, useExisting: forwardRef(() => IgxCustomContourValueResolverComponent)}];
@Component({
  selector: 'igx-custom-contour-value-resolver',
  template: ``,
  providers: [{provide: IgxContourValueResolverComponent, useExisting: forwardRef(() => IgxCustomContourValueResolverComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCustomContourValueResolverComponent extends IgxContourValueResolverComponent
{

protected createImplementation() : CustomContourValueResolver
{
	return new CustomContourValueResolver();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CustomContourValueResolver {
		return this._implementation;
	}
	constructor() {
		super();
	}
	private _getCustomContourValues: EventEmitter<{ sender: any, args: IgxCustomContourValueResolverEventArgs}> = null;
	/**
	 * Event raised when retrieving the contour values.
	*/
	@Output()
	get getCustomContourValues(): EventEmitter<{ sender: any, args: IgxCustomContourValueResolverEventArgs}> {
		if (this._getCustomContourValues == null) {
			this._getCustomContourValues = new EventEmitter<{sender: any, args: IgxCustomContourValueResolverEventArgs}>();
			this.i.getCustomContourValues = delegateCombine(this.i.getCustomContourValues, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCustomContourValueResolverEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeGetCustomContourValues) {
	                        (this as any).beforeGetCustomContourValues(this, outerArgs);
	                    }
					this._getCustomContourValues.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._getCustomContourValues;
	}
}
