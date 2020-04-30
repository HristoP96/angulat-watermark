/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ItemwiseStrategyBasedIndicator } from "./ItemwiseStrategyBasedIndicator";
import { ItemwiseIndicatorCalculationStrategy } from "./ItemwiseIndicatorCalculationStrategy";
import { MarketFacilitationIndexIndicatorStrategy } from "./MarketFacilitationIndexIndicatorStrategy";
import { Type, Base, markType } from "igniteui-core/type";
import { FinancialIndicator } from "./FinancialIndicator";
import { IndicatorDisplayType } from "./IndicatorDisplayType";

/**
 * @hidden 
 */
export class MarketFacilitationIndexIndicator extends ItemwiseStrategyBasedIndicator {
	static $t: Type = markType(MarketFacilitationIndexIndicator, 'MarketFacilitationIndexIndicator', (<any>ItemwiseStrategyBasedIndicator).$type);
	constructor() {
		super();
		this.displayType = IndicatorDisplayType.Area;
	}
	protected get_itemwiseStrategy(): ItemwiseIndicatorCalculationStrategy {
		return new MarketFacilitationIndexIndicatorStrategy();
	}
	get itemwiseStrategy(): ItemwiseIndicatorCalculationStrategy {
		return this.get_itemwiseStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>MarketFacilitationIndexIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
}


