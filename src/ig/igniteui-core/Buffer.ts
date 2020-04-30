//
// System.Buffer.cs
//
// Authors:
//   Paolo Molaro (lupus@ximian.com)
//   Dan Lewis (dihlewis@yahoo.co.uk)
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
import { Base, typeGetValue, Type, markType } from "./type";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";

/**
 * @hidden 
 */
export class Buffer extends Base {
	static $t: Type = markType(Buffer, 'Buffer');
	static byteLength(array: any[]): number {
		try {
		}
		catch (e) {
		}
		if (array == null) {
			throw new ArgumentNullException(0, "array");
		}
		let length: number = array.length;
		if (length < 0) {
			throw new ArgumentException(1, "Object must be an array of primitives.");
		}
		return length;
	}
	static getByte(array: any[], index: number): number {
		if (index < 0 || index >= Buffer.byteLength(array)) {
			throw new ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
		}
		return typeGetValue(array[index]);
	}
	static setByte(array: any[], index: number, value: number): void {
		if (index < 0 || index >= Buffer.byteLength(array)) {
			throw new ArgumentOutOfRangeException(2, "index", "Value must be non-negative and less than the size of the collection.");
		}
		array[index] = value;
	}
	static blockCopy(src: any[], srcOffset: number, dst: any[], dstOffset: number, count: number): void {
		let srcOffset_l: number = srcOffset;
		let dstOffset_l: number = dstOffset;
		if (src == null) {
			throw new ArgumentNullException(0, "src");
		}
		if (dst == null) {
			throw new ArgumentNullException(0, "dst");
		}
		if (srcOffset < 0) {
			throw new ArgumentOutOfRangeException(2, "srcOffset", "Non-negative number required.");
		}
		if (dstOffset < 0) {
			throw new ArgumentOutOfRangeException(2, "dstOffset", "Non-negative number required.");
		}
		if (count < 0) {
			throw new ArgumentOutOfRangeException(2, "count", "Non-negative number required.");
		}
		if ((srcOffset > Buffer.byteLength(src) - count) || (dstOffset > Buffer.byteLength(dst) - count)) {
			throw new ArgumentException(1, "Offset and length were out of bounds for the array or count is greater than " + "the number of elements from index to the end of the source collection.");
		}
		for (let i: number = 0; i < count; i++) {
			dst[dstOffset_l++] = src[srcOffset_l++];
		}
	}
}


