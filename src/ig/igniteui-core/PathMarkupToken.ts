/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { PathMarkupTokenType } from "./PathMarkupTokenType";

/**
 * @hidden 
 */
export class PathMarkupToken extends Base {
	static $t: Type = markType(PathMarkupToken, 'PathMarkupToken');
	private _type: PathMarkupTokenType = <PathMarkupTokenType>0;
	get type(): PathMarkupTokenType {
		return this._type;
	}
	set type(value: PathMarkupTokenType) {
		this._type = value;
	}
	private _isAbsolute: boolean = false;
	get isAbsolute(): boolean {
		return this._isAbsolute;
	}
	set isAbsolute(value: boolean) {
		this._isAbsolute = value;
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	constructor(type: PathMarkupTokenType, isAbsolute: boolean) {
		super();
		this.type = type;
		this.isAbsolute = isAbsolute;
	}
}


