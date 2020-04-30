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
export class SummaryCellModelExport extends CellModelExport {
	static $t: Type = markType(SummaryCellModelExport, 'SummaryCellModelExport', (<any>CellModelExport).$type);
	private _summaryText: string = null;
	get summaryText(): string {
		return this._summaryText;
	}
	set summaryText(value: string) {
		this._summaryText = value;
	}
	private _summaryValue: string = null;
	get summaryValue(): string {
		return this._summaryValue;
	}
	set summaryValue(value: string) {
		this._summaryValue = value;
	}
	protected get_type(): string {
		return "SummaryCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		sb.append5("summaryText : \"" + this.summaryText + "\", ");
		sb.append5("summaryValue : \"" + this.summaryValue + "\", ");
	}
}


