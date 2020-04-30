/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { ForceIndexIndicatorStrategy } from "./ForceIndexIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { FinancialIndicator } from "./FinancialIndicator";
import { IndicatorDisplayType } from "./IndicatorDisplayType";

/**
 * @hidden 
 */
export class ForceIndexIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(ForceIndexIndicator, 'ForceIndexIndicator', (<any>StrategyBasedIndicator).$type);
	constructor() {
		super();
		this.displayType = IndicatorDisplayType.Area;
	}
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new ForceIndexIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>ForceIndexIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(ForceIndexIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(ForceIndexIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(0, (<any>ForceIndexIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	setPeriodOverride(period: number): void {
		this.period = period;
	}
}


