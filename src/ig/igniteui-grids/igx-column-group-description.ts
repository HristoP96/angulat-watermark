import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxFormatGroupTextEventArgs } from "./igx-format-group-text-event-args";
import { IgxColumnSortDescription } from "./igx-column-sort-description";
import { ColumnGroupDescription as ColumnGroupDescription_internal } from "./ColumnGroupDescription";

/**
 * Represents an element in the current grouping applied to a data source or provider. Changes to this object are not observed or expected after it is initially assigned to a collection.
*/
export class IgxColumnGroupDescription extends IgxColumnSortDescription
{

protected createImplementation() : ColumnGroupDescription_internal
{
	return new ColumnGroupDescription_internal(0);
}
	/**
	                             * @hidden 
	                             */
	public get i() : ColumnGroupDescription_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets an INTL.DateTimeFormat or INTL.NumericFormat to use to format the value.
	*/
	get formatOverride() : any {
		return this.i.formatOverride as any;
	}
	set formatOverride(v: any) {
		this.i.formatOverride = v;
	}
	/**
	 * Gets or sets the display text for the group name.
	*/
	get displayName() : string {
		return (this.i.displayName as string);
	}
	set displayName(v: string) {
		this.i.displayName = v;
	}
	private _formatText: EventEmitter<{ sender: any, args: IgxFormatGroupTextEventArgs}> = null;
	/**
	 * Called when the value is being formatted.
	*/
	@Output()
	get formatText(): EventEmitter<{ sender: any, args: IgxFormatGroupTextEventArgs}> {
		if (this._formatText == null) {
			this._formatText = new EventEmitter<{sender: any, args: IgxFormatGroupTextEventArgs}>();
			this.i.formatText = delegateCombine(this.i.formatText, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFormatGroupTextEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeFormatText) {
	                        (this as any).beforeFormatText(this, outerArgs);
	                    }
					this._formatText.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._formatText;
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
