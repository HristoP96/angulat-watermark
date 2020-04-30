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
export class BollingerBandWidthIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(BollingerBandWidthIndicatorStrategy, 'BollingerBandWidthIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(dataSource.typicalColumn.basedOn);
		list.addRange(supportingCalculations.sMA.basedOn);
		list.addRange(supportingCalculations.sTDEV.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let sma: IEnumerator$1<number> = getEnumerator(supportingCalculations.sMA.strategy(dataSource.typicalColumn, dataSource.period));
		let stdev: IEnumerator$1<number> = getEnumerator(supportingCalculations.sTDEV.strategy(dataSource.typicalColumn, dataSource.period));
		let multiplier: number = dataSource.multiplier;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let i: number = 0;
		while (sma.moveNext() && stdev.moveNext()) {
			let offset: number = stdev.current * multiplier;
			let upperBand: number = sma.current + offset;
			let lowerBand: number = sma.current - offset;
			let middleBand: number = sma.current;
			let bandWidth: number = supportingCalculations.makeSafe((upperBand - lowerBand) / middleBand);
			indicatorColumn.item(i, bandWidth);
			i++;
		}
		return true;
	}
}


