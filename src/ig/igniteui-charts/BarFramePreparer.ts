/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryFramePreparer } from "./CategoryFramePreparer";
import { IIsCategoryBased } from "./IIsCategoryBased";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { ISupportsErrorBars, ISupportsErrorBars_$type } from "./ISupportsErrorBars";
import { IBucketizer, IBucketizer_$type } from "./IBucketizer";
import { DefaultCategoryTrendlineHost } from "./DefaultCategoryTrendlineHost";
import { IHasCategoryTrendline, IHasCategoryTrendline_$type } from "./IHasCategoryTrendline";
import { DefaultSingleValueProvider } from "./DefaultSingleValueProvider";
import { IHasSingleValueCategory, IHasSingleValueCategory_$type } from "./IHasSingleValueCategory";
import { CategoryFrame } from "./CategoryFrame";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, IList$1, IList$1_$type, typeCast, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { FramePreparer } from "./FramePreparer";
import { PreparationParams } from "./PreparationParams";
import { ValuesHolder } from "./ValuesHolder";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { IHasTrendline } from "./IHasTrendline";
import { IScaler } from "./IScaler";
import { ScalerParams } from "./ScalerParams";
import { SingleValuesHolder } from "./SingleValuesHolder";
import { ISortingAxis } from "./ISortingAxis";
import { SafeSortedReadOnlyDoubleCollection } from "./SafeSortedReadOnlyDoubleCollection";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class BarFramePreparer extends CategoryFramePreparer {
	static $t: Type = markType(BarFramePreparer, 'BarFramePreparer', (<any>CategoryFramePreparer).$type);
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
					this.trendlineHost = new DefaultCategoryTrendlineHost();
					if (typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host) !== null) {
						this.trendlineHost = typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host);
					}
					this.valuesProvider = new DefaultSingleValueProvider();
					if (typeCast<IHasSingleValueCategory>(IHasSingleValueCategory_$type, host) !== null) {
						this.valuesProvider = typeCast<IHasSingleValueCategory>(IHasSingleValueCategory_$type, host);
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
				this.trendlineHost = new DefaultCategoryTrendlineHost();
				if (typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host) !== null) {
					this.trendlineHost = typeCast<IHasCategoryTrendline>(IHasCategoryTrendline_$type, host);
				}
				this.valuesProvider = new DefaultSingleValueProvider();
				if (typeCast<IHasSingleValueCategory>(IHasSingleValueCategory_$type, host) !== null) {
					this.valuesProvider = typeCast<IHasSingleValueCategory>(IHasSingleValueCategory_$type, host);
				}
			}
			break;

		}

	}
	protected prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let x: number = bucket[1];
		let y: number = bucket[0];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			this.markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	protected prepareTrendline(p: PreparationParams, h: ValuesHolder, offset: number): void {
		if (this.trendlineHost.trendLineType == TrendLineType.None || this.trendlineHost.trendlinePreparer == null || this.trendlineHost.trendLinePeriod < 1) {
			return;
		}
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let sParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.scaler.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.yScaler.isInverted, effectiveViewportRect);
		let values: IList$1<number> = (<SingleValuesHolder>h).values;
		if (p.sortingScaler != null && p.sortingScaler.sortedIndices != null) {
			values = new SafeSortedReadOnlyDoubleCollection(0, values, p.sortingScaler.sortedIndices);
		}
		let trendResolutionParams: TrendResolutionParams = ((() => {
			let $ret = new TrendResolutionParams();
			$ret.bucketSize = p.bucketSize;
			$ret.firstBucket = p.firstBucket;
			$ret.lastBucket = p.lastBucket;
			$ret.offset = offset;
			$ret.resolution = p.resolution;
			$ret.viewport = p.viewportRect;
			return $ret;
		})());
		if (<TrendLineType>this.trendlineHost.trendLineType != TrendLineType.None) {
			this.trendlineHost.trendlinePreparer.prepareLineCore(p.frame.trend, this.trendlineHost.trendLineType, values, this.trendlineHost.trendLinePeriod, (x: number) => p.yScaler.getScaledValue(x, yParams), (y: number) => p.scaler.getScaledValue(y, sParams), trendResolutionParams);
		}
	}
}


