/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TickmarkValues } from "./TickmarkValues";
import { TickmarkValuesInitializationParameters } from "./TickmarkValuesInitializationParameters";
import { LinearNumericSnapper } from "./LinearNumericSnapper";
import { Base, Type, markType } from "igniteui-core/type";
import { truncate, isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class LinearTickmarkValues extends TickmarkValues {
	static $t: Type = markType(LinearTickmarkValues, 'LinearTickmarkValues', (<any>TickmarkValues).$type);
	constructor() {
		super();
		this.minTicks = 0;
	}
	private _minTicks: number = 0;
	get minTicks(): number {
		return this._minTicks;
	}
	set minTicks(value: number) {
		this._minTicks = value;
	}
	initialize(initializationParameters: TickmarkValuesInitializationParameters): void {
		super.initialize(initializationParameters);
		let snapper: LinearNumericSnapper;
		if (this.minTicks != 0) {
			snapper = new LinearNumericSnapper(1, initializationParameters.visibleMinimum, initializationParameters.visibleMaximum, initializationParameters.resolution, this.minTicks, initializationParameters.heuristicResolution);
		} else {
			snapper = new LinearNumericSnapper(0, initializationParameters.visibleMinimum, initializationParameters.visibleMaximum, initializationParameters.resolution, initializationParameters.heuristicResolution);
		}
		this.interval = snapper.interval;
		if ((initializationParameters.hasUserInterval) && initializationParameters.userInterval > 0 && (initializationParameters.visibleMaximum - initializationParameters.visibleMinimum) / initializationParameters.userInterval < 1000) {
			this.interval = initializationParameters.userInterval;
		}
		if (initializationParameters.intervalOverride != -1) {
			this.interval = initializationParameters.intervalOverride;
		}
		if (this.interval == 0) {
			this.firstIndex = 0;
			this.lastIndex = 0;
		} else {
			this.firstIndex = <number>truncate(Math.floor((initializationParameters.visibleMinimum - initializationParameters.actualMinimum) / this.interval));
			this.lastIndex = <number>truncate(Math.ceil((initializationParameters.visibleMaximum - initializationParameters.actualMinimum) / this.interval));
		}
		this.minorCount = snapper.minorCount;
		if (initializationParameters.minorCountOverride != -1) {
			this.minorCount = initializationParameters.minorCountOverride;
		}
		this.minorInterval = initializationParameters.minorInterval;
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
		let count: number = 0;
		let firstIndex: number = this.firstIndex;
		if (!isNaN_(this.interval)) {
			count = this.lastIndex - firstIndex + 1;
			if (count < 0) {
				count = 0;
			}
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
		if (this.minorInterval > 0) {
			return this.getMinorValuesWithCustomInterval();
		}
		return this.getMinorValues();
	}
	private getMinorValues(): number[] {
		let firstIndex: number = this.firstIndex;
		let lastIndex: number = this.lastIndex;
		let minorCount: number = this.minorCount;
		let interval: number = this.interval;
		let actualMinimum: number = this.actualMinimum;
		let visibleMaximum: number = this.visibleMaximum;
		let minorSpan: number = interval / minorCount;
		let count: number = 0;
		for (let i: number = firstIndex; i < lastIndex; ++i) {
			for (let j: number = 1; j < minorCount; ++j) {
				let minor: number = actualMinimum + i * interval + (j * minorSpan);
				if (minor <= visibleMaximum) {
					count++;
				}
			}
		}
		if (this._minorValues == null || this._minorValues.length != count) {
			this._minorValues = <number[]>new Array(count);
		}
		let array: number[] = this._minorValues;
		let pos: number = 0;
		for (let i1: number = firstIndex; i1 < lastIndex; ++i1) {
			for (let j1: number = 1; j1 < minorCount; ++j1) {
				let minor1: number = actualMinimum + i1 * interval + (j1 * minorSpan);
				if (minor1 <= this.visibleMaximum) {
					array[pos] = minor1;
					pos++;
				}
			}
		}
		return array;
	}
	private getMinorValuesWithCustomInterval(): number[] {
		let firstIndex: number = this.firstIndex;
		let lastIndex: number = this.lastIndex;
		let minorCount: number = this.minorCount;
		let interval: number = this.interval;
		let actualMinimum: number = this.actualMinimum;
		let visibleMaximum: number = this.visibleMaximum;
		let minorSpan: number = interval / minorCount;
		let count: number = 0;
		for (let i: number = firstIndex; i < lastIndex; ++i) {
			let curValue: number = actualMinimum + i * this.interval;
			let nextMajor: number = this.visibleMaximum;
			if (i + 1 <= this.lastIndex) {
				nextMajor = this.actualMinimum + ((i + 1) * this.interval);
			}
			if (nextMajor > this.visibleMaximum) {
				nextMajor = this.visibleMaximum;
			}
			while (curValue < nextMajor) {
				curValue += this.minorInterval;
				if (curValue < nextMajor) {
					count++;
				}
			}
		}
		if (this._minorValues == null || this._minorValues.length != count) {
			this._minorValues = <number[]>new Array(count);
		}
		let array: number[] = this._minorValues;
		let pos: number = 0;
		for (let i1: number = firstIndex; i1 < lastIndex; ++i1) {
			let curValue1: number = actualMinimum + i1 * this.interval;
			let nextMajor1: number = this.visibleMaximum;
			if (i1 + 1 <= this.lastIndex) {
				nextMajor1 = this.actualMinimum + ((i1 + 1) * this.interval);
			}
			if (nextMajor1 > this.visibleMaximum) {
				nextMajor1 = this.visibleMaximum;
			}
			while (curValue1 < nextMajor1) {
				curValue1 += this.minorInterval;
				if (curValue1 < nextMajor1) {
					array[pos] = curValue1;
					pos++;
				}
			}
		}
		return array;
	}
}


