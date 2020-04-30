/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XObject } from "./XObject";
import { XmlNode, XmlNode_$type } from "./xml";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class XNode extends XObject {
	static $t: Type = markType(XNode, 'XNode', (<any>XObject).$type);
	constructor(node: XmlNode) {
		super(node);
	}
}


