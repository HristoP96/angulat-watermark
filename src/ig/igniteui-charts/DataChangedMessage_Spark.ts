/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Message_Spark } from "./Message_Spark";
import { Base, Type, markType } from "igniteui-core/type";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";

/**
 * @hidden 
 */
export class DataChangedMessage_Spark extends Message_Spark {
	static $t: Type = markType(DataChangedMessage_Spark, 'DataChangedMessage_Spark', (<any>Message_Spark).$type);
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _oldItem: any = null;
	get oldItem(): any {
		return this._oldItem;
	}
	set oldItem(value: any) {
		this._oldItem = value;
	}
	private _newItem: any = null;
	get newItem(): any {
		return this._newItem;
	}
	set newItem(value: any) {
		this._newItem = value;
	}
	private _change: NotifyCollectionChangedAction = <NotifyCollectionChangedAction>0;
	get change(): NotifyCollectionChangedAction {
		return this._change;
	}
	set change(value: NotifyCollectionChangedAction) {
		this._change = value;
	}
}


