/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { GeographicMapImageryDescription } from "./GeographicMapImageryDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TileSeriesDescription extends ShapeSeriesBaseDescription {
	static $t: Type = markType(TileSeriesDescription, 'TileSeriesDescription', (<any>ShapeSeriesBaseDescription).$type);
	protected get_type(): string {
		return "TileSeries";
	}
	constructor() {
		super();
	}
	private _tileImagery: GeographicMapImageryDescription = null;
	get tileImagery(): GeographicMapImageryDescription {
		return this._tileImagery;
	}
	set tileImagery(value: GeographicMapImageryDescription) {
		this._tileImagery = value;
		this.markDirty("TileImagery");
	}
}


