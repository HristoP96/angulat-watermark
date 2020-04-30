import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSummaryRowComponent } from "./igx-summary-row-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { SummaryRowRoot } from "./SummaryRowRoot";

export const IgxSummaryRowRootComponent_PROVIDERS = [{provide: IgxSummaryRowComponent, useExisting: forwardRef(() => IgxSummaryRowRootComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSummaryRowRootComponent)}];
@Component({
  selector: 'igx-summary-row-root',
  template: ``,
  providers: [{provide: IgxSummaryRowComponent, useExisting: forwardRef(() => IgxSummaryRowRootComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSummaryRowRootComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSummaryRowRootComponent extends IgxSummaryRowComponent
{

protected createImplementation() : SummaryRowRoot
{
	return new SummaryRowRoot();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SummaryRowRoot {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
