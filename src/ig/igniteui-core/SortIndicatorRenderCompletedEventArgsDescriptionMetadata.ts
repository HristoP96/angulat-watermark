/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SortIndicatorRenderCompletedEventArgsDescription } from "./SortIndicatorRenderCompletedEventArgsDescription";

/**
 * @hidden 
 */
export class SortIndicatorRenderCompletedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(SortIndicatorRenderCompletedEventArgsDescriptionMetadata, 'SortIndicatorRenderCompletedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SortIndicatorRenderCompletedEventArgsDescriptionMetadata._metadata == null) {
			SortIndicatorRenderCompletedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SortIndicatorRenderCompletedEventArgsDescriptionMetadata.fillMetadata(context, SortIndicatorRenderCompletedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
	}
	static register(context: TypeDescriptionContext): void {
		SortIndicatorRenderCompletedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SortIndicatorRenderCompletedEventArgs", () => new SortIndicatorRenderCompletedEventArgsDescription());
		context.register("SortIndicatorRenderCompletedEventArgs", SortIndicatorRenderCompletedEventArgsDescriptionMetadata._metadata);
	}
}


