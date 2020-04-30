import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GroupSummaryDisplayMode, GroupSummaryDisplayMode_$type } from "./GroupSummaryDisplayMode";
import { IgxCellInfo } from "./igx-cell-info";
import { SectionHeaderCellModel as SectionHeaderCellModel_internal } from "./SectionHeaderCellModel";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Backing information for a section header cell in the grid.
*/
export class IgxSectionHeaderCellInfo extends IgxCellInfo
{

protected createImplementation() : SectionHeaderCellModel_internal
{
	return new SectionHeaderCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SectionHeaderCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the resolved text for the section header cell.
	*/
	get resolvedText() : string {
		return (this.i.resolvedText as string);
	}
	set resolvedText(v: string) {
		this.i.resolvedText = v;
	}
	/**
	 * Sets or gets the resolved summary text for the section header cell.
	*/
	get resolvedSummaryText() : string {
		return (this.i.resolvedSummaryText as string);
	}
	set resolvedSummaryText(v: string) {
		this.i.resolvedSummaryText = v;
	}
	/**
	 * Sets or gets how summaries are displayed in the section header cell.
	*/
	get summaryDisplayMode() : GroupSummaryDisplayMode {
		return this.i.summaryDisplayMode;
	}
	set summaryDisplayMode(v: GroupSummaryDisplayMode) {
		this.i.summaryDisplayMode = ensureEnum<GroupSummaryDisplayMode>(GroupSummaryDisplayMode_$type, v);
	}
}
