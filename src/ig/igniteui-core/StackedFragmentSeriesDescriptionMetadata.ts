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
import { StackedFragmentSeriesDescription } from "./StackedFragmentSeriesDescription";

/**
 * @hidden 
 */
export class StackedFragmentSeriesDescriptionMetadata extends Base {
	static $t: Type = markType(StackedFragmentSeriesDescriptionMetadata, 'StackedFragmentSeriesDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StackedFragmentSeriesDescriptionMetadata._metadata == null) {
			StackedFragmentSeriesDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StackedFragmentSeriesDescriptionMetadata.fillMetadata(context, StackedFragmentSeriesDescriptionMetadata._metadata);
			PropertyUpdatedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Brush", "Brush");
		metadata.item("ActualBrush", "Brush");
		metadata.item("IsDropShadowEnabled", "Boolean");
		metadata.item("ActualIsDropShadowEnabled", "Boolean");
		metadata.item("ShadowBlur", "Number:double");
		metadata.item("ActualShadowBlur", "Number:double");
		metadata.item("ShadowColor", "Color");
		metadata.item("ActualShadowColor", "Color");
		metadata.item("UseSingleShadow", "Boolean");
		metadata.item("ActualUseSingleShadow", "Boolean");
		metadata.item("ShadowOffsetX", "Number:double");
		metadata.item("ActualShadowOffsetX", "Number:double");
		metadata.item("ShadowOffsetY", "Number:double");
		metadata.item("ActualShadowOffsetY", "Number:double");
		metadata.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
		metadata.item("ActualLegendItemBadgeTemplateRef", "(w:ActualLegendItemBadgeTemplate,wf:ActualLegendItemBadgeTemplate)DataRef::object");
		metadata.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
		metadata.item("ActualLegendItemTemplateRef", "(w:ActualLegendItemTemplate,wf:ActualLegendItemTemplate)DataRef::object");
		metadata.item("LegendItemVisibility", "ExportedType:string:Visibility");
		metadata.item("ActualLegendItemVisibility", "ExportedType:string:Visibility");
		metadata.item("MarkerBrush", "Brush");
		metadata.item("ActualMarkerBrush", "Brush");
		metadata.item("MarkerOutline", "Brush");
		metadata.item("ActualMarkerOutline", "Brush");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("ActualMarkerTemplateRef", "(w:ActualMarkerTemplate,wf:ActualMarkerTemplate)DataRef::object");
		metadata.item("MarkerType", "ExportedType:string:MarkerType");
		metadata.item("ActualMarkerType", "ExportedType:string:MarkerType");
		metadata.item("Name", "String");
		metadata.item("Opacity", "Number:double");
		metadata.item("ActualOpacity", "Number:double");
		metadata.item("Outline", "Brush");
		metadata.item("ActualOutline", "Brush");
		metadata.item("AreaFillOpacity", "Number:double");
		metadata.item("ActualAreaFillOpacity", "Number:double");
		metadata.item("RadiusX", "Number:double");
		metadata.item("ActualRadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
		metadata.item("ActualRadiusY", "Number:double");
		metadata.item("Thickness", "Number:double");
		metadata.item("ActualThickness", "Number:double");
		metadata.item("TitleRef", "(w:Title,wf:Title)DataRef");
		metadata.item("ValueMemberPath", "String");
		metadata.item("Visibility", "ExportedType:string:Visibility");
		metadata.item("ActualVisibility", "ExportedType:string:Visibility");
		metadata.item("ParentOrLocalBrush", "Brush");
		metadata.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
	}
	static register(context: TypeDescriptionContext): void {
		StackedFragmentSeriesDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("StackedFragmentSeries", () => new StackedFragmentSeriesDescription());
		context.register("StackedFragmentSeries", StackedFragmentSeriesDescriptionMetadata._metadata);
	}
}


