/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { ArgumentNullException } from "./ArgumentNullException";
import { Decoder } from "./Decoder";
import { ArgumentException } from "./ArgumentException";
import { stringToCharArray } from "./string";
import { intDivide, truncate } from "./number";
import { InvalidOperationException } from "./InvalidOperationException";

declare function unescape(s:string): string;
/**
 * @hidden 
 */
export abstract class Encoding extends Base {
	static $t: Type = markType(Encoding, 'Encoding');
	private static _utfEncoding: Encoding = null;
	static get uTF8(): Encoding {
		if (Encoding._utfEncoding == null) {
			Encoding._utfEncoding = new UTF8Encoding(1);
		}
		return Encoding._utfEncoding;
	}
	private static _utf8Unmarked: Encoding = null;
	static get uTF8Unmarked(): Encoding {
		if (Encoding._utf8Unmarked == null) {
			Encoding._utf8Unmarked = new UTF8Encoding(1);
		}
		return Encoding._utf8Unmarked;
	}
	private static _unicodeEncoding: Encoding = null;
	static get unicode(): Encoding {
		if (Encoding._unicodeEncoding == null) {
			Encoding._unicodeEncoding = new UnicodeEncoding(0);
		}
		return Encoding._unicodeEncoding;
	}
	getString1(bytes: number[], startIndex: number, length: number): string {
		return "";
	}
	abstract getBytes2(chars: string[], charIndex: number, charCount: number, bytes: number[], byteIndex: number): number;
	getBytes(chars: string[], index: number, count: number): number[] {
		let array: number[] = <number[]>new Array(this.getByteCount(chars, index, count));
		this.getBytes2(chars, index, count, array, 0);
		return array;
	}
	getBytes1(input: string): number[] {
		if (input == null) {
			throw new ArgumentNullException(0, "input");
		}
		let array: string[] = <string[]>new Array(input.length);
		for (let i: number = 0; i < input.length; i++) {
			array[i] = input.charAt(i);
		}
		return this.getBytes(array, 0, array.length);
	}
	abstract getByteCount(chars: string[], index: number, count: number): number;
	getString(bytes: number[]): string {
		return this.getString1(bytes, 0, bytes.length);
	}
	getCharCount(bytes: number[]): number {
		if (bytes == null) {
			throw new ArgumentNullException(0, "bytes");
		}
		return this.getCharCount1(bytes, 0, bytes.length);
	}
	getCharCount1(bytes: number[], index: number, count: number): number {
		throw new NotImplementedException(0);
	}
	getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number {
		throw new NotImplementedException(0);
	}
	private static _asciiEncoding: Encoding = null;
	static get aSCII(): Encoding {
		if (Encoding._asciiEncoding == null) {
			Encoding._asciiEncoding = new AsciiEncoding(1);
		}
		return Encoding._asciiEncoding;
	}
	getDecoder(): Decoder {
		return new DefaultDecoder(this);
	}
	getBytes3(s: string, charIndex: number, charCount: number, bytes: number[], byteIndex: number): number {
		return this.getBytes2(stringToCharArray(s), charIndex, charCount, bytes, byteIndex);
	}
	getMaxCharCount(size: number): number {
		return size;
	}
	getMaxByteCount(size: number): number {
		return size + 1;
	}
	getPreamble(): number[] {
		return <number[]>new Array(0);
	}
	private static _bigEndianUnicodeEncoding: Encoding = null;
	static get bigEndianUnicode(): Encoding {
		if (Encoding._bigEndianUnicodeEncoding == null) {
			Encoding._bigEndianUnicodeEncoding = new UnicodeEncoding(1, true, false);
		}
		return Encoding._bigEndianUnicodeEncoding;
	}
	static get defaultValue(): Encoding {
		return Encoding.aSCII;
	}
	static getEncoding(name: string): Encoding {
		switch (name.toUpperCase()) {
			case "ASCII": return Encoding.aSCII;
			case "UNICODE": return Encoding.unicode;
			case "UTF-8": return Encoding.uTF8;
			default: throw new ArgumentException(1, "'" + name + "' is not a valid encoding name.");
		}

	}
	protected get_webName(): string {
		throw new NotImplementedException(0);
	}
	get webName(): string {
		return this.get_webName();
	}
}

/**
 * @hidden 
 */
export class UnicodeEncoding extends Encoding {
	static $t: Type = markType(UnicodeEncoding, 'UnicodeEncoding', (<any>Encoding).$type);
	private readonly _bigEndian: boolean = false;
	getString1(bytes_: number[], startIndex: number, length: number): string {
		let ret = "";
		let end = startIndex + length;
		for (let i_ = startIndex; i_ < end; i_ = i_ + 2) {
			if (i_ + 1 >= end) {
				ret = ret + '�';
			} else {
				let bits0: string;
				let bits1: string;
				if (this._bigEndian) {
					bits0 = (<number>bytes_[i_ + 1]).toString(16);
					bits1 = (<number>bytes_[i_]).toString(16);
				} else {
					bits0 = (<number>bytes_[i_]).toString(16);
					bits1 = (<number>bytes_[i_ + 1]).toString(16);
				}
				if (bits0.length == 1) {
					bits0 = "0" + bits0;
				}
				if (bits1.length == 1) {
					bits1 = "0" + bits1;
				}
				let code = parseInt(bits1 + bits0, 16);
				ret = ret + String.fromCharCode(code);
			}
		}
		return ret;
	}
	getCharCount1(bytes: number[], index: number, count: number): number {
		return intDivide(count, 2);
	}
	getBytes(chars: string[], index: number, count: number): number[] {
		return super.getBytes(chars, index, count);
	}
	getBytes1(input: string): number[] {
		let bytes = <number[]>new Array(input.length * 2);
		this.getBytes3(input, 0, input.length, bytes, 0);
		return bytes;
	}
	constructor(initNumber: number);
	constructor(initNumber: number, bigEndian: boolean, byteOrderMark: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let bigEndian: boolean = <boolean>_rest[0];
				let byteOrderMark: boolean = <boolean>_rest[1];
				this._bigEndian = bigEndian;
			}
			break;

		}

	}
	getMaxByteCount(size: number): number {
		return (size + 1) * 2;
	}
	getMaxCharCount(size: number): number {
		return <number>truncate(Math.ceil(size / 2)) + 1;
	}
	getBytes3(s: string, charIndex: number, charCount: number, bytes: number[], byteIndex: number): number {
		for (let i = charIndex; i < charIndex + charCount; i++) {
			let value = s.charCodeAt(i);
			let lo = <number>(value & 255);
			let hi = <number>((value >> 8) & 255);
			if (this._bigEndian) {
				bytes[byteIndex++] = hi;
				bytes[byteIndex++] = lo;
			} else {
				bytes[byteIndex++] = lo;
				bytes[byteIndex++] = hi;
			}
		}
		return charCount * 2;
	}
	getByteCount(chars: string[], index: number, count: number): number {
		throw new NotImplementedException(0);
	}
	getBytes2(chars: string[], charIndex: number, charCount: number, bytes: number[], byteIndex: number): number {
		throw new NotImplementedException(0);
	}
	getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number {
		throw new NotImplementedException(0);
	}
}

/**
 * @hidden 
 */
export class UTF8Encoding extends Encoding {
	static $t: Type = markType(UTF8Encoding, 'UTF8Encoding', (<any>Encoding).$type);
	constructor(initNumber: number, encoderShouldEmitUTF8Identifier: boolean, throwOnInvalidBytes: boolean);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let encoderShouldEmitUTF8Identifier: boolean = <boolean>_rest[0];
				let throwOnInvalidBytes: boolean = <boolean>_rest[1];
			}
			break;

			case 1: break;
		}

	}
	getString1(bytes: number[], startIndex: number, length: number): string {
		let ret = "";
		let i = startIndex;
		let c1: number = 0;
		let c2: number = 0;
		let c3: number = 0;
		let c4: number = 0;
		while (i < startIndex + length) {
			c1 = bytes[i++];
			if (c1 < 128) {
				ret += <string>String.fromCharCode(c1);
			} else if (c1 > 191 && c1 < 224) {
				if (i >= startIndex + length) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				ret += <string>String.fromCharCode((((c1 & 31) << 6) | (c2 & 63)));
			} else if (c1 > 223 && c1 < 240) {
				if (i + 1 >= startIndex + length) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				ret += <string>String.fromCharCode((((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)));
			} else {
				if (i + 2 >= startIndex + length) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				c4 = bytes[i++];
				let c = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
				if (c < 65535) {
					ret += <string>String.fromCharCode(c);
				} else {
					c -= 65536;
					ret += <string>String.fromCharCode(((c >> 10) | 55296));
					ret += <string>String.fromCharCode(((c & 1023) | 56320));
				}
			}
		}
		return ret;
	}
	getCharCount1(bytes: number[], index: number, count: number): number {
		return count;
	}
	getByteCount(chars: string[], index: number, count: number): number {
		throw new NotImplementedException(0);
	}
	getBytes2(chars_: string[], charIndex_: number, charCount_: number, bytes: number[], byteIndex: number): number {
		let inputUTF8_ = <string>(unescape(encodeURIComponent(chars_.slice(charIndex_, charIndex_ + charCount_).join(""))));
		for (let i_ = 0; i_ < inputUTF8_.length; i_++) {
			bytes[byteIndex + i_] = <number>(inputUTF8_.charCodeAt(i_));
		}
		return inputUTF8_.length;
	}
	getBytes(chars: string[], index: number, count: number): number[] {
		return super.getBytes(chars, index, count);
	}
	getBytes1(input_: string): number[] {
		let bytes: number[] = <number[]>new Array(input_.length);
		let inputUTF8_ = <string>(unescape(encodeURIComponent(input_)));
		for (let i_ = 0; i_ < inputUTF8_.length; i_++) {
			bytes[i_] = <number>(inputUTF8_.charCodeAt(i_));
		}
		return bytes;
	}
	getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number {
		let originalCharIndex = charIndex;
		let i = byteIndex;
		let c1: number = 0;
		let c2: number = 0;
		let c3: number = 0;
		let c4: number = 0;
		while (i < byteIndex + byteCount) {
			c1 = bytes[i++];
			if (c1 < 128) {
				chars[charIndex++] = <string>String.fromCharCode(c1);
			} else if (c1 > 191 && c1 < 224) {
				if (i >= byteIndex + byteCount) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				chars[charIndex++] = <string>String.fromCharCode((((c1 & 31) << 6) | (c2 & 63)));
			} else if (c1 > 223 && c1 < 240) {
				if (i + 1 >= byteIndex + byteCount) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				chars[charIndex++] = <string>String.fromCharCode((((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)));
			} else {
				if (i + 2 >= byteIndex + byteCount) {
					throw new InvalidOperationException(1, "UTF-8 decoding error.");
				}
				c2 = bytes[i++];
				c3 = bytes[i++];
				c4 = bytes[i++];
				let c = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
				if (c < 65535) {
					chars[charIndex++] = <string>String.fromCharCode(c);
				} else {
					c -= 65536;
					chars[charIndex++] = <string>String.fromCharCode(((c >> 10) | 55296));
					chars[charIndex++] = <string>String.fromCharCode(((c & 1023) | 56320));
				}
			}
		}
		return charIndex - originalCharIndex;
	}
	getDecoder(): Decoder {
		return new UTF8Encoding_UTF8Decoder(this);
	}
	getMaxByteCount(size: number): number {
		return (size + 1) * 3;
	}
	getMaxCharCount(size: number): number {
		return size + 1;
	}
}

/**
 * @hidden 
 */
export class UTF8Encoding_UTF8Decoder extends Decoder {
	static $t: Type = markType(UTF8Encoding_UTF8Decoder, 'UTF8Encoding_UTF8Decoder', (<any>Decoder).$type);
	private _c1: number = 0;
	private _c2: number = 0;
	private _c3: number = 0;
	private _c4: number = 0;
	private readonly _encoding: Encoding = null;
	constructor(encoding: Encoding) {
		super();
		this._encoding = encoding;
	}
	getCharCount(bytes: number[], index: number, count: number): number {
		return this.getCharCount1(bytes, index, count, false);
	}
	getCharCount1(bytes: number[], index: number, count: number, flush: boolean): number {
		let charCount = 0;
		let i = index;
		while (i < index + count) {
			if (this._c1 == 0) {
				this._c1 = bytes[i++];
			}
			if (this._c1 < 128) {
				charCount++;
			} else {
				if (i >= index + count) {
					break;
				}
				if (this._c2 == 0) {
					this._c2 = bytes[i++];
				}
				if (this._c1 > 191 && this._c1 < 224) {
					charCount++;
				} else {
					if (i >= index + count) {
						break;
					}
					if (this._c3 == 0) {
						this._c3 = bytes[i++];
					}
					if (this._c1 > 223 && this._c1 < 240) {
						charCount++;
					} else {
						if (i >= index + count) {
							break;
						}
						if (this._c4 == 0) {
							this._c4 = bytes[i++];
						}
						let c = ((this._c1 & 7) << 18) | ((this._c2 & 63) << 12) | ((this._c3 & 63) << 6) | (this._c4 & 63);
						if (c < 65535) {
							charCount++;
						} else {
							charCount += 2;
						}
						this._c4 = 0;
					}
					this._c3 = 0;
				}
				this._c2 = 0;
			}
			this._c1 = 0;
		}
		if (flush) {
			this._c1 = 0;
			this._c2 = 0;
			this._c3 = 0;
			this._c4 = 0;
		}
		return charCount;
	}
	getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number {
		return this.getChars1(bytes, byteIndex, byteCount, chars, charIndex, false);
	}
	getChars1(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number, flush: boolean): number {
		let originalCharIndex = charIndex;
		let i = byteIndex;
		while (i < byteIndex + byteCount) {
			if (this._c1 == 0) {
				this._c1 = bytes[i++];
			}
			if (this._c1 < 128) {
				chars[charIndex++] = <string>String.fromCharCode(this._c1);
			} else {
				if (i >= byteIndex + byteCount) {
					break;
				}
				if (this._c2 == 0) {
					this._c2 = bytes[i++];
				}
				if (this._c1 > 191 && this._c1 < 224) {
					chars[charIndex++] = <string>String.fromCharCode((((this._c1 & 31) << 6) | (this._c2 & 63)));
				} else {
					if (i >= byteIndex + byteCount) {
						break;
					}
					if (this._c3 == 0) {
						this._c3 = bytes[i++];
					}
					if (this._c1 > 223 && this._c1 < 240) {
						chars[charIndex++] = <string>String.fromCharCode((((this._c1 & 15) << 12) | ((this._c2 & 63) << 6) | (this._c3 & 63)));
					} else {
						if (i >= byteIndex + byteCount) {
							break;
						}
						if (this._c4 == 0) {
							this._c4 = bytes[i++];
						}
						let c = ((this._c1 & 7) << 18) | ((this._c2 & 63) << 12) | ((this._c3 & 63) << 6) | (this._c4 & 63);
						if (c < 65535) {
							chars[charIndex++] = <string>String.fromCharCode(c);
						} else {
							c -= 65536;
							chars[charIndex++] = <string>String.fromCharCode(((c >> 10) | 55296));
							chars[charIndex++] = <string>String.fromCharCode(((c & 1023) | 56320));
						}
						this._c4 = 0;
					}
					this._c3 = 0;
				}
				this._c2 = 0;
			}
			this._c1 = 0;
		}
		if (flush) {
			this._c1 = 0;
			this._c2 = 0;
			this._c3 = 0;
			this._c4 = 0;
		}
		return charIndex - originalCharIndex;
	}
}

/**
 * @hidden 
 */
export class AsciiEncoding extends Encoding {
	static $t: Type = markType(AsciiEncoding, 'AsciiEncoding', (<any>Encoding).$type);
	constructor(initNumber: number, encoderShouldEmitUTF8Identifier: boolean, throwOnInvalidBytes: boolean);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let encoderShouldEmitUTF8Identifier: boolean = <boolean>_rest[0];
				let throwOnInvalidBytes: boolean = <boolean>_rest[1];
			}
			break;

			case 1: break;
		}

	}
	getString1(bytes_: number[], startIndex: number, length: number): string {
		let ret_ = "";
		for (let i_ = startIndex; i_ < startIndex + length; i_++) {
			if (bytes_[i_] == 0) {
				break;
			}
			ret_ = ret_ + String.fromCharCode(bytes_[i_]);
		}
		return ret_;
	}
	getCharCount1(bytes: number[], index: number, count: number): number {
		return count;
	}
	getByteCount(chars: string[], index: number, count: number): number {
		return count;
	}
	getBytes2(chars: string[], charIndex: number, charCount: number, bytes: number[], byteIndex: number): number {
		throw new NotImplementedException(0);
	}
	getBytes(chars: string[], index: number, count: number): number[] {
		return super.getBytes(chars, index, count);
	}
	getBytes1(input_: string): number[] {
		let bytes: number[] = <number[]>new Array(input_.length);
		for (let i_ = 0; i_ < input_.length; i_++) {
			bytes[i_] = <number>(input_.charCodeAt(i_));
		}
		return bytes;
	}
	getChars(bytes_: number[], byteIndex_: number, byteCount: number, chars: string[], charIndex: number): number {
		let originalCharIndex = charIndex;
		for (let i_ = 0; i_ < byteCount; i_++) {
			if (bytes_[i_] == 0) {
				break;
			}
			chars[charIndex++] = <string>(String.fromCharCode(bytes_[byteIndex_++]));
		}
		return charIndex - originalCharIndex;
	}
}

/**
 * @hidden 
 */
export class DefaultDecoder extends Decoder {
	static $t: Type = markType(DefaultDecoder, 'DefaultDecoder', (<any>Decoder).$type);
	private readonly _encoding: Encoding = null;
	constructor(encoding: Encoding) {
		super();
		this._encoding = encoding;
	}
	getCharCount(bytes: number[], index: number, count: number): number {
		return this.getCharCount1(bytes, index, count, false);
	}
	getCharCount1(bytes: number[], index: number, count: number, flush: boolean): number {
		return this._encoding.getCharCount1(bytes, index, count);
	}
	getChars(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number): number {
		return this.getChars1(bytes, byteIndex, byteCount, chars, charIndex, false);
	}
	getChars1(bytes: number[], byteIndex: number, byteCount: number, chars: string[], charIndex: number, flush: boolean): number {
		return this._encoding.getChars(bytes, byteIndex, byteCount, chars, charIndex);
	}
}


