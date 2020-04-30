/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class ChaikinVolatilityIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(ChaikinVolatilityIndicatorStrategy, 'ChaikinVolatilityIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let highMinusLow: IEnumerable$1<number> = supportingCalculations.toEnumerable((index: number) => dataSource.highColumn.item(index) - dataSource.lowColumn.item(index), dataSource.count);
		let emaHighLow: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(highMinusLow, dataSource.period));
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let buffer: number[] = <number[]>new Array(dataSource.period);
		for (let j = 0; j < dataSource.period; j++) {
			buffer[j] = 0;
		}
		let i: number = 0;
		while (emaHighLow.moveNext()) {
			let cursor: number = i % dataSource.period;
			let chaikinVolatility: number = supportingCalculations.makeSafe((emaHighLow.current - buffer[cursor]) / (buffer[cursor] * 100));
			if (i < dataSource.period) {
				indicatorColumn.item(i, 0);
			} else {
				indicatorColumn.item(i, chaikinVolatility);
			}
			buffer[cursor] = emaHighLow.current;
			i++;
		}
		return true;
	}
}


