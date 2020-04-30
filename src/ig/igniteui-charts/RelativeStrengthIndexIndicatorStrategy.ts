/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StreamingIndicatorCalculationStrategy } from "./StreamingIndicatorCalculationStrategy";
import { IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, NotSupportedException, String_$type, fromEnum, toEnum, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { Thread } from "igniteui-core/culture";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class RelativeStrengthIndexIndicatorStrategy extends StreamingIndicatorCalculationStrategy {
	static $t: Type = markType(RelativeStrengthIndexIndicatorStrategy, 'RelativeStrengthIndexIndicatorStrategy', (<any>StreamingIndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let i: number = 0;
		for (let value of fromEnum<number>(this.provideStream(dataSource, supportingCalculations))) {
			dataSource.indicatorColumn.item(i, value);
			i++;
		}
		return true;
	}
	private *_provideStream(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IterableIterator<any> {
		let period: number = <number>dataSource.period;
		let alpha: number = 2 / (period + 1);
		let Uema: number = 0;
		let Dema: number = 0;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		if (indicatorColumn.count > 0) {
			yield 0;
		}
		for (let i: number = 1; i < Math.min(dataSource.period, indicatorColumn.count); ++i) {
			let C: number = closeColumn.item(i) - closeColumn.item(i - 1);
			let U: number = C > 0 ? C : 0;
			let D: number = C > 0 ? 0 : -C;
			Uema += U / (period - 1);
			Dema += D / (period - 1);
			yield 0;
		}
		for (let i1: number = dataSource.period; i1 < indicatorColumn.count; ++i1) {
			let C1: number = closeColumn.item(i1) - closeColumn.item(i1 - 1);
			let U1: number = C1 > 0 ? C1 : 0;
			let D1: number = C1 > 0 ? 0 : -C1;
			Uema = (Uema * (period - 1) + U1) / period;
			Dema = (Dema * (period - 1) + D1) / period;
			yield supportingCalculations.makeSafe(Uema != 0 ? 100 * Uema / (Uema + Dema) : 0);
		}
	}
	provideStream(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._provideStream(dataSource, supportingCalculations));
	}
}


