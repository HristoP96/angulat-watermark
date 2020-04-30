import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { AsyncCompletedEventArgs as AsyncCompletedEventArgs_internal } from "./AsyncCompletedEventArgs";


export class IgxAsyncCompletedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : AsyncCompletedEventArgs_internal {
		return this._implementation;
	}

	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}

	private onImplementationCreated() {
		
	}

    get errorMessage() : string {
        if (this.i.error != null) {
            return this.i.error.message;
        }

        return null;
    }
	get cancelled() : boolean {
		return (this.i.cancelled as boolean);
	}
	get userState() : any {
		return this.i.userState as any;
	}




}