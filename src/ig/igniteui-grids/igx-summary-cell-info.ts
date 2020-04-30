import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCellInfo } from "./igx-cell-info";
import { SummaryCellModel as SummaryCellModel_internal } from "./SummaryCellModel";
import { brushToString, stringToBrush } from "igniteui-core/componentUtil";

/**
 * Backing information for a section header cell in the grid.
*/
export class IgxSummaryCellInfo extends IgxCellInfo
{

protected createImplementation() : SummaryCellModel_internal
{
	return new SummaryCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SummaryCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the resolved summary text for the summary cell.
	*/
	get resolvedSummaryText() : string {
		return (this.i.resolvedSummaryText as string);
	}
	set resolvedSummaryText(v: string) {
		this.i.resolvedSummaryText = v;
	}
	/**
	 * Sets or gets the resolved summary value for the sumamry cell.
	*/
	get resolvedSummaryValue() : string {
		return (this.i.resolvedSummaryValue as string);
	}
	set resolvedSummaryValue(v: string) {
		this.i.resolvedSummaryValue = v;
	}
	/**
	 * Gets or sets the color of the text for the summary name in the cell.
	*/
	get summaryNameTextColor() : string {
		return brushToString(this.i.summaryNameTextColor);
	}
	set summaryNameTextColor(v: string) {
		this.i.summaryNameTextColor = stringToBrush(v);
	}
}
