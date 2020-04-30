/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, NotSupportedException, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Capture extends Base {
	static $t: Type = markType(Capture, 'Capture');
	private readonly _index: number = 0;
	private readonly _length: number = 0;
	private readonly _value: string = null;
	constructor(index: number, length: number, value: string) {
		super();
		this._index = index;
		this._length = length;
		this._value = value;
	}
	get index(): number {
		if (this._index < 0) {
			throw new NotSupportedException(1, "Cannot get the index of regex groups");
		}
		return this._index;
	}
	get length(): number {
		return this._length;
	}
	get value(): string {
		return this._value;
	}
	toString(): string {
		return this._value;
	}
}


