/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class ImageryMetadata extends Base {
	static $t: Type = markType(ImageryMetadata, 'ImageryMetadata');
	constructor() {
		super();
		this.imageUrlSubdomains = new List$1<string>(String_$type, 0);
	}
	private _imageUrl: string = null;
	get imageUrl(): string {
		return this._imageUrl;
	}
	set imageUrl(value: string) {
		this._imageUrl = value;
	}
	private _imageUrlSubdomains: List$1<string> = null;
	get imageUrlSubdomains(): List$1<string> {
		return this._imageUrlSubdomains;
	}
	set imageUrlSubdomains(value: List$1<string>) {
		this._imageUrlSubdomains = value;
	}
}


