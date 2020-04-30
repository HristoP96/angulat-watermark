import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { RowSeparator } from "./RowSeparator";

/**
 * Represents a Row separator, this is used to visually separate the rows in a grid
*/
export const IgxRowSeparatorComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxRowSeparatorComponent)}];
@Component({
  selector: 'igx-row-separator',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxRowSeparatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRowSeparatorComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : RowSeparator
{
	return new RowSeparator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RowSeparator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
