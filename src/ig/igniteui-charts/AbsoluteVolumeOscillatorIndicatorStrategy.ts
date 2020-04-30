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
import { SupportingCalculation$1 } from "./SupportingCalculation$1";

/**
 * @hidden 
 */
export class AbsoluteVolumeOscillatorIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(AbsoluteVolumeOscillatorIndicatorStrategy, 'AbsoluteVolumeOscillatorIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.addRange(supportingCalculations.shortVolumeOscillatorAverage.basedOn);
		list.addRange(supportingCalculations.longVolumeOscillatorAverage.basedOn);
		return list;
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let shortEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.shortVolumeOscillatorAverage.strategy(dataSource));
		let longEma: IEnumerator$1<number> = getEnumerator(supportingCalculations.longVolumeOscillatorAverage.strategy(dataSource));
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		let i: number = 0;
		while (shortEma.moveNext() && longEma.moveNext()) {
			let pvo: number = shortEma.current - longEma.current;
			indicatorColumn.item(i, supportingCalculations.makeSafe(pvo));
			++i;
		}
		return true;
	}
}


