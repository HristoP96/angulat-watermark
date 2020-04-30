/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RenderingContext } from "igniteui-core/RenderingContext";

/**
 * @hidden 
 */
export class RenderSurface extends Base {
	static $t: Type = markType(RenderSurface, 'RenderSurface');
	private _surface: RenderingContext = null;
	get surface(): RenderingContext {
		return this._surface;
	}
	set surface(value: RenderingContext) {
		this._surface = value;
	}
}


