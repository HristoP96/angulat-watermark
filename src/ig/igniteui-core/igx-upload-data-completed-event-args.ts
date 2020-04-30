import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { IgxAsyncCompletedEventArgs } from "./igx-async-completed-event-args";
import { UploadDataCompletedEventArgs as UploadDataCompletedEventArgs_internal } from "./UploadDataCompletedEventArgs";

export class IgxUploadDataCompletedEventArgs extends IgxAsyncCompletedEventArgs
{


	/**
	                             * @hidden 
	                             */
	public get i() : UploadDataCompletedEventArgs_internal {
		return this._implementation;
	}
	constructor() {
		super();
	}
	get result() : number[] {
		return this.i.result as number[];
	}
}
