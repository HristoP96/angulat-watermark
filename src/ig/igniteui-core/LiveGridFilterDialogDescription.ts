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
export class LiveGridFilterDialogDescription extends Description {
	static $t: Type = markType(LiveGridFilterDialogDescription, 'LiveGridFilterDialogDescription', (<any>Description).$type);
	protected get_type(): string {
		return "LiveGridFilterDialog";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _isAnimationEnabled: boolean = false;
	get isAnimationEnabled(): boolean {
		return this._isAnimationEnabled;
	}
	set isAnimationEnabled(value: boolean) {
		this._isAnimationEnabled = value;
		this.markDirty("IsAnimationEnabled");
	}
	private _pixelScalingRatio: number = 0;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
		this.markDirty("PixelScalingRatio");
	}
	private _actualPixelScalingRatio: number = 0;
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		this._actualPixelScalingRatio = value;
		this.markDirty("ActualPixelScalingRatio");
	}
	private _dialogOpening: string = null;
	get dialogOpeningRef(): string {
		return this._dialogOpening;
	}
	set dialogOpeningRef(value: string) {
		this._dialogOpening = value;
		this.markDirty("DialogOpeningRef");
	}
	private _filterChanging: string = null;
	get filterChangingRef(): string {
		return this._filterChanging;
	}
	set filterChangingRef(value: string) {
		this._filterChanging = value;
		this.markDirty("FilterChangingRef");
	}
	private _filterChanged: string = null;
	get filterChangedRef(): string {
		return this._filterChanged;
	}
	set filterChangedRef(value: string) {
		this._filterChanged = value;
		this.markDirty("FilterChangedRef");
	}
}


