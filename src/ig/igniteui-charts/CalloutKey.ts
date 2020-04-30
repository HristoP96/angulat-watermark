/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, Type, markType } from "igniteui-core/type";
import { Series } from "./Series";

/**
 * @hidden 
 */
export class CalloutKey extends Base {
	static $t: Type = markType(CalloutKey, 'CalloutKey');
	constructor(item: any, series: Series) {
		super();
		this.item = item;
		this.series = series;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.item) ^ Base.getHashCodeStatic(this.series);
	}
	equals(obj: any): boolean {
		let other = typeCast<CalloutKey>((<any>CalloutKey).$type, obj);
		if (other == null) {
			return super.equals(obj);
		}
		return this.item == other.item && this.series == other.series;
	}
}


