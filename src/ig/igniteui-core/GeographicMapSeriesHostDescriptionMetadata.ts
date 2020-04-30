/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class GeographicMapSeriesHostDescriptionMetadata extends Base {
	static $t: Type = markType(GeographicMapSeriesHostDescriptionMetadata, 'GeographicMapSeriesHostDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (GeographicMapSeriesHostDescriptionMetadata._metadata == null) {
			GeographicMapSeriesHostDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			GeographicMapSeriesHostDescriptionMetadata.fillMetadata(context, GeographicMapSeriesHostDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("VisibleFromScale", "Number:double");
		metadata.item("CoercionMethodsRef", "(w:CoercionMethods,wf:CoercionMethods)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		GeographicMapSeriesHostDescriptionMetadata.ensureMetadata(context);
		context.register("GeographicMapSeriesHost", GeographicMapSeriesHostDescriptionMetadata._metadata);
	}
}


