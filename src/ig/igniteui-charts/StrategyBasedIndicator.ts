/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialIndicator } from "./FinancialIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { Type, Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, Number_$type, typeCast, fromEnum, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { List$1 } from "igniteui-core/List$1";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { FinancialSeries } from "./FinancialSeries";
import { AxisRange } from "./AxisRange";
import { Axis } from "./Axis";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { Series } from "./Series";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { FinancialIndicatorView } from "./FinancialIndicatorView";
import { ITrendLineManager } from "./ITrendLineManager";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export abstract class StrategyBasedIndicator extends FinancialIndicator {
	static $t: Type = markType(StrategyBasedIndicator, 'StrategyBasedIndicator', (<any>FinancialIndicator).$type);
	constructor() {
		super();
		this.initializeIndicator();
	}
	protected initializeIndicator(): void {
		this.actualCalculationStrategy = this.calculationStrategy;
		this.defaultStyleKey = this.styleKeyType;
	}
	private _actualCalculationStrategy: IndicatorCalculationStrategy;
	protected get actualCalculationStrategy(): IndicatorCalculationStrategy {
		return this._actualCalculationStrategy;
	}
	protected set actualCalculationStrategy(value: IndicatorCalculationStrategy) {
		this._actualCalculationStrategy = value;
	}
	protected abstract get calculationStrategy(): IndicatorCalculationStrategy;
	protected abstract get styleKeyType(): Type;
	static invalidatesSeries: List$1<string> = new List$1<string>(String_$type, 0);
	protected periodOverride(): number {
		return -2147483648;
	}
	setPeriodOverride(period: number): void {
	}
	protected shortPeriodOverride(): number {
		return -2147483648;
	}
	protected longPeriodOverride(): number {
		return -2147483648;
	}
	static readonly periodPropertyName: string = "Period";
	static readonly longPeriodPropertyName: string = "LongPeriod";
	static readonly shortPeriodPropertyName: string = "ShortPeriod";
	static createPeriodPropertyHelper(defaultValue: number, ownerType: Type, propertyName: string): DependencyProperty {
		let prop: DependencyProperty = DependencyProperty.register(propertyName, Number_$type, ownerType, new PropertyMetadata(2, defaultValue, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<StrategyBasedIndicator>((<any>StrategyBasedIndicator).$type, sender)).raisePropertyChanged(propertyName, e.oldValue, e.newValue)));
		StrategyBasedIndicator.invalidatesSeries.add(propertyName);
		return prop;
	}
	protected static createPeriodProperty(defaultValue: number, ownerType: Type): DependencyProperty {
		return StrategyBasedIndicator.createPeriodPropertyHelper(defaultValue, ownerType, StrategyBasedIndicator.periodPropertyName);
	}
	protected static createLongPeriodProperty(defaultValue: number, ownerType: Type): DependencyProperty {
		return StrategyBasedIndicator.createPeriodPropertyHelper(defaultValue, ownerType, StrategyBasedIndicator.longPeriodPropertyName);
	}
	protected static createShortPeriodProperty(defaultValue: number, ownerType: Type): DependencyProperty {
		return StrategyBasedIndicator.createPeriodPropertyHelper(defaultValue, ownerType, StrategyBasedIndicator.shortPeriodPropertyName);
	}
	protected basedOn(position: number, count: number): IList$1<string> {
		let dataSource: FinancialCalculationDataSource = this.provideDataSource(position, count);
		let supportingCalculations: FinancialCalculationSupportingCalculations = this.provideSupportingCalculations(dataSource);
		return this.actualCalculationStrategy.basedOn(dataSource, supportingCalculations);
	}
	protected indicatorOverride(position: number, count: number): boolean {
		let dataSource: FinancialCalculationDataSource = this.provideDataSource(position, count);
		if (count == 0) {
			return false;
		}
		if (!this.validateBasedOn(this.basedOn(position, count))) {
			return false;
		}
		let supportingCalculations: FinancialCalculationSupportingCalculations = this.provideSupportingCalculations(dataSource);
		if (this.indicatorRange != null) {
			dataSource.minimumValue = this.indicatorRange.minimum;
			dataSource.maximumValue = this.indicatorRange.maximum;
		}
		let retVal: boolean = this.actualCalculationStrategy.calculateIndicator(dataSource, supportingCalculations);
		for (let i: number = 0; i < this.ignoreFirst && i < dataSource.indicatorColumn.count; i++) {
			dataSource.indicatorColumn.item(i, NaN);
		}
		if (this.yAxis != null && this.updateRange(dataSource)) {
			this.yAxis.updateRange();
		}
		return retVal;
	}
	protected updateRange(dataSource: FinancialCalculationDataSource): boolean {
		if (!isNaN_(dataSource.minimumValue) && !isNaN_(dataSource.maximumValue) && dataSource.specifiesRange) {
			let pRange: AxisRange = this.indicatorRange;
			this.indicatorRange = new AxisRange(dataSource.minimumValue, dataSource.maximumValue);
			return this.rangesDiffer(pRange, this.indicatorRange);
		}
		let minimum: number = 1.7976931348623157E+308;
		let maximum: number = -1.7976931348623157E+308;
		for (let value of fromEnum<number>(dataSource.indicatorColumn)) {
			if (!isNaN_(value)) {
				minimum = Math.min(minimum, value);
				maximum = Math.max(maximum, value);
			}
		}
		let prevRange: AxisRange = this.indicatorRange;
		this.indicatorRange = new AxisRange(minimum, maximum);
		return this.rangesDiffer(prevRange, this.indicatorRange);
	}
	private rangesDiffer(prevRange: AxisRange, indicatorRange: AxisRange): boolean {
		if (prevRange == null || indicatorRange == null) {
			return true;
		}
		if (prevRange.minimum != indicatorRange.minimum) {
			return true;
		}
		if (prevRange.maximum != indicatorRange.maximum) {
			return true;
		}
		return false;
	}
	protected sanitizePeriod(periodValue: number): number {
		if (periodValue == -2147483648) {
			return 0;
		}
		if (periodValue > this.indicatorColumn.count && this.indicatorColumn.count > 0) {
			periodValue = this.indicatorColumn.count - 1;
		}
		if (periodValue < 1) {
			return 1;
		}
		return periodValue;
	}
	protected provideDataSource(position: number, count: number): FinancialCalculationDataSource {
		let dataSource: FinancialCalculationDataSource = super.provideDataSource(position, count);
		dataSource.indicatorColumn = this.indicatorColumn;
		dataSource.period = this.sanitizePeriod(this.periodOverride());
		dataSource.shortPeriod = this.sanitizePeriod(this.shortPeriodOverride());
		dataSource.longPeriod = this.sanitizePeriod(this.longPeriodOverride());
		dataSource.multiplier = this.multiplierOverride();
		return dataSource;
	}
	protected multiplierOverride(): number {
		return 1;
	}
	private static readonly multiplerPropertyName: string = "Multiplier";
	protected static createMultiplierProperty(defaultValue: number, ownerType: Type): DependencyProperty {
		let prop: DependencyProperty = DependencyProperty.register(StrategyBasedIndicator.multiplerPropertyName, Number_$type, ownerType, new PropertyMetadata(2, defaultValue, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<StrategyBasedIndicator>((<any>StrategyBasedIndicator).$type, sender)).raisePropertyChanged(StrategyBasedIndicator.multiplerPropertyName, e.oldValue, e.newValue)));
		StrategyBasedIndicator.invalidatesSeries.add(StrategyBasedIndicator.multiplerPropertyName);
		return prop;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (StrategyBasedIndicator.invalidatesSeries.contains(propertyName)) {
			if (this.yAxis != null && !this.yAxis.updateRange()) {
				this.financialView.bucketCalculator.calculateBuckets(this.resolution);
				this.indicatorOverride(0, this.indicatorColumn.count);
				if (this.indicatorView.hasTrendLineManager) {
					this.indicatorView.trendLineManager.reset();
				}
				this.renderSeries(false);
			}
		}
	}
}


