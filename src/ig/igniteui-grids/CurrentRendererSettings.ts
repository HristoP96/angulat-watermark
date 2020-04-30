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
export class CurrentRendererSettings extends Base {
	static $t: Type = markType(CurrentRendererSettings, 'CurrentRendererSettings');
	currentRenderer: RenderingContext = null;
	left: number = 0;
	top: number = 0;
	isDirty: boolean = false;
}


