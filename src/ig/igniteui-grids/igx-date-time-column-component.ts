import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { DateTimeFormats, DateTimeFormats_$type } from "./DateTimeFormats";
import { IgxColumnComponent } from "./igx-column-component";
import { IgxDefinitionBaseComponent } from "./igx-definition-base-component";
import { DateTimeColumn } from "./DateTimeColumn";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * A column for displaying date/time values.
*/
export const IgxDateTimeColumnComponent_PROVIDERS = [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxDateTimeColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxDateTimeColumnComponent)}];
@Component({
  selector: 'igx-date-time-column',
  template: ``,
  providers: [{provide: IgxColumnComponent, useExisting: forwardRef(() => IgxDateTimeColumnComponent)}, {provide: IgxDefinitionBaseComponent, useExisting: forwardRef(() => IgxDateTimeColumnComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxDateTimeColumnComponent extends IgxColumnComponent
{

protected createImplementation() : DateTimeColumn
{
	return new DateTimeColumn();
}
	/**
	                             * @hidden 
	                             */
	public get i() : DateTimeColumn {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the date time format to use for this column. If FormatString is specificied this value is ignored.
	*/
	get dateTimeFormat() : DateTimeFormats {
		return this.i.dateTimeFormat;
	}
	@Input()
	set dateTimeFormat(v: DateTimeFormats) {
		this.i.dateTimeFormat = ensureEnum<DateTimeFormats>(DateTimeFormats_$type, v);
	}
	/**
	 * Gets or sets the INTL DateTimeFormat object to use for formatting the date values.
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	@Input()
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
}
