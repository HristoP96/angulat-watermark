//
// System.IO.StringWriter
//
// Authors
//	Marcin Szczepanski (marcins@zipworld.com.au)
//	Sebastien Pouliot  <sebastien@ximian.com>
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
import { TextWriter } from "./TextWriter";
import { Encoding } from "./Encoding";
import { StringBuilder } from "./StringBuilder";
import { IFormatProvider, IFormatProvider_$type, Base, Type, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { Locale } from "./Locale";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";

/**
 * @hidden 
 */
export class StringWriter extends TextWriter {
	static $t: Type = markType(StringWriter, 'StringWriter', (<any>TextWriter).$type);
	private internalString: StringBuilder;
	private disposed: boolean;
	constructor(initNumber: number);
	constructor(initNumber: number, formatProvider: IFormatProvider);
	constructor(initNumber: number, sb: StringBuilder);
	constructor(initNumber: number, sb: StringBuilder, formatProvider: IFormatProvider);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ new StringBuilder(0) ];
				{
					let sb: StringBuilder = <StringBuilder>$outerArgs[0];
					let $outerArgs1 = <any[]>[ sb, null ];
					{
						let sb: StringBuilder = <StringBuilder>$outerArgs1[0];
						let formatProvider: IFormatProvider = <IFormatProvider>$outerArgs1[1];
						super(0);
						this.internalString = null;
						this.disposed = false;
						if (sb == null) {
							throw new ArgumentNullException(0, "sb");
						}
						this.internalString = sb;
						this.internalFormatProvider = formatProvider;
					}
				}
			}
			break;

			case 1:
			{
				let formatProvider: IFormatProvider = <IFormatProvider>_rest[0];
				let $outerArgs = <any[]>[ new StringBuilder(0), formatProvider ];
				{
					let sb: StringBuilder = <StringBuilder>$outerArgs[0];
					let formatProvider: IFormatProvider = <IFormatProvider>$outerArgs[1];
					super(0);
					this.internalString = null;
					this.disposed = false;
					if (sb == null) {
						throw new ArgumentNullException(0, "sb");
					}
					this.internalString = sb;
					this.internalFormatProvider = formatProvider;
				}
			}
			break;

			case 2:
			{
				let sb: StringBuilder = <StringBuilder>_rest[0];
				let $outerArgs = <any[]>[ sb, null ];
				{
					let sb: StringBuilder = <StringBuilder>$outerArgs[0];
					let formatProvider: IFormatProvider = <IFormatProvider>$outerArgs[1];
					super(0);
					this.internalString = null;
					this.disposed = false;
					if (sb == null) {
						throw new ArgumentNullException(0, "sb");
					}
					this.internalString = sb;
					this.internalFormatProvider = formatProvider;
				}
			}
			break;

			case 3:
			{
				let sb: StringBuilder = <StringBuilder>_rest[0];
				let formatProvider: IFormatProvider = <IFormatProvider>_rest[1];
				super(0);
				this.internalString = null;
				this.disposed = false;
				if (sb == null) {
					throw new ArgumentNullException(0, "sb");
				}
				this.internalString = sb;
				this.internalFormatProvider = formatProvider;
			}
			break;

		}

	}
	protected get_encoding(): Encoding {
		return Encoding.unicode;
	}
	get encoding(): Encoding {
		return this.get_encoding();
	}
	close(): void {
		this.dispose1(true);
		this.disposed = true;
	}
	protected dispose1(disposing: boolean): void {
		super.dispose1(disposing);
		this.disposed = true;
	}
	getStringBuilder(): StringBuilder {
		return this.internalString;
	}
	toString(): string {
		return this.internalString.toString();
	}
	write3(value: string): void {
		if (this.disposed) {
			throw new ObjectDisposedException(1, "StringReader", Locale.getText("Cannot write to a closed StringWriter"));
		}
		this.internalString.append1(value);
	}
	write10(value: string): void {
		if (this.disposed) {
			throw new ObjectDisposedException(1, "StringReader", Locale.getText("Cannot write to a closed StringWriter"));
		}
		this.internalString.append5(value);
	}
	write1(buffer: string[], index: number, count: number): void {
		if (this.disposed) {
			throw new ObjectDisposedException(1, "StringReader", Locale.getText("Cannot write to a closed StringWriter"));
		}
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (index < 0) {
			throw new ArgumentOutOfRangeException(2, "index", "< 0");
		}
		if (count < 0) {
			throw new ArgumentOutOfRangeException(2, "count", "< 0");
		}
		if (index > buffer.length - count) {
			throw new ArgumentException(1, "index + count > buffer.Length");
		}
		this.internalString.append(buffer, index, count);
	}
}


