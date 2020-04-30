//------------------------------------------------------------------------------
// 
// System.IO.Path.cs 
//
// Copyright (C) 2001 Moonlight Enterprises, All Rights Reserved
// Copyright (C) 2002 Ximian, Inc. (http://www.ximian.com)
// Copyright (C) 2003 Ben Maurer
// 
// Author:         Jim Richardson, develop@wtfo-guru.com
//                 Dan Lewis (dihlewis@yahoo.co.uk)
//                 Gonzalo Paniagua Javier (gonzalo@ximian.com)
//                 Ben Maurer (bmaurer@users.sourceforge.net)
//                 Sebastien Pouliot  <sebastien@ximian.com>
// Created:        Saturday, August 11, 2001 
//
//------------------------------------------------------------------------------

//
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
import { Base, Type, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { stringEmpty } from "./string";
import { lastIndexOfAny } from "./stringExtended";

/**
 * @hidden 
 */
export class IOPath extends Base {
	static $t: Type = markType(IOPath, 'IOPath');
	static readonly altDirectorySeparatorChar: string = '/';
	static readonly directorySeparatorChar: string = '\\';
	static readonly pathSeparator: string = ';';
	static readonly volumeSeparatorChar: string = ':';
	static getExtension(path: string): string {
		let dotIndex = path.lastIndexOf('.');
		if (dotIndex < 0) {
			return stringEmpty();
		}
		return path.substr(dotIndex);
	}
	static getDirectoryName(path: string): string {
		let separatorIndex = lastIndexOfAny(path, [ '\\', '/' ]);
		if (separatorIndex < 0) {
			return stringEmpty();
		}
		return path.substr(0, separatorIndex);
	}
	static getFileName(path: string): string {
		let separatorIndex = lastIndexOfAny(path, [ '\\', '/' ]);
		if (separatorIndex < 0) {
			return path;
		}
		return path.substr(separatorIndex + 1);
	}
	static combine1(path1: string, path2: string): string {
		if (path1 == null || path1.length == 0) {
			return path2;
		}
		if (path2 == null || path2.length == 0) {
			return path1;
		}
		if (path1.charAt(path1.length - 1) == '\\' || path1.charAt(path1.length - 1) == '/' || path2.charAt(0) == '\\' || path2.charAt(0) == '/') {
			return path1 + path2;
		}
		return path1 + '\\' + path2;
	}
	static isPathRooted(path: string): boolean {
		if (path == null) {
			return false;
		}
		if (path.length >= 1 && (path.charAt(0) == '/' || path.charAt(0) == '\\')) {
			return true;
		}
		if (path.length >= 2 && path.charAt(1) == ':') {
			return true;
		}
		return false;
	}
	static changeExtension(path: string, extension: string): string {
		throw new NotImplementedException(0);
	}
	static combine(...paths: string[]): string {
		throw new NotImplementedException(0);
	}
	static combine2(path1: string, path2: string, path3: string): string {
		throw new NotImplementedException(0);
	}
	static getFileNameWithoutExtension(path: string): string {
		throw new NotImplementedException(0);
	}
	static getFullPath(path: string): string {
		throw new NotImplementedException(0);
	}
	static getInvalidPathChars(): string[] {
		throw new NotImplementedException(0);
	}
	static getPathRoot(path: string): string {
		if (path == null) {
			return null;
		}
		return stringEmpty();
	}
	static getTempFileName(): string {
		throw new NotImplementedException(0);
	}
	static getTempPath(): string {
		throw new NotImplementedException(0);
	}
	static hasExtension(path: string): boolean {
		throw new NotImplementedException(0);
	}
}


