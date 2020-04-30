/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { GeographicMapImageryDescription } from "./GeographicMapImageryDescription";
import { TileGeneratorDescription } from "./TileGeneratorDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TileGeneratorMapImageryDescription extends GeographicMapImageryDescription {
	static $t: Type = markType(TileGeneratorMapImageryDescription, 'TileGeneratorMapImageryDescription', (<any>GeographicMapImageryDescription).$type);
	protected get_type(): string {
		return "TileGeneratorMapImagery";
	}
	constructor() {
		super();
	}
	private _tileGenerator: TileGeneratorDescription = null;
	get tileGenerator(): TileGeneratorDescription {
		return this._tileGenerator;
	}
	set tileGenerator(value: TileGeneratorDescription) {
		this._tileGenerator = value;
		this.markDirty("TileGenerator");
	}
}


