/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleShapeEventArgsDescriptionMetadata } from "./StyleShapeEventArgsDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";

/**
 * @hidden 
 */
export class ShapeSeriesBaseDescriptionMetadata extends Base {
	static $t: Type = markType(ShapeSeriesBaseDescriptionMetadata, 'ShapeSeriesBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ShapeSeriesBaseDescriptionMetadata._metadata == null) {
			ShapeSeriesBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ShapeSeriesBaseDescriptionMetadata.fillMetadata(context, ShapeSeriesBaseDescriptionMetadata._metadata);
			StyleShapeEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ShapeMemberPath", "String");
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
		metadata.item("ShapeFilterResolution", "Number:double");
		metadata.item("StyleShapeRef", "EventRef::styleShape");
	}
	static register(context: TypeDescriptionContext): void {
		ShapeSeriesBaseDescriptionMetadata.ensureMetadata(context);
		context.register("ShapeSeriesBase", ShapeSeriesBaseDescriptionMetadata._metadata);
	}
}


