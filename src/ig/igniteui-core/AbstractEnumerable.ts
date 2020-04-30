/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, Type, markType, getEnumeratorObject } from "./type";
import { AbstractEnumerator } from "./AbstractEnumerator";

/**
 * @hidden 
 */
export class AbstractEnumerable extends Base implements IEnumerable {
	static $t: Type = markType(AbstractEnumerable, 'AbstractEnumerable', (<any>Base).$type, [IEnumerable_$type]);
	private _inner: () => IEnumerable = null;
	constructor(inner: any) {
		super();
		this._inner = <() => IEnumerable>inner;
	}
	getEnumeratorObject(): IEnumerator {
		return new AbstractEnumerator(getEnumeratorObject(this._inner()));
	}
}


