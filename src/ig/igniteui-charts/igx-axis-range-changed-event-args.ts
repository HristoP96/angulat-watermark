import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { AxisRangeChangedEventArgs as AxisRangeChangedEventArgs_internal } from "./AxisRangeChangedEventArgs";

/**
 * Provides data for Axis RangeChanged events.
* 
* The `AxisRangeChangedEventArgs` event fire when the axis range changes.
*/
export class IgxAxisRangeChangedEventArgs
{

protected createImplementation() : AxisRangeChangedEventArgs_internal
{
	return new AxisRangeChangedEventArgs_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : AxisRangeChangedEventArgs_internal {
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
	 * Gets the minimum value before the range changed. The reported minimum is the effective,
	 * not the set value.
	* 
	* The `oldMinimumValue` property is used to gets the minimum value before the range changed.
	*/
	get oldMinimumValue() : number {
		return (this.i.oldMinimumValue as number);
	}
	set oldMinimumValue(v: number) {
		this.i.oldMinimumValue = +v;
	}
	/**
	 * Gets the minimum value after the range changed. The reported minimum is the effective,
	 * not the set value.
	* 
	* The `minimumValue` property is used to getsthe minimum value after the range changed.
	* 
	* ```ts
	*   public yAxisRangeChanged(sender : any, e: AxisRangeChangedEventArgs) :void {
	* 	let maxVal= e.maximumValue
	* 	let minVal= e.minimumValue
	* 
	*     } 
	* ```
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets the maximum value before the range changed. The reported maximum is the effective,
	 * not the set value.
	* 
	* The `oldMaximumValue` property is used to gets the maximum value before the range changed. 
	*/
	get oldMaximumValue() : number {
		return (this.i.oldMaximumValue as number);
	}
	set oldMaximumValue(v: number) {
		this.i.oldMaximumValue = +v;
	}
	/**
	 * Gets the maximum value after the range changed. The reported maximum is the effective,
	 * not the set value.
	* 
	* The `maximumValue` property is used to gets the maximum value after the range changed.
	* 
	* ```ts
	*   public yAxisRangeChanged(sender : any, e: AxisRangeChangedEventArgs) :void {
	* 	let maxVal= e.maximumValue
	* 	let minVal= e.minimumValue
	* 
	*     } 
	* ```
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
}
