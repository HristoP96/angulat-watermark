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
export class ImageColumnDescription extends ColumnDescription {
	static $t: Type = markType(ImageColumnDescription, 'ImageColumnDescription', (<any>ColumnDescription).$type);
	protected get_type(): string {
		return "ImageColumn";
	}
	constructor() {
		super();
	}
	private _imageStretchOption: string = null;
	get imageStretchOption(): string {
		return this._imageStretchOption;
	}
	set imageStretchOption(value: string) {
		this._imageStretchOption = value;
		this.markDirty("ImageStretchOption");
	}
}


