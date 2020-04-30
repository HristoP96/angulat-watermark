/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, getInstanceType } from "igniteui-core/type";
import { Message_Spark } from "./Message_Spark";
import { DictionaryUtil } from "igniteui-core/dictionary";

/**
 * @hidden 
 */
export class MessageHandler_Spark extends Base {
	static $t: Type = markType(MessageHandler_Spark, 'MessageHandler_Spark');
	private _dictionary: Map<string, any> = DictionaryUtil.dictionaryCreate();
	addHandler(messageType: Type, handler: (m: Message_Spark) => void): void {
		this._dictionary.set(messageType.typeName, handler);
	}
	messageReceived(m: Message_Spark): void {
		let handler: (m: Message_Spark) => void;
		let key: string = getInstanceType(m).typeName;
		if (this._dictionary.has(key)) {
			handler = <(m: Message_Spark) => void>this._dictionary.get(key);
			handler(m);
		}
	}
}


