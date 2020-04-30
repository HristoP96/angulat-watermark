/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { StreamingIndicatorCalculationStrategy } from "./StreamingIndicatorCalculationStrategy";
import { RelativeStrengthIndexIndicatorStrategy } from "./RelativeStrengthIndexIndicatorStrategy";
import { IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, Base, IEnumerator, IEnumerator_$type, String_$type, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class StochRSIIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(StochRSIIndicatorStrategy, 'StochRSIIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	private _rSIStrategy: StreamingIndicatorCalculationStrategy = null;
	get rSIStrategy(): StreamingIndicatorCalculationStrategy {
		return this._rSIStrategy;
	}
	set rSIStrategy(value: StreamingIndicatorCalculationStrategy) {
		this._rSIStrategy = value;
	}
	constructor() {
		super();
		this.rSIStrategy = new RelativeStrengthIndexIndicatorStrategy();
	}
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(this.rSIStrategy.basedOn(dataSource, supportingCalculations));
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let RSI: IEnumerator$1<number> = getEnumerator(this.rSIStrategy.provideStream(dataSource, supportingCalculations));
		let period: number = dataSource.period;
		let i: number = 0;
		let buffer: number[] = <number[]>new Array(period);
		for (i = 0; i < period; i++) {
			buffer[i] = 0;
		}
		i = 0;
		while (RSI.moveNext()) {
			let ago: number = Math.min(period, i);
			let highestHigh: number = -1.7976931348623157E+308;
			let lowestLow: number = 1.7976931348623157E+308;
			let cursor: number = i % period;
			for (let j: number = 0; j < ago; j++) {
				if (!isNaN_(buffer[ago - j - 1])) {
					highestHigh = Math.max(highestHigh, buffer[ago - j - 1]);
				}
				if (!isNaN_(buffer[ago - j - 1])) {
					lowestLow = Math.min(lowestLow, buffer[ago - j - 1]);
				}
			}
			buffer[cursor] = RSI.current;
			let stochRSI: number = supportingCalculations.makeSafe((RSI.current - lowestLow) / (highestHigh - lowestLow));
			dataSource.indicatorColumn.item(i, stochRSI);
			i++;
		}
		return true;
	}
}


