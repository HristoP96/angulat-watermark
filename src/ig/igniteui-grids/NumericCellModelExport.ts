/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellModelExport } from "./CellModelExport";
import { StringBuilder } from "igniteui-core/StringBuilder";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class NumericCellModelExport extends CellModelExport {
	static $t: Type = markType(NumericCellModelExport, 'NumericCellModelExport', (<any>CellModelExport).$type);
	private _numericValue: number = 0;
	get numericValue(): number {
		return this._numericValue;
	}
	set numericValue(value: number) {
		this._numericValue = value;
	}
	private _maxDecimalPlaces: number = 0;
	get maxDecimalPlaces(): number {
		return this._maxDecimalPlaces;
	}
	set maxDecimalPlaces(value: number) {
		this._maxDecimalPlaces = value;
	}
	private _minDecimalPlaces: number = 0;
	get minDecimalPlaces(): number {
		return this._minDecimalPlaces;
	}
	set minDecimalPlaces(value: number) {
		this._minDecimalPlaces = value;
	}
	protected get_type(): string {
		return "NumericCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		sb.append5("numericValue : " + this.numericValue + ", ");
		sb.append5("maxDecimalPlaces : " + this.maxDecimalPlaces + ", ");
		sb.append5("minDecimalPlaces : " + this.minDecimalPlaces + ", ");
	}
}


