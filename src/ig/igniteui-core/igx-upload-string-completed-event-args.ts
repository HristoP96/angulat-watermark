import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { IgxAsyncCompletedEventArgs } from "./igx-async-completed-event-args";
import { UploadStringCompletedEventArgs as UploadStringCompletedEventArgs_internal } from "./UploadStringCompletedEventArgs";

export class IgxUploadStringCompletedEventArgs extends IgxAsyncCompletedEventArgs
{


	/**
	                             * @hidden 
	                             */
	public get i() : UploadStringCompletedEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	get result() : string {
		return (this.i.result as string);
	}
}
