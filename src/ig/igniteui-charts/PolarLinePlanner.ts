/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, ICollection$1, ICollection$1_$type, Number_$type, Point_$type, fromEnum, Type, markType, getEnumerator, PointUtil } from "igniteui-core/type";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { Rect } from "igniteui-core/Rect";
import { Clipper } from "igniteui-core/Clipper";
import { AngleRadiusPair } from "./AngleRadiusPair";
import { List$1 } from "igniteui-core/List$1";
import { SpiralFlattener } from "igniteui-core/SpiralFlattener";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class PolarLinePlanner extends Base {
	static $t: Type = markType(PolarLinePlanner, 'PolarLinePlanner');
	private _useCartesianInterpolation: boolean = false;
	get useCartesianInterpolation(): boolean {
		return this._useCartesianInterpolation;
	}
	set useCartesianInterpolation(value: boolean) {
		this._useCartesianInterpolation = value;
	}
	private _unknownValuePlotting: UnknownValuePlotting = <UnknownValuePlotting>0;
	get unknownValuePlotting(): UnknownValuePlotting {
		return this._unknownValuePlotting;
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this._unknownValuePlotting = value;
	}
	private _angleProvider: (arg1: number) => number = null;
	get angleProvider(): (arg1: number) => number {
		return this._angleProvider;
	}
	set angleProvider(value: (arg1: number) => number) {
		this._angleProvider = value;
	}
	private _radiusProvider: (arg1: number) => number = null;
	get radiusProvider(): (arg1: number) => number {
		return this._radiusProvider;
	}
	set radiusProvider(value: (arg1: number) => number) {
		this._radiusProvider = value;
	}
	private _transformedXProvider: (arg1: number) => number = null;
	get transformedXProvider(): (arg1: number) => number {
		return this._transformedXProvider;
	}
	set transformedXProvider(value: (arg1: number) => number) {
		this._transformedXProvider = value;
	}
	private _transformedYProvider: (arg1: number) => number = null;
	get transformedYProvider(): (arg1: number) => number {
		return this._transformedYProvider;
	}
	set transformedYProvider(value: (arg1: number) => number) {
		this._transformedYProvider = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _count: number = 0;
	get count(): number {
		return this._count;
	}
	set count(value: number) {
		this._count = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _window: Rect = null;
	get window(): Rect {
		return this._window;
	}
	set window(value: Rect) {
		this._window = value;
	}
	private _clipper: Clipper = null;
	get clipper(): Clipper {
		return this._clipper;
	}
	set clipper(value: Clipper) {
		this._clipper = value;
	}
	private _clippingDisabled: boolean = false;
	get clippingDisabled(): boolean {
		return this._clippingDisabled;
	}
	set clippingDisabled(value: boolean) {
		this._clippingDisabled = value;
	}
	private _isClosed: boolean = false;
	get isClosed(): boolean {
		return this._isClosed;
	}
	set isClosed(value: boolean) {
		this._isClosed = value;
	}
	private _target: IList$1<Point> = null;
	private get target(): IList$1<Point> {
		return this._target;
	}
	private set target(value: IList$1<Point>) {
		this._target = value;
	}
	protected valid(): boolean {
		if (this.angleProvider == null || this.radiusProvider == null || this.transformedXProvider == null || this.transformedYProvider == null || Rect.l_op_Equality(this.viewport, Rect.empty) || Rect.l_op_Equality(this.window, Rect.empty)) {
			return false;
		}
		return true;
	}
	protected measure(X: (arg1: number) => number, Y: (arg1: number) => number, a: number, b: number): number {
		let x: number = X(b) - X(a);
		let y: number = Y(b) - Y(a);
		return x * x + y * y;
	}
	reduce(viableIndices: IEnumerable$1<number>): IList$1<AngleRadiusPair> {
		let list: List$1<AngleRadiusPair> = new List$1<AngleRadiusPair>((<any>AngleRadiusPair).$type, 0);
		let measure: number = this.resolution * this.resolution;
		let indices: IEnumerable$1<number>;
		if (viableIndices != null) {
			indices = viableIndices;
		} else {
			let indicesList = new List$1<number>(Number_$type, 0);
			for (let j = 0; j < this.count; j++) {
				indicesList.add(j);
			}
			indices = indicesList;
		}
		let indicesEnumerator: IEnumerator$1<number> = getEnumerator(indices);
		let notDone: boolean = true;
		notDone = indicesEnumerator.moveNext();
		let i: number = 0;
		if (notDone) {
			i = indicesEnumerator.current;
		}
		while (notDone) {
			let j1: number = i;
			notDone = indicesEnumerator.moveNext();
			i = indicesEnumerator.current;
			while (notDone && this.measure(this.transformedXProvider, this.transformedYProvider, j1, i) < measure) {
				notDone = indicesEnumerator.moveNext();
				i = indicesEnumerator.current;
			}
			let pair: AngleRadiusPair = new AngleRadiusPair();
			pair.index = j1;
			if (!this.useCartesianInterpolation) {
				pair.angle = this.angleProvider(j1);
				pair.radius = this.radiusProvider(j1);
			}
			list.add(pair);
		}
		return list;
	}
	private prepareCartesian(viableIndices: IEnumerable$1<number>): void {
		for (let pair of fromEnum<AngleRadiusPair>(this.reduce(viableIndices))) {
			if (isNaN_(pair.angle) || isInfinity(pair.angle) || isNaN_(pair.radius) || isInfinity(pair.radius)) {
				this.addPoint(<Point>{ $type: Point_$type, x: NaN, y: NaN });
				continue;
			}
			this.addPoint(<Point>{ $type: Point_$type, x: this.transformedXProvider(pair.index), y: this.transformedYProvider(pair.index) });
		}
	}
	private getErrorTolerance(): number {
		return Math.pow(this.resolution / (Math.max(this.viewport.width / this.window.width, this.viewport.height / this.window.height)), 2);
	}
	private addFromPolar(angle: number, radius: number): void {
		let x: number = 0.5 + radius * Math.cos(angle);
		let y: number = 0.5 + radius * Math.sin(angle);
		x = this._viewport.left + this._viewport.width * (x - this._window.left) / this._window.width;
		y = this._viewport.top + this._viewport.height * (y - this._window.top) / this._window.height;
		this.addPoint(<Point>{ $type: Point_$type, x: x, y: y });
	}
	private preparePolar(viableIndices: IEnumerable$1<number>): void {
		let error: number = this.getErrorTolerance();
		let pairs: IList$1<AngleRadiusPair> = this.reduce(viableIndices);
		let a0: number = pairs.item(0).angle;
		let r0: number = pairs.item(0).radius;
		let i0: number = pairs.item(0).index;
		for (let i: number = 1; i < pairs.count; i++) {
			let ai: number = pairs.item(i).angle;
			let ri: number = pairs.item(i).radius;
			let ii: number = pairs.item(i).index;
			if (isNaN_(ai) || isInfinity(ai) || isNaN_(ri) || isInfinity(ri)) {
				this.addPoint(<Point>{ $type: Point_$type, x: NaN, y: NaN });
				if (this.unknownValuePlotting != UnknownValuePlotting.LinearInterpolate) {
					i++;
					if (i < pairs.count) {
						a0 = pairs.item(i).angle;
						r0 = pairs.item(i).radius;
					}
				}
				continue;
			}
			this.createSpiralPoints(ai, ri, a0, r0, i, error, i0 > ii);
			a0 = ai;
			r0 = ri;
			i0 = ii;
		}
	}
	private createSpiralPoints(ai: number, ri: number, a0: number, r0: number, index: number, error: number, wrapAround: boolean): void {
		let swapped: boolean = false;
		if ((ai < a0 && !wrapAround) || (ai > a0 && wrapAround)) {
			swapped = true;
			let swap: number = ai;
			ai = a0;
			a0 = swap;
			swap = ri;
			ri = r0;
			r0 = swap;
		}
		let ps: List$1<number> = SpiralFlattener.spiral(a0, r0, ai, ri, error);
		if (swapped) {
			let reverseList: List$1<number> = new List$1<number>(Number_$type, 2, ps.count);
			for (let j = ps.count - 1; j >= 0; j--) {
				reverseList.add(ps._inner[j]);
			}
			ps = reverseList;
		}
		for (let i = 0; i < ps.count; i++) {
			let p: number = ps._inner[i];
			let a: number = a0 + p * (ai - a0);
			let r: number = r0 + p * (ri - r0);
			this.addFromPolar(a, r);
		}
	}
	private ensureClipper(target: IList$1<Point>): void {
		let top: number = this.viewport.top - 10;
		let bottom: number = this.viewport.bottom + 10;
		let left: number = this.viewport.left - 10;
		let right: number = this.viewport.right + 10;
		if (this.clipper == null) {
			this.clipper = ((() => {
				let $ret = new Clipper(1, left, bottom, right, top, this.isClosed);
				$ret.target = target;
				return $ret;
			})());
		}
	}
	private isPlottable(point: Point): boolean {
		return !isNaN_(point.x) && !isNaN_(point.y) && !isInfinity(point.x) && !isInfinity(point.y);
	}
	private addPoint(point: Point): void {
		if (this.unknownValuePlotting == UnknownValuePlotting.LinearInterpolate && !this.isPlottable(point)) {
			return;
		}
		if (this.clippingDisabled) {
			this.target.add(point);
		} else {
			this.clipper.add(point);
		}
	}
	prepareLine(viableIndices: IEnumerable$1<number>): void {
		this.prepareLine1(null, null);
	}
	prepareLine1(target: IList$1<Point>, viableIndices: IEnumerable$1<number>): void {
		this.target = target;
		if (!this.valid()) {
			return;
		}
		if (this.count > 1) {
			this.ensureClipper(target);
			if (this.useCartesianInterpolation) {
				this.prepareCartesian(viableIndices);
			} else {
				this.preparePolar(viableIndices);
			}
			this.clipper.target = null;
		}
	}
}


