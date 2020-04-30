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
export class LiveGridSortIndicatorDescription extends Description {
	static $t: Type = markType(LiveGridSortIndicatorDescription, 'LiveGridSortIndicatorDescription', (<any>Description).$type);
	protected get_type(): string {
		return "LiveGridSortIndicator";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _sortDirection: string = null;
	get sortDirection(): string {
		return this._sortDirection;
	}
	set sortDirection(value: string) {
		this._sortDirection = value;
		this.markDirty("SortDirection");
	}
	private _iconColor: string = null;
	get iconColor(): string {
		return this._iconColor;
	}
	set iconColor(value: string) {
		this._iconColor = value;
		this.markDirty("IconColor");
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
	private _sortIndicatorStyle: string = null;
	get sortIndicatorStyle(): string {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: string) {
		this._sortIndicatorStyle = value;
		this.markDirty("SortIndicatorStyle");
	}
	private _renderCompleted: string = null;
	get renderCompletedRef(): string {
		return this._renderCompleted;
	}
	set renderCompletedRef(value: string) {
		this._renderCompleted = value;
		this.markDirty("RenderCompletedRef");
	}
}


