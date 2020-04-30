import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSummaryRowComponent } from "./igx-summary-row-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { SummaryRowSection } from "./SummaryRowSection";

export const IgxSummaryRowSectionComponent_PROVIDERS = [{provide: IgxSummaryRowComponent, useExisting: forwardRef(() => IgxSummaryRowSectionComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSummaryRowSectionComponent)}];
@Component({
  selector: 'igx-summary-row-section',
  template: ``,
  providers: [{provide: IgxSummaryRowComponent, useExisting: forwardRef(() => IgxSummaryRowSectionComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxSummaryRowSectionComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSummaryRowSectionComponent extends IgxSummaryRowComponent
{

protected createImplementation() : SummaryRowSection
{
	return new SummaryRowSection();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SummaryRowSection {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
