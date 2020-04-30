/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DataContextDescription } from "./DataContextDescription";

/**
 * @hidden 
 */
export class DataContextDescriptionMetadata extends Base {
	static $t: Type = markType(DataContextDescriptionMetadata, 'DataContextDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DataContextDescriptionMetadata._metadata == null) {
			DataContextDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DataContextDescriptionMetadata.fillMetadata(context, DataContextDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("ActualItemBrush", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("ItemLabelRef", "(w:ItemLabel,wf:ItemLabel)DataRef");
		metadata.item("ItemBrush", "Brush");
		metadata.item("Thickness", "Number:double");
		metadata.item("LegendLabelRef", "(w:LegendLabel,wf:LegendLabel)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		DataContextDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DataContext", () => new DataContextDescription());
		context.register("DataContext", DataContextDescriptionMetadata._metadata);
	}
}


