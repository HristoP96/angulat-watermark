import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxResponsiveStateEnteringEventArgs } from "./igx-responsive-state-entering-event-args";
import { IgxResponsiveStateEnteredEventArgs } from "./igx-responsive-state-entered-event-args";
import { IgxResponsiveStateExitedEventArgs } from "./igx-responsive-state-exited-event-args";
import { IgxResponsivePhase } from "./igx-responsive-phase";
import { ResponsiveState as ResponsiveState_internal } from "./ResponsiveState";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Describes a state that the grid can enter based on a set of responsive conditions.
*/
export class IgxResponsiveState
{

protected createImplementation() : ResponsiveState_internal
{
	return new ResponsiveState_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ResponsiveState_internal {
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
	 * The name of the responsive state
	*/
	get name() : string {
		return (this.i.name as string);
	}
	set name(v: string) {
		this.i.name = v;
	}
	/**
	 * Gets or sets the minimum width for which this state is active.
	*/
	get minimumWidth() : number {
		return (this.i.minimumWidth as number);
	}
	set minimumWidth(v: number) {
		this.i.minimumWidth = +v;
	}
	/**
	 * Gets or sets the maximum width for which this state is active.
	*/
	get maximumWidth() : number {
		return (this.i.maximumWidth as number);
	}
	set maximumWidth(v: number) {
		this.i.maximumWidth = +v;
	}
	/**
	 * Configures this responsive state to only be manually actived
	*/
	get isManualState() : boolean {
		return (this.i.isManualState as boolean);
	}
	set isManualState(v: boolean) {
		this.i.isManualState = ensureBool(v);
	}
	/**
	 * Adds a responsive phase to the state.
	
	* @param phase  * The phase to add.
	*/
	public addResponsivePhase(phase: IgxResponsivePhase) : IgxResponsiveState {
		let iv = this.i.addResponsivePhase((phase == null ? null : phase.i));
		return (iv == null ? null : (iv as any).externalObject);
	}
	/**
	 * Adds a responsive phase to the state and returns it.
	
	*/
	public responsivePhase() : IgxResponsivePhase {
		let iv = this.i.responsivePhase();
		return (iv == null ? null : (iv as any).externalObject);
	}
	private _stateEntering: EventEmitter<{ sender: any, args: IgxResponsiveStateEnteringEventArgs}> = null;
	/**
	 * Called when a state is being entered.
	*/
	@Output()
	get stateEntering(): EventEmitter<{ sender: any, args: IgxResponsiveStateEnteringEventArgs}> {
		if (this._stateEntering == null) {
			this._stateEntering = new EventEmitter<{sender: any, args: IgxResponsiveStateEnteringEventArgs}>();
			this.i.stateEntering = delegateCombine(this.i.stateEntering, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxResponsiveStateEnteringEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeStateEntering) {
	                        (this as any).beforeStateEntering(this, outerArgs);
	                    }
					this._stateEntering.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._stateEntering;
	}
	private _stateEntered: EventEmitter<{ sender: any, args: IgxResponsiveStateEnteredEventArgs}> = null;
	/**
	 * Called when a state is entered.
	*/
	@Output()
	get stateEntered(): EventEmitter<{ sender: any, args: IgxResponsiveStateEnteredEventArgs}> {
		if (this._stateEntered == null) {
			this._stateEntered = new EventEmitter<{sender: any, args: IgxResponsiveStateEnteredEventArgs}>();
			this.i.stateEntered = delegateCombine(this.i.stateEntered, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxResponsiveStateEnteredEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeStateEntered) {
	                        (this as any).beforeStateEntered(this, outerArgs);
	                    }
					this._stateEntered.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._stateEntered;
	}
	private _stateExited: EventEmitter<{ sender: any, args: IgxResponsiveStateExitedEventArgs}> = null;
	/**
	 * Called when a state is exited.
	*/
	@Output()
	get stateExited(): EventEmitter<{ sender: any, args: IgxResponsiveStateExitedEventArgs}> {
		if (this._stateExited == null) {
			this._stateExited = new EventEmitter<{sender: any, args: IgxResponsiveStateExitedEventArgs}>();
			this.i.stateExited = delegateCombine(this.i.stateExited, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxResponsiveStateExitedEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeStateExited) {
	                        (this as any).beforeStateExited(this, outerArgs);
	                    }
					this._stateExited.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._stateExited;
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
