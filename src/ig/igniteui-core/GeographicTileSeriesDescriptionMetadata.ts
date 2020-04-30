/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GeographicMapImageryDescriptionMetadata } from "./GeographicMapImageryDescriptionMetadata";
import { ImageTilesReadyEventArgsDescriptionMetadata } from "./ImageTilesReadyEventArgsDescriptionMetadata";
import { GeographicShapeSeriesBaseDescriptionMetadata } from "./GeographicShapeSeriesBaseDescriptionMetadata";
import { GeographicTileSeriesDescription } from "./GeographicTileSeriesDescription";

/**
 * @hidden 
 */
export class GeographicTileSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicTileSeriesDescriptionMetadata, 'GeographicTileSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicTileSeriesDescriptionMetadata._metadata == null) {
			GeographicTileSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicTileSeriesDescriptionMetadata.fillMetadata(context, GeographicTileSeriesDescriptionMetadata._metadata);
			GeographicMapImageryDescriptionMetadata.register(context);
			ImageTilesReadyEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		GeographicShapeSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TileImagery", "ExportedType:GeographicMapImagery");
		metadata.item("ImageTilesReadyRef", "EventRef::imageTilesReady");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicTileSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicTileSeries", () => new GeographicTileSeriesDescription());
		context.register("GeographicTileSeries", GeographicTileSeriesDescriptionMetadata._metadata);
	}
}


