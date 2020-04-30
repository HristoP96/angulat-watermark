import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { HeaderSeparator } from "./HeaderSeparator";

export const IgxHeaderSeparatorComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxHeaderSeparatorComponent)}];
@Component({
  selector: 'igx-header-separator',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxHeaderSeparatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxHeaderSeparatorComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : HeaderSeparator
{
	return new HeaderSeparator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : HeaderSeparator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
