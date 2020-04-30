/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { XNamespace } from "./XNamespace";

/**
 * @hidden 
 */
export class XName extends Base {
	static $t: Type = markType(XName, 'XName');
	private _localName: string = null;
	private _namespaceName: string = null;
	constructor(localName: string, namespaceName: string) {
		super();
		this._localName = localName;
		this._namespaceName = namespaceName;
	}
	get localName(): string {
		return this._localName;
	}
	get namespaceName(): string {
		return this._namespaceName;
	}
	get namespace(): XNamespace {
		return XNamespace.get(this._namespaceName);
	}
	static get(localName: string, namespaceName: string): XName {
		return new XName(localName, namespaceName);
	}
}


