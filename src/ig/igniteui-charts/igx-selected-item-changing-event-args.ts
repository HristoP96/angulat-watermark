import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSelectedItemChangedEventArgs } from "./igx-selected-item-changed-event-args";
import { SelectedItemChangingEventArgs as SelectedItemChangingEventArgs_internal } from "./SelectedItemChangingEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Provides data for the SelectedItemChanging event.
*/
export class IgxSelectedItemChangingEventArgs extends IgxSelectedItemChangedEventArgs
{


	/**
	                             * @hidden 
	                             */
	public get i() : SelectedItemChangingEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Set this to true in order to stop the SelectedItem from changing.
	*/
	get cancel() : boolean {
		return (this.i.cancel as boolean);
	}
	set cancel(v: boolean) {
		this.i.cancel = ensureBool(v);
	}
}
