/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { InteractionMessage_Spark } from "./InteractionMessage_Spark";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ViewportChangedMessage_Spark extends InteractionMessage_Spark {
	static $t: Type = markType(ViewportChangedMessage_Spark, 'ViewportChangedMessage_Spark', (<any>InteractionMessage_Spark).$type);
	private _newTop: number = 0;
	get newTop(): number {
		return this._newTop;
	}
	set newTop(value: number) {
		this._newTop = value;
	}
	private _newLeft: number = 0;
	get newLeft(): number {
		return this._newLeft;
	}
	set newLeft(value: number) {
		this._newLeft = value;
	}
	private _newWidth: number = 0;
	get newWidth(): number {
		return this._newWidth;
	}
	set newWidth(value: number) {
		this._newWidth = value;
	}
	private _newHeight: number = 0;
	get newHeight(): number {
		return this._newHeight;
	}
	set newHeight(value: number) {
		this._newHeight = value;
	}
	toString(): string {
		return "ViewportChangedMessage[" + this.newTop.toString() + ", " + this.newLeft.toString() + ", " + this.newWidth.toString() + ", " + this.newHeight.toString() + "]";
	}
}


