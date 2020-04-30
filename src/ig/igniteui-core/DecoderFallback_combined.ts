//
// DecoderReplacementFallbackBuffer.cs
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
import { Base, callStaticConstructors, Type, markType, typeCast } from "./type";
import { DecoderFallbackBuffer } from "./DecoderFallbackBuffer";
import { DecoderExceptionFallbackBuffer } from "./DecoderExceptionFallbackBuffer";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { charMinValue } from "./string";

/**
 * @hidden 
 */
export abstract class DecoderFallback extends Base {
	static $t: Type = markType(DecoderFallback, 'DecoderFallback');
	private static exception_fallback: DecoderFallback = null;
	private static replacement_fallback: DecoderFallback = null;
	private static standard_safe_fallback: DecoderFallback = null;
	static staticInit(): void {
		DecoderFallback.exception_fallback = new DecoderExceptionFallback();
		DecoderFallback.replacement_fallback = new DecoderReplacementFallback(0);
		DecoderFallback.standard_safe_fallback = new DecoderReplacementFallback(1, "�");
	}
	constructor() {
		super();
	}
	static get exceptionFallback(): DecoderFallback {
		return DecoderFallback.exception_fallback;
	}
	abstract get maxCharCount(): number;
	static get replacementFallback(): DecoderFallback {
		return DecoderFallback.replacement_fallback;
	}
	static get standardSafeFallback(): DecoderFallback {
		return DecoderFallback.standard_safe_fallback;
	}
	abstract createFallbackBuffer(): DecoderFallbackBuffer;
}

/**
 * @hidden 
 */
export class DecoderExceptionFallback extends DecoderFallback {
	static $t: Type = markType(DecoderExceptionFallback, 'DecoderExceptionFallback', (<any>DecoderFallback).$type);
	constructor() {
		super();
	}
	protected get_maxCharCount(): number {
		return 0;
	}
	get maxCharCount(): number {
		return this.get_maxCharCount();
	}
	createFallbackBuffer(): DecoderFallbackBuffer {
		return new DecoderExceptionFallbackBuffer();
	}
	equals(value: any): boolean {
		return (typeCast<DecoderExceptionFallback>((<any>DecoderExceptionFallback).$type, value) !== null);
	}
	getHashCode(): number {
		return 0;
	}
}

/**
 * @hidden 
 */
export class DecoderReplacementFallback extends DecoderFallback {
	static $t: Type = markType(DecoderReplacementFallback, 'DecoderReplacementFallback', (<any>DecoderFallback).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, replacement: string);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let $outerArgs = <any[]>[ "?" ];
				{
					let replacement: string = <string>$outerArgs[0];
					super();
					this.replacement = null;
					if (replacement == null) {
						throw new ArgumentNullException(0, "replacement");
					}
					this.replacement = replacement;
				}
			}
			break;

			case 1:
			{
				let replacement: string = <string>_rest[0];
				super();
				this.replacement = null;
				if (replacement == null) {
					throw new ArgumentNullException(0, "replacement");
				}
				this.replacement = replacement;
			}
			break;

		}

	}
	private replacement: string;
	get defaultString(): string {
		return this.replacement;
	}
	protected get_maxCharCount(): number {
		return this.replacement.length;
	}
	get maxCharCount(): number {
		return this.get_maxCharCount();
	}
	createFallbackBuffer(): DecoderFallbackBuffer {
		return new DecoderReplacementFallbackBuffer(this);
	}
	equals(value: any): boolean {
		let f: DecoderReplacementFallback = typeCast<DecoderReplacementFallback>((<any>DecoderReplacementFallback).$type, value);
		return f != null && this.replacement == f.replacement;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.replacement);
	}
}

/**
 * @hidden 
 */
export class DecoderReplacementFallbackBuffer extends DecoderFallbackBuffer {
	static $t: Type = markType(DecoderReplacementFallbackBuffer, 'DecoderReplacementFallbackBuffer', (<any>DecoderFallbackBuffer).$type);
	private fallback_assigned: boolean = false;
	private current: number = 0;
	private replacement: string = null;
	constructor(fallback: DecoderReplacementFallback) {
		super();
		if (fallback == null) {
			throw new ArgumentNullException(0, "fallback");
		}
		this.replacement = fallback.defaultString;
		this.current = 0;
	}
	protected get_remaining(): number {
		return this.fallback_assigned ? this.replacement.length - this.current : 0;
	}
	get remaining(): number {
		return this.get_remaining();
	}
	fallback(bytesUnknown: number[], index: number): boolean {
		if (bytesUnknown == null) {
			throw new ArgumentNullException(0, "bytesUnknown");
		}
		if (this.fallback_assigned && this.remaining != 0) {
			throw new ArgumentException(1, "Reentrant Fallback method invocation occured. It might be because either this FallbackBuffer is incorrectly shared by multiple threads, invoked inside Encoding recursively, or Reset invocation is forgotten.");
		}
		if (index < 0 || bytesUnknown.length < index) {
			throw new ArgumentOutOfRangeException(1, "index");
		}
		this.fallback_assigned = true;
		this.current = 0;
		return this.replacement.length > 0;
	}
	getNextChar(): string {
		if (!this.fallback_assigned) {
			return '\0';
		}
		if (this.current >= this.replacement.length) {
			return charMinValue();
		}
		return this.replacement.charAt(this.current++);
	}
	movePrevious(): boolean {
		if (this.current == 0) {
			return false;
		}
		this.current--;
		return true;
	}
	reset(): void {
		this.fallback_assigned = false;
		this.current = 0;
	}
}


(function(v) { callStaticConstructors(); })(true);
