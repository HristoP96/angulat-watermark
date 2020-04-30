/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, String_$type, Number_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { CalculatedColumn } from "./CalculatedColumn";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class UltimateOscillatorIndicatorCalculationStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(UltimateOscillatorIndicatorCalculationStrategy, 'UltimateOscillatorIndicatorCalculationStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(dataSource.trueLow.basedOn);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.addRange(dataSource.trueRange.basedOn);
		list.addRange(supportingCalculations.movingSum.basedOn);
		return list;
	}
	protected buyingPressure(dataSource: FinancialCalculationDataSource): List$1<number> {
		let i: number = 0;
		let result: List$1<number> = new List$1<number>(Number_$type, 0);
		let tl: IEnumerator$1<number> = dataSource.trueLow.getEnumerator();
		while (tl.moveNext()) {
			result.add(dataSource.closeColumn.item(i) - tl.current);
			i++;
		}
		return result;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let buyingPressure: IEnumerable$1<number> = this.buyingPressure(dataSource);
		let trueRange: IEnumerable$1<number> = dataSource.trueRange;
		let bpShort: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(buyingPressure, 7));
		let trShort: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(trueRange, 7));
		let bpMedium: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(buyingPressure, 14));
		let trMedium: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(trueRange, 14));
		let bpLong: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(buyingPressure, 28));
		let trLong: IEnumerator$1<number> = getEnumerator(supportingCalculations.movingSum.strategy(trueRange, 28));
		let i: number = 0;
		while (bpShort.moveNext() && trShort.moveNext() && bpMedium.moveNext() && trMedium.moveNext() && bpLong.moveNext() && trLong.moveNext()) {
			let rawValue: number = supportingCalculations.makeSafe(4 * (bpShort.current / trShort.current) + 2 * (bpMedium.current / trMedium.current) + (bpLong.current / trLong.current));
			let uo: number = (rawValue / (4 + 2 + 1)) * 100;
			dataSource.indicatorColumn.item(i, uo);
			i++;
		}
		return true;
	}
}


