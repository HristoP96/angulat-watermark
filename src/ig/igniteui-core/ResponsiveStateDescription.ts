/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ResponsiveStateDescription extends Description {
	static $t: Type = markType(ResponsiveStateDescription, 'ResponsiveStateDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ResponsiveState";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _name1: string = null;
	get name(): string {
		return this._name1;
	}
	set name(value: string) {
		this._name1 = value;
		this.markDirty("Name");
	}
	private _minimumWidth: number = 0;
	get minimumWidth(): number {
		return this._minimumWidth;
	}
	set minimumWidth(value: number) {
		this._minimumWidth = value;
		this.markDirty("MinimumWidth");
	}
	private _maximumWidth: number = 0;
	get maximumWidth(): number {
		return this._maximumWidth;
	}
	set maximumWidth(value: number) {
		this._maximumWidth = value;
		this.markDirty("MaximumWidth");
	}
	private _isManualState: boolean = false;
	get isManualState(): boolean {
		return this._isManualState;
	}
	set isManualState(value: boolean) {
		this._isManualState = value;
		this.markDirty("IsManualState");
	}
	private _stateEntering: string = null;
	get stateEnteringRef(): string {
		return this._stateEntering;
	}
	set stateEnteringRef(value: string) {
		this._stateEntering = value;
		this.markDirty("StateEnteringRef");
	}
	private _stateEntered: string = null;
	get stateEnteredRef(): string {
		return this._stateEntered;
	}
	set stateEnteredRef(value: string) {
		this._stateEntered = value;
		this.markDirty("StateEnteredRef");
	}
	private _stateExited: string = null;
	get stateExitedRef(): string {
		return this._stateExited;
	}
	set stateExitedRef(value: string) {
		this._stateExited = value;
		this.markDirty("StateExitedRef");
	}
}


