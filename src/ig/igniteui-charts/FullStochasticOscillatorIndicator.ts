/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { FullStochasticOscillatorIndicatorStrategy } from "./FullStochasticOscillatorIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Brush } from "igniteui-core/Brush";
import { FinancialIndicator } from "./FinancialIndicator";
import { TrendLineType } from "igniteui-core/TrendLineType";

/**
 * @hidden 
 */
export class FullStochasticOscillatorIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(FullStochasticOscillatorIndicator, 'FullStochasticOscillatorIndicator', (<any>StrategyBasedIndicator).$type);
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
		return new FullStochasticOscillatorIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>FullStochasticOscillatorIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(FullStochasticOscillatorIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(FullStochasticOscillatorIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(14, (<any>FullStochasticOscillatorIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
	static readonly smoothingPeriodPropertyName: string = "SmoothingPeriod";
	get smoothingPeriod(): number {
		return typeGetValue(this.getValue(FullStochasticOscillatorIndicator.smoothingPeriodProperty));
	}
	set smoothingPeriod(value: number) {
		this.setValue(FullStochasticOscillatorIndicator.smoothingPeriodProperty, value);
	}
	static readonly smoothingPeriodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodPropertyHelper(3, (<any>FullStochasticOscillatorIndicator).$type, "SmoothingPeriod");
	protected shortPeriodOverride(): number {
		return this.smoothingPeriod;
	}
	static readonly triggerPeriodPropertyName: string = "TriggerPeriod";
	get triggerPeriod(): number {
		return typeGetValue(this.getValue(FullStochasticOscillatorIndicator.triggerPeriodProperty));
	}
	set triggerPeriod(value: number) {
		this.setValue(FullStochasticOscillatorIndicator.triggerPeriodProperty, value);
	}
	static readonly triggerPeriodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodPropertyHelper(3, (<any>FullStochasticOscillatorIndicator).$type, "TriggerPeriod");
	protected longPeriodOverride(): number {
		return this.triggerPeriod;
	}
	protected trendPeriodOverride(): number {
		return this.triggerPeriod;
	}
}


