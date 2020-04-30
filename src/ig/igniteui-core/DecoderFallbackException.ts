//
// DecoderFallbackException.cs
//
// Author:
//	Atsushi Enomoto <atsushi@ximian.com>
//

//
// Copyright (C) 2005 Novell, Inc (http://www.novell.com)
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
import { ArgumentException } from "./ArgumentException";
import { BaseError, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DecoderFallbackException extends ArgumentException {
	static $t: Type = markType(DecoderFallbackException, 'DecoderFallbackException', (<any>ArgumentException).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, message: string);
	constructor(initNumber: number, message: string, innerException: BaseError);
	constructor(initNumber: number, message: string, bytesUnknown: number[], index: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ null ];
				{
					let message: string = <string>$outerArgs[0];
					super(1, message);
					this.bytes_unknown = null;
					this._index = -1;
				}
			}
			break;

			case 1:
			{
				let message: string = <string>_rest[0];
				super(1, message);
				this.bytes_unknown = null;
				this._index = -1;
			}
			break;

			case 2:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				super(3, message, innerException);
				this.bytes_unknown = null;
				this._index = -1;
			}
			break;

			case 3:
			{
				let message: string = <string>_rest[0];
				let bytesUnknown: number[] = <number[]>_rest[1];
				let index: number = <number>_rest[2];
				super(1, message);
				this.bytes_unknown = null;
				this._index = -1;
				this.bytes_unknown = bytesUnknown;
				this._index = index;
			}
			break;

		}

	}
	private bytes_unknown: number[];
	private _index: number;
	get bytesUnknown(): number[] {
		return this.bytes_unknown;
	}
	get index(): number {
		return this._index;
	}
}


