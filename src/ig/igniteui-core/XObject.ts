/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { XmlNode, XmlNode_$type, XmlNodeType, XmlNodeType_$type } from "./xml";
import { XmlUtils } from "./XmlUtils";

/**
 * @hidden 
 */
export abstract class XObject extends Base {
	static $t: Type = markType(XObject, 'XObject');
	constructor(node: XmlNode) {
		super();
		this.backingNode = node;
	}
	private _backingNode: XmlNode = null;
	protected get backingNode(): XmlNode {
		return this._backingNode;
	}
	protected set backingNode(value: XmlNode) {
		this._backingNode = value;
	}
	abstract get nodeType(): XmlNodeType;
	toString(): string {
		if (this.backingNode != null) {
			return XmlUtils.xmlNodeToString(this.backingNode);
		} else {
			return "";
		}
	}
}


