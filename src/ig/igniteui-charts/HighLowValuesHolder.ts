/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ValuesHolder } from "./ValuesHolder";
import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class HighLowValuesHolder extends ValuesHolder {
	static $t: Type = markType(HighLowValuesHolder, 'HighLowValuesHolder', (<any>ValuesHolder).$type);
	private _highValues: IList$1<number> = null;
	get highValues(): IList$1<number> {
		return this._highValues;
	}
	set highValues(value: IList$1<number>) {
		this._highValues = value;
	}
	private _lowValues: IList$1<number> = null;
	get lowValues(): IList$1<number> {
		return this._lowValues;
	}
	set lowValues(value: IList$1<number>) {
		this._lowValues = value;
	}
	protected get_count(): number {
		if (this.highValues == null || this.lowValues == null) {
			return 0;
		}
		return Math.min(this.highValues.count, this.lowValues.count);
	}
	get count(): number {
		return this.get_count();
	}
}


