/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CellModelExport } from "./CellModelExport";
import { Base, enumGetBox, Type, markType } from "igniteui-core/type";
import { SummaryOperand, SummaryOperand_$type } from "igniteui-core/SummaryOperand";
import { StringBuilder } from "igniteui-core/StringBuilder";

/**
 * @hidden 
 */
export class SectionHeaderCellModelExport extends CellModelExport {
	static $t: Type = markType(SectionHeaderCellModelExport, 'SectionHeaderCellModelExport', (<any>CellModelExport).$type);
	private _groupNames: string[] = null;
	get groupNames(): string[] {
		return this._groupNames;
	}
	set groupNames(value: string[]) {
		this._groupNames = value;
	}
	private _groupValues: any[] = null;
	get groupValues(): any[] {
		return this._groupValues;
	}
	set groupValues(value: any[]) {
		this._groupValues = value;
	}
	private _groupFormattedText: string[] = null;
	get groupFormattedText(): string[] {
		return this._groupFormattedText;
	}
	set groupFormattedText(value: string[]) {
		this._groupFormattedText = value;
	}
	private _formattedText: string = null;
	get formattedText(): string {
		return this._formattedText;
	}
	set formattedText(value: string) {
		this._formattedText = value;
	}
	private _summaryNames: string[] = null;
	get summaryNames(): string[] {
		return this._summaryNames;
	}
	set summaryNames(value: string[]) {
		this._summaryNames = value;
	}
	private _summaryValues: any[] = null;
	get summaryValues(): any[] {
		return this._summaryValues;
	}
	set summaryValues(value: any[]) {
		this._summaryValues = value;
	}
	private _summaryOperands: SummaryOperand[] = null;
	get summaryOperands(): SummaryOperand[] {
		return this._summaryOperands;
	}
	set summaryOperands(value: SummaryOperand[]) {
		this._summaryOperands = value;
	}
	private _summaryFormattedText: string[] = null;
	get summaryFormattedText(): string[] {
		return this._summaryFormattedText;
	}
	set summaryFormattedText(value: string[]) {
		this._summaryFormattedText = value;
	}
	private _fullSummaryFormattedText: string = null;
	get fullSummaryFormattedText(): string {
		return this._fullSummaryFormattedText;
	}
	set fullSummaryFormattedText(value: string) {
		this._fullSummaryFormattedText = value;
	}
	protected get_type(): string {
		return "SectionHeaderCell";
	}
	protected serializeOverride(sb: StringBuilder): void {
		super.serializeOverride(sb);
		let groupNames: string = "groupNames : [ ";
		let groupValues: string = "groupValues : [ ";
		for (let i: number = 0; i < this.groupNames.length; i++) {
			groupNames += "\"" + this.groupNames[i] + "\", ";
			groupValues += "\"" + this.groupValues[i] + "\", ";
		}
		let summaryNames: string = "summaryNames : [ ";
		let summaryValues: string = "summaryValues : [ ";
		let summaryOperands: string = "summaryOperands : [ ";
		let summaryFormattedText: string = "summaryFormattedText : [ ";
		if (this.summaryNames != null) {
			for (let i1 = 0; i1 < this.summaryNames.length; i1++) {
				summaryNames += "\"" + this.summaryNames[i1] + "\", ";
				summaryValues += "\"" + this.summaryValues[i1] + "\", ";
				summaryOperands += "\"" + enumGetBox<SummaryOperand>(SummaryOperand_$type, this.summaryOperands[i1]) + "\", ";
				summaryFormattedText += "\"" + this.summaryFormattedText[i1] + "\", ";
			}
		}
		sb.append5(groupNames + " ], ");
		sb.append5(groupValues + " ], ");
		sb.append5("formattedText : \"" + this.formattedText + "\", ");
		sb.append5(summaryNames + " ], ");
		sb.append5(summaryValues + " ], ");
		sb.append5(summaryOperands + " ], ");
		sb.append5(summaryFormattedText + " ], ");
		sb.append5("fullSummaryFormattedText : \"" + this.fullSummaryFormattedText + "\", ");
	}
}


