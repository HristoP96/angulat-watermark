import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSectionHeaderCellInfo } from "./igx-section-header-cell-info";
import { IgxCellInfo } from "./igx-cell-info";
import { TemplateSectionHeaderCellModel as TemplateSectionHeaderCellModel_internal } from "./TemplateSectionHeaderCellModel";

/**
 * Backing information for a template section header cell in the grid.
*/
export class IgxTemplateSectionHeaderCellInfo extends IgxSectionHeaderCellInfo
{

protected createImplementation() : TemplateSectionHeaderCellModel_internal
{
	return new TemplateSectionHeaderCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateSectionHeaderCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
