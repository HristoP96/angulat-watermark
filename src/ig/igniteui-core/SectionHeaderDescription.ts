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
export class SectionHeaderDescription extends DefinitionBaseDescription {
	static $t: Type = markType(SectionHeaderDescription, 'SectionHeaderDescription', (<any>DefinitionBaseDescription).$type);
	protected get_type(): string {
		return "SectionHeader";
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
	private _isCollapsable: boolean = false;
	get isCollapsable(): boolean {
		return this._isCollapsable;
	}
	set isCollapsable(value: boolean) {
		this._isCollapsable = value;
		this.markDirty("IsCollapsable");
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


