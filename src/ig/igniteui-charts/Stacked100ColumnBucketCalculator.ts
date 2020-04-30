/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedColumnBucketCalculator } from "./StackedColumnBucketCalculator";
import { CategorySeriesView } from "./CategorySeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Rect } from "igniteui-core/Rect";
import { CategoryFrame } from "./CategoryFrame";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { ColumnFragment } from "./ColumnFragment";
import { ScalerParams } from "./ScalerParams";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { ValueType, IList$1, IList$1_$type, Base, typeCast, Type, markType } from "igniteui-core/type";
import { FragmentBase } from "./FragmentBase";
import { Series } from "./Series";
import { StackedFragmentSeries } from "./StackedFragmentSeries";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class Stacked100ColumnBucketCalculator extends StackedColumnBucketCalculator {
	static $t: Type = markType(Stacked100ColumnBucketCalculator, 'Stacked100ColumnBucketCalculator', (<any>StackedColumnBucketCalculator).$type);
	constructor(view: CategorySeriesView) {
		super(view);
	}
	getBucket(index: number): number[] {
		return super.getBucket(index);
	}
	getBucket1(series: AnchoredCategorySeries, index: number, sortingIndex: number, windowRect: Rect, viewportRect: Rect, currentFrame: CategoryFrame): number[] {
		let stackedSeries: StackedSeriesBase = typeCast<StackedSeriesBase>((<any>StackedSeriesBase).$type, this.view.categoryModel);
		let bucket: number[] = <number[]>[ NaN, NaN, NaN ];
		let fragment: ColumnFragment = typeCast<ColumnFragment>((<any>ColumnFragment).$type, series);
		if (fragment == null || fragment.logicalSeriesLink == null) {
			return bucket;
		}
		let effectiveViewportRect: Rect = stackedSeries.getEffectiveViewport1(this.view);
		let value: number = series.valueColumn.item(sortingIndex);
		let zero: number = 0;
		let min: number = NaN;
		let max: number = NaN;
		let high: number = Number.NEGATIVE_INFINITY;
		let low: number = Number.POSITIVE_INFINITY;
		let total: number = 0;
		let count: number = Math.min(stackedSeries.lows != null ? stackedSeries.lows.length : 0, stackedSeries.highs != null ? stackedSeries.highs.length : 0);
		let i0: number = sortingIndex * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		for (let i: number = i0; i <= i1; ++i) {
			value = series.valueColumn.item(i);
			total = Math.abs(stackedSeries.lows[i]) + stackedSeries.highs[i];
			if (value < zero) {
				low = Math.min(low, (fragment.logicalSeriesLink.lowValues._inner[i] + value) / total * 100);
				high = Math.max(high, fragment.logicalSeriesLink.lowValues._inner[i] / total * 100);
			} else {
				low = Math.min(low, fragment.logicalSeriesLink.highValues._inner[i] / total * 100);
				high = Math.max(high, (fragment.logicalSeriesLink.highValues._inner[i] + value) / total * 100);
			}
			if (!isNaN_(min)) {
				if (!isNaN_(low)) {
					min = Math.min(min, low);
					max = Math.max(max, low);
				}
				if (!isNaN_(high)) {
					min = Math.min(min, high);
					max = Math.max(max, high);
				}
			} else {
				min = low;
				max = high;
			}
		}
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, fragment.fragmentYAxis.isInverted, effectiveViewportRect);
		bucket = [ currentFrame.buckets._inner[index - this.firstBucket][0], fragment.fragmentYAxis.getScaledValue(max, yParams), fragment.fragmentYAxis.getScaledValue(min, yParams) ];
		return bucket;
	}
}


