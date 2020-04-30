/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { truncate, intDivide, isNaN_ } from "./number";
import { u32BitwiseAnd, u32LS, u32BitwiseOr, intSToU } from "./numberExtended";

/**
 * @hidden 
 */
export class BitConverter extends Base {
	static $t: Type = markType(BitConverter, 'BitConverter');
	static isLittleEndian: boolean = false;
	static doubleToInt64Bits(value: number): number {
		throw new NotImplementedException(0);
	}
	static getBytes(value: boolean): number[] {
		return [ value ? <number>1 : <number>0 ];
	}
	static getBytes1(value: string): number[] {
		throw new NotImplementedException(0);
	}
	static getBytes2(value: number): number[] {
		let hiWord: number = 0;
		let loWord: number = 0;
		if (value == Number.POSITIVE_INFINITY) {
			hiWord = 2146435072;
		} else if (value == Number.NEGATIVE_INFINITY) {
			hiWord = 4293918720;
		} else if (value == 0) {
			if (1 / value == 1 / 0) {
				hiWord = 0;
			} else {
				hiWord = 2147483648;
			}
		} else if (isNaN_(value)) {
			hiWord = 4294443008;
		} else {
			if (value < -0) {
				hiWord = 2147483648;
				value = -value;
			}
			let exponent = Math.floor(Math.log(value) / Math.log(2));
			let significand = <number>truncate(Math.floor((value / Math.pow(2, exponent)) * Math.pow(2, 52)));
			loWord = <number>(u32BitwiseAnd(significand, 4294967295));
			significand = intDivide(significand, <number>truncate(Math.pow(2, 32)));
			exponent += 1023;
			if (exponent >= 2047) {
				exponent = 2047;
				significand = 0;
			} else if (exponent < 0) {
				exponent = 0;
			}
			hiWord = u32BitwiseOr(hiWord, u32LS(<number>truncate(exponent), 20));
			hiWord = u32BitwiseOr(hiWord, u32BitwiseAnd(<number>significand, ~(-1 << 20)));
		}
		return [ <number>(loWord & 255), <number>((loWord >>> 8) & 255), <number>((loWord >>> 16) & 255), <number>((loWord >>> 24) & 255), <number>(hiWord & 255), <number>((hiWord >>> 8) & 255), <number>((hiWord >>> 16) & 255), <number>((hiWord >>> 24) & 255) ];
	}
	static getBytes6(value: number): number[] {
		throw new NotImplementedException(0);
	}
	static getBytes4(value: number): number[] {
		return BitConverter.getBytes8(<number>intSToU(value));
	}
	static getBytes5(value: number): number[] {
		return BitConverter.getBytes9(<number>value);
	}
	static getBytes3(value: number): number[] {
		return BitConverter.getBytes7(<number>value);
	}
	static getBytes8(value: number): number[] {
		return [ <number>(value & 255), <number>((value >>> 8) & 255), <number>((value >>> 16) & 255), <number>((value >>> 24) & 255) ];
	}
	static getBytes9(value: number): number[] {
		let lo = <number>(value | 0);
		let hi = u32BitwiseOr(<number>truncate((value / Math.pow(2, 32))), 0);
		return [ <number>(lo & 255), <number>((lo >>> 8) & 255), <number>((lo >>> 16) & 255), <number>((lo >>> 24) & 255), <number>(hi & 255), <number>((hi >>> 8) & 255), <number>((hi >>> 16) & 255), <number>((hi >>> 24) & 255) ];
	}
	static getBytes7(value: number): number[] {
		return [ <number>(value & 255), <number>((value >>> 8) & 255) ];
	}
	static int64BitsToDouble(value: number): number {
		throw new NotImplementedException(0);
	}
	static toBoolean(value: number[], startIndex: number): boolean {
		return value[startIndex] != 0;
	}
	static toChar(value: number[], startIndex: number): string {
		throw new NotImplementedException(0);
	}
	static toDouble(value: number[], startIndex: number): number {
		let sign = (value[startIndex + 7] & 1 << 7) >> 7;
		let exponent = (((value[startIndex + 7] & 127) << 4) | (value[startIndex + 6] & (15 << 4)) >> 4);
		if (exponent == 0) {
			return (sign == 0) ? 0 : -0;
		}
		if (exponent == 2047) {
			if ((value[startIndex + 6] & 8) != 0) {
				return NaN;
			}
			return (sign == 0) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
		}
		let mul = Math.pow(2, exponent - 1023 - 52);
		let mantissa = value[startIndex] + value[startIndex + 1] * Math.pow(2, 8 * 1) + value[startIndex + 2] * Math.pow(2, 8 * 2) + value[startIndex + 3] * Math.pow(2, 8 * 3) + value[startIndex + 4] * Math.pow(2, 8 * 4) + value[startIndex + 5] * Math.pow(2, 8 * 5) + (value[startIndex + 6] & 15) * Math.pow(2, 8 * 6) + Math.pow(2, 52);
		return Math.pow(-1, sign) * mantissa * mul;
	}
	static toInt16(value: number[], startIndex: number): number {
		let num: number = BitConverter.toUInt16(value, startIndex);
		if (num > 32767) {
			num -= (65535 + 1);
		}
		return <number>num;
	}
	static toInt32(value: number[], startIndex: number): number {
		return value[startIndex] | (value[startIndex + 1] << 8) | (value[startIndex + 2] << 16) | (value[startIndex + 3] << 24);
	}
	static toSingle(value: number[], startIndex: number): number {
		throw new NotImplementedException(0);
	}
	static toString1(value: number[]): string {
		throw new NotImplementedException(0);
	}
	static toString2(value: number[], startIndex: number): string {
		throw new NotImplementedException(0);
	}
	static toString3(value: number[], startIndex: number, length: number): string {
		throw new NotImplementedException(0);
	}
	static toUInt16(value: number[], startIndex: number): number {
		return <number>(value[startIndex] | (value[startIndex + 1] << 8));
	}
	static toUInt32(value: number[], startIndex: number): number {
		return <number>intSToU(BitConverter.toInt32(value, startIndex));
	}
}


