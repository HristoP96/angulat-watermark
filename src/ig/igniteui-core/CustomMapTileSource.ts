/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MapTileSource } from "./MapTileSource";
import { IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { GetTileImageUriArgs } from "./GetTileImageUriArgs";
import { Uri } from "./Uri";

/**
 * @hidden 
 */
export class CustomMapTileSource extends MapTileSource {
	static $t: Type = markType(CustomMapTileSource, 'CustomMapTileSource', (<any>MapTileSource).$type);
	constructor(imageWidth: number, imageHeight: number, tileWidth: number, tileHeight: number, tileOverlap: number) {
		super(imageWidth, imageHeight, tileWidth, tileHeight, tileOverlap);
	}
	protected getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void {
		let getTileImageUriArgs = new GetTileImageUriArgs(tileLevel, tilePositionX, tilePositionY);
		this.onGetTileImageUri(getTileImageUriArgs);
		if (getTileImageUriArgs.tileImageUri != null) {
			let uri = new Uri(0, getTileImageUriArgs.tileImageUri);
			tileImageLayerSources.add(uri);
		}
	}
	protected onGetTileImageUri(e: GetTileImageUriArgs): void {
		if (this.getTileImageUri != null) {
			this.getTileImageUri(this, e);
		}
	}
	getTileImageUri: (sender: any, e: GetTileImageUriArgs) => void = null;
}


