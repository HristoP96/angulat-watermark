/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StrategyBasedIndicator } from "./StrategyBasedIndicator";
import { IndicatorCalculationStrategy } from "./IndicatorCalculationStrategy";
import { AccumulationDistributionIndicatorStrategy } from "./AccumulationDistributionIndicatorStrategy";
import { Type, Base, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AccumulationDistributionIndicator extends StrategyBasedIndicator {
	static $t: Type = markType(AccumulationDistributionIndicator, 'AccumulationDistributionIndicator', (<any>StrategyBasedIndicator).$type);
	protected get_calculationStrategy(): IndicatorCalculationStrategy {
		return new AccumulationDistributionIndicatorStrategy();
	}
	protected get calculationStrategy(): IndicatorCalculationStrategy {
		return this.get_calculationStrategy();
	}
	protected get_styleKeyType(): Type {
		return (<any>AccumulationDistributionIndicator).$type;
	}
	protected get styleKeyType(): Type {
		return this.get_styleKeyType();
	}
}


