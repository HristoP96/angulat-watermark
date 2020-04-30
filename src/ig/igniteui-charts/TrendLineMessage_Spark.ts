/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RenderingMessage_Spark } from "./RenderingMessage_Spark";
import { Point, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TrendLineMessage_Spark extends RenderingMessage_Spark {
	static $t: Type = markType(TrendLineMessage_Spark, 'TrendLineMessage_Spark', (<any>RenderingMessage_Spark).$type);
	private _points: Point[] = null;
	get points(): Point[] {
		return this._points;
	}
	set points(value: Point[]) {
		this._points = value;
	}
}


