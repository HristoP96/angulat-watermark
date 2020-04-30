/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleDescriptionMetadata } from "./StyleDescriptionMetadata";
import { StackedSeriesCreatedEventArgsDescription } from "./StackedSeriesCreatedEventArgsDescription";

/**
 * @hidden 
 */
export class StackedSeriesCreatedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(StackedSeriesCreatedEventArgsDescriptionMetadata, 'StackedSeriesCreatedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StackedSeriesCreatedEventArgsDescriptionMetadata._metadata == null) {
			StackedSeriesCreatedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StackedSeriesCreatedEventArgsDescriptionMetadata.fillMetadata(context, StackedSeriesCreatedEventArgsDescriptionMetadata._metadata);
			StyleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Brush", "Brush");
		metadata.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
		metadata.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
		metadata.item("LegendItemVisibility", "ExportedType:string:Visibility");
		metadata.item("Outline", "Brush");
		metadata.item("Thickness", "Number:double");
		metadata.item("TitleRef", "(w:Title,wf:Title)DataRef");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("MarkerOutline", "Brush");
		metadata.item("MarkerStyle", "ExportedType:Style");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("MarkerType", "ExportedType:string:MarkerType");
	}
	static register(context: TypeDescriptionContext): void {
		StackedSeriesCreatedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("StackedSeriesCreatedEventArgs", () => new StackedSeriesCreatedEventArgsDescription());
		context.register("StackedSeriesCreatedEventArgs", StackedSeriesCreatedEventArgsDescriptionMetadata._metadata);
	}
}


