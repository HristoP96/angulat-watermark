/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { InteractionMessage_Spark } from "./InteractionMessage_Spark";
import { Point, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class MouseMoveMessage_Spark extends InteractionMessage_Spark {
	static $t: Type = markType(MouseMoveMessage_Spark, 'MouseMoveMessage_Spark', (<any>InteractionMessage_Spark).$type);
	private _position: Point = null;
	get position(): Point {
		return this._position;
	}
	set position(value: Point) {
		this._position = value;
	}
}


