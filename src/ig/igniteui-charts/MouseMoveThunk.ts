/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { ScalerParams } from "./ScalerParams";

/**
 * @hidden 
 */
export class MouseMoveThunk extends Base {
	static $t: Type = markType(MouseMoveThunk, 'MouseMoveThunk');
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
	private _axisPosition: Point = null;
	get axisPosition(): Point {
		return this._axisPosition;
	}
	set axisPosition(value: Point) {
		this._axisPosition = value;
	}
	private _desiredNeighborCount: number = 0;
	get desiredNeighborCount(): number {
		return this._desiredNeighborCount;
	}
	set desiredNeighborCount(value: number) {
		this._desiredNeighborCount = value;
	}
	private _scalerParamsX: ScalerParams = null;
	get scalerParamsX(): ScalerParams {
		return this._scalerParamsX;
	}
	set scalerParamsX(value: ScalerParams) {
		this._scalerParamsX = value;
	}
}


