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
export class FlattenerSettings extends Base {
	static $t: Type = markType(FlattenerSettings, 'FlattenerSettings');
	constructor() {
		super();
		this.chunkingAmount = 3000;
	}
	private static _instance: FlattenerSettings = null;
	static get instance(): FlattenerSettings {
		if (FlattenerSettings._instance == null) {
			FlattenerSettings._instance = new FlattenerSettings();
		}
		return FlattenerSettings._instance;
	}
	private _chunkingAmount: number = 0;
	get chunkingAmount(): number {
		return this._chunkingAmount;
	}
	set chunkingAmount(value: number) {
		this._chunkingAmount = value;
	}
}


