/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Shape } from "./Shape";
import { Geometry } from "./Geometry";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Path extends Shape {
	static $t: Type = markType(Path, 'Path', (<any>Shape).$type);
	private _data: Geometry = null;
	get data(): Geometry {
		return this._data;
	}
	set data(value: Geometry) {
		this._data = value;
	}
}


