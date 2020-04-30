import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SortIndicatorStyle, SortIndicatorStyle_$type } from "./SortIndicatorStyle";
import { IgxTextCellInfo } from "./igx-text-cell-info";
import { IgxCellInfo } from "./igx-cell-info";
import { TextHeaderCellModel as TextHeaderCellModel_internal } from "./TextHeaderCellModel";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Backing information for a text header cell.
*/
export class IgxTextHeaderCellInfo extends IgxTextCellInfo
{

protected createImplementation() : TextHeaderCellModel_internal
{
	return new TextHeaderCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TextHeaderCellModel_internal {
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
	get sortIndicatorStyle() : SortIndicatorStyle {
		return this.i.sortIndicatorStyle;
	}
	set sortIndicatorStyle(v: SortIndicatorStyle) {
		this.i.sortIndicatorStyle = ensureEnum<SortIndicatorStyle>(SortIndicatorStyle_$type, v);
	}
}
