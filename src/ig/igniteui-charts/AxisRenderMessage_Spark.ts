/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RenderingMessage_Spark } from "./RenderingMessage_Spark";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AxisRenderMessage_Spark extends RenderingMessage_Spark {
	static $t: Type = markType(AxisRenderMessage_Spark, 'AxisRenderMessage_Spark', (<any>RenderingMessage_Spark).$type);
	private _renderInCanvas: boolean = false;
	get renderInCanvas(): boolean {
		return this._renderInCanvas;
	}
	set renderInCanvas(value: boolean) {
		this._renderInCanvas = value;
	}
}


