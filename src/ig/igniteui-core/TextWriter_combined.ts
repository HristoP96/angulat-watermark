//
// System.IO.TextWriter.cs
//
// Authors:
//   Marcin Szczepanski (marcins@zipworld.com.au)
//   Miguel de Icaza (miguel@gnome.org)
//   Paolo Molaro (lupus@ximian.com)
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
import { MarshalByRefObject } from "./MarshalByRefObject";
import { IDisposable, IDisposable_$type, IFormatProvider, IFormatProvider_$type, Base, callStaticConstructors, typeCast, Type, markType } from "./type";
import { Encoding } from "./Encoding";
import { Environment } from "./Environment";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { stringToCharArray, stringCreateFromCharArray } from "./string";
import { numberToString, intToString } from "./numberExtended";
import { stringFormat, stringFormat1 } from "./stringExtended";

/**
 * @hidden 
 */
export abstract class TextWriter extends MarshalByRefObject implements IDisposable {
	static $t: Type = markType(TextWriter, 'TextWriter', (<any>MarshalByRefObject).$type, [IDisposable_$type]);
	static staticInit(): void {
		TextWriter.$null = new TextWriter_NullTextWriter();
	}
	constructor(initNumber: number);
	constructor(initNumber: number, formatProvider: IFormatProvider);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.coreNewLine = stringToCharArray(Environment.newLine);
			}
			break;

			case 1:
			{
				let formatProvider: IFormatProvider = <IFormatProvider>_rest[0];
				this.coreNewLine = stringToCharArray(Environment.newLine);
				this.internalFormatProvider = formatProvider;
			}
			break;

		}

	}
	protected coreNewLine: string[] = null;
	internalFormatProvider: IFormatProvider = null;
	static $null: TextWriter = null;
	abstract get encoding(): Encoding;
	protected get_formatProvider(): IFormatProvider {
		return this.internalFormatProvider;
	}
	get formatProvider(): IFormatProvider {
		return this.get_formatProvider();
	}
	protected get_newLine(): string {
		return stringCreateFromCharArray(this.coreNewLine);
	}
	protected set_newLine(value: string): void {
		if (value == null) {
			value = Environment.newLine;
		}
		this.coreNewLine = stringToCharArray(value);
	}
	get newLine(): string {
		return this.get_newLine();
	}
	set newLine(value: string) {
		this.set_newLine(value);
	}
	close(): void {
		this.dispose1(true);
	}
	protected dispose1(disposing: boolean): void {
		if (disposing) {
		}
	}
	dispose(): void {
		this.dispose1(true);
	}
	flush(): void {
	}
	static synched(writer: TextWriter): TextWriter {
		return TextWriter.synched_1(writer, false);
	}
	static synched_1(writer: TextWriter, neverClose: boolean): TextWriter {
		if (writer == null) {
			throw new ArgumentNullException(0, "writer is null");
		}
		if (typeCast<SynchronizedWriter>((<any>SynchronizedWriter).$type, writer) !== null) {
			return writer;
		}
		return new SynchronizedWriter(1, writer, neverClose);
	}
	write2(value: boolean): void {
		this.write10(value.toString());
	}
	write3(value: string): void {
	}
	write(buffer: string[]): void {
		if (buffer == null) {
			return;
		}
		this.write1(buffer, 0, buffer.length);
	}
	write4(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write5(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write6(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write7(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write8(value: any): void {
		if (value != null) {
			this.write10(value.toString());
		}
	}
	write9(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write10(value: string): void {
		if (value != null) {
			this.write(stringToCharArray(value));
		}
	}
	write15(value: number): void {
		this.write10(intToString(value, this.internalFormatProvider));
	}
	write16(value: number): void {
		this.write10(numberToString(value, this.internalFormatProvider));
	}
	write12(format: string, arg0: any): void {
		this.write10(stringFormat(format, arg0));
	}
	write11(format: string, ...arg: any[]): void {
		this.write10(stringFormat1(format, ...arg));
	}
	write1(buffer: string[], index: number, count: number): void {
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (index < 0 || index > buffer.length) {
			throw new ArgumentOutOfRangeException(1, "index");
		}
		if (count < 0 || (index > buffer.length - count)) {
			throw new ArgumentOutOfRangeException(1, "count");
		}
		for (; count > 0; --count , ++index) {
			this.write3(buffer[index]);
		}
	}
	write13(format: string, arg0: any, arg1: any): void {
		this.write10(stringFormat(format, arg0, arg1));
	}
	write14(format: string, arg0: any, arg1: any, arg2: any): void {
		this.write10(stringFormat(format, arg0, arg1, arg2));
	}
	writeLine(): void {
		this.write(this.coreNewLine);
	}
	writeLine3(value: boolean): void {
		this.write2(value);
		this.writeLine();
	}
	writeLine4(value: string): void {
		this.write3(value);
		this.writeLine();
	}
	writeLine1(buffer: string[]): void {
		this.write(buffer);
		this.writeLine();
	}
	writeLine5(value: number): void {
		this.write4(value);
		this.writeLine();
	}
	writeLine6(value: number): void {
		this.write5(value);
		this.writeLine();
	}
	writeLine7(value: number): void {
		this.write6(value);
		this.writeLine();
	}
	writeLine8(value: number): void {
		this.write7(value);
		this.writeLine();
	}
	writeLine9(value: any): void {
		this.write8(value);
		this.writeLine();
	}
	writeLine10(value: number): void {
		this.write9(value);
		this.writeLine();
	}
	writeLine11(value: string): void {
		this.write10(value);
		this.writeLine();
	}
	writeLine16(value: number): void {
		this.write15(value);
		this.writeLine();
	}
	writeLine17(value: number): void {
		this.write16(value);
		this.writeLine();
	}
	writeLine13(format: string, arg0: any): void {
		this.write12(format, arg0);
		this.writeLine();
	}
	writeLine12(format: string, ...arg: any[]): void {
		this.write11(format, ...arg);
		this.writeLine();
	}
	writeLine2(buffer: string[], index: number, count: number): void {
		this.write1(buffer, index, count);
		this.writeLine();
	}
	writeLine14(format: string, arg0: any, arg1: any): void {
		this.write13(format, arg0, arg1);
		this.writeLine();
	}
	writeLine15(format: string, arg0: any, arg1: any, arg2: any): void {
		this.write14(format, arg0, arg1, arg2);
		this.writeLine();
	}
}

/**
 * @hidden 
 */
export class TextWriter_NullTextWriter extends TextWriter {
	static $t: Type = markType(TextWriter_NullTextWriter, 'TextWriter_NullTextWriter', (<any>TextWriter).$type);
	constructor() {
		super(0);
	}
	protected get_encoding(): Encoding {
		return Encoding.defaultValue;
	}
	get encoding(): Encoding {
		return this.get_encoding();
	}
	write10(s: string): void {
	}
	write3(value: string): void {
	}
	write1(value: string[], index: number, count: number): void {
	}
}

/**
 * @hidden 
 */
export class SynchronizedWriter extends TextWriter {
	static $t: Type = markType(SynchronizedWriter, 'SynchronizedWriter', (<any>TextWriter).$type);
	private writer: TextWriter;
	private neverClose: boolean;
	constructor(initNumber: number, writer: TextWriter);
	constructor(initNumber: number, writer: TextWriter, neverClose: boolean);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let writer: TextWriter = <TextWriter>_rest[0];
				let $outerArgs = <any[]>[ writer, false ];
				{
					let writer: TextWriter = <TextWriter>$outerArgs[0];
					let neverClose: boolean = <boolean>$outerArgs[1];
					super(0);
					this.writer = null;
					this.neverClose = false;
					this.writer = writer;
					this.neverClose = neverClose;
				}
			}
			break;

			case 1:
			{
				let writer: TextWriter = <TextWriter>_rest[0];
				let neverClose: boolean = <boolean>_rest[1];
				super(0);
				this.writer = null;
				this.neverClose = false;
				this.writer = writer;
				this.neverClose = neverClose;
			}
			break;

		}

	}
	close(): void {
		if (this.neverClose) {
			return;
		}
		this.writer.close();
	}
	flush(): void {
		this.writer.flush();
	}
	write2(value: boolean): void {
		this.writer.write2(value);
	}
	write3(value: string): void {
		this.writer.write3(value);
	}
	write(value: string[]): void {
		this.writer.write(value);
	}
	write4(value: number): void {
		this.writer.write4(value);
	}
	write6(value: number): void {
		this.writer.write6(value);
	}
	write7(value: number): void {
		this.writer.write7(value);
	}
	write8(value: any): void {
		this.writer.write8(value);
	}
	write9(value: number): void {
		this.writer.write9(value);
	}
	write10(value: string): void {
		this.writer.write10(value);
	}
	write15(value: number): void {
		this.writer.write15(value);
	}
	write16(value: number): void {
		this.writer.write16(value);
	}
	write12(format: string, value: any): void {
		this.writer.write12(format, value);
	}
	write11(format: string, ...value: any[]): void {
		this.writer.write11(format, ...value);
	}
	write1(buffer: string[], index: number, count: number): void {
		this.writer.write1(buffer, index, count);
	}
	write13(format: string, arg0: any, arg1: any): void {
		this.writer.write13(format, arg0, arg1);
	}
	write14(format: string, arg0: any, arg1: any, arg2: any): void {
		this.writer.write14(format, arg0, arg1, arg2);
	}
	writeLine(): void {
		this.writer.writeLine();
	}
	writeLine3(value: boolean): void {
		this.writer.writeLine3(value);
	}
	writeLine4(value: string): void {
		this.writer.writeLine4(value);
	}
	writeLine1(value: string[]): void {
		this.writer.writeLine1(value);
	}
	writeLine5(value: number): void {
		this.writer.writeLine5(value);
	}
	writeLine6(value: number): void {
		this.writer.writeLine6(value);
	}
	writeLine7(value: number): void {
		this.writer.writeLine7(value);
	}
	writeLine8(value: number): void {
		this.writer.writeLine8(value);
	}
	writeLine9(value: any): void {
		this.writer.writeLine9(value);
	}
	writeLine10(value: number): void {
		this.writer.writeLine10(value);
	}
	writeLine11(value: string): void {
		this.writer.writeLine11(value);
	}
	writeLine16(value: number): void {
		this.writer.writeLine16(value);
	}
	writeLine17(value: number): void {
		this.writer.writeLine17(value);
	}
	writeLine13(format: string, value: any): void {
		this.writer.writeLine13(format, value);
	}
	writeLine12(format: string, ...value: any[]): void {
		this.writer.writeLine12(format, ...value);
	}
	writeLine2(buffer: string[], index: number, count: number): void {
		this.writer.writeLine2(buffer, index, count);
	}
	writeLine14(format: string, arg0: any, arg1: any): void {
		this.writer.writeLine14(format, arg0, arg1);
	}
	writeLine15(format: string, arg0: any, arg1: any, arg2: any): void {
		this.writer.writeLine15(format, arg0, arg1, arg2);
	}
	protected get_encoding(): Encoding {
		return this.writer.encoding;
	}
	get encoding(): Encoding {
		return this.get_encoding();
	}
	protected get_formatProvider(): IFormatProvider {
		return this.writer.formatProvider;
	}
	protected get_newLine(): string {
		return this.writer.newLine;
	}
	protected set_newLine(value: string): void {
		this.writer.newLine = value;
	}
}


(function(v) { callStaticConstructors(); })(true);
