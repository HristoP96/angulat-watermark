//
// DecoderExceptionFallbackBuffer.cs
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
import { DecoderFallbackBuffer } from "./DecoderFallbackBuffer";
import { DecoderFallbackException } from "./DecoderFallbackException";
import { Base, Type, markType } from "./type";
import { charMinValue } from "./string";

/**
 * @hidden 
 */
export class DecoderExceptionFallbackBuffer extends DecoderFallbackBuffer {
	static $t: Type = markType(DecoderExceptionFallbackBuffer, 'DecoderExceptionFallbackBuffer', (<any>DecoderFallbackBuffer).$type);
	constructor() {
		super();
	}
	protected get_remaining(): number {
		return 0;
	}
	get remaining(): number {
		return this.get_remaining();
	}
	fallback(bytesUnknown: number[], index: number): boolean {
		throw new DecoderFallbackException(3, null, bytesUnknown, index);
	}
	getNextChar(): string {
		return charMinValue();
	}
	movePrevious(): boolean {
		return false;
	}
}


