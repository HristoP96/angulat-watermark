/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { XamMultiScaleTileSource } from "./XamMultiScaleTileSource";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export abstract class MapTileSource extends XamMultiScaleTileSource {
	static $t: Type = markType(MapTileSource, 'MapTileSource', (<any>XamMultiScaleTileSource).$type);
	constructor(imageWidth: number, imageHeight: number, tileWidth: number, tileHeight: number, tileOverlap: number) {
		super(imageWidth, imageHeight, tileWidth, tileHeight, tileOverlap);
	}
}


