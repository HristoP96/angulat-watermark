/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, Base, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { CalculatedColumn } from "./CalculatedColumn";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class MoneyFlowIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(MoneyFlowIndexIndicatorStrategy, 'MoneyFlowIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(dataSource.typicalColumn.basedOn);
		list.add(FinancialSeries.volumeColumnPropertyName);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let typical: IEnumerator$1<number> = dataSource.typicalColumn.getEnumerator();
		let volume: IEnumerator$1<number> = getEnumerator(dataSource.volumeColumn);
		let period: number = dataSource.period;
		let i: number = 0;
		let positiveBuffer: number[] = <number[]>new Array(period);
		for (i = 0; i < period; i++) {
			positiveBuffer[i] = 0;
		}
		let positiveFlow: number = 0;
		let negativeBuffer: number[] = <number[]>new Array(period);
		for (i = 0; i < period; i++) {
			negativeBuffer[i] = 0;
		}
		let negativeFlow: number = 0;
		let flowYesterday: number = 0;
		i = 0;
		while (typical.moveNext() && volume.moveNext()) {
			let cursor: number = i % period;
			let flowToday: number = typical.current * volume.current;
			positiveFlow -= positiveBuffer[cursor];
			negativeFlow -= negativeBuffer[cursor];
			switch (<number>Math.sign(flowToday - flowYesterday)) {
				case -1:
				positiveBuffer[cursor] = 0;
				negativeBuffer[cursor] = flowToday;
				break;

				case 0:
				positiveBuffer[cursor] = 0;
				negativeBuffer[cursor] = 0;
				break;

				case 1:
				positiveBuffer[cursor] = flowToday;
				negativeBuffer[cursor] = 0;
				break;

			}

			positiveFlow += positiveBuffer[cursor];
			negativeFlow += negativeBuffer[cursor];
			let mfi: number = supportingCalculations.makeSafe(100 * positiveFlow / (positiveFlow + negativeFlow));
			dataSource.indicatorColumn.item(i, mfi);
			flowYesterday = flowToday;
			++i;
		}
		return true;
	}
}


