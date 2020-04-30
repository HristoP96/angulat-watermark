/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { Series } from "./Series";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { FinancialSeries } from "./FinancialSeries";
import { IList$1, IList$1_$type, ValueType, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialPriceBucketCalculator extends FinancialBucketCalculator {
	static $t: Type = markType(FinancialPriceBucketCalculator, 'FinancialPriceBucketCalculator', (<any>FinancialBucketCalculator).$type);
	constructor(view: FinancialSeriesView) {
		super(view);
	}
	getBucket(index: number): number[] {
		let i0: number = index * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.view.financialModel.fastItemsSource.count - 1);
		if (i0 <= i1 && i0 >= 0 && i1 >= 0) {
			let open: number = this.view.financialModel.openColumn.item(i0);
			let high: number = Number.NEGATIVE_INFINITY;
			let low: number = Number.POSITIVE_INFINITY;
			let close: number = this.view.financialModel.closeColumn.item(i1);
			for (let i: number = i0; i <= i1; ++i) {
				high = Math.max(high, this.view.financialModel.highColumn.item(i));
				low = Math.min(low, this.view.financialModel.lowColumn.item(i));
			}
			low = Math.min(open, low);
			high = Math.max(close, high);
			return <number[]>[ 0.5 * (i0 + i1), open, high, low, close ];
		}
		return <number[]>[ NaN, NaN, NaN, NaN, NaN ];
	}
}


