/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, markEnum } from "./type";

export interface XmlDocument extends XmlElement {
    createNode(nodeType: XmlNodeType, name: string, namespaceUri: string): XmlNode
    cloneNode(deep?: boolean): XmlNode;
    readonly childNodes: XmlNodeList;
    documentElement: XmlElement;
    importNode(node: XmlNode, p2: boolean): XmlNode;
    createElementNS(namespaceName: string, localName: string): XmlNode;
}
export let XmlDocument_$type = new Type(null, 'XmlDocument');

export interface XmlElement extends XmlNode {
 
}
export let XmlElement_$type = new Type(null, 'XmlElement');

export interface XmlNode {
    xml: string;
    text: string;
    baseName: string;
    cloneNode(deep?: boolean): XmlNode;
    ownerDocument: XmlDocument;
    namespaceURI: string;
    nodeType: XmlNodeType;
    appendChild(child: XmlNode): void;
    removeChild(child: XmlNode): void;
    localName: string;
    value: string;
    nodeValue: string;
    attributes: XmlNodeList;
    setAttributeNode(attr: XmlAttribute): void;
    getAttributeNodeNS(namespaceName: string, localName: string): XmlAttribute;
    readonly childNodes: XmlNodeList;
    textContent: string;
}
export let XmlNode_$type = new Type(null, 'XmlNode');

export interface XmlAttribute extends XmlNode {
    cloneNode(deep?: boolean): XmlNode;
    readonly childNodes: XmlNodeList;
}
export let XmlAttribute_$type = new Type(null, 'XmlAttribute');

export interface XmlLinkedNode extends XmlNode {

}
export let XmlLinkedNode_$type = new Type(null, 'XmlLinkedNode');

export interface XmlNodeList extends XmlNamedNodeMap {
    item(i: number) : XmlNode;
    length: number;
}
export let XmlNodeList_$type = new Type(null, 'XmlNodeList');

export interface XmlNamedNodeMap {
    getQualifiedItem(localName: string, namespaceName: string): XmlNode;
}
export let XmlNamedNodeMap_$type = new Type(null, 'XmlNamedNodeMap');

export enum XmlNodeType
    {
		None = 0,
        Element = 1,
        Attribute = 2,
        Text = 3,
        CDATA = 4,
        EntityReference = 5,
        Entity = 6,
        ProcessingInstruction = 7,
        Comment = 8,
        Document = 9,
        DocumentType = 10,
        DocumentFragment = 11,
		Notation = 12,
		Whitespace = 13,
		SignificantWhitespace = 14,
		EndElement = 15,
		EndEntity = 16,
		XmlDeclaration = 17,
    }
export let XmlNodeType_$type = markEnum("XmlNodeType", "Node,0;Element,1;Attribute,2;Text,3;CData,4;EntityReference,5;Entity,6;ProcessingInstruction,7;Comment,8;Document,9;DocumentType,10;DocumentFragment,11;Notation,12;Whitespace,13;SignificantWhitespace,14;EndElement,15;EndEntity,16;XmlDeclaration,17");
