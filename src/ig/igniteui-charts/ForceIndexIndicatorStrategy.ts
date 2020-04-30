/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, ICollection$1, ICollection$1_$type, NotSupportedException, String_$type, toEnum, fromEnum, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { Thread } from "igniteui-core/culture";
import { FinancialSeries } from "./FinancialSeries";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ForceIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(ForceIndexIndicatorStrategy, 'ForceIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.add(FinancialSeries.volumeColumnPropertyName);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	private *_fI(dataSource: FinancialCalculationDataSource): IterableIterator<any> {
		let count: number = 0;
		let closeColumn: IList$1<number> = dataSource.closeColumn;
		let volumeColumn: IList$1<number> = dataSource.volumeColumn;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		if (closeColumn != null && volumeColumn != null) {
			count = Math.min(closeColumn.count, volumeColumn.count);
		}
		if (count > 0) {
			yield 0;
		}
		for (let i: number = 1; i < count; ++i) {
			yield volumeColumn.item(i) * (closeColumn.item(i) - closeColumn.item(i - 1));
		}
	}
	protected fI(dataSource: FinancialCalculationDataSource): IEnumerable$1<number> {
		return toEnum(() => this._fI(dataSource));
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let fi: IEnumerable$1<number> = this.fI(dataSource);
		let period: number = dataSource.period;
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		if (period != 0 && !isNaN_(period) && !isInfinity(period)) {
			fi = supportingCalculations.eMA.strategy(fi, dataSource.period);
		}
		let i: number = 0;
		for (let d of fromEnum<number>(fi)) {
			indicatorColumn.item(i, d);
			++i;
		}
		return true;
	}
}


