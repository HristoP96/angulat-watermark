/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XNode } from "./XNode";
import { XmlNode, XmlNode_$type, XmlElement, XmlElement_$type, XmlNodeList, XmlNodeList_$type, XmlDocument, XmlDocument_$type, XmlNodeType, XmlNodeType_$type } from "./xml";
import { XName } from "./XName";
import { XObject } from "./XObject";
import { XmlUtils } from "./XmlUtils";
import { IEnumerable$1, IEnumerable$1_$type, Base, typeCast, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { XAttribute } from "./XAttribute";

/**
 * @hidden 
 */
export abstract class XContainer extends XNode {
	static $t: Type = markType(XContainer, 'XContainer', (<any>XNode).$type);
	constructor(node: XmlNode) {
		super(node);
	}
	element(name: XName): XElement {
		let element: XmlElement = null;
		let backingNode = this.backingNode;
		let children = backingNode.childNodes;
		let childrenCount = children.length;
		let localName = name.localName;
		let namespaceName = name.namespaceName;
		for (let i: number = 0; i < childrenCount; i++) {
			let currNode: XmlNode = children.item(i);
			if (currNode.namespaceURI == namespaceName && currNode.nodeType == XmlNodeType.Element && XmlUtils.getLocalName(currNode) == localName) {
				element = <XmlElement>currNode;
			}
		}
		if (element == null) {
			return null;
		} else {
			return new XElement(0, element);
		}
	}
	elements(): IEnumerable$1<XElement> {
		return this.elementsImpl(null);
	}
	elements1(name: XName): IEnumerable$1<XElement> {
		return this.elementsImpl(name);
	}
	private elementsImpl(name: XName): IEnumerable$1<XElement> {
		let elements: List$1<XElement> = new List$1<XElement>((<any>XElement).$type, 0);
		for (let i: number = 0; i < this.backingNode.childNodes.length; i++) {
			let currNode: XmlNode = this.backingNode.childNodes.item(i);
			if (currNode.nodeType == XmlNodeType.Element) {
				let match: boolean = false;
				if (name != null) {
					if (XmlUtils.getLocalName(currNode) == name.localName && currNode.namespaceURI == name.namespaceName) {
						match = true;
					}
				} else {
					match = true;
				}
				if (match) {
					elements.add(new XElement(0, <XmlElement>currNode));
				}
			}
		}
		return elements;
	}
	add(content: any): void {
		let node: XmlNode = this.backingNode;
		let doc: XmlDocument;
		if (typeCast<XDocument>((<any>XDocument).$type, this) !== null) {
			doc = <XmlDocument>this.backingNode;
		} else {
			doc = this.backingNode.ownerDocument;
		}
		if (typeCast<XAttribute>((<any>XAttribute).$type, content) !== null) {
			(<XAttribute>content).attachToElement(<XmlElement>node);
		} else if (typeCast<XElement>((<any>XElement).$type, content) !== null) {
			(<XElement>content).attachToNode(node, doc);
		}
	}
}

/**
 * @hidden 
 */
export class XDocument extends XContainer {
	static $t: Type = markType(XDocument, 'XDocument', (<any>XContainer).$type);
	constructor(initNumber: number, doc: XmlDocument);
	constructor(initNumber: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let doc: XmlDocument = <XmlDocument>_rest[0];
				super(doc);
			}
			break;

			case 1:
			{
				super(XmlUtils.createDocument());
			}
			break;

		}

	}
	protected get_nodeType(): XmlNodeType {
		return XmlNodeType.Document;
	}
	get nodeType(): XmlNodeType {
		return this.get_nodeType();
	}
	static parse(text: string): XDocument {
		return new XDocument(0, XmlUtils.parseXml(text));
	}
}

/**
 * @hidden 
 */
export class XElement extends XContainer {
	static $t: Type = markType(XElement, 'XElement', (<any>XContainer).$type);
	constructor(initNumber: number, element: XmlElement);
	constructor(initNumber: number, name: XName);
	constructor(initNumber: number, name: XName, content: any);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let element: XmlElement = <XmlElement>_rest[0];
				super(element);
			}
			break;

			case 1:
			{
				let name: XName = <XName>_rest[0];
				let $outerArgs = <any[]>[ name, null ];
				{
					let name: XName = <XName>$outerArgs[0];
					let content: any = <any>$outerArgs[1];
					super(XmlUtils.createDetachedElement(name.localName, name.namespaceName));
					let value: string = content == null ? "" : content.toString();
					this.value = value;
				}
			}
			break;

			case 2:
			{
				let name: XName = <XName>_rest[0];
				let content: any = <any>_rest[1];
				super(XmlUtils.createDetachedElement(name.localName, name.namespaceName));
				let value: string = content == null ? "" : content.toString();
				this.value = value;
			}
			break;

		}

	}
	get value(): string {
		return XmlUtils.getInnerText(this.backingNode);
	}
	set value(value: string) {
		XmlUtils.setInnerText(this.backingNode, value);
	}
	protected get_nodeType(): XmlNodeType {
		return XmlNodeType.Element;
	}
	get nodeType(): XmlNodeType {
		return this.get_nodeType();
	}
	get name(): XName {
		return XName.get(XmlUtils.getLocalName(this.backingNode), this.backingNode.namespaceURI);
	}
	attribute(name: XName): XAttribute {
		return new XAttribute(XmlUtils.getAttributeNode(<XmlElement>this.backingNode, name.localName, name.namespaceName));
	}
	attachToNode(node: XmlNode, doc: XmlDocument): void {
		if (this.backingNode.ownerDocument != doc) {
			this.backingNode = XmlUtils.importNode(doc, this.backingNode);
		}
		node.appendChild(this.backingNode);
	}
}


