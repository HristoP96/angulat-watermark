import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { TextCellModel as TextCellModel_internal } from "./TextCellModel";

/**
 * Backing information for a text cell in the grid.
*/
export class IgxTextCellInfo extends IgxCellInfo
{

protected createImplementation() : TextCellModel_internal
{
	return new TextCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TextCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the text value for the cell.
	*/
	get textValue() : string {
		return (this.i.textValue as string);
	}
	set textValue(v: string) {
		this.i.textValue = v;
	}
}
