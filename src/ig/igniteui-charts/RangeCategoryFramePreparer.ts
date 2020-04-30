/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { IHasCategoryTrendline, IHasCategoryTrendline_$type } from "./IHasCategoryTrendline";
import { IHasHighLowValueCategory, IHasHighLowValueCategory_$type } from "./IHasHighLowValueCategory";
import { IIsCategoryBased } from "./IIsCategoryBased";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { ISupportsErrorBars, ISupportsErrorBars_$type } from "./ISupportsErrorBars";
import { IBucketizer, IBucketizer_$type } from "./IBucketizer";
import { DefaultCategoryTrendlineHost } from "./DefaultCategoryTrendlineHost";
import { DefaultHighLowValueProvider } from "./DefaultHighLowValueProvider";
import { CategoryFrame } from "./CategoryFrame";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { List$1 } from "igniteui-core/List$1";
import { Point, IList$1, IList$1_$type, Base, typeCast, Point_$type, Number_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { FramePreparer } from "./FramePreparer";
import { ValuesHolder } from "./ValuesHolder";
import { HighLowValuesHolder } from "./HighLowValuesHolder";
import { PreparationParams } from "./PreparationParams";
import { ScalerParams } from "./ScalerParams";
import { IScaler } from "./IScaler";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RangeCategoryFramePreparer extends CategoryFramePreparerBase {
	static $t: Type = markType(RangeCategoryFramePreparer, 'RangeCategoryFramePreparer', (<any>CategoryFramePreparerBase).$type);
	constructor(initNumber: number, host: IIsCategoryBased);
	constructor(initNumber: number, host: IIsCategoryBased, markersHost: ISupportsMarkers, viewportHost: IProvidesViewport, errorBarsHost: ISupportsErrorBars, bucketizingHost: IBucketizer);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let host: IIsCategoryBased = <IIsCategoryBased>_rest[0];
				let $outerArgs = <any[]>[ host, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, host), typeCast<IProvidesViewport>(IProvidesViewport_$type, host), typeCast<ISupportsErrorBars>(ISupportsErrorBars_$type, host), typeCast<IBucketizer>(IBucketizer_$type, host) ];
				{
					let host: IIsCategoryBased = <IIsCategoryBased>$outerArgs[0];
					let markersHost: ISupportsMarkers = <ISupportsMarkers>$outerArgs[1];
					let viewportHost: IProvidesViewport = <IProvidesViewport>$outerArgs[2];
					let errorBarsHost: ISupportsErrorBars = <ISupportsErrorBars>$outerArgs[3];
					let bucketizingHost: IBucketizer = <IBucketizer>$outerArgs[4];
					super(1, host, markersHost, viewportHost, errorBarsHost, bucketizingHost);
					this._trendlineHost = null;
					this._valuesProvider = null;
					this.trendlineHost = new DefaultCategoryTrendlineHost();
					if (typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host) !== null) {
						this.trendlineHost = typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host);
					}
					this.valuesProvider = new DefaultHighLowValueProvider();
					if (typeCast<IHasHighLowValueCategory>(IHasHighLowValueCategory_$type, host) !== null) {
						this.valuesProvider = typeCast<IHasHighLowValueCategory>(IHasHighLowValueCategory_$type, host);
					}
				}
			}
			break;

			case 1:
			{
				let host: IIsCategoryBased = <IIsCategoryBased>_rest[0];
				let markersHost: ISupportsMarkers = <ISupportsMarkers>_rest[1];
				let viewportHost: IProvidesViewport = <IProvidesViewport>_rest[2];
				let errorBarsHost: ISupportsErrorBars = <ISupportsErrorBars>_rest[3];
				let bucketizingHost: IBucketizer = <IBucketizer>_rest[4];
				super(1, host, markersHost, viewportHost, errorBarsHost, bucketizingHost);
				this._trendlineHost = null;
				this._valuesProvider = null;
				this.trendlineHost = new DefaultCategoryTrendlineHost();
				if (typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host) !== null) {
					this.trendlineHost = typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host);
				}
				this.valuesProvider = new DefaultHighLowValueProvider();
				if (typeCast<IHasHighLowValueCategory>(IHasHighLowValueCategory_$type, host) !== null) {
					this.valuesProvider = typeCast<IHasHighLowValueCategory>(IHasHighLowValueCategory_$type, host);
				}
			}
			break;

		}

	}
	private _trendlineHost: IHasCategoryTrendline;
	protected get trendlineHost(): IHasCategoryTrendline {
		return this._trendlineHost;
	}
	protected set trendlineHost(value: IHasCategoryTrendline) {
		this._trendlineHost = value;
	}
	private _valuesProvider: IHasHighLowValueCategory;
	protected get valuesProvider(): IHasHighLowValueCategory {
		return this._valuesProvider;
	}
	protected set valuesProvider(value: IHasHighLowValueCategory) {
		this._valuesProvider = value;
	}
	protected prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let x: number = bucket[0];
		let yLow: number = bucket[1];
		let yHigh: number = bucket[2];
		if (!isNaN_(x) && !isNaN_(yLow) && !isNaN_(yHigh)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: (yLow + yHigh) / 2 });
			this.markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	protected storeYValues(h: ValuesHolder, index: number, useTemp: boolean, isFragment: boolean): void {
		let hl = <HighLowValuesHolder>h;
		let highValues: IList$1<number> = hl.highValues;
		let lowValues: IList$1<number> = hl.lowValues;
		let bucketHigh: number = highValues.item(index);
		let bucketLow: number = lowValues.item(index);
		let currentHigh: number = Math.max(bucketHigh, bucketLow);
		let currentLow: number = Math.min(bucketHigh, bucketLow);
		if (useTemp) {
			hl.tempY0 = currentLow;
			hl.tempY1 = currentHigh;
		} else {
			hl.bucketY1 = currentHigh;
			hl.bucketY0 = currentLow;
		}
	}
	protected minMaxYValues(h: ValuesHolder, index: number, isFragment: boolean): void {
		let hl = <HighLowValuesHolder>h;
		let highValues: IList$1<number> = hl.highValues;
		let lowValues: IList$1<number> = hl.lowValues;
		let high: number = highValues.item(index);
		let low: number = lowValues.item(index);
		if (!isNaN_(high)) {
			hl.bucketY1 = Math.max(hl.bucketY1, high);
			hl.bucketY0 = Math.min(hl.bucketY0, high);
		}
		if (!isNaN_(low)) {
			hl.bucketY1 = Math.max(hl.bucketY1, low);
			hl.bucketY0 = Math.min(hl.bucketY0, low);
		}
	}
	protected getBucketSorting(xVal: number, h: ValuesHolder): number[] {
		let hl = <HighLowValuesHolder>h;
		return <number[]>[ xVal, hl.bucketY0, hl.bucketY1 ];
	}
	protected scaleBucketValues(p: PreparationParams, bucket: number[], offset: number, isSortingScaler: boolean, xParams: ScalerParams, yParams: ScalerParams): void {
		if (isSortingScaler) {
			bucket[0] = bucket[0] + offset;
		} else {
			bucket[0] = p.scaler.getScaledValue(bucket[0], xParams) + offset;
		}
		bucket[1] = p.yScaler.getScaledValue(bucket[1], yParams);
		bucket[2] = p.yScaler.getScaledValue(bucket[2], yParams);
	}
	protected scaleFrameBucketValues(pp: PreparationParams, offset: number, isSortingScaler: boolean, xParams: ScalerParams, yParams: ScalerParams, errorBars: boolean, markers: boolean): void {
		super.scaleFrameBucketValues(pp, offset, isSortingScaler, xParams, yParams, errorBars, markers);
		let bucketSize = pp.bucketSize;
		let bucketCount = pp.frame.buckets.count;
		let buckets = pp.frame.buckets;
		let markerBuckets = this.markerBuckets;
		let markerBucketCount = markerBuckets.count;
		let toXScale: List$1<number> = new List$1<number>(Number_$type, 0);
		if (!isSortingScaler) {
			toXScale.add(0);
		}
		let toYScale: List$1<number> = new List$1<number>(Number_$type, 0);
		toYScale.add(1);
		toYScale.add(2);
		pp.scaler.getScaledBucketValueList(buckets, toXScale, 0, bucketCount, xParams);
		pp.yScaler.getScaledBucketValueList(buckets, toYScale, 0, bucketCount, yParams);
		for (let i = 0; i < bucketCount; i++) {
			buckets._inner[i][0] = buckets._inner[i][0] + offset;
		}
		if (markers) {
			pp.scaler.getScaledBucketValueList(markerBuckets, toXScale, 0, markerBucketCount, xParams);
			pp.yScaler.getScaledBucketValueList(markerBuckets, toYScale, 0, markerBucketCount, yParams);
			for (let i1 = 0; i1 < markerBucketCount; i1++) {
				markerBuckets._inner[i1][0] = markerBuckets._inner[i1][0] + offset;
			}
		}
	}
	protected getValues(p: PreparationParams): ValuesHolder {
		let hl = new HighLowValuesHolder();
		hl.highValues = this.valuesProvider.highColumn;
		hl.lowValues = this.valuesProvider.lowColumn;
		return hl;
	}
}


