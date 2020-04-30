/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, IEnumerable$1, IEnumerable$1_$type, Base, Type, markType } from "igniteui-core/type";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";

/**
 * @hidden 
 */
export class CustomContourValueResolverEventArgs extends EventArgs {
	static $t: Type = markType(CustomContourValueResolverEventArgs, 'CustomContourValueResolverEventArgs', (<any>EventArgs).$type);
	constructor(valueColumn: IFastItemColumn$1<number>) {
		super();
		this.valueColumn = valueColumn;
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		this._valueColumn = value;
	}
	private _contourValuesEnumerable: IEnumerable$1<number> = null;
	get contourValuesEnumerable(): IEnumerable$1<number> {
		return this._contourValuesEnumerable;
	}
	set contourValuesEnumerable(value: IEnumerable$1<number>) {
		this._contourValuesEnumerable = value;
	}
	get values(): number[] {
		if (this.valueColumn == null) {
			return <number[]>[];
		}
		return this.valueColumn.asArray();
	}
	private _contourValues: number[] = null;
	get contourValues(): number[] {
		return this._contourValues;
	}
	set contourValues(value: number[]) {
		if (value == null) {
			this.contourValuesEnumerable = null;
		} else {
			this.contourValuesEnumerable = <IEnumerable$1<number>><any>value;
		}
	}
}


