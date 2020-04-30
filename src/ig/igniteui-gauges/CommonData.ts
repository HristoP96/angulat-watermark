/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CommonData extends Base {
	static $t: Type = markType(CommonData, 'CommonData');
	private _borderBrush: string = null;
	get borderBrush(): string {
		return this._borderBrush;
	}
	set borderBrush(value: string) {
		this._borderBrush = value;
	}
	private _borderThickness: string = null;
	get borderThickness(): string {
		return this._borderThickness;
	}
	set borderThickness(value: string) {
		this._borderThickness = value;
	}
}


