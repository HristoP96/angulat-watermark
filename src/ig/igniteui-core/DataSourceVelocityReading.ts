/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DataSourceVelocityReading extends Base {
	static $t: Type = markType(DataSourceVelocityReading, 'DataSourceVelocityReading');
	constructor(position: Point, time: number) {
		super();
		this.position = position;
		this.time = time;
	}
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
	private _time: number = 0;
	get time(): number {
		return this._time;
	}
	set time(value: number) {
		this._time = value;
	}
}


