/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { GeographicMapDescriptionMetadata } from "./GeographicMapDescriptionMetadata";
import { ImageTilesReadyEventArgsDescriptionMetadata } from "./ImageTilesReadyEventArgsDescriptionMetadata";
import { ImagesChangedEventArgsDescriptionMetadata } from "./ImagesChangedEventArgsDescriptionMetadata";
import { CancellingMultiScaleImageEventArgsDescriptionMetadata } from "./CancellingMultiScaleImageEventArgsDescriptionMetadata";
import { DownloadingMultiScaleImageEventArgsDescriptionMetadata } from "./DownloadingMultiScaleImageEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicMapImageryDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicMapImageryDescriptionMetadata, 'GeographicMapImageryDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicMapImageryDescriptionMetadata._metadata == null) {
			GeographicMapImageryDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicMapImageryDescriptionMetadata.fillMetadata(context, GeographicMapImageryDescriptionMetadata._metadata);
			GeographicMapDescriptionMetadata.register(context);
			ImageTilesReadyEventArgsDescriptionMetadata.register(context);
			ImagesChangedEventArgsDescriptionMetadata.register(context);
			CancellingMultiScaleImageEventArgsDescriptionMetadata.register(context);
			DownloadingMultiScaleImageEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("WindowRect", "Rect");
		metadata.item("GeographicMap", "ExportedType:XamGeographicMap");
		metadata.item("Referer", "String");
		metadata.item("UserAgent", "String");
		metadata.item("ImageTilesReadyRef", "EventRef::imageTilesReady");
		metadata.item("ImagesChangedRef", "EventRef::imagesChanged");
		metadata.item("CancellingImageRef", "EventRef::cancellingImage");
		metadata.item("DownloadingImageRef", "EventRef::downloadingImage");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicMapImageryDescriptionMetadata.ensureMetadata(context);
		context.register("GeographicMapImagery", GeographicMapImageryDescriptionMetadata._metadata);
	}
}


