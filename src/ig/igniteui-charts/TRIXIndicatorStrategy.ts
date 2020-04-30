/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class TRIXIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(TRIXIndicatorStrategy, 'TRIXIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let ema1: IEnumerable$1<number> = supportingCalculations.eMA.strategy(dataSource.closeColumn, dataSource.period);
		let ema2: IEnumerable$1<number> = supportingCalculations.eMA.strategy(ema1, dataSource.period);
		let ema3: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(ema2, dataSource.period));
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		if (indicatorColumn.count > 0) {
			indicatorColumn.item(0, 0);
		}
		let i: number = 1;
		ema3.moveNext();
		let lastEMA: number = ema3.current;
		while (ema3.moveNext()) {
			indicatorColumn.item(i, supportingCalculations.makeSafe((ema3.current - lastEMA) / lastEMA));
			lastEMA = ema3.current;
			i++;
		}
		return true;
	}
}


