/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { ItemwiseIndicatorCalculationStrategy } from "./ItemwiseIndicatorCalculationStrategy";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { ItemwiseStrategyCalculationStrategy } from "./ItemwiseStrategyCalculationStrategy";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class ItemwiseStrategyBasedIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(ItemwiseStrategyBasedIndicator, 'ItemwiseStrategyBasedIndicator', (<any>StrategyBasedIndicator).$type);
	private _actualItemwiseStrategy: ItemwiseIndicatorCalculationStrategy;
	get actualItemwiseStrategy(): ItemwiseIndicatorCalculationStrategy {
		return this._actualItemwiseStrategy;
	}
	set actualItemwiseStrategy(value: ItemwiseIndicatorCalculationStrategy) {
		this._actualItemwiseStrategy = value;
	}
	abstract get itemwiseStrategy(): ItemwiseIndicatorCalculationStrategy;
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new ItemwiseStrategyCalculationStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	constructor() {
		super();
	}
	protected initializeIndicator(): void {
		super.initializeIndicator();
		this.actualItemwiseStrategy = this.itemwiseStrategy;
		(<ItemwiseStrategyCalculationStrategy>this.actualCalculationStrategy).itemwiseStrategy = this.actualItemwiseStrategy;
	}
}


