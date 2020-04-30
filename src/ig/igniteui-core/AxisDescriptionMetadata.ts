/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisRangeChangedEventArgsDescriptionMetadata } from "./AxisRangeChangedEventArgsDescriptionMetadata";
import { RenderRequestedEventArgsDescriptionMetadata } from "./RenderRequestedEventArgsDescriptionMetadata";

/**
 * @hidden 
 */
export class AxisDescriptionMetadata extends Base {
	static $t: Type = markType(AxisDescriptionMetadata, 'AxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AxisDescriptionMetadata._metadata == null) {
			AxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AxisDescriptionMetadata.fillMetadata(context, AxisDescriptionMetadata._metadata);
			AxisRangeChangedEventArgsDescriptionMetadata.register(context);
			RenderRequestedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("Title", "String");
		metadata.item("Stroke", "Brush");
		metadata.item("ActualStroke", "Brush");
		metadata.item("StrokeThickness", "Number:double");
		metadata.item("Strip", "Brush");
		metadata.item("MajorStroke", "Brush");
		metadata.item("ActualMajorStroke", "Brush");
		metadata.item("MajorStrokeThickness", "Number:double");
		metadata.item("MinorStroke", "Brush");
		metadata.item("ActualMinorStroke", "Brush");
		metadata.item("MinorStrokeThickness", "Number:double");
		metadata.item("TickStroke", "Brush");
		metadata.item("TickStrokeThickness", "Number:double");
		metadata.item("TickLength", "Number:double");
		metadata.item("IsDisabled", "Boolean");
		metadata.item("IsInverted", "Boolean");
		metadata.item("UseEnhancedIntervalManagement", "Boolean");
		metadata.item("EnhancedIntervalMinimumCharacters", "Number:int");
		metadata.item("LabelTextColor", "(w:LabelSettings.TextColor,wf:LabelTextColor)Brush");
		metadata.item("LabelLocation", "(w:LabelSettings.Location,wf:LabelLocation)ExportedType:string:AxisLabelsLocation");
		metadata.item("LabelShowFirstLabel", "(w:LabelSettings.ShowFirstLabel,wf:LabelShowFirstLabel)Boolean");
		metadata.item("LabelAngle", "(w:LabelSettings.Angle,wf:LabelAngle)Number:double");
		metadata.item("LabelExtent", "(w:LabelSettings.Extent,wf:LabelExtent)Number:double");
		metadata.item("LabelLeftMargin", "(w:LabelSettings.LeftMargin,wf:LabelLeftMargin)Number:double");
		metadata.item("LabelRightMargin", "(w:LabelSettings.RightMargin,wf:LabelRightMargin)Number:double");
		metadata.item("LabelTopMargin", "(w:LabelSettings.TopMargin,wf:LabelTopMargin)Number:double");
		metadata.item("LabelBottomMargin", "(w:LabelSettings.BottomMargin,wf:LabelBottomMargin)Number:double");
		metadata.item("LabelHorizontalAlignment", "(w:LabelSettings.HorizontalAlignment,wf:LabelHorizontalAlignment)ExportedType:string:HorizontalAlignment");
		metadata.item("LabelVerticalAlignment", "(w:LabelSettings.VerticalAlignment,wf:LabelVerticalAlignment)ExportedType:string:VerticalAlignment");
		metadata.item("CrossingAxisRef", "(w:CrossingAxis,wf:CrossingAxis)DataRef::object");
		metadata.item("CrossingValueRef", "(w:CrossingValue,wf:CrossingValue)DataRef");
		metadata.item("TitlePosition", "(w:TitleSettings.Position,wf:TitlePosition)ExportedType:string:AxisTitlePosition");
		metadata.item("TitleTextColor", "(w:TitleSettings.TextColor,wf:TitleTextColor)Brush");
		metadata.item("TitleLocation", "(w:TitleSettings.Location,wf:TitleLocation)ExportedType:string:AxisLabelsLocation");
		metadata.item("TitleShowFirstLabel", "(w:TitleSettings.ShowFirstLabel,wf:TitleShowFirstLabel)Boolean");
		metadata.item("TitleAngle", "(w:TitleSettings.Angle,wf:TitleAngle)Number:double");
		metadata.item("TitleExtent", "(w:TitleSettings.Extent,wf:TitleExtent)Number:double");
		metadata.item("TitleLeftMargin", "(w:TitleSettings.LeftMargin,wf:TitleLeftMargin)Number:double");
		metadata.item("TitleRightMargin", "(w:TitleSettings.RightMargin,wf:TitleRightMargin)Number:double");
		metadata.item("TitleTopMargin", "(w:TitleSettings.TopMargin,wf:TitleTopMargin)Number:double");
		metadata.item("TitleBottomMargin", "(w:TitleSettings.BottomMargin,wf:TitleBottomMargin)Number:double");
		metadata.item("TitleHorizontalAlignment", "(w:TitleSettings.HorizontalAlignment,wf:TitleHorizontalAlignment)ExportedType:string:HorizontalAlignment");
		metadata.item("TitleVerticalAlignment", "(w:TitleSettings.VerticalAlignment,wf:TitleVerticalAlignment)ExportedType:string:VerticalAlignment");
		metadata.item("CoercionMethodsRef", "(w:CoercionMethods,wf:CoercionMethods)DataRef");
		metadata.item("ExpectFunctions", "Boolean");
		metadata.item("RangeChangedRef", "EventRef::rangeChanged");
		metadata.item("RenderRequestedRef", "EventRef::renderRequested");
		AxisDescriptionMetadata.registerOtherMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		AxisDescriptionMetadata.ensureMetadata(context);
		context.register("Axis", AxisDescriptionMetadata._metadata);
	}
	private static registerOtherMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Label", "(w:Label/AxisLabelTransform)String");
		metadata.item("LabelFontFamily", "(w:LabelSettings.FontFamily/FontFamilyTransform,wf:LabelFontFamily,web:LabelTextStyle/FontFamilyTransform)String");
		metadata.item("LabelFontSize", "(w:LabelSettings.FontSize,wf:LabelFontSize,web:LabelTextStyle/FontSizeTransform)Number:double");
		metadata.item("LabelFontStyle", "(w:LabelSettings.FontStyle/FontStyleTransform,wf:LabelTextStyle/FontStyleTransform,web:LabelTextStyle/FontStyleTransform)String");
		metadata.item("LabelFontWeight", "(w:LabelSettings.FontWeight/FontWeightTransform,wf:LabelTextStyle/FontWeightTransform,web:LabelTextStyle/FontWeightTransform)String");
		metadata.item("TitleFontFamily", "(w:TitleSettings.FontFamily/FontFamilyTransform,wf:TitleFontFamily,web:TitleTextStyle/FontFamilyTransform)String");
		metadata.item("TitleFontSize", "(w:TitleSettings.FontSize,wf:TitleFontSize,web:TitleTextStyle/FontSizeTransform)Number:double");
		metadata.item("TitleFontStyle", "(w:TitleSettings.FontStyle/FontStyleTransform,wf:TitleTextStyle/FontStyleTransform,web:TitleTextStyle/FontStyleTransform)String");
		metadata.item("TitleFontWeight", "(w:TitleSettings.FontWeight/FontWeightTransform,wf:TitleTextStyle/FontWeightTransform,web:TitleTextStyle/FontWeightTransform)String");
		metadata.item("LabelVisibility", "(w:LabelSettings.Visibility,wf:LabelsVisible/VisibilityToBooleanTransform)ExportedType:string:Visibility");
	}
}


