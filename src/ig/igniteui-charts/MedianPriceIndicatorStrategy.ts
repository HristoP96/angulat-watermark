/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ItemwiseIndicatorCalculationStrategy } from "./ItemwiseIndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, String_$type, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class MedianPriceIndicatorStrategy extends ItemwiseIndicatorCalculationStrategy {
	static $t: Type = markType(MedianPriceIndicatorStrategy, 'MedianPriceIndicatorStrategy', (<any>ItemwiseIndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		return list;
	}
	calculateIndicatorItem(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations, currentIndex: number): boolean {
		dataSource.indicatorColumn.item(currentIndex, (dataSource.highColumn.item(currentIndex) + dataSource.lowColumn.item(currentIndex)) / 2);
		return true;
	}
}


