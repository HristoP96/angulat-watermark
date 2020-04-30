/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MapTileSource } from "./MapTileSource";
import { IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Type, markType } from "./type";
import { Uri } from "./Uri";
import { stringReplace, stringIsNullOrEmpty, stringStartsWith } from "./string";

/**
 * @hidden 
 */
export class OpenStreetMapTileSource extends MapTileSource {
	static $t: Type = markType(OpenStreetMapTileSource, 'OpenStreetMapTileSource', (<any>MapTileSource).$type);
	private tilePathMapnik: string = "tile.openstreetmap.org/{Z}/{X}/{Y}.png";
	constructor() {
		super(134217728, 134217728, 256, 256, 0);
		this.setTilePathUrl(this.tilePathMapnik);
	}
	protected getTileLayers(tileLevel: number, tilePositionX: number, tilePositionY: number, tileImageLayerSources: IList$1<any>): void {
		let zoom: number = tileLevel - 8;
		if (zoom > 0) {
			let uriString: string = this.tilePathMapnik;
			uriString = stringReplace(uriString, "{Z}", zoom.toString());
			uriString = stringReplace(uriString, "{X}", tilePositionX.toString());
			uriString = stringReplace(uriString, "{Y}", tilePositionY.toString());
			tileImageLayerSources.add(new Uri(0, uriString));
		}
	}
	setTilePathUrl(url: string): void {
		if (!stringIsNullOrEmpty(url)) {
			if (stringStartsWith(url, "http://") || stringStartsWith(url, "https://")) {
				this.tilePathMapnik = url;
			} else {
				let s = "http://";
				s = <string>(('https:'==document.location.protocol?'https://':'http://'));
				this.tilePathMapnik = s + url;
			}
		}
	}
}


