/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
import { BrushScaleDescription } from "./BrushScaleDescription";

/**
 * @hidden 
 */
export class BrushScaleDescriptionMetadata extends Base {
	static $t: Type = markType(BrushScaleDescriptionMetadata, 'BrushScaleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (BrushScaleDescriptionMetadata._metadata == null) {
			BrushScaleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			BrushScaleDescriptionMetadata.fillMetadata(context, BrushScaleDescriptionMetadata._metadata);
			PropertyUpdatedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Brushes", "BrushCollection:string");
		metadata.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
	}
	static register(context: TypeDescriptionContext): void {
		BrushScaleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("BrushScale", () => new BrushScaleDescription());
		context.register("BrushScale", BrushScaleDescriptionMetadata._metadata);
	}
}


