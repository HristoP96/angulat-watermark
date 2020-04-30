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
export class Tooltip extends HTMLElement {
	static $t: Type = markType(Tooltip, 'Tooltip', (<any>HTMLElement).$type);
	private _updateToolTip: any = null;
	get updateToolTip(): any {
		return this._updateToolTip;
	}
	set updateToolTip(value: any) {
		this._updateToolTip = value;
	}
	private _hideToolTip: any = null;
	get hideToolTip(): any {
		return this._hideToolTip;
	}
	set hideToolTip(value: any) {
		this._hideToolTip = value;
	}
}


