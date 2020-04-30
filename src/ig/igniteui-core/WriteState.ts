// -*- Mode: C; tab-width: 8; indent-tabs-mode: t; c-basic-offset: 8 -*-
//
// System.Xml.WriteState
//
// Author:
//   Daniel Weber (daniel-weber@austin.rr.com)
//
// (C) 2001 Daniel Weber

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
import { Enum, ValueType, markEnum, Type } from "./type";

/**
 */
export enum WriteState {
	/**
	 * A write method has not been called.
	 */
	Start = 0,
	/**
	 * The prolog is being written.
	 */
	Prolog = 1,
	/**
	 * An element start tag is being written.
	 */
	Element = 2,
	/**
	 * An attribute is being written.
	 */
	Attribute = 3,
	/**
	 * Element content is being written.
	 */
	Content = 4,
	/**
	 * The close method has been called.
	 */
	Closed = 5
}

/**
 * @hidden 
 */
export let WriteState_$type = markEnum('WriteState', 'Start,0|Prolog,1|Element,2|Attribute,3|Content,4|Closed,5');


