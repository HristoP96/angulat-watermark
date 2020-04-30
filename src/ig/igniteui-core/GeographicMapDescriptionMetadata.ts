/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ImageTilesReadyEventArgsDescriptionMetadata } from "./ImageTilesReadyEventArgsDescriptionMetadata";
import { SeriesViewerDescriptionMetadata } from "./SeriesViewerDescriptionMetadata";
import { GeographicMapDescription } from "./GeographicMapDescription";

/**
 * @hidden 
 */
export class GeographicMapDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicMapDescriptionMetadata, 'GeographicMapDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicMapDescriptionMetadata._metadata == null) {
			GeographicMapDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicMapDescriptionMetadata.fillMetadata(context, GeographicMapDescriptionMetadata._metadata);
			ImageTilesReadyEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesViewerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Zoomable", "Boolean");
		metadata.item("WorldRect", "Rect");
		metadata.item("ActualWorldRect", "Rect");
		metadata.item("BackgroundContentRef", "(w:BackgroundContent,wf:BackgroundContent)DataRef::object");
		metadata.item("WindowScale", "Number:double");
		metadata.item("ActualWindowScale", "Number:double");
		metadata.item("ImageTilesReadyRef", "EventRef::imageTilesReady");
		GeographicMapDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		GeographicMapDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("GeographicMap", () => new GeographicMapDescription());
		context.register("GeographicMap", GeographicMapDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamGeogrpahicMap");
		metadata.item("Width", "(w:Width/DimensionTransform)String");
		metadata.item("Height", "(w:Height/DimensionTransform)String");
	}
}


