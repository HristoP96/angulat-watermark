/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, delegateCombine, delegateRemove, runOn, Type, markType } from "igniteui-core/type";
import { Message_Spark } from "./Message_Spark";
import { Queue$1 } from "igniteui-core/Queue$1";

/**
 * @hidden 
 */
export class MessageChannel_Spark extends Base {
	static $t: Type = markType(MessageChannel_Spark, 'MessageChannel_Spark');
	private _sendQueue: Queue$1<Message_Spark> = new Queue$1<Message_Spark>((<any>Message_Spark).$type);
	sendMessage(message: Message_Spark): void {
		if (this.messageSent != null) {
			this.messageSent(message);
		} else {
			this._sendQueue.enqueue(message);
		}
	}
	attachTarget(m: (message: Message_Spark) => void): void {
		this.messageSent = delegateCombine(this.messageSent, m);
		while (this._sendQueue.count > 0) {
			let mess: Message_Spark = <Message_Spark>this._sendQueue.dequeue();
			this.messageSent(mess);
		}
	}
	messageSent: (message: Message_Spark) => void = null;
	detachTarget(m: (message: Message_Spark) => void): void {
		this.messageSent = delegateRemove(this.messageSent, m);
	}
	private _connectedTo: MessageChannel_Spark = null;
	connectTo(m: MessageChannel_Spark): void {
		this._connectedTo = m;
		this.attachTarget(runOn(this, this.sendToNext));
	}
	detachFromNext(): void {
		if (this._connectedTo == null) {
			return;
		}
		this.detachTarget(runOn(this, this.sendToNext));
		this._connectedTo = null;
	}
	sendToNext(m: Message_Spark): void {
		if (this._connectedTo != null) {
			this._connectedTo.sendMessage(m);
		}
	}
	toString(): string {
		return "MessageQueue";
	}
}


