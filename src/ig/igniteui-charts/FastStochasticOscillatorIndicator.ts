/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { FastStochasticOscillatorIndicatorStrategy } from "./FastStochasticOscillatorIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Brush } from "igniteui-core/Brush";
import { FinancialIndicator } from "./FinancialIndicator";
import { TrendLineType } from "igniteui-core/TrendLineType";

/**
 * @hidden 
 */
export class FastStochasticOscillatorIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(FastStochasticOscillatorIndicator, 'FastStochasticOscillatorIndicator', (<any>StrategyBasedIndicator).$type);
	constructor() {
		super();
		this.trendLineBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#565656";
			return $ret;
		})());
		this.trendLineType = TrendLineType.ExponentialAverage;
		this.trendLinePeriod = 3;
	}
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new FastStochasticOscillatorIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>FastStochasticOscillatorIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(FastStochasticOscillatorIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(FastStochasticOscillatorIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(14, (<any>FastStochasticOscillatorIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


