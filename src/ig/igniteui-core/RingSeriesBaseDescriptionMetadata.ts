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

/**
 * @hidden 
 */
export class RingSeriesBaseDescriptionMetadata extends Base {
	static $t: Type = markType(RingSeriesBaseDescriptionMetadata, 'RingSeriesBaseDescriptionMetadata');
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("LegendRef", "DataRef:String");
		metadata.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
		metadata.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
		metadata.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
		metadata.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
		metadata.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
	}
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (RingSeriesBaseDescriptionMetadata._metadata == null) {
			RingSeriesBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			RingSeriesBaseDescriptionMetadata.fillMetadata(context, RingSeriesBaseDescriptionMetadata._metadata);
			PropertyUpdatedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("DataSourceRef", "(w:ItemsSource,wf:ItemsSource)DataRef::object");
		metadata.item("ValueMemberPath", "String");
		metadata.item("LabelMemberPath", "String");
		metadata.item("LegendLabelMemberPath", "String");
		metadata.item("LabelsPosition", "ExportedType:string:LabelsPosition");
		metadata.item("LeaderLineVisibility", "ExportedType:string:Visibility");
		metadata.item("LeaderLineFill", "(w:LeaderLineStyle.Fill,wf:LeaderLineFill)String");
		metadata.item("LeaderLineStroke", "(w:LeaderLineStyle.Stroke,wf:LeaderLineStroke)String");
		metadata.item("LeaderLineStrokeThickness", "(w:LeaderLineStyle.StrokeThickness,wf:LeaderLineStrokeThickness)Number:double");
		metadata.item("LeaderLineOpacity", "(w:LeaderLineStyle.Opacity,wf:LeaderLineOpacity)Number:double");
		metadata.item("LeaderLineType", "ExportedType:string:LeaderLineType");
		metadata.item("LeaderLineMargin", "Number:double");
		metadata.item("OthersCategoryThreshold", "Number:double");
		metadata.item("OthersCategoryType", "ExportedType:string:OthersCategoryType");
		metadata.item("OthersCategoryText", "String");
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("FormatLegendLabelRef", "(w:FormatLegendLabel,wf:FormatLegendLabel)MethodRef");
		metadata.item("LabelExtent", "Number:double");
		metadata.item("StartAngle", "Number:double");
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
		metadata.item("LabelOuterColor", "Brush");
		metadata.item("LabelInnerColor", "Brush");
		metadata.item("IsSurfaceInteractionDisabled", "Boolean");
		metadata.item("RadiusFactor", "Number:double");
		metadata.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
		RingSeriesBaseDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		RingSeriesBaseDescriptionMetadata.ensureMetadata(context);
		context.register("RingSeriesBase", RingSeriesBaseDescriptionMetadata._metadata);
	}
}


