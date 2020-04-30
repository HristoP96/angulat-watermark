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
export class GridAnimationPhaseSettingsDescription extends Description {
	static $t: Type = markType(GridAnimationPhaseSettingsDescription, 'GridAnimationPhaseSettingsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridAnimationPhaseSettings";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _durationMilliseconds: number = 0;
	get durationMilliseconds(): number {
		return this._durationMilliseconds;
	}
	set durationMilliseconds(value: number) {
		this._durationMilliseconds = value;
		this.markDirty("DurationMilliseconds");
	}
	private _holdInitialMilliseconds: number = 0;
	get holdInitialMilliseconds(): number {
		return this._holdInitialMilliseconds;
	}
	set holdInitialMilliseconds(value: number) {
		this._holdInitialMilliseconds = value;
		this.markDirty("HoldInitialMilliseconds");
	}
	private _perItemDelayMilliseconds: number = 0;
	get perItemDelayMilliseconds(): number {
		return this._perItemDelayMilliseconds;
	}
	set perItemDelayMilliseconds(value: number) {
		this._perItemDelayMilliseconds = value;
		this.markDirty("PerItemDelayMilliseconds");
	}
	private _subItemDurationMilliseconds: number = 0;
	get subItemDurationMilliseconds(): number {
		return this._subItemDurationMilliseconds;
	}
	set subItemDurationMilliseconds(value: number) {
		this._subItemDurationMilliseconds = value;
		this.markDirty("SubItemDurationMilliseconds");
	}
	private _desiredSubItemDurationMilliseconds: number = 0;
	get desiredSubItemDurationMilliseconds(): number {
		return this._desiredSubItemDurationMilliseconds;
	}
	set desiredSubItemDurationMilliseconds(value: number) {
		this._desiredSubItemDurationMilliseconds = value;
		this.markDirty("DesiredSubItemDurationMilliseconds");
	}
	private _shouldItemsFinishSimultaneously: boolean = false;
	get shouldItemsFinishSimultaneously(): boolean {
		return this._shouldItemsFinishSimultaneously;
	}
	set shouldItemsFinishSimultaneously(value: boolean) {
		this._shouldItemsFinishSimultaneously = value;
		this.markDirty("ShouldItemsFinishSimultaneously");
	}
	private _easingFunctionType: string = null;
	get easingFunctionType(): string {
		return this._easingFunctionType;
	}
	set easingFunctionType(value: string) {
		this._easingFunctionType = value;
		this.markDirty("EasingFunctionType");
	}
}


