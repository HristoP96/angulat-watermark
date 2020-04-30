/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { GridSelectedKeysCollection } from "./GridSelectedKeysCollection";

/**
 * @hidden 
 */
export class GridSelectedKeysChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridSelectedKeysChangedEventArgs, 'GridSelectedKeysChangedEventArgs', (<any>EventArgs).$type);
	private _addedKeys: GridSelectedKeysCollection = null;
	get addedKeys(): GridSelectedKeysCollection {
		return this._addedKeys;
	}
	set addedKeys(value: GridSelectedKeysCollection) {
		this._addedKeys = value;
	}
	private _removedKeys: GridSelectedKeysCollection = null;
	get removedKeys(): GridSelectedKeysCollection {
		return this._removedKeys;
	}
	set removedKeys(value: GridSelectedKeysCollection) {
		this._removedKeys = value;
	}
}


