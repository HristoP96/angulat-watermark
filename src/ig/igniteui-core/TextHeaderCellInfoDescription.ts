/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TextCellInfoDescription } from "./TextCellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TextHeaderCellInfoDescription extends TextCellInfoDescription {
	static $t: Type = markType(TextHeaderCellInfoDescription, 'TextHeaderCellInfoDescription', (<any>TextCellInfoDescription).$type);
	protected get_type(): string {
		return "TextHeaderCellInfo";
	}
	constructor() {
		super();
	}
	private _isFilterUIVisible: boolean = false;
	get isFilterUIVisible(): boolean {
		return this._isFilterUIVisible;
	}
	set isFilterUIVisible(value: boolean) {
		this._isFilterUIVisible = value;
		this.markDirty("IsFilterUIVisible");
	}
	private _sortIndicatorStyle: string = null;
	get sortIndicatorStyle(): string {
		return this._sortIndicatorStyle;
	}
	set sortIndicatorStyle(value: string) {
		this._sortIndicatorStyle = value;
		this.markDirty("SortIndicatorStyle");
	}
}


