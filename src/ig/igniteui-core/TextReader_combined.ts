//
// System.IO.TextReader
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
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
import { Base, IDisposable, IDisposable_$type, callStaticConstructors, typeCast, Type, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { stringEmpty } from "./string";

/**
 * @hidden 
 */
export abstract class TextReader extends Base implements IDisposable {
	static $t: Type = markType(TextReader, 'TextReader', (<any>Base).$type, [IDisposable_$type]);
	static staticInit(): void {
		TextReader.$null = new TextReader_NullTextReader();
	}
	constructor() {
		super();
	}
	static $null: TextReader = null;
	close(): void {
		this.dispose1(true);
	}
	dispose(): void {
		this.dispose1(true);
	}
	protected dispose1(disposing: boolean): void {
		if (disposing) {
		}
		return;
	}
	peek(): number {
		return -1;
	}
	read(): number {
		return -1;
	}
	read1(buffer: string[], index: number, count: number): number {
		let c: number, i: number;
		for (i = 0; i < count; i++) {
			if ((c = this.read()) == -1) {
				return i;
			}
			buffer[index + i] = <string>String.fromCharCode(c);
		}
		return i;
	}
	readBlock(buffer: string[], index: number, count: number): number {
		let total_read_count: number = 0;
		let current_read_count: number = 0;
		do {
			current_read_count = this.read1(buffer, index, count);
			index += current_read_count;
			total_read_count += current_read_count;
			count -= current_read_count;
		} while (current_read_count != 0 && count > 0);
		return total_read_count;
	}
	readLine(): string {
		return stringEmpty();
	}
	readToEnd(): string {
		return stringEmpty();
	}
	static synched(reader: TextReader): TextReader {
		if (reader == null) {
			throw new ArgumentNullException(0, "reader is null");
		}
		if (typeCast<SynchronizedReader>((<any>SynchronizedReader).$type, reader) !== null) {
			return reader;
		}
		return new SynchronizedReader(reader);
	}
}

/**
 * @hidden 
 */
export class TextReader_NullTextReader extends TextReader {
	static $t: Type = markType(TextReader_NullTextReader, 'TextReader_NullTextReader', (<any>TextReader).$type);
	readLine(): string {
		return null;
	}
}

/**
 * @hidden 
 */
export class SynchronizedReader extends TextReader {
	static $t: Type = markType(SynchronizedReader, 'SynchronizedReader', (<any>TextReader).$type);
	private reader: TextReader = null;
	constructor(reader: TextReader) {
		super();
		this.reader = reader;
	}
	close(): void {
		this.reader.close();
	}
	peek(): number {
		return this.reader.peek();
	}
	readBlock(buffer: string[], index: number, count: number): number {
		return this.reader.readBlock(buffer, index, count);
	}
	readLine(): string {
		return this.reader.readLine();
	}
	readToEnd(): string {
		return this.reader.readToEnd();
	}
	read(): number {
		return this.reader.read();
	}
	read1(buffer: string[], index: number, count: number): number {
		return this.reader.read1(buffer, index, count);
	}
}


(function(v) { callStaticConstructors(); })(true);
