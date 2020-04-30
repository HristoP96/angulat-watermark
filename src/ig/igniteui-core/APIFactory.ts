/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { Color } from "./Color";

/**
 * @hidden 
 */
export class APIFactory extends Base {
	static $t: Type = markType(APIFactory, 'APIFactory');
	static createPoint(x: number, y: number): Point {
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	static createRect(left: number, top: number, width: number, height: number): Rect {
		return new Rect(0, left, top, width, height);
	}
	static createSize(width: number, height: number): Size {
		return new Size(1, width, height);
	}
	static createColor(value: string): Color {
		let ret = new Color();
		ret.colorString = value;
		return ret;
	}
}


