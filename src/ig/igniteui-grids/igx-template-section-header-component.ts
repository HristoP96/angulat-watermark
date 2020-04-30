import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxTemplateSectionHeaderCellUpdatingEventArgs } from "./igx-template-section-header-cell-updating-event-args";
import { IgxSectionHeaderComponent } from "./igx-section-header-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { TemplateSectionHeader } from "./TemplateSectionHeader";

/**
 * Used to configure the appearance of the section header cells.
*/
export const IgxTemplateSectionHeaderComponent_PROVIDERS = [{provide: IgxSectionHeaderComponent, useExisting: forwardRef(() => IgxTemplateSectionHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateSectionHeaderComponent)}];
@Component({
  selector: 'igx-template-section-header',
  template: ``,
  providers: [{provide: IgxSectionHeaderComponent, useExisting: forwardRef(() => IgxTemplateSectionHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateSectionHeaderComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTemplateSectionHeaderComponent extends IgxSectionHeaderComponent
{

protected createImplementation() : TemplateSectionHeader
{
	return new TemplateSectionHeader();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateSectionHeader {
		return this._implementation;
	}
	constructor() {
		super();
	}
	private _cellUpdating: EventEmitter<{ sender: any, args: IgxTemplateSectionHeaderCellUpdatingEventArgs}> = null;
	/**
	 * Called when the cell content is being created or updated.
	*/
	@Output()
	get cellUpdating(): EventEmitter<{ sender: any, args: IgxTemplateSectionHeaderCellUpdatingEventArgs}> {
		if (this._cellUpdating == null) {
			this._cellUpdating = new EventEmitter<{sender: any, args: IgxTemplateSectionHeaderCellUpdatingEventArgs}>();
			this.i.cellUpdating = delegateCombine(this.i.cellUpdating, (o, e) => {
				let outerArgs = new IgxTemplateSectionHeaderCellUpdatingEventArgs();
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
