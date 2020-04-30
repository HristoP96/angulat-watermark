/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, String_$type, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { FinancialSeries } from "./FinancialSeries";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class WilliamsPercentRIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(WilliamsPercentRIndicatorStrategy, 'WilliamsPercentRIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.add(FinancialSeries.closeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let period: number = dataSource.period;
		let highColumn: IList$1<number> = dataSource.highColumn;
		let lowColumn: IList$1<number> = dataSource.lowColumn;
		for (let i: number = 0; i < dataSource.count; i++) {
			let ago: number = Math.min(period, i);
			let highestHigh: number = -1.7976931348623157E+308;
			let lowestLow: number = 1.7976931348623157E+308;
			for (let j: number = 0; j < ago; j++) {
				if (!isNaN_(highColumn.item(i - j))) {
					highestHigh = Math.max(highestHigh, highColumn.item(i - j));
				}
				if (!isNaN_(lowColumn.item(i - j))) {
					lowestLow = Math.min(lowestLow, lowColumn.item(i - j));
				}
			}
			dataSource.indicatorColumn.item(i, supportingCalculations.makeSafe((dataSource.closeColumn.item(i) - highestHigh) / (highestHigh - lowestLow) * 100));
		}
		return true;
	}
}


