/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisDescription } from "./AxisDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class NumericAxisBaseDescription extends AxisDescription {
	static $t: Type = markType(NumericAxisBaseDescription, 'NumericAxisBaseDescription', (<any>AxisDescription).$type);
	protected get_type(): string {
		return "NumericAxisBase";
	}
	constructor() {
		super();
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _actualMinimumValue: number = 0;
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		this._actualMinimumValue = value;
		this.markDirty("ActualMinimumValue");
	}
	private _actualVisibleMinimumValue: number = 0;
	get actualVisibleMinimumValue(): number {
		return this._actualVisibleMinimumValue;
	}
	set actualVisibleMinimumValue(value: number) {
		this._actualVisibleMinimumValue = value;
		this.markDirty("ActualVisibleMinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _actualMaximumValue: number = 0;
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		this._actualMaximumValue = value;
		this.markDirty("ActualMaximumValue");
	}
	private _actualVisibleMaximumValue: number = 0;
	get actualVisibleMaximumValue(): number {
		return this._actualVisibleMaximumValue;
	}
	set actualVisibleMaximumValue(value: number) {
		this._actualVisibleMaximumValue = value;
		this.markDirty("ActualVisibleMaximumValue");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
	private _actualInterval: number = 0;
	get actualInterval(): number {
		return this._actualInterval;
	}
	set actualInterval(value: number) {
		this._actualInterval = value;
		this.markDirty("ActualInterval");
	}
	private _minorInterval: number = 0;
	get minorInterval(): number {
		return this._minorInterval;
	}
	set minorInterval(value: number) {
		this._minorInterval = value;
		this.markDirty("MinorInterval");
	}
	private _actualMinorInterval: number = 0;
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		this._actualMinorInterval = value;
		this.markDirty("ActualMinorInterval");
	}
	private _referenceValue: number = 0;
	get referenceValue(): number {
		return this._referenceValue;
	}
	set referenceValue(value: number) {
		this._referenceValue = value;
		this.markDirty("ReferenceValue");
	}
	private _isLogarithmic: boolean = false;
	get isLogarithmic(): boolean {
		return this._isLogarithmic;
	}
	set isLogarithmic(value: boolean) {
		this._isLogarithmic = value;
		this.markDirty("IsLogarithmic");
	}
	private _actualIsLogarithmic: boolean = false;
	get actualIsLogarithmic(): boolean {
		return this._actualIsLogarithmic;
	}
	set actualIsLogarithmic(value: boolean) {
		this._actualIsLogarithmic = value;
		this.markDirty("ActualIsLogarithmic");
	}
	private _logarithmBase: number = 0;
	get logarithmBase(): number {
		return this._logarithmBase;
	}
	set logarithmBase(value: number) {
		this._logarithmBase = value;
		this.markDirty("LogarithmBase");
	}
	private _abbreviateLargeNumbers: boolean = false;
	get abbreviateLargeNumbers(): boolean {
		return this._abbreviateLargeNumbers;
	}
	set abbreviateLargeNumbers(value: boolean) {
		this._abbreviateLargeNumbers = value;
		this.markDirty("AbbreviateLargeNumbers");
	}
}


