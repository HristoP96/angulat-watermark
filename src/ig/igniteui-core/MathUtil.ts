/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class MathUtil extends Base {
	static $t: Type = markType(MathUtil, 'MathUtil');
	static readonly pHI: number = (1 + Math.sqrt(5)) / 2;
	static readonly sQRT2: number = Math.sqrt(2);
	static asinh(angle: number): number {
		return Math.log(angle + Math.sqrt(angle * angle + 1));
	}
	static hypot(x: number, y: number): number {
		return Math.sqrt(x * x + y * y);
	}
	static sqr(x: number): number {
		return x * x;
	}
	static clamp(value: number, minimum: number, maximum: number): number {
		return Math.min(maximum, Math.max(minimum, value));
	}
	static radians(degrees: number): number {
		return Math.PI * degrees / 180;
	}
	static readonly degreeAsRadian: number = Math.PI / 180;
	static degrees(radians: number): number {
		return 180 * radians / Math.PI;
	}
	static min3(v1: number, v2: number, v3: number): number {
		return Math.min(v1, Math.min(v2, v3));
	}
	static max3(v1: number, v2: number, v3: number): number {
		return Math.max(v1, Math.max(v2, v3));
	}
	static min(...a: number[]): number {
		let min: number = a[0];
		for (let i: number = 1; i < a.length; ++i) {
			min = Math.min(min, a[i]);
		}
		return min;
	}
	static max(...a: number[]): number {
		let max: number = a[0];
		for (let i: number = 1; i < a.length; ++i) {
			max = Math.max(max, a[i]);
		}
		return max;
	}
}


