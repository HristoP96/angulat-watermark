import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { ColumnMovingSeparator } from "./ColumnMovingSeparator";

export const IgxColumnMovingSeparatorComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxColumnMovingSeparatorComponent)}];
@Component({
  selector: 'igx-column-moving-separator',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxColumnMovingSeparatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxColumnMovingSeparatorComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : ColumnMovingSeparator
{
	return new ColumnMovingSeparator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ColumnMovingSeparator {
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
