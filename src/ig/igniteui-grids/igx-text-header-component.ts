import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHeaderComponent } from "./igx-header-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { TextHeader } from "./TextHeader";

/**
 * Represents a class used to configure the appearance of a text column header cells.
*/
export const IgxTextHeaderComponent_PROVIDERS = [{provide: IgxHeaderComponent, useExisting: forwardRef(() => IgxTextHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTextHeaderComponent)}];
@Component({
  selector: 'igx-text-header',
  template: ``,
  providers: [{provide: IgxHeaderComponent, useExisting: forwardRef(() => IgxTextHeaderComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxTextHeaderComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTextHeaderComponent extends IgxHeaderComponent
{

protected createImplementation() : TextHeader
{
	return new TextHeader();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TextHeader {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
