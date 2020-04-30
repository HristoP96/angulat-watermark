/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, ICollection$1, ICollection$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Number_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class MassIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(MassIndexIndicatorStrategy, 'MassIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	protected highLowRange(highColumn: IList$1<number>, lowColumn: IList$1<number>): List$1<number> {
		let result: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i: number = 0; i < (Math.min(highColumn.count, lowColumn.count)); i++) {
			result.add(highColumn.item(i) - lowColumn.item(i));
		}
		return result;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let period: number = 9;
		let highColumn: IList$1<number> = dataSource.highColumn;
		let lowColumn: IList$1<number> = dataSource.lowColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let ema9: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(this.highLowRange(highColumn, lowColumn), period));
		let ema9ema9: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(supportingCalculations.eMA.strategy(this.highLowRange(highColumn, lowColumn), period), period));
		let buffer: number[] = <number[]>new Array(period);
		for (let i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		let mass: number = 0;
		for (let i1: number = 0; i1 < indicatorColumn.count; i1++) {
			let cursor: number = i1 % period;
			mass -= buffer[cursor];
			ema9.moveNext();
			ema9ema9.moveNext();
			let newMassValue: number = supportingCalculations.makeSafe(ema9.current / ema9ema9.current);
			mass += newMassValue;
			indicatorColumn.item(i1, mass);
			buffer[cursor] = newMassValue;
		}
		return true;
	}
}


