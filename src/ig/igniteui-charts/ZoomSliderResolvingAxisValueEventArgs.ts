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
export class ZoomSliderResolvingAxisValueEventArgs extends Base {
	static $t: Type = markType(ZoomSliderResolvingAxisValueEventArgs, 'ZoomSliderResolvingAxisValueEventArgs');
	private _position: number = 0;
	get position(): number {
		return this._position;
	}
	set position(value: number) {
		this._position = value;
	}
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
}


