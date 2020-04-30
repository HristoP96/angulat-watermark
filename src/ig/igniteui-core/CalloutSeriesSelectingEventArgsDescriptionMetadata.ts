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
import { CalloutSeriesSelectingEventArgsDescription } from "./CalloutSeriesSelectingEventArgsDescription";

/**
 * @hidden 
 */
export class CalloutSeriesSelectingEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(CalloutSeriesSelectingEventArgsDescriptionMetadata, 'CalloutSeriesSelectingEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CalloutSeriesSelectingEventArgsDescriptionMetadata._metadata == null) {
			CalloutSeriesSelectingEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CalloutSeriesSelectingEventArgsDescriptionMetadata.fillMetadata(context, CalloutSeriesSelectingEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("XValueRef", "(w:XValue,j:xValue,wf:XValue)DataRef");
		metadata.item("YValueRef", "(w:YValue,j:yValue,wf:YValue)DataRef");
		metadata.item("ItemRef", "(w:Item,j:item,wf:Item)DataRef");
		metadata.item("Series", "(j:_internalSeries)ExportedType:Series");
		metadata.item("SeriesName", "String");
	}
	static register(context: TypeDescriptionContext): void {
		CalloutSeriesSelectingEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CalloutSeriesSelectingEventArgs", () => new CalloutSeriesSelectingEventArgsDescription());
		context.register("CalloutSeriesSelectingEventArgs", CalloutSeriesSelectingEventArgsDescriptionMetadata._metadata);
	}
}


