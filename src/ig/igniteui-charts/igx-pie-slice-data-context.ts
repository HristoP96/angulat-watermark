import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxDataContext } from "igniteui-core/igx-data-context";
import { PieSliceDataContext as PieSliceDataContext_internal } from "./PieSliceDataContext";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * DataContext for a pie slice.
*/
export class IgxPieSliceDataContext extends IgxDataContext
{

protected createImplementation() : PieSliceDataContext_internal
{
	return new PieSliceDataContext_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PieSliceDataContext_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the value of this slice as a percentage of the total pie.
	*/
	get percentValue() : number {
		return (this.i.percentValue as number);
	}
	set percentValue(v: number) {
		this.i.percentValue = +v;
	}
	/**
	 * Gets or sets whether this slice is an Others slice or not.
	*/
	get isOthersSlice() : boolean {
		return (this.i.isOthersSlice as boolean);
	}
	set isOthersSlice(v: boolean) {
		this.i.isOthersSlice = ensureBool(v);
	}
}
