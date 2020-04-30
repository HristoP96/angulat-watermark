/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IShortPeriodLongPeriod, IShortPeriodLongPeriod_$type } from "./IShortPeriodLongPeriod";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { PercentagePriceOscillatorIndicatorStrategy } from "./PercentagePriceOscillatorIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";

/**
 * @hidden 
 */
export class PercentagePriceOscillatorIndicator extends StrategyBasedIndicator implements IShortPeriodLongPeriod {
	static $t: Type = markType(PercentagePriceOscillatorIndicator, 'PercentagePriceOscillatorIndicator', (<any>StrategyBasedIndicator).$type, [IShortPeriodLongPeriod_$type]);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new PercentagePriceOscillatorIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>PercentagePriceOscillatorIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get shortPeriod(): number {
		return typeGetValue(this.getValue(PercentagePriceOscillatorIndicator.shortPeriodProperty));
	}
	set shortPeriod(value: number) {
		this.setValue(PercentagePriceOscillatorIndicator.shortPeriodProperty, value);
	}
	static readonly shortPeriodProperty: DependencyProperty = StrategyBasedIndicator.createShortPeriodProperty(10, (<any>PercentagePriceOscillatorIndicator).$type);
	protected shortPeriodOverride(): number {
		return this.shortPeriod;
	}
	get longPeriod(): number {
		return typeGetValue(this.getValue(PercentagePriceOscillatorIndicator.longPeriodProperty));
	}
	set longPeriod(value: number) {
		this.setValue(PercentagePriceOscillatorIndicator.longPeriodProperty, value);
	}
	static readonly longPeriodProperty: DependencyProperty = StrategyBasedIndicator.createLongPeriodProperty(30, (<any>PercentagePriceOscillatorIndicator).$type);
	protected longPeriodOverride(): number {
		return this.longPeriod;
	}
}


