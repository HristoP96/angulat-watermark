/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, getBoxIfEnum, markType } from "./type";

/**
 * @hidden 
 */
export class GenericEnumerator$1<T> extends Base implements IEnumerator$1<T> {
	static $t: Type = markType(GenericEnumerator$1, 'GenericEnumerator$1', (<any>Base).$type, [IEnumerator$1_$type.specialize(0)]);
	protected $t: Type = null;
	private _inner: IEnumerator$1<T> = null;
	constructor($t: Type, inner: any) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this._inner = <IEnumerator$1<T>><any>inner;
	}
	get current(): T {
		return <T>this._inner.current;
	}
	get currentObject(): any {
		return getBoxIfEnum<T>(this.$t, this._inner.current);
	}
	moveNext(): boolean {
		return this._inner.moveNext();
	}
	reset(): void {
		this._inner.reset();
	}
	dispose(): void {
	}
}


