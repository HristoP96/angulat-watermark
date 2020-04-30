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
export class EasingFunctions extends Base {
	static $t: Type = markType(EasingFunctions, 'EasingFunctions');
	private static cubic(p: number): number {
		return p * p * p;
	}
	private static exponential(p: number): number {
		return (Math.exp(2 * p) - 1) / (Math.exp(2) - 1);
	}
	private static circle(p: number): number {
		return 1 - Math.sqrt(1 - p * p);
	}
	private static doIn(t: number, f: (arg1: number) => number): number {
		let fastTime = t * 2;
		return 0.5 * f(fastTime);
	}
	private static doOut(t: number, f: (arg1: number) => number): number {
		let fastTime = (1 - t) * 2;
		let y = 1 - f(fastTime);
		return 0.5 * y + 0.5;
	}
	static cubicEase(t: number): number {
		if (t < 0.5) {
			let fastTime = t * 2;
			return 0.5 * EasingFunctions.cubic(fastTime);
		}
		let outFastTime = (1 - t) * 2;
		let y = 1 - EasingFunctions.cubic(outFastTime);
		return 0.5 * y + 0.5;
	}
	static exponentialEase(t: number): number {
		if (t < 0.5) {
			return EasingFunctions.doIn(t, EasingFunctions.exponential);
		}
		return EasingFunctions.doOut(t, EasingFunctions.exponential);
	}
	static circleEase(t: number): number {
		if (t < 0.5) {
			return EasingFunctions.doIn(t, EasingFunctions.circle);
		}
		return EasingFunctions.doOut(t, EasingFunctions.circle);
	}
}


