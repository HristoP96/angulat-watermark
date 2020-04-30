import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { delegateCombine, delegateRemove, Point } from './type';
import { ShapefileRecord as ShapefileRecord_internal } from "./ShapefileRecord";
import { ShapeType } from "./ShapeType";

/**
 * Represents a record of data from a Shapefile (.shp and .dbf).
*/
export class IgxShapefileRecord
{

    protected createImplementation() : ShapefileRecord_internal
    {
	    return new ShapefileRecord_internal();
    }
	protected _implementation: any;
	public get i() : ShapefileRecord_internal {
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
	 * Gets the shape type, as read from the header of the Shapefile.
	*/
	get shapeType() : ShapeType {
		return <ShapeType>this.i.shapeType;
	}
	/**
	 * Gets an array of field names and values for this record
	*/
	get fieldsNames() : string[] {
		return this.i.fieldsNames._inner;
	}
	/**
	 * Gets an arry of field types and values for this record
	*/
	get fieldsTypes() : string[] {
		return this.i.fieldsTypes._inner;
    }
	/**
	 * Gets an array of arrays of points for this record
	*/
    get points(): Point[][] {
        var ret: Point[][] = []
        var list = this.i.points;
        for (var i = 0; i < list.count; i++) {
            var innerlist = list.item(i);
            ret.push(list.item(i)._inner);
        }
        return ret;
    }

		get fieldValues() : any {
		return this.i.fieldValues as any;
	}
	set fieldValues(v: any) {
		this.i.fieldValues = v;
	}

	
}
