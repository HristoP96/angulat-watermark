/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class MarkerManagerBucket extends Base {
	static $t: Type = markType(MarkerManagerBucket, 'MarkerManagerBucket');
	private _items: List$1<number> = null;
	get items(): List$1<number> {
		if (this._items == null) {
			this._items = new List$1<number>(Number_$type, 0);
		}
		return this._items;
	}
	private _priorityItems: List$1<number> = null;
	get priorityItems(): List$1<number> {
		if (this._priorityItems == null) {
			this._priorityItems = new List$1<number>(Number_$type, 0);
		}
		return this._priorityItems;
	}
	getItem(wasPriority: boolean): { ret: number; p0: boolean; } {
		if (this.priorityItems.count > 0) {
			let priorityIndex: number = this.priorityItems._inner[this.priorityItems.count - 1];
			this.priorityItems.removeAt(this.priorityItems.count - 1);
			wasPriority = true;
			return {
				ret: priorityIndex,
				p0: wasPriority

			};
		}
		let index: number = this.items._inner[this.items.count - 1];
		this.items.removeAt(this.items.count - 1);
		wasPriority = false;
		return {
			ret: index,
			p0: wasPriority

		};
	}
	get isEmpty(): boolean {
		return this.items.count == 0 && this.priorityItems.count == 0;
	}
}


