//
// System.IO.StreamWriter.cs
//
// Authors:
//   Dietmar Maurer (dietmar@ximian.com)
//   Paolo Molaro (lupus@ximian.com)
//
// (C) Ximian, Inc.  http://www.ximian.com
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
import { Stream, SeekOrigin, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class NullStream extends Stream {
	static $t: Type = markType(NullStream, 'NullStream', (<any>Stream).$type);
	protected get_canRead(): boolean {
		return true;
	}
	get canRead(): boolean {
		return this.get_canRead();
	}
	protected get_canSeek(): boolean {
		return true;
	}
	get canSeek(): boolean {
		return this.get_canSeek();
	}
	protected get_canWrite(): boolean {
		return true;
	}
	get canWrite(): boolean {
		return this.get_canWrite();
	}
	protected get_length(): number {
		return 0;
	}
	get length(): number {
		return this.get_length();
	}
	protected get_position(): number {
		return 0;
	}
	protected set_position(value: number): void {
	}
	get position(): number {
		return this.get_position();
	}
	set position(value: number) {
		this.set_position(value);
	}
	flush(): void {
	}
	read(buffer: number[], offset: number, count: number): number {
		return 0;
	}
	readByte(): number {
		return -1;
	}
	seek(offset: number, origin: SeekOrigin): number {
		return 0;
	}
	setLength(value: number): void {
	}
	write(buffer: number[], offset: number, count: number): void {
	}
	writeByte(value: number): void {
	}
}


