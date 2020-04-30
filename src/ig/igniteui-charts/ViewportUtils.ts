/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class ViewportUtils extends Base {
	static $t: Type = markType(ViewportUtils, 'ViewportUtils');
	static transformXToViewport(xValue: number, windowRect: Rect, viewportRect: Rect): number {
		return viewportRect.left + viewportRect.width * (xValue - windowRect.left) / windowRect.width;
	}
	static transformXFromViewport(xValue: number, windowRect: Rect, viewportRect: Rect): number {
		return ((xValue - viewportRect.left) * windowRect.width / viewportRect.width) + windowRect.left;
	}
	static transformYToViewport(yValue: number, windowRect: Rect, viewportRect: Rect): number {
		return viewportRect.top + viewportRect.height * (yValue - windowRect.top) / windowRect.height;
	}
	static transformYFromViewport(yValue: number, windowRect: Rect, viewportRect: Rect): number {
		return ((yValue - viewportRect.top) * windowRect.height / viewportRect.height) + windowRect.top;
	}
	static transformXToViewportLength(xValue: number, windowRect: Rect, viewportRect: Rect): number {
		return viewportRect.width * xValue / windowRect.width;
	}
	static transformXFromViewportLength(xValue: number, windowRect: Rect, viewportRect: Rect): number {
		return windowRect.width * xValue / viewportRect.width;
	}
	static transformYToViewportLength(yValue: number, windowRect: Rect, viewportRect: Rect): number {
		return viewportRect.height * yValue / windowRect.height;
	}
}


