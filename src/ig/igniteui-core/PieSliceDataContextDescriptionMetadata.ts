/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DataContextDescriptionMetadata } from "./DataContextDescriptionMetadata";
import { PieSliceDataContextDescription } from "./PieSliceDataContextDescription";

/**
 * @hidden 
 */
export class PieSliceDataContextDescriptionMetadata extends Base {
	static $t: Type = markType(PieSliceDataContextDescriptionMetadata, 'PieSliceDataContextDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PieSliceDataContextDescriptionMetadata._metadata == null) {
			PieSliceDataContextDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PieSliceDataContextDescriptionMetadata.fillMetadata(context, PieSliceDataContextDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		DataContextDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("PercentValue", "Number:double");
		metadata.item("IsOthersSlice", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		PieSliceDataContextDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PieSliceDataContext", () => new PieSliceDataContextDescription());
		context.register("PieSliceDataContext", PieSliceDataContextDescriptionMetadata._metadata);
	}
}


