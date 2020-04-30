/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { ScalerVisibleBounds } from "./ScalerVisibleBounds";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class HeatTileScaler extends Base {
	static $t: Type = markType(HeatTileScaler, 'HeatTileScaler');
	private static readonly minimumLatitude: number = -85.05112878;
	private static readonly maximumLatitude: number = 85.05112878;
	private static readonly minimumLongitude: number = -180;
	private static readonly maximumLongitude: number = 180;
	private static readonly degreeAsRadian: number = Math.PI / 180;
	private _latitudeSpan: number = 0;
	private _longitudeSpan: number = 0;
	private _projectedMaximum: number = 0;
	private _projectedRange: number = 0;
	constructor() {
		super();
		this._latitudeSpan = HeatTileScaler.maximumLatitude - HeatTileScaler.minimumLatitude;
		this._longitudeSpan = HeatTileScaler.maximumLongitude - HeatTileScaler.minimumLongitude;
		this._projectedMaximum = this.getProjectedValue(HeatTileScaler.maximumLatitude);
		this._projectedRange = this.getProjectedValue(HeatTileScaler.maximumLatitude) - this.getProjectedValue(HeatTileScaler.minimumLatitude);
	}
	private getProjectedValue(value: number): number {
		let valueR: number = value * (HeatTileScaler.degreeAsRadian);
		let valueSin: number = Math.sin(valueR);
		let projectedValue: number = 0.5 * Math.log((1 + valueSin) / (1 - valueSin));
		return projectedValue;
	}
	private static getVisibleBounds(window: Rect, viewport: Rect): ScalerVisibleBounds {
		let worldRect = new Rect(0, viewport.left / window.width, viewport.top / window.height, viewport.width / window.width, viewport.height / window.height);
		let visibleLeft = worldRect.left + worldRect.width * window.left;
		let visibleRight = worldRect.left + worldRect.width * window.right;
		let visibleTop = worldRect.top + worldRect.height * window.top;
		let visibleBottom = worldRect.top + worldRect.height * window.bottom;
		let visibleBounds = new ScalerVisibleBounds(visibleLeft, visibleTop, visibleRight, visibleBottom);
		return visibleBounds;
	}
	static getUnprojectedValue(value: number): number {
		value = Math.exp(2 * value);
		return Math.asin((value - 1) / (value + 1)) / HeatTileScaler.degreeAsRadian;
	}
	unscaleLatitude(value: number, window: Rect, viewport: Rect): number {
		let unscaledValue = (value - viewport.top) * window.width + window.top * viewport.height;
		unscaledValue = this.getProjectedValue(HeatTileScaler.maximumLatitude) - unscaledValue / (viewport.height / this._projectedRange);
		return HeatTileScaler.getUnprojectedValue(unscaledValue);
	}
	scaleLatitude(value: number, window: Rect, viewport: Rect): number {
		let scaledValue = viewport.top + this.getScaledValue(value, viewport.height);
		return (scaledValue - window.top * viewport.height) / window.width;
	}
	private getScaledValue(unscaledValue: number, viewportHeight: number): number {
		unscaledValue = unscaledValue > HeatTileScaler.minimumLatitude ? (unscaledValue < HeatTileScaler.maximumLatitude ? unscaledValue : HeatTileScaler.maximumLatitude) : HeatTileScaler.minimumLatitude;
		let projectedValue = this.getProjectedValue(unscaledValue);
		let scaledValue = (this._projectedMaximum - projectedValue) * viewportHeight / this._projectedRange;
		return (scaledValue);
	}
	unscaleLongitude(value: number, window: Rect, viewport: Rect): number {
		let unscaledValue: number = window.left + window.width * (value - viewport.left) / viewport.width;
		return HeatTileScaler.minimumLongitude + unscaledValue * (this._longitudeSpan);
	}
	scaleLongitude(value: number, window: Rect, viewport: Rect): number {
		let scaledValue: number = (value - HeatTileScaler.minimumLongitude) / (this._longitudeSpan);
		return viewport.left + viewport.width * (scaledValue - window.left) / window.width;
	}
	getMinimumVisibleLatitude(window: Rect, viewport: Rect): number {
		let visibleBounds = HeatTileScaler.getVisibleBounds(window, viewport);
		return this.unscaleLatitude(viewport.bottom, window, viewport);
	}
	getMaximumVisibleLatitude(window: Rect, viewport: Rect): number {
		let visibleBounds = HeatTileScaler.getVisibleBounds(window, viewport);
		return this.unscaleLatitude(viewport.top, window, viewport);
	}
	getMinimumVisibleLongitude(window: Rect, viewport: Rect): number {
		let visibleBounds = HeatTileScaler.getVisibleBounds(window, viewport);
		return this.unscaleLongitude(viewport.left, window, viewport);
	}
	getMaximumVisibleLongitude(window: Rect, viewport: Rect): number {
		let visibleBounds = HeatTileScaler.getVisibleBounds(window, viewport);
		return this.unscaleLongitude(viewport.right, window, viewport);
	}
	scaleLatitudes(visibleLatitudes: List$1<number>, window: Rect, viewport: Rect): void {
		let viewportHeight = viewport.height;
		let viewportTop = viewport.top;
		for (let i = 0; i < visibleLatitudes.count; i++) {
			let unscaledValue: number = visibleLatitudes._inner[i];
			unscaledValue = unscaledValue > HeatTileScaler.minimumLatitude ? (unscaledValue < HeatTileScaler.maximumLatitude ? unscaledValue : HeatTileScaler.maximumLatitude) : HeatTileScaler.minimumLatitude;
			let valueR: number = unscaledValue * (HeatTileScaler.degreeAsRadian);
			let valueSin: number = Math.sin(valueR);
			let projectedValue: number = 0.5 * Math.log((1 + valueSin) / (1 - valueSin));
			let scaledValue = (this._projectedMaximum - projectedValue) * viewportHeight / this._projectedRange;
			scaledValue = viewportTop + scaledValue;
			visibleLatitudes._inner[i] = (scaledValue - window.top * viewportHeight) / window.width;
		}
	}
	scaleLongitudes(visibleLongitudes: List$1<number>, window: Rect, viewport: Rect): void {
		let viewportLeft: number = viewport.left;
		let viewportWidth: number = viewport.width;
		let windowLeft: number = window.left;
		let windowWidth: number = window.width;
		for (let i = 0; i < visibleLongitudes.count; i++) {
			let scaledValue: number = (visibleLongitudes._inner[i] - HeatTileScaler.minimumLongitude) / (this._longitudeSpan);
			visibleLongitudes._inner[i] = viewport.left + viewport.width * (scaledValue - window.left) / window.width;
		}
	}
}


