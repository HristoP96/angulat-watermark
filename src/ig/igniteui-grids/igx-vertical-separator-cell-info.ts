import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { VerticalSeparatorCellModel as VerticalSeparatorCellModel_internal } from "./VerticalSeparatorCellModel";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents backing information for vertical separators.
*/
export class IgxVerticalSeparatorCellInfo extends IgxCellInfo
{

protected createImplementation() : VerticalSeparatorCellModel_internal
{
	return new VerticalSeparatorCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : VerticalSeparatorCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets whether the vertical separator is hit test visible.
	*/
	get isHitTestVisible() : boolean {
		return (this.i.isHitTestVisible as boolean);
	}
	set isHitTestVisible(v: boolean) {
		this.i.isHitTestVisible = ensureBool(v);
	}
}
