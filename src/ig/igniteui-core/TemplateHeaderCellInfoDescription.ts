/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TemplateHeaderCellInfoDescription extends TemplateCellInfoDescription {
	static $t: Type = markType(TemplateHeaderCellInfoDescription, 'TemplateHeaderCellInfoDescription', (<any>TemplateCellInfoDescription).$type);
	protected get_type(): string {
		return "TemplateHeaderCellInfo";
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
}


