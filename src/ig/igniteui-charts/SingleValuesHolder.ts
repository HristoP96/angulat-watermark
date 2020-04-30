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
export class SingleValuesHolder extends ValuesHolder {
	static $t: Type = markType(SingleValuesHolder, 'SingleValuesHolder', (<any>ValuesHolder).$type);
	private _values: IList$1<number> = null;
	get values(): IList$1<number> {
		return this._values;
	}
	set values(value: IList$1<number>) {
		this._values = value;
	}
	protected get_count(): number {
		if (this.values != null) {
			return this.values.count;
		}
		return 0;
	}
	get count(): number {
		return this.get_count();
	}
}


