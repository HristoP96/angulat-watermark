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
import { Base, IDisposable, IDisposable_$type, NotSupportedException, EnumUtil, typeCast, Type, markType, enumGetBox, Stream, ValueType, BaseError } from "./type";
import { XmlNameTable } from "./XmlNameTable";
import { XmlNodeType, XmlNodeType_$type } from "./xml";
import { ReadState } from "./ReadState";
import { XmlSpace } from "./XmlSpace";
import { XmlChar } from "./XmlChar";
import { StringWriter } from "./StringWriter";
import { StringBuilder } from "./StringBuilder";
import { XmlException } from "./XmlException";
import { IXmlLineInfo, IXmlLineInfo_$type } from "./IXmlLineInfo";
import { stringFormat, stringFormat1, indexOfAny } from "./stringExtended";
import { stringEmpty, stringCreateFromChar, stringToCharArray } from "./string";
import { WriteState, WriteState_$type } from "./WriteState";
import { ArgumentException } from "./ArgumentException";
import { XmlConvert } from "./XmlConvert";
import { Formatting } from "./Formatting";
import { XmlTextWriter_XmlNodeInfo } from "./XmlTextWriter_XmlNodeInfo";
import { Encoding } from "./Encoding";
import { StreamWriter } from "./StreamWriter";
import { TextWriter } from "./TextWriter";
import { XmlTextWriter_XmlDeclState } from "./XmlTextWriter_XmlDeclState";
import { NewLineHandling } from "./NewLineHandling";
import { ArrayBox$1, arrayListCreate } from "./array";
import { ArgumentNullException } from "./ArgumentNullException";
import { NameTable } from "./NameTable";
import { XmlNamespaceManager } from "./XmlNamespaceManager";
import { XmlTextWriter_StringUtil } from "./XmlTextWriter_StringUtil";
import { NamespaceHandling } from "./NamespaceHandling";
import { CultureInfo } from "./culture";
import { NotImplementedException } from "./NotImplementedException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { InvalidOperationException } from "./InvalidOperationException";
import { UTF8Encoding } from "./UTF8Encoding";
import { arrayCopy2, arrayContains } from "./arrayExtended";
import { intToString1 } from "./numberExtended";

/**
 * @hidden 
 */
export abstract class XmlReader extends Base implements IDisposable {
	static $t: Type = markType(XmlReader, 'XmlReader', (<any>Base).$type, [IDisposable_$type]);
	private readStringBuffer: StringBuilder = null;
	constructor() {
		super();
	}
	abstract get attributeCount(): number;
	abstract get baseURI(): string;
	protected get_canReadBinaryContent(): boolean {
		return false;
	}
	get canReadBinaryContent(): boolean {
		return this.get_canReadBinaryContent();
	}
	protected get_canReadValueChunk(): boolean {
		return false;
	}
	get canReadValueChunk(): boolean {
		return this.get_canReadValueChunk();
	}
	protected get_canResolveEntity(): boolean {
		return false;
	}
	get canResolveEntity(): boolean {
		return this.get_canResolveEntity();
	}
	abstract get depth(): number;
	abstract get eOF(): boolean;
	protected get_hasAttributes(): boolean {
		return this.attributeCount > 0;
	}
	get hasAttributes(): boolean {
		return this.get_hasAttributes();
	}
	abstract get hasValue(): boolean;
	abstract get isEmptyElement(): boolean;
	abstract get isDefault(): boolean;
	abstract item(i: number): string;
	abstract item1(name: string): string;
	abstract item2(localName: string, namespaceName: string): string;
	abstract get localName(): string;
	abstract get name(): string;
	abstract get namespaceURI(): string;
	abstract get nameTable(): XmlNameTable;
	abstract get nodeType(): XmlNodeType;
	abstract get prefix(): string;
	abstract get quoteChar(): string;
	abstract get readState(): ReadState;
	abstract get value(): string;
	abstract get xmlLang(): string;
	abstract get xmlSpace(): XmlSpace;
	abstract close(): void;
	abstract getAttribute(i: number): string;
	abstract getAttribute1(name: string): string;
	abstract getAttribute2(localName: string, namespaceName: string): string;
	static isName(s: string): boolean {
		return s != null && XmlChar.isName(s);
	}
	static isNameToken(s: string): boolean {
		return s != null && XmlChar.isNmToken(s);
	}
	isStartElement(): boolean {
		return (this.moveToContent() == XmlNodeType.Element);
	}
	isStartElement1(name: string): boolean {
		if (!this.isStartElement()) {
			return false;
		}
		return (this.name == name);
	}
	isStartElement2(localName: string, namespaceName: string): boolean {
		if (!this.isStartElement()) {
			return false;
		}
		return (this.localName == localName && this.namespaceURI == namespaceName);
	}
	abstract lookupNamespace(prefix: string): string;
	abstract moveToAttribute2(i: number): void;
	abstract moveToAttribute(name: string): boolean;
	abstract moveToAttribute1(localName: string, namespaceName: string): boolean;
	private isContent(nodeType: XmlNodeType): boolean {
		switch (nodeType) {
			case XmlNodeType.Text: return true;
			case XmlNodeType.CDATA: return true;
			case XmlNodeType.Element: return true;
			case XmlNodeType.EndElement: return true;
			case XmlNodeType.EntityReference: return true;
			case XmlNodeType.EndEntity: return true;
		}

		return false;
	}
	moveToContent(): XmlNodeType {
		switch (this.readState) {
			case ReadState.Initial:

			case ReadState.Interactive: break;
			default: return this.nodeType;
		}

		if (this.nodeType == XmlNodeType.Attribute) {
			this.moveToElement();
		}
		do {
			if (this.isContent(this.nodeType)) {
				return this.nodeType;
			}
			this.read();
		} while (!this.eOF);
		return XmlNodeType.None;
	}
	abstract moveToElement(): boolean;
	abstract moveToFirstAttribute(): boolean;
	abstract moveToNextAttribute(): boolean;
	abstract read(): boolean;
	abstract readAttributeValue(): boolean;
	readElementString(): string {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		let result: string = stringEmpty();
		if (!this.isEmptyElement) {
			this.read();
			result = this.readString();
			if (this.nodeType != XmlNodeType.EndElement) {
				let error1: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
				throw this.xmlError(error1);
			}
		}
		this.read();
		return result;
	}
	readElementString1(name: string): string {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		if (name != this.name) {
			let error1: string = stringFormat("The {0} tag from namespace {1} is expected.", this.name, this.namespaceURI);
			throw this.xmlError(error1);
		}
		let result: string = stringEmpty();
		if (!this.isEmptyElement) {
			this.read();
			result = this.readString();
			if (this.nodeType != XmlNodeType.EndElement) {
				let error2: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
				throw this.xmlError(error2);
			}
		}
		this.read();
		return result;
	}
	readElementString2(localName: string, namespaceName: string): string {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		if (localName != this.localName || this.namespaceURI != namespaceName) {
			let error1: string = stringFormat("The {0} tag from namespace {1} is expected.", this.localName, this.namespaceURI);
			throw this.xmlError(error1);
		}
		let result: string = stringEmpty();
		if (!this.isEmptyElement) {
			this.read();
			result = this.readString();
			if (this.nodeType != XmlNodeType.EndElement) {
				let error2: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
				throw this.xmlError(error2);
			}
		}
		this.read();
		return result;
	}
	readEndElement(): void {
		if (this.moveToContent() != XmlNodeType.EndElement) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		this.read();
	}
	readInnerXml(): string {
		if (this.readState != ReadState.Interactive || this.nodeType == XmlNodeType.EndElement) {
			return stringEmpty();
		}
		if (this.isEmptyElement) {
			this.read();
			return stringEmpty();
		}
		let sw: StringWriter = new StringWriter(0);
		let xtw: XmlTextWriter = new XmlTextWriter(1, sw);
		if (this.nodeType == XmlNodeType.Element) {
			let startDepth: number = this.depth;
			this.read();
			while (startDepth < this.depth) {
				if (this.readState != ReadState.Interactive) {
					throw this.xmlError("Unexpected end of the XML reader.");
				}
				xtw.writeNode(this, false);
			}
			this.read();
		} else {
			xtw.writeNode(this, false);
		}
		return sw.toString();
	}
	readOuterXml(): string {
		if (this.readState != ReadState.Interactive || this.nodeType == XmlNodeType.EndElement) {
			return stringEmpty();
		}
		switch (this.nodeType) {
			case XmlNodeType.Element:

			case XmlNodeType.Attribute:
			let sw: StringWriter = new StringWriter(0);
			let xtw: XmlTextWriter = new XmlTextWriter(1, sw);
			xtw.writeNode(this, false);
			return sw.toString();

			default:
			this.skip();
			return stringEmpty();

		}

	}
	readStartElement(): void {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		this.read();
	}
	readStartElement1(name: string): void {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		if (name != this.name) {
			let error1: string = stringFormat("The {0} tag from namespace {1} is expected.", this.name, this.namespaceURI);
			throw this.xmlError(error1);
		}
		this.read();
	}
	readStartElement2(localName: string, namespaceName: string): void {
		if (this.moveToContent() != XmlNodeType.Element) {
			let error: string = stringFormat("'{0}' is an invalid node type.", EnumUtil.getName<XmlNodeType>(XmlNodeType_$type, this.nodeType));
			throw this.xmlError(error);
		}
		if (localName != this.localName || this.namespaceURI != namespaceName) {
			let error1: string = stringFormat1("Expecting {0} tag from namespace {1}, got {2} and {3} instead", localName, namespaceName, this.localName, this.namespaceURI);
			throw this.xmlError(error1);
		}
		this.read();
	}
	readString(): string {
		if (this.readStringBuffer == null) {
			this.readStringBuffer = new StringBuilder(0);
		}
		this.readStringBuffer.length = 0;
		this.moveToElement();
		switch (this.nodeType) {
			default: return stringEmpty();
			case XmlNodeType.Element:
			if (this.isEmptyElement) {
				return stringEmpty();
			}
			do {
				this.read();
				switch (<XmlNodeType>this.nodeType) {
					case XmlNodeType.Text:

					case XmlNodeType.CDATA:

					case XmlNodeType.Whitespace:

					case XmlNodeType.SignificantWhitespace:
					this.readStringBuffer.append5(this.value);
					continue;

				}

				break;
			} while (true);
			break;

			case XmlNodeType.Text:

			case XmlNodeType.CDATA:

			case XmlNodeType.Whitespace:

			case XmlNodeType.SignificantWhitespace:
			do {
				switch (this.nodeType) {
					case XmlNodeType.Text:

					case XmlNodeType.CDATA:

					case XmlNodeType.Whitespace:

					case XmlNodeType.SignificantWhitespace:
					this.readStringBuffer.append5(this.value);
					this.read();
					continue;

				}

				break;
			} while (true);
			break;

		}

		let ret: string = this.readStringBuffer.toString();
		this.readStringBuffer.length = 0;
		return ret;
	}
	readValueChunk(buffer: string[], offset: number, length: number): number {
		throw new NotSupportedException(0);
	}
	abstract resolveEntity(): void;
	skip(): void {
		if (this.readState != ReadState.Interactive) {
			return;
		}
		this.moveToElement();
		if (this.nodeType != XmlNodeType.Element || this.isEmptyElement) {
			this.read();
			return;
		}
		let depth: number = this.depth;
		while (this.read() && depth < this.depth) {
			;
		}
		if (<XmlNodeType>this.nodeType == XmlNodeType.EndElement) {
			this.read();
		}
	}
	private xmlError(message: string): XmlException {
		return new XmlException(2, typeCast<IXmlLineInfo>(IXmlLineInfo_$type, this), this.baseURI, message);
	}
	dispose(): void {
		this.disposeCore(true);
	}
	protected disposeCore(disposing: boolean): void {
		if (disposing && this.readState != ReadState.Closed) {
			this.close();
		}
	}
}

/**
 * @hidden 
 */
export abstract class XmlWriter extends Base implements IDisposable {
	static $t: Type = markType(XmlWriter, 'XmlWriter', (<any>Base).$type, [IDisposable_$type]);
	constructor() {
		super();
	}
	abstract get writeState(): WriteState;
	abstract get xmlLang(): string;
	abstract get xmlSpace(): XmlSpace;
	abstract close(): void;
	protected DisposeImpl(disposing: boolean): void {
		this.close();
	}
	dispose(): void {
		this.DisposeImpl(false);
	}
	abstract flush(): void;
	abstract lookupPrefix(ns: string): string;
	private writeAttribute(reader: XmlReader, defattr: boolean): void {
		if (!defattr && reader.isDefault) {
			return;
		}
		this.writeStartAttribute1(reader.prefix, reader.localName, reader.namespaceURI);
		while (reader.readAttributeValue()) {
			switch (reader.nodeType) {
				case XmlNodeType.Text:
				this.writeString(reader.value);
				break;

				case XmlNodeType.EntityReference:
				this.writeEntityRef(reader.name);
				break;

			}

		}
		this.writeEndAttribute();
	}
	writeAttributes(reader: XmlReader, defattr: boolean): void {
		if (reader == null) {
			throw new ArgumentException(2, "null XmlReader specified.", "reader");
		}
		let t1 = reader.nodeType;
		L0: while (true) {
			switch (t1) {
				case XmlNodeType.XmlDeclaration:
				this.writeAttributeString("version", reader.item1("version"));
				if (reader.item1("encoding") != null) {
					this.writeAttributeString("encoding", reader.item1("encoding"));
				}
				if (reader.item1("standalone") != null) {
					this.writeAttributeString("standalone", reader.item1("standalone"));
				}
				break;

				case XmlNodeType.Element:
				if (reader.moveToFirstAttribute()) {
					t1 = XmlNodeType.Attribute;
					continue L0;
				}
				break;

				case XmlNodeType.Attribute:
				do {
					this.writeAttribute(reader, defattr);
				} while (reader.moveToNextAttribute());
				reader.moveToElement();
				break;

				default: throw new XmlException(3, "NodeType is not one of Element, Attribute, nor XmlDeclaration.");
			}

			break;
		}
	}
	writeAttributeString(localName: string, value: string): void {
		this.writeAttributeString2("", localName, null, value);
	}
	writeAttributeString1(localName: string, ns: string, value: string): void {
		this.writeAttributeString2("", localName, ns, value);
	}
	writeAttributeString2(prefix: string, localName: string, ns: string, value: string): void {
		this.writeStartAttribute1(prefix, localName, ns);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndAttribute();
	}
	abstract writeBase64(buffer: number[], index: number, count: number): void;
	abstract writeBinHex(buffer: number[], index: number, count: number): void;
	abstract writeCData(text: string): void;
	abstract writeCharEntity(ch: string): void;
	abstract writeChars(buffer: string[], index: number, count: number): void;
	abstract writeComment(text: string): void;
	abstract writeDocType(name: string, pubid: string, sysid: string, subset: string): void;
	writeElementString(localName: string, value: string): void {
		this.writeStartElement(localName);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndElement();
	}
	writeElementString1(localName: string, ns: string, value: string): void {
		this.writeStartElement1(localName, ns);
		if (value != null && value.length > 0) {
			this.writeString(value);
		}
		this.writeEndElement();
	}
	abstract writeEndAttribute(): void;
	abstract writeEndDocument(): void;
	abstract writeEndElement(): void;
	abstract writeEntityRef(name: string): void;
	abstract writeFullEndElement(): void;
	abstract writeName(name: string): void;
	abstract writeNmToken(name: string): void;
	abstract writeQualifiedName(localName: string, ns: string): void;
	writeNameInternal(name: string): void {
		XmlConvert.verifyName(name);
		this.writeString(name);
	}
	writeNmTokenInternal(name: string): void {
		let valid: boolean = true;
		valid = XmlChar.isNmToken(name);
		if (!valid) {
			throw new ArgumentException(1, "Argument name is not a valid NMTOKEN.");
		}
		this.writeString(name);
	}
	writeQualifiedNameInternal(localName: string, ns: string): void {
		if (localName == null || localName == stringEmpty()) {
			throw new ArgumentException(0);
		}
		if (ns == null) {
			ns = stringEmpty();
		}
		XmlConvert.verifyNCName(localName);
		let prefix: string = ns.length > 0 ? this.lookupPrefix(ns) : stringEmpty();
		if (prefix == null) {
			throw new ArgumentException(1, stringFormat("Namespace '{0}' is not declared.", ns));
		}
		if (prefix != stringEmpty()) {
			this.writeString(prefix);
			this.writeString(":");
			this.writeString(localName);
		} else {
			this.writeString(localName);
		}
	}
	writeNode(reader: XmlReader, defattr: boolean): void {
		if (reader == null) {
			throw new ArgumentException(0);
		}
		if (reader.readState == ReadState.Initial) {
			reader.read();
			do {
				this.writeNode(reader, defattr);
			} while (!reader.eOF);
			return;
		}
		let t1 = reader.nodeType;
		L0: while (true) {
			switch (t1) {
				case XmlNodeType.Element:
				this.writeStartElement2(reader.prefix, reader.localName, reader.namespaceURI);
				if (reader.hasAttributes) {
					for (let i: number = 0; i < reader.attributeCount; i++) {
						reader.moveToAttribute2(i);
						this.writeAttribute(reader, defattr);
					}
					reader.moveToElement();
				}
				if (reader.isEmptyElement) {
					this.writeEndElement();
				} else {
					let depth: number = reader.depth;
					reader.read();
					if (reader.nodeType != XmlNodeType.EndElement) {
						do {
							this.writeNode(reader, defattr);
						} while (depth < reader.depth);
					}
					this.writeFullEndElement();
				}
				break;

				case XmlNodeType.Attribute: return;
				case XmlNodeType.Text:
				this.writeString(reader.value);
				break;

				case XmlNodeType.CDATA:
				this.writeCData(reader.value);
				break;

				case XmlNodeType.EntityReference:
				this.writeEntityRef(reader.name);
				break;

				case XmlNodeType.XmlDeclaration:

				case XmlNodeType.ProcessingInstruction:
				this.writeProcessingInstruction(reader.name, reader.value);
				break;

				case XmlNodeType.Comment:
				this.writeComment(reader.value);
				break;

				case XmlNodeType.DocumentType:
				this.writeDocType(reader.name, reader.item1("PUBLIC"), reader.item1("SYSTEM"), reader.value);
				break;

				case XmlNodeType.SignificantWhitespace:
				t1 = XmlNodeType.Whitespace;
				continue L0;

				case XmlNodeType.Whitespace:
				this.writeWhitespace(reader.value);
				break;

				case XmlNodeType.EndElement:
				this.writeFullEndElement();
				break;

				case XmlNodeType.EndEntity: break;
				case XmlNodeType.None: break;
				default: throw new XmlException(3, "Unexpected node " + reader.name + " of type " + enumGetBox<XmlNodeType>(XmlNodeType_$type, reader.nodeType));
			}

			break;
		}
		reader.read();
	}
	abstract writeProcessingInstruction(name: string, text: string): void;
	abstract writeRaw1(data: string): void;
	abstract writeRaw(buffer: string[], index: number, count: number): void;
	writeStartAttribute(localName: string, ns: string): void {
		this.writeStartAttribute1(null, localName, ns);
	}
	abstract writeStartAttribute1(prefix: string, localName: string, ns: string): void;
	abstract writeStartDocument(): void;
	abstract writeStartDocument1(standalone: boolean): void;
	writeStartElement(localName: string): void {
		this.writeStartElement2(null, localName, null);
	}
	writeStartElement1(localName: string, ns: string): void {
		this.writeStartElement2(null, localName, ns);
	}
	abstract writeStartElement2(prefix: string, localName: string, ns: string): void;
	abstract writeString(text: string): void;
	abstract writeSurrogateCharEntity(lowChar: string, highChar: string): void;
	abstract writeWhitespace(ws: string): void;
}

/**
 * @hidden 
 */
export class XmlTextWriter extends XmlWriter {
	static $t: Type = markType(XmlTextWriter, 'XmlTextWriter', (<any>XmlWriter).$type);
	private static readonly xmlNamespace: string = "http://www.w3.org/XML/1998/namespace";
	private static readonly xmlnsNamespace: string = "http://www.w3.org/2000/xmlns/";
	private static readonly unmarked_utf8encoding: Encoding = new UTF8Encoding(0, false, false);
	private static escaped_text_chars: string[] = null;
	private static escaped_attr_chars: string[] = null;
	private base_stream: Stream = null;
	private source: TextWriter = null;
	private writer: TextWriter = null;
	private preserver: StringWriter = null;
	private preserved_name: string = null;
	private is_preserved_xmlns: boolean = false;
	private allow_doc_fragment: boolean = false;
	private close_output_stream: boolean = true;
	private ignore_encoding: boolean = false;
	private _namespaces: boolean = true;
	private xmldecl_state: XmlTextWriter_XmlDeclState = XmlTextWriter_XmlDeclState.Allow;
	private check_character_validity: boolean = false;
	private newline_handling: NewLineHandling = NewLineHandling.None;
	private is_document_entity: boolean = false;
	private state: WriteState = WriteState.Start;
	private node_state: XmlNodeType = XmlNodeType.None;
	private nsmanager: XmlNamespaceManager = null;
	private open_count: number = 0;
	private elements: XmlTextWriter_XmlNodeInfo[] = <XmlTextWriter_XmlNodeInfo[]>new Array(10);
	private new_local_namespaces: any[] = new Array();
	private explicit_nsdecls: ArrayBox$1<any> = arrayListCreate();
	private namespace_handling: NamespaceHandling = <NamespaceHandling>0;
	private indent: boolean = false;
	private indent_count: number = 2;
	private indent_char: string = ' ';
	private indent_string: string = "  ";
	private newline: string = null;
	private indent_attributes: boolean = false;
	private quote_char: string = '\"';
	private v2: boolean = false;
	constructor(initNumber: number, stream: Stream, encoding: Encoding);
	constructor(initNumber: number, writer: TextWriter);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let stream: Stream = <Stream>_rest[0];
				let encoding: Encoding = <Encoding>_rest[1];
				let $outerArgs = <any[]>[ new StreamWriter(1, stream, encoding == null ? XmlTextWriter.unmarked_utf8encoding : encoding) ];
				{
					let writer: TextWriter = <TextWriter>$outerArgs[0];
					if (writer == null) {
						throw new ArgumentNullException(0, "writer");
					}
					this.ignore_encoding = (writer.encoding == null);
					this.initialize(writer);
					this.allow_doc_fragment = true;
				}
				this.ignore_encoding = (encoding == null);
				this.initialize(this.writer);
				this.allow_doc_fragment = true;
			}
			break;

			case 1:
			{
				let writer: TextWriter = <TextWriter>_rest[0];
				if (writer == null) {
					throw new ArgumentNullException(0, "writer");
				}
				this.ignore_encoding = (writer.encoding == null);
				this.initialize(writer);
				this.allow_doc_fragment = true;
			}
			break;

		}

	}
	private initialize(writer: TextWriter): void {
		if (writer == null) {
			throw new ArgumentNullException(0, "writer");
		}
		let name_table: XmlNameTable = new NameTable();
		this.writer = writer;
		if (typeCast<StreamWriter>((<any>StreamWriter).$type, writer) !== null) {
			this.base_stream = (<StreamWriter>writer).baseStream;
		}
		this.source = writer;
		this.nsmanager = new XmlNamespaceManager(name_table);
		this.newline = writer.newLine;
		XmlTextWriter.escaped_text_chars = this.newline_handling != NewLineHandling.None ? <string[]>[ '&', '<', '>', '\r', '\n' ] : <string[]>[ '&', '<', '>' ];
		XmlTextWriter.escaped_attr_chars = <string[]>[ '\"', '&', '<', '>', '\r', '\n' ];
	}
	get formatting(): Formatting {
		return this.indent ? Formatting.Indented : Formatting.None;
	}
	set formatting(value: Formatting) {
		this.indent = (value == Formatting.Indented);
	}
	get indentation(): number {
		return this.indent_count;
	}
	set indentation(value: number) {
		if (value < 0) {
			throw this.argumentError("Indentation must be non-negative integer.");
		}
		this.indent_count = value;
		this.indent_string = value == 0 ? stringEmpty() : stringCreateFromChar(this.indent_char, this.indent_count);
	}
	get indentChar(): string {
		return this.indent_char;
	}
	set indentChar(value: string) {
		this.indent_char = value;
		this.indent_string = stringCreateFromChar(this.indent_char, this.indent_count);
	}
	get quoteChar(): string {
		return this.quote_char;
	}
	set quoteChar(value: string) {
		if (this.state == WriteState.Attribute) {
			throw this.invalidOperation("QuoteChar must not be changed inside attribute value.");
		}
		if ((value != '\'') && (value != '\"')) {
			throw this.argumentError("Only ' and \" are allowed as an attribute quote character.");
		}
		this.quote_char = value;
		XmlTextWriter.escaped_attr_chars[0] = this.quote_char;
	}
	protected get_xmlLang(): string {
		return this.open_count == 0 ? null : this.elements[this.open_count - 1].xmlLang;
	}
	get xmlLang(): string {
		return this.get_xmlLang();
	}
	protected get_xmlSpace(): XmlSpace {
		return this.open_count == 0 ? XmlSpace.None : this.elements[this.open_count - 1].xmlSpace;
	}
	get xmlSpace(): XmlSpace {
		return this.get_xmlSpace();
	}
	protected get_writeState(): WriteState {
		return this.state;
	}
	get writeState(): WriteState {
		return this.get_writeState();
	}
	lookupPrefix(namespaceUri: string): string {
		if (namespaceUri == null || namespaceUri == stringEmpty()) {
			throw this.argumentError("The Namespace cannot be empty.");
		}
		if (namespaceUri == this.nsmanager.defaultNamespace) {
			return stringEmpty();
		}
		let prefix: string = this.nsmanager.lookupPrefixExclusive(namespaceUri, false);
		return prefix;
	}
	get baseStream(): Stream {
		return this.base_stream;
	}
	close(): void {
		if (this.state == WriteState.Attribute) {
			this.writeEndAttribute();
		}
		while (this.open_count > 0) {
			this.writeEndElement();
		}
		if (this.close_output_stream) {
			this.writer.close();
		} else {
			this.writer.flush();
		}
		this.state = WriteState.Closed;
	}
	flush(): void {
		this.writer.flush();
	}
	get namespaces(): boolean {
		return this._namespaces;
	}
	set namespaces(value: boolean) {
		if (this.state != WriteState.Start) {
			throw this.invalidOperation("This property must be set before writing output.");
		}
		this._namespaces = value;
	}
	writeStartDocument(): void {
		this.writeStartDocumentCore(false, false);
		this.is_document_entity = true;
	}
	writeStartDocument1(standalone: boolean): void {
		this.writeStartDocumentCore(true, standalone);
		this.is_document_entity = true;
	}
	private writeStartDocumentCore(outputStd: boolean, standalone: boolean): void {
		if (this.state != WriteState.Start) {
			throw this.stateError("XmlDeclaration");
		}
		switch (this.xmldecl_state) {
			case XmlTextWriter_XmlDeclState.Ignore: return;
			case XmlTextWriter_XmlDeclState.Prohibit: throw this.invalidOperation("WriteStartDocument cannot be called when ConformanceLevel is Fragment.");
		}

		this.state = WriteState.Prolog;
		this.writer.write10("<?xml version=");
		this.writer.write3(this.quote_char);
		this.writer.write10("1.0");
		this.writer.write3(this.quote_char);
		if (!this.ignore_encoding) {
			this.writer.write10(" encoding=");
			this.writer.write3(this.quote_char);
			this.writer.write10(this.writer.encoding.webName);
			this.writer.write3(this.quote_char);
		}
		if (outputStd) {
			this.writer.write10(" standalone=");
			this.writer.write3(this.quote_char);
			this.writer.write10(standalone ? "yes" : "no");
			this.writer.write3(this.quote_char);
		}
		this.writer.write10("?>");
		this.xmldecl_state = XmlTextWriter_XmlDeclState.Ignore;
	}
	writeEndDocument(): void {
		switch (this.state) {
			case WriteState.Closed:

			case WriteState.Start: throw this.stateError("EndDocument");
		}

		if (this.state == WriteState.Attribute) {
			this.writeEndAttribute();
		}
		while (this.open_count > 0) {
			this.writeEndElement();
		}
		this.state = WriteState.Start;
		this.is_document_entity = false;
	}
	writeDocType(name: string, pubid: string, sysid: string, subset: string): void {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!XmlChar.isName(name)) {
			throw this.argumentError("name");
		}
		if (this.node_state != XmlNodeType.None) {
			throw this.stateError("DocType");
		}
		this.node_state = XmlNodeType.DocumentType;
		if (this.xmldecl_state == XmlTextWriter_XmlDeclState.Auto) {
			this.outputAutoStartDocument();
		}
		this.writeIndent();
		this.writer.write10("<!DOCTYPE ");
		this.writer.write10(name);
		if (pubid != null) {
			this.writer.write10(" PUBLIC ");
			this.writer.write3(this.quote_char);
			this.writer.write10(pubid);
			this.writer.write3(this.quote_char);
			this.writer.write3(' ');
			this.writer.write3(this.quote_char);
			if (sysid != null) {
				this.writer.write10(sysid);
			}
			this.writer.write3(this.quote_char);
		} else if (sysid != null) {
			this.writer.write10(" SYSTEM ");
			this.writer.write3(this.quote_char);
			this.writer.write10(sysid);
			this.writer.write3(this.quote_char);
		}
		if (subset != null) {
			this.writer.write10("[");
			this.writer.write10(subset);
			this.writer.write10("]");
		}
		this.writer.write3('>');
		this.state = WriteState.Prolog;
	}
	writeStartElement2(prefix: string, localName: string, namespaceUri: string): void {
		if (this.state == WriteState.Closed) {
			throw this.stateError("StartTag");
		}
		this.node_state = XmlNodeType.Element;
		let anonPrefix: boolean = (prefix == null);
		if (prefix == null) {
			prefix = stringEmpty();
		}
		if (!this._namespaces && namespaceUri != null && namespaceUri.length > 0) {
			throw this.argumentError("Namespace is disabled in this XmlTextWriter.");
		}
		if (!this._namespaces && prefix.length > 0) {
			throw this.argumentError("Namespace prefix is disabled in this XmlTextWriter.");
		}
		if (prefix.length > 0 && namespaceUri == null) {
			namespaceUri = this.nsmanager.lookupNamespace1(prefix, false);
			if (namespaceUri == null || namespaceUri.length == 0) {
				throw this.argumentError("Namespace URI must not be null when prefix is not an empty string.");
			}
		}
		if (this._namespaces && prefix != null && prefix.length == 3 && namespaceUri != XmlTextWriter.xmlNamespace && (prefix.charAt(0) == 'x' || prefix.charAt(0) == 'X') && (prefix.charAt(1) == 'm' || prefix.charAt(1) == 'M') && (prefix.charAt(2) == 'l' || prefix.charAt(2) == 'L')) {
			throw new ArgumentException(1, "A prefix cannot be equivalent to \"xml\" in case-insensitive match.");
		}
		if (this.xmldecl_state == XmlTextWriter_XmlDeclState.Auto) {
			this.outputAutoStartDocument();
		}
		if (this.state == WriteState.Element) {
			this.closeStartElement();
		}
		if (this.open_count > 0) {
			this.elements[this.open_count - 1].hasElements = true;
		}
		this.nsmanager.pushScope();
		if (this._namespaces && namespaceUri != null) {
			if (anonPrefix && namespaceUri.length > 0) {
				prefix = this.lookupPrefix(namespaceUri);
			}
			if (prefix == null || namespaceUri.length == 0) {
				prefix = stringEmpty();
			}
		}
		this.writeIndent();
		this.writer.write10("<");
		if (prefix.length > 0) {
			this.writer.write10(prefix);
			this.writer.write3(':');
		}
		this.writer.write10(localName);
		if (this.elements.length == this.open_count) {
			let tmp: XmlTextWriter_XmlNodeInfo[] = <XmlTextWriter_XmlNodeInfo[]>new Array(this.open_count << 1);
			arrayCopy2(this.elements, tmp, this.open_count);
			this.elements = tmp;
		}
		if (this.elements[this.open_count] == null) {
			this.elements[this.open_count] = new XmlTextWriter_XmlNodeInfo();
		}
		let info: XmlTextWriter_XmlNodeInfo = this.elements[this.open_count];
		info.prefix = prefix;
		info.localName = localName;
		info.nS = namespaceUri;
		info.hasSimple = false;
		info.hasElements = false;
		info.xmlLang = this.xmlLang;
		info.xmlSpace = this.xmlSpace;
		this.open_count++;
		if (this._namespaces && namespaceUri != null) {
			let oldns: string = this.nsmanager.lookupNamespace1(prefix, false);
			if (oldns != namespaceUri) {
				this.nsmanager.addNamespace(prefix, namespaceUri);
				this.new_local_namespaces.push(prefix);
			}
		}
		this.state = WriteState.Element;
	}
	private closeStartElement(): void {
		this.closeStartElementCore();
		if (this.state == WriteState.Element) {
			this.writer.write3('>');
		}
		this.state = WriteState.Content;
	}
	private closeStartElementCore(): void {
		if (this.state == WriteState.Attribute) {
			this.writeEndAttribute();
		}
		if (this.new_local_namespaces.length == 0) {
			if (this.explicit_nsdecls.count > 0) {
				this.explicit_nsdecls.clear();
			}
			return;
		}
		let idx: number = this.explicit_nsdecls.count;
		while (this.new_local_namespaces.length > 0) {
			let p: string = <string>this.new_local_namespaces.pop();
			let match: boolean = false;
			for (let i: number = 0; i < this.explicit_nsdecls.count; i++) {
				if (<string>this.explicit_nsdecls.item(i) == p) {
					match = true;
					break;
				}
			}
			if (match) {
				continue;
			}
			this.explicit_nsdecls.add(p);
		}
		for (let i1: number = idx; i1 < this.explicit_nsdecls.count; i1++) {
			let prefix: string = <string>this.explicit_nsdecls.item(i1);
			let ns: string = this.nsmanager.lookupNamespace1(prefix, false);
			if (ns == null) {
				continue;
			}
			if (prefix.length > 0) {
				this.writer.write10(" xmlns:");
				this.writer.write10(prefix);
			} else {
				this.writer.write10(" xmlns");
			}
			this.writer.write3('=');
			this.writer.write3(this.quote_char);
			this.writeEscapedString(ns, true);
			this.writer.write3(this.quote_char);
		}
		this.explicit_nsdecls.clear();
	}
	writeEndElement(): void {
		this.writeEndElementCore(false);
	}
	writeFullEndElement(): void {
		this.writeEndElementCore(true);
	}
	private writeEndElementCore(full: boolean): void {
		if (this.state == WriteState.Closed) {
			throw this.stateError("EndElement");
		}
		if (this.open_count == 0) {
			throw this.invalidOperation("There is no more open element.");
		}
		this.closeStartElementCore();
		this.nsmanager.popScope();
		if (this.state == WriteState.Element) {
			if (full) {
				this.writer.write3('>');
			} else {
				this.writer.write10(" />");
			}
		}
		if (full || this.state == WriteState.Content) {
			this.writeIndentEndElement();
		}
		let info: XmlTextWriter_XmlNodeInfo = this.elements[--this.open_count];
		if (full || this.state == WriteState.Content) {
			this.writer.write10("</");
			if (info.prefix.length > 0) {
				this.writer.write10(info.prefix);
				this.writer.write3(':');
			}
			this.writer.write10(info.localName);
			this.writer.write3('>');
		}
		this.state = WriteState.Content;
		if (this.open_count == 0) {
			this.node_state = XmlNodeType.EndElement;
		}
	}
	writeStartAttribute1(prefix: string, localName: string, namespaceUri: string): void {
		if (this.state == WriteState.Attribute) {
			this.writeEndAttribute();
		}
		if (this.state != WriteState.Element && this.state != WriteState.Start) {
			throw this.stateError("Attribute");
		}
		if (<any>prefix == null) {
			prefix = stringEmpty();
		}
		let isNSDecl: boolean = false;
		if (namespaceUri == XmlTextWriter.xmlnsNamespace) {
			isNSDecl = true;
			if (prefix.length == 0 && localName != "xmlns") {
				prefix = "xmlns";
			}
		} else {
			isNSDecl = (prefix == "xmlns" || localName == "xmlns" && prefix.length == 0);
		}
		if (isNSDecl) {
			if (localName == null || localName.length == 0) {
				localName = prefix;
				prefix = stringEmpty();
			}
		}
		if (this._namespaces) {
			if (prefix == "xml") {
				namespaceUri = XmlTextWriter.xmlNamespace;
			} else if (<any>namespaceUri == null || (this.v2 && namespaceUri.length == 0)) {
				if (isNSDecl) {
					namespaceUri = XmlTextWriter.xmlnsNamespace;
				} else {
					namespaceUri = stringEmpty();
				}
			}
			if (isNSDecl && namespaceUri != XmlTextWriter.xmlnsNamespace) {
				throw this.argumentError(stringFormat("The 'xmlns' attribute is bound to the reserved namespace '{0}'", XmlTextWriter.xmlnsNamespace));
			}
			if (prefix.length > 0 && namespaceUri.length == 0) {
				namespaceUri = this.nsmanager.lookupNamespace1(prefix, false);
				if (namespaceUri == null || namespaceUri.length == 0) {
					throw this.argumentError("Namespace URI must not be null when prefix is not an empty string.");
				}
			}
			if (!isNSDecl && namespaceUri.length > 0) {
				prefix = this.determineAttributePrefix(prefix, localName, namespaceUri);
			}
		}
		if (this.indent_attributes) {
			this.writeIndentAttribute();
		} else if (this.state != WriteState.Start) {
			this.writer.write3(' ');
		}
		if (prefix.length > 0) {
			this.writer.write10(prefix);
			this.writer.write3(':');
		}
		this.writer.write10(localName);
		this.writer.write3('=');
		this.writer.write3(this.quote_char);
		if (isNSDecl || prefix == "xml") {
			if (this.preserver == null) {
				this.preserver = new StringWriter(0);
			} else {
				this.preserver.getStringBuilder().length = 0;
			}
			this.writer = this.preserver;
			if (!isNSDecl) {
				this.is_preserved_xmlns = false;
				this.preserved_name = localName;
			} else {
				this.is_preserved_xmlns = true;
				this.preserved_name = localName == "xmlns" ? stringEmpty() : localName;
			}
		}
		this.state = WriteState.Attribute;
	}
	private determineAttributePrefix(prefix: string, local: string, ns: string): string {
		let mockup: boolean = false;
		if (prefix.length == 0) {
			prefix = this.lookupPrefix(ns);
			if (prefix != null && prefix.length > 0) {
				return prefix;
			}
			mockup = true;
		} else {
			prefix = this.nsmanager.nameTable.add1(prefix);
			let existing: string = this.nsmanager.lookupNamespace1(prefix, true);
			if (existing == ns) {
				return prefix;
			}
			if (existing != null) {
				this.nsmanager.removeNamespace(prefix, existing);
				if (this.nsmanager.lookupNamespace1(prefix, true) != existing) {
					mockup = true;
					this.nsmanager.addNamespace(prefix, existing);
				}
			}
		}
		if (mockup) {
			prefix = this.mockupPrefix(ns, true);
		}
		this.new_local_namespaces.push(prefix);
		this.nsmanager.addNamespace(prefix, ns);
		return prefix;
	}
	private mockupPrefix(ns: string, skipLookup: boolean): string {
		let prefix: string = skipLookup ? null : this.lookupPrefix(ns);
		if (prefix != null && prefix.length > 0) {
			return prefix;
		}
		for (let p: number = 1; ; p++) {
			prefix = XmlTextWriter_StringUtil.format("d{0}p{1}", this.open_count, p);
			if (arrayContains(this.new_local_namespaces, prefix)) {
				continue;
			}
			if (null != this.nsmanager.lookupNamespace(this.nsmanager.nameTable.get1(prefix))) {
				continue;
			}
			this.nsmanager.addNamespace(prefix, ns);
			this.new_local_namespaces.push(prefix);
			return prefix;
		}
	}
	writeEndAttribute(): void {
		if (this.state != WriteState.Attribute) {
			throw this.stateError("End of attribute");
		}
		if (this.writer == this.preserver) {
			this.writer = this.source;
			let value: string = this.preserver.toString();
			if (this.is_preserved_xmlns) {
				if (this.preserved_name.length > 0 && value.length == 0) {
					throw this.argumentError("Non-empty prefix must be mapped to non-empty namespace URI.");
				}
				let existing: string = this.nsmanager.lookupNamespace1(this.preserved_name, false);
				if ((this.namespace_handling & NamespaceHandling.OmitDuplicates) == 0 || existing != value) {
					this.explicit_nsdecls.add(this.preserved_name);
				}
				if (this.open_count > 0) {
					if (this.v2 && this.elements[this.open_count - 1].prefix == this.preserved_name && this.elements[this.open_count - 1].nS != value) {
						throw new XmlException(3, stringFormat("Cannot redefine the namespace for prefix '{0}' used at current element", this.preserved_name));
					}
					if (this.elements[this.open_count - 1].nS == stringEmpty() && this.elements[this.open_count - 1].prefix == this.preserved_name) {
						;
					} else if (existing != value) {
						this.nsmanager.addNamespace(this.preserved_name, value);
					}
				}
			} else {
				switch (this.preserved_name) {
					case "lang":
					if (this.open_count > 0) {
						this.elements[this.open_count - 1].xmlLang = value;
					}
					break;

					case "space":
					switch (value) {
						case "default":
						if (this.open_count > 0) {
							this.elements[this.open_count - 1].xmlSpace = XmlSpace.Default;
						}
						break;

						case "preserve":
						if (this.open_count > 0) {
							this.elements[this.open_count - 1].xmlSpace = XmlSpace.Preserve;
						}
						break;

						default: throw this.argumentError("Invalid value for xml:space.");
					}

					break;

				}

			}
			this.writer.write10(value);
		}
		this.writer.write3(this.quote_char);
		this.state = WriteState.Element;
	}
	writeComment(text: string): void {
		if (text == null) {
			throw this.argumentError("text");
		}
		if (text.length > 0 && text.charAt(text.length - 1) == '-') {
			throw this.argumentError("An input string to WriteComment method must not end with '-'. Escape it with '&#2D;'.");
		}
		if (XmlTextWriter_StringUtil.indexOf(text, "--") > 0) {
			throw this.argumentError("An XML comment cannot end with \"-\".");
		}
		if (this.state == WriteState.Attribute || this.state == WriteState.Element) {
			this.closeStartElement();
		}
		this.writeIndent();
		this.shiftStateTopLevel("Comment", false, false, false);
		this.writer.write10("<!--");
		this.writer.write10(text);
		this.writer.write10("-->");
	}
	writeProcessingInstruction(name: string, text: string): void {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (text == null) {
			throw this.argumentError("text");
		}
		this.writeIndent();
		if (!XmlChar.isName(name)) {
			throw this.argumentError("A processing instruction name must be a valid XML name.");
		}
		if (XmlTextWriter_StringUtil.indexOf(text, "?>") > 0) {
			throw this.argumentError("Processing instruction cannot contain \"?>\" as its value.");
		}
		this.shiftStateTopLevel("ProcessingInstruction", false, name == "xml", false);
		this.writer.write10("<?");
		this.writer.write10(name);
		this.writer.write3(' ');
		this.writer.write10(text);
		this.writer.write10("?>");
		if (this.state == WriteState.Start) {
			this.state = WriteState.Prolog;
		}
	}
	writeWhitespace(text: string): void {
		if (text == null) {
			throw this.argumentError("text");
		}
		if (text.length == 0 || XmlChar.indexOfNonWhitespace(text) >= 0) {
			throw this.argumentError("WriteWhitespace method accepts only whitespaces.");
		}
		this.shiftStateTopLevel("Whitespace", true, false, true);
		this.writer.write10(text);
	}
	writeCData(text: string): void {
		if (text == null) {
			text = stringEmpty();
		}
		this.shiftStateContent("CData", false);
		if (XmlTextWriter_StringUtil.indexOf(text, "]]>") >= 0) {
			throw this.argumentError("CDATA section must not contain ']]>'.");
		}
		this.writer.write10("<![CDATA[");
		this.writeCheckedString(text);
		this.writer.write10("]]>");
	}
	writeString(text: string): void {
		if (text == null || (text.length == 0 && !this.v2)) {
			return;
		}
		this.shiftStateContent("Text", true);
		this.writeEscapedString(text, this.state == WriteState.Attribute);
	}
	writeRaw1(raw: string): void {
		if (raw == null) {
			return;
		}
		this.shiftStateTopLevel("Raw string", true, true, true);
		this.writer.write10(raw);
	}
	writeCharEntity(ch: string): void {
		this.writeCharacterEntity(ch, '\0', false);
	}
	writeSurrogateCharEntity(low: string, high: string): void {
		this.writeCharacterEntity(low, high, true);
	}
	private writeCharacterEntity(ch: string, high: string, surrogate: boolean): void {
		if (surrogate && ('�'.charCodeAt(0) > high.charCodeAt(0) || high.charCodeAt(0) > '�'.charCodeAt(0) || '�'.charCodeAt(0) > ch.charCodeAt(0) || ch.charCodeAt(0) > '�'.charCodeAt(0))) {
			throw this.argumentError(stringFormat("Invalid surrogate pair was found. Low: &#x{0:X}; High: &#x{0:X};", <number>ch.charCodeAt(0), <number>high.charCodeAt(0)));
		} else if (this.check_character_validity && XmlChar.isInvalid(ch.charCodeAt(0))) {
			throw this.argumentError(stringFormat("Invalid character &#x{0:X};", <number>ch.charCodeAt(0)));
		}
		this.shiftStateContent("Character", true);
		let v: number = surrogate ? (high.charCodeAt(0) - 55296) * 1024 + ch.charCodeAt(0) - 56320 + 65536 : <number>ch.charCodeAt(0);
		this.writer.write10("&#x");
		this.writer.write10(intToString1(v, "X", CultureInfo.invariantCulture));
		this.writer.write3(';');
	}
	writeEntityRef(name: string): void {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!XmlChar.isName(name)) {
			throw this.argumentError("Argument name must be a valid XML name.");
		}
		this.shiftStateContent("Entity reference", true);
		this.writer.write3('&');
		this.writer.write10(name);
		this.writer.write3(';');
	}
	writeName(name: string): void {
		if (name == null) {
			throw this.argumentError("name");
		}
		if (!XmlChar.isName(name)) {
			throw this.argumentError("Not a valid name string.");
		}
		this.writeString(name);
	}
	writeNmToken(nmtoken: string): void {
		if (nmtoken == null) {
			throw this.argumentError("nmtoken");
		}
		if (!XmlChar.isNmToken(nmtoken)) {
			throw this.argumentError("Not a valid NMTOKEN string.");
		}
		this.writeString(nmtoken);
	}
	writeQualifiedName(localName: string, ns: string): void {
		if (localName == null) {
			throw this.argumentError("localName");
		}
		if (ns == null) {
			ns = stringEmpty();
		}
		if (ns == XmlTextWriter.xmlnsNamespace) {
			throw this.argumentError("Prefix 'xmlns' is reserved and cannot be overriden.");
		}
		if (!XmlChar.isNCName(localName)) {
			throw this.argumentError("localName must be a valid NCName.");
		}
		this.shiftStateContent("QName", true);
		let prefix: string = ns.length > 0 ? this.lookupPrefix(ns) : stringEmpty();
		if (prefix == null) {
			if (this.state == WriteState.Attribute) {
				prefix = this.mockupPrefix(ns, false);
			} else {
				throw this.argumentError(stringFormat("Namespace '{0}' is not declared.", ns));
			}
		}
		if (prefix != stringEmpty()) {
			this.writer.write10(prefix);
			this.writer.write10(":");
		}
		this.writer.write10(localName);
	}
	private checkChunkRange(buffer: any[], index: number, count: number): void {
		if (buffer == null) {
			throw new ArgumentNullException(0, "buffer");
		}
		if (index < 0 || buffer.length < index) {
			throw this.argumentOutOfRangeError("index");
		}
		if (count < 0 || buffer.length < index + count) {
			throw this.argumentOutOfRangeError("count");
		}
	}
	writeBase64(buffer: number[], index: number, count: number): void {
		throw new NotImplementedException(1, "WriteBase64 not implemented");
	}
	writeBinHex(buffer: number[], index: number, count: number): void {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("BinHex", true);
		XmlConvert.writeBinHex(buffer, index, count, this.writer);
	}
	writeChars(buffer: string[], index: number, count: number): void {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("Chars", true);
		this.writeEscapedBuffer(buffer, index, count, this.state == WriteState.Attribute);
	}
	writeRaw(buffer: string[], index: number, count: number): void {
		this.checkChunkRange(buffer, index, count);
		this.shiftStateContent("Raw text", false);
		this.writer.write1(buffer, index, count);
	}
	private writeIndent(): void {
		this.writeIndentCore(0, false);
	}
	private writeIndentEndElement(): void {
		this.writeIndentCore(-1, false);
	}
	private writeIndentAttribute(): void {
		if (!this.writeIndentCore(0, true)) {
			this.writer.write3(' ');
		}
	}
	private writeIndentCore(nestFix: number, attribute: boolean): boolean {
		if (!this.indent) {
			return false;
		}
		for (let i: number = this.open_count - 1; i >= 0; i--) {
			if (!attribute && this.elements[i].hasSimple) {
				return false;
			}
		}
		if (this.state != WriteState.Start) {
			this.writer.write10(this.newline);
		}
		for (let i1: number = 0; i1 < this.open_count + nestFix; i1++) {
			this.writer.write10(this.indent_string);
		}
		return true;
	}
	private outputAutoStartDocument(): void {
		if (this.state != WriteState.Start) {
			return;
		}
		this.writeStartDocumentCore(false, false);
	}
	private shiftStateTopLevel(occured: string, allowAttribute: boolean, dontCheckXmlDecl: boolean, isCharacter: boolean): void {
		let t1 = this.state;
		L0: while (true) {
			switch (t1) {
				case WriteState.Closed: throw this.stateError(occured);
				case WriteState.Start:
				if (isCharacter) {
					this.checkMixedContentState();
				}
				if (this.xmldecl_state == XmlTextWriter_XmlDeclState.Auto && !dontCheckXmlDecl) {
					this.outputAutoStartDocument();
				}
				this.state = WriteState.Prolog;
				break;

				case WriteState.Attribute:
				if (allowAttribute) {
					break;
				}
				t1 = WriteState.Closed;
				continue L0;

				case WriteState.Element:
				if (isCharacter) {
					this.checkMixedContentState();
				}
				this.closeStartElement();
				break;

				case WriteState.Content:
				if (isCharacter) {
					this.checkMixedContentState();
				}
				break;

			}

			break;
		}
	}
	private checkMixedContentState(): void {
		if (this.open_count > 0) {
			this.elements[this.open_count - 1].hasSimple = true;
		}
	}
	private shiftStateContent(occured: string, allowAttribute: boolean): void {
		let t1 = this.state;
		L0: while (true) {
			switch (t1) {
				case WriteState.Closed: throw this.stateError(occured);
				case WriteState.Prolog:

				case WriteState.Start:
				if (!this.allow_doc_fragment || this.is_document_entity) {
					t1 = WriteState.Closed;
					continue L0;
				}
				if (this.xmldecl_state == XmlTextWriter_XmlDeclState.Auto) {
					this.outputAutoStartDocument();
				}
				this.checkMixedContentState();
				this.state = WriteState.Content;
				break;

				case WriteState.Attribute:
				if (allowAttribute) {
					break;
				}
				t1 = WriteState.Closed;
				continue L0;

				case WriteState.Element:
				this.closeStartElement();
				this.checkMixedContentState();
				break;

				case WriteState.Content:
				this.checkMixedContentState();
				break;

			}

			break;
		}
	}
	private writeEscapedString(text: string, isAttribute: boolean): void {
		let escaped: string[] = isAttribute ? XmlTextWriter.escaped_attr_chars : XmlTextWriter.escaped_text_chars;
		let idx: number = indexOfAny(text, escaped);
		if (idx >= 0) {
			let arr: string[] = stringToCharArray(text);
			this.writeCheckedBuffer(arr, 0, idx);
			this.writeEscapedBuffer(arr, idx, arr.length - idx, isAttribute);
		} else {
			this.writeCheckedString(text);
		}
	}
	private writeCheckedString(s: string): void {
		let i: number = XmlChar.indexOfInvalid1(s, true);
		if (i >= 0) {
			let arr: string[] = stringToCharArray(s);
			this.writer.write1(arr, 0, i);
			this.writeCheckedBuffer(arr, i, arr.length - i);
		} else {
			this.writer.write10(s);
		}
	}
	private writeCheckedBuffer(text: string[], idx: number, length: number): void {
		let start: number = idx;
		let end: number = idx + length;
		while ((idx = XmlChar.indexOfInvalid(text, start, length, true)) >= 0) {
			if (this.check_character_validity) {
				throw this.argumentError(stringFormat("Input contains invalid character at {0} : &#x{1:X};", idx, <number>text[idx].charCodeAt(0)));
			}
			if (start < idx) {
				this.writer.write1(text, start, idx - start);
			}
			this.writer.write10("&#x");
			this.writer.write10(intToString1((<number>text[idx].charCodeAt(0)), "X", CultureInfo.invariantCulture));
			this.writer.write3(';');
			length -= idx - start + 1;
			start = idx + 1;
		}
		if (start < end) {
			this.writer.write1(text, start, end - start);
		}
	}
	private writeEscapedBuffer(text: string[], index: number, length: number, isAttribute: boolean): void {
		let start: number = index;
		let end: number = index + length;
		L0: for (let i: number = start; i < end; i++) {
			let t1 = text[i];
			L1: while (true) {
				switch (t1) {
					default: continue L0;
					case '&':

					case '<':

					case '>':
					if (start < i) {
						this.writeCheckedBuffer(text, start, i - start);
					}
					this.writer.write3('&');
					switch (text[i]) {
						case '&':
						this.writer.write10("amp;");
						break;

						case '<':
						this.writer.write10("lt;");
						break;

						case '>':
						this.writer.write10("gt;");
						break;

						case '\'':
						this.writer.write10("apos;");
						break;

						case '\"':
						this.writer.write10("quot;");
						break;

					}

					break;

					case '\"':

					case '\'':
					if (isAttribute && text[i] == this.quote_char) {
						t1 = '&';
						continue L1;
					}
					continue L0;

					case '\r':
					if (i + 1 < end && text[i] == '\n') {
						i++;
					}
					t1 = '\n';
					continue L1;

					case '\n':
					if (start < i) {
						this.writeCheckedBuffer(text, start, i - start);
					}
					if (isAttribute) {
						this.writer.write10(text[i] == '\r' ? "&#xD;" : "&#xA;");
						break;
					}
					switch (this.newline_handling) {
						case NewLineHandling.Entitize:
						this.writer.write10(text[i] == '\r' ? "&#xD;" : "&#xA;");
						break;

						case NewLineHandling.Replace:
						this.writer.write10(this.newline);
						break;

						default:
						this.writer.write3(text[i]);
						break;

					}

					break;

				}

				break;
			}
			start = i + 1;
		}
		if (start < end) {
			this.writeCheckedBuffer(text, start, end - start);
		}
	}
	private argumentOutOfRangeError(name: string): BaseError {
		return new ArgumentOutOfRangeException(1, name);
	}
	private argumentError(msg: string): BaseError {
		return new ArgumentException(1, msg);
	}
	private invalidOperation(msg: string): BaseError {
		return new InvalidOperationException(1, msg);
	}
	private stateError(occured: string): BaseError {
		return this.invalidOperation(stringFormat("This XmlWriter does not accept {0} at this state {1}.", occured, enumGetBox<WriteState>(WriteState_$type, this.state)));
	}
}


