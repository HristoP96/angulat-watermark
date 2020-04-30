import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxTemplateCellInfo } from "./igx-template-cell-info";
import { IgxCellInfo } from "./igx-cell-info";
import { TemplateHeaderCellModel as TemplateHeaderCellModel_internal } from "./TemplateHeaderCellModel";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Backing information for the template header cells.
*/
export class IgxTemplateHeaderCellInfo extends IgxTemplateCellInfo
{

protected createImplementation() : TemplateHeaderCellModel_internal
{
	return new TemplateHeaderCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateHeaderCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets whether the filter UI should be visible in the header.
	*/
	get isFilterUIVisible() : boolean {
		return (this.i.isFilterUIVisible as boolean);
	}
	set isFilterUIVisible(v: boolean) {
		this.i.isFilterUIVisible = ensureBool(v);
	}
}
