/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { GridColumnSpacer } from "./GridColumnSpacer";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class GridColumnSpacerCollection extends List$1<GridColumnSpacer> {
	static $t: Type = markType(GridColumnSpacerCollection, 'GridColumnSpacerCollection', (<any>List$1).$type.specialize((<any>GridColumnSpacer).$type));
	constructor() {
		super((<any>GridColumnSpacer).$type, 0);
	}
	getActualWidth(): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			width = width + this._inner[i].actualWidth;
		}
		return width;
	}
	getStarActualWidth(): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			if (this._inner[i].isStar) {
				width = width + this._inner[i].actualWidth;
			}
		}
		return width;
	}
	getNonStarActualWidth(): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			if (!this._inner[i].isStar) {
				width = width + this._inner[i].actualWidth;
			}
		}
		return width;
	}
	getStartWidth(): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			if (this._inner[i].actualWidth > 0) {
				width = width + this._inner[i].startWidth;
			}
		}
		return width;
	}
	getLeftActualWidth(ignoreColumn: number): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			if (!this._inner[i].isRight && !(this._inner[i].owningColumnId == ignoreColumn)) {
				width = width + this._inner[i].actualWidth;
			}
		}
		return width;
	}
	getRightActualWidth(ignoreColumn: number): number {
		let count = this.count;
		let width: number = 0;
		for (let i = 0; i < count; i++) {
			if (this._inner[i].isRight && !(this._inner[i].owningColumnId == ignoreColumn)) {
				width = width + this._inner[i].actualWidth;
			}
		}
		return width;
	}
}


