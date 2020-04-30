/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TickmarkValues } from "./TickmarkValues";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { TickmarkValuesInitializationParameters } from "./TickmarkValuesInitializationParameters";
import { LogarithmicNumericSnapper } from "./LogarithmicNumericSnapper";
import { Type, Base, Number_$type, typeGetValue, markType } from "igniteui-core/type";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, logBase } from "igniteui-core/number";

/**
 * @hidden 
 */
export class LogarithmicTickmarkValues extends TickmarkValues {
	static $t: Type = markType(LogarithmicTickmarkValues, 'LogarithmicTickmarkValues', (<any>TickmarkValues).$type);
	private static readonly mINIMUM_VALUE_GREATER_THAN_ZERO: number = 4.94065645841247E-324;
	initialize(initializationParameters: TickmarkValuesInitializationParameters): void {
		super.initialize(initializationParameters);
		let snapper: LogarithmicNumericSnapper = new LogarithmicNumericSnapper(initializationParameters.visibleMinimum, initializationParameters.visibleMaximum, this.logarithmBase, initializationParameters.resolution);
		this.interval = 1;
		this.minorCount = <number>truncate(snapper.minorCount);
		this.firstIndex = <number>truncate(Math.floor(logBase(Math.max(LogarithmicTickmarkValues.mINIMUM_VALUE_GREATER_THAN_ZERO, initializationParameters.visibleMinimum), this.logarithmBase)));
		this.lastIndex = <number>truncate(Math.ceil(logBase(Math.max(LogarithmicTickmarkValues.mINIMUM_VALUE_GREATER_THAN_ZERO, initializationParameters.visibleMaximum), this.logarithmBase)));
	}
	private static readonly logarithmBasePropertyName: string = "LogarithmBase";
	static readonly logarithmBaseProperty: DependencyProperty = DependencyProperty.register(LogarithmicTickmarkValues.logarithmBasePropertyName, Number_$type, (<any>LogarithmicTickmarkValues).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
	}));
	get logarithmBase(): number {
		return typeGetValue(this.getValue(LogarithmicTickmarkValues.logarithmBaseProperty));
	}
	set logarithmBase(value: number) {
		this.setValue(LogarithmicTickmarkValues.logarithmBaseProperty, value);
	}
	private majorValueAt(tickIndex: number): number {
		let majorLog: number = tickIndex * this.interval;
		return Math.pow(this.logarithmBase, majorLog);
	}
	private _majorValues: number[] = null;
	majorValuesArray(): number[] {
		let firstIndex: number = this.firstIndex;
		let lastIndex: number = this.lastIndex;
		let visibleMaximum: number = this.visibleMaximum;
		let count: number = 0;
		for (let i: number = firstIndex; i <= lastIndex; ++i) {
			let major: number = this.majorValueAt(i);
			if (major <= visibleMaximum) {
				count++;
			}
		}
		if (this._majorValues == null || this._majorValues.length != count) {
			this._majorValues = <number[]>new Array(count);
		}
		let array: number[] = this._majorValues;
		let pos: number = 0;
		for (let i1: number = firstIndex; i1 <= lastIndex; ++i1) {
			let major1: number = this.majorValueAt(i1);
			if (major1 <= visibleMaximum) {
				array[pos] = major1;
				pos++;
			}
		}
		return array;
	}
	private _minorValues: number[] = null;
	minorValuesArray(): number[] {
		let firstIndex: number = this.firstIndex;
		let lastIndex: number = this.lastIndex;
		let logarithmBase: number = this.logarithmBase;
		let minorCount: number = this.minorCount;
		let visibleMaximum: number = this.visibleMaximum;
		let count: number = 0;
		for (let i: number = firstIndex; i <= lastIndex; ++i) {
			let majorValue: number = this.majorValueAt(i);
			let minorInterval: number = Math.pow(logarithmBase, i);
			for (let j: number = 1; j < this.minorCount - 1; ++j) {
				let minor: number = majorValue + j * minorInterval;
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
		for (let i1: number = firstIndex; i1 <= lastIndex; ++i1) {
			let majorValue1: number = this.majorValueAt(i1);
			let minorInterval1: number = Math.pow(logarithmBase, i1);
			for (let j1: number = 1; j1 < this.minorCount - 1; ++j1) {
				let minor1: number = majorValue1 + j1 * minorInterval1;
				if (minor1 <= visibleMaximum) {
					array[pos] = minor1;
					pos++;
				}
			}
		}
		return array;
	}
}


