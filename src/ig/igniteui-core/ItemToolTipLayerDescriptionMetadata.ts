/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { ItemToolTipLayerDescription } from "./ItemToolTipLayerDescription";

/**
 * @hidden 
 */
export class ItemToolTipLayerDescriptionMetadata extends Base {
	static $t: Type = markType(ItemToolTipLayerDescriptionMetadata, 'ItemToolTipLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ItemToolTipLayerDescriptionMetadata._metadata == null) {
			ItemToolTipLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ItemToolTipLayerDescriptionMetadata.fillMetadata(context, ItemToolTipLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
		metadata.item("UseInterpolation", "Boolean");
		metadata.item("SkipUnknownValues", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		ItemToolTipLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ItemToolTipLayer", () => new ItemToolTipLayerDescription());
		context.register("ItemToolTipLayer", ItemToolTipLayerDescriptionMetadata._metadata);
	}
}


