/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { List$1 } from "igniteui-core/List$1";
import { Base, Number_$type, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class IndexCollection extends ObservableCollection$1<number> {
	static $t: Type = markType(IndexCollection, 'IndexCollection', (<any>ObservableCollection$1).$type.specialize(Number_$type));
	constructor() {
		super(Number_$type, 0);
	}
	protected insertItem(index: number, item: number): void {
		if (!this.contains(item)) {
			super.insertItem(index, item);
		}
	}
	protected setItem(index: number, item: number): void {
		if (this.contains(item)) {
			this.remove(item);
			this.insertItem(index, item);
		} else {
			super.setItem(index, item);
		}
	}
}


