/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { Brush } from "igniteui-core/Brush";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class BrushChangedMessage_Spark extends Message_Spark {
	static $t: Type = markType(BrushChangedMessage_Spark, 'BrushChangedMessage_Spark', (<any>Message_Spark).$type);
	private _brush: Brush = null;
	get brush(): Brush {
		return this._brush;
	}
	set brush(value: Brush) {
		this._brush = value;
	}
	private _brushPropertyName: string = null;
	get brushPropertyName(): string {
		return this._brushPropertyName;
	}
	set brushPropertyName(value: string) {
		this._brushPropertyName = value;
	}
}


