/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class PixelRatioMessage_Spark extends Message_Spark {
	static $t: Type = markType(PixelRatioMessage_Spark, 'PixelRatioMessage_Spark', (<any>Message_Spark).$type);
	private _pixelRatio: number = 0;
	get pixelRatio(): number {
		return this._pixelRatio;
	}
	set pixelRatio(value: number) {
		this._pixelRatio = value;
	}
}


