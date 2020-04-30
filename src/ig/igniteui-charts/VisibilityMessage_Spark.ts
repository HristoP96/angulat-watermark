/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { Visibility } from "igniteui-core/Visibility";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class VisibilityMessage_Spark extends Message_Spark {
	static $t: Type = markType(VisibilityMessage_Spark, 'VisibilityMessage_Spark', (<any>Message_Spark).$type);
	private _visibility: Visibility = <Visibility>0;
	get visibility(): Visibility {
		return this._visibility;
	}
	set visibility(value: Visibility) {
		this._visibility = value;
	}
	private _pathPropertyName: string = null;
	get pathPropertyName(): string {
		return this._pathPropertyName;
	}
	set pathPropertyName(value: string) {
		this._pathPropertyName = value;
	}
}


