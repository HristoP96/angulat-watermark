import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { DateTimeFormats, DateTimeFormats_$type } from "./DateTimeFormats";
import { IgxCellInfo } from "./igx-cell-info";
import { DateTimeCellModel as DateTimeCellModel_internal } from "./DateTimeCellModel";
import { ensureEnum, ensureBool } from "igniteui-core/componentUtil";

/**
 * Backing information about a date time cell for the grid.
*/
export class IgxDateTimeCellInfo extends IgxCellInfo
{

protected createImplementation() : DateTimeCellModel_internal
{
	return new DateTimeCellModel_internal();
}
	/**
	                             * @hidden 
	                             */
	public get i() : DateTimeCellModel_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Sets or gets the DateTime value for the cell.
	*/
	get dateTimeValue() : Date {
		return (this.i.dateTimeValue as Date);
	}
	set dateTimeValue(v: Date) {
		this.i.dateTimeValue = v;
	}
	/**
	 * The format options to apply to the value
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
	/**
	 * Sets or gets the simple DateTimeFormat to use for the cell.
	*/
	get dateTimeFormat() : DateTimeFormats {
		return this.i.dateTimeFormat;
	}
	set dateTimeFormat(v: DateTimeFormats) {
		this.i.dateTimeFormat = ensureEnum<DateTimeFormats>(DateTimeFormats_$type, v);
	}
	/**
	 * Sets or gets whether the value to use is a DateTimeOffset value.
	*/
	get isOffsetValue() : boolean {
		return (this.i.isOffsetValue as boolean);
	}
	set isOffsetValue(v: boolean) {
		this.i.isOffsetValue = ensureBool(v);
	}
}
