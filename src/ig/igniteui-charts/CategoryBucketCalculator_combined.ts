/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType, Point, ValueType, Array_$type, Number_$type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point_$type, PointUtil, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Boolean_$type, enumGetBox, EnumUtil, runOn, fromEnum } from "igniteui-core/type";
import { IBucketizer, IBucketizer_$type } from "./IBucketizer";
import { ArgumentNullException } from "igniteui-core/ArgumentNullException";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { ScalerParams } from "./ScalerParams";
import { SeriesView } from "./SeriesView";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { CategoryMode } from "./CategoryMode";
import { truncate, intDivide, isNaN_, isInfinity } from "igniteui-core/number";
import { FramePreparer } from "./FramePreparer";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { List$1 } from "igniteui-core/List$1";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { ISupportsErrorBars, ISupportsErrorBars_$type } from "./ISupportsErrorBars";
import { CategoryFrame } from "./CategoryFrame";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { PreparationParams } from "./PreparationParams";
import { Frame } from "./Frame";
import { ICategoryScaler } from "./ICategoryScaler";
import { ValuesHolder } from "./ValuesHolder";
import { IDateTimeAxis, IDateTimeAxis_$type } from "./IDateTimeAxis";
import { NumericAxisBase } from "./NumericAxisBase";
import { IScaler } from "./IScaler";
import { IHasCategoryTrendline, IHasCategoryTrendline_$type } from "./IHasCategoryTrendline";
import { IHasSingleValueCategory, IHasSingleValueCategory_$type } from "./IHasSingleValueCategory";
import { DefaultCategoryTrendlineHost } from "./DefaultCategoryTrendlineHost";
import { DefaultSingleValueProvider } from "./DefaultSingleValueProvider";
import { SingleValuesHolder } from "./SingleValuesHolder";
import { IHasTrendline } from "./IHasTrendline";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { TrendLineType } from "igniteui-core/TrendLineType";
import { MarkerSeries } from "./MarkerSeries";
import { IHasCategoryModePreference, IHasCategoryModePreference_$type } from "./IHasCategoryModePreference";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { ICategorySeriesInteractionManager, ICategorySeriesInteractionManager_$type } from "./ICategorySeriesInteractionManager";
import { DVContainer } from "igniteui-core/DVContainer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { HighlightingInfo } from "./HighlightingInfo";
import { CategoryTransitionSourceFramePreparer } from "./CategoryTransitionSourceFramePreparer";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { SeriesViewer } from "./SeriesViewer";
import { Marker } from "./Marker";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { Control } from "igniteui-core/Control";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { AssigningCategoryMarkerStyleEventArgs } from "./AssigningCategoryMarkerStyleEventArgs";
import { SeriesComponentsForView } from "./SeriesComponentsForView";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AssigningCategoryStyleEventArgsBase } from "./AssigningCategoryStyleEventArgsBase";
import { IHighlightingManager } from "./IHighlightingManager";
import { TransitionInSpeedType } from "./TransitionInSpeedType";
import { DataContext } from "igniteui-core/DataContext";
import { ContentControl } from "igniteui-core/ContentControl";
import { RenderSurface } from "./RenderSurface";
import { SeriesViewerView } from "./SeriesViewerView";
import { Clipper } from "igniteui-core/Clipper";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SRProvider } from "igniteui-core/SRProvider";
import { Visibility } from "igniteui-core/Visibility";
import { round10N } from "igniteui-core/numberExtended";

/**
 * @hidden 
 */
export class CategoryBucketCalculator extends Base implements IBucketizer {
	static $t: Type = markType(CategoryBucketCalculator, 'CategoryBucketCalculator', (<any>Base).$type, [IBucketizer_$type]);
	private _view: CategorySeriesView = null;
	protected get view(): CategorySeriesView {
		return this._view;
	}
	protected set view(value: CategorySeriesView) {
		this._view = value;
	}
	constructor(view: CategorySeriesView) {
		super();
		if (view == null) {
			throw new ArgumentNullException(0, "view");
		}
		this.view = view;
		this.firstBucket = -1;
		this.bucketSize = 0;
	}
	firstBucket: number = 0;
	lastBucket: number = 0;
	bucketSize: number = 0;
	getBucket(bucket: number): number[] {
		return null;
	}
	getBucketWithoutUnknowns(bucket: number): number[] {
		return this.getBucket(bucket);
	}
	getErrorBucket(bucket: number, column: IFastItemColumn$1<number>): number {
		return NaN;
	}
	calculateBuckets(resolution: number): void {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let categorySeries: CategorySeries = this.view.categoryModel;
		let xAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, categorySeries.fetchXAxis());
		let fastItemsSource: IFastItemsSource = categorySeries.fastItemsSource;
		if (windowRect.isEmpty || viewportRect.isEmpty || xAxis == null || fastItemsSource == null || fastItemsSource.count == 0) {
			this.bucketSize = 0;
			return;
		}
		let effectiveViewportRect: Rect = categorySeries.getEffectiveViewport1(this.view);
		let contentViewport: Rect = categorySeries.getContentViewport(this.view);
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xAxis);
		if (sortingXAxis == null || sortingXAxis.sortedIndices == null) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xAxis.isInverted, effectiveViewportRect);
			let x0: number = Math.floor(xAxis.getUnscaledValue1(contentViewport.left, p, CategoryMode.Mode0));
			let x1: number = Math.ceil(xAxis.getUnscaledValue1(contentViewport.right, p, CategoryMode.Mode0));
			if (xAxis.isInverted) {
				x1 = Math.ceil(xAxis.getUnscaledValue1(contentViewport.left, p, CategoryMode.Mode0));
				x0 = Math.floor(xAxis.getUnscaledValue1(contentViewport.right, p, CategoryMode.Mode0));
			}
			let c: number = Math.floor((x1 - x0 + 1) * resolution / contentViewport.width);
			this.bucketSize = <number>truncate(Math.max(1, c));
			this.firstBucket = <number>truncate(Math.max(0, Math.floor(x0 / this.bucketSize) - 1));
			this.lastBucket = <number>truncate(Math.ceil(x1 / this.bucketSize));
		} else {
			this.firstBucket = sortingXAxis.getFirstVisibleIndex(windowRect, viewportRect, effectiveViewportRect, contentViewport);
			this.lastBucket = sortingXAxis.getLastVisibleIndex(windowRect, viewportRect, effectiveViewportRect, contentViewport);
			this.bucketSize = 1;
		}
	}
	getBucketInfo(firstBucket: number, lastBucket: number, bucketSize: number, resolution: number): { p0: number; p1: number; p2: number; p3: number; } {
		firstBucket = this.firstBucket;
		lastBucket = this.lastBucket;
		bucketSize = this.bucketSize;
		resolution = this.view.categoryModel.resolution;
		return {
			p0: firstBucket,
			p1: lastBucket,
			p2: bucketSize,
			p3: resolution

		};
	}
	cacheValues(): void {
	}
	unCacheValues(): void {
	}
}

/**
 * @hidden 
 */
export abstract class CategoryFramePreparerBase extends FramePreparer {
	static $t: Type = markType(CategoryFramePreparerBase, 'CategoryFramePreparerBase', (<any>FramePreparer).$type);
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
					super(1, markersHost, viewportHost, errorBarsHost);
					this._bucketizingHost = null;
					this._categoryBasedHost = null;
					this._skipUnknowns = false;
					this._markerBuckets = new List$1<number[]>(Array_$type, 0);
					this._markerItemIndexes = new List$1<number>(Number_$type, 0);
					this._markerBucketIndexes = new List$1<number>(Number_$type, 0);
					this.categoryBasedHost = host;
					this.bucketizingHost = bucketizingHost;
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
				super(1, markersHost, viewportHost, errorBarsHost);
				this._bucketizingHost = null;
				this._categoryBasedHost = null;
				this._skipUnknowns = false;
				this._markerBuckets = new List$1<number[]>(Array_$type, 0);
				this._markerItemIndexes = new List$1<number>(Number_$type, 0);
				this._markerBucketIndexes = new List$1<number>(Number_$type, 0);
				this.categoryBasedHost = host;
				this.bucketizingHost = bucketizingHost;
			}
			break;

		}

	}
	private _bucketizingHost: IBucketizer;
	get bucketizingHost(): IBucketizer {
		return this._bucketizingHost;
	}
	set bucketizingHost(value: IBucketizer) {
		this._bucketizingHost = value;
	}
	private _categoryBasedHost: IIsCategoryBased;
	get categoryBasedHost(): IIsCategoryBased {
		return this._categoryBasedHost;
	}
	set categoryBasedHost(value: IIsCategoryBased) {
		this._categoryBasedHost = value;
	}
	protected abstract prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, itemIndex: number, markerCount: number, markerBucket: number): boolean;
	private _skipUnknowns: boolean;
	get skipUnknowns(): boolean {
		return this._skipUnknowns;
	}
	set skipUnknowns(value: boolean) {
		this._skipUnknowns = value;
	}
	private getParams(inputFrame: Frame): PreparationParams {
		let p: PreparationParams = new PreparationParams();
		p.useHighMarkerFidelity = this.categoryBasedHost.useHighMarkerFidelity;
		p.scaler = this.categoryBasedHost.scaler;
		p.yScaler = this.categoryBasedHost.yScaler;
		p.sortingScaler = typeCast<ISortingAxis>(ISortingAxis_$type, p.scaler);
		p.frame = typeCast<CategoryFrame>((<any>CategoryFrame).$type, inputFrame);
		if (p.frame == null || p.scaler == null || p.yScaler == null) {
			return null;
		}
		let firstBucket: number;
		let lastBucket: number;
		let bucketSize: number;
		let resolution: number;
		let $ret = this.bucketizingHost.getBucketInfo(firstBucket, lastBucket, bucketSize, resolution);
		firstBucket = $ret.p0;
		lastBucket = $ret.p1;
		bucketSize = $ret.p2;
		resolution = $ret.p3;
		p.firstBucket = firstBucket;
		p.lastBucket = lastBucket;
		p.bucketSize = bucketSize;
		p.resolution = resolution;
		if (p.lastBucket < p.firstBucket) {
			return null;
		}
		let windowRect: Rect;
		let viewportRect: Rect;
		let effectiveViewportRect: Rect;
		let $ret1 = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret1.p0;
		windowRect = $ret1.p1;
		effectiveViewportRect = this.viewportHost.getEffectiveViewport();
		p.windowRect = windowRect;
		p.viewportRect = viewportRect;
		p.effectiveViewportRect = effectiveViewportRect;
		if (Rect.l_op_Equality(p.windowRect, Rect.empty) || Rect.l_op_Equality(p.viewportRect, Rect.empty)) {
			return null;
		}
		if (this.categoryBasedHost != null && (typeCast<Series>((<any>Series).$type, this.categoryBasedHost) !== null && (<Series><any>this.categoryBasedHost).isFragment) && this.bucketizingHost != null) {
			p.isFragment = true;
		}
		return p;
	}
	getOffset(scaler: ICategoryScaler, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return scaler.getSeriesOffset(windowRect, viewportRect, effectiveViewportRect, this.categoryBasedHost.currentMode2Index, <number>this.categoryBasedHost.currentCategoryMode);
	}
	private getOffset1(p: PreparationParams): number {
		return this.getOffset(p.scaler, p.windowRect, p.viewportRect, p.effectiveViewportRect);
	}
	prepareFrame(inputFrame: Frame, view: SeriesView): void {
		let p: PreparationParams = this.getParams(inputFrame);
		if (p == null || this.bucketizingHost == null) {
			return;
		}
		p.frame.buckets.clear();
		p.frame.errorBuckets.clear();
		p.frame.markers.clear();
		p.frame.trend.clear();
		p.frame.errorBars.clear();
		p.frame.errorBarPositiveSizes.clear();
		p.frame.errorBarNegativeSizes.clear();
		let markers: boolean = this.markersHost.shouldDisplayMarkers;
		let errorBars: boolean = false;
		let offset: number = this.getOffset1(p);
		let h: ValuesHolder = this.getValues(p);
		if (p.sortingScaler != null && p.sortingScaler.sortedIndices != null && p.sortingScaler.sortedIndices.count != h.count) {
			return;
		}
		if (p.sortingScaler != null && p.sortingScaler.isDateTime) {
			p.sortingScaler.ensureActualMinimumAndMaximum();
		}
		this.bucketizingHost.cacheValues();
		if (this.skipUnknowns && p.sortingScaler != null && p.sortingScaler.sortedIndices.count > 0) {
			let firstIndex = p.sortingScaler.sortedIndices._inner[p.firstBucket];
			this.storeYValues(h, firstIndex, true, p.isFragment);
			while ((isNaN_(h.tempY0) || isNaN_(h.tempY1)) && p.firstBucket > 0) {
				p.firstBucket = p.firstBucket - 1;
				firstIndex = p.sortingScaler.sortedIndices._inner[p.firstBucket];
				this.storeYValues(h, firstIndex, true, p.isFragment);
			}
			let lastIndex = p.sortingScaler.sortedIndices._inner[p.lastBucket];
			this.storeYValues(h, lastIndex, true, p.isFragment);
			while ((isNaN_(h.tempY0) || isNaN_(h.tempY1)) && p.lastBucket < h.count - 1) {
				p.lastBucket = p.lastBucket + 1;
				lastIndex = p.sortingScaler.sortedIndices._inner[p.lastBucket];
				this.storeYValues(h, lastIndex, true, p.isFragment);
			}
		}
		if (this.skipUnknowns && p.sortingScaler == null) {
			let firstIndex1 = p.firstBucket;
			let bucket = this.bucketizingHost.getBucket(firstIndex1);
			while ((isNaN_(bucket[1]) || isNaN_(bucket[2])) && p.firstBucket > 0) {
				p.firstBucket = p.firstBucket - 1;
				firstIndex1 = p.firstBucket;
				bucket = this.bucketizingHost.getBucket(firstIndex1);
			}
			let lastIndex1 = p.lastBucket;
			bucket = this.bucketizingHost.getBucket(lastIndex1);
			while ((isNaN_(bucket[1]) || isNaN_(bucket[2])) && p.lastBucket < (intDivide(h.count, p.bucketSize))) {
				p.lastBucket = p.lastBucket + 1;
				lastIndex1 = p.lastBucket;
				bucket = this.bucketizingHost.getBucket(lastIndex1);
			}
		}
		this.prepareTrendline(p, h, offset);
		let markerCount: number = this.prepareData(p, h, offset, markers, errorBars);
		this.markersHost.updateMarkerCount(markerCount);
		this.prepareErrorBars(typeCast<CategoryFrame>((<any>CategoryFrame).$type, inputFrame), view);
		this.bucketizingHost.unCacheValues();
		return;
	}
	protected prepareErrorBars(frame: CategoryFrame, view: SeriesView): void {
	}
	private _markerBuckets: List$1<number[]>;
	protected get markerBuckets(): List$1<number[]> {
		return this._markerBuckets;
	}
	private _markerItemIndexes: List$1<number>;
	private _markerBucketIndexes: List$1<number>;
	protected prepareData(p: PreparationParams, h: ValuesHolder, offset: number, markers: boolean, errorBars: boolean): number {
		let markerCount: number = 0;
		let isCluster: boolean = false;
		let endBucket: number[] = null;
		let isAreaOrLineBasedSeries: boolean = false;
		let isSortingScaler: boolean = p.sortingScaler != null;
		let windowRect: Rect = p.windowRect;
		let viewportRect: Rect = p.viewportRect;
		let isLogarithmicYScaler: boolean = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, p.yScaler) !== null && (<NumericAxisBase><any>p.yScaler).isReallyLogarithmic;
		let highMarkerFidelity: boolean = p.useHighMarkerFidelity;
		let mayContainUknowns: boolean = this.categoryBasedHost.mayContainUnknowns;
		let markerBuckets: List$1<number[]> = this._markerBuckets;
		let markerBucketIndexes: List$1<number> = this._markerBucketIndexes;
		let markerItemIndexes: List$1<number> = this._markerItemIndexes;
		markerBuckets.clear();
		markerBucketIndexes.clear();
		markerItemIndexes.clear();
		let bucketizingHost = this.bucketizingHost;
		let collisionAvoider: IDetectsCollisions = this.categoryBasedHost.provideCollisionDetector();
		let singlePixelSpan: number = 0;
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, p.scaler.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, p.yScaler.isInverted, effectiveViewportRect);
			$ret.referenceValue = typeCast<Series>((<any>Series).$type, this.categoryBasedHost) !== null ? (<Series><any>this.categoryBasedHost).getReferenceValue() : NaN;
			return $ret;
		})());
		if (isSortingScaler) {
			singlePixelSpan = p.scaler.getUnscaledValue(2, sParams) - p.scaler.getUnscaledValue(1, sParams);
			isAreaOrLineBasedSeries = this.isAreaOrLine();
		}
		let firstBucket: number = p.firstBucket;
		let lastBucket: number = p.lastBucket;
		let frameBuckets = p.frame.buckets;
		let timeAxis: IDateTimeAxis = typeCast<IDateTimeAxis>(IDateTimeAxis_$type, p.scaler);
		if (timeAxis != null) {
			timeAxis.StartTimeCursor();
		}
		for (let i: number = firstBucket; i <= lastBucket; ++i) {
			let bucket: number[];
			if (!isSortingScaler) {
				if (!mayContainUknowns) {
					bucket = bucketizingHost.getBucketWithoutUnknowns(i);
				} else {
					bucket = bucketizingHost.getBucket(i);
				}
			} else {
				bucket = ((() => { let $ret = this.sortingBucketize(p, i, h, singlePixelSpan, isCluster, endBucket, offset); i = $ret.p1; isCluster = $ret.p4; endBucket = $ret.p5; return $ret.ret; })());
			}
			let isValidBucket: boolean = !isLogarithmicYScaler || (isLogarithmicYScaler && bucket[1] > 0);
			let bucketX = bucket[0];
			if (!isSortingScaler || !isNaN_(bucket[0])) {
				frameBuckets.add(bucket);
				if (isCluster && isAreaOrLineBasedSeries) {
					if (endBucket != null) {
						frameBuckets.add(endBucket);
					}
				}
				if (markers && isValidBucket) {
					let itemIndex: number = i * p.bucketSize;
					let unsortedIndex: number = itemIndex;
					if (isSortingScaler && p.sortingScaler.sortedIndices != null && itemIndex >= 0 && itemIndex < p.sortingScaler.sortedIndices.count) {
						itemIndex = p.sortingScaler.sortedIndices._inner[itemIndex];
					}
					let markerBucket = <number[]>new Array(bucket.length);
					markerBucket[0] = bucket[0];
					markerBucket[1] = bucket[1];
					markerBucket[2] = bucket[2];
					if (highMarkerFidelity && itemIndex < h.count) {
						markerBucket = <number[]>new Array(bucket.length);
						markerBucket[0] = bucketX;
						this.storeYValues(h, itemIndex, true, p.isFragment);
						markerBucket[1] = h.tempY0;
						markerBucket[2] = h.tempY1;
					}
					markerBuckets.add(markerBucket);
					markerBucketIndexes.add(p.frame.buckets.count - 1);
					markerItemIndexes.add(itemIndex);
				}
			}
		}
		if (timeAxis != null) {
			timeAxis.ResetTimeCursor();
		}
		this.scaleFrameBucketValues(p, offset, isSortingScaler, sParams, yParams, errorBars, markers);
		if (markers) {
			let markerBucketCount = markerBuckets.count;
			let markerBucket1: number[];
			for (let i1: number = 0; i1 < markerBucketCount; i1++) {
				markerBucket1 = markerBuckets._inner[i1];
				if (this.prepareMarker(p.frame, markerBucket1, collisionAvoider, Math.min(markerItemIndexes._inner[i1], h.count - 1), markerCount, markerBucketIndexes._inner[i1])) {
					++markerCount;
				}
			}
		}
		return markerCount;
	}
	protected isAreaOrLine(): boolean {
		if (typeCast<Series>((<any>Series).$type, this.categoryBasedHost) !== null) {
			return (<Series><any>this.categoryBasedHost).isAreaOrLine;
		}
		return false;
	}
	protected abstract storeYValues(h: ValuesHolder, index: number, useTemp: boolean, isFragment: boolean): void;
	protected abstract minMaxYValues(h: ValuesHolder, index: number, isFragment: boolean): void;
	protected abstract getBucketSorting(xVAl: number, h: ValuesHolder): number[];
	protected sortingBucketize(p: PreparationParams, currentIndex: number, h: ValuesHolder, singlePixelSpan: number, isCluster: boolean, endBucket: number[], offset: number): { ret: number[]; p1?: number; p4: boolean; p5: number[]; } {
		let bucket: number[];
		endBucket = null;
		isCluster = false;
		let series: CategorySeries = typeCast<CategorySeries>((<any>CategorySeries).$type, this.categoryBasedHost);
		let viewportRect: Rect = p.viewportRect;
		let windowRect: Rect = p.windowRect;
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, p.scaler.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, p.yScaler.isInverted, effectiveViewportRect);
		let isFragment: boolean = p.isFragment;
		if (p.sortingScaler == null || p.sortingScaler.sortedIndices == null || p.sortingScaler.sortedIndices.count == 0) {
			return {
				ret: [ NaN, NaN, NaN ],
				p1: currentIndex,
				p4: isCluster,
				p5: endBucket

			};
		}
		if (series != null && series.fastItemsSource != null && series.fastItemsSource.count < p.sortingScaler.sortedIndices.count) {
			return {
				ret: [ NaN, NaN, NaN ],
				p1: currentIndex,
				p4: isCluster,
				p5: endBucket

			};
		}
		let index: number = p.sortingScaler.sortedIndices._inner[currentIndex];
		let bucketX: number = p.sortingScaler.getUnscaledValueAt(index);
		let currentX: number = bucketX;
		this.storeYValues(h, index, false, isFragment);
		while (currentIndex < p.lastBucket) {
			index = p.sortingScaler.sortedIndices._inner[currentIndex + 1];
			currentX = p.sortingScaler.getUnscaledValueAt(index);
			this.storeYValues(h, index, true, isFragment);
			if (currentX - bucketX >= singlePixelSpan || isNaN_(h.tempY0) || isNaN_(h.tempY1)) {
				if (isCluster) {
					let previousIndex: number = p.sortingScaler.sortedIndices._inner[currentIndex];
					this.storeYValues(h, previousIndex, true, isFragment);
					endBucket = [ p.scaler.getScaledValue(bucketX, sParams), h.tempY0, h.tempY1 ];
				}
				break;
			}
			if (!isCluster && this.isAreaOrLine()) {
				let previousIndex1: number = p.sortingScaler.sortedIndices._inner[currentIndex];
				this.storeYValues(h, previousIndex1, true, isFragment);
				let startBucket: number[] = [ p.scaler.getScaledValue(bucketX, sParams), h.tempY0, h.tempY1 ];
				if (!isNaN_(startBucket[0])) {
					if (!isNaN_(startBucket[1]) && !isNaN_(startBucket[2])) {
						if (p.sortingScaler != null) {
							startBucket[0] = startBucket[0] + offset;
						}
						p.frame.buckets.add(startBucket);
						isCluster = true;
					} else {
						break;
					}
				}
			}
			currentIndex++;
			this.minMaxYValues(h, index, isFragment);
		}
		let xVal: number = NaN;
		if (!isNaN_(bucketX)) {
			xVal = p.scaler.getScaledValue(bucketX, sParams);
		}
		bucket = this.getBucketSorting(xVal, h);
		return {
			ret: bucket,
			p1: currentIndex,
			p4: isCluster,
			p5: endBucket

		};
	}
	protected scaleFrameBucketValues(pp: PreparationParams, offset: number, isSortingScaler: boolean, xParams: ScalerParams, yParams: ScalerParams, errorBars: boolean, markers: boolean): void {
		let bucketSize = pp.bucketSize;
		let bucketCount = pp.frame.buckets.count;
		let buckets = pp.frame.buckets;
		let markerBuckets = this._markerBuckets;
		let markerBucketCount = markerBuckets.count;
		if (errorBars) {
			let zero: number = pp.yScaler.getScaledValue((<NumericAxisBase><any>pp.yScaler).referenceValue, yParams);
			pp.yScaler.getScaledValueList(pp.frame.errorBuckets, 0, pp.frame.errorBuckets.count, yParams);
			let errorBuckets = pp.frame.errorBuckets;
			let errorBucketsCount = errorBuckets.count;
			for (let i = 0; i < errorBuckets.count; i++) {
				errorBuckets._inner[i] = Math.abs(errorBuckets._inner[i] - zero);
			}
		}
	}
	protected abstract scaleBucketValues(pp: PreparationParams, bucket: number[], offset: number, isSortingScaler: boolean, xParams: ScalerParams, yParams: ScalerParams): void;
	protected prepareTrendline(pp: PreparationParams, h: ValuesHolder, offset: number): void {
	}
	protected abstract getValues(p: PreparationParams): ValuesHolder;
}

/**
 * @hidden 
 */
export class CategoryFramePreparer extends CategoryFramePreparerBase {
	static $t: Type = markType(CategoryFramePreparer, 'CategoryFramePreparer', (<any>CategoryFramePreparerBase).$type);
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
				this._trendlineHost = null;
				this._valuesProvider = null;
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
	private _trendlineHost: IHasCategoryTrendline;
	protected get trendlineHost(): IHasCategoryTrendline {
		return this._trendlineHost;
	}
	protected set trendlineHost(value: IHasCategoryTrendline) {
		this._trendlineHost = value;
	}
	private _valuesProvider: IHasSingleValueCategory;
	protected get valuesProvider(): IHasSingleValueCategory {
		return this._valuesProvider;
	}
	protected set valuesProvider(value: IHasSingleValueCategory) {
		this._valuesProvider = value;
	}
	protected prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let x: number = bucket[0];
		let y: number = bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			this.markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	protected getValues(p: PreparationParams): ValuesHolder {
		let h: SingleValuesHolder = new SingleValuesHolder();
		let values: IList$1<number> = this.valuesProvider.valueColumn;
		h.values = values;
		return h;
	}
	protected scaleBucketValues(p: PreparationParams, bucket: number[], offset: number, isSortingScaler: boolean, xParams: ScalerParams, yParams: ScalerParams): void {
		if (isSortingScaler) {
			bucket[0] = bucket[0] + offset;
		} else {
			bucket[0] = p.scaler.getScaledValue(bucket[0], xParams) + offset;
		}
		bucket[1] = p.yScaler.getScaledValue(bucket[1], yParams);
		if (p.bucketSize > 1 || isSortingScaler) {
			bucket[2] = p.yScaler.getScaledValue(bucket[2], yParams);
		} else {
			bucket[2] = bucket[1];
		}
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
		if (isSortingScaler || bucketSize > 1) {
			toYScale.add(2);
		}
		pp.scaler.getScaledBucketValueList(buckets, toXScale, 0, bucketCount, xParams);
		pp.yScaler.getScaledBucketValueList(buckets, toYScale, 0, bucketCount, yParams);
		for (let i = 0; i < bucketCount; i++) {
			buckets._inner[i][0] = buckets._inner[i][0] + offset;
		}
		if (bucketSize == 1 && !isSortingScaler) {
			for (let i1 = 0; i1 < bucketCount; i1++) {
				buckets._inner[i1][2] = buckets._inner[i1][1];
			}
		}
		if (markers) {
			pp.scaler.getScaledBucketValueList(markerBuckets, toXScale, 0, markerBucketCount, xParams);
			pp.yScaler.getScaledBucketValueList(markerBuckets, toYScale, 0, markerBucketCount, yParams);
			for (let i2 = 0; i2 < markerBucketCount; i2++) {
				markerBuckets._inner[i2][0] = markerBuckets._inner[i2][0] + offset;
			}
			if (bucketSize == 1 && !isSortingScaler) {
				for (let i3 = 0; i3 < markerBucketCount; i3++) {
					markerBuckets._inner[i3][2] = markerBuckets._inner[i3][1];
				}
			}
		}
	}
	protected prepareTrendline(p: PreparationParams, h: ValuesHolder, offset: number): void {
		if (this.trendlineHost.trendLineType == TrendLineType.None || this.trendlineHost.trendlinePreparer == null || this.trendlineHost.trendLinePeriod < 1) {
			return;
		}
		this.trendlineHost.trendlinePreparer.prepareLine(this.trendlineHost, p, h, offset);
	}
	protected storeYValues(h: ValuesHolder, index: number, useTemp: boolean, isFragment: boolean): void {
		let s: SingleValuesHolder = <SingleValuesHolder>h;
		let values: IList$1<number> = s.values;
		let bucketY0: number = values.item(index);
		let bucketY1: number = bucketY0;
		if (isFragment) {
			let bucket: number[] = this.bucketizingHost.getBucket(index);
			bucketY0 = bucket[1];
			bucketY1 = bucket[1];
		}
		if (useTemp) {
			s.tempY0 = bucketY0;
			s.tempY1 = bucketY1;
		} else {
			s.bucketY0 = bucketY0;
			s.bucketY1 = bucketY1;
		}
	}
	protected minMaxYValues(h: ValuesHolder, index: number, isFragment: boolean): void {
		let s: SingleValuesHolder = <SingleValuesHolder>h;
		let values: IList$1<number> = s.values;
		if (index < values.count) {
			let y: number;
			if (isFragment) {
				let bucket: number[] = this.bucketizingHost.getBucket(index);
				y = bucket[1];
			} else {
				y = values.item(index);
			}
			s.bucketY0 = Math.min(s.bucketY0, y);
			s.bucketY1 = Math.max(s.bucketY1, y);
		}
	}
	protected getBucketSorting(xVal: number, h: ValuesHolder): number[] {
		let s: SingleValuesHolder = <SingleValuesHolder>h;
		return <number[]>[ xVal, s.bucketY0, s.bucketY1 ];
	}
}

/**
 * @hidden 
 */
export abstract class CategorySeries extends MarkerSeries implements IHasCategoryModePreference, ISupportsErrorBars {
	static $t: Type = markType(CategorySeries, 'CategorySeries', (<any>MarkerSeries).$type, [IHasCategoryModePreference_$type, ISupportsErrorBars_$type]);
	private _framePreparer: CategoryFramePreparer = null;
	get framePreparer(): CategoryFramePreparer {
		return this._framePreparer;
	}
	set framePreparer(value: CategoryFramePreparer) {
		this._framePreparer = value;
	}
	protected createView(): SeriesView {
		let view = new CategorySeriesView(this);
		return view;
	}
	private _categoryView: CategorySeriesView;
	get categoryView(): CategorySeriesView {
		return this._categoryView;
	}
	set categoryView(value: CategorySeriesView) {
		this._categoryView = value;
	}
	private _categorySeriesInteractionManager: ICategorySeriesInteractionManager = null;
	get categorySeriesInteractionManager(): ICategorySeriesInteractionManager {
		if (this._categorySeriesInteractionManager == null) {
			this._categorySeriesInteractionManager = <ICategorySeriesInteractionManager><any>DVContainer.instance.createInstance(ICategorySeriesInteractionManager_$type, () => this.res.dataChart_InteractivityNotLoaded);
		}
		return this._categorySeriesInteractionManager;
	}
	getVisiblePointsOfInterest(points: List$1<SeriesPointOfInterest>, useValueAsLabel: boolean, labelPrecision: number): boolean {
		if (!this.hasMarkers) {
			return false;
		}
		let effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let xAxis = this.fetchXAxis();
		let xParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, xAxis.isInverted);
		xParams.effectiveViewportRect = effectiveViewportRect;
		let yAxis = this.fetchYAxis();
		let yParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, yAxis.isInverted);
		yParams.effectiveViewportRect = effectiveViewportRect;
		let actualWindowRect = this.seriesViewer.actualWindowRect;
		let viewportRect = this.viewport;
		let mode2Index = (<IIsCategoryBased><any>this).currentMode2Index;
		let offset = 0;
		if (xAxis.isDateTime && xAxis.isCategoryDateTime) {
			offset = (<ICategoryScaler><any>xAxis).getSeriesOffset(actualWindowRect, viewportRect, effectiveViewportRect, mode2Index, <number>(<ICategoryScaler><any>xAxis).categoryMode);
		}
		points.clear();
		this.markerView.doToAllMarkers((m: Marker) => {
			if (m._visibility == Visibility.Visible) {
				let p = new SeriesPointOfInterest();
				let xPos = m.canvasLeft;
				let yPos = m.canvasTop;
				if (xPos < this.viewport.left || xPos > this.viewport.right || yPos < this.viewport.top || yPos > this.viewport.bottom) {
					return;
				}
				if (xAxis.isCategory && !xAxis.isDateTime && (<CategoryAxisBase>xAxis).categoryMode != CategoryMode.Mode0) {
					p.xValue = m.currentIndex;
				} else {
					p.xValue = xAxis.getUnscaledValue(xPos, xParams);
				}
				if (yAxis.isCategory && !yAxis.isDateTime && (<CategoryAxisBase>yAxis).categoryMode != CategoryMode.Mode0) {
					p.yValue = m.currentIndex;
				} else {
					p.yValue = yAxis.getUnscaledValue(yPos, yParams);
				}
				p.dataContext = <DataContext>m.content;
				if (useValueAsLabel) {
					p.label = this.applyLabelPrecision(<number>p.yValue, labelPrecision);
				} else {
					p.label = xAxis.getValueLabel(m.currentIndex);
				}
				points.add(p);
			}
		});
		return true;
	}
	private applyLabelPrecision(val: number, fixedPrecision: number): string {
		if (fixedPrecision >= 0) {
			return round10N(val, fixedPrecision).toString();
		} else {
			return val.toString();
		}
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.categoryView = <CategorySeriesView>view;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	get categoryAxis(): CategoryAxisBase {
		return this.getCategoryAxis();
	}
	getCategoryAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.fetchXAxis();
	}
	getValueAxis(): NumericAxisBase {
		return <NumericAxisBase>this.fetchYAxis();
	}
	protected get_isCategory(): boolean {
		return true;
	}
	constructor() {
		super();
		this.renderManager = new CategorySeriesRenderManager();
		this.sourceFramePreparer = new CategoryTransitionSourceFramePreparer();
		this.actualIsCustomCategoryStyleAllowed = false;
		this.actualIsCustomCategoryMarkerStyleAllowed = false;
		this.defaultStyleKey = (<any>CategorySeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
	}
	get isCustomCategoryStyleAllowed(): boolean {
		return <boolean>this.getValue(CategorySeries.isCustomCategoryStyleAllowedProperty);
	}
	set isCustomCategoryStyleAllowed(value: boolean) {
		this.setValue(CategorySeries.isCustomCategoryStyleAllowedProperty, value);
	}
	static readonly isCustomCategoryStyleAllowedPropertyName: string = "IsCustomCategoryStyleAllowed";
	static readonly isCustomCategoryStyleAllowedProperty: DependencyProperty = DependencyProperty.register(CategorySeries.isCustomCategoryStyleAllowedPropertyName, Boolean_$type, (<any>CategorySeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategorySeries>sender).raisePropertyChanged(CategorySeries.isCustomCategoryStyleAllowedPropertyName, e.oldValue, e.newValue)));
	get isCustomCategoryMarkerStyleAllowed(): boolean {
		return <boolean>this.getValue(CategorySeries.isCustomCategoryMarkerStyleAllowedProperty);
	}
	set isCustomCategoryMarkerStyleAllowed(value: boolean) {
		this.setValue(CategorySeries.isCustomCategoryMarkerStyleAllowedProperty, value);
	}
	static readonly isCustomCategoryMarkerStyleAllowedPropertyName: string = "IsCustomCategoryMarkerStyleAllowed";
	static readonly isCustomCategoryMarkerStyleAllowedProperty: DependencyProperty = DependencyProperty.register(CategorySeries.isCustomCategoryMarkerStyleAllowedPropertyName, Boolean_$type, (<any>CategorySeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategorySeries>sender).raisePropertyChanged(CategorySeries.isCustomCategoryMarkerStyleAllowedPropertyName, e.oldValue, e.newValue)));
	private _actualIsCustomCategoryStyleAllowed: boolean = false;
	protected get actualIsCustomCategoryStyleAllowed(): boolean {
		return this._actualIsCustomCategoryStyleAllowed;
	}
	protected set actualIsCustomCategoryStyleAllowed(value: boolean) {
		this._actualIsCustomCategoryStyleAllowed = value;
	}
	private _actualIsCustomCategoryMarkerStyleAllowed: boolean = false;
	protected get actualIsCustomCategoryMarkerStyleAllowed(): boolean {
		return this._actualIsCustomCategoryMarkerStyleAllowed;
	}
	protected set actualIsCustomCategoryMarkerStyleAllowed(value: boolean) {
		this._actualIsCustomCategoryMarkerStyleAllowed = value;
	}
	assigningCategoryStyle: (sender: any, args: AssigningCategoryStyleEventArgs) => void = null;
	assigningCategoryMarkerStyle: (sender: any, args: AssigningCategoryMarkerStyleEventArgs) => void = null;
	protected shouldOverrideCategoryStyle(): boolean {
		return (this.assigningCategoryStyle != null && this.actualIsCustomCategoryStyleAllowed) || this.isHighlightingEnabled;
	}
	protected shouldOverrideMarkerStyle(): boolean {
		return (this.assigningCategoryMarkerStyle != null && this.actualIsCustomCategoryMarkerStyleAllowed) || this.isHighlightingEnabled;
	}
	protected raiseAssigningCategoryStyles(args: AssigningCategoryStyleEventArgs): void {
		if (this.assigningCategoryStyle != null && this.actualIsCustomCategoryStyleAllowed) {
			this.assigningCategoryStyle(this, args);
		}
	}
	protected raiseAssigningCategoryMarkerStyles(args: AssigningCategoryMarkerStyleEventArgs): void {
		if (this.assigningCategoryMarkerStyle != null && this.actualIsCustomCategoryMarkerStyleAllowed) {
			this.assigningCategoryMarkerStyle(this, args);
		}
	}
	getCategoryItems(startIndex: number, endIndex: number): any[] {
		return null;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		if (wipeClean) {
			this.clearMarkers(view);
		}
	}
	getSeriesComponentsForView(): SeriesComponentsForView {
		let ret = super.getSeriesComponentsForView();
		return ret;
	}
	invalidateAxes(): void {
		super.invalidateAxes();
		let xAxis: Axis = this.fetchXAxis();
		if (xAxis != null) {
			xAxis.renderAxis1(false);
		}
		let yAxis: Axis = this.fetchYAxis();
		if (yAxis != null) {
			yAxis.renderAxis1(false);
		}
	}
	static readonly errorBarSettingsPropertyName: string = "ErrorBarSettings";
	static readonly useHighMarkerFidelityPropertyName: string = "UseHighMarkerFidelity";
	get useHighMarkerFidelity(): boolean {
		return <boolean>this.getValue(CategorySeries.useHighMarkerFidelityProperty);
	}
	set useHighMarkerFidelity(value: boolean) {
		this.setValue(CategorySeries.useHighMarkerFidelityProperty, value);
	}
	static readonly useHighMarkerFidelityProperty: DependencyProperty = DependencyProperty.register(CategorySeries.useHighMarkerFidelityPropertyName, Boolean_$type, (<any>CategorySeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategorySeries>sender).raisePropertyChanged(CategorySeries.useHighMarkerFidelityPropertyName, e.oldValue, e.newValue)));
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		super.windowRectChangedOverride(oldWindowRect, newWindowRect);
		this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	get transitionInMode(): CategoryTransitionInMode {
		return EnumUtil.getEnumValue<CategoryTransitionInMode>(CategoryTransitionInMode_$type, this.getValue(CategorySeries.transitionInModeProperty));
	}
	set transitionInMode(value: CategoryTransitionInMode) {
		this.setValue(CategorySeries.transitionInModeProperty, enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, value));
	}
	static readonly transitionInModePropertyName: string = "TransitionInMode";
	static readonly transitionInModeProperty: DependencyProperty = DependencyProperty.register(CategorySeries.transitionInModePropertyName, CategoryTransitionInMode_$type, (<any>CategorySeries).$type, new PropertyMetadata(2, enumGetBox<CategoryTransitionInMode>(CategoryTransitionInMode_$type, CategoryTransitionInMode.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategorySeries>sender).raisePropertyChanged(CategorySeries.transitionInModePropertyName, e.oldValue, e.newValue)));
	get isTransitionInEnabled(): boolean {
		return <boolean>this.getValue(CategorySeries.isTransitionInEnabledProperty);
	}
	set isTransitionInEnabled(value: boolean) {
		this.setValue(CategorySeries.isTransitionInEnabledProperty, value);
	}
	static readonly isTransitionInEnabledPropertyName: string = "IsTransitionInEnabled";
	static readonly isTransitionInEnabledProperty: DependencyProperty = DependencyProperty.register(CategorySeries.isTransitionInEnabledPropertyName, Boolean_$type, (<any>CategorySeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategorySeries>sender).raisePropertyChanged(CategorySeries.isTransitionInEnabledPropertyName, e.oldValue, e.newValue)));
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		if (this.transitionInIsInProgress && this.transitionProgress < 0.05 && (this.seriesViewer == null || !this.seriesViewer.justZoomed())) {
			this.transitionInViable = true;
		}
		super.viewportRectChangedOverride(oldViewportRect, newViewportRect);
		this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
		this.renderSeries(false);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			let yAxis: Axis = this.fetchYAxis();
			let xAxis: Axis = this.fetchXAxis();
			if (oldValue != null && newValue == null) {
				this.deregisterForAxis(xAxis);
				this.deregisterForAxis(yAxis);
			}
			if (oldValue == null && newValue != null) {
				this.registerForAxis(xAxis);
				this.registerForAxis(yAxis);
			}
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

			case Series.syncLinkPropertyName:
			if (this.syncLink != null && this.seriesViewer != null) {
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			}
			this.renderSeries(false);
			break;

			case Series.transitionProgressPropertyName:
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.currentFrame.clearSpeedModifiers();
				this.renderFrame(this.currentFrame, this.categoryView);
				if (this.transitionInIsInProgress) {
					this.transitionInIsInProgress = false;
					this.clearSpeedModifiers();
					this.animator.intervalMilliseconds = <number>truncate(this.getTotalMilliseconds());
					this.animator.easingFunction = this.transitionEasingFunction;
				}
			} else {
				this.renderFrame(this.transitionFrame, this.categoryView);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case CategorySeries.errorBarSettingsPropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

			case CategorySeries.useHighMarkerFidelityPropertyName:
			this.renderSeries(false);
			break;

			case CategorySeries.isCustomCategoryStyleAllowedPropertyName:
			this.actualIsCustomCategoryStyleAllowed = this.getIsCustomCategoryStyleAllowed();
			this.renderSeries(false);
			break;

			case CategorySeries.isCustomCategoryMarkerStyleAllowedPropertyName:
			this.actualIsCustomCategoryMarkerStyleAllowed = this.getIsCustomCategoryMarkerStyleAllowed();
			this.renderSeries(false);
			break;

		}

	}
	protected getIsCustomCategoryStyleAllowed(): boolean {
		return this.isCustomCategoryStyleAllowed;
	}
	protected getIsCustomCategoryMarkerStyleAllowed(): boolean {
		return this.isCustomCategoryMarkerStyleAllowed;
	}
	getExactUnsortedItemIndex(world: Point): number {
		return this.getExactUnsortedItemIndexHelper(world, this.fetchXAxis());
	}
	protected get_isPrimaryAxisSortingAxis(): boolean {
		return typeCast<ISortingAxis>(ISortingAxis_$type, this.getCategoryAxis()) !== null;
	}
	getCategoryAxisIfPresent(): CategoryAxisBase {
		return this.getCategoryAxis();
	}
	getItemIndexSorted(world: Point): number {
		return this.categorySeriesInteractionManager.getItemIndexSorted(this, world);
	}
	abstract getOffsetValue(): number;
	abstract getCategoryWidth(): number;
	getItem(world: Point): any {
		return this.categorySeriesInteractionManager.getItem(this, world);
	}
	getItemIndex(world: Point): number {
		let rowIndex: number = <number>truncate(Math.round(this.getExactItemIndex(world)));
		return rowIndex;
	}
	getExactItemIndex(world: Point): number {
		return this.categorySeriesInteractionManager.getExactItemIndex(this, world);
	}
	private _prevHighlightingInfo: HighlightingInfo = null;
	private get prevHighlightingInfo(): HighlightingInfo {
		return this._prevHighlightingInfo;
	}
	private set prevHighlightingInfo(value: HighlightingInfo) {
		this._prevHighlightingInfo = value;
	}
	private _prevMarkerHighlightingInfo: HighlightingInfo = null;
	private get prevMarkerHighlightingInfo(): HighlightingInfo {
		return this._prevMarkerHighlightingInfo;
	}
	private set prevMarkerHighlightingInfo(value: HighlightingInfo) {
		this._prevMarkerHighlightingInfo = value;
	}
	protected get_hasIndividualElements(): boolean {
		return false;
	}
	protected get hasIndividualElements(): boolean {
		return this.get_hasIndividualElements();
	}
	getMarkerHighlightingInfo(item: any, world: Point): HighlightingInfo {
		let info = this.getSpecificMarkerHighlightingInfo(item, world, this.prevMarkerHighlightingInfo);
		this.prevMarkerHighlightingInfo = info;
		return info;
	}
	protected get_isHighlightingSupported(): boolean {
		return true;
	}
	getHighlightingInfo(item: any, world: Point): HighlightingInfo {
		if (this.hasIndividualElements) {
			let info = this.getSpecificHighlightingInfo(item, world, this.prevHighlightingInfo);
			this.prevHighlightingInfo = info;
			return info;
		} else {
			let info1 = this.getFullSeriesInfo(item, world, this.prevHighlightingInfo);
			this.prevHighlightingInfo = info1;
			return info1;
		}
	}
	protected getActiveMarkers(): List$1<Marker> {
		return this.categoryView.markers.active;
	}
	protected getSpecificMarkerHighlightingInfo(item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		if (!this.shouldDisplayMarkers()) {
			return null;
		}
		let current = this.currentFrame;
		if (this.animationActive()) {
			current = this.transitionFrame;
		}
		let markers = this.getActiveMarkers();
		return this.categorySeriesInteractionManager.getSpecificMarkerHighlightingInfo(this, markers, current.buckets, item, world, prevValue);
	}
	protected getSpecificHighlightingInfo(item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let firstBucket = this.categoryView.bucketCalculator.firstBucket;
		let lastBucket = this.categoryView.bucketCalculator.lastBucket;
		let bucketSize = this.categoryView.bucketCalculator.bucketSize;
		let current = this.currentFrame;
		if (this.animationActive()) {
			current = this.transitionFrame;
		}
		return this.categorySeriesInteractionManager.getSpecificHighlightingInfo(this, current.buckets, firstBucket, lastBucket, bucketSize, item, world, prevValue);
	}
	protected getFullSeriesInfo(item: any, world: Point, prevValue: HighlightingInfo): HighlightingInfo {
		let info = new HighlightingInfo();
		info.series = this;
		info.startIndex = 0;
		info.endIndex = this.fastItemsSource.count - 1;
		if (prevValue != null && prevValue.startIndex == info.startIndex && prevValue.endIndex == info.endIndex) {
			return prevValue;
		}
		return info;
	}
	previousFrame: CategoryFrame = new CategoryFrame(3);
	transitionFrame: CategoryFrame = new CategoryFrame(3);
	currentFrame: CategoryFrame = new CategoryFrame(3);
	thumbnailFrame: CategoryFrame = new CategoryFrame(3);
	protected renderManager: CategorySeriesRenderManager = null;
	protected performCategoryMarkerStyleOverride(buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean): void {
		let isHighlightingEnabled = this.actualIsHighlightingEnabled;
		this.renderManager.prePerformCategoryMarkerStyleOverride(buckets, currentIndex, valueCount, categoryAxis, axisParams, isThumbnail, isHighlightingEnabled);
		let args = this.renderManager.categoryMarkerOverrideArgs;
		let info: HighlightingInfo = null;
		let itemsSource = this.fastItemsSource;
		if (isHighlightingEnabled && this.seriesViewer != null) {
			info = this.seriesViewer.highlightingManager.getHighlightingInfo(this, itemsSource, categoryAxis, args.startIndex, args.endIndex, true);
			args.highlightingInfo = info;
		}
		args.isThumbnail = isThumbnail;
		this.raiseAssigningCategoryMarkerStyles(args);
		this.renderManager.postPerformCategoryMarkerStyleOverride(info, isThumbnail, isHighlightingEnabled);
	}
	protected performCategoryStyleOverride(buckets: List$1<number[]>, currentIndex: number, valueCount: number, categoryAxis: CategoryAxisBase, axisParams: ScalerParams, isThumbnail: boolean): void {
		let isHighlightingEnabled: boolean = this.actualIsHighlightingEnabled;
		this.renderManager.prePerformCategoryStyleOverride(buckets, currentIndex, valueCount, categoryAxis, axisParams, isThumbnail, isHighlightingEnabled);
		let args = this.renderManager.categoryOverrideArgs;
		let info: HighlightingInfo = null;
		let itemsSource = this.fastItemsSource;
		if (isHighlightingEnabled && this.seriesViewer != null) {
			info = this.seriesViewer.highlightingManager.getHighlightingInfo(this, itemsSource, categoryAxis, args.startIndex, args.endIndex, false);
			args.highlightingInfo = info;
		}
		args.isThumbnail = isThumbnail;
		this.raiseAssigningCategoryStyles(args);
		this.renderManager.postPerformCategoryStyleOverride(info, isThumbnail, isHighlightingEnabled);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		isValid = isValid && this.validateAxis(this.fetchXAxis());
		isValid = isValid && this.validateAxis(this.fetchYAxis());
		let categoryView = <CategorySeriesView>view;
		if (!view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.fastItemsSource == null) {
			isValid = false;
		}
		if (!isValid) {
			categoryView.bucketCalculator.bucketSize = 0;
		}
		return isValid;
	}
	private validateAxis(axis: Axis): boolean {
		if (axis == null || axis.seriesViewer == null) {
			return false;
		}
		let categoryAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, axis);
		if (categoryAxis != null) {
			if (categoryAxis.itemsSource == null) {
				return false;
			}
			if (categoryAxis.cachedItemsCount < 1) {
				return false;
			}
		} else {
			let numericAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, axis);
			if (numericAxis != null) {
				return numericAxis.actualMinimumValue != numericAxis.actualMaximumValue;
			}
		}
		return true;
	}
	protected shouldTransitionIn(): boolean {
		return this.isTransitionInEnabled;
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.SweepFromCategoryAxisMinimum;
	}
	private _sourceFramePreparer: CategoryTransitionSourceFramePreparer = null;
	get sourceFramePreparer(): CategoryTransitionSourceFramePreparer {
		return this._sourceFramePreparer;
	}
	set sourceFramePreparer(value: CategoryTransitionSourceFramePreparer) {
		this._sourceFramePreparer = value;
	}
	protected clearSpeedModifiers(): void {
		super.clearSpeedModifiers();
		this.previousFrame.clearSpeedModifiers();
		this.currentFrame.clearSpeedModifiers();
		this.transitionFrame.clearSpeedModifiers();
	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
		if (this.clearAndAbortIfInvalid1(this.view)) {
			this.currentFrame.resetFrame();
			this.transitionFrame.resetFrame();
			this.previousFrame.resetFrame();
			return;
		}
		if (this.skipPrepare) {
			if (this.animationActive()) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				this.renderFrame(this.transitionFrame, this.categoryView);
			} else {
				this.renderFrame(this.currentFrame, this.categoryView);
			}
			return;
		}
		if (this.shouldAnimate(animate)) {
			let previous: CategoryFrame = this.previousFrame;
			if (this.animationActive()) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				this.previousFrame = this.transitionFrame;
				this.transitionFrame = previous;
			} else {
				this.previousFrame = this.currentFrame;
				this.currentFrame = previous;
			}
			this.prepareFrame(this.currentFrame, this.categoryView);
			if (this.transitionInViableResolved) {
				this.animator.stop();
				this.animator.intervalMilliseconds = <number>truncate(this.getTotalTransitionInMilliseconds());
				this.animator.easingFunction = this.transitionInEasingFunction != null ? this.transitionInEasingFunction : this.transitionEasingFunction;
				this.sourceFramePreparer.prepareSourceFrame(this.previousFrame, this.currentFrame, this.isVertical, this.fetchXAxis(), this.fetchYAxis(), this.transitionInMode, this.getDefaultTransitionInMode(), this.transitionInSpeedType, this.getDefaultTransitionInSpeedType(), runOn(this, this.getTransitionFromZeroValue), this.categoryView.viewport);
			}
			this.checkTransitionInterrupted();
			this.startAnimation();
			if (this.transitionInViableResolved) {
				this.transitionInViable = false;
				this.transitionInIsInProgress = true;
			}
		} else {
			this.prepareFrame(this.currentFrame, this.categoryView);
			this.renderFrame(this.currentFrame, this.categoryView);
		}
	}
	protected getDefaultTransitionInSpeedType(): TransitionInSpeedType {
		return TransitionInSpeedType.IndexScaled;
	}
	protected getTransitionFromZeroValue(): number {
		if (this.isVertical) {
			return this.viewport.left;
		}
		return this.viewport.bottom;
	}
	getMode2Index(): number {
		let result: number = 0;
		let xAxis: Axis = this.fetchXAxis();
		for (let currentSeries of fromEnum<Series>(this.seriesViewer.series)) {
			if (currentSeries == this) {
				return result;
			}
			let currentCategorySeries: CategorySeries = typeCast<CategorySeries>((<any>CategorySeries).$type, currentSeries);
			if (currentCategorySeries != null) {
				let currentXAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, currentCategorySeries.fetchXAxis());
				if (currentXAxis == xAxis && currentCategorySeries.preferredCategoryMode(currentXAxis) == CategoryMode.Mode2) {
					result++;
				}
			}
		}
		return -1;
	}
	get GetErrorBarsXAxis(): Axis {
		return this.fetchXAxis();
	}
	get GetErrorBarsYAxis(): Axis {
		return this.fetchYAxis();
	}
	colorizeMarkers(view: CategorySeriesView, frame: CategoryFrame): void {
		this.renderManager.initCategoryMarkerRenderSettings(this, this.shouldOverrideMarkerStyle(), runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let markerOverrideArgs = this.renderManager.categoryMarkerOverrideArgs;
		let areMarkerStylesOverriden: boolean = markerOverrideArgs != null;
		let xAxis = this.getCategoryAxis();
		if (xAxis == null) {
			return;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams = new ScalerParams(0, view.windowRect, view.viewport, xAxis.isInverted, effectiveViewportRect);
		let valueCount = this.fastItemsSource == null ? 0 : this.fastItemsSource.count;
		let categoryView = <CategorySeriesView>view;
		let buckets = frame.buckets;
		let firstBucket = categoryView.bucketCalculator.firstBucket;
		let lastBucket = categoryView.bucketCalculator.lastBucket;
		let bucketSize = categoryView.bucketCalculator.bucketSize;
		let firstIndex = firstBucket * bucketSize;
		for (let i = 0; i < view.markers.count; i++) {
			let marker = view.markers.item(i);
			let context = <DataContext>marker.content;
			if (areMarkerStylesOverriden) {
				let bucket = marker.markerBucket;
				this.performCategoryMarkerStyleOverride(buckets, bucket, valueCount, xAxis, xParams, view.isThumbnailView);
			}
			this.renderManager.setCategoryMarkerAppearance(marker, context);
		}
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		this.customClipRect = frame.customClip;
		view.onRenderFrame();
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		frame.clearFrame();
	}
	getBucketSize(view: SeriesView): number {
		return (<CategorySeriesView>view).bucketCalculator.bucketSize;
	}
	getFirstBucket(view: SeriesView): number {
		return (<CategorySeriesView>view).bucketCalculator.firstBucket;
	}
	clearMarkers(view: SeriesView): void {
		let catView = <CategorySeriesView>view;
		catView.markers.count = 0;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		let categorySeriesView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, this.thumbnailView);
		categorySeriesView.bucketCalculator.calculateBuckets(this.resolution);
		this.view.prepSurface(surface);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		this.renderThumbnailFrame();
		this.thumbnailDirty = false;
	}
	renderThumbnailFrame(): void {
		let thumbnailView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, this.thumbnailView);
		if (!this.skipThumbnailPrepare) {
			this.prepareFrame(this.thumbnailFrame, thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, thumbnailView);
	}
	abstract fetchXAxis(): Axis;
	abstract fetchYAxis(): Axis;
	abstract updateNumericAxisRange(): boolean;
	getFramePreparer(view: CategorySeriesView): CategoryFramePreparer {
		let categoryView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, view);
		if (categoryView != null && categoryView.isThumbnailView) {
			if (categoryView.isAlternateView) {
				return new CategoryFramePreparer(1, typeCast<IIsCategoryBased>(IIsCategoryBased_$type, this), typeCast<ISupportsMarkers>(ISupportsMarkers_$type, categoryView), categoryView, this, categoryView.bucketCalculator);
			} else {
				return new CategoryFramePreparer(1, typeCast<IIsCategoryBased>(IIsCategoryBased_$type, this), typeCast<ISupportsMarkers>(ISupportsMarkers_$type, categoryView), this.seriesViewer.view.overviewPlusDetailViewportHost, this, categoryView.bucketCalculator);
			}
		} else {
			return this.framePreparer;
		}
	}
	getMatchingAxis(axis: Axis): Axis {
		if (this.fetchXAxis() == axis) {
			return this.fetchYAxis();
		}
		if (this.fetchYAxis() == axis) {
			return this.fetchXAxis();
		}
		return null;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.fetchXAxis(), this.fetchYAxis() ];
	}
	static getClipper(buckets: List$1<number[]>, endIndex: number, viewportRect: Rect, windowRect: Rect, closed: boolean): Clipper {
		let clipper: Clipper = null;
		if (endIndex > -1 && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let left: number = buckets._inner[0][0] < viewportRect.left - 2000 ? viewportRect.left - 10 : NaN;
			let bottom: number = viewportRect.bottom + 10;
			let right: number = buckets._inner[endIndex][0] > viewportRect.right + 2000 ? viewportRect.right + 10 : NaN;
			let top: number = viewportRect.top - 10;
			clipper = new Clipper(1, left, bottom, right, top, closed);
		}
		return clipper;
	}
}

/**
 * @hidden 
 */
export class CategorySeriesView extends MarkerSeriesView implements ISupportsMarkers {
	static $t: Type = markType(CategorySeriesView, 'CategorySeriesView', (<any>MarkerSeriesView).$type, [ISupportsMarkers_$type]);
	private _categoryModel: CategorySeries = null;
	get categoryModel(): CategorySeries {
		return this._categoryModel;
	}
	set categoryModel(value: CategorySeries) {
		this._categoryModel = value;
	}
	private _frameVersion: number = 0;
	get frameVersion(): number {
		return this._frameVersion;
	}
	set frameVersion(value: number) {
		this._frameVersion = value;
	}
	checkFrameDirty(frame: CategoryFrame): boolean {
		if (this.frameVersion != frame.frameVersion) {
			return true;
		}
		return false;
	}
	updateFrameVersion(frame: CategoryFrame): void {
		this.frameVersion = frame.frameVersion;
	}
	constructor(model: CategorySeries) {
		super(model);
		this.frameVersion = -1;
		this.categoryModel = model;
		this.bucketCalculator = this.createBucketCalculator();
		this.markers = ((() => {
			let $ret = new Pool$1<Marker>((<any>Marker).$type);
			$ret.create = runOn(this, this.markerCreate);
			$ret.activate = runOn(this, this.markerActivate);
			$ret.disactivate = runOn(this, this.markerDisactivate);
			$ret.destroy = runOn(this, this.markerDestroy);
			return $ret;
		})());
	}
	updateMarkerTemplate(markerCount: number, itemIndex: number, markerBucket: number): void {
		if (!this.markerModel.useLightweightMarkers) {
			let marker: Marker = this.markers.item(markerCount);
			let context = <DataContext>marker.content;
			context.item = this.model.fastItemsSource.item(itemIndex);
			marker.currentIndex = itemIndex;
			marker.markerBucket = markerBucket;
		}
	}
	private _bucketCalculator: CategoryBucketCalculator = null;
	get bucketCalculator(): CategoryBucketCalculator {
		return this._bucketCalculator;
	}
	set bucketCalculator(value: CategoryBucketCalculator) {
		this._bucketCalculator = value;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new CategoryBucketCalculator(this);
	}
	private _markers: Pool$1<Marker> = null;
	get markers(): Pool$1<Marker> {
		return this._markers;
	}
	set markers(value: Pool$1<Marker>) {
		this._markers = value;
	}
	get shouldDisplayMarkers(): boolean {
		return this.categoryModel.shouldDisplayMarkers();
	}
	updateMarkerCount(markerCount: number): void {
		this.markers.count = markerCount;
	}
	doToAllMarkers(action: (arg1: Marker) => void): void {
		this.markers.doToAll(action);
	}
	hideErrorBars(): void {
	}
}


