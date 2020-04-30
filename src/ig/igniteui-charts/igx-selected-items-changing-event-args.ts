import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSelectedItemsChangedEventArgs } from "./igx-selected-items-changed-event-args";
import { SelectedItemsChangingEventArgs as SelectedItemsChangingEventArgs_internal } from "./SelectedItemsChangingEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Provides data for the SelectedItemsChanging event.
*/
export class IgxSelectedItemsChangingEventArgs extends IgxSelectedItemsChangedEventArgs
{


	/**
	                             * @hidden 
	                             */
	public get i() : SelectedItemsChangingEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Set this to true in order to stop the SelectedItems collection from changing.
	*/
	get cancel() : boolean {
		return (this.i.cancel as boolean);
	}
	set cancel(v: boolean) {
		this.i.cancel = ensureBool(v);
	}
}
