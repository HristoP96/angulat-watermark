//
// System.Xml.NameTable.cs
//
// Authors:
//	Duncan Mak (duncan@ximian.com)
//	Ben Maurer (bmaurer@users.sourceforge.net)
//
// (C) Ximian, Inc.
// (C) 2003 Ben Maurer
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
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class NameTable_Entry extends Base {
	static $t: Type = markType(NameTable_Entry, 'NameTable_Entry');
	str: string = null;
	hash: number = 0;
	len: number = 0;
	next: NameTable_Entry = null;
	constructor(str: string, hash: number, next: NameTable_Entry) {
		super();
		this.str = str;
		this.len = str.length;
		this.hash = hash;
		this.next = next;
	}
}


