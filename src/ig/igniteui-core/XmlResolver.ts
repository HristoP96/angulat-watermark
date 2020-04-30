//
// System.Xml.XmlResolver.cs
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
// Copyright (C) 2004,2009 Novell, Inc (http://www.novell.com)
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
import { ICredentials } from "./ICredentials";
import { Uri } from "./Uri";
import { ArgumentNullException } from "./ArgumentNullException";
import { InvalidOperationException } from "./InvalidOperationException";
import { stringStartsWith, stringReplace } from "./string";

/**
 * @hidden 
 */
export abstract class XmlResolver extends Base {
	static $t: Type = markType(XmlResolver, 'XmlResolver');
	abstract set credentials(value: ICredentials);
	abstract getEntity(absoluteUri: Uri, role: string, type: Type): any;
	resolveUri(baseUri: Uri, relativeUri: string): Uri {
		if (baseUri == null) {
			if (relativeUri == null) {
				throw new ArgumentNullException(0, "Either baseUri or relativeUri are required.");
			}
			if (stringStartsWith(relativeUri, "http:") || stringStartsWith(relativeUri, "https:") || stringStartsWith(relativeUri, "ftp:") || stringStartsWith(relativeUri, "file:")) {
				return new Uri(0, relativeUri);
			}
			throw new InvalidOperationException(1, relativeUri + " not supported");
		}
		if (relativeUri == null) {
			return baseUri;
		}
		return new Uri(3, baseUri, this.escapeRelativeUriBody(relativeUri));
	}
	private escapeRelativeUriBody(src: string): string {
		return stringReplace(stringReplace(stringReplace(stringReplace(stringReplace(src, "<", "%3C"), ">", "%3E"), "#", "%23"), "%", "%25"), "\"", "%22");
	}
}


