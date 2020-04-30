/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "igniteui-core/DependencyObject";
import { TickmarkValuesInitializationParameters } from "./TickmarkValuesInitializationParameters";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class TickmarkValues extends DependencyObject {
	static $t: Type = markType(TickmarkValues, 'TickmarkValues', (<any>DependencyObject).$type);
	initialize(initializationParameters: TickmarkValuesInitializationParameters): void {
		this.visibleMaximum = initializationParameters.visibleMaximum;
	}
	private _visibleMaximum: number = 0;
	protected get visibleMaximum(): number {
		return this._visibleMaximum;
	}
	protected set visibleMaximum(value: number) {
		this._visibleMaximum = value;
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
	}
	private _minorInterval: number = 0;
	get minorInterval(): number {
		return this._minorInterval;
	}
	set minorInterval(value: number) {
		this._minorInterval = value;
	}
	private _actualMinorInterval: number = 0;
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		this._actualMinorInterval = value;
	}
	private _firstIndex: number = 0;
	get firstIndex(): number {
		return this._firstIndex;
	}
	set firstIndex(value: number) {
		this._firstIndex = value;
	}
	private _lastIndex: number = 0;
	get lastIndex(): number {
		return this._lastIndex;
	}
	set lastIndex(value: number) {
		this._lastIndex = value;
	}
	abstract majorValuesArray(): number[];
	abstract minorValuesArray(): number[];
	private _minorCount: number = 0;
	get minorCount(): number {
		return this._minorCount;
	}
	set minorCount(value: number) {
		this._minorCount = value;
	}
}


