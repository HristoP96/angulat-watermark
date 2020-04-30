import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { SectionFooter } from "./SectionFooter";

/**
 * Used to configure the appearance of the section footer cells.
*/
export const IgxSectionFooterComponent_PROVIDERS = [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSectionFooterComponent)}];
@Component({
  selector: 'igx-section-footer',
  template: ``,
  providers: [{provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSectionFooterComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSectionFooterComponent extends IgxDefinitionBaseComponent
{

protected createImplementation() : SectionFooter
{
	return new SectionFooter();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SectionFooter {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
