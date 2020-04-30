/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { ICategoryScaler } from "./ICategoryScaler";
import { ISortingAxis } from "./ISortingAxis";
import { IScaler } from "./IScaler";
import { CategoryFrame } from "./CategoryFrame";

/**
 * @hidden 
 */
export class PreparationParams extends Base {
	static $t: Type = markType(PreparationParams, 'PreparationParams');
	private _firstBucket: number = 0;
	get firstBucket(): number {
		return this._firstBucket;
	}
	set firstBucket(value: number) {
		this._firstBucket = value;
	}
	private _lastBucket: number = 0;
	get lastBucket(): number {
		return this._lastBucket;
	}
	set lastBucket(value: number) {
		this._lastBucket = value;
	}
	private _bucketSize: number = 0;
	get bucketSize(): number {
		return this._bucketSize;
	}
	set bucketSize(value: number) {
		this._bucketSize = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _windowRect: Rect = null;
	get windowRect(): Rect {
		return this._windowRect;
	}
	set windowRect(value: Rect) {
		this._windowRect = value;
	}
	private _viewportRect: Rect = null;
	get viewportRect(): Rect {
		return this._viewportRect;
	}
	set viewportRect(value: Rect) {
		this._viewportRect = value;
	}
	private _effectiveViewportRect: Rect = null;
	get effectiveViewportRect(): Rect {
		return this._effectiveViewportRect;
	}
	set effectiveViewportRect(value: Rect) {
		this._effectiveViewportRect = value;
	}
	private _scaler: ICategoryScaler = null;
	get scaler(): ICategoryScaler {
		return this._scaler;
	}
	set scaler(value: ICategoryScaler) {
		this._scaler = value;
	}
	private _sortingScaler: ISortingAxis = null;
	get sortingScaler(): ISortingAxis {
		return this._sortingScaler;
	}
	set sortingScaler(value: ISortingAxis) {
		this._sortingScaler = value;
	}
	private _yScaler: IScaler = null;
	get yScaler(): IScaler {
		return this._yScaler;
	}
	set yScaler(value: IScaler) {
		this._yScaler = value;
	}
	private _frame: CategoryFrame = null;
	get frame(): CategoryFrame {
		return this._frame;
	}
	set frame(value: CategoryFrame) {
		this._frame = value;
	}
	private _isFragment: boolean = false;
	get isFragment(): boolean {
		return this._isFragment;
	}
	set isFragment(value: boolean) {
		this._isFragment = value;
	}
	private _useHighMarkerFidelity: boolean = false;
	get useHighMarkerFidelity(): boolean {
		return this._useHighMarkerFidelity;
	}
	set useHighMarkerFidelity(value: boolean) {
		this._useHighMarkerFidelity = value;
	}
}


