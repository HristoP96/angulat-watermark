/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MapTileSource } from "./MapTileSource";
import { IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { Uri } from "./Uri";

/**
 * @hidden 
 */
export class TileGeneratorTileSource extends MapTileSource {
	static $t: Type = markType(TileGeneratorTileSource, 'TileGeneratorTileSource', (<any>MapTileSource).$type);
	constructor() {
		super(134217728, 134217728, 256, 256, 0);
	}
	protected getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void {
		let zoom: number = tileLevel - 8;
		if (zoom > 0) {
			let uri = "tilegen://tile/" + zoom + "/" + tilePositionX + "/" + tilePositionY + ".png";
			tileImageLayerSources.add(new Uri(0, uri));
		}
	}
	private generatorUri: string = "tilegen://tile/{Z}/{X}/{Y}.png";
}


