import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { PinnedAreaSeparator } from "./PinnedAreaSeparator";

export const IgxPinnedAreaSeparatorComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxPinnedAreaSeparatorComponent)}];
@Component({
  selector: 'igx-pinned-area-separator',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxPinnedAreaSeparatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPinnedAreaSeparatorComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : PinnedAreaSeparator
{
	return new PinnedAreaSeparator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PinnedAreaSeparator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
