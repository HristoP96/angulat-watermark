/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { PrimaryKeyValue } from "./PrimaryKeyValue";
import { Base, delegateCombine, Type, markType } from "igniteui-core/type";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";

/**
 * @hidden 
 */
export class GridSelectedKeysCollection extends ObservableCollection$1<PrimaryKeyValue> {
	static $t: Type = markType(GridSelectedKeysCollection, 'GridSelectedKeysCollection', (<any>ObservableCollection$1).$type.specialize((<any>PrimaryKeyValue).$type));
	constructor() {
		super((<any>PrimaryKeyValue).$type, 0);
	}
	get all(): GridSelectedKeysCollection {
		return this;
	}
	addListener(listener: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void {
		this.collectionChanged = delegateCombine(this.collectionChanged, listener);
	}
}


