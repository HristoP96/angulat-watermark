/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { ItemwiseIndicatorCalculationStrategy } from "./ItemwiseIndicatorCalculationStrategy";
import { IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";

/**
 * @hidden 
 */
export class ItemwiseStrategyCalculationStrategy extends IndicatorCalculationStrategy {
	static $t: Type = markType(ItemwiseStrategyCalculationStrategy, 'ItemwiseStrategyCalculationStrategy', (<any>IndicatorCalculationStrategy).$type);
	private _itemwiseStrategy: ItemwiseIndicatorCalculationStrategy = null;
	get itemwiseStrategy(): ItemwiseIndicatorCalculationStrategy {
		return this._itemwiseStrategy;
	}
	set itemwiseStrategy(value: ItemwiseIndicatorCalculationStrategy) {
		this._itemwiseStrategy = value;
	}
	basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string> {
		return this.itemwiseStrategy.basedOn(dataSource, supportingCalculations);
	}
	calculateIndicator(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): boolean {
		let shouldContinue: boolean = true;
		for (let i: number = dataSource.calculateFrom; i < dataSource.calculateFrom + dataSource.calculateCount; i++) {
			shouldContinue = this.itemwiseStrategy.calculateIndicatorItem(dataSource, supportingCalculations, i);
			if (!shouldContinue) {
				return false;
			}
		}
		return shouldContinue;
	}
}


