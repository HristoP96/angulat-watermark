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
export class TextCellModelExport extends CellModelExport {
	static $t: Type = markType(TextCellModelExport, 'TextCellModelExport', (<any>CellModelExport).$type);
	private _textValue: string = null;
	get textValue(): string {
		return this._textValue;
	}
	set textValue(value: string) {
		this._textValue = value;
	}
	private _formatString: string = null;
	get formatString(): string {
		return this._formatString;
	}
	set formatString(value: string) {
		this._formatString = value;
	}
	protected get_type(): string {
		return "TextCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		sb.append5("textValue : \"" + this.textValue + "\", ");
		sb.append5("formatString : \"" + this.formatString + "\", ");
	}
}


