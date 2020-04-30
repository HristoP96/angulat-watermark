/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Frame } from "./Frame";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { Point, Base, Array_$type, Number_$type, Point_$type, typeCast, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CategoryFrame extends Frame {
	static $t: Type = markType(CategoryFrame, 'CategoryFrame', (<any>Frame).$type);
	constructor(count: number) {
		super();
		this._fullClip = new Rect(0, 0, 0, 1, 1);
		this.cnt = count;
		this.incrementFrameVersion();
	}
	private _fullClip: Rect = null;
	readonly buckets: List$1<number[]> = new List$1<number[]>(Array_$type, 0);
	readonly errorBuckets: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly errorSpeedModifiers: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly markers: List$1<Point> = new List$1<Point>(Point_$type, 0);
	readonly markerSpeedModifiers: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly trend: List$1<Point> = new List$1<Point>(Point_$type, 0);
	readonly trendSpeedModifiers: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly errorBars: List$1<Point> = new List$1<Point>(Point_$type, 0);
	readonly errorBarsSpeedModifiers: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly errorBarPositiveSizes: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly errorBarNegativeSizes: List$1<number> = new List$1<number>(Number_$type, 0);
	readonly speedModifiers: List$1<number> = new List$1<number>(Number_$type, 0);
	static _categoryFrameVersion: number = 0;
	private _frameVersion: number = 0;
	get frameVersion(): number {
		return this._frameVersion;
	}
	set frameVersion(value: number) {
		this._frameVersion = value;
	}
	private cnt: number = 0;
	interpolate2(p: number, _min: Frame, _max: Frame): void {
		this.incrementFrameVersion();
		let min: CategoryFrame = typeCast<CategoryFrame>((<any>CategoryFrame).$type, _min);
		let max: CategoryFrame = typeCast<CategoryFrame>((<any>CategoryFrame).$type, _max);
		let minCount: number = min.buckets.count;
		let maxCount: number = max.buckets.count;
		let count: number = Math.max(minCount, maxCount);
		let markerCount: number = Math.max(min.markers.count, max.markers.count);
		let trendCount: number = Math.max(min.trend.count, max.trend.count);
		let errorCount: number = Math.max(min.errorBuckets.count, max.errorBuckets.count);
		let errorBarsCount: number = Math.max(min.errorBars.count, max.errorBars.count);
		let speedModified: boolean = min.speedModifiers.count > 0;
		if (speedModified) {
			this.reconcileSpeedModifiers(this.speedModifiers, p, min.speedModifiers, max.speedModifiers, count);
		}
		let markerSpeedModified: boolean = min.markerSpeedModifiers.count > 0;
		if (markerSpeedModified) {
			this.reconcileSpeedModifiers(this.markerSpeedModifiers, p, min.markerSpeedModifiers, max.markerSpeedModifiers, markerCount);
		}
		let trendSpeedModified: boolean = min.trendSpeedModifiers.count > 0;
		if (trendSpeedModified) {
			this.reconcileSpeedModifiers(this.trendSpeedModifiers, p, min.trendSpeedModifiers, max.trendSpeedModifiers, trendCount);
		}
		let errorSpeedModified: boolean = min.errorSpeedModifiers.count > 0;
		if (errorSpeedModified) {
			this.reconcileSpeedModifiers(this.errorSpeedModifiers, p, min.errorSpeedModifiers, max.errorSpeedModifiers, errorCount);
		}
		let errorBarsSpeedModified: boolean = min.errorBarsSpeedModifiers.count > 0;
		if (errorBarsSpeedModified) {
			this.reconcileSpeedModifiers(this.errorBarsSpeedModifiers, p, min.errorBarsSpeedModifiers, max.errorBarsSpeedModifiers, errorBarsCount);
		}
		if (this.buckets.count < count) {
			while (this.buckets.count < count) {
				this.buckets.add(<number[]>new Array(this.cnt));
			}
		}
		if (this.buckets.count > count) {
			this.buckets.removeRange(count, this.buckets.count - count);
		}
		if (speedModified) {
			let speed: number = 0;
			for (let i: number = 0; i < Math.min(minCount, maxCount); ++i) {
				let bucket: number[] = this.buckets._inner[i];
				speed = p * this.speedModifiers._inner[i];
				speed = speed > 1 ? 1 : speed;
				for (let j: number = 0; j < this.cnt; ++j) {
					bucket[j] = min.buckets._inner[i][j] + speed * (max.buckets._inner[i][j] - min.buckets._inner[i][j]);
				}
			}
		} else {
			for (let i1: number = 0; i1 < Math.min(minCount, maxCount); ++i1) {
				let bucket1: number[] = this.buckets._inner[i1];
				for (let j1: number = 0; j1 < this.cnt; ++j1) {
					bucket1[j1] = min.buckets._inner[i1][j1] + p * (max.buckets._inner[i1][j1] - min.buckets._inner[i1][j1]);
				}
			}
		}
		if (minCount < maxCount) {
			let b: number[] = <number[]>new Array(this.cnt);
			for (let j2: number = this.cnt - 1; j2 >= 0; --j2) {
				b[j2] = min.buckets.count > 0 ? min.buckets._inner[min.buckets.count - 1][j2] : 0;
			}
			if (speedModified) {
				let speed1: number = 0;
				for (let i2: number = minCount; i2 < maxCount; ++i2) {
					let bucket2: number[] = this.buckets._inner[i2];
					speed1 = p * this.speedModifiers._inner[i2];
					speed1 = speed1 > 1 ? 1 : speed1;
					for (let j3: number = this.cnt - 1; j3 >= 0; --j3) {
						bucket2[j3] = b[j3] + speed1 * (max.buckets._inner[i2][j3] - b[j3]);
					}
				}
			} else {
				for (let i3: number = minCount; i3 < maxCount; ++i3) {
					let bucket3: number[] = this.buckets._inner[i3];
					for (let j4: number = this.cnt - 1; j4 >= 0; --j4) {
						bucket3[j4] = b[j4] + p * (max.buckets._inner[i3][j4] - b[j4]);
					}
				}
			}
		}
		if (minCount > maxCount) {
			let e: number[] = <number[]>new Array(this.cnt);
			for (let j5: number = this.cnt - 1; j5 >= 0; --j5) {
				e[j5] = max.buckets.count > 0 ? max.buckets._inner[max.buckets.count - 1][j5] : 0;
			}
			if (speedModified) {
				let speed2: number = 0;
				for (let i4: number = maxCount; i4 < minCount; ++i4) {
					let bucket4: number[] = this.buckets._inner[i4];
					speed2 = p * this.speedModifiers._inner[i4];
					speed2 = speed2 > 1 ? 1 : speed2;
					for (let j6: number = this.cnt - 1; j6 >= 0; --j6) {
						bucket4[j6] = min.buckets._inner[i4][j6] + speed2 * (e[j6] - min.buckets._inner[i4][j6]);
					}
				}
			} else {
				for (let i5: number = maxCount; i5 < minCount; ++i5) {
					let bucket5: number[] = this.buckets._inner[i5];
					for (let j7: number = this.cnt - 1; j7 >= 0; --j7) {
						bucket5[j7] = min.buckets._inner[i5][j7] + p * (e[j7] - min.buckets._inner[i5][j7]);
					}
				}
			}
		}
		if (markerSpeedModified) {
			Frame.interpolateWithSpeed(this.markers, p, min.markers, max.markers, this.markerSpeedModifiers);
		} else {
			Frame.interpolate(this.markers, p, min.markers, max.markers);
		}
		if (trendSpeedModified) {
			Frame.interpolateWithSpeed(this.trend, p, min.trend, max.trend, this.trendSpeedModifiers);
		} else {
			Frame.interpolate(this.trend, p, min.trend, max.trend);
		}
		if (errorSpeedModified) {
			Frame.interpolateWithSpeed(this.errorBars, p, min.errorBars, max.errorBars, this.errorSpeedModifiers);
		} else {
			Frame.interpolate(this.errorBars, p, min.errorBars, max.errorBars);
		}
		if (errorBarsSpeedModified) {
			Frame.interpolateWithSpeed1(this.errorBarPositiveSizes, p, min.errorBarPositiveSizes, max.errorBarPositiveSizes, this.errorBarsSpeedModifiers);
			Frame.interpolateWithSpeed1(this.errorBarNegativeSizes, p, min.errorBarNegativeSizes, max.errorBarNegativeSizes, this.errorBarsSpeedModifiers);
		} else {
			Frame.interpolate1(this.errorBarPositiveSizes, p, min.errorBarPositiveSizes, max.errorBarPositiveSizes);
			Frame.interpolate1(this.errorBarNegativeSizes, p, min.errorBarNegativeSizes, max.errorBarNegativeSizes);
		}
		let minClip = min.customClip;
		let maxClip = max.customClip;
		if (Rect.l_op_Equality(minClip, null)) {
			minClip = this._fullClip;
		}
		if (Rect.l_op_Equality(maxClip, null)) {
			maxClip = this._fullClip;
		}
		let left = minClip.left + (maxClip.left - minClip.left) * p;
		let top = minClip.top + (maxClip.top - minClip.top) * p;
		let width = Math.max(0, minClip.width + (maxClip.width - minClip.width) * p);
		let height = Math.max(0, minClip.height + (maxClip.height - minClip.height) * p);
		this.customClip = new Rect(0, left, top, width, height);
	}
	private reconcileSpeedModifiers(modifiers: List$1<number>, p: number, minSpeedModifiers: List$1<number>, maxSpeedModifiers: List$1<number>, count: number): void {
		if (maxSpeedModifiers.count == 0) {
			for (let i = 0; i < minSpeedModifiers.count; i++) {
				maxSpeedModifiers.add(minSpeedModifiers._inner[i]);
			}
		} else {
			Frame.interpolate1(modifiers, p, minSpeedModifiers, maxSpeedModifiers);
		}
		if (modifiers.count < count) {
			let speedCount = modifiers.count;
			for (let i1 = 0; i1 < count - speedCount; i1++) {
				modifiers.add(1);
			}
		}
	}
	clearSpeedModifiers(): void {
		this.speedModifiers.clear();
		this.trendSpeedModifiers.clear();
		this.markerSpeedModifiers.clear();
		this.errorSpeedModifiers.clear();
		this.errorBarsSpeedModifiers.clear();
	}
	clearFrame(): void {
		this.incrementFrameVersion();
		this.clearSpeedModifiers();
		this.customClip = this._fullClip;
	}
	resetFrame(): void {
		this.clearFrame();
		this.buckets.clear();
		this.errorBars.clear();
		this.errorBuckets.clear();
		this.markers.clear();
		this.trend.clear();
	}
	incrementFrameVersion(): void {
		CategoryFrame._categoryFrameVersion++;
		if (CategoryFrame._categoryFrameVersion >= (0x7FFFFFFF - 1)) {
			CategoryFrame._categoryFrameVersion = 0;
		}
		this.frameVersion = CategoryFrame._categoryFrameVersion;
	}
	private _customClip: Rect = null;
	get customClip(): Rect {
		return this._customClip;
	}
	set customClip(value: Rect) {
		this._customClip = value;
	}
}


