import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { delegateCombine, delegateRemove } from './type';
import { ItfConverter as ItfConverter_internal } from "./ItfConverter";
import { IgxAsyncCompletedEventArgs } from './igx-async-completed-event-args';
import { Uri } from './Uri';
import { TriangulationSourcePointRecord } from './TriangulationSourcePointRecord';
import { List$1 } from './List$1';
import { Triangle } from './Triangle';

/**
 * Class for converting Itf files into enumerable triangulations.
*/
export class IgxTriangulationDataSource {

    protected createImplementation(): ItfConverter_internal {
        return new ItfConverter_internal();
    }
    protected _implementation: any;
    public get i(): ItfConverter_internal {
        return this._implementation;
    }
    private onImplementationCreated() {

    }
    constructor() {
        this._implementation = this.createImplementation();
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }
    protected _provideImplementation(i: any) {
        this._implementation = i;
        (<any>this._implementation).externalObject = this;
        this.onImplementationCreated();
    }

	/**
	 * Gets the string path specifying the location of the Itf file.
	*/
    get source(): string {
        if (this.i.source == null)
            return null;
        return this.i.source.value;
    }

	/**
	 * Sets the string path specifying the location of the Itf file.
	*/
    set source(v: string) {
        if (v == null) {
            this.i.source = null;
        } else {
            this.i.source = new Uri(0, v);
        }
    }

    /**
    * Gets the point data.
    */
    public getPointData(): TriangulationSourcePointRecord[] {
        let iv = this.i.getPointData();
        return iv._inner;
    }

    /**
    * Gets the triangle data.
    */
    public getTriangleData(): Triangle[] {
        let iv = this.i.getTriangleData();
        return iv._inner;
    }
    

    

    

    	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
    	private _importCompleted: EventEmitter<{ sender: any, args: IgxAsyncCompletedEventArgs}> = null;
	/**
	 * Event raised when the import operation has completed
	*/
	@Output()
	get importCompleted(): EventEmitter<{ sender: any, args: IgxAsyncCompletedEventArgs}> {
		if (this._importCompleted == null) {
			this._importCompleted = new EventEmitter<{sender: any, args: IgxAsyncCompletedEventArgs}>();
			this.i.importCompleted = delegateCombine(this.i.importCompleted, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxAsyncCompletedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeImportCompleted) {
	                        (this as any).beforeImportCompleted(this, outerArgs);
	                    }
					this._importCompleted.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._importCompleted;
	}
}
