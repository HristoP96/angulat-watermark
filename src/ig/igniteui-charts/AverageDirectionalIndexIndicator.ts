/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { AverageDirectionalIndexIndicatorStrategy } from "./AverageDirectionalIndexIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";

/**
 * @hidden 
 */
export class AverageDirectionalIndexIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(AverageDirectionalIndexIndicator, 'AverageDirectionalIndexIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new AverageDirectionalIndexIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>AverageDirectionalIndexIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(AverageDirectionalIndexIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(AverageDirectionalIndexIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(14, (<any>AverageDirectionalIndexIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


