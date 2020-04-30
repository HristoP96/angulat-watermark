//
// Original version: https://github.com/mosa/Mono-Class-Libraries/blob/master/mcs/class/System.XML/System.Xml/XmlTextReader.cs
//
// System.Xml.XmlInputStream 
//	encoding-specification-wise XML input stream and reader
//
// Author:
//	Atsushi Enomoto (ginga@kit.hi-ho.ne.jp)
//
//	(C)2003 Atsushi Enomoto
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
import { Stream, Base, SeekOrigin, NotSupportedException, callStaticConstructors, Type, markType } from "./type";
import { Encoding } from "./Encoding";
import { XmlException } from "./XmlException";
import { UTF8Encoding } from "./UTF8Encoding";
import { StringBuilder } from "./StringBuilder";
import { XmlChar } from "./XmlChar";
import { Buffer } from "./Buffer";

/**
 * @hidden 
 */
export class XmlInputStream extends Stream {
	static $t: Type = markType(XmlInputStream, 'XmlInputStream', (<any>Stream).$type);
	static strictUTF8: Encoding = null;
	static staticInit(): void {
		XmlInputStream.strictUTF8 = new UTF8Encoding(0, false, true);
	}
	private enc: Encoding = null;
	private stream: Stream = null;
	private buffer: number[] = null;
	private bufLength: number = 0;
	private bufPos: number = 0;
	private static encodingException: XmlException = new XmlException(3, "invalid encoding specification.");
	constructor(stream: Stream) {
		super();
		this.initialize(stream);
	}
	private getStringFromBytes(index: number, count: number): string {
		let posBak: number = this.bufPos;
		while (this.bufPos < index + count) {
			if (this.readByteSpecial() < 0) {
				return null;
			}
		}
		this.bufPos = posBak;
		return Encoding.aSCII.getString1(this.buffer, index, count);
	}
	private initialize(stream: Stream): void {
		this.buffer = <number[]>new Array(6);
		this.stream = stream;
		this.enc = XmlInputStream.strictUTF8;
		this.bufLength = stream.read(this.buffer, 0, this.buffer.length);
		if (this.bufLength == -1 || this.bufLength == 0) {
			return;
		}
		let c: number = this.readByteSpecial();
		switch (c) {
			case 255:
			c = this.readByteSpecial();
			if (c == 254) {
				this.enc = Encoding.unicode;
			} else {
				this.bufPos = 0;
			}
			break;

			case 254:
			c = this.readByteSpecial();
			if (c == 255) {
				this.enc = Encoding.bigEndianUnicode;
				return;
			} else {
				this.bufPos = 0;
			}
			break;

			case 239:
			c = this.readByteSpecial();
			if (c == 187) {
				c = this.readByteSpecial();
				if (c != 191) {
					this.bufPos = 0;
				}
			} else {
				this.buffer[--this.bufPos] = 239;
			}
			break;

			case '<'.charCodeAt(0):
			if (this.bufLength >= 5 && this.getStringFromBytes(1, 4) == "?xml") {
				this.bufPos += 4;
				c = this.skipWhitespace();
				if (c == 'v'.charCodeAt(0)) {
					while (c >= 0) {
						c = this.readByteSpecial();
						if (c == '0'.charCodeAt(0)) {
							this.readByteSpecial();
							break;
						}
					}
					c = this.skipWhitespace();
				}
				if (c == 'e'.charCodeAt(0)) {
					if (this.getStringFromBytes(this.bufPos, 7) == "ncoding") {
						this.bufPos += 7;
						c = this.skipWhitespace();
						if (c != '='.charCodeAt(0)) {
							throw XmlInputStream.encodingException;
						}
						c = this.skipWhitespace();
						let quoteChar: number = c;
						let sb: StringBuilder = new StringBuilder(0);
						while (true) {
							c = this.readByteSpecial();
							if (c == quoteChar) {
								break;
							} else if (c < 0) {
								throw XmlInputStream.encodingException;
							}
							sb.append1(<string>String.fromCharCode(c));
						}
						let encodingName: string = sb.toString();
						if (!XmlChar.isValidIANAEncoding(encodingName)) {
							throw XmlInputStream.encodingException;
						}
						this.enc = Encoding.getEncoding(encodingName);
					}
				}
			}
			this.bufPos = 0;
			break;

			default:
			this.bufPos = 0;
			break;

		}

	}
	private readByteSpecial(): number {
		if (this.bufLength > this.bufPos) {
			return this.buffer[this.bufPos++];
		}
		let newbuf: number[] = <number[]>new Array(this.buffer.length * 2);
		Buffer.blockCopy(this.buffer, 0, newbuf, 0, this.bufLength);
		let nbytes: number = this.stream.read(newbuf, this.bufLength, this.buffer.length);
		if (nbytes == -1 || nbytes == 0) {
			return -1;
		}
		this.bufLength += nbytes;
		this.buffer = newbuf;
		return this.buffer[this.bufPos++];
	}
	private skipWhitespace(): number {
		let c: number;
		L0: while (true) {
			c = this.readByteSpecial();
			let t1 = <string>String.fromCharCode(c);
			L1: while (true) {
				switch (t1) {
					case '\r':
					t1 = ' ';
					continue L1;

					case '\n':
					t1 = ' ';
					continue L1;

					case '\t':
					t1 = ' ';
					continue L1;

					case ' ': continue L0;
					default: return c;
				}

				break;
			}
		}
	}
	get actualEncoding(): Encoding {
		return this.enc;
	}
	protected get_canRead(): boolean {
		if (this.bufLength > this.bufPos) {
			return true;
		} else {
			return this.stream.canRead;
		}
	}
	get canRead(): boolean {
		return this.get_canRead();
	}
	protected get_canSeek(): boolean {
		return false;
	}
	get canSeek(): boolean {
		return this.get_canSeek();
	}
	protected get_canWrite(): boolean {
		return false;
	}
	get canWrite(): boolean {
		return this.get_canWrite();
	}
	protected get_length(): number {
		return this.stream.length;
	}
	get length(): number {
		return this.get_length();
	}
	protected get_position(): number {
		return this.stream.position - this.bufLength + this.bufPos;
	}
	protected set_position(value: number): void {
		if (value < this.bufLength) {
			this.bufPos = <number>value;
		} else {
			this.stream.position = value - this.bufLength;
		}
	}
	get position(): number {
		return this.get_position();
	}
	set position(value: number) {
		this.set_position(value);
	}
	close(): void {
		this.stream.close();
	}
	flush(): void {
		this.stream.flush();
	}
	read(buffer: number[], offset: number, count: number): number {
		let ret: number;
		if (count <= this.bufLength - this.bufPos) {
			Buffer.blockCopy(this.buffer, this.bufPos, buffer, offset, count);
			this.bufPos += count;
			ret = count;
		} else {
			let bufRest: number = this.bufLength - this.bufPos;
			if (this.bufLength > this.bufPos) {
				Buffer.blockCopy(this.buffer, this.bufPos, buffer, offset, bufRest);
				this.bufPos += bufRest;
			}
			ret = bufRest + this.stream.read(buffer, offset + bufRest, count - bufRest);
		}
		return ret;
	}
	readByte(): number {
		if (this.bufLength > this.bufPos) {
			return this.buffer[this.bufPos++];
		}
		return this.stream.readByte();
	}
	seek(offset: number, origin: SeekOrigin): number {
		let bufRest: number = this.bufLength - this.bufPos;
		if (origin == SeekOrigin.Current) {
			if (offset < bufRest) {
				return this.buffer[this.bufPos + offset];
			} else {
				return this.stream.seek(offset - bufRest, origin);
			}
		} else {
			return this.stream.seek(offset, origin);
		}
	}
	setLength(value: number): void {
		this.stream.setLength(value);
	}
	write(buffer: number[], offset: number, count: number): void {
		throw new NotSupportedException(0);
	}
}


(function(v) { callStaticConstructors(); })(true);
