/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescription } from "./ColumnSupportingCalculationDescription";

/**
 * @hidden 
 */
export class ColumnSupportingCalculationDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnSupportingCalculationDescriptionMetadata, 'ColumnSupportingCalculationDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnSupportingCalculationDescriptionMetadata._metadata == null) {
			ColumnSupportingCalculationDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnSupportingCalculationDescriptionMetadata.fillMetadata(context, ColumnSupportingCalculationDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
	}
	static register(context: TypeDescriptionContext): void {
		ColumnSupportingCalculationDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnSupportingCalculation", () => new ColumnSupportingCalculationDescription());
		context.register("ColumnSupportingCalculation", ColumnSupportingCalculationDescriptionMetadata._metadata);
	}
}


