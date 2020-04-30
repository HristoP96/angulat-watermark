import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ColumnSortDescription as ColumnSortDescription_internal } from "./ColumnSortDescription";
import { ListSortDirection } from "igniteui-core/ListSortDirection";

/**
 * Represents an element in the current sort applied to a data source or provider. Changes to this object are not observed or expected after it is initially assigned to a collection.
*/
export class IgxColumnSortDescription
{

protected createImplementation() : ColumnSortDescription_internal
{
	return new ColumnSortDescription_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnSortDescription_internal {
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
	 * Gets or sets the property being sorted.
	*/
	get propertyPath() : string {
		return (this.i.propertyPath as string);
	}
	set propertyPath(v: string) {
		this.i.propertyPath = v;
	}
	/**
	 * Gets or sets the direction to sort based on the property.
	*/
	get sortDirection() : ListSortDirection {
		return this.i.sortDirection as ListSortDirection;
	}
	set sortDirection(v: ListSortDirection) {
		this.i.sortDirection = v;
	}
	/**
	 * Returns if the SortDescription is equal to another.
	
	* @param other  * The SortDescription to compare to.
	*/
	public equals(other: any) : boolean {
		let iv = this.i.equals(other);
		return (iv);
	}
	/**
	 * Returns the hash code for the SortDescription.
	
	*/
	public getHashCode() : number {
		let iv = this.i.getHashCode();
		return (iv);
	}
}
