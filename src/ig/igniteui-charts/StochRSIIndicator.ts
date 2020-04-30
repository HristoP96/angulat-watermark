/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { StochRSIIndicatorStrategy } from "./StochRSIIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";

/**
 * @hidden 
 */
export class StochRSIIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(StochRSIIndicator, 'StochRSIIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new StochRSIIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>StochRSIIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(StochRSIIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(StochRSIIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(14, (<any>StochRSIIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


