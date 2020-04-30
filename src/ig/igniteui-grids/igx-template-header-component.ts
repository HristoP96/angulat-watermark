import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxTemplateHeaderCellUpdatingEventArgs } from "./igx-template-header-cell-updating-event-args";
import { IgxHeaderComponent } from "./igx-header-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { TemplateHeader } from "./TemplateHeader";

/**
 * A type of header with customizable content.
*/
export const IgxTemplateHeaderComponent_PROVIDERS = [{provide: IgxHeaderComponent, useExisting: forwardRef(() => IgxTemplateHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateHeaderComponent)}];
@Component({
  selector: 'igx-template-header',
  template: ``,
  providers: [{provide: IgxHeaderComponent, useExisting: forwardRef(() => IgxTemplateHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateHeaderComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTemplateHeaderComponent extends IgxHeaderComponent
{

protected createImplementation() : TemplateHeader
{
	return new TemplateHeader();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateHeader {
		return this._implementation;
	}
	constructor() {
		super();
	}
	private _cellUpdating: EventEmitter<{ sender: any, args: IgxTemplateHeaderCellUpdatingEventArgs}> = null;
	/**
	 * Called when the header cell content is being created or updated.
	*/
	@Output()
	get cellUpdating(): EventEmitter<{ sender: any, args: IgxTemplateHeaderCellUpdatingEventArgs}> {
		if (this._cellUpdating == null) {
			this._cellUpdating = new EventEmitter<{sender: any, args: IgxTemplateHeaderCellUpdatingEventArgs}>();
			this.i.cellUpdating = delegateCombine(this.i.cellUpdating, (o, e) => {
				let outerArgs = new IgxTemplateHeaderCellUpdatingEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeCellUpdating) {
	                            (this as any).beforeCellUpdating(this, outerArgs);
	                        }
					    this._cellUpdating.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._cellUpdating;
	}
}
