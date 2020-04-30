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
import { NonBlockingStreamReader } from "./NonBlockingStreamReader";
import { XmlInputStream } from "./XmlInputStream";
import { Encoding } from "./Encoding";
import { Stream, BaseError, Base, Type, markType } from "./type";
import { XmlException } from "./XmlException";
import { TextReader } from "./TextReader";

/**
 * @hidden 
 */
export class XmlStreamReader extends NonBlockingStreamReader {
	static $t: Type = markType(XmlStreamReader, 'XmlStreamReader', (<any>NonBlockingStreamReader).$type);
	private input: XmlInputStream;
	constructor(initNumber: number, input: XmlInputStream);
	constructor(initNumber: number, input: Stream);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let input: XmlInputStream = <XmlInputStream>_rest[0];
				super(input, input.actualEncoding != null ? input.actualEncoding : XmlInputStream.strictUTF8);
				this.input = null;
				this.input = input;
			}
			break;

			case 1:
			{
				let input: Stream = <Stream>_rest[0];
				let $outerArgs = <any[]>[ new XmlInputStream(input) ];
				{
					let input: XmlInputStream = <XmlInputStream>$outerArgs[0];
					super(input, input.actualEncoding != null ? input.actualEncoding : XmlInputStream.strictUTF8);
					this.input = null;
					this.input = input;
				}
			}
			break;

		}

	}
	private static invalidDataException: XmlException = new XmlException(3, "invalid data.");
	close(): void {
		this.input.close();
	}
	read1(dest_buffer: string[], index: number, count: number): number {
		try {
			return super.read1(dest_buffer, index, count);
		}
		catch (e) {
			throw new XmlException(3, "invalid data.");
		}
	}
	protected dispose1(disposing: boolean): void {
		super.dispose1(disposing);
		if (disposing) {
			this.close();
		}
	}
}


