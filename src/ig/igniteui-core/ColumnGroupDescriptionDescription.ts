/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ColumnGroupDescriptionDescription extends ColumnSortDescriptionDescription {
	static $t: Type = markType(ColumnGroupDescriptionDescription, 'ColumnGroupDescriptionDescription', (<any>ColumnSortDescriptionDescription).$type);
	protected get_type(): string {
		return "ColumnGroupDescription";
	}
	constructor() {
		super();
	}
	private _formatOverrideRef: string = null;
	get formatOverrideRef(): string {
		return this._formatOverrideRef;
	}
	set formatOverrideRef(value: string) {
		this._formatOverrideRef = value;
		this.markDirty("FormatOverrideRef");
	}
	private _displayName: string = null;
	get displayName(): string {
		return this._displayName;
	}
	set displayName(value: string) {
		this._displayName = value;
		this.markDirty("DisplayName");
	}
	private _formatText: string = null;
	get formatTextRef(): string {
		return this._formatText;
	}
	set formatTextRef(value: string) {
		this._formatText = value;
		this.markDirty("FormatTextRef");
	}
}


