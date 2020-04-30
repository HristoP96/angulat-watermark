// -*- Mode: C; tab-width: 8; indent-tabs-mode: t; c-basic-offset: 8 -*-
//
// System.Xml.XmlChar.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
//

//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { Base, ValueType, Type, markType } from "./type";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { intSToU, u32BitwiseAnd } from "./numberExtended";

/**
 * @hidden 
 */
export class XmlChar extends Base {
	static $t: Type = markType(XmlChar, 'XmlChar');
	static readonly whitespaceChars: string[] = <string[]>[ ' ', '\n', '\t', '\r' ];
	static isWhitespace(ch: number): boolean {
		return ch == 32 || ch == 9 || ch == 13 || ch == 10;
	}
	static isWhitespace1(str: string): boolean {
		for (let i: number = 0; i < str.length; i++) {
			if (!XmlChar.isWhitespace(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	static indexOfNonWhitespace(str: string): number {
		for (let i: number = 0; i < str.length; i++) {
			if (!XmlChar.isWhitespace(str.charAt(i).charCodeAt(0))) {
				return i;
			}
		}
		return -1;
	}
	static isFirstNameChar(ch: number): boolean {
		if ((ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0)) || (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0))) {
			return true;
		} else if (<number>intSToU(ch) <= 65535) {
			return (u32BitwiseAnd(XmlChar.nameBitmap[(XmlChar.firstNamePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		}
		return false;
	}
	static isValid(ch: number): boolean {
		return !XmlChar.isInvalid(ch);
	}
	static isInvalid(ch: number): boolean {
		switch (ch) {
			case 9:

			case 10:

			case 13: return false;
		}

		if (ch < 32) {
			return true;
		}
		if (ch < 55296) {
			return false;
		}
		if (ch < 57344) {
			return true;
		}
		if (ch < 65534) {
			return false;
		}
		if (ch < 65536) {
			return true;
		}
		if (ch < 1114112) {
			return false;
		} else {
			return true;
		}
	}
	static indexOfInvalid1(s: string, allowSurrogate: boolean): number {
		for (let i: number = 0; i < s.length; i++) {
			if (XmlChar.isInvalid(s.charAt(i).charCodeAt(0))) {
				if (!allowSurrogate || i + 1 == s.length || s.charAt(i).charCodeAt(0) < '�'.charCodeAt(0) || s.charAt(i).charCodeAt(0) >= '�'.charCodeAt(0) || s.charAt(i + 1).charCodeAt(0) < '�'.charCodeAt(0) || s.charAt(i + 1).charCodeAt(0) >= ''.charCodeAt(0)) {
					return i;
				}
				i++;
			}
		}
		return -1;
	}
	static indexOfInvalid(s: string[], start: number, length: number, allowSurrogate: boolean): number {
		let end: number = start + length;
		if (s.length < end) {
			throw new ArgumentOutOfRangeException(1, "length");
		}
		for (let i: number = start; i < end; i++) {
			if (XmlChar.isInvalid(s[i].charCodeAt(0))) {
				if (!allowSurrogate || i + 1 == end || s[i].charCodeAt(0) < '�'.charCodeAt(0) || s[i].charCodeAt(0) >= '�'.charCodeAt(0) || s[i + 1].charCodeAt(0) < '�'.charCodeAt(0) || s[i + 1].charCodeAt(0) >= ''.charCodeAt(0)) {
					return i;
				}
				i++;
			}
		}
		return -1;
	}
	static isNameChar(ch: number): boolean {
		if ((ch >= 'a'.charCodeAt(0) && ch <= 'z'.charCodeAt(0)) || (ch >= 'A'.charCodeAt(0) && ch <= 'Z'.charCodeAt(0))) {
			return true;
		} else if (<number>intSToU(ch) <= 65535) {
			return (u32BitwiseAnd(XmlChar.nameBitmap[(XmlChar.namePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		} else {
			return false;
		}
	}
	static isNCNameChar(ch: number): boolean {
		let result: boolean = false;
		if (ch >= 0 && ch <= 65535 && ch != ':'.charCodeAt(0)) {
			result = (u32BitwiseAnd(XmlChar.nameBitmap[(XmlChar.namePages[ch >> 8] << 3) + ((ch & 255) >> 5)], (1 << (ch & 31)))) != 0;
		}
		return result;
	}
	static isName(str: string): boolean {
		if (str.length == 0) {
			return false;
		}
		if (!XmlChar.isFirstNameChar(str.charAt(0).charCodeAt(0))) {
			return false;
		}
		for (let i: number = 1; i < str.length; i++) {
			if (!XmlChar.isNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	static isNCName(str: string): boolean {
		if (str.length == 0) {
			return false;
		}
		if (!XmlChar.isFirstNameChar(str.charAt(0).charCodeAt(0))) {
			return false;
		}
		for (let i: number = 0; i < str.length; i++) {
			if (!XmlChar.isNCNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	static isNmToken(str: string): boolean {
		if (str.length == 0) {
			return false;
		}
		for (let i: number = 0; i < str.length; i++) {
			if (!XmlChar.isNameChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	static isPubidChar(ch: number): boolean {
		return (XmlChar.isWhitespace(ch) && ch != '\t'.charCodeAt(0)) || ('a'.charCodeAt(0) <= ch && ch <= 'z'.charCodeAt(0)) || ('A'.charCodeAt(0) <= ch && ch <= 'Z'.charCodeAt(0)) || ('0'.charCodeAt(0) <= ch && ch <= '9'.charCodeAt(0)) || (("-'()+,./:=?;!*#@$_%").indexOf(<string>String.fromCharCode(ch)) >= 0);
	}
	static isPubid(str: string): boolean {
		for (let i: number = 0; i < str.length; i++) {
			if (!XmlChar.isPubidChar(str.charAt(i).charCodeAt(0))) {
				return false;
			}
		}
		return true;
	}
	static isValidIANAEncoding(ianaEncoding: string): boolean {
		if (ianaEncoding != null) {
			let length: number = ianaEncoding.length;
			if (length > 0) {
				let c: string = ianaEncoding.charAt(0);
				if ((c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) || (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0))) {
					for (let i: number = 1; i < length; i++) {
						c = ianaEncoding.charAt(i);
						if ((c.charCodeAt(0) < 'A'.charCodeAt(0) || c.charCodeAt(0) > 'Z'.charCodeAt(0)) && (c.charCodeAt(0) < 'a'.charCodeAt(0) || c.charCodeAt(0) > 'z'.charCodeAt(0)) && (c.charCodeAt(0) < '0'.charCodeAt(0) || c.charCodeAt(0) > '9'.charCodeAt(0)) && c != '.' && c != '_' && c != '-') {
							return false;
						}
					}
					return true;
				}
			}
		}
		return false;
	}
	static getPredefinedEntity(name: string): number {
		switch (name) {
			case "amp": return '&'.charCodeAt(0);
			case "lt": return '<'.charCodeAt(0);
			case "gt": return '>'.charCodeAt(0);
			case "quot": return '\"'.charCodeAt(0);
			case "apos": return '\''.charCodeAt(0);
			default: return -1;
		}

	}
	private static readonly firstNamePages: number[] = [ 2, 3, 4, 5, 6, 7, 8, 0, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	private static readonly namePages: number[] = [ 25, 3, 26, 27, 28, 29, 30, 0, 0, 31, 32, 33, 34, 35, 36, 37, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 38, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	private static readonly nameBitmap: number[] = [ 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 0, 67108864, 2281701374, 134217726, 0, 0, 4286578687, 4286578687, 4294967295, 2146697215, 4294966782, 2147483647, 4294967295, 4294967295, 4294959119, 4231135231, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 3, 0, 0, 0, 0, 0, 4294956864, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901763, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 127, 0, 4294901760, 460799, 0, 134217726, 2046, 4294836224, 4294967295, 2097151999, 3112959, 96, 4294967264, 603979775, 4278190080, 3, 4294549472, 63307263, 2952790016, 196611, 4294543328, 57540095, 1577058304, 1835008, 4294684640, 602799615, 0, 1, 4294549472, 600702463, 2952790016, 3, 3594373088, 62899992, 0, 0, 4294828000, 66059775, 0, 3, 4294828000, 66059775, 1073741824, 3, 4294828000, 67108351, 0, 3, 0, 0, 0, 0, 4294967294, 884735, 63, 0, 4277151126, 537750702, 31, 0, 0, 0, 4294967039, 1023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294901823, 8388607, 514797, 1342177280, 2184269825, 2908843, 1073741824, 4118857984, 7, 33622016, 4294967295, 4294967295, 4294967295, 4294967295, 268435455, 4294967295, 4294967295, 67108863, 1061158911, 4294967295, 2868854591, 1073741823, 4294967295, 1608515583, 265232348, 534519807, 0, 19520, 0, 0, 7, 0, 0, 0, 128, 1022, 4294967294, 4294967295, 2097151, 4294967294, 4294967295, 134217727, 4294967264, 8191, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 63, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 15, 0, 0, 0, 134176768, 2281701374, 134217726, 0, 8388608, 4286578687, 4286578687, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 196611, 0, 4294967295, 4294967295, 63, 3, 4294956992, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901883, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 4294836351, 3154116603, 4294901782, 460799, 0, 134217726, 524287, 4294902783, 4294967295, 2097151999, 4293885951, 67059199, 4294967278, 4093640703, 4280172543, 65487, 4294549486, 3552968191, 2961193375, 262095, 4294543332, 3547201023, 1577073031, 2097088, 4294684654, 4092460543, 15295, 65473, 4294549486, 4090363391, 2965387663, 65475, 3594373100, 3284125464, 8404423, 65408, 4294828014, 3287285247, 6307295, 65475, 4294828012, 3287285247, 1080049119, 65475, 4294828012, 3288333823, 8404431, 65475, 0, 0, 0, 0, 4294967294, 134184959, 67076095, 0, 4277151126, 1006595246, 67059551, 0, 50331648, 3265266687, 4294967039, 4294837247, 4273934303, 50216959, 0, 0, 0, 0, 0, 0, 0, 0, 536805376, 2, 160, 4128766, 4294967294, 4294967295, 1713373183, 4294967294, 4294967295, 2013265919 ];
}


