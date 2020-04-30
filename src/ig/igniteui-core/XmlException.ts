//
// XmlException.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2004-2005 Novell, Inc (http://www.novell.com)
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
import { IXmlLineInfo } from "./IXmlLineInfo";

/**
 * @hidden 
 */
export class XmlException extends BaseError {
	static $t: Type = markType(XmlException, 'XmlException', (<any>BaseError).$type);
	private _lineNumber: number;
	private _linePosition: number;
	private sourceUri: string;
	private res: string;
	private messages: string[];
	private static readonly xml_DefaultException: string = "Xml_DefaultException";
	private static readonly xml_UserException: string = "Xml_UserException";
	constructor(initNumber: number);
	constructor(initNumber: number, message: string, innerException: BaseError);
	constructor(initNumber: number, lineInfo: IXmlLineInfo, baseUri: string, message: string);
	constructor(initNumber: number, message: string);
	constructor(initNumber: number, message: string, innerException: BaseError, lineNumber: number, linePosition: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(0);
				this._lineNumber = 0;
				this._linePosition = 0;
				this.sourceUri = null;
				this.res = null;
				this.messages = null;
				this.res = XmlException.xml_DefaultException;
				this.messages = <string[]>new Array(1);
			}
			break;

			case 1:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				super(2, message, innerException);
				this._lineNumber = 0;
				this._linePosition = 0;
				this.sourceUri = null;
				this.res = null;
				this.messages = null;
				this.res = XmlException.xml_UserException;
				this.messages = <string[]>[ message ];
			}
			break;

			case 2:
			{
				let lineInfo: IXmlLineInfo = <IXmlLineInfo>_rest[0];
				let baseUri: string = <string>_rest[1];
				let message: string = <string>_rest[2];
				super(0);
				this._lineNumber = 0;
				this._linePosition = 0;
				this.sourceUri = null;
				this.res = null;
				this.messages = null;
			}
			break;

			case 3:
			{
				let message: string = <string>_rest[0];
				super(1, message);
				this._lineNumber = 0;
				this._linePosition = 0;
				this.sourceUri = null;
				this.res = null;
				this.messages = null;
				this.res = XmlException.xml_UserException;
				this.messages = <string[]>[ message ];
			}
			break;

			case 4:
			{
				let message: string = <string>_rest[0];
				let innerException: BaseError = <BaseError>_rest[1];
				let lineNumber: number = <number>_rest[2];
				let linePosition: number = <number>_rest[3];
				let $outerArgs = <any[]>[ message, innerException ];
				{
					let message: string = <string>$outerArgs[0];
					let innerException: BaseError = <BaseError>$outerArgs[1];
					super(2, message, innerException);
					this._lineNumber = 0;
					this._linePosition = 0;
					this.sourceUri = null;
					this.res = null;
					this.messages = null;
					this.res = XmlException.xml_UserException;
					this.messages = <string[]>[ message ];
				}
				this._lineNumber = lineNumber;
				this._linePosition = linePosition;
			}
			break;

		}

	}
	get lineNumber(): number {
		return this._lineNumber;
	}
	get linePosition(): number {
		return this._linePosition;
	}
}


