import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { TemplateCellModel as TemplateCellModel_internal } from "./TemplateCellModel";

/**
 * Represents backing information for a template cell.
*/
export class IgxTemplateCellInfo extends IgxCellInfo
{

protected createImplementation() : TemplateCellModel_internal
{
	return new TemplateCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TemplateCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the value to provide to the template.
	*/
	get value() : any {
		return this.i.value as any;
	}
	set value(v: any) {
		this.i.value = v;
	}
}
