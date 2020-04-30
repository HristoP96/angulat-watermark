/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Rect } from "./Rect";
import { Uri } from "./Uri";
import { Image } from "./Image";

/**
 * @hidden 
 */
export class Tile extends Base {
	static $t: Type = markType(Tile, 'Tile');
	x: number = 0;
	y: number = 0;
	z: number = 0;
	image: Image = null;
	ghostImage: Image = null;
	fadeStart: Date = new Date();
	get rect(): Rect {
		let width: number = Math.pow(2, -this.z);
		let height: number = Math.pow(2, -this.z);
		return new Rect(0, this.x * width, this.y * height, width, height);
	}
	private _isAlternateDownload: boolean = false;
	get isAlternateDownload(): boolean {
		return this._isAlternateDownload;
	}
	set isAlternateDownload(value: boolean) {
		this._isAlternateDownload = value;
	}
	private _alternateDownloadUri: Uri = null;
	get alternateDownloadUri(): Uri {
		return this._alternateDownloadUri;
	}
	set alternateDownloadUri(value: Uri) {
		this._alternateDownloadUri = value;
	}
}


