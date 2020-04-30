import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { ColumnResizingSeparator } from "./ColumnResizingSeparator";

export const IgxColumnResizingSeparatorComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxColumnResizingSeparatorComponent)}];
@Component({
  selector: 'igx-column-resizing-separator',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxColumnResizingSeparatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxColumnResizingSeparatorComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : ColumnResizingSeparator
{
	return new ColumnResizingSeparator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ColumnResizingSeparator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the separator width for this column.
	*/
	get separatorWidth() : number {
		return (this.i.separatorWidth as number);
	}
	@Input()
	set separatorWidth(v: number) {
		this.i.separatorWidth = +v;
	}
}
