/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Base, String_$type, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class NegativeVolumeIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(NegativeVolumeIndexIndicatorStrategy, 'NegativeVolumeIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.add(FinancialSeries.volumeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		let volumeColumn: IList$1<number> = dataSource.volumeColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let nvi: number = 0;
		let newValue: number = 0;
		let yesterdayNVI: number = 0;
		if (indicatorColumn.count > 0) {
			indicatorColumn.item(0, nvi);
		}
		for (let i: number = 1; i < indicatorColumn.count; i++) {
			if (volumeColumn.item(i) < volumeColumn.item(i - 1)) {
				newValue = supportingCalculations.makeSafe((closeColumn.item(i) - closeColumn.item(i - 1)) / closeColumn.item(i - 1));
				if (yesterdayNVI != 0) {
					nvi += newValue * yesterdayNVI;
				} else {
					nvi += newValue;
				}
			}
			indicatorColumn.item(i, nvi);
			yesterdayNVI = nvi;
		}
		return true;
	}
}


