/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";

/**
 * @hidden 
 */
export class ShapeHitRegion extends Base {
	static $t: Type = markType(ShapeHitRegion, 'ShapeHitRegion');
	bounds: Rect = null;
	points: List$1<Point> = null;
	index: number = 0;
	element: FrameworkElement = null;
}


