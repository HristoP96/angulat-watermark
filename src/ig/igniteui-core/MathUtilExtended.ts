/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ValueType, Type, markType } from "./type";
import { truncate, log10 } from "./number";

/**
 * @hidden 
 */
export class MathUtilExtended extends Base {
	static $t: Type = markType(MathUtilExtended, 'MathUtilExtended');
	static gammaLn(x: number): number {
		if (x <= 0) {
			return NaN;
		}
		let cof: number[] = <number[]>[ 57.156235665862923, -59.597960355475493, 14.136097974741746, -0.49191381609762019, 3.3994649984811891E-05, 4.6523628927048578E-05, -9.8374475304879565E-05, 0.00015808870322491249, -0.00021026444172410488, 0.00021743961811521265, -0.00016431810653676389, 8.441822398385275E-05, -2.6190838401581408E-05, 3.6899182659531625E-06 ];
		let y: number = x;
		let t: number = (x + 0.5) * Math.log(x + 5.2421875) - (x + 5.2421875);
		let s: number = 0.99999999999999711;
		for (let j: number = 0; j < 14; j++) {
			s += cof[j] / ++y;
		}
		return t + Math.log(2.5066282746310007 * s / x);
	}
	static noise(x: number, y: number, z: number): number {
		let X: number = <number>truncate(Math.floor(x)) & 255;
		let Y: number = <number>truncate(Math.floor(y)) & 255;
		let Z: number = <number>truncate(Math.floor(z)) & 255;
		x -= Math.floor(x);
		y -= Math.floor(y);
		z -= Math.floor(z);
		let u: number = MathUtilExtended.fade(x);
		let v: number = MathUtilExtended.fade(y);
		let w: number = MathUtilExtended.fade(z);
		let A: number = MathUtilExtended.basis[X] + Y;
		let AA: number = MathUtilExtended.basis[A] + Z;
		let AB: number = MathUtilExtended.basis[A + 1] + Z;
		let B: number = MathUtilExtended.basis[X + 1] + Y;
		let BA: number = MathUtilExtended.basis[B] + Z;
		let BB: number = MathUtilExtended.basis[B + 1] + Z;
		return MathUtilExtended.lerp(w, MathUtilExtended.lerp(v, MathUtilExtended.lerp(u, MathUtilExtended.grad(MathUtilExtended.basis[AA], x, y, z), MathUtilExtended.grad(MathUtilExtended.basis[BA], x - 1, y, z)), MathUtilExtended.lerp(u, MathUtilExtended.grad(MathUtilExtended.basis[AB], x, y - 1, z), MathUtilExtended.grad(MathUtilExtended.basis[BB], x - 1, y - 1, z))), MathUtilExtended.lerp(v, MathUtilExtended.lerp(u, MathUtilExtended.grad(MathUtilExtended.basis[AA + 1], x, y, z - 1), MathUtilExtended.grad(MathUtilExtended.basis[BA + 1], x - 1, y, z - 1)), MathUtilExtended.lerp(u, MathUtilExtended.grad(MathUtilExtended.basis[AB + 1], x, y - 1, z - 1), MathUtilExtended.grad(MathUtilExtended.basis[BB + 1], x - 1, y - 1, z - 1))));
	}
	private static fade(t: number): number {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	private static lerp(t: number, a: number, b: number): number {
		return a + t * (b - a);
	}
	private static grad(hash: number, x: number, y: number, z: number): number {
		let h: number = hash & 15;
		let u: number = h < 8 ? x : y;
		let v: number = h < 4 ? y : h == 12 || h == 14 ? x : z;
		return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
	}
	private static basis: number[] = [ 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];
	static niceFloor(value: number): number {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -MathUtilExtended.niceCeiling(-value);
		}
		let expv: number = <number>truncate(Math.floor(log10(value)));
		let f: number = value / MathUtilExtended.expt(10, expv);
		let nf: number = f < 2 ? 1 : (f < 5 ? 2 : (f < 10 ? 5 : 10));
		return nf * MathUtilExtended.expt(10, expv);
	}
	static niceRound(value: number): number {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -MathUtilExtended.niceRound(-value);
		}
		let expv: number = <number>truncate(Math.floor(log10(value)));
		let f: number = value / MathUtilExtended.expt(10, expv);
		let nf: number = f < 1 ? 1 : (f < 3 ? 2 : (f < 7 ? 5 : 10));
		return nf * MathUtilExtended.expt(10, expv);
	}
	static niceCeiling(value: number): number {
		if (value == 0) {
			return 0;
		}
		if (value < 0) {
			return -MathUtilExtended.niceFloor(-value);
		}
		let expv: number = <number>truncate(Math.floor(log10(value)));
		let f: number = value / MathUtilExtended.expt(10, expv);
		let nf: number = f <= 1 ? 1 : (f <= 2 ? 2 : (f <= 5 ? 5 : 10));
		return nf * MathUtilExtended.expt(10, expv);
	}
	private static expt(a: number, n: number): number {
		let x: number = 1;
		for (; n > 0; --n) {
			x *= a;
		}
		for (; n < 0; ++n) {
			x /= a;
		}
		return x;
	}
}


