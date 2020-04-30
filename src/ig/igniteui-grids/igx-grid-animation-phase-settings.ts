import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { GridEasingFunctionType, GridEasingFunctionType_$type } from "./GridEasingFunctionType";
import { GridAnimationPhaseSettings as GridAnimationPhaseSettings_internal } from "./GridAnimationPhaseSettings";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * This class is used to group the settings to define an animation phase.
*/
export class IgxGridAnimationPhaseSettings
{

protected createImplementation() : GridAnimationPhaseSettings_internal
{
	return new GridAnimationPhaseSettings_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridAnimationPhaseSettings_internal {
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
	 * The duration of an animation, in milliseconds
	*/
	get durationMilliseconds() : number {
		return (this.i.durationMilliseconds as number);
	}
	set durationMilliseconds(v: number) {
		this.i.durationMilliseconds = +v;
	}
	/**
	 * The amount of time to delay an animation, in milliseconds.
	*/
	get holdInitialMilliseconds() : number {
		return (this.i.holdInitialMilliseconds as number);
	}
	set holdInitialMilliseconds(v: number) {
		this.i.holdInitialMilliseconds = +v;
	}
	/**
	 * The amount of time to delay each item animating, in milliseconds
	*/
	get perItemDelayMilliseconds() : number {
		return (this.i.perItemDelayMilliseconds as number);
	}
	set perItemDelayMilliseconds(v: number) {
		this.i.perItemDelayMilliseconds = +v;
	}
	/**
	 * The amount of time each item animating should take, in milliseconds
	*/
	get subItemDurationMilliseconds() : number {
		return (this.i.subItemDurationMilliseconds as number);
	}
	set subItemDurationMilliseconds(v: number) {
		this.i.subItemDurationMilliseconds = +v;
	}
	/**
	 * The desired amount of time each item animating should take, in milliseconds
	*/
	get desiredSubItemDurationMilliseconds() : number {
		return (this.i.desiredSubItemDurationMilliseconds as number);
	}
	set desiredSubItemDurationMilliseconds(v: number) {
		this.i.desiredSubItemDurationMilliseconds = +v;
	}
	/**
	 * Configures whether all items animating should finish simultaneously
	*/
	get shouldItemsFinishSimultaneously() : boolean {
		return (this.i.shouldItemsFinishSimultaneously as boolean);
	}
	set shouldItemsFinishSimultaneously(v: boolean) {
		this.i.shouldItemsFinishSimultaneously = ensureBool(v);
	}
	/**
	 * Configures the Easing function used to animate the individual items
	*/
	get easingFunctionType() : GridEasingFunctionType {
		return this.i.easingFunctionType;
	}
	set easingFunctionType(v: GridEasingFunctionType) {
		this.i.easingFunctionType = ensureEnum<GridEasingFunctionType>(GridEasingFunctionType_$type, v);
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
