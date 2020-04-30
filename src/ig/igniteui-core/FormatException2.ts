//
// System.FormatException.cs
//
// Authors:
//   Joe Shaw (joe@ximian.com)
//   Andreas Nahr (ClassDevelopment@A-SoftTech.com)
//
// (C) 2001 Ximian, Inc.  http://www.ximian.com
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
import { BaseError, Base, Type, markType } from "./type";
import { Locale } from "./Locale";

/**
 * @hidden 
 */
export class FormatException2 extends BaseError {
	static $t: Type = markType(FormatException2, 'FormatException2', (<any>BaseError).$type);
	private static readonly result: number = (<number>2148734263);
	constructor(initNumber: number);
	constructor(initNumber: number, message: string);
	constructor(initNumber: number, message: string, innerException: BaseError);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(1, Locale.getText("Invalid format."));
				this._hResult = 0;
				this.hResult = FormatException2.result;
			}
			break;

			case 1:
			{
				let message: string = <string>_rest[0];
				super(1, message);
				this._hResult = 0;
				this.hResult = FormatException2.result;
			}
			break;

			case 2:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				super(2, message, innerException);
				this._hResult = 0;
				this.hResult = FormatException2.result;
			}
			break;

		}

	}
	private _hResult: number;
	get hResult(): number {
		return this._hResult;
	}
	set hResult(value: number) {
		this._hResult = value;
	}
}


