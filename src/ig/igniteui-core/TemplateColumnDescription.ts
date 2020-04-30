/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnDescription } from "./ColumnDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TemplateColumnDescription extends ColumnDescription {
	static $t: Type = markType(TemplateColumnDescription, 'TemplateColumnDescription', (<any>ColumnDescription).$type);
	protected get_type(): string {
		return "TemplateColumn";
	}
	constructor() {
		super();
	}
	private _cellUpdating: string = null;
	get cellUpdatingRef(): string {
		return this._cellUpdating;
	}
	set cellUpdatingRef(value: string) {
		this._cellUpdating = value;
		this.markDirty("CellUpdatingRef");
	}
}


