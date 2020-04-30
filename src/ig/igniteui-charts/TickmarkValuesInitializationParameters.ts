/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { CategoryMode } from "./CategoryMode";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class TickmarkValuesInitializationParameters extends Base {
	static $t: Type = markType(TickmarkValuesInitializationParameters, 'TickmarkValuesInitializationParameters');
	private _visibleMinimum: number = 0;
	get visibleMinimum(): number {
		return this._visibleMinimum;
	}
	set visibleMinimum(value: number) {
		this._visibleMinimum = value;
	}
	private _visibleMaximum: number = 0;
	get visibleMaximum(): number {
		return this._visibleMaximum;
	}
	set visibleMaximum(value: number) {
		this._visibleMaximum = value;
	}
	private _actualMinimum: number = 0;
	get actualMinimum(): number {
		return this._actualMinimum;
	}
	set actualMinimum(value: number) {
		this._actualMinimum = value;
	}
	private _actualMaximum: number = 0;
	get actualMaximum(): number {
		return this._actualMaximum;
	}
	set actualMaximum(value: number) {
		this._actualMaximum = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _hasUserInterval: boolean = false;
	get hasUserInterval(): boolean {
		return this._hasUserInterval;
	}
	set hasUserInterval(value: boolean) {
		this._hasUserInterval = value;
	}
	private _userInterval: number = 0;
	get userInterval(): number {
		return this._userInterval;
	}
	set userInterval(value: number) {
		this._userInterval = value;
	}
	private _intervalOverride: number = 0;
	get intervalOverride(): number {
		return this._intervalOverride;
	}
	set intervalOverride(value: number) {
		this._intervalOverride = value;
	}
	private _minorCountOverride: number = 0;
	get minorCountOverride(): number {
		return this._minorCountOverride;
	}
	set minorCountOverride(value: number) {
		this._minorCountOverride = value;
	}
	private _mode: CategoryMode = <CategoryMode>0;
	get mode(): CategoryMode {
		return this._mode;
	}
	set mode(value: CategoryMode) {
		this._mode = value;
	}
	private _mode2GroupCount: number = 0;
	get mode2GroupCount(): number {
		return this._mode2GroupCount;
	}
	set mode2GroupCount(value: number) {
		this._mode2GroupCount = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _isInverted: boolean = false;
	get isInverted(): boolean {
		return this._isInverted;
	}
	set isInverted(value: boolean) {
		this._isInverted = value;
	}
	private _getScaledValue: (arg1: number, arg2: Rect, arg3: Rect) => number = null;
	get getScaledValue(): (arg1: number, arg2: Rect, arg3: Rect) => number {
		return this._getScaledValue;
	}
	set getScaledValue(value: (arg1: number, arg2: Rect, arg3: Rect) => number) {
		this._getScaledValue = value;
	}
	private _getGroupCenter: (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number = null;
	get getGroupCenter(): (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number {
		return this._getGroupCenter;
	}
	set getGroupCenter(value: (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number) {
		this._getGroupCenter = value;
	}
	private _getUnscaledGroupCenter: (index: number) => number = null;
	get getUnscaledGroupCenter(): (index: number) => number {
		return this._getUnscaledGroupCenter;
	}
	set getUnscaledGroupCenter(value: (index: number) => number) {
		this._getUnscaledGroupCenter = value;
	}
	private _minorInterval: number = 0;
	get minorInterval(): number {
		return this._minorInterval;
	}
	set minorInterval(value: number) {
		this._minorInterval = value;
	}
	private _heuristicResolution: number = 0;
	get heuristicResolution(): number {
		return this._heuristicResolution;
	}
	set heuristicResolution(value: number) {
		this._heuristicResolution = value;
	}
}


