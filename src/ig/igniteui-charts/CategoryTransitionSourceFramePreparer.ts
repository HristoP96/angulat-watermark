/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { CategoryFrame } from "./CategoryFrame";
import { Axis } from "./Axis";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { TransitionInSpeedType } from "./TransitionInSpeedType";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { Random } from "igniteui-core/Random";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class CategoryTransitionSourceFramePreparer extends Base {
	static $t: Type = markType(CategoryTransitionSourceFramePreparer, 'CategoryTransitionSourceFramePreparer');
	prepareSourceFrame(previousFrame: CategoryFrame, currentFrame: CategoryFrame, isVertical: boolean, xAxis: Axis, yAxis: Axis, mode: CategoryTransitionInMode, defaultMode: CategoryTransitionInMode, speedType: TransitionInSpeedType, defaultSpeedType: TransitionInSpeedType, getZeroValue: () => number, viewport: Rect): void {
		previousFrame.customClip = new Rect(0, 0, 0, 1, 1);
		previousFrame.buckets.clear();
		previousFrame.errorBuckets.clear();
		previousFrame.markers.clear();
		previousFrame.trend.clear();
		previousFrame.errorBars.clear();
		previousFrame.errorBarPositiveSizes.clear();
		previousFrame.errorBarNegativeSizes.clear();
		let yAxisIsInverted: boolean = false;
		let xAxisIsInverted: boolean = false;
		if (yAxis != null) {
			yAxisIsInverted = yAxis.isInverted;
		}
		if (xAxis != null) {
			xAxisIsInverted = xAxis.isInverted;
		}
		let transitionMode = mode;
		if (transitionMode == CategoryTransitionInMode.Auto) {
			transitionMode = defaultMode;
		}
		switch (transitionMode) {
			case CategoryTransitionInMode.FromZero:
			let zeroValue: number = getZeroValue();
			this.prepareSourceFrameFromZero(previousFrame, currentFrame, zeroValue, isVertical);
			break;

			case CategoryTransitionInMode.AccordionFromLeft:
			this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, false, isVertical, viewport);
			break;

			case CategoryTransitionInMode.AccordionFromTop:
			this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, true, isVertical, viewport);
			break;

			case CategoryTransitionInMode.AccordionFromBottom:
			this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, false, isVertical, viewport);
			break;

			case CategoryTransitionInMode.AccordionFromRight:
			this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, true, isVertical, viewport);
			break;

			case CategoryTransitionInMode.SweepFromLeft:
			this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, false);
			break;

			case CategoryTransitionInMode.SweepFromRight:
			this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, true);
			break;

			case CategoryTransitionInMode.SweepFromTop:
			this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, true);
			break;

			case CategoryTransitionInMode.SweepFromBottom:
			this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, false);
			break;

			case CategoryTransitionInMode.SweepFromCenter:
			this.copyFrame(previousFrame, currentFrame);
			previousFrame.customClip = new Rect(0, 0.5, 0.5, 0, 0);
			break;

			case CategoryTransitionInMode.AccordionFromCategoryAxisMinimum:
			if (isVertical) {
				this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, yAxisIsInverted, isVertical, viewport);
			} else {
				this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, xAxisIsInverted, isVertical, viewport);
			}
			break;

			case CategoryTransitionInMode.AccordionFromCategoryAxisMaximum:
			if (isVertical) {
				this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, !yAxisIsInverted, isVertical, viewport);
			} else {
				this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, !xAxisIsInverted, isVertical, viewport);
			}
			break;

			case CategoryTransitionInMode.AccordionFromValueAxisMinimum:
			if (isVertical) {
				this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, xAxisIsInverted, isVertical, viewport);
			} else {
				this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, yAxisIsInverted, isVertical, viewport);
			}
			break;

			case CategoryTransitionInMode.AccordionFromValueAxisMaximum:
			if (isVertical) {
				this.prepareSourceFrameFromLeftOrRight(previousFrame, currentFrame, !xAxisIsInverted, isVertical, viewport);
			} else {
				this.prepareSourceFrameFromTopOrBottom(previousFrame, currentFrame, !yAxisIsInverted, isVertical, viewport);
			}
			break;

			case CategoryTransitionInMode.SweepFromCategoryAxisMinimum:
			if (isVertical) {
				this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, yAxisIsInverted);
			} else {
				this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, xAxisIsInverted);
			}
			break;

			case CategoryTransitionInMode.SweepFromCategoryAxisMaximum:
			if (isVertical) {
				this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, !yAxisIsInverted);
			} else {
				this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, !xAxisIsInverted);
			}
			break;

			case CategoryTransitionInMode.SweepFromValueAxisMinimum:
			if (isVertical) {
				this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, xAxisIsInverted);
			} else {
				this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, yAxisIsInverted);
			}
			break;

			case CategoryTransitionInMode.SweepFromValueAxisMaximum:
			if (isVertical) {
				this.prepareSourceFrameSweepFromLeftOrRight(previousFrame, currentFrame, !xAxisIsInverted);
			} else {
				this.prepareSourceFrameSweepFromTopOrBottom(previousFrame, currentFrame, !yAxisIsInverted);
			}
			break;

			case CategoryTransitionInMode.Expand:
			this.prepareSourceFrameExpand(previousFrame, currentFrame);
			break;

		}

		if (speedType == TransitionInSpeedType.Auto) {
			speedType = defaultSpeedType;
		}
		previousFrame.clearSpeedModifiers();
		currentFrame.clearSpeedModifiers();
		switch (speedType) {
			case TransitionInSpeedType.IndexScaled:
			this.applyIndexScaledSpeedModifiers(previousFrame.buckets.count, transitionMode, previousFrame.speedModifiers, currentFrame.speedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyIndexScaledSpeedModifiers(previousFrame.markers.count, transitionMode, previousFrame.markerSpeedModifiers, currentFrame.markerSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyIndexScaledSpeedModifiers(previousFrame.trend.count, transitionMode, previousFrame.trendSpeedModifiers, currentFrame.trendSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyIndexScaledSpeedModifiers(previousFrame.errorBars.count, transitionMode, previousFrame.errorSpeedModifiers, currentFrame.errorSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyIndexScaledSpeedModifiers(previousFrame.errorBarPositiveSizes.count, transitionMode, previousFrame.errorBarsSpeedModifiers, currentFrame.errorBarsSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			break;

			case TransitionInSpeedType.ValueScaled:
			let zeroVAlue = getZeroValue();
			this.applyValueScaledSpeedModifiersFromBuckets(previousFrame.buckets.count, zeroVAlue, transitionMode, previousFrame.buckets, currentFrame.buckets, previousFrame.speedModifiers, currentFrame.speedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyValueScaledSpeedModifiersFromPoints(previousFrame.markers.count, zeroVAlue, transitionMode, previousFrame.markers, currentFrame.markers, previousFrame.markerSpeedModifiers, currentFrame.markerSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyValueScaledSpeedModifiersFromPoints(previousFrame.trend.count, zeroVAlue, transitionMode, previousFrame.trend, currentFrame.trend, previousFrame.trendSpeedModifiers, currentFrame.trendSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyValueScaledSpeedModifiersFromPoints(previousFrame.errorBars.count, zeroVAlue, transitionMode, previousFrame.errorBars, currentFrame.errorBars, previousFrame.errorSpeedModifiers, currentFrame.errorSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			this.applyValueScaledSpeedModifiersFromDoubles(previousFrame.errorBarPositiveSizes.count, zeroVAlue, transitionMode, previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes, previousFrame.errorBarsSpeedModifiers, currentFrame.errorBarsSpeedModifiers, xAxis, yAxis, isVertical, viewport);
			break;

			case TransitionInSpeedType.Random:
			this.applyRandomSpeedModifiers(previousFrame.buckets.count, transitionMode, previousFrame.speedModifiers, currentFrame.speedModifiers);
			this.applyRandomSpeedModifiers(previousFrame.markers.count, transitionMode, previousFrame.markerSpeedModifiers, currentFrame.markerSpeedModifiers);
			this.applyRandomSpeedModifiers(previousFrame.trend.count, transitionMode, previousFrame.trendSpeedModifiers, currentFrame.trendSpeedModifiers);
			this.applyRandomSpeedModifiers(previousFrame.errorBars.count, transitionMode, previousFrame.errorSpeedModifiers, currentFrame.errorSpeedModifiers);
			this.applyRandomSpeedModifiers(previousFrame.errorBarPositiveSizes.count, transitionMode, previousFrame.errorBarsSpeedModifiers, currentFrame.errorBarsSpeedModifiers);
			break;

		}

	}
	private _rand: Random = new Random(0);
	private applyRandomSpeedModifiers(count: number, transitionMode: CategoryTransitionInMode, previousModifiers: List$1<number>, currentModifiers: List$1<number>): void {
		if (count == 0) {
			return;
		}
		for (let i = 0; i < count; i++) {
			previousModifiers.add(1 + this._rand.nextDouble());
			currentModifiers.add(1 + this._rand.nextDouble());
		}
	}
	private applyValueScaledSpeedModifiersFromBuckets(count: number, zeroValue: number, transitionMode: CategoryTransitionInMode, previousBuckets: List$1<number[]>, currentBuckets: List$1<number[]>, previousModifiers: List$1<number>, currentModifiers: List$1<number>, xAxis: Axis, yAxis: Axis, isVertical: boolean, viewport: Rect): void {
		if (count == 0) {
			return;
		}
		let isInverted: boolean = false;
		let valueAxis: Axis = yAxis;
		if (isVertical) {
			valueAxis = xAxis;
		}
		if (valueAxis != null) {
			isInverted = valueAxis.isInverted;
		}
		let bound: number = viewport.bottom;
		let maxBound: number = viewport.bottom;
		let minBound: number = viewport.top;
		if (isVertical) {
			maxBound = viewport.right;
			minBound = viewport.left;
		}
		if (isInverted) {
			maxBound = viewport.top;
			minBound = viewport.bottom;
			if (isVertical) {
				maxBound = viewport.left;
				minBound = viewport.right;
			}
		}
		zeroValue = Math.max(zeroValue, Math.min(minBound, maxBound));
		zeroValue = Math.min(zeroValue, Math.max(minBound, maxBound));
		bound = 0;
		let currentBucket: number[];
		for (let i = 0; i < count; i++) {
			currentBucket = currentBuckets._inner[i];
			for (let j = 1; j < currentBucket.length; j++) {
				if (isNaN_(currentBucket[j]) || isInfinity(currentBucket[j])) {
					continue;
				}
				bound = Math.max(bound, Math.abs(zeroValue - currentBucket[j]));
			}
		}
		let max: number;
		let min: number;
		let p: number;
		for (let i1 = 0; i1 < count; i1++) {
			currentBucket = currentBuckets._inner[i1];
			max = Math.abs(currentBucket[1] - zeroValue);
			min = Math.abs(currentBucket[1] - zeroValue);
			for (let j1 = 1; j1 < currentBucket.length; j1++) {
				if (isNaN_(currentBucket[j1]) || isInfinity(currentBucket[j1])) {
					continue;
				}
				max = Math.max(Math.abs(currentBucket[j1] - zeroValue), max);
				min = Math.min(Math.abs(currentBucket[j1] - zeroValue), min);
			}
			let mid = (max + min) / 2;
			if (isNaN_(mid) || bound == 0) {
				p = 1;
			} else {
				p = mid / bound;
			}
			previousModifiers.add(2 - p);
			currentModifiers.add(2 - p);
		}
	}
	private applyValueScaledSpeedModifiersFromPoints(count: number, zeroValue: number, transitionMode: CategoryTransitionInMode, previousPoints: List$1<Point>, currentPoints: List$1<Point>, previousModifiers: List$1<number>, currentModifiers: List$1<number>, xAxis: Axis, yAxis: Axis, isVertical: boolean, viewport: Rect): void {
		if (count == 0) {
			return;
		}
		let isInverted: boolean = false;
		let valueAxis: Axis = yAxis;
		if (isVertical) {
			valueAxis = xAxis;
		}
		if (valueAxis != null) {
			isInverted = valueAxis.isInverted;
		}
		let bound: number = viewport.bottom;
		let maxBound: number = viewport.bottom;
		let minBound: number = viewport.top;
		if (isVertical) {
			maxBound = viewport.right;
			minBound = viewport.left;
		}
		if (isInverted) {
			maxBound = viewport.top;
			minBound = viewport.bottom;
			if (isVertical) {
				maxBound = viewport.left;
				minBound = viewport.right;
			}
		}
		zeroValue = Math.max(zeroValue, Math.min(minBound, maxBound));
		zeroValue = Math.min(zeroValue, Math.max(minBound, maxBound));
		bound = 0;
		let currentPoint: Point;
		for (let i = 0; i < count; i++) {
			currentPoint = currentPoints._inner[i];
			if (isVertical) {
				if (isNaN_(currentPoint.x) || isInfinity(currentPoint.x)) {
					continue;
				}
				bound = Math.max(bound, Math.abs(currentPoint.x - zeroValue));
			} else {
				if (isNaN_(currentPoint.y) || isInfinity(currentPoint.y)) {
					continue;
				}
				bound = Math.max(bound, Math.abs(currentPoint.y - zeroValue));
			}
		}
		let p: number;
		for (let i1 = 0; i1 < count; i1++) {
			currentPoint = currentPoints._inner[i1];
			let mid: number;
			if (isVertical) {
				mid = currentPoint.x;
			} else {
				mid = currentPoint.y;
			}
			if (isNaN_(mid) || isInfinity(mid) || bound == 0) {
				p = 1;
			} else {
				p = Math.abs(mid - zeroValue) / bound;
			}
			previousModifiers.add(2 - p);
			currentModifiers.add(2 - p);
		}
	}
	private applyValueScaledSpeedModifiersFromDoubles(count: number, zeroValue: number, transitionMode: CategoryTransitionInMode, previousDoubles: List$1<number>, currentDoubles: List$1<number>, previousModifiers: List$1<number>, currentModifiers: List$1<number>, xAxis: Axis, yAxis: Axis, isVertical: boolean, viewport: Rect): void {
		if (count == 0) {
			return;
		}
		let isInverted: boolean = false;
		let valueAxis: Axis = yAxis;
		if (isVertical) {
			valueAxis = xAxis;
		}
		if (valueAxis != null) {
			isInverted = valueAxis.isInverted;
		}
		let bound: number = viewport.bottom;
		let maxBound: number = viewport.bottom;
		let minBound: number = viewport.top;
		if (isVertical) {
			maxBound = viewport.right;
			minBound = viewport.left;
		}
		if (isInverted) {
			maxBound = viewport.top;
			minBound = viewport.bottom;
			if (isVertical) {
				maxBound = viewport.left;
				minBound = viewport.right;
			}
		}
		zeroValue = Math.max(zeroValue, Math.min(minBound, maxBound));
		zeroValue = Math.min(zeroValue, Math.max(minBound, maxBound));
		bound = 0;
		let currentDouble: number;
		for (let i = 0; i < count; i++) {
			currentDouble = currentDoubles._inner[i];
			if (isNaN_(currentDouble) || isInfinity(currentDouble)) {
				continue;
			}
			bound = Math.max(bound, Math.abs(currentDouble - zeroValue));
		}
		let p: number;
		for (let i1 = 0; i1 < count; i1++) {
			currentDouble = currentDoubles._inner[i1];
			let mid: number;
			mid = currentDouble;
			if (bound == 0 || isNaN_(mid) || isInfinity(mid)) {
				p = 1;
			} else {
				p = Math.abs(mid - zeroValue) / bound;
			}
			previousModifiers.add(2 - p);
			currentModifiers.add(2 - p);
		}
	}
	private applyIndexScaledSpeedModifiers(count: number, transitionMode: CategoryTransitionInMode, previousModifiers: List$1<number>, currentModifiers: List$1<number>, xAxis: Axis, yAxis: Axis, isVertical: boolean, viewport: Rect): void {
		if (count == 0) {
			return;
		}
		let indexAxis = xAxis;
		if (isVertical) {
			indexAxis = yAxis;
		}
		let isInverted = false;
		if (indexAxis != null) {
			isInverted = indexAxis.isInverted;
		}
		let p: number;
		for (let i = 0; i < count; i++) {
			if (count == 1) {
				p = 1;
			} else {
				p = <number>i / <number>(count - 1);
			}
			p = 1 - p;
			previousModifiers.add(1 + p);
			currentModifiers.add(1 + p);
		}
	}
	private prepareSourceFrameExpand(previousFrame: CategoryFrame, currentFrame: CategoryFrame): void {
		previousFrame.buckets.clear();
		previousFrame.errorBuckets.clear();
		previousFrame.markers.clear();
		previousFrame.trend.clear();
		previousFrame.errorBars.clear();
		previousFrame.errorBarPositiveSizes.clear();
		previousFrame.errorBarNegativeSizes.clear();
		this.copyBucketList(previousFrame.buckets, currentFrame.buckets);
		this.copyDoubleList(previousFrame.errorBuckets, currentFrame.errorBuckets);
		this.copyPointList(previousFrame.markers, currentFrame.markers);
		this.copyPointList(previousFrame.trend, currentFrame.trend);
		this.copyPointList(previousFrame.errorBars, currentFrame.errorBars);
		this.copyDoubleList(previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes);
		this.copyDoubleList(previousFrame.errorBarNegativeSizes, currentFrame.errorBarNegativeSizes);
		let bucketsCount = previousFrame.buckets.count;
		let buckets = previousFrame.buckets;
		let currentBucket: number[];
		let min: number;
		let max: number;
		let mid: number;
		for (let i = 0; i < bucketsCount; i++) {
			currentBucket = buckets._inner[i];
			min = currentBucket[1];
			max = currentBucket[1];
			for (let j = 2; j < currentBucket.length; j++) {
				min = Math.min(min, currentBucket[j]);
				max = Math.max(max, currentBucket[j]);
			}
			mid = (min + max) / 2;
			for (let j1 = 1; j1 < currentBucket.length; j1++) {
				currentBucket[j1] = mid;
			}
		}
		let errorBarSizesCount = previousFrame.errorBarPositiveSizes.count;
		let errorBarPositiveSizes = previousFrame.errorBarPositiveSizes;
		let errorBarNegativeSizes = previousFrame.errorBarNegativeSizes;
		for (let i1 = 0; i1 < errorBarSizesCount; i1++) {
			errorBarPositiveSizes._inner[i1] = 0;
			errorBarNegativeSizes._inner[i1] = 0;
		}
	}
	private prepareSourceFrameSweepFromLeftOrRight(previousFrame: CategoryFrame, currentFrame: CategoryFrame, isRight: boolean): void {
		if (isRight) {
			this.copyFrame(previousFrame, currentFrame);
			previousFrame.customClip = new Rect(0, 1, 0, 0, 1);
		} else {
			this.copyFrame(previousFrame, currentFrame);
			previousFrame.customClip = new Rect(0, 0, 0, 0, 1);
		}
	}
	private prepareSourceFrameSweepFromTopOrBottom(previousFrame: CategoryFrame, currentFrame: CategoryFrame, isTop: boolean): void {
		if (isTop) {
			this.copyFrame(previousFrame, currentFrame);
			previousFrame.customClip = new Rect(0, 0, 0, 1, 0);
		} else {
			this.copyFrame(previousFrame, currentFrame);
			previousFrame.customClip = new Rect(0, 0, 1, 1, 0);
		}
	}
	private copyFrame(previousFrame: CategoryFrame, currentFrame: CategoryFrame): void {
		previousFrame.buckets.clear();
		previousFrame.errorBuckets.clear();
		previousFrame.markers.clear();
		previousFrame.trend.clear();
		previousFrame.errorBars.clear();
		previousFrame.errorBarPositiveSizes.clear();
		previousFrame.errorBarNegativeSizes.clear();
		this.copyBucketList(previousFrame.buckets, currentFrame.buckets);
		this.copyDoubleList(previousFrame.errorBuckets, currentFrame.errorBuckets);
		this.copyPointList(previousFrame.markers, currentFrame.markers);
		this.copyPointList(previousFrame.trend, currentFrame.trend);
		this.copyPointList(previousFrame.errorBars, currentFrame.errorBars);
		this.copyDoubleList(previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes);
		this.copyDoubleList(previousFrame.errorBarNegativeSizes, currentFrame.errorBarNegativeSizes);
	}
	private preparePointListFromValue(sourceItems: List$1<Point>, targetItems: List$1<Point>, isVertical: boolean, value: number, isValueAxis: boolean): void {
		let targetCount = targetItems.count;
		let currentPoint: Point;
		let sourcePoint: Point;
		for (let i = 0; i < targetCount; i++) {
			currentPoint = targetItems._inner[i];
			if (isValueAxis) {
				if (isVertical) {
					sourcePoint = <Point>{ $type: Point_$type, x: value, y: currentPoint.y };
				} else {
					sourcePoint = <Point>{ $type: Point_$type, x: currentPoint.x, y: value };
				}
			} else {
				if (isVertical) {
					sourcePoint = <Point>{ $type: Point_$type, x: currentPoint.x, y: value };
				} else {
					sourcePoint = <Point>{ $type: Point_$type, x: value, y: currentPoint.y };
				}
			}
			sourceItems.add(sourcePoint);
		}
	}
	private copyPointList(sourceItems: List$1<Point>, targetItems: List$1<Point>): void {
		let targetCount = targetItems.count;
		let currentPoint: Point;
		let sourcePoint: Point;
		for (let i = 0; i < targetCount; i++) {
			currentPoint = targetItems._inner[i];
			sourcePoint = <Point>{ $type: Point_$type, x: currentPoint.x, y: currentPoint.y };
			sourceItems.add(sourcePoint);
		}
	}
	private copyBucketList(sourceItems: List$1<number[]>, targetItems: List$1<number[]>): void {
		let bucketsCount = targetItems.count;
		let buckets = targetItems;
		let sourceBucket: number[];
		let currentBucket: number[];
		let sourceBuckets = sourceItems;
		for (let i = 0; i < bucketsCount; i++) {
			currentBucket = buckets._inner[i];
			sourceBucket = <number[]>new Array(currentBucket.length);
			for (let j = 0; j < sourceBucket.length; j++) {
				sourceBucket[j] = currentBucket[j];
			}
			sourceBuckets.add(sourceBucket);
		}
	}
	private prepareBucketListFromValue(sourceItems: List$1<number[]>, targetItems: List$1<number[]>, isVertical: boolean, value: number, isValueAxis: boolean): void {
		let bucketsCount = targetItems.count;
		let buckets = targetItems;
		let sourceBucket: number[];
		let currentBucket: number[];
		let sourceBuckets = sourceItems;
		for (let i = 0; i < bucketsCount; i++) {
			currentBucket = buckets._inner[i];
			sourceBucket = <number[]>new Array(currentBucket.length);
			if (isValueAxis) {
				sourceBucket[0] = currentBucket[0];
				for (let j = 1; j < sourceBucket.length; j++) {
					sourceBucket[j] = value;
				}
			} else {
				sourceBucket[0] = value;
				for (let j1 = 1; j1 < sourceBucket.length; j1++) {
					sourceBucket[j1] = currentBucket[j1];
				}
			}
			sourceBuckets.add(sourceBucket);
		}
	}
	private prepareFloatListFromValue(sourceItems: List$1<number>, targetItems: List$1<number>): void {
		let targetCount = targetItems.count;
		let currentItem: number;
		for (let i = 0; i < targetCount; i++) {
			currentItem = targetItems._inner[i];
			sourceItems.add(currentItem);
		}
	}
	private copyFloatList(sourceItems: List$1<number>, targetItems: List$1<number>): void {
		let targetCount = targetItems.count;
		let currentItem: number;
		for (let i = 0; i < targetCount; i++) {
			currentItem = targetItems._inner[i];
			sourceItems.add(currentItem);
		}
	}
	private copyDoubleList(sourceItems: List$1<number>, targetItems: List$1<number>): void {
		let targetCount = targetItems.count;
		let currentItem: number;
		for (let i = 0; i < targetCount; i++) {
			currentItem = targetItems._inner[i];
			sourceItems.add(currentItem);
		}
	}
	private prepareDoubleListFromValue(sourceItems: List$1<number>, targetItems: List$1<number>, isVertical: boolean, value: number, isValueAxis: boolean): void {
		let targetCount = targetItems.count;
		let currentItem: number;
		for (let i = 0; i < targetCount; i++) {
			currentItem = targetItems._inner[i];
			sourceItems.add(currentItem);
		}
	}
	private prepareSourceFrameFromLeftOrRight(previousFrame: CategoryFrame, currentFrame: CategoryFrame, isRight: boolean, isVertical: boolean, viewport: Rect): void {
		let fromValue: number = viewport.right;
		if (!isRight) {
			fromValue = viewport.left;
		}
		let isValueAxis = false;
		if (isVertical) {
			isValueAxis = true;
		}
		this.prepareBucketListFromValue(previousFrame.buckets, currentFrame.buckets, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBuckets, currentFrame.errorBuckets, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.markers, currentFrame.markers, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.trend, currentFrame.trend, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.errorBars, currentFrame.errorBars, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBarNegativeSizes, currentFrame.errorBarNegativeSizes, isVertical, fromValue, isValueAxis);
	}
	private prepareSourceFrameFromTopOrBottom(previousFrame: CategoryFrame, currentFrame: CategoryFrame, isTop: boolean, isVertical: boolean, viewport: Rect): void {
		let fromValue: number = viewport.bottom;
		if (isTop) {
			fromValue = viewport.top;
		}
		let isValueAxis = true;
		if (isVertical) {
			isValueAxis = false;
		}
		this.prepareBucketListFromValue(previousFrame.buckets, currentFrame.buckets, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBuckets, currentFrame.errorBuckets, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.markers, currentFrame.markers, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.trend, currentFrame.trend, isVertical, fromValue, isValueAxis);
		this.preparePointListFromValue(previousFrame.errorBars, currentFrame.errorBars, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes, isVertical, fromValue, isValueAxis);
		this.prepareDoubleListFromValue(previousFrame.errorBarNegativeSizes, currentFrame.errorBarNegativeSizes, isVertical, fromValue, isValueAxis);
	}
	private prepareSourceFrameFromZero(previousFrame: CategoryFrame, currentFrame: CategoryFrame, zeroValue: number, isVertical: boolean): void {
		this.prepareBucketListFromValue(previousFrame.buckets, currentFrame.buckets, isVertical, zeroValue, true);
		this.prepareDoubleListFromValue(previousFrame.errorBuckets, currentFrame.errorBuckets, isVertical, zeroValue, true);
		this.preparePointListFromValue(previousFrame.markers, currentFrame.markers, isVertical, zeroValue, true);
		this.preparePointListFromValue(previousFrame.trend, currentFrame.trend, isVertical, zeroValue, true);
		this.preparePointListFromValue(previousFrame.errorBars, currentFrame.errorBars, isVertical, zeroValue, true);
		this.prepareDoubleListFromValue(previousFrame.errorBarPositiveSizes, currentFrame.errorBarPositiveSizes, isVertical, zeroValue, true);
		this.prepareDoubleListFromValue(previousFrame.errorBarNegativeSizes, currentFrame.errorBarNegativeSizes, isVertical, zeroValue, true);
	}
}


