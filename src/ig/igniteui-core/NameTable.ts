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
import { XmlNameTable } from "./XmlNameTable";
import { NameTable_Entry } from "./NameTable_Entry";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentNullException } from "./ArgumentNullException";
import { Base, Type, markType } from "./type";
import { stringEmpty, stringCreateFromCharArraySlice } from "./string";

/**
 * @hidden 
 */
export class NameTable extends XmlNameTable {
	static $t: Type = markType(NameTable, 'NameTable', (<any>XmlNameTable).$type);
	private static readonly iNITIAL_BUCKETS: number = 2 << 6;
	private count: number = NameTable.iNITIAL_BUCKETS;
	private buckets: NameTable_Entry[] = <NameTable_Entry[]>new Array(NameTable.iNITIAL_BUCKETS);
	private size: number = 0;
	constructor() {
		super();
	}
	add(key: string[], start: number, len: number): string {
		if (((0 > start) && (start >= key.length)) || ((0 > len) && (len >= key.length - len))) {
			throw new IndexOutOfRangeException(1, "The Index is out of range.");
		}
		if (len == 0) {
			return stringEmpty();
		}
		let h: number = 0;
		let end: number = start + len;
		for (let i: number = start; i < end; i++) {
			h = (h << 5) - h + key[i].charCodeAt(0);
		}
		h &= 2147483647;
		for (let e: NameTable_Entry = this.buckets[h % this.count]; e != null; e = e.next) {
			if (e.hash == h && e.len == len && NameTable.strEqArray(e.str, key, start)) {
				return e.str;
			}
		}
		return this.addEntry(stringCreateFromCharArraySlice(key, start, len), h);
	}
	add1(key: string): string {
		if (key == null) {
			throw new ArgumentNullException(0, "key");
		}
		let keyLen: number = key.length;
		if (keyLen == 0) {
			return stringEmpty();
		}
		let h: number = 0;
		for (let i: number = 0; i < keyLen; i++) {
			h = (h << 5) - h + key.charAt(i).charCodeAt(0);
		}
		h &= 2147483647;
		for (let e: NameTable_Entry = this.buckets[h % this.count]; e != null; e = e.next) {
			if (e.hash == h && e.len == key.length && e.str == key) {
				return e.str;
			}
		}
		return this.addEntry(key, h);
	}
	get(key: string[], start: number, len: number): string {
		if (((0 > start) && (start >= key.length)) || ((0 > len) && (len >= key.length - len))) {
			throw new IndexOutOfRangeException(1, "The Index is out of range.");
		}
		if (len == 0) {
			return stringEmpty();
		}
		let h: number = 0;
		let end: number = start + len;
		for (let i: number = start; i < end; i++) {
			h = (h << 5) - h + key[i].charCodeAt(0);
		}
		h &= 2147483647;
		for (let e: NameTable_Entry = this.buckets[h % this.count]; e != null; e = e.next) {
			if (e.hash == h && e.len == len && NameTable.strEqArray(e.str, key, start)) {
				return e.str;
			}
		}
		return null;
	}
	get1(value: string): string {
		if (value == null) {
			throw new ArgumentNullException(0, "value");
		}
		let valLen: number = value.length;
		if (valLen == 0) {
			return stringEmpty();
		}
		let h: number = 0;
		for (let i: number = 0; i < valLen; i++) {
			h = (h << 5) - h + value.charAt(i).charCodeAt(0);
		}
		h &= 2147483647;
		for (let e: NameTable_Entry = this.buckets[h % this.count]; e != null; e = e.next) {
			if (e.hash == h && e.len == value.length && e.str == value) {
				return e.str;
			}
		}
		return null;
	}
	private addEntry(str: string, hash: number): string {
		let bucket: number = hash % this.count;
		this.buckets[bucket] = new NameTable_Entry(str, hash, this.buckets[bucket]);
		if (this.size++ == this.count) {
			this.count <<= 1;
			let csub1: number = this.count - 1;
			let newBuckets: NameTable_Entry[] = <NameTable_Entry[]>new Array(this.count);
			for (let i: number = 0; i < this.buckets.length; i++) {
				let root: NameTable_Entry = this.buckets[i];
				let e: NameTable_Entry = root;
				while (e != null) {
					let newLoc: number = e.hash & csub1;
					let n: NameTable_Entry = e.next;
					e.next = newBuckets[newLoc];
					newBuckets[newLoc] = e;
					e = n;
				}
			}
			this.buckets = newBuckets;
		}
		return str;
	}
	private static strEqArray(str: string, str2: string[], start: number): boolean {
		let i: number = str.length;
		i--;
		start += i;
		do {
			if (str.charAt(i) != str2[start]) {
				return false;
			}
			i--;
			start--;
		} while (i >= 0);
		return true;
	}
}


