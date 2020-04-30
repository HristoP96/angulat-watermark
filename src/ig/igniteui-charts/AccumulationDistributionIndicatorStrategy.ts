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
export class AccumulationDistributionIndicatorStrategy extends StreamingIndicatorCalculationStrategy {
	static $t: Type = markType(AccumulationDistributionIndicatorStrategy, 'AccumulationDistributionIndicatorStrategy', (<any>StreamingIndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.closeColumnPropertyName);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.add(FinancialSeries.highColumnPropertyName);
		list.add(FinancialSeries.volumeColumnPropertyName);
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
		let ad: number = 0;
		let min: number = Number.POSITIVE_INFINITY;
		let max: number = Number.NEGATIVE_INFINITY;
		let indicatorCount: number = dataSource.indicatorColumn != null ? dataSource.indicatorColumn.count : 0;
		let closeCount: number = dataSource.closeColumn != null ? dataSource.closeColumn.count : 0;
		let highCount: number = dataSource.highColumn != null ? dataSource.highColumn.count : 0;
		let volumeCount: number = dataSource.volumeColumn != null ? dataSource.volumeColumn.count : 0;
		let count: number = Math.min(indicatorCount, Math.min(closeCount, Math.min(highCount, volumeCount)));
		for (let i: number = 0; i < count; ++i) {
			let C: number = dataSource.closeColumn.item(i);
			let L: number = dataSource.lowColumn.item(i);
			let H: number = dataSource.highColumn.item(i);
			let V: number = dataSource.volumeColumn.item(i);
			let CLV: number = ((C - L) - (H - C)) / (H - L);
			ad += supportingCalculations.makeSafe(CLV * V);
			min = Math.min(min, ad);
			max = Math.max(max, ad);
			yield ad;
		}
	}
	provideStream(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._provideStream(dataSource, supportingCalculations));
	}
}


