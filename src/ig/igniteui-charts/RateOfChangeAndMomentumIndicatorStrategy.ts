/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, Base, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class RateOfChangeAndMomentumIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(RateOfChangeAndMomentumIndicatorStrategy, 'RateOfChangeAndMomentumIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let period: number = dataSource.period;
		let i: number = 0;
		let buffer: number[] = <number[]>new Array(period);
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		i = 0;
		for (let close of fromEnum<number>(closeColumn)) {
			let cursor: number = i % period;
			let rcm: number = supportingCalculations.makeSafe(100 * (close - buffer[cursor]) / buffer[cursor]);
			indicatorColumn.item(i, rcm);
			buffer[cursor] = close;
			++i;
		}
		return true;
	}
}


