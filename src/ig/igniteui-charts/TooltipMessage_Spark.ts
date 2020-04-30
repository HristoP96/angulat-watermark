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
export class TooltipMessage_Spark extends RenderingMessage_Spark {
	static $t: Type = markType(TooltipMessage_Spark, 'TooltipMessage_Spark', (<any>RenderingMessage_Spark).$type);
	private _xOffset: number = 0;
	get xOffset(): number {
		return this._xOffset;
	}
	set xOffset(value: number) {
		this._xOffset = value;
	}
	private _yOffset: number = 0;
	get yOffset(): number {
		return this._yOffset;
	}
	set yOffset(value: number) {
		this._yOffset = value;
	}
	private _context: any = null;
	get context(): any {
		return this._context;
	}
	set context(value: any) {
		this._context = value;
	}
}


