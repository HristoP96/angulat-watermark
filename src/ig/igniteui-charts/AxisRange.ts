/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEquatable$1, IEquatable$1_$type, typeCast, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class AxisRange extends Base implements IEquatable$1<AxisRange> {
	static $t: Type = markType(AxisRange, 'AxisRange', (<any>Base).$type, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
	constructor(minimum: number, maximum: number) {
		super();
		this.minimum = minimum;
		this.maximum = maximum;
	}
	private _minimum: number = 0;
	get minimum(): number {
		return this._minimum;
	}
	set minimum(value: number) {
		this._minimum = value;
	}
	private _maximum: number = 0;
	get maximum(): number {
		return this._maximum;
	}
	set maximum(value: number) {
		this._maximum = value;
	}
	equals(other: AxisRange): boolean {
		return other != null && this.minimum == other.minimum && this.maximum == other.maximum;
	}
	equals1(other: any): boolean {
		return this.equals(typeCast<AxisRange>((<any>AxisRange).$type, other));
	}
	getHashCode(): number {
		return super.getHashCode();
	}
}


