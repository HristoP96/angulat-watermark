/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, BaseError, Point, Type, markType } from "igniteui-core/type";
import { ColorScale } from "./ColorScale";
import { Color } from "igniteui-core/Color";
import { truncate, isNaN_ } from "igniteui-core/number";
import { ColorUtil } from "igniteui-core/ColorUtil";

/**
 * @hidden 
 */
export class TriangleRasterizer extends Base {
	static $t: Type = markType(TriangleRasterizer, 'TriangleRasterizer');
	constructor(imageData: number[], colorScale: ColorScale, defaultMinimum: number, defaultMaximum: number, colorColumn: IList$1<number>, pixelWidth: number, pixelHeight: number) {
		super();
		if (imageData == null || colorScale == null || colorColumn == null) {
			throw new BaseError(0);
		}
		this.pixelData = imageData;
		this.colorScale = colorScale;
		this.colorColumn = colorColumn;
		this.pixelWidth = pixelWidth;
		this.pixelHeight = pixelHeight;
		this._defaultMinimum = defaultMinimum;
		this._defaultMaximum = defaultMaximum;
	}
	pixelData: number[] = null;
	private _pixelWidth: number = 0;
	private get pixelWidth(): number {
		return this._pixelWidth;
	}
	private set pixelWidth(value: number) {
		this._pixelWidth = value;
	}
	private _pixelHeight: number = 0;
	private get pixelHeight(): number {
		return this._pixelHeight;
	}
	private set pixelHeight(value: number) {
		this._pixelHeight = value;
	}
	private _defaultMinimum: number = 0;
	private get defaultMinimum(): number {
		return this._defaultMinimum;
	}
	private set defaultMinimum(value: number) {
		this._defaultMinimum = value;
	}
	private _defaultMaximum: number = 0;
	private get defaultMaximum(): number {
		return this._defaultMaximum;
	}
	private set defaultMaximum(value: number) {
		this._defaultMaximum = value;
	}
	private _colorScale: ColorScale = null;
	private get colorScale(): ColorScale {
		return this._colorScale;
	}
	private set colorScale(value: ColorScale) {
		this._colorScale = value;
	}
	private _colorColumn: IList$1<number> = null;
	private get colorColumn(): IList$1<number> {
		return this._colorColumn;
	}
	private set colorColumn(value: IList$1<number>) {
		this._colorColumn = value;
	}
	rasterizeTriangle(index: number, indexBuffer: number[], p0: Point, p1: Point, p2: Point, value0: number, value1: number, value2: number): void {
		let pixelWidth: number = this._pixelWidth;
		let pixelHeight: number = this._pixelHeight;
		let pTemp: Point;
		let valueTemp: number;
		if (p1.y > p2.y) {
			pTemp = p1;
			p1 = p2;
			p2 = pTemp;
			valueTemp = value1;
			value1 = value2;
			value2 = valueTemp;
		}
		if (p0.y > p2.y) {
			pTemp = p0;
			p0 = p2;
			p2 = pTemp;
			valueTemp = value0;
			value0 = value2;
			value2 = valueTemp;
		}
		if (p0.y > p1.y) {
			pTemp = p0;
			p0 = p1;
			p1 = pTemp;
			valueTemp = value0;
			value0 = value1;
			value1 = valueTemp;
		}
		let Y0: number = <number>truncate(Math.round(p0.y));
		let Y1: number = <number>truncate(Math.round(p1.y));
		let Y2: number = <number>truncate(Math.round(p2.y));
		if (Y2 == Y0) {
			return;
		}
		if (isNaN_(value0) || isNaN_(value1) || isNaN_(value2)) {
			return;
		}
		let clockwise: boolean = (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y) >= 0;
		let yStart1: number = Math.max(0, Y0);
		let yEnd1: number = Math.min(pixelHeight - 1, Y1);
		for (let y: number = yStart1; y < yEnd1; ++y) {
			let p01: number = (<number>(y - Y0)) / (<number>(Y1 - Y0));
			let x01: number = p0.x + p01 * (p1.x - p0.x);
			let v01: number = value0 + p01 * (value1 - value0);
			let p02: number = (<number>(y - Y0)) / (<number>(Y2 - Y0));
			let x02: number = p0.x + p02 * (p2.x - p0.x);
			let v02: number = value0 + p02 * (value2 - value0);
			if (clockwise) {
				this.rasterizeLine(index, indexBuffer, y, <number>truncate(Math.floor(x02)), <number>truncate(Math.ceil(x01)), v02, v01);
			} else {
				this.rasterizeLine(index, indexBuffer, y, <number>truncate(Math.floor(x01)), <number>truncate(Math.ceil(x02)), v01, v02);
			}
		}
		{
			let yStart2: number = Math.min(pixelHeight - 1, Math.max(0, Y1));
			let yEnd2: number = Math.min(pixelHeight - 1, Y2);
			let p12: number = 0;
			let x12: number = p1.x + p12 * (p2.x - p1.x);
			let v12: number = value1 + p12 * (value2 - value1);
			let y1: number = yStart2;
			let yRange02: number = <number>(Y2 - Y0);
			let p021: number = (<number>(y1 - Y0)) / yRange02;
			let x021: number = p0.x + p021 * (p2.x - p0.x);
			let v021: number = value0 + p021 * (value2 - value0);
			do {
				if (clockwise) {
					this.rasterizeLine(index, indexBuffer, y1, <number>truncate(Math.floor(x021)), <number>truncate(Math.ceil(x12)), v021, v12);
				} else {
					this.rasterizeLine(index, indexBuffer, y1, <number>truncate(Math.floor(x12)), <number>truncate(Math.ceil(x021)), v12, v021);
				}
				++y1;
				p12 = (<number>(y1 - Y1)) / (<number>(Y2 - Y1));
				x12 = p1.x + p12 * (p2.x - p1.x);
				v12 = value1 + p12 * (value2 - value1);
				p021 = (<number>(y1 - Y0)) / yRange02;
				x021 = p0.x + p021 * (p2.x - p0.x);
				v021 = value0 + p021 * (value2 - value0);
			} while (y1 < yEnd2);
		}
	}
	private rasterizeLine(index: number, indexBuffer: number[], y: number, x0: number, x1: number, value0: number, value1: number): void {
		let pixelWidth: number = this._pixelWidth;
		let xStart: number = x0 > 0 ? x0 : 0;
		let xEnd: number = x1 < pixelWidth - 1 ? x1 : pixelWidth - 1;
		let linePosition: number = y * pixelWidth * 4 + (xStart * 4);
		let valueRange: number = value1 - value0;
		let xRange: number = 1 / (x1 - x0);
		let colorColumn: IList$1<number> = this._colorColumn;
		let defaultMinimum: number = this._defaultMinimum;
		let defaultMaximum: number = this._defaultMaximum;
		let indexPosition: number = y * pixelWidth;
		for (let xx: number = xStart; xx <= xEnd; xx++) {
			let value: number = value0 + valueRange * (xx - x0) * xRange;
			let color_: Color = this._colorScale.getColor(value, defaultMinimum, defaultMaximum, colorColumn);
			this.pixelData[linePosition] = <number>((<any>color_)._r);
			this.pixelData[linePosition + 1] = <number>((<any>color_)._g);
			this.pixelData[linePosition + 2] = <number>((<any>color_)._b);
			this.pixelData[linePosition + 3] = <number>((<any>color_)._a);
			indexBuffer[indexPosition + xx] = index + 1;
			linePosition += 4;
		}
	}
	postRasterize(): void {
	}
}


