import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnComponent } from "./igx-column-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { TextColumn } from "./TextColumn";

/**
 * Represents a Text grid column, used to allow the developer to display a formatted text in a cell.
*/
export const IgxTextColumnComponent_PROVIDERS = [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxTextColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTextColumnComponent)}];
@Component({
  selector: 'igx-text-column',
  template: ``,
  providers: [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxTextColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTextColumnComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTextColumnComponent extends IgxColumnComponent
{

protected createImplementation() : TextColumn
{
	return new TextColumn();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TextColumn {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
