/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StackedBarBucketCalculator } from "./StackedBarBucketCalculator";
import { CategorySeriesView } from "./CategorySeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Rect } from "igniteui-core/Rect";
import { CategoryFrame } from "./CategoryFrame";
import { StackedBarSeries } from "./StackedBarSeries";
import { BarFragment } from "./BarFragment";
import { ScalerParams } from "./ScalerParams";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { ValueType, IList$1, IList$1_$type, Base, typeCast, Type, markType } from "igniteui-core/type";
import { FragmentBase } from "./FragmentBase";
import { Series } from "./Series";
import { StackedSeriesBase } from "./StackedSeriesBase";
import { StackedFragmentSeries } from "./StackedFragmentSeries";
import { List$1 } from "igniteui-core/List$1";
import { VerticalStackedSeriesBase } from "./VerticalStackedSeriesBase";
import { Axis } from "./Axis";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class Stacked100BarBucketCalculator extends StackedBarBucketCalculator {
	static $t: Type = markType(Stacked100BarBucketCalculator, 'Stacked100BarBucketCalculator', (<any>StackedBarBucketCalculator).$type);
	constructor(view: CategorySeriesView) {
		super(view);
	}
	getBucket(index: number): number[] {
		return super.getBucket(index);
	}
	getBucket1(series: AnchoredCategorySeries, index: number, sortingIndex: number, windowRect: Rect, viewportRect: Rect, currentFrame: CategoryFrame): number[] {
		let barSeries: StackedBarSeries = typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.view.categoryModel);
		let bucket: number[] = <number[]>[ NaN, NaN, NaN ];
		let fragment: BarFragment = typeCast<BarFragment>((<any>BarFragment).$type, series);
		if (fragment == null || fragment.logicalSeriesLink == null) {
			return bucket;
		}
		let value: number = series.valueColumn.item(sortingIndex);
		let total: number = 0;
		let zero: number = 0;
		let min: number = NaN;
		let max: number = NaN;
		let high: number = Number.NEGATIVE_INFINITY;
		let low: number = Number.POSITIVE_INFINITY;
		let effectiveViewportRect: Rect = barSeries.getEffectiveViewport1(this.view);
		let count: number = Math.min(barSeries.lows != null ? barSeries.lows.length : 0, barSeries.highs != null ? barSeries.highs.length : 0);
		let i0: number = sortingIndex * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		for (let i: number = i0; i <= i1; ++i) {
			value = series.valueColumn.item(i);
			total = Math.abs(barSeries.lows[i]) + barSeries.highs[i];
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
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, barSeries.xAxis.isInverted, effectiveViewportRect);
		bucket = [ currentFrame.buckets._inner[index - this.firstBucket][0], barSeries.xAxis.getScaledValue(max, xParams), barSeries.xAxis.getScaledValue(min, xParams) ];
		return bucket;
	}
}


