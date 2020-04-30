/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";

/**
 * @hidden 
 */
export class LinkedList$1<T> extends Base {
	static $t: Type = markType(LinkedList$1, 'LinkedList$1');
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
	}
	private _first: LinkedListNode$1<T> = null;
	get first(): LinkedListNode$1<T> {
		return this._first;
	}
	private _last: LinkedListNode$1<T> = null;
	get last(): LinkedListNode$1<T> {
		return this._last;
	}
	addFirst(item: T): void {
		if (this._first == null) {
			this._first = new LinkedListNode$1<T>(this.$t, 1, item);
			this._last = this._first;
		} else {
			let oldFirst = this._first;
			this._first = new LinkedListNode$1<T>(this.$t, 1, item);
			this._first.next = oldFirst;
			oldFirst.prev = this._first;
		}
	}
	addLast(item: T): void {
		if (this._last == null) {
			this._first = new LinkedListNode$1<T>(this.$t, 1, item);
			this._last = this._first;
		} else {
			let oldLast = this._last;
			this._last = new LinkedListNode$1<T>(this.$t, 1, item);
			this._last.prev = oldLast;
			oldLast.next = this._last;
		}
	}
	removeFirst(): void {
		this.remove(this.first);
	}
	clear(): void {
		this._first = null;
		this._last = null;
	}
	remove(node: LinkedListNode$1<T>): void {
		if (this._first == node) {
			this._first = node.next;
			if (node.next != null) {
				node.next.prev = null;
			}
		}
		if (this._last == node) {
			this._last = node.prev;
			if (node.prev != null) {
				node.prev.next = null;
			}
		}
		if (node.prev != null) {
			node.prev.next = node.next;
		}
		if (node.next != null) {
			node.next.prev = node.prev;
		}
		node.next = null;
		node.prev = null;
	}
}


