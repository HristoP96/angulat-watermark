/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { ColumnSeriesDescription } from "./ColumnSeriesDescription";

/**
 * @hidden 
 */
export class ColumnSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnSeriesDescriptionMetadata, 'ColumnSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnSeriesDescriptionMetadata._metadata == null) {
			ColumnSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnSeriesDescriptionMetadata.fillMetadata(context, ColumnSeriesDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		HorizontalAnchoredCategorySeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
		metadata.item("ConsolidatedColumnVerticalPosition", "ExportedType:string:ConsolidatedItemsPosition");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnSeries", () => new ColumnSeriesDescription());
		context.register("ColumnSeries", ColumnSeriesDescriptionMetadata._metadata);
	}
}


