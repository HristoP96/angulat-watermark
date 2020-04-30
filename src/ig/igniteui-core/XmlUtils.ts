/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { XmlDocument, XmlDocument_$type, XmlNode, XmlNode_$type, XmlElement, XmlElement_$type, XmlAttribute, XmlAttribute_$type } from "./xml";

/**
 * @hidden 
 */
export class XmlUtils extends Base {
	static $t: Type = markType(XmlUtils, 'XmlUtils');
	private static isW3CDom(): boolean {
		return <boolean>(!!(<any>window).DOMParser);
	}
	private static parseW3CDom(text: string): XmlDocument {
		let text_: string = text;
		return <XmlDocument><any>((new DOMParser()).parseFromString(text_, 'text/xml'));
	}
	private static parseMSXmlDom(text: string): XmlDocument {
		let text_: string = text;
		return <XmlDocument>((function (xml) {
    var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = false;
    xmlDoc.loadXML(xml);
    return xmlDoc;
})(text_));
	}
	private static w3CDomNodeToString(node: XmlNode): string {
		let node_: XmlNode = node;
		return <string>((new XMLSerializer()).serializeToString(<Node><any>node_));
	}
	private static mSXmlDomNodeToString(node: XmlNode): string {
		let node_: XmlNode = node;
		return <string>(node_.xml);
	}
	private static createMSXmlDom(): XmlDocument {
		return <XmlDocument>(new ActiveXObject('Microsoft.XMLDOM'));
	}
	static parseXml(text: string): XmlDocument {
		if (XmlUtils.isW3CDom()) {
			return XmlUtils.parseW3CDom(text);
		} else {
			return XmlUtils.parseMSXmlDom(text);
		}
	}
	static xmlNodeToString(node: XmlNode): string {
		if (XmlUtils.isW3CDom()) {
			return XmlUtils.w3CDomNodeToString(node);
		} else {
			return XmlUtils.mSXmlDomNodeToString(node);
		}
	}
	static createDocument(): XmlDocument {
		let doc: XmlDocument;
		if (XmlUtils.isW3CDom()) {
			doc = XmlUtils.parseW3CDom("<dummy/>");
			doc.removeChild(doc.documentElement);
		} else {
			doc = XmlUtils.createMSXmlDom();
		}
		return doc;
	}
	static createDetachedElement(localName: string, namespaceName: string): XmlElement {
		let doc_: XmlDocument = XmlUtils.createDocument();
		if (XmlUtils.isW3CDom()) {
			return doc_.createElementNS(namespaceName, localName);
		} else {
			let name_ = localName;
			let namespaceURI_ = namespaceName;
			return <XmlElement>(doc_.createNode(1/*NODE_ELEMENT*/, name_, namespaceURI_));
		}
	}
	static getInnerText(node: XmlNode): string {
		if (XmlUtils.isW3CDom()) {
			return node.textContent;
		} else {
			let node_ = node;
			return <string>(node_.text);
		}
	}
	static setInnerText(node: XmlNode, text: string): void {
		if (XmlUtils.isW3CDom()) {
			node.textContent = text;
		} else {
			let node_ = node;
			let text_ = text;
			node_.text = text_;
		}
	}
	static importNode(doc: XmlDocument, node: XmlNode): XmlNode {
		if (XmlUtils.isW3CDom()) {
			return doc.importNode(node, true);
		} else {
			return node;
		}
	}
	static getLocalName(node: XmlNode): string {
		if (XmlUtils.isW3CDom()) {
			return node.localName;
		} else {
			let node_ = node;
			return <string>(node_.baseName);
		}
	}
	static getAttributeNode(element: XmlElement, localName: string, namespaceName: string): XmlAttribute {
		if (XmlUtils.isW3CDom()) {
			return element.getAttributeNodeNS(namespaceName, localName);
		} else {
			let elem_ = element;
			let ln_ = localName;
			let nn_ = namespaceName;
			return <XmlAttribute>(elem_.attributes.getQualifiedItem(ln_, nn_));
		}
	}
	static getAttributeValue(attr: XmlAttribute): string {
		if (XmlUtils.isW3CDom()) {
			return attr.nodeValue;
		} else {
			let attr_ = attr;
			return <string>(attr_.value);
		}
	}
}


