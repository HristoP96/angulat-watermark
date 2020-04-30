/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class DefaultProvidesViewport extends Base implements IProvidesViewport {
	static $t: Type = markType(DefaultProvidesViewport, 'DefaultProvidesViewport', (<any>Base).$type, [IProvidesViewport_$type]);
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		viewportRect = Rect.empty;
		windowRect = Rect.empty;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	getEffectiveViewport(): Rect {
		return Rect.empty;
	}
}


