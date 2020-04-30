import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxTemplateCellUpdatingEventArgs } from "./igx-template-cell-updating-event-args";
import { IgxColumnComponent } from "./igx-column-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { TemplateColumn } from "./TemplateColumn";

/**
 * A column with customizable content.
*/
export const IgxTemplateColumnComponent_PROVIDERS = [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxTemplateColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateColumnComponent)}];
@Component({
  selector: 'igx-template-column',
  template: ``,
  providers: [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxTemplateColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTemplateColumnComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTemplateColumnComponent extends IgxColumnComponent
{

protected createImplementation() : TemplateColumn
{
	return new TemplateColumn();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateColumn {
		return this._implementation;
	}
	constructor() {
		super();
	}
	private _cellUpdating: EventEmitter<{ sender: any, args: IgxTemplateCellUpdatingEventArgs}> = null;
	/**
	 * Called when the cell content is being created or updated.
	*/
	@Output()
	get cellUpdating(): EventEmitter<{ sender: any, args: IgxTemplateCellUpdatingEventArgs}> {
		if (this._cellUpdating == null) {
			this._cellUpdating = new EventEmitter<{sender: any, args: IgxTemplateCellUpdatingEventArgs}>();
			this.i.cellUpdating = delegateCombine(this.i.cellUpdating, (o, e) => {
				let outerArgs = new IgxTemplateCellUpdatingEventArgs();
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
