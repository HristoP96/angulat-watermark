import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { delegateCombine, delegateRemove } from './type';
import { ShapefileConverter as ShapefileConverter_internal } from "./ShapefileConverter";
import { fromRect, toRect, ensureBool } from "./componentUtil";
import { ShapeType } from "./ShapeType";
import { Header } from "./Header";
import { IgxAsyncCompletedEventArgs } from './igx-async-completed-event-args';
import { Uri } from './Uri';
import { List$1 } from './List$1';
import { IgxShapefileRecord } from './igx-shapefile-record';
import { IgxShapeFilterRecordEventArgs } from './igx-shape-filter-record-event-args';


/**
 * Class used to convert Shapefiles into CLR objects.
*/
export class IgxShapeDataSource {

    protected createImplementation(): ShapefileConverter_internal {
        return new ShapefileConverter_internal();
    }
    protected _implementation: any;
    public get i(): ShapefileConverter_internal {
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

 //   private _databaseSource: string;
	///**
	// * Gets the string Uri path of the .dbf portion of the Shapefile
	//*/
 //   get databaseSource(): string {
 //       return this._databaseSource;
 //   }

	///**
	// * Sets the string Uri path of the .dbf portion of the Shapefile
	//*/
 //   set databaseSource(v: string) {
 //       this._databaseSource = v;
 //   }

 //   private _shapefileSource: string;
	///**
	// * Gets the string Uri path of the .shp portion of the Shapefile
	//*/
 //   get shapefileSource(): string {
 //       return this._shapefileSource;
 //   }

	///**
	// * Sets the string Uri path of the .shp portion of the Shapefile
	//*/
 //   set shapefileSource(v: string) {
 //       this._shapefileSource = v;
 //   }

    public dataBind() {
        //this.i.shapefileSource = null;
        //this.i.databaseSource = null;

        //if (this._shapefileSource && this._databaseSource) {
        //    this.i.shapefileSource = new Uri(0, this._shapefileSource);
        //    this.i.databaseSource = new Uri(0, this._databaseSource);
        //}
    }

    /**
    * Gets the point data.
    */
    public getPointData(): IgxShapefileRecord[] {
        let list = this.i.getPointData();
        let ret: IgxShapefileRecord[] = [];
        for (var i = 0; i < list.count; i++) {
            var shapeRecord = list.item(i);
            if (!(<any>shapeRecord).externalObject) {
                let e = new IgxShapefileRecord();
                (<any>e)._implementation = shapeRecord;
                (<any>shapeRecord).externalObject = e;
            }
            ret.push((<any>shapeRecord).externalObject);
        }
        return ret;
    }
		/**
	 * Gets the world bounding rectangle, as read from the header of the Shapefile.
	*/
	get worldRect() : IgRect {
		return fromRect(this.i.worldRect);
	}
	set worldRect(v: IgRect) {
		this.i.worldRect = toRect(v);
	}
	/**
	 * Gets the world bounding rectangle, based on the filtered shapes
	*/
	get computedWorldRect() : IgRect {
		return fromRect(this.i.computedWorldRect);
	}
	set computedWorldRect(v: IgRect) {
		this.i.computedWorldRect = toRect(v);
	}
	/**
	 * Gets the shape type, as read from the header of the Shapefile.
	*/
	get shapeType() : ShapeType {
		return this.i.shapeType as ShapeType;
	}
	/**
	 * Gets the header of the Shapefile.
	*/
	get shapeHeader() : Header {
		return this.i.shapeHeader as Header;
	}
	set shapeHeader(v: Header) {
		this.i.shapeHeader = v;
	}
	/**
	 * The Uri of the .shp portion of the Shapefile.
	*/
	get shapefileSource() : string {
		return (this.i.shapefileSource as string);
	}
	set shapefileSource(v: string) {
		this.i.shapefileSource = v;
	}
	/**
	 * The Uri of the .dbf portion of the Shapefile.
	*/
	get databaseSource() : string {
		return (this.i.databaseSource as string);
	}
	set databaseSource(v: string) {
		this.i.databaseSource = v;
	}
	/**
	 * The total number of ShapefileRecords in the collection.
	*/
	get count() : number {
		return (this.i.count as number);
	}

		public getWorldBounds(useComputed: boolean) : IgRect {
		let iv = this.i.getWorldBounds(useComputed);
		return fromRect(iv);
	}
	public getRecord(index: number) : IgxShapefileRecord {
		let iv = this.i.getRecord(index);
		return (iv == null ? null : (iv as any).externalObject);
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
	 * Event raised when the Shapefile has been imported from both the ShapefileSource and DatabaseSource Uris.
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
	private _filter: EventEmitter<{ sender: any, args: IgxShapeFilterRecordEventArgs}> = null;
	@Output()
	get filter(): EventEmitter<{ sender: any, args: IgxShapeFilterRecordEventArgs}> {
		if (this._filter == null) {
			this._filter = new EventEmitter<{sender: any, args: IgxShapeFilterRecordEventArgs}>();
			this.i.filter = delegateCombine(this.i.filter, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxShapeFilterRecordEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeFilter) {
	                        (this as any).beforeFilter(this, outerArgs);
	                    }
					this._filter.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._filter;
	}
}
