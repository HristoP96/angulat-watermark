//
// System.IO.StringReader
//
// Author: Marcin Szczepanski (marcins@zipworld.com.au)
//
// Copyright (C) 2004 Novell (http://www.novell.com)
// 

//
// Copyright (C) 2004 Novell, Inc (http://www.novell.com)
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
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { Base, Type, markType } from "./type";
import { stringEmpty, stringCopyToCharArray } from "./string";

/**
 * @hidden 
 */
export class StringReader extends TextReader {
	static $t: Type = markType(StringReader, 'StringReader', (<any>TextReader).$type);
	private source: string = null;
	private nextChar: number = 0;
	private sourceLength: number = 0;
	constructor(s: string) {
		super();
		if (s == null) {
			throw new ArgumentNullException(0, "s");
		}
		this.source = s;
		this.nextChar = 0;
		this.sourceLength = s.length;
	}
	close(): void {
		this.dispose1(true);
	}
	protected dispose1(disposing: boolean): void {
		this.source = null;
		super.dispose1(disposing);
	}
	peek(): number {
		this.checkObjectDisposedException();
		if (this.nextChar >= this.sourceLength) {
			return -1;
		} else {
			return <number>this.source.charAt(this.nextChar).charCodeAt(0);
		}
	}
	read(): number {
		this.checkObjectDisposedException();
		if (this.nextChar >= this.sourceLength) {
			return -1;
		} else {
			return <number>this.source.charAt(this.nextChar++).charCodeAt(0);
		}
	}
	read1(buffer: string[], index: number, count: number): number {
		this.checkObjectDisposedException();
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (buffer.length - index < count) {
			throw new ArgumentException(1, stringEmpty());
		}
		if (index < 0 || count < 0) {
			throw new ArgumentOutOfRangeException(0);
		}
		let charsToRead: number;
		if (this.nextChar > this.sourceLength - count) {
			charsToRead = this.sourceLength - this.nextChar;
		} else {
			charsToRead = count;
		}
		stringCopyToCharArray(this.source, this.nextChar, buffer, index, charsToRead);
		this.nextChar += charsToRead;
		return charsToRead;
	}
	readLine(): string {
		this.checkObjectDisposedException();
		if (this.nextChar >= this.source.length) {
			return null;
		}
		let nextCR: number = this.source.indexOf('\r', this.nextChar);
		let nextLF: number = this.source.indexOf('\n', this.nextChar);
		let readTo: number;
		let consecutive: boolean = false;
		if (nextCR == -1) {
			if (nextLF == -1) {
				return this.readToEnd();
			}
			readTo = nextLF;
		} else if (nextLF == -1) {
			readTo = nextCR;
		} else {
			readTo = (nextCR > nextLF) ? nextLF : nextCR;
			consecutive = (nextCR + 1 == nextLF);
		}
		let nextLine: string = this.source.substr(this.nextChar, readTo - this.nextChar);
		this.nextChar = readTo + ((consecutive) ? 2 : 1);
		return nextLine;
	}
	readToEnd(): string {
		this.checkObjectDisposedException();
		let toEnd: string = this.source.substr(this.nextChar, this.sourceLength - this.nextChar);
		this.nextChar = this.sourceLength;
		return toEnd;
	}
	private checkObjectDisposedException(): void {
		if (this.source == null) {
			throw new ObjectDisposedException(1, "StringReader", "Cannot read from a closed StringReader");
		}
	}
}


