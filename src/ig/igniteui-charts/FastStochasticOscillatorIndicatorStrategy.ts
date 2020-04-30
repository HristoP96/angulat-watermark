/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { StreamingIndicatorCalculationStrategy } from "./StreamingIndicatorCalculationStrategy";
import { PercentKCalculationStrategy } from "./PercentKCalculationStrategy";
import { IList$1, IList$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, String_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class FastStochasticOscillatorIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(FastStochasticOscillatorIndicatorStrategy, 'FastStochasticOscillatorIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	private _percentKStrategy: StreamingIndicatorCalculationStrategy = null;
	get percentKStrategy(): StreamingIndicatorCalculationStrategy {
		return this._percentKStrategy;
	}
	set percentKStrategy(value: StreamingIndicatorCalculationStrategy) {
		this._percentKStrategy = value;
	}
	constructor() {
		super();
		this.percentKStrategy = new PercentKCalculationStrategy();
	}
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(this.percentKStrategy.basedOn(dataSource, supportingCalculations));
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let percentK: IEnumerable$1<number> = this.percentKStrategy.provideStream(dataSource, supportingCalculations);
		let i: number = 0;
		for (let value of fromEnum<number>(percentK)) {
			dataSource.indicatorColumn.item(i, value);
			i++;
		}
		return true;
	}
}


