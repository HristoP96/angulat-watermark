/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Number_$type, Point_$type, Type, markType, IEnumerable$1, PointUtil } from "./type";
import { List$1 } from "./List$1";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { LineSegment } from "./LineSegment";
import { MathUtil } from "./MathUtil";
import { PathSegment } from "./PathSegment";
import { arrayGetLength } from "./array";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class Numeric extends Base {
	static $t: Type = markType(Numeric, 'Numeric');
	constructor() {
		super();
	}
	static solve1(a: List$1<number>, b: List$1<number>, c: List$1<number>, r: List$1<number>, u: List$1<number>): boolean {
		let j: number;
		let n: number = a.count;
		let gam: number[] = <number[]>new Array(n);
		if (b._inner[0] == 0) {
			return false;
		}
		let bet: number = b._inner[0];
		u._inner[0] = r._inner[0] / (bet);
		for (j = 1; j < n; j++) {
			gam[j] = c._inner[j - 1] / bet;
			bet = b._inner[j] - a._inner[j] * gam[j];
			if (bet == 0) {
				return false;
			}
			u._inner[j] = (r._inner[j] - a._inner[j] * u._inner[j - 1]) / bet;
		}
		for (j = (n - 2); j >= 0; j--) {
			u._inner[j] -= gam[j + 1] * u._inner[j + 1];
		}
		return true;
	}
	static solve(a: number[][], b: number[]): boolean {
		let n: number = arrayGetLength(a, 0);
		let indxc: number[] = <number[]>new Array(n);
		let indxr: number[] = <number[]>new Array(n);
		let ipiv: number[] = <number[]>new Array(n);
		for (let i: number = 0; i < n; i++) {
			ipiv[i] = 0;
		}
		for (let i1: number = 0; i1 < n; i1++) {
			let big: number = 0;
			let irow: number = 0;
			let icol: number = 0;
			for (let j: number = 0; j < n; j++) {
				if (ipiv[j] != 1) {
					for (let k: number = 0; k < n; k++) {
						if (ipiv[k] == 0) {
							if (Math.abs(a[j][k]) >= big) {
								big = Math.abs(a[j][k]);
								irow = j;
								icol = k;
							}
						}
					}
				}
			}
			++(ipiv[icol]);
			if (irow != icol) {
				for (let j1: number = 0; j1 < n; j1++) {
					let t: number = a[irow][j1];
					a[irow][j1] = a[icol][j1];
					a[icol][j1] = t;
				}
				{
					let t1: number = b[irow];
					b[irow] = b[icol];
					b[icol] = t1;
				}
			}
			indxr[i1] = irow;
			indxc[i1] = icol;
			if (a[icol][icol] == 0) {
				return false;
			}
			let pivinv: number = 1 / a[icol][icol];
			a[icol][icol] = 1;
			for (let j2: number = 0; j2 < n; j2++) {
				a[icol][j2] *= pivinv;
			}
			b[icol] *= pivinv;
			for (let j3: number = 0; j3 < n; j3++) {
				if (j3 != icol) {
					let dum: number = a[j3][icol];
					a[j3][icol] = 0;
					for (let l: number = 0; l < n; l++) {
						a[j3][l] -= a[icol][l] * dum;
					}
					b[j3] -= b[icol] * dum;
				}
			}
		}
		for (let i2: number = n - 1; i2 >= 0; i2--) {
			if (indxr[i2] != indxc[i2]) {
				for (let j4: number = 0; j4 < n; j4++) {
					let t2: number = a[j4][indxr[i2]];
					a[j4][indxr[i2]] = a[j4][indxc[i2]];
					a[j4][indxc[i2]] = t2;
				}
			}
		}
		return true;
	}
	static safeCubicSplineFit(count: number, x: (arg1: number) => number, y: (arg1: number) => number, yp1: number, ypn: number): number[] {
		let ret: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i: number = 0; i < count; ++i) {
			while (i < count && (isNaN_(x(i)) || isNaN_(y(i)))) {
				ret.add(NaN);
				++i;
			}
			let j: number = i;
			while (i < count && !isNaN_(x(i)) && !isNaN_(y(i))) {
				++i;
			}
			--i;
			if (i - j > 0) {
				ret.addRange(<IEnumerable$1<number>><any><any>Numeric.cubicSplineFit1(j, i - j + 1, x, y, yp1, ypn));
			} else {
				for (; j <= i; ++j) {
					ret.add(NaN);
				}
			}
		}
		return ret.toArray();
	}
	static cubicSplineFit1(start: number, count: number, x: (arg1: number) => number, y: (arg1: number) => number, yp1: number, ypn: number): number[] {
		return Numeric.cubicSplineFit(count, (i: number) => x(i + start), (i: number) => y(i + start), yp1, ypn);
	}
	static cubicSplineFit(count: number, x: (arg1: number) => number, y: (arg1: number) => number, yp1: number, ypn: number): number[] {
		let u: number[] = <number[]>new Array(count - 1);
		let y2: number[] = <number[]>new Array(count);
		y2[0] = isNaN_(yp1) ? 0 : -0.5;
		u[0] = isNaN_(yp1) ? 0 : (3 / (x(1) - x(0))) * ((y(1) - y(0)) / (x(1) - x(0)) - yp1);
		for (let i: number = 1; i < count - 1; i++) {
			let sig: number = (x(i) - x(i - 1)) / (x(i + 1) - x(i - 1));
			let p: number = sig * y2[i - 1] + 2;
			y2[i] = (sig - 1) / p;
			u[i] = (y(i + 1) - y(i)) / (x(i + 1) - x(i)) - (y(i) - y(i - 1)) / (x(i) - x(i - 1));
			u[i] = (6 * u[i] / (x(i + 1) - x(i - 1)) - sig * u[i - 1]) / p;
		}
		let qn: number = isNaN_(ypn) ? 0 : 0.5;
		let un: number = isNaN_(ypn) ? 0 : (3 / (x(count - 1) - x(count - 2))) * (ypn - (y(count - 1) - y(count - 2)) / (x(count - 1) - x(count - 2)));
		y2[count - 1] = (un - qn * u[count - 2]) / (qn * y2[count - 2] + 1);
		for (let i1: number = count - 2; i1 >= 0; i1--) {
			y2[i1] = y2[i1] * y2[i1 + 1] + u[i1];
		}
		return y2;
	}
	cubicSplineEvaluate(x: number, x1: number, y1: number, x2: number, y2: number, u1: number, u2: number): number {
		let h: number = x2 - x1;
		let a: number = (x2 - x) / h;
		let b: number = (x - x1) / h;
		return a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
	}
	static spline2D1(count: number, x: (arg1: number) => number, y: (arg1: number) => number, stiffness: number): PathFigureCollection {
		let result: PathFigureCollection = new PathFigureCollection();
		let currentSegmentStart: number = 0;
		let currentSegmentEnd: number = -1;
		let valueX: number = NaN;
		let valueY: number = NaN;
		for (let i: number = 0; i < count; i++) {
			valueX = x(i);
			valueY = y(i);
			if (isNaN_(valueX) || isNaN_(valueY)) {
				currentSegmentEnd = i - 1;
				if (currentSegmentEnd - currentSegmentStart > 0) {
					result.add(Numeric.spline2D(currentSegmentStart, currentSegmentEnd, x, y, stiffness));
				}
				currentSegmentStart = i + 1;
			}
		}
		if (!isNaN_(valueX) && !isNaN_(valueY)) {
			currentSegmentEnd = count - 1;
		}
		if (currentSegmentEnd - currentSegmentStart > 0) {
			result.add(Numeric.spline2D(currentSegmentStart, currentSegmentEnd, x, y, stiffness));
		}
		return result;
	}
	static spline2D(startIndex: number, endIndex: number, x: (arg1: number) => number, y: (arg1: number) => number, stiffness: number): PathFigure {
		stiffness = 0.5 * MathUtil.clamp(isNaN_(stiffness) ? 0.5 : stiffness, 0, 1);
		let pathFigure: PathFigure = new PathFigure();
		let count: number = endIndex - startIndex + 1;
		if (count < 2) {
			return pathFigure;
		}
		if (count == 2) {
			pathFigure._startPoint = <Point>{ $type: Point_$type, x: x(startIndex), y: y(startIndex) };
			let newSeg = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: x(startIndex + 1), y: y(startIndex + 1) };
				return $ret;
			})());
			pathFigure._segments.add(newSeg);
			return pathFigure;
		}
		let Segment: PolyBezierSegment = new PolyBezierSegment();
		let pix: number = x(startIndex);
		let piy: number = y(startIndex);
		let pixnext: number = x(startIndex + 1);
		let piynext: number = y(startIndex + 1);
		while (pixnext == pix && piynext == piy && startIndex + 1 <= endIndex) {
			startIndex++;
			pixnext = x(startIndex + 1);
			piynext = y(startIndex + 1);
		}
		let tix: number = pixnext - pix;
		let tiy: number = piynext - piy;
		let li: number = Math.sqrt(tix * tix + tiy * tiy);
		for (let j: number = startIndex + 1; j < endIndex; ++j) {
			let pjx: number = x(j);
			let pjy: number = y(j);
			if (pjx == pix && pjy == piy) {
				continue;
			}
			let tjx: number = x(j + 1) - x(j - 1);
			let tjy: number = y(j + 1) - y(j - 1);
			let lj: number = tjx * tjx + tjy * tjy;
			if (lj < 0.01) {
				tjx = -(y(j + 1) - y(j));
				tjy = x(j + 1) - x(j);
				lj = tjx * tjx + tjy * tjy;
			}
			lj = Math.sqrt(lj);
			let d: number = stiffness * Math.sqrt((pjx - pix) * (pjx - pix) + (pjy - piy) * (pjy - piy));
			if (lj > 0.01) {
				Segment.points.add(<Point>{ $type: Point_$type, x: pix + tix * d / li, y: piy + tiy * d / li });
				Segment.points.add(<Point>{ $type: Point_$type, x: pjx - tjx * d / lj, y: pjy - tjy * d / lj });
				Segment.points.add(<Point>{ $type: Point_$type, x: pjx, y: pjy });
				pix = pjx;
				piy = pjy;
				tix = tjx;
				tiy = tjy;
				li = lj;
			}
		}
		{
			let j1: number = endIndex;
			let pjx1: number = x(j1);
			let pjy1: number = y(j1);
			if (!(pjx1 == pix && pjy1 == piy)) {
				let tjx1: number = x(j1) - x(j1 - 1);
				let tjy1: number = y(j1) - y(j1 - 1);
				let lj1: number = tjx1 * tjx1 + tjy1 * tjy1;
				let d1: number = stiffness * Math.sqrt((pjx1 - pix) * (pjx1 - pix) + (pjy1 - piy) * (pjy1 - piy));
				Segment.points.add(<Point>{ $type: Point_$type, x: pix + tix * d1 / li, y: piy + tiy * d1 / li });
				Segment.points.add(<Point>{ $type: Point_$type, x: pjx1 - tjx1 * d1 / lj1, y: pjy1 - tjy1 * d1 / lj1 });
				Segment.points.add(<Point>{ $type: Point_$type, x: pjx1, y: pjy1 });
			}
		}
		pathFigure._startPoint = <Point>{ $type: Point_$type, x: x(startIndex), y: y(startIndex) };
		pathFigure._segments.add(Segment);
		return pathFigure;
	}
}


