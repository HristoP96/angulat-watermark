/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { StreamingIndicatorCalculationStrategy } from "./StreamingIndicatorCalculationStrategy";
import { AccumulationDistributionIndicatorStrategy } from "./AccumulationDistributionIndicatorStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";

/**
 * @hidden 
 */
export class ChaikinOscillatorIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(ChaikinOscillatorIndicatorStrategy, 'ChaikinOscillatorIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	private _accumulationDistributionStrategy: StreamingIndicatorCalculationStrategy = null;
	get accumulationDistributionStrategy(): StreamingIndicatorCalculationStrategy {
		return this._accumulationDistributionStrategy;
	}
	set accumulationDistributionStrategy(value: StreamingIndicatorCalculationStrategy) {
		this._accumulationDistributionStrategy = value;
	}
	constructor() {
		super();
		this.accumulationDistributionStrategy = new AccumulationDistributionIndicatorStrategy();
	}
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(this.accumulationDistributionStrategy.basedOn(dataSource, supportingCalculations));
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let accDist: IEnumerable$1<number> = this.accumulationDistributionStrategy.provideStream(dataSource, supportingCalculations);
		let emaShort: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(accDist, dataSource.shortPeriod));
		let emaLong: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(accDist, dataSource.longPeriod));
		let i: number = 0;
		while (emaShort.moveNext() && emaLong.moveNext()) {
			let indicatorValue: number = emaShort.current - emaLong.current;
			indicatorColumn.item(i, indicatorValue);
			i++;
		}
		return true;
	}
}


