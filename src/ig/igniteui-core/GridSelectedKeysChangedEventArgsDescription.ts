/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { PrimaryKeyValueDescription } from "./PrimaryKeyValueDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridSelectedKeysChangedEventArgsDescription extends Description {
	static $t: Type = markType(GridSelectedKeysChangedEventArgsDescription, 'GridSelectedKeysChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridSelectedKeysChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _addedKeys: PrimaryKeyValueDescription[] = null;
	get addedKeys(): PrimaryKeyValueDescription[] {
		return this._addedKeys;
	}
	set addedKeys(value: PrimaryKeyValueDescription[]) {
		this._addedKeys = value;
		this.markDirty("AddedKeys");
	}
	private _removedKeys: PrimaryKeyValueDescription[] = null;
	get removedKeys(): PrimaryKeyValueDescription[] {
		return this._removedKeys;
	}
	set removedKeys(value: PrimaryKeyValueDescription[]) {
		this._removedKeys = value;
		this.markDirty("RemovedKeys");
	}
}


