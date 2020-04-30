import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { RowSeparatorModel as RowSeparatorModel_internal } from "./RowSeparatorModel";

/**
 * Represents backing information for the row separators.
*/
export class IgxRowSeparatorInfo extends IgxCellInfo
{

protected createImplementation() : RowSeparatorModel_internal
{
	return new RowSeparatorModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RowSeparatorModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
