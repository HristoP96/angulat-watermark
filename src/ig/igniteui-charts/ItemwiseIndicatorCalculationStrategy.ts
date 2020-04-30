/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Type, markType } from "igniteui-core/type";
import { FinancialCalculationDataSource } from "./FinancialCalculationDataSource";
import { FinancialCalculationSupportingCalculations } from "./FinancialCalculationSupportingCalculations";

/**
 * @hidden 
 */
export abstract class ItemwiseIndicatorCalculationStrategy extends Base {
	static $t: Type = markType(ItemwiseIndicatorCalculationStrategy, 'ItemwiseIndicatorCalculationStrategy');
	abstract calculateIndicatorItem(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations, currentIndex: number): boolean;
	abstract basedOn(dataSource: FinancialCalculationDataSource, supportingCalculations: FinancialCalculationSupportingCalculations): IList$1<string>;
}


