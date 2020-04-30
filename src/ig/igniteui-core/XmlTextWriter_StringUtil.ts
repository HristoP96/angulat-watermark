// From https://github.com/mosa/Mono-Class-Libraries/blob/28840dee90750d61ed6cbdb753292cd64cac169e/mcs/class/System.XML/System.Xml/XmlTextWriter2.cs
//
// XmlTextWriter.cs
//
// Author:
//	Atsushi Enomoto  <atsushi@ximian.com>
//
// Copyright (C) 2006 Novell, Inc.

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
import { CompareInfo, CultureInfo } from "./culture";
import { stringFormat2 } from "./stringExtended";

/**
 * @hidden 
 */
export class XmlTextWriter_StringUtil extends Base {
	static $t: Type = markType(XmlTextWriter_StringUtil, 'XmlTextWriter_StringUtil');
	private static cul: CultureInfo = CultureInfo.invariantCulture;
	private static cmp: CompareInfo = CultureInfo.invariantCulture.compareInfo;
	static indexOf(src: string, target: string): number {
		return XmlTextWriter_StringUtil.cmp.indexOf1(src, target);
	}
	static compare(s1: string, s2: string): number {
		return XmlTextWriter_StringUtil.cmp.compare4(s1, s2);
	}
	static format(format: string, ...args: any[]): string {
		return stringFormat2(XmlTextWriter_StringUtil.cul, format, ...args);
	}
}


