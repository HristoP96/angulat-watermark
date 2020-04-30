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
import { CalculatedColumn } from "./CalculatedColumn";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";

/**
 * @hidden 
 */
export class MovingAverageConvergenceDivergenceIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(MovingAverageConvergenceDivergenceIndicatorStrategy, 'MovingAverageConvergenceDivergenceIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(dataSource.typicalColumn.basedOn);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let typicalColumn: IEnumerable$1<number> = dataSource.typicalColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let shortPeriod: number = dataSource.shortPeriod;
		let longPeriod: number = dataSource.longPeriod;
		let shortEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(typicalColumn, shortPeriod));
		let longEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(typicalColumn, longPeriod));
		let i: number = 0;
		while (shortEma.moveNext() && longEma.moveNext()) {
			let macd: number = supportingCalculations.makeSafe(shortEma.current - longEma.current);
			indicatorColumn.item(i, macd);
			i++;
		}
		return true;
	}
}


