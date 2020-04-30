//
// XmlNamespaceManager.cs
//
// Authors:
//   Jason Diamond (jason@injektilo.org)
//   Ben Maurer (bmaurer@users.sourceforge.net)
//   Atsushi Enomoto (atsushi@ximian.com)
//
// (C) 2001 Jason Diamond  http://injektilo.org/
// (C) 2003 Ben Maurer
// (C) 2004 Novell Inc.
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
import { Base, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, IEnumerable$1, IEnumerable$1_$type, IDictionary, IDictionary_$type, Type, markType, getEnumerator } from "./type";
import { IXmlNamespaceResolver, IXmlNamespaceResolver_$type } from "./IXmlNamespaceResolver";
import { XmlNameTable } from "./XmlNameTable";
import { XmlNamespaceManager_NsDecl } from "./XmlNamespaceManager_NsDecl";
import { XmlNamespaceManager_NsScope } from "./XmlNamespaceManager_NsScope";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentException } from "./ArgumentException";
import { Hashtable } from "./Hashtable";
import { XmlNamespaceScope } from "./XmlNamespaceScope";
import { arrayCopy1 } from "./arrayExtended";
import { stringEmpty } from "./string";
import { stringFormat } from "./stringExtended";

/**
 * @hidden 
 */
export class XmlNamespaceManager extends Base implements IXmlNamespaceResolver, IEnumerable {
	static $t: Type = markType(XmlNamespaceManager, 'XmlNamespaceManager', (<any>Base).$type, [IXmlNamespaceResolver_$type, IEnumerable_$type]);
	private decls: XmlNamespaceManager_NsDecl[] = null;
	private declPos: number = -1;
	private scopes: XmlNamespaceManager_NsScope[] = null;
	private scopePos: number = -1;
	private _defaultNamespace: string = null;
	private count: number = 0;
	private initData(): void {
		this.decls = <XmlNamespaceManager_NsDecl[]>new Array(10);
		this.scopes = <XmlNamespaceManager_NsScope[]>new Array(40);
		for (let idx: number = 0; idx < this.decls.length; idx++) {
			this.decls[idx] = new XmlNamespaceManager_NsDecl();
		}
		for (let idx1: number = 0; idx1 < this.scopes.length; idx1++) {
			this.scopes[idx1] = new XmlNamespaceManager_NsScope();
		}
	}
	private growDecls(): void {
		let old: XmlNamespaceManager_NsDecl[] = this.decls;
		this.decls = <XmlNamespaceManager_NsDecl[]>new Array(this.declPos * 2 + 1);
		if (this.declPos > 0) {
			arrayCopy1(old, 0, this.decls, 0, this.declPos);
		}
		for (let idx: number = this.declPos; idx < this.decls.length; idx++) {
			this.decls[idx] = new XmlNamespaceManager_NsDecl();
		}
	}
	private growScopes(): void {
		let old: XmlNamespaceManager_NsScope[] = this.scopes;
		this.scopes = <XmlNamespaceManager_NsScope[]>new Array(this.scopePos * 2 + 1);
		if (this.scopePos > 0) {
			arrayCopy1(old, 0, this.scopes, 0, this.scopePos);
		}
		for (let idx: number = this.scopePos; idx < this.scopes.length; idx++) {
			this.scopes[idx] = new XmlNamespaceManager_NsScope();
		}
	}
	private _nameTable: XmlNameTable = null;
	static readonly xmlnsXml: string = "http://www.w3.org/XML/1998/namespace";
	static readonly xmlnsXmlns: string = "http://www.w3.org/2000/xmlns/";
	static readonly prefixXml: string = "xml";
	static readonly prefixXmlns: string = "xmlns";
	internalAtomizedNames: boolean = false;
	constructor(nameTable: XmlNameTable) {
		super();
		if (nameTable == null) {
			throw new ArgumentNullException(0, "nameTable");
		}
		this._nameTable = nameTable;
		nameTable.add1(XmlNamespaceManager.prefixXmlns);
		nameTable.add1(XmlNamespaceManager.prefixXml);
		nameTable.add1(stringEmpty());
		nameTable.add1(XmlNamespaceManager.xmlnsXmlns);
		nameTable.add1(XmlNamespaceManager.xmlnsXml);
		this.initData();
	}
	protected get_defaultNamespace(): string {
		return this._defaultNamespace == null ? stringEmpty() : this._defaultNamespace;
	}
	get defaultNamespace(): string {
		return this.get_defaultNamespace();
	}
	get nameTable(): XmlNameTable {
		return this._nameTable;
	}
	addNamespace(prefix: string, uri: string): void {
		this.addNamespace1(prefix, uri, false);
	}
	private addNamespace1(prefix: string, uri: string, atomizedNames: boolean): void {
		if (prefix == null) {
			throw new ArgumentNullException(0, "prefix Value cannot be null.");
		}
		if (uri == null) {
			throw new ArgumentNullException(0, "uri Value cannot be null.");
		}
		if (!atomizedNames) {
			prefix = this._nameTable.add1(prefix);
			uri = this._nameTable.add1(uri);
		}
		if (prefix == XmlNamespaceManager.prefixXml && uri == XmlNamespaceManager.xmlnsXml) {
			return;
		}
		XmlNamespaceManager.isValidDeclaration(prefix, uri, true);
		if (prefix.length == 0) {
			this._defaultNamespace = uri;
		}
		for (let i: number = this.declPos; i > this.declPos - this.count; i--) {
			if (Base.referenceEquals(this.decls[i].prefix, prefix)) {
				this.decls[i].uri = uri;
				return;
			}
		}
		this.declPos++;
		this.count++;
		if (this.declPos == this.decls.length) {
			this.growDecls();
		}
		this.decls[this.declPos].prefix = prefix;
		this.decls[this.declPos].uri = uri;
	}
	private static isValidDeclaration(prefix: string, uri: string, throwException: boolean): string {
		let message: string = null;
		if (prefix == XmlNamespaceManager.prefixXml && uri != XmlNamespaceManager.xmlnsXml) {
			message = stringFormat("Prefix \"xml\" can only be bound to the fixed namespace URI \"{0}\". \"{1}\" is invalid.", XmlNamespaceManager.xmlnsXml, uri);
		} else if (message == null && prefix == "xmlns") {
			message = "Declaring prefix named \"xmlns\" is not allowed to any namespace.";
		} else if (message == null && uri == XmlNamespaceManager.xmlnsXmlns) {
			message = stringFormat("Namespace URI \"{0}\" cannot be declared with any namespace.", XmlNamespaceManager.xmlnsXmlns);
		}
		if (message != null && throwException) {
			throw new ArgumentException(1, message);
		} else {
			return message;
		}
	}
	getEnumeratorObject(): IEnumerator {
		let ht: Hashtable = new Hashtable();
		for (let i: number = 0; i <= this.declPos; i++) {
			if (this.decls[i].prefix != stringEmpty() && this.decls[i].uri != null) {
				ht.item(this.decls[i].prefix, this.decls[i].uri);
			}
		}
		ht.item(stringEmpty(), this.defaultNamespace);
		ht.item(XmlNamespaceManager.prefixXml, XmlNamespaceManager.xmlnsXml);
		ht.item(XmlNamespaceManager.prefixXmlns, XmlNamespaceManager.xmlnsXmlns);
		return getEnumerator(ht.keys);
	}
	getNamespacesInScope(scope: XmlNamespaceScope): IDictionary {
		return this.getNamespacesInScopeImpl(scope);
	}
	getNamespacesInScopeImpl(scope: XmlNamespaceScope): IDictionary {
		let table: Hashtable = new Hashtable();
		if (scope == XmlNamespaceScope.Local) {
			for (let i: number = 0; i < this.count; i++) {
				if (this.decls[this.declPos - i].prefix == stringEmpty() && this.decls[this.declPos - i].uri == stringEmpty()) {
					if (table.contains(stringEmpty())) {
						table.remove(stringEmpty());
					}
				} else if (this.decls[this.declPos - i].uri != null) {
					table.add(this.decls[this.declPos - i].prefix, this.decls[this.declPos - i].uri);
				}
			}
			return table;
		} else {
			for (let i1: number = 0; i1 <= this.declPos; i1++) {
				if (this.decls[i1].prefix == stringEmpty() && this.decls[i1].uri == stringEmpty()) {
					if (table.contains(stringEmpty())) {
						table.remove(stringEmpty());
					}
				} else if (this.decls[i1].uri != null) {
					table.item(this.decls[i1].prefix, this.decls[i1].uri);
				}
			}
			if (scope == XmlNamespaceScope.All) {
				table.add("xml", XmlNamespaceManager.xmlnsXml);
			}
			return table;
		}
	}
	hasNamespace(prefix: string): boolean {
		return this.hasNamespace1(prefix, false);
	}
	private hasNamespace1(prefix: string, atomizedNames: boolean): boolean {
		if (prefix == null || this.count == 0) {
			return false;
		}
		for (let i: number = this.declPos; i > this.declPos - this.count; i--) {
			if (this.decls[i].prefix == prefix) {
				return true;
			}
		}
		return false;
	}
	lookupNamespace(prefix: string): string {
		switch (prefix) {
			case XmlNamespaceManager.prefixXmlns: return this._nameTable.get1(XmlNamespaceManager.xmlnsXmlns);
			case XmlNamespaceManager.prefixXml: return this._nameTable.get1(XmlNamespaceManager.xmlnsXml);
			case "": return this.defaultNamespace;
			case null: return null;
		}

		for (let i: number = this.declPos; i >= 0; i--) {
			if (this.compareString(this.decls[i].prefix, prefix, this.internalAtomizedNames) && this.decls[i].uri != null) {
				return this.decls[i].uri;
			}
		}
		return null;
	}
	lookupNamespace1(prefix: string, atomizedNames: boolean): string {
		this.internalAtomizedNames = atomizedNames;
		let ret: string = this.lookupNamespace(prefix);
		this.internalAtomizedNames = false;
		return ret;
	}
	lookupPrefix(uri: string): string {
		return this.lookupPrefix1(uri, true);
	}
	private compareString(s1: string, s2: string, atomizedNames: boolean): boolean {
		if (atomizedNames) {
			return Base.referenceEquals(s1, s2);
		} else {
			return s1 == s2;
		}
	}
	lookupPrefix1(uri: string, atomizedName: boolean): string {
		return this.lookupPrefixCore(uri, atomizedName, false);
	}
	lookupPrefixExclusive(uri: string, atomizedName: boolean): string {
		return this.lookupPrefixCore(uri, atomizedName, true);
	}
	private lookupPrefixCore(uri: string, atomizedName: boolean, excludeOverriden: boolean): string {
		if (uri == null) {
			return null;
		}
		if (this.compareString(uri, this.defaultNamespace, atomizedName)) {
			return stringEmpty();
		}
		if (this.compareString(uri, XmlNamespaceManager.xmlnsXml, atomizedName)) {
			return XmlNamespaceManager.prefixXml;
		}
		if (this.compareString(uri, XmlNamespaceManager.xmlnsXmlns, atomizedName)) {
			return XmlNamespaceManager.prefixXmlns;
		}
		for (let i: number = this.declPos; i >= 0; i--) {
			if (this.compareString(this.decls[i].uri, uri, atomizedName) && this.decls[i].prefix.length > 0) {
				if (!excludeOverriden || !this.isOverriden(i)) {
					return this.decls[i].prefix;
				}
			}
		}
		return null;
	}
	private isOverriden(idx: number): boolean {
		if (idx == this.declPos) {
			return false;
		}
		let prefix: string = this.decls[idx + 1].prefix;
		for (let i: number = idx + 1; i <= this.declPos; i++) {
			if (<any>this.decls[idx].prefix == <any>prefix) {
				return true;
			}
		}
		return false;
	}
	popScope(): boolean {
		if (this.scopePos == -1) {
			return false;
		}
		this.declPos -= this.count;
		this._defaultNamespace = this.scopes[this.scopePos].defaultNamespace;
		this.count = this.scopes[this.scopePos].declCount;
		this.scopePos--;
		return true;
	}
	pushScope(): void {
		this.scopePos++;
		if (this.scopePos == this.scopes.length) {
			this.growScopes();
		}
		this.scopes[this.scopePos].defaultNamespace = this._defaultNamespace;
		this.scopes[this.scopePos].declCount = this.count;
		this.count = 0;
	}
	removeNamespace(prefix: string, uri: string): void {
		this.removeNamespace1(prefix, uri, false);
	}
	private removeNamespace1(prefix: string, uri: string, atomizedNames: boolean): void {
		if (prefix == null) {
			throw new ArgumentNullException(0, "prefix");
		}
		if (uri == null) {
			throw new ArgumentNullException(0, "uri");
		}
		if (this.count == 0) {
			return;
		}
		for (let i: number = this.declPos; i > this.declPos - this.count; i--) {
			if (this.compareString(this.decls[i].prefix, prefix, atomizedNames) && this.compareString(this.decls[i].uri, uri, atomizedNames)) {
				this.decls[i].uri = null;
			}
		}
	}
}


