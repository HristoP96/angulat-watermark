/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Capture } from "./Capture";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Group extends Capture {
	static $t: Type = markType(Group, 'Group', (<any>Capture).$type);
	private readonly _success: boolean = false;
	constructor(success: boolean, index: number, length: number, value: string) {
		super(index, length, value);
		this._success = success;
	}
	get success(): boolean {
		return this._success;
	}
}


