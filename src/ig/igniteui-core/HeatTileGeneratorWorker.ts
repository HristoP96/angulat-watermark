/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, Type, markType } from "./type";
import { TileWorkSettings } from "./TileWorkSettings";
import { ITileWorkCompletedSink } from "./ITileWorkCompletedSink";
import { HeatTileScaler } from "./HeatTileScaler";
import { List$1 } from "./List$1";
import { Rect } from "./Rect";
import { Color } from "./Color";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { truncate, isNaN_, logBase } from "./number";

/**
 * @hidden 
 */
export class HeatTileGeneratorWorker extends Base {
	static $t: Type = markType(HeatTileGeneratorWorker, 'HeatTileGeneratorWorker');
	private _settings: TileWorkSettings = null;
	private _imageData: number[] = null;
	private _x: number = 0;
	private _y: number = 0;
	private _z: number = 0;
	private _url: string = null;
	private static _idLock: any = {};
	private static _nextId: number = 0;
	private _messageId: number = 0;
	get messageId(): number {
		return this._messageId;
	}
	set messageId(value: number) {
		this._messageId = value;
	}
	private _transferableSupported: boolean = false;
	get transferableSupported(): boolean {
		return this._transferableSupported;
	}
	set transferableSupported(value: boolean) {
		this._transferableSupported = value;
	}
	private _id: number = 0;
	get id(): number {
		return this._id;
	}
	get settings(): TileWorkSettings {
		return this._settings;
	}
	constructor(settings: TileWorkSettings) {
		super();
		this._settings = settings;
		HeatTileGeneratorWorker._nextId++;
		if (HeatTileGeneratorWorker._nextId == 0x7FFFFFFFFFFFFFFF) {
			HeatTileGeneratorWorker._nextId = 0;
		}
		this._id = HeatTileGeneratorWorker._nextId;
	}
	doWork(): void {
		let blurRadius: number = this.settings.blurRadius;
		let zoomedBlurRadius: number = blurRadius;
		let maxBlurRadius: number = this.settings.maxBlurRadius;
		let scaler: HeatTileScaler = this.settings.scaler;
		this._x = this.settings.x;
		this._y = this.settings.y;
		this._z = this.settings.z;
		if (this.settings.useBlurRadiusAdjustedForZoom && this._z > 0) {
			let zoomFactor = Math.sqrt(1 * 1 + 1 * 1) * Math.pow(2, this._z - 1);
			zoomedBlurRadius = blurRadius * zoomFactor;
		}
		if (!isNaN_(maxBlurRadius)) {
			if (zoomedBlurRadius > maxBlurRadius) {
				zoomedBlurRadius = maxBlurRadius;
			}
		}
		let longitudes: number[] = this.settings.xValues;
		let latitudes: number[] = this.settings.yValues;
		let values: number[] = this.settings.values;
		let longitudesLength: number = this.settings.xValues.length;
		let latitudesLength: number = this.settings.yValues.length;
		let currLongitude: number;
		let currLatitude: number;
		let currValue: number;
		let currMinLongitude: number;
		let currMaxLongitude: number;
		let currMinLatitude: number;
		let currMaxLatitude: number;
		let minimumLongitude: number = this.settings.minimumVisibleLongitude;
		let maximumLongitude: number = this.settings.maximumVisibleLongitude;
		let minimumLatitude: number = this.settings.minimumVisibleLatitude;
		let maximumLatitude: number = this.settings.maximumVisibleLatitude;
		let filterBreadth: number = this.getFilterBreadth(this.settings.tileViewport, zoomedBlurRadius);
		let filter: number[] = this.getFilter(filterBreadth, zoomedBlurRadius);
		let zoomedBlurRadiusLat: number = Math.abs(scaler.unscaleLatitude(0, this.settings.window, this.settings.tileViewport) - scaler.unscaleLatitude(zoomedBlurRadius, this.settings.window, this.settings.tileViewport));
		let zoomedBlurRadiusLon: number = Math.abs(scaler.unscaleLongitude(0, this.settings.window, this.settings.tileViewport) - scaler.unscaleLongitude(zoomedBlurRadius, this.settings.window, this.settings.tileViewport));
		let filterStartX: number;
		let filterStartY: number;
		let visibleLongitudes: List$1<number> = new List$1<number>(Number_$type, 0);
		let visibleLatitudes: List$1<number> = new List$1<number>(Number_$type, 0);
		let visibleValues: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < longitudesLength; i++) {
			currLongitude = longitudes[i];
			currLatitude = latitudes[i];
			currValue = values[i];
			currMinLongitude = currLongitude - zoomedBlurRadiusLon;
			currMaxLongitude = currLongitude + zoomedBlurRadiusLon;
			currMinLatitude = currLatitude - zoomedBlurRadiusLat;
			currMaxLatitude = currLatitude + zoomedBlurRadiusLat;
			if (currMaxLongitude < minimumLongitude || currMaxLatitude < minimumLatitude || currMinLatitude > maximumLatitude || currMinLongitude > maximumLongitude) {
				continue;
			}
			visibleLongitudes.add(currLongitude);
			visibleLatitudes.add(currLatitude);
			visibleValues.add(currValue);
		}
		let imageData: number[] = this.getImageBytes(this.settings.tileViewport);
		let accumulationData: number[] = this.getAccumulationData(this.settings.tileViewport);
		let tileWidth: number = <number>truncate(this.settings.tileViewport.width);
		let visibleLength: number = visibleLatitudes.count;
		scaler.scaleLatitudes(visibleLatitudes, this.settings.window, this.settings.tileViewport);
		scaler.scaleLongitudes(visibleLongitudes, this.settings.window, this.settings.tileViewport);
		let filterX: number;
		let filterY: number;
		let filterVal: number;
		let filteredValue: number;
		for (let i1 = 0; i1 < visibleLength; i1++) {
			filterStartX = <number>truncate(Math.floor(visibleLongitudes._inner[i1] - zoomedBlurRadius));
			filterStartY = <number>truncate(Math.floor(visibleLatitudes._inner[i1] - zoomedBlurRadius));
			for (let j = filterStartX; j < filterStartX + filterBreadth; j++) {
				for (let k = filterStartY; k < filterStartY + filterBreadth; k++) {
					filterX = j - filterStartX;
					filterY = k - filterStartY;
					if (j < 0 || j > (tileWidth - 1) || k < 0 || k > (tileWidth - 1)) {
						continue;
					}
					filterVal = filter[filterY * filterBreadth + filterX];
					filteredValue = visibleValues._inner[i1] * filterVal;
					accumulationData[k * tileWidth + j] = accumulationData[k * tileWidth + j] + filteredValue;
				}
			}
		}
		let accumulationLength: number = accumulationData.length;
		let maxValue: number = -1.7976931348623157E+308;
		let minValue: number = 1.7976931348623157E+308;
		let currAcc: number;
		if (!isNaN_(this.settings.globalMinimum) && !isNaN_(this.settings.globalMaximum) && this.settings.useGlobalMinMax && !this.settings.testRun) {
			minValue = this.settings.globalMinimum;
			maxValue = this.settings.globalMaximum;
			if (!isNaN_(this.settings.minimumValue)) {
				minValue = this.settings.minimumValue;
			}
			if (!isNaN_(this.settings.maximumValue)) {
				maxValue = this.settings.maximumValue;
			}
		} else if (!isNaN_(this.settings.minimumValue) && !isNaN_(this.settings.maximumValue)) {
			minValue = this.settings.minimumValue;
			maxValue = this.settings.maximumValue;
		} else {
			let maxAccLocation: number = -1;
			let minAccLocation: number = -1;
			for (let i2 = 0; i2 < accumulationLength; i2++) {
				currAcc = accumulationData[i2];
				if (currAcc > 0) {
					if (currAcc > maxValue) {
						maxValue = currAcc;
						maxAccLocation = i2;
					}
					if (currAcc < minValue) {
						minValue = currAcc;
						minAccLocation = i2;
					}
				}
			}
			let maxAccPixelY: number = <number>truncate(Math.floor(maxAccLocation / <number>tileWidth));
			let maxAccPixelX: number = maxAccLocation % tileWidth;
			let minAccPixelY: number = <number>truncate(Math.floor(minAccLocation / <number>tileWidth));
			let minAccPixelX: number = minAccLocation % tileWidth;
			this.settings.globalMinimum = minValue;
			this.settings.globalMaximum = maxValue;
			let maxCount: number = 0;
			let minCount: number = 0;
			let sumMaxLatitude: number = 0;
			let sumMaxLongitude: number = 0;
			let sumMinLatitude: number = 0;
			let sumMinLongitude: number = 0;
			for (let i3 = 0; i3 < visibleLength; i3++) {
				filterStartX = <number>truncate(Math.floor(visibleLongitudes._inner[i3] - zoomedBlurRadius));
				filterStartY = <number>truncate(Math.floor(visibleLatitudes._inner[i3] - zoomedBlurRadius));
				for (let j1 = filterStartX; j1 < filterStartX + filterBreadth; j1++) {
					for (let k1 = filterStartY; k1 < filterStartY + filterBreadth; k1++) {
						filterX = j1 - filterStartX;
						filterY = k1 - filterStartY;
						if (j1 < 0 || j1 > (tileWidth - 1) || k1 < 0 || k1 > (tileWidth - 1)) {
							continue;
						}
						if (j1 == maxAccPixelX && k1 == maxAccPixelY) {
							maxCount++;
							sumMaxLatitude = sumMaxLatitude + scaler.unscaleLatitude(visibleLatitudes._inner[i3], this.settings.window, this.settings.tileViewport);
							sumMaxLongitude = sumMaxLongitude + scaler.unscaleLongitude(visibleLongitudes._inner[i3], this.settings.window, this.settings.tileViewport);
						}
						if (j1 == minAccPixelX && k1 == minAccPixelY) {
							minCount++;
							sumMinLatitude = sumMinLatitude + scaler.unscaleLatitude(visibleLatitudes._inner[i3], this.settings.window, this.settings.tileViewport);
							sumMinLongitude = sumMinLongitude + scaler.unscaleLongitude(visibleLongitudes._inner[i3], this.settings.window, this.settings.tileViewport);
						}
					}
				}
			}
			this._maxAccPixelLatitude = sumMaxLatitude / maxCount;
			this._maxAccPixelLongitude = sumMaxLongitude / maxCount;
			this._minAccPixelLatitude = sumMinLatitude / minCount;
			this._minAccPixelLongitude = sumMinLongitude / minCount;
			if (!isNaN_(this.settings.minimumValue)) {
				minValue = this.settings.minimumValue;
			}
			if (!isNaN_(this.settings.maximumValue)) {
				maxValue = this.settings.maximumValue;
			}
		}
		if (!this.settings.testRun) {
			this.doRGBInterpolation(imageData, accumulationData, maxValue, minValue);
			this._imageData = imageData;
		}
		this.finish();
	}
	private doRGBInterpolation(imageData: number[], accumulationData: number[], maxValue: number, minValue: number): void {
		let currAcc: number;
		let accumulationLength: number = accumulationData.length;
		if (this.settings.useLogarithmicScale) {
			if (minValue <= 0) {
				minValue = 0;
			} else {
				minValue = logBase(minValue, this.settings.logarithmBase);
			}
			if (maxValue <= 0) {
				maxValue = 0;
			} else {
				maxValue = logBase(maxValue, this.settings.logarithmBase);
			}
		}
		let p: number = 0;
		let range: number = maxValue - minValue;
		if (isNaN_(range) || range <= 0) {
			range = 1;
		}
		let currA: number;
		let currR: number;
		let currG: number;
		let currB: number;
		let useLogarithm = this.settings.useLogarithmicScale;
		let logarithmBase = this.settings.logarithmBase;
		if (this.settings.scaleColors != null) {
			let minA: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let maxA: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let minR: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let maxR: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let minG: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let maxG: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let minB: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let maxB: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let rangeA: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let rangeR: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let rangeG: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let rangeB: number[] = <number[]>new Array(this.settings.scaleColors.length);
			let offsets: number[] = this.settings.scaleColorOffsets;
			if (offsets == null || offsets.length != this.settings.scaleColors.length) {
				offsets = <number[]>new Array(this.settings.scaleColors.length);
				if (offsets.length == 1) {
					offsets[0] = 0;
				} else {
					for (let i = 0; i < this.settings.scaleColors.length; i++) {
						offsets[i] = <number>i / <number>(this.settings.scaleColors.length - 1);
					}
				}
			}
			for (let i1 = 0; i1 < this.settings.scaleColors.length; i1++) {
				minA[i1] = this.settings.scaleColors[i1].a;
				minR[i1] = this.settings.scaleColors[i1].r;
				minG[i1] = this.settings.scaleColors[i1].g;
				minB[i1] = this.settings.scaleColors[i1].b;
				if (i1 < this.settings.scaleColors.length - 1) {
					maxA[i1] = this.settings.scaleColors[i1 + 1].a;
					maxR[i1] = this.settings.scaleColors[i1 + 1].r;
					maxG[i1] = this.settings.scaleColors[i1 + 1].g;
					maxB[i1] = this.settings.scaleColors[i1 + 1].b;
				} else {
					maxA[i1] = this.settings.scaleColors[i1].a;
					maxR[i1] = this.settings.scaleColors[i1].r;
					maxG[i1] = this.settings.scaleColors[i1].g;
					maxB[i1] = this.settings.scaleColors[i1].b;
				}
				rangeA[i1] = maxA[i1] - minA[i1];
				rangeR[i1] = maxR[i1] - minR[i1];
				rangeG[i1] = maxG[i1] - minG[i1];
				rangeB[i1] = maxB[i1] - minB[i1];
			}
			for (let i2 = 0; i2 < accumulationLength; i2++) {
				currAcc = accumulationData[i2];
				if (currAcc == 0) {
					continue;
				}
				if (useLogarithm) {
					if (currAcc <= 0) {
						currAcc = 0;
					} else {
						currAcc = logBase(currAcc, logarithmBase);
					}
				}
				p = (currAcc - minValue) / (range);
				if (p < 0) {
					p = 0;
				}
				if (p > 1) {
					p = 1;
				}
				let k: number = 0;
				for (let j = 0; j < offsets.length; j++) {
					if (offsets[j] >= p) {
						k = j - 1;
						break;
					}
				}
				if (k > offsets.length - 2) {
					k = offsets.length - 2;
				}
				if (k < 0) {
					k = 0;
				}
				p = (p - offsets[k]) / (offsets[k + 1] - offsets[k]);
				currA = <number>truncate(Math.floor(minA[k] + p * (rangeA[k])));
				currR = <number>truncate(Math.floor(minR[k] + p * (rangeR[k])));
				currG = <number>truncate(Math.floor(minG[k] + p * (rangeG[k])));
				currB = <number>truncate(Math.floor(minB[k] + p * (rangeB[k])));
				imageData[4 * i2] = currA;
				imageData[4 * i2 + 1] = currR;
				imageData[4 * i2 + 2] = currG;
				imageData[4 * i2 + 3] = currB;
			}
		} else {
			let minA1: number = this.settings.minimumColor.a;
			let maxA1: number = this.settings.maximumColor.a;
			let minR1: number = this.settings.minimumColor.r;
			let maxR1: number = this.settings.maximumColor.r;
			let minG1: number = this.settings.minimumColor.g;
			let maxG1: number = this.settings.maximumColor.g;
			let minB1: number = this.settings.minimumColor.b;
			let maxB1: number = this.settings.maximumColor.b;
			let rangeA1: number = maxA1 - minA1;
			let rangeR1: number = maxR1 - minR1;
			let rangeG1: number = maxG1 - minG1;
			let rangeB1: number = maxB1 - minB1;
			for (let i3 = 0; i3 < accumulationLength; i3++) {
				currAcc = accumulationData[i3];
				if (currAcc == 0) {
					continue;
				}
				if (useLogarithm) {
					currAcc = logBase(currAcc, logarithmBase);
				}
				p = (currAcc - minValue) / (range);
				if (p < 0) {
					p = 0;
				}
				if (p > 1) {
					p = 1;
				}
				currA = <number>truncate(Math.floor(minA1 + p * (rangeA1)));
				currR = <number>truncate(Math.floor(minR1 + p * (rangeR1)));
				currG = <number>truncate(Math.floor(minG1 + p * (rangeG1)));
				currB = <number>truncate(Math.floor(minB1 + p * (rangeB1)));
				imageData[4 * i3] = currA;
				imageData[4 * i3 + 1] = currR;
				imageData[4 * i3 + 2] = currG;
				imageData[4 * i3 + 3] = currB;
			}
		}
	}
	private getAccumulationData(tileViewport: Rect): number[] {
		let arr = <number[]>new Array(<number>truncate(tileViewport.width) * <number>truncate(tileViewport.height));
		for (let i = 0; i < arr.length; i++) {
			arr[i] = 0;
		}
		return arr;
	}
	private getImageBytes(tileViewport: Rect): number[] {
		let arr = <number[]>new Array(<number>truncate(tileViewport.width) * <number>truncate(tileViewport.height) * 4);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = 0;
		}
		return arr;
	}
	private getFilter(filterBreadth: number, zoomedBlurRadius: number): number[] {
		let filter = <number[]>new Array(<number>filterBreadth * <number>filterBreadth);
		for (let i = 0; i < filter.length; i++) {
			filter[i] = 0;
		}
		let radius = filterBreadth / 2;
		let center = filterBreadth / 2;
		for (let i1 = 0; i1 < filterBreadth; i1++) {
			for (let j = 0; j < filterBreadth; j++) {
				let dist = Math.sqrt(Math.pow(i1 - center, 2) + Math.pow(j - center, 2));
				if (dist > radius) {
					filter[j * filterBreadth + i1] = 0;
				} else {
					filter[j * filterBreadth + i1] = radius - dist;
				}
			}
		}
		let sum: number = 0;
		let max: number = -1.7976931348623157E+308;
		let min: number = 1.7976931348623157E+308;
		for (let i2 = 0; i2 < filterBreadth; i2++) {
			for (let j1 = 0; j1 < filterBreadth; j1++) {
				let curr = filter[j1 * filterBreadth + i2];
				if (curr == 0) {
					continue;
				}
				sum += curr;
				max = curr > max ? curr : max;
				min = curr < min ? curr : min;
			}
		}
		for (let i3 = 0; i3 < filterBreadth; i3++) {
			for (let j2 = 0; j2 < filterBreadth; j2++) {
				let curr1 = filter[j2 * filterBreadth + i3];
				if (curr1 == 0) {
					continue;
				}
				let p = (curr1 - min) / (max - min);
				filter[j2 * filterBreadth + i3] = 0.01 + p * (0.99);
			}
		}
		filter[<number>truncate(center) * filterBreadth + <number>truncate(center)] = 1;
		return filter;
	}
	private getFilterBreadth(tileViewport: Rect, zoomedBlurRadius: number): number {
		return <number>truncate(Math.floor(zoomedBlurRadius * 2));
	}
	private finish(): void {
		if (this.completedSink == null) {
			return;
		}
		this.completedSink.onCompleted(((() => {
			let $ret = new HeatTileImageCreatedEventArgs();
			$ret.url = this._url;
			$ret.x = this._x;
			$ret.y = this._y;
			$ret.z = this._z;
			$ret.globalMinimumValue = this.settings.globalMinimum;
			$ret.globalMaximumValue = this.settings.globalMaximum;
			$ret.globalMaximumValueLongitude = this._maxAccPixelLongitude;
			$ret.globalMaximumValueLatitude = this._maxAccPixelLatitude;
			$ret.globalMinimumValueLongitude = this._minAccPixelLongitude;
			$ret.globalMinimumValueLatitude = this._minAccPixelLatitude;
			$ret.imageData = this._imageData;
			$ret.image = this.settings.image;
			return $ret;
		})()));
	}
	private static _curr: number = 0;
	private _maxAccPixelLatitude: number = 0;
	private _maxAccPixelLongitude: number = 0;
	private _minAccPixelLatitude: number = 0;
	private _minAccPixelLongitude: number = 0;
	private _completedSink: ITileWorkCompletedSink = null;
	get completedSink(): ITileWorkCompletedSink {
		return this._completedSink;
	}
	set completedSink(value: ITileWorkCompletedSink) {
		this._completedSink = value;
	}
}


