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
export class ImageCellInfoDescription extends CellInfoDescription {
	static $t: Type = markType(ImageCellInfoDescription, 'ImageCellInfoDescription', (<any>CellInfoDescription).$type);
	protected get_type(): string {
		return "ImageCellInfo";
	}
	constructor() {
		super();
	}
	private _imagePath: string = null;
	get imagePath(): string {
		return this._imagePath;
	}
	set imagePath(value: string) {
		this._imagePath = value;
		this.markDirty("ImagePath");
	}
	private _imageStretchOption: string = null;
	get imageStretchOption(): string {
		return this._imageStretchOption;
	}
	set imageStretchOption(value: string) {
		this._imageStretchOption = value;
		this.markDirty("ImageStretchOption");
	}
	private _imageResourceType: string = null;
	get imageResourceType(): string {
		return this._imageResourceType;
	}
	set imageResourceType(value: string) {
		this._imageResourceType = value;
		this.markDirty("ImageResourceType");
	}
}


