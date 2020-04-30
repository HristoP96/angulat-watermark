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
import { TextReader } from "./TextReader";
import { Encoding } from "./Encoding";
import { Stream, Base, Type, markType } from "./type";
import { Decoder } from "./Decoder";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { StringBuilder } from "./StringBuilder";
import { arrayCopy1 } from "./arrayExtended";
import { stringCreateFromCharArraySlice } from "./string";

/**
 * @hidden 
 */
export class NonBlockingStreamReader extends TextReader {
	static $t: Type = markType(NonBlockingStreamReader, 'NonBlockingStreamReader', (<any>TextReader).$type);
	private static readonly defaultBufferSize: number = 1024;
	private static readonly defaultFileBufferSize: number = 4096;
	private static readonly minimumBufferSize: number = 128;
	private input_buffer: number[] = null;
	private decoded_buffer: string[] = null;
	private decoded_count: number = 0;
	private pos: number = 0;
	private buffer_size: number = 0;
	private _encoding: Encoding = null;
	private decoder: Decoder = null;
	private base_stream: Stream = null;
	private mayBlock: boolean = false;
	private line_builder: StringBuilder = null;
	constructor(stream: Stream, encoding: Encoding) {
		super();
		let buffer_size: number = NonBlockingStreamReader.defaultBufferSize;
		this.base_stream = stream;
		this.input_buffer = <number[]>new Array(buffer_size);
		this.buffer_size = buffer_size;
		this._encoding = encoding;
		this.decoder = this.getDecoder();
		this.decoded_buffer = <string[]>new Array(encoding.getMaxCharCount(buffer_size));
		this.decoded_count = 0;
		this.pos = 0;
	}
	private getDecoder(): Decoder {
		return this._encoding.getDecoder();
	}
	get encoding(): Encoding {
		return this._encoding;
	}
	close(): void {
		this.dispose1(true);
	}
	protected dispose1(disposing: boolean): void {
		if (disposing && this.base_stream != null) {
			this.base_stream.close();
		}
		this.input_buffer = null;
		this.decoded_buffer = null;
		this._encoding = null;
		this.decoder = null;
		this.base_stream = null;
		super.dispose1(disposing);
	}
	discardBufferedData(): void {
		this.pos = this.decoded_count = 0;
		this.mayBlock = false;
		this.decoder = this.getDecoder();
	}
	private readBuffer(): number {
		this.pos = 0;
		let cbEncoded: number = 0;
		this.decoded_count = 0;
		let parse_start: number = 0;
		do {
			cbEncoded = this.base_stream.read(this.input_buffer, 0, this.buffer_size);
			if (cbEncoded == 0) {
				return 0;
			}
			this.mayBlock = (cbEncoded < this.buffer_size);
			this.decoded_count += this.decoder.getChars(this.input_buffer, parse_start, cbEncoded, this.decoded_buffer, 0);
			parse_start = 0;
		} while (this.decoded_count == 0);
		return this.decoded_count;
	}
	peek(): number {
		if (this.base_stream == null) {
			throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this.pos >= this.decoded_count && (this.mayBlock || this.readBuffer() == 0)) {
			return -1;
		}
		return this.decoded_buffer[this.pos].charCodeAt(0);
	}
	read(): number {
		if (this.base_stream == null) {
			throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this.pos >= this.decoded_count && this.readBuffer() == 0) {
			return -1;
		}
		return this.decoded_buffer[this.pos++].charCodeAt(0);
	}
	read1(dest_buffer: string[], index: number, count: number): number {
		if (this.base_stream == null) {
			throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (dest_buffer == null) {
			throw new ArgumentNullException(0, "dest_buffer");
		}
		if (index < 0) {
			throw new ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > dest_buffer.length - count) {
			throw new ArgumentException(1, "index + count > dest_buffer.Length");
		}
		let chars_read: number = 0;
		{
			if (this.pos >= this.decoded_count && this.readBuffer() == 0) {
				return chars_read > 0 ? chars_read : 0;
			}
			let cch: number = Math.min(this.decoded_count - this.pos, count);
			arrayCopy1(this.decoded_buffer, this.pos, dest_buffer, index, cch);
			this.pos += cch;
			index += cch;
			count -= cch;
			chars_read += cch;
		}
		return chars_read;
	}
	private foundCR: boolean = false;
	private findNextEOL(): number {
		let c: string = '\0';
		for (; this.pos < this.decoded_count; this.pos++) {
			c = this.decoded_buffer[this.pos];
			if (c == '\n') {
				this.pos++;
				let res: number = (this.foundCR) ? (this.pos - 2) : (this.pos - 1);
				if (res < 0) {
					res = 0;
				}
				this.foundCR = false;
				return res;
			} else if (this.foundCR) {
				this.foundCR = false;
				return this.pos - 1;
			}
			this.foundCR = (c == '\r');
		}
		return -1;
	}
	readLine(): string {
		if (this.base_stream == null) {
			throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		if (this.pos >= this.decoded_count && this.readBuffer() == 0) {
			return null;
		}
		let begin: number = this.pos;
		let end: number = this.findNextEOL();
		if (end < this.decoded_count && end >= begin) {
			return stringCreateFromCharArraySlice(this.decoded_buffer, begin, end - begin);
		}
		if (this.line_builder == null) {
			this.line_builder = new StringBuilder(0);
		} else {
			this.line_builder.length = 0;
		}
		while (true) {
			if (this.foundCR) {
				this.decoded_count--;
			}
			this.line_builder.append5(stringCreateFromCharArraySlice(this.decoded_buffer, begin, this.decoded_count - begin));
			if (this.readBuffer() == 0) {
				if (this.line_builder.capacity > 32768) {
					let sb: StringBuilder = this.line_builder;
					this.line_builder = null;
					return sb.toString1(0, sb.length);
				}
				return this.line_builder.toString1(0, this.line_builder.length);
			}
			begin = this.pos;
			end = this.findNextEOL();
			if (end < this.decoded_count && end >= begin) {
				this.line_builder.append5(stringCreateFromCharArraySlice(this.decoded_buffer, begin, end - begin));
				if (this.line_builder.capacity > 32768) {
					let sb1: StringBuilder = this.line_builder;
					this.line_builder = null;
					return sb1.toString1(0, sb1.length);
				}
				return this.line_builder.toString1(0, this.line_builder.length);
			}
		}
	}
	readToEnd(): string {
		if (this.base_stream == null) {
			throw new ObjectDisposedException(1, "StreamReader", "Cannot read from a closed StreamReader");
		}
		let text: StringBuilder = new StringBuilder(0);
		let size: number = this.decoded_buffer.length;
		let buffer: string[] = <string[]>new Array(size);
		let len: number;
		while ((len = this.read1(buffer, 0, size)) != 0) {
			text.append(buffer, 0, len);
		}
		return text.toString();
	}
}


