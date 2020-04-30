/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { LabelClickEventArgsDescriptionMetadata } from "./LabelClickEventArgsDescriptionMetadata";
import { SelectedItemChangingEventArgsDescriptionMetadata } from "./SelectedItemChangingEventArgsDescriptionMetadata";
import { SelectedItemsChangingEventArgsDescriptionMetadata } from "./SelectedItemsChangingEventArgsDescriptionMetadata";
import { SelectedItemChangedEventArgsDescriptionMetadata } from "./SelectedItemChangedEventArgsDescriptionMetadata";
import { SelectedItemsChangedEventArgsDescriptionMetadata } from "./SelectedItemsChangedEventArgsDescriptionMetadata";
import { SliceClickEventArgsDescriptionMetadata } from "./SliceClickEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class PieChartBaseDescriptionMetadata extends Base {
	static $t: Type = markType(PieChartBaseDescriptionMetadata, 'PieChartBaseDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PieChartBaseDescriptionMetadata._metadata == null) {
			PieChartBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PieChartBaseDescriptionMetadata.fillMetadata(context, PieChartBaseDescriptionMetadata._metadata);
			LabelClickEventArgsDescriptionMetadata.register(context);
			SelectedItemChangingEventArgsDescriptionMetadata.register(context);
			SelectedItemsChangingEventArgsDescriptionMetadata.register(context);
			SelectedItemChangedEventArgsDescriptionMetadata.register(context);
			SelectedItemsChangedEventArgsDescriptionMetadata.register(context);
			SliceClickEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DataSourceRef", "(w:ItemsSource,wf:ItemsSource)DataRef::object");
		metadata.item("InnerExtent", "Number:double");
		metadata.item("ValueMemberPath", "String");
		metadata.item("LabelMemberPath", "String");
		metadata.item("LegendLabelMemberPath", "String");
		metadata.item("LabelsPosition", "ExportedType:string:LabelsPosition");
		metadata.item("LabelOuterColor", "Brush");
		metadata.item("LabelInnerColor", "Brush");
		metadata.item("LeaderLineVisibility", "ExportedType:string:Visibility");
		metadata.item("LeaderLineType", "ExportedType:string:LeaderLineType");
		metadata.item("LeaderLineMargin", "Number:double");
		metadata.item("OthersCategoryThreshold", "Number:double");
		metadata.item("OthersCategoryType", "ExportedType:string:OthersCategoryType");
		metadata.item("OthersCategoryText", "String");
		metadata.item("ExplodedRadius", "Number:double");
		metadata.item("RadiusFactor", "Number:double");
		metadata.item("AllowSliceSelection", "Boolean");
		metadata.item("AllowSliceExplosion", "Boolean");
		metadata.item("ExplodedSlices", "Collection:int:IndexCollection:Int32");
		metadata.item("LabelExtent", "Number:double");
		metadata.item("StartAngle", "Number:double");
		metadata.item("SweepDirection", "ExportedType:string:SweepDirection");
		metadata.item("OthersCategoryFill", "(w:OthersCategoryStyle.Fill,wf:OthersCategoryFill)String");
		metadata.item("OthersCategoryStroke", "(w:OthersCategoryStyle.Stroke,wf:OthersCategoryStroke)String");
		metadata.item("OthersCategoryStrokeThickness", "(w:OthersCategoryStyle.StrokeThickness,wf:OthersCategoryStrokeThickness)Number:double");
		metadata.item("OthersCategoryOpacity", "(w:OthersCategoryStyle.Opacity,wf:OthersCategoryOpacity)Number:double");
		metadata.item("SelectedSliceFill", "(w:SelectedStyle.Fill,wf:SelectedSliceFill)String");
		metadata.item("SelectedSliceStroke", "(w:SelectedStyle.Stroke,wf:SelectedSliceStroke)String");
		metadata.item("SelectedSliceStrokeThickness", "(w:SelectedStyle.StrokeThickness,wf:SelectedSliceStrokeThickness)Number:double");
		metadata.item("SelectedSliceOpacity", "(w:SelectedStyle.Opacity,wf:SelectedSliceOpacity)Number:double");
		metadata.item("Brushes", "BrushCollection:string");
		metadata.item("Outlines", "BrushCollection:string");
		metadata.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
		metadata.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
		metadata.item("IsSurfaceInteractionDisabled", "Boolean");
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("FormatLegendLabelRef", "(w:FormatLegendLabel,wf:FormatLegendLabel)MethodRef");
		metadata.item("PixelScalingRatio", "Number:double");
		metadata.item("ActualPixelScalingRatio", "Number:double");
		metadata.item("SelectionMode", "ExportedType:string:SliceSelectionMode");
		metadata.item("SelectedItemRef", "(w:SelectedItem,wf:SelectedItem)DataRef");
		metadata.item("SelectedItems", "Collection:Object:ObjectCollection:Object");
		metadata.item("TextStyle", "String");
		metadata.item("LabelClickRef", "EventRef::labelClick");
		metadata.item("SelectedItemChangingRef", "EventRef::selectedItemChanging");
		metadata.item("SelectedItemsChangingRef", "EventRef::selectedItemsChanging");
		metadata.item("SelectedItemChangedRef", "EventRef::selectedItemChanged");
		metadata.item("SelectedItemsChangedRef", "EventRef::selectedItemsChanged");
		metadata.item("SliceClickRef", "EventRef::sliceClick");
		PieChartBaseDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		PieChartBaseDescriptionMetadata.ensureMetadata(context);
		context.register("PieChartBase", PieChartBaseDescriptionMetadata._metadata);
	}
}


