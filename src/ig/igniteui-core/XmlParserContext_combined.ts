//
// System.Xml.XmlTextReader
//
// Author:
//   Jason Diamond (jason@injektilo.org)
//   Adam Treat (manyoso@yahoo.com)
//   Atsushi Enomoto  (ginga@kit.hi-ho.ne.jp)
//
// (C) 2001, 2002 Jason Diamond  http://injektilo.org/
// Copyright (C) 2005-2006 Novell, Inc (http://www.novell.com)
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
//#define USE_NAME_BUFFER

//
// Optimization TODOs:
//
//	- support PushbackChar() which reverts one character read.
//		- ReadTextReader() should always keep one pushback buffer
//		  as pushback safety net.
//	- Replace (peek,read) * n -> read * n + pushback
//
import { Base, Type, markType, Stream, typeCast, enumGetBox } from "./type";
import { DTDObjectModel } from "./DTDObjectModel";
import { Encoding } from "./Encoding";
import { XmlNamespaceManager } from "./XmlNamespaceManager";
import { XmlNameTable } from "./XmlNameTable";
import { XmlSpace } from "./XmlSpace";
import { TextReader } from "./TextReader";
import { ArrayBox$1, arrayListCreate, arrayCopyTo } from "./array";
import { XmlParserContext_ContextItem } from "./XmlParserContext_ContextItem";
import { XmlException } from "./XmlException";
import { stringEmpty, stringCreateFromCharArraySlice, stringReplace, stringIsNullOrEmpty, charMaxValue, stringToLocaleLower, StringComparison, stringCreateFromCharArray, stringConcat } from "./string";
import { XmlReader } from "./XmlReader";
import { XmlNodeType, XmlNodeType_$type } from "./xml";
import { ReadState } from "./ReadState";
import { InvalidOperationException } from "./InvalidOperationException";
import { WhitespaceHandling } from "./WhitespaceHandling";
import { XmlResolver } from "./XmlResolver";
import { XmlTextReader_DtdInputState } from "./XmlTextReader_DtdInputState";
import { XmlTextReader_DtdInputStateStack } from "./XmlTextReader_DtdInputStateStack";
import { XmlUrlResolver } from "./XmlUrlResolver";
import { XmlStreamReader } from "./XmlStreamReader";
import { NameTable } from "./NameTable";
import { StringReader } from "./StringReader";
import { Uri } from "./Uri";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { IXmlLineInfo, IXmlLineInfo_$type } from "./IXmlLineInfo";
import { XmlTextReader_TagName } from "./XmlTextReader_TagName";
import { StringBuilder } from "./StringBuilder";
import { EntityHandling } from "./EntityHandling";
import { XmlChar } from "./XmlChar";
import { CultureInfo } from "./culture";
import { NonBlockingStreamReader } from "./NonBlockingStreamReader";
import { intDivide } from "./number";
import { stringFormat, stringFormat2, stringCompare1 } from "./stringExtended";
import { arrayCopy1 } from "./arrayExtended";

/**
 * @hidden 
 */
export class XmlParserContext extends Base {
	static $t: Type = markType(XmlParserContext, 'XmlParserContext');
	constructor(initNumber: number, nt: XmlNameTable, nsMgr: XmlNamespaceManager, xmlLang: string, xmlSpace: XmlSpace);
	constructor(initNumber: number, nt: XmlNameTable, nsMgr: XmlNamespaceManager, xmlLang: string, xmlSpace: XmlSpace, enc: Encoding);
	constructor(initNumber: number, nt: XmlNameTable, nsMgr: XmlNamespaceManager, docTypeName: string, pubId: string, sysId: string, internalSubset: string, baseURI: string, xmlLang: string, xmlSpace: XmlSpace);
	constructor(initNumber: number, nt: XmlNameTable, nsMgr: XmlNamespaceManager, docTypeName: string, pubId: string, sysId: string, internalSubset: string, baseURI: string, xmlLang: string, xmlSpace: XmlSpace, enc: Encoding);
	constructor(initNumber: number, nt: XmlNameTable, nsMgr: XmlNamespaceManager, dtd: DTDObjectModel, baseURI: string, xmlLang: string, xmlSpace: XmlSpace, enc: Encoding);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>_rest[1];
				let xmlLang: string = <string>_rest[2];
				let xmlSpace: XmlSpace = <XmlSpace>_rest[3];
				let $outerArgs = <any[]>[ nt, nsMgr, null, null, null, null, null, xmlLang, xmlSpace, null ];
				{
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[0];
					let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs[1];
					let docTypeName: string = <string>$outerArgs[2];
					let pubId: string = <string>$outerArgs[3];
					let sysId: string = <string>$outerArgs[4];
					let internalSubset: string = <string>$outerArgs[5];
					let baseURI: string = <string>$outerArgs[6];
					let xmlLang: string = <string>$outerArgs[7];
					let xmlSpace: XmlSpace = <XmlSpace>$outerArgs[8];
					let enc: Encoding = <Encoding>$outerArgs[9];
					let $outerArgs1 = <any[]>[ nt, nsMgr, (docTypeName != null && docTypeName != stringEmpty()) ? new XmlTextReader(9, TextReader.$null, nt).generateDTDObjectModel(docTypeName, pubId, sysId, internalSubset) : null, baseURI, xmlLang, xmlSpace, enc ];
					{
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[0];
						let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs1[1];
						let dtd: DTDObjectModel = <DTDObjectModel>$outerArgs1[2];
						let baseURI: string = <string>$outerArgs1[3];
						let xmlLang: string = <string>$outerArgs1[4];
						let xmlSpace: XmlSpace = <XmlSpace>$outerArgs1[5];
						let enc: Encoding = <Encoding>$outerArgs1[6];
						this._namespaceManager = nsMgr;
						this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable : null;
						if (dtd != null) {
							this.docTypeName = dtd.name;
							this.publicId = dtd.publicId;
							this.systemId = dtd.systemId;
							this.internalSubset = dtd.internalSubset;
							this._dtd = dtd;
						}
						this._encoding = enc;
						this.baseURI = baseURI;
						this.xmlLang = xmlLang;
						this._xmlSpace = xmlSpace;
						this.contextItems = arrayListCreate();
					}
				}
			}
			break;

			case 1:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>_rest[1];
				let xmlLang: string = <string>_rest[2];
				let xmlSpace: XmlSpace = <XmlSpace>_rest[3];
				let enc: Encoding = <Encoding>_rest[4];
				let $outerArgs = <any[]>[ nt, nsMgr, null, null, null, null, null, xmlLang, xmlSpace, enc ];
				{
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[0];
					let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs[1];
					let docTypeName: string = <string>$outerArgs[2];
					let pubId: string = <string>$outerArgs[3];
					let sysId: string = <string>$outerArgs[4];
					let internalSubset: string = <string>$outerArgs[5];
					let baseURI: string = <string>$outerArgs[6];
					let xmlLang: string = <string>$outerArgs[7];
					let xmlSpace: XmlSpace = <XmlSpace>$outerArgs[8];
					let enc: Encoding = <Encoding>$outerArgs[9];
					let $outerArgs1 = <any[]>[ nt, nsMgr, (docTypeName != null && docTypeName != stringEmpty()) ? new XmlTextReader(9, TextReader.$null, nt).generateDTDObjectModel(docTypeName, pubId, sysId, internalSubset) : null, baseURI, xmlLang, xmlSpace, enc ];
					{
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[0];
						let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs1[1];
						let dtd: DTDObjectModel = <DTDObjectModel>$outerArgs1[2];
						let baseURI: string = <string>$outerArgs1[3];
						let xmlLang: string = <string>$outerArgs1[4];
						let xmlSpace: XmlSpace = <XmlSpace>$outerArgs1[5];
						let enc: Encoding = <Encoding>$outerArgs1[6];
						this._namespaceManager = nsMgr;
						this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable : null;
						if (dtd != null) {
							this.docTypeName = dtd.name;
							this.publicId = dtd.publicId;
							this.systemId = dtd.systemId;
							this.internalSubset = dtd.internalSubset;
							this._dtd = dtd;
						}
						this._encoding = enc;
						this.baseURI = baseURI;
						this.xmlLang = xmlLang;
						this._xmlSpace = xmlSpace;
						this.contextItems = arrayListCreate();
					}
				}
			}
			break;

			case 2:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>_rest[1];
				let docTypeName: string = <string>_rest[2];
				let pubId: string = <string>_rest[3];
				let sysId: string = <string>_rest[4];
				let internalSubset: string = <string>_rest[5];
				let baseURI: string = <string>_rest[6];
				let xmlLang: string = <string>_rest[7];
				let xmlSpace: XmlSpace = <XmlSpace>_rest[8];
				let $outerArgs = <any[]>[ nt, nsMgr, docTypeName, pubId, sysId, internalSubset, baseURI, xmlLang, xmlSpace, null ];
				{
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[0];
					let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs[1];
					let docTypeName: string = <string>$outerArgs[2];
					let pubId: string = <string>$outerArgs[3];
					let sysId: string = <string>$outerArgs[4];
					let internalSubset: string = <string>$outerArgs[5];
					let baseURI: string = <string>$outerArgs[6];
					let xmlLang: string = <string>$outerArgs[7];
					let xmlSpace: XmlSpace = <XmlSpace>$outerArgs[8];
					let enc: Encoding = <Encoding>$outerArgs[9];
					let $outerArgs1 = <any[]>[ nt, nsMgr, (docTypeName != null && docTypeName != stringEmpty()) ? new XmlTextReader(9, TextReader.$null, nt).generateDTDObjectModel(docTypeName, pubId, sysId, internalSubset) : null, baseURI, xmlLang, xmlSpace, enc ];
					{
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[0];
						let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs1[1];
						let dtd: DTDObjectModel = <DTDObjectModel>$outerArgs1[2];
						let baseURI: string = <string>$outerArgs1[3];
						let xmlLang: string = <string>$outerArgs1[4];
						let xmlSpace: XmlSpace = <XmlSpace>$outerArgs1[5];
						let enc: Encoding = <Encoding>$outerArgs1[6];
						this._namespaceManager = nsMgr;
						this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable : null;
						if (dtd != null) {
							this.docTypeName = dtd.name;
							this.publicId = dtd.publicId;
							this.systemId = dtd.systemId;
							this.internalSubset = dtd.internalSubset;
							this._dtd = dtd;
						}
						this._encoding = enc;
						this.baseURI = baseURI;
						this.xmlLang = xmlLang;
						this._xmlSpace = xmlSpace;
						this.contextItems = arrayListCreate();
					}
				}
			}
			break;

			case 3:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>_rest[1];
				let docTypeName: string = <string>_rest[2];
				let pubId: string = <string>_rest[3];
				let sysId: string = <string>_rest[4];
				let internalSubset: string = <string>_rest[5];
				let baseURI: string = <string>_rest[6];
				let xmlLang: string = <string>_rest[7];
				let xmlSpace: XmlSpace = <XmlSpace>_rest[8];
				let enc: Encoding = <Encoding>_rest[9];
				let $outerArgs = <any[]>[ nt, nsMgr, (docTypeName != null && docTypeName != stringEmpty()) ? new XmlTextReader(9, TextReader.$null, nt).generateDTDObjectModel(docTypeName, pubId, sysId, internalSubset) : null, baseURI, xmlLang, xmlSpace, enc ];
				{
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[0];
					let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>$outerArgs[1];
					let dtd: DTDObjectModel = <DTDObjectModel>$outerArgs[2];
					let baseURI: string = <string>$outerArgs[3];
					let xmlLang: string = <string>$outerArgs[4];
					let xmlSpace: XmlSpace = <XmlSpace>$outerArgs[5];
					let enc: Encoding = <Encoding>$outerArgs[6];
					this._namespaceManager = nsMgr;
					this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable : null;
					if (dtd != null) {
						this.docTypeName = dtd.name;
						this.publicId = dtd.publicId;
						this.systemId = dtd.systemId;
						this.internalSubset = dtd.internalSubset;
						this._dtd = dtd;
					}
					this._encoding = enc;
					this.baseURI = baseURI;
					this.xmlLang = xmlLang;
					this._xmlSpace = xmlSpace;
					this.contextItems = arrayListCreate();
				}
			}
			break;

			case 4:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let nsMgr: XmlNamespaceManager = <XmlNamespaceManager>_rest[1];
				let dtd: DTDObjectModel = <DTDObjectModel>_rest[2];
				let baseURI: string = <string>_rest[3];
				let xmlLang: string = <string>_rest[4];
				let xmlSpace: XmlSpace = <XmlSpace>_rest[5];
				let enc: Encoding = <Encoding>_rest[6];
				this._namespaceManager = nsMgr;
				this._nameTable = nt != null ? nt : nsMgr != null ? nsMgr.nameTable : null;
				if (dtd != null) {
					this.docTypeName = dtd.name;
					this.publicId = dtd.publicId;
					this.systemId = dtd.systemId;
					this.internalSubset = dtd.internalSubset;
					this._dtd = dtd;
				}
				this._encoding = enc;
				this.baseURI = baseURI;
				this.xmlLang = xmlLang;
				this._xmlSpace = xmlSpace;
				this.contextItems = arrayListCreate();
			}
			break;

		}

	}
	private _baseURI: string = stringEmpty();
	private _docTypeName: string = stringEmpty();
	private _encoding: Encoding = null;
	private _internalSubset: string = stringEmpty();
	private _namespaceManager: XmlNamespaceManager = null;
	private _nameTable: XmlNameTable = null;
	private publicID: string = stringEmpty();
	private systemID: string = stringEmpty();
	private _xmlLang: string = stringEmpty();
	private _xmlSpace: XmlSpace = <XmlSpace>0;
	private contextItems: ArrayBox$1<any> = null;
	private contextItemCount: number = 0;
	private _dtd: DTDObjectModel = null;
	get baseURI(): string {
		return this._baseURI;
	}
	set baseURI(value: string) {
		this._baseURI = value != null ? value : stringEmpty();
	}
	get docTypeName(): string {
		return this._docTypeName != null ? this._docTypeName : this._dtd != null ? this._dtd.name : null;
	}
	set docTypeName(value: string) {
		this._docTypeName = value != null ? value : stringEmpty();
	}
	get dtd(): DTDObjectModel {
		return this._dtd;
	}
	set dtd(value: DTDObjectModel) {
		this._dtd = value;
	}
	get encoding(): Encoding {
		return this._encoding;
	}
	set encoding(value: Encoding) {
		this._encoding = value;
	}
	get internalSubset(): string {
		return this._internalSubset != null ? this._internalSubset : this._dtd != null ? this._dtd.internalSubset : null;
	}
	set internalSubset(value: string) {
		this._internalSubset = value != null ? value : stringEmpty();
	}
	get namespaceManager(): XmlNamespaceManager {
		return this._namespaceManager;
	}
	set namespaceManager(value: XmlNamespaceManager) {
		this._namespaceManager = value;
	}
	get nameTable(): XmlNameTable {
		return this._nameTable;
	}
	set nameTable(value: XmlNameTable) {
		this._nameTable = value;
	}
	get publicId(): string {
		return this.publicID != null ? this.publicID : this._dtd != null ? this._dtd.publicId : null;
	}
	set publicId(value: string) {
		this.publicID = value != null ? value : stringEmpty();
	}
	get systemId(): string {
		return this.systemID != null ? this.systemID : this._dtd != null ? this._dtd.systemId : null;
	}
	set systemId(value: string) {
		this.systemID = value != null ? value : stringEmpty();
	}
	get xmlLang(): string {
		return this._xmlLang;
	}
	set xmlLang(value: string) {
		this._xmlLang = value != null ? value : stringEmpty();
	}
	get xmlSpace(): XmlSpace {
		return this._xmlSpace;
	}
	set xmlSpace(value: XmlSpace) {
		this._xmlSpace = value;
	}
	pushScope(): void {
		let item: XmlParserContext_ContextItem = null;
		if (this.contextItems.count == this.contextItemCount) {
			item = new XmlParserContext_ContextItem();
			this.contextItems.add(item);
		} else {
			item = <XmlParserContext_ContextItem>this.contextItems.item(this.contextItemCount);
		}
		item.baseURI = this.baseURI;
		item.xmlLang = this.xmlLang;
		item.xmlSpace = this.xmlSpace;
		this.contextItemCount++;
	}
	popScope(): void {
		if (this.contextItemCount == 0) {
			throw new XmlException(3, "Unexpected end of element scope.");
		}
		this.contextItemCount--;
		let prev: XmlParserContext_ContextItem = <XmlParserContext_ContextItem>this.contextItems.item(this.contextItemCount);
		this._baseURI = prev.baseURI;
		this._xmlLang = prev.xmlLang;
		this._xmlSpace = prev.xmlSpace;
	}
}

/**
 * @hidden 
 */
export class XmlTextReader extends XmlReader {
	static $t: Type = markType(XmlTextReader, 'XmlTextReader', (<any>XmlReader).$type);
	constructor(initNumber: number);
	constructor(initNumber: number, input: Stream);
	constructor(initNumber: number, url: string);
	constructor(initNumber: number, input: TextReader);
	constructor(initNumber: number, nt: XmlNameTable);
	constructor(initNumber: number, input: Stream, nt: XmlNameTable);
	constructor(initNumber: number, url: string, input: Stream);
	constructor(initNumber: number, url: string, input: TextReader);
	constructor(initNumber: number, url: string, nt: XmlNameTable);
	constructor(initNumber: number, input: TextReader, nt: XmlNameTable);
	constructor(initNumber: number, dummy: boolean, resolver: XmlResolver, url: string, fragType: XmlNodeType, context: XmlParserContext);
	constructor(initNumber: number, xmlFragment: Stream, fragType: XmlNodeType, context: XmlParserContext);
	constructor(initNumber: number, baseURI: string, xmlFragment: TextReader, fragType: XmlNodeType);
	constructor(initNumber: number, url: string, input: Stream, nt: XmlNameTable);
	constructor(initNumber: number, url: string, input: TextReader, nt: XmlNameTable);
	constructor(initNumber: number, xmlFragment: string, fragType: XmlNodeType, context: XmlParserContext);
	constructor(initNumber: number, url: string, fragment: TextReader, fragType: XmlNodeType, context: XmlParserContext);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let input: Stream = <Stream>_rest[0];
				let $outerArgs = <any[]>[ new XmlStreamReader(1, input) ];
				{
					let input: TextReader = <TextReader>$outerArgs[0];
					let $outerArgs1 = <any[]>[ input, new NameTable() ];
					{
						let input: TextReader = <TextReader>$outerArgs1[0];
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[1];
						let $outerArgs2 = <any[]>[ stringEmpty(), input, nt ];
						{
							let url: string = <string>$outerArgs2[0];
							let input: TextReader = <TextReader>$outerArgs2[1];
							let nt: XmlNameTable = <XmlNameTable>$outerArgs2[2];
							let $outerArgs3 = <any[]>[ url, input, XmlNodeType.Document, null ];
							{
								let url: string = <string>$outerArgs3[0];
								let fragment: TextReader = <TextReader>$outerArgs3[1];
								let fragType: XmlNodeType = <XmlNodeType>$outerArgs3[2];
								let context: XmlParserContext = <XmlParserContext>$outerArgs3[3];
								this.initializeContext(url, context, fragment, fragType);
							}
						}
					}
				}
			}
			break;

			case 2:
			{
				let url: string = <string>_rest[0];
				let $outerArgs = <any[]>[ url, new NameTable() ];
				{
					let url: string = <string>$outerArgs[0];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[1];
					let uriString: string;
					let stream: Stream = ((() => { let $ret = this.getStreamFromUrl(url, uriString); uriString = $ret.p1; return $ret.ret; })());
					let ctx: XmlParserContext = new XmlParserContext(0, nt, new XmlNamespaceManager(nt), stringEmpty(), XmlSpace.None);
					this.initializeContext(uriString, ctx, new XmlStreamReader(1, stream), XmlNodeType.Document);
				}
			}
			break;

			case 3:
			{
				let input: TextReader = <TextReader>_rest[0];
				let $outerArgs = <any[]>[ input, new NameTable() ];
				{
					let input: TextReader = <TextReader>$outerArgs[0];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[1];
					let $outerArgs1 = <any[]>[ stringEmpty(), input, nt ];
					{
						let url: string = <string>$outerArgs1[0];
						let input: TextReader = <TextReader>$outerArgs1[1];
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[2];
						let $outerArgs2 = <any[]>[ url, input, XmlNodeType.Document, null ];
						{
							let url: string = <string>$outerArgs2[0];
							let fragment: TextReader = <TextReader>$outerArgs2[1];
							let fragType: XmlNodeType = <XmlNodeType>$outerArgs2[2];
							let context: XmlParserContext = <XmlParserContext>$outerArgs2[3];
							this.initializeContext(url, context, fragment, fragType);
						}
					}
				}
			}
			break;

			case 4:
			{
				let nt: XmlNameTable = <XmlNameTable>_rest[0];
				let $outerArgs = <any[]>[ stringEmpty(), null, XmlNodeType.None, null ];
				{
					let url: string = <string>$outerArgs[0];
					let fragment: TextReader = <TextReader>$outerArgs[1];
					let fragType: XmlNodeType = <XmlNodeType>$outerArgs[2];
					let context: XmlParserContext = <XmlParserContext>$outerArgs[3];
					this.initializeContext(url, context, fragment, fragType);
				}
			}
			break;

			case 5:
			{
				let input: Stream = <Stream>_rest[0];
				let nt: XmlNameTable = <XmlNameTable>_rest[1];
				let $outerArgs = <any[]>[ new XmlStreamReader(1, input), nt ];
				{
					let input: TextReader = <TextReader>$outerArgs[0];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[1];
					let $outerArgs1 = <any[]>[ stringEmpty(), input, nt ];
					{
						let url: string = <string>$outerArgs1[0];
						let input: TextReader = <TextReader>$outerArgs1[1];
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[2];
						let $outerArgs2 = <any[]>[ url, input, XmlNodeType.Document, null ];
						{
							let url: string = <string>$outerArgs2[0];
							let fragment: TextReader = <TextReader>$outerArgs2[1];
							let fragType: XmlNodeType = <XmlNodeType>$outerArgs2[2];
							let context: XmlParserContext = <XmlParserContext>$outerArgs2[3];
							this.initializeContext(url, context, fragment, fragType);
						}
					}
				}
			}
			break;

			case 6:
			{
				let url: string = <string>_rest[0];
				let input: Stream = <Stream>_rest[1];
				let $outerArgs = <any[]>[ url, new XmlStreamReader(1, input) ];
				{
					let url: string = <string>$outerArgs[0];
					let input: TextReader = <TextReader>$outerArgs[1];
					let $outerArgs1 = <any[]>[ url, input, new NameTable() ];
					{
						let url: string = <string>$outerArgs1[0];
						let input: TextReader = <TextReader>$outerArgs1[1];
						let nt: XmlNameTable = <XmlNameTable>$outerArgs1[2];
						let $outerArgs2 = <any[]>[ url, input, XmlNodeType.Document, null ];
						{
							let url: string = <string>$outerArgs2[0];
							let fragment: TextReader = <TextReader>$outerArgs2[1];
							let fragType: XmlNodeType = <XmlNodeType>$outerArgs2[2];
							let context: XmlParserContext = <XmlParserContext>$outerArgs2[3];
							this.initializeContext(url, context, fragment, fragType);
						}
					}
				}
			}
			break;

			case 7:
			{
				let url: string = <string>_rest[0];
				let input: TextReader = <TextReader>_rest[1];
				let $outerArgs = <any[]>[ url, input, new NameTable() ];
				{
					let url: string = <string>$outerArgs[0];
					let input: TextReader = <TextReader>$outerArgs[1];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[2];
					let $outerArgs1 = <any[]>[ url, input, XmlNodeType.Document, null ];
					{
						let url: string = <string>$outerArgs1[0];
						let fragment: TextReader = <TextReader>$outerArgs1[1];
						let fragType: XmlNodeType = <XmlNodeType>$outerArgs1[2];
						let context: XmlParserContext = <XmlParserContext>$outerArgs1[3];
						this.initializeContext(url, context, fragment, fragType);
					}
				}
			}
			break;

			case 8:
			{
				let url: string = <string>_rest[0];
				let nt: XmlNameTable = <XmlNameTable>_rest[1];
				let uriString: string;
				let stream: Stream = ((() => { let $ret = this.getStreamFromUrl(url, uriString); uriString = $ret.p1; return $ret.ret; })());
				let ctx: XmlParserContext = new XmlParserContext(0, nt, new XmlNamespaceManager(nt), stringEmpty(), XmlSpace.None);
				this.initializeContext(uriString, ctx, new XmlStreamReader(1, stream), XmlNodeType.Document);
			}
			break;

			case 9:
			{
				let input: TextReader = <TextReader>_rest[0];
				let nt: XmlNameTable = <XmlNameTable>_rest[1];
				let $outerArgs = <any[]>[ stringEmpty(), input, nt ];
				{
					let url: string = <string>$outerArgs[0];
					let input: TextReader = <TextReader>$outerArgs[1];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[2];
					let $outerArgs1 = <any[]>[ url, input, XmlNodeType.Document, null ];
					{
						let url: string = <string>$outerArgs1[0];
						let fragment: TextReader = <TextReader>$outerArgs1[1];
						let fragType: XmlNodeType = <XmlNodeType>$outerArgs1[2];
						let context: XmlParserContext = <XmlParserContext>$outerArgs1[3];
						this.initializeContext(url, context, fragment, fragType);
					}
				}
			}
			break;

			case 10:
			{
				let dummy: boolean = <boolean>_rest[0];
				let resolver: XmlResolver = <XmlResolver>_rest[1];
				let url: string = <string>_rest[2];
				let fragType: XmlNodeType = <XmlNodeType>_rest[3];
				let context: XmlParserContext = <XmlParserContext>_rest[4];
				if (resolver == null) {
					resolver = new XmlUrlResolver();
				}
				this.xmlResolver = resolver;
				let uriString: string;
				let stream: Stream = ((() => { let $ret = this.getStreamFromUrl(url, uriString); uriString = $ret.p1; return $ret.ret; })());
				this.initializeContext(uriString, context, new XmlStreamReader(1, stream), fragType);
			}
			break;

			case 11:
			{
				let xmlFragment: Stream = <Stream>_rest[0];
				let fragType: XmlNodeType = <XmlNodeType>_rest[1];
				let context: XmlParserContext = <XmlParserContext>_rest[2];
				let $outerArgs = <any[]>[ context != null ? context.baseURI : stringEmpty(), new XmlStreamReader(1, xmlFragment), fragType, context ];
				{
					let url: string = <string>$outerArgs[0];
					let fragment: TextReader = <TextReader>$outerArgs[1];
					let fragType: XmlNodeType = <XmlNodeType>$outerArgs[2];
					let context: XmlParserContext = <XmlParserContext>$outerArgs[3];
					this.initializeContext(url, context, fragment, fragType);
				}
				this.disallowReset = true;
			}
			break;

			case 12:
			{
				let baseURI: string = <string>_rest[0];
				let xmlFragment: TextReader = <TextReader>_rest[1];
				let fragType: XmlNodeType = <XmlNodeType>_rest[2];
				let $outerArgs = <any[]>[ baseURI, xmlFragment, fragType, null ];
				{
					let url: string = <string>$outerArgs[0];
					let fragment: TextReader = <TextReader>$outerArgs[1];
					let fragType: XmlNodeType = <XmlNodeType>$outerArgs[2];
					let context: XmlParserContext = <XmlParserContext>$outerArgs[3];
					this.initializeContext(url, context, fragment, fragType);
				}
			}
			break;

			case 13:
			{
				let url: string = <string>_rest[0];
				let input: Stream = <Stream>_rest[1];
				let nt: XmlNameTable = <XmlNameTable>_rest[2];
				let $outerArgs = <any[]>[ url, new XmlStreamReader(1, input), nt ];
				{
					let url: string = <string>$outerArgs[0];
					let input: TextReader = <TextReader>$outerArgs[1];
					let nt: XmlNameTable = <XmlNameTable>$outerArgs[2];
					let $outerArgs1 = <any[]>[ url, input, XmlNodeType.Document, null ];
					{
						let url: string = <string>$outerArgs1[0];
						let fragment: TextReader = <TextReader>$outerArgs1[1];
						let fragType: XmlNodeType = <XmlNodeType>$outerArgs1[2];
						let context: XmlParserContext = <XmlParserContext>$outerArgs1[3];
						this.initializeContext(url, context, fragment, fragType);
					}
				}
			}
			break;

			case 14:
			{
				let url: string = <string>_rest[0];
				let input: TextReader = <TextReader>_rest[1];
				let nt: XmlNameTable = <XmlNameTable>_rest[2];
				let $outerArgs = <any[]>[ url, input, XmlNodeType.Document, null ];
				{
					let url: string = <string>$outerArgs[0];
					let fragment: TextReader = <TextReader>$outerArgs[1];
					let fragType: XmlNodeType = <XmlNodeType>$outerArgs[2];
					let context: XmlParserContext = <XmlParserContext>$outerArgs[3];
					this.initializeContext(url, context, fragment, fragType);
				}
			}
			break;

			case 15:
			{
				let xmlFragment: string = <string>_rest[0];
				let fragType: XmlNodeType = <XmlNodeType>_rest[1];
				let context: XmlParserContext = <XmlParserContext>_rest[2];
				let $outerArgs = <any[]>[ context != null ? context.baseURI : stringEmpty(), new StringReader(xmlFragment), fragType, context ];
				{
					let url: string = <string>$outerArgs[0];
					let fragment: TextReader = <TextReader>$outerArgs[1];
					let fragType: XmlNodeType = <XmlNodeType>$outerArgs[2];
					let context: XmlParserContext = <XmlParserContext>$outerArgs[3];
					this.initializeContext(url, context, fragment, fragType);
				}
				this.disallowReset = true;
			}
			break;

			case 16:
			{
				let url: string = <string>_rest[0];
				let fragment: TextReader = <TextReader>_rest[1];
				let fragType: XmlNodeType = <XmlNodeType>_rest[2];
				let context: XmlParserContext = <XmlParserContext>_rest[3];
				this.initializeContext(url, context, fragment, fragType);
			}
			break;

		}

	}
	private getStreamFromUrl(url: string, absoluteUriString: string): { ret: Stream; p1: string; } {
		let uri: Uri = this._resolver.resolveUri(null, url);
		absoluteUriString = uri != null ? uri.toString() : stringEmpty();
		return {
			ret: typeCast<Stream>((<any>Stream).$type, this._resolver.getEntity(uri, null, (<any>Stream).$type)),
			p1: absoluteUriString

		};
	}
	protected get_attributeCount(): number {
		return this._attributeCount;
	}
	get attributeCount(): number {
		return this.get_attributeCount();
	}
	protected get_baseURI(): string {
		return this.parserContext.baseURI;
	}
	get baseURI(): string {
		return this.get_baseURI();
	}
	protected get_canReadBinaryContent(): boolean {
		return true;
	}
	protected get_canReadValueChunk(): boolean {
		return true;
	}
	get characterChecking(): boolean {
		return this.checkCharacters;
	}
	set characterChecking(value: boolean) {
		this.checkCharacters = value;
	}
	get closeInput(): boolean {
		return this._closeInput;
	}
	set closeInput(value: boolean) {
		this._closeInput = value;
	}
	protected get_depth(): number {
		let nodeTypeMod: number = this.currentToken.nodeType == XmlNodeType.Element ? 0 : -1;
		if (this.currentAttributeValue >= 0) {
			return nodeTypeMod + this.elementDepth + 2;
		} else if (this.currentAttribute >= 0) {
			return nodeTypeMod + this.elementDepth + 1;
		}
		return this.elementDepth;
	}
	get depth(): number {
		return this.get_depth();
	}
	get encoding(): Encoding {
		return this.parserContext.encoding || Encoding.uTF8;
	}
	protected get_eOF(): boolean {
		return this._readState == ReadState.EndOfFile;
	}
	get eOF(): boolean {
		return this.get_eOF();
	}
	protected get_hasValue(): boolean {
		return this.cursorToken.value != null;
	}
	get hasValue(): boolean {
		return this.get_hasValue();
	}
	protected get_isDefault(): boolean {
		return false;
	}
	get isDefault(): boolean {
		return this.get_isDefault();
	}
	protected get_isEmptyElement(): boolean {
		return this.cursorToken.isEmptyElement;
	}
	get isEmptyElement(): boolean {
		return this.get_isEmptyElement();
	}
	item(i: number): string {
		return this.getAttribute(i);
	}
	item1(name: string): string {
		return this.getAttribute1(name);
	}
	item2(localName: string, namespaceName: string): string {
		return this.getAttribute2(localName, namespaceName);
	}
	get lineNumber(): number {
		if (this.useProceedingLineInfo) {
			return this.line;
		} else {
			return this.cursorToken.lineNumber;
		}
	}
	get linePosition(): number {
		if (this.useProceedingLineInfo) {
			return this.column;
		} else {
			return this.cursorToken.linePosition;
		}
	}
	protected get_localName(): string {
		return this.cursorToken.localName;
	}
	get localName(): string {
		return this.get_localName();
	}
	protected get_name(): string {
		return this.cursorToken.name;
	}
	get name(): string {
		return this.get_name();
	}
	get namespaces(): boolean {
		return this._namespaces;
	}
	set namespaces(value: boolean) {
		if (this._readState != ReadState.Initial) {
			throw new InvalidOperationException(1, "Namespaces have to be set before reading.");
		}
		this._namespaces = value;
	}
	protected get_namespaceURI(): string {
		return this.cursorToken.namespaceURI;
	}
	get namespaceURI(): string {
		return this.get_namespaceURI();
	}
	protected get_nameTable(): XmlNameTable {
		return this._nameTable;
	}
	get nameTable(): XmlNameTable {
		return this.get_nameTable();
	}
	protected get_nodeType(): XmlNodeType {
		return this.cursorToken.nodeType;
	}
	get nodeType(): XmlNodeType {
		return this.get_nodeType();
	}
	get normalization(): boolean {
		return this._normalization;
	}
	set normalization(value: boolean) {
		this._normalization = value;
	}
	protected get_prefix(): string {
		return this.cursorToken.prefix;
	}
	get prefix(): string {
		return this.get_prefix();
	}
	get prohibitDtd(): boolean {
		return this._prohibitDtd;
	}
	set prohibitDtd(value: boolean) {
		this._prohibitDtd = value;
	}
	protected get_quoteChar(): string {
		return this.cursorToken.quoteChar;
	}
	get quoteChar(): string {
		return this.get_quoteChar();
	}
	protected get_readState(): ReadState {
		return this._readState;
	}
	get readState(): ReadState {
		return this.get_readState();
	}
	protected get_value(): string {
		return this.cursorToken.value != null ? this.cursorToken.value : stringEmpty();
	}
	get value(): string {
		return this.get_value();
	}
	get whitespaceHandling(): WhitespaceHandling {
		return this._whitespaceHandling;
	}
	set whitespaceHandling(value: WhitespaceHandling) {
		this._whitespaceHandling = value;
	}
	protected get_xmlLang(): string {
		return this.parserContext.xmlLang;
	}
	get xmlLang(): string {
		return this.get_xmlLang();
	}
	set xmlResolver(value: XmlResolver) {
		this._resolver = value;
	}
	protected get_xmlSpace(): XmlSpace {
		return this.parserContext.xmlSpace;
	}
	get xmlSpace(): XmlSpace {
		return this.get_xmlSpace();
	}
	close(): void {
		this._readState = ReadState.Closed;
		this.cursorToken.clear();
		this.currentToken.clear();
		this._attributeCount = 0;
		if (this._closeInput && this.reader != null) {
			this.reader.close();
		}
	}
	getAttribute(i: number): string {
		if (i >= this._attributeCount) {
			throw new ArgumentOutOfRangeException(1, "i is smaller than AttributeCount");
		} else {
			return this.attributeTokens[i].value;
		}
	}
	getAttribute1(name: string): string {
		for (let i: number = 0; i < this._attributeCount; i++) {
			if (this.attributeTokens[i].name == name) {
				return this.attributeTokens[i].value;
			}
		}
		return null;
	}
	private getIndexOfQualifiedAttribute(localName: string, namespaceURI: string): number {
		namespaceURI = namespaceURI != null ? namespaceURI : stringEmpty();
		for (let i: number = 0; i < this._attributeCount; i++) {
			let ti: XmlTextReader_XmlAttributeTokenInfo = this.attributeTokens[i];
			if (ti.localName == localName && ti.namespaceURI == namespaceURI) {
				return i;
			}
		}
		return -1;
	}
	getAttribute2(localName: string, namespaceURI: string): string {
		let idx: number = this.getIndexOfQualifiedAttribute(localName, namespaceURI);
		if (idx < 0) {
			return null;
		}
		return this.attributeTokens[idx].value;
	}
	getRemainder(): TextReader {
		if (this.peekCharsLength < 0) {
			return this.reader;
		}
		return new StringReader(stringCreateFromCharArraySlice(this.peekChars, this.peekCharsIndex, this.peekCharsLength - this.peekCharsIndex) + this.reader.readToEnd());
	}
	lookupNamespace(prefix: string): string {
		return this.lookupNamespace1(prefix, false);
	}
	lookupNamespace1(prefix: string, atomizedNames: boolean): string {
		let s: string = this.nsmgr.lookupNamespace1(prefix, atomizedNames);
		return s == stringEmpty() ? null : s;
	}
	moveToAttribute2(i: number): void {
		if (i >= this._attributeCount) {
			throw new ArgumentOutOfRangeException(1, "attribute index out of range.");
		}
		this.currentAttribute = i;
		this.currentAttributeValue = -1;
		this.cursorToken = this.attributeTokens[i];
	}
	moveToAttribute(name: string): boolean {
		for (let i: number = 0; i < this._attributeCount; i++) {
			let ti: XmlTextReader_XmlAttributeTokenInfo = this.attributeTokens[i];
			if (ti.name == name) {
				this.moveToAttribute2(i);
				return true;
			}
		}
		return false;
	}
	moveToAttribute1(localName: string, namespaceName: string): boolean {
		let idx: number = this.getIndexOfQualifiedAttribute(localName, namespaceName);
		if (idx < 0) {
			return false;
		}
		this.moveToAttribute2(idx);
		return true;
	}
	moveToElement(): boolean {
		if (this.currentToken == null) {
			return false;
		}
		if (this.cursorToken == this.currentToken) {
			return false;
		}
		if (this.currentAttribute >= 0) {
			this.currentAttribute = -1;
			this.currentAttributeValue = -1;
			this.cursorToken = this.currentToken;
			return true;
		} else {
			return false;
		}
	}
	moveToFirstAttribute(): boolean {
		if (this._attributeCount == 0) {
			return false;
		}
		this.moveToElement();
		return this.moveToNextAttribute();
	}
	moveToNextAttribute(): boolean {
		if (this.currentAttribute == 0 && this._attributeCount == 0) {
			return false;
		}
		if (this.currentAttribute + 1 < this._attributeCount) {
			this.currentAttribute++;
			this.currentAttributeValue = -1;
			this.cursorToken = this.attributeTokens[this.currentAttribute];
			return true;
		} else {
			return false;
		}
	}
	read(): boolean {
		if (this._readState == ReadState.Closed) {
			return false;
		}
		this.curNodePeekIndex = this.peekCharsIndex;
		this.preserveCurrentTag = true;
		this.nestLevel = 0;
		this.clearValueBuffer();
		if (this.startNodeType == XmlNodeType.Attribute) {
			if (this.currentAttribute == 0) {
				return false;
			}
			this.skipTextDeclaration();
			this.clearAttributes();
			this.incrementAttributeToken();
			this.readAttributeValueTokens('\"'.charCodeAt(0));
			this.cursorToken = this.attributeTokens[0];
			this.currentAttributeValue = -1;
			this._readState = ReadState.Interactive;
			return true;
		}
		if (this._readState == ReadState.Initial && this.currentState == XmlNodeType.Element) {
			this.skipTextDeclaration();
		}
		let more: boolean = false;
		this._readState = ReadState.Interactive;
		this.currentLinkedNodeLineNumber = this.line;
		this.currentLinkedNodeLinePosition = this.column;
		this.useProceedingLineInfo = true;
		this.cursorToken = this.currentToken;
		this._attributeCount = 0;
		this.currentAttribute = this.currentAttributeValue = -1;
		this.currentToken.clear();
		if (this.depthUp) {
			++this._depth;
			this.depthUp = false;
		}
		if (this.readCharsInProgress) {
			this.readCharsInProgress = false;
			return this.readUntilEndTag();
		}
		more = this.readContent();
		if (!more && this.startNodeType == XmlNodeType.Document && this.currentState != XmlNodeType.EndElement) {
			throw this.notWFError("Document element did not appear.");
		}
		this.useProceedingLineInfo = false;
		return more;
	}
	readAttributeValue(): boolean {
		if (this._readState == ReadState.Initial && this.startNodeType == XmlNodeType.Attribute) {
			this.read();
		}
		if (this.currentAttribute < 0) {
			return false;
		}
		let ti: XmlTextReader_XmlAttributeTokenInfo = this.attributeTokens[this.currentAttribute];
		if (this.currentAttributeValue < 0) {
			this.currentAttributeValue = ti.valueTokenStartIndex - 1;
		}
		if (this.currentAttributeValue < ti.valueTokenEndIndex) {
			this.currentAttributeValue++;
			this.cursorToken = this.attributeValueTokens[this.currentAttributeValue];
			return true;
		} else {
			return false;
		}
	}
	readBase64(buffer: number[], offset: number, length: number): number {
		return 0;
	}
	readBinHex(buffer: number[], offset: number, length: number): number {
		return 0;
	}
	readChars(buffer: string[], offset: number, length: number): number {
		if (offset < 0) {
			throw new ArgumentOutOfRangeException(3, "offset", offset, "Offset must be non-negative integer.");
		} else if (length < 0) {
			throw new ArgumentOutOfRangeException(3, "length", length, "Length must be non-negative integer.");
		} else if (buffer.length < offset + length) {
			throw new ArgumentOutOfRangeException(1, "buffer length is smaller than the sum of offset and length.");
		}
		if (this.isEmptyElement) {
			this.read();
			return 0;
		}
		if (!this.readCharsInProgress && this.nodeType != XmlNodeType.Element) {
			return 0;
		}
		this.preserveCurrentTag = false;
		this.readCharsInProgress = true;
		this.useProceedingLineInfo = true;
		return this.readCharsInternal(buffer, offset, length);
	}
	resetState(): void {
		if (this.disallowReset) {
			throw new InvalidOperationException(1, "Cannot call ResetState when parsing an XML fragment.");
		}
		this.clear();
	}
	resolveEntity(): void {
		throw new InvalidOperationException(1, "XmlTextReader cannot resolve external entities.");
	}
	get resolver(): XmlResolver {
		return this._resolver;
	}
	private cursorToken: XmlTextReader_XmlTokenInfo = null;
	private currentToken: XmlTextReader_XmlTokenInfo = null;
	private currentAttributeToken: XmlTextReader_XmlAttributeTokenInfo = null;
	private currentAttributeValueToken: XmlTextReader_XmlTokenInfo = null;
	private attributeTokens: XmlTextReader_XmlAttributeTokenInfo[] = <XmlTextReader_XmlAttributeTokenInfo[]>new Array(10);
	attributeValueTokens: XmlTextReader_XmlTokenInfo[] = <XmlTextReader_XmlTokenInfo[]>new Array(10);
	private currentAttribute: number = 0;
	private currentAttributeValue: number = 0;
	private _attributeCount: number = 0;
	private parserContext: XmlParserContext = null;
	private _nameTable: XmlNameTable = null;
	nsmgr: XmlNamespaceManager = null;
	private _readState: ReadState = <ReadState>0;
	private disallowReset: boolean = false;
	private _depth: number = 0;
	private elementDepth: number = 0;
	private depthUp: boolean = false;
	private popScope: boolean = false;
	private elementNames: XmlTextReader_TagName[] = null;
	private elementNameStackPos: number = 0;
	private allowMultipleRoot: boolean = false;
	private isStandalone: boolean = false;
	private returnEntityReference: boolean = false;
	private entityReferenceName: string = null;
	valueBuffer: StringBuilder = null;
	private reader: TextReader = null;
	private peekChars: string[] = null;
	private peekCharsIndex: number = 0;
	private peekCharsLength: number = 0;
	private curNodePeekIndex: number = 0;
	private preserveCurrentTag: boolean = false;
	private static readonly peekCharCapacity: number = 1024;
	private line: number = 0;
	private column: number = 0;
	private currentLinkedNodeLineNumber: number = 0;
	private currentLinkedNodeLinePosition: number = 0;
	private useProceedingLineInfo: boolean = false;
	private startNodeType: XmlNodeType = <XmlNodeType>0;
	private currentState: XmlNodeType = <XmlNodeType>0;
	private nestLevel: number = 0;
	private readCharsInProgress: boolean = false;
	private _namespaces: boolean = true;
	private _whitespaceHandling: WhitespaceHandling = WhitespaceHandling.All;
	private _resolver: XmlResolver = new XmlUrlResolver();
	private _normalization: boolean = false;
	private checkCharacters: boolean = false;
	private _prohibitDtd: boolean = false;
	private _closeInput: boolean = true;
	private entityHandling: EntityHandling = <EntityHandling>0;
	private whitespacePool: NameTable = null;
	private whitespaceCache: string[] = null;
	private notWFError(message: string): XmlException {
		return new XmlException(2, typeCast<IXmlLineInfo>(IXmlLineInfo_$type, this), this.baseURI, message);
	}
	private initXmlTextReader(): void {
		this.allowMultipleRoot = false;
		this.elementNames = <XmlTextReader_TagName[]>new Array(10);
		this.valueBuffer = new StringBuilder(0);
		this.checkCharacters = true;
		this._prohibitDtd = false;
		this._closeInput = true;
		this.entityHandling = EntityHandling.ExpandCharEntities;
		this.peekCharsIndex = 0;
		if (this.peekChars == null) {
			this.peekChars = <string[]>new Array(XmlTextReader.peekCharCapacity);
		}
		this.peekCharsLength = -1;
		this.curNodePeekIndex = -1;
		this.line = 1;
		this.column = 1;
		this.currentLinkedNodeLineNumber = this.currentLinkedNodeLinePosition = 0;
		this.clear();
	}
	private clear(): void {
		this.currentToken = new XmlTextReader_XmlTokenInfo(this);
		this.cursorToken = this.currentToken;
		this.currentAttribute = -1;
		this.currentAttributeValue = -1;
		this._attributeCount = 0;
		this._readState = ReadState.Initial;
		this._depth = 0;
		this.elementDepth = 0;
		this.depthUp = false;
		this.popScope = this.allowMultipleRoot = false;
		this.elementNameStackPos = 0;
		this.isStandalone = false;
		this.returnEntityReference = false;
		this.entityReferenceName = stringEmpty();
		this.useProceedingLineInfo = false;
		this.currentState = XmlNodeType.None;
		this.readCharsInProgress = false;
	}
	private initializeContext(url: string, context: XmlParserContext, fragment: TextReader, fragType: XmlNodeType): void {
		this.startNodeType = fragType;
		this.parserContext = context;
		if (context == null) {
			let nt: XmlNameTable = new NameTable();
			this.parserContext = new XmlParserContext(0, nt, new XmlNamespaceManager(nt), stringEmpty(), XmlSpace.None);
		}
		this._nameTable = this.parserContext.nameTable;
		this._nameTable = this._nameTable != null ? this._nameTable : new NameTable();
		this.nsmgr = this.parserContext.namespaceManager;
		this.nsmgr = this.nsmgr != null ? this.nsmgr : new XmlNamespaceManager(this._nameTable);
		if (url != null && url.length > 0) {
			let uri: Uri = null;
			try {
				uri = new Uri(0, url);
			}
			catch (e) {
				throw e;
			}
			this.parserContext.baseURI = uri.toString();
		}
		this.initXmlTextReader();
		this.reader = fragment;
		switch (fragType) {
			case XmlNodeType.Attribute:
			this.reader = new StringReader(stringReplace(fragment.readToEnd(), "\"", "&quot;"));
			break;

			case XmlNodeType.Element:
			this.currentState = XmlNodeType.Element;
			this.allowMultipleRoot = true;
			break;

			case XmlNodeType.Document: break;
			default: throw new XmlException(3, stringFormat("NodeType {0} is not allowed to create XmlTextReader.", enumGetBox<XmlNodeType>(XmlNodeType_$type, fragType)));
		}

	}
	private setProperties(nodeType: XmlNodeType, name: string, prefix: string, localName: string, isEmptyElement: boolean, value: string, clearAttributes: boolean): void {
		this.setTokenProperties(this.currentToken, nodeType, name, prefix, localName, isEmptyElement, value, clearAttributes);
		this.currentToken.lineNumber = this.currentLinkedNodeLineNumber;
		this.currentToken.linePosition = this.currentLinkedNodeLinePosition;
	}
	private setTokenProperties(token: XmlTextReader_XmlTokenInfo, nodeType: XmlNodeType, name: string, prefix: string, localName: string, isEmptyElement: boolean, value: string, clearAttributes: boolean): void {
		token.nodeType = nodeType;
		token.name = name;
		token.prefix = prefix;
		token.localName = localName;
		token.isEmptyElement = isEmptyElement;
		token.value = value;
		this.elementDepth = this._depth;
		if (clearAttributes) {
			this.clearAttributes();
		}
	}
	private clearAttributes(): void {
		this._attributeCount = 0;
		this.currentAttribute = -1;
		this.currentAttributeValue = -1;
	}
	private peekSurrogate(c: number): number {
		if (this.peekCharsLength <= this.peekCharsIndex + 1) {
			if (!this.readTextReader(c)) {
				return c;
			}
		}
		let highhalfChar: number = this.peekChars[this.peekCharsIndex].charCodeAt(0);
		let lowhalfChar: number = this.peekChars[this.peekCharsIndex + 1].charCodeAt(0);
		if (((highhalfChar & 64512) != 55296) || ((lowhalfChar & 64512) != 56320)) {
			return highhalfChar;
		}
		return 65536 + (highhalfChar - 55296) * 1024 + (lowhalfChar - 56320);
	}
	private peekChar(): number {
		if (this.peekCharsIndex < this.peekCharsLength) {
			let c: number = this.peekChars[this.peekCharsIndex].charCodeAt(0);
			if (c == 0) {
				return -1;
			}
			if (c < 55296 || c >= 57343) {
				return c;
			}
			return this.peekSurrogate(c);
		} else {
			if (!this.readTextReader(-1)) {
				return -1;
			}
			return this.peekChar();
		}
	}
	private readChar(): number {
		let ch: number = this.peekChar();
		this.peekCharsIndex++;
		if (ch >= 65536) {
			this.peekCharsIndex++;
		}
		if (ch == '\n'.charCodeAt(0)) {
			this.line++;
			this.column = 1;
		} else if (ch != -1) {
			this.column++;
		}
		return ch;
	}
	private advance(ch: number): void {
		this.peekCharsIndex++;
		if (ch >= 65536) {
			this.peekCharsIndex++;
		}
		if (ch == '\n'.charCodeAt(0)) {
			this.line++;
			this.column = 1;
		} else if (ch != -1) {
			this.column++;
		}
	}
	private readTextReader(remained: number): boolean {
		if (this.peekCharsLength < 0) {
			this.peekCharsLength = this.reader.read1(this.peekChars, 0, this.peekChars.length);
			return this.peekCharsLength > 0;
		}
		let offset: number = remained >= 0 ? 1 : 0;
		let copysize: number = this.peekCharsLength - this.curNodePeekIndex;
		if (!this.preserveCurrentTag) {
			this.curNodePeekIndex = 0;
			this.peekCharsIndex = 0;
		} else if (this.peekCharsLength < this.peekChars.length) {
		} else if (this.curNodePeekIndex <= (this.peekCharsLength >> 1)) {
			let tmp: string[] = <string[]>new Array(this.peekChars.length * 2);
			arrayCopy1(this.peekChars, this.curNodePeekIndex, tmp, 0, copysize);
			this.peekChars = tmp;
			this.curNodePeekIndex = 0;
			this.peekCharsIndex = copysize;
		} else {
			arrayCopy1(this.peekChars, this.curNodePeekIndex, this.peekChars, 0, copysize);
			this.curNodePeekIndex = 0;
			this.peekCharsIndex = copysize;
		}
		if (remained >= 0) {
			this.peekChars[this.peekCharsIndex] = <string>String.fromCharCode(remained);
		}
		let count: number = this.peekChars.length - this.peekCharsIndex - offset;
		if (count > XmlTextReader.peekCharCapacity) {
			count = XmlTextReader.peekCharCapacity;
		}
		let read: number = this.reader.read1(this.peekChars, this.peekCharsIndex + offset, count);
		let remainingSize: number = offset + read;
		this.peekCharsLength = this.peekCharsIndex + remainingSize;
		return (remainingSize != 0);
	}
	private readContent(): boolean {
		if (this.popScope) {
			this.nsmgr.popScope();
			this.parserContext.popScope();
			this.popScope = false;
		}
		if (this.returnEntityReference) {
			this.setEntityReferenceProperties();
		} else {
			let c: number = this.peekChar();
			if (c == -1) {
				this._readState = ReadState.EndOfFile;
				this.clearValueBuffer();
				this.setProperties(XmlNodeType.None, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
				if (this._depth > 0) {
					throw this.notWFError("unexpected end of file. Current depth is " + this._depth);
				}
				return false;
			} else {
				switch (c) {
					case 60:
					this.advance(c);
					switch (this.peekChar()) {
						case 47:
						this.advance(47);
						this.readEndTag();
						break;

						case 63:
						this.advance(63);
						this.readProcessingInstruction();
						break;

						case 33:
						this.advance(33);
						this.readDeclaration();
						break;

						default:
						this.readStartTag();
						break;

					}

					break;

					case 13:

					case 10:

					case 9:

					case 32:
					if (!this.readWhitespace()) {
						return this.readContent();
					}
					break;

					default:
					this.readText(true);
					break;

				}

			}
		}
		return this.readState != ReadState.EndOfFile;
	}
	private setEntityReferenceProperties(): void {
		this.clearValueBuffer();
		this.setProperties(XmlNodeType.EntityReference, this.entityReferenceName, stringEmpty(), this.entityReferenceName, false, null, true);
		this.returnEntityReference = false;
		this.entityReferenceName = stringEmpty();
	}
	private readStartTag(): void {
		if (this.currentState == XmlNodeType.EndElement) {
			throw this.notWFError("Multiple document element was detected.");
		}
		this.currentState = XmlNodeType.Element;
		this.nsmgr.pushScope();
		this.currentLinkedNodeLineNumber = this.line;
		this.currentLinkedNodeLinePosition = this.column;
		let prefix: string, localName: string;
		let name: string = ((() => { let $ret = this.readName1(prefix, localName); prefix = $ret.p0; localName = $ret.p1; return $ret.ret; })());
		if (<XmlNodeType>this.currentState == XmlNodeType.EndElement) {
			throw this.notWFError("document has terminated, cannot open new element");
		}
		let isEmptyElement: boolean = false;
		this.clearAttributes();
		this.skipWhitespace();
		if (XmlChar.isFirstNameChar(this.peekChar())) {
			this.readAttributes(false);
		}
		this.cursorToken = this.currentToken;
		for (let i: number = 0; i < this._attributeCount; i++) {
			this.attributeTokens[i].fillXmlns();
		}
		for (let i1: number = 0; i1 < this._attributeCount; i1++) {
			this.attributeTokens[i1].fillNamespace();
		}
		if (this._namespaces) {
			for (let i2: number = 0; i2 < this._attributeCount; i2++) {
				if (this.attributeTokens[i2].prefix == "xmlns" && this.attributeTokens[i2].value == stringEmpty()) {
					throw this.notWFError("Empty namespace URI cannot be mapped to non-empty prefix.");
				}
			}
		}
		for (let i3: number = 0; i3 < this._attributeCount; i3++) {
			for (let j: number = i3 + 1; j < this._attributeCount; j++) {
				if (Base.referenceEquals(this.attributeTokens[i3].name, this.attributeTokens[j].name) || (Base.referenceEquals(this.attributeTokens[i3].localName, this.attributeTokens[j].localName) && Base.referenceEquals(this.attributeTokens[i3].namespaceURI, this.attributeTokens[j].namespaceURI))) {
					throw this.notWFError("Attribute name and qualified name must be identical.");
				}
			}
		}
		if (this.peekChar() == '/'.charCodeAt(0)) {
			this.advance('/'.charCodeAt(0));
			isEmptyElement = true;
			this.popScope = true;
		} else {
			this.depthUp = true;
			this.pushElementName(name, localName, prefix);
		}
		this.parserContext.pushScope();
		this.expect('>'.charCodeAt(0));
		this.setProperties(XmlNodeType.Element, name, prefix, localName, isEmptyElement, null, false);
		if (prefix.length > 0) {
			this.currentToken.namespaceURI = this.lookupNamespace1(prefix, true);
		} else if (this._namespaces) {
			this.currentToken.namespaceURI = this.nsmgr.defaultNamespace;
		}
		if (this._namespaces) {
			if (this.namespaceURI == null) {
				throw this.notWFError(stringFormat("'{0}' is undeclared namespace.", this.prefix));
			}
			try {
				for (let i4: number = 0; i4 < this._attributeCount; i4++) {
					this.moveToAttribute2(i4);
					if (this.namespaceURI == null) {
						throw this.notWFError(stringFormat("'{0}' is undeclared namespace.", this.prefix));
					}
				}
			}
			finally {
				this.moveToElement();
			}
		}
		for (let i5: number = 0; i5 < this._attributeCount; i5++) {
			if (!Base.referenceEquals(this.attributeTokens[i5].prefix, XmlNamespaceManager.prefixXml)) {
				continue;
			}
			let aname: string = this.attributeTokens[i5].localName;
			let value: string = this.attributeTokens[i5].value;
			switch (aname) {
				case "base":
				if (this._resolver != null) {
					let buri: Uri = this.baseURI != stringEmpty() ? new Uri(0, this.baseURI) : null;
					if (buri == null && stringIsNullOrEmpty(value)) {
						break;
					}
					let uri: Uri = this._resolver.resolveUri(buri, value);
					this.parserContext.baseURI = uri != null ? uri.toString() : stringEmpty();
				} else {
					this.parserContext.baseURI = value;
				}
				break;

				case "lang":
				this.parserContext.xmlLang = value;
				break;

				case "space":
				switch (value) {
					case "preserve":
					this.parserContext.xmlSpace = XmlSpace.Preserve;
					break;

					case "default":
					this.parserContext.xmlSpace = XmlSpace.Default;
					break;

					default: throw this.notWFError(stringFormat("Invalid xml:space value: {0}", value));
				}

				break;

			}

		}
		if (this.isEmptyElement) {
			this.checkCurrentStateUpdate();
		}
	}
	private pushElementName(name: string, local: string, prefix: string): void {
		if (this.elementNames.length == this.elementNameStackPos) {
			let newArray: XmlTextReader_TagName[] = <XmlTextReader_TagName[]>new Array(this.elementNames.length * 2);
			arrayCopy1(this.elementNames, 0, newArray, 0, this.elementNameStackPos);
			this.elementNames = newArray;
		}
		this.elementNames[this.elementNameStackPos++] = new XmlTextReader_TagName(1, name, local, prefix);
	}
	private readEndTag(): void {
		if (this.currentState != XmlNodeType.Element) {
			throw this.notWFError("End tag cannot appear in this state.");
		}
		this.currentLinkedNodeLineNumber = this.line;
		this.currentLinkedNodeLinePosition = this.column;
		if (this.elementNameStackPos == 0) {
			throw this.notWFError("closing element without matching opening element");
		}
		let expected: XmlTextReader_TagName = this.elementNames[--this.elementNameStackPos];
		this.expect1(expected.name);
		this.expectAfterWhitespace('>');
		--this._depth;
		this.setProperties(XmlNodeType.EndElement, expected.name, expected.prefix, expected.localName, false, null, true);
		if (expected.prefix.length > 0) {
			this.currentToken.namespaceURI = this.lookupNamespace1(expected.prefix, true);
		} else if (this._namespaces) {
			this.currentToken.namespaceURI = this.nsmgr.defaultNamespace;
		}
		this.popScope = true;
		this.checkCurrentStateUpdate();
	}
	private checkCurrentStateUpdate(): void {
		if (this._depth == 0 && !this.allowMultipleRoot && (this.isEmptyElement || this.nodeType == XmlNodeType.EndElement)) {
			this.currentState = XmlNodeType.EndElement;
		}
	}
	private appendValueChar(ch: number): void {
		if (ch <= charMaxValue().charCodeAt(0)) {
			this.valueBuffer.append1(<string>String.fromCharCode(ch));
		} else {
			this.appendSurrogatePairValueChar(ch);
		}
	}
	private appendSurrogatePairValueChar(ch: number): void {
		this.valueBuffer.append1(<string>String.fromCharCode((intDivide((ch - 65536), 1024) + 55296)));
		this.valueBuffer.append1(<string>String.fromCharCode(((ch - 65536) % 1024 + 56320)));
	}
	createValueString(): string {
		switch (this.nodeType) {
			case XmlNodeType.Whitespace:

			case XmlNodeType.SignificantWhitespace:
			let len: number = this.valueBuffer.length;
			if (this.whitespaceCache == null) {
				this.whitespaceCache = <string[]>new Array(32);
			}
			if (len >= this.whitespaceCache.length) {
				break;
			}
			if (this.whitespacePool == null) {
				this.whitespacePool = new NameTable();
			}
			for (let i: number = 0; i < len; i++) {
				this.whitespaceCache[i] = this.valueBuffer.item(i);
			}
			return this.whitespacePool.add(this.whitespaceCache, 0, this.valueBuffer.length);

		}

		return (this.valueBuffer.capacity < 100) ? this.valueBuffer.toString1(0, this.valueBuffer.length) : this.valueBuffer.toString();
	}
	private clearValueBuffer(): void {
		this.valueBuffer.length = 0;
	}
	private readText(notWhitespace: boolean): void {
		if (this.currentState != XmlNodeType.Element) {
			throw this.notWFError("Text node cannot appear in this state.");
		}
		this.preserveCurrentTag = false;
		if (notWhitespace) {
			this.clearValueBuffer();
		}
		let ch: number = this.peekChar();
		let previousWasCloseBracket: boolean = false;
		while (ch != '<'.charCodeAt(0) && ch != -1) {
			if (ch == '&'.charCodeAt(0)) {
				this.readChar();
				ch = this.readReference(false);
				if (this.returnEntityReference) {
					break;
				}
			} else if (this._normalization && ch == '\r'.charCodeAt(0)) {
				this.readChar();
				ch = this.peekChar();
				if (ch != '\n'.charCodeAt(0)) {
					this.appendValueChar('\n'.charCodeAt(0));
				}
				continue;
			} else {
				if (this.characterChecking && XmlChar.isInvalid(ch)) {
					throw this.notWFError("Not allowed character was found.");
				}
				ch = this.readChar();
			}
			{
				if (ch <= charMaxValue().charCodeAt(0)) {
					this.valueBuffer.append1(<string>String.fromCharCode(ch));
				} else {
					this.appendSurrogatePairValueChar(ch);
				}
			}
			if (ch == ']'.charCodeAt(0)) {
				if (previousWasCloseBracket) {
					if (this.peekChar() == '>'.charCodeAt(0)) {
						throw this.notWFError("Inside text content, character sequence ']]>' is not allowed.");
					}
				}
				previousWasCloseBracket = true;
			} else if (previousWasCloseBracket) {
				previousWasCloseBracket = false;
			}
			ch = this.peekChar();
			notWhitespace = true;
		}
		if (this.returnEntityReference && this.valueBuffer.length == 0) {
			this.setEntityReferenceProperties();
		} else {
			let nodeType: XmlNodeType = notWhitespace ? XmlNodeType.Text : this.xmlSpace == XmlSpace.Preserve ? XmlNodeType.SignificantWhitespace : XmlNodeType.Whitespace;
			this.setProperties(nodeType, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
		}
	}
	private readReference(ignoreEntityReferences: boolean): number {
		if (this.peekChar() == '#'.charCodeAt(0)) {
			this.advance('#'.charCodeAt(0));
			return this.readCharacterReference();
		} else {
			return this.readEntityReference(ignoreEntityReferences);
		}
	}
	private readCharacterReference(): number {
		let value: number = 0;
		let ch: number;
		if (this.peekChar() == 'x'.charCodeAt(0)) {
			this.advance('x'.charCodeAt(0));
			while ((ch = this.peekChar()) != ';'.charCodeAt(0) && ch != -1) {
				this.advance(ch);
				if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
					value = (value << 4) + ch - '0'.charCodeAt(0);
				} else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
					value = (value << 4) + ch - 'A'.charCodeAt(0) + 10;
				} else if (ch >= 'a'.charCodeAt(0) && ch <= 'f'.charCodeAt(0)) {
					value = (value << 4) + ch - 'a'.charCodeAt(0) + 10;
				} else {
					throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "invalid hexadecimal digit: {0} (#x{1:X})", <string>String.fromCharCode(ch), ch));
				}
			}
		} else {
			while ((ch = this.peekChar()) != ';'.charCodeAt(0) && ch != -1) {
				this.advance(ch);
				if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
					value = value * 10 + ch - '0'.charCodeAt(0);
				} else {
					throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "invalid decimal digit: {0} (#x{1:X})", <string>String.fromCharCode(ch), ch));
				}
			}
		}
		this.readChar();
		if (this.characterChecking && this.normalization && XmlChar.isInvalid(value)) {
			throw this.notWFError("Referenced character was not allowed in XML. Normalization is " + this._normalization + ", checkCharacters = " + this.checkCharacters);
		}
		return value;
	}
	private readEntityReference(ignoreEntityReferences: boolean): number {
		let name: string = this.readName();
		this.expect(';'.charCodeAt(0));
		let predefined: number = XmlChar.getPredefinedEntity(name);
		if (predefined >= 0) {
			return predefined;
		} else {
			if (ignoreEntityReferences) {
				this.appendValueChar('&'.charCodeAt(0));
				for (let i: number = 0; i < name.length; i++) {
					this.appendValueChar(name.charAt(i).charCodeAt(0));
				}
				this.appendValueChar(';'.charCodeAt(0));
			} else {
				this.returnEntityReference = true;
				this.entityReferenceName = name;
			}
		}
		return -1;
	}
	private readAttributes(isXmlDecl: boolean): void {
		let peekChar: number = -1;
		let requireWhitespace: boolean = false;
		this.currentAttribute = -1;
		this.currentAttributeValue = -1;
		do {
			if (!this.skipWhitespace() && requireWhitespace) {
				throw this.notWFError("Unexpected token. Name is required here.");
			}
			this.incrementAttributeToken();
			this.currentAttributeToken.lineNumber = this.line;
			this.currentAttributeToken.linePosition = this.column;
			let prefix: string, localName: string;
			this.currentAttributeToken.name = ((() => { let $ret = this.readName1(prefix, localName); prefix = $ret.p0; localName = $ret.p1; return $ret.ret; })());
			this.currentAttributeToken.prefix = prefix;
			this.currentAttributeToken.localName = localName;
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			this.readAttributeValueTokens(-1);
			let dummyValue: string;
			if (isXmlDecl) {
				dummyValue = this.currentAttributeToken.value;
			}
			this._attributeCount++;
			if (!this.skipWhitespace()) {
				requireWhitespace = true;
			}
			peekChar = this.peekChar();
			if (isXmlDecl) {
				if (peekChar == '?'.charCodeAt(0)) {
					break;
				}
			} else if (peekChar == '/'.charCodeAt(0) || peekChar == '>'.charCodeAt(0)) {
				break;
			}
		} while (peekChar != -1);
		this.currentAttribute = -1;
		this.currentAttributeValue = -1;
	}
	private addAttributeWithValue(name: string, value: string): void {
		this.incrementAttributeToken();
		let ati: XmlTextReader_XmlAttributeTokenInfo = this.attributeTokens[this.currentAttribute];
		ati.name = this.nameTable.add1(name);
		ati.prefix = stringEmpty();
		ati.namespaceURI = stringEmpty();
		this.incrementAttributeValueToken();
		let vti: XmlTextReader_XmlTokenInfo = this.attributeValueTokens[this.currentAttributeValue];
		this.setTokenProperties(vti, XmlNodeType.Text, stringEmpty(), stringEmpty(), stringEmpty(), false, value, false);
		ati.value = value;
		this._attributeCount++;
	}
	private incrementAttributeToken(): void {
		this.currentAttribute++;
		if (this.attributeTokens.length == this.currentAttribute) {
			let newArray: XmlTextReader_XmlAttributeTokenInfo[] = <XmlTextReader_XmlAttributeTokenInfo[]>new Array(this.attributeTokens.length * 2);
			arrayCopyTo(this.attributeTokens, newArray, 0);
			this.attributeTokens = newArray;
		}
		if (this.attributeTokens[this.currentAttribute] == null) {
			this.attributeTokens[this.currentAttribute] = new XmlTextReader_XmlAttributeTokenInfo(this);
		}
		this.currentAttributeToken = this.attributeTokens[this.currentAttribute];
		this.currentAttributeToken.clear();
	}
	private incrementAttributeValueToken(): void {
		this.currentAttributeValue++;
		if (this.attributeValueTokens.length == this.currentAttributeValue) {
			let newArray: XmlTextReader_XmlTokenInfo[] = <XmlTextReader_XmlTokenInfo[]>new Array(this.attributeValueTokens.length * 2);
			arrayCopyTo(this.attributeValueTokens, newArray, 0);
			this.attributeValueTokens = newArray;
		}
		if (this.attributeValueTokens[this.currentAttributeValue] == null) {
			this.attributeValueTokens[this.currentAttributeValue] = new XmlTextReader_XmlTokenInfo(this);
		}
		this.currentAttributeValueToken = this.attributeValueTokens[this.currentAttributeValue];
		this.currentAttributeValueToken.clear();
	}
	private readAttributeValueTokens(dummyQuoteChar: number): void {
		let quoteChar: number = (dummyQuoteChar < 0) ? this.readChar() : dummyQuoteChar;
		if (quoteChar != '\''.charCodeAt(0) && quoteChar != '\"'.charCodeAt(0)) {
			throw this.notWFError("an attribute value was not quoted");
		}
		this.currentAttributeToken.quoteChar = <string>String.fromCharCode(quoteChar);
		this.incrementAttributeValueToken();
		this.currentAttributeToken.valueTokenStartIndex = this.currentAttributeValue;
		this.currentAttributeValueToken.lineNumber = this.line;
		this.currentAttributeValueToken.linePosition = this.column;
		let incrementToken: boolean = false;
		let isNewToken: boolean = true;
		let loop: boolean = true;
		let ch: number = 0;
		this.currentAttributeValueToken.valueBufferStart = this.valueBuffer.length;
		L0: while (loop) {
			ch = this.readChar();
			if (ch == quoteChar) {
				break;
			}
			if (incrementToken) {
				this.incrementAttributeValueToken();
				this.currentAttributeValueToken.valueBufferStart = this.valueBuffer.length;
				this.currentAttributeValueToken.lineNumber = this.line;
				this.currentAttributeValueToken.linePosition = this.column;
				incrementToken = false;
				isNewToken = true;
			}
			let t1 = ch;
			L1: while (true) {
				switch (t1) {
					case '<'.charCodeAt(0): throw this.notWFError("attribute values cannot contain '<'");
					case -1:
					if (dummyQuoteChar < 0) {
						throw this.notWFError("unexpected end of file in an attribute value");
					} else {
						loop = false;
					}
					break;

					case '\r'.charCodeAt(0):
					if (!this._normalization) {
						t1 = void 0;
						continue L1;
					}
					if (this.peekChar() == '\n'.charCodeAt(0)) {
						continue L0;
					}
					if (!this._normalization) {
						t1 = void 0;
						continue L1;
					}
					ch = ' '.charCodeAt(0);
					t1 = void 0;
					continue L1;

					case '\n'.charCodeAt(0):

					case '\t'.charCodeAt(0):
					if (!this._normalization) {
						t1 = void 0;
						continue L1;
					}
					ch = ' '.charCodeAt(0);
					t1 = void 0;
					continue L1;

					case '&'.charCodeAt(0):
					if (this.peekChar() == '#'.charCodeAt(0)) {
						this.advance('#'.charCodeAt(0));
						ch = this.readCharacterReference();
						this.appendValueChar(ch);
						break;
					}
					let entName: string = this.readName();
					this.expect(';'.charCodeAt(0));
					let predefined: number = XmlChar.getPredefinedEntity(entName);
					if (predefined < 0) {
						{
							this.currentAttributeValueToken.valueBufferEnd = this.valueBuffer.length;
							this.currentAttributeValueToken.nodeType = XmlNodeType.Text;
							if (!isNewToken) {
								this.incrementAttributeValueToken();
							}
							this.currentAttributeValueToken.name = entName;
							this.currentAttributeValueToken.value = stringEmpty();
							this.currentAttributeValueToken.nodeType = XmlNodeType.EntityReference;
							incrementToken = true;
						}
					} else {
						this.appendValueChar(predefined);
					}
					break;

					default:
					if (this.characterChecking && XmlChar.isInvalid(ch)) {
						throw this.notWFError("Invalid character was found.");
					}
					{
						if (ch <= charMaxValue().charCodeAt(0)) {
							this.valueBuffer.append1(<string>String.fromCharCode(ch));
						} else {
							this.appendSurrogatePairValueChar(ch);
						}
					}
					break;

				}

				break;
			}
			isNewToken = false;
		}
		if (!incrementToken) {
			this.currentAttributeValueToken.valueBufferEnd = this.valueBuffer.length;
			this.currentAttributeValueToken.nodeType = XmlNodeType.Text;
		}
		this.currentAttributeToken.valueTokenEndIndex = this.currentAttributeValue;
	}
	private readProcessingInstruction(): void {
		let target: string = this.readName();
		if (target != "xml" && stringToLocaleLower(target, CultureInfo.invariantCulture) == "xml") {
			throw this.notWFError("Not allowed processing instruction name which starts with 'X', 'M', 'L' was found.");
		}
		if (!this.skipWhitespace()) {
			if (this.peekChar() != '?'.charCodeAt(0)) {
				throw this.notWFError("Invalid processing instruction name was found.");
			}
		}
		this.clearValueBuffer();
		let ch: number;
		while ((ch = this.peekChar()) != -1) {
			this.advance(ch);
			if (ch == '?'.charCodeAt(0) && this.peekChar() == '>'.charCodeAt(0)) {
				this.advance('>'.charCodeAt(0));
				break;
			}
			if (this.characterChecking && XmlChar.isInvalid(ch)) {
				throw this.notWFError("Invalid character was found.");
			}
			this.appendValueChar(ch);
		}
		if (Base.referenceEquals(target, XmlNamespaceManager.prefixXml)) {
			this.verifyXmlDeclaration();
		} else {
			if (this.currentState == XmlNodeType.None) {
				this.currentState = XmlNodeType.XmlDeclaration;
			}
			this.setProperties(XmlNodeType.ProcessingInstruction, target, stringEmpty(), target, false, null, true);
		}
	}
	private verifyXmlDeclaration(): void {
		if (!this.allowMultipleRoot && this.currentState != XmlNodeType.None) {
			throw this.notWFError("XML declaration cannot appear in this state.");
		}
		this.currentState = XmlNodeType.XmlDeclaration;
		let text: string = this.createValueString();
		this.clearAttributes();
		let idx: number = 0;
		let encoding: string = null, standalone: string = null;
		let name: string, value: string;
		let $ret = this.parseAttributeFromString(text, idx, name, value);
		idx = $ret.p1;
		name = $ret.p2;
		value = $ret.p3;
		if (name != "version" || value != "1.0") {
			throw this.notWFError("'version' is expected.");
		}
		name = stringEmpty();
		if (((() => { let $ret = this.skipWhitespaceInString(text, idx); idx = $ret.p1; return $ret.ret; })()) && idx < text.length) {
			let $ret1 = this.parseAttributeFromString(text, idx, name, value);
			idx = $ret1.p1;
			name = $ret1.p2;
			value = $ret1.p3;
		}
		if (name == "encoding") {
			if (!XmlChar.isValidIANAEncoding(value)) {
				throw this.notWFError("'encoding' must be a valid IANA encoding name.");
			}
			if (typeCast<XmlStreamReader>((<any>XmlStreamReader).$type, this.reader) !== null) {
				this.parserContext.encoding = (<XmlStreamReader>this.reader).encoding;
			} else {
				if (this.parserContext.encoding == null && stringCompare1(value, "UTF-8", StringComparison.InvariantCulture) == 0) {
					this.parserContext.encoding = Encoding.uTF8;
				} else {
					this.parserContext.encoding = Encoding.unicode;
				}
			}
			encoding = value;
			name = stringEmpty();
			if (((() => { let $ret = this.skipWhitespaceInString(text, idx); idx = $ret.p1; return $ret.ret; })()) && idx < text.length) {
				let $ret2 = this.parseAttributeFromString(text, idx, name, value);
				idx = $ret2.p1;
				name = $ret2.p2;
				value = $ret2.p3;
			}
		}
		if (name == "standalone") {
			this.isStandalone = value == "yes";
			if (value != "yes" && value != "no") {
				throw this.notWFError("Only 'yes' or 'no' is allow for 'standalone'");
			}
			standalone = value;
			let $ret3 = this.skipWhitespaceInString(text, idx);
			idx = $ret3.p1;
		} else if (name.length != 0) {
			throw this.notWFError(stringFormat("Unexpected token: '{0}'", name));
		}
		if (idx < text.length) {
			throw this.notWFError("'?' is expected.");
		}
		this.addAttributeWithValue("version", "1.0");
		if (encoding != null) {
			this.addAttributeWithValue("encoding", encoding);
		}
		if (standalone != null) {
			this.addAttributeWithValue("standalone", standalone);
		}
		this.currentAttribute = this.currentAttributeValue = -1;
		this.setProperties(XmlNodeType.XmlDeclaration, "xml", stringEmpty(), "xml", false, text, false);
	}
	private skipWhitespaceInString(text: string, idx: number): { ret: boolean; p1?: number; } {
		let start: number = idx;
		while (idx < text.length && XmlChar.isWhitespace(text.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		return {
			ret: idx - start > 0,
			p1: idx

		};
	}
	private parseAttributeFromString(src: string, idx: number, name: string, value: string): { p1?: number; p2: string; p3: string; } {
		while (idx < src.length && XmlChar.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		let start: number = idx;
		while (idx < src.length && XmlChar.isNameChar(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		name = src.substr(start, idx - start);
		while (idx < src.length && XmlChar.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		if (idx == src.length || src.charAt(idx) != '=') {
			throw this.notWFError(stringFormat("'=' is expected after {0}", name));
		}
		idx++;
		while (idx < src.length && XmlChar.isWhitespace(src.charAt(idx).charCodeAt(0))) {
			idx++;
		}
		if (idx == src.length || src.charAt(idx) != '\"' && src.charAt(idx) != '\'') {
			throw this.notWFError("'\"' or ''' is expected.");
		}
		let quote: string = src.charAt(idx);
		idx++;
		start = idx;
		while (idx < src.length && src.charAt(idx) != quote) {
			idx++;
		}
		idx++;
		value = src.substr(start, idx - start - 1);
		return {
			p1: idx,
			p2: name,
			p3: value

		};
	}
	skipTextDeclaration(): void {
		if (this.peekChar() != '<'.charCodeAt(0)) {
			return;
		}
		this.readChar();
		if (this.peekChar() != '?'.charCodeAt(0)) {
			this.peekCharsIndex = 0;
			return;
		}
		this.readChar();
		while (this.peekCharsIndex < 6) {
			if (this.peekChar() < 0) {
				break;
			} else {
				this.readChar();
			}
		}
		if (stringCreateFromCharArraySlice(this.peekChars, 2, 4) != "xml ") {
			if (stringToLocaleLower(stringCreateFromCharArraySlice(this.peekChars, 2, 4), CultureInfo.invariantCulture) == "xml ") {
				throw this.notWFError("Processing instruction name must not be character sequence 'X' 'M' 'L' with case insensitivity.");
			}
			this.peekCharsIndex = 0;
			return;
		}
		this.skipWhitespace();
		if (this.peekChar() == 'v'.charCodeAt(0)) {
			this.expect1("version");
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			let quoteChar: number = this.readChar();
			let expect1_0: string[] = <string[]>new Array(3);
			let versionLength: number = 0;
			switch (quoteChar) {
				case '\''.charCodeAt(0):

				case '\"'.charCodeAt(0):
				while (this.peekChar() != quoteChar) {
					if (this.peekChar() == -1) {
						throw this.notWFError("Invalid version declaration inside text declaration.");
					} else if (versionLength == 3) {
						throw this.notWFError("Invalid version number inside text declaration.");
					} else {
						expect1_0[versionLength] = <string>String.fromCharCode(this.readChar());
						versionLength++;
						if (versionLength == 3 && stringCreateFromCharArray(expect1_0) != "1.0") {
							throw this.notWFError("Invalid version number inside text declaration.");
						}
					}
				}
				this.readChar();
				this.skipWhitespace();
				break;

				default: throw this.notWFError("Invalid version declaration inside text declaration.");
			}

		}
		if (this.peekChar() == 'e'.charCodeAt(0)) {
			this.expect1("encoding");
			this.expectAfterWhitespace('=');
			this.skipWhitespace();
			let quoteChar1: number = this.readChar();
			switch (quoteChar1) {
				case '\''.charCodeAt(0):

				case '\"'.charCodeAt(0):
				while (this.peekChar() != quoteChar1) {
					if (this.readChar() == -1) {
						throw this.notWFError("Invalid encoding declaration inside text declaration.");
					}
				}
				this.readChar();
				this.skipWhitespace();
				break;

				default: throw this.notWFError("Invalid encoding declaration inside text declaration.");
			}

		}
		this.expect1("?>");
		this.curNodePeekIndex = this.peekCharsIndex;
	}
	private readDeclaration(): void {
		let ch: number = this.peekChar();
		switch (ch) {
			case '-'.charCodeAt(0):
			this.expect1("--");
			this.readComment();
			break;

			case '['.charCodeAt(0):
			this.readChar();
			this.expect1("CDATA[");
			this.readCDATA();
			break;

			case 'D'.charCodeAt(0):
			this.expect1("DOCTYPE");
			this.readDoctypeDecl();
			break;

			default: throw this.notWFError("Unexpected declaration markup was found.");
		}

	}
	private readComment(): void {
		if (this.currentState == XmlNodeType.None) {
			this.currentState = XmlNodeType.XmlDeclaration;
		}
		this.preserveCurrentTag = false;
		this.clearValueBuffer();
		let ch: number;
		while ((ch = this.peekChar()) != -1) {
			this.advance(ch);
			if (ch == '-'.charCodeAt(0) && this.peekChar() == '-'.charCodeAt(0)) {
				this.advance('-'.charCodeAt(0));
				if (this.peekChar() != '>'.charCodeAt(0)) {
					throw this.notWFError("comments cannot contain '--'");
				}
				this.advance('>'.charCodeAt(0));
				break;
			}
			if (XmlChar.isInvalid(ch)) {
				throw this.notWFError("Not allowed character was found.");
			}
			this.appendValueChar(ch);
		}
		this.setProperties(XmlNodeType.Comment, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
	}
	private readCDATA(): void {
		if (this.currentState != XmlNodeType.Element) {
			throw this.notWFError("CDATA section cannot appear in this state.");
		}
		this.preserveCurrentTag = false;
		this.clearValueBuffer();
		let skip: boolean = false;
		let ch: number = 0;
		while (this.peekChar() != -1) {
			if (!skip) {
				ch = this.readChar();
			}
			skip = false;
			if (ch == ']'.charCodeAt(0) && this.peekChar() == ']'.charCodeAt(0)) {
				ch = this.readChar();
				if (this.peekChar() == '>'.charCodeAt(0)) {
					this.readChar();
					break;
				} else {
					skip = true;
				}
			}
			if (this._normalization && ch == '\r'.charCodeAt(0)) {
				ch = this.peekChar();
				if (ch != '\n'.charCodeAt(0)) {
					this.appendValueChar('\n'.charCodeAt(0));
				}
				continue;
			}
			if (this.characterChecking && XmlChar.isInvalid(ch)) {
				throw this.notWFError("Invalid character was found.");
			}
			{
				if (ch <= charMaxValue().charCodeAt(0)) {
					this.valueBuffer.append1(<string>String.fromCharCode(ch));
				} else {
					this.appendSurrogatePairValueChar(ch);
				}
			}
		}
		this.setProperties(XmlNodeType.CDATA, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
	}
	private readDoctypeDecl(): void {
		if (this._prohibitDtd) {
			throw this.notWFError("Document Type Declaration (DTD) is prohibited in this XML.");
		}
		switch (this.currentState) {
			case XmlNodeType.DocumentType:

			case XmlNodeType.Element:

			case XmlNodeType.EndElement: throw this.notWFError("Document type cannot appear in this state.");
		}

		this.currentState = XmlNodeType.DocumentType;
		let doctypeName: string = null;
		let publicId: string = null;
		let systemId: string = null;
		let intSubsetStartLine: number = 0;
		let intSubsetStartColumn: number = 0;
		this.skipWhitespace();
		doctypeName = this.readName();
		this.skipWhitespace();
		switch (this.peekChar()) {
			case 'S'.charCodeAt(0):
			systemId = this.readSystemLiteral(true);
			break;

			case 'P'.charCodeAt(0):
			publicId = this.readPubidLiteral();
			if (!this.skipWhitespace()) {
				throw this.notWFError("Whitespace is required between PUBLIC id and SYSTEM id.");
			}
			systemId = this.readSystemLiteral(false);
			break;

		}

		this.skipWhitespace();
		if (this.peekChar() == '['.charCodeAt(0)) {
			this.readChar();
			intSubsetStartLine = this.lineNumber;
			intSubsetStartColumn = this.linePosition;
			this.clearValueBuffer();
			this.readInternalSubset();
			this.parserContext.internalSubset = this.createValueString();
		}
		this.expectAfterWhitespace('>');
		this.setProperties(XmlNodeType.DocumentType, doctypeName, stringEmpty(), doctypeName, false, this.parserContext.internalSubset, true);
		if (publicId != null) {
			this.addAttributeWithValue("PUBLIC", publicId);
		}
		if (systemId != null) {
			this.addAttributeWithValue("SYSTEM", systemId);
		}
		this.currentAttribute = this.currentAttributeValue = -1;
	}
	generateDTDObjectModel(docTypeName: string, pubId: string, sysId: string, internalSubset: string): DTDObjectModel {
		return new DTDObjectModel();
	}
	private stateStack: XmlTextReader_DtdInputStateStack = new XmlTextReader_DtdInputStateStack();
	private get state(): XmlTextReader_DtdInputState {
		return this.stateStack.peek();
	}
	private readValueChar(): number {
		let ret: number = this.readChar();
		this.appendValueChar(ret);
		return ret;
	}
	private expectAndAppend(s: string): void {
		this.expect1(s);
		this.valueBuffer.append5(s);
	}
	private readInternalSubset(): void {
		let continueParse: boolean = true;
		L0: while (continueParse) {
			switch (this.readValueChar()) {
				case ']'.charCodeAt(0):
				switch (this.state) {
					case XmlTextReader_DtdInputState.Free:
					this.valueBuffer.remove(this.valueBuffer.length - 1, 1);
					continueParse = false;
					break;

					case XmlTextReader_DtdInputState.InsideDoubleQuoted:

					case XmlTextReader_DtdInputState.InsideSingleQuoted:

					case XmlTextReader_DtdInputState.Comment: continue L0;
					default: throw this.notWFError("unexpected end of file at DTD.");
				}

				break;

				case -1: throw this.notWFError("unexpected end of file at DTD.");
				case '<'.charCodeAt(0):
				switch (this.state) {
					case XmlTextReader_DtdInputState.InsideDoubleQuoted:

					case XmlTextReader_DtdInputState.InsideSingleQuoted:

					case XmlTextReader_DtdInputState.Comment: continue L0;
				}

				let c: number = this.readValueChar();
				switch (c) {
					case '?'.charCodeAt(0):
					this.stateStack.push(XmlTextReader_DtdInputState.PI);
					break;

					case '!'.charCodeAt(0):
					switch (this.readValueChar()) {
						case 'E'.charCodeAt(0):
						switch (this.readValueChar()) {
							case 'L'.charCodeAt(0):
							this.expectAndAppend("EMENT");
							this.stateStack.push(XmlTextReader_DtdInputState.ElementDecl);
							break;

							case 'N'.charCodeAt(0):
							this.expectAndAppend("TITY");
							this.stateStack.push(XmlTextReader_DtdInputState.EntityDecl);
							break;

							default: throw this.notWFError("unexpected token '<!E'.");
						}

						break;

						case 'A'.charCodeAt(0):
						this.expectAndAppend("TTLIST");
						this.stateStack.push(XmlTextReader_DtdInputState.AttlistDecl);
						break;

						case 'N'.charCodeAt(0):
						this.expectAndAppend("OTATION");
						this.stateStack.push(XmlTextReader_DtdInputState.NotationDecl);
						break;

						case '-'.charCodeAt(0):
						this.expectAndAppend("-");
						this.stateStack.push(XmlTextReader_DtdInputState.Comment);
						break;

					}

					break;

					default: throw this.notWFError(stringFormat("unexpected '<{0}'.", <string>String.fromCharCode(c)));
				}

				break;

				case '\''.charCodeAt(0):
				if (this.state == XmlTextReader_DtdInputState.InsideSingleQuoted) {
					this.stateStack.pop();
				} else if (this.state != XmlTextReader_DtdInputState.InsideDoubleQuoted && this.state != XmlTextReader_DtdInputState.Comment) {
					this.stateStack.push(XmlTextReader_DtdInputState.InsideSingleQuoted);
				}
				break;

				case '\"'.charCodeAt(0):
				if (this.state == XmlTextReader_DtdInputState.InsideDoubleQuoted) {
					this.stateStack.pop();
				} else if (this.state != XmlTextReader_DtdInputState.InsideSingleQuoted && this.state != XmlTextReader_DtdInputState.Comment) {
					this.stateStack.push(XmlTextReader_DtdInputState.InsideDoubleQuoted);
				}
				break;

				case '>'.charCodeAt(0):
				let t1 = this.state;
				L1: while (true) {
					switch (t1) {
						case XmlTextReader_DtdInputState.ElementDecl:
						t1 = XmlTextReader_DtdInputState.NotationDecl;
						continue L1;

						case XmlTextReader_DtdInputState.AttlistDecl:
						t1 = XmlTextReader_DtdInputState.NotationDecl;
						continue L1;

						case XmlTextReader_DtdInputState.EntityDecl:
						t1 = XmlTextReader_DtdInputState.NotationDecl;
						continue L1;

						case XmlTextReader_DtdInputState.NotationDecl:
						this.stateStack.pop();
						break;

						case XmlTextReader_DtdInputState.InsideDoubleQuoted:

						case XmlTextReader_DtdInputState.InsideSingleQuoted:

						case XmlTextReader_DtdInputState.Comment: continue L0;
						default: throw this.notWFError("unexpected token '>'");
					}

					break;
				}
				break;

				case '?'.charCodeAt(0):
				if (this.state == XmlTextReader_DtdInputState.PI) {
					if (this.readValueChar() == '>'.charCodeAt(0)) {
						this.stateStack.pop();
					}
				}
				break;

				case '-'.charCodeAt(0):
				if (this.state == XmlTextReader_DtdInputState.Comment) {
					if (this.peekChar() == '-'.charCodeAt(0)) {
						this.readValueChar();
						this.expectAndAppend(">");
						this.stateStack.pop();
					}
				}
				break;

				case '%'.charCodeAt(0):
				if (this.state != XmlTextReader_DtdInputState.Free && this.state != XmlTextReader_DtdInputState.EntityDecl && this.state != XmlTextReader_DtdInputState.Comment && this.state != XmlTextReader_DtdInputState.InsideDoubleQuoted && this.state != XmlTextReader_DtdInputState.InsideSingleQuoted) {
					throw this.notWFError("Parameter Entity Reference cannot appear as a part of markupdecl (see XML spec 2.8).");
				}
				break;

			}

		}
	}
	private readSystemLiteral(expectSYSTEM: boolean): string {
		if (expectSYSTEM) {
			this.expect1("SYSTEM");
			if (!this.skipWhitespace()) {
				throw this.notWFError("Whitespace is required after 'SYSTEM'.");
			}
		} else {
			this.skipWhitespace();
		}
		let quoteChar: number = this.readChar();
		let c: number = 0;
		this.clearValueBuffer();
		while (c != quoteChar) {
			c = this.readChar();
			if (c < 0) {
				throw this.notWFError("Unexpected end of stream in ExternalID.");
			}
			if (c != quoteChar) {
				this.appendValueChar(c);
			}
		}
		return this.createValueString();
	}
	private readPubidLiteral(): string {
		this.expect1("PUBLIC");
		if (!this.skipWhitespace()) {
			throw this.notWFError("Whitespace is required after 'PUBLIC'.");
		}
		let quoteChar: number = this.readChar();
		let c: number = 0;
		this.clearValueBuffer();
		while (c != quoteChar) {
			c = this.readChar();
			if (c < 0) {
				throw this.notWFError("Unexpected end of stream in ExternalID.");
			}
			if (c != quoteChar && !XmlChar.isPubidChar(c)) {
				throw this.notWFError(stringFormat("character '{0}' not allowed for PUBLIC ID", <string>String.fromCharCode(c)));
			}
			if (c != quoteChar) {
				this.appendValueChar(c);
			}
		}
		return this.createValueString();
	}
	private readName(): string {
		let prefix: string, local: string;
		return ((() => { let $ret = this.readName1(prefix, local); prefix = $ret.p0; local = $ret.p1; return $ret.ret; })());
	}
	private readName1(prefix: string, localName: string): { ret: string; p0: string; p1: string; } {
		let savePreserve: boolean = this.preserveCurrentTag;
		this.preserveCurrentTag = true;
		let startOffset: number = this.peekCharsIndex - this.curNodePeekIndex;
		let ch: number = this.peekChar();
		if (!XmlChar.isFirstNameChar(ch)) {
			throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "a name did not start with a legal character {0} ({1})", ch, <string>String.fromCharCode(ch)));
		}
		this.advance(ch);
		let length: number = 1;
		let colonAt: number = -1;
		while (XmlChar.isNameChar((ch = this.peekChar()))) {
			this.advance(ch);
			if (ch == ':'.charCodeAt(0) && this._namespaces && colonAt < 0) {
				colonAt = length;
			}
			length++;
		}
		let start: number = this.curNodePeekIndex + startOffset;
		let name: string = this.nameTable.add(this.peekChars, start, length);
		if (colonAt > 0) {
			prefix = this.nameTable.add(this.peekChars, start, colonAt);
			localName = this.nameTable.add(this.peekChars, start + colonAt + 1, length - colonAt - 1);
		} else {
			prefix = stringEmpty();
			localName = name;
		}
		this.preserveCurrentTag = savePreserve;
		return {
			ret: name,
			p0: prefix,
			p1: localName

		};
	}
	private expect(expected: number): void {
		let ch: number = this.readChar();
		if (ch != expected) {
			throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "expected '{0}' ({1:X}) but found '{2}' ({3:X})", <string>String.fromCharCode(expected), expected, ch < 0 ? <any>"EOF" : <string>String.fromCharCode(ch), ch));
		}
	}
	private expect1(expected: string): void {
		for (let i: number = 0; i < expected.length; i++) {
			if (this.readChar() != expected.charAt(i).charCodeAt(0)) {
				throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "'{0}' is expected", expected));
			}
		}
	}
	private expectAfterWhitespace(c: string): void {
		while (true) {
			let i: number = this.readChar();
			if (i < 33 && XmlChar.isWhitespace(i)) {
				continue;
			}
			if (c.charCodeAt(0) != i) {
				throw this.notWFError(stringFormat2(CultureInfo.invariantCulture, "Expected {0}, but found {1} [{2}]", c, i < 0 ? <any>"EOF" : <string>String.fromCharCode(i), i));
			}
			break;
		}
	}
	private skipWhitespace(): boolean {
		let ch: number = this.peekChar();
		let skipped: boolean = (ch == 32 || ch == 9 || ch == 10 || ch == 13);
		if (!skipped) {
			return false;
		}
		this.advance(ch);
		while ((ch = this.peekChar()) == 32 || ch == 9 || ch == 10 || ch == 13) {
			this.advance(ch);
		}
		return skipped;
	}
	private readWhitespace(): boolean {
		if (this.currentState == XmlNodeType.None) {
			this.currentState = XmlNodeType.XmlDeclaration;
		}
		let savePreserve: boolean = this.preserveCurrentTag;
		this.preserveCurrentTag = true;
		let startOffset: number = this.peekCharsIndex - this.curNodePeekIndex;
		let ch: number = this.peekChar();
		do {
			this.advance(ch);
			ch = this.peekChar();
		} while (ch == 32 || ch == 9 || ch == 10 || ch == 13);
		let isText: boolean = this.currentState == XmlNodeType.Element && ch != -1 && ch != '<'.charCodeAt(0);
		if (!isText && (this._whitespaceHandling == WhitespaceHandling.None || this._whitespaceHandling == WhitespaceHandling.Significant && this.xmlSpace != XmlSpace.Preserve)) {
			return false;
		}
		this.clearValueBuffer();
		this.valueBuffer.append(this.peekChars, this.curNodePeekIndex, this.peekCharsIndex - this.curNodePeekIndex - startOffset);
		this.preserveCurrentTag = savePreserve;
		if (isText) {
			this.readText(false);
		} else {
			let nodeType: XmlNodeType = (this.xmlSpace == XmlSpace.Preserve) ? XmlNodeType.SignificantWhitespace : XmlNodeType.Whitespace;
			this.setProperties(nodeType, stringEmpty(), stringEmpty(), stringEmpty(), false, null, true);
		}
		return true;
	}
	private readCharsInternal(buffer: string[], offset: number, length: number): number {
		let bufIndex: number = offset;
		for (let i: number = 0; i < length; i++) {
			let c: number = this.peekChar();
			switch (c) {
				case -1: throw this.notWFError("Unexpected end of xml.");
				case '<'.charCodeAt(0):
				if (i + 1 == length) {
					return i;
				}
				this.advance(c);
				if (this.peekChar() != '/'.charCodeAt(0)) {
					this.nestLevel++;
					buffer[bufIndex++] = '<';
					continue;
				} else if (this.nestLevel-- > 0) {
					buffer[bufIndex++] = '<';
					continue;
				}
				this.expect('/'.charCodeAt(0));
				if (this.depthUp) {
					this._depth++;
					this.depthUp = false;
				}
				this.readEndTag();
				this.readCharsInProgress = false;
				this.read();
				return i;

				default:
				this.advance(c);
				if (c <= charMaxValue().charCodeAt(0)) {
					buffer[bufIndex++] = <string>String.fromCharCode(c);
				} else {
					buffer[bufIndex++] = <string>String.fromCharCode((intDivide((c - 65536), 1024) + 55296));
					buffer[bufIndex++] = <string>String.fromCharCode(((c - 65536) % 1024 + 56320));
				}
				break;

			}

		}
		return length;
	}
	private readUntilEndTag(): boolean {
		if (this.depth == 0) {
			this.currentState = XmlNodeType.EndElement;
		}
		let ch: number;
		do {
			ch = this.readChar();
			switch (ch) {
				case -1: throw this.notWFError("Unexpected end of xml.");
				case '<'.charCodeAt(0):
				if (this.peekChar() != '/'.charCodeAt(0)) {
					this.nestLevel++;
					continue;
				} else if (--this.nestLevel > 0) {
					continue;
				}
				this.readChar();
				let name: string = this.readName();
				if (name != this.elementNames[this.elementNameStackPos - 1].name) {
					continue;
				}
				this.expect('>'.charCodeAt(0));
				this._depth--;
				return this.read();

			}

		} while (true);
	}
}

/**
 * @hidden 
 */
export class XmlTextReader_XmlTokenInfo extends Base {
	static $t: Type = markType(XmlTextReader_XmlTokenInfo, 'XmlTextReader_XmlTokenInfo');
	constructor(xtr: XmlTextReader) {
		super();
		this.reader = xtr;
		this.clear();
	}
	private valueCache: string = null;
	protected reader: XmlTextReader = null;
	name: string = null;
	localName: string = null;
	prefix: string = null;
	namespaceURI: string = null;
	isEmptyElement: boolean = false;
	quoteChar: string = '\0';
	lineNumber: number = 0;
	linePosition: number = 0;
	valueBufferStart: number = 0;
	valueBufferEnd: number = 0;
	nodeType: XmlNodeType = <XmlNodeType>0;
	protected get_value(): string {
		if (this.valueCache == null) {
			if (this.valueBufferStart >= 0) {
				this.valueCache = this.reader.valueBuffer.toString1(this.valueBufferStart, this.valueBufferEnd - this.valueBufferStart);
			} else {
				switch (this.nodeType) {
					case XmlNodeType.Text:

					case XmlNodeType.SignificantWhitespace:

					case XmlNodeType.Whitespace:

					case XmlNodeType.Comment:

					case XmlNodeType.CDATA:

					case XmlNodeType.ProcessingInstruction:
					this.valueCache = this.reader.createValueString();
					break;

				}

			}
		}
		return this.valueCache;
	}
	protected set_value(value: string): void {
		this.valueCache = value;
	}
	get value(): string {
		return this.get_value();
	}
	set value(value: string) {
		this.set_value(value);
	}
	clear(): void {
		this.valueBufferStart = -1;
		this.valueCache = null;
		this.nodeType = XmlNodeType.None;
		this.name = this.localName = this.prefix = this.namespaceURI = stringEmpty();
		this.isEmptyElement = false;
		this.quoteChar = '\"';
		this.lineNumber = this.linePosition = 0;
	}
}

/**
 * @hidden 
 */
export class XmlTextReader_XmlAttributeTokenInfo extends XmlTextReader_XmlTokenInfo {
	static $t: Type = markType(XmlTextReader_XmlAttributeTokenInfo, 'XmlTextReader_XmlAttributeTokenInfo', (<any>XmlTextReader_XmlTokenInfo).$type);
	constructor(reader: XmlTextReader) {
		super(reader);
		this.nodeType = XmlNodeType.Attribute;
	}
	valueTokenStartIndex: number = 0;
	valueTokenEndIndex: number = 0;
	private valueCache1: string = null;
	private tmpBuilder: StringBuilder = new StringBuilder(0);
	protected get_value(): string {
		if (this.valueCache1 != null) {
			return this.valueCache1;
		}
		if (this.valueTokenStartIndex == this.valueTokenEndIndex) {
			let ti: XmlTextReader_XmlTokenInfo = this.reader.attributeValueTokens[this.valueTokenStartIndex];
			if (ti.nodeType == XmlNodeType.EntityReference) {
				this.valueCache1 = stringConcat("&", ti.name, ";");
			} else {
				this.valueCache1 = ti.value;
			}
			return this.valueCache1;
		}
		this.tmpBuilder.length = 0;
		for (let i: number = this.valueTokenStartIndex; i <= this.valueTokenEndIndex; i++) {
			let ti1: XmlTextReader_XmlTokenInfo = this.reader.attributeValueTokens[i];
			if (ti1.nodeType == XmlNodeType.Text) {
				this.tmpBuilder.append5(ti1.value);
			} else {
				this.tmpBuilder.append1('&');
				this.tmpBuilder.append5(ti1.name);
				this.tmpBuilder.append1(';');
			}
		}
		this.valueCache1 = this.tmpBuilder.toString1(0, this.tmpBuilder.length);
		return this.valueCache1;
	}
	protected set_value(value: string): void {
		this.valueCache1 = value;
	}
	clear(): void {
		super.clear();
		this.valueCache1 = null;
		this.nodeType = XmlNodeType.Attribute;
		this.valueTokenStartIndex = this.valueTokenEndIndex = 0;
	}
	fillXmlns(): void {
		if (Base.referenceEquals(this.prefix, XmlNamespaceManager.prefixXmlns)) {
			this.reader.nsmgr.addNamespace(this.localName, this.value);
		} else if (Base.referenceEquals(this.name, XmlNamespaceManager.prefixXmlns)) {
			this.reader.nsmgr.addNamespace(stringEmpty(), this.value);
		}
	}
	fillNamespace(): void {
		if (Base.referenceEquals(this.prefix, XmlNamespaceManager.prefixXmlns) || Base.referenceEquals(this.name, XmlNamespaceManager.prefixXmlns)) {
			this.namespaceURI = XmlNamespaceManager.xmlnsXmlns;
		} else if (this.prefix.length == 0) {
			this.namespaceURI = stringEmpty();
		} else {
			this.namespaceURI = this.reader.lookupNamespace1(this.prefix, true);
		}
	}
}


