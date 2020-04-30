/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, BaseError, Type, typeCast, markType } from "igniteui-core/type";
import { Node } from "./Node";

/**
 * @hidden 
 */
export class IgQueue$1<T> extends Base {
	static $t: Type = markType(IgQueue$1, 'IgQueue$1');
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
	}
	private _count: number = 0;
	private front: Node = null;
	private end: Node = null;
	private temp: Node = null;
	get empty(): boolean {
		return (this._count == 0);
	}
	get count(): number {
		return this._count;
	}
	enqueue(obj: T): void {
		if (this._count == 0) {
			this.front = this.end = new Node(obj, this.front);
		} else {
			this.end.next = new Node(obj, this.end.next);
			this.end = this.end.next;
		}
		this._count++;
	}
	dequeue(value: T): { p0: T; } {
		this.temp = this.front;
		if (this._count == 0) {
			throw new BaseError(1, "tried to serve from an empty Queue");
		}
		this.front = this.front.next;
		this._count--;
		value = typeCast<T>(this.$t, this.temp.value);
		return {
			p0: value

		};
	}
}


