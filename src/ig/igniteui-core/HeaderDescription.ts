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
export abstract class HeaderDescription extends DefinitionBaseDescription {
	static $t: Type = markType(HeaderDescription, 'HeaderDescription', (<any>DefinitionBaseDescription).$type);
	protected get_type(): string {
		return "Header";
	}
	constructor() {
		super();
	}
	private _sortIndicatorColor: string = null;
	get sortIndicatorColor(): string {
		return this._sortIndicatorColor;
	}
	set sortIndicatorColor(value: string) {
		this._sortIndicatorColor = value;
		this.markDirty("SortIndicatorColor");
	}
	private _actualSortIndicatorColor: string = null;
	get actualSortIndicatorColor(): string {
		return this._actualSortIndicatorColor;
	}
	set actualSortIndicatorColor(value: string) {
		this._actualSortIndicatorColor = value;
		this.markDirty("ActualSortIndicatorColor");
	}
	private _sortIndicatorStyle: string = null;
	get sortIndicatorStyle(): string {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: string) {
		this._sortIndicatorStyle = value;
		this.markDirty("SortIndicatorStyle");
	}
	private _actualSortIndicatorStyle: string = null;
	get actualSortIndicatorStyle(): string {
		return this._actualSortIndicatorStyle;
	}
	set actualSortIndicatorStyle(value: string) {
		this._actualSortIndicatorStyle = value;
		this.markDirty("ActualSortIndicatorStyle");
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


