import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnPropertySetter } from "./igx-column-property-setter";
import { IgxColumnExchanger } from "./igx-column-exchanger";
import { ResponsivePhase as ResponsivePhase_internal } from "./ResponsivePhase";

/**
 * Describes one phase of a responsive state to apply to the grid.
*/
export class IgxResponsivePhase
{

protected createImplementation() : ResponsivePhase_internal
{
	return new ResponsivePhase_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ResponsivePhase_internal {
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
	 * The name of this responsive phase
	*/
	get name() : string {
		return (this.i.name as string);
	}
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * The amount of time to delay the responsive phase from starting, in milliseconds
	*/
	get delayMilliseconds() : number {
		return (this.i.delayMilliseconds as number);
	}
	set delayMilliseconds(v: number) {
		this.i.delayMilliseconds = +v;
	}
	/**
	 * Adds a column property setter to the phase.
	
	* @param setter  * The setter to add.
	*/
	public addColumnPropertySetter(setter: IgxColumnPropertySetter) : IgxResponsivePhase {
		let iv = this.i.addColumnPropertySetter((setter == null ? null : setter.i));
		return (iv == null ? null : (iv as any).externalObject);
	}
	/**
	 * Adds a column property setter to the phase, and returns it.
	
	*/
	public columnPropertySetter() : IgxColumnPropertySetter {
		let iv = this.i.columnPropertySetter();
		return (iv == null ? null : (iv as any).externalObject);
	}
	/**
	 * Adds a column exchanger the the phase.
	
	* @param exchanger  * The exchanger to add.
	*/
	public addColumnExchanger(exchanger: IgxColumnExchanger) : IgxResponsivePhase {
		let iv = this.i.addColumnExchanger((exchanger == null ? null : exchanger.i));
		return (iv == null ? null : (iv as any).externalObject);
	}
	/**
	 * Adds a column exchanger to the phase and returns it.
	
	*/
	public columnExchanger() : IgxResponsivePhase {
		let iv = this.i.columnExchanger();
		return (iv == null ? null : (iv as any).externalObject);
	}
}
