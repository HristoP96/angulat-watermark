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

/**
 * @hidden 
 */
export class PriceVolumeTrendIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(PriceVolumeTrendIndicatorStrategy, 'PriceVolumeTrendIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.volumeColumnPropertyName);
		list.add(FinancialSeries.closeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let pvt: number = 0;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let volumeColumn: IList$1<number> = dataSource.volumeColumn;
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		let count: number = dataSource.count;
		if (count > 0) {
			indicatorColumn.item(0, pvt);
		}
		for (let i: number = 1; i < count; ++i) {
			pvt = pvt + supportingCalculations.makeSafe(volumeColumn.item(i) * (closeColumn.item(i) - closeColumn.item(i - 1)) / closeColumn.item(i - 1));
			indicatorColumn.item(i, pvt);
		}
		return true;
	}
}


