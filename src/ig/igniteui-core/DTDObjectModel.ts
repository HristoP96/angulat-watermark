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
export class DTDObjectModel extends Base {
	static $t: Type = markType(DTDObjectModel, 'DTDObjectModel');
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
	private _publicId: string = null;
	get publicId(): string {
		return this._publicId;
	}
	set publicId(value: string) {
		this._publicId = value;
	}
	private _systemId: string = null;
	get systemId(): string {
		return this._systemId;
	}
	set systemId(value: string) {
		this._systemId = value;
	}
	private _internalSubset: string = null;
	get internalSubset(): string {
		return this._internalSubset;
	}
	set internalSubset(value: string) {
		this._internalSubset = value;
	}
}


