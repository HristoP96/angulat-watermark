/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class XNamespace extends Base {
	static $t: Type = markType(XNamespace, 'XNamespace');
	private _namespaceName: string = null;
	constructor(namespaceName: string) {
		super();
		this._namespaceName = namespaceName;
	}
	static get(namespaceName: string): XNamespace {
		return new XNamespace(namespaceName);
	}
	static get xmlns(): XNamespace {
		return XNamespace.get("http://www.w3.org/2000/xmlns/");
	}
	get namespaceName(): string {
		return this._namespaceName;
	}
}


