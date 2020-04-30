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
export class CommodityChannelIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(CommodityChannelIndexIndicatorStrategy, 'CommodityChannelIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(dataSource.typicalColumn.basedOn);
		list.addRange(supportingCalculations.sMA.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let period: number = dataSource.period;
		let typicalColumn: IEnumerable$1<number> = dataSource.typicalColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let sma: IEnumerator$1<number> = getEnumerator(supportingCalculations.sMA.strategy(typicalColumn, period));
		let price: IEnumerator$1<number> = getEnumerator(typicalColumn);
		let buffer: number[] = <number[]>new Array(period);
		for (let j = 0; j < period; j++) {
			buffer[j] = 0;
		}
		let i: number = 0;
		while (price.moveNext() && sma.moveNext()) {
			buffer[i % period] = <number>price.current;
			let mad: number = 0;
			for (let j1: number = 0; j1 < period; ++j1) {
				mad += Math.abs(sma.current - buffer[j1]);
			}
			mad /= period;
			indicatorColumn.item(i, supportingCalculations.makeSafe((price.current - sma.current) / (0.015 * mad)));
			++i;
		}
		return true;
	}
}


