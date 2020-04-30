/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { VerticalSeparatorCellInfoDescription } from "./VerticalSeparatorCellInfoDescription";

/**
 * @hidden 
 */
export class VerticalSeparatorCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(VerticalSeparatorCellInfoDescriptionMetadata, 'VerticalSeparatorCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (VerticalSeparatorCellInfoDescriptionMetadata._metadata == null) {
			VerticalSeparatorCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			VerticalSeparatorCellInfoDescriptionMetadata.fillMetadata(context, VerticalSeparatorCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("IsHitTestVisible", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		VerticalSeparatorCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("VerticalSeparatorCellInfo", () => new VerticalSeparatorCellInfoDescription());
		context.register("VerticalSeparatorCellInfo", VerticalSeparatorCellInfoDescriptionMetadata._metadata);
	}
}


