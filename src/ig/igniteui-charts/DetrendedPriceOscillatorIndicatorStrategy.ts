/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, ICollection$1, ICollection$1_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { FinancialSeries } from "./FinancialSeries";
import { intDivide } from "igniteui-core/number";

/**
 * @hidden 
 */
export class DetrendedPriceOscillatorIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(DetrendedPriceOscillatorIndicatorStrategy, 'DetrendedPriceOscillatorIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.addRange(supportingCalculations.sMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let period: number = dataSource.period;
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let sma: IEnumerator$1<number> = getEnumerator(supportingCalculations.sMA.strategy(closeColumn, period));
		let daysAgo: number = (intDivide(period, 2)) + 1;
		let buffer: number[] = <number[]>new Array(daysAgo);
		for (let j = 0; j < daysAgo; j++) {
			buffer[j] = 0;
		}
		for (let i: number = 1; i < Math.min(daysAgo + 1, indicatorColumn.count); ++i) {
			let cursor: number = i % daysAgo;
			indicatorColumn.item(i, 0);
			sma.moveNext();
			buffer[cursor] = sma.current;
		}
		for (let i1: number = daysAgo + 1; i1 < indicatorColumn.count; i1++) {
			let cursor1: number = i1 % daysAgo;
			indicatorColumn.item(i1, closeColumn.item(i1) - buffer[cursor1]);
			sma.moveNext();
			buffer[cursor1] = sma.current;
		}
		return true;
	}
}


