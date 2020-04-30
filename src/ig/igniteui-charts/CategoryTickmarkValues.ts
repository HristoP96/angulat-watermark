/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TickmarkValues } from "./TickmarkValues";
import { CategoryMode } from "./CategoryMode";
import { Rect } from "igniteui-core/Rect";
import { Base, Type, markType } from "igniteui-core/type";
import { TickmarkValuesInitializationParameters } from "./TickmarkValuesInitializationParameters";
import { LinearCategorySnapper } from "./LinearCategorySnapper";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryTickmarkValues extends TickmarkValues {
	static $t: Type = markType(CategoryTickmarkValues, 'CategoryTickmarkValues', (<any>TickmarkValues).$type);
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
	private _getUnscaledGroupCenter: (index: number) => number = null;
	get getUnscaledGroupCenter(): (index: number) => number {
		return this._getUnscaledGroupCenter;
	}
	set getUnscaledGroupCenter(value: (index: number) => number) {
		this._getUnscaledGroupCenter = value;
	}
	initialize(initializationParameters: TickmarkValuesInitializationParameters): void {
		super.initialize(initializationParameters);
		let mode = initializationParameters.mode;
		this.mode = mode;
		this.mode2GroupCount = initializationParameters.mode2GroupCount;
		this.viewport = initializationParameters.viewport;
		this.window = initializationParameters.window;
		this.isInverted = initializationParameters.isInverted;
		this.getUnscaledGroupCenter = initializationParameters.getUnscaledGroupCenter;
		let snapper: LinearCategorySnapper = new LinearCategorySnapper(1, initializationParameters.visibleMinimum, initializationParameters.visibleMaximum, initializationParameters.resolution, initializationParameters.userInterval, mode, initializationParameters.heuristicResolution);
		let interval = snapper.interval;
		if (initializationParameters.intervalOverride != -1) {
			interval = initializationParameters.intervalOverride;
		}
		let firstValue: number = Math.floor((initializationParameters.visibleMinimum - initializationParameters.actualMinimum) / interval);
		let lastValue: number = Math.ceil((initializationParameters.visibleMaximum - initializationParameters.actualMinimum) / interval);
		let first = <number>truncate(firstValue);
		let last = <number>truncate(lastValue);
		let minorCount = <number>truncate(snapper.minorCount);
		if (initializationParameters.minorCountOverride != -1) {
			minorCount = initializationParameters.minorCountOverride;
		}
		this.interval = interval;
		this.minorInterval = initializationParameters.minorInterval;
		this.firstIndex = first;
		this.lastIndex = last;
		this.minorCount = minorCount;
		this.actualMinimum = initializationParameters.actualMinimum;
	}
	private _actualMinimum: number = 0;
	private get actualMinimum(): number {
		return this._actualMinimum;
	}
	private set actualMinimum(value: number) {
		this._actualMinimum = value;
	}
	private _majorValues: number[] = null;
	majorValuesArray(): number[] {
		let firstIndex: number = this.firstIndex;
		let count: number = this.lastIndex - firstIndex + 1;
		if (count < 0) {
			count = 0;
		}
		if (this._majorValues == null || this._majorValues.length != count) {
			this._majorValues = <number[]>new Array(count);
		}
		let array: number[] = this._majorValues;
		for (let i: number = 0; i < count; ++i) {
			let major: number = this.actualMinimum + (i + firstIndex) * this.interval;
			array[i] = major;
		}
		return array;
	}
	private _minorValues: number[] = null;
	minorValuesArray(): number[] {
		let interval: number = this.interval;
		let lastIndex: number = this.lastIndex;
		let firstIndex: number = this.firstIndex;
		let mode2GroupCount: number = this.mode2GroupCount;
		let mode: CategoryMode = this.mode;
		interval = Math.min(interval, 20);
		let count: number = 0;
		for (let i: number = firstIndex; i < lastIndex; ++i) {
			if (mode != CategoryMode.Mode0 && mode2GroupCount != 0) {
				for (let categoryNumber: number = 0; categoryNumber < <number>truncate(interval); categoryNumber++) {
					for (let groupNumber: number = 0; groupNumber < mode2GroupCount; groupNumber++) {
						count++;
					}
				}
			}
		}
		if (this._minorValues == null || this._minorValues.length != count) {
			this._minorValues = <number[]>new Array(count);
		}
		let array: number[] = this._minorValues;
		let pos: number = 0;
		for (let i1: number = firstIndex; i1 < lastIndex; ++i1) {
			if (mode != CategoryMode.Mode0 && mode2GroupCount != 0) {
				for (let categoryNumber1: number = 0; categoryNumber1 < <number>truncate(interval); categoryNumber1++) {
					for (let groupNumber1: number = 0; groupNumber1 < mode2GroupCount; groupNumber1++) {
						let center: number = this.getUnscaledGroupCenter(groupNumber1);
						let minorValue: number = categoryNumber1 + (i1 * interval) + center;
						array[pos] = minorValue;
						pos++;
					}
				}
			}
		}
		return this._minorValues;
	}
}


