/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FragmentBaseDescriptionMetadata } from "./FragmentBaseDescriptionMetadata";
import { ColumnFragmentDescription } from "./ColumnFragmentDescription";

/**
 * @hidden 
 */
export class ColumnFragmentDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnFragmentDescriptionMetadata, 'ColumnFragmentDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnFragmentDescriptionMetadata._metadata == null) {
			ColumnFragmentDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnFragmentDescriptionMetadata.fillMetadata(context, ColumnFragmentDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FragmentBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnFragmentDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnFragment", () => new ColumnFragmentDescription());
		context.register("ColumnFragment", ColumnFragmentDescriptionMetadata._metadata);
	}
}


