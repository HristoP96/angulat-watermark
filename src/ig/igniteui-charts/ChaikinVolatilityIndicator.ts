/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { ChaikinVolatilityIndicatorStrategy } from "./ChaikinVolatilityIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";

/**
 * @hidden 
 */
export class ChaikinVolatilityIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(ChaikinVolatilityIndicator, 'ChaikinVolatilityIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new ChaikinVolatilityIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>ChaikinVolatilityIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(ChaikinVolatilityIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(ChaikinVolatilityIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(10, (<any>ChaikinVolatilityIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


