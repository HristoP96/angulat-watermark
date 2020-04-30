/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class SummaryRowDescription extends DefinitionBaseDescription {
	static $t: Type = markType(SummaryRowDescription, 'SummaryRowDescription', (<any>DefinitionBaseDescription).$type);
	protected get_type(): string {
		return "SummaryRow";
	}
	constructor() {
		super();
	}
	private _selectedBackground: string = null;
	get selectedBackground(): string {
		return this._selectedBackground;
	}
	set selectedBackground(value: string) {
		this._selectedBackground = value;
		this.markDirty("SelectedBackground");
	}
	private _actualSelectedBackground: string = null;
	get actualSelectedBackground(): string {
		return this._actualSelectedBackground;
	}
	set actualSelectedBackground(value: string) {
		this._actualSelectedBackground = value;
		this.markDirty("ActualSelectedBackground");
	}
	private _summaryNameTextColor: string = null;
	get summaryNameTextColor(): string {
		return this._summaryNameTextColor;
	}
	set summaryNameTextColor(value: string) {
		this._summaryNameTextColor = value;
		this.markDirty("SummaryNameTextColor");
	}
	private _actualSummaryNameTextColor: string = null;
	get actualSummaryNameTextColor(): string {
		return this._actualSummaryNameTextColor;
	}
	set actualSummaryNameTextColor(value: string) {
		this._actualSummaryNameTextColor = value;
		this.markDirty("ActualSummaryNameTextColor");
	}
	private _paddingLeft: number = 0;
	get paddingLeft(): number {
		return this._paddingLeft;
	}
	set paddingLeft(value: number) {
		this._paddingLeft = value;
		this.markDirty("PaddingLeft");
	}
	private _paddingTop: number = 0;
	get paddingTop(): number {
		return this._paddingTop;
	}
	set paddingTop(value: number) {
		this._paddingTop = value;
		this.markDirty("PaddingTop");
	}
	private _paddingRight: number = 0;
	get paddingRight(): number {
		return this._paddingRight;
	}
	set paddingRight(value: number) {
		this._paddingRight = value;
		this.markDirty("PaddingRight");
	}
	private _paddingBottom: number = 0;
	get paddingBottom(): number {
		return this._paddingBottom;
	}
	set paddingBottom(value: number) {
		this._paddingBottom = value;
		this.markDirty("PaddingBottom");
	}
}


