/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { BollingerBandWidthIndicatorStrategy } from "./BollingerBandWidthIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";

/**
 * @hidden 
 */
export class BollingerBandWidthIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(BollingerBandWidthIndicator, 'BollingerBandWidthIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new BollingerBandWidthIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>BollingerBandWidthIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get period(): number {
		return typeGetValue(this.getValue(BollingerBandWidthIndicator.periodProperty));
	}
	set period(value: number) {
		this.setValue(BollingerBandWidthIndicator.periodProperty, value);
	}
	static readonly periodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodProperty(20, (<any>BollingerBandWidthIndicator).$type);
	protected periodOverride(): number {
		return this.period;
	}
	static readonly multiplierPropertyName: string = "Multiplier";
	get multiplier(): number {
		return <number>this.getValue(BollingerBandWidthIndicator.multiplierProperty);
	}
	set multiplier(value: number) {
		this.setValue(BollingerBandWidthIndicator.multiplierProperty, value);
	}
	static readonly multiplierProperty: DependencyProperty = StrategyBasedIndicator.createMultiplierProperty(2, (<any>BollingerBandWidthIndicator).$type);
	protected multiplierOverride(): number {
		return this.multiplier;
	}
}


