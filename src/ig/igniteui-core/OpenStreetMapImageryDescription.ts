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
export class OpenStreetMapImageryDescription extends GeographicMapImageryDescription {
	static $t: Type = markType(OpenStreetMapImageryDescription, 'OpenStreetMapImageryDescription', (<any>GeographicMapImageryDescription).$type);
	protected get_type(): string {
		return "OpenStreetMapImagery";
	}
	constructor() {
		super();
	}
	private _tilePath: string = null;
	get tilePath(): string {
		return this._tilePath;
	}
	set tilePath(value: string) {
		this._tilePath = value;
		this.markDirty("TilePath");
	}
}


