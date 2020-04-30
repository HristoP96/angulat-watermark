/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImageryDescription } from "./GeographicMapImageryDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CustomMapImageryDescription extends GeographicMapImageryDescription {
	static $t: Type = markType(CustomMapImageryDescription, 'CustomMapImageryDescription', (<any>GeographicMapImageryDescription).$type);
	protected get_type(): string {
		return "CustomMapImagery";
	}
	constructor() {
		super();
	}
	private _getTileImageUri: string = null;
	get getTileImageUriRef(): string {
		return this._getTileImageUri;
	}
	set getTileImageUriRef(value: string) {
		this._getTileImageUri = value;
		this.markDirty("GetTileImageUriRef");
	}
}


