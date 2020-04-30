/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSeriesBaseDescriptionMetadata } from "./StackedSeriesBaseDescriptionMetadata";

/**
 * @hidden 
 */
export class VerticalStackedSeriesBaseDescriptionMetadata extends Base {
	static $t: Type = markType(VerticalStackedSeriesBaseDescriptionMetadata, 'VerticalStackedSeriesBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (VerticalStackedSeriesBaseDescriptionMetadata._metadata == null) {
			VerticalStackedSeriesBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			VerticalStackedSeriesBaseDescriptionMetadata.fillMetadata(context, VerticalStackedSeriesBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		StackedSeriesBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
		metadata.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
	}
	static register(context: TypeDescriptionContext): void {
		VerticalStackedSeriesBaseDescriptionMetadata.ensureMetadata(context);
		context.register("VerticalStackedSeriesBase", VerticalStackedSeriesBaseDescriptionMetadata._metadata);
	}
}


