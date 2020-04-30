/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellInfoDescription } from "./CellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SectionHeaderCellInfoDescription extends CellInfoDescription {
	static $t: Type = markType(SectionHeaderCellInfoDescription, 'SectionHeaderCellInfoDescription', (<any>CellInfoDescription).$type);
	protected get_type(): string {
		return "SectionHeaderCellInfo";
	}
	constructor() {
		super();
	}
	private _resolvedText: string = null;
	get resolvedText(): string {
		return this._resolvedText;
	}
	set resolvedText(value: string) {
		this._resolvedText = value;
		this.markDirty("ResolvedText");
	}
	private _resolvedSummaryText: string = null;
	get resolvedSummaryText(): string {
		return this._resolvedSummaryText;
	}
	set resolvedSummaryText(value: string) {
		this._resolvedSummaryText = value;
		this.markDirty("ResolvedSummaryText");
	}
	private _summaryDisplayMode: string = null;
	get summaryDisplayMode(): string {
		return this._summaryDisplayMode;
	}
	set summaryDisplayMode(value: string) {
		this._summaryDisplayMode = value;
		this.markDirty("SummaryDisplayMode");
	}
}


