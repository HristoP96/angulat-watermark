/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator, IEnumerator_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AbstractEnumerator extends Base implements IEnumerator {
	static $t: Type = markType(AbstractEnumerator, 'AbstractEnumerator', (<any>Base).$type, [IEnumerator_$type]);
	private _inner: IEnumerator = null;
	constructor(inner: any) {
		super();
		this._inner = <IEnumerator><any>inner;
	}
	get currentObject(): any {
		return this._inner.currentObject;
	}
	moveNext(): boolean {
		return this._inner.moveNext();
	}
	reset(): void {
		this._inner.reset();
	}
}


