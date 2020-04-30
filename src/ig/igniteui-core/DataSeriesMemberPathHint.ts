/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, typeCast, enumGetBox, Type, markType } from "./type";
import { DataSeriesIntent, DataSeriesIntent_$type } from "./DataSeriesIntent";
import { List$1 } from "./List$1";
import { stringIsNullOrEmpty, stringReplace } from "./string";

/**
 * @hidden 
 */
export class DataSeriesMemberPathHint extends Base {
	static $t: Type = markType(DataSeriesMemberPathHint, 'DataSeriesMemberPathHint');
	private _path: string = null;
	get path(): string {
		return this._path;
	}
	set path(value: string) {
		this._path = value;
	}
	private _intent: DataSeriesIntent = <DataSeriesIntent>0;
	get intent(): DataSeriesIntent {
		return this._intent;
	}
	set intent(value: DataSeriesIntent) {
		this._intent = value;
	}
	equals(obj: any): boolean {
		let other: DataSeriesMemberPathHint = typeCast<DataSeriesMemberPathHint>((<any>DataSeriesMemberPathHint).$type, obj);
		if (other == null) {
			return false;
		}
		if (!Base.equalsStatic(this.path, other.path)) {
			return false;
		}
		if (this.intent != other.intent) {
			return false;
		}
		return true;
	}
	toString(): string {
		return enumGetBox<DataSeriesIntent>(DataSeriesIntent_$type, this.intent) + " Path = '" + this.path + "'";
	}
	update1(propName: string, propFormat: string = null): void {
		this.path = stringIsNullOrEmpty(propFormat) ? propName : stringReplace(propFormat, "NAME", propName);
	}
	update(propNames: List$1<string>, propFormat: string = null): void {
		if (propNames.count == 0) {
			return;
		}
		this.update1(propNames._inner[0], propFormat);
	}
	hasPath(): boolean {
		return !stringIsNullOrEmpty(this.path);
	}
	clone(): DataSeriesMemberPathHint {
		return ((() => {
			let $ret = new DataSeriesMemberPathHint();
			$ret.intent = this.intent;
			$ret.path = this.path;
			return $ret;
		})());
	}
}


