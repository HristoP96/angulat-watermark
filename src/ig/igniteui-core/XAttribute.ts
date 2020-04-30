/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XObject } from "./XObject";
import { XmlNodeType, XmlNodeType_$type, XmlAttribute, XmlAttribute_$type, XmlElement, XmlElement_$type, XmlNode, XmlNode_$type } from "./xml";
import { XmlUtils } from "./XmlUtils";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class XAttribute extends XObject {
	static $t: Type = markType(XAttribute, 'XAttribute', (<any>XObject).$type);
	constructor(node: XmlAttribute) {
		super(node);
	}
	attachToElement(element: XmlElement): void {
		this.backingNode = this.backingNode.cloneNode(true);
		element.setAttributeNode(<XmlAttribute>this.backingNode);
	}
	protected get_nodeType(): XmlNodeType {
		return XmlNodeType.Attribute;
	}
	get nodeType(): XmlNodeType {
		return this.get_nodeType();
	}
	get value(): string {
		return XmlUtils.getAttributeValue(<XmlAttribute>this.backingNode);
	}
}


