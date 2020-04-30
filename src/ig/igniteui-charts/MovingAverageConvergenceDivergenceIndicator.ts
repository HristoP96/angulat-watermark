/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IShortPeriodLongPeriod, IShortPeriodLongPeriod_$type } from "./IShortPeriodLongPeriod";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { MovingAverageConvergenceDivergenceIndicatorStrategy } from "./MovingAverageConvergenceDivergenceIndicatorStrategy";
import { Type, Base, typeGetValue, markType } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Brush } from "igniteui-core/Brush";
import { FinancialIndicator } from "./FinancialIndicator";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { IndicatorDisplayType } from "./IndicatorDisplayType";

/**
 * @hidden 
 */
export class MovingAverageConvergenceDivergenceIndicator extends StrategyBasedIndicator implements IShortPeriodLongPeriod {
	static $t: Type = markType(MovingAverageConvergenceDivergenceIndicator, 'MovingAverageConvergenceDivergenceIndicator', (<any>StrategyBasedIndicator).$type, [IShortPeriodLongPeriod_$type]);
	constructor() {
		super();
		this.trendLineBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#565656";
			return $ret;
		})());
		this.trendLineType = TrendLineType.ExponentialAverage;
		this.trendLinePeriod = 9;
		this.displayType = IndicatorDisplayType.Area;
	}
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new MovingAverageConvergenceDivergenceIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>MovingAverageConvergenceDivergenceIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
	get shortPeriod(): number {
		return typeGetValue(this.getValue(MovingAverageConvergenceDivergenceIndicator.shortPeriodProperty));
	}
	set shortPeriod(value: number) {
		this.setValue(MovingAverageConvergenceDivergenceIndicator.shortPeriodProperty, value);
	}
	static readonly shortPeriodProperty: DependencyProperty = StrategyBasedIndicator.createShortPeriodProperty(10, (<any>MovingAverageConvergenceDivergenceIndicator).$type);
	protected shortPeriodOverride(): number {
		return this.shortPeriod;
	}
	get longPeriod(): number {
		return typeGetValue(this.getValue(MovingAverageConvergenceDivergenceIndicator.longPeriodProperty));
	}
	set longPeriod(value: number) {
		this.setValue(MovingAverageConvergenceDivergenceIndicator.longPeriodProperty, value);
	}
	static readonly longPeriodProperty: DependencyProperty = StrategyBasedIndicator.createLongPeriodProperty(30, (<any>MovingAverageConvergenceDivergenceIndicator).$type);
	protected longPeriodOverride(): number {
		return this.longPeriod;
	}
	get signalPeriod(): number {
		return typeGetValue(this.getValue(MovingAverageConvergenceDivergenceIndicator.signalPeriodProperty));
	}
	set signalPeriod(value: number) {
		this.setValue(MovingAverageConvergenceDivergenceIndicator.signalPeriodProperty, value);
	}
	static readonly signalPeriodPropertyName: string = "SignalPeriod";
	static readonly signalPeriodProperty: DependencyProperty = StrategyBasedIndicator.createPeriodPropertyHelper(9, (<any>MovingAverageConvergenceDivergenceIndicator).$type, MovingAverageConvergenceDivergenceIndicator.signalPeriodPropertyName);
	protected trendPeriodOverride(): number {
		return this.signalPeriod;
	}
}


