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
export class EaseOfMovementIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(EaseOfMovementIndicatorStrategy, 'EaseOfMovementIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.add(FinancialSeries.volumeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let highColumn: IList$1<number> = dataSource.highColumn;
		let lowColumn: IList$1<number> = dataSource.lowColumn;
		let volumeColumn: IList$1<number> = dataSource.volumeColumn;
		let count: number = dataSource.count;
		if (count > 0) {
			indicatorColumn.item(0, 0);
		}
		for (let i: number = 1; i < count; i++) {
			let todayMidPoint: number = (highColumn.item(i) + lowColumn.item(i)) / 2;
			let yesterdayMidPoint: number = (highColumn.item(i - 1) + lowColumn.item(i - 1)) / 2;
			let midPointMove: number = todayMidPoint - yesterdayMidPoint;
			let volumeScalingFactor: number = 10000;
			let boxRatio: number = supportingCalculations.makeSafe((volumeColumn.item(i) / volumeScalingFactor) / (highColumn.item(i) - lowColumn.item(i)));
			indicatorColumn.item(i, supportingCalculations.makeSafe(midPointMove / boxRatio));
		}
		return true;
	}
}


