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
export class LevelOfDetailResponseModel extends Base {
	static $t: Type = markType(LevelOfDetailResponseModel, 'LevelOfDetailResponseModel');
	private _level: number = 0;
	get level(): number {
		return this._level;
	}
	set level(value: number) {
		this._level = value;
	}
	private _resolution: number = 0;
	get resolution(): number {
		return this._resolution;
	}
	set resolution(value: number) {
		this._resolution = value;
	}
	private _scale: number = 0;
	get scale(): number {
		return this._scale;
	}
	set scale(value: number) {
		this._scale = value;
	}
}


