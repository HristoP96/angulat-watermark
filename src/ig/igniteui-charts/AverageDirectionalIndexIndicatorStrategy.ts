/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, IEnumerable$1, IEnumerable$1_$type, NotSupportedException, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, ICollection$1, ICollection$1_$type, String_$type, toEnum, Type, markType, getEnumerator } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";
import { List$1 } from "igniteui-core/List$1";
import { CalculatedColumn } from "./CalculatedColumn";
import { SupportingCalculation$1 } from "./SupportingCalculation$1";
import { Thread } from "igniteui-core/culture";
import { FinancialSeries } from "./FinancialSeries";

/**
 * @hidden 
 */
export class AverageDirectionalIndexIndicatorStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(AverageDirectionalIndexIndicatorStrategy, 'AverageDirectionalIndexIndicatorStrategy', (<any>IndicatorCalculationStrategy).$type);
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		let list: List$1<string> = new List$1<string>(String_$type, 0);
		list.add(FinancialSeries.lowColumnPropertyName);
		list.add(FinancialSeries.highColumnPropertyName);
		list.addRange(dataSource.trueRange.basedOn);
		list.addRange(supportingCalculations.eMA.basedOn);
		return list;
	}
	private upMove(index: number, highColumn: IList$1<number>, lowColumn: IList$1<number>): number {
		return highColumn.item(index) - highColumn.item(index - 1);
	}
	private downMove(index: number, highColumn: IList$1<number>, lowColumn: IList$1<number>): number {
		return lowColumn.item(index - 1) - lowColumn.item(index);
	}
	private *_plusDM(highColumn: IList$1<number>, lowColumn: IList$1<number>): IterableIterator<any> {
		yield 0;
		let upMove: number = 0;
		let downMove: number = 0;
		for (let i: number = 1; i < highColumn.count; i++) {
			upMove = this.upMove(i, highColumn, lowColumn);
			downMove = this.downMove(i, highColumn, lowColumn);
			if (upMove > downMove && upMove > 0) {
				yield upMove;
			} else {
				yield 0;
			}
		}
	}
	private plusDM(highColumn: IList$1<number>, lowColumn: IList$1<number>): IEnumerable$1<number> {
		return toEnum(() => this._plusDM(highColumn, lowColumn));
	}
	private *_minusDM(highColumn: IList$1<number>, lowColumn: IList$1<number>): IterableIterator<any> {
		yield 0;
		let upMove: number = 0;
		let downMove: number = 0;
		for (let i: number = 1; i < highColumn.count; i++) {
			upMove = this.upMove(i, highColumn, lowColumn);
			downMove = this.downMove(i, highColumn, lowColumn);
			if (downMove > upMove && downMove > 0) {
				yield downMove;
			} else {
				yield 0;
			}
		}
	}
	private minusDM(highColumn: IList$1<number>, lowColumn: IList$1<number>): IEnumerable$1<number> {
		return toEnum(() => this._minusDM(highColumn, lowColumn));
	}
	private *_plusDI(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IterableIterator<any> {
		let emaPlusDM: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(this.plusDM(dataSource.highColumn, dataSource.lowColumn), dataSource.period));
		let averageTrueRange: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(dataSource.trueRange, dataSource.period));
		while (emaPlusDM.moveNext() && averageTrueRange.moveNext()) {
			yield supportingCalculations.makeSafe(emaPlusDM.current / averageTrueRange.current);
		}
	}
	private plusDI(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._plusDI(dataSource, supportingCalculations));
	}
	private *_minusDI(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IterableIterator<any> {
		let emaMinusDM: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(this.minusDM(dataSource.highColumn, dataSource.lowColumn), dataSource.period));
		let averageTrueRange: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(dataSource.trueRange, dataSource.period));
		while (emaMinusDM.moveNext() && averageTrueRange.moveNext()) {
			yield supportingCalculations.makeSafe(emaMinusDM.current / averageTrueRange.current);
		}
	}
	private minusDI(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._minusDI(dataSource, supportingCalculations));
	}
	private *_aDXHelper(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IterableIterator<any> {
		let plusDI: IEnumerator$1<number> = getEnumerator(this.plusDI(dataSource, supportingCalculations));
		let minusDI: IEnumerator$1<number> = getEnumerator(this.minusDI(dataSource, supportingCalculations));
		plusDI.moveNext();
		minusDI.moveNext();
		while (plusDI.moveNext() && minusDI.moveNext()) {
			yield Math.abs(supportingCalculations.makeSafe((plusDI.current - minusDI.current) / (plusDI.current + minusDI.current)));
		}
	}
	private aDXHelper(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._aDXHelper(dataSource, supportingCalculations));
	}
	private *_aDX(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IterableIterator<any> {
		let adxHelperEMA: IEnumerator$1<number> = getEnumerator(supportingCalculations.eMA.strategy(this.aDXHelper(dataSource, supportingCalculations), dataSource.period));
		yield 0;
		while (adxHelperEMA.moveNext()) {
			yield adxHelperEMA.current * 100;
		}
	}
	private aDX(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IEnumerable$1<number> {
		return toEnum(() => this._aDX(dataSource, supportingCalculations));
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let adx: IEnumerator$1<number> = getEnumerator(this.aDX(dataSource, supportingCalculations));
		let indicatorColumn: IList$1<number> = dataSource.indicatorColumn;
		for (let i: number = 0; i < indicatorColumn.count; i++) {
			if (adx.moveNext()) {
				indicatorColumn.item(i, adx.current);
			}
		}
		return true;
	}
}


