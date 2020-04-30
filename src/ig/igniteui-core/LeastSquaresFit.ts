/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Numeric } from "./Numeric";
import { Base, Number_$type, Type, markType } from "./type";
import { Random } from "./Random";
import { List$1 } from "./List$1";
import { isNaN_, isInfinity } from "./number";

/**
 * @hidden 
 */
export class LeastSquaresFit extends Numeric {
	static $t: Type = markType(LeastSquaresFit, 'LeastSquaresFit', (<any>Numeric).$type);
	static test(): boolean {
		return LeastSquaresFit.linearTest() && LeastSquaresFit.logarithmicTest() && LeastSquaresFit.exponentialTest() && LeastSquaresFit.powerLawTest() && LeastSquaresFit.quadraticTest() && LeastSquaresFit.cubicTest() && LeastSquaresFit.quarticTest() && LeastSquaresFit.quinticTest();
	}
	constructor() {
		super();
	}
	static linearFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		let s0: number = 0;
		let s1: number = 0;
		let s2: number = 0;
		let s3: number = 0;
		let N: number = 0;
		for (let i: number = 0; i < n; ++i) {
			let xi: number = x(i);
			let yi: number = y(i);
			if (!isNaN_(xi) && !isNaN_(yi)) {
				s0 += yi;
				s1 += xi * xi;
				s2 += xi;
				s3 += xi * yi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		let A: number = (s0 * s1 - s2 * s3) / (N * s1 - s2 * s2);
		let B: number = (N * s3 - s2 * s0) / (N * s1 - s2 * s2);
		return <number[]>[ A, B ];
	}
	static linearEvaluate(a: number[], x: number): number {
		if (a.length != 2) {
			return NaN;
		}
		return a[0] + a[1] * x;
	}
	static linearTest(): boolean {
		let random: Random = new Random(0);
		let coeffs: number[] = <number[]>new Array(2);
		for (let i: number = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		let x: List$1<number> = new List$1<number>(Number_$type, 0);
		let y: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1: number = -100; i1 < 100; ++i1) {
			let X: number = i1;
			let Y: number = LeastSquaresFit.linearEvaluate(coeffs, X);
			if (!isNaN_(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		let fit: number[] = LeastSquaresFit.linearFit(x.count, (i: number) => x._inner[i], (i: number) => y._inner[i]);
		for (let i2: number = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
			}
		}
		return true;
	}
	static logarithmicFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		let s0: number = 0;
		let s1: number = 0;
		let s2: number = 0;
		let s3: number = 0;
		let N: number = 0;
		for (let i: number = 0; i < n; ++i) {
			let xi: number = x(i);
			let yi: number = y(i);
			if (!isNaN_(xi) && !isNaN_(yi) && xi > 0) {
				let lnxi: number = Math.log(xi);
				s0 += yi * lnxi;
				s1 += yi;
				s2 += lnxi;
				s3 += lnxi * lnxi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		let B: number = (N * s0 - s1 * s2) / (N * s3 - s2 * s2);
		let A: number = (s1 - B * s2) / N;
		return <number[]>[ A, B ];
	}
	static logarithmicEvaluate(a: number[], x: number): number {
		if (a.length != 2 || x < 0 || isInfinity(x) || isNaN_(x)) {
			return NaN;
		}
		return a[0] + a[1] * Math.log(x);
	}
	static logarithmicTest(): boolean {
		let random: Random = new Random(0);
		let coeffs: number[] = <number[]>new Array(2);
		for (let i: number = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		let x: List$1<number> = new List$1<number>(Number_$type, 0);
		let y: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1: number = 1; i1 < 100; ++i1) {
			let X: number = i1;
			let Y: number = LeastSquaresFit.logarithmicEvaluate(coeffs, X);
			if (!isNaN_(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		let fit: number[] = LeastSquaresFit.logarithmicFit(x.count, (i: number) => x._inner[i], (i: number) => y._inner[i]);
		for (let i2: number = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
			}
		}
		return true;
	}
	static exponentialFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		let s0: number = 0;
		let s1: number = 0;
		let s2: number = 0;
		let s3: number = 0;
		let s4: number = 0;
		let N: number = 0;
		for (let i: number = 0; i < n; ++i) {
			let xi: number = x(i);
			let yi: number = y(i);
			if (!isNaN_(xi) && !isNaN_(yi) && yi > 0) {
				let lnyi: number = Math.log(yi);
				s0 += xi * xi * yi;
				s1 += yi * lnyi;
				s2 += xi * yi;
				s3 += xi * yi * lnyi;
				s4 += yi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		let a: number = (s0 * s1 - s2 * s3) / (s4 * s0 - s2 * s2);
		let B: number = (s4 * s3 - s2 * s1) / (s4 * s0 - s2 * s2);
		return <number[]>[ Math.exp(a), B ];
	}
	static exponentialEvaluate(a: number[], x: number): number {
		if (a.length != 2 || x < 0 || isInfinity(x) || isNaN_(x)) {
			return NaN;
		}
		return a[0] * Math.exp(a[1] * x);
	}
	static exponentialTest(): boolean {
		let random: Random = new Random(0);
		let coeffs: number[] = <number[]>new Array(2);
		for (let i: number = 0; i < coeffs.length; ++i) {
			coeffs[i] = 2 * random.nextDouble();
		}
		let x: List$1<number> = new List$1<number>(Number_$type, 0);
		let y: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1: number = 1; i1 < 100; ++i1) {
			let X: number = i1;
			let Y: number = LeastSquaresFit.exponentialEvaluate(coeffs, X);
			if (!isNaN_(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		let fit: number[] = LeastSquaresFit.exponentialFit(x.count, (i: number) => x._inner[i], (i: number) => y._inner[i]);
		for (let i2: number = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
	static powerLawFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		let s0: number = 0;
		let s1: number = 0;
		let s2: number = 0;
		let s3: number = 0;
		let N: number = 0;
		for (let i: number = 0; i < n; ++i) {
			let xi: number = x(i);
			let yi: number = y(i);
			if (!isNaN_(xi) && !isNaN_(yi) && xi > 0 && yi > 0) {
				let lnxi: number = Math.log(x(i));
				let lnyi: number = Math.log(y(i));
				s0 += lnxi * lnyi;
				s1 += lnxi;
				s2 += lnyi;
				s3 += lnxi * lnxi;
				++N;
			}
		}
		if (N < 2) {
			return null;
		}
		let B: number = (N * s0 - s1 * s2) / (N * s3 - s1 * s1);
		let A: number = Math.exp((s2 - B * s1) / N);
		return <number[]>[ A, B ];
	}
	static powerLawEvaluate(a: number[], x: number): number {
		if (a.length != 2 || x < 0 || isInfinity(x) || isNaN_(x)) {
			return NaN;
		}
		return a[0] * Math.pow(x, a[1]);
	}
	static powerLawTest(): boolean {
		let random: Random = new Random(0);
		let coeffs: number[] = <number[]>new Array(2);
		for (let i: number = 0; i < coeffs.length; ++i) {
			coeffs[i] = 10 * random.nextDouble();
		}
		let x: List$1<number> = new List$1<number>(Number_$type, 0);
		let y: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1: number = -100; i1 < 100; ++i1) {
			x.add(i1);
			y.add(LeastSquaresFit.powerLawEvaluate(coeffs, i1));
		}
		let fit: number[] = LeastSquaresFit.powerLawFit(x.count, (i: number) => x._inner[i], (i: number) => y._inner[i]);
		for (let i2: number = 0; i2 < coeffs.length; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
	static quadraticFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		return LeastSquaresFit.polynomialFit(n, 2, x, y);
	}
	static quadraticEvaluate(a: number[], x: number): number {
		return LeastSquaresFit.polynomialEvaluate(a, x);
	}
	static quadraticTest(): boolean {
		return LeastSquaresFit.polynomialTest(2);
	}
	static cubicFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		return LeastSquaresFit.polynomialFit(n, 3, x, y);
	}
	static cubicEvaluate(a: number[], x: number): number {
		return LeastSquaresFit.polynomialEvaluate(a, x);
	}
	static cubicTest(): boolean {
		return LeastSquaresFit.polynomialTest(3);
	}
	static quarticFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		return LeastSquaresFit.polynomialFit(n, 4, x, y);
	}
	static quarticEvaluate(a: number[], x: number): number {
		return LeastSquaresFit.polynomialEvaluate(a, x);
	}
	static quarticTest(): boolean {
		return LeastSquaresFit.polynomialTest(4);
	}
	static quinticFit(n: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		return LeastSquaresFit.polynomialFit(n, 5, x, y);
	}
	static quinticEvaluate(a: number[], x: number): number {
		return LeastSquaresFit.polynomialEvaluate(a, x);
	}
	static quinticTest(): boolean {
		return LeastSquaresFit.polynomialTest(5);
	}
	static polynomialFit(n: number, k: number, x: (arg1: number) => number, y: (arg1: number) => number): number[] {
		let ps: number[] = <number[]>new Array(1 + 2 * k);
		for (let ind1: number = 0; ind1 < ps.length; ind1++) {
			ps[ind1] = 0;
		}
		let A: number[][] = ((() => {
			let $firstRank: number;
			let $ret = <number[][]>new Array($firstRank = k + 1);
			let $currRet = $ret;
			for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
				$currRet[$rankInit] = <number[]>new Array(k + 1);
			}
			return $ret;
		})());
		let B: number[] = <number[]>new Array(k + 1);
		for (let ind2: number = 0; ind2 < B.length; ind2++) {
			B[ind2] = 0;
		}
		let N: number = 0;
		for (let i: number = 0; i < n; ++i) {
			let s: number = 1;
			let xi: number = x(i);
			if (!isNaN_(xi) && !isNaN_(y(i))) {
				for (let p: number = 0; p < ps.length; ++p) {
					ps[p] += s;
					s *= xi;
					++N;
				}
			}
		}
		if (N < k) {
			return null;
		}
		for (let i1: number = 0; i1 <= k; ++i1) {
			for (let j: number = 0; j <= k; ++j) {
				A[i1][j] = ps[i1 + j];
			}
		}
		for (let i2: number = 0; i2 < n; ++i2) {
			let xi1: number = x(i2);
			let yi: number = y(i2);
			if (!isNaN_(xi1) && !isNaN_(yi)) {
				for (let j1: number = 0; j1 <= k; ++j1) {
					B[j1] += (Math.pow(xi1, j1) * yi);
				}
			}
		}
		return Numeric.solve(A, B) ? B : null;
	}
	static polynomialEvaluate(a: number[], x: number): number {
		if (a.length < 1 || isInfinity(x) || isNaN_(x)) {
			return NaN;
		}
		let y: number = 0;
		for (let i: number = 0; i < a.length; ++i) {
			y += a[i] * Math.pow(x, i);
		}
		return y;
	}
	static polynomialTest(k: number): boolean {
		let random: Random = new Random(0);
		let coeffs: number[] = <number[]>new Array(k + 1);
		for (let i: number = 0; i < coeffs.length; ++i) {
			coeffs[i] = 2 * random.nextDouble();
		}
		let x: List$1<number> = new List$1<number>(Number_$type, 0);
		let y: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1: number = -100; i1 < 100; ++i1) {
			let X: number = i1;
			let Y: number = LeastSquaresFit.polynomialEvaluate(coeffs, X);
			if (!isNaN_(Y)) {
				x.add(X);
				y.add(Y);
			}
		}
		let fit: number[] = LeastSquaresFit.polynomialFit(x.count, k, (i: number) => x._inner[i], (i: number) => y._inner[i]);
		for (let i2: number = 0; i2 < k; ++i2) {
			if (Math.abs(coeffs[i2] - fit[i2]) > 0.0001) {
				return false;
			}
		}
		return true;
	}
}


